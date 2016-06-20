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
          console.log("ok");
          self.popup("close");


        },
        cancel: function(e, self) {
          e.preventDefault();
          console.log("cancel");
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
          console.log("ok");
          self.popup("close");


        },
        cancel: function(e, self) {
          e.preventDefault();
          console.log("cancel");
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
      // $this.addClass("ui-popup-container");
      // $this.addClass("pop");
      // $this.addClass("in");
      // $this.addClass("ui-popup-active");





      for(var i = 0 ; i < options.pages.length ; i++){
        console.log(options.pages[i]);

        var obj = {
          "$dialog": $('<div class="popup ui-popup-container pop in in ui-popup-active disappear"></div>'),
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


        if( i == options.pages.length - 1){
          console.log("!!")

           /* button event 등록 */
          obj.$dialogOkButton.on("click", function() {

            if (options.footer.ok !== null && typeof options.footer.ok == "function") {
              result = options.footer.ok(event, $this);
            }
            return result;
          });

          obj.$dialogCancelButton.on("click", function() {
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

          obj.$dialog.removeClass('disappear');

          obj.$dialogNextButton.on("click", function() {

            var $parentThis = $(this).parents('.ui-popup-container');
            $parentThis.addClass('disappear');
            $parentThis.next().removeClass('disappear');
          });

          obj.$dialogFooter.append(obj.$dialogNextButton);
        }
        else{

          obj.$dialogPrevButton.on("click", function() {

            var $parentThis = $(this).parents('.ui-popup-container');

            $parentThis.addClass('disappear');
            $parentThis.prev().removeClass('disappear');

          });

          obj.$dialogNextButton.on("click", function() {

            var $parentThis = $(this).parents('.ui-popup-container');
            $parentThis.addClass('disappear');
            $parentThis.next().removeClass('disappear');
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
