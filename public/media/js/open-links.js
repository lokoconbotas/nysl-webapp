var a=document.getElementsByTagName("a");
            for(var i=0;i<a.length;i++)
            {
                a[i].onclick=function()
                {
                    window.location=this.getAttribute("href");
                    return false
                }
            }

$(document).ready(function(){
    $('.row-info3').on('click', function(){
        var object = $(this).parent().parent().parent();
        $('html,body').animate({scrollTop: $(object).offset().top}, 800);
    }); 
});