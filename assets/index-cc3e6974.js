function Sm(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Tm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qd={exports:{}},ms={},Gd={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ui=Symbol.for("react.element"),Cm=Symbol.for("react.portal"),Rm=Symbol.for("react.fragment"),Nm=Symbol.for("react.strict_mode"),Pm=Symbol.for("react.profiler"),Om=Symbol.for("react.provider"),xm=Symbol.for("react.context"),Am=Symbol.for("react.forward_ref"),Lm=Symbol.for("react.suspense"),Dm=Symbol.for("react.memo"),Mm=Symbol.for("react.lazy"),oc=Symbol.iterator;function Um(t){return t===null||typeof t!="object"?null:(t=oc&&t[oc]||t["@@iterator"],typeof t=="function"?t:null)}var Kd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qd=Object.assign,Yd={};function Sr(t,e,n){this.props=t,this.context=e,this.refs=Yd,this.updater=n||Kd}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Sr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jd(){}Jd.prototype=Sr.prototype;function Vl(t,e,n){this.props=t,this.context=e,this.refs=Yd,this.updater=n||Kd}var Wl=Vl.prototype=new Jd;Wl.constructor=Vl;Qd(Wl,Sr.prototype);Wl.isPureReactComponent=!0;var sc=Array.isArray,Xd=Object.prototype.hasOwnProperty,Bl={current:null},Zd={key:!0,ref:!0,__self:!0,__source:!0};function ef(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Xd.call(e,r)&&!Zd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ui,type:t,key:o,ref:s,props:i,_owner:Bl.current}}function Fm(t,e){return{$$typeof:Ui,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ui}function zm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ac=/\/+/g;function Gs(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zm(""+t.key):e.toString(36)}function vo(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ui:case Cm:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Gs(s,0):r,sc(i)?(n="",t!=null&&(n=t.replace(ac,"$&/")+"/"),vo(i,e,n,"",function(u){return u})):i!=null&&(Hl(i)&&(i=Fm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ac,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",sc(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Gs(o,a);s+=vo(o,e,n,l,i)}else if(l=Um(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Gs(o,a++),s+=vo(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ki(t,e,n){if(t==null)return t;var r=[],i=0;return vo(t,r,"","",function(o){return e.call(n,o,i++)}),r}function bm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ce={current:null},go={transition:null},jm={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:go,ReactCurrentOwner:Bl};M.Children={map:Ki,forEach:function(t,e,n){Ki(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ki(t,function(){e++}),e},toArray:function(t){return Ki(t,function(e){return e})||[]},only:function(t){if(!Hl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};M.Component=Sr;M.Fragment=Rm;M.Profiler=Pm;M.PureComponent=Vl;M.StrictMode=Nm;M.Suspense=Lm;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jm;M.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Qd({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Bl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Xd.call(e,l)&&!Zd.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ui,type:t.type,key:i,ref:o,props:r,_owner:s}};M.createContext=function(t){return t={$$typeof:xm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Om,_context:t},t.Consumer=t};M.createElement=ef;M.createFactory=function(t){var e=ef.bind(null,t);return e.type=t,e};M.createRef=function(){return{current:null}};M.forwardRef=function(t){return{$$typeof:Am,render:t}};M.isValidElement=Hl;M.lazy=function(t){return{$$typeof:Mm,_payload:{_status:-1,_result:t},_init:bm}};M.memo=function(t,e){return{$$typeof:Dm,type:t,compare:e===void 0?null:e}};M.startTransition=function(t){var e=go.transition;go.transition={};try{t()}finally{go.transition=e}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(t,e){return Ce.current.useCallback(t,e)};M.useContext=function(t){return Ce.current.useContext(t)};M.useDebugValue=function(){};M.useDeferredValue=function(t){return Ce.current.useDeferredValue(t)};M.useEffect=function(t,e){return Ce.current.useEffect(t,e)};M.useId=function(){return Ce.current.useId()};M.useImperativeHandle=function(t,e,n){return Ce.current.useImperativeHandle(t,e,n)};M.useInsertionEffect=function(t,e){return Ce.current.useInsertionEffect(t,e)};M.useLayoutEffect=function(t,e){return Ce.current.useLayoutEffect(t,e)};M.useMemo=function(t,e){return Ce.current.useMemo(t,e)};M.useReducer=function(t,e,n){return Ce.current.useReducer(t,e,n)};M.useRef=function(t){return Ce.current.useRef(t)};M.useState=function(t){return Ce.current.useState(t)};M.useSyncExternalStore=function(t,e,n){return Ce.current.useSyncExternalStore(t,e,n)};M.useTransition=function(){return Ce.current.useTransition()};M.version="18.2.0";Gd.exports=M;var k=Gd.exports;const $=Tm(k),$m=Sm({__proto__:null,default:$},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm=k,Wm=Symbol.for("react.element"),Bm=Symbol.for("react.fragment"),Hm=Object.prototype.hasOwnProperty,qm=Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gm={key:!0,ref:!0,__self:!0,__source:!0};function tf(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Hm.call(e,r)&&!Gm.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Wm,type:t,key:o,ref:s,props:i,_owner:qm.current}}ms.Fragment=Bm;ms.jsx=tf;ms.jsxs=tf;qd.exports=ms;var w=qd.exports,Oa={},nf={exports:{}},We={},rf={exports:{}},of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,A){var D=R.length;R.push(A);e:for(;0<D;){var J=D-1>>>1,ae=R[J];if(0<i(ae,A))R[J]=A,R[D]=ae,D=J;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var A=R[0],D=R.pop();if(D!==A){R[0]=D;e:for(var J=0,ae=R.length,qi=ae>>>1;J<qi;){var mn=2*(J+1)-1,qs=R[mn],vn=mn+1,Gi=R[vn];if(0>i(qs,D))vn<ae&&0>i(Gi,qs)?(R[J]=Gi,R[vn]=D,J=vn):(R[J]=qs,R[mn]=D,J=mn);else if(vn<ae&&0>i(Gi,D))R[J]=Gi,R[vn]=D,J=vn;else break e}}return A}function i(R,A){var D=R.sortIndex-A.sortIndex;return D!==0?D:R.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,m=3,v=!1,g=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(R){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=R)r(u),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(u)}}function y(R){if(_=!1,p(R),!g)if(n(l)!==null)g=!0,fe(I);else{var A=n(u);A!==null&&Ue(y,A.startTime-R)}}function I(R,A){g=!1,_&&(_=!1,h(C),C=-1),v=!0;var D=m;try{for(p(A),d=n(l);d!==null&&(!(d.expirationTime>A)||R&&!ne());){var J=d.callback;if(typeof J=="function"){d.callback=null,m=d.priorityLevel;var ae=J(d.expirationTime<=A);A=t.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(l)&&r(l),p(A)}else r(l);d=n(l)}if(d!==null)var qi=!0;else{var mn=n(u);mn!==null&&Ue(y,mn.startTime-A),qi=!1}return qi}finally{d=null,m=D,v=!1}}var N=!1,P=null,C=-1,F=5,L=-1;function ne(){return!(t.unstable_now()-L<F)}function se(){if(P!==null){var R=t.unstable_now();L=R;var A=!0;try{A=P(!0,R)}finally{A?ke():(N=!1,P=null)}}else N=!1}var ke;if(typeof f=="function")ke=function(){f(se)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,Et=ge.port2;ge.port1.onmessage=se,ke=function(){Et.postMessage(null)}}else ke=function(){E(se,0)};function fe(R){P=R,N||(N=!0,ke())}function Ue(R,A){C=E(function(){R(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){g||v||(g=!0,fe(I))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var D=m;m=A;try{return R()}finally{m=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,A){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var D=m;m=R;try{return A()}finally{m=D}},t.unstable_scheduleCallback=function(R,A,D){var J=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?J+D:J):D=J,R){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=D+ae,R={id:c++,callback:A,priorityLevel:R,startTime:D,expirationTime:ae,sortIndex:-1},D>J?(R.sortIndex=D,e(u,R),n(l)===null&&R===n(u)&&(_?(h(C),C=-1):_=!0,Ue(y,D-J))):(R.sortIndex=ae,e(l,R),g||v||(g=!0,fe(I))),R},t.unstable_shouldYield=ne,t.unstable_wrapCallback=function(R){var A=m;return function(){var D=m;m=A;try{return R.apply(this,arguments)}finally{m=D}}}})(of);rf.exports=of;var Km=rf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=k,Ve=Km;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var af=new Set,ci={};function Vn(t,e){mr(t,e),mr(t+"Capture",e)}function mr(t,e){for(ci[t]=e,t=0;t<e.length;t++)af.add(e[t])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xa=Object.prototype.hasOwnProperty,Qm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc={},uc={};function Ym(t){return xa.call(uc,t)?!0:xa.call(lc,t)?!1:Qm.test(t)?uc[t]=!0:(lc[t]=!0,!1)}function Jm(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Xm(t,e,n,r){if(e===null||typeof e>"u"||Jm(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Re(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ve[t]=new Re(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ve[e]=new Re(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ve[t]=new Re(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ve[t]=new Re(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ve[t]=new Re(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ve[t]=new Re(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ve[t]=new Re(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ve[t]=new Re(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ve[t]=new Re(t,5,!1,t.toLowerCase(),null,!1,!1)});var ql=/[\-:]([a-z])/g;function Gl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ql,Gl);ve[e]=new Re(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ql,Gl);ve[e]=new Re(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ql,Gl);ve[e]=new Re(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ve[t]=new Re(t,1,!1,t.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ve[t]=new Re(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kl(t,e,n,r){var i=ve.hasOwnProperty(e)?ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Xm(e,n,i,r)&&(n=null),r||i===null?Ym(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ut=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qi=Symbol.for("react.element"),Gn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Ql=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),lf=Symbol.for("react.provider"),uf=Symbol.for("react.context"),Yl=Symbol.for("react.forward_ref"),La=Symbol.for("react.suspense"),Da=Symbol.for("react.suspense_list"),Jl=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),cf=Symbol.for("react.offscreen"),cc=Symbol.iterator;function Mr(t){return t===null||typeof t!="object"?null:(t=cc&&t[cc]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Object.assign,Ks;function qr(t){if(Ks===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ks=e&&e[1]||""}return`
`+Ks+t}var Qs=!1;function Ys(t,e){if(!t||Qs)return"";Qs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Qs=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qr(t):""}function Zm(t){switch(t.tag){case 5:return qr(t.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return t=Ys(t.type,!1),t;case 11:return t=Ys(t.type.render,!1),t;case 1:return t=Ys(t.type,!0),t;default:return""}}function Ma(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kn:return"Fragment";case Gn:return"Portal";case Aa:return"Profiler";case Ql:return"StrictMode";case La:return"Suspense";case Da:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uf:return(t.displayName||"Context")+".Consumer";case lf:return(t._context.displayName||"Context")+".Provider";case Yl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jl:return e=t.displayName||null,e!==null?e:Ma(t.type)||"Memo";case $t:e=t._payload,t=t._init;try{return Ma(t(e))}catch{}}return null}function ev(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ma(e);case 8:return e===Ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function df(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tv(t){var e=df(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yi(t){t._valueTracker||(t._valueTracker=tv(t))}function ff(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=df(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Mo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ua(t,e){var n=e.checked;return Q({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=sn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hf(t,e){e=e.checked,e!=null&&Kl(t,"checked",e,!1)}function Fa(t,e){hf(t,e);var n=sn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?za(t,e.type,n):e.hasOwnProperty("defaultValue")&&za(t,e.type,sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function za(t,e,n){(e!=="number"||Mo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gr=Array.isArray;function sr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+sn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ba(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return Q({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Gr(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sn(n)}}function pf(t,e){var n=sn(e.value),r=sn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ja(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ji,vf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ji=Ji||document.createElement("div"),Ji.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ji.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function di(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nv=["Webkit","ms","Moz","O"];Object.keys(Xr).forEach(function(t){nv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xr[e]=Xr[t]})});function gf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xr.hasOwnProperty(t)&&Xr[t]?(""+e).trim():e+"px"}function yf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rv=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $a(t,e){if(e){if(rv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Va(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wa=null;function Xl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ba=null,ar=null,lr=null;function mc(t){if(t=bi(t)){if(typeof Ba!="function")throw Error(T(280));var e=t.stateNode;e&&(e=ws(e),Ba(t.stateNode,t.type,e))}}function _f(t){ar?lr?lr.push(t):lr=[t]:ar=t}function wf(){if(ar){var t=ar,e=lr;if(lr=ar=null,mc(t),e)for(t=0;t<e.length;t++)mc(e[t])}}function Ef(t,e){return t(e)}function If(){}var Js=!1;function kf(t,e,n){if(Js)return t(e,n);Js=!0;try{return Ef(t,e,n)}finally{Js=!1,(ar!==null||lr!==null)&&(If(),wf())}}function fi(t,e){var n=t.stateNode;if(n===null)return null;var r=ws(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var Ha=!1;if(Ot)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){Ha=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{Ha=!1}function iv(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Zr=!1,Uo=null,Fo=!1,qa=null,ov={onError:function(t){Zr=!0,Uo=t}};function sv(t,e,n,r,i,o,s,a,l){Zr=!1,Uo=null,iv.apply(ov,arguments)}function av(t,e,n,r,i,o,s,a,l){if(sv.apply(this,arguments),Zr){if(Zr){var u=Uo;Zr=!1,Uo=null}else throw Error(T(198));Fo||(Fo=!0,qa=u)}}function Wn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vc(t){if(Wn(t)!==t)throw Error(T(188))}function lv(t){var e=t.alternate;if(!e){if(e=Wn(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return vc(i),t;if(o===r)return vc(i),e;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function Tf(t){return t=lv(t),t!==null?Cf(t):null}function Cf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cf(t);if(e!==null)return e;t=t.sibling}return null}var Rf=Ve.unstable_scheduleCallback,gc=Ve.unstable_cancelCallback,uv=Ve.unstable_shouldYield,cv=Ve.unstable_requestPaint,X=Ve.unstable_now,dv=Ve.unstable_getCurrentPriorityLevel,Zl=Ve.unstable_ImmediatePriority,Nf=Ve.unstable_UserBlockingPriority,zo=Ve.unstable_NormalPriority,fv=Ve.unstable_LowPriority,Pf=Ve.unstable_IdlePriority,vs=null,gt=null;function hv(t){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(vs,t,void 0,(t.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:vv,pv=Math.log,mv=Math.LN2;function vv(t){return t>>>=0,t===0?32:31-(pv(t)/mv|0)|0}var Xi=64,Zi=4194304;function Kr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Kr(a):(o&=s,o!==0&&(r=Kr(o)))}else s=n&~i,s!==0?r=Kr(s):o!==0&&(r=Kr(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-it(e),i=1<<n,r|=t[n],e&=~i;return r}function gv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-it(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=gv(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Ga(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Of(){var t=Xi;return Xi<<=1,!(Xi&4194240)&&(Xi=64),t}function Xs(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-it(e),t[e]=n}function _v(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-it(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function eu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-it(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var b=0;function xf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Af,tu,Lf,Df,Mf,Ka=!1,eo=[],Yt=null,Jt=null,Xt=null,hi=new Map,pi=new Map,Wt=[],wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yc(t,e){switch(t){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":hi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(e.pointerId)}}function Fr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=bi(e),e!==null&&tu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ev(t,e,n,r,i){switch(e){case"focusin":return Yt=Fr(Yt,t,e,n,r,i),!0;case"dragenter":return Jt=Fr(Jt,t,e,n,r,i),!0;case"mouseover":return Xt=Fr(Xt,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return hi.set(o,Fr(hi.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,pi.set(o,Fr(pi.get(o)||null,t,e,n,r,i)),!0}return!1}function Uf(t){var e=In(t.target);if(e!==null){var n=Wn(e);if(n!==null){if(e=n.tag,e===13){if(e=Sf(n),e!==null){t.blockedOn=e,Mf(t.priority,function(){Lf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wa=r,n.target.dispatchEvent(r),Wa=null}else return e=bi(n),e!==null&&tu(e),t.blockedOn=n,!1;e.shift()}return!0}function _c(t,e,n){yo(t)&&n.delete(e)}function Iv(){Ka=!1,Yt!==null&&yo(Yt)&&(Yt=null),Jt!==null&&yo(Jt)&&(Jt=null),Xt!==null&&yo(Xt)&&(Xt=null),hi.forEach(_c),pi.forEach(_c)}function zr(t,e){t.blockedOn===e&&(t.blockedOn=null,Ka||(Ka=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Iv)))}function mi(t){function e(i){return zr(i,t)}if(0<eo.length){zr(eo[0],t);for(var n=1;n<eo.length;n++){var r=eo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yt!==null&&zr(Yt,t),Jt!==null&&zr(Jt,t),Xt!==null&&zr(Xt,t),hi.forEach(e),pi.forEach(e),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)Uf(n),n.blockedOn===null&&Wt.shift()}var ur=Ut.ReactCurrentBatchConfig,jo=!0;function kv(t,e,n,r){var i=b,o=ur.transition;ur.transition=null;try{b=1,nu(t,e,n,r)}finally{b=i,ur.transition=o}}function Sv(t,e,n,r){var i=b,o=ur.transition;ur.transition=null;try{b=4,nu(t,e,n,r)}finally{b=i,ur.transition=o}}function nu(t,e,n,r){if(jo){var i=Qa(t,e,n,r);if(i===null)la(t,e,r,$o,n),yc(t,r);else if(Ev(i,t,e,n,r))r.stopPropagation();else if(yc(t,r),e&4&&-1<wv.indexOf(t)){for(;i!==null;){var o=bi(i);if(o!==null&&Af(o),o=Qa(t,e,n,r),o===null&&la(t,e,r,$o,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else la(t,e,r,null,n)}}var $o=null;function Qa(t,e,n,r){if($o=null,t=Xl(r),t=In(t),t!==null)if(e=Wn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $o=t,null}function Ff(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dv()){case Zl:return 1;case Nf:return 4;case zo:case fv:return 16;case Pf:return 536870912;default:return 16}default:return 16}}var Ht=null,ru=null,_o=null;function zf(){if(_o)return _o;var t,e=ru,n=e.length,r,i="value"in Ht?Ht.value:Ht.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return _o=i.slice(t,1<r?1-r:void 0)}function wo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function to(){return!0}function wc(){return!1}function Be(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?to:wc,this.isPropagationStopped=wc,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),e}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=Be(Tr),zi=Q({},Tr,{view:0,detail:0}),Tv=Be(zi),Zs,ea,br,gs=Q({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==br&&(br&&t.type==="mousemove"?(Zs=t.screenX-br.screenX,ea=t.screenY-br.screenY):ea=Zs=0,br=t),Zs)},movementY:function(t){return"movementY"in t?t.movementY:ea}}),Ec=Be(gs),Cv=Q({},gs,{dataTransfer:0}),Rv=Be(Cv),Nv=Q({},zi,{relatedTarget:0}),ta=Be(Nv),Pv=Q({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ov=Be(Pv),xv=Q({},Tr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Av=Be(xv),Lv=Q({},Tr,{data:0}),Ic=Be(Lv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Uv[t])?!!e[t]:!1}function ou(){return Fv}var zv=Q({},zi,{key:function(t){if(t.key){var e=Dv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(t){return t.type==="keypress"?wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bv=Be(zv),jv=Q({},gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kc=Be(jv),$v=Q({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Vv=Be($v),Wv=Q({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bv=Be(Wv),Hv=Q({},gs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=Be(Hv),Gv=[9,13,27,32],su=Ot&&"CompositionEvent"in window,ei=null;Ot&&"documentMode"in document&&(ei=document.documentMode);var Kv=Ot&&"TextEvent"in window&&!ei,bf=Ot&&(!su||ei&&8<ei&&11>=ei),Sc=String.fromCharCode(32),Tc=!1;function jf(t,e){switch(t){case"keyup":return Gv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $f(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qn=!1;function Qv(t,e){switch(t){case"compositionend":return $f(e);case"keypress":return e.which!==32?null:(Tc=!0,Sc);case"textInput":return t=e.data,t===Sc&&Tc?null:t;default:return null}}function Yv(t,e){if(Qn)return t==="compositionend"||!su&&jf(t,e)?(t=zf(),_o=ru=Ht=null,Qn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bf&&e.locale!=="ko"?null:e.data;default:return null}}var Jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Jv[t.type]:e==="textarea"}function Vf(t,e,n,r){_f(r),e=Vo(e,"onChange"),0<e.length&&(n=new iu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ti=null,vi=null;function Xv(t){Zf(t,0)}function ys(t){var e=Xn(t);if(ff(e))return t}function Zv(t,e){if(t==="change")return e}var Wf=!1;if(Ot){var na;if(Ot){var ra="oninput"in document;if(!ra){var Rc=document.createElement("div");Rc.setAttribute("oninput","return;"),ra=typeof Rc.oninput=="function"}na=ra}else na=!1;Wf=na&&(!document.documentMode||9<document.documentMode)}function Nc(){ti&&(ti.detachEvent("onpropertychange",Bf),vi=ti=null)}function Bf(t){if(t.propertyName==="value"&&ys(vi)){var e=[];Vf(e,vi,t,Xl(t)),kf(Xv,e)}}function eg(t,e,n){t==="focusin"?(Nc(),ti=e,vi=n,ti.attachEvent("onpropertychange",Bf)):t==="focusout"&&Nc()}function tg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ys(vi)}function ng(t,e){if(t==="click")return ys(e)}function rg(t,e){if(t==="input"||t==="change")return ys(e)}function ig(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var st=typeof Object.is=="function"?Object.is:ig;function gi(t,e){if(st(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xa.call(e,i)||!st(t[i],e[i]))return!1}return!0}function Pc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Oc(t,e){var n=Pc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pc(n)}}function Hf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qf(){for(var t=window,e=Mo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Mo(t.document)}return e}function au(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function og(t){var e=qf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hf(n.ownerDocument.documentElement,n)){if(r!==null&&au(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Oc(n,o);var s=Oc(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sg=Ot&&"documentMode"in document&&11>=document.documentMode,Yn=null,Ya=null,ni=null,Ja=!1;function xc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ja||Yn==null||Yn!==Mo(r)||(r=Yn,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ni&&gi(ni,r)||(ni=r,r=Vo(Ya,"onSelect"),0<r.length&&(e=new iu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yn)))}function no(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jn={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},ia={},Gf={};Ot&&(Gf=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function _s(t){if(ia[t])return ia[t];if(!Jn[t])return t;var e=Jn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gf)return ia[t]=e[n];return t}var Kf=_s("animationend"),Qf=_s("animationiteration"),Yf=_s("animationstart"),Jf=_s("transitionend"),Xf=new Map,Ac="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(t,e){Xf.set(t,e),Vn(e,[t])}for(var oa=0;oa<Ac.length;oa++){var sa=Ac[oa],ag=sa.toLowerCase(),lg=sa[0].toUpperCase()+sa.slice(1);un(ag,"on"+lg)}un(Kf,"onAnimationEnd");un(Qf,"onAnimationIteration");un(Yf,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Jf,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ug=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function Lc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,av(r,e,void 0,t),t.currentTarget=null}function Zf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Lc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Lc(i,a,u),o=l}}}if(Fo)throw t=qa,Fo=!1,qa=null,t}function W(t,e){var n=e[nl];n===void 0&&(n=e[nl]=new Set);var r=t+"__bubble";n.has(r)||(eh(e,t,2,!1),n.add(r))}function aa(t,e,n){var r=0;e&&(r|=4),eh(n,t,r,e)}var ro="_reactListening"+Math.random().toString(36).slice(2);function yi(t){if(!t[ro]){t[ro]=!0,af.forEach(function(n){n!=="selectionchange"&&(ug.has(n)||aa(n,!1,t),aa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ro]||(e[ro]=!0,aa("selectionchange",!1,e))}}function eh(t,e,n,r){switch(Ff(e)){case 1:var i=kv;break;case 4:i=Sv;break;default:i=nu}n=i.bind(null,e,n,t),i=void 0,!Ha||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function la(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=In(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}kf(function(){var u=o,c=Xl(n),d=[];e:{var m=Xf.get(t);if(m!==void 0){var v=iu,g=t;switch(t){case"keypress":if(wo(n)===0)break e;case"keydown":case"keyup":v=bv;break;case"focusin":g="focus",v=ta;break;case"focusout":g="blur",v=ta;break;case"beforeblur":case"afterblur":v=ta;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Vv;break;case Kf:case Qf:case Yf:v=Ov;break;case Jf:v=Bv;break;case"scroll":v=Tv;break;case"wheel":v=qv;break;case"copy":case"cut":case"paste":v=Av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=kc}var _=(e&4)!==0,E=!_&&t==="scroll",h=_?m!==null?m+"Capture":null:m;_=[];for(var f=u,p;f!==null;){p=f;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,h!==null&&(y=fi(f,h),y!=null&&_.push(_i(f,y,p)))),E)break;f=f.return}0<_.length&&(m=new v(m,g,null,n,c),d.push({event:m,listeners:_}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Wa&&(g=n.relatedTarget||n.fromElement)&&(In(g)||g[xt]))break e;if((v||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?In(g):null,g!==null&&(E=Wn(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(_=Ec,y="onMouseLeave",h="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=kc,y="onPointerLeave",h="onPointerEnter",f="pointer"),E=v==null?m:Xn(v),p=g==null?m:Xn(g),m=new _(y,f+"leave",v,n,c),m.target=E,m.relatedTarget=p,y=null,In(c)===u&&(_=new _(h,f+"enter",g,n,c),_.target=p,_.relatedTarget=E,y=_),E=y,v&&g)t:{for(_=v,h=g,f=0,p=_;p;p=Hn(p))f++;for(p=0,y=h;y;y=Hn(y))p++;for(;0<f-p;)_=Hn(_),f--;for(;0<p-f;)h=Hn(h),p--;for(;f--;){if(_===h||h!==null&&_===h.alternate)break t;_=Hn(_),h=Hn(h)}_=null}else _=null;v!==null&&Dc(d,m,v,_,!1),g!==null&&E!==null&&Dc(d,E,g,_,!0)}}e:{if(m=u?Xn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var I=Zv;else if(Cc(m))if(Wf)I=rg;else{I=tg;var N=eg}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(I=ng);if(I&&(I=I(t,u))){Vf(d,I,n,c);break e}N&&N(t,m,u),t==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&za(m,"number",m.value)}switch(N=u?Xn(u):window,t){case"focusin":(Cc(N)||N.contentEditable==="true")&&(Yn=N,Ya=u,ni=null);break;case"focusout":ni=Ya=Yn=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,xc(d,n,c);break;case"selectionchange":if(sg)break;case"keydown":case"keyup":xc(d,n,c)}var P;if(su)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Qn?jf(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(bf&&n.locale!=="ko"&&(Qn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Qn&&(P=zf()):(Ht=c,ru="value"in Ht?Ht.value:Ht.textContent,Qn=!0)),N=Vo(u,C),0<N.length&&(C=new Ic(C,t,null,n,c),d.push({event:C,listeners:N}),P?C.data=P:(P=$f(n),P!==null&&(C.data=P)))),(P=Kv?Qv(t,n):Yv(t,n))&&(u=Vo(u,"onBeforeInput"),0<u.length&&(c=new Ic("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}Zf(d,e)})}function _i(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=fi(t,n),o!=null&&r.unshift(_i(t,o,i)),o=fi(t,e),o!=null&&r.push(_i(t,o,i))),t=t.return}return r}function Hn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dc(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=fi(n,o),l!=null&&s.unshift(_i(n,l,a))):i||(l=fi(n,o),l!=null&&s.push(_i(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var cg=/\r\n?/g,dg=/\u0000|\uFFFD/g;function Mc(t){return(typeof t=="string"?t:""+t).replace(cg,`
`).replace(dg,"")}function io(t,e,n){if(e=Mc(e),Mc(t)!==e&&n)throw Error(T(425))}function Wo(){}var Xa=null,Za=null;function el(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tl=typeof setTimeout=="function"?setTimeout:void 0,fg=typeof clearTimeout=="function"?clearTimeout:void 0,Uc=typeof Promise=="function"?Promise:void 0,hg=typeof queueMicrotask=="function"?queueMicrotask:typeof Uc<"u"?function(t){return Uc.resolve(null).then(t).catch(pg)}:tl;function pg(t){setTimeout(function(){throw t})}function ua(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),mi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mi(e)}function Zt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),dt="__reactFiber$"+Cr,wi="__reactProps$"+Cr,xt="__reactContainer$"+Cr,nl="__reactEvents$"+Cr,mg="__reactListeners$"+Cr,vg="__reactHandles$"+Cr;function In(t){var e=t[dt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xt]||n[dt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fc(t);t!==null;){if(n=t[dt])return n;t=Fc(t)}return e}t=n,n=t.parentNode}return null}function bi(t){return t=t[dt]||t[xt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function ws(t){return t[wi]||null}var rl=[],Zn=-1;function cn(t){return{current:t}}function H(t){0>Zn||(t.current=rl[Zn],rl[Zn]=null,Zn--)}function V(t,e){Zn++,rl[Zn]=t.current,t.current=e}var an={},Ee=cn(an),Ae=cn(!1),xn=an;function vr(t,e){var n=t.type.contextTypes;if(!n)return an;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Le(t){return t=t.childContextTypes,t!=null}function Bo(){H(Ae),H(Ee)}function zc(t,e,n){if(Ee.current!==an)throw Error(T(168));V(Ee,e),V(Ae,n)}function th(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,ev(t)||"Unknown",i));return Q({},n,r)}function Ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||an,xn=Ee.current,V(Ee,t),V(Ae,Ae.current),!0}function bc(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=th(t,e,xn),r.__reactInternalMemoizedMergedChildContext=t,H(Ae),H(Ee),V(Ee,t)):H(Ae),V(Ae,n)}var kt=null,Es=!1,ca=!1;function nh(t){kt===null?kt=[t]:kt.push(t)}function gg(t){Es=!0,nh(t)}function dn(){if(!ca&&kt!==null){ca=!0;var t=0,e=b;try{var n=kt;for(b=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kt=null,Es=!1}catch(i){throw kt!==null&&(kt=kt.slice(t+1)),Rf(Zl,dn),i}finally{b=e,ca=!1}}return null}var er=[],tr=0,qo=null,Go=0,qe=[],Ge=0,An=null,St=1,Tt="";function yn(t,e){er[tr++]=Go,er[tr++]=qo,qo=t,Go=e}function rh(t,e,n){qe[Ge++]=St,qe[Ge++]=Tt,qe[Ge++]=An,An=t;var r=St;t=Tt;var i=32-it(r)-1;r&=~(1<<i),n+=1;var o=32-it(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,St=1<<32-it(e)+i|n<<i|r,Tt=o+t}else St=1<<o|n<<i|r,Tt=t}function lu(t){t.return!==null&&(yn(t,1),rh(t,1,0))}function uu(t){for(;t===qo;)qo=er[--tr],er[tr]=null,Go=er[--tr],er[tr]=null;for(;t===An;)An=qe[--Ge],qe[Ge]=null,Tt=qe[--Ge],qe[Ge]=null,St=qe[--Ge],qe[Ge]=null}var $e=null,be=null,q=!1,rt=null;function ih(t,e){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$e=t,be=Zt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$e=t,be=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=An!==null?{id:St,overflow:Tt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$e=t,be=null,!0):!1;default:return!1}}function il(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ol(t){if(q){var e=be;if(e){var n=e;if(!jc(t,e)){if(il(t))throw Error(T(418));e=Zt(n.nextSibling);var r=$e;e&&jc(t,e)?ih(r,n):(t.flags=t.flags&-4097|2,q=!1,$e=t)}}else{if(il(t))throw Error(T(418));t.flags=t.flags&-4097|2,q=!1,$e=t}}}function $c(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$e=t}function oo(t){if(t!==$e)return!1;if(!q)return $c(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!el(t.type,t.memoizedProps)),e&&(e=be)){if(il(t))throw oh(),Error(T(418));for(;e;)ih(t,e),e=Zt(e.nextSibling)}if($c(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){be=Zt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}be=null}}else be=$e?Zt(t.stateNode.nextSibling):null;return!0}function oh(){for(var t=be;t;)t=Zt(t.nextSibling)}function gr(){be=$e=null,q=!1}function cu(t){rt===null?rt=[t]:rt.push(t)}var yg=Ut.ReactCurrentBatchConfig;function tt(t,e){if(t&&t.defaultProps){e=Q({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ko=cn(null),Qo=null,nr=null,du=null;function fu(){du=nr=Qo=null}function hu(t){var e=Ko.current;H(Ko),t._currentValue=e}function sl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function cr(t,e){Qo=t,du=nr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Oe=!0),t.firstContext=null)}function Ye(t){var e=t._currentValue;if(du!==t)if(t={context:t,memoizedValue:e,next:null},nr===null){if(Qo===null)throw Error(T(308));nr=t,Qo.dependencies={lanes:0,firstContext:t}}else nr=nr.next=t;return e}var kn=null;function pu(t){kn===null?kn=[t]:kn.push(t)}function sh(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,pu(e)):(n.next=i.next,i.next=n),e.interleaved=n,At(t,r)}function At(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vt=!1;function mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ah(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function en(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,At(t,n)}return i=r.interleaved,i===null?(e.next=e,pu(r)):(e.next=i.next,i.next=e),r.interleaved=e,At(t,n)}function Eo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,eu(t,n)}}function Vc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yo(t,e,n,r){var i=t.updateQueue;Vt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var m=a.lane,v=a.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(m=e,v=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(v,d,m);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,m=typeof g=="function"?g.call(v,d,m):g,m==null)break e;d=Q({},d,m);break e;case 2:Vt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Dn|=s,t.lanes=s,t.memoizedState=d}}function Wc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var lh=new sf.Component().refs;function al(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Is={isMounted:function(t){return(t=t._reactInternals)?Wn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Te(),i=nn(t),o=Nt(r,i);o.payload=e,n!=null&&(o.callback=n),e=en(t,o,i),e!==null&&(ot(e,t,i,r),Eo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Te(),i=nn(t),o=Nt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=en(t,o,i),e!==null&&(ot(e,t,i,r),Eo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Te(),r=nn(t),i=Nt(n,r);i.tag=2,e!=null&&(i.callback=e),e=en(t,i,r),e!==null&&(ot(e,t,r,n),Eo(e,t,r))}};function Bc(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!gi(n,r)||!gi(i,o):!0}function uh(t,e,n){var r=!1,i=an,o=e.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(i=Le(e)?xn:Ee.current,r=e.contextTypes,o=(r=r!=null)?vr(t,i):an),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Is,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Hc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Is.enqueueReplaceState(e,e.state,null)}function ll(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=lh,mu(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Ye(o):(o=Le(e)?xn:Ee.current,i.context=vr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(al(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Is.enqueueReplaceState(i,i.state,null),Yo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function jr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===lh&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function so(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qc(t){var e=t._init;return e(t._payload)}function ch(t){function e(h,f){if(t){var p=h.deletions;p===null?(h.deletions=[f],h.flags|=16):p.push(f)}}function n(h,f){if(!t)return null;for(;f!==null;)e(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=rn(h,f),h.index=0,h.sibling=null,h}function o(h,f,p){return h.index=p,t?(p=h.alternate,p!==null?(p=p.index,p<f?(h.flags|=2,f):p):(h.flags|=2,f)):(h.flags|=1048576,f)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,f,p,y){return f===null||f.tag!==6?(f=ga(p,h.mode,y),f.return=h,f):(f=i(f,p),f.return=h,f)}function l(h,f,p,y){var I=p.type;return I===Kn?c(h,f,p.props.children,y,p.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===$t&&qc(I)===f.type)?(y=i(f,p.props),y.ref=jr(h,f,p),y.return=h,y):(y=Ro(p.type,p.key,p.props,null,h.mode,y),y.ref=jr(h,f,p),y.return=h,y)}function u(h,f,p,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=ya(p,h.mode,y),f.return=h,f):(f=i(f,p.children||[]),f.return=h,f)}function c(h,f,p,y,I){return f===null||f.tag!==7?(f=Rn(p,h.mode,y,I),f.return=h,f):(f=i(f,p),f.return=h,f)}function d(h,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ga(""+f,h.mode,p),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qi:return p=Ro(f.type,f.key,f.props,null,h.mode,p),p.ref=jr(h,null,f),p.return=h,p;case Gn:return f=ya(f,h.mode,p),f.return=h,f;case $t:var y=f._init;return d(h,y(f._payload),p)}if(Gr(f)||Mr(f))return f=Rn(f,h.mode,p,null),f.return=h,f;so(h,f)}return null}function m(h,f,p,y){var I=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return I!==null?null:a(h,f,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qi:return p.key===I?l(h,f,p,y):null;case Gn:return p.key===I?u(h,f,p,y):null;case $t:return I=p._init,m(h,f,I(p._payload),y)}if(Gr(p)||Mr(p))return I!==null?null:c(h,f,p,y,null);so(h,p)}return null}function v(h,f,p,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(p)||null,a(f,h,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qi:return h=h.get(y.key===null?p:y.key)||null,l(f,h,y,I);case Gn:return h=h.get(y.key===null?p:y.key)||null,u(f,h,y,I);case $t:var N=y._init;return v(h,f,p,N(y._payload),I)}if(Gr(y)||Mr(y))return h=h.get(p)||null,c(f,h,y,I,null);so(f,y)}return null}function g(h,f,p,y){for(var I=null,N=null,P=f,C=f=0,F=null;P!==null&&C<p.length;C++){P.index>C?(F=P,P=null):F=P.sibling;var L=m(h,P,p[C],y);if(L===null){P===null&&(P=F);break}t&&P&&L.alternate===null&&e(h,P),f=o(L,f,C),N===null?I=L:N.sibling=L,N=L,P=F}if(C===p.length)return n(h,P),q&&yn(h,C),I;if(P===null){for(;C<p.length;C++)P=d(h,p[C],y),P!==null&&(f=o(P,f,C),N===null?I=P:N.sibling=P,N=P);return q&&yn(h,C),I}for(P=r(h,P);C<p.length;C++)F=v(P,h,C,p[C],y),F!==null&&(t&&F.alternate!==null&&P.delete(F.key===null?C:F.key),f=o(F,f,C),N===null?I=F:N.sibling=F,N=F);return t&&P.forEach(function(ne){return e(h,ne)}),q&&yn(h,C),I}function _(h,f,p,y){var I=Mr(p);if(typeof I!="function")throw Error(T(150));if(p=I.call(p),p==null)throw Error(T(151));for(var N=I=null,P=f,C=f=0,F=null,L=p.next();P!==null&&!L.done;C++,L=p.next()){P.index>C?(F=P,P=null):F=P.sibling;var ne=m(h,P,L.value,y);if(ne===null){P===null&&(P=F);break}t&&P&&ne.alternate===null&&e(h,P),f=o(ne,f,C),N===null?I=ne:N.sibling=ne,N=ne,P=F}if(L.done)return n(h,P),q&&yn(h,C),I;if(P===null){for(;!L.done;C++,L=p.next())L=d(h,L.value,y),L!==null&&(f=o(L,f,C),N===null?I=L:N.sibling=L,N=L);return q&&yn(h,C),I}for(P=r(h,P);!L.done;C++,L=p.next())L=v(P,h,C,L.value,y),L!==null&&(t&&L.alternate!==null&&P.delete(L.key===null?C:L.key),f=o(L,f,C),N===null?I=L:N.sibling=L,N=L);return t&&P.forEach(function(se){return e(h,se)}),q&&yn(h,C),I}function E(h,f,p,y){if(typeof p=="object"&&p!==null&&p.type===Kn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qi:e:{for(var I=p.key,N=f;N!==null;){if(N.key===I){if(I=p.type,I===Kn){if(N.tag===7){n(h,N.sibling),f=i(N,p.props.children),f.return=h,h=f;break e}}else if(N.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===$t&&qc(I)===N.type){n(h,N.sibling),f=i(N,p.props),f.ref=jr(h,N,p),f.return=h,h=f;break e}n(h,N);break}else e(h,N);N=N.sibling}p.type===Kn?(f=Rn(p.props.children,h.mode,y,p.key),f.return=h,h=f):(y=Ro(p.type,p.key,p.props,null,h.mode,y),y.ref=jr(h,f,p),y.return=h,h=y)}return s(h);case Gn:e:{for(N=p.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(h,f.sibling),f=i(f,p.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else e(h,f);f=f.sibling}f=ya(p,h.mode,y),f.return=h,h=f}return s(h);case $t:return N=p._init,E(h,f,N(p._payload),y)}if(Gr(p))return g(h,f,p,y);if(Mr(p))return _(h,f,p,y);so(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,p),f.return=h,h=f):(n(h,f),f=ga(p,h.mode,y),f.return=h,h=f),s(h)):n(h,f)}return E}var yr=ch(!0),dh=ch(!1),ji={},yt=cn(ji),Ei=cn(ji),Ii=cn(ji);function Sn(t){if(t===ji)throw Error(T(174));return t}function vu(t,e){switch(V(Ii,e),V(Ei,t),V(yt,ji),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ja(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ja(e,t)}H(yt),V(yt,e)}function _r(){H(yt),H(Ei),H(Ii)}function fh(t){Sn(Ii.current);var e=Sn(yt.current),n=ja(e,t.type);e!==n&&(V(Ei,t),V(yt,n))}function gu(t){Ei.current===t&&(H(yt),H(Ei))}var G=cn(0);function Jo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var da=[];function yu(){for(var t=0;t<da.length;t++)da[t]._workInProgressVersionPrimary=null;da.length=0}var Io=Ut.ReactCurrentDispatcher,fa=Ut.ReactCurrentBatchConfig,Ln=0,K=null,re=null,le=null,Xo=!1,ri=!1,ki=0,_g=0;function ye(){throw Error(T(321))}function _u(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!st(t[n],e[n]))return!1;return!0}function wu(t,e,n,r,i,o){if(Ln=o,K=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Io.current=t===null||t.memoizedState===null?kg:Sg,t=n(r,i),ri){o=0;do{if(ri=!1,ki=0,25<=o)throw Error(T(301));o+=1,le=re=null,e.updateQueue=null,Io.current=Tg,t=n(r,i)}while(ri)}if(Io.current=Zo,e=re!==null&&re.next!==null,Ln=0,le=re=K=null,Xo=!1,e)throw Error(T(300));return t}function Eu(){var t=ki!==0;return ki=0,t}function ct(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?K.memoizedState=le=t:le=le.next=t,le}function Je(){if(re===null){var t=K.alternate;t=t!==null?t.memoizedState:null}else t=re.next;var e=le===null?K.memoizedState:le.next;if(e!==null)le=e,re=t;else{if(t===null)throw Error(T(310));re=t,t={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?K.memoizedState=le=t:le=le.next=t}return le}function Si(t,e){return typeof e=="function"?e(t):e}function ha(t){var e=Je(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Ln&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,K.lanes|=c,Dn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,st(r,e.memoizedState)||(Oe=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,K.lanes|=o,Dn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pa(t){var e=Je(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);st(o,e.memoizedState)||(Oe=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function hh(){}function ph(t,e){var n=K,r=Je(),i=e(),o=!st(r.memoizedState,i);if(o&&(r.memoizedState=i,Oe=!0),r=r.queue,Iu(gh.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Ti(9,vh.bind(null,n,r,i,e),void 0,null),ue===null)throw Error(T(349));Ln&30||mh(n,e,i)}return i}function mh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=K.updateQueue,e===null?(e={lastEffect:null,stores:null},K.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vh(t,e,n,r){e.value=n,e.getSnapshot=r,yh(e)&&_h(t)}function gh(t,e,n){return n(function(){yh(e)&&_h(t)})}function yh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!st(t,n)}catch{return!0}}function _h(t){var e=At(t,1);e!==null&&ot(e,t,1,-1)}function Gc(t){var e=ct();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:t},e.queue=t,t=t.dispatch=Ig.bind(null,K,t),[e.memoizedState,t]}function Ti(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=K.updateQueue,e===null?(e={lastEffect:null,stores:null},K.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function wh(){return Je().memoizedState}function ko(t,e,n,r){var i=ct();K.flags|=t,i.memoizedState=Ti(1|e,n,void 0,r===void 0?null:r)}function ks(t,e,n,r){var i=Je();r=r===void 0?null:r;var o=void 0;if(re!==null){var s=re.memoizedState;if(o=s.destroy,r!==null&&_u(r,s.deps)){i.memoizedState=Ti(e,n,o,r);return}}K.flags|=t,i.memoizedState=Ti(1|e,n,o,r)}function Kc(t,e){return ko(8390656,8,t,e)}function Iu(t,e){return ks(2048,8,t,e)}function Eh(t,e){return ks(4,2,t,e)}function Ih(t,e){return ks(4,4,t,e)}function kh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sh(t,e,n){return n=n!=null?n.concat([t]):null,ks(4,4,kh.bind(null,e,t),n)}function ku(){}function Th(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_u(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ch(t,e){var n=Je();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_u(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Rh(t,e,n){return Ln&21?(st(n,e)||(n=Of(),K.lanes|=n,Dn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Oe=!0),t.memoizedState=n)}function wg(t,e){var n=b;b=n!==0&&4>n?n:4,t(!0);var r=fa.transition;fa.transition={};try{t(!1),e()}finally{b=n,fa.transition=r}}function Nh(){return Je().memoizedState}function Eg(t,e,n){var r=nn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ph(t))Oh(e,n);else if(n=sh(t,e,n,r),n!==null){var i=Te();ot(n,t,r,i),xh(n,e,r)}}function Ig(t,e,n){var r=nn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ph(t))Oh(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,st(a,s)){var l=e.interleaved;l===null?(i.next=i,pu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=sh(t,e,i,r),n!==null&&(i=Te(),ot(n,t,r,i),xh(n,e,r))}}function Ph(t){var e=t.alternate;return t===K||e!==null&&e===K}function Oh(t,e){ri=Xo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xh(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,eu(t,n)}}var Zo={readContext:Ye,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},kg={readContext:Ye,useCallback:function(t,e){return ct().memoizedState=[t,e===void 0?null:e],t},useContext:Ye,useEffect:Kc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ko(4194308,4,kh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return ko(4,2,t,e)},useMemo:function(t,e){var n=ct();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ct();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Eg.bind(null,K,t),[r.memoizedState,t]},useRef:function(t){var e=ct();return t={current:t},e.memoizedState=t},useState:Gc,useDebugValue:ku,useDeferredValue:function(t){return ct().memoizedState=t},useTransition:function(){var t=Gc(!1),e=t[0];return t=wg.bind(null,t[1]),ct().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=K,i=ct();if(q){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),ue===null)throw Error(T(349));Ln&30||mh(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Kc(gh.bind(null,r,o,t),[t]),r.flags|=2048,Ti(9,vh.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=ct(),e=ue.identifierPrefix;if(q){var n=Tt,r=St;n=(r&~(1<<32-it(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ki++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_g++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sg={readContext:Ye,useCallback:Th,useContext:Ye,useEffect:Iu,useImperativeHandle:Sh,useInsertionEffect:Eh,useLayoutEffect:Ih,useMemo:Ch,useReducer:ha,useRef:wh,useState:function(){return ha(Si)},useDebugValue:ku,useDeferredValue:function(t){var e=Je();return Rh(e,re.memoizedState,t)},useTransition:function(){var t=ha(Si)[0],e=Je().memoizedState;return[t,e]},useMutableSource:hh,useSyncExternalStore:ph,useId:Nh,unstable_isNewReconciler:!1},Tg={readContext:Ye,useCallback:Th,useContext:Ye,useEffect:Iu,useImperativeHandle:Sh,useInsertionEffect:Eh,useLayoutEffect:Ih,useMemo:Ch,useReducer:pa,useRef:wh,useState:function(){return pa(Si)},useDebugValue:ku,useDeferredValue:function(t){var e=Je();return re===null?e.memoizedState=t:Rh(e,re.memoizedState,t)},useTransition:function(){var t=pa(Si)[0],e=Je().memoizedState;return[t,e]},useMutableSource:hh,useSyncExternalStore:ph,useId:Nh,unstable_isNewReconciler:!1};function wr(t,e){try{var n="",r=e;do n+=Zm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function ma(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ul(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cg=typeof WeakMap=="function"?WeakMap:Map;function Ah(t,e,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ts||(ts=!0,_l=r),ul(t,e)},n}function Lh(t,e,n){n=Nt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ul(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ul(t,e),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Qc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Cg;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jg.bind(null,t,e,n),e.then(t,t))}function Yc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nt(-1,1),e.tag=2,en(n,e,1))),n.lanes|=1),t)}var Rg=Ut.ReactCurrentOwner,Oe=!1;function Se(t,e,n,r){e.child=t===null?dh(e,null,n,r):yr(e,t.child,n,r)}function Xc(t,e,n,r,i){n=n.render;var o=e.ref;return cr(e,i),r=wu(t,e,n,r,o,i),n=Eu(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(q&&n&&lu(e),e.flags|=1,Se(t,e,r,i),e.child)}function Zc(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!xu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Dh(t,e,o,r,i)):(t=Ro(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:gi,n(s,r)&&t.ref===e.ref)return Lt(t,e,i)}return e.flags|=1,t=rn(o,r),t.ref=e.ref,t.return=e,e.child=t}function Dh(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(gi(o,r)&&t.ref===e.ref)if(Oe=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Oe=!0);else return e.lanes=t.lanes,Lt(t,e,i)}return cl(t,e,n,r,i)}function Mh(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(ir,Fe),Fe|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,V(ir,Fe),Fe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(ir,Fe),Fe|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,V(ir,Fe),Fe|=r;return Se(t,e,i,n),e.child}function Uh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cl(t,e,n,r,i){var o=Le(n)?xn:Ee.current;return o=vr(e,o),cr(e,i),n=wu(t,e,n,r,o,i),r=Eu(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(q&&r&&lu(e),e.flags|=1,Se(t,e,n,i),e.child)}function ed(t,e,n,r,i){if(Le(n)){var o=!0;Ho(e)}else o=!1;if(cr(e,i),e.stateNode===null)So(t,e),uh(e,n,r),ll(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Le(n)?xn:Ee.current,u=vr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hc(e,s,r,u),Vt=!1;var m=e.memoizedState;s.state=m,Yo(e,r,s,i),l=e.memoizedState,a!==r||m!==l||Ae.current||Vt?(typeof c=="function"&&(al(e,n,c,r),l=e.memoizedState),(a=Vt||Bc(e,n,a,r,m,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,ah(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:tt(e.type,a),s.props=u,d=e.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ye(l):(l=Le(n)?xn:Ee.current,l=vr(e,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||m!==l)&&Hc(e,s,r,l),Vt=!1,m=e.memoizedState,s.state=m,Yo(e,r,s,i);var g=e.memoizedState;a!==d||m!==g||Ae.current||Vt?(typeof v=="function"&&(al(e,n,v,r),g=e.memoizedState),(u=Vt||Bc(e,n,u,r,m,g,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),s.props=r,s.state=g,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return dl(t,e,n,r,o,i)}function dl(t,e,n,r,i,o){Uh(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&bc(e,n,!1),Lt(t,e,o);r=e.stateNode,Rg.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=yr(e,t.child,null,o),e.child=yr(e,null,a,o)):Se(t,e,a,o),e.memoizedState=r.state,i&&bc(e,n,!0),e.child}function Fh(t){var e=t.stateNode;e.pendingContext?zc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zc(t,e.context,!1),vu(t,e.containerInfo)}function td(t,e,n,r,i){return gr(),cu(i),e.flags|=256,Se(t,e,n,r),e.child}var fl={dehydrated:null,treeContext:null,retryLane:0};function hl(t){return{baseLanes:t,cachePool:null,transitions:null}}function zh(t,e,n){var r=e.pendingProps,i=G.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),V(G,i&1),t===null)return ol(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Cs(s,r,0,null),t=Rn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=hl(n),e.memoizedState=fl,t):Su(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ng(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=rn(a,o):(o=Rn(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?hl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=fl,r}return o=t.child,t=o.sibling,r=rn(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Su(t,e){return e=Cs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ao(t,e,n,r){return r!==null&&cu(r),yr(e,t.child,null,n),t=Su(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ng(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=ma(Error(T(422))),ao(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Cs({mode:"visible",children:r.children},i,0,null),o=Rn(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&yr(e,t.child,null,s),e.child.memoizedState=hl(s),e.memoizedState=fl,o);if(!(e.mode&1))return ao(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(T(419)),r=ma(o,r,void 0),ao(t,e,s,r)}if(a=(s&t.childLanes)!==0,Oe||a){if(r=ue,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,At(t,i),ot(r,t,i,-1))}return Ou(),r=ma(Error(T(421))),ao(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$g.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,be=Zt(i.nextSibling),$e=e,q=!0,rt=null,t!==null&&(qe[Ge++]=St,qe[Ge++]=Tt,qe[Ge++]=An,St=t.id,Tt=t.overflow,An=e),e=Su(e,r.children),e.flags|=4096,e)}function nd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),sl(t.return,e,n)}function va(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function bh(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Se(t,e,r.children,n),r=G.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nd(t,n,e);else if(t.tag===19)nd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(V(G,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Jo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),va(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Jo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}va(e,!0,n,null,o);break;case"together":va(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function So(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=rn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Pg(t,e,n){switch(e.tag){case 3:Fh(e),gr();break;case 5:fh(e);break;case 1:Le(e.type)&&Ho(e);break;case 4:vu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;V(Ko,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(V(G,G.current&1),e.flags|=128,null):n&e.child.childLanes?zh(t,e,n):(V(G,G.current&1),t=Lt(t,e,n),t!==null?t.sibling:null);V(G,G.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return bh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(G,G.current),r)break;return null;case 22:case 23:return e.lanes=0,Mh(t,e,n)}return Lt(t,e,n)}var jh,pl,$h,Vh;jh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pl=function(){};$h=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Sn(yt.current);var o=null;switch(n){case"input":i=Ua(t,i),r=Ua(t,r),o=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":i=ba(t,i),r=ba(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Wo)}$a(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ci.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ci.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&W("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Vh=function(t,e,n,r){n!==r&&(e.flags|=4)};function $r(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Og(t,e,n){var r=e.pendingProps;switch(uu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(e),null;case 1:return Le(e.type)&&Bo(),_e(e),null;case 3:return r=e.stateNode,_r(),H(Ae),H(Ee),yu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rt!==null&&(Il(rt),rt=null))),pl(t,e),_e(e),null;case 5:gu(e);var i=Sn(Ii.current);if(n=e.type,t!==null&&e.stateNode!=null)$h(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return _e(e),null}if(t=Sn(yt.current),oo(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[dt]=e,r[wi]=o,t=(e.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Qr.length;i++)W(Qr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":dc(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":hc(r,o),W("invalid",r)}$a(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&io(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&io(r.textContent,a,t),i=["children",""+a]):ci.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&W("scroll",r)}switch(n){case"input":Yi(r),fc(r,o,!0);break;case"textarea":Yi(r),pc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Wo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[dt]=e,t[wi]=r,jh(t,e,!1,!1),e.stateNode=t;e:{switch(s=Va(n,r),n){case"dialog":W("cancel",t),W("close",t),i=r;break;case"iframe":case"object":case"embed":W("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qr.length;i++)W(Qr[i],t);i=r;break;case"source":W("error",t),i=r;break;case"img":case"image":case"link":W("error",t),W("load",t),i=r;break;case"details":W("toggle",t),i=r;break;case"input":dc(t,r),i=Ua(t,r),W("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),W("invalid",t);break;case"textarea":hc(t,r),i=ba(t,r),W("invalid",t);break;default:i=r}$a(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?yf(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vf(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&di(t,l):typeof l=="number"&&di(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ci.hasOwnProperty(o)?l!=null&&o==="onScroll"&&W("scroll",t):l!=null&&Kl(t,o,l,s))}switch(n){case"input":Yi(t),fc(t,r,!1);break;case"textarea":Yi(t),pc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+sn(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?sr(t,!!r.multiple,o,!1):r.defaultValue!=null&&sr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _e(e),null;case 6:if(t&&e.stateNode!=null)Vh(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=Sn(Ii.current),Sn(yt.current),oo(e)){if(r=e.stateNode,n=e.memoizedProps,r[dt]=e,(o=r.nodeValue!==n)&&(t=$e,t!==null))switch(t.tag){case 3:io(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&io(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=e,e.stateNode=r}return _e(e),null;case 13:if(H(G),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&be!==null&&e.mode&1&&!(e.flags&128))oh(),gr(),e.flags|=98560,o=!1;else if(o=oo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(T(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[dt]=e}else gr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_e(e),o=!1}else rt!==null&&(Il(rt),rt=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||G.current&1?oe===0&&(oe=3):Ou())),e.updateQueue!==null&&(e.flags|=4),_e(e),null);case 4:return _r(),pl(t,e),t===null&&yi(e.stateNode.containerInfo),_e(e),null;case 10:return hu(e.type._context),_e(e),null;case 17:return Le(e.type)&&Bo(),_e(e),null;case 19:if(H(G),o=e.memoizedState,o===null)return _e(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)$r(o,!1);else{if(oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Jo(t),s!==null){for(e.flags|=128,$r(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return V(G,G.current&1|2),e.child}t=t.sibling}o.tail!==null&&X()>Er&&(e.flags|=128,r=!0,$r(o,!1),e.lanes=4194304)}else{if(!r)if(t=Jo(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$r(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return _e(e),null}else 2*X()-o.renderingStartTime>Er&&n!==1073741824&&(e.flags|=128,r=!0,$r(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=X(),e.sibling=null,n=G.current,V(G,r?n&1|2:n&1),e):(_e(e),null);case 22:case 23:return Pu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Fe&1073741824&&(_e(e),e.subtreeFlags&6&&(e.flags|=8192)):_e(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function xg(t,e){switch(uu(e),e.tag){case 1:return Le(e.type)&&Bo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _r(),H(Ae),H(Ee),yu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gu(e),null;case 13:if(H(G),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));gr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return H(G),null;case 4:return _r(),null;case 10:return hu(e.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var lo=!1,we=!1,Ag=typeof WeakSet=="function"?WeakSet:Set,x=null;function rr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(t,e,r)}else n.current=null}function ml(t,e,n){try{n()}catch(r){Y(t,e,r)}}var rd=!1;function Lg(t,e){if(Xa=jo,t=qf(),au(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=t,m=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)m=d,d=v;for(;;){if(d===t)break t;if(m===n&&++u===i&&(a=s),m===o&&++c===r&&(l=s),(v=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Za={focusedElem:t,selectionRange:n},jo=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,E=g.memoizedState,h=e.stateNode,f=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:tt(e.type,_),E);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(y){Y(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return g=rd,rd=!1,g}function ii(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&ml(e,n,o)}i=i.next}while(i!==r)}}function Ss(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wh(t){var e=t.alternate;e!==null&&(t.alternate=null,Wh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dt],delete e[wi],delete e[nl],delete e[mg],delete e[vg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bh(t){return t.tag===5||t.tag===3||t.tag===4}function id(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wo));else if(r!==4&&(t=t.child,t!==null))for(gl(t,e,n),t=t.sibling;t!==null;)gl(t,e,n),t=t.sibling}function yl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yl(t,e,n),t=t.sibling;t!==null;)yl(t,e,n),t=t.sibling}var he=null,nt=!1;function zt(t,e,n){for(n=n.child;n!==null;)Hh(t,e,n),n=n.sibling}function Hh(t,e,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(vs,n)}catch{}switch(n.tag){case 5:we||rr(n,e);case 6:var r=he,i=nt;he=null,zt(t,e,n),he=r,nt=i,he!==null&&(nt?(t=he,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(nt?(t=he,n=n.stateNode,t.nodeType===8?ua(t.parentNode,n):t.nodeType===1&&ua(t,n),mi(t)):ua(he,n.stateNode));break;case 4:r=he,i=nt,he=n.stateNode.containerInfo,nt=!0,zt(t,e,n),he=r,nt=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ml(n,e,s),i=i.next}while(i!==r)}zt(t,e,n);break;case 1:if(!we&&(rr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,e,a)}zt(t,e,n);break;case 21:zt(t,e,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,zt(t,e,n),we=r):zt(t,e,n);break;default:zt(t,e,n)}}function od(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ag),e.forEach(function(r){var i=Vg.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,nt=!1;break e;case 3:he=a.stateNode.containerInfo,nt=!0;break e;case 4:he=a.stateNode.containerInfo,nt=!0;break e}a=a.return}if(he===null)throw Error(T(160));Hh(o,s,i),he=null,nt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Y(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qh(e,t),e=e.sibling}function qh(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ze(e,t),lt(t),r&4){try{ii(3,t,t.return),Ss(3,t)}catch(_){Y(t,t.return,_)}try{ii(5,t,t.return)}catch(_){Y(t,t.return,_)}}break;case 1:Ze(e,t),lt(t),r&512&&n!==null&&rr(n,n.return);break;case 5:if(Ze(e,t),lt(t),r&512&&n!==null&&rr(n,n.return),t.flags&32){var i=t.stateNode;try{di(i,"")}catch(_){Y(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&hf(i,o),Va(a,s);var u=Va(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?yf(i,d):c==="dangerouslySetInnerHTML"?vf(i,d):c==="children"?di(i,d):Kl(i,c,d,u)}switch(a){case"input":Fa(i,o);break;case"textarea":pf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?sr(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?sr(i,!!o.multiple,o.defaultValue,!0):sr(i,!!o.multiple,o.multiple?[]:"",!1))}i[wi]=o}catch(_){Y(t,t.return,_)}}break;case 6:if(Ze(e,t),lt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(_){Y(t,t.return,_)}}break;case 3:if(Ze(e,t),lt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mi(e.containerInfo)}catch(_){Y(t,t.return,_)}break;case 4:Ze(e,t),lt(t);break;case 13:Ze(e,t),lt(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ru=X())),r&4&&od(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(we=(u=we)||c,Ze(e,t),we=u):Ze(e,t),lt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(x=t,c=t.child;c!==null;){for(d=x=c;x!==null;){switch(m=x,v=m.child,m.tag){case 0:case 11:case 14:case 15:ii(4,m,m.return);break;case 1:rr(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Y(r,n,_)}}break;case 5:rr(m,m.return);break;case 22:if(m.memoizedState!==null){ad(d);continue}}v!==null?(v.return=m,x=v):ad(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gf("display",s))}catch(_){Y(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Y(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ze(e,t),lt(t),r&4&&od(t);break;case 21:break;default:Ze(e,t),lt(t)}}function lt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Bh(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(di(i,""),r.flags&=-33);var o=id(t);yl(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=id(t);gl(t,a,s);break;default:throw Error(T(161))}}catch(l){Y(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dg(t,e,n){x=t,Gh(t)}function Gh(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||lo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||we;a=lo;var u=we;if(lo=s,(we=l)&&!u)for(x=i;x!==null;)s=x,l=s.child,s.tag===22&&s.memoizedState!==null?ld(i):l!==null?(l.return=s,x=l):ld(i);for(;o!==null;)x=o,Gh(o),o=o.sibling;x=i,lo=a,we=u}sd(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,x=o):sd(t)}}function sd(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:we||Ss(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Wc(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wc(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&mi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}we||e.flags&512&&vl(e)}catch(m){Y(e,e.return,m)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function ad(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function ld(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ss(4,e)}catch(l){Y(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Y(e,i,l)}}var o=e.return;try{vl(e)}catch(l){Y(e,o,l)}break;case 5:var s=e.return;try{vl(e)}catch(l){Y(e,s,l)}}}catch(l){Y(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var Mg=Math.ceil,es=Ut.ReactCurrentDispatcher,Tu=Ut.ReactCurrentOwner,Qe=Ut.ReactCurrentBatchConfig,z=0,ue=null,Z=null,pe=0,Fe=0,ir=cn(0),oe=0,Ci=null,Dn=0,Ts=0,Cu=0,oi=null,Pe=null,Ru=0,Er=1/0,It=null,ts=!1,_l=null,tn=null,uo=!1,qt=null,ns=0,si=0,wl=null,To=-1,Co=0;function Te(){return z&6?X():To!==-1?To:To=X()}function nn(t){return t.mode&1?z&2&&pe!==0?pe&-pe:yg.transition!==null?(Co===0&&(Co=Of()),Co):(t=b,t!==0||(t=window.event,t=t===void 0?16:Ff(t.type)),t):1}function ot(t,e,n,r){if(50<si)throw si=0,wl=null,Error(T(185));Fi(t,n,r),(!(z&2)||t!==ue)&&(t===ue&&(!(z&2)&&(Ts|=n),oe===4&&Bt(t,pe)),De(t,r),n===1&&z===0&&!(e.mode&1)&&(Er=X()+500,Es&&dn()))}function De(t,e){var n=t.callbackNode;yv(t,e);var r=bo(t,t===ue?pe:0);if(r===0)n!==null&&gc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&gc(n),e===1)t.tag===0?gg(ud.bind(null,t)):nh(ud.bind(null,t)),hg(function(){!(z&6)&&dn()}),n=null;else{switch(xf(r)){case 1:n=Zl;break;case 4:n=Nf;break;case 16:n=zo;break;case 536870912:n=Pf;break;default:n=zo}n=tp(n,Kh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kh(t,e){if(To=-1,Co=0,z&6)throw Error(T(327));var n=t.callbackNode;if(dr()&&t.callbackNode!==n)return null;var r=bo(t,t===ue?pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=rs(t,r);else{e=r;var i=z;z|=2;var o=Yh();(ue!==t||pe!==e)&&(It=null,Er=X()+500,Cn(t,e));do try{zg();break}catch(a){Qh(t,a)}while(1);fu(),es.current=o,z=i,Z!==null?e=0:(ue=null,pe=0,e=oe)}if(e!==0){if(e===2&&(i=Ga(t),i!==0&&(r=i,e=El(t,i))),e===1)throw n=Ci,Cn(t,0),Bt(t,r),De(t,X()),n;if(e===6)Bt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ug(i)&&(e=rs(t,r),e===2&&(o=Ga(t),o!==0&&(r=o,e=El(t,o))),e===1))throw n=Ci,Cn(t,0),Bt(t,r),De(t,X()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:_n(t,Pe,It);break;case 3:if(Bt(t,r),(r&130023424)===r&&(e=Ru+500-X(),10<e)){if(bo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Te(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=tl(_n.bind(null,t,Pe,It),e);break}_n(t,Pe,It);break;case 4:if(Bt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-it(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mg(r/1960))-r,10<r){t.timeoutHandle=tl(_n.bind(null,t,Pe,It),r);break}_n(t,Pe,It);break;case 5:_n(t,Pe,It);break;default:throw Error(T(329))}}}return De(t,X()),t.callbackNode===n?Kh.bind(null,t):null}function El(t,e){var n=oi;return t.current.memoizedState.isDehydrated&&(Cn(t,e).flags|=256),t=rs(t,e),t!==2&&(e=Pe,Pe=n,e!==null&&Il(e)),t}function Il(t){Pe===null?Pe=t:Pe.push.apply(Pe,t)}function Ug(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!st(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bt(t,e){for(e&=~Cu,e&=~Ts,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-it(e),r=1<<n;t[n]=-1,e&=~r}}function ud(t){if(z&6)throw Error(T(327));dr();var e=bo(t,0);if(!(e&1))return De(t,X()),null;var n=rs(t,e);if(t.tag!==0&&n===2){var r=Ga(t);r!==0&&(e=r,n=El(t,r))}if(n===1)throw n=Ci,Cn(t,0),Bt(t,e),De(t,X()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_n(t,Pe,It),De(t,X()),null}function Nu(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Er=X()+500,Es&&dn())}}function Mn(t){qt!==null&&qt.tag===0&&!(z&6)&&dr();var e=z;z|=1;var n=Qe.transition,r=b;try{if(Qe.transition=null,b=1,t)return t()}finally{b=r,Qe.transition=n,z=e,!(z&6)&&dn()}}function Pu(){Fe=ir.current,H(ir)}function Cn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fg(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(uu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bo();break;case 3:_r(),H(Ae),H(Ee),yu();break;case 5:gu(r);break;case 4:_r();break;case 13:H(G);break;case 19:H(G);break;case 10:hu(r.type._context);break;case 22:case 23:Pu()}n=n.return}if(ue=t,Z=t=rn(t.current,null),pe=Fe=e,oe=0,Ci=null,Cu=Ts=Dn=0,Pe=oi=null,kn!==null){for(e=0;e<kn.length;e++)if(n=kn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}kn=null}return t}function Qh(t,e){do{var n=Z;try{if(fu(),Io.current=Zo,Xo){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xo=!1}if(Ln=0,le=re=K=null,ri=!1,ki=0,Tu.current=null,n===null||n.return===null){oe=1,Ci=e,Z=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Yc(s);if(v!==null){v.flags&=-257,Jc(v,s,a,o,e),v.mode&1&&Qc(o,u,e),e=v,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Qc(o,u,e),Ou();break e}l=Error(T(426))}}else if(q&&a.mode&1){var E=Yc(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Jc(E,s,a,o,e),cu(wr(l,a));break e}}o=l=wr(l,a),oe!==4&&(oe=2),oi===null?oi=[o]:oi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=Ah(o,l,e);Vc(o,h);break e;case 1:a=l;var f=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(tn===null||!tn.has(p)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=Lh(o,a,e);Vc(o,y);break e}}o=o.return}while(o!==null)}Xh(n)}catch(I){e=I,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function Yh(){var t=es.current;return es.current=Zo,t===null?Zo:t}function Ou(){(oe===0||oe===3||oe===2)&&(oe=4),ue===null||!(Dn&268435455)&&!(Ts&268435455)||Bt(ue,pe)}function rs(t,e){var n=z;z|=2;var r=Yh();(ue!==t||pe!==e)&&(It=null,Cn(t,e));do try{Fg();break}catch(i){Qh(t,i)}while(1);if(fu(),z=n,es.current=r,Z!==null)throw Error(T(261));return ue=null,pe=0,oe}function Fg(){for(;Z!==null;)Jh(Z)}function zg(){for(;Z!==null&&!uv();)Jh(Z)}function Jh(t){var e=ep(t.alternate,t,Fe);t.memoizedProps=t.pendingProps,e===null?Xh(t):Z=e,Tu.current=null}function Xh(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xg(n,e),n!==null){n.flags&=32767,Z=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{oe=6,Z=null;return}}else if(n=Og(n,e,Fe),n!==null){Z=n;return}if(e=e.sibling,e!==null){Z=e;return}Z=e=t}while(e!==null);oe===0&&(oe=5)}function _n(t,e,n){var r=b,i=Qe.transition;try{Qe.transition=null,b=1,bg(t,e,n,r)}finally{Qe.transition=i,b=r}return null}function bg(t,e,n,r){do dr();while(qt!==null);if(z&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(_v(t,o),t===ue&&(Z=ue=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,tp(zo,function(){return dr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Qe.transition,Qe.transition=null;var s=b;b=1;var a=z;z|=4,Tu.current=null,Lg(t,n),qh(n,t),og(Za),jo=!!Xa,Za=Xa=null,t.current=n,Dg(n),cv(),z=a,b=s,Qe.transition=o}else t.current=n;if(uo&&(uo=!1,qt=t,ns=i),o=t.pendingLanes,o===0&&(tn=null),hv(n.stateNode),De(t,X()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ts)throw ts=!1,t=_l,_l=null,t;return ns&1&&t.tag!==0&&dr(),o=t.pendingLanes,o&1?t===wl?si++:(si=0,wl=t):si=0,dn(),null}function dr(){if(qt!==null){var t=xf(ns),e=Qe.transition,n=b;try{if(Qe.transition=null,b=16>t?16:t,qt===null)var r=!1;else{if(t=qt,qt=null,ns=0,z&6)throw Error(T(331));var i=z;for(z|=4,x=t.current;x!==null;){var o=x,s=o.child;if(x.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:ii(8,c,o)}var d=c.child;if(d!==null)d.return=c,x=d;else for(;x!==null;){c=x;var m=c.sibling,v=c.return;if(Wh(c),c===u){x=null;break}if(m!==null){m.return=v,x=m;break}x=v}}}var g=o.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}x=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,x=s;else e:for(;x!==null;){if(o=x,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ii(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,x=h;break e}x=o.return}}var f=t.current;for(x=f;x!==null;){s=x;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,x=p;else e:for(s=f;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ss(9,a)}}catch(I){Y(a,a.return,I)}if(a===s){x=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,x=y;break e}x=a.return}}if(z=i,dn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(vs,t)}catch{}r=!0}return r}finally{b=n,Qe.transition=e}}return!1}function cd(t,e,n){e=wr(n,e),e=Ah(t,e,1),t=en(t,e,1),e=Te(),t!==null&&(Fi(t,1,e),De(t,e))}function Y(t,e,n){if(t.tag===3)cd(t,t,n);else for(;e!==null;){if(e.tag===3){cd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){t=wr(n,t),t=Lh(e,t,1),e=en(e,t,1),t=Te(),e!==null&&(Fi(e,1,t),De(e,t));break}}e=e.return}}function jg(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Te(),t.pingedLanes|=t.suspendedLanes&n,ue===t&&(pe&n)===n&&(oe===4||oe===3&&(pe&130023424)===pe&&500>X()-Ru?Cn(t,0):Cu|=n),De(t,e)}function Zh(t,e){e===0&&(t.mode&1?(e=Zi,Zi<<=1,!(Zi&130023424)&&(Zi=4194304)):e=1);var n=Te();t=At(t,e),t!==null&&(Fi(t,e,n),De(t,n))}function $g(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zh(t,n)}function Vg(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),Zh(t,n)}var ep;ep=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ae.current)Oe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Oe=!1,Pg(t,e,n);Oe=!!(t.flags&131072)}else Oe=!1,q&&e.flags&1048576&&rh(e,Go,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;So(t,e),t=e.pendingProps;var i=vr(e,Ee.current);cr(e,n),i=wu(null,e,r,t,i,n);var o=Eu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Le(r)?(o=!0,Ho(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mu(e),i.updater=Is,e.stateNode=i,i._reactInternals=e,ll(e,r,t,n),e=dl(null,e,r,!0,o,n)):(e.tag=0,q&&o&&lu(e),Se(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(So(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Bg(r),t=tt(r,t),i){case 0:e=cl(null,e,r,t,n);break e;case 1:e=ed(null,e,r,t,n);break e;case 11:e=Xc(null,e,r,t,n);break e;case 14:e=Zc(null,e,r,tt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),cl(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),ed(t,e,r,i,n);case 3:e:{if(Fh(e),t===null)throw Error(T(387));r=e.pendingProps,o=e.memoizedState,i=o.element,ah(t,e),Yo(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=wr(Error(T(423)),e),e=td(t,e,r,n,i);break e}else if(r!==i){i=wr(Error(T(424)),e),e=td(t,e,r,n,i);break e}else for(be=Zt(e.stateNode.containerInfo.firstChild),$e=e,q=!0,rt=null,n=dh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gr(),r===i){e=Lt(t,e,n);break e}Se(t,e,r,n)}e=e.child}return e;case 5:return fh(e),t===null&&ol(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,el(r,i)?s=null:o!==null&&el(r,o)&&(e.flags|=32),Uh(t,e),Se(t,e,s,n),e.child;case 6:return t===null&&ol(e),null;case 13:return zh(t,e,n);case 4:return vu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=yr(e,null,r,n):Se(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Xc(t,e,r,i,n);case 7:return Se(t,e,e.pendingProps,n),e.child;case 8:return Se(t,e,e.pendingProps.children,n),e.child;case 12:return Se(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,V(Ko,r._currentValue),r._currentValue=s,o!==null)if(st(o.value,s)){if(o.children===i.children&&!Ae.current){e=Lt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Nt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),sl(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(T(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),sl(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Se(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,cr(e,n),i=Ye(i),r=r(i),e.flags|=1,Se(t,e,r,n),e.child;case 14:return r=e.type,i=tt(r,e.pendingProps),i=tt(r.type,i),Zc(t,e,r,i,n);case 15:return Dh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),So(t,e),e.tag=1,Le(r)?(t=!0,Ho(e)):t=!1,cr(e,n),uh(e,r,i),ll(e,r,i,n),dl(null,e,r,!0,t,n);case 19:return bh(t,e,n);case 22:return Mh(t,e,n)}throw Error(T(156,e.tag))};function tp(t,e){return Rf(t,e)}function Wg(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(t,e,n,r){return new Wg(t,e,n,r)}function xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bg(t){if(typeof t=="function")return xu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yl)return 11;if(t===Jl)return 14}return 2}function rn(t,e){var n=t.alternate;return n===null?(n=Ke(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ro(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")xu(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Kn:return Rn(n.children,i,o,e);case Ql:s=8,i|=8;break;case Aa:return t=Ke(12,n,e,i|2),t.elementType=Aa,t.lanes=o,t;case La:return t=Ke(13,n,e,i),t.elementType=La,t.lanes=o,t;case Da:return t=Ke(19,n,e,i),t.elementType=Da,t.lanes=o,t;case cf:return Cs(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lf:s=10;break e;case uf:s=9;break e;case Yl:s=11;break e;case Jl:s=14;break e;case $t:s=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=Ke(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Rn(t,e,n,r){return t=Ke(7,t,r,e),t.lanes=n,t}function Cs(t,e,n,r){return t=Ke(22,t,r,e),t.elementType=cf,t.lanes=n,t.stateNode={isHidden:!1},t}function ga(t,e,n){return t=Ke(6,t,null,e),t.lanes=n,t}function ya(t,e,n){return e=Ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hg(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xs(0),this.expirationTimes=Xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Au(t,e,n,r,i,o,s,a,l){return t=new Hg(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ke(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mu(o),t}function qg(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function np(t){if(!t)return an;t=t._reactInternals;e:{if(Wn(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Le(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(Le(n))return th(t,n,e)}return e}function rp(t,e,n,r,i,o,s,a,l){return t=Au(n,r,!0,t,i,o,s,a,l),t.context=np(null),n=t.current,r=Te(),i=nn(n),o=Nt(r,i),o.callback=e??null,en(n,o,i),t.current.lanes=i,Fi(t,i,r),De(t,r),t}function Rs(t,e,n,r){var i=e.current,o=Te(),s=nn(i);return n=np(n),e.context===null?e.context=n:e.pendingContext=n,e=Nt(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=en(i,e,s),t!==null&&(ot(t,i,s,o),Eo(t,i,s)),s}function is(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lu(t,e){dd(t,e),(t=t.alternate)&&dd(t,e)}function Gg(){return null}var ip=typeof reportError=="function"?reportError:function(t){console.error(t)};function Du(t){this._internalRoot=t}Ns.prototype.render=Du.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Rs(t,e,null,null)};Ns.prototype.unmount=Du.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mn(function(){Rs(null,t,null,null)}),e[xt]=null}};function Ns(t){this._internalRoot=t}Ns.prototype.unstable_scheduleHydration=function(t){if(t){var e=Df();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wt.length&&e!==0&&e<Wt[n].priority;n++);Wt.splice(n,0,t),n===0&&Uf(t)}};function Mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ps(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fd(){}function Kg(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=is(s);o.call(u)}}var s=rp(e,r,t,0,null,!1,!1,"",fd);return t._reactRootContainer=s,t[xt]=s.current,yi(t.nodeType===8?t.parentNode:t),Mn(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=is(l);a.call(u)}}var l=Au(t,0,!1,null,null,!1,!1,"",fd);return t._reactRootContainer=l,t[xt]=l.current,yi(t.nodeType===8?t.parentNode:t),Mn(function(){Rs(e,l,n,r)}),l}function Os(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=is(s);a.call(l)}}Rs(e,s,t,i)}else s=Kg(n,e,t,i,r);return is(s)}Af=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Kr(e.pendingLanes);n!==0&&(eu(e,n|1),De(e,X()),!(z&6)&&(Er=X()+500,dn()))}break;case 13:Mn(function(){var r=At(t,1);if(r!==null){var i=Te();ot(r,t,1,i)}}),Lu(t,1)}};tu=function(t){if(t.tag===13){var e=At(t,134217728);if(e!==null){var n=Te();ot(e,t,134217728,n)}Lu(t,134217728)}};Lf=function(t){if(t.tag===13){var e=nn(t),n=At(t,e);if(n!==null){var r=Te();ot(n,t,e,r)}Lu(t,e)}};Df=function(){return b};Mf=function(t,e){var n=b;try{return b=t,e()}finally{b=n}};Ba=function(t,e,n){switch(e){case"input":if(Fa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ws(r);if(!i)throw Error(T(90));ff(r),Fa(r,i)}}}break;case"textarea":pf(t,n);break;case"select":e=n.value,e!=null&&sr(t,!!n.multiple,e,!1)}};Ef=Nu;If=Mn;var Qg={usingClientEntryPoint:!1,Events:[bi,Xn,ws,_f,wf,Nu]},Vr={findFiberByHostInstance:In,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Yg={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tf(t),t===null?null:t.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||Gg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{vs=co.inject(Yg),gt=co}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qg;We.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mu(e))throw Error(T(200));return qg(t,e,null,n)};We.createRoot=function(t,e){if(!Mu(t))throw Error(T(299));var n=!1,r="",i=ip;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Au(t,1,!1,null,null,n,!1,r,i),t[xt]=e.current,yi(t.nodeType===8?t.parentNode:t),new Du(e)};We.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=Tf(e),t=t===null?null:t.stateNode,t};We.flushSync=function(t){return Mn(t)};We.hydrate=function(t,e,n){if(!Ps(e))throw Error(T(200));return Os(null,t,e,!0,n)};We.hydrateRoot=function(t,e,n){if(!Mu(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=ip;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=rp(e,null,t,1,n??null,i,!1,o,s),t[xt]=e.current,yi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ns(e)};We.render=function(t,e,n){if(!Ps(e))throw Error(T(200));return Os(null,t,e,!1,n)};We.unmountComponentAtNode=function(t){if(!Ps(t))throw Error(T(40));return t._reactRootContainer?(Mn(function(){Os(null,null,t,!1,function(){t._reactRootContainer=null,t[xt]=null})}),!0):!1};We.unstable_batchedUpdates=Nu;We.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ps(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Os(t,e,n,!1,r)};We.version="18.2.0-next-9e3b772b8-20220608";function op(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(op)}catch(t){console.error(t)}}op(),nf.exports=We;var Jg=nf.exports,hd=Jg;Oa.createRoot=hd.createRoot,Oa.hydrateRoot=hd.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ri(){return Ri=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ri.apply(this,arguments)}var Gt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gt||(Gt={}));const pd="popstate";function Xg(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return kl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:os(i)}return ey(e,n,null,t)}function ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Uu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Zg(){return Math.random().toString(36).substr(2,8)}function md(t,e){return{usr:t.state,key:t.key,idx:e}}function kl(t,e,n,r){return n===void 0&&(n=null),Ri({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Rr(e):e,{state:n,key:e&&e.key||r||Zg()})}function os(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Rr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ey(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Gt.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Ri({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=Gt.Pop;let E=c(),h=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:h})}function m(E,h){a=Gt.Push;let f=kl(_.location,E,h);n&&n(f,E),u=c()+1;let p=md(f,u),y=_.createHref(f);try{s.pushState(p,"",y)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(y)}o&&l&&l({action:a,location:_.location,delta:1})}function v(E,h){a=Gt.Replace;let f=kl(_.location,E,h);n&&n(f,E),u=c();let p=md(f,u),y=_.createHref(f);s.replaceState(p,"",y),o&&l&&l({action:a,location:_.location,delta:0})}function g(E){let h=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:os(E);return ee(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let _={get action(){return a},get location(){return t(i,s)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(pd,d),l=E,()=>{i.removeEventListener(pd,d),l=null}},createHref(E){return e(i,E)},createURL:g,encodeLocation(E){let h=g(E);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:v,go(E){return s.go(E)}};return _}var vd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(vd||(vd={}));function ty(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Rr(e):e,i=Fu(r.pathname||"/",n);if(i==null)return null;let o=sp(t);ny(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=dy(o[a],py(i));return s}function sp(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=on([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sp(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:uy(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of ap(o.path))i(o,s,l)}),e}function ap(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=ap(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ny(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cy(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ry=/^:\w+$/,iy=3,oy=2,sy=1,ay=10,ly=-2,gd=t=>t==="*";function uy(t,e){let n=t.split("/"),r=n.length;return n.some(gd)&&(r+=ly),e&&(r+=oy),n.filter(i=>!gd(i)).reduce((i,o)=>i+(ry.test(o)?iy:o===""?sy:ay),r)}function cy(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function dy(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=fy({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;o.push({params:r,pathname:on([i,c.pathname]),pathnameBase:yy(on([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=on([i,c.pathnameBase]))}return o}function fy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=hy(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let m=a[d]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[c]=my(a[d]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:t}}function hy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Uu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function py(t){try{return decodeURI(t)}catch(e){return Uu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function my(t,e){try{return decodeURIComponent(t)}catch(n){return Uu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Fu(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function vy(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Rr(t):t;return{pathname:n?n.startsWith("/")?n:gy(n,e):e,search:_y(r),hash:wy(i)}}function gy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _a(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function up(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Rr(t):(i=Ri({},t),ee(!i.pathname||!i.pathname.includes("?"),_a("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),_a("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),_a("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let d=e.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}a=d>=0?e[d]:"/"}let l=vy(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const on=t=>t.join("/").replace(/\/\/+/g,"/"),yy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_y=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,wy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ey(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const cp=["post","put","patch","delete"];new Set(cp);const Iy=["get",...cp];new Set(Iy);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ss.apply(this,arguments)}const zu=k.createContext(null),ky=k.createContext(null),Nr=k.createContext(null),xs=k.createContext(null),fn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),dp=k.createContext(null);function Sy(t,e){let{relative:n}=e===void 0?{}:e;$i()||ee(!1);let{basename:r,navigator:i}=k.useContext(Nr),{hash:o,pathname:s,search:a}=hp(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:on([r,s])),i.createHref({pathname:l,search:a,hash:o})}function $i(){return k.useContext(xs)!=null}function As(){return $i()||ee(!1),k.useContext(xs).location}function fp(t){k.useContext(Nr).static||k.useLayoutEffect(t)}function Ty(){let{isDataRoute:t}=k.useContext(fn);return t?jy():Cy()}function Cy(){$i()||ee(!1);let t=k.useContext(zu),{basename:e,navigator:n}=k.useContext(Nr),{matches:r}=k.useContext(fn),{pathname:i}=As(),o=JSON.stringify(lp(r).map(l=>l.pathnameBase)),s=k.useRef(!1);return fp(()=>{s.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=up(l,JSON.parse(o),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:on([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,o,i,t])}const Ry=k.createContext(null);function Ny(t){let e=k.useContext(fn).outlet;return e&&k.createElement(Ry.Provider,{value:t},e)}function hp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.useContext(fn),{pathname:i}=As(),o=JSON.stringify(lp(r).map(s=>s.pathnameBase));return k.useMemo(()=>up(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function Py(t,e){return Oy(t,e)}function Oy(t,e,n){$i()||ee(!1);let{navigator:r}=k.useContext(Nr),{matches:i}=k.useContext(fn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=As(),u;if(e){var c;let _=typeof e=="string"?Rr(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ee(!1),u=_}else u=l;let d=u.pathname||"/",m=a==="/"?d:d.slice(a.length)||"/",v=ty(t,{pathname:m}),g=My(v&&v.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:on([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:on([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&g?k.createElement(xs.Provider,{value:{location:ss({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Gt.Pop}},g):g}function xy(){let t=by(),e=Ey(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,o)}const Ay=k.createElement(xy,null);class Ly extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(fn.Provider,{value:this.props.routeContext},k.createElement(dp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Dy(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(zu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(fn.Provider,{value:e},r)}function My(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||ee(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,d=null;n&&(d=l.route.errorElement||Ay);let m=e.concat(o.slice(0,u+1)),v=()=>{let g;return c?g=d:l.route.Component?g=k.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,k.createElement(Dy,{match:l,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(Ly,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()},null)}var Sl;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Sl||(Sl={}));var Ni;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Ni||(Ni={}));function Uy(t){let e=k.useContext(zu);return e||ee(!1),e}function Fy(t){let e=k.useContext(ky);return e||ee(!1),e}function zy(t){let e=k.useContext(fn);return e||ee(!1),e}function pp(t){let e=zy(),n=e.matches[e.matches.length-1];return n.route.id||ee(!1),n.route.id}function by(){var t;let e=k.useContext(dp),n=Fy(Ni.UseRouteError),r=pp(Ni.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function jy(){let{router:t}=Uy(Sl.UseNavigateStable),e=pp(Ni.UseNavigateStable),n=k.useRef(!1);return fp(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ss({fromRouteId:e},o)))},[t,e])}function yd(t){return Ny(t.context)}function jt(t){ee(!1)}function $y(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gt.Pop,navigator:o,static:s=!1}=t;$i()&&ee(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Rr(r));let{pathname:u="/",search:c="",hash:d="",state:m=null,key:v="default"}=r,g=k.useMemo(()=>{let _=Fu(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:m,key:v},navigationType:i}},[a,u,c,d,m,v,i]);return g==null?null:k.createElement(Nr.Provider,{value:l},k.createElement(xs.Provider,{children:n,value:g}))}function Vy(t){let{children:e,location:n}=t;return Py(Tl(e),n)}var _d;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(_d||(_d={}));new Promise(()=>{});function Tl(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let o=[...e,i];if(r.type===k.Fragment){n.push.apply(n,Tl(r.props.children,o));return}r.type!==jt&&ee(!1),!r.props.index||!r.props.children||ee(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Tl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cl(){return Cl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cl.apply(this,arguments)}function Wy(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function By(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Hy(t,e){return t.button===0&&(!e||e==="_self")&&!By(t)}const qy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Gy="startTransition",wd=$m[Gy];function Ky(t){let{basename:e,children:n,future:r,window:i}=t,o=k.useRef();o.current==null&&(o.current=Xg({window:i,v5Compat:!0}));let s=o.current,[a,l]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=k.useCallback(d=>{u&&wd?wd(()=>l(d)):l(d)},[l,u]);return k.useLayoutEffect(()=>s.listen(c),[s,c]),k.createElement($y,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s})}const Qy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ut=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=e,d=Wy(e,qy),{basename:m}=k.useContext(Nr),v,g=!1;if(typeof u=="string"&&Yy.test(u)&&(v=u,Qy))try{let f=new URL(window.location.href),p=u.startsWith("//")?new URL(f.protocol+u):new URL(u),y=Fu(p.pathname,m);p.origin===f.origin&&y!=null?u=y+p.search+p.hash:g=!0}catch{}let _=Sy(u,{relative:i}),E=Jy(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i});function h(f){r&&r(f),f.defaultPrevented||E(f)}return k.createElement("a",Cl({},d,{href:v||_,onClick:g||o?r:h,ref:n,target:l}))});var Ed;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Ed||(Ed={}));var Id;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Id||(Id={}));function Jy(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=Ty(),l=As(),u=hp(t,{relative:s});return k.useCallback(c=>{if(Hy(c,n)){c.preventDefault();let d=r!==void 0?r:os(l)===os(u);a(t,{replace:d,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,t,o,s])}var Rl=function(t,e){return Rl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Rl(t,e)};function Xy(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Rl(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function bu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Zy(t,e,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(c){try{u(r.next(c))}catch(d){s(d)}}function l(c){try{u(r.throw(c))}catch(d){s(d)}}function u(c){c.done?o(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function e0(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function wa(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function fo(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],s;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function kd(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}/**
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
 */var t0=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},n0=function(t){for(var e=[],n=0,r=0;n<t.length;){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){var o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{var o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},r0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=o>>2,d=(o&3)<<4|a>>4,m=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(m=64)),r.push(n[c],n[d],n[m],n[v])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(t0(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):n0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var o=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;var l=i<t.length,u=l?n[t.charAt(i)]:64;++i;var c=i<t.length,d=c?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw Error();var m=o<<2|a>>4;if(r.push(m),u!==64){var v=a<<4&240|u>>2;if(r.push(v),d!==64){var g=u<<6&192|d;r.push(g)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},i0=function(t){try{return r0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function as(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:var n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(var r in e)!e.hasOwnProperty(r)||!o0(r)||(t[r]=as(t[r],e[r]));return t}function o0(t){return t!=="__proto__"}/**
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
 */var s0=function(){function t(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(n,r){e.resolve=n,e.reject=r})}return t.prototype.wrapCallback=function(e){var n=this;return function(r,i){r?n.reject(r):n.resolve(i),typeof e=="function"&&(n.promise.catch(function(){}),e.length===1?e(r):e(r,i))}},t}();/**
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
 */function te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function a0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function mp(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function l0(){return typeof self=="object"&&self.self===self}function vp(){var t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ju(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gp(){var t=te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nl(){return"indexedDB"in self&&indexedDB!=null}/**
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
 */var u0="FirebaseError",_t=function(t){Xy(e,t);function e(n,r,i){var o=t.call(this,r)||this;return o.code=n,o.customData=i,o.name=u0,Object.setPrototypeOf(o,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,Pr.prototype.create),o}return e}(Error),Pr=function(){function t(e,n,r){this.service=e,this.serviceName=n,this.errors=r}return t.prototype.create=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=n[0]||{},o=this.service+"/"+e,s=this.errors[e],a=s?c0(s,i):"Error",l=this.serviceName+": "+a+" ("+o+").",u=new _t(o,l,i);return u},t}();function c0(t,e){return t.replace(d0,function(n,r){var i=e[r];return i!=null?String(i):"<"+r+"?>"})}var d0=/\{\$([^}]+)}/g;/**
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
 */function Sd(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function f0(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pl(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,o=n;i<o.length;i++){var s=o[i];if(!r.includes(s))return!1;var a=t[s],l=e[s];if(Td(a)&&Td(l)){if(!Pl(a,l))return!1}else if(a!==l)return!1}for(var u=0,c=r;u<c.length;u++){var s=c[u];if(!n.includes(s))return!1}return!0}function Td(t){return t!==null&&typeof t=="object"}/**
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
 */function Or(t){for(var e=[],n=function(l,u){Array.isArray(u)?u.forEach(function(c){e.push(encodeURIComponent(l)+"="+encodeURIComponent(c))}):e.push(encodeURIComponent(l)+"="+encodeURIComponent(u))},r=0,i=Object.entries(t);r<i.length;r++){var o=i[r],s=o[0],a=o[1];n(s,a)}return e.length?"&"+e.join("&"):""}function or(t){var e={},n=t.replace(/^\?/,"").split("&");return n.forEach(function(r){if(r){var i=r.split("="),o=i[0],s=i[1];e[decodeURIComponent(o)]=decodeURIComponent(s)}}),e}function Yr(t){var e=t.indexOf("?");if(!e)return"";var n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yp(t,e){var n=new h0(t,e);return n.subscribe.bind(n)}var h0=function(){function t(e,n){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){e(r)}).catch(function(i){r.error(i)})}return t.prototype.next=function(e){this.forEachObserver(function(n){n.next(e)})},t.prototype.error=function(e){this.forEachObserver(function(n){n.error(e)}),this.close(e)},t.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},t.prototype.subscribe=function(e,n,r){var i=this,o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");p0(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=Ea),o.error===void 0&&(o.error=Ea),o.complete===void 0&&(o.complete=Ea);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?o.error(i.finalError):o.complete()}catch{}}),this.observers.push(o),s},t.prototype.unsubscribeOne=function(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},t.prototype.forEachObserver=function(e){if(!this.finalized)for(var n=0;n<this.observers.length;n++)this.sendOne(n,e)},t.prototype.sendOne=function(e,n){var r=this;this.task.then(function(){if(r.observers!==void 0&&r.observers[e]!==void 0)try{n(r.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})},t.prototype.close=function(e){var n=this;this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(function(){n.observers=void 0,n.onNoObservers=void 0}))},t}();function p0(t,e){if(typeof t!="object"||t===null)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&typeof t[i]=="function")return!0}return!1}function Ea(){}/**
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
 */function U(t){return t&&t._delegate?t._delegate:t}var Un=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var wn="[DEFAULT]";/**
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
 */var m0=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new s0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(g0(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}try{for(var i=wa(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var s=fo(o.value,2),a=s[0],l=s[1],u=this.normalizeInstanceIdentifier(a);try{var c=this.getOrInitializeService({instanceIdentifier:u});l.resolve(c)}catch{}}}catch(d){n={error:d}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=wn),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return Zy(this,void 0,void 0,function(){var e;return e0(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(kd(kd([],fo(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),fo(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=wn),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=wn),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var i=e.options,o=i===void 0?{}:i,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var l=wa(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var c=fo(u.value,2),d=c[0],m=c[1],v=this.normalizeInstanceIdentifier(d);s===v&&m.resolve(a)}}catch(g){n={error:g}}finally{try{u&&!u.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);var s=this.instances.get(i);return s&&e(s,i),function(){o.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,i,o=this.onInitCallbacks.get(n);if(o)try{for(var s=wa(o),a=s.next();!a.done;a=s.next()){var l=a.value;try{l(e,n)}catch{}}}catch(u){r={error:u}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,i=r===void 0?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:v0(n),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch{}return o||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=wn),this.component?this.component.multipleInstances?e:wn:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function v0(t){return t===wn?void 0:t}function g0(t){return t.instantiationMode==="EAGER"}/**
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
 */var y0=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new m0(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/*! *****************************************************************************
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
***************************************************************************** */function et(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}/**
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
 */var gn,$u=[],j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));var _p={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},_0=j.INFO,w0=(gn={},gn[j.DEBUG]="log",gn[j.VERBOSE]="log",gn[j.INFO]="info",gn[j.WARN]="warn",gn[j.ERROR]="error",gn),E0=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=new Date().toISOString(),o=w0[e];if(o)console[o].apply(console,et(["["+i+"]  "+t.name+":"],n));else throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}},Vu=function(){function t(e){this.name=e,this._logLevel=_0,this._logHandler=E0,this._userLogHandler=null,$u.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in j))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(e){this._logLevel=typeof e=="string"?_p[e]:e},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,et([this,j.DEBUG],e)),this._logHandler.apply(this,et([this,j.DEBUG],e))},t.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,et([this,j.VERBOSE],e)),this._logHandler.apply(this,et([this,j.VERBOSE],e))},t.prototype.info=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,et([this,j.INFO],e)),this._logHandler.apply(this,et([this,j.INFO],e))},t.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,et([this,j.WARN],e)),this._logHandler.apply(this,et([this,j.WARN],e))},t.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,et([this,j.ERROR],e)),this._logHandler.apply(this,et([this,j.ERROR],e))},t}();function I0(t){$u.forEach(function(e){e.setLogLevel(t)})}function k0(t,e){for(var n=function(s){var a=null;e&&e.level&&(a=_p[e.level]),t===null?s.userLogHandler=null:s.userLogHandler=function(l,u){for(var c=[],d=2;d<arguments.length;d++)c[d-2]=arguments[d];var m=c.map(function(v){if(v==null)return null;if(typeof v=="string")return v;if(typeof v=="number"||typeof v=="boolean")return v.toString();if(v instanceof Error)return v.message;try{return JSON.stringify(v)}catch{return null}}).filter(function(v){return v}).join(" ");u>=(a??l.logLevel)&&t({level:j[u].toLowerCase(),message:m,args:c,type:l.name})}},r=0,i=$u;r<i.length;r++){var o=i[r];n(o)}}/**
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
 */class S0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(T0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function T0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wp="@firebase/app",C0="0.7.0";/**
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
 */const Wu=new Vu("@firebase/app"),R0="@firebase/app-compat",N0="@firebase/analytics-compat",P0="@firebase/analytics",O0="@firebase/app-check-compat",x0="@firebase/app-check",A0="@firebase/auth",L0="@firebase/auth-compat",D0="@firebase/database",M0="@firebase/database-compat",U0="@firebase/functions",F0="@firebase/functions-compat",z0="@firebase/installations",b0="@firebase/installations-compat",j0="@firebase/messaging",$0="@firebase/messaging-compat",V0="@firebase/performance",W0="@firebase/performance-compat",B0="@firebase/remote-config",H0="@firebase/remote-config-compat",q0="@firebase/storage",G0="@firebase/storage-compat",K0="@firebase/firestore",Q0="@firebase/firestore-compat",Y0="firebase",J0="9.0.0";/**
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
 */const Fn="[DEFAULT]",X0={[wp]:"fire-core",[R0]:"fire-core-compat",[P0]:"fire-analytics",[N0]:"fire-analytics-compat",[x0]:"fire-app-check",[O0]:"fire-app-check-compat",[A0]:"fire-auth",[L0]:"fire-auth-compat",[D0]:"fire-rtdb",[M0]:"fire-rtdb-compat",[U0]:"fire-fn",[F0]:"fire-fn-compat",[z0]:"fire-iid",[b0]:"fire-iid-compat",[j0]:"fire-fcm",[$0]:"fire-fcm-compat",[V0]:"fire-perf",[W0]:"fire-perf-compat",[B0]:"fire-rc",[H0]:"fire-rc-compat",[q0]:"fire-gcs",[G0]:"fire-gcs-compat",[K0]:"fire-fst",[Q0]:"fire-fst-compat","fire-js":"fire-js",[Y0]:"fire-js-all"};/**
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
 */const ln=new Map,Pi=new Map;function ls(t,e){try{t.container.addComponent(e)}catch(n){Wu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ep(t,e){t.container.addOrOverwriteComponent(e)}function Ir(t){const e=t.name;if(Pi.has(e))return Wu.debug(`There were multiple attempts to register component ${e}.`),!1;Pi.set(e,t);for(const n of ln.values())ls(n,t);return!0}function Ip(t,e){return t.container.getProvider(e)}function Z0(t,e,n=Fn){Ip(t,e).clearInstance(n)}function e_(){Pi.clear()}/**
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
 */const t_={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},Oi=new Pr("app","Firebase",t_);/**
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
 */let n_=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oi.create("app-deleted",{appName:this._name})}};/**
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
 */const xr=J0;function kp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Fn,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Oi.create("bad-app-name",{appName:String(r)});const i=ln.get(r);if(i){if(Pl(t,i.options)&&Pl(n,i.config))return i;throw Oi.create("duplicate-app",{appName:r})}const o=new y0(r);for(const a of Pi.values())o.addComponent(a);const s=new n_(t,n,o);return ln.set(r,s),s}function r_(t=Fn){const e=ln.get(t);if(!e)throw Oi.create("no-app",{appName:t});return e}function i_(){return Array.from(ln.values())}async function Sp(t){const e=t.name;ln.has(e)&&(ln.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function kr(t,e,n){var r;let i=(r=X0[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wu.warn(a.join(" "));return}Ir(new Un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Tp(t,e){if(t!==null&&typeof t!="function")throw Oi.create("invalid-log-argument");k0(t,e)}function Cp(t){I0(t)}/**
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
 */function o_(t){Ir(new Un("platform-logger",e=>new S0(e),"PRIVATE")),kr(wp,C0,t),kr("fire-js","")}o_();const s_=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:_t,SDK_VERSION:xr,_DEFAULT_ENTRY_NAME:Fn,_addComponent:ls,_addOrOverwriteComponent:Ep,_apps:ln,_clearComponents:e_,_components:Pi,_getProvider:Ip,_registerComponent:Ir,_removeServiceInstance:Z0,deleteApp:Sp,getApp:r_,getApps:i_,initializeApp:kp,onLog:Tp,registerVersion:kr,setLogLevel:Cp},Symbol.toStringTag,{value:"Module"}));/**
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
 */class a_{constructor(e,n){this._delegate=e,this.firebase=n,ls(e,new Un("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Sp(this._delegate)))}_getService(e,n=Fn){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Fn){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){ls(this._delegate,e)}_addOrOverwriteComponent(e){Ep(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const l_={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Cd=new Pr("app-compat","Firebase",l_);/**
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
 */function u_(t){const e={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:kr,setLogLevel:Cp,onLog:Tp,apps:null,SDK_VERSION:xr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:s_}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete e[u]}function i(u){if(u=u||Fn,!Sd(e,u))throw Cd.create("no-app",{appName:u});return e[u]}i.App=t;function o(u,c={}){const d=kp(u,c);if(Sd(e,d.name))return e[d.name];const m=new t(d,n);return e[d.name]=m,m}function s(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(Ir(u)&&u.type==="PUBLIC"){const m=(v=i())=>{if(typeof v[d]!="function")throw Cd.create("invalid-app-argument",{appName:c});return v[d]()};u.serviceProps!==void 0&&as(m,u.serviceProps),n[d]=m,t.prototype[d]=function(...v){return this._getService.bind(this,c).apply(this,u.multipleInstances?v:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function Rp(){const t=u_(a_);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Rp,extendNamespace:e,createSubscribe:yp,ErrorFactory:Pr,deepExtend:as});function e(n){as(t,n)}return t}const c_=Rp();/**
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
 */const Rd=new Vu("@firebase/app-compat"),d_="@firebase/app-compat",f_="0.1.0";/**
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
 */function h_(t){kr(d_,f_,t)}/**
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
 */if(l0()&&self.firebase!==void 0){Rd.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Rd.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Dt=c_;h_();var p_="firebase",m_="9.0.0";/**
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
 */Dt.registerVersion(p_,m_,"app-compat");const Wr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},qn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function v_(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function g_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const y_=v_,Np=new Pr("auth","Firebase",g_());/**
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
 */const Nd=new Vu("@firebase/auth");function No(t,...e){Nd.logLevel<=j.ERROR&&Nd.error(`Auth (${xr}): ${t}`,...e)}/**
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
 */function Ie(t,...e){throw Bu(t,...e)}function me(t,...e){return Bu(t,...e)}function Bu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Np.create(t,...e)}function S(t,e,...n){if(!t)throw Bu(e,...n)}function vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw No(e),new Error(e)}function at(t,e){t||vt(e)}/**
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
 */const Pd=new Map;function je(t){at(t instanceof Function,"Expected a class definition");let e=Pd.get(t);return e?(at(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pd.set(t,e),e)}function __(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(je);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function xi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hu(){return Od()==="http:"||Od()==="https:"}function Od(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function w_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hu()||vp()||"connection"in navigator)?navigator.onLine:!0}function E_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,at(n>e,"Short delay should be less than long delay!"),this.isMobile=a0()||ju()}get(){return w_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qu(t,e){at(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ol{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const I_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"};/**
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
 */const k_=new Vi(3e4,6e4);function Me(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function de(t,e,n,r,i={}){return Pp(t,i,()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Or(Object.assign({key:t.config.apiKey},s)).slice(1),l=new(Ol.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),Ol.fetch()(Op(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Pp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},I_),e);try{const i=new S_(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Po(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=(o.ok?s.errorMessage:s.error.message).split(" : ")[0];if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Po(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Po(t,"email-already-in-use",s);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");Ie(t,u)}}catch(i){if(i instanceof _t)throw i;Ie(t,"network-request-failed")}}async function Ft(t,e,n,r,i={}){const o=await de(t,e,n,r,i);return"mfaPendingCredential"in o&&Ie(t,"multi-factor-auth-required",{serverResponse:o}),o}function Op(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?qu(t.config,i):`${t.config.apiScheme}://${i}`}class S_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(me(this.auth,"timeout")),k_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Po(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=me(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function T_(t,e){return de(t,"POST","/v1/accounts:delete",e)}async function C_(t,e){return de(t,"POST","/v1/accounts:update",e)}async function R_(t,e){return de(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ai(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function N_(t,e=!1){const n=U(t),r=await n.getIdToken(e),i=Ls(r);S(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ai(Ia(i.auth_time)),issuedAtTime:ai(Ia(i.iat)),expirationTime:ai(Ia(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ia(t){return Number(t)*1e3}function Ls(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return No("JWT malformed, contained fewer than 3 sections"),null;try{const i=i0(n);return i?JSON.parse(i):(No("Failed to decode base64 JWT payload"),null)}catch(i){return No("Caught error parsing JWT payload as JSON",i),null}}function P_(t){const e=Ls(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _t&&O_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function O_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class x_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ai(this.lastLoginAt),this.creationTime=ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ai(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Mt(t,R_(n,{idToken:r}));S(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?D_(o.providerUserInfo):[],a=L_(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new xp(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function A_(t){const e=U(t);await Ai(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function L_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function D_(t){return t.map(e=>{var{providerId:n}=e,r=bu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function M_(t,e){const n=await Pp(t,{},()=>{const r=Or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Op(t,i,"/v1/token",`key=${o}`);return Ol.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):P_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await M_(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Li;return r&&(S(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(S(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(S(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
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
 */function bt(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=bu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new x_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.metadata=new xp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Mt(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return N_(this,e)}reload(){return A_(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ai(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mt(this,T_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:y,isAnonymous:I,providerData:N,stsTokenManager:P}=n;S(p&&P,e,"internal-error");const C=Li.fromJSON(this.name,P);S(typeof p=="string",e,"internal-error"),bt(d,e.name),bt(m,e.name),S(typeof y=="boolean",e,"internal-error"),S(typeof I=="boolean",e,"internal-error"),bt(v,e.name),bt(g,e.name),bt(_,e.name),bt(E,e.name),bt(h,e.name),bt(f,e.name);const F=new Nn({uid:p,auth:e,email:m,emailVerified:y,displayName:d,isAnonymous:I,photoURL:g,phoneNumber:v,tenantId:_,stsTokenManager:C,createdAt:h,lastLoginAt:f});return N&&Array.isArray(N)&&(F.providerData=N.map(L=>Object.assign({},L))),E&&(F._redirectEventId=E),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new Li;i.updateFromServerResponse(n);const o=new Nn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ai(o),o}}/**
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
 */class Ap{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ap.type="NONE";const Di=Ap;/**
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
 */function Pn(t,e,n){return`firebase:${t}:${e}:${n}`}class fr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Pn(this.userKey,i.apiKey,o),this.fullPersistenceKey=Pn("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fr(je(Di),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||je(Di);const s=Pn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const d=Nn._fromJSON(e,c);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new fr(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new fr(o,e,r))}}/**
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
 */function xd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Up(e))return"Blackberry";if(Fp(e))return"Webos";if(Gu(e))return"Safari";if((e.includes("chrome/")||Dp(e))&&!e.includes("edge/"))return"Chrome";if(Wi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lp(t=te()){return/firefox\//i.test(t)}function Gu(t=te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dp(t=te()){return/crios\//i.test(t)}function Mp(t=te()){return/iemobile/i.test(t)}function Wi(t=te()){return/android/i.test(t)}function Up(t=te()){return/blackberry/i.test(t)}function Fp(t=te()){return/webos/i.test(t)}function Ar(t=te()){return/iphone|ipad|ipod/i.test(t)}function U_(t=te()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function F_(t=te()){var e;return Ar(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function z_(){return gp()&&document.documentMode===10}function zp(t=te()){return Ar(t)||Wi(t)||Fp(t)||Up(t)||/windows phone/i.test(t)||Mp(t)}function b_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function bp(t,e=[]){let n;switch(t){case"Browser":n=xd(te());break;case"Worker":n=`${xd(te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xr}/${r}`}/**
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
 */class j_{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ad(this),this.idTokenSubscription=new Ad(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Np,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=je(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await fr.create(this,e),!this._deleted&&(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=r==null?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);(!i||i===o)&&(s!=null&&s.user)&&(r=s.user)}return r?r._redirectEventId?(S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ai(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?U(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(je(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&je(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await fr.create(this,[je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return S(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function ce(t){return U(t)}class Ad{constructor(e){this.auth=e,this.observer=null,this.addObserver=yp(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function $_(t,e,n){const r=ce(t);S(r._canInitEmulator,r,"emulator-config-failed"),S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=jp(e),{host:s,port:a}=V_(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),W_(i)}function jp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function V_(t){const e=jp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Ld(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Ld(s)}}}function Ld(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function W_(t){function e(){const n=document.createElement("p"),r=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&!t&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Lr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vt("not implemented")}_getIdTokenResponse(e){return vt("not implemented")}_linkToIdToken(e,n){return vt("not implemented")}_getReauthenticationResolver(e){return vt("not implemented")}}/**
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
 */async function $p(t,e){return de(t,"POST","/v1/accounts:resetPassword",Me(t,e))}async function Vp(t,e){return de(t,"POST","/v1/accounts:update",e)}async function B_(t,e){return de(t,"POST","/v1/accounts:update",Me(t,e))}/**
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
 */async function H_(t,e){return Ft(t,"POST","/v1/accounts:signInWithPassword",Me(t,e))}async function Ds(t,e){return de(t,"POST","/v1/accounts:sendOobCode",Me(t,e))}async function q_(t,e){return Ds(t,e)}async function G_(t,e){return Ds(t,e)}async function K_(t,e){return Ds(t,e)}async function Q_(t,e){return Ds(t,e)}/**
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
 */async function Y_(t,e){return Ft(t,"POST","/v1/accounts:signInWithEmailLink",Me(t,e))}async function J_(t,e){return Ft(t,"POST","/v1/accounts:signInWithEmailLink",Me(t,e))}/**
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
 */class Mi extends Lr{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Mi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Mi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return H_(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Y_(e,{email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Vp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return J_(e,{idToken:n,email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Pt(t,e){return Ft(t,"POST","/v1/accounts:signInWithIdp",Me(t,e))}/**
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
 */const X_="http://localhost";class wt extends Lr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ie("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=bu(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new wt(r,i);return Object.assign(s,o),s}_getIdTokenResponse(e){const n=this.buildRequest();return Pt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pt(e,n)}buildRequest(){const e={requestUri:X_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Or(n)}return e}}/**
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
 */async function Z_(t,e){return de(t,"POST","/v1/accounts:sendVerificationCode",Me(t,e))}async function ew(t,e){return Ft(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,e))}async function tw(t,e){const n=await Ft(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,e));if(n.temporaryProof)throw Po(t,"account-exists-with-different-credential",n);return n}const nw={USER_NOT_FOUND:"user-not-found"};async function rw(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ft(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,n),nw)}/**
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
 */class On extends Lr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new On({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new On({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return ew(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return tw(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return rw(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!n&&!i&&!o?null:new On({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
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
 */function iw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ow(t){const e=or(Yr(t)).link,n=e?or(Yr(e)).deep_link_id:null,r=or(Yr(t)).deep_link_id;return(r?or(Yr(r)).link:null)||r||n||e||t}class Ms{constructor(e){var n,r,i,o,s,a;const l=or(Yr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=iw((i=l.mode)!==null&&i!==void 0?i:null);S(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ow(e);try{return new Ms(n)}catch{return null}}}/**
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
 */class hn{constructor(){this.providerId=hn.PROVIDER_ID}static credential(e,n){return Mi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ms.parseLink(n);return S(r,"argument-error"),Mi._fromEmailAndCode(e,r.code,r.tenantId)}}hn.PROVIDER_ID="password";hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class pn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Dr extends pn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class hr extends Dr{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return S("providerId"in n&&"signInMethod"in n,"argument-error"),wt._fromParams(n)}credential(e){return this._credential(e)}_credential(e){return S(e.idToken||e.accessToken,"argument-error"),wt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return hr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return hr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=e;if(!r&&!i&&!n&&!o||!a)return null;try{return new hr(a)._credential({idToken:n,accessToken:r,rawNonce:s,pendingToken:o})}catch{return null}}}/**
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
 */class ft extends Dr{constructor(){super("facebook.com")}static credential(e){return wt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";ft.PROVIDER_ID="facebook.com";/**
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
 */class ht extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ht.credential(n,r)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
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
 */class pt extends Dr{constructor(){super("github.com")}static credential(e){return wt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com";pt.PROVIDER_ID="github.com";/**
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
 */const sw="http://localhost";class us extends Lr{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Pt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pt(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:o}=n;return!r||!i||!o||r!==i?null:new us(r,o)}static _create(e,n){return new us(e,n)}buildRequest(){return{requestUri:sw,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */class mt extends Dr{constructor(){super("twitter.com")}static credential(e,n){return wt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
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
 */async function Wp(t,e){return Ft(t,"POST","/v1/accounts:signUp",Me(t,e))}/**
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
 */class Xe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Nn._fromIdTokenResponse(e,r,i),s=Dd(r);return new Xe({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Dd(r);return new Xe({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Dd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function aw(t){var e;const n=ce(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Xe({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Wp(n,{returnSecureToken:!0}),i=await Xe._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class cs extends _t{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,cs.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(o=e.tenantId)!==null&&o!==void 0?o:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,i){return new cs(e,n,r,i)}}function Bp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(t,o,e,r):o})}/**
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
 */function Hp(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function lw(t,e){const n=U(t);await Us(!0,n,e);const{providerUserInfo:r}=await C_(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Hp(r||[]);return n.providerData=n.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ku(t,e,n=!1){const r=await Mt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xe._forOperation(t,"link",r)}async function Us(t,e,n){await Ai(e);const r=Hp(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";S(r.has(n)===t,e.auth,i)}/**
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
 */async function qp(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await Mt(t,Bp(r,i,e,t),n);S(o.idToken,r,"internal-error");const s=Ls(o.idToken);S(s,r,"internal-error");const{sub:a}=s;return S(t.uid===a,r,"user-mismatch"),Xe._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ie(r,"user-mismatch"),o}}/**
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
 */async function Gp(t,e,n=!1){const r="signIn",i=await Bp(t,r,e),o=await Xe._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function Fs(t,e){return Gp(ce(t),e)}async function Kp(t,e){const n=U(t);return await Us(!1,n,e.providerId),Ku(n,e)}async function Qp(t,e){return qp(U(t),e)}/**
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
 */async function uw(t,e){return Ft(t,"POST","/v1/accounts:signInWithCustomToken",Me(t,e))}/**
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
 */async function cw(t,e){const n=ce(t),r=await uw(n,{token:e,returnSecureToken:!0}),i=await Xe._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class zs{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Qu._fromServerResponse(e,n):Ie(e,"internal-error")}}class Qu extends zs{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Qu(n)}}/**
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
 */function bs(t,e,n){var r;S(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),S(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iosBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function dw(t,e,n){const r=U(t),i={requestType:"PASSWORD_RESET",email:e};n&&bs(r,i,n),await G_(r,i)}async function fw(t,e,n){await $p(U(t),{oobCode:e,newPassword:n})}async function hw(t,e){await B_(U(t),{oobCode:e})}async function Yp(t,e){const n=U(t),r=await $p(n,{oobCode:e}),i=r.requestType;switch(S(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":S(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":S(r.mfaInfo,n,"internal-error");default:S(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=zs._fromServerResponse(ce(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function pw(t,e){const{data:n}=await Yp(U(t),e);return n.email}async function mw(t,e,n){const r=ce(t),i=await Wp(r,{returnSecureToken:!0,email:e,password:n}),o=await Xe._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function vw(t,e,n){return Fs(U(t),hn.credential(e,n))}/**
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
 */async function gw(t,e,n){const r=U(t),i={requestType:"EMAIL_SIGNIN",email:e};S(n.handleCodeInApp,r,"argument-error"),n&&bs(r,i,n),await K_(r,i)}function yw(t,e){const n=Ms.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function _w(t,e,n){const r=U(t),i=hn.credentialWithLink(e,n||xi());return S(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Fs(r,i)}/**
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
 */async function ww(t,e){return de(t,"POST","/v1/accounts:createAuthUri",Me(t,e))}/**
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
 */async function Ew(t,e){const n=Hu()?xi():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await ww(U(t),r);return i||[]}async function Iw(t,e){const n=U(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&bs(n.auth,i,e);const{email:o}=await q_(n.auth,i);o!==t.email&&await t.reload()}async function kw(t,e,n){const r=U(t),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&bs(r.auth,o,n);const{email:s}=await Q_(r.auth,o);s!==t.email&&await t.reload()}/**
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
 */async function Sw(t,e){return de(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Tw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=U(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Mt(r,Sw(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function Cw(t,e){return Jp(U(t),e,null)}function Rw(t,e){return Jp(U(t),null,e)}async function Jp(t,e,n){const{auth:r}=t,o={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(o.email=e),n&&(o.password=n);const s=await Mt(t,Vp(r,o));await t._updateTokensIfNecessary(s,!0)}/**
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
 */function Nw(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},o=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const s=(n=(e=Ls(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(s){const a=s!=="anonymous"&&s!=="custom"?s:null;return new pr(o,a)}}if(!r)return null;switch(r){case"facebook.com":return new Pw(o,i);case"github.com":return new Ow(o,i);case"google.com":return new xw(o,i);case"twitter.com":return new Aw(o,i,t.screenName||null);case"custom":case"anonymous":return new pr(o,null);default:return new pr(o,r,i)}}class pr{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Xp extends pr{constructor(e,n,r,i){super(e,n,r),this.username=i}}class Pw extends pr{constructor(e,n){super(e,"facebook.com",n)}}class Ow extends Xp{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class xw extends pr{constructor(e,n){super(e,"google.com",n)}}class Aw extends Xp{constructor(e,n,r){super(e,"twitter.com",n,r)}}function Lw(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Nw(n)}class Tn{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new Tn("enroll",e)}static _fromMfaPendingCredential(e){return new Tn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Tn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Tn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Yu{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ce(e),i=(n.serverResponse.mfaInfo||[]).map(s=>zs._fromServerResponse(r,s));S(n.serverResponse.mfaPendingCredential,r,"internal-error");const o=Tn._fromMfaPendingCredential(n.serverResponse.mfaPendingCredential);return new Yu(o,i,async s=>{const a=await s._process(r,o);delete n.serverResponse.mfaInfo,delete n.serverResponse.mfaPendingCredential;const l=Object.assign(Object.assign({},n.serverResponse),{idToken:a.idToken,refreshToken:a.refreshToken});switch(n.operationType){case"signIn":const u=await Xe._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return S(n.user,r,"internal-error"),Xe._forOperation(n.user,n.operationType,l);default:Ie(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function Dw(t,e){var n;const r=U(t),i=e;return S(e.operationType,r,"argument-error"),S((n=i.serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Yu._fromError(r,i)}/**
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
 */function Mw(t,e){return de(t,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:t.tenantId},e))}function Uw(t,e){return de(t,"POST","/v2/accounts/mfaEnrollment:finalize",Object.assign({tenantId:t.tenantId},e))}function Fw(t,e){return de(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Object.assign({tenantId:t.tenantId},e))}class Ju{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>zs._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Ju(e)}async getSession(){return Tn._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),o=await Mt(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await Mt(this.user,Fw(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(o){if(o.code!=="auth/user-token-expired")throw o}}}const ka=new WeakMap;function zw(t){const e=U(t);return ka.has(e)||ka.set(e,Ju._fromUser(e)),ka.get(e)}const ds="__sak";/**
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
 */class Zp{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ds,"1"),this.storage.removeItem(ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
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
 */function bw(){const t=te();return Gu(t)||Ar(t)}const jw=1e3,$w=10;class em extends Zp{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bw()&&b_(),this.fallbackToPolling=zp(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);z_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$w):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}em.type="LOCAL";const xl=em;/**
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
 */class tm extends Zp{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tm.type="SESSION";const zn=tm;/**
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
 */function Vw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class js{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new js(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await Vw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}js.receivers=[];/**
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
 */function Bi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ww{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Bi("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function ie(){return window}function Bw(t){ie().location.href=t}/**
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
 */function Xu(){return typeof ie().WorkerGlobalScope<"u"&&typeof ie().importScripts=="function"}async function Hw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Gw(){return Xu()?self:null}/**
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
 */const nm="firebaseLocalStorageDb",Kw=1,fs="firebaseLocalStorage",rm="fbase_key";class Hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $s(t,e){return t.transaction([fs],e?"readwrite":"readonly").objectStore(fs)}function Qw(){const t=indexedDB.deleteDatabase(nm);return new Hi(t).toPromise()}function Al(){const t=indexedDB.open(nm,Kw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fs,{keyPath:rm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fs)?e(r):(r.close(),await Qw(),e(await Al()))})})}async function Md(t,e,n){const r=$s(t,!0).put({[rm]:e,value:n});return new Hi(r).toPromise()}async function Yw(t,e){const n=$s(t,!1).get(e),r=await new Hi(n).toPromise();return r===void 0?null:r.value}function Ud(t,e){const n=$s(t,!0).delete(e);return new Hi(n).toPromise()}const Jw=800,Xw=3;class im{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Al(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Xw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=js._getInstance(Gw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Hw(),!this.activeServiceWorker)return;this.sender=new Ww(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Al();return await Md(e,ds,"1"),await Ud(e,ds),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Md(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Yw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ud(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=$s(i,!1).getAll();return new Hi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}im.type="LOCAL";const Oo=im;/**
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
 */function Zw(t,e){return de(t,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:t.tenantId},e))}function e1(t,e){return de(t,"POST","/v2/accounts/mfaSignIn:finalize",Object.assign({tenantId:t.tenantId},e))}/**
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
 */async function t1(t){return(await de(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function n1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function om(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=me("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",n1().appendChild(r)})}function sm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const r1=500,i1=6e4,ho=1e12;class o1{constructor(e){this.auth=e,this.counter=ho,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new s1(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||ho;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||ho;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||ho;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class s1{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;S(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=a1(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},i1)},r1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function a1(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Sa=sm("rcb"),l1=new Vi(3e4,6e4),u1="https://www.google.com/recaptcha/api.js?";class c1{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!ie().grecaptcha}load(e,n=""){return S(d1(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(ie().grecaptcha):new Promise((r,i)=>{const o=ie().setTimeout(()=>{i(me(e,"network-request-failed"))},l1.get());ie()[Sa]=()=>{ie().clearTimeout(o),delete ie()[Sa];const a=ie().grecaptcha;if(!a){i(me(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const s=`${u1}?${Or({onload:Sa,render:"explicit",hl:n})}`;om(s).catch(()=>{clearTimeout(o),i(me(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!ie().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function d1(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class f1{async load(e){return new o1(e)}clearedOneInstance(){}}/**
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
 */const am="recaptcha",h1={theme:"light",type:"image"};let p1=class{constructor(e,n=Object.assign({},h1),r){this.parameters=n,this.type=am,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ce(r),this.isInvisible=this.parameters.size==="invisible",S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;S(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new f1:new c1,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const o=s=>{s&&(this.tokenChangeListeners.delete(o),i(s))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=ie()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(Hu()&&!Xu(),this.auth,"internal-error"),await m1(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await t1(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function m1(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Zu{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=On._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function v1(t,e,n){const r=ce(t),i=await Vs(r,e,U(n));return new Zu(i,o=>Fs(r,o))}async function g1(t,e,n){const r=U(t);await Us(!1,r,"phone");const i=await Vs(r.auth,e,U(n));return new Zu(i,o=>Kp(r,o))}async function y1(t,e,n){const r=U(t),i=await Vs(r.auth,e,U(n));return new Zu(i,o=>Qp(r,o))}async function Vs(t,e,n){var r;const i=await n.verify();try{S(typeof i=="string",t,"argument-error"),S(n.type===am,t,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const s=o.session;if("phoneNumber"in o)return S(s.type==="enroll",t,"internal-error"),(await Mw(t,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{S(s.type==="signin",t,"internal-error");const a=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return S(a,t,"missing-multi-factor-info"),(await Zw(t,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await Z_(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}async function _1(t,e){await Ku(U(t),e)}/**
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
 */let bn=class xo{constructor(e){this.providerId=xo.PROVIDER_ID,this.auth=ce(e)}verifyPhoneNumber(e,n){return Vs(this.auth,e,U(n))}static credential(e,n){return On._fromVerification(e,n)}static credentialFromResult(e){const n=e;return xo.credentialFromTaggedObject(n)}static credentialFromError(e){return xo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?On._fromTokenResponse(n,r):null}};bn.PROVIDER_ID="phone";bn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Bn(t,e){return e?je(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ec extends Lr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function w1(t){return Gp(t.auth,new ec(t),t.bypassAuthState)}function E1(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),qp(n,new ec(t),t.bypassAuthState)}async function I1(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Ku(n,new ec(t),t.bypassAuthState)}/**
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
 */class lm{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return w1;case"linkViaPopup":case"linkViaRedirect":return I1;case"reauthViaPopup":case"reauthViaRedirect":return E1;default:Ie(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const k1=new Vi(2e3,1e4);async function S1(t,e,n){const r=ce(t);S(e instanceof pn,t,"argument-error");const i=Bn(r,n);return new Ct(r,"signInViaPopup",e,i).executeNotNull()}async function T1(t,e,n){const r=U(t);S(e instanceof pn,r.auth,"argument-error");const i=Bn(r.auth,n);return new Ct(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function C1(t,e,n){const r=U(t);S(e instanceof pn,r.auth,"argument-error");const i=Bn(r.auth,n);return new Ct(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Ct extends lm{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ct.currentPopupAction&&Ct.currentPopupAction.cancel(),Ct.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=Bi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ct.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,k1.get())};e()}}Ct.currentPopupAction=null;/**
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
 */const R1="pendingRedirect",Ll=new Map;class N1 extends lm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ll.get(this.auth._key());if(!e){try{const r=await P1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ll.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function P1(t,e){const n=um(e),r=await Dl(t)._get(n)==="true";return await Dl(t)._remove(n),r}async function tc(t,e){return Dl(t)._set(um(e),"true")}function O1(){Ll.clear()}function Dl(t){return je(t._redirectPersistence)}function um(t){return Pn(R1,t.config.apiKey,t.name)}/**
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
 */function x1(t,e,n){return A1(t,e,n)}async function A1(t,e,n){const r=ce(t);S(e instanceof pn,t,"argument-error");const i=Bn(r,n);return await tc(i,r),i._openRedirect(r,e,"signInViaRedirect")}function L1(t,e,n){return D1(t,e,n)}async function D1(t,e,n){const r=U(t);S(e instanceof pn,r.auth,"argument-error");const i=Bn(r.auth,n);await tc(i,r.auth);const o=await cm(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",o)}function M1(t,e,n){return U1(t,e,n)}async function U1(t,e,n){const r=U(t);S(e instanceof pn,r.auth,"argument-error");const i=Bn(r.auth,n);await Us(!1,r,e.providerId),await tc(i,r.auth);const o=await cm(r);return i._openRedirect(r.auth,e,"linkViaRedirect",o)}async function F1(t,e){return await ce(t)._initializationPromise,Ws(t,e,!1)}async function Ws(t,e,n=!1){const r=ce(t),i=Bn(r,e),s=await new N1(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}async function cm(t){const e=Bi(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const z1=10*60*1e3;class dm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!b1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(me(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=z1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fd(e))}saveEventToCache(e){this.cachedEventUids.add(Fd(e)),this.lastProcessedEventTime=Date.now()}}function Fd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function b1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fm(t);default:return!1}}/**
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
 */async function hm(t,e={}){return de(t,"GET","/v1/projects",e)}/**
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
 */const j1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$1=/^https?/;async function V1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hm(t);for(const n of e)try{if(W1(n))return}catch{}Ie(t,"unauthorized-domain")}function W1(t){const e=xi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!$1.test(n))return!1;if(j1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const B1=new Vi(3e4,6e4);function zd(){const t=ie().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function H1(t){return new Promise((e,n)=>{var r,i,o;function s(){zd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zd(),n(me(t,"network-request-failed"))},timeout:B1.get()})}if(!((i=(r=ie().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=ie().gapi)===null||o===void 0)&&o.load)s();else{const a=sm("iframefcb");return ie()[a]=()=>{gapi.load?s():n(me(t,"network-request-failed"))},om(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Ao=null,e})}let Ao=null;function q1(t){return Ao=Ao||H1(t),Ao}/**
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
 */const G1=new Vi(5e3,15e3),K1="__/auth/iframe",Q1="emulator/auth/iframe",Y1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},J1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function X1(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qu(e,Q1):`https://${t.config.authDomain}/${K1}`,r={apiKey:e.apiKey,appName:t.name,v:xr},i=J1.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Or(r).slice(1)}`}async function Z1(t){const e=await q1(t),n=ie().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:X1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Y1,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=me(t,"network-request-failed"),a=ie().setTimeout(()=>{o(s)},G1.get());function l(){ie().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const eE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tE=500,nE=600,rE="_blank",iE="http://localhost";class bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oE(t,e,n,r=tE,i=nE){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eE),{width:r.toString(),height:i.toString(),top:o,left:s}),u=te().toLowerCase();n&&(a=Dp(u)?rE:n),Lp(u)&&(e=e||iE,l.scrollbars="yes");const c=Object.entries(l).reduce((m,[v,g])=>`${m}${v}=${g},`,"");if(F_(u)&&a!=="_self")return sE(e||"",a),new bd(null);const d=window.open(e||"",a,c);S(d,t,"popup-blocked");try{d.focus()}catch{}return new bd(d)}function sE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aE="__/auth/handler",lE="emulator/auth/handler";function Ml(t,e,n,r,i,o){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xr,eventId:i};if(e instanceof pn){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",f0(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(e instanceof Dr){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${uE(t)}?${Or(a).slice(1)}`}function uE({config:t}){return t.emulator?qu(t,lE):`https://${t.authDomain}/${aE}`}/**
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
 */const Ta="webStorageSupport";class cE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zn,this._completeRedirectFn=Ws}async _openPopup(e,n,r,i){var o;at((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Ml(e,n,r,xi(),i);return oE(e,s,Bi())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Bw(Ml(e,n,r,xi(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(at(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await Z1(e),r=new dm(e);return n.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ta,{type:Ta},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ta];s!==void 0&&n(!!s),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=V1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zp()||Gu()||Ar()}}const dE=cE;class fE{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return vt("unexpected MultiFactorSessionType")}}}class nc extends fE{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new nc(e)}_finalizeEnroll(e,n,r){return Uw(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return e1(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class hE{constructor(){}static assertion(e){return nc._fromCredential(e)}}var pE="@firebase/auth",mE="0.17.0";/**
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
 */class vE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yE(t){Ir(new Un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(s=>{S(i&&!i.includes(":"),"invalid-api-key",{appName:s.name}),S(!(o!=null&&o.includes(":")),"argument-error",{appName:s.name});const a={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bp(t)},l=new j_(s,a);return __(l,n),l})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ir(new Un("auth-internal",e=>{const n=ce(e.getProvider("auth").getImmediate());return(r=>new vE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kr(pE,mE,gE(t))}yE("Browser");/**
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
 */function jn(){return window}/**
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
 */const _E=2e3;async function wE(t,e,n){var r;const{BuildInfo:i}=jn();at(e.sessionId,"AuthEvent did not contain a session ID");const o=await TE(e.sessionId),s={};return Ar()?s.ibi=i.packageName:Wi()?s.apn=i.packageName:Ie(t,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,Ml(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,s)}async function EE(t){const{BuildInfo:e}=jn(),n={};Ar()?n.iosBundleId=e.packageName:Wi()?n.androidPackageName=e.packageName:Ie(t,"operation-not-supported-in-this-environment"),await hm(t,n)}function IE(t){const{cordova:e}=jn();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,U_()?"_blank":"_system","location=yes"),n(i)})})}async function kE(t,e,n){const{cordova:r}=jn();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function l(){var d;o();const m=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{s(me(t,"redirect-cancelled-by-user"))},_E))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Wi()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function SE(t){var e,n,r,i,o,s,a,l,u,c;const d=jn();S(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),S(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),S(typeof((o=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S(typeof((l=(a=(s=d==null?void 0:d.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function TE(t){const e=CE(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function CE(t){if(at(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const RE=20;class NE extends dm{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function PE(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:AE(),postBody:null,tenantId:t.tenantId,error:me(t,"no-auth-event")}}function OE(t,e){return Ul()._set(Fl(t),e)}async function jd(t){const e=await Ul()._get(Fl(t));return e&&await Ul()._remove(Fl(t)),e}function xE(t,e){var n,r;const i=DE(e);if(i.includes("/__/auth/callback")){const o=Lo(i),s=o.firebaseError?LE(decodeURIComponent(o.firebaseError)):null,a=(r=(n=s==null?void 0:s.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?me(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function AE(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<RE;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Ul(){return je(xl)}function Fl(t){return Pn("authEvent",t.config.apiKey,t.name)}function LE(t){try{return JSON.parse(t)}catch{return null}}function DE(t){const e=Lo(t),n=e.link?decodeURIComponent(e.link):void 0,r=Lo(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Lo(i).link||i||r||n||t}function Lo(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return or(n.join("?"))}/**
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
 */const ME=500;class UE{constructor(){this._redirectPersistence=zn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ws}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new NE(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ie(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){SE(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),O1(),await this._originValidation(e);const s=PE(e,r,i);await OE(e,s);const a=await wE(e,s,n),l=await IE(a);return kE(e,o,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EE(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=jn(),s=setTimeout(async()=>{await jd(e),n.onEvent($d())},ME),a=async c=>{clearTimeout(s);const d=await jd(e);let m=null;d&&(c!=null&&c.url)&&(m=xE(d,c.url)),n.onEvent(m||$d())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${o.packageName.toLowerCase()}://`;jn().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const FE=UE;function $d(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:me("no-auth-event")}}/**
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
 */function zE(t,e){ce(t)._logFramework(e)}var bE="@firebase/auth-compat",jE="0.1.0";/**
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
 */const $E=1e3;function hs(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function VE(){return hs()==="http:"||hs()==="https:"}function pm(t=te()){return!!((hs()==="file:"||hs()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function WE(){return ju()||mp()}function BE(){return gp()&&(document==null?void 0:document.documentMode)===11}function HE(t=te()){return/Edge\/\d+/.test(t)}function qE(t=te()){return BE()||HE(t)}function mm(){try{const t=self.localStorage,e=Bi();if(t)return t.setItem(e,"1"),t.removeItem(e),qE()?Nl():!0}catch{return rc()&&Nl()}return!1}function rc(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ca(){return(VE()||vp()||pm())&&!WE()&&mm()&&!rc()}function vm(){return pm()&&typeof document<"u"}async function GE(){return vm()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},$E);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
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
 */const ze={LOCAL:"local",NONE:"none",SESSION:"session"},Br=S,gm="persistence";function KE(t,e){if(Br(Object.values(ze).includes(e),t,"invalid-persistence-type"),ju()){Br(e!==ze.SESSION,t,"unsupported-persistence-type");return}if(mp()){Br(e===ze.NONE,t,"unsupported-persistence-type");return}if(rc()){Br(e===ze.NONE||e===ze.LOCAL&&Nl(),t,"unsupported-persistence-type");return}Br(e===ze.NONE||mm(),t,"unsupported-persistence-type")}async function zl(t){await t._initializationPromise;const e=ym(),n=Pn(gm,t.config.apiKey,t.name);e!=null&&e.sessionStorage&&e.sessionStorage.setItem(n,t._getPersistence())}function QE(t,e){const n=ym();if(!(n!=null&&n.sessionStorage))return[];const r=Pn(gm,t,e);switch(n.sessionStorage.getItem(r)){case ze.NONE:return[Di];case ze.LOCAL:return[Oo,zn];case ze.SESSION:return[zn];default:return[]}}function ym(){return typeof window<"u"?window:null}/**
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
 */const YE=S;class Kt{constructor(){this.browserResolver=je(dE),this.cordovaResolver=je(FE),this.underlyingResolver=null,this._redirectPersistence=zn,this._completeRedirectFn=Ws}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return vm()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return YE(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await GE();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function _m(t){return t.unwrap()}function JE(t){return t.wrapped()}/**
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
 */function XE(t){return wm(t)}function ZE(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new eI(t,Dw(t,e))}else if(r){const i=wm(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function wm(t){const{_tokenResponse:e}=t instanceof _t?t.customData:t;if(!e)return null;if(!(t instanceof _t)&&"temporaryProof"in e&&"phoneNumber"in e)return bn.credentialFromResult(t);const n=e.providerId;if(!n||n===Wr.PASSWORD)return null;let r;switch(n){case Wr.GOOGLE:r=ht;break;case Wr.FACEBOOK:r=ft;break;case Wr.GITHUB:r=pt;break;case Wr.TWITTER:r=mt;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:l}=e;return!o&&!s&&!i&&!a?null:a?n.startsWith("saml.")?us._create(n,a):wt._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:o}):new hr(n).credential({idToken:i,accessToken:o,rawNonce:l})}return t instanceof _t?r.credentialFromError(t):r.credentialFromResult(t)}async function Ne(t,e){let n;try{n=await e}catch(o){throw o instanceof _t&&ZE(t,o),o}const{operationType:r,user:i}=n;return{operationType:r,credential:XE(n),additionalUserInfo:Lw(n),user:Rt.getOrCreate(i)}}async function bl(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ne(t,n.confirm(r))}}class eI{constructor(e,n){this.resolver=n,this.auth=JE(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ne(_m(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Rt{constructor(e){this._delegate=e,this.multiFactor=zw(e)}static getOrCreate(e){return Rt.USER_MAP.has(e)||Rt.USER_MAP.set(e,new Rt(e)),Rt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ne(this.auth,Kp(this._delegate,e))}async linkWithPhoneNumber(e,n){return bl(this.auth,g1(this._delegate,e,n))}async linkWithPopup(e){return Ne(this.auth,C1(this._delegate,e,Kt))}async linkWithRedirect(e){return await zl(ce(this.auth)),M1(this._delegate,e,Kt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ne(this.auth,Qp(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return bl(this.auth,y1(this._delegate,e,n))}reauthenticateWithPopup(e){return Ne(this.auth,T1(this._delegate,e,Kt))}async reauthenticateWithRedirect(e){return await zl(ce(this.auth)),L1(this._delegate,e,Kt)}sendEmailVerification(e){return Iw(this._delegate,e)}async unlink(e){return await lw(this._delegate,e),this}updateEmail(e){return Cw(this._delegate,e)}updatePassword(e){return Rw(this._delegate,e)}updatePhoneNumber(e){return _1(this._delegate,e)}updateProfile(e){return Tw(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return kw(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Rt.USER_MAP=new WeakMap;/**
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
 */const Hr=S;class jl{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Hr(r,"invalid-api-key",{appName:e.name});let i=[Di];if(typeof window<"u"){i=QE(r,e.name);for(const s of[Oo,xl,zn])i.includes(s)||i.push(s)}Hr(r,"invalid-api-key",{appName:e.name});const o=typeof window<"u"?Kt:void 0;this._delegate=n.initialize({options:{persistence:i,popupRedirectResolver:o}}),this._delegate._updateErrorMap(y_),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Rt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){$_(this._delegate,e,n)}applyActionCode(e){return hw(this._delegate,e)}checkActionCode(e){return Yp(this._delegate,e)}confirmPasswordReset(e,n){return fw(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ne(this._delegate,mw(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Ew(this._delegate,e)}isSignInWithEmailLink(e){return yw(this._delegate,e)}async getRedirectResult(){Hr(Ca(),this._delegate,"operation-not-supported-in-this-environment");const e=await F1(this._delegate,Kt);return e?Ne(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){zE(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:o,complete:s}=Vd(e,n,r);return this._delegate.onAuthStateChanged(i,o,s)}onIdTokenChanged(e,n,r){const{next:i,error:o,complete:s}=Vd(e,n,r);return this._delegate.onIdTokenChanged(i,o,s)}sendSignInLinkToEmail(e,n){return gw(this._delegate,e,n)}sendPasswordResetEmail(e,n){return dw(this._delegate,e,n||void 0)}async setPersistence(e){KE(this._delegate,e);let n;switch(e){case ze.SESSION:n=zn;break;case ze.LOCAL:n=await je(Oo)._isAvailable()?Oo:xl;break;case ze.NONE:n=Di;break;default:return Ie("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ne(this._delegate,aw(this._delegate))}signInWithCredential(e){return Ne(this._delegate,Fs(this._delegate,e))}signInWithCustomToken(e){return Ne(this._delegate,cw(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ne(this._delegate,vw(this._delegate,e,n))}signInWithEmailLink(e,n){return Ne(this._delegate,_w(this._delegate,e,n))}signInWithPhoneNumber(e,n){return bl(this._delegate,v1(this._delegate,e,n))}async signInWithPopup(e){return Hr(Ca(),this._delegate,"operation-not-supported-in-this-environment"),Ne(this._delegate,S1(this._delegate,e,Kt))}async signInWithRedirect(e){return Hr(Ca(),this._delegate,"operation-not-supported-in-this-environment"),await zl(this._delegate),x1(this._delegate,e,Kt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return pw(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}jl.Persistence=ze;function Vd(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:s=>i(s&&Rt.getOrCreate(s)),error:e,complete:n}}/**
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
 */class ic{constructor(){this.providerId="phone",this._delegate=new bn(_m(Dt.auth()))}static credential(e,n){return bn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}ic.PHONE_SIGN_IN_METHOD=bn.PHONE_SIGN_IN_METHOD;ic.PROVIDER_ID=bn.PROVIDER_ID;/**
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
 */const tI=S;class nI{constructor(e,n,r=Dt.app()){var i;tI((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new p1(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const rI="auth-compat";function iI(t){t.INTERNAL.registerComponent(new Un(rI,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new jl(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:qn.EMAIL_SIGNIN,PASSWORD_RESET:qn.PASSWORD_RESET,RECOVER_EMAIL:qn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:qn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:qn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:qn.VERIFY_EMAIL}},EmailAuthProvider:hn,FacebookAuthProvider:ft,GithubAuthProvider:pt,GoogleAuthProvider:ht,OAuthProvider:hr,PhoneAuthProvider:ic,PhoneMultiFactorGenerator:hE,RecaptchaVerifier:nI,TwitterAuthProvider:mt,Auth:jl,AuthCredential:Lr,Error:_t}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(bE,jE)}iI(Dt);const oI="_fullBody_dqqu3_1",sI="_navbar_dqqu3_13",aI="_header_dqqu3_33",lI="_headerText_dqqu3_45",uI="_logButton_dqqu3_65",cI="_welcome_dqqu3_107",dI="_cart_dqqu3_139",fI="_routebar_dqqu3_161",hI="_subroutebar1_dqqu3_171",pI="_subroutebar2_dqqu3_185",mI="_routerposition_dqqu3_199",vI="_subrouterposition_dqqu3_213",gI="_routerText_dqqu3_243",yI="_routedbody_dqqu3_267",_I="_shopText_dqqu3_283",wI="_sales_dqqu3_297",EI="_subSales_dqqu3_313",II="_subSalesAlt_dqqu3_325",kI="_items_dqqu3_337",SI="_item_dqqu3_337",O={fullBody:oI,navbar:sI,header:aI,headerText:lI,logButton:uI,welcome:cI,cart:dI,routebar:fI,subroutebar1:hI,subroutebar2:pI,routerposition:mI,subrouterposition:vI,routerText:gI,routedbody:yI,shopText:_I,sales:wI,subSales:EI,subSalesAlt:II,items:kI,item:SI},TI={apiKey:"AIzaSyBHAesyFHnXxm6C-VGw73W3l_fOqVzHzMg",authDomain:"fakeshop-c3103.firebaseapp.com",projectId:"fakeshop-c3103",appId:"1:1062737401479:web:d9cdf6024891467c670a22"};Dt.initializeApp(TI);const CI=t=>{localStorage.setItem("username",t)};function Em(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Em(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Qt(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=Em(t))&&(r&&(r+=" "),r+=e);return r}const li=t=>typeof t=="number"&&!isNaN(t),$n=t=>typeof t=="string",xe=t=>typeof t=="function",Do=t=>$n(t)||xe(t)?t:null,Ra=t=>k.isValidElement(t)||$n(t)||xe(t)||li(t);function RI(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Bs(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:m}=s;const v=r?`${e}--${l}`:e,g=r?`${n}--${l}`:n,_=k.useRef(0);return k.useLayoutEffect(()=>{const E=d.current,h=v.split(" "),f=p=>{p.target===d.current&&(E.dispatchEvent(new Event("d")),E.removeEventListener("animationend",f),E.removeEventListener("animationcancel",f),_.current===0&&p.type!=="animationcancel"&&E.classList.remove(...h))};E.classList.add(...h),E.addEventListener("animationend",f),E.addEventListener("animationcancel",f)},[]),k.useEffect(()=>{const E=d.current,h=()=>{E.removeEventListener("animationend",h),i?RI(E,c,o):c()};m||(u?h():(_.current=1,E.className+=` ${g}`,E.addEventListener("animationend",h)))},[m]),$.createElement($.Fragment,null,a)}}function Wd(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const He={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},po=t=>{let{theme:e,type:n,...r}=t;return $.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Na={info:function(t){return $.createElement(po,{...t},$.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return $.createElement(po,{...t},$.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return $.createElement(po,{...t},$.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return $.createElement(po,{...t},$.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return $.createElement("div",{className:"Toastify__spinner"})}};function NI(t){const[,e]=k.useReducer(v=>v+1,0),[n,r]=k.useState([]),i=k.useRef(null),o=k.useRef(new Map).current,s=v=>n.indexOf(v)!==-1,a=k.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:v=>o.get(v)}).current;function l(v){let{containerId:g}=v;const{limit:_}=a.props;!_||g&&a.containerId!==g||(a.count-=a.queue.length,a.queue=[])}function u(v){r(g=>v==null?[]:g.filter(_=>_!==v))}function c(){const{toastContent:v,toastProps:g,staleId:_}=a.queue.shift();m(v,g,_)}function d(v,g){let{delay:_,staleId:E,...h}=g;if(!Ra(v)||function(se){return!i.current||a.props.enableMultiContainer&&se.containerId!==a.props.containerId||o.has(se.toastId)&&se.updateId==null}(h))return;const{toastId:f,updateId:p,data:y}=h,{props:I}=a,N=()=>u(f),P=p==null;P&&a.count++;const C={...I,style:I.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(h).filter(se=>{let[ke,ge]=se;return ge!=null})),toastId:f,updateId:p,data:y,closeToast:N,isIn:!1,className:Do(h.className||I.toastClassName),bodyClassName:Do(h.bodyClassName||I.bodyClassName),progressClassName:Do(h.progressClassName||I.progressClassName),autoClose:!h.isLoading&&(F=h.autoClose,L=I.autoClose,F===!1||li(F)&&F>0?F:L),deleteToast(){const se=Wd(o.get(f),"removed");o.delete(f),He.emit(4,se);const ke=a.queue.length;if(a.count=f==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),ke>0){const ge=f==null?a.props.limit:1;if(ke===1||ge===1)a.displayedToast++,c();else{const Et=ge>ke?ke:ge;a.displayedToast=Et;for(let fe=0;fe<Et;fe++)c()}}else e()}};var F,L;C.iconOut=function(se){let{theme:ke,type:ge,isLoading:Et,icon:fe}=se,Ue=null;const R={theme:ke,type:ge};return fe===!1||(xe(fe)?Ue=fe(R):k.isValidElement(fe)?Ue=k.cloneElement(fe,R):$n(fe)||li(fe)?Ue=fe:Et?Ue=Na.spinner():(A=>A in Na)(ge)&&(Ue=Na[ge](R))),Ue}(C),xe(h.onOpen)&&(C.onOpen=h.onOpen),xe(h.onClose)&&(C.onClose=h.onClose),C.closeButton=I.closeButton,h.closeButton===!1||Ra(h.closeButton)?C.closeButton=h.closeButton:h.closeButton===!0&&(C.closeButton=!Ra(I.closeButton)||I.closeButton);let ne=v;k.isValidElement(v)&&!$n(v.type)?ne=k.cloneElement(v,{closeToast:N,toastProps:C,data:y}):xe(v)&&(ne=v({closeToast:N,toastProps:C,data:y})),I.limit&&I.limit>0&&a.count>I.limit&&P?a.queue.push({toastContent:ne,toastProps:C,staleId:E}):li(_)?setTimeout(()=>{m(ne,C,E)},_):m(ne,C,E)}function m(v,g,_){const{toastId:E}=g;_&&o.delete(_);const h={content:v,props:g};o.set(E,h),r(f=>[...f,E].filter(p=>p!==_)),He.emit(4,Wd(h,h.props.updateId==null?"added":"updated"))}return k.useEffect(()=>(a.containerId=t.containerId,He.cancelEmit(3).on(0,d).on(1,v=>i.current&&u(v)).on(5,l).emit(2,a),()=>{o.clear(),He.emit(3,a)}),[]),k.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(v){const g=new Map,_=Array.from(o.values());return t.newestOnTop&&_.reverse(),_.forEach(E=>{const{position:h}=E.props;g.has(h)||g.set(h,[]),g.get(h).push(E)}),Array.from(g,E=>v(E[0],E[1]))},containerRef:i,isToastActive:s}}function Bd(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function Hd(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function PI(t){const[e,n]=k.useState(!1),[r,i]=k.useState(!1),o=k.useRef(null),s=k.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=k.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:m}=t;function v(y){if(t.draggable){y.nativeEvent.type==="touchstart"&&y.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",h),document.addEventListener("mouseup",f),document.addEventListener("touchmove",h),document.addEventListener("touchend",f);const I=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=I.getBoundingClientRect(),I.style.transition="",s.x=Bd(y.nativeEvent),s.y=Hd(y.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=I.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=I.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function g(y){if(s.boundingRect){const{top:I,bottom:N,left:P,right:C}=s.boundingRect;y.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=P&&s.x<=C&&s.y>=I&&s.y<=N?E():_()}}function _(){n(!0)}function E(){n(!1)}function h(y){const I=o.current;s.canDrag&&I&&(s.didMove=!0,e&&E(),s.x=Bd(y),s.y=Hd(y),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),I.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,I.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function f(){document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",f);const y=o.current;if(s.canDrag&&s.didMove&&y){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();y.style.transition="transform 0.2s, opacity 0.2s",y.style.transform=`translate${t.draggableDirection}(0)`,y.style.opacity="1"}}k.useEffect(()=>{a.current=t}),k.useEffect(()=>(o.current&&o.current.addEventListener("d",_,{once:!0}),xe(t.onOpen)&&t.onOpen(k.isValidElement(t.children)&&t.children.props),()=>{const y=a.current;xe(y.onClose)&&y.onClose(k.isValidElement(y.children)&&y.children.props)}),[]),k.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",_),window.addEventListener("blur",E)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",_),window.removeEventListener("blur",E))}),[t.pauseOnFocusLoss]);const p={onMouseDown:v,onTouchStart:v,onMouseUp:g,onTouchEnd:g};return l&&u&&(p.onMouseEnter=E,p.onMouseLeave=_),m&&(p.onClick=y=>{d&&d(y),s.canCloseOnClick&&c()}),{playToast:_,pauseToast:E,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:p}}function Im(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return $.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},$.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},$.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function OI(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:u,rtl:c,isIn:d,theme:m}=t;const v=o||l&&u===0,g={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:v?0:1};l&&(g.transform=`scaleX(${u})`);const _=Qt("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),E=xe(s)?s({rtl:c,type:i,defaultClassName:_}):Qt(_,s);return $.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:E,style:g,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{d&&r()}})}const xI=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=PI(t),{closeButton:o,children:s,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:d,transition:m,position:v,className:g,style:_,bodyClassName:E,bodyStyle:h,progressClassName:f,progressStyle:p,updateId:y,role:I,progress:N,rtl:P,toastId:C,deleteToast:F,isIn:L,isLoading:ne,iconOut:se,closeOnClick:ke,theme:ge}=t,Et=Qt("Toastify__toast",`Toastify__toast-theme--${ge}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":ke}),fe=xe(g)?g({rtl:P,position:v,type:u,defaultClassName:Et}):Qt(Et,g),Ue=!!N||!a,R={closeToast:d,type:u,theme:ge};let A=null;return o===!1||(A=xe(o)?o(R):k.isValidElement(o)?k.cloneElement(o,R):Im(R)),$.createElement(m,{isIn:L,done:F,position:v,preventExitTransition:n,nodeRef:r},$.createElement("div",{id:C,onClick:l,className:fe,...i,style:_,ref:r},$.createElement("div",{...L&&{role:I},className:xe(E)?E({type:u}):Qt("Toastify__toast-body",E),style:h},se!=null&&$.createElement("div",{className:Qt("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ne})},se),$.createElement("div",null,s)),A,$.createElement(OI,{...y&&!Ue?{key:`pb-${y}`}:{},rtl:P,theme:ge,delay:a,isRunning:e,isIn:L,closeToast:d,hide:c,type:u,style:p,className:f,controlledProgress:Ue,progress:N||0})))},Hs=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},AI=Bs(Hs("bounce",!0));Bs(Hs("slide",!0));Bs(Hs("zoom"));Bs(Hs("flip"));const $l=k.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=NI(t),{className:o,style:s,rtl:a,containerId:l}=t;function u(c){const d=Qt("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":a});return xe(o)?o({position:c,rtl:a,defaultClassName:d}):Qt(d,Do(o))}return k.useEffect(()=>{e&&(e.current=r.current)},[]),$.createElement("div",{ref:r,className:"Toastify",id:l},n((c,d)=>{const m=d.length?{...s}:{...s,pointerEvents:"none"};return $.createElement("div",{className:u(c),style:m,key:`container-${c}`},d.map((v,g)=>{let{content:_,props:E}=v;return $.createElement(xI,{...E,isIn:i(E.toastId),style:{...E.style,"--nth":g+1,"--len":d.length},key:`toast-${E.key}`},_)}))}))});$l.displayName="ToastContainer",$l.defaultProps={position:"top-right",transition:AI,autoClose:5e3,closeButton:Im,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Pa,En=new Map,Jr=[],LI=1;function km(){return""+LI++}function DI(t){return t&&($n(t.toastId)||li(t.toastId))?t.toastId:km()}function ui(t,e){return En.size>0?He.emit(0,t,e):Jr.push({content:t,options:e}),e.toastId}function ps(t,e){return{...e,type:e&&e.type||t,toastId:DI(e)}}function mo(t){return(e,n)=>ui(e,ps(t,n))}function B(t,e){return ui(t,ps("default",e))}B.loading=(t,e)=>ui(t,ps("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),B.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=$n(i)?B.loading(i,n):B.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,m)=>{if(d==null)return void B.dismiss(r);const v={type:c,...a,...n,data:m},g=$n(d)?{render:d}:d;return r?B.update(r,{...v,...g}):B(g.render,{...v,...g}),m},u=xe(t)?t():t;return u.then(c=>l("success",s,c)).catch(c=>l("error",o,c)),u},B.success=mo("success"),B.info=mo("info"),B.error=mo("error"),B.warning=mo("warning"),B.warn=B.warning,B.dark=(t,e)=>ui(t,ps("default",{theme:"dark",...e})),B.dismiss=t=>{En.size>0?He.emit(1,t):Jr=Jr.filter(e=>t!=null&&e.options.toastId!==t)},B.clearWaitingQueue=function(t){return t===void 0&&(t={}),He.emit(5,t)},B.isActive=t=>{let e=!1;return En.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},B.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=En.get(o||Pa);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:km()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,ui(s,o)}},0)},B.done=t=>{B.update(t,{progress:1})},B.onChange=t=>(He.on(4,t),()=>{He.off(4,t)}),B.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},B.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},He.on(2,t=>{Pa=t.containerId||t,En.set(Pa,t),Jr.forEach(e=>{He.emit(0,e.content,e.options)}),Jr=[]}).on(3,t=>{En.delete(t.containerId||t),En.size===0&&He.off(0).off(1).off(5)});const MI=()=>{const t=()=>{const e=new Dt.auth.GoogleAuthProvider;e.setCustomParameters({prompt:"select_account"}),Dt.auth().signInWithPopup(e).then(n=>{const r=n.user,i=r.displayName;CI(i),B.success("Successfully logged in!"),console.log("Logged in user:",r)}).catch(n=>{console.error("Error logging in:",n)})};return w.jsx(w.Fragment,{children:w.jsx("a",{className:O.logButton,onClick:t,children:"Sign In"})})},UI=()=>{const t=()=>{Dt.auth().signOut().then(()=>{console.log("User logged out successfully"),B.success("Successfully logged out!")}).catch(e=>{console.error("Error logging out:",e)})};return w.jsx(w.Fragment,{children:w.jsx("a",{className:O.logButton,onClick:t,children:"Sign Out"})})},FI="/FakeShop/assets/shopping-cart-free-15-svgrepo-com-c5675160.svg";function zI(){const[t,e]=k.useState(null);k.useEffect(()=>{const r=Dt.auth().onAuthStateChanged(i=>{e(i)});return()=>r()},[]);const n=localStorage.getItem("username");return w.jsx("div",{children:t?w.jsxs("div",{className:O.fullBody,children:[w.jsxs("div",{className:O.navbar,children:[w.jsx(UI,{}),w.jsxs("p",{className:O.welcome,children:["Welcome, ",n]}),w.jsx("img",{className:O.cart,src:FI})]}),w.jsx("div",{className:O.header,children:w.jsx(ut,{className:O.headerText,to:"/fakeshop/",children:"Louis Betong"})}),w.jsxs("div",{className:O.routebar,children:[w.jsxs("div",{className:O.subroutebar1,children:[w.jsx("div",{className:O.routerposition,children:w.jsx("div",{className:O.subrouterposition,children:w.jsx(ut,{className:O.routerText,to:"/fakeshop/hats",children:"Hats"})})}),w.jsx("div",{className:O.routerposition,children:w.jsx("div",{className:O.subrouterposition,children:w.jsx(ut,{className:O.routerText,to:"/fakeshop/shirts",children:"Shirts"})})})]}),w.jsxs("div",{className:O.subroutebar2,children:[w.jsx("div",{className:O.routerposition,children:w.jsx("div",{className:O.subrouterposition,children:w.jsx(ut,{className:O.routerText,to:"/fakeshop/pants",children:"Pants"})})}),w.jsx("div",{className:O.routerposition,children:w.jsx("div",{className:O.subrouterposition,children:w.jsx(ut,{className:O.routerText,to:"/fakeshop/shoes",children:"Shoes"})})})]})]}),w.jsx(yd,{})]}):w.jsxs("div",{className:O.fullBody,children:[w.jsx("div",{className:O.navbar,children:w.jsx(MI,{})}),w.jsx("div",{className:O.header,children:w.jsx(ut,{className:O.headerText,to:"/fakeshop/",children:"Louis Betong"})}),w.jsxs("div",{className:O.routebar,children:[w.jsxs("div",{className:O.subroutebar1,children:[w.jsx("div",{className:O.routerposition,children:w.jsx("div",{className:O.subrouterposition,children:w.jsx(ut,{className:O.routerText,to:"/fakeshop/hats",children:"Hats"})})}),w.jsx("div",{className:O.routerposition,children:w.jsx("div",{className:O.subrouterposition,children:w.jsx(ut,{className:O.routerText,to:"/fakeshop/shirts",children:"Shirts"})})})]}),w.jsxs("div",{className:O.subroutebar2,children:[w.jsx("div",{className:O.routerposition,children:w.jsx("div",{className:O.subrouterposition,children:w.jsx(ut,{className:O.routerText,to:"/fakeshop/pants",children:"Pants"})})}),w.jsx("div",{className:O.routerposition,children:w.jsx("div",{className:O.subrouterposition,children:w.jsx(ut,{className:O.routerText,to:"/fakeshop/shoes",children:"Shoes"})})})]})]}),w.jsx(yd,{})]})})}function bI(){return w.jsxs("div",{className:O.routedbody,children:[w.jsx("p",{className:O.shopText,children:"Welcome to Louis Betong online shop."}),w.jsxs("div",{className:O.sales,children:[w.jsx("div",{className:O.subSales}),w.jsx("div",{className:O.subSalesAlt})]}),w.jsxs("div",{className:O.sales,children:[w.jsx("div",{className:O.subSalesAlt}),w.jsx("div",{className:O.subSales})]}),w.jsxs("div",{className:O.sales,children:[w.jsx("div",{className:O.subSales}),w.jsx("div",{className:O.subSalesAlt})]})]})}function jI(){return w.jsxs("div",{className:O.routedbody,children:[w.jsx("p",{className:O.shopText,children:"Welcome to Louis Betong online shop."}),w.jsxs("div",{className:O.items,children:[w.jsx("div",{className:O.item}),w.jsx("div",{className:O.item}),w.jsx("div",{className:O.item}),w.jsx("div",{className:O.item}),w.jsx("div",{className:O.item}),w.jsx("div",{className:O.item}),w.jsx("div",{className:O.item}),w.jsx("div",{className:O.item}),w.jsx("div",{className:O.item}),w.jsx("div",{className:O.item}),w.jsx("div",{className:O.item}),w.jsx("div",{className:O.item})]})]})}function $I(){return w.jsx("h1",{children:"hi2"})}function VI(){return w.jsx("h1",{children:"hi3"})}function WI(){return w.jsx("h1",{children:"hi4"})}function BI(){return w.jsxs(w.Fragment,{children:[w.jsx(Ky,{children:w.jsx(Vy,{children:w.jsxs(jt,{path:"/fakeshop",element:w.jsx(zI,{}),children:[w.jsx(jt,{index:!0,element:w.jsx(bI,{})}),w.jsx(jt,{path:"hats",element:w.jsx(jI,{})}),w.jsx(jt,{path:"shirts",element:w.jsx($I,{})}),w.jsx(jt,{path:"pants",element:w.jsx(VI,{})}),w.jsx(jt,{path:"shoes",element:w.jsx(WI,{})}),w.jsx(jt,{path:"*",element:w.jsx("h1",{children:"404"})})]})})}),w.jsx($l,{position:"top-left"})]})}Oa.createRoot(document.getElementById("root")).render(w.jsx($.StrictMode,{children:w.jsx(BI,{})}));
