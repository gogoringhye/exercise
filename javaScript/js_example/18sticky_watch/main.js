let scrollBody = document.querySelector('.fix_motion'),
    scrollHeight, //스크롤의 높이
    sectionOffsetTop,
    sectionSrollTop,
    scrollRealHeight, //실제로 스크롤해야할 높이
    winScrollTop, //스크롤바의 높이를 담을 변수
    scrollPercent, //스크롤 백분률
    percent;

    let isMobile;

    function scrollFuc(){
        setProperty();
        if(isMobile){
            contentInMobile()
        }else{
            contentIn();
        }
        
    }




//🥽🚨🚦🌋 이번 예제의 핵심인 부분 (스크롤 이벤트에 대응하여 각 변수들의 값을 확인하고자 할 때 사용됨)
function setProperty() {
    isMobile = window.innerWidth <= 1024 ? true : false; //작다면 true
    scrollHeight = scrollBody.offsetHeight; //.fix-motion의 높이값, offsetHeight--> .fix-motion 클래스를 가진 HTML 요소의 총 높이를 나타내는 변수(scrollBody 요소의 offsetHeight를 통해 얻어짐)
    sectionOffsetTop = scrollBody.offsetTop; //sectionOffsetTop--> (.fix-motion 클래스를 가진 HTML 요소의) 문서전체에서 상단위치를 나타내는 변수 -- .fix-motion에 border: 5px solid red;로 확인💨
    scrollRealHeight = scrollHeight - window.innerHeight;//scrollRealHeight 변수: .fix-motion를 가진 HTML 요소의 총 높이에서 현재 보이는 창의 높이를 뺀 값(스크롤 가능한 전체 높이 - 현재 보이는 창의 높이, 스크롤이 가능한 전체 높이를 계산함), //innerHeight-->현재 보이는 창의 높이
    winScrollTop = pageYOffset;//winScrollTop--> 현재 스크롤 위치를 나타내는 변수, pageYOffset을 통해 현재 스크롤 위치를 얻어옴
    sectionSrollTop = winScrollTop - sectionOffsetTop;
    //console.log(sectionSrollTop)
    scrollPercent = sectionSrollTop / scrollHeight;//sectionScrollTop--> .fix-motion 클래스를 가진 HTML 요소의 상단 위치에서 현재 스크롤 위치를 뺀 값(해당 요소가 스크롤됨에 따라 얼마나 이동했는지를 계산)
    percent = scrollPercent * 100//scrollPercent--> .fix-motion 클래스를 가진 HTML 요소에서 현재 스크롤 위치가 차지하는 비율을 나타내는 변수(스크롤된 비율을 계산)
    console.log(percent)//percent--> scrollPercent * 100의 값으로, 스크롤된 비율을 백분율로 표현함
} //🥽🚨🚦🌋



//애니메이션이 이루어지는 부분
function contentIn() {
    let deviceImg = document.querySelectorAll('.slide figure');
    let imgWidth = deviceImg[0].offsetWidth; //이미지 하나의 넓이값

    if(percent>=12 && percent<37){
        document.querySelector('.text_box .text1').classList.add('active');
        imageChage(imgWidth * 0)
    }


    if(percent>=37 && percent<62){
        document.querySelector('.text_box .text2').classList.add('active');
        imageChage(imgWidth * 1)
    }


    if(percent>=62 && percent<88){
        document.querySelector('.text_box .text3').classList.add('active');
        imageChage(imgWidth*2)
    }

    if (percent >= 88) {
        document.querySelector('.text_box .text4').classList.add('active');
        imageChage(imgWidth * 3)
    }

    if(percent<12){
        document.querySelector('.text_box .text1').classList.remove('active');
        document.querySelector('.text_box .text2').classList.remove('active');
        document.querySelector('.text_box .text3').classList.remove('active');
        document.querySelector('.text_box .text4').classList.remove('active');
    }
}

//🚨 >=, 같거나 크다(=>) ❌ 크거나 같다 ⭕

function contentInMobile(){
    let deviceImg=document.querySelectorAll('.slide figure');
    let imgWidth=deviceImg[0].offsetWidth;//이미지 하나의 넓이값
   

    if(percent>=12 && percent < 37){
        document.querySelector('.text_box p.text1').classList.add('active')
        document.querySelector('.text_box p.text2').classList.remove('active')
        document.querySelector('.text_box p.text3').classList.remove('active')
        document.querySelector('.text_box p.text4').classList.remove('active')
        imageChange(imgWidth*0)
    }
    if(percent>=37 && percent < 62){
        document.querySelector('.text_box p.text2').classList.add('active')
        document.querySelector('.text_box p.text1').classList.remove('active')
        document.querySelector('.text_box p.text3').classList.remove('active')
        document.querySelector('.text_box p.text4').classList.remove('active')
        imageChange(imgWidth*1)
    }

    if(percent>=62 && percent < 88){
        document.querySelector('.text_box p.text3').classList.add('active')
        document.querySelector('.text_box p.text1').classList.remove('active')
        document.querySelector('.text_box p.text2').classList.remove('active')
        document.querySelector('.text_box p.text4').classList.remove('active')

        imageChange(imgWidth*2)
    }
    if(percent>=88){
        document.querySelector('.text_box p.text4').classList.add('active')
        document.querySelector('.text_box p.text1').classList.remove('active')
        document.querySelector('.text_box p.text2').classList.remove('active')
        document.querySelector('.text_box p.text3').classList.remove('active')

        imageChange(imgWidth*3)
    }

    if(percent<12){
        document.querySelector('.text_box p.text1').classList.remove('active')
        document.querySelector('.text_box p.text2').classList.remove('active')
        document.querySelector('.text_box p.text3').classList.remove('active')
        document.querySelector('.text_box p.text4').classList.remove('active')
    }

}







function imageChage(moveX){
    let img=document.querySelector('.slide_wrap .slide');
    img.style.transform=`translateX(${-moveX}px)`;
  }





window.addEventListener("scroll", function () {
    scrollFuc()
})
scrollFuc()