// This is a JavaScript file
function onConfirm(buttonIndex){
  if(buttonIndex == 1){
    navigator.notification.alert("Ação finalizada com sucesso");
  }else{
    navigator.notification.alert("Ação cancelada com sucesso");
  }
}
$(document).on('click','#alerta',function(){
  navigator.notification.confirm(
    "",
    onConfirm,
    'Deseja confirmar?',
    ['Sim','Não']
  );
  navigator.notification.beep(2);
});
