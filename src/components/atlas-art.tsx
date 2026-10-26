"use client";

import {useEffect,useRef,useState} from "react";

// Canvas is intentionally self-contained: no remote scripts, video, or 3D packages.
export function AtlasArt({label}:{label:string}){
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const hostRef=useRef<HTMLDivElement>(null);
  const [paused,setPaused]=useState(false);
  const pausedRef=useRef(false);
  const reducedRef=useRef(false);
  useEffect(()=>{
    const canvas=canvasRef.current, host=hostRef.current;
    if(!canvas||!host)return;
    const ctx=canvas.getContext("2d");if(!ctx)return;
    const media=window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current=media.matches;
    let width=0,height=0,frame=0,visible=true,phase=0,last=0;
    let mouseX=0,mouseY=0;
    const colors=["#e75d31","#233b30","#9caf87","#d9b98a"];
    const onPointer=(event:PointerEvent)=>{
      const r=host.getBoundingClientRect();
      mouseX=(event.clientX-r.left-r.width/2)/Math.max(r.width,1);
      mouseY=(event.clientY-r.top-r.height/2)/Math.max(r.height,1);
    };
    const leave=()=>{mouseX=0;mouseY=0;};
    function resize(){
      if(!canvas||!host||!ctx)return;
      const rect=host.getBoundingClientRect();
      width=rect.width;height=rect.height;
      const ratio=Math.min(window.devicePixelRatio||1,1.75);
      canvas.width=Math.max(1,Math.round(width*ratio));
      canvas.height=Math.max(1,Math.round(height*ratio));
      ctx.setTransform(ratio,0,0,ratio,0,0);
      draw();
    }
    function draw(){
      if(!ctx||!width||!height)return;
      ctx.clearRect(0,0,width,height);
      const centerX=width*.5,centerY=height*.515,scale=Math.min(width,height)*.32;
      // Four interlocking ribbons are rendered back-to-front and depth shaded.
      const steps=42;
      const projected:{depth:number;points:[number,number][];tone:string;index:number}[]=[];
      for(let ribbon=0;ribbon<4;ribbon++){
        const offset=ribbon*Math.PI/2;
        for(let i=0;i<steps;i++){
          const a=(i/steps)*Math.PI*2;
          const b=((i+1)/steps)*Math.PI*2;
          const make=(t:number,zOff:number):[number,number,number]=>{
            const twist=2*t+offset+phase*.3;
            const radius=1+.17*Math.sin(3*t+offset);
            const x=radius*Math.cos(t+offset);
            const y=.9*Math.sin(t+offset)+.30*Math.sin(t*2+offset)+zOff*Math.cos(t+offset)*1.25;
            const z=.63*Math.sin(t*2+offset+phase*.32)+zOff*(.8+.3*Math.sin(t+offset));
            const turn=phase*.14+mouseX*.55;
            const xr=x*Math.cos(turn)-z*Math.sin(turn);
            const zr=x*Math.sin(turn)+z*Math.cos(turn);
            const yr=y*Math.cos(mouseY*.3)-zr*Math.sin(mouseY*.3);
            const scale3=3.5/(3.5+zr*.3);
            return [centerX+xr*scale*scale3,centerY+yr*scale*scale3, zr+Math.sin(twist)*.01];
          };
          const p1=make(a,-.12),p2=make(b,-.12);
          const q2=make(b,.15),q1=make(a,.15);
          projected.push({depth:(p1[2]+p2[2]+q2[2]+q1[2])/4,points:[[p1[0],p1[1]],[p2[0],p2[1]],[q2[0],q2[1]],[q1[0],q1[1]]],tone:colors[ribbon],index:i});
        }
      }
      projected.sort((a,b)=>a.depth-b.depth);
      for(const panel of projected){
        ctx.beginPath();
        panel.points.forEach((point,index)=>index?ctx.lineTo(point[0],point[1]):ctx.moveTo(point[0],point[1]));
        ctx.closePath();
        ctx.fillStyle=panel.tone;
        ctx.globalAlpha=.66+.26*(panel.depth+1)/2;
        ctx.fill();
        ctx.globalAlpha=.14;
        ctx.strokeStyle="#172d22";
        ctx.lineWidth=.8;
        ctx.stroke();
        ctx.globalAlpha=1;
      }
      const glow=ctx.createRadialGradient(centerX,centerY,0,centerX,centerY,scale*2);
      glow.addColorStop(0,"rgba(255,255,255,.11)");
      glow.addColorStop(1,"rgba(255,255,255,0)");
      ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);
    }
    function tick(t:number){
      if(last===0)last=t;
      const dt=Math.min((t-last)/1000,.05);last=t;
      if(!pausedRef.current&&!reducedRef.current&&visible){phase+=dt;draw();}
      frame=window.requestAnimationFrame(tick);
    }
    const ro=new ResizeObserver(resize);
    const io=new IntersectionObserver((entries)=>{visible=entries[0]?.isIntersecting??true;},{threshold:0});
    const changes=()=>{reducedRef.current=media.matches;draw();};
    media.addEventListener("change",changes);
    host.addEventListener("pointermove",onPointer);
    host.addEventListener("pointerleave",leave);
    ro.observe(host);io.observe(host);resize();frame=window.requestAnimationFrame(tick);
    return ()=>{window.cancelAnimationFrame(frame);ro.disconnect();io.disconnect();media.removeEventListener("change",changes);host.removeEventListener("pointermove",onPointer);host.removeEventListener("pointerleave",leave);};
  },[]);
  return <div className="atlas-art" ref={hostRef}>
    <canvas ref={canvasRef} role="img" aria-label={label}/>
    <button className="atlas-art-control" type="button" aria-label={paused?"Resume animation":"Pause animation"} aria-pressed={paused} onClick={()=>{pausedRef.current=!pausedRef.current;setPaused(pausedRef.current);}}>{paused?"▶":"Ⅱ"}</button>
  </div>;
}
