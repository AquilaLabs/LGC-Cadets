var mainContent = document.getElementById("main");

changeHeaderBackground(window.scrollY);

let lastKnownScrollPosition = 0;
let ticking = false;

function changeHeaderBackground(scrollPos) {
    if(scrollPos > 500){
        document.getElementById('header').style.background ='#FAF9F6';
        document.getElementById('header').classList.add("scrolled");
    }
    else{
        document.getElementById('header').style.background ='transparent linear-gradient(180deg, #00000063 0%, #80808000 100%) 0% 0% no-repeat padding-box';
        document.getElementById('header').classList.remove("scrolled");
    }
}

mainContent.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = mainContent.scrollTop;

    let pageY = mainContent.scrollTop;
    let glider = document.getElementById('glider');
    glider.style.transform = `translateZ(-5px) scale(1.4) translateX(${pageY * .8}px) rotate(${pageY * .007}deg) translateY(-${pageY * .1}px`
    
    if (!ticking) {
        window.requestAnimationFrame(function() {
            changeHeaderBackground(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});


