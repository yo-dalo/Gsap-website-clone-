var yo_nav_slider_on_btn = document.getElementById("yo_nav_slider_on_btn");
var yo_nav_slider = document.getElementsByName('yo_nav_slider');
var line_box = document.querySelector('.line_box');
var yo_nav_slider = document.querySelector(".yo_nav_slider");
var yo_nav_slider_all = document.querySelectorAll(".yo_nav_slider");

var nav = document.querySelector("nav");

var on = false;
line_box.addEventListener('click', function() {
  if (on == false) {
    yo_nav_slider.style.display = 'block';
    gsap.to('nav', {
      background: '#FFFCE1',
      color: '#0E100F',
    })
    gsap.to('.slider_1', {
      transform: 'translateX(0vw)',
      rotate: 0,
      animationTimingFunction: 'cubic - bezier(0.19, 1, 0.22, 1)',

    })
    gsap.to('.slider_2', {
      transform: 'translateX(0vw)',
      //rotate: 45,
      animationTimingFunction: 'cubic - bezier(0.19, 1, 0.22, 1)',

    })
    gsap.to('.right_nav_monu', {
      border: '0.2vw solid #0E100F',
    })
    gsap.to('.line', {
      background: '#0E100F',
    })
    on = true;

    var yo_1 = gsap.timeline();
    yo_1

      .to('.line_1', {
        rotate: 45,
      })
      .to('.line_3', {
        rotate: -45,
      })

      .to('.line_2', {
        display: 'none'
      })


      .from(".line", {
        width: 0,
        y: 0,

      })





    // -----+




  }
  else {

    gsap.to('nav', {
      background: '#0E100F',
      color: '#FFFCE1',
    })
    gsap.to('.slider_1', {
      transform: 'translateX(140vw)',
      //rotate: 45,
      animationTimingFunction: 'cubic - bezier(0.19, 1, 0.22, 1)',

    })
    gsap.to('.slider_2', {
      transform: 'translateX(-140vw)',
      //rotate: 45,
      animationTimingFunction: 'cubic - bezier(0.19, 1, 0.22, 1)',

    })
    gsap.to('.right_nav_monu', {
      border: '0.2vw solid #FFFCE1',
    })
    gsap.to('.line', {
      background: '#FFFCE1',

    })
    on = false;

  }





})

//yo_nav_slider_on_btn.style.scale





gsap.from('.yo_hero_text_1 h1,.yo_hero_text_2 h1', {
  // rotate: 40,
  letterSpacing: "-0.7vw",
  duration: 2,
  ease:"bounce.out",


})

gsap.from('#h_', {
   //rotateX: "-40deg",
  //letterSpacing: "0vw",
  scale:4,
  
  duration: 2,
  ease:"bounce.out",


})

