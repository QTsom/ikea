$(document).ready(function(){
    allDelete();
    openEmpty();
    countUpDown();
});

function allDelete(){
    $('#check_all').click(function(){
        $('#check').prop('checked',this.checked);
    })
}

function openEmpty(){
    $('.openEmpty').click(function(){
        $('section.emptyBasketContents').addClass('active');
        $('section.fullBasketContents').addClass('active');
    });
}

function countUpDown(){
    var count = 1;
    var countContainer, countField, priceBase;

    $(".plus").click(function(){
        countContainer = $('.fullBasketContents');
        countField = countContainer.find(".count");
        priceBase = countContainer.find(".price").attr("value");
        if(count < 99){
            ++count;
        }else if(count == 99){
            alert('최대수량 99');
            count = 99;
        }
        countOutput(count, countField);
        price(count, countContainer, priceBase);
    });
    $(".minus").click(function(){
        countContainer = $('.fullBasketContents');
        countField = countContainer.find(".count");
        priceBase = countContainer.find(".price").attr("value");
        if(count > 1){
            count--;
        }else if(count == 1){
            alert('최소수량 1');
            count = 1;
        }
        countOutput(count, countField);
        price(count, countContainer, priceBase);
    });
    $(".btn_Reset").click(function(){
        count = 1;
        countField.val(count);
        countContainer.find(".price").val(priceBase);
    });
}
function countOutput(count, countField){
    $(countField).val(count);
}
function price(count, countContainer, priceBase){
    priceField = countContainer.find(".price");
    $(priceField).val(priceBase * count);
}