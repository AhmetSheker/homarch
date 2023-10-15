$(function () {
    $(".entry-logo").delay(1000).fadeOut(2000);
    $("main.index").delay(3000).fadeIn();

    let i = 0;
    let galItem = $(".slide").find("img");
    const right_button = $(".slide-nav-right");
    const left_button = $(".slide-nav-left");
    right_button.click(function () {
        galItem.eq(i).stop().fadeOut();
        i++;
        galItem.eq(i).stop().fadeIn();
        if (i === galItem.length) {
            i = 0
            galItem.eq(i).fadeIn();
        }
    });
    left_button.click(function () {
        galItem.eq(i).stop().fadeOut();
        i--;
        galItem.eq(i).stop().fadeIn();
        if (i === -1) {
            i = galItem.length - 1;
            galItem.eq(i).fadeIn();
        };
    });
    setInterval(function(){
        galItem.eq(i).stop().fadeOut();
        i++;
        galItem.eq(i).stop().fadeIn();
        if (i === galItem.length) {
            i = 0
            galItem.eq(i).fadeIn();
        }
    }, 4444)

    $(".togglebar").click(function () {
        $("nav ul").toggle(1000);
        $("nav ul").css("display", "flex");
    });
});

let smallImg = document.querySelectorAll(".small-img");
smallImg = Array.from(smallImg);
let bigImg = document.querySelector(".big-img");

document.querySelector("body").addEventListener("click", function(e){
    if(e.target.classList.contains("small-img")){
        bigImg.setAttribute("src", e.target.getAttribute("src"));
        bigImg.scrollIntoView();
    }
});

document.querySelector("body").addEventListener("click", function(e){
    console.log(e.target);
})

window.addEventListener("click", function(e){
    console.log(e.clientX + " - " + e.clientY);
})