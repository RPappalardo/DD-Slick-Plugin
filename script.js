  //Make it slick!
  $('#make-it-slick').on('click', function(){
      $('#demo-htmlselect').ddslick();
  });
  //Restore Original
  $('#restore').on('click', function(){
      $('#demo-htmlselect').ddslick('destroy');
  });
