'use strict';
// Regression contract for real welcome.js/activation-bridge.js; no browser dependencies.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const dir=process.argv[2]||path.resolve(__dirname,'..');
class Element {
 constructor(attrs={}) {this.attrs={...attrs};this.dataset={};this.events={};this.hidden=false;this.tabIndex=0;this.style={setProperty(){}};const classes=new Set();this.classList={contains:x=>classes.has(x),add:(...xs)=>xs.forEach(x=>classes.add(x)),remove:(...xs)=>xs.forEach(x=>classes.delete(x)),toggle:(x,on)=>on?classes.add(x):classes.delete(x)};}
 addEventListener(name,fn){(this.events[name]||=[]).push(fn);}
 removeEventListener(name,fn){this.events[name]=(this.events[name]||[]).filter(x=>x!==fn);}
 emit(name,e={}){(this.events[name]||[]).forEach(fn=>fn(e));}
 getAttribute(n){return this.attrs[n]??null;}
 setAttribute(n,v){this.attrs[n]=String(v);if(n==='src'&&this.loaded)this.loaded();}
 removeAttribute(n){delete this.attrs[n];}
 focus(){}
 click(){this.emit('click',{button:0,preventDefault(){},defaultPrevented:false});}
}
function hub(protocol,forceFailure=false,initialHash='#01'){
 const origin=protocol==='file:'?'null':'https://demo.example';
 const queue=[],errors=[],messages=[];const nodes={bienvenida:new Element(), 'empezar-demo':new Element(),'volver-portada':new Element(),'demo-aperture':new Element()};
 const frameNodes=['01','02','03'].map(id=>{const f=new Element();f.dataset={demo:id,src:id+'/index.html'};f.contentWindow={postMessage(message,target){if(target==='null')throw new SyntaxError('Invalid target origin null');if(forceFailure){forceFailure=false;throw new Error('Transport failure');}messages.push({id,target,...message});}};f.loaded=()=>queue.push(()=>f.emit('load'));nodes['frame-'+id]=f;return f;});
 const buttons=['01','02','03'].map(id=>{const b=new Element({'aria-controls':'frame-'+id,'aria-selected':String(id==='01')});b.dataset.demo=id;nodes['tab-'+id]=b;return b;});
 const outer=new Element(),switcher=new Element(),body=new Element();outer.hidden=true;
 const document={hidden:false,body,getElementById:id=>nodes[id]||null,querySelector:s=>s==='.hub'?outer:s==='.switch'?switcher:null,querySelectorAll:()=>buttons,events:{},addEventListener:Element.prototype.addEventListener};
 const location={protocol,origin,pathname:'/index.html',search:'',hash:initialHash};
 const window={document,location,history:{pushState(a,b,url){location.hash=url.startsWith('#')?url:'';},replaceState(a,b,url){location.hash=url.startsWith('#')?url:'';}},matchMedia:()=>({matches:false}),requestAnimationFrame:fn=>queue.push(fn),setTimeout:fn=>queue.push(fn),clearTimeout(){},events:{},addEventListener:Element.prototype.addEventListener};
 const context={window,document,console:{warn(){}},Map,Array};vm.runInNewContext(fs.readFileSync(path.join(dir,'welcome.js'),'utf8'),context);
 function flush(){for(let count=0;queue.length&&count<100;count++){try{queue.shift()();}catch(e){errors.push(e.message);}}}
 function click(id){try{nodes['tab-'+id].click();}catch(e){errors.push(e.message);}flush();}
 function selected(){return buttons.find(b=>b.getAttribute('aria-selected')==='true').dataset.demo;}
 flush();return {click,selected,errors,messages,frames:frameNodes,document,window,flush};
}
if(process.argv.includes('--expect-old-bug')){
 const h=hub('file:');assert(h.errors.some(x=>x.includes('origin null')));assert.equal(h.messages.filter(x=>x.state==='active').length,0);h.click('02');assert.equal(h.selected(),'01');h.click('02');assert.equal(h.selected(),'02');console.log(JSON.stringify({reproduced:true,local_intro_activation_messages:0,first_click_selected:'01',second_click_selected:'02',cause:'postMessage targetOrigin null throws before selection completes'}));process.exit(0);
}
for(const protocol of ['file:','https:']){
 const h=hub(protocol);assert.deepEqual(h.errors,[]);assert.equal(h.messages.filter(m=>m.id==='01'&&m.state==='active').length,1);
 for(const id of ['02','03','01','03','02','01']){h.click(id);assert.equal(h.selected(),id,'one click must select '+id);assert.equal(h.frames.filter(f=>f.classList.contains('is-on')).length,1);assert.equal(h.messages.at(-1).id,id);assert.equal(h.messages.at(-1).state,'active');}
 const count=h.messages.length;h.click('01');assert.equal(h.messages.length,count,'same tab must not replay');
 assert(h.messages.every(m=>m.target===(protocol==='file:'?'*':'https://demo.example')));
 assert.equal(h.messages.filter(m=>m.id==='03'&&m.state==='active').length,2);assert.equal(h.frames[2].dataset.activationState,'inactive');
 assert.equal(h.errors.length,0);
}
// Opening the cover preloads every view without starting hidden intros.
for(const protocol of ['file:','https:']){
 const cold=hub(protocol,false,'');
 assert(cold.frames.every(f=>f.getAttribute('src')===f.dataset.src));
 assert.equal(cold.messages.filter(m=>m.state==='active').length,0);
 assert(cold.frames.every(f=>f.dataset.activationState==='inactive'));
 cold.click('02');
 assert.equal(cold.messages.filter(m=>m.state==='active').length,0,'cover must keep preloaded intros inactive');
}
const failed=hub('file:',true);failed.click('02');assert.equal(failed.selected(),'02','message errors must not require another click');assert.equal(failed.errors.length,0);assert.notEqual(failed.frames[0].dataset.activationState,'active','failed sends must not be cached as successful');
// Receiver still trusts only its parent and the matching origin, including file opaque origin.
for(const origin of ['null','https://demo.example']){
 const events={};const document={documentElement:{dataset:{}}};const parent={};let notifications=0;
 const window={parent,location:{origin},addEventListener(n,fn){(events[n]||=[]).push(fn);},removeEventListener(){},dispatchEvent(e){(events[e.type]||[]).forEach(fn=>fn(e));}};
 vm.runInNewContext(fs.readFileSync(path.join(dir,'activation-bridge.js'),'utf8'),{window,document,CustomEvent:class{constructor(type,options){this.type=type;this.detail=options.detail;}}});
 window.GTLActivation.subscribe(()=>notifications++);
 const data={type:'gtlai:activation',version:1,state:'active',demo:'01'};
 const send=(source,from,payload=data)=>(events.message||[]).forEach(fn=>fn({source,origin:from,data:payload}));
 send({},origin);send(parent,'https://untrusted.example');assert.equal(window.GTLActivation.isActive(),false);
 send(parent,origin);assert.equal(window.GTLActivation.isActive(),true);send(parent,origin);assert.equal(notifications,1);
 send(parent,origin,{...data,state:'inactive'});assert.equal(window.GTLActivation.isActive(),false);assert.equal(notifications,2);
}
// Review controls use the same local-file transport without requiring a second click.
for(const protocol of ['file:','https:']){
 const origin=protocol==='file:'?'null':'https://demo.example',messages=[];
 const frame=new Element();frame.parentElement={clientWidth:1400,style:{}};frame.contentWindow={postMessage(message,target){assert.notEqual(target,'null');messages.push({message,target});}};
 const play=new Element(),status=new Element();
 const options=['01','02','03'].map(id=>{const b=new Element();b.dataset.option=id;return b;});
 const sizes=['desktop','mobile'].map(size=>{const b=new Element();b.dataset.size=size;return b;});
 const poses=['start','middle','end'].map(pose=>{const b=new Element();b.dataset.frame=pose;return b;});
 const document={hidden:false,querySelector:s=>s==='#intro-preview'?frame:s==='[data-play]'?play:status,querySelectorAll:s=>s==='[data-option]'?options:s==='[data-size]'?sizes:poses,addEventListener(){}};
 vm.runInNewContext(fs.readFileSync(path.join(dir,'intro/intro-review.js'),'utf8'),{window:{addEventListener(){}},document,location:{protocol,origin,search:''},URLSearchParams});
 assert.equal(messages[0].target,protocol==='file:'?'*':origin);
 options[1].click();frame.emit('load');assert(frame.src.startsWith('02/index.html?'));assert.equal(options[1].getAttribute('aria-pressed'),'true');
 const count=messages.length;options[1].click();assert.equal(messages.length,count);
 play.click();frame.emit('load');assert.equal(frame.src,'02/index.html?intro-review=1');
}
console.log(JSON.stringify({passed:true,protocols:['file:','https:'],one_click_transitions:12,duplicate_activation:'deduplicated',transport_failure:'does not block switching or cache success',receiver:'parent and origin validation preserved'}));
