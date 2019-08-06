/* funcao para mostrar e esconder o menu */
var abreMenu = true;
$(document).on('click','.btnMenu',function(){
 if(abreMenu){
    $('#menu_options').css('width','95%');
    $('#menu_options ul').delay(800).fadeIn();
   abreMenu = false;
 }else{
   $('#menu_options ul').fadeOut('slow',function(){
     $('#menu_options').css('width','0%');
   });
   abreMenu = true;
 }
});

$(document).on('click','#btnVibrar',function(){
  navigator.vibrate(2000);
});

function redireciona(redir){
  $(location).attr("href","https://"+redir);
}

$(document).on('click','#btnCodigo',function(){
  cordova.plugins.barcodeScanner.scan(
      function (result) {
        redireciona(result.text);
          // alert("olha isso: \n" +
          //       "Resultado: " + result.text + "\n" +
          //       "Formato: " + result.format + "\n" +
          //       "Cancelado: " + result.cancelled);
      },
      function (error) {
          alert("Falha no erro: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "CODE_39, QR_CODE", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
});

$(document).ready(function(){
  $.ajax({
    url:'http://jdc.profrodolfo.com.br/getLista.php',
    dataType: 'json',
    type: 'post',
    success: function(json){
      console.log(json);
      console.log(json[0]['nome']);
      for(var i = 0;i < json.length; i++){
        $('#opcoes').append("<li>"+json[i]["nome"]+"</li>");
      }
    },
    error: function(e) {
        
    }
  });
});