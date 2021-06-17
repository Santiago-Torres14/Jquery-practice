$(document).ready(function(){
    $('p.para1').css({color:'red',
                    background: '#ccc'});
    var para2 = $('p.para2')

    // para2.addClass('myClass');
    // $('p.para2').removeClass('myClass');

    $('#btn1').on('click', function(){
        para2.toggleClass('myClass');
    });

    // $('#myDiv').html('Hello world');
    $('#myDiv').html('<h3>Hello world</h3>');

    // alert($('#myDiv').text());

    // $('ul').append('<li>Appended list item</li>');
    // $('ul').prepend('<li>prended list item</li>');

    // $('.para1').appendTo('.para2');
    // $('.para1').prependTo('.para2');

    // $('ul').before('<h4>Hello</h4>');
    // $('ul').after('<h4>World</h4>');

    // $('ul').empty();
    // $('ul').detach();

    $('#lgo').attr('target', '_blank');

    // $('p').wrap('<h1>');
    // $('p').wrapAll('<h1>');

    $('#newItem').on('keyup',function(e){
        var code = e.which;
        if(code == 13){
            e.preventDefault();
            $('ul').append(`<li>${e.target.value}</li>`)
        }
    });

    var myArr = ['Brad', 'Kelley', 'Nate', 'Jose']

    $.each(myArr, function(i, val){
        $('#users').append(`<li>${val}</li>`)
    });


    var newArray = $('#array').toArray()
    newArray.forEach(element => {
        console.log(element.innerText)
    });
});