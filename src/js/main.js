function consent() {
  const instance = ackeeTracker.create('https://analytics.zacharyc.site', {
    detailed: true
  });
  instance.record('133c9354-5976-48e5-803f-809c8aeeda11');
}
function noConsent() {
  const instance = ackeeTracker.create('https://analytics.zacharyc.site', {
    detailed: false
  });
  instance.record('133c9354-5976-48e5-803f-809c8aeeda11');
}
function acceptCookies() {
  localStorage.setItem('cookies', true);
  consent();
  document.getElementById('cookie-consent').style.display = 'none';
}
function declineCookies() {
  localStorage.setItem('cookies', false);
  noConsent();
  document.getElementById('cookie-consent').style.display = 'none';
}

window.onload = function onload() {
  if (localStorage.getItem('cookies') == 'true') {
    consent();
  } else {
    noConsent();
  }
};
