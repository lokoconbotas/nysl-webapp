$(document).ready(function(){
    $('.row-info3').on('click', function(){
        var object = $(this).parent().parent().parent();
        $('.intro').animate({scrollTop: $(object).offset().top}, 300);
        console.log(object);
    }); 
});

//$('#boton1').on('click', function() {
//    $('#page1').show();
//    $('#page2').hide();
//    
//    $('#icon1').addClass("active");
//    $("#icon2").removeClass("active");
//    $("#icon3").removeClass("active");
//    $("#icon4").removeClass("active");
//
//    //$('body').animate({scrollTop: $('#page1').offset().top}, 600);
//
//});
//
//
//$('#boton2').on('click', function() {
//    $('#page1').hide();
//    $('#page2').show();
//    
//    $('#icon1').removeClass("active");
//    $("#icon2").removeClass("active");
//    $("#icon3").addClass("active");
//    $("#icon4").removeClass("active");
//
//    //$('body').animate({scrollTop: $('#page2').offset().top}, 600);
//
//});


//$(document).ready(function(){
//    $('.page1').on('click', function(){
//        $('html,body').animate({scrollTop: $('#page1').offset().top}, 800);
//        console.log("smooth2");
//    }); 
//});