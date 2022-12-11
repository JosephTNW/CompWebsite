$(document).ready(function(){
    $(".text").fadeIn(1000);
    $(".arrow").fadeIn(1000);

    $(".arrow").click(function(){
        $(".bg2").fadeIn(100);
        $('html,body').animate({
            scrollTop: $(".bg2").offset().top
        }, 0);
        $(".desc").fadeIn(500);
        $(".foto-title").fadeIn(750);
        $(".lecturer").fadeIn(1000);
    })

    $(".contact").click(function() {
        $(".contacts").load("contact.html", function(){
            $(".contacts").slideDown();
        });
    })
})