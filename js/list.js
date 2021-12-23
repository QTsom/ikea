$(document).ready(function(){
    newTab();
});

function newTab(){
    $('section.list_newAllvals ol li button').click(function(){
        var activeTab = $(this).attr('data-tabNumb');
        $('section.list_newAllvals ol li button').removeClass('active');
        $(this).addClass('active');

        $('section.list_newAllvals ul').removeClass('active');
        $('#'+activeTab).addClass('active');
    });
}