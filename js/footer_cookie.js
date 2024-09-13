(function($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = 'EMAIL'; ftypes[0] = 'email';
    fnames[1] = 'FNAME'; ftypes[1] = 'text';
    fnames[2] = 'LNAME'; ftypes[2] = 'text';
    fnames[3] = 'ADDRESS'; ftypes[3] = 'address';
    fnames[4] = 'PHONE'; ftypes[4] = 'phone';
    fnames[5] = 'BIRTHDAY'; ftypes[5] = 'birthday';
    fnames[6] = 'COMPANY'; ftypes[6] = 'text';
    fnames[7] = 'MMERGE7'; ftypes[7] = 'url';
  }(jQuery));
  var $mcj = jQuery.noConflict(true);


  document.addEventListener('DOMContentLoaded', function() {
    var consentPopup = document.querySelector('.cookie-consent');
    var consentBtn = document.querySelector('.cookie-consent .button');
    var consentGiven = localStorage.getItem('cookieConsent');

    if (!consentGiven) {
      consentPopup.style.display = 'flex'; // Ensure this matches your CSS
    }

    consentBtn.addEventListener('click', function() {
      consentPopup.style.display = 'none';
      localStorage.setItem('cookieConsent', 'true');
    });
  });

