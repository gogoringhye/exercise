function openCity(e, cityName) {
    //console.log(cityName)
    let tabcontent = document.getElementsByClassName('tabcontent');
    let tablinks;
    console.log(tabcontent[1])
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";

}
//e는 index body 함수의 ev, cityName은 도시의 영향을 받음
//배열이기 때문에 []사용
//length에 3이 들어있음(3호), 3보다 작아야 조건이 만족, 조건이 만족하지 않으면 for문은 끝남
//document.getElementById(cityName).style.display = "block";다 없어지고 내가 누른 것만 보여라

document.getElementById('defaultOpen').click();
/* id가 defaultOpen인 것을 강제로 클릭시킴*/

let topright=document.getElementsByClassName('topright');
//console.log(topright)
/* class는 중복될 수 있기 때문에 하나만 있어도 배열(동적으로 메모리를 가질 수 있는 곳에 저장을 함, 더 추가할수있도록 준비를 함)이 됨 */
for(let i=0; i<topright.length; i++){
    topright[i].addEventListener('click',function(){
        this.parentElement.style.display="none"
    })
}
