var print=function (value){
	document.write(value);
}
var println=function (value){
	print(value+"<br/>");
}
var addEvent=document.addEventListener?function(elem,event,listener,useCapture){
	elem.addEventListener(event,listener,useCapture);
}:function(elem,event,listener){
	elem.attachEvent('on'+event,listener,useCapture);
}
var delEvent=document.removeEventListener?function(elem,event,listener,useCapture){
	elem.removeEventListener(event,listener,useCapture);
}:function(elem,event,listener){
	elem.detachEvent('on'+event,listener,useCapture);
}
