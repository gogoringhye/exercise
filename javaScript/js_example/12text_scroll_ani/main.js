let pTag1 = document.querySelector('.first-parallel');
let pTag2 = document.querySelector('.second-parallel');

let textArr1 = 'Welcome Hello Welcome Hello Welcome Hello Welcome Hello'.split(' ');
//띄워쓰기를 기준으로 잘라서 배열로 만든다
console.log(textArr1)

let textArr2 = "My Portfolio My Portfolio My Portfolio My Portfolio".split(' ');
console.log(textArr2)

// let arry = [];
// console.log(...textArrl) //Welcome Hello Welcome Hello Welcome Hello Welcome Hello, 문자가 아니라 요소임
// arry.push(...textArrl) //...textArrr --> textArrl를 그대로 복사
// console.log(arr)

let count1 = 0;
let count2 = 0;
// 스크롤이 2개가 되어야 하기 때문에 2개의 변수를 생성해줌.

initTexts(pTag1, textArr1); //이름이 있는 함수는 호이스팅이 됨
initTexts(pTag2, textArr2);

function initTexts(element, textArray) {
    textArray.push(...textArray) //8개의 배열안의 아이템을 복사하여 다시 배열 뒤에 넣는다
    console.log("함수안" + textArray)
    for (let i = 0; i < textArray.length; i++) {
        // &nbsp
        //    \u00A0  --> javaScript에서의 공백을 나타냄
        element.innerHTML += `${textArray[i]}\u00A0\u00A0\u00A0`
    }
}

////////////////
function animate() {
    count1++;
    //console.log(count1)
    count2++;

    //무한반복
    count1 = marqueeText(count1, pTag1, -1)
    count2 = marqueeText(count2, pTag2, 1) //반대방향

    window.requestAnimationFrame(animate)

    //setInterval--> 어떤 시간마다 할일
}

function marqueeText(count, element, direction) {
    //.srollHeight --> 보이지 않는 공간일지라도 스크롤해서 확인할 수 있는 공간의 높이 
    //.scrollWidth --> 보이지 않는 공간일지라도 스크롤해서 확인할 수 있는 공간의 넓이 

    console.log("element.scrollWidth" + element.scrollWidth) //넓이를 찾아줌, 개발자모드로 짚어보면 콘솔에 반복해서 찍히는 숫자가 하얀 부분의 넓이라는 것을 알 수 있음
    console.log("count" + count)
    if (count > element.scrollWidth / 2) {
        count = 0;
        element.style.transform = `translate(0,0)`;
    }
    element.style.transform = `translate(${count * direction}px,0)`;

    return count

}

function scrollHandler() {
    count1 += 25; //25만큼 빨라짐
    count2 += 25; //25만큼 빨라짐
}



animate()
// window.addEventListener('scroll',function(){ 
// 스크롤이 움직일 때 어떤 일이 일어나라
// scrollHandler()
// 스크롤 핸들러를 움질일 때
// })

window.addEventListener('scroll', scrollHandler)



// %는 나눴을 때 몫
// 화면을 줄였을 때 글자가 온전하게 보이는 이유는 css에서 justify-content:      
// flex-end;로 기준을 끝쪽에(오른쪽) 맞춰줘서 그럼