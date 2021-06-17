$(document).ready(function(){
    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(); // You can pass arguments so it can go faster or slower
        
        // You can also set a function to do something after the event is called
        $('#box').fadeOut(function(){
            $('#btnFadeOut').text("it's gone");
        });
    });

    $('#btnFadeIn').click(function(){
        $('#box').fadeIn();

        $('#box').fadeIn(function(){
            $('#btnFadeIn').html("it's back");
        });
    });

    $('#btnFadeTog').click(function(){
        $('#box').fadeToggle();
    });

    $('#btnSlideUp').click(function(){
        $('#box').slideUp();
    });

    $('#btnSlideDown').click(function(){
        $('#box').slideDown();
    });

    $('#btnSlideTog').hover(function(){
        $('#box').slideToggle();
    });

    $('#moveRight').click(function(){
        $('#box2').animate({
            left: 500,
            height: '100px'
        })
    });

    $('#moveLeft').click(function(){
        $('#box2').animate({
            left: 0,
            height: '300px'
        })
    });

    $('#moveAround').click(function(){
        var box2 = $('#box2');
        box2.animate({
            left: 300
        });
        box2.animate({
            top: 300
        });
        box2.animate({
            left: 0
        });
        box2.animate({
            top:0
        })
    });
});