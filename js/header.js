

$(document).ready(function(){
    btn();
    menu();
});

function btn(){
    $('.btnOpen').click(function(){
        $('header div > form fieldset').addClass('active');
    });
    $('.btnClose').click(function(){
        $('header div > form fieldset').removeClass('active');
    });
}
function menu(){
    $('.menuOpen').click(function(){
        $('header > div nav').toggleClass('active');
    });
}