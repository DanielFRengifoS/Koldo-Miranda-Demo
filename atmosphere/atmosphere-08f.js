/* 08F · No intervals, idle RAF loop, canvas, filters, or changes to intro/STAR state. */
(function () {
 'use strict';
 const root=document.documentElement,id=root.dataset.introId;
 const star=document.querySelector('[data-star]');
 const host=id==='01'?star:id==='02'?star:document.querySelector('.hero');
 if(!host||!['01','02','03'].includes(id))return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const fine=matchMedia('(hover: hover) and (pointer: fine)');
 let intersecting=true,pageAvailable=true,listening=false,frame=0,state='suspended',pointerX=0,pointerY=0,updates=0;
 const make=className=>{const e=document.createElement('span');e.className=className;e.setAttribute('aria-hidden','true');return e;};
 if(id==='01'){host.dataset.atmosphereHost='paper';host.append(make('atmosphere-layer atmos-paper'));}
 if(id==='02')host.querySelectorAll('.territory').forEach(poster=>poster.append(make('atmosphere-layer atmos-ink')));
 if(id==='03'){host.dataset.atmosphereHost='atlas';const layer=make('atmosphere-layer atmos-grid');layer.append(make('atmos-grid-plane'));host.append(layer);}
 root.dataset.atmosphere=id;root.dataset.atmosphereState=state;
 function reset(){host.style.removeProperty('--atmos-paper-x');host.style.removeProperty('--atmos-paper-y');host.style.removeProperty('--atmos-grid-y');pointerX=pointerY=0;}
 function update(){
  frame=0;if(state!=='active'||id==='02')return;
  const box=host.getBoundingClientRect();
  const progress=Math.max(-1,Math.min(1,(innerHeight/2-box.top-box.height/2)/(innerHeight+box.height)*2));
  if(id==='01'){
   host.style.setProperty('--atmos-paper-x',(pointerX*10).toFixed(2)+'px');
   host.style.setProperty('--atmos-paper-y',(pointerY*5+progress*6).toFixed(2)+'px');
  }else host.style.setProperty('--atmos-grid-y',(progress*10).toFixed(2)+'px');
  updates++;
 }
 function schedule(){if(state==='active'&&id!=='02'&&!frame)frame=requestAnimationFrame(update);}
 function pointer(event){if(event.pointerType&&event.pointerType!=='mouse')return;const box=host.getBoundingClientRect();pointerX=Math.max(-1,Math.min(1,(event.clientX-box.left)/box.width*2-1));pointerY=Math.max(-1,Math.min(1,(event.clientY-box.top)/box.height*2-1));schedule();}
 function leave(){pointerX=pointerY=0;schedule();}
 function detach(){
  if(listening){window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);host.removeEventListener('pointermove',pointer);host.removeEventListener('pointerleave',leave);listening=false;}
  if(frame){cancelAnimationFrame(frame);frame=0;}
 }
 function sync(){
  const visible=pageAvailable&&!document.hidden&&intersecting&&(!window.GTLActivation||GTLActivation.isActive())&&root.dataset.introStatus==='ready';
  const next=!visible?'suspended':reduced.matches||star.dataset.motion==='changing'?'quiet':'active';
  if(next!==state){state=next;root.dataset.atmosphereState=state;}
  // Rebind on input preference changes too; never keep mouse listeners on touch-only views.
  detach();
  if(state==='active'&&id!=='02'){
   window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule,{passive:true});
   if(id==='01'&&fine.matches){host.addEventListener('pointermove',pointer,{passive:true});host.addEventListener('pointerleave',leave,{passive:true});}
   listening=true;schedule();
  }else reset();
 }
 const observer=new MutationObserver(sync);
 observer.observe(root,{attributes:true,attributeFilter:['data-intro-status']});
 observer.observe(star,{attributes:true,attributeFilter:['data-motion']});
 if('IntersectionObserver' in window){const intersection=new IntersectionObserver(entries=>{const next=entries[0].isIntersecting;if(next!==intersecting){intersecting=next;sync();}},{threshold:0});intersection.observe(host);}
 window.GTLActivation?.subscribe(sync);document.addEventListener('visibilitychange',sync);
 reduced.addEventListener('change',sync);fine.addEventListener('change',sync);
 window.addEventListener('pagehide',()=>{pageAvailable=false;sync();});window.addEventListener('pageshow',()=>{pageAvailable=true;sync();});
 window.GTLAtmosphere=Object.freeze({getState:()=>({id,state,intersecting,reduced:reduced.matches,listening,pendingFrame:!!frame,updates})});
 sync();
})();
