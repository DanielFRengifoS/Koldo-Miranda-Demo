(() => {
 const frame=document.getElementById('media-preview'),stage=document.getElementById('stage');
 frame.addEventListener('load',()=>frame.contentWindow.postMessage({type:'gtlai:activation',version:1,state:'active',reason:'media-review'},location.protocol==='file:'?'*':location.origin));
 frame.src=frame.dataset.src;
 document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  frame.src=button.dataset.view+'/index.html?intro-review=1&intro-frame=end';
 }));
 document.querySelectorAll('[data-width]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-width]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  stage.style.maxWidth=button.dataset.width+'px';
 }));
})();
