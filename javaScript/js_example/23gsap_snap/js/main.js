const lenis = new Lenis({
  duration: 1.5,
})

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//-----------------------------------------

gsap.registerPlugin(ScrollTrigger)

Splitting();

const stage = document.querySelector('.stage');
const slides = document.querySelectorAll('.slide');

function initHeader() {
  let tl = gsap.timeline({
    delay: 0.5
  });
  tl.from(".logo", 1, {
    y: -40,
    opacity: 0,
    /* duration:1,--> 앞에 따로 1초 주나 여기에 주나 같은 의미임 */
    ease: "power4.out",
  })
  tl.from(".nav-btn__svg rect", {
    scale: 0,
    tranformOrigin: "center right",
    duration: 0.6,
    ease: "power4.out",
    stagger: 0.1
  }, 0.6)
  tl.to(".nav-rect", {
    scale: 0.8,
    tranformOrigin: "center left",
    duration: 0.4,
    ease: "power4.out",
    stagger: 0.1
  }, "-=0.6")

  let navBtn = document.querySelector('.nav-btn');

  navBtn.addEventListener("mouseover", () => {
    gsap.to('.nav-rect', {
      scaleX: 1,
      tranformOrigin: "top left",
      duration: 0.4,
      ease: "power4.out"
    })
  })

  navBtn.addEventListener("mouseout", () => {
    gsap.to('.nav-rect', {
      scaleX: 0.8,
      tranformOrigin: "top left",
      duration: 0.4,
      ease: "power4.out"
    })
  })

}

function initIntro() {
  let gTl = gsap.timeline();

  //gTl.from(".intro_title .char",1,{})//1은 1초 duration를 의미
  gTl.from(".intro_img", 1.5, {
    opacity: 0,
    yPercent: 130,
    stagger: 0.9
  }) //이미지를 위에 올리면 이미지가 먼저 나옴

  //gTl.from(".intro_title .char",1,{})//1은 1초 duration을 의미
  gTl.from(".intro_title .char", 1, {
    opacity: 0,
    yPercent: 130,
    stagger: 0.06,
    ease: "back.out(1.7)",
  }, "-=0.9")

}

function initLinks() {

}

function initSlides() {
  slides.forEach((slide, i) => {

    let tl = gsap.timeline({
      ScrollTrigger: {
        trigger: slide,
        start: "40% 50%",
      }
    })
    tl.from(slide.querySelectorAll('.col_content-title'), {
        ease: "power4.out",
        y: "+=5vh",
        duration: 2.5
      })
      .from(slide.querySelectorAll('.line_inner'), {
        y: 200,
        duration: 2,
        ease: "power4.out",
        stagger: 0.1
      }, "<" /* 꺽새의 의미, 내 앞단과 함께 애니메이션이 일어나고 싶을 때 */ )

      .from(slide.querySelectorAll('.col_content-txt'), {
        x: 200,
        y: 50,
        duration: 2,
        ease: "power4.out"
      }, "0.4")
      .from(slide.querySelectorAll('.slide-link'), {
        x: -100,
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "power4.out"
      }, "0.3")
      .from(slide.querySelectorAll('.slide_scroll-link'), {
        y:200,
        duration: 3,
        ease: "power4.out"
      }, "0.4")
      .to(slide.querySelectorAll('slide_scoll-line'), {
        y:200,
        duration: 2.5,
        ease: "elastic.out(1,0.3)",
        scaleY:0.6,
        transformOrigin:"left bottom"
      }, "1.4")
  })
}

function initParallax(){
  
}


function init() {
  initHeader();
  initIntro()
  initLinks();
  initSlides();
  initParallax();
}

init();