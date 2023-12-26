window.addEventListener("mousemove", function (e) {
    document.querySelector('#slidePhoto').style.top = `${e.clientY}px`; //top값이라서 Y
    document.querySelector('#slidePhoto').style.left = `${e.clientX}px`; //left값이라서 X
    document.querySelector('#slidePhoto').style.transform =
        `translate(${ -e.clientX * 0.3}px,${-e.clientY * 0.3}px)`;
})

document.querySelector('#chainn').addEventListener("mousemove",function(){
    this.style.color="rgb(177,177,177)";
    document.querySelector('#slidePhotos').style.marginTop="0%";
})
document.querySelector('#chainn').addEventListener("mouseleave",function(){
    this.style.color="initial"//초기값
})

document.querySelector('#aty').addEventListener("mousemove",function(){
    this.style.color="rgb(177,177,177)";
    document.querySelector('#slidePhotos').style.marginTop="-120%";
})
document.querySelector('#aty').addEventListener("mouseleave",function(){
    this.style.color="initial"
})

document.querySelector('#mic').addEventListener("mousemove",function(){
    this.style.color="rgb(177,177,177)";
    document.querySelector('#slidePhotos').style.marginTop="-240%";
})
document.querySelector('#mic').addEventListener("mouseleave",function(){
    this.style.color="initial"
})

document.querySelector('#tapso').addEventListener("mousemove",function(){
    this.style.color="rgb(177,177,177)";
    document.querySelector('#slidePhotos').style.marginTop="-360%";
})
document.querySelector('#tapso').addEventListener("mouseleave",function(){
    this.style.color="initial"
})

//페이지가 하나라서 window
//섹션이 바뀌면 이 전체document.querySelector('#chainn')를 바꿔주면 됨