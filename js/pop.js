var popOpen = null;
var popClose = null;
var popTarget = null;

$(document).ready(function(){
    init();
    popupControl(popOpen,popClose,popTarget);
    // ! popOpen => callPopup을 click 했을 때 popup대상이름을 불러와서 변수에 담아.
    // ! 그 대상이 곧 = popup 변수가 됨.
});
function init(){
    popOpen = $('.callPopup');
    popClose = $('.pop_close');
    popTarget = $('.popup');
}
function popupControl(popOpen,popClose,popTarget){
    $(popOpen).click(function(){
        var activePopName =  $(this).attr('data-popName');
        $("#" + activePopName).addClass('active');
        $(popTarget).css({
            "top": (($(window).height()-$(popTarget).outerHeight())/2+$(window).scrollTop())+"px"
        });
        $("body").css("overflow","hidden");
    });
    $(popClose).click(function(){
        $(popTarget).removeClass('active');
        $("body").css("overflow","auto");
    });
}