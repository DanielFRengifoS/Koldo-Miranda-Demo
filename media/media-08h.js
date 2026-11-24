/* Muted automatic loops while the presentation and the video are visible. */
(() => {
 'use strict';
 const videos=Array.from(document.querySelectorAll('.curated-film video'));
 const visible=new Map(videos.map(video=>[video,false]));
 let leaving=false;
 const allowed=()=>!leaving&&!document.hidden&&(!window.GTLActivation||window.GTLActivation.isActive())&&!['armed','playing'].includes(document.documentElement.dataset.introStatus);
 const shouldPlay=video=>allowed()&&visible.get(video)&&!video.closest('details:not([open])');
 function syncVideo(video){
  if(!shouldPlay(video)){video.pause();return;}
  if(!video.paused)return;
  const result=video.play();
  if(result&&result.catch)result.catch(()=>{video.dataset.autoplayBlocked='true';});
 }
 const sync=()=>videos.forEach(syncVideo);
 videos.forEach(video=>{
  video.muted=true;video.defaultMuted=true;video.loop=true;
  video.addEventListener('play',()=>{if(!shouldPlay(video))video.pause();else delete video.dataset.autoplayBlocked;});
 });
 document.addEventListener('visibilitychange',sync);
 window.addEventListener('pagehide',()=>{leaving=true;sync();});
 window.addEventListener('pageshow',()=>{leaving=false;sync();});
 if(window.GTLActivation)window.GTLActivation.subscribe(sync);
 document.querySelectorAll('.curated-press').forEach(details=>details.addEventListener('toggle',sync));
 if('MutationObserver' in window)new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['data-intro-status']});
 if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{visible.set(entry.target,entry.isIntersecting);syncVideo(entry.target);}),{threshold:0});
  videos.forEach(video=>observer.observe(video));
 }else{
  const measure=()=>{videos.forEach(video=>{const box=video.getBoundingClientRect();visible.set(video,box.width>0&&box.height>0&&box.bottom>0&&box.top<innerHeight);});sync();};
  window.addEventListener('scroll',measure,{passive:true});window.addEventListener('resize',measure);measure();
 }
 sync();
})();
