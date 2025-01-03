
 
 const prevBtns=document.querySelectorAll(".btn-prev")
 const nextBtns=document.querySelectorAll(".btn-next")
 const formSteps=document.querySelectorAll(".form-step")
 
let name_value=document.getElementById("name");
let email_value=document.getElementById("email");
let password_value=document.getElementById("password");
let mobile_value=document.getElementById("mobile");
let timezone_value = document.getElementById("timezone");

 let formStepsNum=0;

 if(formStepsNum==0){
     document.querySelector(".btn-prev").style.display ="none";
     document.querySelector(".btn-register").style.display ="none";
console.log('test');
    }
 nextBtns.forEach(btn=>{
     btn.addEventListener("click",()=>{
        
if(name_value.value.length==0){
 alert("خطا!", "يجيب ان تدخل اسمك");  
//  swal("خطا!", "يجيب ان تدخل اسمك");  
}
else if(email_value.value==''){
 alert("خطا!", "يجيب ان تدخل ايميل"); 
//  swal("خطا!", "يجيب ان تدخل ايميل");  
}

else if(password_value.value==''){
 alert("خطا!", "يجيب ان تدخل كلمة السر"); 
//  swal("خطا!", "يجيب ان تدخل كلمة السر");  
}
 
else if(mobile_value.value==''){
 alert("خطا!", "يجيب ان تدخل موبايل");  
//  swal("خطا!", "يجيب ان تدخل موبايل");  
}else if(timezone.value==''){
 alert("خطا!", "يجيب ان تدخل دولتك"); 
//  swal("خطا!", "يجيب ان تدخل دولتك"); 

}
else{
         formStepsNum++;
}
         updateFormSteps();
     if(formStepsNum==1){
     document.querySelector(".btn-prev").style.display ="block";
     document.querySelector(".btn-register").style.display ="block";
     document.querySelector(".btn-next").style.display ="none";
 }
 
     })
 })
 prevBtns.forEach(btn=>{
     btn.addEventListener("click",()=>{
        alert('test');
       if(formStepsNum ==1){
         formStepsNum--;
         updateFormSteps();
     document.querySelector(".btn-prev").style.display ="none";
     document.querySelector(".btn-register").style.display ="none";
     document.querySelector(".btn-next").style.display ="block";
       }
 
     })
 })
 
 function updateFormSteps(){
     formSteps.forEach(formStep=>{
         formStep.classList.contains("from-step-active") && 
         formStep.classList.remove('from-step-active');
     })
     formSteps[formStepsNum].classList.add('from-step-active')
 }
 
let foodnote = document.getElementById('foodnote'),
foodselect = document.getElementById('foodselect'),
illlect = document.getElementById('illlect')
illnote = document.getElementById('illnote');


function foodsenstive() {
var x = document.getElementById("foodselect").value;
if (x =="yes") {
 foodnote.style.display = "block";
} else {

 foodnote.style.display = "none";
}
}

function illnstive() {
var x = document.getElementById("illlect").value;
if (x == "yes") {
 illnote.style.display = "block";
} else {

 illnote.style.display = "none";
}

}

foodsenstive(); 
illnstive();    