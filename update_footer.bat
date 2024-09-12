@echo off
setlocal enabledelayedexpansion

:: Paths
set "FOOTER_FILE=C:\Users\Aarons\Documents\GitHub\shiny_doodle\footer.html"
set "HTML_DIR=C:\Users\Aarons\Documents\GitHub\shiny_doodle"
set "LOG_FILE=C:\Users\Aarons\Documents\GitHub\shiny_doodle\update_footer.log"

:: Create a temporary directory
set "TEMP_DIR=%TEMP%\footer_update"
if exist "%TEMP_DIR%" rd /s /q "%TEMP_DIR%"
mkdir "%TEMP_DIR%"

:: Clear log file
echo Updating footers... > "%LOG_FILE%"

:: Check if the footer file exists
if not exist "%FOOTER_FILE%" (
    echo Footer file not found: %FOOTER_FILE% >> "%LOG_FILE%"
    exit /b 1
)

:: Read the new footer content
set "FOOTER_CONTENT="
for /f "usebackq delims=" %%A in ("%FOOTER_FILE%") do (
    set "FOOTER_CONTENT=!FOOTER_CONTENT!%%A\n"
)

:: Process each HTML file
for /r "%HTML_DIR%" %%F in (*.html) do (
    set "INPUT_FILE=%%F"
    set "TEMP_FILE=%TEMP_DIR%\%%~nxF"

    echo Processing file: %%F >> "%LOG_FILE%"

    if not exist "%%F" (
        echo File not found: %%F >> "%LOG_FILE%"
        continue
    )

    (
        set "HEADER_DONE=0"
        for /f "usebackq delims=" %%A in ("%%F") do (
            set "LINE=%%A"
            
            :: Replace existing footer content
            echo !LINE! | findstr /r /c:"<!-- Footer -->" >nul
            if !errorlevel! == 0 (
                echo !FOOTER_CONTENT!
                set "HEADER_DONE=1"
                continue
            )
            echo !LINE! | findstr /r /c:"<!-- End Footer -->" >nul
            if !errorlevel! == 0 (
                continue
            )

            :: Print the line
            echo !LINE!
        )

        :: Add the footer before </body> if not already added
        if !HEADER_DONE! == 0 (
            echo !FOOTER_CONTENT!
        )
    ) > "%TEMP_FILE%"

    :: Replace the original file with the updated one
    move /y "%TEMP_FILE%" "%%F" >> "%LOG_FILE%" 2>&1
)

:: Clean up
rd /s /q "%TEMP_DIR%"

echo Footers updated successfully. >> "%LOG_FILE%"
