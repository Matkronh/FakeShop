function Am(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Om(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kd={exports:{}},vo={},qd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=Symbol.for("react.element"),Lm=Symbol.for("react.portal"),jm=Symbol.for("react.fragment"),Dm=Symbol.for("react.strict_mode"),Mm=Symbol.for("react.profiler"),bm=Symbol.for("react.provider"),Um=Symbol.for("react.context"),Fm=Symbol.for("react.forward_ref"),zm=Symbol.for("react.suspense"),$m=Symbol.for("react.memo"),Wm=Symbol.for("react.lazy"),oc=Symbol.iterator;function Vm(t){return t===null||typeof t!="object"?null:(t=oc&&t[oc]||t["@@iterator"],typeof t=="function"?t:null)}var Qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yd=Object.assign,Jd={};function Tr(t,e,n){this.props=t,this.context=e,this.refs=Jd,this.updater=n||Qd}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Tr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xd(){}Xd.prototype=Tr.prototype;function Vl(t,e,n){this.props=t,this.context=e,this.refs=Jd,this.updater=n||Qd}var Bl=Vl.prototype=new Xd;Bl.constructor=Vl;Yd(Bl,Tr.prototype);Bl.isPureReactComponent=!0;var ac=Array.isArray,Zd=Object.prototype.hasOwnProperty,Hl={current:null},ef={key:!0,ref:!0,__self:!0,__source:!0};function tf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zd.call(e,r)&&!ef.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:bi,type:t,key:s,ref:o,props:i,_owner:Hl.current}}function Bm(t,e){return{$$typeof:bi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gl(t){return typeof t=="object"&&t!==null&&t.$$typeof===bi}function Hm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lc=/\/+/g;function qo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hm(""+t.key):e.toString(36)}function vs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bi:case Lm:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+qo(o,0):r,ac(i)?(n="",t!=null&&(n=t.replace(lc,"$&/")+"/"),vs(i,e,n,"",function(u){return u})):i!=null&&(Gl(i)&&(i=Bm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ac(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+qo(s,a);o+=vs(s,e,n,l,i)}else if(l=Vm(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+qo(s,a++),o+=vs(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qi(t,e,n){if(t==null)return t;var r=[],i=0;return vs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Gm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ne={current:null},gs={transition:null},Km={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:gs,ReactCurrentOwner:Hl};D.Children={map:Qi,forEach:function(t,e,n){Qi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qi(t,function(){e++}),e},toArray:function(t){return Qi(t,function(e){return e})||[]},only:function(t){if(!Gl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=Tr;D.Fragment=jm;D.Profiler=Mm;D.PureComponent=Vl;D.StrictMode=Dm;D.Suspense=zm;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Km;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yd({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Zd.call(e,l)&&!ef.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:bi,type:t.type,key:i,ref:s,props:r,_owner:o}};D.createContext=function(t){return t={$$typeof:Um,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bm,_context:t},t.Consumer=t};D.createElement=tf;D.createFactory=function(t){var e=tf.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:Fm,render:t}};D.isValidElement=Gl;D.lazy=function(t){return{$$typeof:Wm,_payload:{_status:-1,_result:t},_init:Gm}};D.memo=function(t,e){return{$$typeof:$m,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=gs.transition;gs.transition={};try{t()}finally{gs.transition=e}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(t,e){return Ne.current.useCallback(t,e)};D.useContext=function(t){return Ne.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return Ne.current.useDeferredValue(t)};D.useEffect=function(t,e){return Ne.current.useEffect(t,e)};D.useId=function(){return Ne.current.useId()};D.useImperativeHandle=function(t,e,n){return Ne.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return Ne.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return Ne.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return Ne.current.useMemo(t,e)};D.useReducer=function(t,e,n){return Ne.current.useReducer(t,e,n)};D.useRef=function(t){return Ne.current.useRef(t)};D.useState=function(t){return Ne.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return Ne.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return Ne.current.useTransition()};D.version="18.2.0";qd.exports=D;var S=qd.exports;const $=Om(S),qm=Am({__proto__:null,default:$},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm=S,Ym=Symbol.for("react.element"),Jm=Symbol.for("react.fragment"),Xm=Object.prototype.hasOwnProperty,Zm=Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ev={key:!0,ref:!0,__self:!0,__source:!0};function nf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Xm.call(e,r)&&!ev.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ym,type:t,key:s,ref:o,props:i,_owner:Zm.current}}vo.Fragment=Jm;vo.jsx=nf;vo.jsxs=nf;Kd.exports=vo;var c=Kd.exports,Aa={},rf={exports:{}},Ve={},sf={exports:{}},of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,O){var j=C.length;C.push(O);e:for(;0<j;){var J=j-1>>>1,ae=C[J];if(0<i(ae,O))C[J]=O,C[j]=ae,j=J;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var O=C[0],j=C.pop();if(j!==O){C[0]=j;e:for(var J=0,ae=C.length,Ki=ae>>>1;J<Ki;){var vn=2*(J+1)-1,Ko=C[vn],gn=vn+1,qi=C[gn];if(0>i(Ko,j))gn<ae&&0>i(qi,Ko)?(C[J]=qi,C[gn]=j,J=gn):(C[J]=Ko,C[vn]=j,J=vn);else if(gn<ae&&0>i(qi,j))C[J]=qi,C[gn]=j,J=gn;else break e}}return O}function i(C,O){var j=C.sortIndex-O.sortIndex;return j!==0?j:C.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,g=3,y=!1,_=!1,E=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(C){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=C)r(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function w(C){if(E=!1,v(C),!_)if(n(l)!==null)_=!0,fe(k);else{var O=n(u);O!==null&&Me(w,O.startTime-C)}}function k(C,O){_=!1,E&&(E=!1,m(x),x=-1),y=!0;var j=g;try{for(v(O),h=n(l);h!==null&&(!(h.expirationTime>O)||C&&!ne());){var J=h.callback;if(typeof J=="function"){h.callback=null,g=h.priorityLevel;var ae=J(h.expirationTime<=O);O=t.unstable_now(),typeof ae=="function"?h.callback=ae:h===n(l)&&r(l),v(O)}else r(l);h=n(l)}if(h!==null)var Ki=!0;else{var vn=n(u);vn!==null&&Me(w,vn.startTime-O),Ki=!1}return Ki}finally{h=null,g=j,y=!1}}var R=!1,P=null,x=-1,b=5,L=-1;function ne(){return!(t.unstable_now()-L<b)}function oe(){if(P!==null){var C=t.unstable_now();L=C;var O=!0;try{O=P(!0,C)}finally{O?ke():(R=!1,P=null)}}else R=!1}var ke;if(typeof p=="function")ke=function(){p(oe)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,It=ge.port2;ge.port1.onmessage=oe,ke=function(){It.postMessage(null)}}else ke=function(){I(oe,0)};function fe(C){P=C,R||(R=!0,ke())}function Me(C,O){x=I(function(){C(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){_||y||(_=!0,fe(k))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var j=g;g=O;try{return C()}finally{g=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,O){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var j=g;g=C;try{return O()}finally{g=j}},t.unstable_scheduleCallback=function(C,O,j){var J=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?J+j:J):j=J,C){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=j+ae,C={id:f++,callback:O,priorityLevel:C,startTime:j,expirationTime:ae,sortIndex:-1},j>J?(C.sortIndex=j,e(u,C),n(l)===null&&C===n(u)&&(E?(m(x),x=-1):E=!0,Me(w,j-J))):(C.sortIndex=ae,e(l,C),_||y||(_=!0,fe(k))),C},t.unstable_shouldYield=ne,t.unstable_wrapCallback=function(C){var O=g;return function(){var j=g;g=O;try{return C.apply(this,arguments)}finally{g=j}}}})(of);sf.exports=of;var tv=sf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af=S,We=tv;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lf=new Set,di={};function Vn(t,e){vr(t,e),vr(t+"Capture",e)}function vr(t,e){for(di[t]=e,t=0;t<e.length;t++)lf.add(e[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oa=Object.prototype.hasOwnProperty,nv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uc={},cc={};function rv(t){return Oa.call(cc,t)?!0:Oa.call(uc,t)?!1:nv.test(t)?cc[t]=!0:(uc[t]=!0,!1)}function iv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sv(t,e,n,r){if(e===null||typeof e>"u"||iv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ve[t]=new xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ve[e]=new xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ve[t]=new xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ve[t]=new xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ve[t]=new xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ve[t]=new xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ve[t]=new xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ve[t]=new xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ve[t]=new xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kl=/[\-:]([a-z])/g;function ql(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kl,ql);ve[e]=new xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kl,ql);ve[e]=new xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kl,ql);ve[e]=new xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ve[t]=new xe(t,1,!1,t.toLowerCase(),null,!1,!1)});ve.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ve[t]=new xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ql(t,e,n,r){var i=ve.hasOwnProperty(e)?ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sv(e,n,i,r)&&(n=null),r||i===null?rv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var bt=af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yi=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),Yl=Symbol.for("react.strict_mode"),La=Symbol.for("react.profiler"),uf=Symbol.for("react.provider"),cf=Symbol.for("react.context"),Jl=Symbol.for("react.forward_ref"),ja=Symbol.for("react.suspense"),Da=Symbol.for("react.suspense_list"),Xl=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),df=Symbol.for("react.offscreen"),dc=Symbol.iterator;function Mr(t){return t===null||typeof t!="object"?null:(t=dc&&t[dc]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Object.assign,Qo;function Kr(t){if(Qo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qo=e&&e[1]||""}return`
`+Qo+t}var Yo=!1;function Jo(t,e){if(!t||Yo)return"";Yo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yo=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Kr(t):""}function ov(t){switch(t.tag){case 5:return Kr(t.type);case 16:return Kr("Lazy");case 13:return Kr("Suspense");case 19:return Kr("SuspenseList");case 0:case 2:case 15:return t=Jo(t.type,!1),t;case 11:return t=Jo(t.type.render,!1),t;case 1:return t=Jo(t.type,!0),t;default:return""}}function Ma(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qn:return"Fragment";case qn:return"Portal";case La:return"Profiler";case Yl:return"StrictMode";case ja:return"Suspense";case Da:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cf:return(t.displayName||"Context")+".Consumer";case uf:return(t._context.displayName||"Context")+".Provider";case Jl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xl:return e=t.displayName||null,e!==null?e:Ma(t.type)||"Memo";case Wt:e=t._payload,t=t._init;try{return Ma(t(e))}catch{}}return null}function av(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ma(e);case 8:return e===Yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function an(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ff(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lv(t){var e=ff(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ji(t){t._valueTracker||(t._valueTracker=lv(t))}function hf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ff(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ds(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ba(t,e){var n=e.checked;return Q({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=an(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pf(t,e){e=e.checked,e!=null&&Ql(t,"checked",e,!1)}function Ua(t,e){pf(t,e);var n=an(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fa(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fa(t,e.type,an(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fa(t,e,n){(e!=="number"||Ds(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qr=Array.isArray;function ar(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+an(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function za(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return Q({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(qr(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:an(n)}}function mf(t,e){var n=an(e.value),r=an(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $a(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xi,gf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uv=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(t){uv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zr[e]=Zr[t]})});function yf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zr.hasOwnProperty(t)&&Zr[t]?(""+e).trim():e+"px"}function _f(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cv=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wa(t,e){if(e){if(cv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function Va(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ba=null;function Zl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ha=null,lr=null,ur=null;function vc(t){if(t=zi(t)){if(typeof Ha!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Eo(e),Ha(t.stateNode,t.type,e))}}function wf(t){lr?ur?ur.push(t):ur=[t]:lr=t}function Ef(){if(lr){var t=lr,e=ur;if(ur=lr=null,vc(t),e)for(t=0;t<e.length;t++)vc(e[t])}}function If(t,e){return t(e)}function kf(){}var Xo=!1;function Sf(t,e,n){if(Xo)return t(e,n);Xo=!0;try{return If(t,e,n)}finally{Xo=!1,(lr!==null||ur!==null)&&(kf(),Ef())}}function hi(t,e){var n=t.stateNode;if(n===null)return null;var r=Eo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var Ga=!1;if(At)try{var br={};Object.defineProperty(br,"passive",{get:function(){Ga=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{Ga=!1}function dv(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ei=!1,Ms=null,bs=!1,Ka=null,fv={onError:function(t){ei=!0,Ms=t}};function hv(t,e,n,r,i,s,o,a,l){ei=!1,Ms=null,dv.apply(fv,arguments)}function pv(t,e,n,r,i,s,o,a,l){if(hv.apply(this,arguments),ei){if(ei){var u=Ms;ei=!1,Ms=null}else throw Error(N(198));bs||(bs=!0,Ka=u)}}function Bn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gc(t){if(Bn(t)!==t)throw Error(N(188))}function mv(t){var e=t.alternate;if(!e){if(e=Bn(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gc(i),t;if(s===r)return gc(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function Nf(t){return t=mv(t),t!==null?xf(t):null}function xf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xf(t);if(e!==null)return e;t=t.sibling}return null}var Cf=We.unstable_scheduleCallback,yc=We.unstable_cancelCallback,vv=We.unstable_shouldYield,gv=We.unstable_requestPaint,X=We.unstable_now,yv=We.unstable_getCurrentPriorityLevel,eu=We.unstable_ImmediatePriority,Rf=We.unstable_UserBlockingPriority,Us=We.unstable_NormalPriority,_v=We.unstable_LowPriority,Pf=We.unstable_IdlePriority,go=null,yt=null;function wv(t){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(go,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:kv,Ev=Math.log,Iv=Math.LN2;function kv(t){return t>>>=0,t===0?32:31-(Ev(t)/Iv|0)|0}var Zi=64,es=4194304;function Qr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Qr(a):(s&=o,s!==0&&(r=Qr(s)))}else o=n&~i,o!==0?r=Qr(o):s!==0&&(r=Qr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-st(e),i=1<<n,r|=t[n],e&=~i;return r}function Sv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-st(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Sv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function qa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Af(){var t=Zi;return Zi<<=1,!(Zi&4194240)&&(Zi=64),t}function Zo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ui(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-st(e),t[e]=n}function Nv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-st(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function tu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-st(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var F=0;function Of(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lf,nu,jf,Df,Mf,Qa=!1,ts=[],Jt=null,Xt=null,Zt=null,pi=new Map,mi=new Map,Bt=[],xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _c(t,e){switch(t){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":pi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(e.pointerId)}}function Ur(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zi(e),e!==null&&nu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Cv(t,e,n,r,i){switch(e){case"focusin":return Jt=Ur(Jt,t,e,n,r,i),!0;case"dragenter":return Xt=Ur(Xt,t,e,n,r,i),!0;case"mouseover":return Zt=Ur(Zt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return pi.set(s,Ur(pi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,mi.set(s,Ur(mi.get(s)||null,t,e,n,r,i)),!0}return!1}function bf(t){var e=kn(t.target);if(e!==null){var n=Bn(e);if(n!==null){if(e=n.tag,e===13){if(e=Tf(n),e!==null){t.blockedOn=e,Mf(t.priority,function(){jf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ys(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ya(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ba=r,n.target.dispatchEvent(r),Ba=null}else return e=zi(n),e!==null&&nu(e),t.blockedOn=n,!1;e.shift()}return!0}function wc(t,e,n){ys(t)&&n.delete(e)}function Rv(){Qa=!1,Jt!==null&&ys(Jt)&&(Jt=null),Xt!==null&&ys(Xt)&&(Xt=null),Zt!==null&&ys(Zt)&&(Zt=null),pi.forEach(wc),mi.forEach(wc)}function Fr(t,e){t.blockedOn===e&&(t.blockedOn=null,Qa||(Qa=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Rv)))}function vi(t){function e(i){return Fr(i,t)}if(0<ts.length){Fr(ts[0],t);for(var n=1;n<ts.length;n++){var r=ts[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jt!==null&&Fr(Jt,t),Xt!==null&&Fr(Xt,t),Zt!==null&&Fr(Zt,t),pi.forEach(e),mi.forEach(e),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)bf(n),n.blockedOn===null&&Bt.shift()}var cr=bt.ReactCurrentBatchConfig,zs=!0;function Pv(t,e,n,r){var i=F,s=cr.transition;cr.transition=null;try{F=1,ru(t,e,n,r)}finally{F=i,cr.transition=s}}function Av(t,e,n,r){var i=F,s=cr.transition;cr.transition=null;try{F=4,ru(t,e,n,r)}finally{F=i,cr.transition=s}}function ru(t,e,n,r){if(zs){var i=Ya(t,e,n,r);if(i===null)ua(t,e,r,$s,n),_c(t,r);else if(Cv(i,t,e,n,r))r.stopPropagation();else if(_c(t,r),e&4&&-1<xv.indexOf(t)){for(;i!==null;){var s=zi(i);if(s!==null&&Lf(s),s=Ya(t,e,n,r),s===null&&ua(t,e,r,$s,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ua(t,e,r,null,n)}}var $s=null;function Ya(t,e,n,r){if($s=null,t=Zl(r),t=kn(t),t!==null)if(e=Bn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $s=t,null}function Uf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yv()){case eu:return 1;case Rf:return 4;case Us:case _v:return 16;case Pf:return 536870912;default:return 16}default:return 16}}var Gt=null,iu=null,_s=null;function Ff(){if(_s)return _s;var t,e=iu,n=e.length,r,i="value"in Gt?Gt.value:Gt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return _s=i.slice(t,1<r?1-r:void 0)}function ws(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ns(){return!0}function Ec(){return!1}function Be(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ns:Ec,this.isPropagationStopped=Ec,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ns)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ns)},persist:function(){},isPersistent:ns}),e}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},su=Be(Nr),Fi=Q({},Nr,{view:0,detail:0}),Ov=Be(Fi),ea,ta,zr,yo=Q({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zr&&(zr&&t.type==="mousemove"?(ea=t.screenX-zr.screenX,ta=t.screenY-zr.screenY):ta=ea=0,zr=t),ea)},movementY:function(t){return"movementY"in t?t.movementY:ta}}),Ic=Be(yo),Lv=Q({},yo,{dataTransfer:0}),jv=Be(Lv),Dv=Q({},Fi,{relatedTarget:0}),na=Be(Dv),Mv=Q({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),bv=Be(Mv),Uv=Q({},Nr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=Be(Uv),zv=Q({},Nr,{data:0}),kc=Be(zv),$v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Vv[t])?!!e[t]:!1}function ou(){return Bv}var Hv=Q({},Fi,{key:function(t){if(t.key){var e=$v[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ws(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(t){return t.type==="keypress"?ws(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ws(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gv=Be(Hv),Kv=Q({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sc=Be(Kv),qv=Q({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Qv=Be(qv),Yv=Q({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=Be(Yv),Xv=Q({},yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zv=Be(Xv),eg=[9,13,27,32],au=At&&"CompositionEvent"in window,ti=null;At&&"documentMode"in document&&(ti=document.documentMode);var tg=At&&"TextEvent"in window&&!ti,zf=At&&(!au||ti&&8<ti&&11>=ti),Tc=String.fromCharCode(32),Nc=!1;function $f(t,e){switch(t){case"keyup":return eg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yn=!1;function ng(t,e){switch(t){case"compositionend":return Wf(e);case"keypress":return e.which!==32?null:(Nc=!0,Tc);case"textInput":return t=e.data,t===Tc&&Nc?null:t;default:return null}}function rg(t,e){if(Yn)return t==="compositionend"||!au&&$f(t,e)?(t=Ff(),_s=iu=Gt=null,Yn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zf&&e.locale!=="ko"?null:e.data;default:return null}}var ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ig[t.type]:e==="textarea"}function Vf(t,e,n,r){wf(r),e=Ws(e,"onChange"),0<e.length&&(n=new su("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ni=null,gi=null;function sg(t){eh(t,0)}function _o(t){var e=Zn(t);if(hf(e))return t}function og(t,e){if(t==="change")return e}var Bf=!1;if(At){var ra;if(At){var ia="oninput"in document;if(!ia){var Cc=document.createElement("div");Cc.setAttribute("oninput","return;"),ia=typeof Cc.oninput=="function"}ra=ia}else ra=!1;Bf=ra&&(!document.documentMode||9<document.documentMode)}function Rc(){ni&&(ni.detachEvent("onpropertychange",Hf),gi=ni=null)}function Hf(t){if(t.propertyName==="value"&&_o(gi)){var e=[];Vf(e,gi,t,Zl(t)),Sf(sg,e)}}function ag(t,e,n){t==="focusin"?(Rc(),ni=e,gi=n,ni.attachEvent("onpropertychange",Hf)):t==="focusout"&&Rc()}function lg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _o(gi)}function ug(t,e){if(t==="click")return _o(e)}function cg(t,e){if(t==="input"||t==="change")return _o(e)}function dg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var at=typeof Object.is=="function"?Object.is:dg;function yi(t,e){if(at(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oa.call(e,i)||!at(t[i],e[i]))return!1}return!0}function Pc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ac(t,e){var n=Pc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pc(n)}}function Gf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kf(){for(var t=window,e=Ds();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ds(t.document)}return e}function lu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fg(t){var e=Kf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gf(n.ownerDocument.documentElement,n)){if(r!==null&&lu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ac(n,s);var o=Ac(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hg=At&&"documentMode"in document&&11>=document.documentMode,Jn=null,Ja=null,ri=null,Xa=!1;function Oc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xa||Jn==null||Jn!==Ds(r)||(r=Jn,"selectionStart"in r&&lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ri&&yi(ri,r)||(ri=r,r=Ws(Ja,"onSelect"),0<r.length&&(e=new su("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Jn)))}function rs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xn={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionend:rs("Transition","TransitionEnd")},sa={},qf={};At&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function wo(t){if(sa[t])return sa[t];if(!Xn[t])return t;var e=Xn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qf)return sa[t]=e[n];return t}var Qf=wo("animationend"),Yf=wo("animationiteration"),Jf=wo("animationstart"),Xf=wo("transitionend"),Zf=new Map,Lc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(t,e){Zf.set(t,e),Vn(e,[t])}for(var oa=0;oa<Lc.length;oa++){var aa=Lc[oa],pg=aa.toLowerCase(),mg=aa[0].toUpperCase()+aa.slice(1);cn(pg,"on"+mg)}cn(Qf,"onAnimationEnd");cn(Yf,"onAnimationIteration");cn(Jf,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(Xf,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function jc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pv(r,e,void 0,t),t.currentTarget=null}function eh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;jc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;jc(i,a,u),s=l}}}if(bs)throw t=Ka,bs=!1,Ka=null,t}function V(t,e){var n=e[rl];n===void 0&&(n=e[rl]=new Set);var r=t+"__bubble";n.has(r)||(th(e,t,2,!1),n.add(r))}function la(t,e,n){var r=0;e&&(r|=4),th(n,t,r,e)}var is="_reactListening"+Math.random().toString(36).slice(2);function _i(t){if(!t[is]){t[is]=!0,lf.forEach(function(n){n!=="selectionchange"&&(vg.has(n)||la(n,!1,t),la(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[is]||(e[is]=!0,la("selectionchange",!1,e))}}function th(t,e,n,r){switch(Uf(e)){case 1:var i=Pv;break;case 4:i=Av;break;default:i=ru}n=i.bind(null,e,n,t),i=void 0,!Ga||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ua(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=kn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Sf(function(){var u=s,f=Zl(n),h=[];e:{var g=Zf.get(t);if(g!==void 0){var y=su,_=t;switch(t){case"keypress":if(ws(n)===0)break e;case"keydown":case"keyup":y=Gv;break;case"focusin":_="focus",y=na;break;case"focusout":_="blur",y=na;break;case"beforeblur":case"afterblur":y=na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Qv;break;case Qf:case Yf:case Jf:y=bv;break;case Xf:y=Jv;break;case"scroll":y=Ov;break;case"wheel":y=Zv;break;case"copy":case"cut":case"paste":y=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Sc}var E=(e&4)!==0,I=!E&&t==="scroll",m=E?g!==null?g+"Capture":null:g;E=[];for(var p=u,v;p!==null;){v=p;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,m!==null&&(w=hi(p,m),w!=null&&E.push(wi(p,w,v)))),I)break;p=p.return}0<E.length&&(g=new y(g,_,null,n,f),h.push({event:g,listeners:E}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",g&&n!==Ba&&(_=n.relatedTarget||n.fromElement)&&(kn(_)||_[Ot]))break e;if((y||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?kn(_):null,_!==null&&(I=Bn(_),_!==I||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(E=Ic,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(E=Sc,w="onPointerLeave",m="onPointerEnter",p="pointer"),I=y==null?g:Zn(y),v=_==null?g:Zn(_),g=new E(w,p+"leave",y,n,f),g.target=I,g.relatedTarget=v,w=null,kn(f)===u&&(E=new E(m,p+"enter",_,n,f),E.target=v,E.relatedTarget=I,w=E),I=w,y&&_)t:{for(E=y,m=_,p=0,v=E;v;v=Gn(v))p++;for(v=0,w=m;w;w=Gn(w))v++;for(;0<p-v;)E=Gn(E),p--;for(;0<v-p;)m=Gn(m),v--;for(;p--;){if(E===m||m!==null&&E===m.alternate)break t;E=Gn(E),m=Gn(m)}E=null}else E=null;y!==null&&Dc(h,g,y,E,!1),_!==null&&I!==null&&Dc(h,I,_,E,!0)}}e:{if(g=u?Zn(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=og;else if(xc(g))if(Bf)k=cg;else{k=lg;var R=ag}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=ug);if(k&&(k=k(t,u))){Vf(h,k,n,f);break e}R&&R(t,g,u),t==="focusout"&&(R=g._wrapperState)&&R.controlled&&g.type==="number"&&Fa(g,"number",g.value)}switch(R=u?Zn(u):window,t){case"focusin":(xc(R)||R.contentEditable==="true")&&(Jn=R,Ja=u,ri=null);break;case"focusout":ri=Ja=Jn=null;break;case"mousedown":Xa=!0;break;case"contextmenu":case"mouseup":case"dragend":Xa=!1,Oc(h,n,f);break;case"selectionchange":if(hg)break;case"keydown":case"keyup":Oc(h,n,f)}var P;if(au)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Yn?$f(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(zf&&n.locale!=="ko"&&(Yn||x!=="onCompositionStart"?x==="onCompositionEnd"&&Yn&&(P=Ff()):(Gt=f,iu="value"in Gt?Gt.value:Gt.textContent,Yn=!0)),R=Ws(u,x),0<R.length&&(x=new kc(x,t,null,n,f),h.push({event:x,listeners:R}),P?x.data=P:(P=Wf(n),P!==null&&(x.data=P)))),(P=tg?ng(t,n):rg(t,n))&&(u=Ws(u,"onBeforeInput"),0<u.length&&(f=new kc("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=P))}eh(h,e)})}function wi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ws(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=hi(t,n),s!=null&&r.unshift(wi(t,s,i)),s=hi(t,e),s!=null&&r.push(wi(t,s,i))),t=t.return}return r}function Gn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dc(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=hi(n,s),l!=null&&o.unshift(wi(n,l,a))):i||(l=hi(n,s),l!=null&&o.push(wi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gg=/\r\n?/g,yg=/\u0000|\uFFFD/g;function Mc(t){return(typeof t=="string"?t:""+t).replace(gg,`
`).replace(yg,"")}function ss(t,e,n){if(e=Mc(e),Mc(t)!==e&&n)throw Error(N(425))}function Vs(){}var Za=null,el=null;function tl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nl=typeof setTimeout=="function"?setTimeout:void 0,_g=typeof clearTimeout=="function"?clearTimeout:void 0,bc=typeof Promise=="function"?Promise:void 0,wg=typeof queueMicrotask=="function"?queueMicrotask:typeof bc<"u"?function(t){return bc.resolve(null).then(t).catch(Eg)}:nl;function Eg(t){setTimeout(function(){throw t})}function ca(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),vi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vi(e)}function en(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Uc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xr=Math.random().toString(36).slice(2),ft="__reactFiber$"+xr,Ei="__reactProps$"+xr,Ot="__reactContainer$"+xr,rl="__reactEvents$"+xr,Ig="__reactListeners$"+xr,kg="__reactHandles$"+xr;function kn(t){var e=t[ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ot]||n[ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Uc(t);t!==null;){if(n=t[ft])return n;t=Uc(t)}return e}t=n,n=t.parentNode}return null}function zi(t){return t=t[ft]||t[Ot],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Eo(t){return t[Ei]||null}var il=[],er=-1;function dn(t){return{current:t}}function H(t){0>er||(t.current=il[er],il[er]=null,er--)}function W(t,e){er++,il[er]=t.current,t.current=e}var ln={},Ee=dn(ln),Oe=dn(!1),On=ln;function gr(t,e){var n=t.type.contextTypes;if(!n)return ln;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Le(t){return t=t.childContextTypes,t!=null}function Bs(){H(Oe),H(Ee)}function Fc(t,e,n){if(Ee.current!==ln)throw Error(N(168));W(Ee,e),W(Oe,n)}function nh(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,av(t)||"Unknown",i));return Q({},n,r)}function Hs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ln,On=Ee.current,W(Ee,t),W(Oe,Oe.current),!0}function zc(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=nh(t,e,On),r.__reactInternalMemoizedMergedChildContext=t,H(Oe),H(Ee),W(Ee,t)):H(Oe),W(Oe,n)}var St=null,Io=!1,da=!1;function rh(t){St===null?St=[t]:St.push(t)}function Sg(t){Io=!0,rh(t)}function fn(){if(!da&&St!==null){da=!0;var t=0,e=F;try{var n=St;for(F=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}St=null,Io=!1}catch(i){throw St!==null&&(St=St.slice(t+1)),Cf(eu,fn),i}finally{F=e,da=!1}}return null}var tr=[],nr=0,Gs=null,Ks=0,Ge=[],Ke=0,Ln=null,Tt=1,Nt="";function _n(t,e){tr[nr++]=Ks,tr[nr++]=Gs,Gs=t,Ks=e}function ih(t,e,n){Ge[Ke++]=Tt,Ge[Ke++]=Nt,Ge[Ke++]=Ln,Ln=t;var r=Tt;t=Nt;var i=32-st(r)-1;r&=~(1<<i),n+=1;var s=32-st(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tt=1<<32-st(e)+i|n<<i|r,Nt=s+t}else Tt=1<<s|n<<i|r,Nt=t}function uu(t){t.return!==null&&(_n(t,1),ih(t,1,0))}function cu(t){for(;t===Gs;)Gs=tr[--nr],tr[nr]=null,Ks=tr[--nr],tr[nr]=null;for(;t===Ln;)Ln=Ge[--Ke],Ge[Ke]=null,Nt=Ge[--Ke],Ge[Ke]=null,Tt=Ge[--Ke],Ge[Ke]=null}var $e=null,Fe=null,G=!1,it=null;function sh(t,e){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $c(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$e=t,Fe=en(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$e=t,Fe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ln!==null?{id:Tt,overflow:Nt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$e=t,Fe=null,!0):!1;default:return!1}}function sl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ol(t){if(G){var e=Fe;if(e){var n=e;if(!$c(t,e)){if(sl(t))throw Error(N(418));e=en(n.nextSibling);var r=$e;e&&$c(t,e)?sh(r,n):(t.flags=t.flags&-4097|2,G=!1,$e=t)}}else{if(sl(t))throw Error(N(418));t.flags=t.flags&-4097|2,G=!1,$e=t}}}function Wc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$e=t}function os(t){if(t!==$e)return!1;if(!G)return Wc(t),G=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tl(t.type,t.memoizedProps)),e&&(e=Fe)){if(sl(t))throw oh(),Error(N(418));for(;e;)sh(t,e),e=en(e.nextSibling)}if(Wc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fe=en(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fe=null}}else Fe=$e?en(t.stateNode.nextSibling):null;return!0}function oh(){for(var t=Fe;t;)t=en(t.nextSibling)}function yr(){Fe=$e=null,G=!1}function du(t){it===null?it=[t]:it.push(t)}var Tg=bt.ReactCurrentBatchConfig;function nt(t,e){if(t&&t.defaultProps){e=Q({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var qs=dn(null),Qs=null,rr=null,fu=null;function hu(){fu=rr=Qs=null}function pu(t){var e=qs.current;H(qs),t._currentValue=e}function al(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function dr(t,e){Qs=t,fu=rr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pe=!0),t.firstContext=null)}function Je(t){var e=t._currentValue;if(fu!==t)if(t={context:t,memoizedValue:e,next:null},rr===null){if(Qs===null)throw Error(N(308));rr=t,Qs.dependencies={lanes:0,firstContext:t}}else rr=rr.next=t;return e}var Sn=null;function mu(t){Sn===null?Sn=[t]:Sn.push(t)}function ah(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,mu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Lt(t,r)}function Lt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vt=!1;function vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Lt(t,n)}return i=r.interleaved,i===null?(e.next=e,mu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Lt(t,n)}function Es(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tu(t,n)}}function Vc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ys(t,e,n,r){var i=t.updateQueue;Vt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,f=u=l=null,a=s;do{var g=a.lane,y=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,E=a;switch(g=e,y=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){h=_.call(y,h,g);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,g=typeof _=="function"?_.call(y,h,g):_,g==null)break e;h=Q({},h,g);break e;case 2:Vt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=y,l=h):f=f.next=y,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Dn|=o,t.lanes=o,t.memoizedState=h}}function Bc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var uh=new af.Component().refs;function ll(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ko={isMounted:function(t){return(t=t._reactInternals)?Bn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Te(),i=rn(t),s=Rt(r,i);s.payload=e,n!=null&&(s.callback=n),e=tn(t,s,i),e!==null&&(ot(e,t,i,r),Es(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Te(),i=rn(t),s=Rt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tn(t,s,i),e!==null&&(ot(e,t,i,r),Es(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Te(),r=rn(t),i=Rt(n,r);i.tag=2,e!=null&&(i.callback=e),e=tn(t,i,r),e!==null&&(ot(e,t,r,n),Es(e,t,r))}};function Hc(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!yi(n,r)||!yi(i,s):!0}function ch(t,e,n){var r=!1,i=ln,s=e.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=Le(e)?On:Ee.current,r=e.contextTypes,s=(r=r!=null)?gr(t,i):ln),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ko,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ko.enqueueReplaceState(e,e.state,null)}function ul(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=uh,vu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=Le(e)?On:Ee.current,i.context=gr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ll(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ko.enqueueReplaceState(i,i.state,null),Ys(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $r(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===uh&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function as(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kc(t){var e=t._init;return e(t._payload)}function dh(t){function e(m,p){if(t){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=sn(m,p),m.index=0,m.sibling=null,m}function s(m,p,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,w){return p===null||p.tag!==6?(p=ya(v,m.mode,w),p.return=m,p):(p=i(p,v),p.return=m,p)}function l(m,p,v,w){var k=v.type;return k===Qn?f(m,p,v.props.children,w,v.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Wt&&Kc(k)===p.type)?(w=i(p,v.props),w.ref=$r(m,p,v),w.return=m,w):(w=xs(v.type,v.key,v.props,null,m.mode,w),w.ref=$r(m,p,v),w.return=m,w)}function u(m,p,v,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=_a(v,m.mode,w),p.return=m,p):(p=i(p,v.children||[]),p.return=m,p)}function f(m,p,v,w,k){return p===null||p.tag!==7?(p=Cn(v,m.mode,w,k),p.return=m,p):(p=i(p,v),p.return=m,p)}function h(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ya(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Yi:return v=xs(p.type,p.key,p.props,null,m.mode,v),v.ref=$r(m,null,p),v.return=m,v;case qn:return p=_a(p,m.mode,v),p.return=m,p;case Wt:var w=p._init;return h(m,w(p._payload),v)}if(qr(p)||Mr(p))return p=Cn(p,m.mode,v,null),p.return=m,p;as(m,p)}return null}function g(m,p,v,w){var k=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:a(m,p,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yi:return v.key===k?l(m,p,v,w):null;case qn:return v.key===k?u(m,p,v,w):null;case Wt:return k=v._init,g(m,p,k(v._payload),w)}if(qr(v)||Mr(v))return k!==null?null:f(m,p,v,w,null);as(m,v)}return null}function y(m,p,v,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(v)||null,a(p,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yi:return m=m.get(w.key===null?v:w.key)||null,l(p,m,w,k);case qn:return m=m.get(w.key===null?v:w.key)||null,u(p,m,w,k);case Wt:var R=w._init;return y(m,p,v,R(w._payload),k)}if(qr(w)||Mr(w))return m=m.get(v)||null,f(p,m,w,k,null);as(p,w)}return null}function _(m,p,v,w){for(var k=null,R=null,P=p,x=p=0,b=null;P!==null&&x<v.length;x++){P.index>x?(b=P,P=null):b=P.sibling;var L=g(m,P,v[x],w);if(L===null){P===null&&(P=b);break}t&&P&&L.alternate===null&&e(m,P),p=s(L,p,x),R===null?k=L:R.sibling=L,R=L,P=b}if(x===v.length)return n(m,P),G&&_n(m,x),k;if(P===null){for(;x<v.length;x++)P=h(m,v[x],w),P!==null&&(p=s(P,p,x),R===null?k=P:R.sibling=P,R=P);return G&&_n(m,x),k}for(P=r(m,P);x<v.length;x++)b=y(P,m,x,v[x],w),b!==null&&(t&&b.alternate!==null&&P.delete(b.key===null?x:b.key),p=s(b,p,x),R===null?k=b:R.sibling=b,R=b);return t&&P.forEach(function(ne){return e(m,ne)}),G&&_n(m,x),k}function E(m,p,v,w){var k=Mr(v);if(typeof k!="function")throw Error(N(150));if(v=k.call(v),v==null)throw Error(N(151));for(var R=k=null,P=p,x=p=0,b=null,L=v.next();P!==null&&!L.done;x++,L=v.next()){P.index>x?(b=P,P=null):b=P.sibling;var ne=g(m,P,L.value,w);if(ne===null){P===null&&(P=b);break}t&&P&&ne.alternate===null&&e(m,P),p=s(ne,p,x),R===null?k=ne:R.sibling=ne,R=ne,P=b}if(L.done)return n(m,P),G&&_n(m,x),k;if(P===null){for(;!L.done;x++,L=v.next())L=h(m,L.value,w),L!==null&&(p=s(L,p,x),R===null?k=L:R.sibling=L,R=L);return G&&_n(m,x),k}for(P=r(m,P);!L.done;x++,L=v.next())L=y(P,m,x,L.value,w),L!==null&&(t&&L.alternate!==null&&P.delete(L.key===null?x:L.key),p=s(L,p,x),R===null?k=L:R.sibling=L,R=L);return t&&P.forEach(function(oe){return e(m,oe)}),G&&_n(m,x),k}function I(m,p,v,w){if(typeof v=="object"&&v!==null&&v.type===Qn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Yi:e:{for(var k=v.key,R=p;R!==null;){if(R.key===k){if(k=v.type,k===Qn){if(R.tag===7){n(m,R.sibling),p=i(R,v.props.children),p.return=m,m=p;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Wt&&Kc(k)===R.type){n(m,R.sibling),p=i(R,v.props),p.ref=$r(m,R,v),p.return=m,m=p;break e}n(m,R);break}else e(m,R);R=R.sibling}v.type===Qn?(p=Cn(v.props.children,m.mode,w,v.key),p.return=m,m=p):(w=xs(v.type,v.key,v.props,null,m.mode,w),w.ref=$r(m,p,v),w.return=m,m=w)}return o(m);case qn:e:{for(R=v.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=i(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=_a(v,m.mode,w),p.return=m,m=p}return o(m);case Wt:return R=v._init,I(m,p,R(v._payload),w)}if(qr(v))return _(m,p,v,w);if(Mr(v))return E(m,p,v,w);as(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,v),p.return=m,m=p):(n(m,p),p=ya(v,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return I}var _r=dh(!0),fh=dh(!1),$i={},_t=dn($i),Ii=dn($i),ki=dn($i);function Tn(t){if(t===$i)throw Error(N(174));return t}function gu(t,e){switch(W(ki,e),W(Ii,t),W(_t,$i),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$a(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$a(e,t)}H(_t),W(_t,e)}function wr(){H(_t),H(Ii),H(ki)}function hh(t){Tn(ki.current);var e=Tn(_t.current),n=$a(e,t.type);e!==n&&(W(Ii,t),W(_t,n))}function yu(t){Ii.current===t&&(H(_t),H(Ii))}var K=dn(0);function Js(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fa=[];function _u(){for(var t=0;t<fa.length;t++)fa[t]._workInProgressVersionPrimary=null;fa.length=0}var Is=bt.ReactCurrentDispatcher,ha=bt.ReactCurrentBatchConfig,jn=0,q=null,re=null,le=null,Xs=!1,ii=!1,Si=0,Ng=0;function ye(){throw Error(N(321))}function wu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!at(t[n],e[n]))return!1;return!0}function Eu(t,e,n,r,i,s){if(jn=s,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Is.current=t===null||t.memoizedState===null?Pg:Ag,t=n(r,i),ii){s=0;do{if(ii=!1,Si=0,25<=s)throw Error(N(301));s+=1,le=re=null,e.updateQueue=null,Is.current=Og,t=n(r,i)}while(ii)}if(Is.current=Zs,e=re!==null&&re.next!==null,jn=0,le=re=q=null,Xs=!1,e)throw Error(N(300));return t}function Iu(){var t=Si!==0;return Si=0,t}function dt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?q.memoizedState=le=t:le=le.next=t,le}function Xe(){if(re===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=re.next;var e=le===null?q.memoizedState:le.next;if(e!==null)le=e,re=t;else{if(t===null)throw Error(N(310));re=t,t={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?q.memoizedState=le=t:le=le.next=t}return le}function Ti(t,e){return typeof e=="function"?e(t):e}function pa(t){var e=Xe(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((jn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,q.lanes|=f,Dn|=f}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,at(r,e.memoizedState)||(Pe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,q.lanes|=s,Dn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ma(t){var e=Xe(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);at(s,e.memoizedState)||(Pe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ph(){}function mh(t,e){var n=q,r=Xe(),i=e(),s=!at(r.memoizedState,i);if(s&&(r.memoizedState=i,Pe=!0),r=r.queue,ku(yh.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Ni(9,gh.bind(null,n,r,i,e),void 0,null),ue===null)throw Error(N(349));jn&30||vh(n,e,i)}return i}function vh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gh(t,e,n,r){e.value=n,e.getSnapshot=r,_h(e)&&wh(t)}function yh(t,e,n){return n(function(){_h(e)&&wh(t)})}function _h(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!at(t,n)}catch{return!0}}function wh(t){var e=Lt(t,1);e!==null&&ot(e,t,1,-1)}function qc(t){var e=dt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ti,lastRenderedState:t},e.queue=t,t=t.dispatch=Rg.bind(null,q,t),[e.memoizedState,t]}function Ni(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Eh(){return Xe().memoizedState}function ks(t,e,n,r){var i=dt();q.flags|=t,i.memoizedState=Ni(1|e,n,void 0,r===void 0?null:r)}function So(t,e,n,r){var i=Xe();r=r===void 0?null:r;var s=void 0;if(re!==null){var o=re.memoizedState;if(s=o.destroy,r!==null&&wu(r,o.deps)){i.memoizedState=Ni(e,n,s,r);return}}q.flags|=t,i.memoizedState=Ni(1|e,n,s,r)}function Qc(t,e){return ks(8390656,8,t,e)}function ku(t,e){return So(2048,8,t,e)}function Ih(t,e){return So(4,2,t,e)}function kh(t,e){return So(4,4,t,e)}function Sh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Th(t,e,n){return n=n!=null?n.concat([t]):null,So(4,4,Sh.bind(null,e,t),n)}function Su(){}function Nh(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function xh(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ch(t,e,n){return jn&21?(at(n,e)||(n=Af(),q.lanes|=n,Dn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pe=!0),t.memoizedState=n)}function xg(t,e){var n=F;F=n!==0&&4>n?n:4,t(!0);var r=ha.transition;ha.transition={};try{t(!1),e()}finally{F=n,ha.transition=r}}function Rh(){return Xe().memoizedState}function Cg(t,e,n){var r=rn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ph(t))Ah(e,n);else if(n=ah(t,e,n,r),n!==null){var i=Te();ot(n,t,r,i),Oh(n,e,r)}}function Rg(t,e,n){var r=rn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ph(t))Ah(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,at(a,o)){var l=e.interleaved;l===null?(i.next=i,mu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ah(t,e,i,r),n!==null&&(i=Te(),ot(n,t,r,i),Oh(n,e,r))}}function Ph(t){var e=t.alternate;return t===q||e!==null&&e===q}function Ah(t,e){ii=Xs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Oh(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tu(t,n)}}var Zs={readContext:Je,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},Pg={readContext:Je,useCallback:function(t,e){return dt().memoizedState=[t,e===void 0?null:e],t},useContext:Je,useEffect:Qc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ks(4194308,4,Sh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ks(4194308,4,t,e)},useInsertionEffect:function(t,e){return ks(4,2,t,e)},useMemo:function(t,e){var n=dt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Cg.bind(null,q,t),[r.memoizedState,t]},useRef:function(t){var e=dt();return t={current:t},e.memoizedState=t},useState:qc,useDebugValue:Su,useDeferredValue:function(t){return dt().memoizedState=t},useTransition:function(){var t=qc(!1),e=t[0];return t=xg.bind(null,t[1]),dt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=q,i=dt();if(G){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),ue===null)throw Error(N(349));jn&30||vh(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qc(yh.bind(null,r,s,t),[t]),r.flags|=2048,Ni(9,gh.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dt(),e=ue.identifierPrefix;if(G){var n=Nt,r=Tt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Si++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ng++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ag={readContext:Je,useCallback:Nh,useContext:Je,useEffect:ku,useImperativeHandle:Th,useInsertionEffect:Ih,useLayoutEffect:kh,useMemo:xh,useReducer:pa,useRef:Eh,useState:function(){return pa(Ti)},useDebugValue:Su,useDeferredValue:function(t){var e=Xe();return Ch(e,re.memoizedState,t)},useTransition:function(){var t=pa(Ti)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:ph,useSyncExternalStore:mh,useId:Rh,unstable_isNewReconciler:!1},Og={readContext:Je,useCallback:Nh,useContext:Je,useEffect:ku,useImperativeHandle:Th,useInsertionEffect:Ih,useLayoutEffect:kh,useMemo:xh,useReducer:ma,useRef:Eh,useState:function(){return ma(Ti)},useDebugValue:Su,useDeferredValue:function(t){var e=Xe();return re===null?e.memoizedState=t:Ch(e,re.memoizedState,t)},useTransition:function(){var t=ma(Ti)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:ph,useSyncExternalStore:mh,useId:Rh,unstable_isNewReconciler:!1};function Er(t,e){try{var n="",r=e;do n+=ov(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function va(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function cl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Lg=typeof WeakMap=="function"?WeakMap:Map;function Lh(t,e,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){to||(to=!0,wl=r),cl(t,e)},n}function jh(t,e,n){n=Rt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){cl(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cl(t,e),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Lg;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Kg.bind(null,t,e,n),e.then(t,t))}function Jc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rt(-1,1),e.tag=2,tn(n,e,1))),n.lanes|=1),t)}var jg=bt.ReactCurrentOwner,Pe=!1;function Se(t,e,n,r){e.child=t===null?fh(e,null,n,r):_r(e,t.child,n,r)}function Zc(t,e,n,r,i){n=n.render;var s=e.ref;return dr(e,i),r=Eu(t,e,n,r,s,i),n=Iu(),t!==null&&!Pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(G&&n&&uu(e),e.flags|=1,Se(t,e,r,i),e.child)}function ed(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ou(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dh(t,e,s,r,i)):(t=xs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yi,n(o,r)&&t.ref===e.ref)return jt(t,e,i)}return e.flags|=1,t=sn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Dh(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(yi(s,r)&&t.ref===e.ref)if(Pe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Pe=!0);else return e.lanes=t.lanes,jt(t,e,i)}return dl(t,e,n,r,i)}function Mh(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(sr,be),be|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,W(sr,be),be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,W(sr,be),be|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,W(sr,be),be|=r;return Se(t,e,i,n),e.child}function bh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dl(t,e,n,r,i){var s=Le(n)?On:Ee.current;return s=gr(e,s),dr(e,i),n=Eu(t,e,n,r,s,i),r=Iu(),t!==null&&!Pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(G&&r&&uu(e),e.flags|=1,Se(t,e,n,i),e.child)}function td(t,e,n,r,i){if(Le(n)){var s=!0;Hs(e)}else s=!1;if(dr(e,i),e.stateNode===null)Ss(t,e),ch(e,n,r),ul(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=Le(n)?On:Ee.current,u=gr(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Gc(e,o,r,u),Vt=!1;var g=e.memoizedState;o.state=g,Ys(e,r,o,i),l=e.memoizedState,a!==r||g!==l||Oe.current||Vt?(typeof f=="function"&&(ll(e,n,f,r),l=e.memoizedState),(a=Vt||Hc(e,n,a,r,g,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,lh(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:nt(e.type,a),o.props=u,h=e.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Je(l):(l=Le(n)?On:Ee.current,l=gr(e,l));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||g!==l)&&Gc(e,o,r,l),Vt=!1,g=e.memoizedState,o.state=g,Ys(e,r,o,i);var _=e.memoizedState;a!==h||g!==_||Oe.current||Vt?(typeof y=="function"&&(ll(e,n,y,r),_=e.memoizedState),(u=Vt||Hc(e,n,u,r,g,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return fl(t,e,n,r,s,i)}function fl(t,e,n,r,i,s){bh(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zc(e,n,!1),jt(t,e,s);r=e.stateNode,jg.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_r(e,t.child,null,s),e.child=_r(e,null,a,s)):Se(t,e,a,s),e.memoizedState=r.state,i&&zc(e,n,!0),e.child}function Uh(t){var e=t.stateNode;e.pendingContext?Fc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fc(t,e.context,!1),gu(t,e.containerInfo)}function nd(t,e,n,r,i){return yr(),du(i),e.flags|=256,Se(t,e,n,r),e.child}var hl={dehydrated:null,treeContext:null,retryLane:0};function pl(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fh(t,e,n){var r=e.pendingProps,i=K.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),W(K,i&1),t===null)return ol(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xo(o,r,0,null),t=Cn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pl(n),e.memoizedState=hl,t):Tu(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Dg(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=sn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=sn(a,s):(s=Cn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?pl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hl,r}return s=t.child,t=s.sibling,r=sn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tu(t,e){return e=xo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ls(t,e,n,r){return r!==null&&du(r),_r(e,t.child,null,n),t=Tu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Dg(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=va(Error(N(422))),ls(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xo({mode:"visible",children:r.children},i,0,null),s=Cn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&_r(e,t.child,null,o),e.child.memoizedState=pl(o),e.memoizedState=hl,s);if(!(e.mode&1))return ls(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=va(s,r,void 0),ls(t,e,o,r)}if(a=(o&t.childLanes)!==0,Pe||a){if(r=ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Lt(t,i),ot(r,t,i,-1))}return Au(),r=va(Error(N(421))),ls(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qg.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Fe=en(i.nextSibling),$e=e,G=!0,it=null,t!==null&&(Ge[Ke++]=Tt,Ge[Ke++]=Nt,Ge[Ke++]=Ln,Tt=t.id,Nt=t.overflow,Ln=e),e=Tu(e,r.children),e.flags|=4096,e)}function rd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),al(t.return,e,n)}function ga(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function zh(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Se(t,e,r.children,n),r=K.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rd(t,n,e);else if(t.tag===19)rd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(W(K,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Js(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ga(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Js(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ga(e,!0,n,null,s);break;case"together":ga(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ss(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=sn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Mg(t,e,n){switch(e.tag){case 3:Uh(e),yr();break;case 5:hh(e);break;case 1:Le(e.type)&&Hs(e);break;case 4:gu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;W(qs,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(W(K,K.current&1),e.flags|=128,null):n&e.child.childLanes?Fh(t,e,n):(W(K,K.current&1),t=jt(t,e,n),t!==null?t.sibling:null);W(K,K.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return zh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(K,K.current),r)break;return null;case 22:case 23:return e.lanes=0,Mh(t,e,n)}return jt(t,e,n)}var $h,ml,Wh,Vh;$h=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ml=function(){};Wh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tn(_t.current);var s=null;switch(n){case"input":i=ba(t,i),r=ba(t,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=za(t,i),r=za(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vs)}Wa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(di.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(di.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Vh=function(t,e,n,r){n!==r&&(e.flags|=4)};function Wr(t,e){if(!G)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bg(t,e,n){var r=e.pendingProps;switch(cu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(e),null;case 1:return Le(e.type)&&Bs(),_e(e),null;case 3:return r=e.stateNode,wr(),H(Oe),H(Ee),_u(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(os(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,it!==null&&(kl(it),it=null))),ml(t,e),_e(e),null;case 5:yu(e);var i=Tn(ki.current);if(n=e.type,t!==null&&e.stateNode!=null)Wh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return _e(e),null}if(t=Tn(_t.current),os(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ft]=e,r[Ei]=s,t=(e.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Yr.length;i++)V(Yr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":fc(r,s),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},V("invalid",r);break;case"textarea":pc(r,s),V("invalid",r)}Wa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ss(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ss(r.textContent,a,t),i=["children",""+a]):di.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&V("scroll",r)}switch(n){case"input":Ji(r),hc(r,s,!0);break;case"textarea":Ji(r),mc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vs)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ft]=e,t[Ei]=r,$h(t,e,!1,!1),e.stateNode=t;e:{switch(o=Va(n,r),n){case"dialog":V("cancel",t),V("close",t),i=r;break;case"iframe":case"object":case"embed":V("load",t),i=r;break;case"video":case"audio":for(i=0;i<Yr.length;i++)V(Yr[i],t);i=r;break;case"source":V("error",t),i=r;break;case"img":case"image":case"link":V("error",t),V("load",t),i=r;break;case"details":V("toggle",t),i=r;break;case"input":fc(t,r),i=ba(t,r),V("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),V("invalid",t);break;case"textarea":pc(t,r),i=za(t,r),V("invalid",t);break;default:i=r}Wa(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_f(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gf(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fi(t,l):typeof l=="number"&&fi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(di.hasOwnProperty(s)?l!=null&&s==="onScroll"&&V("scroll",t):l!=null&&Ql(t,s,l,o))}switch(n){case"input":Ji(t),hc(t,r,!1);break;case"textarea":Ji(t),mc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+an(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ar(t,!!r.multiple,s,!1):r.defaultValue!=null&&ar(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _e(e),null;case 6:if(t&&e.stateNode!=null)Vh(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=Tn(ki.current),Tn(_t.current),os(e)){if(r=e.stateNode,n=e.memoizedProps,r[ft]=e,(s=r.nodeValue!==n)&&(t=$e,t!==null))switch(t.tag){case 3:ss(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ss(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=e,e.stateNode=r}return _e(e),null;case 13:if(H(K),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(G&&Fe!==null&&e.mode&1&&!(e.flags&128))oh(),yr(),e.flags|=98560,s=!1;else if(s=os(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[ft]=e}else yr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_e(e),s=!1}else it!==null&&(kl(it),it=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||K.current&1?se===0&&(se=3):Au())),e.updateQueue!==null&&(e.flags|=4),_e(e),null);case 4:return wr(),ml(t,e),t===null&&_i(e.stateNode.containerInfo),_e(e),null;case 10:return pu(e.type._context),_e(e),null;case 17:return Le(e.type)&&Bs(),_e(e),null;case 19:if(H(K),s=e.memoizedState,s===null)return _e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Wr(s,!1);else{if(se!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Js(t),o!==null){for(e.flags|=128,Wr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return W(K,K.current&1|2),e.child}t=t.sibling}s.tail!==null&&X()>Ir&&(e.flags|=128,r=!0,Wr(s,!1),e.lanes=4194304)}else{if(!r)if(t=Js(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!G)return _e(e),null}else 2*X()-s.renderingStartTime>Ir&&n!==1073741824&&(e.flags|=128,r=!0,Wr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=X(),e.sibling=null,n=K.current,W(K,r?n&1|2:n&1),e):(_e(e),null);case 22:case 23:return Pu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?be&1073741824&&(_e(e),e.subtreeFlags&6&&(e.flags|=8192)):_e(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function Ug(t,e){switch(cu(e),e.tag){case 1:return Le(e.type)&&Bs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wr(),H(Oe),H(Ee),_u(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yu(e),null;case 13:if(H(K),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return H(K),null;case 4:return wr(),null;case 10:return pu(e.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var us=!1,we=!1,Fg=typeof WeakSet=="function"?WeakSet:Set,A=null;function ir(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(t,e,r)}else n.current=null}function vl(t,e,n){try{n()}catch(r){Y(t,e,r)}}var id=!1;function zg(t,e){if(Za=zs,t=Kf(),lu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,g=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)g=h,h=y;for(;;){if(h===t)break t;if(g===n&&++u===i&&(a=o),g===s&&++f===r&&(l=o),(y=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(el={focusedElem:t,selectionRange:n},zs=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,I=_.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?E:nt(e.type,E),I);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){Y(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return _=id,id=!1,_}function si(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vl(e,n,s)}i=i.next}while(i!==r)}}function To(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Bh(t){var e=t.alternate;e!==null&&(t.alternate=null,Bh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ft],delete e[Ei],delete e[rl],delete e[Ig],delete e[kg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hh(t){return t.tag===5||t.tag===3||t.tag===4}function sd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vs));else if(r!==4&&(t=t.child,t!==null))for(yl(t,e,n),t=t.sibling;t!==null;)yl(t,e,n),t=t.sibling}function _l(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_l(t,e,n),t=t.sibling;t!==null;)_l(t,e,n),t=t.sibling}var he=null,rt=!1;function Ft(t,e,n){for(n=n.child;n!==null;)Gh(t,e,n),n=n.sibling}function Gh(t,e,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(go,n)}catch{}switch(n.tag){case 5:we||ir(n,e);case 6:var r=he,i=rt;he=null,Ft(t,e,n),he=r,rt=i,he!==null&&(rt?(t=he,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(rt?(t=he,n=n.stateNode,t.nodeType===8?ca(t.parentNode,n):t.nodeType===1&&ca(t,n),vi(t)):ca(he,n.stateNode));break;case 4:r=he,i=rt,he=n.stateNode.containerInfo,rt=!0,Ft(t,e,n),he=r,rt=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vl(n,e,o),i=i.next}while(i!==r)}Ft(t,e,n);break;case 1:if(!we&&(ir(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,e,a)}Ft(t,e,n);break;case 21:Ft(t,e,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Ft(t,e,n),we=r):Ft(t,e,n);break;default:Ft(t,e,n)}}function od(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Fg),e.forEach(function(r){var i=Qg.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,rt=!1;break e;case 3:he=a.stateNode.containerInfo,rt=!0;break e;case 4:he=a.stateNode.containerInfo,rt=!0;break e}a=a.return}if(he===null)throw Error(N(160));Gh(s,o,i),he=null,rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Y(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kh(e,t),e=e.sibling}function Kh(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(et(e,t),ut(t),r&4){try{si(3,t,t.return),To(3,t)}catch(E){Y(t,t.return,E)}try{si(5,t,t.return)}catch(E){Y(t,t.return,E)}}break;case 1:et(e,t),ut(t),r&512&&n!==null&&ir(n,n.return);break;case 5:if(et(e,t),ut(t),r&512&&n!==null&&ir(n,n.return),t.flags&32){var i=t.stateNode;try{fi(i,"")}catch(E){Y(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pf(i,s),Va(a,o);var u=Va(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?_f(i,h):f==="dangerouslySetInnerHTML"?gf(i,h):f==="children"?fi(i,h):Ql(i,f,h,u)}switch(a){case"input":Ua(i,s);break;case"textarea":mf(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?ar(i,!!s.multiple,y,!1):g!==!!s.multiple&&(s.defaultValue!=null?ar(i,!!s.multiple,s.defaultValue,!0):ar(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ei]=s}catch(E){Y(t,t.return,E)}}break;case 6:if(et(e,t),ut(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){Y(t,t.return,E)}}break;case 3:if(et(e,t),ut(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vi(e.containerInfo)}catch(E){Y(t,t.return,E)}break;case 4:et(e,t),ut(t);break;case 13:et(e,t),ut(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cu=X())),r&4&&od(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(we=(u=we)||f,et(e,t),we=u):et(e,t),ut(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(A=t,f=t.child;f!==null;){for(h=A=f;A!==null;){switch(g=A,y=g.child,g.tag){case 0:case 11:case 14:case 15:si(4,g,g.return);break;case 1:ir(g,g.return);var _=g.stateNode;if(typeof _.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){Y(r,n,E)}}break;case 5:ir(g,g.return);break;case 22:if(g.memoizedState!==null){ld(h);continue}}y!==null?(y.return=g,A=y):ld(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yf("display",o))}catch(E){Y(t,t.return,E)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(E){Y(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:et(e,t),ut(t),r&4&&od(t);break;case 21:break;default:et(e,t),ut(t)}}function ut(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hh(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fi(i,""),r.flags&=-33);var s=sd(t);_l(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=sd(t);yl(t,a,o);break;default:throw Error(N(161))}}catch(l){Y(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $g(t,e,n){A=t,qh(t)}function qh(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||us;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||we;a=us;var u=we;if(us=o,(we=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?ud(i):l!==null?(l.return=o,A=l):ud(i);for(;s!==null;)A=s,qh(s),s=s.sibling;A=i,us=a,we=u}ad(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):ad(t)}}function ad(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:we||To(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bc(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bc(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&vi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}we||e.flags&512&&gl(e)}catch(g){Y(e,e.return,g)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function ld(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function ud(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{To(4,e)}catch(l){Y(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Y(e,i,l)}}var s=e.return;try{gl(e)}catch(l){Y(e,s,l)}break;case 5:var o=e.return;try{gl(e)}catch(l){Y(e,o,l)}}}catch(l){Y(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var Wg=Math.ceil,eo=bt.ReactCurrentDispatcher,Nu=bt.ReactCurrentOwner,Ye=bt.ReactCurrentBatchConfig,U=0,ue=null,Z=null,pe=0,be=0,sr=dn(0),se=0,xi=null,Dn=0,No=0,xu=0,oi=null,Re=null,Cu=0,Ir=1/0,kt=null,to=!1,wl=null,nn=null,cs=!1,Kt=null,no=0,ai=0,El=null,Ts=-1,Ns=0;function Te(){return U&6?X():Ts!==-1?Ts:Ts=X()}function rn(t){return t.mode&1?U&2&&pe!==0?pe&-pe:Tg.transition!==null?(Ns===0&&(Ns=Af()),Ns):(t=F,t!==0||(t=window.event,t=t===void 0?16:Uf(t.type)),t):1}function ot(t,e,n,r){if(50<ai)throw ai=0,El=null,Error(N(185));Ui(t,n,r),(!(U&2)||t!==ue)&&(t===ue&&(!(U&2)&&(No|=n),se===4&&Ht(t,pe)),je(t,r),n===1&&U===0&&!(e.mode&1)&&(Ir=X()+500,Io&&fn()))}function je(t,e){var n=t.callbackNode;Tv(t,e);var r=Fs(t,t===ue?pe:0);if(r===0)n!==null&&yc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&yc(n),e===1)t.tag===0?Sg(cd.bind(null,t)):rh(cd.bind(null,t)),wg(function(){!(U&6)&&fn()}),n=null;else{switch(Of(r)){case 1:n=eu;break;case 4:n=Rf;break;case 16:n=Us;break;case 536870912:n=Pf;break;default:n=Us}n=np(n,Qh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Qh(t,e){if(Ts=-1,Ns=0,U&6)throw Error(N(327));var n=t.callbackNode;if(fr()&&t.callbackNode!==n)return null;var r=Fs(t,t===ue?pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ro(t,r);else{e=r;var i=U;U|=2;var s=Jh();(ue!==t||pe!==e)&&(kt=null,Ir=X()+500,xn(t,e));do try{Hg();break}catch(a){Yh(t,a)}while(1);hu(),eo.current=s,U=i,Z!==null?e=0:(ue=null,pe=0,e=se)}if(e!==0){if(e===2&&(i=qa(t),i!==0&&(r=i,e=Il(t,i))),e===1)throw n=xi,xn(t,0),Ht(t,r),je(t,X()),n;if(e===6)Ht(t,r);else{if(i=t.current.alternate,!(r&30)&&!Vg(i)&&(e=ro(t,r),e===2&&(s=qa(t),s!==0&&(r=s,e=Il(t,s))),e===1))throw n=xi,xn(t,0),Ht(t,r),je(t,X()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:wn(t,Re,kt);break;case 3:if(Ht(t,r),(r&130023424)===r&&(e=Cu+500-X(),10<e)){if(Fs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Te(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=nl(wn.bind(null,t,Re,kt),e);break}wn(t,Re,kt);break;case 4:if(Ht(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-st(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wg(r/1960))-r,10<r){t.timeoutHandle=nl(wn.bind(null,t,Re,kt),r);break}wn(t,Re,kt);break;case 5:wn(t,Re,kt);break;default:throw Error(N(329))}}}return je(t,X()),t.callbackNode===n?Qh.bind(null,t):null}function Il(t,e){var n=oi;return t.current.memoizedState.isDehydrated&&(xn(t,e).flags|=256),t=ro(t,e),t!==2&&(e=Re,Re=n,e!==null&&kl(e)),t}function kl(t){Re===null?Re=t:Re.push.apply(Re,t)}function Vg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!at(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ht(t,e){for(e&=~xu,e&=~No,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-st(e),r=1<<n;t[n]=-1,e&=~r}}function cd(t){if(U&6)throw Error(N(327));fr();var e=Fs(t,0);if(!(e&1))return je(t,X()),null;var n=ro(t,e);if(t.tag!==0&&n===2){var r=qa(t);r!==0&&(e=r,n=Il(t,r))}if(n===1)throw n=xi,xn(t,0),Ht(t,e),je(t,X()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wn(t,Re,kt),je(t,X()),null}function Ru(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Ir=X()+500,Io&&fn())}}function Mn(t){Kt!==null&&Kt.tag===0&&!(U&6)&&fr();var e=U;U|=1;var n=Ye.transition,r=F;try{if(Ye.transition=null,F=1,t)return t()}finally{F=r,Ye.transition=n,U=e,!(U&6)&&fn()}}function Pu(){be=sr.current,H(sr)}function xn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_g(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(cu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bs();break;case 3:wr(),H(Oe),H(Ee),_u();break;case 5:yu(r);break;case 4:wr();break;case 13:H(K);break;case 19:H(K);break;case 10:pu(r.type._context);break;case 22:case 23:Pu()}n=n.return}if(ue=t,Z=t=sn(t.current,null),pe=be=e,se=0,xi=null,xu=No=Dn=0,Re=oi=null,Sn!==null){for(e=0;e<Sn.length;e++)if(n=Sn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Sn=null}return t}function Yh(t,e){do{var n=Z;try{if(hu(),Is.current=Zs,Xs){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xs=!1}if(jn=0,le=re=q=null,ii=!1,Si=0,Nu.current=null,n===null||n.return===null){se=1,xi=e,Z=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Jc(o);if(y!==null){y.flags&=-257,Xc(y,o,a,s,e),y.mode&1&&Yc(s,u,e),e=y,l=u;var _=e.updateQueue;if(_===null){var E=new Set;E.add(l),e.updateQueue=E}else _.add(l);break e}else{if(!(e&1)){Yc(s,u,e),Au();break e}l=Error(N(426))}}else if(G&&a.mode&1){var I=Jc(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Xc(I,o,a,s,e),du(Er(l,a));break e}}s=l=Er(l,a),se!==4&&(se=2),oi===null?oi=[s]:oi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Lh(s,l,e);Vc(s,m);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(nn===null||!nn.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=jh(s,a,e);Vc(s,w);break e}}s=s.return}while(s!==null)}Zh(n)}catch(k){e=k,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function Jh(){var t=eo.current;return eo.current=Zs,t===null?Zs:t}function Au(){(se===0||se===3||se===2)&&(se=4),ue===null||!(Dn&268435455)&&!(No&268435455)||Ht(ue,pe)}function ro(t,e){var n=U;U|=2;var r=Jh();(ue!==t||pe!==e)&&(kt=null,xn(t,e));do try{Bg();break}catch(i){Yh(t,i)}while(1);if(hu(),U=n,eo.current=r,Z!==null)throw Error(N(261));return ue=null,pe=0,se}function Bg(){for(;Z!==null;)Xh(Z)}function Hg(){for(;Z!==null&&!vv();)Xh(Z)}function Xh(t){var e=tp(t.alternate,t,be);t.memoizedProps=t.pendingProps,e===null?Zh(t):Z=e,Nu.current=null}function Zh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ug(n,e),n!==null){n.flags&=32767,Z=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{se=6,Z=null;return}}else if(n=bg(n,e,be),n!==null){Z=n;return}if(e=e.sibling,e!==null){Z=e;return}Z=e=t}while(e!==null);se===0&&(se=5)}function wn(t,e,n){var r=F,i=Ye.transition;try{Ye.transition=null,F=1,Gg(t,e,n,r)}finally{Ye.transition=i,F=r}return null}function Gg(t,e,n,r){do fr();while(Kt!==null);if(U&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Nv(t,s),t===ue&&(Z=ue=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cs||(cs=!0,np(Us,function(){return fr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ye.transition,Ye.transition=null;var o=F;F=1;var a=U;U|=4,Nu.current=null,zg(t,n),Kh(n,t),fg(el),zs=!!Za,el=Za=null,t.current=n,$g(n),gv(),U=a,F=o,Ye.transition=s}else t.current=n;if(cs&&(cs=!1,Kt=t,no=i),s=t.pendingLanes,s===0&&(nn=null),wv(n.stateNode),je(t,X()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(to)throw to=!1,t=wl,wl=null,t;return no&1&&t.tag!==0&&fr(),s=t.pendingLanes,s&1?t===El?ai++:(ai=0,El=t):ai=0,fn(),null}function fr(){if(Kt!==null){var t=Of(no),e=Ye.transition,n=F;try{if(Ye.transition=null,F=16>t?16:t,Kt===null)var r=!1;else{if(t=Kt,Kt=null,no=0,U&6)throw Error(N(331));var i=U;for(U|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var f=A;switch(f.tag){case 0:case 11:case 15:si(8,f,s)}var h=f.child;if(h!==null)h.return=f,A=h;else for(;A!==null;){f=A;var g=f.sibling,y=f.return;if(Bh(f),f===u){A=null;break}if(g!==null){g.return=y,A=g;break}A=y}}}var _=s.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var I=E.sibling;E.sibling=null,E=I}while(E!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:si(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var p=t.current;for(A=p;A!==null;){o=A;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,A=v;else e:for(o=p;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:To(9,a)}}catch(k){Y(a,a.return,k)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(U=i,fn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(go,t)}catch{}r=!0}return r}finally{F=n,Ye.transition=e}}return!1}function dd(t,e,n){e=Er(n,e),e=Lh(t,e,1),t=tn(t,e,1),e=Te(),t!==null&&(Ui(t,1,e),je(t,e))}function Y(t,e,n){if(t.tag===3)dd(t,t,n);else for(;e!==null;){if(e.tag===3){dd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){t=Er(n,t),t=jh(e,t,1),e=tn(e,t,1),t=Te(),e!==null&&(Ui(e,1,t),je(e,t));break}}e=e.return}}function Kg(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Te(),t.pingedLanes|=t.suspendedLanes&n,ue===t&&(pe&n)===n&&(se===4||se===3&&(pe&130023424)===pe&&500>X()-Cu?xn(t,0):xu|=n),je(t,e)}function ep(t,e){e===0&&(t.mode&1?(e=es,es<<=1,!(es&130023424)&&(es=4194304)):e=1);var n=Te();t=Lt(t,e),t!==null&&(Ui(t,e,n),je(t,n))}function qg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ep(t,n)}function Qg(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),ep(t,n)}var tp;tp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Oe.current)Pe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pe=!1,Mg(t,e,n);Pe=!!(t.flags&131072)}else Pe=!1,G&&e.flags&1048576&&ih(e,Ks,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ss(t,e),t=e.pendingProps;var i=gr(e,Ee.current);dr(e,n),i=Eu(null,e,r,t,i,n);var s=Iu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Le(r)?(s=!0,Hs(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vu(e),i.updater=ko,e.stateNode=i,i._reactInternals=e,ul(e,r,t,n),e=fl(null,e,r,!0,s,n)):(e.tag=0,G&&s&&uu(e),Se(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ss(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Jg(r),t=nt(r,t),i){case 0:e=dl(null,e,r,t,n);break e;case 1:e=td(null,e,r,t,n);break e;case 11:e=Zc(null,e,r,t,n);break e;case 14:e=ed(null,e,r,nt(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),dl(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),td(t,e,r,i,n);case 3:e:{if(Uh(e),t===null)throw Error(N(387));r=e.pendingProps,s=e.memoizedState,i=s.element,lh(t,e),Ys(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Er(Error(N(423)),e),e=nd(t,e,r,n,i);break e}else if(r!==i){i=Er(Error(N(424)),e),e=nd(t,e,r,n,i);break e}else for(Fe=en(e.stateNode.containerInfo.firstChild),$e=e,G=!0,it=null,n=fh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yr(),r===i){e=jt(t,e,n);break e}Se(t,e,r,n)}e=e.child}return e;case 5:return hh(e),t===null&&ol(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,tl(r,i)?o=null:s!==null&&tl(r,s)&&(e.flags|=32),bh(t,e),Se(t,e,o,n),e.child;case 6:return t===null&&ol(e),null;case 13:return Fh(t,e,n);case 4:return gu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_r(e,null,r,n):Se(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Zc(t,e,r,i,n);case 7:return Se(t,e,e.pendingProps,n),e.child;case 8:return Se(t,e,e.pendingProps.children,n),e.child;case 12:return Se(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,W(qs,r._currentValue),r._currentValue=o,s!==null)if(at(s.value,o)){if(s.children===i.children&&!Oe.current){e=jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Rt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),al(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),al(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Se(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,dr(e,n),i=Je(i),r=r(i),e.flags|=1,Se(t,e,r,n),e.child;case 14:return r=e.type,i=nt(r,e.pendingProps),i=nt(r.type,i),ed(t,e,r,i,n);case 15:return Dh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Ss(t,e),e.tag=1,Le(r)?(t=!0,Hs(e)):t=!1,dr(e,n),ch(e,r,i),ul(e,r,i,n),fl(null,e,r,!0,t,n);case 19:return zh(t,e,n);case 22:return Mh(t,e,n)}throw Error(N(156,e.tag))};function np(t,e){return Cf(t,e)}function Yg(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(t,e,n,r){return new Yg(t,e,n,r)}function Ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jg(t){if(typeof t=="function")return Ou(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jl)return 11;if(t===Xl)return 14}return 2}function sn(t,e){var n=t.alternate;return n===null?(n=Qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ou(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qn:return Cn(n.children,i,s,e);case Yl:o=8,i|=8;break;case La:return t=Qe(12,n,e,i|2),t.elementType=La,t.lanes=s,t;case ja:return t=Qe(13,n,e,i),t.elementType=ja,t.lanes=s,t;case Da:return t=Qe(19,n,e,i),t.elementType=Da,t.lanes=s,t;case df:return xo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uf:o=10;break e;case cf:o=9;break e;case Jl:o=11;break e;case Xl:o=14;break e;case Wt:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=Qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Cn(t,e,n,r){return t=Qe(7,t,r,e),t.lanes=n,t}function xo(t,e,n,r){return t=Qe(22,t,r,e),t.elementType=df,t.lanes=n,t.stateNode={isHidden:!1},t}function ya(t,e,n){return t=Qe(6,t,null,e),t.lanes=n,t}function _a(t,e,n){return e=Qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Xg(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zo(0),this.expirationTimes=Zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lu(t,e,n,r,i,s,o,a,l){return t=new Xg(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(s),t}function Zg(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function rp(t){if(!t)return ln;t=t._reactInternals;e:{if(Bn(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Le(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(Le(n))return nh(t,n,e)}return e}function ip(t,e,n,r,i,s,o,a,l){return t=Lu(n,r,!0,t,i,s,o,a,l),t.context=rp(null),n=t.current,r=Te(),i=rn(n),s=Rt(r,i),s.callback=e??null,tn(n,s,i),t.current.lanes=i,Ui(t,i,r),je(t,r),t}function Co(t,e,n,r){var i=e.current,s=Te(),o=rn(i);return n=rp(n),e.context===null?e.context=n:e.pendingContext=n,e=Rt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tn(i,e,o),t!==null&&(ot(t,i,o,s),Es(t,i,o)),o}function io(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ju(t,e){fd(t,e),(t=t.alternate)&&fd(t,e)}function ey(){return null}var sp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Du(t){this._internalRoot=t}Ro.prototype.render=Du.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));Co(t,e,null,null)};Ro.prototype.unmount=Du.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mn(function(){Co(null,t,null,null)}),e[Ot]=null}};function Ro(t){this._internalRoot=t}Ro.prototype.unstable_scheduleHydration=function(t){if(t){var e=Df();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bt.length&&e!==0&&e<Bt[n].priority;n++);Bt.splice(n,0,t),n===0&&bf(t)}};function Mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Po(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hd(){}function ty(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=io(o);s.call(u)}}var o=ip(e,r,t,0,null,!1,!1,"",hd);return t._reactRootContainer=o,t[Ot]=o.current,_i(t.nodeType===8?t.parentNode:t),Mn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=io(l);a.call(u)}}var l=Lu(t,0,!1,null,null,!1,!1,"",hd);return t._reactRootContainer=l,t[Ot]=l.current,_i(t.nodeType===8?t.parentNode:t),Mn(function(){Co(e,l,n,r)}),l}function Ao(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=io(o);a.call(l)}}Co(e,o,t,i)}else o=ty(n,e,t,i,r);return io(o)}Lf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qr(e.pendingLanes);n!==0&&(tu(e,n|1),je(e,X()),!(U&6)&&(Ir=X()+500,fn()))}break;case 13:Mn(function(){var r=Lt(t,1);if(r!==null){var i=Te();ot(r,t,1,i)}}),ju(t,1)}};nu=function(t){if(t.tag===13){var e=Lt(t,134217728);if(e!==null){var n=Te();ot(e,t,134217728,n)}ju(t,134217728)}};jf=function(t){if(t.tag===13){var e=rn(t),n=Lt(t,e);if(n!==null){var r=Te();ot(n,t,e,r)}ju(t,e)}};Df=function(){return F};Mf=function(t,e){var n=F;try{return F=t,e()}finally{F=n}};Ha=function(t,e,n){switch(e){case"input":if(Ua(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Eo(r);if(!i)throw Error(N(90));hf(r),Ua(r,i)}}}break;case"textarea":mf(t,n);break;case"select":e=n.value,e!=null&&ar(t,!!n.multiple,e,!1)}};If=Ru;kf=Mn;var ny={usingClientEntryPoint:!1,Events:[zi,Zn,Eo,wf,Ef,Ru]},Vr={findFiberByHostInstance:kn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ry={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nf(t),t===null?null:t.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||ey,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{go=ds.inject(ry),yt=ds}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ny;Ve.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mu(e))throw Error(N(200));return Zg(t,e,null,n)};Ve.createRoot=function(t,e){if(!Mu(t))throw Error(N(299));var n=!1,r="",i=sp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lu(t,1,!1,null,null,n,!1,r,i),t[Ot]=e.current,_i(t.nodeType===8?t.parentNode:t),new Du(e)};Ve.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=Nf(e),t=t===null?null:t.stateNode,t};Ve.flushSync=function(t){return Mn(t)};Ve.hydrate=function(t,e,n){if(!Po(e))throw Error(N(200));return Ao(null,t,e,!0,n)};Ve.hydrateRoot=function(t,e,n){if(!Mu(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=sp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ip(e,null,t,1,n??null,i,!1,s,o),t[Ot]=e.current,_i(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ro(e)};Ve.render=function(t,e,n){if(!Po(e))throw Error(N(200));return Ao(null,t,e,!1,n)};Ve.unmountComponentAtNode=function(t){if(!Po(t))throw Error(N(40));return t._reactRootContainer?(Mn(function(){Ao(null,null,t,!1,function(){t._reactRootContainer=null,t[Ot]=null})}),!0):!1};Ve.unstable_batchedUpdates=Ru;Ve.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Po(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return Ao(t,e,n,!1,r)};Ve.version="18.2.0-next-9e3b772b8-20220608";function op(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(op)}catch(t){console.error(t)}}op(),rf.exports=Ve;var iy=rf.exports,pd=iy;Aa.createRoot=pd.createRoot,Aa.hydrateRoot=pd.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ci(){return Ci=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ci.apply(this,arguments)}var qt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(qt||(qt={}));const md="popstate";function sy(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Sl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:so(i)}return ay(e,n,null,t)}function ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function bu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oy(){return Math.random().toString(36).substr(2,8)}function vd(t,e){return{usr:t.state,key:t.key,idx:e}}function Sl(t,e,n,r){return n===void 0&&(n=null),Ci({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Cr(e):e,{state:n,key:e&&e.key||r||oy()})}function so(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Cr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ay(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=qt.Pop,l=null,u=f();u==null&&(u=0,o.replaceState(Ci({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function h(){a=qt.Pop;let I=f(),m=I==null?null:I-u;u=I,l&&l({action:a,location:E.location,delta:m})}function g(I,m){a=qt.Push;let p=Sl(E.location,I,m);n&&n(p,I),u=f()+1;let v=vd(p,u),w=E.createHref(p);try{o.pushState(v,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}s&&l&&l({action:a,location:E.location,delta:1})}function y(I,m){a=qt.Replace;let p=Sl(E.location,I,m);n&&n(p,I),u=f();let v=vd(p,u),w=E.createHref(p);o.replaceState(v,"",w),s&&l&&l({action:a,location:E.location,delta:0})}function _(I){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof I=="string"?I:so(I);return ee(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let E={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(md,h),l=I,()=>{i.removeEventListener(md,h),l=null}},createHref(I){return e(i,I)},createURL:_,encodeLocation(I){let m=_(I);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:y,go(I){return o.go(I)}};return E}var gd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gd||(gd={}));function ly(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Cr(e):e,i=Uu(r.pathname||"/",n);if(i==null)return null;let s=ap(t);uy(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=yy(s[a],Ey(i));return o}function ap(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=on([r,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ap(s.children,e,f,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:vy(u,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of lp(s.path))i(s,o,l)}),e}function lp(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=lp(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function uy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gy(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cy=/^:\w+$/,dy=3,fy=2,hy=1,py=10,my=-2,yd=t=>t==="*";function vy(t,e){let n=t.split("/"),r=n.length;return n.some(yd)&&(r+=my),e&&(r+=fy),n.filter(i=>!yd(i)).reduce((i,s)=>i+(cy.test(s)?dy:s===""?hy:py),r)}function gy(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function yy(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",f=_y({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let h=a.route;s.push({params:r,pathname:on([i,f.pathname]),pathnameBase:Ty(on([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=on([i,f.pathnameBase]))}return s}function _y(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wy(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,h)=>{if(f==="*"){let g=a[h]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}return u[f]=Iy(a[h]||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function wy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),bu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ey(t){try{return decodeURI(t)}catch(e){return bu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Iy(t,e){try{return decodeURIComponent(t)}catch(n){return bu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Uu(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ky(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Cr(t):t;return{pathname:n?n.startsWith("/")?n:Sy(n,e):e,search:Ny(r),hash:xy(i)}}function Sy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function up(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Cr(t):(i=Ci({},t),ee(!i.pathname||!i.pathname.includes("?"),wa("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),wa("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),wa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}a=h>=0?e[h]:"/"}let l=ky(i,a),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const on=t=>t.join("/").replace(/\/\/+/g,"/"),Ty=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ny=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Cy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const dp=["post","put","patch","delete"];new Set(dp);const Ry=["get",...dp];new Set(Ry);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oo.apply(this,arguments)}const Fu=S.createContext(null),Py=S.createContext(null),Rr=S.createContext(null),Oo=S.createContext(null),hn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),fp=S.createContext(null);function Ay(t,e){let{relative:n}=e===void 0?{}:e;Wi()||ee(!1);let{basename:r,navigator:i}=S.useContext(Rr),{hash:s,pathname:o,search:a}=pp(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:on([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Wi(){return S.useContext(Oo)!=null}function Lo(){return Wi()||ee(!1),S.useContext(Oo).location}function hp(t){S.useContext(Rr).static||S.useLayoutEffect(t)}function Oy(){let{isDataRoute:t}=S.useContext(hn);return t?Ky():Ly()}function Ly(){Wi()||ee(!1);let t=S.useContext(Fu),{basename:e,navigator:n}=S.useContext(Rr),{matches:r}=S.useContext(hn),{pathname:i}=Lo(),s=JSON.stringify(up(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return hp(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let f=cp(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:on([e,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[e,n,s,i,t])}const jy=S.createContext(null);function Dy(t){let e=S.useContext(hn).outlet;return e&&S.createElement(jy.Provider,{value:t},e)}function pp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(hn),{pathname:i}=Lo(),s=JSON.stringify(up(r).map(o=>o.pathnameBase));return S.useMemo(()=>cp(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function My(t,e){return by(t,e)}function by(t,e,n){Wi()||ee(!1);let{navigator:r}=S.useContext(Rr),{matches:i}=S.useContext(hn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Lo(),u;if(e){var f;let E=typeof e=="string"?Cr(e):e;a==="/"||(f=E.pathname)!=null&&f.startsWith(a)||ee(!1),u=E}else u=l;let h=u.pathname||"/",g=a==="/"?h:h.slice(a.length)||"/",y=ly(t,{pathname:g}),_=Wy(y&&y.map(E=>Object.assign({},E,{params:Object.assign({},o,E.params),pathname:on([a,r.encodeLocation?r.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:on([a,r.encodeLocation?r.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,n);return e&&_?S.createElement(Oo.Provider,{value:{location:oo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:qt.Pop}},_):_}function Uy(){let t=Gy(),e=Cy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const Fy=S.createElement(Uy,null);class zy extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(hn.Provider,{value:this.props.routeContext},S.createElement(fp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $y(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Fu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(hn.Provider,{value:e},r)}function Wy(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ee(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let f=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Fy);let g=e.concat(s.slice(0,u+1)),y=()=>{let _;return f?_=h:l.route.Component?_=S.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,S.createElement($y,{match:l,routeContext:{outlet:a,matches:g,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(zy,{location:n.location,revalidation:n.revalidation,component:h,error:f,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var Tl;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Tl||(Tl={}));var Ri;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Ri||(Ri={}));function Vy(t){let e=S.useContext(Fu);return e||ee(!1),e}function By(t){let e=S.useContext(Py);return e||ee(!1),e}function Hy(t){let e=S.useContext(hn);return e||ee(!1),e}function mp(t){let e=Hy(),n=e.matches[e.matches.length-1];return n.route.id||ee(!1),n.route.id}function Gy(){var t;let e=S.useContext(fp),n=By(Ri.UseRouteError),r=mp(Ri.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Ky(){let{router:t}=Vy(Tl.UseNavigateStable),e=mp(Ri.UseNavigateStable),n=S.useRef(!1);return hp(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,oo({fromRouteId:e},s)))},[t,e])}function _d(t){return Dy(t.context)}function $t(t){ee(!1)}function qy(t){let{basename:e="/",children:n=null,location:r,navigationType:i=qt.Pop,navigator:s,static:o=!1}=t;Wi()&&ee(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Cr(r));let{pathname:u="/",search:f="",hash:h="",state:g=null,key:y="default"}=r,_=S.useMemo(()=>{let E=Uu(u,a);return E==null?null:{location:{pathname:E,search:f,hash:h,state:g,key:y},navigationType:i}},[a,u,f,h,g,y,i]);return _==null?null:S.createElement(Rr.Provider,{value:l},S.createElement(Oo.Provider,{children:n,value:_}))}function Qy(t){let{children:e,location:n}=t;return My(Nl(e),n)}var wd;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(wd||(wd={}));new Promise(()=>{});function Nl(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Nl(r.props.children,s));return}r.type!==$t&&ee(!1),!r.props.index||!r.props.children||ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Nl(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xl.apply(this,arguments)}function Yy(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Jy(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Xy(t,e){return t.button===0&&(!e||e==="_self")&&!Jy(t)}const Zy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],e0="startTransition",Ed=qm[e0];function t0(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=sy({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=S.useCallback(h=>{u&&Ed?Ed(()=>l(h)):l(h)},[l,u]);return S.useLayoutEffect(()=>o.listen(f),[o,f]),S.createElement(qy,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const n0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",r0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ct=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:f}=e,h=Yy(e,Zy),{basename:g}=S.useContext(Rr),y,_=!1;if(typeof u=="string"&&r0.test(u)&&(y=u,n0))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),w=Uu(v.pathname,g);v.origin===p.origin&&w!=null?u=w+v.search+v.hash:_=!0}catch{}let E=Ay(u,{relative:i}),I=i0(u,{replace:o,state:a,target:l,preventScrollReset:f,relative:i});function m(p){r&&r(p),p.defaultPrevented||I(p)}return S.createElement("a",xl({},h,{href:y||E,onClick:_||s?r:m,ref:n,target:l}))});var Id;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Id||(Id={}));var kd;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(kd||(kd={}));function i0(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Oy(),l=Lo(),u=pp(t,{relative:o});return S.useCallback(f=>{if(Xy(f,n)){f.preventDefault();let h=r!==void 0?r:so(l)===so(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Cl=function(t,e){return Cl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Cl(t,e)};function s0(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Cl(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function zu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function o0(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(f){try{u(r.next(f))}catch(h){o(h)}}function l(f){try{u(r.throw(f))}catch(h){o(h)}}function u(f){f.done?s(f.value):i(f.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function a0(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(f){return l([u,f])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(f){u=[6,f],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Ea(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function fs(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function Sd(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}/**
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
 */var l0=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},u0=function(t){for(var e=[],n=0,r=0;n<t.length;){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){var s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{var s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},c0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,f=s>>2,h=(s&3)<<4|a>>4,g=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(g=64)),r.push(n[f],n[h],n[g],n[y])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(l0(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):u0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var s=n[t.charAt(i++)],o=i<t.length,a=o?n[t.charAt(i)]:0;++i;var l=i<t.length,u=l?n[t.charAt(i)]:64;++i;var f=i<t.length,h=f?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();var g=s<<2|a>>4;if(r.push(g),u!==64){var y=a<<4&240|u>>2;if(r.push(y),h!==64){var _=u<<6&192|h;r.push(_)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},d0=function(t){try{return c0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ao(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:var n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(var r in e)!e.hasOwnProperty(r)||!f0(r)||(t[r]=ao(t[r],e[r]));return t}function f0(t){return t!=="__proto__"}/**
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
 */var h0=function(){function t(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(n,r){e.resolve=n,e.reject=r})}return t.prototype.wrapCallback=function(e){var n=this;return function(r,i){r?n.reject(r):n.resolve(i),typeof e=="function"&&(n.promise.catch(function(){}),e.length===1?e(r):e(r,i))}},t}();/**
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
 */function te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function p0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function vp(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function m0(){return typeof self=="object"&&self.self===self}function gp(){var t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $u(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yp(){var t=te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rl(){return"indexedDB"in self&&indexedDB!=null}/**
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
 */var v0="FirebaseError",wt=function(t){s0(e,t);function e(n,r,i){var s=t.call(this,r)||this;return s.code=n,s.customData=i,s.name=v0,Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,Pr.prototype.create),s}return e}(Error),Pr=function(){function t(e,n,r){this.service=e,this.serviceName=n,this.errors=r}return t.prototype.create=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=n[0]||{},s=this.service+"/"+e,o=this.errors[e],a=o?g0(o,i):"Error",l=this.serviceName+": "+a+" ("+s+").",u=new wt(s,l,i);return u},t}();function g0(t,e){return t.replace(y0,function(n,r){var i=e[r];return i!=null?String(i):"<"+r+"?>"})}var y0=/\{\$([^}]+)}/g;/**
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
 */function Td(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _0(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pl(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=t[o],l=e[o];if(Nd(a)&&Nd(l)){if(!Pl(a,l))return!1}else if(a!==l)return!1}for(var u=0,f=r;u<f.length;u++){var o=f[u];if(!n.includes(o))return!1}return!0}function Nd(t){return t!==null&&typeof t=="object"}/**
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
 */function Ar(t){for(var e=[],n=function(l,u){Array.isArray(u)?u.forEach(function(f){e.push(encodeURIComponent(l)+"="+encodeURIComponent(f))}):e.push(encodeURIComponent(l)+"="+encodeURIComponent(u))},r=0,i=Object.entries(t);r<i.length;r++){var s=i[r],o=s[0],a=s[1];n(o,a)}return e.length?"&"+e.join("&"):""}function or(t){var e={},n=t.replace(/^\?/,"").split("&");return n.forEach(function(r){if(r){var i=r.split("="),s=i[0],o=i[1];e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function Jr(t){var e=t.indexOf("?");if(!e)return"";var n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _p(t,e){var n=new w0(t,e);return n.subscribe.bind(n)}var w0=function(){function t(e,n){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){e(r)}).catch(function(i){r.error(i)})}return t.prototype.next=function(e){this.forEachObserver(function(n){n.next(e)})},t.prototype.error=function(e){this.forEachObserver(function(n){n.error(e)}),this.close(e)},t.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},t.prototype.subscribe=function(e,n,r){var i=this,s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");E0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ia),s.error===void 0&&(s.error=Ia),s.complete===void 0&&(s.complete=Ia);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?s.error(i.finalError):s.complete()}catch{}}),this.observers.push(s),o},t.prototype.unsubscribeOne=function(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},t.prototype.forEachObserver=function(e){if(!this.finalized)for(var n=0;n<this.observers.length;n++)this.sendOne(n,e)},t.prototype.sendOne=function(e,n){var r=this;this.task.then(function(){if(r.observers!==void 0&&r.observers[e]!==void 0)try{n(r.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})},t.prototype.close=function(e){var n=this;this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(function(){n.observers=void 0,n.onNoObservers=void 0}))},t}();function E0(t,e){if(typeof t!="object"||t===null)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&typeof t[i]=="function")return!0}return!1}function Ia(){}/**
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
 */function M(t){return t&&t._delegate?t._delegate:t}var bn=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var En="[DEFAULT]";/**
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
 */var I0=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new h0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(S0(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}try{for(var i=Ea(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var o=fs(s.value,2),a=o[0],l=o[1],u=this.normalizeInstanceIdentifier(a);try{var f=this.getOrInitializeService({instanceIdentifier:u});l.resolve(f)}catch{}}}catch(h){n={error:h}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=En),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return o0(this,void 0,void 0,function(){var e;return a0(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Sd(Sd([],fs(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),fs(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=En),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=En),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var i=e.options,s=i===void 0?{}:i,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var l=Ea(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var f=fs(u.value,2),h=f[0],g=f[1],y=this.normalizeInstanceIdentifier(h);o===y&&g.resolve(a)}}catch(_){n={error:_}}finally{try{u&&!u.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);var o=this.instances.get(i);return o&&e(o,i),function(){s.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,i,s=this.onInitCallbacks.get(n);if(s)try{for(var o=Ea(s),a=o.next();!a.done;a=o.next()){var l=a.value;try{l(e,n)}catch{}}}catch(u){r={error:u}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,i=r===void 0?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:k0(n),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch{}return s||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=En),this.component?this.component.multipleInstances?e:En:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function k0(t){return t===En?void 0:t}function S0(t){return t.instantiationMode==="EAGER"}/**
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
 */var T0=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new I0(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function tt(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}/**
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
 */var yn,Wu=[],z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));var wp={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},N0=z.INFO,x0=(yn={},yn[z.DEBUG]="log",yn[z.VERBOSE]="log",yn[z.INFO]="info",yn[z.WARN]="warn",yn[z.ERROR]="error",yn),C0=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=new Date().toISOString(),s=x0[e];if(s)console[s].apply(console,tt(["["+i+"]  "+t.name+":"],n));else throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}},Vu=function(){function t(e){this.name=e,this._logLevel=N0,this._logHandler=C0,this._userLogHandler=null,Wu.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in z))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(e){this._logLevel=typeof e=="string"?wp[e]:e},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,tt([this,z.DEBUG],e)),this._logHandler.apply(this,tt([this,z.DEBUG],e))},t.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,tt([this,z.VERBOSE],e)),this._logHandler.apply(this,tt([this,z.VERBOSE],e))},t.prototype.info=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,tt([this,z.INFO],e)),this._logHandler.apply(this,tt([this,z.INFO],e))},t.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,tt([this,z.WARN],e)),this._logHandler.apply(this,tt([this,z.WARN],e))},t.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,tt([this,z.ERROR],e)),this._logHandler.apply(this,tt([this,z.ERROR],e))},t}();function R0(t){Wu.forEach(function(e){e.setLogLevel(t)})}function P0(t,e){for(var n=function(o){var a=null;e&&e.level&&(a=wp[e.level]),t===null?o.userLogHandler=null:o.userLogHandler=function(l,u){for(var f=[],h=2;h<arguments.length;h++)f[h-2]=arguments[h];var g=f.map(function(y){if(y==null)return null;if(typeof y=="string")return y;if(typeof y=="number"||typeof y=="boolean")return y.toString();if(y instanceof Error)return y.message;try{return JSON.stringify(y)}catch{return null}}).filter(function(y){return y}).join(" ");u>=(a??l.logLevel)&&t({level:z[u].toLowerCase(),message:g,args:f,type:l.name})}},r=0,i=Wu;r<i.length;r++){var s=i[r];n(s)}}/**
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
 */class A0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(O0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function O0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ep="@firebase/app",L0="0.7.0";/**
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
 */const Bu=new Vu("@firebase/app"),j0="@firebase/app-compat",D0="@firebase/analytics-compat",M0="@firebase/analytics",b0="@firebase/app-check-compat",U0="@firebase/app-check",F0="@firebase/auth",z0="@firebase/auth-compat",$0="@firebase/database",W0="@firebase/database-compat",V0="@firebase/functions",B0="@firebase/functions-compat",H0="@firebase/installations",G0="@firebase/installations-compat",K0="@firebase/messaging",q0="@firebase/messaging-compat",Q0="@firebase/performance",Y0="@firebase/performance-compat",J0="@firebase/remote-config",X0="@firebase/remote-config-compat",Z0="@firebase/storage",e_="@firebase/storage-compat",t_="@firebase/firestore",n_="@firebase/firestore-compat",r_="firebase",i_="9.0.0";/**
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
 */const Un="[DEFAULT]",s_={[Ep]:"fire-core",[j0]:"fire-core-compat",[M0]:"fire-analytics",[D0]:"fire-analytics-compat",[U0]:"fire-app-check",[b0]:"fire-app-check-compat",[F0]:"fire-auth",[z0]:"fire-auth-compat",[$0]:"fire-rtdb",[W0]:"fire-rtdb-compat",[V0]:"fire-fn",[B0]:"fire-fn-compat",[H0]:"fire-iid",[G0]:"fire-iid-compat",[K0]:"fire-fcm",[q0]:"fire-fcm-compat",[Q0]:"fire-perf",[Y0]:"fire-perf-compat",[J0]:"fire-rc",[X0]:"fire-rc-compat",[Z0]:"fire-gcs",[e_]:"fire-gcs-compat",[t_]:"fire-fst",[n_]:"fire-fst-compat","fire-js":"fire-js",[r_]:"fire-js-all"};/**
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
 */const un=new Map,Pi=new Map;function lo(t,e){try{t.container.addComponent(e)}catch(n){Bu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ip(t,e){t.container.addOrOverwriteComponent(e)}function kr(t){const e=t.name;if(Pi.has(e))return Bu.debug(`There were multiple attempts to register component ${e}.`),!1;Pi.set(e,t);for(const n of un.values())lo(n,t);return!0}function kp(t,e){return t.container.getProvider(e)}function o_(t,e,n=Un){kp(t,e).clearInstance(n)}function a_(){Pi.clear()}/**
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
 */const l_={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},Ai=new Pr("app","Firebase",l_);/**
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
 */let u_=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ai.create("app-deleted",{appName:this._name})}};/**
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
 */const Or=i_;function Sp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Un,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ai.create("bad-app-name",{appName:String(r)});const i=un.get(r);if(i){if(Pl(t,i.options)&&Pl(n,i.config))return i;throw Ai.create("duplicate-app",{appName:r})}const s=new T0(r);for(const a of Pi.values())s.addComponent(a);const o=new u_(t,n,s);return un.set(r,o),o}function c_(t=Un){const e=un.get(t);if(!e)throw Ai.create("no-app",{appName:t});return e}function d_(){return Array.from(un.values())}async function Tp(t){const e=t.name;un.has(e)&&(un.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Sr(t,e,n){var r;let i=(r=s_[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bu.warn(a.join(" "));return}kr(new bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Np(t,e){if(t!==null&&typeof t!="function")throw Ai.create("invalid-log-argument");P0(t,e)}function xp(t){R0(t)}/**
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
 */function f_(t){kr(new bn("platform-logger",e=>new A0(e),"PRIVATE")),Sr(Ep,L0,t),Sr("fire-js","")}f_();const h_=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:wt,SDK_VERSION:Or,_DEFAULT_ENTRY_NAME:Un,_addComponent:lo,_addOrOverwriteComponent:Ip,_apps:un,_clearComponents:a_,_components:Pi,_getProvider:kp,_registerComponent:kr,_removeServiceInstance:o_,deleteApp:Tp,getApp:c_,getApps:d_,initializeApp:Sp,onLog:Np,registerVersion:Sr,setLogLevel:xp},Symbol.toStringTag,{value:"Module"}));/**
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
 */class p_{constructor(e,n){this._delegate=e,this.firebase=n,lo(e,new bn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Tp(this._delegate)))}_getService(e,n=Un){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Un){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){lo(this._delegate,e)}_addOrOverwriteComponent(e){Ip(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const m_={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},xd=new Pr("app-compat","Firebase",m_);/**
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
 */function v_(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Sr,setLogLevel:xp,onLog:Np,apps:null,SDK_VERSION:Or,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:h_}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Un,!Td(e,u))throw xd.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,f={}){const h=Sp(u,f);if(Td(e,h.name))return e[h.name];const g=new t(h,n);return e[h.name]=g,g}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const f=u.name,h=f.replace("-compat","");if(kr(u)&&u.type==="PUBLIC"){const g=(y=i())=>{if(typeof y[h]!="function")throw xd.create("invalid-app-argument",{appName:f});return y[h]()};u.serviceProps!==void 0&&ao(g,u.serviceProps),n[h]=g,t.prototype[h]=function(...y){return this._getService.bind(this,f).apply(this,u.multipleInstances?y:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,f){return f==="serverAuth"?null:f}return n}/**
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
 */function Cp(){const t=v_(p_);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Cp,extendNamespace:e,createSubscribe:_p,ErrorFactory:Pr,deepExtend:ao});function e(n){ao(t,n)}return t}const g_=Cp();/**
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
 */const Cd=new Vu("@firebase/app-compat"),y_="@firebase/app-compat",__="0.1.0";/**
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
 */function w_(t){Sr(y_,__,t)}/**
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
 */if(m0()&&self.firebase!==void 0){Cd.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Cd.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Dt=g_;w_();var E_="firebase",I_="9.0.0";/**
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
 */Dt.registerVersion(E_,I_,"app-compat");const Br={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Kn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function k_(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function S_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const T_=k_,Rp=new Pr("auth","Firebase",S_());/**
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
 */const Rd=new Vu("@firebase/auth");function Cs(t,...e){Rd.logLevel<=z.ERROR&&Rd.error(`Auth (${Or}): ${t}`,...e)}/**
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
 */function Ie(t,...e){throw Hu(t,...e)}function me(t,...e){return Hu(t,...e)}function Hu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rp.create(t,...e)}function T(t,e,...n){if(!t)throw Hu(e,...n)}function gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cs(e),new Error(e)}function lt(t,e){t||gt(e)}/**
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
 */const Pd=new Map;function ze(t){lt(t instanceof Function,"Expected a class definition");let e=Pd.get(t);return e?(lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pd.set(t,e),e)}function N_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ze);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Oi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Gu(){return Ad()==="http:"||Ad()==="https:"}function Ad(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function x_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gu()||gp()||"connection"in navigator)?navigator.onLine:!0}function C_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,lt(n>e,"Short delay should be less than long delay!"),this.isMobile=p0()||$u()}get(){return x_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ku(t,e){lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Al{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const R_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"};/**
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
 */const P_=new Vi(3e4,6e4);function De(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function de(t,e,n,r,i={}){return Pp(t,i,()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ar(Object.assign({key:t.config.apiKey},o)).slice(1),l=new(Al.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),Al.fetch()(Ap(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Pp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},R_),e);try{const i=new A_(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Rs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=(s.ok?o.errorMessage:o.error.message).split(" : ")[0];if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Rs(t,"email-already-in-use",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");Ie(t,u)}}catch(i){if(i instanceof wt)throw i;Ie(t,"network-request-failed")}}async function Ut(t,e,n,r,i={}){const s=await de(t,e,n,r,i);return"mfaPendingCredential"in s&&Ie(t,"multi-factor-auth-required",{serverResponse:s}),s}function Ap(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ku(t.config,i):`${t.config.apiScheme}://${i}`}class A_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(me(this.auth,"timeout")),P_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=me(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function O_(t,e){return de(t,"POST","/v1/accounts:delete",e)}async function L_(t,e){return de(t,"POST","/v1/accounts:update",e)}async function j_(t,e){return de(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function D_(t,e=!1){const n=M(t),r=await n.getIdToken(e),i=jo(r);T(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:li(ka(i.auth_time)),issuedAtTime:li(ka(i.iat)),expirationTime:li(ka(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ka(t){return Number(t)*1e3}function jo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cs("JWT malformed, contained fewer than 3 sections"),null;try{const i=d0(n);return i?JSON.parse(i):(Cs("Failed to decode base64 JWT payload"),null)}catch(i){return Cs("Caught error parsing JWT payload as JSON",i),null}}function M_(t){const e=jo(t);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wt&&b_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function b_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class U_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Op{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Li(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Mt(t,j_(n,{idToken:r}));T(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$_(s.providerUserInfo):[],a=z_(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Op(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function F_(t){const e=M(t);await Li(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function z_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $_(t){return t.map(e=>{var{providerId:n}=e,r=zu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function W_(t,e){const n=await Pp(t,{},()=>{const r=Ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ap(t,i,"/v1/token",`key=${s}`);return Al.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):M_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await W_(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ji;return r&&(T(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(T(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(T(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
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
 */function zt(t,e){T(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=zu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new U_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.metadata=new Op(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Mt(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return D_(this,e)}reload(){return F_(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Li(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mt(this,O_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:v,emailVerified:w,isAnonymous:k,providerData:R,stsTokenManager:P}=n;T(v&&P,e,"internal-error");const x=ji.fromJSON(this.name,P);T(typeof v=="string",e,"internal-error"),zt(h,e.name),zt(g,e.name),T(typeof w=="boolean",e,"internal-error"),T(typeof k=="boolean",e,"internal-error"),zt(y,e.name),zt(_,e.name),zt(E,e.name),zt(I,e.name),zt(m,e.name),zt(p,e.name);const b=new Rn({uid:v,auth:e,email:g,emailVerified:w,displayName:h,isAnonymous:k,photoURL:_,phoneNumber:y,tenantId:E,stsTokenManager:x,createdAt:m,lastLoginAt:p});return R&&Array.isArray(R)&&(b.providerData=R.map(L=>Object.assign({},L))),I&&(b._redirectEventId=I),b}static async _fromIdTokenResponse(e,n,r=!1){const i=new ji;i.updateFromServerResponse(n);const s=new Rn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Li(s),s}}/**
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
 */class Lp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lp.type="NONE";const Di=Lp;/**
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
 */function Pn(t,e,n){return`firebase:${t}:${e}:${n}`}class hr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pn("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hr(ze(Di),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ze(Di);const o=Pn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const h=Rn._fromJSON(e,f);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new hr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new hr(s,e,r))}}/**
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
 */function Od(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bp(e))return"Blackberry";if(Up(e))return"Webos";if(qu(e))return"Safari";if((e.includes("chrome/")||Dp(e))&&!e.includes("edge/"))return"Chrome";if(Bi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jp(t=te()){return/firefox\//i.test(t)}function qu(t=te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dp(t=te()){return/crios\//i.test(t)}function Mp(t=te()){return/iemobile/i.test(t)}function Bi(t=te()){return/android/i.test(t)}function bp(t=te()){return/blackberry/i.test(t)}function Up(t=te()){return/webos/i.test(t)}function Lr(t=te()){return/iphone|ipad|ipod/i.test(t)}function V_(t=te()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function B_(t=te()){var e;return Lr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function H_(){return yp()&&document.documentMode===10}function Fp(t=te()){return Lr(t)||Bi(t)||Up(t)||bp(t)||/windows phone/i.test(t)||Mp(t)}function G_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function zp(t,e=[]){let n;switch(t){case"Browser":n=Od(te());break;case"Worker":n=`${Od(te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${r}`}/**
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
 */class K_{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ld(this),this.idTokenSubscription=new Ld(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ze(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await hr.create(this,e),!this._deleted&&(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o!=null&&o.user)&&(r=o.user)}return r?r._redirectEventId?(T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Li(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?M(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ze(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ze(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await hr.create(this,[ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function ce(t){return M(t)}class Ld{constructor(e){this.auth=e,this.observer=null,this.addObserver=_p(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function q_(t,e,n){const r=ce(t);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=$p(e),{host:o,port:a}=Q_(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Y_(i)}function $p(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Q_(t){const e=$p(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:jd(o)}}}function jd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Y_(t){function e(){const n=document.createElement("p"),r=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&!t&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class jr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,n){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}}/**
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
 */async function Wp(t,e){return de(t,"POST","/v1/accounts:resetPassword",De(t,e))}async function Vp(t,e){return de(t,"POST","/v1/accounts:update",e)}async function J_(t,e){return de(t,"POST","/v1/accounts:update",De(t,e))}/**
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
 */async function X_(t,e){return Ut(t,"POST","/v1/accounts:signInWithPassword",De(t,e))}async function Do(t,e){return de(t,"POST","/v1/accounts:sendOobCode",De(t,e))}async function Z_(t,e){return Do(t,e)}async function e1(t,e){return Do(t,e)}async function t1(t,e){return Do(t,e)}async function n1(t,e){return Do(t,e)}/**
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
 */async function r1(t,e){return Ut(t,"POST","/v1/accounts:signInWithEmailLink",De(t,e))}async function i1(t,e){return Ut(t,"POST","/v1/accounts:signInWithEmailLink",De(t,e))}/**
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
 */class Mi extends jr{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Mi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Mi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return X_(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return r1(e,{email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Vp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return i1(e,{idToken:n,email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Pt(t,e){return Ut(t,"POST","/v1/accounts:signInWithIdp",De(t,e))}/**
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
 */const s1="http://localhost";class Et extends jr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ie("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=zu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Et(r,i);return Object.assign(o,s),o}_getIdTokenResponse(e){const n=this.buildRequest();return Pt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pt(e,n)}buildRequest(){const e={requestUri:s1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ar(n)}return e}}/**
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
 */async function o1(t,e){return de(t,"POST","/v1/accounts:sendVerificationCode",De(t,e))}async function a1(t,e){return Ut(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,e))}async function l1(t,e){const n=await Ut(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,e));if(n.temporaryProof)throw Rs(t,"account-exists-with-different-credential",n);return n}const u1={USER_NOT_FOUND:"user-not-found"};async function c1(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ut(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,n),u1)}/**
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
 */class An extends jr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new An({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new An({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return a1(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return l1(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return c1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new An({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function d1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function f1(t){const e=or(Jr(t)).link,n=e?or(Jr(e)).deep_link_id:null,r=or(Jr(t)).deep_link_id;return(r?or(Jr(r)).link:null)||r||n||e||t}class Mo{constructor(e){var n,r,i,s,o,a;const l=or(Jr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,h=d1((i=l.mode)!==null&&i!==void 0?i:null);T(u&&f&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=f1(e);try{return new Mo(n)}catch{return null}}}/**
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
 */class pn{constructor(){this.providerId=pn.PROVIDER_ID}static credential(e,n){return Mi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mo.parseLink(n);return T(r,"argument-error"),Mi._fromEmailAndCode(e,r.code,r.tenantId)}}pn.PROVIDER_ID="password";pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class mn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Dr extends mn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pr extends Dr{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return T("providerId"in n&&"signInMethod"in n,"argument-error"),Et._fromParams(n)}credential(e){return this._credential(e)}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),Et._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new pr(a)._credential({idToken:n,accessToken:r,rawNonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class ht extends Dr{constructor(){super("facebook.com")}static credential(e){return Et._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
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
 */class pt extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Et._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pt.credential(n,r)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
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
 */class mt extends Dr{constructor(){super("github.com")}static credential(e){return Et._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com";mt.PROVIDER_ID="github.com";/**
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
 */const h1="http://localhost";class uo extends jr{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Pt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pt(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new uo(r,s)}static _create(e,n){return new uo(e,n)}buildRequest(){return{requestUri:h1,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */class vt extends Dr{constructor(){super("twitter.com")}static credential(e,n){return Et._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
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
 */async function Bp(t,e){return Ut(t,"POST","/v1/accounts:signUp",De(t,e))}/**
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
 */class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Rn._fromIdTokenResponse(e,r,i),o=Dd(r);return new Ze({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Dd(r);return new Ze({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Dd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function p1(t){var e;const n=ce(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ze({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Bp(n,{returnSecureToken:!0}),i=await Ze._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class co extends wt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,co.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,i){return new co(e,n,r,i)}}function Hp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?co._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function Gp(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function m1(t,e){const n=M(t);await bo(!0,n,e);const{providerUserInfo:r}=await L_(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Gp(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Qu(t,e,n=!1){const r=await Mt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ze._forOperation(t,"link",r)}async function bo(t,e,n){await Li(e);const r=Gp(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";T(r.has(n)===t,e.auth,i)}/**
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
 */async function Kp(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Mt(t,Hp(r,i,e,t),n);T(s.idToken,r,"internal-error");const o=jo(s.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(t.uid===a,r,"user-mismatch"),Ze._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ie(r,"user-mismatch"),s}}/**
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
 */async function qp(t,e,n=!1){const r="signIn",i=await Hp(t,r,e),s=await Ze._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Uo(t,e){return qp(ce(t),e)}async function Qp(t,e){const n=M(t);return await bo(!1,n,e.providerId),Qu(n,e)}async function Yp(t,e){return Kp(M(t),e)}/**
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
 */async function v1(t,e){return Ut(t,"POST","/v1/accounts:signInWithCustomToken",De(t,e))}/**
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
 */async function g1(t,e){const n=ce(t),r=await v1(n,{token:e,returnSecureToken:!0}),i=await Ze._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Fo{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Yu._fromServerResponse(e,n):Ie(e,"internal-error")}}class Yu extends Fo{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Yu(n)}}/**
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
 */function zo(t,e,n){var r;T(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),T(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iosBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function y1(t,e,n){const r=M(t),i={requestType:"PASSWORD_RESET",email:e};n&&zo(r,i,n),await e1(r,i)}async function _1(t,e,n){await Wp(M(t),{oobCode:e,newPassword:n})}async function w1(t,e){await J_(M(t),{oobCode:e})}async function Jp(t,e){const n=M(t),r=await Wp(n,{oobCode:e}),i=r.requestType;switch(T(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(r.mfaInfo,n,"internal-error");default:T(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Fo._fromServerResponse(ce(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function E1(t,e){const{data:n}=await Jp(M(t),e);return n.email}async function I1(t,e,n){const r=ce(t),i=await Bp(r,{returnSecureToken:!0,email:e,password:n}),s=await Ze._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function k1(t,e,n){return Uo(M(t),pn.credential(e,n))}/**
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
 */async function S1(t,e,n){const r=M(t),i={requestType:"EMAIL_SIGNIN",email:e};T(n.handleCodeInApp,r,"argument-error"),n&&zo(r,i,n),await t1(r,i)}function T1(t,e){const n=Mo.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function N1(t,e,n){const r=M(t),i=pn.credentialWithLink(e,n||Oi());return T(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Uo(r,i)}/**
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
 */async function x1(t,e){return de(t,"POST","/v1/accounts:createAuthUri",De(t,e))}/**
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
 */async function C1(t,e){const n=Gu()?Oi():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await x1(M(t),r);return i||[]}async function R1(t,e){const n=M(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&zo(n.auth,i,e);const{email:s}=await Z_(n.auth,i);s!==t.email&&await t.reload()}async function P1(t,e,n){const r=M(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&zo(r.auth,s,n);const{email:o}=await n1(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function A1(t,e){return de(t,"POST","/v1/accounts:update",e)}/**
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
 */async function O1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=M(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Mt(r,A1(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function L1(t,e){return Xp(M(t),e,null)}function j1(t,e){return Xp(M(t),null,e)}async function Xp(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Mt(t,Vp(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function D1(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=jo(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new mr(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new M1(s,i);case"github.com":return new b1(s,i);case"google.com":return new U1(s,i);case"twitter.com":return new F1(s,i,t.screenName||null);case"custom":case"anonymous":return new mr(s,null);default:return new mr(s,r,i)}}class mr{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Zp extends mr{constructor(e,n,r,i){super(e,n,r),this.username=i}}class M1 extends mr{constructor(e,n){super(e,"facebook.com",n)}}class b1 extends Zp{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class U1 extends mr{constructor(e,n){super(e,"google.com",n)}}class F1 extends Zp{constructor(e,n,r){super(e,"twitter.com",n,r)}}function z1(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:D1(n)}class Nn{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new Nn("enroll",e)}static _fromMfaPendingCredential(e){return new Nn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Nn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Nn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Ju{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ce(e),i=(n.serverResponse.mfaInfo||[]).map(o=>Fo._fromServerResponse(r,o));T(n.serverResponse.mfaPendingCredential,r,"internal-error");const s=Nn._fromMfaPendingCredential(n.serverResponse.mfaPendingCredential);return new Ju(s,i,async o=>{const a=await o._process(r,s);delete n.serverResponse.mfaInfo,delete n.serverResponse.mfaPendingCredential;const l=Object.assign(Object.assign({},n.serverResponse),{idToken:a.idToken,refreshToken:a.refreshToken});switch(n.operationType){case"signIn":const u=await Ze._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return T(n.user,r,"internal-error"),Ze._forOperation(n.user,n.operationType,l);default:Ie(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function $1(t,e){var n;const r=M(t),i=e;return T(e.operationType,r,"argument-error"),T((n=i.serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Ju._fromError(r,i)}/**
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
 */function W1(t,e){return de(t,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:t.tenantId},e))}function V1(t,e){return de(t,"POST","/v2/accounts/mfaEnrollment:finalize",Object.assign({tenantId:t.tenantId},e))}function B1(t,e){return de(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Object.assign({tenantId:t.tenantId},e))}class Xu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Fo._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Xu(e)}async getSession(){return Nn._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),s=await Mt(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await Mt(this.user,B1(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const Sa=new WeakMap;function H1(t){const e=M(t);return Sa.has(e)||Sa.set(e,Xu._fromUser(e)),Sa.get(e)}const fo="__sak";/**
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
 */class em{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fo,"1"),this.storage.removeItem(fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
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
 */function G1(){const t=te();return qu(t)||Lr(t)}const K1=1e3,q1=10;class tm extends em{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=G1()&&G_(),this.fallbackToPolling=Fp(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);H_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,q1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},K1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tm.type="LOCAL";const Ol=tm;/**
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
 */class nm extends em{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nm.type="SESSION";const Fn=nm;/**
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
 */function Q1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $o{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $o(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Q1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$o.receivers=[];/**
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
 */function Hi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Y1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Hi("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const g=h;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ie(){return window}function J1(t){ie().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Zu(){return typeof ie().WorkerGlobalScope<"u"&&typeof ie().importScripts=="function"}async function X1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ew(){return Zu()?self:null}/**
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
 */const rm="firebaseLocalStorageDb",tw=1,ho="firebaseLocalStorage",im="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wo(t,e){return t.transaction([ho],e?"readwrite":"readonly").objectStore(ho)}function nw(){const t=indexedDB.deleteDatabase(rm);return new Gi(t).toPromise()}function Ll(){const t=indexedDB.open(rm,tw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ho,{keyPath:im})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ho)?e(r):(r.close(),await nw(),e(await Ll()))})})}async function Md(t,e,n){const r=Wo(t,!0).put({[im]:e,value:n});return new Gi(r).toPromise()}async function rw(t,e){const n=Wo(t,!1).get(e),r=await new Gi(n).toPromise();return r===void 0?null:r.value}function bd(t,e){const n=Wo(t,!0).delete(e);return new Gi(n).toPromise()}const iw=800,sw=3;class sm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ll(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$o._getInstance(ew()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await X1(),!this.activeServiceWorker)return;this.sender=new Y1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ll();return await Md(e,fo,"1"),await bd(e,fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Md(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wo(i,!1).getAll();return new Gi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sm.type="LOCAL";const Ps=sm;/**
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
 */function ow(t,e){return de(t,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:t.tenantId},e))}function aw(t,e){return de(t,"POST","/v2/accounts/mfaSignIn:finalize",Object.assign({tenantId:t.tenantId},e))}/**
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
 */async function lw(t){return(await de(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function uw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function om(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=me("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uw().appendChild(r)})}function am(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const cw=500,dw=6e4,hs=1e12;class fw{constructor(e){this.auth=e,this.counter=hs,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new hw(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||hs;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||hs;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||hs;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class hw{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;T(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=pw(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},dw)},cw))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function pw(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Ta=am("rcb"),mw=new Vi(3e4,6e4),vw="https://www.google.com/recaptcha/api.js?";class gw{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!ie().grecaptcha}load(e,n=""){return T(yw(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(ie().grecaptcha):new Promise((r,i)=>{const s=ie().setTimeout(()=>{i(me(e,"network-request-failed"))},mw.get());ie()[Ta]=()=>{ie().clearTimeout(s),delete ie()[Ta];const a=ie().grecaptcha;if(!a){i(me(e,"internal-error"));return}const l=a.render;a.render=(u,f)=>{const h=l(u,f);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${vw}?${Ar({onload:Ta,render:"explicit",hl:n})}`;om(o).catch(()=>{clearTimeout(s),i(me(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!ie().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function yw(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class _w{async load(e){return new fw(e)}clearedOneInstance(){}}/**
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
 */const lm="recaptcha",ww={theme:"light",type:"image"};let Ew=class{constructor(e,n=Object.assign({},ww),r){this.parameters=n,this.type=lm,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ce(r),this.isInvisible=this.parameters.size==="invisible",T(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;T(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _w:new gw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=ie()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(Gu()&&!Zu(),this.auth,"internal-error"),await Iw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await lw(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function Iw(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class ec{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=An._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function kw(t,e,n){const r=ce(t),i=await Vo(r,e,M(n));return new ec(i,s=>Uo(r,s))}async function Sw(t,e,n){const r=M(t);await bo(!1,r,"phone");const i=await Vo(r.auth,e,M(n));return new ec(i,s=>Qp(r,s))}async function Tw(t,e,n){const r=M(t),i=await Vo(r.auth,e,M(n));return new ec(i,s=>Yp(r,s))}async function Vo(t,e,n){var r;const i=await n.verify();try{T(typeof i=="string",t,"argument-error"),T(n.type===lm,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return T(o.type==="enroll",t,"internal-error"),(await W1(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{T(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return T(a,t,"missing-multi-factor-info"),(await ow(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await o1(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function Nw(t,e){await Qu(M(t),e)}/**
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
 */let zn=class As{constructor(e){this.providerId=As.PROVIDER_ID,this.auth=ce(e)}verifyPhoneNumber(e,n){return Vo(this.auth,e,M(n))}static credential(e,n){return An._fromVerification(e,n)}static credentialFromResult(e){const n=e;return As.credentialFromTaggedObject(n)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?An._fromTokenResponse(n,r):null}};zn.PROVIDER_ID="phone";zn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Hn(t,e){return e?ze(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tc extends jr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xw(t){return qp(t.auth,new tc(t),t.bypassAuthState)}function Cw(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Kp(n,new tc(t),t.bypassAuthState)}async function Rw(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Qu(n,new tc(t),t.bypassAuthState)}/**
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
 */class um{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xw;case"linkViaPopup":case"linkViaRedirect":return Rw;case"reauthViaPopup":case"reauthViaRedirect":return Cw;default:Ie(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Pw=new Vi(2e3,1e4);async function Aw(t,e,n){const r=ce(t);T(e instanceof mn,t,"argument-error");const i=Hn(r,n);return new xt(r,"signInViaPopup",e,i).executeNotNull()}async function Ow(t,e,n){const r=M(t);T(e instanceof mn,r.auth,"argument-error");const i=Hn(r.auth,n);return new xt(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Lw(t,e,n){const r=M(t);T(e instanceof mn,r.auth,"argument-error");const i=Hn(r.auth,n);return new xt(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class xt extends um{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xt.currentPopupAction&&xt.currentPopupAction.cancel(),xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=Hi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Pw.get())};e()}}xt.currentPopupAction=null;/**
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
 */const jw="pendingRedirect",jl=new Map;class Dw extends um{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jl.get(this.auth._key());if(!e){try{const r=await Mw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jl.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mw(t,e){const n=cm(e),r=await Dl(t)._get(n)==="true";return await Dl(t)._remove(n),r}async function nc(t,e){return Dl(t)._set(cm(e),"true")}function bw(){jl.clear()}function Dl(t){return ze(t._redirectPersistence)}function cm(t){return Pn(jw,t.config.apiKey,t.name)}/**
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
 */function Uw(t,e,n){return Fw(t,e,n)}async function Fw(t,e,n){const r=ce(t);T(e instanceof mn,t,"argument-error");const i=Hn(r,n);return await nc(i,r),i._openRedirect(r,e,"signInViaRedirect")}function zw(t,e,n){return $w(t,e,n)}async function $w(t,e,n){const r=M(t);T(e instanceof mn,r.auth,"argument-error");const i=Hn(r.auth,n);await nc(i,r.auth);const s=await dm(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Ww(t,e,n){return Vw(t,e,n)}async function Vw(t,e,n){const r=M(t);T(e instanceof mn,r.auth,"argument-error");const i=Hn(r.auth,n);await bo(!1,r,e.providerId),await nc(i,r.auth);const s=await dm(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Bw(t,e){return await ce(t)._initializationPromise,Bo(t,e,!1)}async function Bo(t,e,n=!1){const r=ce(t),i=Hn(r,e),o=await new Dw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function dm(t){const e=Hi(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const Hw=10*60*1e3;class fm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(me(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ud(e))}saveEventToCache(e){this.cachedEventUids.add(Ud(e)),this.lastProcessedEventTime=Date.now()}}function Ud(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hm(t);default:return!1}}/**
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
 */async function pm(t,e={}){return de(t,"GET","/v1/projects",e)}/**
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
 */const Kw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qw=/^https?/;async function Qw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pm(t);for(const n of e)try{if(Yw(n))return}catch{}Ie(t,"unauthorized-domain")}function Yw(t){const e=Oi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qw.test(n))return!1;if(Kw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Jw=new Vi(3e4,6e4);function Fd(){const t=ie().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xw(t){return new Promise((e,n)=>{var r,i,s;function o(){Fd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fd(),n(me(t,"network-request-failed"))},timeout:Jw.get()})}if(!((i=(r=ie().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ie().gapi)===null||s===void 0)&&s.load)o();else{const a=am("iframefcb");return ie()[a]=()=>{gapi.load?o():n(me(t,"network-request-failed"))},om(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Os=null,e})}let Os=null;function Zw(t){return Os=Os||Xw(t),Os}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const eE=new Vi(5e3,15e3),tE="__/auth/iframe",nE="emulator/auth/iframe",rE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},iE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sE(t){const e=t.config;T(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ku(e,nE):`https://${t.config.authDomain}/${tE}`,r={apiKey:e.apiKey,appName:t.name,v:Or},i=iE.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ar(r).slice(1)}`}async function oE(t){const e=await Zw(t),n=ie().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:sE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=me(t,"network-request-failed"),a=ie().setTimeout(()=>{s(o)},eE.get());function l(){ie().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const aE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lE=500,uE=600,cE="_blank",dE="http://localhost";class zd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fE(t,e,n,r=lE,i=uE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aE),{width:r.toString(),height:i.toString(),top:s,left:o}),u=te().toLowerCase();n&&(a=Dp(u)?cE:n),jp(u)&&(e=e||dE,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[y,_])=>`${g}${y}=${_},`,"");if(B_(u)&&a!=="_self")return hE(e||"",a),new zd(null);const h=window.open(e||"",a,f);T(h,t,"popup-blocked");try{h.focus()}catch{}return new zd(h)}function hE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pE="__/auth/handler",mE="emulator/auth/handler";function Ml(t,e,n,r,i,s){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Or,eventId:i};if(e instanceof mn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Dr){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${vE(t)}?${Ar(a).slice(1)}`}function vE({config:t}){return t.emulator?Ku(t,mE):`https://${t.authDomain}/${pE}`}/**
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
 */const Na="webStorageSupport";class gE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fn,this._completeRedirectFn=Bo}async _openPopup(e,n,r,i){var s;lt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Ml(e,n,r,Oi(),i);return fE(e,o,Hi())}async _openRedirect(e,n,r,i){return await this._originValidation(e),J1(Ml(e,n,r,Oi(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await oE(e),r=new fm(e);return n.register("authEvent",i=>(T(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Na,{type:Na},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Na];o!==void 0&&n(!!o),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fp()||qu()||Lr()}}const yE=gE;class _E{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return gt("unexpected MultiFactorSessionType")}}}class rc extends _E{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rc(e)}_finalizeEnroll(e,n,r){return V1(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return aw(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class wE{constructor(){}static assertion(e){return rc._fromCredential(e)}}var EE="@firebase/auth",IE="0.17.0";/**
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
 */class kE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function SE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function TE(t){kr(new bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{T(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),T(!(s!=null&&s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zp(t)},l=new K_(o,a);return N_(l,n),l})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kr(new bn("auth-internal",e=>{const n=ce(e.getProvider("auth").getImmediate());return(r=>new kE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sr(EE,IE,SE(t))}TE("Browser");/**
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
 */function $n(){return window}/**
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
 */const NE=2e3;async function xE(t,e,n){var r;const{BuildInfo:i}=$n();lt(e.sessionId,"AuthEvent did not contain a session ID");const s=await OE(e.sessionId),o={};return Lr()?o.ibi=i.packageName:Bi()?o.apn=i.packageName:Ie(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Ml(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function CE(t){const{BuildInfo:e}=$n(),n={};Lr()?n.iosBundleId=e.packageName:Bi()?n.androidPackageName=e.packageName:Ie(t,"operation-not-supported-in-this-environment"),await pm(t,n)}function RE(t){const{cordova:e}=$n();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,V_()?"_blank":"_system","location=yes"),n(i)})})}async function PE(t,e,n){const{cordova:r}=$n();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const g=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof g=="function"&&g(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(me(t,"redirect-cancelled-by-user"))},NE))}function f(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Bi()&&document.addEventListener("visibilitychange",f,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",f,!1),a&&window.clearTimeout(a)}})}finally{i()}}function AE(t){var e,n,r,i,s,o,a,l,u,f;const h=$n();T(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),T(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),T(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T(typeof((f=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||f===void 0?void 0:f.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function OE(t){const e=LE(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function LE(t){if(lt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const jE=20;class DE extends fm{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function ME(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:FE(),postBody:null,tenantId:t.tenantId,error:me(t,"no-auth-event")}}function bE(t,e){return bl()._set(Ul(t),e)}async function $d(t){const e=await bl()._get(Ul(t));return e&&await bl()._remove(Ul(t)),e}function UE(t,e){var n,r;const i=$E(e);if(i.includes("/__/auth/callback")){const s=Ls(i),o=s.firebaseError?zE(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?me(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function FE(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<jE;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function bl(){return ze(Ol)}function Ul(t){return Pn("authEvent",t.config.apiKey,t.name)}function zE(t){try{return JSON.parse(t)}catch{return null}}function $E(t){const e=Ls(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ls(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ls(i).link||i||r||n||t}function Ls(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return or(n.join("?"))}/**
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
 */const WE=500;class VE{constructor(){this._redirectPersistence=Fn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Bo}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new DE(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ie(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){AE(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),bw(),await this._originValidation(e);const o=ME(e,r,i);await bE(e,o);const a=await xE(e,o,n),l=await RE(a);return PE(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CE(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=$n(),o=setTimeout(async()=>{await $d(e),n.onEvent(Wd())},WE),a=async f=>{clearTimeout(o);const h=await $d(e);let g=null;h&&(f!=null&&f.url)&&(g=UE(h,f.url)),n.onEvent(g||Wd())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;$n().handleOpenURL=async f=>{if(f.toLowerCase().startsWith(u)&&a({url:f}),typeof l=="function")try{l(f)}catch(h){console.error(h)}}}}const BE=VE;function Wd(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:me("no-auth-event")}}/**
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
 */function HE(t,e){ce(t)._logFramework(e)}var GE="@firebase/auth-compat",KE="0.1.0";/**
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
 */const qE=1e3;function po(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function QE(){return po()==="http:"||po()==="https:"}function mm(t=te()){return!!((po()==="file:"||po()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function YE(){return $u()||vp()}function JE(){return yp()&&(document==null?void 0:document.documentMode)===11}function XE(t=te()){return/Edge\/\d+/.test(t)}function ZE(t=te()){return JE()||XE(t)}function vm(){try{const t=self.localStorage,e=Hi();if(t)return t.setItem(e,"1"),t.removeItem(e),ZE()?Rl():!0}catch{return ic()&&Rl()}return!1}function ic(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function xa(){return(QE()||gp()||mm())&&!YE()&&vm()&&!ic()}function gm(){return mm()&&typeof document<"u"}async function eI(){return gm()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},qE);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
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
 */const Ue={LOCAL:"local",NONE:"none",SESSION:"session"},Hr=T,ym="persistence";function tI(t,e){if(Hr(Object.values(Ue).includes(e),t,"invalid-persistence-type"),$u()){Hr(e!==Ue.SESSION,t,"unsupported-persistence-type");return}if(vp()){Hr(e===Ue.NONE,t,"unsupported-persistence-type");return}if(ic()){Hr(e===Ue.NONE||e===Ue.LOCAL&&Rl(),t,"unsupported-persistence-type");return}Hr(e===Ue.NONE||vm(),t,"unsupported-persistence-type")}async function Fl(t){await t._initializationPromise;const e=_m(),n=Pn(ym,t.config.apiKey,t.name);e!=null&&e.sessionStorage&&e.sessionStorage.setItem(n,t._getPersistence())}function nI(t,e){const n=_m();if(!(n!=null&&n.sessionStorage))return[];const r=Pn(ym,t,e);switch(n.sessionStorage.getItem(r)){case Ue.NONE:return[Di];case Ue.LOCAL:return[Ps,Fn];case Ue.SESSION:return[Fn];default:return[]}}function _m(){return typeof window<"u"?window:null}/**
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
 */const rI=T;class Qt{constructor(){this.browserResolver=ze(yE),this.cordovaResolver=ze(BE),this.underlyingResolver=null,this._redirectPersistence=Fn,this._completeRedirectFn=Bo}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return gm()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return rI(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await eI();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function wm(t){return t.unwrap()}function iI(t){return t.wrapped()}/**
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
 */function sI(t){return Em(t)}function oI(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new aI(t,$1(t,e))}else if(r){const i=Em(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Em(t){const{_tokenResponse:e}=t instanceof wt?t.customData:t;if(!e)return null;if(!(t instanceof wt)&&"temporaryProof"in e&&"phoneNumber"in e)return zn.credentialFromResult(t);const n=e.providerId;if(!n||n===Br.PASSWORD)return null;let r;switch(n){case Br.GOOGLE:r=pt;break;case Br.FACEBOOK:r=ht;break;case Br.GITHUB:r=mt;break;case Br.TWITTER:r=vt;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?uo._create(n,a):Et._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new pr(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof wt?r.credentialFromError(t):r.credentialFromResult(t)}async function Ce(t,e){let n;try{n=await e}catch(s){throw s instanceof wt&&oI(t,s),s}const{operationType:r,user:i}=n;return{operationType:r,credential:sI(n),additionalUserInfo:z1(n),user:Ct.getOrCreate(i)}}async function zl(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ce(t,n.confirm(r))}}class aI{constructor(e,n){this.resolver=n,this.auth=iI(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ce(wm(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Ct{constructor(e){this._delegate=e,this.multiFactor=H1(e)}static getOrCreate(e){return Ct.USER_MAP.has(e)||Ct.USER_MAP.set(e,new Ct(e)),Ct.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ce(this.auth,Qp(this._delegate,e))}async linkWithPhoneNumber(e,n){return zl(this.auth,Sw(this._delegate,e,n))}async linkWithPopup(e){return Ce(this.auth,Lw(this._delegate,e,Qt))}async linkWithRedirect(e){return await Fl(ce(this.auth)),Ww(this._delegate,e,Qt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ce(this.auth,Yp(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return zl(this.auth,Tw(this._delegate,e,n))}reauthenticateWithPopup(e){return Ce(this.auth,Ow(this._delegate,e,Qt))}async reauthenticateWithRedirect(e){return await Fl(ce(this.auth)),zw(this._delegate,e,Qt)}sendEmailVerification(e){return R1(this._delegate,e)}async unlink(e){return await m1(this._delegate,e),this}updateEmail(e){return L1(this._delegate,e)}updatePassword(e){return j1(this._delegate,e)}updatePhoneNumber(e){return Nw(this._delegate,e)}updateProfile(e){return O1(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return P1(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Ct.USER_MAP=new WeakMap;/**
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
 */const Gr=T;class $l{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Gr(r,"invalid-api-key",{appName:e.name});let i=[Di];if(typeof window<"u"){i=nI(r,e.name);for(const o of[Ps,Ol,Fn])i.includes(o)||i.push(o)}Gr(r,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?Qt:void 0;this._delegate=n.initialize({options:{persistence:i,popupRedirectResolver:s}}),this._delegate._updateErrorMap(T_),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Ct.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){q_(this._delegate,e,n)}applyActionCode(e){return w1(this._delegate,e)}checkActionCode(e){return Jp(this._delegate,e)}confirmPasswordReset(e,n){return _1(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ce(this._delegate,I1(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return C1(this._delegate,e)}isSignInWithEmailLink(e){return T1(this._delegate,e)}async getRedirectResult(){Gr(xa(),this._delegate,"operation-not-supported-in-this-environment");const e=await Bw(this._delegate,Qt);return e?Ce(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){HE(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Vd(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Vd(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return S1(this._delegate,e,n)}sendPasswordResetEmail(e,n){return y1(this._delegate,e,n||void 0)}async setPersistence(e){tI(this._delegate,e);let n;switch(e){case Ue.SESSION:n=Fn;break;case Ue.LOCAL:n=await ze(Ps)._isAvailable()?Ps:Ol;break;case Ue.NONE:n=Di;break;default:return Ie("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ce(this._delegate,p1(this._delegate))}signInWithCredential(e){return Ce(this._delegate,Uo(this._delegate,e))}signInWithCustomToken(e){return Ce(this._delegate,g1(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ce(this._delegate,k1(this._delegate,e,n))}signInWithEmailLink(e,n){return Ce(this._delegate,N1(this._delegate,e,n))}signInWithPhoneNumber(e,n){return zl(this._delegate,kw(this._delegate,e,n))}async signInWithPopup(e){return Gr(xa(),this._delegate,"operation-not-supported-in-this-environment"),Ce(this._delegate,Aw(this._delegate,e,Qt))}async signInWithRedirect(e){return Gr(xa(),this._delegate,"operation-not-supported-in-this-environment"),await Fl(this._delegate),Uw(this._delegate,e,Qt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return E1(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}$l.Persistence=Ue;function Vd(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Ct.getOrCreate(o)),error:e,complete:n}}/**
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
 */class sc{constructor(){this.providerId="phone",this._delegate=new zn(wm(Dt.auth()))}static credential(e,n){return zn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}sc.PHONE_SIGN_IN_METHOD=zn.PHONE_SIGN_IN_METHOD;sc.PROVIDER_ID=zn.PROVIDER_ID;/**
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
 */const lI=T;class uI{constructor(e,n,r=Dt.app()){var i;lI((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Ew(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const cI="auth-compat";function dI(t){t.INTERNAL.registerComponent(new bn(cI,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new $l(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Kn.EMAIL_SIGNIN,PASSWORD_RESET:Kn.PASSWORD_RESET,RECOVER_EMAIL:Kn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Kn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Kn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Kn.VERIFY_EMAIL}},EmailAuthProvider:pn,FacebookAuthProvider:ht,GithubAuthProvider:mt,GoogleAuthProvider:pt,OAuthProvider:pr,PhoneAuthProvider:sc,PhoneMultiFactorGenerator:wE,RecaptchaVerifier:uI,TwitterAuthProvider:vt,Auth:$l,AuthCredential:jr,Error:wt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(GE,KE)}dI(Dt);const fI="_fullBody_16ct3_1",hI="_navbar_16ct3_13",pI="_header_16ct3_33",mI="_headerText_16ct3_45",vI="_logButton_16ct3_65",gI="_welcome_16ct3_107",yI="_cart_16ct3_139",_I="_routebar_16ct3_161",wI="_subroutebar1_16ct3_171",EI="_subroutebar2_16ct3_185",II="_routerposition_16ct3_199",kI="_subrouterposition_16ct3_213",SI="_routerText_16ct3_243",TI="_routedbody_16ct3_267",NI="_shopText_16ct3_283",xI="_sales_16ct3_297",CI="_subSales_16ct3_313",RI="_imgfixH_16ct3_327",PI="_imgfixW_16ct3_335",AI="_sale_16ct3_297",OI="_purchasetab_16ct3_361",LI="_price_16ct3_381",jI="_addToCart_16ct3_393",DI="_textAdd_16ct3_407",MI="_textEdit_16ct3_427",bI="_subSalesAlt_16ct3_437",UI="_items_16ct3_451",FI="_item_16ct3_451",d={fullBody:fI,navbar:hI,header:pI,headerText:mI,logButton:vI,welcome:gI,cart:yI,routebar:_I,subroutebar1:wI,subroutebar2:EI,routerposition:II,subrouterposition:kI,routerText:SI,routedbody:TI,shopText:NI,sales:xI,subSales:CI,imgfixH:RI,imgfixW:PI,sale:AI,purchasetab:OI,price:LI,addToCart:jI,textAdd:DI,textEdit:MI,subSalesAlt:bI,items:UI,item:FI},zI={apiKey:"AIzaSyBHAesyFHnXxm6C-VGw73W3l_fOqVzHzMg",authDomain:"fakeshop-c3103.firebaseapp.com",projectId:"fakeshop-c3103",appId:"1:1062737401479:web:d9cdf6024891467c670a22"};Dt.initializeApp(zI);const $I=t=>{localStorage.setItem("username",t)};function Im(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Im(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Yt(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=Im(t))&&(r&&(r+=" "),r+=e);return r}const ui=t=>typeof t=="number"&&!isNaN(t),Wn=t=>typeof t=="string",Ae=t=>typeof t=="function",js=t=>Wn(t)||Ae(t)?t:null,Ca=t=>S.isValidElement(t)||Wn(t)||Ae(t)||ui(t);function WI(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Ho(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:f,nodeRef:h,isIn:g}=o;const y=r?`${e}--${l}`:e,_=r?`${n}--${l}`:n,E=S.useRef(0);return S.useLayoutEffect(()=>{const I=h.current,m=y.split(" "),p=v=>{v.target===h.current&&(I.dispatchEvent(new Event("d")),I.removeEventListener("animationend",p),I.removeEventListener("animationcancel",p),E.current===0&&v.type!=="animationcancel"&&I.classList.remove(...m))};I.classList.add(...m),I.addEventListener("animationend",p),I.addEventListener("animationcancel",p)},[]),S.useEffect(()=>{const I=h.current,m=()=>{I.removeEventListener("animationend",m),i?WI(I,f,s):f()};g||(u?m():(E.current=1,I.className+=` ${_}`,I.addEventListener("animationend",m)))},[g]),$.createElement($.Fragment,null,a)}}function Bd(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const He={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},ps=t=>{let{theme:e,type:n,...r}=t;return $.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Ra={info:function(t){return $.createElement(ps,{...t},$.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return $.createElement(ps,{...t},$.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return $.createElement(ps,{...t},$.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return $.createElement(ps,{...t},$.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return $.createElement("div",{className:"Toastify__spinner"})}};function VI(t){const[,e]=S.useReducer(y=>y+1,0),[n,r]=S.useState([]),i=S.useRef(null),s=S.useRef(new Map).current,o=y=>n.indexOf(y)!==-1,a=S.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:y=>s.get(y)}).current;function l(y){let{containerId:_}=y;const{limit:E}=a.props;!E||_&&a.containerId!==_||(a.count-=a.queue.length,a.queue=[])}function u(y){r(_=>y==null?[]:_.filter(E=>E!==y))}function f(){const{toastContent:y,toastProps:_,staleId:E}=a.queue.shift();g(y,_,E)}function h(y,_){let{delay:E,staleId:I,...m}=_;if(!Ca(y)||function(oe){return!i.current||a.props.enableMultiContainer&&oe.containerId!==a.props.containerId||s.has(oe.toastId)&&oe.updateId==null}(m))return;const{toastId:p,updateId:v,data:w}=m,{props:k}=a,R=()=>u(p),P=v==null;P&&a.count++;const x={...k,style:k.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(m).filter(oe=>{let[ke,ge]=oe;return ge!=null})),toastId:p,updateId:v,data:w,closeToast:R,isIn:!1,className:js(m.className||k.toastClassName),bodyClassName:js(m.bodyClassName||k.bodyClassName),progressClassName:js(m.progressClassName||k.progressClassName),autoClose:!m.isLoading&&(b=m.autoClose,L=k.autoClose,b===!1||ui(b)&&b>0?b:L),deleteToast(){const oe=Bd(s.get(p),"removed");s.delete(p),He.emit(4,oe);const ke=a.queue.length;if(a.count=p==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),ke>0){const ge=p==null?a.props.limit:1;if(ke===1||ge===1)a.displayedToast++,f();else{const It=ge>ke?ke:ge;a.displayedToast=It;for(let fe=0;fe<It;fe++)f()}}else e()}};var b,L;x.iconOut=function(oe){let{theme:ke,type:ge,isLoading:It,icon:fe}=oe,Me=null;const C={theme:ke,type:ge};return fe===!1||(Ae(fe)?Me=fe(C):S.isValidElement(fe)?Me=S.cloneElement(fe,C):Wn(fe)||ui(fe)?Me=fe:It?Me=Ra.spinner():(O=>O in Ra)(ge)&&(Me=Ra[ge](C))),Me}(x),Ae(m.onOpen)&&(x.onOpen=m.onOpen),Ae(m.onClose)&&(x.onClose=m.onClose),x.closeButton=k.closeButton,m.closeButton===!1||Ca(m.closeButton)?x.closeButton=m.closeButton:m.closeButton===!0&&(x.closeButton=!Ca(k.closeButton)||k.closeButton);let ne=y;S.isValidElement(y)&&!Wn(y.type)?ne=S.cloneElement(y,{closeToast:R,toastProps:x,data:w}):Ae(y)&&(ne=y({closeToast:R,toastProps:x,data:w})),k.limit&&k.limit>0&&a.count>k.limit&&P?a.queue.push({toastContent:ne,toastProps:x,staleId:I}):ui(E)?setTimeout(()=>{g(ne,x,I)},E):g(ne,x,I)}function g(y,_,E){const{toastId:I}=_;E&&s.delete(E);const m={content:y,props:_};s.set(I,m),r(p=>[...p,I].filter(v=>v!==E)),He.emit(4,Bd(m,m.props.updateId==null?"added":"updated"))}return S.useEffect(()=>(a.containerId=t.containerId,He.cancelEmit(3).on(0,h).on(1,y=>i.current&&u(y)).on(5,l).emit(2,a),()=>{s.clear(),He.emit(3,a)}),[]),S.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(y){const _=new Map,E=Array.from(s.values());return t.newestOnTop&&E.reverse(),E.forEach(I=>{const{position:m}=I.props;_.has(m)||_.set(m,[]),_.get(m).push(I)}),Array.from(_,I=>y(I[0],I[1]))},containerRef:i,isToastActive:o}}function Hd(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function Gd(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function BI(t){const[e,n]=S.useState(!1),[r,i]=S.useState(!1),s=S.useRef(null),o=S.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=S.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:f,onClick:h,closeOnClick:g}=t;function y(w){if(t.draggable){w.nativeEvent.type==="touchstart"&&w.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",m),document.addEventListener("mouseup",p),document.addEventListener("touchmove",m),document.addEventListener("touchend",p);const k=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=k.getBoundingClientRect(),k.style.transition="",o.x=Hd(w.nativeEvent),o.y=Gd(w.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=k.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=k.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function _(w){if(o.boundingRect){const{top:k,bottom:R,left:P,right:x}=o.boundingRect;w.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=P&&o.x<=x&&o.y>=k&&o.y<=R?I():E()}}function E(){n(!0)}function I(){n(!1)}function m(w){const k=s.current;o.canDrag&&k&&(o.didMove=!0,e&&I(),o.x=Hd(w),o.y=Gd(w),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),k.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,k.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function p(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",p),document.removeEventListener("touchmove",m),document.removeEventListener("touchend",p);const w=s.current;if(o.canDrag&&o.didMove&&w){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();w.style.transition="transform 0.2s, opacity 0.2s",w.style.transform=`translate${t.draggableDirection}(0)`,w.style.opacity="1"}}S.useEffect(()=>{a.current=t}),S.useEffect(()=>(s.current&&s.current.addEventListener("d",E,{once:!0}),Ae(t.onOpen)&&t.onOpen(S.isValidElement(t.children)&&t.children.props),()=>{const w=a.current;Ae(w.onClose)&&w.onClose(S.isValidElement(w.children)&&w.children.props)}),[]),S.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||I(),window.addEventListener("focus",E),window.addEventListener("blur",I)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",I))}),[t.pauseOnFocusLoss]);const v={onMouseDown:y,onTouchStart:y,onMouseUp:_,onTouchEnd:_};return l&&u&&(v.onMouseEnter=I,v.onMouseLeave=E),g&&(v.onClick=w=>{h&&h(w),o.canCloseOnClick&&f()}),{playToast:E,pauseToast:I,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:v}}function km(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return $.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},$.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},$.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function HI(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:f,isIn:h,theme:g}=t;const y=s||l&&u===0,_={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:y?0:1};l&&(_.transform=`scaleX(${u})`);const E=Yt("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),I=Ae(o)?o({rtl:f,type:i,defaultClassName:E}):Yt(E,o);return $.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:I,style:_,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}})}const GI=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=BI(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:u,hideProgressBar:f,closeToast:h,transition:g,position:y,className:_,style:E,bodyClassName:I,bodyStyle:m,progressClassName:p,progressStyle:v,updateId:w,role:k,progress:R,rtl:P,toastId:x,deleteToast:b,isIn:L,isLoading:ne,iconOut:oe,closeOnClick:ke,theme:ge}=t,It=Yt("Toastify__toast",`Toastify__toast-theme--${ge}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":ke}),fe=Ae(_)?_({rtl:P,position:y,type:u,defaultClassName:It}):Yt(It,_),Me=!!R||!a,C={closeToast:h,type:u,theme:ge};let O=null;return s===!1||(O=Ae(s)?s(C):S.isValidElement(s)?S.cloneElement(s,C):km(C)),$.createElement(g,{isIn:L,done:b,position:y,preventExitTransition:n,nodeRef:r},$.createElement("div",{id:x,onClick:l,className:fe,...i,style:E,ref:r},$.createElement("div",{...L&&{role:k},className:Ae(I)?I({type:u}):Yt("Toastify__toast-body",I),style:m},oe!=null&&$.createElement("div",{className:Yt("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ne})},oe),$.createElement("div",null,o)),O,$.createElement(HI,{...w&&!Me?{key:`pb-${w}`}:{},rtl:P,theme:ge,delay:a,isRunning:e,isIn:L,closeToast:h,hide:f,type:u,style:v,className:p,controlledProgress:Me,progress:R||0})))},Go=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},KI=Ho(Go("bounce",!0));Ho(Go("slide",!0));Ho(Go("zoom"));Ho(Go("flip"));const Wl=S.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=VI(t),{className:s,style:o,rtl:a,containerId:l}=t;function u(f){const h=Yt("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return Ae(s)?s({position:f,rtl:a,defaultClassName:h}):Yt(h,js(s))}return S.useEffect(()=>{e&&(e.current=r.current)},[]),$.createElement("div",{ref:r,className:"Toastify",id:l},n((f,h)=>{const g=h.length?{...o}:{...o,pointerEvents:"none"};return $.createElement("div",{className:u(f),style:g,key:`container-${f}`},h.map((y,_)=>{let{content:E,props:I}=y;return $.createElement(GI,{...I,isIn:i(I.toastId),style:{...I.style,"--nth":_+1,"--len":h.length},key:`toast-${I.key}`},E)}))}))});Wl.displayName="ToastContainer",Wl.defaultProps={position:"top-right",transition:KI,autoClose:5e3,closeButton:km,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Pa,In=new Map,Xr=[],qI=1;function Sm(){return""+qI++}function QI(t){return t&&(Wn(t.toastId)||ui(t.toastId))?t.toastId:Sm()}function ci(t,e){return In.size>0?He.emit(0,t,e):Xr.push({content:t,options:e}),e.toastId}function mo(t,e){return{...e,type:e&&e.type||t,toastId:QI(e)}}function ms(t){return(e,n)=>ci(e,mo(t,n))}function B(t,e){return ci(t,mo("default",e))}B.loading=(t,e)=>ci(t,mo("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),B.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Wn(i)?B.loading(i,n):B.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(f,h,g)=>{if(h==null)return void B.dismiss(r);const y={type:f,...a,...n,data:g},_=Wn(h)?{render:h}:h;return r?B.update(r,{...y,..._}):B(_.render,{...y,..._}),g},u=Ae(t)?t():t;return u.then(f=>l("success",o,f)).catch(f=>l("error",s,f)),u},B.success=ms("success"),B.info=ms("info"),B.error=ms("error"),B.warning=ms("warning"),B.warn=B.warning,B.dark=(t,e)=>ci(t,mo("default",{theme:"dark",...e})),B.dismiss=t=>{In.size>0?He.emit(1,t):Xr=Xr.filter(e=>t!=null&&e.options.toastId!==t)},B.clearWaitingQueue=function(t){return t===void 0&&(t={}),He.emit(5,t)},B.isActive=t=>{let e=!1;return In.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},B.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=In.get(s||Pa);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:Sm()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,ci(o,s)}},0)},B.done=t=>{B.update(t,{progress:1})},B.onChange=t=>(He.on(4,t),()=>{He.off(4,t)}),B.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},B.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},He.on(2,t=>{Pa=t.containerId||t,In.set(Pa,t),Xr.forEach(e=>{He.emit(0,e.content,e.options)}),Xr=[]}).on(3,t=>{In.delete(t.containerId||t),In.size===0&&He.off(0).off(1).off(5)});const YI=()=>{const t=()=>{const e=new Dt.auth.GoogleAuthProvider;e.setCustomParameters({prompt:"select_account"}),Dt.auth().signInWithPopup(e).then(n=>{const r=n.user,i=r.displayName;$I(i),B.success("Successfully logged in!"),console.log("Logged in user:",r)}).catch(n=>{console.error("Error logging in:",n)})};return c.jsx(c.Fragment,{children:c.jsx("a",{className:d.logButton,onClick:t,children:"Sign In"})})},JI=()=>{const t=()=>{Dt.auth().signOut().then(()=>{console.log("User logged out successfully"),B.success("Successfully logged out!")}).catch(e=>{console.error("Error logging out:",e)})};return c.jsx(c.Fragment,{children:c.jsx("a",{className:d.logButton,onClick:t,children:"Sign Out"})})},XI="/FakeShop/assets/shopping-cart-free-15-svgrepo-com-c5675160.svg";function ZI(){const[t,e]=S.useState(null);S.useEffect(()=>{const r=Dt.auth().onAuthStateChanged(i=>{e(i)});return()=>r()},[]);const n=localStorage.getItem("username");return c.jsx("div",{children:t?c.jsxs("div",{className:d.fullBody,children:[c.jsxs("div",{className:d.navbar,children:[c.jsx(JI,{}),c.jsxs("p",{className:d.welcome,children:["Welcome, ",n]}),c.jsx("img",{className:d.cart,src:XI})]}),c.jsx("div",{className:d.header,children:c.jsx(ct,{className:d.headerText,to:"/fakeshop/",children:"Louis Betong"})}),c.jsxs("div",{className:d.routebar,children:[c.jsxs("div",{className:d.subroutebar1,children:[c.jsx("div",{className:d.routerposition,children:c.jsx("div",{className:d.subrouterposition,children:c.jsx(ct,{className:d.routerText,to:"/fakeshop/hats",children:"Hats"})})}),c.jsx("div",{className:d.routerposition,children:c.jsx("div",{className:d.subrouterposition,children:c.jsx(ct,{className:d.routerText,to:"/fakeshop/shirts",children:"Shirts"})})})]}),c.jsxs("div",{className:d.subroutebar2,children:[c.jsx("div",{className:d.routerposition,children:c.jsx("div",{className:d.subrouterposition,children:c.jsx(ct,{className:d.routerText,to:"/fakeshop/pants",children:"Pants"})})}),c.jsx("div",{className:d.routerposition,children:c.jsx("div",{className:d.subrouterposition,children:c.jsx(ct,{className:d.routerText,to:"/fakeshop/shoes",children:"Shoes"})})})]})]}),c.jsx(_d,{})]}):c.jsxs("div",{className:d.fullBody,children:[c.jsx("div",{className:d.navbar,children:c.jsx(YI,{})}),c.jsx("div",{className:d.header,children:c.jsx(ct,{className:d.headerText,to:"/fakeshop/",children:"Louis Betong"})}),c.jsxs("div",{className:d.routebar,children:[c.jsxs("div",{className:d.subroutebar1,children:[c.jsx("div",{className:d.routerposition,children:c.jsx("div",{className:d.subrouterposition,children:c.jsx(ct,{className:d.routerText,to:"/fakeshop/hats",children:"Hats"})})}),c.jsx("div",{className:d.routerposition,children:c.jsx("div",{className:d.subrouterposition,children:c.jsx(ct,{className:d.routerText,to:"/fakeshop/shirts",children:"Shirts"})})})]}),c.jsxs("div",{className:d.subroutebar2,children:[c.jsx("div",{className:d.routerposition,children:c.jsx("div",{className:d.subrouterposition,children:c.jsx(ct,{className:d.routerText,to:"/fakeshop/pants",children:"Pants"})})}),c.jsx("div",{className:d.routerposition,children:c.jsx("div",{className:d.subrouterposition,children:c.jsx(ct,{className:d.routerText,to:"/fakeshop/shoes",children:"Shoes"})})})]})]}),c.jsx(_d,{})]})})}const Tm="/FakeShop/assets/hat1-0af25622.webp",Nm="/FakeShop/assets/hat2-eed319f8.webp",xm="/FakeShop/assets/shoes1-6b27fdc8.webp",Cm="/FakeShop/assets/pants1-e4502d4c.webp",Rm="/FakeShop/assets/pants2-f8dc8419.webp",Pm="/FakeShop/assets/shirt1-423b5f62.webp",qe="/FakeShop/assets/sale-free-download-png-64c76cae393ac-5bbc2fd5.png";function ek(){return c.jsxs("div",{className:d.routedbody,children:[c.jsx("p",{className:d.shopText,children:"Welcome to Louis Betong online shop."}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:Tm,className:d.imgfixH}),c.jsx("img",{src:qe,className:d.sale}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsxs("p",{className:d.textAdd,children:[c.jsx("span",{className:d.textEdit,children:"1899$"})," - 1499$"]})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:Nm,className:d.imgfixH}),c.jsx("img",{src:qe,className:d.sale}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsxs("p",{className:d.textAdd,children:[c.jsx("span",{className:d.textEdit,children:"1599$"})," - 1399$"]})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:xm,className:d.imgfixH}),c.jsx("img",{src:qe,className:d.sale}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsxs("p",{className:d.textAdd,children:[c.jsx("span",{className:d.textEdit,children:"1399$"})," - 1299$"]})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:Cm,className:d.imgfixH}),c.jsx("img",{src:qe,className:d.sale}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsxs("p",{className:d.textAdd,children:[c.jsx("span",{className:d.textEdit,children:"11299$"})," - 11099$"]})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:Rm,className:d.imgfixW}),c.jsx("img",{src:qe,className:d.sale}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsxs("p",{className:d.textAdd,children:[c.jsx("span",{className:d.textEdit,children:"1999$"})," - 1699$"]})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:Pm,className:d.imgfixW}),c.jsx("img",{src:qe,className:d.sale}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsxs("p",{className:d.textAdd,children:[c.jsx("span",{className:d.textEdit,children:"1899$"})," - 1499$"]})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]})]})}const tk="/FakeShop/assets/hat3-075dd179.webp",nk="/FakeShop/assets/hat4-5cace6b5.webp",rk="/FakeShop/assets/hat5-0f13f99e.webp",ik="/FakeShop/assets/hat6-b6cf2642.webp";function sk(){return c.jsxs("div",{className:d.routedbody,children:[c.jsx("p",{className:d.shopText,children:"Welcome to Louis Betong online shop."}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:Tm,className:d.imgfixH}),c.jsx("img",{src:qe,className:d.sale}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsxs("p",{className:d.textAdd,children:[c.jsx("span",{className:d.textEdit,children:"1899$"})," - 1499$"]})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:Nm,className:d.imgfixH}),c.jsx("img",{src:qe,className:d.sale}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsxs("p",{className:d.textAdd,children:[c.jsx("span",{className:d.textEdit,children:"1599$"})," - 1399$"]})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:tk,className:d.imgfixH}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"11499$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:nk,className:d.imgfixH}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"1899$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:rk,className:d.imgfixW}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"1699$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:ik,className:d.imgfixW}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"11499$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]})]})}const ok="/FakeShop/assets/shirt2-7a27e6da.webp",ak="/FakeShop/assets/shirt3-c11b26ee.webp",lk="/FakeShop/assets/shirt4-22ab459f.webp",uk="/FakeShop/assets/shirt5-27116406.webp",ck="/FakeShop/assets/shirt6-3933e915.webp";function dk(){return c.jsxs("div",{className:d.routedbody,children:[c.jsx("p",{className:d.shopText,children:"Welcome to Louis Betong online shop."}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:Pm,className:d.imgfixW}),c.jsx("img",{src:qe,className:d.sale}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsxs("p",{className:d.textAdd,children:[c.jsx("span",{className:d.textEdit,children:"1899$"})," - 1499$"]})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:ok,className:d.imgfixW}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"1699$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:ak,className:d.imgfixH}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"1599$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:lk,className:d.imgfixW}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"1899$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:uk,className:d.imgfixH}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"1699$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:ck,className:d.imgfixH}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"1699$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]})]})}const fk="/FakeShop/assets/pants3-ec4117e7.webp",hk="/FakeShop/assets/pants4-8915aa55.webp",pk="/FakeShop/assets/pants5-5ed66903.webp",mk="/FakeShop/assets/pants6-a9b5028a.webp";function vk(){return c.jsxs("div",{className:d.routedbody,children:[c.jsx("p",{className:d.shopText,children:"Welcome to Louis Betong online shop."}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:Cm,className:d.imgfixH}),c.jsx("img",{src:qe,className:d.sale}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsxs("p",{className:d.textAdd,children:[c.jsx("span",{className:d.textEdit,children:"11299$"})," - 11099$"]})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:Rm,className:d.imgfixW}),c.jsx("img",{src:qe,className:d.sale}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsxs("p",{className:d.textAdd,children:[c.jsx("span",{className:d.textEdit,children:"1999$"})," - 1699$"]})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:fk,className:d.imgfixH}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"11499$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:hk,className:d.imgfixH}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"1899$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:pk,className:d.imgfixH}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"11699$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:mk,className:d.imgfixW}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"1699$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]})]})}const gk="/FakeShop/assets/shoes2-ee2f442b.webp",yk="/FakeShop/assets/shoes3-753d359b.webp",_k="/FakeShop/assets/shoes4-bedf26f1.webp",wk="/FakeShop/assets/shoes5-a3618bce.webp",Ek="/FakeShop/assets/shoes6-dec6b947.webp";function Ik(){return c.jsxs("div",{className:d.routedbody,children:[c.jsx("p",{className:d.shopText,children:"Welcome to Louis Betong online shop."}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:xm,className:d.imgfixH}),c.jsx("img",{src:qe,className:d.sale}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsxs("p",{className:d.textAdd,children:[c.jsx("span",{className:d.textEdit,children:"1399$"})," - 1299$"]})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:gk,className:d.imgfixW}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"11699$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:yk,className:d.imgfixH}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"2599$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:_k,className:d.imgfixH}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"1899$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]}),c.jsxs("div",{className:d.sales,children:[c.jsxs("div",{className:d.subSales,children:[c.jsx("img",{src:wk,className:d.imgfixH}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"1699$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]}),c.jsxs("div",{className:d.subSalesAlt,children:[c.jsx("img",{src:Ek,className:d.imgfixW}),c.jsxs("div",{className:d.purchasetab,children:[c.jsx("div",{className:d.price,children:c.jsx("p",{className:d.textAdd,children:"3699$"})}),c.jsx("div",{className:d.addToCart,children:c.jsx("p",{className:d.textAdd,children:"Add to cart"})})]})]})]})]})}function kk(){return c.jsxs(c.Fragment,{children:[c.jsx(t0,{children:c.jsx(Qy,{children:c.jsxs($t,{path:"/fakeshop",element:c.jsx(ZI,{}),children:[c.jsx($t,{index:!0,element:c.jsx(ek,{})}),c.jsx($t,{path:"hats",element:c.jsx(sk,{})}),c.jsx($t,{path:"shirts",element:c.jsx(dk,{})}),c.jsx($t,{path:"pants",element:c.jsx(vk,{})}),c.jsx($t,{path:"shoes",element:c.jsx(Ik,{})}),c.jsx($t,{path:"*",element:c.jsx("h1",{children:"404"})})]})})}),c.jsx(Wl,{position:"top-left"})]})}Aa.createRoot(document.getElementById("root")).render(c.jsx($.StrictMode,{children:c.jsx(kk,{})}));
