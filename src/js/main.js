function consentGranted() {
  document.getElementById('ackee').setAttribute('data-ackee-opts','{detailed: true}');
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
  }
};
