$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.slider').slider({
        fullWidth: true,
        indicators: true
      });
      $('.parallax').parallax();
      $('.myreviews').carousel({
        numVisible:7,
        shift:55,
        padding:55

      });
  });

  function toggelModal()
  {
      var instance=M.Modal.getInstance($('#modal3'));
      instance.open();
  }