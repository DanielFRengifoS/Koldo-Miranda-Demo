'use strict';
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const directory=process.argv[2]||path.resolve(__dirname,'..');
class Events{constructor(){this.events={};}addEventListener(n,f){(this.events[n]||=new Set()).add(f);}removeEventListener(n,f){this.events[n]?.delete(f);}emit(n,e={}){[...(this.events[n]||[])].forEach(f=>f(e));}count(n){return this.events[n]?.size||0;}}
class Element extends Events{constructor(){super();this.dataset={};this.children=[];this.attrs={};this.properties={};this.style={setProperty:(n,v)=>this.properties[n]=v,removeProperty:n=>delete this.properties[n]};}append(e){this.children.push(e);}setAttribute(n,v){this.attrs[n]=v;}getBoundingClientRect(){return {top:100,left:20,width:1000,height:900};}querySelectorAll(){return this.posters||[];}}
const results=[];
for(const id of ['01','02','03']){
 const root=new Element(),star=new Element(),hero=new Element(),posters=[new Element(),new Element()];root.dataset={introId:id,introStatus:'playing'};star.dataset.motion='idle';star.posters=posters;
 const doc=new Events();doc.documentElement=root;doc.hidden=false;doc.querySelector=s=>s==='[data-star]'?star:hero;doc.createElement=()=>new Element();
 const window=new Events(),reduced=new Events(),fine=new Events();reduced.matches=false;fine.matches=true;
 let bridgeActive=true,activation,intersection;const bridge={isActive:()=>bridgeActive,subscribe:fn=>activation=fn};window.GTLActivation=bridge;
 const frames=new Map();let nextFrame=1;const mutations=[];
 class MO{constructor(cb){this.cb=cb;mutations.push(this);}observe(){}}
 class IO{constructor(cb){intersection=cb;}observe(){}}
 window.IntersectionObserver=IO;
 const context={window,document:doc,GTLActivation:bridge,matchMedia:q=>q.includes('prefers-reduced')?reduced:fine,MutationObserver:MO,IntersectionObserver:IO,innerHeight:900,requestAnimationFrame:fn=>{const id=nextFrame++;frames.set(id,fn);return id;},cancelAnimationFrame:id=>frames.delete(id),console};
 vm.runInNewContext(fs.readFileSync(path.join(directory,'atmosphere/atmosphere-08f.js'),'utf8'),context);
 const state=()=>window.GTLAtmosphere.getState(),flush=()=>{const work=[...frames];frames.clear();work.forEach(([,fn])=>fn());},mutate=()=>mutations.forEach(m=>m.cb());
 const host=id==='03'?hero:star;
 assert.equal(state().state,'suspended');assert.equal(state().updates,0);assert.equal(frames.size,0);assert.equal(window.count('scroll'),0);
 root.dataset.introStatus='ready';mutate();assert.equal(state().state,'active');
 assert.equal(frames.size,id==='02'?0:1);flush();const updates=state().updates;assert.equal(frames.size,0,'idle must not enqueue another frame');
 if(id!=='02'){for(let i=0;i<20;i++)window.emit('scroll');assert.equal(frames.size,1,'events coalesce into one RAF');flush();assert.equal(state().updates,updates+1);}
 if(id==='01'){host.emit('pointermove',{pointerType:'mouse',clientX:3000,clientY:3000});flush();assert.equal(host.properties['--atmos-paper-x'],'10.00px');}
 reduced.matches=true;reduced.emit('change');assert.equal(state().state,'quiet');assert.equal(state().listening,false);assert.equal(frames.size,0);window.emit('scroll');assert.equal(frames.size,0);
 fine.matches=false;fine.emit('change');reduced.matches=false;reduced.emit('change');assert.equal(host.count('pointermove'),0,'touch-only must not keep a pointer listener');flush();
 star.dataset.motion='changing';mutate();assert.equal(state().state,'quiet');assert.equal(frames.size,0);star.dataset.motion='idle';mutate();flush();
 intersection([{isIntersecting:false}]);assert.equal(state().state,'suspended');assert.equal(frames.size,0);assert.equal(window.count('scroll'),0);intersection([{isIntersecting:true}]);flush();
 bridgeActive=false;activation();assert.equal(state().state,'suspended');assert.equal(frames.size,0);bridgeActive=true;root.dataset.introStatus='playing';activation();assert.equal(state().state,'suspended');assert.equal(frames.size,0);
 root.dataset.introStatus='ready';mutate();doc.hidden=true;doc.emit('visibilitychange');assert.equal(state().state,'suspended');assert.equal(frames.size,0);doc.hidden=false;doc.emit('visibilitychange');flush();
 window.emit('pagehide');assert.equal(state().state,'suspended');assert.equal(window.count('scroll'),0);assert.equal(frames.size,0);window.emit('pageshow');flush();assert.equal(state().state,'active');
 if(id==='02')assert.equal(state().updates,0,'ink aura needs no RAF');
 results.push({id,intro_does_no_work:true,idle_has_no_frame_loop:true,events_coalesce:true,reduced_and_touch:true,star_transition_quiet:true,offscreen_and_inactive_suspend:true,page_lifecycle:true});
}
console.log(JSON.stringify({passed:true,results}));
