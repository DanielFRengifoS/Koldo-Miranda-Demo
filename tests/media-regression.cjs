'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=process.argv[2]||path.resolve(__dirname,'..');
let detailsOpen=true;
class Video{constructor(){this.events={};this.dataset={};this.paused=true;} addEventListener(n,f){this.events[n]=f;} pause(){this.paused=true;} play(){this.paused=false;this.events.play();return Promise.resolve();}closest(){return this===videos[1]&&!detailsOpen?{}:null;}}
const videos=[new Video(),new Video()],events={},lifecycle={},details={addEventListener(n,f){this[n]=f}};
let active=true,observe,introSync;
const document={hidden:false,documentElement:{dataset:{introStatus:'armed'}},querySelectorAll:s=>s.includes('video')?videos:[details],addEventListener(n,f){events[n]=f}};
const window={GTLActivation:{isActive:()=>active,subscribe:f=>lifecycle.active=f},addEventListener(n,f){lifecycle[n]=f},IntersectionObserver:true,MutationObserver:true};
class IntersectionObserver{constructor(f){observe=f}observe(){}}
class MutationObserver{constructor(f){introSync=f}observe(){}}
vm.runInNewContext(fs.readFileSync(path.join(root,'media/media-08h.js'),'utf8'),{window,document,IntersectionObserver,MutationObserver,Array,Map});
observe(videos.map(target=>({target,isIntersecting:true})));assert(videos.every(v=>v.paused),'wait for intro');
document.documentElement.dataset.introStatus='ready';introSync();assert(videos.every(v=>!v.paused&&v.muted&&v.loop),'all visible videos autoplay together');
active=false;lifecycle.active();assert(videos.every(v=>v.paused));videos[0].play();assert(videos[0].paused,'inactive view rejects native autoplay');
active=true;lifecycle.active();assert(videos.every(v=>!v.paused),'reactivation resumes loops');
document.hidden=true;events.visibilitychange();assert(videos.every(v=>v.paused));document.hidden=false;events.visibilitychange();assert(videos.every(v=>!v.paused));
detailsOpen=false;details.toggle();assert(videos[1].paused);detailsOpen=true;details.toggle();assert(!videos[1].paused);
observe([{target:videos[0],isIntersecting:false}]);assert(videos[0].paused);observe([{target:videos[0],isIntersecting:true}]);assert(!videos[0].paused,'returning onscreen resumes');
lifecycle.pagehide();assert(videos.every(v=>v.paused));lifecycle.pageshow();assert(videos.every(v=>!v.paused));
console.log(JSON.stringify({passed:true,muted_simultaneous_loops:true,intro_gated:true,visibility_activation_details_and_offscreen_resume:true}));
