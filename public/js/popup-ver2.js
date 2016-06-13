$(document).ready(function() {


  $('#appear').on("click", function() {
    $(this).next('.popupDialog').popup("open", {
      title: "title",
      content: "content text",
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
    $(this).next('.popupDialog').popup("open", {
      title: "title1111",
      content: "content text111",
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


  $('#appear3').on("click", function() {
    $(this).next('.popupDialog').popup("open", {
      width: 300,
      height: 800,
      title: "titl222e",
      content: "content text222",
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
    width: 400,
    height: 400,
    title: "",
    content: "",
  };
  options = $.extend(defaults, options);
  $this = $(this);
  var elem = {
    "$container": $('body'),
    "$dialogBackground": $('<div class="ui-popup-screen ui-overlay-block in" id="popupDialog-screen"></div>'),
    "$dialog": $('<div id="popupDialog" class="ui-popup-container ui-overlay-shadow ui-corner-all"></div>'),
    "$dialogBody": $('<div role="popup" id="popupDialog" class="ui-popup ui-body-b ui-corner-all">'),
    "$dialogHeader": $('<div role="heading" class="ui-header"><h1 class="ui-title" id="popup-header"></h1></div>'),
    "$dialogContent": $('<div role="main" class="ui-content"><p id="popup-content"></p></div>'),
    "$dialogFooter": $('<div role="footer" class="ui-footer"></div>'),
    "$dialogOkButton": $('<a href="#" class="ui-btn ui-corner-all">OK</a>'),
    "$dialogCancelButton": $('<a href="#" class="ui-btn ui-corner-all ui-btn-cancel">Cancel</a>'),
  };

  if (action === "open") {


    this.each(function() {

      $this.before(elem.$dialogBackground);
      $this.addClass("ui-popup-container");
      $this.addClass("pop");
      $this.addClass("in");
      $this.addClass("ui-popup-active");

      //css 설정    
      $this.css("width", options.width);
      $this.css("height", options.height);
      elem.$dialogBody.css("width", options.width);
      elem.$dialogBody.css("height", options.height);
      elem.$dialogFooter.css("width", options.width);

      //가운대 정렬
      $this.css("left", (elem.$container.width() - $this.width()) / 2);
      $this.css("top", (elem.$container.height() - $this.height()) / 2)
      $this.append(elem.$dialogBody);


      /*text 입력*/
      elem.$dialogHeader.text(options.title);
      elem.$dialogContent.text(options.content);


      /* button event 등록 */
      elem.$dialogOkButton.on("click", function() {

        if (options.footer.ok !== null && typeof options.footer.ok == "function") {
          result = options.footer.ok(event, $this);
        }
        return result;
      });

      elem.$dialogCancelButton.on("click", function() {
        if (options.footer.cancel !== null && typeof options.footer.cancel == "function") {
          result = options.footer.cancel(event, $this);
        }
        return result;
      });


      /* elemnet 구성*/
      elem.$dialogFooter.append(elem.$dialogOkButton);
      elem.$dialogFooter.append(elem.$dialogCancelButton);
      elem.$dialogBody.append(elem.$dialogHeader);
      elem.$dialogBody.append(elem.$dialogContent);
      elem.$dialogBody.append(elem.$dialogFooter);


    });

    return this;
  }

  if (action === "close") {
    $this.prev().remove();
    $this.empty();
    $this.removeAttr('class style');
    $this.addClass('popupDialog');  
  }

}
