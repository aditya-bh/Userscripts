// ==UserScript==
// @name           Img
// @namespace      abc
// @description    Displays linked imgaes directly in the page
// @include        http://www.reddit.com/*
// ==/UserScript==
var init=function(){
var a=document.getElementsByClassName("title");
var c=[],i=0,x,img=[];
var re=/jpg$|jpeg$|gif$|png$/i;
for(b in a){
	if(a[b].tagName=="A"){
		x=a[b].getAttribute('href');
		if(x.search(re)!=-1){
			c[i]=a[b];
			img[i]=new Image();
			img[i].src=x;
			img[i].onload=function(){this}
			//disp(img[i],c[i]);
			i++;
		}
	}
}
}
var disp=function(img,ele){
	var ht,w;
	//alert(img.src+" "+img.width+" "+img.height);
	if(img.height>450){
		ht=450;
		w=(450*img.width)/img.height;
		if(w<300){
			ht=(450*400)/w;
			w=400;
		}
	}
	else{
		ht=img.height;
		w=img.width;
	}
	ele.innerHTML+="<br><img height='"+ht+"' width='"+w+"' src='"+img.src+"'  />";
}
init();






/*
var ht=[],w=[],width=[],height=[];
/*var disp=function(x,y,width,height){
//alert('1');
var ht,w;
if(height>450){
	ht=450;
	w=(450*a)/width;
	if(w<300)
	{
		ht=(450*400)/w;
		w=400;
	}
}
else{
ht=height;
w=width;
}
y.innerHTML+="<br><img height='"+ht+"' width='"+w+"' src='"+x+"'  />";
}
*/
/*
i=0;
var img=[];
for(b in c){
img[i]=new Image();
x=c[b].getAttribute('href');
if(x.indexOf('jpg')>1||x.indexOf('png')>1||x.indexOf('jpeg')>1||x.indexOf('gif')>1)
{
	img[i]=new Image();
	img[i].src=x;
	height[i]=img[i].height;
	width[i]=img[i].width;
	alert(height[i]+' '+width[i]+' ');
	if(height[i]>450){
	ht[i]=450;
	w[i]=(450*width[i])/height[i];
	if(w[i]<300)
	{
		ht[i]=(450*400)/w[i];
		w[i]=400;
	}
}
else{
ht[i]=height[i];
w[i]=width[i];
}
c[b].innerHTML+="<br><img height='"+ht[i]+"' width='"+w[i]+"' src='"+x+"'  />";
i++;
//	img.addEventListener("onload",disp(x,c[b],img.width,img.height),true);
	//onload=disp(x,c[b],img.width,img.height);
}
//else{
//	x+='.jpg';
//	img.src=x;
//	img.addEventListener("onload",disp(x,c[b],img.width,img.height),true);
//}
}
*/
