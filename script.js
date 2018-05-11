document.addEventListener("DOMContentLoaded", function(){
    var menu = document.getElementById("menu"),
        menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', function(){

        if(menu.className == "nav__ul"){
            menu.classList.add('nav__ul--responsive');
            this.firstChild.alt = "hide menu";
        }
        else{
            menu.classList.add('nav__ul--hide');
            setTimeout(function(){
                menu.classList.remove('nav__ul--responsive');
                menu.classList.remove('nav__ul--hide');
            }, 600);
            this.firstChild.alt = "show menu";
        }
    });

});


document.addEventListener("DOMContentLoaded", function(){
    var nav = document.getElementById('nav');
    window.addEventListener('scroll', function(){
        var currentPosition = pageYOffset;
        if(currentPosition > 100){
            nav.classList.add('nav__sticky');
        }
        else{
            nav.classList.remove('nav__sticky');
        }
    });
});


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 900);
});




