$(function(){

    // 1번째 내용 스크롤효과
    $(window).on('scroll',function(){
        if ( $(window).scrollTop() > 900 ) {
            $('.fixd_btn').css('display', 'block');
        }else {
            $('.fixd_btn').css('display', 'none');
        }
    });

    // 두번째 내용 스크롤효과
    $(window).on('scroll',function(){
        if ( $(window).scrollTop() > 1500 ) {
            $('.interior').css('opacity', '1');
        } 
    });


    // 친환경인테리어

    for (let i = 0; i < 3; i++){
        $('.hover_img').eq(i).mouseenter(function(){
            if(i != 0) {
                $('.hover_img').eq(0).css('background-color', 'rgba(0, 0, 0, 0)');
            }
            $('.eco_img img').eq(i).css('display', 'block' ,'transition' , '1s');
            $('.hover_img').eq(i).css('background-color', 'rgba(0, 0, 0, 0.336)');
        });
        $('.hover_img').mouseleave(function(){
            if(i != 0) {
                $('.hover_img').eq(0).css('background-color', 'rgba(0, 0, 0, 0.336)');
            }
            $('.eco_img img').eq(i).css('display', 'none');
            $('.hover_img').eq(i).css('background-color', 'rgba(0, 0, 0, 0)');
        });
        
    };

    // 스타일추천

    for (let i = 0; i < 4; i++){
        $('.btn_int').eq(i).click(function(){
            $('.styls_box').fadeOut(500);
            $('.styls_box').eq(i).fadeIn(1000);
            $('.span_bar').hide();
            $('.span_bar').eq(i).show();           
        });
    }

    $('#modern').click(function(){      
        $('.motion_circle div').css('border', '1px solid rgb(100, 100, 100)');         
        $('.motion_circle_bg div').css('background', 'rgb(100, 100, 100)');         
        $('.motion_line div').css('border-bottom', '1px solid rgb(100, 100, 100)');   
        $('.motion2').css('transform', 'translate(0)');   
        $('.motion1').css('transform', 'translate(0)');   
        $('.motion6').css('transform', 'translate(0)');   
        $('.motion3').css('transform', 'translate(0)');   
        $('.motion4').css('transform', 'translate(0)');   
        $('.motion5').css('transform', 'translate(0)');   
        $('.motion7').css('transform', 'translate(0)');   
        $('.motion8').css('transform', 'rotate(40deg)'); 
        $('.motion9').css('transform', 'rotate(40deg)'); 
        $('.motion10').css('transform', 'rotate(40deg)'); 
    });

    $('#antural').click(function(){       
        $('.motion_circle div').css('border', '1px solid #0F5114');         
        $('.motion_circle_bg div').css('background', '#0F5114');         
        $('.motion_line div').css('border-bottom', '1px solid #0F5114');  
        $('.motion_circle_bg div').css('transform', 'translate(-50px, -100px)');
        $('.motion2').css('transform', 'translate(30vw, -30vw)');   
        $('.motion1').css('transform', 'translate(-10vw, 30vw)');   
        $('.motion6').css('transform', 'translate(2vw, -5vw)');   
        $('.motion3').css('transform', 'translate(40vw, 15vw)');   
        $('.motion4').css('transform', 'translate(20vw, 8vw)');   
        $('.motion5').css('transform', 'translate(5vw, -15vw)');   
        $('.motion7').css('transform', 'translate(-8vw, 8vw)');   
        $('.motion8').css('transform', 'translate(18vw, 5vw) rotate(-50deg)'); 
        $('.motion9').css('transform', 'translate(12vw, 7vw) rotate(-50deg)'); 
        $('.motion10').css('transform', 'translate(17vw, 9vw) rotate(-50deg)');       
    });

    $('#classlc').click(function(){ 
        $('.motion_circle div').css('border', '1px solid rgb(211, 206, 141)');         
        $('.motion_circle_bg div').css('background', 'rgb(211, 206, 141)');         
        $('.motion_line div').css('border-bottom', '1px solid rgb(211, 206, 141)');   
        $('.motion2').css('transform', 'translate(30vw, 13vw)');   
        $('.motion1').css('transform', 'translate(30vw, 20vw)');   
        $('.motion6').css('transform', 'translate(-30vw, -30vw)');   
        $('.motion3').css('transform', 'translate(-30vw, 12vw)');   
        $('.motion4').css('transform', 'translate(-30vw, -40vw)');   
        $('.motion5').css('transform', 'translate(-35vw, 30vw)');   
        $('.motion7').css('transform', 'translate(60vw, 10vw)');   
        $('.motion8').css('transform', 'translate(-15vw, -10vw) rotate(60deg)'); 
        $('.motion9').css('transform', 'translate(-18vw, -12vw) rotate(60deg)'); 
        $('.motion10').css('transform', 'translate(-11vw, -15vw) rotate(60deg)');     
    });


    $('#unlque').click(function(){
        $('.motion_circle div').css('border', '1px solid rgb(211, 211, 34)');         
        $('.motion_circle_bg div').css('background', 'rgb(211, 211, 34)');         
        $('.motion_line div').css('border-bottom', '1px solid rgb(211, 211, 34)'); 
        $('.motion2').css('transform', 'translate(-10vw, -20vw)');   
        $('.motion1').css('transform', 'translate(-10vw, -5vw)');   
        $('.motion6').css('transform', 'translate(-20vw, 10vw)');   
        $('.motion3').css('transform', 'translate(5vw, 30vw)');   
        $('.motion4').css('transform', 'translate(30vw, 8vw)');   
        $('.motion5').css('transform', 'translate(10vw, -10vw)');   
        $('.motion7').css('transform', 'translate(10vw, 20vw)');   
        $('.motion8').css('transform', 'translate(0px, 10vw) rotate(-40deg)'); 
        $('.motion9').css('transform', 'translate(1vw, 15vw) rotate(-40deg)'); 
        $('.motion10').css('transform', 'translate(0px, 20vw) rotate(-40deg)'); 
    });

    // 고객안내창 호버효과 

    for (let i = 0; i < 3; i++){
        $('.show_box').eq(i).mouseenter(function(){
            $('.hidden_box').eq(i).css('display', 'block');
        });
        $('.show_box').mouseleave(function(){
            $('.hidden_box').css('display', 'none');
        });
    }

    // 460px
    $(window).on('scroll',function(){
        if ( $(window).scrollTop() > 300 ) {
            $('.fixed_menu').css('position','fixed');
        } else {
            $('.fixed_menu').css('position', 'static');
        }
    });

    $('.single-item').slick({
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.bi-text-right').click(function () {
        $('.toggle_menu').slideToggle();
    });

});

