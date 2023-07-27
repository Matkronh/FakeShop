(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function $p(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yd={exports:{}},ns={},_d={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ci=Symbol.for("react.element"),Vp=Symbol.for("react.portal"),Wp=Symbol.for("react.fragment"),Bp=Symbol.for("react.strict_mode"),Hp=Symbol.for("react.profiler"),Gp=Symbol.for("react.provider"),Kp=Symbol.for("react.context"),qp=Symbol.for("react.forward_ref"),Qp=Symbol.for("react.suspense"),Yp=Symbol.for("react.memo"),Jp=Symbol.for("react.lazy"),Uu=Symbol.iterator;function Xp(t){return t===null||typeof t!="object"?null:(t=Uu&&t[Uu]||t["@@iterator"],typeof t=="function"?t:null)}var wd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Id=Object.assign,Ed={};function yr(t,e,n){this.props=t,this.context=e,this.refs=Ed,this.updater=n||wd}yr.prototype.isReactComponent={};yr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function kd(){}kd.prototype=yr.prototype;function El(t,e,n){this.props=t,this.context=e,this.refs=Ed,this.updater=n||wd}var kl=El.prototype=new kd;kl.constructor=El;Id(kl,yr.prototype);kl.isPureReactComponent=!0;var Fu=Array.isArray,Sd=Object.prototype.hasOwnProperty,Sl={current:null},Td={key:!0,ref:!0,__self:!0,__source:!0};function Cd(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Sd.call(e,r)&&!Td.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ci,type:t,key:o,ref:s,props:i,_owner:Sl.current}}function Zp(t,e){return{$$typeof:Ci,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ci}function em(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zu=/\/+/g;function Ls(t,e){return typeof t=="object"&&t!==null&&t.key!=null?em(""+t.key):e.toString(36)}function io(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ci:case Vp:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Ls(s,0):r,Fu(i)?(n="",t!=null&&(n=t.replace(zu,"$&/")+"/"),io(i,e,n,"",function(u){return u})):i!=null&&(Tl(i)&&(i=Zp(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(zu,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Fu(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Ls(o,a);s+=io(o,e,n,l,i)}else if(l=Xp(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Ls(o,a++),s+=io(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Fi(t,e,n){if(t==null)return t;var r=[],i=0;return io(t,r,"","",function(o){return e.call(n,o,i++)}),r}function tm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Te={current:null},oo={transition:null},nm={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:oo,ReactCurrentOwner:Sl};D.Children={map:Fi,forEach:function(t,e,n){Fi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fi(t,function(){e++}),e},toArray:function(t){return Fi(t,function(e){return e})||[]},only:function(t){if(!Tl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=yr;D.Fragment=Wp;D.Profiler=Hp;D.PureComponent=El;D.StrictMode=Bp;D.Suspense=Qp;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nm;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Id({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Sl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Sd.call(e,l)&&!Td.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ci,type:t.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(t){return t={$$typeof:Kp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Gp,_context:t},t.Consumer=t};D.createElement=Cd;D.createFactory=function(t){var e=Cd.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:qp,render:t}};D.isValidElement=Tl;D.lazy=function(t){return{$$typeof:Jp,_payload:{_status:-1,_result:t},_init:tm}};D.memo=function(t,e){return{$$typeof:Yp,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=oo.transition;oo.transition={};try{t()}finally{oo.transition=e}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(t,e){return Te.current.useCallback(t,e)};D.useContext=function(t){return Te.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return Te.current.useDeferredValue(t)};D.useEffect=function(t,e){return Te.current.useEffect(t,e)};D.useId=function(){return Te.current.useId()};D.useImperativeHandle=function(t,e,n){return Te.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return Te.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return Te.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return Te.current.useMemo(t,e)};D.useReducer=function(t,e,n){return Te.current.useReducer(t,e,n)};D.useRef=function(t){return Te.current.useRef(t)};D.useState=function(t){return Te.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return Te.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return Te.current.useTransition()};D.version="18.2.0";_d.exports=D;var x=_d.exports;const j=$p(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm=x,im=Symbol.for("react.element"),om=Symbol.for("react.fragment"),sm=Object.prototype.hasOwnProperty,am=rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lm={key:!0,ref:!0,__self:!0,__source:!0};function Rd(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)sm.call(e,r)&&!lm.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:im,type:t,key:o,ref:s,props:i,_owner:am.current}}ns.Fragment=om;ns.jsx=Rd;ns.jsxs=Rd;yd.exports=ns;var A=yd.exports,pa={},Nd={exports:{}},Ve={},Pd={exports:{}},Od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,P){var L=T.length;T.push(P);e:for(;0<L;){var J=L-1>>>1,se=T[J];if(0<i(se,P))T[J]=P,T[L]=se,L=J;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var P=T[0],L=T.pop();if(L!==P){T[0]=L;e:for(var J=0,se=T.length,Mi=se>>>1;J<Mi;){var un=2*(J+1)-1,As=T[un],cn=un+1,Ui=T[cn];if(0>i(As,L))cn<se&&0>i(Ui,As)?(T[J]=Ui,T[cn]=L,J=cn):(T[J]=As,T[un]=L,J=un);else if(cn<se&&0>i(Ui,L))T[J]=Ui,T[cn]=L,J=cn;else break e}}return P}function i(T,P){var L=T.sortIndex-P.sortIndex;return L!==0?L:T.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],h=1,d=null,m=3,g=!1,y=!1,_=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=T)r(u),P.sortIndex=P.expirationTime,e(l,P);else break;P=n(u)}}function v(T){if(_=!1,p(T),!y)if(n(l)!==null)y=!0,de(I);else{var P=n(u);P!==null&&Me(v,P.startTime-T)}}function I(T,P){y=!1,_&&(_=!1,f(S),S=-1),g=!0;var L=m;try{for(p(P),d=n(l);d!==null&&(!(d.expirationTime>P)||T&&!te());){var J=d.callback;if(typeof J=="function"){d.callback=null,m=d.priorityLevel;var se=J(d.expirationTime<=P);P=t.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&r(l),p(P)}else r(l);d=n(l)}if(d!==null)var Mi=!0;else{var un=n(u);un!==null&&Me(v,un.startTime-P),Mi=!1}return Mi}finally{d=null,m=L,g=!1}}var C=!1,R=null,S=-1,U=5,O=-1;function te(){return!(t.unstable_now()-O<U)}function oe(){if(R!==null){var T=t.unstable_now();O=T;var P=!0;try{P=R(!0,T)}finally{P?Ee():(C=!1,R=null)}}else C=!1}var Ee;if(typeof c=="function")Ee=function(){c(oe)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,_t=ge.port2;ge.port1.onmessage=oe,Ee=function(){_t.postMessage(null)}}else Ee=function(){k(oe,0)};function de(T){R=T,C||(C=!0,Ee())}function Me(T,P){S=k(function(){T(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,de(I))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(T){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var L=m;m=P;try{return T()}finally{m=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,P){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=m;m=T;try{return P()}finally{m=L}},t.unstable_scheduleCallback=function(T,P,L){var J=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,T){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=L+se,T={id:h++,callback:P,priorityLevel:T,startTime:L,expirationTime:se,sortIndex:-1},L>J?(T.sortIndex=L,e(u,T),n(l)===null&&T===n(u)&&(_?(f(S),S=-1):_=!0,Me(v,L-J))):(T.sortIndex=se,e(l,T),y||g||(y=!0,de(I))),T},t.unstable_shouldYield=te,t.unstable_wrapCallback=function(T){var P=m;return function(){var L=m;m=P;try{return T.apply(this,arguments)}finally{m=L}}}})(Od);Pd.exports=Od;var um=Pd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad=x,$e=um;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ld=new Set,ni={};function Un(t,e){ur(t,e),ur(t+"Capture",e)}function ur(t,e){for(ni[t]=e,t=0;t<e.length;t++)Ld.add(e[t])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ma=Object.prototype.hasOwnProperty,cm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bu={},ju={};function dm(t){return ma.call(ju,t)?!0:ma.call(bu,t)?!1:cm.test(t)?ju[t]=!0:(bu[t]=!0,!1)}function fm(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hm(t,e,n,r){if(e===null||typeof e>"u"||fm(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ce(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){me[t]=new Ce(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];me[e]=new Ce(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){me[t]=new Ce(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){me[t]=new Ce(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){me[t]=new Ce(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){me[t]=new Ce(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){me[t]=new Ce(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){me[t]=new Ce(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){me[t]=new Ce(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cl=/[\-:]([a-z])/g;function Rl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cl,Rl);me[e]=new Ce(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cl,Rl);me[e]=new Ce(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cl,Rl);me[e]=new Ce(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){me[t]=new Ce(t,1,!1,t.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){me[t]=new Ce(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nl(t,e,n,r){var i=me.hasOwnProperty(e)?me[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hm(e,n,i,r)&&(n=null),r||i===null?dm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dt=Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zi=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),Pl=Symbol.for("react.strict_mode"),ga=Symbol.for("react.profiler"),xd=Symbol.for("react.provider"),Dd=Symbol.for("react.context"),Ol=Symbol.for("react.forward_ref"),va=Symbol.for("react.suspense"),ya=Symbol.for("react.suspense_list"),Al=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),Md=Symbol.for("react.offscreen"),$u=Symbol.iterator;function Rr(t){return t===null||typeof t!="object"?null:(t=$u&&t[$u]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Object.assign,xs;function zr(t){if(xs===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xs=e&&e[1]||""}return`
`+xs+t}var Ds=!1;function Ms(t,e){if(!t||Ds)return"";Ds=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ds=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zr(t):""}function pm(t){switch(t.tag){case 5:return zr(t.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return t=Ms(t.type,!1),t;case 11:return t=Ms(t.type.render,!1),t;case 1:return t=Ms(t.type,!0),t;default:return""}}function _a(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vn:return"Fragment";case $n:return"Portal";case ga:return"Profiler";case Pl:return"StrictMode";case va:return"Suspense";case ya:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dd:return(t.displayName||"Context")+".Consumer";case xd:return(t._context.displayName||"Context")+".Provider";case Ol:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Al:return e=t.displayName||null,e!==null?e:_a(t.type)||"Memo";case zt:e=t._payload,t=t._init;try{return _a(t(e))}catch{}}return null}function mm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _a(e);case 8:return e===Pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function en(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ud(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gm(t){var e=Ud(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bi(t){t._valueTracker||(t._valueTracker=gm(t))}function Fd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ud(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function So(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wa(t,e){var n=e.checked;return Q({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vu(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=en(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zd(t,e){e=e.checked,e!=null&&Nl(t,"checked",e,!1)}function Ia(t,e){zd(t,e);var n=en(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ea(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ea(t,e.type,en(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wu(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ea(t,e,n){(e!=="number"||So(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var br=Array.isArray;function er(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+en(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ka(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return Q({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bu(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(br(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:en(n)}}function bd(t,e){var n=en(e.value),r=en(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ji,$d=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ji=ji||document.createElement("div"),ji.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ji.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ri(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vm=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(t){vm.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Br[e]=Br[t]})});function Vd(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Br.hasOwnProperty(t)&&Br[t]?(""+e).trim():e+"px"}function Wd(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vd(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ym=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ta(t,e){if(e){if(ym[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Ca(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ra=null;function Ll(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Na=null,tr=null,nr=null;function Gu(t){if(t=Pi(t)){if(typeof Na!="function")throw Error(E(280));var e=t.stateNode;e&&(e=as(e),Na(t.stateNode,t.type,e))}}function Bd(t){tr?nr?nr.push(t):nr=[t]:tr=t}function Hd(){if(tr){var t=tr,e=nr;if(nr=tr=null,Gu(t),e)for(t=0;t<e.length;t++)Gu(e[t])}}function Gd(t,e){return t(e)}function Kd(){}var Us=!1;function qd(t,e,n){if(Us)return t(e,n);Us=!0;try{return Gd(t,e,n)}finally{Us=!1,(tr!==null||nr!==null)&&(Kd(),Hd())}}function ii(t,e){var n=t.stateNode;if(n===null)return null;var r=as(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Pa=!1;if(Nt)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){Pa=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Pa=!1}function _m(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Hr=!1,To=null,Co=!1,Oa=null,wm={onError:function(t){Hr=!0,To=t}};function Im(t,e,n,r,i,o,s,a,l){Hr=!1,To=null,_m.apply(wm,arguments)}function Em(t,e,n,r,i,o,s,a,l){if(Im.apply(this,arguments),Hr){if(Hr){var u=To;Hr=!1,To=null}else throw Error(E(198));Co||(Co=!0,Oa=u)}}function Fn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qd(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ku(t){if(Fn(t)!==t)throw Error(E(188))}function km(t){var e=t.alternate;if(!e){if(e=Fn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ku(i),t;if(o===r)return Ku(i),e;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Yd(t){return t=km(t),t!==null?Jd(t):null}function Jd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jd(t);if(e!==null)return e;t=t.sibling}return null}var Xd=$e.unstable_scheduleCallback,qu=$e.unstable_cancelCallback,Sm=$e.unstable_shouldYield,Tm=$e.unstable_requestPaint,X=$e.unstable_now,Cm=$e.unstable_getCurrentPriorityLevel,xl=$e.unstable_ImmediatePriority,Zd=$e.unstable_UserBlockingPriority,Ro=$e.unstable_NormalPriority,Rm=$e.unstable_LowPriority,ef=$e.unstable_IdlePriority,rs=null,mt=null;function Nm(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(rs,t,void 0,(t.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:Am,Pm=Math.log,Om=Math.LN2;function Am(t){return t>>>=0,t===0?32:31-(Pm(t)/Om|0)|0}var $i=64,Vi=4194304;function jr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function No(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=jr(a):(o&=s,o!==0&&(r=jr(o)))}else s=n&~i,s!==0?r=jr(s):o!==0&&(r=jr(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rt(e),i=1<<n,r|=t[n],e&=~i;return r}function Lm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xm(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-rt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Lm(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Aa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tf(){var t=$i;return $i<<=1,!($i&4194240)&&($i=64),t}function Fs(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ri(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rt(e),t[e]=n}function Dm(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rt(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Dl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var z=0;function nf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rf,Ml,of,sf,af,La=!1,Wi=[],Gt=null,Kt=null,qt=null,oi=new Map,si=new Map,jt=[],Mm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qu(t,e){switch(t){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":oi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(e.pointerId)}}function Pr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Pi(e),e!==null&&Ml(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Um(t,e,n,r,i){switch(e){case"focusin":return Gt=Pr(Gt,t,e,n,r,i),!0;case"dragenter":return Kt=Pr(Kt,t,e,n,r,i),!0;case"mouseover":return qt=Pr(qt,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return oi.set(o,Pr(oi.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,si.set(o,Pr(si.get(o)||null,t,e,n,r,i)),!0}return!1}function lf(t){var e=gn(t.target);if(e!==null){var n=Fn(e);if(n!==null){if(e=n.tag,e===13){if(e=Qd(n),e!==null){t.blockedOn=e,af(t.priority,function(){of(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function so(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ra=r,n.target.dispatchEvent(r),Ra=null}else return e=Pi(n),e!==null&&Ml(e),t.blockedOn=n,!1;e.shift()}return!0}function Yu(t,e,n){so(t)&&n.delete(e)}function Fm(){La=!1,Gt!==null&&so(Gt)&&(Gt=null),Kt!==null&&so(Kt)&&(Kt=null),qt!==null&&so(qt)&&(qt=null),oi.forEach(Yu),si.forEach(Yu)}function Or(t,e){t.blockedOn===e&&(t.blockedOn=null,La||(La=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,Fm)))}function ai(t){function e(i){return Or(i,t)}if(0<Wi.length){Or(Wi[0],t);for(var n=1;n<Wi.length;n++){var r=Wi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gt!==null&&Or(Gt,t),Kt!==null&&Or(Kt,t),qt!==null&&Or(qt,t),oi.forEach(e),si.forEach(e),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)lf(n),n.blockedOn===null&&jt.shift()}var rr=Dt.ReactCurrentBatchConfig,Po=!0;function zm(t,e,n,r){var i=z,o=rr.transition;rr.transition=null;try{z=1,Ul(t,e,n,r)}finally{z=i,rr.transition=o}}function bm(t,e,n,r){var i=z,o=rr.transition;rr.transition=null;try{z=4,Ul(t,e,n,r)}finally{z=i,rr.transition=o}}function Ul(t,e,n,r){if(Po){var i=xa(t,e,n,r);if(i===null)Ks(t,e,r,Oo,n),Qu(t,r);else if(Um(i,t,e,n,r))r.stopPropagation();else if(Qu(t,r),e&4&&-1<Mm.indexOf(t)){for(;i!==null;){var o=Pi(i);if(o!==null&&rf(o),o=xa(t,e,n,r),o===null&&Ks(t,e,r,Oo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ks(t,e,r,null,n)}}var Oo=null;function xa(t,e,n,r){if(Oo=null,t=Ll(r),t=gn(t),t!==null)if(e=Fn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qd(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Oo=t,null}function uf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cm()){case xl:return 1;case Zd:return 4;case Ro:case Rm:return 16;case ef:return 536870912;default:return 16}default:return 16}}var Vt=null,Fl=null,ao=null;function cf(){if(ao)return ao;var t,e=Fl,n=e.length,r,i="value"in Vt?Vt.value:Vt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return ao=i.slice(t,1<r?1-r:void 0)}function lo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bi(){return!0}function Ju(){return!1}function We(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Bi:Ju,this.isPropagationStopped=Ju,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),e}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=We(_r),Ni=Q({},_r,{view:0,detail:0}),jm=We(Ni),zs,bs,Ar,is=Q({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ar&&(Ar&&t.type==="mousemove"?(zs=t.screenX-Ar.screenX,bs=t.screenY-Ar.screenY):bs=zs=0,Ar=t),zs)},movementY:function(t){return"movementY"in t?t.movementY:bs}}),Xu=We(is),$m=Q({},is,{dataTransfer:0}),Vm=We($m),Wm=Q({},Ni,{relatedTarget:0}),js=We(Wm),Bm=Q({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),Hm=We(Bm),Gm=Q({},_r,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Km=We(Gm),qm=Q({},_r,{data:0}),Zu=We(qm),Qm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ym={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jm[t])?!!e[t]:!1}function bl(){return Xm}var Zm=Q({},Ni,{key:function(t){if(t.key){var e=Qm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ym[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bl,charCode:function(t){return t.type==="keypress"?lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eg=We(Zm),tg=Q({},is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ec=We(tg),ng=Q({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bl}),rg=We(ng),ig=Q({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),og=We(ig),sg=Q({},is,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ag=We(sg),lg=[9,13,27,32],jl=Nt&&"CompositionEvent"in window,Gr=null;Nt&&"documentMode"in document&&(Gr=document.documentMode);var ug=Nt&&"TextEvent"in window&&!Gr,df=Nt&&(!jl||Gr&&8<Gr&&11>=Gr),tc=String.fromCharCode(32),nc=!1;function ff(t,e){switch(t){case"keyup":return lg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wn=!1;function cg(t,e){switch(t){case"compositionend":return hf(e);case"keypress":return e.which!==32?null:(nc=!0,tc);case"textInput":return t=e.data,t===tc&&nc?null:t;default:return null}}function dg(t,e){if(Wn)return t==="compositionend"||!jl&&ff(t,e)?(t=cf(),ao=Fl=Vt=null,Wn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return df&&e.locale!=="ko"?null:e.data;default:return null}}var fg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fg[t.type]:e==="textarea"}function pf(t,e,n,r){Bd(r),e=Ao(e,"onChange"),0<e.length&&(n=new zl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Kr=null,li=null;function hg(t){Tf(t,0)}function os(t){var e=Gn(t);if(Fd(e))return t}function pg(t,e){if(t==="change")return e}var mf=!1;if(Nt){var $s;if(Nt){var Vs="oninput"in document;if(!Vs){var ic=document.createElement("div");ic.setAttribute("oninput","return;"),Vs=typeof ic.oninput=="function"}$s=Vs}else $s=!1;mf=$s&&(!document.documentMode||9<document.documentMode)}function oc(){Kr&&(Kr.detachEvent("onpropertychange",gf),li=Kr=null)}function gf(t){if(t.propertyName==="value"&&os(li)){var e=[];pf(e,li,t,Ll(t)),qd(hg,e)}}function mg(t,e,n){t==="focusin"?(oc(),Kr=e,li=n,Kr.attachEvent("onpropertychange",gf)):t==="focusout"&&oc()}function gg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return os(li)}function vg(t,e){if(t==="click")return os(e)}function yg(t,e){if(t==="input"||t==="change")return os(e)}function _g(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ot=typeof Object.is=="function"?Object.is:_g;function ui(t,e){if(ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ma.call(e,i)||!ot(t[i],e[i]))return!1}return!0}function sc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ac(t,e){var n=sc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sc(n)}}function vf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yf(){for(var t=window,e=So();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=So(t.document)}return e}function $l(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wg(t){var e=yf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vf(n.ownerDocument.documentElement,n)){if(r!==null&&$l(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=ac(n,o);var s=ac(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ig=Nt&&"documentMode"in document&&11>=document.documentMode,Bn=null,Da=null,qr=null,Ma=!1;function lc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ma||Bn==null||Bn!==So(r)||(r=Bn,"selectionStart"in r&&$l(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&ui(qr,r)||(qr=r,r=Ao(Da,"onSelect"),0<r.length&&(e=new zl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Bn)))}function Hi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hn={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},Ws={},_f={};Nt&&(_f=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function ss(t){if(Ws[t])return Ws[t];if(!Hn[t])return t;var e=Hn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _f)return Ws[t]=e[n];return t}var wf=ss("animationend"),If=ss("animationiteration"),Ef=ss("animationstart"),kf=ss("transitionend"),Sf=new Map,uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(t,e){Sf.set(t,e),Un(e,[t])}for(var Bs=0;Bs<uc.length;Bs++){var Hs=uc[Bs],Eg=Hs.toLowerCase(),kg=Hs[0].toUpperCase()+Hs.slice(1);rn(Eg,"on"+kg)}rn(wf,"onAnimationEnd");rn(If,"onAnimationIteration");rn(Ef,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(kf,"onTransitionEnd");ur("onMouseEnter",["mouseout","mouseover"]);ur("onMouseLeave",["mouseout","mouseover"]);ur("onPointerEnter",["pointerout","pointerover"]);ur("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sg=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function cc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Em(r,e,void 0,t),t.currentTarget=null}function Tf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;cc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;cc(i,a,u),o=l}}}if(Co)throw t=Oa,Co=!1,Oa=null,t}function V(t,e){var n=e[ja];n===void 0&&(n=e[ja]=new Set);var r=t+"__bubble";n.has(r)||(Cf(e,t,2,!1),n.add(r))}function Gs(t,e,n){var r=0;e&&(r|=4),Cf(n,t,r,e)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function ci(t){if(!t[Gi]){t[Gi]=!0,Ld.forEach(function(n){n!=="selectionchange"&&(Sg.has(n)||Gs(n,!1,t),Gs(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gi]||(e[Gi]=!0,Gs("selectionchange",!1,e))}}function Cf(t,e,n,r){switch(uf(e)){case 1:var i=zm;break;case 4:i=bm;break;default:i=Ul}n=i.bind(null,e,n,t),i=void 0,!Pa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ks(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=gn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}qd(function(){var u=o,h=Ll(n),d=[];e:{var m=Sf.get(t);if(m!==void 0){var g=zl,y=t;switch(t){case"keypress":if(lo(n)===0)break e;case"keydown":case"keyup":g=eg;break;case"focusin":y="focus",g=js;break;case"focusout":y="blur",g=js;break;case"beforeblur":case"afterblur":g=js;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=rg;break;case wf:case If:case Ef:g=Hm;break;case kf:g=og;break;case"scroll":g=jm;break;case"wheel":g=ag;break;case"copy":case"cut":case"paste":g=Km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ec}var _=(e&4)!==0,k=!_&&t==="scroll",f=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=ii(c,f),v!=null&&_.push(di(c,v,p)))),k)break;c=c.return}0<_.length&&(m=new g(m,y,null,n,h),d.push({event:m,listeners:_}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==Ra&&(y=n.relatedTarget||n.fromElement)&&(gn(y)||y[Pt]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?gn(y):null,y!==null&&(k=Fn(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(_=Xu,v="onMouseLeave",f="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(_=ec,v="onPointerLeave",f="onPointerEnter",c="pointer"),k=g==null?m:Gn(g),p=y==null?m:Gn(y),m=new _(v,c+"leave",g,n,h),m.target=k,m.relatedTarget=p,v=null,gn(h)===u&&(_=new _(f,c+"enter",y,n,h),_.target=p,_.relatedTarget=k,v=_),k=v,g&&y)t:{for(_=g,f=y,c=0,p=_;p;p=bn(p))c++;for(p=0,v=f;v;v=bn(v))p++;for(;0<c-p;)_=bn(_),c--;for(;0<p-c;)f=bn(f),p--;for(;c--;){if(_===f||f!==null&&_===f.alternate)break t;_=bn(_),f=bn(f)}_=null}else _=null;g!==null&&dc(d,m,g,_,!1),y!==null&&k!==null&&dc(d,k,y,_,!0)}}e:{if(m=u?Gn(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var I=pg;else if(rc(m))if(mf)I=yg;else{I=gg;var C=mg}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(I=vg);if(I&&(I=I(t,u))){pf(d,I,n,h);break e}C&&C(t,m,u),t==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Ea(m,"number",m.value)}switch(C=u?Gn(u):window,t){case"focusin":(rc(C)||C.contentEditable==="true")&&(Bn=C,Da=u,qr=null);break;case"focusout":qr=Da=Bn=null;break;case"mousedown":Ma=!0;break;case"contextmenu":case"mouseup":case"dragend":Ma=!1,lc(d,n,h);break;case"selectionchange":if(Ig)break;case"keydown":case"keyup":lc(d,n,h)}var R;if(jl)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Wn?ff(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(df&&n.locale!=="ko"&&(Wn||S!=="onCompositionStart"?S==="onCompositionEnd"&&Wn&&(R=cf()):(Vt=h,Fl="value"in Vt?Vt.value:Vt.textContent,Wn=!0)),C=Ao(u,S),0<C.length&&(S=new Zu(S,t,null,n,h),d.push({event:S,listeners:C}),R?S.data=R:(R=hf(n),R!==null&&(S.data=R)))),(R=ug?cg(t,n):dg(t,n))&&(u=Ao(u,"onBeforeInput"),0<u.length&&(h=new Zu("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=R))}Tf(d,e)})}function di(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ao(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ii(t,n),o!=null&&r.unshift(di(t,o,i)),o=ii(t,e),o!=null&&r.push(di(t,o,i))),t=t.return}return r}function bn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dc(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ii(n,o),l!=null&&s.unshift(di(n,l,a))):i||(l=ii(n,o),l!=null&&s.push(di(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Tg=/\r\n?/g,Cg=/\u0000|\uFFFD/g;function fc(t){return(typeof t=="string"?t:""+t).replace(Tg,`
`).replace(Cg,"")}function Ki(t,e,n){if(e=fc(e),fc(t)!==e&&n)throw Error(E(425))}function Lo(){}var Ua=null,Fa=null;function za(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ba=typeof setTimeout=="function"?setTimeout:void 0,Rg=typeof clearTimeout=="function"?clearTimeout:void 0,hc=typeof Promise=="function"?Promise:void 0,Ng=typeof queueMicrotask=="function"?queueMicrotask:typeof hc<"u"?function(t){return hc.resolve(null).then(t).catch(Pg)}:ba;function Pg(t){setTimeout(function(){throw t})}function qs(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ai(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ai(e)}function Qt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wr=Math.random().toString(36).slice(2),ut="__reactFiber$"+wr,fi="__reactProps$"+wr,Pt="__reactContainer$"+wr,ja="__reactEvents$"+wr,Og="__reactListeners$"+wr,Ag="__reactHandles$"+wr;function gn(t){var e=t[ut];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pt]||n[ut]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pc(t);t!==null;){if(n=t[ut])return n;t=pc(t)}return e}t=n,n=t.parentNode}return null}function Pi(t){return t=t[ut]||t[Pt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function as(t){return t[fi]||null}var $a=[],Kn=-1;function on(t){return{current:t}}function H(t){0>Kn||(t.current=$a[Kn],$a[Kn]=null,Kn--)}function $(t,e){Kn++,$a[Kn]=t.current,t.current=e}var tn={},we=on(tn),Ae=on(!1),Tn=tn;function cr(t,e){var n=t.type.contextTypes;if(!n)return tn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Le(t){return t=t.childContextTypes,t!=null}function xo(){H(Ae),H(we)}function mc(t,e,n){if(we.current!==tn)throw Error(E(168));$(we,e),$(Ae,n)}function Rf(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,mm(t)||"Unknown",i));return Q({},n,r)}function Do(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tn,Tn=we.current,$(we,t),$(Ae,Ae.current),!0}function gc(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Rf(t,e,Tn),r.__reactInternalMemoizedMergedChildContext=t,H(Ae),H(we),$(we,t)):H(Ae),$(Ae,n)}var It=null,ls=!1,Qs=!1;function Nf(t){It===null?It=[t]:It.push(t)}function Lg(t){ls=!0,Nf(t)}function sn(){if(!Qs&&It!==null){Qs=!0;var t=0,e=z;try{var n=It;for(z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}It=null,ls=!1}catch(i){throw It!==null&&(It=It.slice(t+1)),Xd(xl,sn),i}finally{z=e,Qs=!1}}return null}var qn=[],Qn=0,Mo=null,Uo=0,He=[],Ge=0,Cn=null,Et=1,kt="";function fn(t,e){qn[Qn++]=Uo,qn[Qn++]=Mo,Mo=t,Uo=e}function Pf(t,e,n){He[Ge++]=Et,He[Ge++]=kt,He[Ge++]=Cn,Cn=t;var r=Et;t=kt;var i=32-rt(r)-1;r&=~(1<<i),n+=1;var o=32-rt(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Et=1<<32-rt(e)+i|n<<i|r,kt=o+t}else Et=1<<o|n<<i|r,kt=t}function Vl(t){t.return!==null&&(fn(t,1),Pf(t,1,0))}function Wl(t){for(;t===Mo;)Mo=qn[--Qn],qn[Qn]=null,Uo=qn[--Qn],qn[Qn]=null;for(;t===Cn;)Cn=He[--Ge],He[Ge]=null,kt=He[--Ge],He[Ge]=null,Et=He[--Ge],He[Ge]=null}var je=null,ze=null,G=!1,nt=null;function Of(t,e){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,je=t,ze=Qt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,je=t,ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cn!==null?{id:Et,overflow:kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,je=t,ze=null,!0):!1;default:return!1}}function Va(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wa(t){if(G){var e=ze;if(e){var n=e;if(!vc(t,e)){if(Va(t))throw Error(E(418));e=Qt(n.nextSibling);var r=je;e&&vc(t,e)?Of(r,n):(t.flags=t.flags&-4097|2,G=!1,je=t)}}else{if(Va(t))throw Error(E(418));t.flags=t.flags&-4097|2,G=!1,je=t}}}function yc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;je=t}function qi(t){if(t!==je)return!1;if(!G)return yc(t),G=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!za(t.type,t.memoizedProps)),e&&(e=ze)){if(Va(t))throw Af(),Error(E(418));for(;e;)Of(t,e),e=Qt(e.nextSibling)}if(yc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ze=Qt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ze=null}}else ze=je?Qt(t.stateNode.nextSibling):null;return!0}function Af(){for(var t=ze;t;)t=Qt(t.nextSibling)}function dr(){ze=je=null,G=!1}function Bl(t){nt===null?nt=[t]:nt.push(t)}var xg=Dt.ReactCurrentBatchConfig;function et(t,e){if(t&&t.defaultProps){e=Q({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Fo=on(null),zo=null,Yn=null,Hl=null;function Gl(){Hl=Yn=zo=null}function Kl(t){var e=Fo.current;H(Fo),t._currentValue=e}function Ba(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ir(t,e){zo=t,Hl=Yn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pe=!0),t.firstContext=null)}function Qe(t){var e=t._currentValue;if(Hl!==t)if(t={context:t,memoizedValue:e,next:null},Yn===null){if(zo===null)throw Error(E(308));Yn=t,zo.dependencies={lanes:0,firstContext:t}}else Yn=Yn.next=t;return e}var vn=null;function ql(t){vn===null?vn=[t]:vn.push(t)}function Lf(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ql(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ot(t,r)}function Ot(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bt=!1;function Ql(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ct(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ot(t,n)}return i=r.interleaved,i===null?(e.next=e,ql(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ot(t,n)}function uo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dl(t,n)}}function _c(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bo(t,e,n,r){var i=t.updateQueue;bt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,h=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(m=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(g,d,m);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,m=typeof y=="function"?y.call(g,d,m):y,m==null)break e;d=Q({},d,m);break e;case 2:bt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=g,l=d):h=h.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Nn|=s,t.lanes=s,t.memoizedState=d}}function wc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Df=new Ad.Component().refs;function Ha(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var us={isMounted:function(t){return(t=t._reactInternals)?Fn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Se(),i=Xt(t),o=Ct(r,i);o.payload=e,n!=null&&(o.callback=n),e=Yt(t,o,i),e!==null&&(it(e,t,i,r),uo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Se(),i=Xt(t),o=Ct(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Yt(t,o,i),e!==null&&(it(e,t,i,r),uo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Se(),r=Xt(t),i=Ct(n,r);i.tag=2,e!=null&&(i.callback=e),e=Yt(t,i,r),e!==null&&(it(e,t,r,n),uo(e,t,r))}};function Ic(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!ui(n,r)||!ui(i,o):!0}function Mf(t,e,n){var r=!1,i=tn,o=e.contextType;return typeof o=="object"&&o!==null?o=Qe(o):(i=Le(e)?Tn:we.current,r=e.contextTypes,o=(r=r!=null)?cr(t,i):tn),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=us,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Ec(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&us.enqueueReplaceState(e,e.state,null)}function Ga(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Df,Ql(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Qe(o):(o=Le(e)?Tn:we.current,i.context=cr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Ha(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&us.enqueueReplaceState(i,i.state,null),bo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Lr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===Df&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Qi(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kc(t){var e=t._init;return e(t._payload)}function Uf(t){function e(f,c){if(t){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Zt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,t?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,v){return c===null||c.tag!==6?(c=na(p,f.mode,v),c.return=f,c):(c=i(c,p),c.return=f,c)}function l(f,c,p,v){var I=p.type;return I===Vn?h(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===zt&&kc(I)===c.type)?(v=i(c,p.props),v.ref=Lr(f,c,p),v.return=f,v):(v=go(p.type,p.key,p.props,null,f.mode,v),v.ref=Lr(f,c,p),v.return=f,v)}function u(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ra(p,f.mode,v),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function h(f,c,p,v,I){return c===null||c.tag!==7?(c=In(p,f.mode,v,I),c.return=f,c):(c=i(c,p),c.return=f,c)}function d(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=na(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case zi:return p=go(c.type,c.key,c.props,null,f.mode,p),p.ref=Lr(f,null,c),p.return=f,p;case $n:return c=ra(c,f.mode,p),c.return=f,c;case zt:var v=c._init;return d(f,v(c._payload),p)}if(br(c)||Rr(c))return c=In(c,f.mode,p,null),c.return=f,c;Qi(f,c)}return null}function m(f,c,p,v){var I=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return I!==null?null:a(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case zi:return p.key===I?l(f,c,p,v):null;case $n:return p.key===I?u(f,c,p,v):null;case zt:return I=p._init,m(f,c,I(p._payload),v)}if(br(p)||Rr(p))return I!==null?null:h(f,c,p,v,null);Qi(f,p)}return null}function g(f,c,p,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(c,f,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zi:return f=f.get(v.key===null?p:v.key)||null,l(c,f,v,I);case $n:return f=f.get(v.key===null?p:v.key)||null,u(c,f,v,I);case zt:var C=v._init;return g(f,c,p,C(v._payload),I)}if(br(v)||Rr(v))return f=f.get(p)||null,h(c,f,v,I,null);Qi(c,v)}return null}function y(f,c,p,v){for(var I=null,C=null,R=c,S=c=0,U=null;R!==null&&S<p.length;S++){R.index>S?(U=R,R=null):U=R.sibling;var O=m(f,R,p[S],v);if(O===null){R===null&&(R=U);break}t&&R&&O.alternate===null&&e(f,R),c=o(O,c,S),C===null?I=O:C.sibling=O,C=O,R=U}if(S===p.length)return n(f,R),G&&fn(f,S),I;if(R===null){for(;S<p.length;S++)R=d(f,p[S],v),R!==null&&(c=o(R,c,S),C===null?I=R:C.sibling=R,C=R);return G&&fn(f,S),I}for(R=r(f,R);S<p.length;S++)U=g(R,f,S,p[S],v),U!==null&&(t&&U.alternate!==null&&R.delete(U.key===null?S:U.key),c=o(U,c,S),C===null?I=U:C.sibling=U,C=U);return t&&R.forEach(function(te){return e(f,te)}),G&&fn(f,S),I}function _(f,c,p,v){var I=Rr(p);if(typeof I!="function")throw Error(E(150));if(p=I.call(p),p==null)throw Error(E(151));for(var C=I=null,R=c,S=c=0,U=null,O=p.next();R!==null&&!O.done;S++,O=p.next()){R.index>S?(U=R,R=null):U=R.sibling;var te=m(f,R,O.value,v);if(te===null){R===null&&(R=U);break}t&&R&&te.alternate===null&&e(f,R),c=o(te,c,S),C===null?I=te:C.sibling=te,C=te,R=U}if(O.done)return n(f,R),G&&fn(f,S),I;if(R===null){for(;!O.done;S++,O=p.next())O=d(f,O.value,v),O!==null&&(c=o(O,c,S),C===null?I=O:C.sibling=O,C=O);return G&&fn(f,S),I}for(R=r(f,R);!O.done;S++,O=p.next())O=g(R,f,S,O.value,v),O!==null&&(t&&O.alternate!==null&&R.delete(O.key===null?S:O.key),c=o(O,c,S),C===null?I=O:C.sibling=O,C=O);return t&&R.forEach(function(oe){return e(f,oe)}),G&&fn(f,S),I}function k(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Vn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case zi:e:{for(var I=p.key,C=c;C!==null;){if(C.key===I){if(I=p.type,I===Vn){if(C.tag===7){n(f,C.sibling),c=i(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===zt&&kc(I)===C.type){n(f,C.sibling),c=i(C,p.props),c.ref=Lr(f,C,p),c.return=f,f=c;break e}n(f,C);break}else e(f,C);C=C.sibling}p.type===Vn?(c=In(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=go(p.type,p.key,p.props,null,f.mode,v),v.ref=Lr(f,c,p),v.return=f,f=v)}return s(f);case $n:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else e(f,c);c=c.sibling}c=ra(p,f.mode,v),c.return=f,f=c}return s(f);case zt:return C=p._init,k(f,c,C(p._payload),v)}if(br(p))return y(f,c,p,v);if(Rr(p))return _(f,c,p,v);Qi(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=na(p,f.mode,v),c.return=f,f=c),s(f)):n(f,c)}return k}var fr=Uf(!0),Ff=Uf(!1),Oi={},gt=on(Oi),hi=on(Oi),pi=on(Oi);function yn(t){if(t===Oi)throw Error(E(174));return t}function Yl(t,e){switch($(pi,e),$(hi,t),$(gt,Oi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sa(e,t)}H(gt),$(gt,e)}function hr(){H(gt),H(hi),H(pi)}function zf(t){yn(pi.current);var e=yn(gt.current),n=Sa(e,t.type);e!==n&&($(hi,t),$(gt,n))}function Jl(t){hi.current===t&&(H(gt),H(hi))}var K=on(0);function jo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ys=[];function Xl(){for(var t=0;t<Ys.length;t++)Ys[t]._workInProgressVersionPrimary=null;Ys.length=0}var co=Dt.ReactCurrentDispatcher,Js=Dt.ReactCurrentBatchConfig,Rn=0,q=null,ne=null,ae=null,$o=!1,Qr=!1,mi=0,Dg=0;function ve(){throw Error(E(321))}function Zl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ot(t[n],e[n]))return!1;return!0}function eu(t,e,n,r,i,o){if(Rn=o,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,co.current=t===null||t.memoizedState===null?zg:bg,t=n(r,i),Qr){o=0;do{if(Qr=!1,mi=0,25<=o)throw Error(E(301));o+=1,ae=ne=null,e.updateQueue=null,co.current=jg,t=n(r,i)}while(Qr)}if(co.current=Vo,e=ne!==null&&ne.next!==null,Rn=0,ae=ne=q=null,$o=!1,e)throw Error(E(300));return t}function tu(){var t=mi!==0;return mi=0,t}function lt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?q.memoizedState=ae=t:ae=ae.next=t,ae}function Ye(){if(ne===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=ne.next;var e=ae===null?q.memoizedState:ae.next;if(e!==null)ae=e,ne=t;else{if(t===null)throw Error(E(310));ne=t,t={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ae===null?q.memoizedState=ae=t:ae=ae.next=t}return ae}function gi(t,e){return typeof e=="function"?e(t):e}function Xs(t){var e=Ye(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var h=u.lane;if((Rn&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,q.lanes|=h,Nn|=h}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,ot(r,e.memoizedState)||(Pe=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,q.lanes|=o,Nn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zs(t){var e=Ye(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);ot(o,e.memoizedState)||(Pe=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function bf(){}function jf(t,e){var n=q,r=Ye(),i=e(),o=!ot(r.memoizedState,i);if(o&&(r.memoizedState=i,Pe=!0),r=r.queue,nu(Wf.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,vi(9,Vf.bind(null,n,r,i,e),void 0,null),le===null)throw Error(E(349));Rn&30||$f(n,e,i)}return i}function $f(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vf(t,e,n,r){e.value=n,e.getSnapshot=r,Bf(e)&&Hf(t)}function Wf(t,e,n){return n(function(){Bf(e)&&Hf(t)})}function Bf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ot(t,n)}catch{return!0}}function Hf(t){var e=Ot(t,1);e!==null&&it(e,t,1,-1)}function Sc(t){var e=lt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gi,lastRenderedState:t},e.queue=t,t=t.dispatch=Fg.bind(null,q,t),[e.memoizedState,t]}function vi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Gf(){return Ye().memoizedState}function fo(t,e,n,r){var i=lt();q.flags|=t,i.memoizedState=vi(1|e,n,void 0,r===void 0?null:r)}function cs(t,e,n,r){var i=Ye();r=r===void 0?null:r;var o=void 0;if(ne!==null){var s=ne.memoizedState;if(o=s.destroy,r!==null&&Zl(r,s.deps)){i.memoizedState=vi(e,n,o,r);return}}q.flags|=t,i.memoizedState=vi(1|e,n,o,r)}function Tc(t,e){return fo(8390656,8,t,e)}function nu(t,e){return cs(2048,8,t,e)}function Kf(t,e){return cs(4,2,t,e)}function qf(t,e){return cs(4,4,t,e)}function Qf(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yf(t,e,n){return n=n!=null?n.concat([t]):null,cs(4,4,Qf.bind(null,e,t),n)}function ru(){}function Jf(t,e){var n=Ye();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xf(t,e){var n=Ye();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Zf(t,e,n){return Rn&21?(ot(n,e)||(n=tf(),q.lanes|=n,Nn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pe=!0),t.memoizedState=n)}function Mg(t,e){var n=z;z=n!==0&&4>n?n:4,t(!0);var r=Js.transition;Js.transition={};try{t(!1),e()}finally{z=n,Js.transition=r}}function eh(){return Ye().memoizedState}function Ug(t,e,n){var r=Xt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},th(t))nh(e,n);else if(n=Lf(t,e,n,r),n!==null){var i=Se();it(n,t,r,i),rh(n,e,r)}}function Fg(t,e,n){var r=Xt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(th(t))nh(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ot(a,s)){var l=e.interleaved;l===null?(i.next=i,ql(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Lf(t,e,i,r),n!==null&&(i=Se(),it(n,t,r,i),rh(n,e,r))}}function th(t){var e=t.alternate;return t===q||e!==null&&e===q}function nh(t,e){Qr=$o=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rh(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dl(t,n)}}var Vo={readContext:Qe,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},zg={readContext:Qe,useCallback:function(t,e){return lt().memoizedState=[t,e===void 0?null:e],t},useContext:Qe,useEffect:Tc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fo(4194308,4,Qf.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fo(4194308,4,t,e)},useInsertionEffect:function(t,e){return fo(4,2,t,e)},useMemo:function(t,e){var n=lt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=lt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ug.bind(null,q,t),[r.memoizedState,t]},useRef:function(t){var e=lt();return t={current:t},e.memoizedState=t},useState:Sc,useDebugValue:ru,useDeferredValue:function(t){return lt().memoizedState=t},useTransition:function(){var t=Sc(!1),e=t[0];return t=Mg.bind(null,t[1]),lt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=q,i=lt();if(G){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),le===null)throw Error(E(349));Rn&30||$f(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Tc(Wf.bind(null,r,o,t),[t]),r.flags|=2048,vi(9,Vf.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=lt(),e=le.identifierPrefix;if(G){var n=kt,r=Et;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=mi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Dg++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bg={readContext:Qe,useCallback:Jf,useContext:Qe,useEffect:nu,useImperativeHandle:Yf,useInsertionEffect:Kf,useLayoutEffect:qf,useMemo:Xf,useReducer:Xs,useRef:Gf,useState:function(){return Xs(gi)},useDebugValue:ru,useDeferredValue:function(t){var e=Ye();return Zf(e,ne.memoizedState,t)},useTransition:function(){var t=Xs(gi)[0],e=Ye().memoizedState;return[t,e]},useMutableSource:bf,useSyncExternalStore:jf,useId:eh,unstable_isNewReconciler:!1},jg={readContext:Qe,useCallback:Jf,useContext:Qe,useEffect:nu,useImperativeHandle:Yf,useInsertionEffect:Kf,useLayoutEffect:qf,useMemo:Xf,useReducer:Zs,useRef:Gf,useState:function(){return Zs(gi)},useDebugValue:ru,useDeferredValue:function(t){var e=Ye();return ne===null?e.memoizedState=t:Zf(e,ne.memoizedState,t)},useTransition:function(){var t=Zs(gi)[0],e=Ye().memoizedState;return[t,e]},useMutableSource:bf,useSyncExternalStore:jf,useId:eh,unstable_isNewReconciler:!1};function pr(t,e){try{var n="",r=e;do n+=pm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function ea(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ka(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $g=typeof WeakMap=="function"?WeakMap:Map;function ih(t,e,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bo||(Bo=!0,rl=r),Ka(t,e)},n}function oh(t,e,n){n=Ct(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ka(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ka(t,e),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Cc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $g;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tv.bind(null,t,e,n),e.then(t,t))}function Rc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ct(-1,1),e.tag=2,Yt(n,e,1))),n.lanes|=1),t)}var Vg=Dt.ReactCurrentOwner,Pe=!1;function ke(t,e,n,r){e.child=t===null?Ff(e,null,n,r):fr(e,t.child,n,r)}function Pc(t,e,n,r,i){n=n.render;var o=e.ref;return ir(e,i),r=eu(t,e,n,r,o,i),n=tu(),t!==null&&!Pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,At(t,e,i)):(G&&n&&Vl(e),e.flags|=1,ke(t,e,r,i),e.child)}function Oc(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!du(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,sh(t,e,o,r,i)):(t=go(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ui,n(s,r)&&t.ref===e.ref)return At(t,e,i)}return e.flags|=1,t=Zt(o,r),t.ref=e.ref,t.return=e,e.child=t}function sh(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(ui(o,r)&&t.ref===e.ref)if(Pe=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Pe=!0);else return e.lanes=t.lanes,At(t,e,i)}return qa(t,e,n,r,i)}function ah(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(Xn,Ue),Ue|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$(Xn,Ue),Ue|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$(Xn,Ue),Ue|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,$(Xn,Ue),Ue|=r;return ke(t,e,i,n),e.child}function lh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qa(t,e,n,r,i){var o=Le(n)?Tn:we.current;return o=cr(e,o),ir(e,i),n=eu(t,e,n,r,o,i),r=tu(),t!==null&&!Pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,At(t,e,i)):(G&&r&&Vl(e),e.flags|=1,ke(t,e,n,i),e.child)}function Ac(t,e,n,r,i){if(Le(n)){var o=!0;Do(e)}else o=!1;if(ir(e,i),e.stateNode===null)ho(t,e),Mf(e,n,r),Ga(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=Le(n)?Tn:we.current,u=cr(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ec(e,s,r,u),bt=!1;var m=e.memoizedState;s.state=m,bo(e,r,s,i),l=e.memoizedState,a!==r||m!==l||Ae.current||bt?(typeof h=="function"&&(Ha(e,n,h,r),l=e.memoizedState),(a=bt||Ic(e,n,a,r,m,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,xf(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:et(e.type,a),s.props=u,d=e.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qe(l):(l=Le(n)?Tn:we.current,l=cr(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||m!==l)&&Ec(e,s,r,l),bt=!1,m=e.memoizedState,s.state=m,bo(e,r,s,i);var y=e.memoizedState;a!==d||m!==y||Ae.current||bt?(typeof g=="function"&&(Ha(e,n,g,r),y=e.memoizedState),(u=bt||Ic(e,n,u,r,m,y,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Qa(t,e,n,r,o,i)}function Qa(t,e,n,r,i,o){lh(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&gc(e,n,!1),At(t,e,o);r=e.stateNode,Vg.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=fr(e,t.child,null,o),e.child=fr(e,null,a,o)):ke(t,e,a,o),e.memoizedState=r.state,i&&gc(e,n,!0),e.child}function uh(t){var e=t.stateNode;e.pendingContext?mc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mc(t,e.context,!1),Yl(t,e.containerInfo)}function Lc(t,e,n,r,i){return dr(),Bl(i),e.flags|=256,ke(t,e,n,r),e.child}var Ya={dehydrated:null,treeContext:null,retryLane:0};function Ja(t){return{baseLanes:t,cachePool:null,transitions:null}}function ch(t,e,n){var r=e.pendingProps,i=K.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$(K,i&1),t===null)return Wa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=hs(s,r,0,null),t=In(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Ja(n),e.memoizedState=Ya,t):iu(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Wg(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Zt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Zt(a,o):(o=In(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Ja(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Ya,r}return o=t.child,t=o.sibling,r=Zt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function iu(t,e){return e=hs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Yi(t,e,n,r){return r!==null&&Bl(r),fr(e,t.child,null,n),t=iu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wg(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=ea(Error(E(422))),Yi(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=hs({mode:"visible",children:r.children},i,0,null),o=In(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&fr(e,t.child,null,s),e.child.memoizedState=Ja(s),e.memoizedState=Ya,o);if(!(e.mode&1))return Yi(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=ea(o,r,void 0),Yi(t,e,s,r)}if(a=(s&t.childLanes)!==0,Pe||a){if(r=le,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ot(t,i),it(r,t,i,-1))}return cu(),r=ea(Error(E(421))),Yi(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nv.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,ze=Qt(i.nextSibling),je=e,G=!0,nt=null,t!==null&&(He[Ge++]=Et,He[Ge++]=kt,He[Ge++]=Cn,Et=t.id,kt=t.overflow,Cn=e),e=iu(e,r.children),e.flags|=4096,e)}function xc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ba(t.return,e,n)}function ta(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function dh(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(ke(t,e,r.children,n),r=K.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xc(t,n,e);else if(t.tag===19)xc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($(K,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&jo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ta(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ta(e,!0,n,null,o);break;case"together":ta(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function At(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=Zt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Bg(t,e,n){switch(e.tag){case 3:uh(e),dr();break;case 5:zf(e);break;case 1:Le(e.type)&&Do(e);break;case 4:Yl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;$(Fo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($(K,K.current&1),e.flags|=128,null):n&e.child.childLanes?ch(t,e,n):($(K,K.current&1),t=At(t,e,n),t!==null?t.sibling:null);$(K,K.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(K,K.current),r)break;return null;case 22:case 23:return e.lanes=0,ah(t,e,n)}return At(t,e,n)}var fh,Xa,hh,ph;fh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xa=function(){};hh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yn(gt.current);var o=null;switch(n){case"input":i=wa(t,i),r=wa(t,r),o=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":i=ka(t,i),r=ka(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Lo)}Ta(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ni.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ni.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};ph=function(t,e,n,r){n!==r&&(e.flags|=4)};function xr(t,e){if(!G)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Hg(t,e,n){var r=e.pendingProps;switch(Wl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(e),null;case 1:return Le(e.type)&&xo(),ye(e),null;case 3:return r=e.stateNode,hr(),H(Ae),H(we),Xl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nt!==null&&(sl(nt),nt=null))),Xa(t,e),ye(e),null;case 5:Jl(e);var i=yn(pi.current);if(n=e.type,t!==null&&e.stateNode!=null)hh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return ye(e),null}if(t=yn(gt.current),qi(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[ut]=e,r[fi]=o,t=(e.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<$r.length;i++)V($r[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Vu(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Bu(r,o),V("invalid",r)}Ta(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ki(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ki(r.textContent,a,t),i=["children",""+a]):ni.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":bi(r),Wu(r,o,!0);break;case"textarea":bi(r),Hu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Lo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jd(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[ut]=e,t[fi]=r,fh(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ca(n,r),n){case"dialog":V("cancel",t),V("close",t),i=r;break;case"iframe":case"object":case"embed":V("load",t),i=r;break;case"video":case"audio":for(i=0;i<$r.length;i++)V($r[i],t);i=r;break;case"source":V("error",t),i=r;break;case"img":case"image":case"link":V("error",t),V("load",t),i=r;break;case"details":V("toggle",t),i=r;break;case"input":Vu(t,r),i=wa(t,r),V("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),V("invalid",t);break;case"textarea":Bu(t,r),i=ka(t,r),V("invalid",t);break;default:i=r}Ta(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Wd(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$d(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ri(t,l):typeof l=="number"&&ri(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ni.hasOwnProperty(o)?l!=null&&o==="onScroll"&&V("scroll",t):l!=null&&Nl(t,o,l,s))}switch(n){case"input":bi(t),Wu(t,r,!1);break;case"textarea":bi(t),Hu(t);break;case"option":r.value!=null&&t.setAttribute("value",""+en(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?er(t,!!r.multiple,o,!1):r.defaultValue!=null&&er(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ye(e),null;case 6:if(t&&e.stateNode!=null)ph(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=yn(pi.current),yn(gt.current),qi(e)){if(r=e.stateNode,n=e.memoizedProps,r[ut]=e,(o=r.nodeValue!==n)&&(t=je,t!==null))switch(t.tag){case 3:Ki(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ki(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=e,e.stateNode=r}return ye(e),null;case 13:if(H(K),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(G&&ze!==null&&e.mode&1&&!(e.flags&128))Af(),dr(),e.flags|=98560,o=!1;else if(o=qi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(E(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[ut]=e}else dr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ye(e),o=!1}else nt!==null&&(sl(nt),nt=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||K.current&1?ie===0&&(ie=3):cu())),e.updateQueue!==null&&(e.flags|=4),ye(e),null);case 4:return hr(),Xa(t,e),t===null&&ci(e.stateNode.containerInfo),ye(e),null;case 10:return Kl(e.type._context),ye(e),null;case 17:return Le(e.type)&&xo(),ye(e),null;case 19:if(H(K),o=e.memoizedState,o===null)return ye(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)xr(o,!1);else{if(ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=jo(t),s!==null){for(e.flags|=128,xr(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $(K,K.current&1|2),e.child}t=t.sibling}o.tail!==null&&X()>mr&&(e.flags|=128,r=!0,xr(o,!1),e.lanes=4194304)}else{if(!r)if(t=jo(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!G)return ye(e),null}else 2*X()-o.renderingStartTime>mr&&n!==1073741824&&(e.flags|=128,r=!0,xr(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=X(),e.sibling=null,n=K.current,$(K,r?n&1|2:n&1),e):(ye(e),null);case 22:case 23:return uu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ue&1073741824&&(ye(e),e.subtreeFlags&6&&(e.flags|=8192)):ye(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function Gg(t,e){switch(Wl(e),e.tag){case 1:return Le(e.type)&&xo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hr(),H(Ae),H(we),Xl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jl(e),null;case 13:if(H(K),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));dr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return H(K),null;case 4:return hr(),null;case 10:return Kl(e.type._context),null;case 22:case 23:return uu(),null;case 24:return null;default:return null}}var Ji=!1,_e=!1,Kg=typeof WeakSet=="function"?WeakSet:Set,N=null;function Jn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(t,e,r)}else n.current=null}function Za(t,e,n){try{n()}catch(r){Y(t,e,r)}}var Dc=!1;function qg(t,e){if(Ua=Po,t=yf(),$l(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,h=0,d=t,m=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)m=d,d=g;for(;;){if(d===t)break t;if(m===n&&++u===i&&(a=s),m===o&&++h===r&&(l=s),(g=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fa={focusedElem:t,selectionRange:n},Po=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,k=y.memoizedState,f=e.stateNode,c=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:et(e.type,_),k);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){Y(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return y=Dc,Dc=!1,y}function Yr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Za(e,n,o)}i=i.next}while(i!==r)}}function ds(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function el(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mh(t){var e=t.alternate;e!==null&&(t.alternate=null,mh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ut],delete e[fi],delete e[ja],delete e[Og],delete e[Ag])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gh(t){return t.tag===5||t.tag===3||t.tag===4}function Mc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Lo));else if(r!==4&&(t=t.child,t!==null))for(tl(t,e,n),t=t.sibling;t!==null;)tl(t,e,n),t=t.sibling}function nl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nl(t,e,n),t=t.sibling;t!==null;)nl(t,e,n),t=t.sibling}var fe=null,tt=!1;function Ut(t,e,n){for(n=n.child;n!==null;)vh(t,e,n),n=n.sibling}function vh(t,e,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(rs,n)}catch{}switch(n.tag){case 5:_e||Jn(n,e);case 6:var r=fe,i=tt;fe=null,Ut(t,e,n),fe=r,tt=i,fe!==null&&(tt?(t=fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(tt?(t=fe,n=n.stateNode,t.nodeType===8?qs(t.parentNode,n):t.nodeType===1&&qs(t,n),ai(t)):qs(fe,n.stateNode));break;case 4:r=fe,i=tt,fe=n.stateNode.containerInfo,tt=!0,Ut(t,e,n),fe=r,tt=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Za(n,e,s),i=i.next}while(i!==r)}Ut(t,e,n);break;case 1:if(!_e&&(Jn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,e,a)}Ut(t,e,n);break;case 21:Ut(t,e,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Ut(t,e,n),_e=r):Ut(t,e,n);break;default:Ut(t,e,n)}}function Uc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Kg),e.forEach(function(r){var i=rv.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xe(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,tt=!1;break e;case 3:fe=a.stateNode.containerInfo,tt=!0;break e;case 4:fe=a.stateNode.containerInfo,tt=!0;break e}a=a.return}if(fe===null)throw Error(E(160));vh(o,s,i),fe=null,tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Y(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yh(e,t),e=e.sibling}function yh(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xe(e,t),at(t),r&4){try{Yr(3,t,t.return),ds(3,t)}catch(_){Y(t,t.return,_)}try{Yr(5,t,t.return)}catch(_){Y(t,t.return,_)}}break;case 1:Xe(e,t),at(t),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(Xe(e,t),at(t),r&512&&n!==null&&Jn(n,n.return),t.flags&32){var i=t.stateNode;try{ri(i,"")}catch(_){Y(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&zd(i,o),Ca(a,s);var u=Ca(a,o);for(s=0;s<l.length;s+=2){var h=l[s],d=l[s+1];h==="style"?Wd(i,d):h==="dangerouslySetInnerHTML"?$d(i,d):h==="children"?ri(i,d):Nl(i,h,d,u)}switch(a){case"input":Ia(i,o);break;case"textarea":bd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?er(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?er(i,!!o.multiple,o.defaultValue,!0):er(i,!!o.multiple,o.multiple?[]:"",!1))}i[fi]=o}catch(_){Y(t,t.return,_)}}break;case 6:if(Xe(e,t),at(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(_){Y(t,t.return,_)}}break;case 3:if(Xe(e,t),at(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ai(e.containerInfo)}catch(_){Y(t,t.return,_)}break;case 4:Xe(e,t),at(t);break;case 13:Xe(e,t),at(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(au=X())),r&4&&Uc(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(_e=(u=_e)||h,Xe(e,t),_e=u):Xe(e,t),at(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(N=t,h=t.child;h!==null;){for(d=N=h;N!==null;){switch(m=N,g=m.child,m.tag){case 0:case 11:case 14:case 15:Yr(4,m,m.return);break;case 1:Jn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){Y(r,n,_)}}break;case 5:Jn(m,m.return);break;case 22:if(m.memoizedState!==null){zc(d);continue}}g!==null?(g.return=m,N=g):zc(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vd("display",s))}catch(_){Y(t,t.return,_)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Y(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Xe(e,t),at(t),r&4&&Uc(t);break;case 21:break;default:Xe(e,t),at(t)}}function at(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gh(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ri(i,""),r.flags&=-33);var o=Mc(t);nl(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Mc(t);tl(t,a,s);break;default:throw Error(E(161))}}catch(l){Y(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qg(t,e,n){N=t,_h(t)}function _h(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ji;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_e;a=Ji;var u=_e;if(Ji=s,(_e=l)&&!u)for(N=i;N!==null;)s=N,l=s.child,s.tag===22&&s.memoizedState!==null?bc(i):l!==null?(l.return=s,N=l):bc(i);for(;o!==null;)N=o,_h(o),o=o.sibling;N=i,Ji=a,_e=u}Fc(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Fc(t)}}function Fc(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_e||ds(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:et(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&wc(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wc(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&ai(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}_e||e.flags&512&&el(e)}catch(m){Y(e,e.return,m)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function zc(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function bc(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ds(4,e)}catch(l){Y(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Y(e,i,l)}}var o=e.return;try{el(e)}catch(l){Y(e,o,l)}break;case 5:var s=e.return;try{el(e)}catch(l){Y(e,s,l)}}}catch(l){Y(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var Yg=Math.ceil,Wo=Dt.ReactCurrentDispatcher,ou=Dt.ReactCurrentOwner,qe=Dt.ReactCurrentBatchConfig,F=0,le=null,Z=null,he=0,Ue=0,Xn=on(0),ie=0,yi=null,Nn=0,fs=0,su=0,Jr=null,Ne=null,au=0,mr=1/0,wt=null,Bo=!1,rl=null,Jt=null,Xi=!1,Wt=null,Ho=0,Xr=0,il=null,po=-1,mo=0;function Se(){return F&6?X():po!==-1?po:po=X()}function Xt(t){return t.mode&1?F&2&&he!==0?he&-he:xg.transition!==null?(mo===0&&(mo=tf()),mo):(t=z,t!==0||(t=window.event,t=t===void 0?16:uf(t.type)),t):1}function it(t,e,n,r){if(50<Xr)throw Xr=0,il=null,Error(E(185));Ri(t,n,r),(!(F&2)||t!==le)&&(t===le&&(!(F&2)&&(fs|=n),ie===4&&$t(t,he)),xe(t,r),n===1&&F===0&&!(e.mode&1)&&(mr=X()+500,ls&&sn()))}function xe(t,e){var n=t.callbackNode;xm(t,e);var r=No(t,t===le?he:0);if(r===0)n!==null&&qu(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qu(n),e===1)t.tag===0?Lg(jc.bind(null,t)):Nf(jc.bind(null,t)),Ng(function(){!(F&6)&&sn()}),n=null;else{switch(nf(r)){case 1:n=xl;break;case 4:n=Zd;break;case 16:n=Ro;break;case 536870912:n=ef;break;default:n=Ro}n=Rh(n,wh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wh(t,e){if(po=-1,mo=0,F&6)throw Error(E(327));var n=t.callbackNode;if(or()&&t.callbackNode!==n)return null;var r=No(t,t===le?he:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Go(t,r);else{e=r;var i=F;F|=2;var o=Eh();(le!==t||he!==e)&&(wt=null,mr=X()+500,wn(t,e));do try{Zg();break}catch(a){Ih(t,a)}while(1);Gl(),Wo.current=o,F=i,Z!==null?e=0:(le=null,he=0,e=ie)}if(e!==0){if(e===2&&(i=Aa(t),i!==0&&(r=i,e=ol(t,i))),e===1)throw n=yi,wn(t,0),$t(t,r),xe(t,X()),n;if(e===6)$t(t,r);else{if(i=t.current.alternate,!(r&30)&&!Jg(i)&&(e=Go(t,r),e===2&&(o=Aa(t),o!==0&&(r=o,e=ol(t,o))),e===1))throw n=yi,wn(t,0),$t(t,r),xe(t,X()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:hn(t,Ne,wt);break;case 3:if($t(t,r),(r&130023424)===r&&(e=au+500-X(),10<e)){if(No(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Se(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ba(hn.bind(null,t,Ne,wt),e);break}hn(t,Ne,wt);break;case 4:if($t(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-rt(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yg(r/1960))-r,10<r){t.timeoutHandle=ba(hn.bind(null,t,Ne,wt),r);break}hn(t,Ne,wt);break;case 5:hn(t,Ne,wt);break;default:throw Error(E(329))}}}return xe(t,X()),t.callbackNode===n?wh.bind(null,t):null}function ol(t,e){var n=Jr;return t.current.memoizedState.isDehydrated&&(wn(t,e).flags|=256),t=Go(t,e),t!==2&&(e=Ne,Ne=n,e!==null&&sl(e)),t}function sl(t){Ne===null?Ne=t:Ne.push.apply(Ne,t)}function Jg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ot(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $t(t,e){for(e&=~su,e&=~fs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rt(e),r=1<<n;t[n]=-1,e&=~r}}function jc(t){if(F&6)throw Error(E(327));or();var e=No(t,0);if(!(e&1))return xe(t,X()),null;var n=Go(t,e);if(t.tag!==0&&n===2){var r=Aa(t);r!==0&&(e=r,n=ol(t,r))}if(n===1)throw n=yi,wn(t,0),$t(t,e),xe(t,X()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hn(t,Ne,wt),xe(t,X()),null}function lu(t,e){var n=F;F|=1;try{return t(e)}finally{F=n,F===0&&(mr=X()+500,ls&&sn())}}function Pn(t){Wt!==null&&Wt.tag===0&&!(F&6)&&or();var e=F;F|=1;var n=qe.transition,r=z;try{if(qe.transition=null,z=1,t)return t()}finally{z=r,qe.transition=n,F=e,!(F&6)&&sn()}}function uu(){Ue=Xn.current,H(Xn)}function wn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Rg(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Wl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:hr(),H(Ae),H(we),Xl();break;case 5:Jl(r);break;case 4:hr();break;case 13:H(K);break;case 19:H(K);break;case 10:Kl(r.type._context);break;case 22:case 23:uu()}n=n.return}if(le=t,Z=t=Zt(t.current,null),he=Ue=e,ie=0,yi=null,su=fs=Nn=0,Ne=Jr=null,vn!==null){for(e=0;e<vn.length;e++)if(n=vn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}vn=null}return t}function Ih(t,e){do{var n=Z;try{if(Gl(),co.current=Vo,$o){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$o=!1}if(Rn=0,ae=ne=q=null,Qr=!1,mi=0,ou.current=null,n===null||n.return===null){ie=1,yi=e,Z=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=he,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Rc(s);if(g!==null){g.flags&=-257,Nc(g,s,a,o,e),g.mode&1&&Cc(o,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Cc(o,u,e),cu();break e}l=Error(E(426))}}else if(G&&a.mode&1){var k=Rc(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Nc(k,s,a,o,e),Bl(pr(l,a));break e}}o=l=pr(l,a),ie!==4&&(ie=2),Jr===null?Jr=[o]:Jr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=ih(o,l,e);_c(o,f);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Jt===null||!Jt.has(p)))){o.flags|=65536,e&=-e,o.lanes|=e;var v=oh(o,a,e);_c(o,v);break e}}o=o.return}while(o!==null)}Sh(n)}catch(I){e=I,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function Eh(){var t=Wo.current;return Wo.current=Vo,t===null?Vo:t}function cu(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(Nn&268435455)&&!(fs&268435455)||$t(le,he)}function Go(t,e){var n=F;F|=2;var r=Eh();(le!==t||he!==e)&&(wt=null,wn(t,e));do try{Xg();break}catch(i){Ih(t,i)}while(1);if(Gl(),F=n,Wo.current=r,Z!==null)throw Error(E(261));return le=null,he=0,ie}function Xg(){for(;Z!==null;)kh(Z)}function Zg(){for(;Z!==null&&!Sm();)kh(Z)}function kh(t){var e=Ch(t.alternate,t,Ue);t.memoizedProps=t.pendingProps,e===null?Sh(t):Z=e,ou.current=null}function Sh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gg(n,e),n!==null){n.flags&=32767,Z=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ie=6,Z=null;return}}else if(n=Hg(n,e,Ue),n!==null){Z=n;return}if(e=e.sibling,e!==null){Z=e;return}Z=e=t}while(e!==null);ie===0&&(ie=5)}function hn(t,e,n){var r=z,i=qe.transition;try{qe.transition=null,z=1,ev(t,e,n,r)}finally{qe.transition=i,z=r}return null}function ev(t,e,n,r){do or();while(Wt!==null);if(F&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Dm(t,o),t===le&&(Z=le=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xi||(Xi=!0,Rh(Ro,function(){return or(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=qe.transition,qe.transition=null;var s=z;z=1;var a=F;F|=4,ou.current=null,qg(t,n),yh(n,t),wg(Fa),Po=!!Ua,Fa=Ua=null,t.current=n,Qg(n),Tm(),F=a,z=s,qe.transition=o}else t.current=n;if(Xi&&(Xi=!1,Wt=t,Ho=i),o=t.pendingLanes,o===0&&(Jt=null),Nm(n.stateNode),xe(t,X()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bo)throw Bo=!1,t=rl,rl=null,t;return Ho&1&&t.tag!==0&&or(),o=t.pendingLanes,o&1?t===il?Xr++:(Xr=0,il=t):Xr=0,sn(),null}function or(){if(Wt!==null){var t=nf(Ho),e=qe.transition,n=z;try{if(qe.transition=null,z=16>t?16:t,Wt===null)var r=!1;else{if(t=Wt,Wt=null,Ho=0,F&6)throw Error(E(331));var i=F;for(F|=4,N=t.current;N!==null;){var o=N,s=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:Yr(8,h,o)}var d=h.child;if(d!==null)d.return=h,N=d;else for(;N!==null;){h=N;var m=h.sibling,g=h.return;if(mh(h),h===u){N=null;break}if(m!==null){m.return=g,N=m;break}N=g}}}var y=o.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var k=_.sibling;_.sibling=null,_=k}while(_!==null)}}N=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,N=s;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Yr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var c=t.current;for(N=c;N!==null;){s=N;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,N=p;else e:for(s=c;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ds(9,a)}}catch(I){Y(a,a.return,I)}if(a===s){N=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,N=v;break e}N=a.return}}if(F=i,sn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(rs,t)}catch{}r=!0}return r}finally{z=n,qe.transition=e}}return!1}function $c(t,e,n){e=pr(n,e),e=ih(t,e,1),t=Yt(t,e,1),e=Se(),t!==null&&(Ri(t,1,e),xe(t,e))}function Y(t,e,n){if(t.tag===3)$c(t,t,n);else for(;e!==null;){if(e.tag===3){$c(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){t=pr(n,t),t=oh(e,t,1),e=Yt(e,t,1),t=Se(),e!==null&&(Ri(e,1,t),xe(e,t));break}}e=e.return}}function tv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Se(),t.pingedLanes|=t.suspendedLanes&n,le===t&&(he&n)===n&&(ie===4||ie===3&&(he&130023424)===he&&500>X()-au?wn(t,0):su|=n),xe(t,e)}function Th(t,e){e===0&&(t.mode&1?(e=Vi,Vi<<=1,!(Vi&130023424)&&(Vi=4194304)):e=1);var n=Se();t=Ot(t,e),t!==null&&(Ri(t,e,n),xe(t,n))}function nv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Th(t,n)}function rv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Th(t,n)}var Ch;Ch=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ae.current)Pe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pe=!1,Bg(t,e,n);Pe=!!(t.flags&131072)}else Pe=!1,G&&e.flags&1048576&&Pf(e,Uo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ho(t,e),t=e.pendingProps;var i=cr(e,we.current);ir(e,n),i=eu(null,e,r,t,i,n);var o=tu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Le(r)?(o=!0,Do(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ql(e),i.updater=us,e.stateNode=i,i._reactInternals=e,Ga(e,r,t,n),e=Qa(null,e,r,!0,o,n)):(e.tag=0,G&&o&&Vl(e),ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ho(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ov(r),t=et(r,t),i){case 0:e=qa(null,e,r,t,n);break e;case 1:e=Ac(null,e,r,t,n);break e;case 11:e=Pc(null,e,r,t,n);break e;case 14:e=Oc(null,e,r,et(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),qa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Ac(t,e,r,i,n);case 3:e:{if(uh(e),t===null)throw Error(E(387));r=e.pendingProps,o=e.memoizedState,i=o.element,xf(t,e),bo(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=pr(Error(E(423)),e),e=Lc(t,e,r,n,i);break e}else if(r!==i){i=pr(Error(E(424)),e),e=Lc(t,e,r,n,i);break e}else for(ze=Qt(e.stateNode.containerInfo.firstChild),je=e,G=!0,nt=null,n=Ff(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dr(),r===i){e=At(t,e,n);break e}ke(t,e,r,n)}e=e.child}return e;case 5:return zf(e),t===null&&Wa(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,za(r,i)?s=null:o!==null&&za(r,o)&&(e.flags|=32),lh(t,e),ke(t,e,s,n),e.child;case 6:return t===null&&Wa(e),null;case 13:return ch(t,e,n);case 4:return Yl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fr(e,null,r,n):ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Pc(t,e,r,i,n);case 7:return ke(t,e,e.pendingProps,n),e.child;case 8:return ke(t,e,e.pendingProps.children,n),e.child;case 12:return ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,$(Fo,r._currentValue),r._currentValue=s,o!==null)if(ot(o.value,s)){if(o.children===i.children&&!Ae.current){e=At(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ct(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ba(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ba(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ir(e,n),i=Qe(i),r=r(i),e.flags|=1,ke(t,e,r,n),e.child;case 14:return r=e.type,i=et(r,e.pendingProps),i=et(r.type,i),Oc(t,e,r,i,n);case 15:return sh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),ho(t,e),e.tag=1,Le(r)?(t=!0,Do(e)):t=!1,ir(e,n),Mf(e,r,i),Ga(e,r,i,n),Qa(null,e,r,!0,t,n);case 19:return dh(t,e,n);case 22:return ah(t,e,n)}throw Error(E(156,e.tag))};function Rh(t,e){return Xd(t,e)}function iv(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(t,e,n,r){return new iv(t,e,n,r)}function du(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ov(t){if(typeof t=="function")return du(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ol)return 11;if(t===Al)return 14}return 2}function Zt(t,e){var n=t.alternate;return n===null?(n=Ke(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function go(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")du(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Vn:return In(n.children,i,o,e);case Pl:s=8,i|=8;break;case ga:return t=Ke(12,n,e,i|2),t.elementType=ga,t.lanes=o,t;case va:return t=Ke(13,n,e,i),t.elementType=va,t.lanes=o,t;case ya:return t=Ke(19,n,e,i),t.elementType=ya,t.lanes=o,t;case Md:return hs(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xd:s=10;break e;case Dd:s=9;break e;case Ol:s=11;break e;case Al:s=14;break e;case zt:s=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Ke(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function In(t,e,n,r){return t=Ke(7,t,r,e),t.lanes=n,t}function hs(t,e,n,r){return t=Ke(22,t,r,e),t.elementType=Md,t.lanes=n,t.stateNode={isHidden:!1},t}function na(t,e,n){return t=Ke(6,t,null,e),t.lanes=n,t}function ra(t,e,n){return e=Ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sv(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fs(0),this.expirationTimes=Fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fu(t,e,n,r,i,o,s,a,l){return t=new sv(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ke(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ql(o),t}function av(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Nh(t){if(!t)return tn;t=t._reactInternals;e:{if(Fn(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Le(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Le(n))return Rf(t,n,e)}return e}function Ph(t,e,n,r,i,o,s,a,l){return t=fu(n,r,!0,t,i,o,s,a,l),t.context=Nh(null),n=t.current,r=Se(),i=Xt(n),o=Ct(r,i),o.callback=e??null,Yt(n,o,i),t.current.lanes=i,Ri(t,i,r),xe(t,r),t}function ps(t,e,n,r){var i=e.current,o=Se(),s=Xt(i);return n=Nh(n),e.context===null?e.context=n:e.pendingContext=n,e=Ct(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Yt(i,e,s),t!==null&&(it(t,i,s,o),uo(t,i,s)),s}function Ko(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hu(t,e){Vc(t,e),(t=t.alternate)&&Vc(t,e)}function lv(){return null}var Oh=typeof reportError=="function"?reportError:function(t){console.error(t)};function pu(t){this._internalRoot=t}ms.prototype.render=pu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));ps(t,e,null,null)};ms.prototype.unmount=pu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pn(function(){ps(null,t,null,null)}),e[Pt]=null}};function ms(t){this._internalRoot=t}ms.prototype.unstable_scheduleHydration=function(t){if(t){var e=sf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jt.length&&e!==0&&e<jt[n].priority;n++);jt.splice(n,0,t),n===0&&lf(t)}};function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wc(){}function uv(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ko(s);o.call(u)}}var s=Ph(e,r,t,0,null,!1,!1,"",Wc);return t._reactRootContainer=s,t[Pt]=s.current,ci(t.nodeType===8?t.parentNode:t),Pn(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ko(l);a.call(u)}}var l=fu(t,0,!1,null,null,!1,!1,"",Wc);return t._reactRootContainer=l,t[Pt]=l.current,ci(t.nodeType===8?t.parentNode:t),Pn(function(){ps(e,l,n,r)}),l}function vs(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ko(s);a.call(l)}}ps(e,s,t,i)}else s=uv(n,e,t,i,r);return Ko(s)}rf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jr(e.pendingLanes);n!==0&&(Dl(e,n|1),xe(e,X()),!(F&6)&&(mr=X()+500,sn()))}break;case 13:Pn(function(){var r=Ot(t,1);if(r!==null){var i=Se();it(r,t,1,i)}}),hu(t,1)}};Ml=function(t){if(t.tag===13){var e=Ot(t,134217728);if(e!==null){var n=Se();it(e,t,134217728,n)}hu(t,134217728)}};of=function(t){if(t.tag===13){var e=Xt(t),n=Ot(t,e);if(n!==null){var r=Se();it(n,t,e,r)}hu(t,e)}};sf=function(){return z};af=function(t,e){var n=z;try{return z=t,e()}finally{z=n}};Na=function(t,e,n){switch(e){case"input":if(Ia(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=as(r);if(!i)throw Error(E(90));Fd(r),Ia(r,i)}}}break;case"textarea":bd(t,n);break;case"select":e=n.value,e!=null&&er(t,!!n.multiple,e,!1)}};Gd=lu;Kd=Pn;var cv={usingClientEntryPoint:!1,Events:[Pi,Gn,as,Bd,Hd,lu]},Dr={findFiberByHostInstance:gn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dv={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yd(t),t===null?null:t.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||lv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zi.isDisabled&&Zi.supportsFiber)try{rs=Zi.inject(dv),mt=Zi}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cv;Ve.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(e))throw Error(E(200));return av(t,e,null,n)};Ve.createRoot=function(t,e){if(!mu(t))throw Error(E(299));var n=!1,r="",i=Oh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fu(t,1,!1,null,null,n,!1,r,i),t[Pt]=e.current,ci(t.nodeType===8?t.parentNode:t),new pu(e)};Ve.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Yd(e),t=t===null?null:t.stateNode,t};Ve.flushSync=function(t){return Pn(t)};Ve.hydrate=function(t,e,n){if(!gs(e))throw Error(E(200));return vs(null,t,e,!0,n)};Ve.hydrateRoot=function(t,e,n){if(!mu(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Oh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Ph(e,null,t,1,n??null,i,!1,o,s),t[Pt]=e.current,ci(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ms(e)};Ve.render=function(t,e,n){if(!gs(e))throw Error(E(200));return vs(null,t,e,!1,n)};Ve.unmountComponentAtNode=function(t){if(!gs(t))throw Error(E(40));return t._reactRootContainer?(Pn(function(){vs(null,null,t,!1,function(){t._reactRootContainer=null,t[Pt]=null})}),!0):!1};Ve.unstable_batchedUpdates=lu;Ve.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gs(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return vs(t,e,n,!1,r)};Ve.version="18.2.0-next-9e3b772b8-20220608";function Ah(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ah)}catch(t){console.error(t)}}Ah(),Nd.exports=Ve;var fv=Nd.exports,Bc=fv;pa.createRoot=Bc.createRoot,pa.hydrateRoot=Bc.hydrateRoot;/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const hv=x.createContext({outlet:null,matches:[],isDataRoute:!1}),pv=x.createContext(null);function mv(t){let e=x.useContext(hv).outlet;return e&&x.createElement(pv.Provider,{value:t},e)}var Hc;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Hc||(Hc={}));var Gc;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Gc||(Gc={}));function Kc(t){return mv(t.context)}var qc;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(qc||(qc={}));new Promise(()=>{});var al=function(t,e){return al=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},al(t,e)};function gv(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");al(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function gu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function vv(t,e,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(h){try{u(r.next(h))}catch(d){s(d)}}function l(h){try{u(r.throw(h))}catch(d){s(d)}}function u(h){h.done?o(h.value):i(h.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function yv(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(h){return l([u,h])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(h){u=[6,h],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function ia(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function eo(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],s;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function Qc(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}/**
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
 */var _v=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wv=function(t){for(var e=[],n=0,r=0;n<t.length;){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){var o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{var o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Iv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=o>>2,d=(o&3)<<4|a>>4,m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[h],n[d],n[m],n[g])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_v(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var o=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;var l=i<t.length,u=l?n[t.charAt(i)]:64;++i;var h=i<t.length,d=h?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw Error();var m=o<<2|a>>4;if(r.push(m),u!==64){var g=a<<4&240|u>>2;if(r.push(g),d!==64){var y=u<<6&192|d;r.push(y)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ev=function(t){try{return Iv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function qo(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:var n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(var r in e)!e.hasOwnProperty(r)||!kv(r)||(t[r]=qo(t[r],e[r]));return t}function kv(t){return t!=="__proto__"}/**
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
 */var Sv=function(){function t(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(n,r){e.resolve=n,e.reject=r})}return t.prototype.wrapCallback=function(e){var n=this;return function(r,i){r?n.reject(r):n.resolve(i),typeof e=="function"&&(n.promise.catch(function(){}),e.length===1?e(r):e(r,i))}},t}();/**
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
 */function ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ee())}function Lh(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Cv(){return typeof self=="object"&&self.self===self}function xh(){var t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dh(){var t=ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ll(){return"indexedDB"in self&&indexedDB!=null}/**
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
 */var Rv="FirebaseError",vt=function(t){gv(e,t);function e(n,r,i){var o=t.call(this,r)||this;return o.code=n,o.customData=i,o.name=Rv,Object.setPrototypeOf(o,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,Ir.prototype.create),o}return e}(Error),Ir=function(){function t(e,n,r){this.service=e,this.serviceName=n,this.errors=r}return t.prototype.create=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=n[0]||{},o=this.service+"/"+e,s=this.errors[e],a=s?Nv(s,i):"Error",l=this.serviceName+": "+a+" ("+o+").",u=new vt(o,l,i);return u},t}();function Nv(t,e){return t.replace(Pv,function(n,r){var i=e[r];return i!=null?String(i):"<"+r+"?>"})}var Pv=/\{\$([^}]+)}/g;/**
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
 */function Yc(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ov(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ul(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,o=n;i<o.length;i++){var s=o[i];if(!r.includes(s))return!1;var a=t[s],l=e[s];if(Jc(a)&&Jc(l)){if(!ul(a,l))return!1}else if(a!==l)return!1}for(var u=0,h=r;u<h.length;u++){var s=h[u];if(!n.includes(s))return!1}return!0}function Jc(t){return t!==null&&typeof t=="object"}/**
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
 */function Er(t){for(var e=[],n=function(l,u){Array.isArray(u)?u.forEach(function(h){e.push(encodeURIComponent(l)+"="+encodeURIComponent(h))}):e.push(encodeURIComponent(l)+"="+encodeURIComponent(u))},r=0,i=Object.entries(t);r<i.length;r++){var o=i[r],s=o[0],a=o[1];n(s,a)}return e.length?"&"+e.join("&"):""}function Zn(t){var e={},n=t.replace(/^\?/,"").split("&");return n.forEach(function(r){if(r){var i=r.split("="),o=i[0],s=i[1];e[decodeURIComponent(o)]=decodeURIComponent(s)}}),e}function Vr(t){var e=t.indexOf("?");if(!e)return"";var n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Mh(t,e){var n=new Av(t,e);return n.subscribe.bind(n)}var Av=function(){function t(e,n){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){e(r)}).catch(function(i){r.error(i)})}return t.prototype.next=function(e){this.forEachObserver(function(n){n.next(e)})},t.prototype.error=function(e){this.forEachObserver(function(n){n.error(e)}),this.close(e)},t.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},t.prototype.subscribe=function(e,n,r){var i=this,o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lv(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=oa),o.error===void 0&&(o.error=oa),o.complete===void 0&&(o.complete=oa);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?o.error(i.finalError):o.complete()}catch{}}),this.observers.push(o),s},t.prototype.unsubscribeOne=function(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},t.prototype.forEachObserver=function(e){if(!this.finalized)for(var n=0;n<this.observers.length;n++)this.sendOne(n,e)},t.prototype.sendOne=function(e,n){var r=this;this.task.then(function(){if(r.observers!==void 0&&r.observers[e]!==void 0)try{n(r.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})},t.prototype.close=function(e){var n=this;this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(function(){n.observers=void 0,n.onNoObservers=void 0}))},t}();function Lv(t,e){if(typeof t!="object"||t===null)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&typeof t[i]=="function")return!0}return!1}function oa(){}/**
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
 */function M(t){return t&&t._delegate?t._delegate:t}var On=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var pn="[DEFAULT]";/**
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
 */var xv=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new Sv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(Mv(e))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}try{for(var i=ia(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var s=eo(o.value,2),a=s[0],l=s[1],u=this.normalizeInstanceIdentifier(a);try{var h=this.getOrInitializeService({instanceIdentifier:u});l.resolve(h)}catch{}}}catch(d){n={error:d}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=pn),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return vv(this,void 0,void 0,function(){var e;return yv(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Qc(Qc([],eo(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),eo(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=pn),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=pn),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var i=e.options,o=i===void 0?{}:i,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var l=ia(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var h=eo(u.value,2),d=h[0],m=h[1],g=this.normalizeInstanceIdentifier(d);s===g&&m.resolve(a)}}catch(y){n={error:y}}finally{try{u&&!u.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);var s=this.instances.get(i);return s&&e(s,i),function(){o.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,i,o=this.onInitCallbacks.get(n);if(o)try{for(var s=ia(o),a=s.next();!a.done;a=s.next()){var l=a.value;try{l(e,n)}catch{}}}catch(u){r={error:u}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,i=r===void 0?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:Dv(n),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch{}return o||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=pn),this.component?this.component.multipleInstances?e:pn:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function Dv(t){return t===pn?void 0:t}function Mv(t){return t.instantiationMode==="EAGER"}/**
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
 */var Uv=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new xv(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/*! *****************************************************************************
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
***************************************************************************** */function Ze(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}/**
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
 */var dn,yu=[],b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));var Uh={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},Fv=b.INFO,zv=(dn={},dn[b.DEBUG]="log",dn[b.VERBOSE]="log",dn[b.INFO]="info",dn[b.WARN]="warn",dn[b.ERROR]="error",dn),bv=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=new Date().toISOString(),o=zv[e];if(o)console[o].apply(console,Ze(["["+i+"]  "+t.name+":"],n));else throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}},_u=function(){function t(e){this.name=e,this._logLevel=Fv,this._logHandler=bv,this._userLogHandler=null,yu.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in b))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(e){this._logLevel=typeof e=="string"?Uh[e]:e},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Ze([this,b.DEBUG],e)),this._logHandler.apply(this,Ze([this,b.DEBUG],e))},t.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Ze([this,b.VERBOSE],e)),this._logHandler.apply(this,Ze([this,b.VERBOSE],e))},t.prototype.info=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Ze([this,b.INFO],e)),this._logHandler.apply(this,Ze([this,b.INFO],e))},t.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Ze([this,b.WARN],e)),this._logHandler.apply(this,Ze([this,b.WARN],e))},t.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,Ze([this,b.ERROR],e)),this._logHandler.apply(this,Ze([this,b.ERROR],e))},t}();function jv(t){yu.forEach(function(e){e.setLogLevel(t)})}function $v(t,e){for(var n=function(s){var a=null;e&&e.level&&(a=Uh[e.level]),t===null?s.userLogHandler=null:s.userLogHandler=function(l,u){for(var h=[],d=2;d<arguments.length;d++)h[d-2]=arguments[d];var m=h.map(function(g){if(g==null)return null;if(typeof g=="string")return g;if(typeof g=="number"||typeof g=="boolean")return g.toString();if(g instanceof Error)return g.message;try{return JSON.stringify(g)}catch{return null}}).filter(function(g){return g}).join(" ");u>=(a??l.logLevel)&&t({level:b[u].toLowerCase(),message:m,args:h,type:l.name})}},r=0,i=yu;r<i.length;r++){var o=i[r];n(o)}}/**
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
 */class Vv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Wv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fh="@firebase/app",Bv="0.7.0";/**
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
 */const wu=new _u("@firebase/app"),Hv="@firebase/app-compat",Gv="@firebase/analytics-compat",Kv="@firebase/analytics",qv="@firebase/app-check-compat",Qv="@firebase/app-check",Yv="@firebase/auth",Jv="@firebase/auth-compat",Xv="@firebase/database",Zv="@firebase/database-compat",ey="@firebase/functions",ty="@firebase/functions-compat",ny="@firebase/installations",ry="@firebase/installations-compat",iy="@firebase/messaging",oy="@firebase/messaging-compat",sy="@firebase/performance",ay="@firebase/performance-compat",ly="@firebase/remote-config",uy="@firebase/remote-config-compat",cy="@firebase/storage",dy="@firebase/storage-compat",fy="@firebase/firestore",hy="@firebase/firestore-compat",py="firebase",my="9.0.0";/**
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
 */const An="[DEFAULT]",gy={[Fh]:"fire-core",[Hv]:"fire-core-compat",[Kv]:"fire-analytics",[Gv]:"fire-analytics-compat",[Qv]:"fire-app-check",[qv]:"fire-app-check-compat",[Yv]:"fire-auth",[Jv]:"fire-auth-compat",[Xv]:"fire-rtdb",[Zv]:"fire-rtdb-compat",[ey]:"fire-fn",[ty]:"fire-fn-compat",[ny]:"fire-iid",[ry]:"fire-iid-compat",[iy]:"fire-fcm",[oy]:"fire-fcm-compat",[sy]:"fire-perf",[ay]:"fire-perf-compat",[ly]:"fire-rc",[uy]:"fire-rc-compat",[cy]:"fire-gcs",[dy]:"fire-gcs-compat",[fy]:"fire-fst",[hy]:"fire-fst-compat","fire-js":"fire-js",[py]:"fire-js-all"};/**
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
 */const nn=new Map,_i=new Map;function Qo(t,e){try{t.container.addComponent(e)}catch(n){wu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zh(t,e){t.container.addOrOverwriteComponent(e)}function gr(t){const e=t.name;if(_i.has(e))return wu.debug(`There were multiple attempts to register component ${e}.`),!1;_i.set(e,t);for(const n of nn.values())Qo(n,t);return!0}function bh(t,e){return t.container.getProvider(e)}function vy(t,e,n=An){bh(t,e).clearInstance(n)}function yy(){_i.clear()}/**
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
 */const _y={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},wi=new Ir("app","Firebase",_y);/**
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
 */let wy=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wi.create("app-deleted",{appName:this._name})}};/**
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
 */const kr=my;function jh(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:An,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw wi.create("bad-app-name",{appName:String(r)});const i=nn.get(r);if(i){if(ul(t,i.options)&&ul(n,i.config))return i;throw wi.create("duplicate-app",{appName:r})}const o=new Uv(r);for(const a of _i.values())o.addComponent(a);const s=new wy(t,n,o);return nn.set(r,s),s}function Iy(t=An){const e=nn.get(t);if(!e)throw wi.create("no-app",{appName:t});return e}function Ey(){return Array.from(nn.values())}async function $h(t){const e=t.name;nn.has(e)&&(nn.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function vr(t,e,n){var r;let i=(r=gy[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wu.warn(a.join(" "));return}gr(new On(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Vh(t,e){if(t!==null&&typeof t!="function")throw wi.create("invalid-log-argument");$v(t,e)}function Wh(t){jv(t)}/**
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
 */function ky(t){gr(new On("platform-logger",e=>new Vv(e),"PRIVATE")),vr(Fh,Bv,t),vr("fire-js","")}ky();const Sy=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:vt,SDK_VERSION:kr,_DEFAULT_ENTRY_NAME:An,_addComponent:Qo,_addOrOverwriteComponent:zh,_apps:nn,_clearComponents:yy,_components:_i,_getProvider:bh,_registerComponent:gr,_removeServiceInstance:vy,deleteApp:$h,getApp:Iy,getApps:Ey,initializeApp:jh,onLog:Vh,registerVersion:vr,setLogLevel:Wh},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Ty{constructor(e,n){this._delegate=e,this.firebase=n,Qo(e,new On("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),$h(this._delegate)))}_getService(e,n=An){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=An){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Qo(this._delegate,e)}_addOrOverwriteComponent(e){zh(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Cy={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Xc=new Ir("app-compat","Firebase",Cy);/**
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
 */function Ry(t){const e={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:vr,setLogLevel:Wh,onLog:Vh,apps:null,SDK_VERSION:kr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:Sy}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete e[u]}function i(u){if(u=u||An,!Yc(e,u))throw Xc.create("no-app",{appName:u});return e[u]}i.App=t;function o(u,h={}){const d=jh(u,h);if(Yc(e,d.name))return e[d.name];const m=new t(d,n);return e[d.name]=m,m}function s(){return Object.keys(e).map(u=>e[u])}function a(u){const h=u.name,d=h.replace("-compat","");if(gr(u)&&u.type==="PUBLIC"){const m=(g=i())=>{if(typeof g[d]!="function")throw Xc.create("invalid-app-argument",{appName:h});return g[d]()};u.serviceProps!==void 0&&qo(m,u.serviceProps),n[d]=m,t.prototype[d]=function(...g){return this._getService.bind(this,h).apply(this,u.multipleInstances?g:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,h){return h==="serverAuth"?null:h}return n}/**
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
 */function Bh(){const t=Ry(Ty);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Bh,extendNamespace:e,createSubscribe:Mh,ErrorFactory:Ir,deepExtend:qo});function e(n){qo(t,n)}return t}const Ny=Bh();/**
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
 */const Zc=new _u("@firebase/app-compat"),Py="@firebase/app-compat",Oy="0.1.0";/**
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
 */function Ay(t){vr(Py,Oy,t)}/**
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
 */if(Cv()&&self.firebase!==void 0){Zc.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Zc.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Lt=Ny;Ay();var Ly="firebase",xy="9.0.0";/**
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
 */Lt.registerVersion(Ly,xy,"app-compat");const Mr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},jn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Dy(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function My(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uy=Dy,Hh=new Ir("auth","Firebase",My());/**
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
 */const ed=new _u("@firebase/auth");function vo(t,...e){ed.logLevel<=b.ERROR&&ed.error(`Auth (${kr}): ${t}`,...e)}/**
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
 */function Ie(t,...e){throw Iu(t,...e)}function pe(t,...e){return Iu(t,...e)}function Iu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hh.create(t,...e)}function w(t,e,...n){if(!t)throw Iu(e,...n)}function pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vo(e),new Error(e)}function st(t,e){t||pt(e)}/**
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
 */const td=new Map;function be(t){st(t instanceof Function,"Expected a class definition");let e=td.get(t);return e?(st(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,td.set(t,e),e)}function Fy(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(be);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ii(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Eu(){return nd()==="http:"||nd()==="https:"}function nd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function zy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Eu()||xh()||"connection"in navigator)?navigator.onLine:!0}function by(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,st(n>e,"Short delay should be less than long delay!"),this.isMobile=Tv()||vu()}get(){return zy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ku(t,e){st(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"};/**
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
 */const $y=new Ai(3e4,6e4);function De(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ce(t,e,n,r,i={}){return Gh(t,i,()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Er(Object.assign({key:t.config.apiKey},s)).slice(1),l=new(cl.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),cl.fetch()(Kh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Gh(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jy),e);try{const i=new Vy(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw yo(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=(o.ok?s.errorMessage:s.error.message).split(" : ")[0];if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw yo(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw yo(t,"email-already-in-use",s);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");Ie(t,u)}}catch(i){if(i instanceof vt)throw i;Ie(t,"network-request-failed")}}async function Mt(t,e,n,r,i={}){const o=await ce(t,e,n,r,i);return"mfaPendingCredential"in o&&Ie(t,"multi-factor-auth-required",{serverResponse:o}),o}function Kh(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ku(t.config,i):`${t.config.apiScheme}://${i}`}class Vy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pe(this.auth,"timeout")),$y.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pe(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Wy(t,e){return ce(t,"POST","/v1/accounts:delete",e)}async function By(t,e){return ce(t,"POST","/v1/accounts:update",e)}async function Hy(t,e){return ce(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gy(t,e=!1){const n=M(t),r=await n.getIdToken(e),i=ys(r);w(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Zr(sa(i.auth_time)),issuedAtTime:Zr(sa(i.iat)),expirationTime:Zr(sa(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function sa(t){return Number(t)*1e3}function ys(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ev(n);return i?JSON.parse(i):(vo("Failed to decode base64 JWT payload"),null)}catch(i){return vo("Caught error parsing JWT payload as JSON",i),null}}function Ky(t){const e=ys(t);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vt&&qy(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Qy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zr(this.lastLoginAt),this.creationTime=Zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ei(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xt(t,Hy(n,{idToken:r}));w(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Xy(o.providerUserInfo):[],a=Jy(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new qh(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function Yy(t){const e=M(t);await Ei(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jy(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Xy(t){return t.map(e=>{var{providerId:n}=e,r=gu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Zy(t,e){const n=await Gh(t,{},()=>{const r=Er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Kh(t,i,"/v1/token",`key=${o}`);return cl.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ky(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Zy(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new ki;return r&&(w(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(w(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(w(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ki,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
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
 */function Ft(t,e){w(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=gu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Qy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.metadata=new qh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await xt(this,this.stsTokenManager.getToken(this.auth,e));return w(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gy(this,e)}reload(){return Yy(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ei(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xt(this,Wy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:p,emailVerified:v,isAnonymous:I,providerData:C,stsTokenManager:R}=n;w(p&&R,e,"internal-error");const S=ki.fromJSON(this.name,R);w(typeof p=="string",e,"internal-error"),Ft(d,e.name),Ft(m,e.name),w(typeof v=="boolean",e,"internal-error"),w(typeof I=="boolean",e,"internal-error"),Ft(g,e.name),Ft(y,e.name),Ft(_,e.name),Ft(k,e.name),Ft(f,e.name),Ft(c,e.name);const U=new En({uid:p,auth:e,email:m,emailVerified:v,displayName:d,isAnonymous:I,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:S,createdAt:f,lastLoginAt:c});return C&&Array.isArray(C)&&(U.providerData=C.map(O=>Object.assign({},O))),k&&(U._redirectEventId=k),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new ki;i.updateFromServerResponse(n);const o=new En({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ei(o),o}}/**
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
 */class Qh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qh.type="NONE";const Si=Qh;/**
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
 */function kn(t,e,n){return`firebase:${t}:${e}:${n}`}class sr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=kn(this.userKey,i.apiKey,o),this.fullPersistenceKey=kn("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new sr(be(Si),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||be(Si);const s=kn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(s);if(h){const d=En._fromJSON(e,h);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new sr(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new sr(o,e,r))}}/**
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
 */function rd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zh(e))return"Blackberry";if(ep(e))return"Webos";if(Su(e))return"Safari";if((e.includes("chrome/")||Jh(e))&&!e.includes("edge/"))return"Chrome";if(Li(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yh(t=ee()){return/firefox\//i.test(t)}function Su(t=ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jh(t=ee()){return/crios\//i.test(t)}function Xh(t=ee()){return/iemobile/i.test(t)}function Li(t=ee()){return/android/i.test(t)}function Zh(t=ee()){return/blackberry/i.test(t)}function ep(t=ee()){return/webos/i.test(t)}function Sr(t=ee()){return/iphone|ipad|ipod/i.test(t)}function e0(t=ee()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function t0(t=ee()){var e;return Sr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function n0(){return Dh()&&document.documentMode===10}function tp(t=ee()){return Sr(t)||Li(t)||ep(t)||Zh(t)||/windows phone/i.test(t)||Xh(t)}function r0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function np(t,e=[]){let n;switch(t){case"Browser":n=rd(ee());break;case"Worker":n=`${rd(ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${r}`}/**
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
 */class i0{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new id(this),this.idTokenSubscription=new id(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=be(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await sr.create(this,e),!this._deleted&&(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=r==null?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);(!i||i===o)&&(s!=null&&s.user)&&(r=s.user)}return r?r._redirectEventId?(w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ei(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=by()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?M(e):null;return n&&w(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(be(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ir("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&be(e)||this._popupRedirectResolver;w(n,this,"argument-error"),this.redirectPersistenceManager=await sr.create(this,[be(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return w(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=np(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function ue(t){return M(t)}class id{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mh(n=>this.observer=n)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function o0(t,e,n){const r=ue(t);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=rp(e),{host:s,port:a}=s0(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),a0(i)}function rp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function s0(t){const e=rp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:od(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:od(s)}}}function od(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function a0(t){function e(){const n=document.createElement("p"),r=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&!t&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Tr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,n){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}/**
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
 */async function ip(t,e){return ce(t,"POST","/v1/accounts:resetPassword",De(t,e))}async function op(t,e){return ce(t,"POST","/v1/accounts:update",e)}async function l0(t,e){return ce(t,"POST","/v1/accounts:update",De(t,e))}/**
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
 */async function u0(t,e){return Mt(t,"POST","/v1/accounts:signInWithPassword",De(t,e))}async function _s(t,e){return ce(t,"POST","/v1/accounts:sendOobCode",De(t,e))}async function c0(t,e){return _s(t,e)}async function d0(t,e){return _s(t,e)}async function f0(t,e){return _s(t,e)}async function h0(t,e){return _s(t,e)}/**
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
 */async function p0(t,e){return Mt(t,"POST","/v1/accounts:signInWithEmailLink",De(t,e))}async function m0(t,e){return Mt(t,"POST","/v1/accounts:signInWithEmailLink",De(t,e))}/**
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
 */class Ti extends Tr{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ti(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ti(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return u0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return p0(e,{email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return op(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return m0(e,{idToken:n,email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rt(t,e){return Mt(t,"POST","/v1/accounts:signInWithIdp",De(t,e))}/**
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
 */const g0="http://localhost";class yt extends Tr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ie("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=gu(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new yt(r,i);return Object.assign(s,o),s}_getIdTokenResponse(e){const n=this.buildRequest();return Rt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rt(e,n)}buildRequest(){const e={requestUri:g0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Er(n)}return e}}/**
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
 */async function v0(t,e){return ce(t,"POST","/v1/accounts:sendVerificationCode",De(t,e))}async function y0(t,e){return Mt(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,e))}async function _0(t,e){const n=await Mt(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,e));if(n.temporaryProof)throw yo(t,"account-exists-with-different-credential",n);return n}const w0={USER_NOT_FOUND:"user-not-found"};async function I0(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Mt(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,n),w0)}/**
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
 */class Sn extends Tr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Sn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Sn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return y0(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return _0(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return I0(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!n&&!i&&!o?null:new Sn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
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
 */function E0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function k0(t){const e=Zn(Vr(t)).link,n=e?Zn(Vr(e)).deep_link_id:null,r=Zn(Vr(t)).deep_link_id;return(r?Zn(Vr(r)).link:null)||r||n||e||t}class ws{constructor(e){var n,r,i,o,s,a;const l=Zn(Vr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=E0((i=l.mode)!==null&&i!==void 0?i:null);w(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=k0(e);try{return new ws(n)}catch{return null}}}/**
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
 */class an{constructor(){this.providerId=an.PROVIDER_ID}static credential(e,n){return Ti._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ws.parseLink(n);return w(r,"argument-error"),Ti._fromEmailAndCode(e,r.code,r.tenantId)}}an.PROVIDER_ID="password";an.EMAIL_PASSWORD_SIGN_IN_METHOD="password";an.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ln{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cr extends ln{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ar extends Cr{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return w("providerId"in n&&"signInMethod"in n,"argument-error"),yt._fromParams(n)}credential(e){return this._credential(e)}_credential(e){return w(e.idToken||e.accessToken,"argument-error"),yt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ar.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ar.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=e;if(!r&&!i&&!n&&!o||!a)return null;try{return new ar(a)._credential({idToken:n,accessToken:r,rawNonce:s,pendingToken:o})}catch{return null}}}/**
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
 */class ct extends Cr{constructor(){super("facebook.com")}static credential(e){return yt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
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
 */class dt extends Cr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
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
 */class ft extends Cr{constructor(){super("github.com")}static credential(e){return yt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
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
 */const S0="http://localhost";class Yo extends Tr{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Rt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rt(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:o}=n;return!r||!i||!o||r!==i?null:new Yo(r,o)}static _create(e,n){return new Yo(e,n)}buildRequest(){return{requestUri:S0,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */class ht extends Cr{constructor(){super("twitter.com")}static credential(e,n){return yt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ht.credential(n,r)}catch{return null}}}ht.TWITTER_SIGN_IN_METHOD="twitter.com";ht.PROVIDER_ID="twitter.com";/**
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
 */async function sp(t,e){return Mt(t,"POST","/v1/accounts:signUp",De(t,e))}/**
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
 */class Je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await En._fromIdTokenResponse(e,r,i),s=sd(r);return new Je({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sd(r);return new Je({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function T0(t){var e;const n=ue(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Je({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await sp(n,{returnSecureToken:!0}),i=await Je._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Jo extends vt{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,Jo.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(o=e.tenantId)!==null&&o!==void 0?o:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,i){return new Jo(e,n,r,i)}}function ap(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(t,o,e,r):o})}/**
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
 */function lp(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function C0(t,e){const n=M(t);await Is(!0,n,e);const{providerUserInfo:r}=await By(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=lp(r||[]);return n.providerData=n.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Tu(t,e,n=!1){const r=await xt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Je._forOperation(t,"link",r)}async function Is(t,e,n){await Ei(e);const r=lp(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";w(r.has(n)===t,e.auth,i)}/**
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
 */async function up(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await xt(t,ap(r,i,e,t),n);w(o.idToken,r,"internal-error");const s=ys(o.idToken);w(s,r,"internal-error");const{sub:a}=s;return w(t.uid===a,r,"user-mismatch"),Je._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ie(r,"user-mismatch"),o}}/**
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
 */async function cp(t,e,n=!1){const r="signIn",i=await ap(t,r,e),o=await Je._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function Es(t,e){return cp(ue(t),e)}async function dp(t,e){const n=M(t);return await Is(!1,n,e.providerId),Tu(n,e)}async function fp(t,e){return up(M(t),e)}/**
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
 */async function R0(t,e){return Mt(t,"POST","/v1/accounts:signInWithCustomToken",De(t,e))}/**
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
 */async function N0(t,e){const n=ue(t),r=await R0(n,{token:e,returnSecureToken:!0}),i=await Je._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class ks{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Cu._fromServerResponse(e,n):Ie(e,"internal-error")}}class Cu extends ks{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Cu(n)}}/**
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
 */function Ss(t,e,n){var r;w(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),w(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(w(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iosBundleId=n.iOS.bundleId),n.android&&(w(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function P0(t,e,n){const r=M(t),i={requestType:"PASSWORD_RESET",email:e};n&&Ss(r,i,n),await d0(r,i)}async function O0(t,e,n){await ip(M(t),{oobCode:e,newPassword:n})}async function A0(t,e){await l0(M(t),{oobCode:e})}async function hp(t,e){const n=M(t),r=await ip(n,{oobCode:e}),i=r.requestType;switch(w(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":w(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":w(r.mfaInfo,n,"internal-error");default:w(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=ks._fromServerResponse(ue(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function L0(t,e){const{data:n}=await hp(M(t),e);return n.email}async function x0(t,e,n){const r=ue(t),i=await sp(r,{returnSecureToken:!0,email:e,password:n}),o=await Je._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function D0(t,e,n){return Es(M(t),an.credential(e,n))}/**
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
 */async function M0(t,e,n){const r=M(t),i={requestType:"EMAIL_SIGNIN",email:e};w(n.handleCodeInApp,r,"argument-error"),n&&Ss(r,i,n),await f0(r,i)}function U0(t,e){const n=ws.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function F0(t,e,n){const r=M(t),i=an.credentialWithLink(e,n||Ii());return w(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Es(r,i)}/**
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
 */async function z0(t,e){return ce(t,"POST","/v1/accounts:createAuthUri",De(t,e))}/**
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
 */async function b0(t,e){const n=Eu()?Ii():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await z0(M(t),r);return i||[]}async function j0(t,e){const n=M(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Ss(n.auth,i,e);const{email:o}=await c0(n.auth,i);o!==t.email&&await t.reload()}async function $0(t,e,n){const r=M(t),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Ss(r.auth,o,n);const{email:s}=await h0(r.auth,o);s!==t.email&&await t.reload()}/**
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
 */async function V0(t,e){return ce(t,"POST","/v1/accounts:update",e)}/**
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
 */async function W0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=M(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await xt(r,V0(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function B0(t,e){return pp(M(t),e,null)}function H0(t,e){return pp(M(t),null,e)}async function pp(t,e,n){const{auth:r}=t,o={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(o.email=e),n&&(o.password=n);const s=await xt(t,op(r,o));await t._updateTokensIfNecessary(s,!0)}/**
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
 */function G0(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},o=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const s=(n=(e=ys(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(s){const a=s!=="anonymous"&&s!=="custom"?s:null;return new lr(o,a)}}if(!r)return null;switch(r){case"facebook.com":return new K0(o,i);case"github.com":return new q0(o,i);case"google.com":return new Q0(o,i);case"twitter.com":return new Y0(o,i,t.screenName||null);case"custom":case"anonymous":return new lr(o,null);default:return new lr(o,r,i)}}class lr{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class mp extends lr{constructor(e,n,r,i){super(e,n,r),this.username=i}}class K0 extends lr{constructor(e,n){super(e,"facebook.com",n)}}class q0 extends mp{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class Q0 extends lr{constructor(e,n){super(e,"google.com",n)}}class Y0 extends mp{constructor(e,n,r){super(e,"twitter.com",n,r)}}function J0(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:G0(n)}class _n{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new _n("enroll",e)}static _fromMfaPendingCredential(e){return new _n("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return _n._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return _n._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Ru{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ue(e),i=(n.serverResponse.mfaInfo||[]).map(s=>ks._fromServerResponse(r,s));w(n.serverResponse.mfaPendingCredential,r,"internal-error");const o=_n._fromMfaPendingCredential(n.serverResponse.mfaPendingCredential);return new Ru(o,i,async s=>{const a=await s._process(r,o);delete n.serverResponse.mfaInfo,delete n.serverResponse.mfaPendingCredential;const l=Object.assign(Object.assign({},n.serverResponse),{idToken:a.idToken,refreshToken:a.refreshToken});switch(n.operationType){case"signIn":const u=await Je._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return w(n.user,r,"internal-error"),Je._forOperation(n.user,n.operationType,l);default:Ie(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function X0(t,e){var n;const r=M(t),i=e;return w(e.operationType,r,"argument-error"),w((n=i.serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Ru._fromError(r,i)}/**
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
 */function Z0(t,e){return ce(t,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:t.tenantId},e))}function e_(t,e){return ce(t,"POST","/v2/accounts/mfaEnrollment:finalize",Object.assign({tenantId:t.tenantId},e))}function t_(t,e){return ce(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Object.assign({tenantId:t.tenantId},e))}class Nu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>ks._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Nu(e)}async getSession(){return _n._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),o=await xt(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await xt(this.user,t_(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(o){if(o.code!=="auth/user-token-expired")throw o}}}const aa=new WeakMap;function n_(t){const e=M(t);return aa.has(e)||aa.set(e,Nu._fromUser(e)),aa.get(e)}const Xo="__sak";/**
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
 */class gp{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
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
 */function r_(){const t=ee();return Su(t)||Sr(t)}const i_=1e3,o_=10;class vp extends gp{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=r_()&&r0(),this.fallbackToPolling=tp(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);n0()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,o_):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},i_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vp.type="LOCAL";const dl=vp;/**
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
 */class yp extends gp{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yp.type="SESSION";const Ln=yp;/**
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
 */function s_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ts{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ts(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await s_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ts.receivers=[];/**
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
 */function xi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class a_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=xi("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(h),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function re(){return window}function l_(t){re().location.href=t}/**
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
 */function Pu(){return typeof re().WorkerGlobalScope<"u"&&typeof re().importScripts=="function"}async function u_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function c_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function d_(){return Pu()?self:null}/**
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
 */const _p="firebaseLocalStorageDb",f_=1,Zo="firebaseLocalStorage",wp="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cs(t,e){return t.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function h_(){const t=indexedDB.deleteDatabase(_p);return new Di(t).toPromise()}function fl(){const t=indexedDB.open(_p,f_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zo,{keyPath:wp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zo)?e(r):(r.close(),await h_(),e(await fl()))})})}async function ad(t,e,n){const r=Cs(t,!0).put({[wp]:e,value:n});return new Di(r).toPromise()}async function p_(t,e){const n=Cs(t,!1).get(e),r=await new Di(n).toPromise();return r===void 0?null:r.value}function ld(t,e){const n=Cs(t,!0).delete(e);return new Di(n).toPromise()}const m_=800,g_=3;class Ip{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>g_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ts._getInstance(d_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await u_(),!this.activeServiceWorker)return;this.sender=new a_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||c_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fl();return await ad(e,Xo,"1"),await ld(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ad(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>p_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ld(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Cs(i,!1).getAll();return new Di(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),m_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ip.type="LOCAL";const _o=Ip;/**
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
 */function v_(t,e){return ce(t,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:t.tenantId},e))}function y_(t,e){return ce(t,"POST","/v2/accounts/mfaSignIn:finalize",Object.assign({tenantId:t.tenantId},e))}/**
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
 */async function __(t){return(await ce(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function w_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ep(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=pe("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",w_().appendChild(r)})}function kp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const I_=500,E_=6e4,to=1e12;class k_{constructor(e){this.auth=e,this.counter=to,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new S_(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||to;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||to;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||to;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class S_{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;w(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=T_(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},E_)},I_))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function T_(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const la=kp("rcb"),C_=new Ai(3e4,6e4),R_="https://www.google.com/recaptcha/api.js?";class N_{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!re().grecaptcha}load(e,n=""){return w(P_(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(re().grecaptcha):new Promise((r,i)=>{const o=re().setTimeout(()=>{i(pe(e,"network-request-failed"))},C_.get());re()[la]=()=>{re().clearTimeout(o),delete re()[la];const a=re().grecaptcha;if(!a){i(pe(e,"internal-error"));return}const l=a.render;a.render=(u,h)=>{const d=l(u,h);return this.counter++,d},this.hostLanguage=n,r(a)};const s=`${R_}?${Er({onload:la,render:"explicit",hl:n})}`;Ep(s).catch(()=>{clearTimeout(o),i(pe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!re().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function P_(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class O_{async load(e){return new k_(e)}clearedOneInstance(){}}/**
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
 */const Sp="recaptcha",A_={theme:"light",type:"image"};let L_=class{constructor(e,n=Object.assign({},A_),r){this.parameters=n,this.type=Sp,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ue(r),this.isInvisible=this.parameters.size==="invisible",w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;w(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new O_:new N_,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const o=s=>{s&&(this.tokenChangeListeners.delete(o),i(s))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){w(!this.parameters.sitekey,this.auth,"argument-error"),w(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=re()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){w(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){w(Eu()&&!Pu(),this.auth,"internal-error"),await x_(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await __(this.auth);w(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return w(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function x_(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Ou{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Sn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function D_(t,e,n){const r=ue(t),i=await Rs(r,e,M(n));return new Ou(i,o=>Es(r,o))}async function M_(t,e,n){const r=M(t);await Is(!1,r,"phone");const i=await Rs(r.auth,e,M(n));return new Ou(i,o=>dp(r,o))}async function U_(t,e,n){const r=M(t),i=await Rs(r.auth,e,M(n));return new Ou(i,o=>fp(r,o))}async function Rs(t,e,n){var r;const i=await n.verify();try{w(typeof i=="string",t,"argument-error"),w(n.type===Sp,t,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const s=o.session;if("phoneNumber"in o)return w(s.type==="enroll",t,"internal-error"),(await Z0(t,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{w(s.type==="signin",t,"internal-error");const a=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return w(a,t,"missing-multi-factor-info"),(await v_(t,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await v0(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}async function F_(t,e){await Tu(M(t),e)}/**
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
 */let xn=class wo{constructor(e){this.providerId=wo.PROVIDER_ID,this.auth=ue(e)}verifyPhoneNumber(e,n){return Rs(this.auth,e,M(n))}static credential(e,n){return Sn._fromVerification(e,n)}static credentialFromResult(e){const n=e;return wo.credentialFromTaggedObject(n)}static credentialFromError(e){return wo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Sn._fromTokenResponse(n,r):null}};xn.PROVIDER_ID="phone";xn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function zn(t,e){return e?be(e):(w(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Au extends Tr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function z_(t){return cp(t.auth,new Au(t),t.bypassAuthState)}function b_(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),up(n,new Au(t),t.bypassAuthState)}async function j_(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Tu(n,new Au(t),t.bypassAuthState)}/**
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
 */class Tp{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return z_;case"linkViaPopup":case"linkViaRedirect":return j_;case"reauthViaPopup":case"reauthViaRedirect":return b_;default:Ie(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $_=new Ai(2e3,1e4);async function V_(t,e,n){const r=ue(t);w(e instanceof ln,t,"argument-error");const i=zn(r,n);return new St(r,"signInViaPopup",e,i).executeNotNull()}async function W_(t,e,n){const r=M(t);w(e instanceof ln,r.auth,"argument-error");const i=zn(r.auth,n);return new St(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function B_(t,e,n){const r=M(t);w(e instanceof ln,r.auth,"argument-error");const i=zn(r.auth,n);return new St(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class St extends Tp{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,St.currentPopupAction&&St.currentPopupAction.cancel(),St.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const e=xi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,St.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,$_.get())};e()}}St.currentPopupAction=null;/**
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
 */const H_="pendingRedirect",hl=new Map;class G_ extends Tp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hl.get(this.auth._key());if(!e){try{const r=await K_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hl.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function K_(t,e){const n=Cp(e),r=await pl(t)._get(n)==="true";return await pl(t)._remove(n),r}async function Lu(t,e){return pl(t)._set(Cp(e),"true")}function q_(){hl.clear()}function pl(t){return be(t._redirectPersistence)}function Cp(t){return kn(H_,t.config.apiKey,t.name)}/**
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
 */function Q_(t,e,n){return Y_(t,e,n)}async function Y_(t,e,n){const r=ue(t);w(e instanceof ln,t,"argument-error");const i=zn(r,n);return await Lu(i,r),i._openRedirect(r,e,"signInViaRedirect")}function J_(t,e,n){return X_(t,e,n)}async function X_(t,e,n){const r=M(t);w(e instanceof ln,r.auth,"argument-error");const i=zn(r.auth,n);await Lu(i,r.auth);const o=await Rp(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",o)}function Z_(t,e,n){return ew(t,e,n)}async function ew(t,e,n){const r=M(t);w(e instanceof ln,r.auth,"argument-error");const i=zn(r.auth,n);await Is(!1,r,e.providerId),await Lu(i,r.auth);const o=await Rp(r);return i._openRedirect(r.auth,e,"linkViaRedirect",o)}async function tw(t,e){return await ue(t)._initializationPromise,Ns(t,e,!1)}async function Ns(t,e,n=!1){const r=ue(t),i=zn(r,e),s=await new G_(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}async function Rp(t){const e=xi(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const nw=10*60*1e3;class Np{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nw&&this.cachedEventUids.clear(),this.cachedEventUids.has(ud(e))}saveEventToCache(e){this.cachedEventUids.add(ud(e)),this.lastProcessedEventTime=Date.now()}}function ud(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pp(t);default:return!1}}/**
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
 */async function Op(t,e={}){return ce(t,"GET","/v1/projects",e)}/**
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
 */const iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ow=/^https?/;async function sw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Op(t);for(const n of e)try{if(aw(n))return}catch{}Ie(t,"unauthorized-domain")}function aw(t){const e=Ii(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!ow.test(n))return!1;if(iw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const lw=new Ai(3e4,6e4);function cd(){const t=re().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uw(t){return new Promise((e,n)=>{var r,i,o;function s(){cd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cd(),n(pe(t,"network-request-failed"))},timeout:lw.get()})}if(!((i=(r=re().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=re().gapi)===null||o===void 0)&&o.load)s();else{const a=kp("iframefcb");return re()[a]=()=>{gapi.load?s():n(pe(t,"network-request-failed"))},Ep(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Io=null,e})}let Io=null;function cw(t){return Io=Io||uw(t),Io}/**
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
 */const dw=new Ai(5e3,15e3),fw="__/auth/iframe",hw="emulator/auth/iframe",pw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},mw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gw(t){const e=t.config;w(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ku(e,hw):`https://${t.config.authDomain}/${fw}`,r={apiKey:e.apiKey,appName:t.name,v:kr},i=mw.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Er(r).slice(1)}`}async function vw(t){const e=await cw(t),n=re().gapi;return w(n,t,"internal-error"),e.open({where:document.body,url:gw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pw,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=pe(t,"network-request-failed"),a=re().setTimeout(()=>{o(s)},dw.get());function l(){re().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const yw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_w=500,ww=600,Iw="_blank",Ew="http://localhost";class dd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kw(t,e,n,r=_w,i=ww){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},yw),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ee().toLowerCase();n&&(a=Jh(u)?Iw:n),Yh(u)&&(e=e||Ew,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[g,y])=>`${m}${g}=${y},`,"");if(t0(u)&&a!=="_self")return Sw(e||"",a),new dd(null);const d=window.open(e||"",a,h);w(d,t,"popup-blocked");try{d.focus()}catch{}return new dd(d)}function Sw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Tw="__/auth/handler",Cw="emulator/auth/handler";function ml(t,e,n,r,i,o){w(t.config.authDomain,t,"auth-domain-config-required"),w(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:kr,eventId:i};if(e instanceof ln){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",Ov(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(e instanceof Cr){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Rw(t)}?${Er(a).slice(1)}`}function Rw({config:t}){return t.emulator?ku(t,Cw):`https://${t.authDomain}/${Tw}`}/**
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
 */const ua="webStorageSupport";class Nw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ln,this._completeRedirectFn=Ns}async _openPopup(e,n,r,i){var o;st((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=ml(e,n,r,Ii(),i);return kw(e,s,xi())}async _openRedirect(e,n,r,i){return await this._originValidation(e),l_(ml(e,n,r,Ii(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(st(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await vw(e),r=new Np(e);return n.register("authEvent",i=>(w(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ua,{type:ua},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ua];s!==void 0&&n(!!s),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tp()||Su()||Sr()}}const Pw=Nw;class Ow{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return pt("unexpected MultiFactorSessionType")}}}class xu extends Ow{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new xu(e)}_finalizeEnroll(e,n,r){return e_(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return y_(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Aw{constructor(){}static assertion(e){return xu._fromCredential(e)}}var Lw="@firebase/auth",xw="0.17.0";/**
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
 */class Dw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Mw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Uw(t){gr(new On("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(s=>{w(i&&!i.includes(":"),"invalid-api-key",{appName:s.name}),w(!(o!=null&&o.includes(":")),"argument-error",{appName:s.name});const a={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:np(t)},l=new i0(s,a);return Fy(l,n),l})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gr(new On("auth-internal",e=>{const n=ue(e.getProvider("auth").getImmediate());return(r=>new Dw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vr(Lw,xw,Mw(t))}Uw("Browser");/**
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
 */function Dn(){return window}/**
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
 */const Fw=2e3;async function zw(t,e,n){var r;const{BuildInfo:i}=Dn();st(e.sessionId,"AuthEvent did not contain a session ID");const o=await Ww(e.sessionId),s={};return Sr()?s.ibi=i.packageName:Li()?s.apn=i.packageName:Ie(t,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,ml(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,s)}async function bw(t){const{BuildInfo:e}=Dn(),n={};Sr()?n.iosBundleId=e.packageName:Li()?n.androidPackageName=e.packageName:Ie(t,"operation-not-supported-in-this-environment"),await Op(t,n)}function jw(t){const{cordova:e}=Dn();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,e0()?"_blank":"_system","location=yes"),n(i)})})}async function $w(t,e,n){const{cordova:r}=Dn();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function l(){var d;o();const m=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{s(pe(t,"redirect-cancelled-by-user"))},Fw))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Li()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function Vw(t){var e,n,r,i,o,s,a,l,u,h;const d=Dn();w(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),w(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),w(typeof((o=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((l=(a=(s=d==null?void 0:d.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((h=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Ww(t){const e=Bw(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function Bw(t){if(st(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const Hw=20;class Gw extends Np{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Kw(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:Yw(),postBody:null,tenantId:t.tenantId,error:pe(t,"no-auth-event")}}function qw(t,e){return gl()._set(vl(t),e)}async function fd(t){const e=await gl()._get(vl(t));return e&&await gl()._remove(vl(t)),e}function Qw(t,e){var n,r;const i=Xw(e);if(i.includes("/__/auth/callback")){const o=Eo(i),s=o.firebaseError?Jw(decodeURIComponent(o.firebaseError)):null,a=(r=(n=s==null?void 0:s.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?pe(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function Yw(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Hw;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function gl(){return be(dl)}function vl(t){return kn("authEvent",t.config.apiKey,t.name)}function Jw(t){try{return JSON.parse(t)}catch{return null}}function Xw(t){const e=Eo(t),n=e.link?decodeURIComponent(e.link):void 0,r=Eo(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Eo(i).link||i||r||n||t}function Eo(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Zn(n.join("?"))}/**
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
 */const Zw=500;class e1{constructor(){this._redirectPersistence=Ln,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ns}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new Gw(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ie(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){Vw(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),q_(),await this._originValidation(e);const s=Kw(e,r,i);await qw(e,s);const a=await zw(e,s,n),l=await jw(a);return $w(e,o,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bw(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=Dn(),s=setTimeout(async()=>{await fd(e),n.onEvent(hd())},Zw),a=async h=>{clearTimeout(s);const d=await fd(e);let m=null;d&&(h!=null&&h.url)&&(m=Qw(d,h.url)),n.onEvent(m||hd())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${o.packageName.toLowerCase()}://`;Dn().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(u)&&a({url:h}),typeof l=="function")try{l(h)}catch(d){console.error(d)}}}}const t1=e1;function hd(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:pe("no-auth-event")}}/**
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
 */function n1(t,e){ue(t)._logFramework(e)}var r1="@firebase/auth-compat",i1="0.1.0";/**
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
 */const o1=1e3;function es(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function s1(){return es()==="http:"||es()==="https:"}function Ap(t=ee()){return!!((es()==="file:"||es()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function a1(){return vu()||Lh()}function l1(){return Dh()&&(document==null?void 0:document.documentMode)===11}function u1(t=ee()){return/Edge\/\d+/.test(t)}function c1(t=ee()){return l1()||u1(t)}function Lp(){try{const t=self.localStorage,e=xi();if(t)return t.setItem(e,"1"),t.removeItem(e),c1()?ll():!0}catch{return Du()&&ll()}return!1}function Du(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function ca(){return(s1()||xh()||Ap())&&!a1()&&Lp()&&!Du()}function xp(){return Ap()&&typeof document<"u"}async function d1(){return xp()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},o1);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
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
 */const Fe={LOCAL:"local",NONE:"none",SESSION:"session"},Ur=w,Dp="persistence";function f1(t,e){if(Ur(Object.values(Fe).includes(e),t,"invalid-persistence-type"),vu()){Ur(e!==Fe.SESSION,t,"unsupported-persistence-type");return}if(Lh()){Ur(e===Fe.NONE,t,"unsupported-persistence-type");return}if(Du()){Ur(e===Fe.NONE||e===Fe.LOCAL&&ll(),t,"unsupported-persistence-type");return}Ur(e===Fe.NONE||Lp(),t,"unsupported-persistence-type")}async function yl(t){await t._initializationPromise;const e=Mp(),n=kn(Dp,t.config.apiKey,t.name);e!=null&&e.sessionStorage&&e.sessionStorage.setItem(n,t._getPersistence())}function h1(t,e){const n=Mp();if(!(n!=null&&n.sessionStorage))return[];const r=kn(Dp,t,e);switch(n.sessionStorage.getItem(r)){case Fe.NONE:return[Si];case Fe.LOCAL:return[_o,Ln];case Fe.SESSION:return[Ln];default:return[]}}function Mp(){return typeof window<"u"?window:null}/**
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
 */const p1=w;class Bt{constructor(){this.browserResolver=be(Pw),this.cordovaResolver=be(t1),this.underlyingResolver=null,this._redirectPersistence=Ln,this._completeRedirectFn=Ns}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return xp()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return p1(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await d1();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Up(t){return t.unwrap()}function m1(t){return t.wrapped()}/**
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
 */function g1(t){return Fp(t)}function v1(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new y1(t,X0(t,e))}else if(r){const i=Fp(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function Fp(t){const{_tokenResponse:e}=t instanceof vt?t.customData:t;if(!e)return null;if(!(t instanceof vt)&&"temporaryProof"in e&&"phoneNumber"in e)return xn.credentialFromResult(t);const n=e.providerId;if(!n||n===Mr.PASSWORD)return null;let r;switch(n){case Mr.GOOGLE:r=dt;break;case Mr.FACEBOOK:r=ct;break;case Mr.GITHUB:r=ft;break;case Mr.TWITTER:r=ht;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:l}=e;return!o&&!s&&!i&&!a?null:a?n.startsWith("saml.")?Yo._create(n,a):yt._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:o}):new ar(n).credential({idToken:i,accessToken:o,rawNonce:l})}return t instanceof vt?r.credentialFromError(t):r.credentialFromResult(t)}async function Re(t,e){let n;try{n=await e}catch(o){throw o instanceof vt&&v1(t,o),o}const{operationType:r,user:i}=n;return{operationType:r,credential:g1(n),additionalUserInfo:J0(n),user:Tt.getOrCreate(i)}}async function _l(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Re(t,n.confirm(r))}}class y1{constructor(e,n){this.resolver=n,this.auth=m1(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Re(Up(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Tt{constructor(e){this._delegate=e,this.multiFactor=n_(e)}static getOrCreate(e){return Tt.USER_MAP.has(e)||Tt.USER_MAP.set(e,new Tt(e)),Tt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Re(this.auth,dp(this._delegate,e))}async linkWithPhoneNumber(e,n){return _l(this.auth,M_(this._delegate,e,n))}async linkWithPopup(e){return Re(this.auth,B_(this._delegate,e,Bt))}async linkWithRedirect(e){return await yl(ue(this.auth)),Z_(this._delegate,e,Bt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Re(this.auth,fp(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return _l(this.auth,U_(this._delegate,e,n))}reauthenticateWithPopup(e){return Re(this.auth,W_(this._delegate,e,Bt))}async reauthenticateWithRedirect(e){return await yl(ue(this.auth)),J_(this._delegate,e,Bt)}sendEmailVerification(e){return j0(this._delegate,e)}async unlink(e){return await C0(this._delegate,e),this}updateEmail(e){return B0(this._delegate,e)}updatePassword(e){return H0(this._delegate,e)}updatePhoneNumber(e){return F_(this._delegate,e)}updateProfile(e){return W0(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return $0(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Tt.USER_MAP=new WeakMap;/**
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
 */const Fr=w;class wl{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Fr(r,"invalid-api-key",{appName:e.name});let i=[Si];if(typeof window<"u"){i=h1(r,e.name);for(const s of[_o,dl,Ln])i.includes(s)||i.push(s)}Fr(r,"invalid-api-key",{appName:e.name});const o=typeof window<"u"?Bt:void 0;this._delegate=n.initialize({options:{persistence:i,popupRedirectResolver:o}}),this._delegate._updateErrorMap(Uy),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Tt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){o0(this._delegate,e,n)}applyActionCode(e){return A0(this._delegate,e)}checkActionCode(e){return hp(this._delegate,e)}confirmPasswordReset(e,n){return O0(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Re(this._delegate,x0(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return b0(this._delegate,e)}isSignInWithEmailLink(e){return U0(this._delegate,e)}async getRedirectResult(){Fr(ca(),this._delegate,"operation-not-supported-in-this-environment");const e=await tw(this._delegate,Bt);return e?Re(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){n1(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:o,complete:s}=pd(e,n,r);return this._delegate.onAuthStateChanged(i,o,s)}onIdTokenChanged(e,n,r){const{next:i,error:o,complete:s}=pd(e,n,r);return this._delegate.onIdTokenChanged(i,o,s)}sendSignInLinkToEmail(e,n){return M0(this._delegate,e,n)}sendPasswordResetEmail(e,n){return P0(this._delegate,e,n||void 0)}async setPersistence(e){f1(this._delegate,e);let n;switch(e){case Fe.SESSION:n=Ln;break;case Fe.LOCAL:n=await be(_o)._isAvailable()?_o:dl;break;case Fe.NONE:n=Si;break;default:return Ie("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Re(this._delegate,T0(this._delegate))}signInWithCredential(e){return Re(this._delegate,Es(this._delegate,e))}signInWithCustomToken(e){return Re(this._delegate,N0(this._delegate,e))}signInWithEmailAndPassword(e,n){return Re(this._delegate,D0(this._delegate,e,n))}signInWithEmailLink(e,n){return Re(this._delegate,F0(this._delegate,e,n))}signInWithPhoneNumber(e,n){return _l(this._delegate,D_(this._delegate,e,n))}async signInWithPopup(e){return Fr(ca(),this._delegate,"operation-not-supported-in-this-environment"),Re(this._delegate,V_(this._delegate,e,Bt))}async signInWithRedirect(e){return Fr(ca(),this._delegate,"operation-not-supported-in-this-environment"),await yl(this._delegate),Q_(this._delegate,e,Bt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return L0(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}wl.Persistence=Fe;function pd(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:s=>i(s&&Tt.getOrCreate(s)),error:e,complete:n}}/**
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
 */class Mu{constructor(){this.providerId="phone",this._delegate=new xn(Up(Lt.auth()))}static credential(e,n){return xn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Mu.PHONE_SIGN_IN_METHOD=xn.PHONE_SIGN_IN_METHOD;Mu.PROVIDER_ID=xn.PROVIDER_ID;/**
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
 */const _1=w;class w1{constructor(e,n,r=Lt.app()){var i;_1((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new L_(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const I1="auth-compat";function E1(t){t.INTERNAL.registerComponent(new On(I1,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new wl(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:jn.EMAIL_SIGNIN,PASSWORD_RESET:jn.PASSWORD_RESET,RECOVER_EMAIL:jn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:jn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:jn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:jn.VERIFY_EMAIL}},EmailAuthProvider:an,FacebookAuthProvider:ct,GithubAuthProvider:ft,GoogleAuthProvider:dt,OAuthProvider:ar,PhoneAuthProvider:Mu,PhoneMultiFactorGenerator:Aw,RecaptchaVerifier:w1,TwitterAuthProvider:ht,Auth:wl,AuthCredential:Tr,Error:vt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(r1,i1)}E1(Lt);const k1="_navbar_1hcmh_1",S1="_header_1hcmh_21",T1="_headerText_1hcmh_33",C1="_logButton_1hcmh_43",R1="_welcome_1hcmh_85",N1="_cart_1hcmh_117",P1="_routebar_1hcmh_139",O1="_subroutebar1_1hcmh_149",A1="_subroutebar2_1hcmh_163",L1="_routerposition_1hcmh_177",x1="_subrouterposition_1hcmh_191",D1="_routerText_1hcmh_221",W={navbar:k1,header:S1,headerText:T1,logButton:C1,welcome:R1,cart:N1,routebar:P1,subroutebar1:O1,subroutebar2:A1,routerposition:L1,subrouterposition:x1,routerText:D1},M1={apiKey:"",authDomain:"fakeshop-c3103.firebaseapp.com",projectId:"fakeshop-c3103",appId:"1:1062737401479:web:d9cdf6024891467c670a22"};Lt.initializeApp(M1);const U1=t=>{localStorage.setItem("username",t)};function zp(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=zp(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Ht(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=zp(t))&&(r&&(r+=" "),r+=e);return r}const ei=t=>typeof t=="number"&&!isNaN(t),Mn=t=>typeof t=="string",Oe=t=>typeof t=="function",ko=t=>Mn(t)||Oe(t)?t:null,da=t=>x.isValidElement(t)||Mn(t)||Oe(t)||ei(t);function F1(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Ps(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:l,preventExitTransition:u,done:h,nodeRef:d,isIn:m}=s;const g=r?`${e}--${l}`:e,y=r?`${n}--${l}`:n,_=x.useRef(0);return x.useLayoutEffect(()=>{const k=d.current,f=g.split(" "),c=p=>{p.target===d.current&&(k.dispatchEvent(new Event("d")),k.removeEventListener("animationend",c),k.removeEventListener("animationcancel",c),_.current===0&&p.type!=="animationcancel"&&k.classList.remove(...f))};k.classList.add(...f),k.addEventListener("animationend",c),k.addEventListener("animationcancel",c)},[]),x.useEffect(()=>{const k=d.current,f=()=>{k.removeEventListener("animationend",f),i?F1(k,h,o):h()};m||(u?f():(_.current=1,k.className+=` ${y}`,k.addEventListener("animationend",f)))},[m]),j.createElement(j.Fragment,null,a)}}function md(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Be={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},no=t=>{let{theme:e,type:n,...r}=t;return j.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},fa={info:function(t){return j.createElement(no,{...t},j.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return j.createElement(no,{...t},j.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return j.createElement(no,{...t},j.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return j.createElement(no,{...t},j.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return j.createElement("div",{className:"Toastify__spinner"})}};function z1(t){const[,e]=x.useReducer(g=>g+1,0),[n,r]=x.useState([]),i=x.useRef(null),o=x.useRef(new Map).current,s=g=>n.indexOf(g)!==-1,a=x.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:g=>o.get(g)}).current;function l(g){let{containerId:y}=g;const{limit:_}=a.props;!_||y&&a.containerId!==y||(a.count-=a.queue.length,a.queue=[])}function u(g){r(y=>g==null?[]:y.filter(_=>_!==g))}function h(){const{toastContent:g,toastProps:y,staleId:_}=a.queue.shift();m(g,y,_)}function d(g,y){let{delay:_,staleId:k,...f}=y;if(!da(g)||function(oe){return!i.current||a.props.enableMultiContainer&&oe.containerId!==a.props.containerId||o.has(oe.toastId)&&oe.updateId==null}(f))return;const{toastId:c,updateId:p,data:v}=f,{props:I}=a,C=()=>u(c),R=p==null;R&&a.count++;const S={...I,style:I.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(f).filter(oe=>{let[Ee,ge]=oe;return ge!=null})),toastId:c,updateId:p,data:v,closeToast:C,isIn:!1,className:ko(f.className||I.toastClassName),bodyClassName:ko(f.bodyClassName||I.bodyClassName),progressClassName:ko(f.progressClassName||I.progressClassName),autoClose:!f.isLoading&&(U=f.autoClose,O=I.autoClose,U===!1||ei(U)&&U>0?U:O),deleteToast(){const oe=md(o.get(c),"removed");o.delete(c),Be.emit(4,oe);const Ee=a.queue.length;if(a.count=c==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),Ee>0){const ge=c==null?a.props.limit:1;if(Ee===1||ge===1)a.displayedToast++,h();else{const _t=ge>Ee?Ee:ge;a.displayedToast=_t;for(let de=0;de<_t;de++)h()}}else e()}};var U,O;S.iconOut=function(oe){let{theme:Ee,type:ge,isLoading:_t,icon:de}=oe,Me=null;const T={theme:Ee,type:ge};return de===!1||(Oe(de)?Me=de(T):x.isValidElement(de)?Me=x.cloneElement(de,T):Mn(de)||ei(de)?Me=de:_t?Me=fa.spinner():(P=>P in fa)(ge)&&(Me=fa[ge](T))),Me}(S),Oe(f.onOpen)&&(S.onOpen=f.onOpen),Oe(f.onClose)&&(S.onClose=f.onClose),S.closeButton=I.closeButton,f.closeButton===!1||da(f.closeButton)?S.closeButton=f.closeButton:f.closeButton===!0&&(S.closeButton=!da(I.closeButton)||I.closeButton);let te=g;x.isValidElement(g)&&!Mn(g.type)?te=x.cloneElement(g,{closeToast:C,toastProps:S,data:v}):Oe(g)&&(te=g({closeToast:C,toastProps:S,data:v})),I.limit&&I.limit>0&&a.count>I.limit&&R?a.queue.push({toastContent:te,toastProps:S,staleId:k}):ei(_)?setTimeout(()=>{m(te,S,k)},_):m(te,S,k)}function m(g,y,_){const{toastId:k}=y;_&&o.delete(_);const f={content:g,props:y};o.set(k,f),r(c=>[...c,k].filter(p=>p!==_)),Be.emit(4,md(f,f.props.updateId==null?"added":"updated"))}return x.useEffect(()=>(a.containerId=t.containerId,Be.cancelEmit(3).on(0,d).on(1,g=>i.current&&u(g)).on(5,l).emit(2,a),()=>{o.clear(),Be.emit(3,a)}),[]),x.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(g){const y=new Map,_=Array.from(o.values());return t.newestOnTop&&_.reverse(),_.forEach(k=>{const{position:f}=k.props;y.has(f)||y.set(f,[]),y.get(f).push(k)}),Array.from(y,k=>g(k[0],k[1]))},containerRef:i,isToastActive:s}}function gd(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function vd(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function b1(t){const[e,n]=x.useState(!1),[r,i]=x.useState(!1),o=x.useRef(null),s=x.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=x.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:h,onClick:d,closeOnClick:m}=t;function g(v){if(t.draggable){v.nativeEvent.type==="touchstart"&&v.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",f),document.addEventListener("mouseup",c),document.addEventListener("touchmove",f),document.addEventListener("touchend",c);const I=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=I.getBoundingClientRect(),I.style.transition="",s.x=gd(v.nativeEvent),s.y=vd(v.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=I.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=I.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function y(v){if(s.boundingRect){const{top:I,bottom:C,left:R,right:S}=s.boundingRect;v.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=R&&s.x<=S&&s.y>=I&&s.y<=C?k():_()}}function _(){n(!0)}function k(){n(!1)}function f(v){const I=o.current;s.canDrag&&I&&(s.didMove=!0,e&&k(),s.x=gd(v),s.y=vd(v),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),I.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,I.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function c(){document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",c),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",c);const v=o.current;if(s.canDrag&&s.didMove&&v){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();v.style.transition="transform 0.2s, opacity 0.2s",v.style.transform=`translate${t.draggableDirection}(0)`,v.style.opacity="1"}}x.useEffect(()=>{a.current=t}),x.useEffect(()=>(o.current&&o.current.addEventListener("d",_,{once:!0}),Oe(t.onOpen)&&t.onOpen(x.isValidElement(t.children)&&t.children.props),()=>{const v=a.current;Oe(v.onClose)&&v.onClose(x.isValidElement(v.children)&&v.children.props)}),[]),x.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||k(),window.addEventListener("focus",_),window.addEventListener("blur",k)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",_),window.removeEventListener("blur",k))}),[t.pauseOnFocusLoss]);const p={onMouseDown:g,onTouchStart:g,onMouseUp:y,onTouchEnd:y};return l&&u&&(p.onMouseEnter=k,p.onMouseLeave=_),m&&(p.onClick=v=>{d&&d(v),s.canCloseOnClick&&h()}),{playToast:_,pauseToast:k,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:p}}function bp(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return j.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},j.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},j.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function j1(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:u,rtl:h,isIn:d,theme:m}=t;const g=o||l&&u===0,y={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};l&&(y.transform=`scaleX(${u})`);const _=Ht("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":h}),k=Oe(s)?s({rtl:h,type:i,defaultClassName:_}):Ht(_,s);return j.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:k,style:y,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{d&&r()}})}const $1=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=b1(t),{closeButton:o,children:s,autoClose:a,onClick:l,type:u,hideProgressBar:h,closeToast:d,transition:m,position:g,className:y,style:_,bodyClassName:k,bodyStyle:f,progressClassName:c,progressStyle:p,updateId:v,role:I,progress:C,rtl:R,toastId:S,deleteToast:U,isIn:O,isLoading:te,iconOut:oe,closeOnClick:Ee,theme:ge}=t,_t=Ht("Toastify__toast",`Toastify__toast-theme--${ge}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":Ee}),de=Oe(y)?y({rtl:R,position:g,type:u,defaultClassName:_t}):Ht(_t,y),Me=!!C||!a,T={closeToast:d,type:u,theme:ge};let P=null;return o===!1||(P=Oe(o)?o(T):x.isValidElement(o)?x.cloneElement(o,T):bp(T)),j.createElement(m,{isIn:O,done:U,position:g,preventExitTransition:n,nodeRef:r},j.createElement("div",{id:S,onClick:l,className:de,...i,style:_,ref:r},j.createElement("div",{...O&&{role:I},className:Oe(k)?k({type:u}):Ht("Toastify__toast-body",k),style:f},oe!=null&&j.createElement("div",{className:Ht("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!te})},oe),j.createElement("div",null,s)),P,j.createElement(j1,{...v&&!Me?{key:`pb-${v}`}:{},rtl:R,theme:ge,delay:a,isRunning:e,isIn:O,closeToast:d,hide:h,type:u,style:p,className:c,controlledProgress:Me,progress:C||0})))},Os=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},V1=Ps(Os("bounce",!0));Ps(Os("slide",!0));Ps(Os("zoom"));Ps(Os("flip"));const Il=x.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=z1(t),{className:o,style:s,rtl:a,containerId:l}=t;function u(h){const d=Ht("Toastify__toast-container",`Toastify__toast-container--${h}`,{"Toastify__toast-container--rtl":a});return Oe(o)?o({position:h,rtl:a,defaultClassName:d}):Ht(d,ko(o))}return x.useEffect(()=>{e&&(e.current=r.current)},[]),j.createElement("div",{ref:r,className:"Toastify",id:l},n((h,d)=>{const m=d.length?{...s}:{...s,pointerEvents:"none"};return j.createElement("div",{className:u(h),style:m,key:`container-${h}`},d.map((g,y)=>{let{content:_,props:k}=g;return j.createElement($1,{...k,isIn:i(k.toastId),style:{...k.style,"--nth":y+1,"--len":d.length},key:`toast-${k.key}`},_)}))}))});Il.displayName="ToastContainer",Il.defaultProps={position:"top-right",transition:V1,autoClose:5e3,closeButton:bp,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let ha,mn=new Map,Wr=[],W1=1;function jp(){return""+W1++}function B1(t){return t&&(Mn(t.toastId)||ei(t.toastId))?t.toastId:jp()}function ti(t,e){return mn.size>0?Be.emit(0,t,e):Wr.push({content:t,options:e}),e.toastId}function ts(t,e){return{...e,type:e&&e.type||t,toastId:B1(e)}}function ro(t){return(e,n)=>ti(e,ts(t,n))}function B(t,e){return ti(t,ts("default",e))}B.loading=(t,e)=>ti(t,ts("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),B.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=Mn(i)?B.loading(i,n):B.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(h,d,m)=>{if(d==null)return void B.dismiss(r);const g={type:h,...a,...n,data:m},y=Mn(d)?{render:d}:d;return r?B.update(r,{...g,...y}):B(y.render,{...g,...y}),m},u=Oe(t)?t():t;return u.then(h=>l("success",s,h)).catch(h=>l("error",o,h)),u},B.success=ro("success"),B.info=ro("info"),B.error=ro("error"),B.warning=ro("warning"),B.warn=B.warning,B.dark=(t,e)=>ti(t,ts("default",{theme:"dark",...e})),B.dismiss=t=>{mn.size>0?Be.emit(1,t):Wr=Wr.filter(e=>t!=null&&e.options.toastId!==t)},B.clearWaitingQueue=function(t){return t===void 0&&(t={}),Be.emit(5,t)},B.isActive=t=>{let e=!1;return mn.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},B.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=mn.get(o||ha);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:jp()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,ti(s,o)}},0)},B.done=t=>{B.update(t,{progress:1})},B.onChange=t=>(Be.on(4,t),()=>{Be.off(4,t)}),B.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},B.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Be.on(2,t=>{ha=t.containerId||t,mn.set(ha,t),Wr.forEach(e=>{Be.emit(0,e.content,e.options)}),Wr=[]}).on(3,t=>{mn.delete(t.containerId||t),mn.size===0&&Be.off(0).off(1).off(5)});const H1=()=>{const t=()=>{const e=new Lt.auth.GoogleAuthProvider;e.setCustomParameters({prompt:"select_account"}),Lt.auth().signInWithPopup(e).then(n=>{const r=n.user,i=r.displayName;U1(i),B.success("Successfully logged in!"),console.log("Logged in user:",r)}).catch(n=>{console.error("Error logging in:",n)})};return A.jsx(A.Fragment,{children:A.jsx("a",{className:W.logButton,onClick:t,children:"Sign In"})})},G1=()=>{const t=()=>{Lt.auth().signOut().then(()=>{console.log("User logged out successfully"),B.success("Successfully logged out!")}).catch(e=>{console.error("Error logging out:",e)})};return A.jsx(A.Fragment,{children:A.jsx("a",{className:W.logButton,onClick:t,children:"Sign Out"})})},K1="/matkronh/assets/shopping-cart-free-15-svgrepo-com-c5675160.svg";function q1(){const[t,e]=x.useState(null);x.useEffect(()=>{const r=Lt.auth().onAuthStateChanged(i=>{e(i)});return()=>r()},[]);const n=localStorage.getItem("username");return A.jsx("div",{children:t?A.jsxs("div",{children:[A.jsxs("div",{className:W.navbar,children:[A.jsx(G1,{}),A.jsxs("p",{className:W.welcome,children:["Welcome, ",n]}),A.jsx("img",{className:W.cart,src:K1})]}),A.jsx("div",{className:W.header,children:A.jsx("h1",{className:W.headerText,children:"Louis Betong"})}),A.jsxs("div",{className:W.routebar,children:[A.jsxs("div",{className:W.subroutebar1,children:[A.jsx("div",{className:W.routerposition,children:A.jsx("div",{className:W.subrouterposition,children:A.jsx("h1",{className:W.routerText,children:"Hats"})})}),A.jsx("div",{className:W.routerposition,children:A.jsx("div",{className:W.subrouterposition,children:A.jsx("h1",{className:W.routerText,children:"Shirts"})})})]}),A.jsxs("div",{className:W.subroutebar2,children:[A.jsx("div",{className:W.routerposition,children:A.jsx("div",{className:W.subrouterposition,children:A.jsx("h1",{className:W.routerText,children:"Pants"})})}),A.jsx("div",{className:W.routerposition,children:A.jsx("div",{className:W.subrouterposition,children:A.jsx("h1",{className:W.routerText,children:"Shoes"})})})]})]}),A.jsx(Kc,{})]}):A.jsxs("div",{children:[A.jsx("div",{className:W.navbar,children:A.jsx(H1,{})}),A.jsx("div",{className:W.header,children:A.jsx("h1",{className:W.headerText,children:"Louis Betong"})}),A.jsx(Kc,{})]})})}function Q1(){return A.jsxs(A.Fragment,{children:[A.jsx(q1,{}),A.jsx(Il,{position:"top-left"})]})}pa.createRoot(document.getElementById("root")).render(A.jsx(j.StrictMode,{children:A.jsx(Q1,{})}));
