function acceptTracking() {
  localStorage.setItem('consent', true);
  document.getElementById('consent').style.display = 'none';
  const instance = ackeeTracker.create('https://analytics.zacharyc.site', {detailed: true});
  instance.record('133c9354-5976-48e5-803f-809c8aeeda11');
}
function rejectTracking() {
  localStorage.setItem('consent', false);
  document.getElementById('consent').style.display = 'none';
}

window.onload = function onload() {
  if (localStorage.getItem('consent') == 'true') {
    const instance = ackeeTracker.create('https://analytics.zacharyc.site', {detailed: true});
    instance.record('133c9354-5976-48e5-803f-809c8aeeda11');
  } else {
    document.getElementById('consent').style.display = '';
  }
};
