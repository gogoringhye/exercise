let tl=gsap.timeline({
    scrollTrigger:{
        trigger:".part-2",
        start:"top 90%",
        end:"180% 90%",
        scrub:true,
        markers:true,

    }
})

// timeline은 하나가 끝나면 그 다음에 동작을 시작함 
// "<", 내 앞에 있는 트윈과 동작을 함께하겠다
tl.to(".strip-r",{marginLeft:"-50%"})
tl.to(".strip-l",{marginLeft:"0%"},"<")

// 또는 같은 이름을 사용하면 됨
// tl.to(".strip-r",{marginLeft:"-50%"},"green")
// tl.to(".strip-l",{marginLeft:"0%"},"green")