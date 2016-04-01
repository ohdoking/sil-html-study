$( document ).ready(function() {
  $(document).on('keydown', function(e) {
    var keyCode = e.keyCode || e.which;

    $navigationList = $('.navigation-list');


    if (keyCode == 9) {

     if($(event.target).hasClass('current-navigation')){
        $navigationList.css("opacity","1");
        $navigationList.css("max-width","300%");
        $navigationList.css("max-height","23.125rem");
        $navigationList.css("margin-top","0");
      }
      else{
        $navigationList.css("opacity","0");
        $navigationList.css("max-height","0");
        $navigationList.css("max-width","0");
        $navigationList.css("max-width","0");
      }

    }
  });
});