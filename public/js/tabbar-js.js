$( document ).ready(function() {
  $navigationList = $('.navigation-list');
  $currentNavigation = $('.current-navigation');

  $navigationList.css("opacity","0");
  $navigationList.css("width","100px");
  $navigationList.css("background-color","#DADADA");
  $navigationList.css("transition","all .4s");
  $navigationList.css("max-height","0");
  $navigationList.css("min-width","0");
  $navigationList.css("max-width","0");
  $navigationList.css("left","0");
  $navigationList.css("display","block");
  $navigationList.css("margin-top","6rem");
  $navigationList.css("padding",".75rem .75rem .75rem 0");

  $currentNavigation.hover(function(){
    $navigationList.css("opacity","1");
    $navigationList.css("max-width","300%");
    $navigationList.css("max-height","23.125rem");
    $navigationList.css("margin-top","0");
  }, function() {
    $navigationList.css("opacity","0");
    $navigationList.css("max-height","0");
    $navigationList.css("max-width","0");
    $navigationList.css("max-width","0");
  })
});