let allText = document.querySelectorAll('.text');
let delay = 0;

//allText.forEach((item,item의 index)=>{})
allText.forEach((el, idx) => {
    el.style.animationDelay = `${delay}s`;
    el.style.zIndex = allText.length - idx;
    el.classList.add('base-ani');
    delay += 0.15

})

document.getElementById('spring').addEventListener('mousemove', (e) => {
    let innerWidth = window.innerWidth; //viewport의 넓이값
    let innetHeight = window.innerHeight; //viewport의 높이값

    let clientX = e.clientX; //기준이 viewport(화면이 움직일때마다 값이 들어옴)
    let clientY = e.clientY;
    //console.log(clientX + "," + clientY)

    let percetX = clientX / innerWidth
    let maxRangeX = innerWidth * 0.15;
    let minX = innerWidth / 2 - maxRangeX;
    let maxX = innerWidth / 2 + maxRangeX;
    let difX = maxX - minX;
    let pxOffset = difX * percetX
    let left = minX + pxOffset
    //console.log(left);

    let percetY = clientY / innerHeight
    let maxRangeY = innerHeight * 0.15;
    let minY = innerHeight / 2 - maxRangeY;
    let maxY = innerHeight / 2 + maxRangeY;
    let difY = maxY - minY;
    let pxOffsetY = difY * percetY
    let top = minY + pxOffsetY
    console.log(top);


    allText.forEach((el, idx) => {
        //el.animate([],{})//[배열],{객체}
        //el.animate([애니메이션의 속성],{애니메이션의 옵션 (animation-옵션//css에서 ani까지 쳤을 때 뜨는 속성들을 의미함)})
        // el.animate([
        //     {transform:'translateX(0)'},
        //     {transform:'translateX(100px)'},
        // ],{
        //     duration:1000,
        //     delay:500,
        //     iterations:2
        //  })

        el.animate([{
            top: `${top}px`,
            left: `${left}px`
        }], {
            duration: 1000,
            fill: 'forwards', //끝나는 곳에 가만히 있어라
            delay: idx * 50 
        }) //animate


    })


})