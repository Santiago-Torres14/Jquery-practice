$(document).ready(function(){

    // $('#btn1').click(function(){
    //     alert('Button clicked')
    // });

    $('#btn1').on('click', function(){
        var paragraph = $('.para1');
        paragraph.hide();
    });

    $('#btn2').on('click', function(){
        var paragraph = $('.para1');
        paragraph.show();
    })

    $('#btn3').on('click', function(){
        var paragraph = $('.para1');
        paragraph.toggle();
    })

    $('#btn11').dblclick(function(){
        var paragraph = $('.para2');
        paragraph.toggle();
    });

    $('#btn21').hover(function(){
        var paragraph = $('.para2');
        paragraph.toggle();
    });

    // $('#btn21').on('mouseenter',function(){
    //     var paragraph = $('.para2');
    //     paragraph.toggle();
    // });

    // $('#btn21').on('mouseleave',function(){
    //     var paragraph = $('.para2');
    //     paragraph.toggle();
    // });

    $('#btn31').mousemove(function(){
        var paragraph = $('.para2');
        paragraph.toggle();
    });

    $('#btn12').click(function(e){
        console.log(e.currentTarget.id);
        console.log(e.currentTarget.innerText);
    });

    // $(document).on('mousemove', function(e){
    //     console.log(`coords Y: ${e.clientY} X: ${e.clientX}`)
    // });

    $(document).on('mousemove', function(e){
        $('#coordh').html(`coords Y: ${e.clientY} X: ${e.clientX}`)
    });

    $('input').focus(function(){
        $(this).css('background', 'pink');
    });

    $('input').blur(function(){
        $(this).css('background', 'white');
    });

    // $('input').keyup(function(e){
    //     console.log(e.target.value);
    // });

    $('select#gender').change(function(e){
        alert(e.target.value)
    });

    $('#form').submit(function(e){
        e.preventDefault();
        var name = $('input#name').val()
        console.log(name);
    });

});

