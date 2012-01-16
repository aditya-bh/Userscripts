// ==UserScript==
// @name           Img
// @namespace      abc
// @description    Displays linked imgaes directly in the page
// @include        http://www.reddit.com/*
// ==/UserScript==
var c=[];var n=0;
var im=[];

var init=function(){
var a=document.getElementsByClassName("title");
var i=0,x;
var re=/jpg$|jpeg$|png$/i;
for(b in a){
	if(a[b].tagName=="A"){
		x=a[b].getAttribute('href');
		if(x.search(re)!=-1){
			c[i]=a[b];i++
			}
	}
}
func();
}

var func=function(){
im[n]=new Image();
im[n].onload=function(){
disp(this);
};
if(c.length>0)
im[n].src=c[0].getAttribute('href');
n++;
}

var disp=function(img){
	var ht,w;
	if(img.height>450){
		ht=450;
		w=(450*img.width)/img.height;
		if(w<300){
			ht=(450*400)/w;
			w=400;
		}
	img.height=ht;
	img.width=w;
	}
	c[0].innerHTML+="<br><img height='"+img.height+"' width='"+img.width+"' src='"+img.src+"'  />";
	c.splice(0,1); 
	func();
}
init();
