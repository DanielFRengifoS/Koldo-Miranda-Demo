/* 08E · Activation-scoped motion, no global replay loop, no network dependency. */
(function () {
 'use strict';
 const root=document.documentElement, shell=document.querySelector('[data-intro-shell]');
 if(!shell)return;
 clearTimeout(window.__gtlIntroBoot);root.dataset.introBuilt='true';
 const id=root.dataset.introId, reduced=window.matchMedia?matchMedia('(prefers-reduced-motion: reduce)'):{matches:true,addEventListener(){}}, query=new URLSearchParams(location.search);
 const review=query.get('intro-review')==='1', frame=review?query.get('intro-frame'):null;
 const duration={'01':4100,'02':3700,'03':4200}[id];
 let effects=[],timers=[],active=false,runs=0,generation=0,phase='armed',lastWidth=innerWidth,lastHeight=innerHeight;
 const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
 document.body.append($('[data-intro-skip]'));
 function clear(){generation++;timers.forEach(clearTimeout);timers=[];effects.forEach(a=>a.cancel());effects=[];}
 function status(s,p){root.dataset.introStatus=s;root.dataset.introPhase=p||s;phase=p||s;}
 function finish(reason){clear();shell.hidden=true;status('ready');root.dataset.introEnd=reason||'complete';}
 function arm(){clear();if(reduced.matches){finish('reduced-motion');return;}shell.hidden=false;status('armed');}
 function animate(el,keys,start,len,easing){if(!el)return;const a=el.animate(keys,{delay:start,duration:len,easing:easing||'cubic-bezier(.22,.7,.2,1)',fill:'both'});a.finished.catch(()=>{});effects.push(a);return a;}
 function build(){
  const w=innerWidth,h=innerHeight, small=w<640;
  const star=$(id==='01'?'.star-folio':id==='02'?'#star-posters':'.star-atlas');
  const box=star.getBoundingClientRect();
  // The final pose is always the unmodified, interactive STAR in document flow.
  if(id==='01'){
   const path=$('[data-thread-path]'),x=box.left+Math.min(box.width*.16,100),y=Math.min(box.top+70,h*.74);
   path.setAttribute('d',`M ${w*.5} ${h*.59} C ${w*.5} ${h*.72}, ${x} ${h*.5}, ${x} ${y} L ${x} ${Math.min(box.bottom,h)}`);
   const length=path.getTotalLength();path.style.strokeDasharray=length;path.style.strokeDashoffset=length;
   animate($('.intro-signature-folio'),[{opacity:1,translate:'0 0px',offset:0,easing:'cubic-bezier(.2,.6,.3,1)'},{opacity:1,translate:'0 0px',offset:.28,easing:'linear'},{opacity:1,translate:'0 0px',offset:.68,easing:'cubic-bezier(.4,0,.6,1)'},{opacity:0,translate:'0 -35px',offset:1}],0,2400,'linear');
   animate($('.intro-small-line'),[{opacity:0},{opacity:1,offset:.4},{opacity:1,offset:.72},{opacity:0}],450,2050);
   animate(path,[{strokeDashoffset:length},{strokeDashoffset:0,offset:.73},{strokeDashoffset:0,opacity:0}],650,2500,'cubic-bezier(.55,0,.25,1)');
   animate(star,[{opacity:0,clipPath:'inset(0 50% 0 50%)',transform:'perspective(1400px) rotateY(-65deg) scale(.93)',transformOrigin:'16% 50%'},{opacity:1,clipPath:'inset(0 47% 0 47%)',offset:.12},{opacity:1,clipPath:'inset(0 0 0 0)',transform:'perspective(1400px) rotateY(0deg) scale(1)',offset:.82},{opacity:1,clipPath:'inset(0 0 0 0)',transform:'none'}],1350,2450,'linear');
   animate($('.star-book-body'),[{opacity:0,transform:'translateX(-30px)'},{opacity:1,transform:'none'}],1750,1550);
   animate($('.star-controls'),[{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'none'}],2050,1250);
   animate($('.intro-wine-left'),[{transform:'translateX(0)'},{transform:'translateX(-102%)'}],2450,1650);
   animate($('.intro-wine-right'),[{transform:'translateX(0)'},{transform:'translateX(102%)'}],2450,1650);
  }else if(id==='02'){
   animate($('.intro-signature-press'),[{clipPath:'inset(0 100% 0 0)',transform:'translateX(-20px)',offset:0,easing:'cubic-bezier(.2,.6,.3,1)'},{clipPath:'inset(0 0 0 0)',transform:'translateX(-2px)',offset:.3,easing:'linear'},{clipPath:'inset(0 0 0 0)',transform:'translateX(2px)',offset:.72,easing:'cubic-bezier(.4,0,.6,1)'},{clipPath:'inset(0 0 100% 0)',transform:'translate(0,-50px)',offset:1}],0,1100,'linear');
   animate($('.intro-press-symbol'),[{transform:'rotate(-12deg) scale(.85)',opacity:0,offset:0,easing:'cubic-bezier(.2,.6,.3,1)'},{transform:'rotate(-2deg) scale(.98)',opacity:1,offset:.24,easing:'linear'},{transform:'rotate(0deg) scale(1)',opacity:1,offset:.7,easing:'cubic-bezier(.4,0,.6,1)'},{transform:'translateY(-24px)',opacity:0,offset:1}],0,2000,'linear');
   animate($('.intro-press-note'),[{opacity:0},{opacity:1,offset:.25},{opacity:1,offset:.7},{opacity:0}],300,1700);
   $$('.intro-press-registration').forEach((el,i)=>animate(el,[{transform:i===2?'scaleY(0)':'scaleX(0)'},{transform:'scale(1)',offset:.25},{transform:'scale(1)',offset:.6},{transform:i===2?'scaleY(0)':'scaleX(0)'}],180+i*90,2250,'cubic-bezier(.8,0,.2,1)'));
   animate(star,[{opacity:0},{opacity:1}],1150,1);
   $$('#star-posters .territory').forEach((el,i)=>{
    animate(el,[{clipPath:'inset(0 0 100% 0)',transform:`translateY(${i?70:-70}px) rotate(${i?3:-3}deg)`},{clipPath:'inset(0 0 4% 0)',transform:`translateY(${i?5:-5}px) rotate(${i?.4:-.4}deg)`,offset:.7},{clipPath:'inset(0 0 0 0)',transform:'none'}],1200+i*220,2050,'cubic-bezier(.7,0,.2,1)');
    animate(el.querySelector('.territory__title'),[{transform:`translateX(${i?36:-36}px)`,opacity:0},{transform:'none',opacity:1}],1730+i*220,800,'steps(5,end)');
   });
   animate($('.intro-press-field'),[{clipPath:'inset(0 0 0 0)'},{clipPath:small?'inset(0 0 100% 0)':'inset(0 50% 0 50%)'}],2450,1250,'cubic-bezier(.8,0,.2,1)');
  }else{
   animate($('.intro-signature-atlas'),[{clipPath:'inset(0 0 0 100%)',opacity:1},{clipPath:'inset(0 0 0 0)',opacity:1,offset:.25},{clipPath:'inset(0 0 0 0)',opacity:1,offset:.65},{clipPath:'inset(0 0 0 0)',opacity:0,transform:'translateY(-25px)'}],0,2300,'linear');
   animate($('.intro-atlas-note'),[{opacity:0},{opacity:1,offset:.3},{opacity:1,offset:.65},{opacity:0}],200,2100);
   $$('.intro-grid-line,.intro-grid-rule').forEach((el,i)=>animate(el,[{opacity:0,transform:i===2?'scaleX(0)':'scaleY(0)'},{opacity:.3,transform:'scale(1)',offset:.35},{opacity:.3,offset:.65},{opacity:0,transform:'scale(1)'}],i*80,3000));
   const targets=$$('.atlas-region');
   $$('.intro-atlas-corner').forEach((el,i)=>{
    const from=el.getBoundingClientRect(),to=targets[i].getBoundingClientRect();
    const dx=(i?to.right-60:to.left)-from.left,dy=(i?Math.min(to.bottom,h)-60:to.top)-from.top;
    animate(el,[{opacity:0,transform:'scale(.5)'},{opacity:1,transform:'scale(1)',offset:.18},{opacity:1,transform:`translate(${dx}px,0)`,offset:.48},{opacity:1,transform:`translate(${dx}px,${dy}px)`,offset:.78},{opacity:0,transform:`translate(${dx}px,${dy}px) scale(1.3)`}],300,3250,'linear');
   });
   animate(star,[{opacity:0,clipPath:'inset(30% 45% 50% 45%)'},{opacity:1,clipPath:'inset(30% 45% 50% 45%)',offset:.1},{opacity:1,clipPath:'inset(0 0 0 0)',offset:.88},{opacity:1,clipPath:'inset(0 0 0 0)'}],1350,2450,'linear');
   $$('.atlas-region-image').forEach((el,i)=>animate(el,[{opacity:0,transform:`translate(${i?24:-24}px,32px)`},{opacity:1,transform:'none'}],2050+i*150,1250));
   $$('.atlas-large-type').forEach((el,i)=>animate(el,[{opacity:0,letterSpacing:'.3em'},{opacity:1,letterSpacing:'normal'}],2200+i*120,1050));
   animate($('.atlas-star-readings'),[{opacity:0,transform:'translateY(24px)'},{opacity:1,transform:'none'}],2900,900);
   animate($('.intro-atlas-field'),[{clipPath:'inset(0 0 0 0)'},{clipPath:'inset(0 0 100% 0)'}],2850,1350);
  }
 }
 function play(){
  if(reduced.matches||!Element.prototype.animate){finish('static');return;}
  if(runs===0&&location.hash&&!review){finish('direct-anchor');return;}
  clear();const ticket=generation;
  shell.hidden=false;status('playing','brand');runs++;root.dataset.introRuns=String(runs);root.dataset.introEnd='';
  // Covered repositioning keeps the destination in view without exposing a final-to-initial flash.
  window.scrollTo({top:0,left:0,behavior:'instant'});
  try{build();}catch(error){finish('animation-unavailable');return;}
  if(frame){
   if(frame==='end'){finish('review-arrival');return;}
   const time=frame==='first'?0:frame==='middle'?({'01':2150,'02':2150,'03':2550}[id]):800;
   effects.forEach(a=>{a.pause();a.currentTime=time;});status('playing',frame==='middle'?'review-middle':'review-start');return;
  }
  timers.push(setTimeout(()=>{if(ticket===generation)status('playing',id==='01'?'unfold':id==='02'?'impression':'mapping');},1150));
  timers.push(setTimeout(()=>{if(ticket===generation)status('playing','handoff');},duration-950));
  timers.push(setTimeout(()=>{if(ticket===generation)finish('complete');},duration));
 }
 function sync(){const next=(!window.GTLActivation||GTLActivation.isActive())&&!document.hidden;if(next===active)return;active=next;if(next)play();else arm();}
 $('[data-intro-skip]').addEventListener('click',()=>finish('skip'));
 document.addEventListener('keydown',e=>{if(root.dataset.introStatus!=='playing')return;if(['Escape','Tab','Enter',' ','ArrowDown','PageDown','End','Home'].includes(e.key))finish(e.key==='Escape'?'escape':'keyboard-intent');},true);
 ['wheel','touchstart'].forEach(name=>document.addEventListener(name,()=>{if(root.dataset.introStatus==='playing')finish('scroll-intent');},{passive:true,capture:true}));
 document.addEventListener('pointerdown',e=>{if(root.dataset.introStatus==='playing'&&!e.target.closest('[data-intro-skip]'))finish('pointer-intent');},true);
 window.addEventListener('resize',()=>{const changed=Math.abs(innerWidth-lastWidth)>4||Math.abs(innerHeight-lastHeight)>100;lastWidth=innerWidth;lastHeight=innerHeight;if(changed&&root.dataset.introStatus==='playing')finish('resize');});
 reduced.addEventListener('change',()=>{if(reduced.matches)finish('reduced-motion');});
 document.addEventListener('visibilitychange',sync);window.addEventListener('pagehide',()=>{active=false;arm();});window.addEventListener('pageshow',sync);
 if(window.GTLActivation)GTLActivation.subscribe(sync);
 window.GTLIntro=Object.freeze({getState:()=>({id,status:root.dataset.introStatus,phase,runs,active,effects:effects.length,duration,reduced:reduced.matches})});
 if(reduced.matches)finish('reduced-motion');else arm();sync();
})();
