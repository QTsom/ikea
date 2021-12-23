$(document).ready(function(){
    allClick();
});

function allClick(){
    $('#term_all').click(function(){
        $('.term').prop('checked',this.checked);
    })
}