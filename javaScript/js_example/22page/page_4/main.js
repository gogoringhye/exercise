// document.querySelector("#section1").scrollIntoView({
//     behavior: "smooth"  
// })

//전체화면 부드럽게 움직이기
const lenis = new Lenis({
    duration: 1.5
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//--------------------------------------   


//메인메뉴 
let navs = document.querySelectorAll("nav ul li a")

navs.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector(element.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })


    })
})


let parallaxItem = document.querySelectorAll('.cont_item');
console.log(parallaxItem[0])
parallaxItem[0].classList.add("show");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    const parallaxNav = document.querySelectorAll('nav ul li')

    function scroll() {
        parallaxItem.forEach((element, index) => {
            if (scrollTop >= element.offsetTop - 100) {
                parallaxNav.forEach((li) => {
                    li.classList.remove('active')
                })
                parallaxNav[index].classList.add('active')

                //  section에 애니메이션 입히기

                element.classList.add("show")
            }
        })
        requestAnimationFrame(scroll)
    }

    scroll();

})


const bar = document.querySelector(".scroll-indicator");

window.onscroll = () => {
    let winScroll = document.documentElement.scrollHeight;
    let height = winScroll - window.innerHeight; //실제 스크롤 되는 최대치
    let scrolled = window.scrollY / height
    console.log(scrolled)
    let scrollY = scrolled * 100;
    bar.style.width = scrollY + "%"
}