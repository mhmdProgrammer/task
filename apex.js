(()=>{var e={779:e=>{e.exports="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZmlsbDogd2hpdGU7ZmlsdGVyOmRyb3Atc2hhZG93KDBweCAzcHggM3B4IHJnYmEoMCwwLDAsMC4yKSk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDQzLjYsMzg3LjFMMzEyLjQsMjU1LjRsMTMxLjUtMTMwYzUuNC01LjQsNS40LTE0LjIsMC0xOS42bC0zNy40LTM3LjZjLTIuNi0yLjYtNi4xLTQtOS44LTRjLTMuNywwLTcuMiwxLjUtOS44LDQgTDI1NiwxOTcuOEwxMjQuOSw2OC4zYy0yLjYtMi42LTYuMS00LTkuOC00Yy0zLjcsMC03LjIsMS41LTkuOCw0TDY4LDEwNS45Yy01LjQsNS40LTUuNCwxNC4yLDAsMTkuNmwxMzEuNSwxMzBMNjguNCwzODcuMSBjLTIuNiwyLjYtNC4xLDYuMS00LjEsOS44YzAsMy43LDEuNCw3LjIsNC4xLDkuOGwzNy40LDM3LjZjMi43LDIuNyw2LjIsNC4xLDkuOCw0LjFjMy41LDAsNy4xLTEuMyw5LjgtNC4xTDI1NiwzMTMuMWwxMzAuNywxMzEuMSBjMi43LDIuNyw2LjIsNC4xLDkuOCw0LjFjMy41LDAsNy4xLTEuMyw5LjgtNC4xbDM3LjQtMzcuNmMyLjYtMi42LDQuMS02LjEsNC4xLTkuOEM0NDcuNywzOTMuMiw0NDYuMiwzODkuNyw0NDMuNiwzODcuMXoiLz48L3N2Zz4g"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(t,n){const i={};Object.assign(i,t);const r={};return Object.keys(n).forEach((t=>{Array.isArray(n[t])?Array.isArray(i[t])?r[t]=n[t].concat(i[t]):r[t]=n[t].slice():n[t]instanceof HTMLElement?r[t]=n[t]:n[t]instanceof Object?r[t]=e(i[t],n[t]):r[t]=n[t]})),Object.assign(i,r),i}const t={debuggerOn:!1,isEnabled(){return this.debuggerOn},set(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.debuggerOn=!!e},log(){if(this.debuggerOn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log.apply(null,t)}},warn(){if(this.debuggerOn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.warn.apply(null,t)}}};function i(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=Math.floor(16*Math.random());return("x"===e?t:3&t|8).toString(16)}))}const r={init(e,t){this.debugger=t,this.beaconConfig=e},update(e){const{stats_url:t,stats_topic:n,stats_sampling_rate:r}=this.beaconConfig;if(r&&100*Math.random()>parseFloat(r))return void this.debugger.log("NFBeacon - event discarded because of sampling");const a=`${[t,n,"/",e,"-",this.beaconConfig._test_UUID||i()].join("")}?${["account_id","site_id","zone_id","size_id"].map((e=>`${e}=${this.beaconConfig[e]}`)).join("&")}&event=${e}`,o=new Image;this.debugger.isEnabled()&&(o.addEventListener("load",(()=>{this.debugger.log(`NFBeacon updated: ${a}`)})),o.addEventListener("error",(e=>{this.debugger.log(`NFBeacon update failed: ${a}:`,e)}))),void 0!==t&&""!==t?o.src=a:this.debugger.log("NFBeacon - Empty URL!")}},a=r;let o={},s=!0,l=0;const d={reset(){o={},s=!0,l=0},setConsentData(e,t){t>l&&(l=t,o=e)},getGDPR:()=>o,get consent(){return s},set consent(e){s=e}};let c=()=>{};const p=i();let u="";function h(e,n,i){t.log("CCPA uspHandler",e,n,i===p),n&&(u=e.uspString),c()}window.addEventListener("message",(e=>{e&&e.data&&e.data.__uspapiReturn&&h(e.data.__uspapiReturn.returnValue,e.data.__uspapiReturn.success,e.data.__uspapiReturn.callId)}),!1);const g={createUspPromise(e){return"us_privacy"in e?(t.log("CCPA: got us_privacy from adParameters"),new Promise((t=>{this.uspString=e.us_privacy,t()}))):new Promise((e=>{let n=!1;c=()=>{n=!0,e()},this.uspApiCall(),setTimeout((()=>{n||(t.log("CCPA: no response"),n=!0,c())}),100)}))},registerCb(e){c=e},uspApiCall(){window.__uspapi?(t.log("CCPA: call USP API on the same frame"),window.__uspapi("getUSPData",1,h)):(t.log("CCPA: send message to USP API"),window.top.postMessage({__uspapiCall:{callId:p,command:"getUSPData",version:1}},"*"))},set uspString(e){u=e},get uspString(){return u}},{top:m}=window;function w(e,t,n,i){let r=!1;try{r=!!e.document}catch(e){}const a={window:e,accessible:r,width:-1,height:-1,referer:null,href:null};let o=i;return t&&i<0&&(o=r&&function(e,t){const n=t.document.getElementsByTagName(e.tagName);let i=!1,r=0;for(;r<n.length;r+=1)if(e===n[r]){i=!0;break}return i}(t,e)?n.length:-1),r&&(a.referer=e.document.referrer,a.width=e.innerWidth,a.height=e.innerHeight,a.href=e.location.href),n.push(a),e===m?{stack:n,needle:i}:w(e.parent,t,n,o)}function f(e,t){const n=w(e,t,[],-1);let i=n.stack.length-1,r=2147483647,a=2147483647,o=0;for(-1===n.needle&&(n.needle=0);i>=n.needle&&!n.stack[i].accessible;i-=1)o+=1;for(n.highest=i,n.depth=o,i=n.needle;i<=n.highest;i+=1)r=r>n.stack[i].width?n.stack[i].width:r,a=a>n.stack[i].height?n.stack[i].height:a;return n.minWidth=r,n.minHeight=a,n}function y(e,n){let{width:i,height:r,magnite:a}=e,{node:o}=n;if(!(a.account_id&&a.site_id&&a.zone_id&&a.size_id))return t.warn("magnite: incorrect configuration",a),null;const{vastBaseUrl:s,vastQueryTypes:l,vastQuery:c}=a,p=function(e,t){const n=f(e,t);return{depth:n.depth,minWidth:n.minWidth,minHeight:n.minHeight,url:n.stack[n.highest].href,referrer:n.stack[n.highest].referer,domain:n.stack[n.highest].window.location.host}}(window,o);let u={rf:p.depth?p.referrer:p.url};const h=d.getGDPR();"gdpr"in h&&(u.gdpr=h.gdpr),"gdpr_consent"in h&&(u.gdpr_consent=h.gdpr_consent),g.uspString&&(u.us_privacy=g.uspString);const m={width:207===Number(a.size_id)?window.innerWidth:i,height:207===Number(a.size_id)?window.innerHeight:r,account_id:a.account_id,site_id:a.site_id,zone_id:a.zone_id,size_id:a.size_id,"p_window.depth":p.depth,"p_window.w":p.minWidth,"p_window.h":p.minHeight,"p_window.url":p.referrer,rp_secure:"https:"===window.location.protocol?1:0,tk_apex:2,cb:1e18*Math.random()};"object"==typeof a.adParams&&(u={...u,...a.adParams}),u={...u,...m};const w=Object.entries(u).map((e=>{let[t,n]=e;return`${encodeURIComponent(t)}=${encodeURIComponent(n)}`})).join("&");return`${s}${l[c]}?${w}`}function x(e,t,n,i){const r=e.createElement(t);return"object"==typeof n&&Object.entries(n).forEach((e=>{let[t,n]=e,i=n;"object"==typeof n&&(i=Object.entries(n).map((e=>{let[t,n]=e;return`${t}:${n}`})).join(";")),r.setAttribute(t,i)})),void 0!==i&&r.appendChild(e.createTextNode(i)),r}function C(e){const t=new Image;return t.src=e,t}function b(e){let{innerText:t}=e;return t.split(" ").length}function v(e,t){const n=Math.floor(t/2);let i=0;return e.find((e=>(i+=b(e),i>=n)))}function _(e,t){const{elements:n,node:i}=function(e){const t=[];[...document.getElementsByTagName(e)].forEach((e=>{const{parentNode:n}=e,i=b(e),r=t.findIndex((e=>e===n));-1===r?(t.push(n),t[t.length-1].wordsCount=i):t[r].wordsCount+=i}));const n=t.reduce(((e,t)=>e.wordsCount>t.wordsCount?e:t)),i=[...n.getElementsByTagName(e)];return{node:n,elements:i}}(t);return"bottom"===e?{node:n[n.length-1]}:"middle"===e?{node:v(n,i.wordsCount)}:{node:n[0],position:"before"}}function P(e){let t=e;Array.isArray(t)||(t=[t]);const n=t.reduce(((e,t)=>e&&e.node?e:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"p",n={},{attachTo:i}=e;i||(i="top"),/^(top|middle|bottom)$/.test(i)?n=0===document.getElementsByTagName(t).length?{node:document.getElementsByTagName("body")[0],position:"prepend"}:_(i,t):i instanceof HTMLElement?n.node=i:n.node=document.querySelector(i);return{...e,...n}}(t)),{node:null});return null===n.node?null:n}function T(e,t,n){switch(e){case"append":t.append(n);break;case"prepend":t.prepend(n);break;case"before":t.before(n);break;default:t.after(n)}}const M={parallaxStepCoefficient:5,stopScroll:{delay:1e3,rangeArea:200,scrollToTreshold:200},resizeRangeAspectRatio:.2};class L{constructor(e){let{parallaxStepCoefficient:t,stopScroll:n,resizeRangeAspectRatio:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M;this.playerWrapper=e,this.parallaxStepCoefficient=t,this.stopScroll=n,this.resizeRangeAspectRatio=i,this.fakeWrapper=x(document,"div"),this.scrollListener={handleEvent:()=>{const{top:e}=this.playerWrapper.getBoundingClientRect();this.setParallaxTransformPosition(e),this.stopScroll&&this.stickScrollTemporarily(e,this.stopScroll)}},this.resizeListener={handleEvent:()=>{this.isResized()&&this.resize()}}}initialize(e,t){this.playerFrame=this.playerWrapper.firstChild,e.on("ready",(()=>{this.elementToParallax=t||this.playerFrame.contentDocument.querySelector(".jw-media"),this.elementToParallax.style.willChange="transform",this.playerWrapper.style.left=0,this.playerWrapper.style.position="absolute",this.playerWrapper.style.zIndex=999,this.playerWrapper.style.background="#000",this.setWrapperTopPosition()}),this),e.on("beforePlay",(()=>{this.playerFrame.contentDocument.querySelector(".jw-controls-backdrop").remove(),window.addEventListener("scroll",this.scrollListener),window.addEventListener("resize",this.resizeListener),this.resize()}),this),e.on("complete",(()=>{this.destroy()}),this)}resize(){this.setWrapperTopPosition(),this.setParallaxTransformPosition();const e=this.playerFrame.contentDocument.querySelector(".jw-aspect"),t=window.innerHeight/window.innerWidth,n=16/9;this.playerWrapper.style.height="auto",this.playerFrame.style.width=t<1.3?100*t/n+"%":"100%";const i=e.offsetHeight;t>1.9&&(this.playerWrapper.style.height=i-Math.floor(this.parallaxTransformShiftValue)+"px"),this.fakeWrapper.style.height=`${i}px`,this.playerFrame.style.height="auto",this.lastAspectRatio=t}destroy(){window.removeEventListener("scroll",this.scrollListener),window.removeEventListener("resize",this.resizeListener),this.fakeWrapper.remove()}setWrapperTopPosition(){const{top:e}=this.fakeWrapper.getBoundingClientRect();this.playerWrapper.style.top=`${e+document.documentElement.scrollTop}px`}setParallaxTransformPosition(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.parallaxTransformShiftValue=e/this.parallaxStepCoefficient,this.elementToParallax.style.transform=`translateY(${-this.parallaxTransformShiftValue}px) translateZ(0)`}isResized(){const e=window.innerHeight/window.innerWidth;return Math.abs(this.lastAspectRatio-e)>this.resizeRangeAspectRatio}stickScrollTemporarily(e,t){let{delay:n,rangeArea:i,scrollToTreshold:r}=t;if(e>-i&&e<i){if(Math.abs(this.lastScrollTop-e)<r)return;window.scrollTo({top:this.playerWrapper.offsetTop,behavior:"smooth"}),document.documentElement.style.overflowY="hidden",setTimeout((()=>{document.documentElement.style.overflowY="auto"}),n)}this.lastScrollTop=e}}const A={setApexConfig(e){return this.apexConfig=e,this},setPlacement(e){return this.position=e.position,this.align=e.align,this.node=e.node,this},setRandomId(e){return this.randomId=e,this},setPlayerController(e){return this.playerController=e,this},setupPlayerWrapper(){const{apexConfig:e,randomId:t,align:n}=this;return this.attachPlayerTo=`${e.player.attachTo}-${t}`,this.playerWrapper=function(e,t){let n="center";return"left"===t&&(n="flex-start"),"right"===t&&(n="flex-end"),x(document,"div",{id:`MagniteApex-wrapper-${e}`,style:{width:"100%",overflow:"hidden",position:"relative",clear:"both",display:"flex","justify-content":n}})}(t,n),this},setupPlayerIframe(){const{apexConfig:e,attachPlayerTo:t,randomId:n,playerController:i}=this,r=function(e,t,n){return x(document,"iframe",{id:`MagniteApex-iframe-${n}`,style:{"background-color":"transparent",border:"0px none transparent",margin:"0px",padding:"0px",overflow:"hidden",width:`${t}px`,height:"1px",display:"block"},srcdoc:`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body style="margin:0px;padding:0px;overflow:hidden"><div id="${e}"></div></body></html>`})}(t,e.width,n);return r.onload=()=>{const e=r.contentWindow,t=e.document;this.postAttach(e),i.iframeSizeWatch=setInterval((()=>{const e=`${t.documentElement.scrollHeight}px`;r.style.height!==e&&(r.style.height=e)}),30)},this.playerFrame=r,this},setupPlayerContainer(){const{apexConfig:e,attachPlayerTo:t}=this;var n,i;return this.playerFrame=(n=t,i=e.width,x(document,"div",{id:n,style:{"background-color":"transparent",border:"0px none transparent",margin:"0px",padding:"0px",overflow:"hidden",width:`${i}px`,display:"block"}})),this},setupVertical(){const{apexConfig:e,playerController:t,playerWrapper:n}=this;e.isMobile&&207===Number(e.magnite.size_id)&&(e.label=!1,e.collapse=!1,e.width="100%",e.player.jwplayer.aspectratio="9:16",t.verticalVideo=new L(n))},attachPlayerToPage(){const{playerWrapper:e,playerController:t,playerFrame:n,position:i,node:r}=this;return e.appendChild(n),t.verticalVideo?(document.body.appendChild(this.playerWrapper),T(i,r,t.verticalVideo.fakeWrapper),this):(T(i,r,e),this)},startPlayer(){return this.postAttach(window)},postAttach(e){const{apexConfig:n,attachPlayerTo:i,playerWrapper:r,playerController:a}=this;return t.log("Apex Config",n),function(e,t,n){const i=x(e,"script",{type:"text/javascript",src:t});i.onload=n,i.onabort=n,i.onerror=n,e.head.appendChild(i)}(e.document,n.player[n.renderer].playerUrl,(()=>a.init(r,e,n,i))),this}};function j(e,n,i){/^(time|adTime|bufferChange)$/.test(n)||t.log(`[ ${n} ]`,(new Date).toISOString(),i)}var k=n(779),N=n.n(k);function D(e,n){t.log(`Heard the adImpression: ${(new Date).toISOString()}`,n);!function(e,t,n){if(!t.closeButton)return;const i={position:"absolute",width:"20px",height:"20px",margin:"0px 0px 20px 20px",top:"5px",right:"5px",left:"auto",bottom:"auto","background-image":`url(${N()})`,"background-repeat":"no-repeat","background-size":"contain",display:"block",cursor:"pointer","pointer-events":"all"},r=t.isMobile?"touchend":"click",a=x(document,"div",{class:"magnite-apex-close",style:i});a.addEventListener(r,(e=>{e.preventDefault(),n.remove()}),!1),e.appendChild(a)}(e.jwplayer.getContainer(),e.apexConfig,e);const i=e.apexConfig.adImpression;i&&C(i)}function S(e){const t=e.apexConfig.adClick;t&&C(t)}function z(n,i){const{apexConfig:r}=n,{multiFormat:a}=r;t.log(`Ad ERROR: ${(new Date).toISOString()}`,i),a&&r.isMobile&&207===Number(r.magnite.size_id)?function(){const t=e(JSON.parse(window.MagniteApex.initialConfig),{magnite:{size_id:203},multiFormat:!1});window.MagniteApex.initApex(t)}():n.callPassback(),n.remove()}function E(e){const t=e.windowWithPlayer.document.getElementsByClassName("jw-video")[0];t&&t.setAttribute("crossorigin",!0)}let I;function R(e,t){const n=e.windowWithPlayer.document;if(t.duration-t.position>2||I)return;const i=n.getElementsByClassName("jw-video")[0];if(!i)return;const r=n.createElement("canvas");r.width=i.videoWidth,r.height=i.videoHeight,r.getContext("2d").drawImage(i,0,0),I=r.toDataURL("image/jpeg")}const O={init(t,n,i,r){const a=function(t){const n={width:t.width,height:t.height,advertising:{client:"imasdk"===t.adClient?"googima":"vast",tag:t.vastUrl,endstate:t.collapse?"close":"suspended"},intl:{en:{advertising:{admessage:" "}}}};t.floating&&!t.isMobile&&(n.floating={mode:"notVisible",dismissible:!1}),t.label&&(n.displayHeading=!0,n.intl.en.advertising.displayHeading=t.label);const i=e(t.player.jwplayer,n);return delete i.playerUrl,i}(i);if(function(e){const t=e.document,n=x(t,"style",{type:"text/css"});n.innerHTML=".jw-icon.jw-icon-inline.jw-icon-fullscreen {display:none}",t.head.appendChild(n)}(n),this.jwplayer=n.jwplayer(r),this.jwplayer.setup(a),this.apexConfig=i,this.wrapper=t,this.windowWithPlayer=n,this.verticalVideo)this.verticalVideo.initialize(this.jwplayer);else{const{width:e}=t.firstChild.getBoundingClientRect();if(e!==a.width){const t=e/a.width,n=a.height*t;this.resize(e,n)}}i.apexdebug&&this.addListener("all",j),this.addListener("beforePlay",E),this.addListener("adImpression",D),this.addListener("adClick",S),this.addListener("adError",z),this.addListener("complete",(()=>setTimeout((()=>this.remove()),200))),i.replay&&(I=null,this.addListener("adTime",R))},resize(e,t){return this.jwplayer.resize(e,t)},addListener(e,t){var n=this;return this.jwplayer.on(e,(function(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return t(n,...i)}))},isPresent:e=>!!e.jwplayer,remove(){const{wrapper:e,windowWithPlayer:t,apexConfig:n}=this;if(this.verticalVideo&&this.verticalVideo.destroy(),this.jwplayer&&this.jwplayer.remove(),this.iframeSizeWatch&&clearInterval(this.iframeSizeWatch),e.firstChild&&e.firstChild.remove(),n.replay){const t=function(e,t){const n=`${t.width}px`,i=`${t.height}px`,r=x(window.document,"div",{style:{width:n,height:i,color:"#FFFFFF","background-color":"rgba(0,0,0,0.6);","font-family":"sans-serif","font-size":`${Math.ceil(t.height/4)}px`,"text-align":"center","line-height":i,cursor:"pointer"},class:"apex-replay"});if(r.addEventListener("click",(()=>{e.firstChild&&e.firstChild.remove(),e.remove(),window.MagniteApex.initApex(JSON.parse(window.MagniteApex.initialConfig))})),r.innerText="⟲",I){const e=x(window.document,"div",{style:{width:n,height:i,"background-color":"#000000","background-image":`url(${I})`,"background-repeat":"no-repeat","background-size":"contain","background-position":"center"}});return e.appendChild(r),e}return r}(e,n);setTimeout((()=>{e.appendChild(t)}),0)}else e.removeAttribute("style"),n.collapse||e.appendChild(function(e,t){return x(e.document,"div",{style:{width:`${t.width}px`,height:`${t.height}px`}})}(t,n))},callPassback(){const{passback:e}=this.apexConfig;e&&"function"==typeof window[e]&&(t.log("Calling passback function:",e),window[e](this.wrapper))}};let W=()=>{},F=0;function $(e,n){t.log("GDPR TCFv1 handler",e,n);let i={};e&&!1!==n?(i.gdpr=e.gdprApplies?1:0,e.consentData&&(i.gdpr_consent=e.consentData)):i={gdpr:0},d.setConsentData(i,1),W()}window.addEventListener("message",(e=>{e&&e.data&&e.data.__cmpReturn&&$(e.data.__cmpReturn.returnValue,e.data.__cmpReturn.success)}),!1);const U={createConsentPromise(e){return"gdpr"in e&&"gdpr_consent"in e?(t.log("GDPR TCFv1: got consent from adParameters"),new Promise((t=>{d.setConsentData({gdpr:e.gdpr,gdpr_consent:e.gdpr_consent},1),t()}))):new Promise((e=>{let n=!1;W=()=>{n=!0,e()},this.getConsentData(),setTimeout((()=>{n||(t.log("GDPR TCFv1: no response"),n=!0,W())}),100)}))},registerCb(e){W=e},getConsentData(){window.__cmp?(t.log("GDPR TCFv1: call API on the same frame"),window.__cmp("getConsentData",null,$)):(t.log("GDPR TCFv1: send message to locator iframe"),F+=1,window.top.postMessage({__cmpCall:{callId:`iframe:${F}`,command:"getConsentData"}},"*"))}};let B=()=>{},H=0;function G(e){try{if(e.frames.__tcfapiLocator)return t.log("GDPR TCFv2: __tcfapiLocator iframe found"),e}catch(e){}return e===window.top?(t.log("GDPR TCFv2: no __tcfapiLocator iframe detected"),null):G(e.parent)}function V(e,n){t.log("GDPR TCFv2 handler",e,n);let i={};e&&!1!==n?(i.gdpr=e.gdprApplies?1:0,e.tcString&&(i.gdpr_consent=e.tcString)):i={gdpr:0},d.setConsentData(i,2),B()}window.addEventListener("message",(e=>{e&&e.data&&e.data.__tcfapiReturn&&V(e.data.__tcfapiReturn.returnValue,e.data.__tcfapiReturn.success)}),!1);const Y={createConsentPromise(e){return"gdpr"in e&&"gdpr_consent"in e?(t.log("GDPR TCFv2: got consent from adParameters"),new Promise((t=>{d.setConsentData({gdpr:e.gdpr,gdpr_consent:e.gdpr_consent},2),t()}))):new Promise((e=>{let n=!1;B=()=>{n=!0,e()},this.getConsentData(),setTimeout((()=>{n||(t.log("GDPR TCFv2: no response"),n=!0,B())}),100)}))},registerCb(e){B=e},getConsentData(){if(window.__tcfapi)t.log("GDPR TCFv2: call API on the same frame"),window.__tcfapi("getTCData",2,V);else{t.log("GDPR TCFv2: detect locator iframe");const e=G(window);if(!e)return;t.log("GDPR TCFv2: send message to locator iframe"),H+=1,e.postMessage({__tcfapiCall:{callId:`iframe:${H}`,command:"getTCData",version:2}},"*")}}},Q={k_apexdebug:"apexdebug",k_apextest:"apextest",k_collapse:"collapse",k_multiFormat:"multiFormat",k_close:"closeButton"},J={width:"width",height:"height",k_label:"label",k_includeAd:"includeAd",k_excludeAd:"excludeAd",k_adImp:"adImpression",k_adClick:"adClick",k_passback:"passback"},Z=["k_logo","k_audio","k_fcap","k_fhours","k_placement","k_pos","k_align"];function q(t,n){const[,i,r,a,o]=t,s=function(t){let n;try{n=JSON.parse(t)}catch(e){console.warn("Missing or invalid JSON options object, will use default settings."),n={}}return("object"!=typeof n||Array.isArray(n)||null===n)&&(console.warn("Invalid options object, will use default settings."),n={}),e({width:640,height:360,k_placement:"a/top",k_pos:"after",k_align:"center",k_collapse:1,k_multiFormat:1},n)}(n),l={placement:[],magnite:{account_id:Number(i),site_id:Number(r),zone_id:Number(a),size_id:Number(o),adParams:{}}};return s.k_placement.split(",").forEach((e=>{const[,t]=e.split("/");l.placement.push({attachTo:t,position:s.k_pos,align:s.k_align})})),Object.entries(Q).forEach((e=>{let[t,n]=e;t in s&&(l[n]=1===Number(s[t]),delete s[t])})),Object.entries(J).forEach((e=>{let[t,n]=e;t in s&&(l[n]=s[t],delete s[t])})),Z.forEach((e=>delete s[e])),Object.entries(s).forEach((e=>{let[t,n]=e;l.magnite.adParams[t]=n})),l}const X={magnite:{vastBaseUrl:"https://optimized-by.rubiconproject.com",vastQueryTypes:{legacy:"/a/api/vast",vastFriendly:"/a/api/vast_friendly"},vastQuery:"legacy",testAd:"https://trp-apex2-testad-prod.s3.us-west-2.amazonaws.com/testad.xml",stats_url:"https://beacon-nf.rubiconproject.com/beacon/e/",stats_topic:"apxpixelload",stats_sampling_rate:10},jwplayer:{playerUrl:"https://cdn.jwplayer.com/libraries/PmDJ5b8g.js"}},K={width:640,height:360,collapse:!0,multiFormat:!0,closeButton:!1,floating:!1,defaultPlacement:{attachTo:"top",position:"after",align:"center"},renderer:"jwplayer",magnite:X.magnite,player:{attachTo:"MagniteApexPlayer",jwplayer:{playerUrl:X.jwplayer.playerUrl,autostart:!1,mute:!0,width:0,height:0,advertising:{vpaidmode:"insecure",vpaidcontrols:!0,admessage:" ",outstream:!0,client:"vast",autoplayadsmuted:!0,endstate:"close"},autoPause:{viewability:!0,pauseAds:!0}}}};window.MagniteApex={playAd:function(e,t){const n=Object.create(O),i=Object.create(A);i.setApexConfig(e).setRandomId(Math.random()).setPlacement(t).setPlayerController(n).setupPlayerWrapper().setupVertical(),n.isPresent(window)||n.verticalVideo||e.replay?i.setupPlayerIframe().attachPlayerToPage():i.setupPlayerContainer().attachPlayerToPage().startPlayer()},initApex:function(n){console.info("Magnite Apex","2.3.1");const i=e(K,n);if(t.log("Apex Parameters",n),a.init(i.magnite,t),a.update("apex_loaded"),function(e){return!(!e.includeAd||document.querySelectorAll(e.includeAd).length)||!(!e.excludeAd||!document.querySelectorAll(e.excludeAd).length)}(i))return void console.warn("Apex: placement is not allowed by includeAd/excludeAd option");i.isMobile="unknown"!==function(){const e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":"unknown"}();const r=P(i.placement||i.defaultPlacement);r?i.isMobile||207!==Number(i.magnite.size_id)?(i.vastUrl=i.vastUrl||y(i,r),(window.location.href.includes("apextest=1")||n.apextest)&&(i.vastUrl=i.magnite.testAd),window.MagniteApex.playAd(i,r)):console.warn("Apex: vertical video placement is supported on mobile platforms only"):console.warn("Apex: no valid player placement found!")},renderAd:function(e){let n=!!e.apexdebug;window.location.href.includes("apexdebug=1")&&(n=!0),t.set(n);const i=e.magnite&&e.magnite.adParams?e.magnite.adParams:{},r=Y.createConsentPromise(i),a=U.createConsentPromise(i),o=g.createUspPromise(i),s={...e,apexdebug:n};return window.MagniteApex.initialConfig=JSON.stringify(s),Promise.resolve().then((()=>r)).then((()=>a)).then((()=>o)).then((()=>window.MagniteApex.initApex(s)))}},function(){const e=window.document.currentScript||function(){const e=document.getElementsByTagName("script");return e[e.length-1]}(),t=/\/(\d+?)\/(\d+?)\/(\d+?)\/(\d+?)\//.exec(e.src);if(!t)return;const n=q(t,e.textContent||e.innerText);console.log("Generated config for Apex2:","\n",JSON.stringify(n)),window.MagniteApex.renderAd(n)}()})()})();