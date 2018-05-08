document.addEventListener("DOMContentLoaded", function(){
    var menu = document.getElementById('menu'),
        menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', function(){

        if(menu.className == 'nav__ul'){
            menu.classList.add('nav__ul_responsive');
            this.firstChild.alt = "hide menu";
        }
        else{
            menu.classList.add(newFunction());
            setTimeout(function(){
                menu.classList.remove('nav__ul_responsive');
                menu.classList.remove('nav__ul_hide');
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
            nav.classList.add('nav_sticky');
        }
        else{
            nav.classList.remove('nav_sticky');
        }
    });
});

function newFunction() {
    return 'nav__ul_hide';
}
