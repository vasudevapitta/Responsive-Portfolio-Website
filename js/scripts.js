$(()=>{
$(".progressbar-fullonezero").toggleClass("progressbar-fullone");
$(".progressbar-fulltwozero").toggleClass("progressbar-fulltwo");
$(".progressbar-fullthreezero").toggleClass("progressbar-fullthree");
$(".progressbar-fullfourzero").toggleClass("progressbar-fullfour");
$(".progressbar-fullfivezero").toggleClass("progressbar-fullfive");
$(".progressbar-fullsixzero").toggleClass("progressbar-fullsix");
$(".progressbar-fullsevenzero").toggleClass("progressbar-fullseven");

//link to open Behance Portfolio
$(".box-one").click(function(){
window.open ("https://www.behance.net/vasudevapitta","_blank");
});

//link to open Shopping List App
$(".box-two").click(function(){
window.open ("https://codepen.io/vasudevapitta/full/MVZaoG/","_blank");
});

//link to open Pixel Art Maker
$(".box-three").click(function(){
window.open ("https://codepen.io/vasudevapitta/full/wmYKgp/","_blank");
});

//link to open my Facebook Page
$(".facebook").click(function(){
window.open ("https://www.facebook.com/pvrpavankumar","_blank");
});

//link to open Linkedin URL
$(".fa-linkedin").click(function(){
window.open ("https://www.linkedin.com/in/vasudevapitta","_blank");
});

//link to open Google Plus URL
$(".fa-google-plus-square").click(function(){
window.open ("https://plus.google.com/u/0/+VasudevaPitta","_blank");
});

//link to open email - Currently not assigned
$(".fa-envelope").click(function(){
window.open ("mailto:tizzicboy@gmail.com?subject=subject&body=body","_blank");
});

});