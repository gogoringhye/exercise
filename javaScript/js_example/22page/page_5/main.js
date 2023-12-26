//locomotive와 ScrollTrigger 연결//화면을 부드럽게

//재사용을 위해 함수를 만들어서 codepen에서 가져온 코드를 그 안에 넣어줌
function locomotive() {
    gsap.registerPlugin(ScrollTrigger); //(locomotive와 관련없이)ScrollTrigger를 통해 스크롤 애니메이션을 관리하기 위한 도구

    /* SMOOTH SCROLL */
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    //locoScroll 객체를 생성, 스크롤 관련 동작을 제어하는데 사용됩니다.
    //el: document.querySelector("#main")--> #main(영역은 locomotive Scroll이 적용되는 범위)이라는 CSS 선택자로 해당하는 HTML 요소를 스크롤 컨테이너로 지정합니다.
    //smooth: true --> 부드러운 스크롤을 활성화합니다.

    locoScroll.on("scroll", ScrollTrigger.update); //LocomotiveScroll의 Scroll 이벤트가 발생할때마다 ScrollTrigger의 update함수를 호출합니다. 이것은 스크롤 이벤트와 ScrollTrigger간의 연동을 설정합니다.

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ?
                locoScroll.scrollTo(value, 0, 0) :
                locoScroll.scroll.instance.scroll.y;
        },
        //ScrollTrigger의 ScrollerProxy(스크롤프록시-->스크롤에 대한 인터페이스를 제어, 조작하기 위한 기능)를 설정한다. 이 부분은 ScrollTrigger가 LocomotiveScroll와 함께 작동하도록 만듦.

        getBoundingClientRect() {
            return {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            }; //뷰포트의 크기를 반환하는 getBoundingClientRect() 함수를 정의함.
        },
        pinType: document.querySelector("#main").style.transform ?
            "transform" : "fixed",
    }); //pinType은 #main 요소의 스타일 속성 transform이 설정되어 있으면 "transform", 그렇지 않으면 "fixed"로 설정한다.(대부분 transform로 설정되어 있어서 "fixed"로 설정될 일 없긴함)

    // 🔽 codepen -- locomotive scroll with scrolltrigger scrubbing and pinning
    // "refresh" 이벤트를 감지하면 locoScroll.update() 함수를 호출하여 LocomotiveScroll을 업데이트합니다. 스크롤 컨테이너나 내용이 동적으로 변경될 때 사용됩니다.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh(); //ScrollTrigger를 초기화하고 설정을 적용합니다.
}

//작성해줘야 실행됨
locomotive()
//------------------------------------------------------------------------------

//메인메뉴 
//(function(){})();//즉시 실행함수
window.addEventListener('load', function () {

    (function () {
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
                        element.classList.add("show")
                    }

                })
                requestAnimationFrame(scroll)
            }

            scroll();

        })



    })();


    function ani() {
        let parallaxItem = document.querySelectorAll('.cont_item');

        function scroll_ani() {

            let scrollTop = window.pageYOffset;

            parallaxItem.forEach((element, index) => {
                //  section에 애니메이션 입히기

                let tartget1 = element.querySelector('.sec_img');
                let tartget2 = element.querySelector('.desc');

                let offset1 = (scrollTop - element.offsetTop) * 0.5

                //console.log(offset1)
                tartget1.style.transform = `translateY(${offset1}px)`;

                //  end section에 애니메이션 입히기

            })
            requestAnimationFrame(scroll_ani)
        }

        scroll_ani();
    }
    //ani();


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