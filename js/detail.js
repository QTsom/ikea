$(document).ready(function(){
    detailTab();
});

function detailTab(){
    $('section[class^="detail"] > div.topArea > div.firstDiv ul li img').click(function(){
        var images = $(this).attr('src');
        $('section[class^="detail"] > div.topArea > div.firstDiv > img').attr('src',images);
        $('section[class^="detail"] > div.topArea > div.firstDiv ul li img').css({'border':'none' , 'box-sizing':'border-box'});
        $(this).css({'border': '1px solid #777', 'box-sizing':'border-box'});
    });
}