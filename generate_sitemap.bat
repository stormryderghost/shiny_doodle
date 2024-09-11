@echo off
setlocal enabledelayedexpansion

set "output_file=sitemap.html"
set "root_path=C:\Users\Aarons\Documents\GitHub\shiny_doodle"

rem Create the HTML file with the header content
echo ^<!DOCTYPE html^> > "%root_path%\%output_file%"
echo ^<html lang="en"^> >> "%root_path%\%output_file%"
echo ^<head^> >> "%root_path%\%output_file%"
echo     ^<meta charset="UTF-8"^> >> "%root_path%\%output_file%"
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^> >> "%root_path%\%output_file%"
echo     ^<title>Sitemap - Shiny Doodle^</title^> >> "%root_path%\%output_file%"
echo     ^<style^> >> "%root_path%\%output_file%"
echo         body { font-family: Arial, sans-serif; margin: 20px; background-color: #f4f4f4; color: #333; } >> "%root_path%\%output_file%"
echo         h1 { color: #2a9d8f; } >> "%root_path%\%output_file%"
echo         ul { list-style-type: none; padding: 0; } >> "%root_path%\%output_file%"
echo         li { margin: 5px 0; } >> "%root_path%\%output_file%"
echo         a { color: #2a9d8f; text-decoration: none; } >> "%root_path%\%output_file%"
echo         a:hover { text-decoration: underline; } >> "%root_path%\%output_file%"
echo     ^</style^> >> "%root_path%\%output_file%"
echo ^</head^> >> "%root_path%\%output_file%"
echo ^<body^> >> "%root_path%\%output_file%"
echo     ^<h1>Sitemap^</h1^> >> "%root_path%\%output_file%"
echo     ^<ul^> >> "%root_path%\%output_file%"

rem Iterate over HTML files and append them to the sitemap
for /r "%root_path%" %%f in (*.html) do (
    set "file_path=%%f"
    set "relative_path=!file_path:%root_path%=!"
    set "relative_path=!relative_path:\=/!"
    echo         ^<li^>^<a href="!relative_path!^">!relative_path:.html=^</a^>^</li^> >> "%root_path%\%output_file%"
)

rem Finish the HTML file
echo     ^</ul^> >> "%root_path%\%output_file%"
echo ^</body^> >> "%root_path%\%output_file%"
echo ^</html^> >> "%root_path%\%output_file%"

echo Sitemap generated: %root_path%\%output_file%
