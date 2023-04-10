(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[937],{4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return v},L:function(){return u},LL:function(){return R},Pz:function(){return m},UG:function(){return y},ZB:function(){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(let r in n)n.hasOwnProperty(r)&&"__proto__"!==r&&(t[r]=e(t[r],n[r]));return t}},ZR:function(){return O},aH:function(){return g},b$:function(){return w},eu:function(){return S},hl:function(){return C},jU:function(){return E},m9:function(){return x},ne:function(){return M},pd:function(){return B},r3:function(){return N},ru:function(){return I},tV:function(){return c},uI:function(){return _},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let a of r){if(!i.includes(a))return!1;let r=t[a],o=n[a];if(P(r)&&P(o)){if(!e(r,o))return!1}else if(r!==o)return!1}for(let e of i)if(!r.includes(e))return!1;return!0}},w1:function(){return A},xO:function(){return T},xb:function(){return D},z$:function(){return b},zd:function(){return k}});var r=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):(64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){let a=e[n++],o=e[n++],s=e[n++],l=((7&i)<<18|(63&a)<<12|(63&o)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,u=i>>2,c=(3&i)<<4|o>>4,d=(15&o)<<2|l>>6,h=63&l;s||(h=64,a||(d=64)),r.push(n[u],n[c],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length,o=a?n[e.charAt(t)]:0;++t;let l=t<e.length,u=l?n[e.charAt(t)]:64;++t;let c=t<e.length,d=c?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==u||null==d)throw new s;let h=i<<2|o>>4;if(r.push(h),64!==u){let e=o<<4&240|u>>2;if(r.push(e),64!==d){let e=u<<6&192|d;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return o.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},d=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,h=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},p=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&c(e[1]);return t&&JSON.parse(t)},f=()=>{try{return d()||h()||p()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},g=()=>{var e;return null===(e=f())||void 0===e?void 0:e.config},m=e=>{var t;return null===(t=f())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function _(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function y(){var e;let t=null===(e=f())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function E(){return"object"==typeof self&&self.self===self}function I(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function w(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function A(){let e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function C(){try{return"object"==typeof indexedDB}catch(e){return!1}}function S(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?i.replace(L,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${a} (${r}).`,s=new O(r,o,n);return s}}let L=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function D(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function P(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function k(e){let t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function B(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function M(e,t){let n=new U(e,t);return n.subscribe.bind(n)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=F),void 0===r.error&&(r.error=F),void 0===r.complete&&(r.complete=F);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){return e&&e._delegate?e._delegate:e}},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l=[],u=!1,c=-1;function d(){u&&r&&(u=!1,r.length?l=r.concat(l):c=-1,l.length&&h())}function h(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(r=l,l=[];++c<t;)r&&r[c].run();c=-1,t=l.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}},o=!0;try{t[e](a,a.exports,r),o=!1}finally{o&&delete n[e]}return a.exports}r.ab="//";var i=r(229);e.exports=i}()},655:function(e,t,n){"use strict";n.d(t,{_T:function(){return r}});function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}},8180:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(4444),i=n(740),a=n(5816),o=n(3333);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this._delegate=e,this.firebase=t,(0,a._addComponent)(e,new i.wA("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),(0,a.deleteApp)(this._delegate)))}_getService(e,t=a._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();let r=this._delegate.container.getProvider(e);return r.isInitialized()||(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)!=="EXPLICIT"||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=a._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,a._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,a._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}let l=new r.LL("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),u=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e(){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t={},n={__esModule:!0,initializeApp:function(i,o={}){let s=a.initializeApp(i,o);if((0,r.r3)(t,s.name))return t[s.name];let l=new e(s,n);return t[s.name]=l,l},app:i,registerVersion:a.registerVersion,setLogLevel:a.setLogLevel,onLog:a.onLog,apps:null,SDK_VERSION:a.SDK_VERSION,INTERNAL:{registerComponent:function(t){let o=t.name,s=o.replace("-compat","");if(a._registerComponent(t)&&"PUBLIC"===t.type){let a=(e=i())=>{if("function"!=typeof e[s])throw l.create("invalid-app-argument",{appName:o});return e[s]()};void 0!==t.serviceProps&&(0,r.ZB)(a,t.serviceProps),n[s]=a,e.prototype[s]=function(...e){let n=this._getService.bind(this,o);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:a}};function i(e){if(e=e||a._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw l.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),i.App=e,n}(s);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,r.ZB)(t,e)},createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),t}(),c=new o.Yd("@firebase/app-compat");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){c.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);let e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&c.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}let d=u;(0,a.registerVersion)("@firebase/app-compat","0.2.5",void 0)},5816:function(e,t,n){"use strict";let r,i;n.r(t),n.d(t,{FirebaseError:function(){return l.ZR},SDK_VERSION:function(){return F},_DEFAULT_ENTRY_NAME:function(){return S},_addComponent:function(){return N},_addOrOverwriteComponent:function(){return D},_apps:function(){return R},_clearComponents:function(){return B},_components:function(){return L},_getProvider:function(){return T},_registerComponent:function(){return P},_removeServiceInstance:function(){return k},deleteApp:function(){return V},getApp:function(){return j},getApps:function(){return W},initializeApp:function(){return x},onLog:function(){return z},registerVersion:function(){return H},setLogLevel:function(){return $}});var a,o=n(740),s=n(3333),l=n(4444);let u=(e,t)=>t.some(t=>e instanceof t),c=new WeakMap,d=new WeakMap,h=new WeakMap,p=new WeakMap,f=new WeakMap,g={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(m(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),f.set(t,e),t}(e);if(p.has(e))return p.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(v(this),e),m(c.get(this))}:function(...e){return m(t.apply(v(this),e))}:function(e,...n){let r=t.call(v(this),e,...n);return h.set(r,e.sort?e.sort():[e]),m(r)}:(t instanceof IDBTransaction&&function(e){if(d.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});d.set(e,t)}(t),u(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,g):t;return n!==e&&(p.set(e,n),f.set(n,e)),n}let v=e=>f.get(e),b=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],y=new Map;function E(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(y.get(t))return y.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||b.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return y.set(t,a),a}g={...a=g,get:(e,t,n)=>E(e,t)||a.get(e,t,n),has:(e,t)=>!!E(e,t)||a.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let w="@firebase/app",A="0.9.5",C=new s.Yd("@firebase/app"),S="[DEFAULT]",O={[w]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},R=new Map,L=new Map;function N(e,t){try{e.container.addComponent(t)}catch(n){C.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function D(e,t){e.container.addOrOverwriteComponent(t)}function P(e){let t=e.name;if(L.has(t))return C.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(L.set(t,e),R.values()))N(n,e);return!0}function T(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function k(e,t,n=S){T(e,t).clearInstance(n)}function B(){L.clear()}let M=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw M.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F="9.18.0";function x(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let r=Object.assign({name:S,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw M.create("bad-app-name",{appName:String(i)});if(n||(n=(0,l.aH)()),!n)throw M.create("no-options");let a=R.get(i);if(a){if((0,l.vZ)(n,a.options)&&(0,l.vZ)(r,a.config))return a;throw M.create("duplicate-app",{appName:i})}let s=new o.H0(i);for(let e of L.values())s.addComponent(e);let u=new U(n,r,s);return R.set(i,u),u}function j(e=S){let t=R.get(e);if(!t&&e===S)return x();if(!t)throw M.create("no-app",{appName:e});return t}function W(){return Array.from(R.values())}async function V(e){let t=e.name;R.has(t)&&(R.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function H(e,t,n){var r;let i=null!==(r=O[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){let e=[`Unable to register library "${i}" with version "${t}":`];a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),C.warn(e.join(" "));return}P(new o.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function z(e,t){if(null!==e&&"function"!=typeof e)throw M.create("invalid-log-argument");(0,s.Am)(e,t)}function $(e){(0,s.Ub)(e)}let Z="firebase-heartbeat-store",G=null;function Y(){return G||(G=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,1),s=m(o);return r&&o.addEventListener("upgradeneeded",e=>{r(m(o.result),e.oldVersion,e.newVersion,m(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),s})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(Z)}}).catch(e=>{throw M.create("idb-open",{originalErrorMessage:e.message})})),G}async function K(e){try{let t=await Y();return t.transaction(Z).objectStore(Z).get(q(e))}catch(e){if(e instanceof l.ZR)C.warn(e.message);else{let t=M.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});C.warn(t.message)}}}async function J(e,t){try{let n=await Y(),r=n.transaction(Z,"readwrite"),i=r.objectStore(Z);return await i.put(t,q(e)),r.done}catch(e){if(e instanceof l.ZR)C.warn(e.message);else{let t=M.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});C.warn(t.message)}}}function q(e){return`${e.name}!${e.options.appId}`}class X{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ee(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Q();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=Q(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),et(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),et(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,l.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Q(){let e=new Date;return e.toISOString().substring(0,10)}class ee{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await K(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return J(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return J(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function et(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}P(new o.wA("platform-logger",e=>new I(e),"PRIVATE")),P(new o.wA("heartbeat",e=>new X(e),"PRIVATE")),H(w,A,""),H(w,A,"esm2017"),H("fire-js","")},740:function(e,t,n){"use strict";n.d(t,{H0:function(){return s},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);n===i&&t.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===a?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";var r,i;n.d(t,{Am:function(){return h},Ub:function(){return d},Yd:function(){return c},in:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},s=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=l[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=s,this._logHandler=u,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function d(e){a.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(let n of a){let i=null;t&&t.level&&(i=o[t.level]),null===e?n.userLogHandler=null:n.userLogHandler=(t,n,...a)=>{let o=a.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:a,type:t.name})}}}},4866:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.Z}});var r=n(8180);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */r.Z.registerVersion("firebase","9.18.0","app-compat")},8522:function(e,t,n){"use strict";var r,i=n(8180),a=n(4378),o=n(4444);n(5816),n(3333);var s=n(740);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return window}async function u(e,t,n){var r;let{BuildInfo:i}=l();(0,a.ap)(t.sessionId,"AuthEvent did not contain a session ID");let o=await h(t.sessionId),s={};return(0,a.aq)()?s.ibi=i.packageName:(0,a.ar)()?s.apn=i.packageName:(0,a.as)(e,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,(0,a.at)(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,s)}async function c(e){let{BuildInfo:t}=l(),n={};(0,a.aq)()?n.iosBundleId=t.packageName:(0,a.ar)()?n.androidPackageName=t.packageName:(0,a.as)(e,"operation-not-supported-in-this-environment"),await (0,a.au)(e,n)}async function d(e,t,n){let{cordova:r}=l(),i=()=>{};try{await new Promise((o,s)=>{let l=null;function u(){var e;o();let t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function c(){l||(l=window.setTimeout(()=>{s((0,a.aw)(e,"redirect-cancelled-by-user"))},2e3))}function d(){(null==document?void 0:document.visibilityState)==="visible"&&c()}t.addPassiveListener(u),document.addEventListener("resume",c,!1),(0,a.ar)()&&document.addEventListener("visibilitychange",d,!1),i=()=>{t.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),l&&window.clearTimeout(l)}})}finally{i()}}async function h(e){let t=function(e){if((0,a.ap)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return new TextEncoder().encode(e);let t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map(e=>e.toString(16).padStart(2,"0")).join("")}class p extends a.ay{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}async function f(e){let t=await g()._get(m(e));return t&&await g()._remove(m(e)),t}function g(){return(0,a.az)(a.b)}function m(e){return(0,a.aA)("authEvent",e.config.apiKey,e.name)}function v(e){if(!(null==e?void 0:e.includes("?")))return{};let[t,...n]=e.split("?");return(0,o.zd)(n.join("?"))}let b=class{constructor(){this._redirectPersistence=a.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=a.aB,this._overrideRedirectResult=a.aC}async _initialize(e){let t=e._key(),n=this.eventManagers.get(t);return n||(n=new p(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){(0,a.as)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){!function(e){var t,n,r,i,o,s,u,c,d,h;let p=l();(0,a.ax)("function"==typeof(null===(t=null==p?void 0:p.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,a.ax)(void 0!==(null===(n=null==p?void 0:p.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,a.ax)("function"==typeof(null===(o=null===(i=null===(r=null==p?void 0:p.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===o?void 0:o.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,a.ax)("function"==typeof(null===(c=null===(u=null===(s=null==p?void 0:p.cordova)||void 0===s?void 0:s.plugins)||void 0===u?void 0:u.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,a.ax)("function"==typeof(null===(h=null===(d=null==p?void 0:p.cordova)||void 0===d?void 0:d.InAppBrowser)||void 0===h?void 0:h.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);let i=await this._initialize(e);await i.initialized(),i.resetRedirect(),(0,a.aD)(),await this._originValidation(e);let o=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:function(){let e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){let n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}(),postBody:null,tenantId:e.tenantId,error:(0,a.aw)(e,"no-auth-event")}}(e,n,r);await g()._set(m(e),o);let s=await u(e,o,t),c=await function(e){let{cordova:t}=l();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,(0,a.av)()?"_blank":"_system","location=yes"),n(i)})})}(s);return d(e,i,c)}_isIframeWebStorageSupported(e,t){throw Error("Method not implemented.")}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=c(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){let{universalLinks:n,handleOpenURL:r,BuildInfo:i}=l(),o=setTimeout(async()=>{await f(e),t.onEvent(_())},500),s=async n=>{clearTimeout(o);let r=await f(e),i=null;r&&(null==n?void 0:n.url)&&(i=function(e,t){var n,r;let i=function(e){let t=v(e),n=t.link?decodeURIComponent(t.link):void 0,r=v(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0,a=v(i).link;return a||i||r||n||e}(t);if(i.includes("/__/auth/callback")){let t=v(i),o=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,s=null===(r=null===(n=null==o?void 0:o.code)||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],l=s?(0,a.aw)(s):null;return l?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}(r,n.url)),t.onEvent(i||_())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,s);let u=`${i.packageName.toLowerCase()}://`;l().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(u)&&s({url:e}),"function"==typeof r)try{r(e)}catch(e){console.error(e)}}}};function _(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,a.aw)("no-auth-event")}}function y(){var e;return(null===(e=null==self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function E(e=(0,o.z$)()){return!!(("file:"===y()||"ionic:"===y()||"capacitor:"===y())&&e.toLowerCase().match(/iphone|ipad|ipod|android/))}function I(){try{let e=self.localStorage,t=a.aI();if(e){if(e.setItem(t,"1"),e.removeItem(t),function(e=(0,o.z$)()){return(0,o.w1)()&&(null==document?void 0:document.documentMode)===11||function(e=(0,o.z$)()){return/Edge\/\d+/.test(e)}(e)}())return(0,o.hl)();return!0}}catch(e){return w()&&(0,o.hl)()}return!1}function w(){return void 0!==n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function A(){return("http:"===y()||"https:"===y()||(0,o.ru)()||E())&&!((0,o.b$)()||(0,o.UG)())&&I()&&!w()}function C(){return E()&&"undefined"!=typeof document}async function S(){return!!C()&&new Promise(e=>{let t=setTimeout(()=>{e(!1)},1e3);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O={LOCAL:"local",NONE:"none",SESSION:"session"},R=a.ax,L="persistence";async function N(e){await e._initializationPromise;let t=D(),n=a.aA(L,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function D(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P=a.ax;class T{constructor(){this.browserResolver=a.az(a.k),this.cordovaResolver=a.az(b),this.underlyingResolver=null,this._redirectPersistence=a.a,this._completeRedirectFn=a.aB,this._overrideRedirectResult=a.aC}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return C()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return P(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;let e=await S();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}function k(e){let t;let{_tokenResponse:n}=e instanceof o.ZR?e.customData:e;if(!n)return null;if(!(e instanceof o.ZR)&&"temporaryProof"in n&&"phoneNumber"in n)return a.P.credentialFromResult(e);let r=n.providerId;if(!r||r===a.o.PASSWORD)return null;switch(r){case a.o.GOOGLE:t=a.Q;break;case a.o.FACEBOOK:t=a.N;break;case a.o.GITHUB:t=a.T;break;case a.o.TWITTER:t=a.W;break;default:let{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:l,pendingToken:u,nonce:c}=n;if(!s&&!l&&!i&&!u)return null;if(u){if(r.startsWith("saml."))return a.aL._create(r,u);return a.J._fromParams({providerId:r,signInMethod:r,pendingToken:u,idToken:i,accessToken:s})}return new a.U(r).credential({idToken:i,accessToken:s,rawNonce:c})}return e instanceof o.ZR?t.credentialFromError(e):t.credentialFromResult(e)}function B(e,t){return t.catch(t=>{throw t instanceof o.ZR&&function(e,t){var n;let r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if((null==t?void 0:t.code)==="auth/multi-factor-auth-required"){let n=t;n.resolver=new U(e,a.an(e,t))}else if(r){let e=k(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}(e,t),t}).then(e=>{let t=e.operationType,n=e.user;return{operationType:t,credential:k(e),additionalUserInfo:a.al(e),user:F.getOrCreate(n)}})}async function M(e,t){let n=await t;return{verificationId:n.verificationId,confirm:t=>B(e,n.confirm(t))}}class U{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return B(this.auth.unwrap(),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this._delegate=e,this.multiFactor=a.ao(e)}static getOrCreate(e){return F.USER_MAP.has(e)||F.USER_MAP.set(e,new F(e)),F.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return B(this.auth,a.Z(this._delegate,e))}async linkWithPhoneNumber(e,t){return M(this.auth,a.l(this._delegate,e,t))}async linkWithPopup(e){return B(this.auth,a.d(this._delegate,e,T))}async linkWithRedirect(e){return await N(a.aE(this.auth)),a.g(this._delegate,e,T)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return B(this.auth,a._(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return M(this.auth,a.r(this._delegate,e,t))}reauthenticateWithPopup(e){return B(this.auth,a.e(this._delegate,e,T))}async reauthenticateWithRedirect(e){return await N(a.aE(this.auth)),a.h(this._delegate,e,T)}sendEmailVerification(e){return a.ab(this._delegate,e)}async unlink(e){return await a.ak(this._delegate,e),this}updateEmail(e){return a.ag(this._delegate,e)}updatePassword(e){return a.ah(this._delegate,e)}updatePhoneNumber(e){return a.u(this._delegate,e)}updateProfile(e){return a.af(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return a.ac(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}F.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x=a.ax;class j{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}let{apiKey:n}=e.options;x(n,"invalid-api-key",{appName:e.name}),x(n,"invalid-api-key",{appName:e.name});let r="undefined"!=typeof window?T:void 0;this._delegate=t.initialize({options:{persistence:function(e,t){let n=function(e,t){let n=D();if(!n)return[];let r=a.aA(L,e,t),i=n.getItem(r);switch(i){case O.NONE:return[a.L];case O.LOCAL:return[a.i,a.a];case O.SESSION:return[a.a];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(a.i)||n.push(a.i),"undefined"!=typeof window)for(let e of[a.b,a.a])n.includes(e)||n.push(e);return n.includes(a.L)||n.push(a.L),n}(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(a.B),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?F.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){a.G(this._delegate,e,t)}applyActionCode(e){return a.a2(this._delegate,e)}checkActionCode(e){return a.a3(this._delegate,e)}confirmPasswordReset(e,t){return a.a1(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return B(this._delegate,a.a5(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return a.aa(this._delegate,e)}isSignInWithEmailLink(e){return a.a8(this._delegate,e)}async getRedirectResult(){x(A(),this._delegate,"operation-not-supported-in-this-environment");let e=await a.j(this._delegate,T);return e?B(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){(0,a.aE)(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,n){let{next:r,error:i,complete:a}=W(e,t,n);return this._delegate.onAuthStateChanged(r,i,a)}onIdTokenChanged(e,t,n){let{next:r,error:i,complete:a}=W(e,t,n);return this._delegate.onIdTokenChanged(r,i,a)}sendSignInLinkToEmail(e,t){return a.a7(this._delegate,e,t)}sendPasswordResetEmail(e,t){return a.a0(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(!function(e,t){if(R(Object.values(O).includes(t),e,"invalid-persistence-type"),(0,o.b$)()){R(t!==O.SESSION,e,"unsupported-persistence-type");return}if((0,o.UG)()){R(t===O.NONE,e,"unsupported-persistence-type");return}if(w()){R(t===O.NONE||t===O.LOCAL&&(0,o.hl)(),e,"unsupported-persistence-type");return}R(t===O.NONE||I(),e,"unsupported-persistence-type")}(this._delegate,e),e){case O.SESSION:t=a.a;break;case O.LOCAL:let n=await a.az(a.i)._isAvailable();t=n?a.i:a.b;break;case O.NONE:t=a.L;break;default:return a.as("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return B(this._delegate,a.X(this._delegate))}signInWithCredential(e){return B(this._delegate,a.Y(this._delegate,e))}signInWithCustomToken(e){return B(this._delegate,a.$(this._delegate,e))}signInWithEmailAndPassword(e,t){return B(this._delegate,a.a6(this._delegate,e,t))}signInWithEmailLink(e,t){return B(this._delegate,a.a9(this._delegate,e,t))}signInWithPhoneNumber(e,t){return M(this._delegate,a.s(this._delegate,e,t))}async signInWithPopup(e){return x(A(),this._delegate,"operation-not-supported-in-this-environment"),B(this._delegate,a.c(this._delegate,e,T))}async signInWithRedirect(e){return x(A(),this._delegate,"operation-not-supported-in-this-environment"),await N(this._delegate),a.f(this._delegate,e,T)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return a.a4(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function W(e,t,n){let r=e;"function"!=typeof e&&({next:r,error:t,complete:n}=e);let i=r,a=e=>i(e&&F.getOrCreate(e));return{next:a,error:t,complete:n}}j.Persistence=O;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(){this.providerId="phone",this._delegate=new a.P(i.Z.auth().unwrap())}static credential(e,t){return a.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}V.PHONE_SIGN_IN_METHOD=a.P.PHONE_SIGN_IN_METHOD,V.PROVIDER_ID=a.P.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H=a.ax;(r=i.Z).INTERNAL.registerComponent(new s.wA("auth-compat",e=>{let t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new j(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:a.A.EMAIL_SIGNIN,PASSWORD_RESET:a.A.PASSWORD_RESET,RECOVER_EMAIL:a.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:a.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:a.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:a.A.VERIFY_EMAIL}},EmailAuthProvider:a.M,FacebookAuthProvider:a.N,GithubAuthProvider:a.T,GoogleAuthProvider:a.Q,OAuthProvider:a.U,SAMLAuthProvider:a.V,PhoneAuthProvider:V,PhoneMultiFactorGenerator:a.m,RecaptchaVerifier:class{constructor(e,t,n=i.Z.app()){var r;H(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new a.R(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}},TwitterAuthProvider:a.W,Auth:j,AuthCredential:a.H,Error:o.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),r.registerVersion("@firebase/auth-compat","0.3.5")}}]);