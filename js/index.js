$(document).ready(function(){
    $(".text").fadeIn(1000);
    $(".arrow").fadeIn(1000);

    $(".arrow").click(function(){
        $(".bg2").fadeIn(100);
        $('html,body').animate({
            scrollTop: $(".bg2").offset().top
        }, 0);
    })

    $(".contact").click(function() {
        $(".contacts").load("contact.html", function(){
            $(".contacts").slideDown();
        });
    })
})

var nav = document.querySelector('nav');
var footer = document.querySelector('footer')
var dropdownMenu = document.querySelector('.dropdown-menu');
window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 100) {
        nav.classList.add('bg-nav', 'shadow');
        dropdownMenu.classList.remove('dropdown-color');
    }else {
        nav.classList.remove('bg-nav', 'shadow');
        dropdownMenu.classList.add('dropdown-color');
    }
    if (window.pageYOffset > 50) {
        // Add the "show" class to the footer element, which will make it visible
        footer.classList.add('show');
      } else {
        // Remove the "show" class from the footer element, which will hide it
        footer.classList.remove('show');
      }
});
