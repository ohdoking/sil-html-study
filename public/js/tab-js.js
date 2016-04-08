$( document ).ready(function() {
  tabMoveEvent();
});

/**
 * tab 이동 이벤트
 * @return {[type]} [description]
 */
function tabMoveEvent(){
  $(".navigation").on("click","span",function(){

    var tabId = $( this ).attr('id');
    var $tabContent = $(".tab-content");

    $(".tab-content").addClass("hide");
    $(".current-navigation").removeClass("active");

    $( this ).addClass("active");

    if(tabId == "content1-tab"){
      $("#content1").removeClass("hide");
    }
    else if(tabId == "content2-tab"){
      $("#content2").removeClass("hide");
    }
    else if(tabId == "content3-tab"){
      $("#content3").removeClass("hide");
    }
    else if(tabId == "content4-tab"){
      $("#content4").removeClass("hide");
    }

  })
}

