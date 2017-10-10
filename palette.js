/*
* @Author: 宏达
* @Date:   2017-10-10 15:33:38
* @Last Modified by:   宏达
* @Last Modified time: 2017-10-10 22:04:20
*/
class Palette{
	constructor(canvas,ctx){
		this.canvas=canvas;
		this.ctx=ctx;
		this.cw=this.canvas.width;
		this.ch=this.canvas.height;
		this.lineWidth=1;
		this.lineCap='butt';
		this.style='stroke';
		this.strokeStyle='red';
		this.fillStyle='#000';
		this.history=[];
	}
    line(){
    	this.canvas.onmousedown=function(e){
    		let cx=e.offsetX,cy=e.offsetY;
    		this.canvas.onmousemove=function(e){
    			let ox=e.offsetX,oy=e.offsetY;
    			this.ctx.strokeStyle=this.strokeStyle;
    			this.ctx.clearRect(0, 0, this.cw, this.ch);
    			if(this.history.length){
    				this.ctx.putImageData(this.history[this.history.length-1],0,0);
    			}
    			this.ctx.beginPath();
    			this.ctx.moveTo(cx, cy);
                this.ctx.lineTo(ox, oy);
                this.ctx.stroke();
    		}.bind(this)
    		this.canvas.onmouseup=function(){
    			this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
    			this.canvas.onmousemove=null;
    			this.canvas.onmouseup=null;
    		}.bind(this)
    	}.bind(this)
    }
    circle(){
    	this.canvas.onmousedown=function(e){
    		let cx=e.offsetX,cy=e.offsetY;
    		this.canvas.onmousemove=function(e){
    			let ox=e.offsetX,oy=e.offsetY;
    			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
    			this.ctx.strokeStyle=this.strokeStyle;
    			this.ctx.clearRect(0, 0, this.cw, this.ch);
    			if(this.history.length){
    				this.ctx.putImageData(this.history[this.history.length-1],0,0);
    			}
    			this.ctx.beginPath();
    			this.ctx.arc(cx, cy, r, 0, Math.PI*2);
    			if(this.style=='stroke'){
    				this.ctx.stroke();
    			}else if(this.style=='fill'){
                    this.ctx.fill();
    			}
    		}.bind(this)
    		this.canvas.onmouseup=function(){
    			this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
    			this.canvas.onmousemove=null;
    			this.canvas.onmouseup=null;
    		}.bind(this)
    	}.bind(this)
    }
    poly(n){
    	this.canvas.onmousedown=function(e){
    		let cx=e.offsetX,cy=e.offsetY;
    		this.canvas.onmousemove=function(e){
    			let ox=e.offsetX,oy=e.offsetY;
    			let rad=Math.PI*2/n;
    			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
    			this.ctx.strokeStyle=this.strokeStyle;
    			this.ctx.clearRect(0, 0, this.cw, this.ch);
    			if(this.history.length){
    				this.ctx.putImageData(this.history[this.history.length-1],0,0);
    			}
    			this.ctx.beginPath();
    			this.ctx.moveTo(cx+r,cy);
                for(let i=0;i<n;i++){
                   let x=cx+r*Math.cos(rad*i);
                   let y=cy+r*Math.sin(rad*i);
                   this.ctx.lineTo(x,y);
                }
                this.ctx.closePath();
                this.ctx.stroke();
    		}.bind(this)
    		this.canvas.onmouseup=function(){
    			this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
    			this.canvas.onmousemove=null;
    			this.canvas.onmouseup=null;
    		}.bind(this)
    	}.bind(this)
    }
    polj(n){
    	this.canvas.onmousedown=function(e){
    		let cx=e.offsetX,cy=e.offsetY;
    		this.canvas.onmousemove=function(e){
    			let ox=e.offsetX,oy=e.offsetY;
    			let rad=Math.PI/n;
    			let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
    			this.ctx.strokeStyle=this.strokeStyle;
    			this.ctx.clearRect(0, 0, this.cw, this.ch);
    			if(this.history.length){
    				this.ctx.putImageData(this.history[this.history.length-1],0,0);
    			}
    			this.ctx.beginPath();
                this.ctx.moveTo(cx+r,cy);
                for(let i=0;i<2*n;i++){
                   let r1;
                   r1=i%2==0 ? r:r/2;
                   let x=cx + r1 * Math.cos(rad*i);
                   let y=cy + r1 * Math.sin(rad*i);
                   this.ctx.lineTo(x,y);
                }
                this.ctx.closePath();
                this.ctx.stroke();
    		}.bind(this)
    		this.canvas.onmouseup=function(){
    			this.history.push(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height));
    			this.canvas.onmousemove=null;
    			this.canvas.onmouseup=null;
    		}.bind(this)
    	}.bind(this)
    }
}