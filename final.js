var n = 0;
var asd = document.getElementById("number1");
window.setInterval(function(){
  if(asd.innerHTML<6300){
  asd.innerHTML = n;
  n=n+9;
}
},10);
var z=0;
var aqw = document.getElementById("number2");
window.setInterval(function(){
  if(aqw.innerHTML<638){
  aqw.innerHTML = z;
  z=z+1;
}
},11);
var a=0;
var aqe = document.getElementById("number3");
window.setInterval(function(){
  if(aqe.innerHTML<7600){
  aqe.innerHTML = a;
  a=a+11;
}
},10);
var v=0;
var aqt = document.getElementById("number4");
window.setInterval(function(){
  if(aqt.innerHTML<36){
  aqt.innerHTML = v;
  v++;
}
},180);

document.getElementById("ima1").addEventListener("mouseover", function(e){
  document.getElementById("icon1").style.display = "block";
  document.getElementById("icon1").style.transform="translateY(-100px)";

});

document.getElementById("ima1").addEventListener("mouseout", function(){

   document.getElementById("icon1").style.transform="translateY(0px)";
   document.getElementById("icon1").style.display = "";
});
document.getElementById("ima2").addEventListener("mouseover", function(){
  document.getElementById("icon2").style.display = "block";
  document.getElementById("icon2").style.transform="translateY(-100px)";

});

document.getElementById("ima2").addEventListener("mouseout", function(){

   document.getElementById("icon2").style.transform="translateY(0px)";
   document.getElementById("icon2").style.display = "";
});
document.getElementById("ima3").addEventListener("mouseover", function(){
  document.getElementById("icon3").style.display = "block";
  document.getElementById("icon3").style.transform="translateY(-100px)";

});

document.getElementById("ima3").addEventListener("mouseout", function(){

   document.getElementById("icon3").style.transform="translateY(0px)";
   document.getElementById("icon3").style.display = "";
});
document.getElementById("ima4").addEventListener("mouseover", function(){
  document.getElementById("icon4").style.display = "block";
  document.getElementById("icon4").style.transform="translateY(-100px)";

});

document.getElementById("ima4").addEventListener("mouseout", function(){

   document.getElementById("icon4").style.transform="translateY(0px)";
   document.getElementById("icon4").style.display = "";
});
document.getElementById("ima5").addEventListener("mouseover", function(){
  document.getElementById("icon5").style.display = "block";
  document.getElementById("icon5").style.transform="translateY(-100px)";

});

document.getElementById("ima5").addEventListener("mouseout", function(){

   document.getElementById("icon5").style.transform="translateY(0px)";
   document.getElementById("icon5").style.display = "";
});
document.getElementById("ima6").addEventListener("mouseover", function(){
  document.getElementById("icon6").style.display = "block";
  document.getElementById("icon6").style.transform="translateY(-100px)";

});

document.getElementById("ima6").addEventListener("mouseout", function(){

   document.getElementById("icon6").style.transform="translateY(0px)";
   document.getElementById("icon6").style.display = "";
});
document.getElementById("ima7").addEventListener("mouseover", function(){
  document.getElementById("icon7").style.display = "block";
  document.getElementById("icon7").style.transform="translateY(-100px)";

});

document.getElementById("ima7").addEventListener("mouseout", function(){

   document.getElementById("icon7").style.transform="translateY(0px)";
   document.getElementById("icon7").style.display = "";
});
document.getElementById("ima8").addEventListener("mouseover", function(){
  document.getElementById("icon8").style.display = "block";
  document.getElementById("icon8").style.transform="translateY(-100px)";

});

document.getElementById("ima8").addEventListener("mouseout", function(){

   document.getElementById("icon8").style.transform="translateY(0px)";
   document.getElementById("icon8").style.display = "";
});