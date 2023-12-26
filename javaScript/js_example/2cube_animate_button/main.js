let rotationX = 0;
let rotationY = 0;
const cube = document.querySelector('.box-area');
// 이렇게 적으면 css형식으로 적을 수 있음 
const three =document.querySelector('.box-back h2');
//뒤집어진 삼에 대한 함수 추가

function rotateXAxis(n){
    rotationX = rotationX  + (90*n);
    console.log(rotationX)
    three.style.transform=`rotateX(180deg) rotateY(180deg)`;
    //cube.style.transform="rotateX(" + rotationX + "deg) rotateY(0deg)";
    cube.style.transform=`rotateX(${rotationX}deg) rotateY(0deg)`; //빽틱(`)
}
//값을 바꿔주는 게 cube라서 cube를 들고옴
//css값을 먹이려면 style 써줘야 함.
//변형 전
//cube.style.transform = rotateX(90deg) rotateY(0deg);
//변수를 제외한 나머지 것들을 모두 쌍따옴표로 묶어주면 됨.
//cube.style.transform =rotateX(rotationXdeg) rotateY(0deg);
//n도 변수고 html에서 준 변수 때문에 n에는 1이 들어있음
//()괄호 먼저 값이 들어옴
// 리셋되는게 아니라 값을 갖고있음.

function rotateYAxis(n){
    rotationY=rotationY+(90*n);
    console.log(rotationY)
    three.style.transform=`rotateX(0deg) rotateY(0deg)`;
    cube.style.transform=`rotateX(0deg) rotateY(${rotationY}deg)`;
}


function front(){
    cube.style.transform=`rotateX(0deg) rotateY(0deg)`;
}