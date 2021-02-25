
var originalAlert = alert;
window.alert = function(msg) {
   console.log('alert');
   originalAlert(msg);
}

alert('Skrypt działa prawidłowo!');