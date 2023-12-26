let id=document.querySelector("#id");
let pw1=document.querySelector("#psw1")
let pwImg1=document.querySelector("#pswd1_img1")
let pw2=document.querySelector("#psw2")
let pwImg2=document.querySelector("#pswd2_img1")

let error=document.querySelectorAll(".error_next_box");
let pwMsg=document.querySelector("#alertTxt")


// id.addEventListener('focusout',function(){
//     checkId()
// })
id.addEventListener('focusout',checkId)

function checkId(){
var idPattern=/^[a-zA-Z0-9_-]{5,20}$/;
console.log(idPattern.test(id.value))//개발자에서 특수문자 적고 포커스 벗어난 곳 클릭하여 확인
}

//let checkId = function(){}