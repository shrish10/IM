
$(".testimonial-content").owlCarousel({
	loop: true,
	items: 1,
	margin: 50,
	dots: true,
	nav: false,
	mouseDrag: true,
	autoplay: false,
	autoplayTimeout: 4000,
	smartSpeed: 800
});

var mybutton = document.getElementById("top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }

if (window.matchMedia("(min-width: 1024px)").matches) {
    let mousePosX = 0,
       mousePosY = 0,
       mouseCircle = document.getElementById("cursor");

    document.onmousemove = (e) => {
       mousePosX = e.pageX;
       mousePosY = e.pageY;
    };

    let delay = 6,
       revisedMousePosX = 0,
       revisedMousePosY = 0;

    function delayMouseFollow() {
       requestAnimationFrame(delayMouseFollow);

       revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
       revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

       mouseCircle.style.transform = "translate(" + revisedMousePosX + "px," + revisedMousePosY + "px)";
    }
    delayMouseFollow();

    /**/
    let cursorSelector = document.querySelector('#cursor');
    let cursorModifiers = document.querySelectorAll('[cursor-class]');

    cursorModifiers.forEach(curosrModifier => {
       curosrModifier.addEventListener('mouseenter', function () {
          let className = this.getAttribute('cursor-class');
          cursorSelector.classList.add(className);
       });

       curosrModifier.addEventListener('mouseleave', function () {
          let className = this.getAttribute('cursor-class');
          cursorSelector.classList.remove(className);
       });
    });
 }

 

 const loginPopup = document.querySelector(".login-popup");
 const close = document.querySelector(".close");


 window.addEventListener("load",function(){

  showPopup();
  // setTimeout(function(){
  //   loginPopup.classList.add("show");
  // },5000)

 })

 function showPopup(){
       const timeLimit = 8 // seconds;
       let i=0;
       const timer = setInterval(function(){
        i++;
        if(i == timeLimit){
         clearInterval(timer);
         loginPopup.classList.add("show");
        } 
        console.log(i)
       },1000);
 }


 close.addEventListener("click",function(){
   loginPopup.classList.remove("show");
 })

 $('#recipeCarousel').carousel({
   interval: 10000
 })
 
 $('.carousel .carousel-item').each(function(){
     var minPerSlide = 3;
     var next = $(this).next();
     if (!next.length) {
     next = $(this).siblings(':first');
     }
     next.children(':first-child').clone().appendTo($(this));
     
     for (var i=0;i<minPerSlide;i++) {
         next=next.next();
         if (!next.length) {
            next = $(this).siblings(':first');
          }
         
         next.children(':first-child').clone().appendTo($(this));
       }
 });
 