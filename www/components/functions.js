// This is a JavaScript file
$(document).on('click','#alerta',function(){
  navigator.notification.alert("Voce tem "+qtdMsg+" Mensagens");
  navigator.notification.beep(2);
  navigator.vibrate([1000, 500, 1000, 500, 1000]);
});
