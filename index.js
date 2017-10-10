/*
* @Author: 宏达
* @Date:   2017-10-10 12:00:02
* @Last Modified by:   宏达
* @Last Modified time: 2017-10-10 21:13:07
*/
window.onload=function(){
	let canvas=document.querySelector('canvas');
	let line=document.querySelector('#line');
	let circle=document.querySelector('#circle');
	let poly=document.querySelector('#poly');
	let polj=document.querySelector('#polj');
	let stroke=document.querySelector('#stroke');
	let fill=document.querySelector('#fill');
	let colorone=document.querySelector('#colorone');
	let colortwo=document.querySelector('#colortwo');
	let ctx=canvas.getContext("2d");
	let rightbottom=document.querySelector('.right-bottom');
	let canvw=parseInt(getComputedStyle(rightbottom,null).width);
	let canvh=parseInt(getComputedStyle(rightbottom,null).height);
	canvas.width=canvw;
	canvas.height=canvh;
	let pale=new Palette(canvas,ctx);
	line.onclick=function(){
		pale.line();
	}
	circle.onclick=function(){
		pale.circle();
	}
	poly.onclick=function(){
		let num=prompt('请输入边数',5);
		pale.poly(num);
	}
	polj.onclick=function(){
		let num=prompt('请输入角数',5);
		pale.polj(num);
	}
	stroke.onclick=function(){
		pale.stroke();
	}
}