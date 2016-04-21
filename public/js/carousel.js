function Carousel(element, options) {
    var self = this;
}


$.fn.carousel = function(value) {
    var self = this;

    //rotation speed and timer
    var speed = 5000;
    var $carouselList = $(self).find('.carousel-list');
    var $li = $(self).find('.carousel-list li');
    var $ul = $(self).find('.carousel-list ul');
    var $img = $(self).find('.carousel-list li img');
    var $prev = $(self).find('a.prev');
    var $next = $(self).find('a.next');

    var run = setInterval(function() {
        $next.click();
    }, speed);


    //grab the width and calculate left value
    var item_width = $(this).outerWidth();

    var left_value = item_width * (-1);

    $carouselList.css({ 'width': item_width + 'px' });
    $ul.css({ 'width': item_width * $li.length + 'px' });
    $ul.css({ 'left': left_value });
    $img.css({ 'width': item_width + 'px' });

    //move the last item before first item, just in case user click prev button
    $(self).find('.carousel-list li:first').before($(self).find('.carousel-list li:last'));

    //if user clicked on prev button
    $prev.click(function() {
        //get the right position
        var left_indent = parseInt($ul.css('left')) + item_width;
        $ul.animate({ 'left': left_indent }, 400, function() {
            $(self).find('.carousel-list li:first').before($(self).find('.carousel-list li:last'));
            $ul.css({ 'left': left_value });
        });
        return false;
    });


    //if user clicked on next button
    $next.click(function() {
        //get the right position
        var left_indent = parseInt($ul.css('left')) - item_width;
        $ul.animate({ 'left': left_indent }, 400, function() {
            $(self).find('.carousel-list li:last').after($(self).find('.carousel-list li:first'));
            $ul.css({ 'left': left_value });
        });
        return false;
    });

    //if mouse hover, pause the auto rotation, otherwise rotate it
    /*$('.carousel-list').hover(

        function() {
            clearInterval(run);
        },
        function() {
            run = setInterval(function() {
                $('#next').click();
            }, speed);
        }
    );*/

    return self;
}

$(document).ready(function() {
    $('.carousel').carousel();
    $('.carousel2').carousel();




});

//a simple function to click next link
//a timer will call this function, and the rotation will begin :)
