//Getting Started
//Shery.mouseFollower();

//위의 값을 바꿔서 아래처럼 사용할 수 있음
//Cool Effects--Mouse Follower 
Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});


//Cool Effects--Make Magnet
Shery.makeMagnet(".magnet-target", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.3,
});

//Cool Effects--Text Animate
Shery.textAnimate(".text-target", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 0.5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

//Cool Effects--Hover With Media Circle
  Shery.hoverWithMediaCircle(".hvr" /* Element to target.*/, {
    // images: ["https://cdn.pixabay.com/photo/2023/09/24/14/05/dog-8272860_1280.jpg", "https://cdn.pixabay.com/photo/2023/12/16/21/37/ai-generated-8453296_1280.jpg", "https://cdn.pixabay.com/photo/2023/12/11/20/07/ai-generated-8444360_1280.png"] /*OR*/,
    videos: ["https://understanding963852.github.io/img/0.mp4", "https://understanding963852.github.io/img/2.mp4", "https://understanding963852.github.io/img/3.mp4"]
  });
  /* 영상은 깃헙에서 들어오는 편이 로딩 짧음, 직접 다운 받아서 가지고 있으면 로딩이 김 */