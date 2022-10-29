function consentGranted() {
  var s = document.createElement('script');
  s.setAttribute('src',"https://analytics.zacharyc.site/tracker.js");
  s.setAttribute('data-ackee-server',"https://analytics.zacharyc.site");
  s.setAttribute('data-ackee-domain-id',"133c9354-5976-48e5-803f-809c8aeeda11");
  document.body.appendChild(s);
}
function acceptCookies() {
  localStorage.setItem('cookies', true);
  consentGranted();
  document.getElementById('cookie-consent').style.display = 'none';
}
function declineCookies() {
  localStorage.setItem('cookies', false);
  document.getElementById('cookie-consent').style.display = 'none';
}

window.onload = function onload() {
  if (localStorage.getItem('cookies') == 'true') {
    consentGranted();
  } else {
    document.getElementById('cookie-consent').style.display = '';
  }
};
