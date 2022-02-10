$(function () {

    // for (let i = 0; i < 3; i++) {
    //     $('.click_btn div').eq(i).click(function () {
    //         $('.click_btn div').eq(i).css('background-color', '#23a3a7');
    //         $('.click_btn div').eq(i).css('color', '#fff');
    //     });
    // };

    $("#file").on('change',function(){
        var fileName = $("#file").val();
        $(".upload-name").val(fileName);
    });


});
