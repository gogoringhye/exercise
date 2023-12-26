let acc = document.getElementsByClassName('accordion');

console.log(acc) //[값1,값2,값3] 배열
console.log(acc[0])
console.log(acc.length) //배열 안의 값의 수(몇개의 호수가 있는지 출력됨), 배열할 땐 항상 이것을 씀

//스크립트 내부에서는 무조건 첫번째가 0임

//For(①; ②; ④){
//   ③
//}
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active')

        let panel = this.nextElementSibling; //나의 다음요소(동생)

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            //scrollHeight:숨어있는 높이(공간)값을 포함한 높이값을 찾아준다.
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
}
//배열할 땐 강제로 3 못줌, i를 나갈 때 하나 더함
//for문은 조건이 만족하지 않아야 끝남
//toggle(실행, 반실행)을 완전히 추가하는 것은 add, 원래 있는 것을 삭제하는 것은 remove