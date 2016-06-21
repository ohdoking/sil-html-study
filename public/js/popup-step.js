$(document).ready(function() {

  $('#appear').on("click", function() {
    $(this).next('.popupList').popup("open", {
      pages : [
        {
          title: "title",
          content: "content text"
        },
        {
          title: "title2",
          content: "content text2"
        },
        {
          title: "title3",
          content: "content text3"
        },
      ],
      footer: {
        ok: function(e, self) {
          e.preventDefault();
          self.popup("close");


        },
        cancel: function(e, self) {
          e.preventDefault();
          self.popup("close");
        }
      }
    });
  });

  $('#appear2').on("click", function() {
    $(this).next('.popupList').popup("open", {
      pages : [
        {
          title: "title4",
          content: "content text4"
        },
        {
          title: "title5",
          content: "content text5"
        },
        {
          title: "title6",
          content: "content text6"
        },
      ],
      footer: {
        ok: function(e, self) {
          e.preventDefault();
          self.popup("close");


        },
        cancel: function(e, self) {
          e.preventDefault();
          self.popup("close");
        }
      }
    });
  });

});




$.fn.popup = function(action, options) {
  var defaults = {
    pages : [
      {
        title: "",
        content: "",
      }
    ],
    width: 400,
    height: 400
  };
  options = $.extend(defaults, options);
  $this = $(this);
  var elem = {
    "$container": $('body'),
    "$dialogBackground": $('<div class="ui-popup-screen ui-overlay-block in" id="popupDialog-screen"></div>'),
  };

  if (action === "open") {


    this.each(function() {

      $this.before(elem.$dialogBackground);

      elem.$dialogBackground.css('z-index',(options.pages.length * 2) - 2)
      for(var i = 0 ; i < options.pages.length ; i++){
        console.log(options.pages[i]);

        var index = ((options.pages.length-i) * 2) - 1;

        //매번 생성해주기위해 객체를 for 문 내부에 넣음
        var obj = {
          "$dialog": $('<div class="popup ui-popup-container pop in in ui-popup-active" data-index = '+ index +'></div>'),
          "$dialogBody": $('<div role="popup" class="popupDialog ui-popup ui-body-b ui-corner-all">'),
          "$dialogHeader": $('<div role="heading" class="ui-header"><h1 class="ui-title" class="popup-header"></h1></div>'),
          "$dialogContent": $('<div role="main" class="ui-content"><p class="popup-content"></p></div>'),
          "$dialogFooter": $('<div role="footer" class="ui-footer"></div>'),
          "$dialogPrevButton": $('<a href="#" class="ui-btn ui-corner-all ui-btn-cancel">Prev</a>'),
          "$dialogNextButton": $('<a href="#" class="ui-btn ui-corner-all">Next</a>'),
          "$dialogOkButton": $('<a href="#" class="ui-btn ui-corner-all">OK</a>'),
          "$dialogCancelButton": $('<a href="#" class="ui-btn ui-corner-all ui-btn-cancel">Cancel</a>'),
        }


        obj.$dialog.css("width", options.width);
        obj.$dialog.css("height", options.height);
        obj.$dialog.css("z-index", index);
        //가운대 정렬

        obj.$dialog.css("left", (elem.$container.width() - options.width) / 2);
        obj.$dialog.css("top", (elem.$container.height() - options.height) / 2);

        $this.append(obj.$dialog);

        //css 설정
        obj.$dialogBody.css("width", options.width);
        obj.$dialogBody.css("height", options.height);
        obj.$dialogFooter.css("width", options.width);


        obj.$dialog.append(obj.$dialogBody);


        /* text 입력 */
        obj.$dialogHeader.text(options.pages[i].title);
        obj.$dialogContent.text(options.pages[i].content);

        // drag event
        obj.$dialogHeader.mousedown(function(event) {
          // $(this).parents('.ui-popup-container').css('position','absolute')
          $(this).parents('.ui-popup-container').css('left',event.pageX - event.offsetX)
          $(this).parents('.ui-popup-container').css('top',event.pageY - event.offsetY)

          var start_x = 0;
          var start_y = 0;

          console.log(start_x,start_y)
          $(this).mousemove(function( event ) {

            if( start_x !=0){
              // 이전 위치에서 현재위치로 마우스가 이동한만큼 부모를 움직여줌
              $(this).parents('.ui-popup-container').css('left',(event.pageX - event.offsetX) - (start_x - event.pageX))
              $(this).parents('.ui-popup-container').css('top',(event.pageY - event.offsetY) - (start_y - event.pageY))
            }

            start_x = event.pageX;
            start_y = event.pageY;
          });

          //mouseup 시에 mousemove event off
          $(this).one('mouseup', function() {
            $(this).off("mousemove");
            console.log("!!!")
          });

          return false;


        });


        // button 위치
        if( i == options.pages.length - 1){

           /* button event 등록 */
          obj.$dialogOkButton.on("click", function() {

            console.log("ok");
            if (options.footer.ok !== null && typeof options.footer.ok == "function") {
              result = options.footer.ok(event, $this);
            }
            return result;
          });

          obj.$dialogCancelButton.on("click", function() {

            console.log("cancel");
            if (options.footer.cancel !== null && typeof options.footer.cancel == "function") {
              result = options.footer.cancel(event, $this);
            }
            return result;
          });

          /* elemnet 구성*/
          obj.$dialogFooter.append(obj.$dialogOkButton);
          obj.$dialogFooter.append(obj.$dialogCancelButton);
        }
        else if(i == 0){


          obj.$dialogNextButton.on("click", function() {

            var $parentThis = $(this).parents('.ui-popup-container');
            var parentzIndex = $parentThis.css('z-index');
            console.log(parentzIndex)
            $parentThis.css('z-index',-(parentzIndex));

            elem.$dialogBackground.css('z-index',parentzIndex-2);
          });

          obj.$dialogFooter.append(obj.$dialogNextButton);
        }
        else{


          obj.$dialogPrevButton.on("click", function() {

            var $parentThis = $(this).parents('.ui-popup-container');
            var parentzIndex = $parentThis.prev().css('z-index');

            $parentThis.prev().css('z-index',-(parentzIndex));
            elem.$dialogBackground.css('z-index',parentzIndex+2);


          });

          obj.$dialogNextButton.on("click", function() {

            var $parentThis = $(this).parents('.ui-popup-container');
            var parentzIndex = $parentThis.css('z-index');
            console.log(parentzIndex)
            $parentThis.css('z-index',-(parentzIndex));
            elem.$dialogBackground.css('z-index',parentzIndex-2);


          });

          obj.$dialogFooter.append(obj.$dialogPrevButton);
          obj.$dialogFooter.append(obj.$dialogNextButton);
        }

        obj.$dialogBody.append(obj.$dialogHeader);
        obj.$dialogBody.append(obj.$dialogContent);
        obj.$dialogBody.append(obj.$dialogFooter);
      }
    });

    return this;
  }

  if (action === "close") {
    $this.prev().remove();
    $this.empty();
    $this.removeAttr('class style');
    $this.addClass('popupList');
  }




}
