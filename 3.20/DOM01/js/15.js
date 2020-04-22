//得到所有的按钮
var a1=document.getElementById("tu")
var b1=document.getElementById("btn1")
var b2=document.getElementById("btn2")
var b3=document.getElementById("btn3")
var b4=document.getElementById("btn4")
var b5=document.getElementById("btn5")
var b6=document.getElementById("btn6")
var b7=document.getElementById("btn7")
var b8=document.getElementById("btn8")
//全局变量,可以叫为"信号量"
var nowleft=500;
var nowtop=200;
b1.onclick=function(){
	nowleft-=10;
	nowtop-=10;
	move();
}
b2.onclick=function(){
	nowtop-=10;
	move();
}
b3.onclick=function(){
	nowleft+=10;
	nowtop-=10;
	move();
}
b4.onclick=function(){
	nowleft-=10;
	move();
}
b5.onclick=function(){
	nowleft+=10;
	move();
}
b6.onclick=function(){
	nowleft-=10;
	nowtop+=10;
	move();
}
b7.onclick=function(){
	nowtop+=10;
	move();
}
b8.onclick=function(){
	nowleft+=10;
	nowtop+=10;
	move();
}
function move(){
	a1.style.left=nowleft+"px";
	a1.style.top=nowtop+"px";
}