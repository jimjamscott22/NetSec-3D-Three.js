var J_=Object.defineProperty;var e1=(t,e,n)=>e in t?J_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ge=(t,e,n)=>e1(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function t1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var K0={exports:{}},Gc={},Z0={exports:{}},ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),n1=Symbol.for("react.portal"),i1=Symbol.for("react.fragment"),r1=Symbol.for("react.strict_mode"),s1=Symbol.for("react.profiler"),a1=Symbol.for("react.provider"),o1=Symbol.for("react.context"),l1=Symbol.for("react.forward_ref"),c1=Symbol.for("react.suspense"),u1=Symbol.for("react.memo"),d1=Symbol.for("react.lazy"),Sp=Symbol.iterator;function f1(t){return t===null||typeof t!="object"?null:(t=Sp&&t[Sp]||t["@@iterator"],typeof t=="function"?t:null)}var Q0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J0=Object.assign,eg={};function Ra(t,e,n){this.props=t,this.context=e,this.refs=eg,this.updater=n||Q0}Ra.prototype.isReactComponent={};Ra.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ra.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tg(){}tg.prototype=Ra.prototype;function ah(t,e,n){this.props=t,this.context=e,this.refs=eg,this.updater=n||Q0}var oh=ah.prototype=new tg;oh.constructor=ah;J0(oh,Ra.prototype);oh.isPureReactComponent=!0;var Mp=Array.isArray,ng=Object.prototype.hasOwnProperty,lh={current:null},ig={key:!0,ref:!0,__self:!0,__source:!0};function rg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)ng.call(e,i)&&!ig.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:$o,type:t,key:s,ref:a,props:r,_owner:lh.current}}function h1(t,e){return{$$typeof:$o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ch(t){return typeof t=="object"&&t!==null&&t.$$typeof===$o}function p1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ep=/\/+/g;function du(t,e){return typeof t=="object"&&t!==null&&t.key!=null?p1(""+t.key):e.toString(36)}function ql(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case $o:case n1:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+du(a,0):i,Mp(r)?(n="",t!=null&&(n=t.replace(Ep,"$&/")+"/"),ql(r,e,n,"",function(c){return c})):r!=null&&(ch(r)&&(r=h1(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ep,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Mp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+du(s,o);a+=ql(s,e,n,l,r)}else if(l=f1(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+du(s,o++),a+=ql(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function nl(t,e,n){if(t==null)return t;var i=[],r=0;return ql(t,i,"","",function(s){return e.call(n,s,r++)}),i}function m1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var En={current:null},Yl={transition:null},g1={ReactCurrentDispatcher:En,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:lh};function sg(){throw Error("act(...) is not supported in production builds of React.")}ut.Children={map:nl,forEach:function(t,e,n){nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nl(t,function(){e++}),e},toArray:function(t){return nl(t,function(e){return e})||[]},only:function(t){if(!ch(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ut.Component=Ra;ut.Fragment=i1;ut.Profiler=s1;ut.PureComponent=ah;ut.StrictMode=r1;ut.Suspense=c1;ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g1;ut.act=sg;ut.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=J0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=lh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)ng.call(e,l)&&!ig.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:$o,type:t.type,key:r,ref:s,props:i,_owner:a}};ut.createContext=function(t){return t={$$typeof:o1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:a1,_context:t},t.Consumer=t};ut.createElement=rg;ut.createFactory=function(t){var e=rg.bind(null,t);return e.type=t,e};ut.createRef=function(){return{current:null}};ut.forwardRef=function(t){return{$$typeof:l1,render:t}};ut.isValidElement=ch;ut.lazy=function(t){return{$$typeof:d1,_payload:{_status:-1,_result:t},_init:m1}};ut.memo=function(t,e){return{$$typeof:u1,type:t,compare:e===void 0?null:e}};ut.startTransition=function(t){var e=Yl.transition;Yl.transition={};try{t()}finally{Yl.transition=e}};ut.unstable_act=sg;ut.useCallback=function(t,e){return En.current.useCallback(t,e)};ut.useContext=function(t){return En.current.useContext(t)};ut.useDebugValue=function(){};ut.useDeferredValue=function(t){return En.current.useDeferredValue(t)};ut.useEffect=function(t,e){return En.current.useEffect(t,e)};ut.useId=function(){return En.current.useId()};ut.useImperativeHandle=function(t,e,n){return En.current.useImperativeHandle(t,e,n)};ut.useInsertionEffect=function(t,e){return En.current.useInsertionEffect(t,e)};ut.useLayoutEffect=function(t,e){return En.current.useLayoutEffect(t,e)};ut.useMemo=function(t,e){return En.current.useMemo(t,e)};ut.useReducer=function(t,e,n){return En.current.useReducer(t,e,n)};ut.useRef=function(t){return En.current.useRef(t)};ut.useState=function(t){return En.current.useState(t)};ut.useSyncExternalStore=function(t,e,n){return En.current.useSyncExternalStore(t,e,n)};ut.useTransition=function(){return En.current.useTransition()};ut.version="18.3.1";Z0.exports=ut;var se=Z0.exports;const v1=t1(se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x1=se,_1=Symbol.for("react.element"),y1=Symbol.for("react.fragment"),S1=Object.prototype.hasOwnProperty,M1=x1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E1={key:!0,ref:!0,__self:!0,__source:!0};function ag(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)S1.call(e,i)&&!E1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_1,type:t,key:s,ref:a,props:r,_owner:M1.current}}Gc.Fragment=y1;Gc.jsx=ag;Gc.jsxs=ag;K0.exports=Gc;var f=K0.exports,yd={},og={exports:{}},$n={},lg={exports:{}},cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,Z){var K=I.length;I.push(Z);e:for(;0<K;){var he=K-1>>>1,ke=I[he];if(0<r(ke,Z))I[he]=Z,I[K]=ke,K=he;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var Z=I[0],K=I.pop();if(K!==Z){I[0]=K;e:for(var he=0,ke=I.length,ft=ke>>>1;he<ft;){var X=2*(he+1)-1,le=I[X],ye=X+1,ue=I[ye];if(0>r(le,K))ye<ke&&0>r(ue,le)?(I[he]=ue,I[ye]=K,he=ye):(I[he]=le,I[X]=K,he=X);else if(ye<ke&&0>r(ue,K))I[he]=ue,I[ye]=K,he=ye;else break e}}return Z}function r(I,Z){var K=I.sortIndex-Z.sortIndex;return K!==0?K:I.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,p=3,m=!1,v=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=I)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function _(I){if(S=!1,y(I),!v)if(n(l)!==null)v=!0,q(R);else{var Z=n(c);Z!==null&&ie(_,Z.startTime-I)}}function R(I,Z){v=!1,S&&(S=!1,u(N),N=-1),m=!0;var K=p;try{for(y(Z),h=n(l);h!==null&&(!(h.expirationTime>Z)||I&&!P());){var he=h.callback;if(typeof he=="function"){h.callback=null,p=h.priorityLevel;var ke=he(h.expirationTime<=Z);Z=t.unstable_now(),typeof ke=="function"?h.callback=ke:h===n(l)&&i(l),y(Z)}else i(l);h=n(l)}if(h!==null)var ft=!0;else{var X=n(c);X!==null&&ie(_,X.startTime-Z),ft=!1}return ft}finally{h=null,p=K,m=!1}}var C=!1,T=null,N=-1,E=5,M=-1;function P(){return!(t.unstable_now()-M<E)}function V(){if(T!==null){var I=t.unstable_now();M=I;var Z=!0;try{Z=T(!0,I)}finally{Z?H():(C=!1,T=null)}}else C=!1}var H;if(typeof x=="function")H=function(){x(V)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,ee=Y.port2;Y.port1.onmessage=V,H=function(){ee.postMessage(null)}}else H=function(){g(V,0)};function q(I){T=I,C||(C=!0,H())}function ie(I,Z){N=g(function(){I(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,q(R))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(p){case 1:case 2:case 3:var Z=3;break;default:Z=p}var K=p;p=Z;try{return I()}finally{p=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=p;p=I;try{return Z()}finally{p=K}},t.unstable_scheduleCallback=function(I,Z,K){var he=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?he+K:he):K=he,I){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=K+ke,I={id:d++,callback:Z,priorityLevel:I,startTime:K,expirationTime:ke,sortIndex:-1},K>he?(I.sortIndex=K,e(c,I),n(l)===null&&I===n(c)&&(S?(u(N),N=-1):S=!0,ie(_,K-he))):(I.sortIndex=ke,e(l,I),v||m||(v=!0,q(R))),I},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(I){var Z=p;return function(){var K=p;p=Z;try{return I.apply(this,arguments)}finally{p=K}}}})(cg);lg.exports=cg;var w1=lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1=se,Wn=w1;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ug=new Set,To={};function Es(t,e){ma(t,e),ma(t+"Capture",e)}function ma(t,e){for(To[t]=e,t=0;t<e.length;t++)ug.add(e[t])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sd=Object.prototype.hasOwnProperty,T1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wp={},bp={};function C1(t){return Sd.call(bp,t)?!0:Sd.call(wp,t)?!1:T1.test(t)?bp[t]=!0:(wp[t]=!0,!1)}function A1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R1(t,e,n,i){if(e===null||typeof e>"u"||A1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){an[t]=new wn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];an[e]=new wn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){an[t]=new wn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){an[t]=new wn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){an[t]=new wn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){an[t]=new wn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){an[t]=new wn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){an[t]=new wn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){an[t]=new wn(t,5,!1,t.toLowerCase(),null,!1,!1)});var uh=/[\-:]([a-z])/g;function dh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uh,dh);an[e]=new wn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uh,dh);an[e]=new wn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uh,dh);an[e]=new wn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){an[t]=new wn(t,1,!1,t.toLowerCase(),null,!1,!1)});an.xlinkHref=new wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){an[t]=new wn(t,1,!1,t.toLowerCase(),null,!0,!0)});function fh(t,e,n,i){var r=an.hasOwnProperty(e)?an[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R1(e,n,r,i)&&(n=null),i||r===null?C1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var cr=b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,il=Symbol.for("react.element"),Xs=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),hh=Symbol.for("react.strict_mode"),Md=Symbol.for("react.profiler"),dg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),ph=Symbol.for("react.forward_ref"),Ed=Symbol.for("react.suspense"),wd=Symbol.for("react.suspense_list"),mh=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),hg=Symbol.for("react.offscreen"),Tp=Symbol.iterator;function Ga(t){return t===null||typeof t!="object"?null:(t=Tp&&t[Tp]||t["@@iterator"],typeof t=="function"?t:null)}var Bt=Object.assign,fu;function ro(t){if(fu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fu=e&&e[1]||""}return`
`+fu+t}var hu=!1;function pu(t,e){if(!t||hu)return"";hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ro(t):""}function N1(t){switch(t.tag){case 5:return ro(t.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return t=pu(t.type,!1),t;case 11:return t=pu(t.type.render,!1),t;case 1:return t=pu(t.type,!0),t;default:return""}}function bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qs:return"Fragment";case Xs:return"Portal";case Md:return"Profiler";case hh:return"StrictMode";case Ed:return"Suspense";case wd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fg:return(t.displayName||"Context")+".Consumer";case dg:return(t._context.displayName||"Context")+".Provider";case ph:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mh:return e=t.displayName||null,e!==null?e:bd(t.type)||"Memo";case yr:e=t._payload,t=t._init;try{return bd(t(e))}catch{}}return null}function P1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bd(e);case 8:return e===hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function L1(t){var e=pg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rl(t){t._valueTracker||(t._valueTracker=L1(t))}function mg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=pg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Td(t,e){var n=e.checked;return Bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gg(t,e){e=e.checked,e!=null&&fh(t,"checked",e,!1)}function Cd(t,e){gg(t,e);var n=Fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ad(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ad(t,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ap(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ad(t,e,n){(e!=="number"||hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var so=Array.isArray;function aa(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Rd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(so(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fr(n)}}function vg(t,e){var n=Fr(e.value),i=Fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Np(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sl,_g=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sl=sl||document.createElement("div"),sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k1=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(t){k1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),uo[e]=uo[t]})});function yg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||uo.hasOwnProperty(t)&&uo[t]?(""+e).trim():e+"px"}function Sg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=yg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var I1=Bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pd(t,e){if(e){if(I1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Ld(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kd=null;function gh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Id=null,oa=null,la=null;function Pp(t){if(t=Yo(t)){if(typeof Id!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=qc(e),Id(t.stateNode,t.type,e))}}function Mg(t){oa?la?la.push(t):la=[t]:oa=t}function Eg(){if(oa){var t=oa,e=la;if(la=oa=null,Pp(t),e)for(t=0;t<e.length;t++)Pp(e[t])}}function wg(t,e){return t(e)}function bg(){}var mu=!1;function Tg(t,e,n){if(mu)return t(e,n);mu=!0;try{return wg(t,e,n)}finally{mu=!1,(oa!==null||la!==null)&&(bg(),Eg())}}function Ao(t,e){var n=t.stateNode;if(n===null)return null;var i=qc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Dd=!1;if(rr)try{var ja={};Object.defineProperty(ja,"passive",{get:function(){Dd=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{Dd=!1}function D1(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var fo=!1,pc=null,mc=!1,Ud=null,U1={onError:function(t){fo=!0,pc=t}};function O1(t,e,n,i,r,s,a,o,l){fo=!1,pc=null,D1.apply(U1,arguments)}function F1(t,e,n,i,r,s,a,o,l){if(O1.apply(this,arguments),fo){if(fo){var c=pc;fo=!1,pc=null}else throw Error(ae(198));mc||(mc=!0,Ud=c)}}function ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lp(t){if(ws(t)!==t)throw Error(ae(188))}function B1(t){var e=t.alternate;if(!e){if(e=ws(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Lp(r),t;if(s===i)return Lp(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function Ag(t){return t=B1(t),t!==null?Rg(t):null}function Rg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Rg(t);if(e!==null)return e;t=t.sibling}return null}var Ng=Wn.unstable_scheduleCallback,kp=Wn.unstable_cancelCallback,z1=Wn.unstable_shouldYield,H1=Wn.unstable_requestPaint,Ht=Wn.unstable_now,V1=Wn.unstable_getCurrentPriorityLevel,vh=Wn.unstable_ImmediatePriority,Pg=Wn.unstable_UserBlockingPriority,gc=Wn.unstable_NormalPriority,G1=Wn.unstable_LowPriority,Lg=Wn.unstable_IdlePriority,jc=null,Oi=null;function j1(t){if(Oi&&typeof Oi.onCommitFiberRoot=="function")try{Oi.onCommitFiberRoot(jc,t,void 0,(t.current.flags&128)===128)}catch{}}var yi=Math.clz32?Math.clz32:X1,W1=Math.log,$1=Math.LN2;function X1(t){return t>>>=0,t===0?32:31-(W1(t)/$1|0)|0}var al=64,ol=4194304;function ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ao(o):(s&=a,s!==0&&(i=ao(s)))}else a=n&~r,a!==0?i=ao(a):s!==0&&(i=ao(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-yi(e),r=1<<n,i|=t[n],e&=~r;return i}function q1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-yi(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=q1(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Od(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kg(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yi(e),t[e]=n}function K1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-yi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function xh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-yi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var St=0;function Ig(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dg,_h,Ug,Og,Fg,Fd=!1,ll=[],Ar=null,Rr=null,Nr=null,Ro=new Map,No=new Map,Mr=[],Z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ip(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":Ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(e.pointerId)}}function Wa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Yo(e),e!==null&&_h(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Q1(t,e,n,i,r){switch(e){case"focusin":return Ar=Wa(Ar,t,e,n,i,r),!0;case"dragenter":return Rr=Wa(Rr,t,e,n,i,r),!0;case"mouseover":return Nr=Wa(Nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ro.set(s,Wa(Ro.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,No.set(s,Wa(No.get(s)||null,t,e,n,i,r)),!0}return!1}function Bg(t){var e=os(t.target);if(e!==null){var n=ws(e);if(n!==null){if(e=n.tag,e===13){if(e=Cg(n),e!==null){t.blockedOn=e,Fg(t.priority,function(){Ug(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);kd=i,n.target.dispatchEvent(i),kd=null}else return e=Yo(n),e!==null&&_h(e),t.blockedOn=n,!1;e.shift()}return!0}function Dp(t,e,n){Kl(t)&&n.delete(e)}function J1(){Fd=!1,Ar!==null&&Kl(Ar)&&(Ar=null),Rr!==null&&Kl(Rr)&&(Rr=null),Nr!==null&&Kl(Nr)&&(Nr=null),Ro.forEach(Dp),No.forEach(Dp)}function $a(t,e){t.blockedOn===e&&(t.blockedOn=null,Fd||(Fd=!0,Wn.unstable_scheduleCallback(Wn.unstable_NormalPriority,J1)))}function Po(t){function e(r){return $a(r,t)}if(0<ll.length){$a(ll[0],t);for(var n=1;n<ll.length;n++){var i=ll[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ar!==null&&$a(Ar,t),Rr!==null&&$a(Rr,t),Nr!==null&&$a(Nr,t),Ro.forEach(e),No.forEach(e),n=0;n<Mr.length;n++)i=Mr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Mr.length&&(n=Mr[0],n.blockedOn===null);)Bg(n),n.blockedOn===null&&Mr.shift()}var ca=cr.ReactCurrentBatchConfig,xc=!0;function ey(t,e,n,i){var r=St,s=ca.transition;ca.transition=null;try{St=1,yh(t,e,n,i)}finally{St=r,ca.transition=s}}function ty(t,e,n,i){var r=St,s=ca.transition;ca.transition=null;try{St=4,yh(t,e,n,i)}finally{St=r,ca.transition=s}}function yh(t,e,n,i){if(xc){var r=Bd(t,e,n,i);if(r===null)Tu(t,e,i,_c,n),Ip(t,i);else if(Q1(r,t,e,n,i))i.stopPropagation();else if(Ip(t,i),e&4&&-1<Z1.indexOf(t)){for(;r!==null;){var s=Yo(r);if(s!==null&&Dg(s),s=Bd(t,e,n,i),s===null&&Tu(t,e,i,_c,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Tu(t,e,i,null,n)}}var _c=null;function Bd(t,e,n,i){if(_c=null,t=gh(i),t=os(t),t!==null)if(e=ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _c=t,null}function zg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V1()){case vh:return 1;case Pg:return 4;case gc:case G1:return 16;case Lg:return 536870912;default:return 16}default:return 16}}var br=null,Sh=null,Zl=null;function Hg(){if(Zl)return Zl;var t,e=Sh,n=e.length,i,r="value"in br?br.value:br.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Zl=r.slice(t,1<i?1-i:void 0)}function Ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function Up(){return!1}function Xn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cl:Up,this.isPropagationStopped=Up,this}return Bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mh=Xn(Na),qo=Bt({},Na,{view:0,detail:0}),ny=Xn(qo),vu,xu,Xa,Wc=Bt({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xa&&(Xa&&t.type==="mousemove"?(vu=t.screenX-Xa.screenX,xu=t.screenY-Xa.screenY):xu=vu=0,Xa=t),vu)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),Op=Xn(Wc),iy=Bt({},Wc,{dataTransfer:0}),ry=Xn(iy),sy=Bt({},qo,{relatedTarget:0}),_u=Xn(sy),ay=Bt({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),oy=Xn(ay),ly=Bt({},Na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cy=Xn(ly),uy=Bt({},Na,{data:0}),Fp=Xn(uy),dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function py(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hy[t])?!!e[t]:!1}function Eh(){return py}var my=Bt({},qo,{key:function(t){if(t.key){var e=dy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eh,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gy=Xn(my),vy=Bt({},Wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=Xn(vy),xy=Bt({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eh}),_y=Xn(xy),yy=Bt({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sy=Xn(yy),My=Bt({},Wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ey=Xn(My),wy=[9,13,27,32],wh=rr&&"CompositionEvent"in window,ho=null;rr&&"documentMode"in document&&(ho=document.documentMode);var by=rr&&"TextEvent"in window&&!ho,Vg=rr&&(!wh||ho&&8<ho&&11>=ho),zp=" ",Hp=!1;function Gg(t,e){switch(t){case"keyup":return wy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function Ty(t,e){switch(t){case"compositionend":return jg(e);case"keypress":return e.which!==32?null:(Hp=!0,zp);case"textInput":return t=e.data,t===zp&&Hp?null:t;default:return null}}function Cy(t,e){if(Ys)return t==="compositionend"||!wh&&Gg(t,e)?(t=Hg(),Zl=Sh=br=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vg&&e.locale!=="ko"?null:e.data;default:return null}}var Ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ay[t.type]:e==="textarea"}function Wg(t,e,n,i){Mg(i),e=yc(e,"onChange"),0<e.length&&(n=new Mh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var po=null,Lo=null;function Ry(t){nv(t,0)}function $c(t){var e=Qs(t);if(mg(e))return t}function Ny(t,e){if(t==="change")return e}var $g=!1;if(rr){var yu;if(rr){var Su="oninput"in document;if(!Su){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Su=typeof Gp.oninput=="function"}yu=Su}else yu=!1;$g=yu&&(!document.documentMode||9<document.documentMode)}function jp(){po&&(po.detachEvent("onpropertychange",Xg),Lo=po=null)}function Xg(t){if(t.propertyName==="value"&&$c(Lo)){var e=[];Wg(e,Lo,t,gh(t)),Tg(Ry,e)}}function Py(t,e,n){t==="focusin"?(jp(),po=e,Lo=n,po.attachEvent("onpropertychange",Xg)):t==="focusout"&&jp()}function Ly(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $c(Lo)}function ky(t,e){if(t==="click")return $c(e)}function Iy(t,e){if(t==="input"||t==="change")return $c(e)}function Dy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ei=typeof Object.is=="function"?Object.is:Dy;function ko(t,e){if(Ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Sd.call(e,r)||!Ei(t[r],e[r]))return!1}return!0}function Wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,e){var n=Wp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wp(n)}}function qg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yg(){for(var t=window,e=hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hc(t.document)}return e}function bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Uy(t){var e=Yg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qg(n.ownerDocument.documentElement,n)){if(i!==null&&bh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$p(n,s);var a=$p(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Oy=rr&&"documentMode"in document&&11>=document.documentMode,Ks=null,zd=null,mo=null,Hd=!1;function Xp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hd||Ks==null||Ks!==hc(i)||(i=Ks,"selectionStart"in i&&bh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),mo&&ko(mo,i)||(mo=i,i=yc(zd,"onSelect"),0<i.length&&(e=new Mh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ks)))}function ul(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zs={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionend:ul("Transition","TransitionEnd")},Mu={},Kg={};rr&&(Kg=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Xc(t){if(Mu[t])return Mu[t];if(!Zs[t])return t;var e=Zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kg)return Mu[t]=e[n];return t}var Zg=Xc("animationend"),Qg=Xc("animationiteration"),Jg=Xc("animationstart"),ev=Xc("transitionend"),tv=new Map,qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){tv.set(t,e),Es(e,[t])}for(var Eu=0;Eu<qp.length;Eu++){var wu=qp[Eu],Fy=wu.toLowerCase(),By=wu[0].toUpperCase()+wu.slice(1);Vr(Fy,"on"+By)}Vr(Zg,"onAnimationEnd");Vr(Qg,"onAnimationIteration");Vr(Jg,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(ev,"onTransitionEnd");ma("onMouseEnter",["mouseout","mouseover"]);ma("onMouseLeave",["mouseout","mouseover"]);ma("onPointerEnter",["pointerout","pointerover"]);ma("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zy=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Yp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,F1(i,e,void 0,t),t.currentTarget=null}function nv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Yp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Yp(r,o,c),s=l}}}if(mc)throw t=Ud,mc=!1,Ud=null,t}function kt(t,e){var n=e[$d];n===void 0&&(n=e[$d]=new Set);var i=t+"__bubble";n.has(i)||(iv(e,t,2,!1),n.add(i))}function bu(t,e,n){var i=0;e&&(i|=4),iv(n,t,i,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[dl]){t[dl]=!0,ug.forEach(function(n){n!=="selectionchange"&&(zy.has(n)||bu(n,!1,t),bu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,bu("selectionchange",!1,e))}}function iv(t,e,n,i){switch(zg(e)){case 1:var r=ey;break;case 4:r=ty;break;default:r=yh}n=r.bind(null,e,n,t),r=void 0,!Dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=os(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Tg(function(){var c=s,d=gh(n),h=[];e:{var p=tv.get(t);if(p!==void 0){var m=Mh,v=t;switch(t){case"keypress":if(Ql(n)===0)break e;case"keydown":case"keyup":m=gy;break;case"focusin":v="focus",m=_u;break;case"focusout":v="blur",m=_u;break;case"beforeblur":case"afterblur":m=_u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=_y;break;case Zg:case Qg:case Jg:m=oy;break;case ev:m=Sy;break;case"scroll":m=ny;break;case"wheel":m=Ey;break;case"copy":case"cut":case"paste":m=cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Bp}var S=(e&4)!==0,g=!S&&t==="scroll",u=S?p!==null?p+"Capture":null:p;S=[];for(var x=c,y;x!==null;){y=x;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,u!==null&&(_=Ao(x,u),_!=null&&S.push(Do(x,_,y)))),g)break;x=x.return}0<S.length&&(p=new m(p,v,null,n,d),h.push({event:p,listeners:S}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==kd&&(v=n.relatedTarget||n.fromElement)&&(os(v)||v[sr]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?os(v):null,v!==null&&(g=ws(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(S=Op,_="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(S=Bp,_="onPointerLeave",u="onPointerEnter",x="pointer"),g=m==null?p:Qs(m),y=v==null?p:Qs(v),p=new S(_,x+"leave",m,n,d),p.target=g,p.relatedTarget=y,_=null,os(d)===c&&(S=new S(u,x+"enter",v,n,d),S.target=y,S.relatedTarget=g,_=S),g=_,m&&v)t:{for(S=m,u=v,x=0,y=S;y;y=Ps(y))x++;for(y=0,_=u;_;_=Ps(_))y++;for(;0<x-y;)S=Ps(S),x--;for(;0<y-x;)u=Ps(u),y--;for(;x--;){if(S===u||u!==null&&S===u.alternate)break t;S=Ps(S),u=Ps(u)}S=null}else S=null;m!==null&&Kp(h,p,m,S,!1),v!==null&&g!==null&&Kp(h,g,v,S,!0)}}e:{if(p=c?Qs(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var R=Ny;else if(Vp(p))if($g)R=Iy;else{R=Ly;var C=Py}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(R=ky);if(R&&(R=R(t,c))){Wg(h,R,n,d);break e}C&&C(t,p,c),t==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Ad(p,"number",p.value)}switch(C=c?Qs(c):window,t){case"focusin":(Vp(C)||C.contentEditable==="true")&&(Ks=C,zd=c,mo=null);break;case"focusout":mo=zd=Ks=null;break;case"mousedown":Hd=!0;break;case"contextmenu":case"mouseup":case"dragend":Hd=!1,Xp(h,n,d);break;case"selectionchange":if(Oy)break;case"keydown":case"keyup":Xp(h,n,d)}var T;if(wh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ys?Gg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Vg&&n.locale!=="ko"&&(Ys||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ys&&(T=Hg()):(br=d,Sh="value"in br?br.value:br.textContent,Ys=!0)),C=yc(c,N),0<C.length&&(N=new Fp(N,t,null,n,d),h.push({event:N,listeners:C}),T?N.data=T:(T=jg(n),T!==null&&(N.data=T)))),(T=by?Ty(t,n):Cy(t,n))&&(c=yc(c,"onBeforeInput"),0<c.length&&(d=new Fp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}nv(h,e)})}function Do(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ao(t,n),s!=null&&i.unshift(Do(t,s,r)),s=Ao(t,e),s!=null&&i.push(Do(t,s,r))),t=t.return}return i}function Ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ao(n,s),l!=null&&a.unshift(Do(n,l,o))):r||(l=Ao(n,s),l!=null&&a.push(Do(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Hy=/\r\n?/g,Vy=/\u0000|\uFFFD/g;function Zp(t){return(typeof t=="string"?t:""+t).replace(Hy,`
`).replace(Vy,"")}function fl(t,e,n){if(e=Zp(e),Zp(t)!==e&&n)throw Error(ae(425))}function Sc(){}var Vd=null,Gd=null;function jd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wd=typeof setTimeout=="function"?setTimeout:void 0,Gy=typeof clearTimeout=="function"?clearTimeout:void 0,Qp=typeof Promise=="function"?Promise:void 0,jy=typeof queueMicrotask=="function"?queueMicrotask:typeof Qp<"u"?function(t){return Qp.resolve(null).then(t).catch(Wy)}:Wd;function Wy(t){setTimeout(function(){throw t})}function Cu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Po(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Po(e)}function Pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Pa=Math.random().toString(36).slice(2),Di="__reactFiber$"+Pa,Uo="__reactProps$"+Pa,sr="__reactContainer$"+Pa,$d="__reactEvents$"+Pa,$y="__reactListeners$"+Pa,Xy="__reactHandles$"+Pa;function os(t){var e=t[Di];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sr]||n[Di]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jp(t);t!==null;){if(n=t[Di])return n;t=Jp(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[Di]||t[sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function qc(t){return t[Uo]||null}var Xd=[],Js=-1;function Gr(t){return{current:t}}function It(t){0>Js||(t.current=Xd[Js],Xd[Js]=null,Js--)}function Pt(t,e){Js++,Xd[Js]=t.current,t.current=e}var Br={},gn=Gr(Br),Pn=Gr(!1),gs=Br;function ga(t,e){var n=t.type.contextTypes;if(!n)return Br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Ln(t){return t=t.childContextTypes,t!=null}function Mc(){It(Pn),It(gn)}function em(t,e,n){if(gn.current!==Br)throw Error(ae(168));Pt(gn,e),Pt(Pn,n)}function rv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,P1(t)||"Unknown",r));return Bt({},n,i)}function Ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,gs=gn.current,Pt(gn,t),Pt(Pn,Pn.current),!0}function tm(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=rv(t,e,gs),i.__reactInternalMemoizedMergedChildContext=t,It(Pn),It(gn),Pt(gn,t)):It(Pn),Pt(Pn,n)}var Ki=null,Yc=!1,Au=!1;function sv(t){Ki===null?Ki=[t]:Ki.push(t)}function qy(t){Yc=!0,sv(t)}function jr(){if(!Au&&Ki!==null){Au=!0;var t=0,e=St;try{var n=Ki;for(St=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ki=null,Yc=!1}catch(r){throw Ki!==null&&(Ki=Ki.slice(t+1)),Ng(vh,jr),r}finally{St=e,Au=!1}}return null}var ea=[],ta=0,wc=null,bc=0,Qn=[],Jn=0,vs=null,Qi=1,Ji="";function ts(t,e){ea[ta++]=bc,ea[ta++]=wc,wc=t,bc=e}function av(t,e,n){Qn[Jn++]=Qi,Qn[Jn++]=Ji,Qn[Jn++]=vs,vs=t;var i=Qi;t=Ji;var r=32-yi(i)-1;i&=~(1<<r),n+=1;var s=32-yi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Qi=1<<32-yi(e)+r|n<<r|i,Ji=s+t}else Qi=1<<s|n<<r|i,Ji=t}function Th(t){t.return!==null&&(ts(t,1),av(t,1,0))}function Ch(t){for(;t===wc;)wc=ea[--ta],ea[ta]=null,bc=ea[--ta],ea[ta]=null;for(;t===vs;)vs=Qn[--Jn],Qn[Jn]=null,Ji=Qn[--Jn],Qn[Jn]=null,Qi=Qn[--Jn],Qn[Jn]=null}var jn=null,Gn=null,Ut=!1,vi=null;function ov(t,e){var n=ei(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function nm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jn=t,Gn=Pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jn=t,Gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vs!==null?{id:Qi,overflow:Ji}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ei(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jn=t,Gn=null,!0):!1;default:return!1}}function qd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yd(t){if(Ut){var e=Gn;if(e){var n=e;if(!nm(t,e)){if(qd(t))throw Error(ae(418));e=Pr(n.nextSibling);var i=jn;e&&nm(t,e)?ov(i,n):(t.flags=t.flags&-4097|2,Ut=!1,jn=t)}}else{if(qd(t))throw Error(ae(418));t.flags=t.flags&-4097|2,Ut=!1,jn=t}}}function im(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jn=t}function hl(t){if(t!==jn)return!1;if(!Ut)return im(t),Ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jd(t.type,t.memoizedProps)),e&&(e=Gn)){if(qd(t))throw lv(),Error(ae(418));for(;e;)ov(t,e),e=Pr(e.nextSibling)}if(im(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Gn=Pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Gn=null}}else Gn=jn?Pr(t.stateNode.nextSibling):null;return!0}function lv(){for(var t=Gn;t;)t=Pr(t.nextSibling)}function va(){Gn=jn=null,Ut=!1}function Ah(t){vi===null?vi=[t]:vi.push(t)}var Yy=cr.ReactCurrentBatchConfig;function qa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function pl(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rm(t){var e=t._init;return e(t._payload)}function cv(t){function e(u,x){if(t){var y=u.deletions;y===null?(u.deletions=[x],u.flags|=16):y.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u,x){for(u=new Map;x!==null;)x.key!==null?u.set(x.key,x):u.set(x.index,x),x=x.sibling;return u}function r(u,x){return u=Dr(u,x),u.index=0,u.sibling=null,u}function s(u,x,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<x?(u.flags|=2,x):y):(u.flags|=2,x)):(u.flags|=1048576,x)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,x,y,_){return x===null||x.tag!==6?(x=Du(y,u.mode,_),x.return=u,x):(x=r(x,y),x.return=u,x)}function l(u,x,y,_){var R=y.type;return R===qs?d(u,x,y.props.children,_,y.key):x!==null&&(x.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===yr&&rm(R)===x.type)?(_=r(x,y.props),_.ref=qa(u,x,y),_.return=u,_):(_=sc(y.type,y.key,y.props,null,u.mode,_),_.ref=qa(u,x,y),_.return=u,_)}function c(u,x,y,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Uu(y,u.mode,_),x.return=u,x):(x=r(x,y.children||[]),x.return=u,x)}function d(u,x,y,_,R){return x===null||x.tag!==7?(x=hs(y,u.mode,_,R),x.return=u,x):(x=r(x,y),x.return=u,x)}function h(u,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Du(""+x,u.mode,y),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case il:return y=sc(x.type,x.key,x.props,null,u.mode,y),y.ref=qa(u,null,x),y.return=u,y;case Xs:return x=Uu(x,u.mode,y),x.return=u,x;case yr:var _=x._init;return h(u,_(x._payload),y)}if(so(x)||Ga(x))return x=hs(x,u.mode,y,null),x.return=u,x;pl(u,x)}return null}function p(u,x,y,_){var R=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return R!==null?null:o(u,x,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case il:return y.key===R?l(u,x,y,_):null;case Xs:return y.key===R?c(u,x,y,_):null;case yr:return R=y._init,p(u,x,R(y._payload),_)}if(so(y)||Ga(y))return R!==null?null:d(u,x,y,_,null);pl(u,y)}return null}function m(u,x,y,_,R){if(typeof _=="string"&&_!==""||typeof _=="number")return u=u.get(y)||null,o(x,u,""+_,R);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case il:return u=u.get(_.key===null?y:_.key)||null,l(x,u,_,R);case Xs:return u=u.get(_.key===null?y:_.key)||null,c(x,u,_,R);case yr:var C=_._init;return m(u,x,y,C(_._payload),R)}if(so(_)||Ga(_))return u=u.get(y)||null,d(x,u,_,R,null);pl(x,_)}return null}function v(u,x,y,_){for(var R=null,C=null,T=x,N=x=0,E=null;T!==null&&N<y.length;N++){T.index>N?(E=T,T=null):E=T.sibling;var M=p(u,T,y[N],_);if(M===null){T===null&&(T=E);break}t&&T&&M.alternate===null&&e(u,T),x=s(M,x,N),C===null?R=M:C.sibling=M,C=M,T=E}if(N===y.length)return n(u,T),Ut&&ts(u,N),R;if(T===null){for(;N<y.length;N++)T=h(u,y[N],_),T!==null&&(x=s(T,x,N),C===null?R=T:C.sibling=T,C=T);return Ut&&ts(u,N),R}for(T=i(u,T);N<y.length;N++)E=m(T,u,N,y[N],_),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?N:E.key),x=s(E,x,N),C===null?R=E:C.sibling=E,C=E);return t&&T.forEach(function(P){return e(u,P)}),Ut&&ts(u,N),R}function S(u,x,y,_){var R=Ga(y);if(typeof R!="function")throw Error(ae(150));if(y=R.call(y),y==null)throw Error(ae(151));for(var C=R=null,T=x,N=x=0,E=null,M=y.next();T!==null&&!M.done;N++,M=y.next()){T.index>N?(E=T,T=null):E=T.sibling;var P=p(u,T,M.value,_);if(P===null){T===null&&(T=E);break}t&&T&&P.alternate===null&&e(u,T),x=s(P,x,N),C===null?R=P:C.sibling=P,C=P,T=E}if(M.done)return n(u,T),Ut&&ts(u,N),R;if(T===null){for(;!M.done;N++,M=y.next())M=h(u,M.value,_),M!==null&&(x=s(M,x,N),C===null?R=M:C.sibling=M,C=M);return Ut&&ts(u,N),R}for(T=i(u,T);!M.done;N++,M=y.next())M=m(T,u,N,M.value,_),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?N:M.key),x=s(M,x,N),C===null?R=M:C.sibling=M,C=M);return t&&T.forEach(function(V){return e(u,V)}),Ut&&ts(u,N),R}function g(u,x,y,_){if(typeof y=="object"&&y!==null&&y.type===qs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case il:e:{for(var R=y.key,C=x;C!==null;){if(C.key===R){if(R=y.type,R===qs){if(C.tag===7){n(u,C.sibling),x=r(C,y.props.children),x.return=u,u=x;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===yr&&rm(R)===C.type){n(u,C.sibling),x=r(C,y.props),x.ref=qa(u,C,y),x.return=u,u=x;break e}n(u,C);break}else e(u,C);C=C.sibling}y.type===qs?(x=hs(y.props.children,u.mode,_,y.key),x.return=u,u=x):(_=sc(y.type,y.key,y.props,null,u.mode,_),_.ref=qa(u,x,y),_.return=u,u=_)}return a(u);case Xs:e:{for(C=y.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(u,x.sibling),x=r(x,y.children||[]),x.return=u,u=x;break e}else{n(u,x);break}else e(u,x);x=x.sibling}x=Uu(y,u.mode,_),x.return=u,u=x}return a(u);case yr:return C=y._init,g(u,x,C(y._payload),_)}if(so(y))return v(u,x,y,_);if(Ga(y))return S(u,x,y,_);pl(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(u,x.sibling),x=r(x,y),x.return=u,u=x):(n(u,x),x=Du(y,u.mode,_),x.return=u,u=x),a(u)):n(u,x)}return g}var xa=cv(!0),uv=cv(!1),Tc=Gr(null),Cc=null,na=null,Rh=null;function Nh(){Rh=na=Cc=null}function Ph(t){var e=Tc.current;It(Tc),t._currentValue=e}function Kd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ua(t,e){Cc=t,Rh=na=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nn=!0),t.firstContext=null)}function ni(t){var e=t._currentValue;if(Rh!==t)if(t={context:t,memoizedValue:e,next:null},na===null){if(Cc===null)throw Error(ae(308));na=t,Cc.dependencies={lanes:0,firstContext:t}}else na=na.next=t;return e}var ls=null;function Lh(t){ls===null?ls=[t]:ls.push(t)}function dv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Lh(e)):(n.next=r.next,r.next=n),e.interleaved=n,ar(t,i)}function ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sr=!1;function kh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,vt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ar(t,n)}return r=i.interleaved,r===null?(e.next=e,Lh(i)):(e.next=r.next,r.next=e),i.interleaved=e,ar(t,n)}function Jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xh(t,n)}}function sm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ac(t,e,n,i){var r=t.updateQueue;Sr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var p=o.lane,m=o.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,S=o;switch(p=e,m=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){h=v.call(m,h,p);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,p=typeof v=="function"?v.call(m,h,p):v,p==null)break e;h=Bt({},h,p);break e;case 2:Sr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else m={eventTime:m,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);_s|=a,t.lanes=a,t.memoizedState=h}}function am(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Ko={},Fi=Gr(Ko),Oo=Gr(Ko),Fo=Gr(Ko);function cs(t){if(t===Ko)throw Error(ae(174));return t}function Ih(t,e){switch(Pt(Fo,e),Pt(Oo,t),Pt(Fi,Ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nd(e,t)}It(Fi),Pt(Fi,e)}function _a(){It(Fi),It(Oo),It(Fo)}function hv(t){cs(Fo.current);var e=cs(Fi.current),n=Nd(e,t.type);e!==n&&(Pt(Oo,t),Pt(Fi,n))}function Dh(t){Oo.current===t&&(It(Fi),It(Oo))}var Ot=Gr(0);function Rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ru=[];function Uh(){for(var t=0;t<Ru.length;t++)Ru[t]._workInProgressVersionPrimary=null;Ru.length=0}var ec=cr.ReactCurrentDispatcher,Nu=cr.ReactCurrentBatchConfig,xs=0,Ft=null,Xt=null,en=null,Nc=!1,go=!1,Bo=0,Ky=0;function cn(){throw Error(ae(321))}function Oh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ei(t[n],e[n]))return!1;return!0}function Fh(t,e,n,i,r,s){if(xs=s,Ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ec.current=t===null||t.memoizedState===null?eS:tS,t=n(i,r),go){s=0;do{if(go=!1,Bo=0,25<=s)throw Error(ae(301));s+=1,en=Xt=null,e.updateQueue=null,ec.current=nS,t=n(i,r)}while(go)}if(ec.current=Pc,e=Xt!==null&&Xt.next!==null,xs=0,en=Xt=Ft=null,Nc=!1,e)throw Error(ae(300));return t}function Bh(){var t=Bo!==0;return Bo=0,t}function Li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Ft.memoizedState=en=t:en=en.next=t,en}function ii(){if(Xt===null){var t=Ft.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var e=en===null?Ft.memoizedState:en.next;if(e!==null)en=e,Xt=t;else{if(t===null)throw Error(ae(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},en===null?Ft.memoizedState=en=t:en=en.next=t}return en}function zo(t,e){return typeof e=="function"?e(t):e}function Pu(t){var e=ii(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Xt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((xs&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Ft.lanes|=d,_s|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Ei(i,e.memoizedState)||(Nn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ft.lanes|=s,_s|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lu(t){var e=ii(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Ei(s,e.memoizedState)||(Nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function pv(){}function mv(t,e){var n=Ft,i=ii(),r=e(),s=!Ei(i.memoizedState,r);if(s&&(i.memoizedState=r,Nn=!0),i=i.queue,zh(xv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||en!==null&&en.memoizedState.tag&1){if(n.flags|=2048,Ho(9,vv.bind(null,n,i,r,e),void 0,null),nn===null)throw Error(ae(349));xs&30||gv(n,e,r)}return r}function gv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ft.updateQueue,e===null?(e={lastEffect:null,stores:null},Ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vv(t,e,n,i){e.value=n,e.getSnapshot=i,_v(e)&&yv(t)}function xv(t,e,n){return n(function(){_v(e)&&yv(t)})}function _v(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ei(t,n)}catch{return!0}}function yv(t){var e=ar(t,1);e!==null&&Si(e,t,1,-1)}function om(t){var e=Li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},e.queue=t,t=t.dispatch=Jy.bind(null,Ft,t),[e.memoizedState,t]}function Ho(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ft.updateQueue,e===null?(e={lastEffect:null,stores:null},Ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Sv(){return ii().memoizedState}function tc(t,e,n,i){var r=Li();Ft.flags|=t,r.memoizedState=Ho(1|e,n,void 0,i===void 0?null:i)}function Kc(t,e,n,i){var r=ii();i=i===void 0?null:i;var s=void 0;if(Xt!==null){var a=Xt.memoizedState;if(s=a.destroy,i!==null&&Oh(i,a.deps)){r.memoizedState=Ho(e,n,s,i);return}}Ft.flags|=t,r.memoizedState=Ho(1|e,n,s,i)}function lm(t,e){return tc(8390656,8,t,e)}function zh(t,e){return Kc(2048,8,t,e)}function Mv(t,e){return Kc(4,2,t,e)}function Ev(t,e){return Kc(4,4,t,e)}function wv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bv(t,e,n){return n=n!=null?n.concat([t]):null,Kc(4,4,wv.bind(null,e,t),n)}function Hh(){}function Tv(t,e){var n=ii();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Oh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Cv(t,e){var n=ii();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Oh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Av(t,e,n){return xs&21?(Ei(n,e)||(n=kg(),Ft.lanes|=n,_s|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nn=!0),t.memoizedState=n)}function Zy(t,e){var n=St;St=n!==0&&4>n?n:4,t(!0);var i=Nu.transition;Nu.transition={};try{t(!1),e()}finally{St=n,Nu.transition=i}}function Rv(){return ii().memoizedState}function Qy(t,e,n){var i=Ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Nv(t))Pv(e,n);else if(n=dv(t,e,n,i),n!==null){var r=Mn();Si(n,t,i,r),Lv(n,e,i)}}function Jy(t,e,n){var i=Ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nv(t))Pv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Ei(o,a)){var l=e.interleaved;l===null?(r.next=r,Lh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=dv(t,e,r,i),n!==null&&(r=Mn(),Si(n,t,i,r),Lv(n,e,i))}}function Nv(t){var e=t.alternate;return t===Ft||e!==null&&e===Ft}function Pv(t,e){go=Nc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Lv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xh(t,n)}}var Pc={readContext:ni,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},eS={readContext:ni,useCallback:function(t,e){return Li().memoizedState=[t,e===void 0?null:e],t},useContext:ni,useEffect:lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tc(4194308,4,wv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tc(4194308,4,t,e)},useInsertionEffect:function(t,e){return tc(4,2,t,e)},useMemo:function(t,e){var n=Li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Qy.bind(null,Ft,t),[i.memoizedState,t]},useRef:function(t){var e=Li();return t={current:t},e.memoizedState=t},useState:om,useDebugValue:Hh,useDeferredValue:function(t){return Li().memoizedState=t},useTransition:function(){var t=om(!1),e=t[0];return t=Zy.bind(null,t[1]),Li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ft,r=Li();if(Ut){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),nn===null)throw Error(ae(349));xs&30||gv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,lm(xv.bind(null,i,s,t),[t]),i.flags|=2048,Ho(9,vv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Li(),e=nn.identifierPrefix;if(Ut){var n=Ji,i=Qi;n=(i&~(1<<32-yi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ky++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tS={readContext:ni,useCallback:Tv,useContext:ni,useEffect:zh,useImperativeHandle:bv,useInsertionEffect:Mv,useLayoutEffect:Ev,useMemo:Cv,useReducer:Pu,useRef:Sv,useState:function(){return Pu(zo)},useDebugValue:Hh,useDeferredValue:function(t){var e=ii();return Av(e,Xt.memoizedState,t)},useTransition:function(){var t=Pu(zo)[0],e=ii().memoizedState;return[t,e]},useMutableSource:pv,useSyncExternalStore:mv,useId:Rv,unstable_isNewReconciler:!1},nS={readContext:ni,useCallback:Tv,useContext:ni,useEffect:zh,useImperativeHandle:bv,useInsertionEffect:Mv,useLayoutEffect:Ev,useMemo:Cv,useReducer:Lu,useRef:Sv,useState:function(){return Lu(zo)},useDebugValue:Hh,useDeferredValue:function(t){var e=ii();return Xt===null?e.memoizedState=t:Av(e,Xt.memoizedState,t)},useTransition:function(){var t=Lu(zo)[0],e=ii().memoizedState;return[t,e]},useMutableSource:pv,useSyncExternalStore:mv,useId:Rv,unstable_isNewReconciler:!1};function pi(t,e){if(t&&t.defaultProps){e=Bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Mn(),r=Ir(t),s=nr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,r),e!==null&&(Si(e,t,r,i),Jl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Mn(),r=Ir(t),s=nr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,r),e!==null&&(Si(e,t,r,i),Jl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Mn(),i=Ir(t),r=nr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Lr(t,r,i),e!==null&&(Si(e,t,i,n),Jl(e,t,i))}};function cm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ko(n,i)||!ko(r,s):!0}function kv(t,e,n){var i=!1,r=Br,s=e.contextType;return typeof s=="object"&&s!==null?s=ni(s):(r=Ln(e)?gs:gn.current,i=e.contextTypes,s=(i=i!=null)?ga(t,r):Br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function um(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function Qd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ni(s):(s=Ln(e)?gs:gn.current,r.context=ga(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zc.enqueueReplaceState(r,r.state,null),Ac(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ya(t,e){try{var n="",i=e;do n+=N1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ku(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iS=typeof WeakMap=="function"?WeakMap:Map;function Iv(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kc||(kc=!0,uf=i),Jd(t,e)},n}function Dv(t,e,n){n=nr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Jd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jd(t,e),typeof i!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function dm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new iS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=vS.bind(null,t,e,n),e.then(t,t))}function fm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,Lr(n,e,1))),n.lanes|=1),t)}var rS=cr.ReactCurrentOwner,Nn=!1;function Sn(t,e,n,i){e.child=t===null?uv(e,null,n,i):xa(e,t.child,n,i)}function pm(t,e,n,i,r){n=n.render;var s=e.ref;return ua(e,r),i=Fh(t,e,n,i,s,r),n=Bh(),t!==null&&!Nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,or(t,e,r)):(Ut&&n&&Th(e),e.flags|=1,Sn(t,e,i,r),e.child)}function mm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Yh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Uv(t,e,s,i,r)):(t=sc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ko,n(a,i)&&t.ref===e.ref)return or(t,e,r)}return e.flags|=1,t=Dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Uv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ko(s,i)&&t.ref===e.ref)if(Nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Nn=!0);else return e.lanes=t.lanes,or(t,e,r)}return ef(t,e,n,i,r)}function Ov(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(ra,zn),zn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pt(ra,zn),zn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Pt(ra,zn),zn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Pt(ra,zn),zn|=i;return Sn(t,e,r,n),e.child}function Fv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ef(t,e,n,i,r){var s=Ln(n)?gs:gn.current;return s=ga(e,s),ua(e,r),n=Fh(t,e,n,i,s,r),i=Bh(),t!==null&&!Nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,or(t,e,r)):(Ut&&i&&Th(e),e.flags|=1,Sn(t,e,n,r),e.child)}function gm(t,e,n,i,r){if(Ln(n)){var s=!0;Ec(e)}else s=!1;if(ua(e,r),e.stateNode===null)nc(t,e),kv(e,n,i),Qd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=ni(c):(c=Ln(n)?gs:gn.current,c=ga(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&um(e,a,i,c),Sr=!1;var p=e.memoizedState;a.state=p,Ac(e,i,a,r),l=e.memoizedState,o!==i||p!==l||Pn.current||Sr?(typeof d=="function"&&(Zd(e,n,d,i),l=e.memoizedState),(o=Sr||cm(e,n,o,i,p,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,fv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:pi(e.type,o),a.props=c,h=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=ni(l):(l=Ln(n)?gs:gn.current,l=ga(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||p!==l)&&um(e,a,i,l),Sr=!1,p=e.memoizedState,a.state=p,Ac(e,i,a,r);var v=e.memoizedState;o!==h||p!==v||Pn.current||Sr?(typeof m=="function"&&(Zd(e,n,m,i),v=e.memoizedState),(c=Sr||cm(e,n,c,i,p,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return tf(t,e,n,i,s,r)}function tf(t,e,n,i,r,s){Fv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&tm(e,n,!1),or(t,e,s);i=e.stateNode,rS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=xa(e,t.child,null,s),e.child=xa(e,null,o,s)):Sn(t,e,o,s),e.memoizedState=i.state,r&&tm(e,n,!0),e.child}function Bv(t){var e=t.stateNode;e.pendingContext?em(t,e.pendingContext,e.pendingContext!==e.context):e.context&&em(t,e.context,!1),Ih(t,e.containerInfo)}function vm(t,e,n,i,r){return va(),Ah(r),e.flags|=256,Sn(t,e,n,i),e.child}var nf={dehydrated:null,treeContext:null,retryLane:0};function rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function zv(t,e,n){var i=e.pendingProps,r=Ot.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Pt(Ot,r&1),t===null)return Yd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=eu(a,i,0,null),t=hs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rf(n),e.memoizedState=nf,t):Vh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return sS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Dr(o,s):(s=hs(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?rf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=nf,i}return s=t.child,t=s.sibling,i=Dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Vh(t,e){return e=eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ml(t,e,n,i){return i!==null&&Ah(i),xa(e,t.child,null,n),t=Vh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=ku(Error(ae(422))),ml(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=eu({mode:"visible",children:i.children},r,0,null),s=hs(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&xa(e,t.child,null,a),e.child.memoizedState=rf(a),e.memoizedState=nf,s);if(!(e.mode&1))return ml(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=ku(s,i,void 0),ml(t,e,a,i)}if(o=(a&t.childLanes)!==0,Nn||o){if(i=nn,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ar(t,r),Si(i,t,r,-1))}return qh(),i=ku(Error(ae(421))),ml(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=xS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Gn=Pr(r.nextSibling),jn=e,Ut=!0,vi=null,t!==null&&(Qn[Jn++]=Qi,Qn[Jn++]=Ji,Qn[Jn++]=vs,Qi=t.id,Ji=t.overflow,vs=e),e=Vh(e,i.children),e.flags|=4096,e)}function xm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Kd(t.return,e,n)}function Iu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Hv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Sn(t,e,i.children,n),i=Ot.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,n,e);else if(t.tag===19)xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Pt(Ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Iu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Iu(e,!0,n,null,s);break;case"together":Iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function or(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_s|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aS(t,e,n){switch(e.tag){case 3:Bv(e),va();break;case 5:hv(e);break;case 1:Ln(e.type)&&Ec(e);break;case 4:Ih(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Pt(Tc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Pt(Ot,Ot.current&1),e.flags|=128,null):n&e.child.childLanes?zv(t,e,n):(Pt(Ot,Ot.current&1),t=or(t,e,n),t!==null?t.sibling:null);Pt(Ot,Ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Hv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Pt(Ot,Ot.current),i)break;return null;case 22:case 23:return e.lanes=0,Ov(t,e,n)}return or(t,e,n)}var Vv,sf,Gv,jv;Vv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sf=function(){};Gv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,cs(Fi.current);var s=null;switch(n){case"input":r=Td(t,r),i=Td(t,i),s=[];break;case"select":r=Bt({},r,{value:void 0}),i=Bt({},i,{value:void 0}),s=[];break;case"textarea":r=Rd(t,r),i=Rd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sc)}Pd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(To.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(To.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&kt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};jv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ya(t,e){if(!Ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function un(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function oS(t,e,n){var i=e.pendingProps;switch(Ch(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(e),null;case 1:return Ln(e.type)&&Mc(),un(e),null;case 3:return i=e.stateNode,_a(),It(Pn),It(gn),Uh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vi!==null&&(hf(vi),vi=null))),sf(t,e),un(e),null;case 5:Dh(e);var r=cs(Fo.current);if(n=e.type,t!==null&&e.stateNode!=null)Gv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return un(e),null}if(t=cs(Fi.current),hl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Di]=e,i[Uo]=s,t=(e.mode&1)!==0,n){case"dialog":kt("cancel",i),kt("close",i);break;case"iframe":case"object":case"embed":kt("load",i);break;case"video":case"audio":for(r=0;r<oo.length;r++)kt(oo[r],i);break;case"source":kt("error",i);break;case"img":case"image":case"link":kt("error",i),kt("load",i);break;case"details":kt("toggle",i);break;case"input":Cp(i,s),kt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},kt("invalid",i);break;case"textarea":Rp(i,s),kt("invalid",i)}Pd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&fl(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&fl(i.textContent,o,t),r=["children",""+o]):To.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&kt("scroll",i)}switch(n){case"input":rl(i),Ap(i,s,!0);break;case"textarea":rl(i),Np(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Di]=e,t[Uo]=i,Vv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ld(n,i),n){case"dialog":kt("cancel",t),kt("close",t),r=i;break;case"iframe":case"object":case"embed":kt("load",t),r=i;break;case"video":case"audio":for(r=0;r<oo.length;r++)kt(oo[r],t);r=i;break;case"source":kt("error",t),r=i;break;case"img":case"image":case"link":kt("error",t),kt("load",t),r=i;break;case"details":kt("toggle",t),r=i;break;case"input":Cp(t,i),r=Td(t,i),kt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Bt({},i,{value:void 0}),kt("invalid",t);break;case"textarea":Rp(t,i),r=Rd(t,i),kt("invalid",t);break;default:r=i}Pd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Sg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_g(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Co(t,l):typeof l=="number"&&Co(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(To.hasOwnProperty(s)?l!=null&&s==="onScroll"&&kt("scroll",t):l!=null&&fh(t,s,l,a))}switch(n){case"input":rl(t),Ap(t,i,!1);break;case"textarea":rl(t),Np(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?aa(t,!!i.multiple,s,!1):i.defaultValue!=null&&aa(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return un(e),null;case 6:if(t&&e.stateNode!=null)jv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=cs(Fo.current),cs(Fi.current),hl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Di]=e,(s=i.nodeValue!==n)&&(t=jn,t!==null))switch(t.tag){case 3:fl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Di]=e,e.stateNode=i}return un(e),null;case 13:if(It(Ot),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Gn!==null&&e.mode&1&&!(e.flags&128))lv(),va(),e.flags|=98560,s=!1;else if(s=hl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Di]=e}else va(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;un(e),s=!1}else vi!==null&&(hf(vi),vi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ot.current&1?qt===0&&(qt=3):qh())),e.updateQueue!==null&&(e.flags|=4),un(e),null);case 4:return _a(),sf(t,e),t===null&&Io(e.stateNode.containerInfo),un(e),null;case 10:return Ph(e.type._context),un(e),null;case 17:return Ln(e.type)&&Mc(),un(e),null;case 19:if(It(Ot),s=e.memoizedState,s===null)return un(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ya(s,!1);else{if(qt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Rc(t),a!==null){for(e.flags|=128,Ya(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pt(Ot,Ot.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ht()>Sa&&(e.flags|=128,i=!0,Ya(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ya(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Ut)return un(e),null}else 2*Ht()-s.renderingStartTime>Sa&&n!==1073741824&&(e.flags|=128,i=!0,Ya(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ht(),e.sibling=null,n=Ot.current,Pt(Ot,i?n&1|2:n&1),e):(un(e),null);case 22:case 23:return Xh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?zn&1073741824&&(un(e),e.subtreeFlags&6&&(e.flags|=8192)):un(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function lS(t,e){switch(Ch(e),e.tag){case 1:return Ln(e.type)&&Mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _a(),It(Pn),It(gn),Uh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dh(e),null;case 13:if(It(Ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));va()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return It(Ot),null;case 4:return _a(),null;case 10:return Ph(e.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var gl=!1,pn=!1,cS=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function ia(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){zt(t,e,i)}else n.current=null}function af(t,e,n){try{n()}catch(i){zt(t,e,i)}}var _m=!1;function uS(t,e){if(Vd=xc,t=Yg(),bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,p=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)p=h,h=m;for(;;){if(h===t)break t;if(p===n&&++c===r&&(o=a),p===s&&++d===i&&(l=a),(m=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gd={focusedElem:t,selectionRange:n},xc=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,g=v.memoizedState,u=e.stateNode,x=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:pi(e.type,S),g);u.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(_){zt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return v=_m,_m=!1,v}function vo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&af(e,n,s)}r=r.next}while(r!==i)}}function Qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wv(t){var e=t.alternate;e!==null&&(t.alternate=null,Wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Di],delete e[Uo],delete e[$d],delete e[$y],delete e[Xy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $v(t){return t.tag===5||t.tag===3||t.tag===4}function ym(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$v(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sc));else if(i!==4&&(t=t.child,t!==null))for(lf(t,e,n),t=t.sibling;t!==null;)lf(t,e,n),t=t.sibling}function cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(cf(t,e,n),t=t.sibling;t!==null;)cf(t,e,n),t=t.sibling}var rn=null,mi=!1;function hr(t,e,n){for(n=n.child;n!==null;)Xv(t,e,n),n=n.sibling}function Xv(t,e,n){if(Oi&&typeof Oi.onCommitFiberUnmount=="function")try{Oi.onCommitFiberUnmount(jc,n)}catch{}switch(n.tag){case 5:pn||ia(n,e);case 6:var i=rn,r=mi;rn=null,hr(t,e,n),rn=i,mi=r,rn!==null&&(mi?(t=rn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rn.removeChild(n.stateNode));break;case 18:rn!==null&&(mi?(t=rn,n=n.stateNode,t.nodeType===8?Cu(t.parentNode,n):t.nodeType===1&&Cu(t,n),Po(t)):Cu(rn,n.stateNode));break;case 4:i=rn,r=mi,rn=n.stateNode.containerInfo,mi=!0,hr(t,e,n),rn=i,mi=r;break;case 0:case 11:case 14:case 15:if(!pn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&af(n,e,a),r=r.next}while(r!==i)}hr(t,e,n);break;case 1:if(!pn&&(ia(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){zt(n,e,o)}hr(t,e,n);break;case 21:hr(t,e,n);break;case 22:n.mode&1?(pn=(i=pn)||n.memoizedState!==null,hr(t,e,n),pn=i):hr(t,e,n);break;default:hr(t,e,n)}}function Sm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cS),e.forEach(function(i){var r=_S.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function li(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:rn=o.stateNode,mi=!1;break e;case 3:rn=o.stateNode.containerInfo,mi=!0;break e;case 4:rn=o.stateNode.containerInfo,mi=!0;break e}o=o.return}if(rn===null)throw Error(ae(160));Xv(s,a,r),rn=null,mi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){zt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qv(e,t),e=e.sibling}function qv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(li(e,t),Pi(t),i&4){try{vo(3,t,t.return),Qc(3,t)}catch(S){zt(t,t.return,S)}try{vo(5,t,t.return)}catch(S){zt(t,t.return,S)}}break;case 1:li(e,t),Pi(t),i&512&&n!==null&&ia(n,n.return);break;case 5:if(li(e,t),Pi(t),i&512&&n!==null&&ia(n,n.return),t.flags&32){var r=t.stateNode;try{Co(r,"")}catch(S){zt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&gg(r,s),Ld(o,a);var c=Ld(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?Sg(r,h):d==="dangerouslySetInnerHTML"?_g(r,h):d==="children"?Co(r,h):fh(r,d,h,c)}switch(o){case"input":Cd(r,s);break;case"textarea":vg(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?aa(r,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?aa(r,!!s.multiple,s.defaultValue,!0):aa(r,!!s.multiple,s.multiple?[]:"",!1))}r[Uo]=s}catch(S){zt(t,t.return,S)}}break;case 6:if(li(e,t),Pi(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){zt(t,t.return,S)}}break;case 3:if(li(e,t),Pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(e.containerInfo)}catch(S){zt(t,t.return,S)}break;case 4:li(e,t),Pi(t);break;case 13:li(e,t),Pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Wh=Ht())),i&4&&Sm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(pn=(c=pn)||d,li(e,t),pn=c):li(e,t),Pi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ae=t,d=t.child;d!==null;){for(h=Ae=d;Ae!==null;){switch(p=Ae,m=p.child,p.tag){case 0:case 11:case 14:case 15:vo(4,p,p.return);break;case 1:ia(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){zt(i,n,S)}}break;case 5:ia(p,p.return);break;case 22:if(p.memoizedState!==null){Em(h);continue}}m!==null?(m.return=p,Ae=m):Em(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=yg("display",a))}catch(S){zt(t,t.return,S)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){zt(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:li(e,t),Pi(t),i&4&&Sm(t);break;case 21:break;default:li(e,t),Pi(t)}}function Pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($v(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Co(r,""),i.flags&=-33);var s=ym(t);cf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=ym(t);lf(t,o,a);break;default:throw Error(ae(161))}}catch(l){zt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dS(t,e,n){Ae=t,Yv(t)}function Yv(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||gl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||pn;o=gl;var c=pn;if(gl=a,(pn=l)&&!c)for(Ae=r;Ae!==null;)a=Ae,l=a.child,a.tag===22&&a.memoizedState!==null?wm(r):l!==null?(l.return=a,Ae=l):wm(r);for(;s!==null;)Ae=s,Yv(s),s=s.sibling;Ae=r,gl=o,pn=c}Mm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):Mm(t)}}function Mm(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pn||Qc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!pn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:pi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&am(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}am(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Po(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}pn||e.flags&512&&of(e)}catch(p){zt(e,e.return,p)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Em(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function wm(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qc(4,e)}catch(l){zt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){zt(e,r,l)}}var s=e.return;try{of(e)}catch(l){zt(e,s,l)}break;case 5:var a=e.return;try{of(e)}catch(l){zt(e,a,l)}}}catch(l){zt(e,e.return,l)}if(e===t){Ae=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ae=o;break}Ae=e.return}}var fS=Math.ceil,Lc=cr.ReactCurrentDispatcher,Gh=cr.ReactCurrentOwner,ti=cr.ReactCurrentBatchConfig,vt=0,nn=null,Gt=null,sn=0,zn=0,ra=Gr(0),qt=0,Vo=null,_s=0,Jc=0,jh=0,xo=null,Rn=null,Wh=0,Sa=1/0,Yi=null,kc=!1,uf=null,kr=null,vl=!1,Tr=null,Ic=0,_o=0,df=null,ic=-1,rc=0;function Mn(){return vt&6?Ht():ic!==-1?ic:ic=Ht()}function Ir(t){return t.mode&1?vt&2&&sn!==0?sn&-sn:Yy.transition!==null?(rc===0&&(rc=kg()),rc):(t=St,t!==0||(t=window.event,t=t===void 0?16:zg(t.type)),t):1}function Si(t,e,n,i){if(50<_o)throw _o=0,df=null,Error(ae(185));Xo(t,n,i),(!(vt&2)||t!==nn)&&(t===nn&&(!(vt&2)&&(Jc|=n),qt===4&&Er(t,sn)),kn(t,i),n===1&&vt===0&&!(e.mode&1)&&(Sa=Ht()+500,Yc&&jr()))}function kn(t,e){var n=t.callbackNode;Y1(t,e);var i=vc(t,t===nn?sn:0);if(i===0)n!==null&&kp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&kp(n),e===1)t.tag===0?qy(bm.bind(null,t)):sv(bm.bind(null,t)),jy(function(){!(vt&6)&&jr()}),n=null;else{switch(Ig(i)){case 1:n=vh;break;case 4:n=Pg;break;case 16:n=gc;break;case 536870912:n=Lg;break;default:n=gc}n=ix(n,Kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kv(t,e){if(ic=-1,rc=0,vt&6)throw Error(ae(327));var n=t.callbackNode;if(da()&&t.callbackNode!==n)return null;var i=vc(t,t===nn?sn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dc(t,i);else{e=i;var r=vt;vt|=2;var s=Qv();(nn!==t||sn!==e)&&(Yi=null,Sa=Ht()+500,fs(t,e));do try{mS();break}catch(o){Zv(t,o)}while(!0);Nh(),Lc.current=s,vt=r,Gt!==null?e=0:(nn=null,sn=0,e=qt)}if(e!==0){if(e===2&&(r=Od(t),r!==0&&(i=r,e=ff(t,r))),e===1)throw n=Vo,fs(t,0),Er(t,i),kn(t,Ht()),n;if(e===6)Er(t,i);else{if(r=t.current.alternate,!(i&30)&&!hS(r)&&(e=Dc(t,i),e===2&&(s=Od(t),s!==0&&(i=s,e=ff(t,s))),e===1))throw n=Vo,fs(t,0),Er(t,i),kn(t,Ht()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:ns(t,Rn,Yi);break;case 3:if(Er(t,i),(i&130023424)===i&&(e=Wh+500-Ht(),10<e)){if(vc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Wd(ns.bind(null,t,Rn,Yi),e);break}ns(t,Rn,Yi);break;case 4:if(Er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-yi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fS(i/1960))-i,10<i){t.timeoutHandle=Wd(ns.bind(null,t,Rn,Yi),i);break}ns(t,Rn,Yi);break;case 5:ns(t,Rn,Yi);break;default:throw Error(ae(329))}}}return kn(t,Ht()),t.callbackNode===n?Kv.bind(null,t):null}function ff(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(fs(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=Rn,Rn=n,e!==null&&hf(e)),t}function hf(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function hS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~jh,e&=~Jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yi(e),i=1<<n;t[n]=-1,e&=~i}}function bm(t){if(vt&6)throw Error(ae(327));da();var e=vc(t,0);if(!(e&1))return kn(t,Ht()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var i=Od(t);i!==0&&(e=i,n=ff(t,i))}if(n===1)throw n=Vo,fs(t,0),Er(t,e),kn(t,Ht()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ns(t,Rn,Yi),kn(t,Ht()),null}function $h(t,e){var n=vt;vt|=1;try{return t(e)}finally{vt=n,vt===0&&(Sa=Ht()+500,Yc&&jr())}}function ys(t){Tr!==null&&Tr.tag===0&&!(vt&6)&&da();var e=vt;vt|=1;var n=ti.transition,i=St;try{if(ti.transition=null,St=1,t)return t()}finally{St=i,ti.transition=n,vt=e,!(vt&6)&&jr()}}function Xh(){zn=ra.current,It(ra)}function fs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Gy(n)),Gt!==null)for(n=Gt.return;n!==null;){var i=n;switch(Ch(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Mc();break;case 3:_a(),It(Pn),It(gn),Uh();break;case 5:Dh(i);break;case 4:_a();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:Ph(i.type._context);break;case 22:case 23:Xh()}n=n.return}if(nn=t,Gt=t=Dr(t.current,null),sn=zn=e,qt=0,Vo=null,jh=Jc=_s=0,Rn=xo=null,ls!==null){for(e=0;e<ls.length;e++)if(n=ls[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}ls=null}return t}function Zv(t,e){do{var n=Gt;try{if(Nh(),ec.current=Pc,Nc){for(var i=Ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nc=!1}if(xs=0,en=Xt=Ft=null,go=!1,Bo=0,Gh.current=null,n===null||n.return===null){qt=1,Vo=e,Gt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=sn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=fm(a);if(m!==null){m.flags&=-257,hm(m,a,o,s,e),m.mode&1&&dm(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){dm(s,c,e),qh();break e}l=Error(ae(426))}}else if(Ut&&o.mode&1){var g=fm(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),hm(g,a,o,s,e),Ah(ya(l,o));break e}}s=l=ya(l,o),qt!==4&&(qt=2),xo===null?xo=[s]:xo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Iv(s,l,e);sm(s,u);break e;case 1:o=l;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(kr===null||!kr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Dv(s,o,e);sm(s,_);break e}}s=s.return}while(s!==null)}ex(n)}catch(R){e=R,Gt===n&&n!==null&&(Gt=n=n.return);continue}break}while(!0)}function Qv(){var t=Lc.current;return Lc.current=Pc,t===null?Pc:t}function qh(){(qt===0||qt===3||qt===2)&&(qt=4),nn===null||!(_s&268435455)&&!(Jc&268435455)||Er(nn,sn)}function Dc(t,e){var n=vt;vt|=2;var i=Qv();(nn!==t||sn!==e)&&(Yi=null,fs(t,e));do try{pS();break}catch(r){Zv(t,r)}while(!0);if(Nh(),vt=n,Lc.current=i,Gt!==null)throw Error(ae(261));return nn=null,sn=0,qt}function pS(){for(;Gt!==null;)Jv(Gt)}function mS(){for(;Gt!==null&&!z1();)Jv(Gt)}function Jv(t){var e=nx(t.alternate,t,zn);t.memoizedProps=t.pendingProps,e===null?ex(t):Gt=e,Gh.current=null}function ex(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lS(n,e),n!==null){n.flags&=32767,Gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Gt=null;return}}else if(n=oS(n,e,zn),n!==null){Gt=n;return}if(e=e.sibling,e!==null){Gt=e;return}Gt=e=t}while(e!==null);qt===0&&(qt=5)}function ns(t,e,n){var i=St,r=ti.transition;try{ti.transition=null,St=1,gS(t,e,n,i)}finally{ti.transition=r,St=i}return null}function gS(t,e,n,i){do da();while(Tr!==null);if(vt&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(K1(t,s),t===nn&&(Gt=nn=null,sn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vl||(vl=!0,ix(gc,function(){return da(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ti.transition,ti.transition=null;var a=St;St=1;var o=vt;vt|=4,Gh.current=null,uS(t,n),qv(n,t),Uy(Gd),xc=!!Vd,Gd=Vd=null,t.current=n,dS(n),H1(),vt=o,St=a,ti.transition=s}else t.current=n;if(vl&&(vl=!1,Tr=t,Ic=r),s=t.pendingLanes,s===0&&(kr=null),j1(n.stateNode),kn(t,Ht()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kc)throw kc=!1,t=uf,uf=null,t;return Ic&1&&t.tag!==0&&da(),s=t.pendingLanes,s&1?t===df?_o++:(_o=0,df=t):_o=0,jr(),null}function da(){if(Tr!==null){var t=Ig(Ic),e=ti.transition,n=St;try{if(ti.transition=null,St=16>t?16:t,Tr===null)var i=!1;else{if(t=Tr,Tr=null,Ic=0,vt&6)throw Error(ae(331));var r=vt;for(vt|=4,Ae=t.current;Ae!==null;){var s=Ae,a=s.child;if(Ae.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ae=c;Ae!==null;){var d=Ae;switch(d.tag){case 0:case 11:case 15:vo(8,d,s)}var h=d.child;if(h!==null)h.return=d,Ae=h;else for(;Ae!==null;){d=Ae;var p=d.sibling,m=d.return;if(Wv(d),d===c){Ae=null;break}if(p!==null){p.return=m,Ae=p;break}Ae=m}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}Ae=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ae=a;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ae=u;break e}Ae=s.return}}var x=t.current;for(Ae=x;Ae!==null;){a=Ae;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Ae=y;else e:for(a=x;Ae!==null;){if(o=Ae,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Qc(9,o)}}catch(R){zt(o,o.return,R)}if(o===a){Ae=null;break e}var _=o.sibling;if(_!==null){_.return=o.return,Ae=_;break e}Ae=o.return}}if(vt=r,jr(),Oi&&typeof Oi.onPostCommitFiberRoot=="function")try{Oi.onPostCommitFiberRoot(jc,t)}catch{}i=!0}return i}finally{St=n,ti.transition=e}}return!1}function Tm(t,e,n){e=ya(n,e),e=Iv(t,e,1),t=Lr(t,e,1),e=Mn(),t!==null&&(Xo(t,1,e),kn(t,e))}function zt(t,e,n){if(t.tag===3)Tm(t,t,n);else for(;e!==null;){if(e.tag===3){Tm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(kr===null||!kr.has(i))){t=ya(n,t),t=Dv(e,t,1),e=Lr(e,t,1),t=Mn(),e!==null&&(Xo(e,1,t),kn(e,t));break}}e=e.return}}function vS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Mn(),t.pingedLanes|=t.suspendedLanes&n,nn===t&&(sn&n)===n&&(qt===4||qt===3&&(sn&130023424)===sn&&500>Ht()-Wh?fs(t,0):jh|=n),kn(t,e)}function tx(t,e){e===0&&(t.mode&1?(e=ol,ol<<=1,!(ol&130023424)&&(ol=4194304)):e=1);var n=Mn();t=ar(t,e),t!==null&&(Xo(t,e,n),kn(t,n))}function xS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tx(t,n)}function _S(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),tx(t,n)}var nx;nx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pn.current)Nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nn=!1,aS(t,e,n);Nn=!!(t.flags&131072)}else Nn=!1,Ut&&e.flags&1048576&&av(e,bc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nc(t,e),t=e.pendingProps;var r=ga(e,gn.current);ua(e,n),r=Fh(null,e,i,t,r,n);var s=Bh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ln(i)?(s=!0,Ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kh(e),r.updater=Zc,e.stateNode=r,r._reactInternals=e,Qd(e,i,t,n),e=tf(null,e,i,!0,s,n)):(e.tag=0,Ut&&s&&Th(e),Sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=SS(i),t=pi(i,t),r){case 0:e=ef(null,e,i,t,n);break e;case 1:e=gm(null,e,i,t,n);break e;case 11:e=pm(null,e,i,t,n);break e;case 14:e=mm(null,e,i,pi(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pi(i,r),ef(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pi(i,r),gm(t,e,i,r,n);case 3:e:{if(Bv(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,fv(t,e),Ac(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ya(Error(ae(423)),e),e=vm(t,e,i,n,r);break e}else if(i!==r){r=ya(Error(ae(424)),e),e=vm(t,e,i,n,r);break e}else for(Gn=Pr(e.stateNode.containerInfo.firstChild),jn=e,Ut=!0,vi=null,n=uv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(va(),i===r){e=or(t,e,n);break e}Sn(t,e,i,n)}e=e.child}return e;case 5:return hv(e),t===null&&Yd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,jd(i,r)?a=null:s!==null&&jd(i,s)&&(e.flags|=32),Fv(t,e),Sn(t,e,a,n),e.child;case 6:return t===null&&Yd(e),null;case 13:return zv(t,e,n);case 4:return Ih(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=xa(e,null,i,n):Sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pi(i,r),pm(t,e,i,r,n);case 7:return Sn(t,e,e.pendingProps,n),e.child;case 8:return Sn(t,e,e.pendingProps.children,n),e.child;case 12:return Sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Pt(Tc,i._currentValue),i._currentValue=a,s!==null)if(Ei(s.value,a)){if(s.children===r.children&&!Pn.current){e=or(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=nr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Kd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Kd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ua(e,n),r=ni(r),i=i(r),e.flags|=1,Sn(t,e,i,n),e.child;case 14:return i=e.type,r=pi(i,e.pendingProps),r=pi(i.type,r),mm(t,e,i,r,n);case 15:return Uv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:pi(i,r),nc(t,e),e.tag=1,Ln(i)?(t=!0,Ec(e)):t=!1,ua(e,n),kv(e,i,r),Qd(e,i,r,n),tf(null,e,i,!0,t,n);case 19:return Hv(t,e,n);case 22:return Ov(t,e,n)}throw Error(ae(156,e.tag))};function ix(t,e){return Ng(t,e)}function yS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,e,n,i){return new yS(t,e,n,i)}function Yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SS(t){if(typeof t=="function")return Yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ph)return 11;if(t===mh)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=ei(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sc(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Yh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case qs:return hs(n.children,r,s,e);case hh:a=8,r|=8;break;case Md:return t=ei(12,n,e,r|2),t.elementType=Md,t.lanes=s,t;case Ed:return t=ei(13,n,e,r),t.elementType=Ed,t.lanes=s,t;case wd:return t=ei(19,n,e,r),t.elementType=wd,t.lanes=s,t;case hg:return eu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dg:a=10;break e;case fg:a=9;break e;case ph:a=11;break e;case mh:a=14;break e;case yr:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=ei(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function hs(t,e,n,i){return t=ei(7,t,i,e),t.lanes=n,t}function eu(t,e,n,i){return t=ei(22,t,i,e),t.elementType=hg,t.lanes=n,t.stateNode={isHidden:!1},t}function Du(t,e,n){return t=ei(6,t,null,e),t.lanes=n,t}function Uu(t,e,n){return e=ei(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function MS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kh(t,e,n,i,r,s,a,o,l){return t=new MS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ei(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kh(s),t}function ES(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function rx(t){if(!t)return Br;t=t._reactInternals;e:{if(ws(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(Ln(n))return rv(t,n,e)}return e}function sx(t,e,n,i,r,s,a,o,l){return t=Kh(n,i,!0,t,r,s,a,o,l),t.context=rx(null),n=t.current,i=Mn(),r=Ir(n),s=nr(i,r),s.callback=e??null,Lr(n,s,r),t.current.lanes=r,Xo(t,r,i),kn(t,i),t}function tu(t,e,n,i){var r=e.current,s=Mn(),a=Ir(r);return n=rx(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Lr(r,e,a),t!==null&&(Si(t,r,a,s),Jl(t,r,a)),a}function Uc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zh(t,e){Cm(t,e),(t=t.alternate)&&Cm(t,e)}function wS(){return null}var ax=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qh(t){this._internalRoot=t}nu.prototype.render=Qh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));tu(t,e,null,null)};nu.prototype.unmount=Qh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ys(function(){tu(null,t,null,null)}),e[sr]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Og();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mr.length&&e!==0&&e<Mr[n].priority;n++);Mr.splice(n,0,t),n===0&&Bg(t)}};function Jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Am(){}function bS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Uc(a);s.call(c)}}var a=sx(e,i,t,0,null,!1,!1,"",Am);return t._reactRootContainer=a,t[sr]=a.current,Io(t.nodeType===8?t.parentNode:t),ys(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Uc(l);o.call(c)}}var l=Kh(t,0,!1,null,null,!1,!1,"",Am);return t._reactRootContainer=l,t[sr]=l.current,Io(t.nodeType===8?t.parentNode:t),ys(function(){tu(e,l,n,i)}),l}function ru(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Uc(a);o.call(l)}}tu(e,a,t,r)}else a=bS(n,e,t,r,i);return Uc(a)}Dg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ao(e.pendingLanes);n!==0&&(xh(e,n|1),kn(e,Ht()),!(vt&6)&&(Sa=Ht()+500,jr()))}break;case 13:ys(function(){var i=ar(t,1);if(i!==null){var r=Mn();Si(i,t,1,r)}}),Zh(t,1)}};_h=function(t){if(t.tag===13){var e=ar(t,134217728);if(e!==null){var n=Mn();Si(e,t,134217728,n)}Zh(t,134217728)}};Ug=function(t){if(t.tag===13){var e=Ir(t),n=ar(t,e);if(n!==null){var i=Mn();Si(n,t,e,i)}Zh(t,e)}};Og=function(){return St};Fg=function(t,e){var n=St;try{return St=t,e()}finally{St=n}};Id=function(t,e,n){switch(e){case"input":if(Cd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=qc(i);if(!r)throw Error(ae(90));mg(i),Cd(i,r)}}}break;case"textarea":vg(t,n);break;case"select":e=n.value,e!=null&&aa(t,!!n.multiple,e,!1)}};wg=$h;bg=ys;var TS={usingClientEntryPoint:!1,Events:[Yo,Qs,qc,Mg,Eg,$h]},Ka={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CS={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ag(t),t===null?null:t.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||wS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{jc=xl.inject(CS),Oi=xl}catch{}}$n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TS;$n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(e))throw Error(ae(200));return ES(t,e,null,n)};$n.createRoot=function(t,e){if(!Jh(t))throw Error(ae(299));var n=!1,i="",r=ax;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Kh(t,1,!1,null,null,n,!1,i,r),t[sr]=e.current,Io(t.nodeType===8?t.parentNode:t),new Qh(e)};$n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=Ag(e),t=t===null?null:t.stateNode,t};$n.flushSync=function(t){return ys(t)};$n.hydrate=function(t,e,n){if(!iu(e))throw Error(ae(200));return ru(null,t,e,!0,n)};$n.hydrateRoot=function(t,e,n){if(!Jh(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=ax;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=sx(e,null,t,1,n??null,r,!1,s,a),t[sr]=e.current,Io(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nu(e)};$n.render=function(t,e,n){if(!iu(e))throw Error(ae(200));return ru(null,t,e,!1,n)};$n.unmountComponentAtNode=function(t){if(!iu(t))throw Error(ae(40));return t._reactRootContainer?(ys(function(){ru(null,null,t,!1,function(){t._reactRootContainer=null,t[sr]=null})}),!0):!1};$n.unstable_batchedUpdates=$h;$n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!iu(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return ru(t,e,n,!1,i)};$n.version="18.3.1-next-f1338f8080-20240426";function ox(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ox)}catch(t){console.error(t)}}ox(),og.exports=$n;var AS=og.exports,Rm=AS;yd.createRoot=Rm.createRoot,yd.hydrateRoot=Rm.hydrateRoot;var at=(t=>(t.USER_EXEC="USER_EXEC",t.PRIV_EXEC="PRIV_EXEC",t.GLOBAL_CONFIG="GLOBAL_CONFIG",t.INTERFACE_CONFIG="INTERFACE_CONFIG",t.VLAN_CONFIG="VLAN_CONFIG",t.LINE_CONFIG="LINE_CONFIG",t))(at||{}),Qe=(t=>(t.ROUTER="router",t.SWITCH="switch",t.HOST="host",t.SERVER="server",t))(Qe||{}),ot=(t=>(t.NONE="NONE",t.NO_IP="NO_IP",t.NO_LINK="NO_LINK",t.ADMIN_DOWN="ADMIN_DOWN",t.VLAN_MISMATCH="VLAN_MISMATCH",t.WRONG_SUBNET="WRONG_SUBNET",t.NO_GATEWAY="NO_GATEWAY",t.NO_ROUTE="NO_ROUTE",t.HOST_UNREACHABLE="HOST_UNREACHABLE",t.ACL_DENIED="ACL_DENIED",t))(ot||{}),J=(t=>(t.NONE="NONE",t.CLOSE_SESSION="CLOSE_SESSION",t.OPEN_EDITOR="OPEN_EDITOR",t))(J||{}),ki=(t=>(t.VULNERABLE="VULNERABLE",t.PATCHED="PATCHED",t.NORMAL="NORMAL",t.ERROR="ERROR",t))(ki||{});function yo(t){const e=t.trim();if(!e)return"";const n=e.match(/^([^.]+)\.(\d+)$/);if(n)return`${yo(n[1])}.${n[2]}`;const i=e.match(/^([a-zA-Z]+)\s*(\d+(?:\/\d+)*(?:\.\d+)?)$/);if(!i)return e;const r=i[1].toLowerCase(),s=i[2];return r.startsWith("gi")||r.startsWith("g")?`GigabitEthernet${s}`:r.startsWith("fa")||r.startsWith("f")?`FastEthernet${s}`:r.startsWith("et")||r.startsWith("e")?`Ethernet${s}`:`${i[1]}${s}`}function pf(t){const e=t.trim(),n=e.match(/^([^.]+)\.(\d+)$/);return n?`${pf(n[1])}.${n[2]}`:e.startsWith("GigabitEthernet")?`Gi${e.slice(15)}`:e.startsWith("FastEthernet")?`Fa${e.slice(12)}`:e.startsWith("Ethernet")?`Eth${e.slice(8)}`:e}function lx(t){return t.includes(".")}function RS(t){return t.split(".")[0]}function NS(t){const e=t.split(".");if(e.length>1){const n=parseInt(e[1],10);return isNaN(n)?null:n}return null}const PS={router_2port:{id:"router_2port",type:Qe.ROUTER,interfaces:["GigabitEthernet0/0","GigabitEthernet0/1"],defaultRackUnits:1},switch_24:{id:"switch_24",type:Qe.SWITCH,interfaces:[...Array.from({length:24},(t,e)=>`FastEthernet0/${e+1}`),"GigabitEthernet0/1","GigabitEthernet0/2"],defaultRackUnits:1},pc:{id:"pc",type:Qe.HOST,interfaces:["Ethernet0"]},server:{id:"server",type:Qe.SERVER,interfaces:["Ethernet0"],defaultRackUnits:1}};function LS(t){const e=PS[t];return e?[...e.interfaces]:[]}class kS{constructor(e,n,i,r){Ge(this,"id");Ge(this,"type");Ge(this,"model");Ge(this,"hostname");Ge(this,"rack");Ge(this,"slot");Ge(this,"desk");Ge(this,"interfaces",new Map);Ge(this,"enableSecret","");Ge(this,"users",new Map);Ge(this,"domainName","");Ge(this,"hasRsaKey",!1);Ge(this,"vlans",new Map);Ge(this,"routes",[]);Ge(this,"natRules",[]);Ge(this,"acls",[]);Ge(this,"ipRouting",!0);Ge(this,"ip",null);Ge(this,"mask",null);Ge(this,"gateway",null);Ge(this,"locked",!1);Ge(this,"files",new Map);Ge(this,"services",[]);Ge(this,"vulns",[]);Ge(this,"patchRevs",new Map);this.id=e,this.type=n,this.model=i,this.hostname=r||e,this.type===Qe.SWITCH&&this.vlans.set(1,"default");const s=LS(i);for(const a of s){const o=yo(a),l=this.type===Qe.SWITCH,c=this.type===Qe.ROUTER;this.interfaces.set(o,{fullName:o,shortName:pf(o),adminUp:!c,operUp:!1,ip:null,mask:null,peer:null,mode:l?"access":void 0,accessVlan:l?1:void 0,trunkAllowed:l?[]:void 0})}}getInterface(e){const n=yo(e);return this.interfaces.get(n)}ensureSubinterface(e){const n=yo(e);if(!lx(n))return null;if(this.interfaces.has(n))return this.interfaces.get(n);const i=RS(n);if(!this.interfaces.get(i))return null;const s=NS(n),a={fullName:n,shortName:pf(n),adminUp:!0,operUp:!1,ip:null,mask:null,peer:null,isSubinterface:!0,parent:i,dot1qVlan:s||void 0};return this.interfaces.set(n,a),a}getOrderedInterfaces(){return Array.from(this.interfaces.values())}updateOperStatus(e,n){const i=this.getInterface(e);if(!i)return;if(i.isSubinterface&&i.parent){const l=this.getInterface(i.parent);i.operUp=i.adminUp&&((l==null?void 0:l.operUp)??!1);return}if(!i.adminUp||!i.peer){i.operUp=!1;return}const[r,s]=i.peer.split(":"),a=n.get(r);if(!a){i.operUp=!1;return}const o=a.getInterface(s);i.operUp=i.adminUp&&((o==null?void 0:o.adminUp)??!1)}}function ps(t){const e=t.trim().split(".");if(e.length!==4)return-1;let n=0;for(let i=0;i<4;i++){const r=Number(e[i]);if(isNaN(r)||r<0||r>255||e[i].trim()===""||!/^\d+$/.test(e[i]))return-1;n=n<<8|r}return n>>>0}function IS(t){const e=t>>>0;return`${e>>>24&255}.${e>>>16&255}.${e>>>8&255}.${e&255}`}function _l(t){return ps(t)!==-1}function Nm(t){const e=ps(t);if(e===-1)return!1;const n=~e>>>0;return(n+1&n)===0}function Za(t,e,n){const i=ps(t),r=ps(e),s=ps(n);return i===-1||r===-1||s===-1?!1:(i&s)>>>0===(r&s)>>>0}function Pm(t,e){const n=ps(t),i=ps(e);return n===-1||i===-1?"0.0.0.0":IS((n&i)>>>0)}function DS(t,e,n){return Pm(t,n)===Pm(e,n)}class US{constructor(e){Ge(this,"devices");this.devices=e}refreshAllOperStatuses(){for(const e of this.devices.values())for(const n of e.interfaces.values())e.updateOperStatus(n.fullName,this.devices)}resolvePing(e,n){this.refreshAllOperStatuses();const i=this.devices.get(e);if(!i)return{success:!1,hops:[],failReason:ot.HOST_UNREACHABLE,failAt:e};const r=this.resolveOneWay(i,n,!0);if(!r.success)return r;const s=r.hops[r.hops.length-1],a=this.devices.get(s);if(!a)return{success:!1,hops:r.hops,failReason:ot.HOST_UNREACHABLE,failAt:n};const o=this.getDeviceIp(i,n);if(!o)return{success:!1,hops:r.hops,failReason:ot.NO_IP,failAt:e};const l=this.resolveOneWay(a,o,!1);return l.success?{success:!0,hops:r.hops,failReason:ot.NONE,failAt:""}:{success:!1,hops:r.hops,failReason:l.failReason,failAt:l.failAt}}getDeviceIp(e,n){if(e.type===Qe.HOST||e.type===Qe.SERVER)return e.ip;for(const i of e.interfaces.values())if(i.ip&&n&&i.mask&&Za(i.ip,n,i.mask))return i.ip;for(const i of e.interfaces.values())if(i.ip)return i.ip;return null}resolveOneWay(e,n,i){const r=[e.id];let s=e,a=15;for(;a-- >0;){if(this.deviceOwnsIp(s,n))return{success:!0,hops:r,failReason:ot.NONE,failAt:""};let o=null,l=null,c=1;if(s.type===Qe.HOST||s.type===Qe.SERVER){if(!s.ip||!s.mask)return{success:!1,hops:r,failReason:ot.NO_IP,failAt:s.id};if(l=s.getInterface("Ethernet0")||s.getOrderedInterfaces()[0]||null,!l)return{success:!1,hops:r,failReason:ot.NO_LINK,failAt:s.id};if(Za(s.ip,n,s.mask))o=n;else{if(!s.gateway)return{success:!1,hops:r,failReason:ot.NO_GATEWAY,failAt:s.id};if(!Za(s.ip,s.gateway,s.mask))return{success:!1,hops:r,failReason:ot.WRONG_SUBNET,failAt:s.id};o=s.gateway}}else if(s.type===Qe.ROUTER){let m=null;for(const v of s.interfaces.values())if(v.ip&&v.mask&&Za(v.ip,n,v.mask)){m={iface:v,nextHop:n,maskBits:24};break}if(!m){for(const v of s.routes)if(DS(n,v.network,v.mask)){for(const S of s.interfaces.values())if(S.ip&&S.mask&&Za(S.ip,v.nextHop,S.mask)){m={iface:S,nextHop:v.nextHop,maskBits:24};break}}}if(!m)return{success:!1,hops:r,failReason:ot.NO_ROUTE,failAt:s.id};l=m.iface,o=m.nextHop,l.isSubinterface&&l.dot1qVlan&&(c=l.dot1qVlan)}if(!l)return{success:!1,hops:r,failReason:ot.NO_ROUTE,failAt:s.id};const d=l.isSubinterface&&l.parent?s.getInterface(l.parent):l;if(!d)return{success:!1,hops:r,failReason:ot.NO_LINK,failAt:s.id};if(!l.adminUp||!d.adminUp)return{success:!1,hops:r,failReason:ot.ADMIN_DOWN,failAt:`${s.id}:${l.shortName}`};if(!d.peer)return{success:!1,hops:r,failReason:ot.NO_LINK,failAt:`${s.id}:${d.shortName}`};if(!d.operUp){const[m,v]=d.peer.split(":"),S=this.devices.get(m),g=S==null?void 0:S.getInterface(v);return g&&!g.adminUp?{success:!1,hops:r,failReason:ot.ADMIN_DOWN,failAt:`${m}:${g.shortName}`}:{success:!1,hops:r,failReason:ot.NO_LINK,failAt:`${s.id}:${d.shortName}`}}if(!o)return{success:!1,hops:r,failReason:ot.NO_ROUTE,failAt:s.id};const h=this.traverseL2(s,l,c,o);if(!h.success)return{success:!1,hops:[...r,...h.switchHops],failReason:h.failReason,failAt:h.failAt};for(const m of h.switchHops)r.push(m);const p=h.targetDevice;if(r.push(p.id),s=p,this.deviceOwnsIp(s,n))return{success:!0,hops:r,failReason:ot.NONE,failAt:""}}return{success:!1,hops:r,failReason:ot.HOST_UNREACHABLE,failAt:n}}deviceOwnsIp(e,n){if(e.ip===n)return!0;for(const i of e.interfaces.values())if(i.ip===n)return!0;return!1}traverseL2(e,n,i,r){const s=n.isSubinterface&&n.parent?e.getInterface(n.parent):n;if(!s.peer)return{success:!1,switchHops:[],failReason:ot.NO_LINK,failAt:`${e.id}:${s.shortName}`};const[a,o]=s.peer.split(":"),l=this.devices.get(a);if(!l)return{success:!1,switchHops:[],failReason:ot.HOST_UNREACHABLE,failAt:r};if(l.type!==Qe.SWITCH)return this.deviceOwnsIp(l,r)?{success:!0,targetDevice:l,targetIface:l.getInterface(o),switchHops:[],failReason:ot.NONE,failAt:""}:{success:!1,switchHops:[],failReason:ot.HOST_UNREACHABLE,failAt:r};const c=[],d=l.getInterface(o);let h=i;if(d.mode==="access"){if(h=d.accessVlan||1,n.isSubinterface&&n.dot1qVlan&&n.dot1qVlan!==h)return{success:!1,switchHops:[l.id],failReason:ot.VLAN_MISMATCH,failAt:`${l.id}:${d.shortName}`}}else if(d.mode==="trunk"){const v=d.trunkAllowed||[];if(v.length>0&&!v.includes(i))return{success:!1,switchHops:[l.id],failReason:ot.VLAN_MISMATCH,failAt:`${l.id}:${d.shortName}`};h=i}c.push({dev:l,ingressIf:d,vlan:h,switchHops:[l.id]});const p=new Set([l.id]);let m="";for(;c.length>0;){const{dev:v,ingressIf:S,vlan:g,switchHops:u}=c.shift();for(const x of v.interfaces.values()){if(x.fullName===S.fullName||!x.peer)continue;let y=!1,_=!1;if(x.mode==="access")x.accessVlan===g?(y=!0,_=!1):m=`${v.id}:${x.shortName}`;else if(x.mode==="trunk"){const E=x.trunkAllowed||[];E.length===0||E.includes(g)?(y=!0,_=!0):m=`${v.id}:${x.shortName}`}if(!y)continue;const[R,C]=x.peer.split(":"),T=this.devices.get(R);if(!T)continue;const N=T.getInterface(C);if(!(!N||!N.operUp)){if(T.type===Qe.SWITCH)p.has(T.id)||(p.add(T.id),c.push({dev:T,ingressIf:N,vlan:g,switchHops:[...u,T.id]}));else if(T.type===Qe.ROUTER){if(_){for(const E of T.interfaces.values())if(E.isSubinterface&&E.parent===N.fullName&&E.dot1qVlan===g&&E.operUp&&this.deviceOwnsIp(T,r))return{success:!0,targetDevice:T,targetIface:E,switchHops:u,failReason:ot.NONE,failAt:""}}else if(N.operUp&&this.deviceOwnsIp(T,r))return{success:!0,targetDevice:T,targetIface:N,switchHops:u,failReason:ot.NONE,failAt:""}}else if(this.deviceOwnsIp(T,r))return{success:!0,targetDevice:T,targetIface:N,switchHops:u,failReason:ot.NONE,failAt:""}}}}return m?{success:!1,switchHops:[l.id],failReason:ot.VLAN_MISMATCH,failAt:m}:{success:!1,switchHops:[l.id],failReason:ot.HOST_UNREACHABLE,failAt:r}}}function Ou(t){const e=[];let n="",i=!1;for(let r=0;r<t.length;r++){const s=t[r];s==='"'?i=!i:s===" "&&!i?n.length>0&&(e.push(n),n=""):n+=s}return n.length>0&&e.push(n),e}function dn(t,e){const n=t.toLowerCase();for(const r of e)if(r.toLowerCase()===n)return{match:r,ambiguous:!1,matches:[r]};const i=e.filter(r=>r.toLowerCase().startsWith(n));return i.length===1?{match:i[0],ambiguous:!1,matches:i}:i.length>1?{match:null,ambiguous:!0,matches:i}:{match:null,ambiguous:!1,matches:[]}}function OS(t){const e=[];e.push("Building configuration..."),e.push(""),e.push("Current configuration : 1024 bytes"),e.push("!"),e.push("version 15.2"),e.push("no service timestamps log datetime msec"),e.push("no service password-encryption"),e.push("!"),e.push(`hostname ${t.hostname}`),e.push("!"),t.enableSecret&&(e.push(`enable secret 5 $1$mERr$${t.enableSecret.slice(0,10)}...`),e.push("!"));for(const[n]of t.users)e.push(`username ${n} secret 5 $1$...`);if(t.type===Qe.SWITCH)for(const[n,i]of t.vlans)n!==1&&(e.push("!"),e.push(`vlan ${n}`),e.push(` name ${i}`));for(const n of t.getOrderedInterfaces())e.push("!"),e.push(`interface ${n.shortName}`),n.isSubinterface&&n.dot1qVlan&&e.push(` encapsulation dot1Q ${n.dot1qVlan}`),n.ip&&n.mask?e.push(` ip address ${n.ip} ${n.mask}`):t.type===Qe.ROUTER&&!n.isSubinterface&&e.push(" no ip address"),t.type===Qe.SWITCH&&(n.mode==="trunk"?e.push(" switchport mode trunk"):n.mode==="access"&&(e.push(" switchport mode access"),n.accessVlan&&n.accessVlan!==1&&e.push(` switchport access vlan ${n.accessVlan}`))),n.adminUp?e.push(" no shutdown"):e.push(" shutdown");if(t.type===Qe.ROUTER)for(const n of t.routes)e.push(`ip route ${n.network} ${n.mask} ${n.nextHop}`);return e.push("!"),e.push("line con 0"),e.push("line vty 0 4"),e.push(" login"),e.push("!"),e.push("end"),e.join(`
`)}function FS(t){const e=[];e.push("Interface              IP-Address      OK? Method Status                Protocol");for(const n of t.getOrderedInterfaces()){const i=n.shortName.padEnd(22," "),r=(n.ip||"unassigned").padEnd(15," "),s="YES".padEnd(4," "),a=(n.ip?"manual":"unset").padEnd(7," "),o=(n.adminUp?"up":"administratively down").padEnd(22," "),l=n.operUp?"up":"down";e.push(`${i} ${r}${s}${a}${o}${l}`)}return e.join(`
`)}function Lm(t){if(t.type!==Qe.SWITCH)return"% This command is only supported on switches.";const e=[];e.push("VLAN Name                             Status    Ports"),e.push("---- -------------------------------- --------- -------------------------------");for(const[n,i]of t.vlans){const r=String(n).padEnd(4," "),s=i.padEnd(32," "),a="active   ",o=[];for(const c of t.getOrderedInterfaces())c.mode==="access"&&c.accessVlan===n&&o.push(c.shortName);const l=o.join(", ");e.push(`${r} ${s} ${a} ${l}`)}return e.join(`
`)}function BS(t,e,n=2){const i=[];if(i.push("Type escape sequence to abort."),i.push(`Sending 5, 100-byte ICMP Echos to ${t}, timeout is 2 seconds:`),e){i.push("!!!!!");const r=Math.max(1,n*2);i.push(`Success rate is 100 percent (5/5), round-trip min/avg/max = ${r}/${r+2}/${r+5} ms`)}else i.push("....."),i.push("Success rate is 0 percent (0/5)");return i.join(`
`)}function zS(t,e){const n=[];if(n.push(`Pinging ${t} with 32 bytes of data:`),e){for(let i=0;i<4;i++)n.push(`Reply from ${t}: bytes=32 time=2ms TTL=128`);n.push(""),n.push(`Ping statistics for ${t}:`),n.push("    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),"),n.push("Approximate round trip times in milli-seconds:"),n.push("    Minimum = 2ms, Maximum = 3ms, Average = 2ms")}else{for(let i=0;i<4;i++)n.push("Request timed out.");n.push(""),n.push(`Ping statistics for ${t}:`),n.push("    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss),")}return n.join(`
`)}class HS{constructor(e,n,i){Ge(this,"device");Ge(this,"mode",at.USER_EXEC);Ge(this,"currentInterface",null);Ge(this,"currentVlan",null);Ge(this,"history",[]);Ge(this,"historyIndex",-1);Ge(this,"pingHandler");Ge(this,"httpHandler");this.device=e,this.pingHandler=n,this.httpHandler=i,(this.device.type===Qe.ROUTER||this.device.type===Qe.SWITCH)&&(this.mode=at.USER_EXEC)}getPrompt(){if(this.device.type===Qe.HOST)return"C:\\Users\\User>";if(this.device.type===Qe.SERVER)return`root@${this.device.hostname}:~# `;const e=this.device.hostname;switch(this.mode){case at.USER_EXEC:return`${e}>`;case at.PRIV_EXEC:return`${e}#`;case at.GLOBAL_CONFIG:return`${e}(config)#`;case at.INTERFACE_CONFIG:return`${e}(config-if)#`;case at.VLAN_CONFIG:return`${e}(config-vlan)#`;case at.LINE_CONFIG:return`${e}(config-line)#`;default:return`${e}#`}}execute(e){const n=e.trim();return n?(this.history.push(e),this.historyIndex=this.history.length,this.device.type===Qe.HOST?this.executePcShell(n):this.device.type===Qe.SERVER?this.executeServerShell(n):this.executeIos(n)):{output:"",ok:!0,action:J.NONE}}executePcShell(e){const n=Ou(e),i=n[0].toLowerCase();if(i==="cls")return{output:"\x1B[2J\x1B[0;0H",ok:!0,action:J.NONE};if(i==="help")return{output:["Available commands:","  ipconfig                  Display current IP configuration","  ipconfig /set <ip> <mask> <gw>  Set IP address, subnet mask, and gateway","  ping <ip>                 Send ICMP Echo requests to destination IP","  curl <url>                Send simulated HTTP GET request","  cls                       Clear console screen"].join(`
`),ok:!0,action:J.NONE};if(i==="ipconfig"){if(n.length>1&&n[1].toLowerCase()==="/set"){if(this.device.locked)return{output:"Access is denied. Network settings are managed by IT.",ok:!1,action:J.NONE};if(n.length<5)return{output:"Syntax: ipconfig /set <ip> <subnet_mask> <default_gateway>",ok:!1,action:J.NONE};const s=n[2],a=n[3],o=n[4];if(!_l(s)||!Nm(a)||!_l(o))return{output:"Error: Invalid IPv4 address or subnet mask.",ok:!1,action:J.NONE};this.device.ip=s,this.device.mask=a,this.device.gateway=o;const l=this.device.getInterface("Ethernet0");return l&&(l.ip=s,l.mask=a),{output:"IP configuration updated successfully.",ok:!0,action:J.NONE}}return{output:["Windows IP Configuration","","Ethernet adapter Ethernet0:",`   IPv4 Address. . . . . . . . . . . : ${this.device.ip||"0.0.0.0"}`,`   Subnet Mask . . . . . . . . . . . : ${this.device.mask||"0.0.0.0"}`,`   Default Gateway . . . . . . . . . : ${this.device.gateway||"0.0.0.0"}`].join(`
`),ok:!0,action:J.NONE}}if(i==="ping"){if(n.length<2)return{output:"Usage: ping [-t] target_name",ok:!1,action:J.NONE};const r=n[1],s=this.pingHandler(this.device.id,r);return{output:zS(r,s.success),ok:s.success,action:J.NONE}}if(i==="curl"){if(n.length<2)return{output:"curl: try 'curl --help' for more information",ok:!1,action:J.NONE};const r=n[1];if(!this.httpHandler)return{output:"curl: HTTP client service unavailable",ok:!1,action:J.NONE};const s=this.httpHandler(this.device.id,r);return{output:s.body,ok:s.ok,action:J.NONE}}return{output:`'${n[0]}' is not recognized as an internal or external command, operable program or batch file.`,ok:!1,action:J.NONE}}executeServerShell(e){const n=Ou(e),i=n[0].toLowerCase();if(i==="help")return{output:["Linux Server Shell commands:","  ls [path]                 List directory contents","  cat <file>                Print file contents","  grep [-i] <pattern> <file> Search for pattern in file","  tail [-n N] <file>        Output the last part of files","  edit <file>               Open file in code patch editor","  service <name> status     Check status of a system service","  clear                     Clear screen"].join(`
`),ok:!0,action:J.NONE};if(i==="clear")return{output:"\x1B[2J\x1B[0;0H",ok:!0,action:J.NONE};if(i==="ls"){const r=Array.from(this.device.files.keys());return r.length===0?{output:"",ok:!0,action:J.NONE}:{output:r.join("  "),ok:!0,action:J.NONE}}if(i==="cat"){if(n.length<2)return{output:"cat: missing file operand",ok:!1,action:J.NONE};const r=n[1],s=this.device.files.get(r);return s===void 0?{output:`cat: ${r}: No such file or directory`,ok:!1,action:J.NONE}:{output:s,ok:!0,action:J.NONE}}if(i==="tail"){let r=10,s="";if(n[1]==="-n"&&n[2]?(r=parseInt(n[2],10)||10,s=n[3]||""):s=n[1]||"",!s)return{output:"tail: missing file operand",ok:!1,action:J.NONE};const a=this.device.files.get(s);return a===void 0?{output:`tail: cannot open '${s}' for reading: No such file or directory`,ok:!1,action:J.NONE}:{output:a.split(`
`).slice(-r).join(`
`),ok:!0,action:J.NONE}}if(i==="grep"){let r=!1,s="",a="",o=1;if(n[o]==="-i"&&(r=!0,o++),s=n[o++]||"",a=n[o++]||"",!s||!a)return{output:"Usage: grep [-i] <pattern> <file>",ok:!1,action:J.NONE};const l=this.device.files.get(a);return l===void 0?{output:`grep: ${a}: No such file or directory`,ok:!1,action:J.NONE}:{output:l.split(`
`).filter(h=>r?h.toLowerCase().includes(s.toLowerCase()):h.includes(s)).join(`
`),ok:!0,action:J.NONE}}if(i==="edit"){if(n.length<2)return{output:"edit: missing file operand",ok:!1,action:J.NONE};const r=n[1];return this.device.files.has(r)?{output:`Opening patch editor for ${r}...`,ok:!0,action:J.OPEN_EDITOR,actionArg:`${this.device.id}:${r}`}:{output:`edit: ${r}: No such file or directory`,ok:!1,action:J.NONE}}if(i==="service"){const r=n[1];if(n[2]==="status"){const a=this.device.services.find(o=>o.id===r);return a?{output:`● ${r}.service - Apache/Nginx Web Service
   Loaded: loaded
   Active: active (running) on port ${a.port}`,ok:!0,action:J.NONE}:{output:`Unit ${r}.service could not be found.`,ok:!1,action:J.NONE}}return{output:"Usage: service <name> status",ok:!1,action:J.NONE}}return{output:`bash: ${n[0]}: command not found`,ok:!1,action:J.NONE}}executeIos(e){let n=Ou(e);if(n.length===0)return{output:"",ok:!0,action:J.NONE};if(n[0].toLowerCase()==="do"&&this.mode!==at.USER_EXEC&&this.mode!==at.PRIV_EXEC){const i=this.mode;this.mode=at.PRIV_EXEC;const r=this.executeIos(n.slice(1).join(" "));return this.mode=i,r}if(n[0].toLowerCase()==="end"&&this.mode!==at.USER_EXEC&&this.mode!==at.PRIV_EXEC)return this.mode=at.PRIV_EXEC,this.currentInterface=null,this.currentVlan=null,{output:"",ok:!0,action:J.NONE};if(n[0].toLowerCase()==="exit")return this.handleExit();switch(this.mode){case at.USER_EXEC:return this.handleUserExec(n,e);case at.PRIV_EXEC:return this.handlePrivExec(n,e);case at.GLOBAL_CONFIG:return this.handleGlobalConfig(n,e);case at.INTERFACE_CONFIG:return this.handleInterfaceConfig(n,e);case at.VLAN_CONFIG:return this.handleVlanConfig(n,e);default:return{output:"% Invalid mode",ok:!1,action:J.NONE}}}handleExit(){switch(this.mode){case at.USER_EXEC:return{output:"",ok:!0,action:J.CLOSE_SESSION};case at.PRIV_EXEC:return this.mode=at.USER_EXEC,{output:"",ok:!0,action:J.NONE};case at.GLOBAL_CONFIG:return this.mode=at.PRIV_EXEC,{output:"",ok:!0,action:J.NONE};case at.INTERFACE_CONFIG:return this.mode=at.GLOBAL_CONFIG,this.currentInterface=null,{output:"",ok:!0,action:J.NONE};case at.VLAN_CONFIG:return this.mode=at.GLOBAL_CONFIG,this.currentVlan=null,{output:"",ok:!0,action:J.NONE};default:return this.mode=at.PRIV_EXEC,{output:"",ok:!0,action:J.NONE}}}handleUserExec(e,n){const i=dn(e[0],["enable","show","ping","exit"]);return i.ambiguous?{output:`% Ambiguous command:  "${n}"`,ok:!1,action:J.NONE}:i.match?i.match==="enable"?(this.mode=at.PRIV_EXEC,{output:"",ok:!0,action:J.NONE}):i.match==="ping"?this.handlePing(e.slice(1)):i.match==="show"?this.handleShow(e.slice(1)):{output:"% Incomplete command.",ok:!1,action:J.NONE}:{output:`Translating "${e[0]}"... % Unknown command or computer name, or unable to find computer address`,ok:!1,action:J.NONE}}handlePrivExec(e,n){const i=dn(e[0],["disable","configure","show","ping","exit"]);return i.ambiguous?{output:`% Ambiguous command:  "${n}"`,ok:!1,action:J.NONE}:i.match?i.match==="disable"?(this.mode=at.USER_EXEC,{output:"",ok:!0,action:J.NONE}):i.match==="configure"?e.length<2?{output:"% Incomplete command.",ok:!1,action:J.NONE}:dn(e[1],["terminal","memory"]).match==="terminal"?(this.mode=at.GLOBAL_CONFIG,{output:"Enter configuration commands, one per line.  End with CNTL/Z.",ok:!0,action:J.NONE}):{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}:i.match==="show"?this.handleShow(e.slice(1)):i.match==="ping"?this.handlePing(e.slice(1)):{output:"% Incomplete command.",ok:!1,action:J.NONE}:{output:`Translating "${e[0]}"... % Unknown command or computer name, or unable to find computer address`,ok:!1,action:J.NONE}}handleGlobalConfig(e,n){const i=dn(e[0],["hostname","interface","vlan","no","ip","line","exit","end"]);if(i.ambiguous)return{output:`% Ambiguous command:  "${n}"`,ok:!1,action:J.NONE};if(!i.match)return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE};if(i.match==="hostname")return e.length<2?{output:"% Incomplete command.",ok:!1,action:J.NONE}:(this.device.hostname=e[1],{output:"",ok:!0,action:J.NONE});if(i.match==="interface"){if(e.length<2)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const r=e[1],s=yo(r);return lx(s)?this.device.type!==Qe.ROUTER?{output:"% Subinterfaces are not supported on this device type.",ok:!1,action:J.NONE}:this.device.ensureSubinterface(s)?(this.currentInterface=s,this.mode=at.INTERFACE_CONFIG,{output:"",ok:!0,action:J.NONE}):{output:`% Invalid subinterface "${r}".`,ok:!1,action:J.NONE}:this.device.getInterface(s)?(this.currentInterface=s,this.mode=at.INTERFACE_CONFIG,{output:"",ok:!0,action:J.NONE}):{output:`% Interface "${r}" does not exist.`,ok:!1,action:J.NONE}}if(i.match==="vlan"){if(this.device.type!==Qe.SWITCH)return{output:"% VLAN configuration is only supported on switches.",ok:!1,action:J.NONE};if(e.length<2)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const r=parseInt(e[1],10);return isNaN(r)||r<1||r>4094?{output:"% Invalid VLAN ID. Range: 1-4094.",ok:!1,action:J.NONE}:(this.device.vlans.has(r)||this.device.vlans.set(r,`VLAN${r.toString().padStart(4,"0")}`),this.currentVlan=r,this.mode=at.VLAN_CONFIG,{output:"",ok:!0,action:J.NONE})}return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}}handleInterfaceConfig(e,n){if(!this.currentInterface)return this.mode=at.GLOBAL_CONFIG,{output:"",ok:!0,action:J.NONE};const i=this.device.getInterface(this.currentInterface);if(!i)return this.mode=at.GLOBAL_CONFIG,{output:"",ok:!0,action:J.NONE};if(dn(e[0],["interface"]).match==="interface")return this.handleGlobalConfig(e,n);const s=e[0].toLowerCase()==="no",a=s?e.slice(1):e;if(a.length===0)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const o=dn(a[0],["shutdown","ip","switchport","encapsulation"]);if(o.ambiguous)return{output:`% Ambiguous command:  "${n}"`,ok:!1,action:J.NONE};if(!o.match)return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE};if(o.match==="shutdown")return i.adminUp=s,{output:"",ok:!0,action:J.NONE};if(o.match==="encapsulation"){if(!i.isSubinterface)return{output:"% Encapsulation can only be set on subinterfaces.",ok:!1,action:J.NONE};if(a.length<3)return{output:"% Incomplete command.",ok:!1,action:J.NONE};if(!dn(a[1],["dot1Q"]).match)return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE};const c=parseInt(a[2],10);return isNaN(c)||c<1||c>4094?{output:"% Invalid VLAN ID.",ok:!1,action:J.NONE}:(i.dot1qVlan=c,{output:"",ok:!0,action:J.NONE})}if(o.match==="ip"){if(a.length<2)return{output:"% Incomplete command.",ok:!1,action:J.NONE};if(dn(a[1],["address"]).match==="address"){if(s)return i.ip=null,i.mask=null,{output:"",ok:!0,action:J.NONE};if(a.length<4)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const c=a[2],d=a[3];return!_l(c)||!Nm(d)?{output:"% Invalid IP address or subnet mask.",ok:!1,action:J.NONE}:(i.ip=c,i.mask=d,{output:"",ok:!0,action:J.NONE})}return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}}if(o.match==="switchport"){if(this.device.type!==Qe.SWITCH)return{output:"% switchport commands are only valid on switches.",ok:!1,action:J.NONE};if(a.length<2)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const l=dn(a[1],["mode","access"]);if(l.match==="mode"){if(a.length<3)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const c=dn(a[2],["access","trunk"]);return c.match?(i.mode=c.match,{output:"",ok:!0,action:J.NONE}):{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}}if(l.match==="access"){if(a.length<4)return{output:"% Incomplete command.",ok:!1,action:J.NONE};if(!dn(a[2],["vlan"]).match)return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE};const d=parseInt(a[3],10);return isNaN(d)||d<1||d>4094?{output:"% Invalid VLAN ID.",ok:!1,action:J.NONE}:(i.accessVlan=d,{output:"",ok:!0,action:J.NONE})}return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}}return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}}handleVlanConfig(e,n){return this.currentVlan===null?(this.mode=at.GLOBAL_CONFIG,{output:"",ok:!0,action:J.NONE}):dn(e[0],["name","exit","end"]).match==="name"?e.length<2?{output:"% Incomplete command.",ok:!1,action:J.NONE}:(this.device.vlans.set(this.currentVlan,e[1].toUpperCase()),{output:"",ok:!0,action:J.NONE}):{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}}handleShow(e){if(e.length===0)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const n=dn(e[0],["running-config","ip","vlan"]);return n.match==="running-config"?{output:OS(this.device),ok:!0,action:J.NONE}:n.match==="ip"?e.length<2?{output:"% Incomplete command.",ok:!1,action:J.NONE}:dn(e[1],["interface"]).match==="interface"&&e.length>=3&&dn(e[2],["brief"]).match==="brief"?{output:FS(this.device),ok:!0,action:J.NONE}:{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}:n.match==="vlan"?e.length>=2&&dn(e[1],["brief"]).match==="brief"?{output:Lm(this.device),ok:!0,action:J.NONE}:{output:Lm(this.device),ok:!0,action:J.NONE}:{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}}handlePing(e){if(e.length===0)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const n=e[0];if(!_l(n))return{output:"% Invalid IP address.",ok:!1,action:J.NONE};const i=this.pingHandler(this.device.id,n);return{output:BS(n,i.success,i.hops.length),ok:i.success,action:J.NONE}}}function VS(t){let e="",n=!1,i=!1,r=0;for(;r<t.length;){const s=t[r],a=t[r+1]||"";if(!n&&!i){if(s==="/"&&a==="/"){for(r+=2;r<t.length&&t[r]!==`
`;)r++;continue}if(s==="#"){for(r++;r<t.length&&t[r]!==`
`;)r++;continue}if(s==="/"&&a==="*"){for(r+=2;r<t.length&&!(t[r]==="*"&&t[r+1]==="/");)r++;r+=2;continue}if(s==="'"){n=!0,e+=s,r++;continue}if(s==='"'){i=!0,e+=s,r++;continue}if(/\s/.test(s)){r++;continue}e+=s,r++}else n?(e+=s,s==="\\"?(r++,r<t.length&&(e+=t[r])):s==="'"&&(n=!1),r++):i&&(e+=s,s==="\\"?(r++,r<t.length&&(e+=t[r])):s==='"'&&(i=!1),r++)}return e}function So(t,e){const n=VS(t);if(!n)return!1;for(const i of e)try{if(new RegExp(`^${i}$`).test(n))return!0}catch(r){console.warn("Invalid regex in accept pattern:",i,r)}return!1}const GS={cable_pc_b:{targetDevice:"PC-B",actionType:"cable",summary:"Cable PC-B on Desk 2 to switch S1 port FastEthernet0/2.",steps:['Look at Switch S1 in Rack A (slot 3) or click camera preset "Rack A (Gear)".',"Click on free port socket S1:Fa0/2 (the second FastEthernet port from the left).","You are now holding an Ethernet cable from S1:Fa0/2 (see status banner).","Turn towards Desk 2 and click PC-B:Eth0 (or click the PC-B tower).","The cable will connect and appear in 3D. The port LED will turn amber, awaiting VLAN configuration."],suggestedCommands:["Click S1:Fa0/2 ➜ Click PC-B:Eth0"],explanation:"PC-B was completely uncabled. Establishing physical Layer 1 connectivity to switch S1 is the first step before configuring Layer 2 VLANs."},vlan20_port:{targetDevice:"S1",actionType:"terminal",summary:"Create VLAN 20 (SALES) on S1 and assign Fa0/2 as an access port.",steps:['Open the console for Switch S1 (click S1 in Rack A, or click "CLI Terminal" and select S1).','Enter Privileged EXEC mode: type "enable".','Enter Global Configuration mode: type "configure terminal" (or "conf t").','Create and name the Sales VLAN: type "vlan 20", then "name SALES", then "exit".','Enter interface configuration for port Fa0/2: type "interface fa0/2".','Configure the port for access mode: type "switchport mode access".','Assign the port to VLAN 20: type "switchport access vlan 20", then "exit".','Verify with: "do show vlan brief".'],suggestedCommands:["enable","configure terminal","vlan 20","name SALES","exit","interface fa0/2","switchport mode access","switchport access vlan 20","end"],explanation:"All switch ports default to VLAN 1. Placing Fa0/2 into VLAN 20 isolates PC-B into its own broadcast domain separate from Accounting (VLAN 10)."},trunk:{targetDevice:"S1",actionType:"terminal",summary:"Configure uplink interface Gi0/1 on S1 as an 802.1Q trunk port.",steps:['In the Switch S1 terminal, enter configuration mode: "enable", then "configure terminal".','Select the Gigabit uplink interface connected to Router R1: "interface gi0/1".','Enable 802.1Q trunking: "switchport mode trunk".','Exit configuration: "end".','Verify your trunk interface with: "show running-config" or "show ip interface brief".'],suggestedCommands:["enable","conf t","interface gi0/1","switchport mode trunk","end"],explanation:"Standard access ports carry untagged traffic for only a single VLAN. A trunk port tags Ethernet frames with an 802.1Q header, allowing traffic from both VLAN 10 and VLAN 20 to share the single physical link to Router R1."},r1_no_shut:{targetDevice:"R1",actionType:"terminal",summary:"Administratively enable physical interface GigabitEthernet0/0 on Router R1.",steps:["Open the console for Router R1 (click R1 in Rack A or select R1 from the terminal device switcher).",'Enter Privileged EXEC: type "enable".','Enter Global Configuration: type "configure terminal" (or "conf t").','Select the physical interface: type "interface gi0/0".','Enable the interface: type "no shutdown".',"Notice the R1 Gi0/0 LED turns green on the router faceplate in the 3D room!"],suggestedCommands:["enable","conf t","interface gi0/0","no shutdown","exit"],explanation:'On Cisco IOS routers, physical interfaces are administratively shut down by default upon booting. They must be explicitly brought up with "no shutdown".'},sub10:{targetDevice:"R1",actionType:"terminal",summary:"Configure subinterface Gi0/0.10 as the default gateway for Accounting (VLAN 10).",steps:['In the Router R1 configuration terminal ("conf t"), create the logical subinterface: "interface gi0/0.10".','Set 802.1Q encapsulation for VLAN 10: "encapsulation dot1Q 10".','Assign the gateway IP address and subnet mask: "ip address 192.168.10.1 255.255.255.0".',"Subinterfaces on Cisco IOS are automatically admin-up once the parent interface is enabled."],suggestedCommands:["interface gi0/0.10","encapsulation dot1Q 10","ip address 192.168.10.1 255.255.255.0","exit"],explanation:"Router-on-a-Stick creates virtual subinterfaces on a single physical cable. Subinterface Gi0/0.10 acts as the default gateway for PC-A (192.168.10.10)."},sub20:{targetDevice:"R1",actionType:"terminal",summary:"Configure subinterface Gi0/0.20 as the default gateway for Sales (VLAN 20).",steps:['In Router R1 configuration mode ("conf t"), create the second subinterface: "interface gi0/0.20".','Set 802.1Q encapsulation for VLAN 20: "encapsulation dot1Q 20".','Assign the gateway IP address and subnet mask: "ip address 192.168.20.1 255.255.255.0".','Exit configuration with "end".'],suggestedCommands:["interface gi0/0.20","encapsulation dot1Q 20","ip address 192.168.20.1 255.255.255.0","end"],explanation:"Subinterface Gi0/0.20 acts as the default gateway (192.168.20.1) for PC-B (192.168.20.10), completing the routing bridge between the two subnets."},parent_noip:{targetDevice:"R1",actionType:"terminal",summary:"Ensure parent physical interface Gi0/0 has no IP address assigned.",steps:['If you accidentally assigned an IP address directly to the physical interface "gi0/0", remove it: "interface gi0/0" followed by "no ip address".','Verify with "show ip interface brief" that GigabitEthernet0/0 shows "unassigned".'],suggestedCommands:["interface gi0/0","no ip address","exit"],explanation:"In a Router-on-a-Stick setup, IP addresses belong on the dot1Q subinterfaces, while the parent physical interface acts strictly as the raw trunk transport."},ping_ab:{targetDevice:"PC-A",actionType:"terminal",summary:"Verify end-to-end connectivity by pinging PC-B from PC-A through R1.",steps:["Switch the terminal to PC-A (Desk 1).",'Verify PC-A network settings with: "ipconfig".','Ping PC-B: type "ping 192.168.20.10".','Verify 4 successful ICMP echo replies: "Reply from 192.168.20.10: bytes=32 time=2ms TTL=128".'],suggestedCommands:["ipconfig","ping 192.168.20.10"],explanation:"Packets leave PC-A (192.168.10.10), travel across S1, up the 802.1Q trunk to R1 Gi0/0.10, get routed to Gi0/0.20, and back down to PC-B (192.168.20.10)."},report_attacker_ip:{targetDevice:"SOC-PC",actionType:"report",summary:"Identify the external attacker IP address in the authentication logs.",steps:['Click "SOC Logs & Threat Map" in the top bar (or click the SOC monitor on the wall).','In the "Auth Logs" tab, look for repeated red lines: "sshd: Failed password for invalid user ...".',"Check the Threat Map tab to see the red animated attack arc originating from Netherlands (NL).","Note the source IP address: 203.0.113.45.",'Open the "Incident Report" tab, enter "203.0.113.45" in Field 1, and click Submit.'],suggestedCommands:['grep "Failed password" /var/log/auth.log'],explanation:"Dozens of failed login attempts in quick succession from an external address indicates an automated brute force scanner targeting SSH."},report_attack_type:{targetDevice:"SOC-PC",actionType:"report",summary:"Classify the attack vector observed in the authentication logs.",steps:["Inspect the usernames tested in the logs: root, admin, test, oracle, postgres, ubuntu, git, backup, deploy.","Notice the rapid cadence of common administrative dictionary words.",'In the Incident Report tab, select "Brute force" in the Attack Classification dropdown and submit.'],explanation:"Rapidly attempting passwords against known or common usernames is a classic Dictionary / Credential Stuffing Brute Force attack."},report_compromised_user:{targetDevice:"SOC-PC",actionType:"report",summary:"Identify which user account credentials were breached.",steps:['In the Log Viewer, search for "Accepted password" or filter by "deploy".','At 02:11:36Z, observe: "sshd[840]: Accepted password for deploy from 203.0.113.45 port 51142 ssh2".','Followed by: "systemd-logind: New session 42 of user deploy".','In the Incident Report tab, enter "deploy" in Field 3 and click Submit.'],suggestedCommands:['grep "Accepted password" /var/log/auth.log'],explanation:'The attacker successfully guessed the password for user "deploy", opening an interactive shell session on the production server.'},test_sqli_vuln:{targetDevice:"PC-1",actionType:"terminal",summary:"Prove the SQL injection vulnerability on WEB1 by executing curl on PC-1.",steps:["Open the console for PC-1 on Desk 1.",`Execute the test payload in curl: curl "http://10.0.10.5/login.php?user=' OR '1'='1"`,'Observe the response: "HTTP/1.1 200 OK - Welcome, admin! Authentication bypass successful."',"This proves that unescaped single quotes alter the query logic and bypass authentication."],suggestedCommands:[`curl "http://10.0.10.5/login.php?user=' OR '1'='1"`],explanation:`The payload "' OR '1'='1" closes the SQL string literal and injects an always-true condition, returning the first record (admin) without password validation.`},patch_sqli:{targetDevice:"WEB1",actionType:"editor",summary:"Patch login.php using PDO prepared statements with parameterized queries.",steps:['Click "Patch Editor" in the top bar, and ensure "login.php" is selected.',"Notice the vulnerable code in the editable region concatenates $user directly into SQL.","Replace the editable region with a secure prepared statement:",'  $res = $db->prepare("SELECT * FROM users WHERE name = ?");',"  $res->execute([$user]);",'Click "Save & Verify Patch" to apply and validate your fix.'],suggestedCommands:['$res = $db->prepare("SELECT * FROM users WHERE name = ?");',"$res->execute([$user]);"],explanation:"Prepared statements ensure user input is sent to the database engine separately as parameter data, making it impossible for input characters to alter SQL syntax."},test_sqli_patched:{targetDevice:"PC-1",actionType:"terminal",summary:"Re-run the SQL injection test on PC-1 to verify the vulnerability is mitigated.",steps:["Switch back to the PC-1 terminal on Desk 1.",`Re-run: curl "http://10.0.10.5/login.php?user=' OR '1'='1"`,'Verify the server now returns: "HTTP/1.1 401 Unauthorized - Login failed."'],suggestedCommands:[`curl "http://10.0.10.5/login.php?user=' OR '1'='1"`],explanation:`With prepared statements active, the input "' OR '1'='1" is searched literally as a username, which does not exist, correctly rejecting the login attempt.`},test_xss_vuln:{targetDevice:"PC-1",actionType:"terminal",summary:"Prove Reflected XSS vulnerability in search.php using curl on PC-1.",steps:["In the PC-1 terminal, send an XSS probe with a script tag:",'curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>"','Observe that the server echoes the raw "<script>alert(1)<\/script>" directly in HTML.'],suggestedCommands:['curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>"'],explanation:"Reflected XSS occurs when an application receives untrusted data in an HTTP request and echoes it back in an immediate response without escaping HTML entities."},patch_xss:{targetDevice:"WEB1",actionType:"editor",summary:"Patch search.php with htmlspecialchars() to escape user output.",steps:['Open the "Patch Editor" and select the "search.php (XSS)" tab.',"Notice line 4 directly concatenates $q into HTML output.","Replace the editable patch region with:",`  echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`,'Click "Save & Verify Patch".'],suggestedCommands:[`echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`],explanation:`htmlspecialchars() converts HTML special characters (&, <, >, ", ') into safe HTML entities (&amp;, &lt;, &gt;, etc.), preventing the browser from interpreting them as executable tags.`},test_xss_patched:{targetDevice:"PC-1",actionType:"terminal",summary:"Re-run the XSS test on PC-1 to confirm script tags are safely escaped.",steps:["In the PC-1 terminal, re-run:",'curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>"','Verify the response now contains escaped entities: "&lt;script&gt;alert(1)&lt;/script&gt;".'],suggestedCommands:['curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>"'],explanation:"The probe string is now neutralized into harmless text rather than an executable JavaScript payload."}};function jS(t){return GS[t]||null}function km(t,e,n,i,r,s=[]){const a=[];for(const c of t){let d=!1,h=!1,p=ot.NONE,m="",v=!1;if(c.order&&c.order>1){for(const g of t)if(g.order&&g.order<c.order){const u=a.find(x=>x.id===g.id);if(!u||!u.passed){v=!0;break}}}if(c.type==="ping"&&c.from&&c.to_ip){const g=n(c.from,c.to_ip);if(p=g.failReason,g.success){let u=!0;if(c.to_device){const x=g.hops[g.hops.length-1];x!==c.to_device&&(u=!1,m=`Reached, but last hop was ${x} instead of ${c.to_device}`)}u&&c.via&&(g.hops.includes(c.via)||(u=!1,m=`Reached, but did not route through ${c.via}`)),d=u}else d=!1,m=g.failAt?`Failed at ${g.failAt}`:""}else if(c.type==="config"&&c.device&&c.path){const g=e.get(c.device);if(!g)d=!1;else{const u=Array.isArray(c.path)?c.path:[c.path],x=WS(g,u);typeof c.equals=="object"&&c.equals!==null?d=$S(x,c.equals):d=x===c.equals}}else if(c.type==="report"&&c.field){const g=i.get(c.field);g&&(g.solved?d=!0:g.attemptsLeft<=0?(h=!0,m="Out of attempts"):m=`${g.attemptsLeft} attempts remaining`)}else if(c.type==="vuln_patched"&&c.device&&c.vuln){const g=e.get(c.device),u=g==null?void 0:g.vulns.find(x=>x.id===c.vuln);if(g&&u){const x=g.files.get(u.region.file);if(x){const R=x.split(`
`).slice(u.region.firstLine-1,u.region.lastLine).join(`
`);d=So(R,u.accept)}}}else if(c.type==="exploit_test"&&c.from&&c.device&&c.vuln&&c.expect){const g=e.get(c.device),u=g==null?void 0:g.vulns.find(y=>y.id===c.vuln),x=(g==null?void 0:g.patchRevs.get(c.vuln))||0;if(c.expect==="vulnerable")d=!!r.find(_=>_.srcId===c.from&&_.dstDevice===c.device&&_.vulnId===c.vuln&&_.outcome===ki.VULNERABLE);else if(c.expect==="patched"){let y=!1;if(g&&u){const N=(g.files.get(u.region.file)||"").split(`
`).slice(u.region.firstLine-1,u.region.lastLine).join(`
`);y=So(N,u.accept)}const _=r.filter(C=>C.srcId===c.from&&C.dstDevice===c.device&&C.vulnId===c.vuln),R=_[_.length-1];d=y&&!!R&&R.outcome===ki.PATCHED&&R.patchRev===x}}let S="";if(p!==ot.NONE){const g=s.find(u=>u.reason===p);g&&(S=g.text)}a.push({id:c.id,type:c.type,description:c.description,order:c.order,locked:v,passed:!v&&d,failed:!v&&h,failReason:p,hint:S,detail:m,guidance:c.guidance||jS(c.id)||void 0})}const o=a.length>0&&a.every(c=>c.passed),l=a.some(c=>c.failed);return{states:a,allCompleted:o,hasFailed:l}}function WS(t,e){if(e.length===0)return t;let n=t;for(let i=0;i<e.length;i++){const r=e[i];if(n==null)return;if(r==="interfaces"&&typeof n.getInterface=="function"){const s=n;if(i+1<e.length){const a=e[i+1];i++,n=s.getInterface(a);continue}}if(n instanceof Map){const s=n.get(r);n=s!==void 0?s:n.get(Number(r))}else if(typeof n.get=="function"){const s=n.get(r);n=s!==void 0?s:n.get(Number(r))}else n=n[r]}return n}function $S(t,e){if(typeof t!="object"||t===null)return!1;for(const[n,i]of Object.entries(e)){const r=n==="dot1q_vlan"?"dot1qVlan":n==="dot1qVlan"?"dot1q_vlan":n;if((t[n]!==void 0?t[n]:t[r])!==i)return!1}return!0}class XS{constructor(){Ge(this,"currentScenario",null);Ge(this,"devices",new Map);Ge(this,"links",[]);Ge(this,"spareCablesCount",0);Ge(this,"reservedPorts",new Set);Ge(this,"reportStates",new Map);Ge(this,"reportAnswers",new Map);Ge(this,"httpLogs",[]);Ge(this,"resolver");Ge(this,"sessions",new Map);Ge(this,"onLinkChanged");Ge(this,"onConfigChanged");Ge(this,"onObjectiveUpdated");Ge(this,"onMissionCompleted");Ge(this,"onMissionFailed");this.resolver=new US(this.devices)}loadScenario(e){this.currentScenario=e,this.devices.clear(),this.links=[],this.sessions.clear(),this.reportStates.clear(),this.reportAnswers.clear(),this.httpLogs=[],this.spareCablesCount=e.spare_cables||0,this.reservedPorts=new Set(e.reserved_ports||[]);for(const n of e.devices){const i=new kS(n.id,n.type,n.model,n.hostname);i.rack=n.rack,i.slot=n.slot,i.desk=n.desk;const r=n.config||{};if(r.ip&&(i.ip=r.ip),r.mask&&(i.mask=r.mask),r.gateway&&(i.gateway=r.gateway),r.locked!==void 0&&(i.locked=r.locked),r.vlans)for(const[s,a]of Object.entries(r.vlans))i.vlans.set(Number(s),String(a));if(r.interfaces)for(const[s,a]of Object.entries(r.interfaces)){const o=i.getInterface(s)||i.ensureSubinterface(s);o&&(a.mode&&(o.mode=a.mode),a.accessVlan!==void 0&&(o.accessVlan=a.accessVlan),a.trunkAllowed&&(o.trunkAllowed=a.trunkAllowed),a.adminUp!==void 0&&(o.adminUp=a.adminUp),a.ip&&(o.ip=a.ip),a.mask&&(o.mask=a.mask),a.dot1qVlan!==void 0&&(o.dot1qVlan=a.dot1qVlan))}if(r.files)for(const[s,a]of Object.entries(r.files))i.files.set(s,a);r.services&&(i.services=[...r.services]),r.vulns&&(i.vulns=[...r.vulns]),this.devices.set(i.id,i)}for(const n of e.links)this.applyLink(n.a,n.b,n.locked??!1);if(e.report&&e.report.fields){const n=e.report.max_attempts||3;for(const i of e.report.fields)this.reportStates.set(i.id,{id:i.id,label:i.label,kind:i.kind,options:i.options,attemptsLeft:n,lastValue:null,solved:!1,maxAttempts:n});if(e.solution)for(const i of e.solution)i.field&&i.value&&this.reportAnswers.set(i.field,i.value)}return this.resolver.refreshAllOperStatuses(),this.notifyObjectives(),{ok:!0,errors:[]}}applyLink(e,n,i=!1){const[r,s]=e.split(":"),[a,o]=n.split(":"),l=this.devices.get(r),c=this.devices.get(a);if(!l||!c)return!1;const d=l.getInterface(s),h=c.getInterface(o);return!d||!h?!1:(d.peer=n,h.peer=e,this.links.push({a:e,b:n,locked:i}),this.resolver.refreshAllOperStatuses(),!0)}connectLink(e,n){if(this.spareCablesCount<=0)return{ok:!1,reason:"No spare cables remaining in inventory."};if(this.reservedPorts.has(e))return{ok:!1,reason:`Port ${e} is reserved (dust cap attached).`};if(this.reservedPorts.has(n))return{ok:!1,reason:`Port ${n} is reserved (dust cap attached).`};const[i,r]=e.split(":"),[s,a]=n.split(":");if(i===s)return{ok:!1,reason:"Cannot connect a cable to the same device."};const o=this.devices.get(i),l=this.devices.get(s);if(!o||!l)return{ok:!1,reason:"Target device not found."};const c=o.getInterface(r),d=l.getInterface(a);return!c||!d?{ok:!1,reason:"Interface not found."}:c.peer?{ok:!1,reason:`Port ${e} is already in use.`}:d.peer?{ok:!1,reason:`Port ${n} is already in use.`}:(this.applyLink(e,n,!1),this.spareCablesCount--,this.onLinkChanged&&this.onLinkChanged(e,n,!0),this.notifyObjectives(),{ok:!0})}disconnectLink(e){const n=this.links.findIndex(d=>d.a===e||d.b===e);if(n===-1)return{ok:!1,reason:"No link connected to this port."};const i=this.links[n];if(i.locked)return{ok:!1,reason:"This cable is locked by facility security."};const[r,s]=i.a.split(":"),[a,o]=i.b.split(":"),l=this.devices.get(r),c=this.devices.get(a);if(l){const d=l.getInterface(s);d&&(d.peer=null)}if(c){const d=c.getInterface(o);d&&(d.peer=null)}return this.links.splice(n,1),this.spareCablesCount++,this.resolver.refreshAllOperStatuses(),this.onLinkChanged&&this.onLinkChanged(i.a,i.b,!1),this.notifyObjectives(),{ok:!0}}ping(e,n){return this.resolver.resolvePing(e,n)}httpRequest(e,n){const i=n.match(/^http:\/\/([^/:]+)(?::(\d+))?(\/[^?]*)(?:\?(.*))?$/);if(!i)return{ok:!1,status:400,body:`curl: (3) URL malformed: ${n}`,outcome:ki.ERROR};const r=i[1],s=i[2]?parseInt(i[2],10):80,a=i[3]||"/",o=i[4]||"";if(!this.ping(e,r).success)return{ok:!1,status:0,body:`curl: (7) Failed to connect to ${r} port ${s}: Connection refused`,outcome:ki.ERROR};let c=null;for(const p of this.devices.values())if(p.ip===r){c=p;break}if(!c)return{ok:!1,status:0,body:`curl: (7) Failed to connect to ${r} port ${s}: No response`,outcome:ki.ERROR};if(!c.services.find(p=>p.port===s))return{ok:!1,status:0,body:`curl: (7) Failed to connect to ${r} port ${s}: Port closed`,outcome:ki.ERROR};const h=c.vulns.find(p=>p.route===a);if(h){const m=new URLSearchParams(o).get(h.exploit.param)||"",v=decodeURIComponent(m.trim()),u=(c.files.get(h.region.file)||"").split(`
`).slice(h.region.firstLine-1,h.region.lastLine).join(`
`),x=So(u,h.accept),y=c.patchRevs.get(h.id)||0;if(v===h.exploit.payload){const _=x?ki.PATCHED:ki.VULNERABLE,R=x?h.exploit.patchedBody:h.exploit.vulnerableBody,C=x?401:200;return this.httpLogs.push({srcId:e,dstDevice:c.id,vulnId:h.id,patchRev:y,outcome:_}),this.notifyObjectives(),{ok:x,status:C,body:R,outcome:_}}}return{ok:!0,status:200,body:`HTTP/1.1 200 OK

<html><body><h1>It Works!</h1></body></html>`,outcome:ki.NORMAL}}submitReport(e,n){var c;const i=this.reportStates.get(e);if(!i||i.attemptsLeft<=0)return{ok:!1,correct:!1,attemptsLeft:0};let r="";const s=(c=this.currentScenario)==null?void 0:c.objectives.find(d=>d.type==="report"&&d.field===e);s?r=String(s.equals||""):this.reportAnswers.has(e)&&(r=this.reportAnswers.get(e));const a=n.trim().toLowerCase(),o=r.trim().toLowerCase(),l=a===o;return i.lastValue=n.trim(),l?i.solved=!0:i.attemptsLeft--,this.notifyObjectives(),{ok:!0,correct:l,attemptsLeft:i.attemptsLeft}}readFile(e,n){const i=this.devices.get(e);return i?i.files.get(n)??null:null}patchViews(e,n){const i=this.devices.get(e);if(!i)return[];const r=[];for(const s of i.vulns)if(s.region.file===n){const l=(i.files.get(n)||"").split(`
`).slice(s.region.firstLine-1,s.region.lastLine).join(`
`),c=So(l,s.accept);r.push({vulnId:s.id,file:n,firstLine:s.region.firstLine,lastLine:s.region.lastLine,hint:s.hint,isPatched:c})}return r}writePatch(e,n,i){const r=this.devices.get(e);if(!r)return{ok:!1,accepted:!1};const s=r.vulns.find(v=>v.id===n);if(!s)return{ok:!1,accepted:!1};const a=r.files.get(s.region.file);if(!a)return{ok:!1,accepted:!1};const o=a.split(`
`),l=o.slice(0,s.region.firstLine-1),c=o.slice(s.region.lastLine),d=i.split(`
`),h=[...l,...d,...c];r.files.set(s.region.file,h.join(`
`)),s.region.lastLine=s.region.firstLine+d.length-1;const p=(r.patchRevs.get(n)||0)+1;r.patchRevs.set(n,p);const m=So(i,s.accept);return this.notifyObjectives(),{ok:!0,accepted:m,hint:m?void 0:s.hint}}openSession(e){if(this.sessions.has(e))return this.sessions.get(e);const n=this.devices.get(e);if(!n)throw new Error(`Device ${e} not found`);const i=new HS(n,(r,s)=>this.ping(r,s),(r,s)=>this.httpRequest(r,s));return this.sessions.set(e,i),i}notifyObjectives(){if(!this.currentScenario)return;const e=km(this.currentScenario.objectives,this.devices,(n,i)=>this.ping(n,i),this.reportStates,this.httpLogs,this.currentScenario.hints);this.onObjectiveUpdated&&this.onObjectiveUpdated(e.states),e.allCompleted&&this.onMissionCompleted?this.onMissionCompleted(this.currentScenario.id):e.hasFailed&&this.onMissionFailed&&this.onMissionFailed(this.currentScenario.id)}objectiveStates(){return this.currentScenario?km(this.currentScenario.objectives,this.devices,(e,n)=>this.ping(e,n),this.reportStates,this.httpLogs,this.currentScenario.hints).states:[]}debriefView(){var i;if(!this.currentScenario)return null;const e=this.objectiveStates(),n={};if(this.currentScenario.report&&this.currentScenario.report.fields)for(const r of this.currentScenario.report.fields){const s=this.currentScenario.objectives.find(l=>l.type==="report"&&l.field===r.id),a=String((s==null?void 0:s.equals)||""),o=[];if(r.evidence)for(const l of r.evidence){const c=(i=this.currentScenario.logs)==null?void 0:i.find(h=>h.source===l.source&&h.file===l.file),d=c==null?void 0:c.lines[l.line-1];d&&o.push({source:l.source,file:l.file,line:l.line,text:d.text})}n[r.id]={answer:a,evidence:o}}return{debrief:this.currentScenario.debrief||"Mission completed successfully!",objectives:e,reportAnswers:n}}}const qS={schema_version:1,id:"m0_orientation",sequence:0,title:"Orientation: First Connection",briefing:"Welcome to the server room. This short tutorial teaches the core loop: use camera presets to find equipment, click a device to open its console, run a command, and read the objective panel for your next step. Start in the PC-A console, then ping PC-B.",devices:[{id:"PC-A",type:"host",model:"pc",hostname:"PC-A",desk:"desk_1",config:{ip:"192.168.1.10",mask:"255.255.255.0",gateway:"192.168.1.1"}},{id:"PC-B",type:"host",model:"pc",hostname:"PC-B",desk:"desk_2",config:{ip:"192.168.1.20",mask:"255.255.255.0",gateway:"192.168.1.1"}}],links:[{a:"PC-A:Eth0",b:"PC-B:Eth0",locked:!0}],spare_cables:0,objectives:[{id:"tutorial_ping",type:"ping",from:"PC-A",to_ip:"192.168.1.20",to_device:"PC-B",description:"From PC-A, ping PC-B at 192.168.1.20",guidance:{targetDevice:"PC-A",actionType:"terminal",summary:"Open the PC-A terminal and run one ping.",steps:["Use the Desk 1 camera angle to locate PC-A, or use the already-open PC-A console.","Click inside the terminal input at the bottom of the console.","Type ping 192.168.1.20 and press Enter.","A successful reply marks the tutorial complete. The objective panel on the left tracks your progress."],suggestedCommands:["ping 192.168.1.20"],explanation:"The 3D room is the workspace, while the terminal and objective panel are your primary tools. You do not need to interact with every rack object—only the highlighted device or port required by the active objective."}}],hints:[{reason:ot.HOST_UNREACHABLE,text:"This tutorial is already wired. Open the PC-A console and run ping 192.168.1.20."}],debrief:"You have learned the core interaction loop: choose a camera angle, identify the named device, open its console, perform the requested action, and use the objective panel to confirm progress. Mission 1 adds cabling and switch/router configuration."},mf={schema_version:1,id:"m1_vlan_ping",sequence:1,title:"Day One: Get Them Talking",briefing:"Accounting (PC-A) and Sales (PC-B) can't reach each other. The router is racked and cabled to the switch. Cable up PC-B, configure VLANs and a Router-on-a-Stick trunk, and make PC-A ping PC-B.",devices:[{id:"R1",type:"router",model:"router_2port",hostname:"Router",rack:"rack_a",slot:1,config:{}},{id:"S1",type:"switch",model:"switch_24",hostname:"Switch",rack:"rack_a",slot:3,config:{vlans:{10:"ACCOUNTING"},interfaces:{"Fa0/1":{mode:"access",accessVlan:10}}}},{id:"PC-A",type:"host",model:"pc",hostname:"PC-A",desk:"desk_1",config:{ip:"192.168.10.10",mask:"255.255.255.0",gateway:"192.168.10.1",locked:!0}},{id:"PC-B",type:"host",model:"pc",hostname:"PC-B",desk:"desk_2",config:{ip:"192.168.20.10",mask:"255.255.255.0",gateway:"192.168.20.1",locked:!0}}],links:[{a:"R1:Gi0/0",b:"S1:Gi0/1",locked:!0},{a:"S1:Fa0/1",b:"PC-A:Eth0",locked:!0}],spare_cables:1,reserved_ports:["R1:Gi0/1"],objectives:[{id:"cable_pc_b",type:"config",device:"S1",path:["interfaces","Fa0/2","peer"],equals:"PC-B:Eth0",description:"Connect spare cable from S1 Fa0/2 to PC-B Eth0"},{id:"vlan20_port",type:"config",device:"S1",path:["interfaces","Fa0/2","accessVlan"],equals:20,description:"Configure S1 Fa0/2 in VLAN 20 (Sales)"},{id:"trunk",type:"config",device:"S1",path:["interfaces","Gi0/1","mode"],equals:"trunk",description:"Configure S1 Gi0/1 as an 802.1Q trunk port"},{id:"r1_no_shut",type:"config",device:"R1",path:["interfaces","Gi0/0","adminUp"],equals:!0,description:"Enable R1 physical interface (no shutdown on Gi0/0)"},{id:"sub10",type:"config",device:"R1",path:["interfaces","Gi0/0.10"],equals:{dot1qVlan:10,ip:"192.168.10.1",mask:"255.255.255.0"},description:"Configure R1 Gi0/0.10: encapsulation dot1Q 10, IP 192.168.10.1/24"},{id:"sub20",type:"config",device:"R1",path:["interfaces","Gi0/0.20"],equals:{dot1qVlan:20,ip:"192.168.20.1",mask:"255.255.255.0"},description:"Configure R1 Gi0/0.20: encapsulation dot1Q 20, IP 192.168.20.1/24"},{id:"parent_noip",type:"config",device:"R1",path:["interfaces","Gi0/0","ip"],equals:null,description:"Ensure Gi0/0 parent interface has no IP address assigned"},{id:"ping_ab",type:"ping",from:"PC-A",to_ip:"192.168.20.10",to_device:"PC-B",via:"R1",description:"Verify PC-A can ping PC-B (192.168.20.10) through router R1"}],hints:[{reason:ot.NO_LINK,text:"PC-B isn't cabled to anything yet. Grab a cable from your inventory and plug it into S1 Fa0/2."},{reason:ot.ADMIN_DOWN,text:"The physical interface Gi0/0 on R1 is shut down. Enter config-if on R1 and execute 'no shutdown'."},{reason:ot.NO_GATEWAY,text:"Hosts in different subnets require a default gateway to communicate."},{reason:ot.VLAN_MISMATCH,text:"Check which VLAN each switch port is in, and verify that S1 Gi0/1 is set to 'switchport mode trunk'."},{reason:ot.NO_ROUTE,text:"R1 cannot find a route for the subnet. Make sure subinterfaces Gi0/0.10 and Gi0/0.20 are configured."}],debrief:"Outstanding work! You set up a classic Router-on-a-Stick (ROAS) architecture. Subinterfaces Gi0/0.10 and Gi0/0.20 act as default gateways for VLANs 10 and 20, routing frames tagged with 802.1Q across the Gi0/1 trunk link.",solution:[{link:{a:"S1:Fa0/2",b:"PC-B:Eth0"}},{device:"S1",commands:["enable","conf t","vlan 20","name SALES","exit","interface fa0/2","switchport mode access","switchport access vlan 20","exit","interface gi0/1","switchport mode trunk","end"]},{device:"R1",commands:["enable","conf t","interface gi0/0","no shutdown","exit","interface gi0/0.10","encapsulation dot1Q 10","ip address 192.168.10.1 255.255.255.0","exit","interface gi0/0.20","encapsulation dot1Q 20","ip address 192.168.20.1 255.255.255.0","end"]}]},YS={schema_version:1,id:"m2_log_triage",sequence:2,title:"Who Knocked?",briefing:"Security Operations alert: Suspicious unauthorized login activity detected on production server WEB1. Investigate the system authentication logs, correlate threat intel on the SOC monitor, and file an incident triage report.",devices:[{id:"WEB1",type:"server",model:"server",hostname:"web1",rack:"rack_a",slot:5,config:{ip:"10.0.10.5",mask:"255.255.255.0",gateway:"10.0.10.1"}},{id:"S1",type:"switch",model:"switch_24",hostname:"Switch",rack:"rack_a",slot:3,config:{vlans:{10:"DMZ"},interfaces:{"Fa0/1":{mode:"access",accessVlan:10},"Fa0/5":{mode:"access",accessVlan:10}}}},{id:"SOC-PC",type:"host",model:"pc",hostname:"SOC-PC",desk:"desk_1",config:{ip:"10.0.10.50",mask:"255.255.255.0",gateway:"10.0.10.1"}}],links:[{a:"S1:Fa0/1",b:"SOC-PC:Eth0",locked:!0},{a:"S1:Fa0/5",b:"WEB1:Eth0",locked:!0}],spare_cables:0,logs:[{source:"WEB1",file:"/var/log/auth.log",lines:[{t:"2026-03-14T01:45:10Z",text:"systemd[1]: Started OpenSSH server daemon."},{t:"2026-03-14T01:52:03Z",text:"sshd[702]: Accepted publickey for admin from 10.0.10.50 port 54102 ssh2"},{t:"2026-03-14T01:52:15Z",text:"sudo[708]: admin : TTY=pts/0 ; PWD=/home/admin ; USER=root ; COMMAND=/usr/bin/apt update"},{t:"2026-03-14T02:05:12Z",text:"sshd[750]: Received disconnect from 198.51.100.12 port 41100: 11: Normal Shutdown",src_ip:"198.51.100.12",geo:"CN"},{t:"2026-03-14T02:11:05Z",text:"sshd[811]: Failed password for invalid user root from 203.0.113.45 port 51122 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:07Z",text:"sshd[813]: Failed password for invalid user admin from 203.0.113.45 port 51124 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:10Z",text:"sshd[815]: Failed password for invalid user test from 203.0.113.45 port 51126 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:12Z",text:"sshd[817]: Failed password for invalid user oracle from 203.0.113.45 port 51128 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:15Z",text:"sshd[820]: Failed password for invalid user postgres from 203.0.113.45 port 51130 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:18Z",text:"sshd[823]: Failed password for invalid user ubuntu from 203.0.113.45 port 51132 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:21Z",text:"sshd[826]: Failed password for invalid user git from 203.0.113.45 port 51134 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:25Z",text:"sshd[829]: Failed password for invalid user backup from 203.0.113.45 port 51136 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:29Z",text:"sshd[832]: Failed password for deploy from 203.0.113.45 port 51138 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:32Z",text:"sshd[835]: Failed password for deploy from 203.0.113.45 port 51140 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:36Z",text:"sshd[840]: Accepted password for deploy from 203.0.113.45 port 51142 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:37Z",text:"systemd-logind[412]: New session 42 of user deploy.",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:15:01Z",text:"CRON[901]: (root) CMD (/usr/local/bin/backup-sync.sh >/dev/null 2>&1)"},{t:"2026-03-14T02:22:40Z",text:"sshd[950]: Connection closed by authenticating user root 185.220.101.5 port 49201 [preauth]",src_ip:"185.220.101.5",geo:"RU"}]}],report:{max_attempts:3,fields:[{id:"attacker_ip",label:"Attacker IP Address",kind:"ipv4",evidence:[{source:"WEB1",file:"/var/log/auth.log",line:15}]},{id:"attack_type",label:"Attack Vector",kind:"choice",options:["Brute force","SQL injection","Port scan","Phishing"],evidence:[{source:"WEB1",file:"/var/log/auth.log",line:5}]},{id:"compromised_user",label:"Compromised User Account",kind:"text",evidence:[{source:"WEB1",file:"/var/log/auth.log",line:15}]}]},objectives:[{id:"report_attacker_ip",type:"report",field:"attacker_ip",equals:"203.0.113.45",description:"Identify and submit the external Attacker IP address"},{id:"report_attack_type",type:"report",field:"attack_type",equals:"Brute force",description:"Classify the attack vector (Brute force dictionary attack)"},{id:"report_compromised_user",type:"report",field:"compromised_user",equals:"deploy",description:"Determine which user account credentials were breached"}],debrief:"Incident Report accepted! You spotted the sustained SSH dictionary attack from 203.0.113.45 (Netherlands) testing common service usernames before successfully compromising 'deploy' via password authentication. Recommended hardening: disable password auth in /etc/ssh/sshd_config (PasswordAuthentication no), enforce public key auth, and install Fail2ban.",solution:[{field:"attacker_ip",value:"203.0.113.45"},{field:"attack_type",value:"Brute force"},{field:"compromised_user",value:"deploy"}]},KS={schema_version:1,id:"m3_web_patch",sequence:3,title:"Patch Tuesday",briefing:"Security auditing discovered two critical flaws on WEB1: an unauthenticated SQL Injection in login.php and Reflected XSS in search.php. Prove each exploit with curl from your PC, patch the code in the editor, and verify the attack is neutralized.",devices:[{id:"WEB1",type:"server",model:"server",hostname:"web1",rack:"rack_a",slot:5,config:{ip:"10.0.10.5",mask:"255.255.255.0",gateway:"10.0.10.1",files:{"/var/www/login.php":`<?php
function check_login($db) {
  $user = $_POST['user'];
  $q = "SELECT * FROM users WHERE name = '" . $user . "'";
  $res = $db->query($q);
  return $res->fetch();
}
`,"/var/www/search.php":`<?php
function handle_search() {
  $q = $_GET['q'];
  echo "<div class='results'>Results for: " . $q . "</div>";
}
`},services:[{id:"http",port:80,root:"/var/www"}],vulns:[{id:"sqli_login",kind:"sqli",service:"http",route:"/login.php",region:{file:"/var/www/login.php",firstLine:4,lastLine:5},accept:[`\\$res=\\$db->prepare\\((["'])SELECT \\* FROM users WHERE name = \\?\\1\\);\\$res->execute\\((\\[\\$user\\]|array\\(\\$user\\))\\);`,`\\$stmt=\\$db->prepare\\((["'])SELECT \\* FROM users WHERE name = \\?\\1\\);\\$stmt->execute\\((\\[\\$user\\]|array\\(\\$user\\))\\);\\$res=\\$stmt;`],hint:'Use a prepared statement with a parameter placeholder: $res = $db->prepare("SELECT * FROM users WHERE name = ?"); $res->execute([$user]);',exploit:{param:"user",payload:"' OR '1'='1",vulnerableBody:`HTTP/1.1 200 OK

<h1>Welcome, admin!</h1><p>Authentication bypass successful.</p>`,patchedBody:`HTTP/1.1 401 Unauthorized

<h1>Login failed.</h1><p>Invalid credentials.</p>`}},{id:"xss_search",kind:"xss",service:"http",route:"/search.php",region:{file:"/var/www/search.php",firstLine:4,lastLine:4},accept:[`echo "<div class='results'>Results for: "\\.htmlspecialchars\\(\\$q,ENT_QUOTES,['"]UTF-8['"]\\)\\."</div>";`,`echo "<div class='results'>Results for: "\\.htmlspecialchars\\(\\$q\\)\\."</div>";`,`\\$safe=htmlspecialchars\\(\\$q\\);echo "<div class='results'>Results for: "\\.\\$safe\\."</div>";`],hint:`Sanitize output using htmlspecialchars: echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`,exploit:{param:"q",payload:"<script>alert(1)<\/script>",vulnerableBody:`HTTP/1.1 200 OK

<div class='results'>Results for: <script>alert(1)<\/script></div>`,patchedBody:`HTTP/1.1 200 OK

<div class='results'>Results for: &lt;script&gt;alert(1)&lt;/script&gt;</div>`}}]}},{id:"S1",type:"switch",model:"switch_24",hostname:"Switch",rack:"rack_a",slot:3,config:{vlans:{10:"DMZ"},interfaces:{"Fa0/1":{mode:"access",accessVlan:10},"Fa0/5":{mode:"access",accessVlan:10}}}},{id:"PC-1",type:"host",model:"pc",hostname:"PC-1",desk:"desk_1",config:{ip:"10.0.10.50",mask:"255.255.255.0",gateway:"10.0.10.1"}}],links:[{a:"S1:Fa0/1",b:"PC-1:Eth0",locked:!0},{a:"S1:Fa0/5",b:"WEB1:Eth0",locked:!0}],spare_cables:0,objectives:[{id:"test_sqli_vuln",type:"exploit_test",from:"PC-1",device:"WEB1",vuln:"sqli_login",expect:"vulnerable",order:1,description:`Execute SQLi test curl "http://10.0.10.5/login.php?user=' OR '1'='1" on PC-1 to confirm vulnerability`},{id:"patch_sqli",type:"vuln_patched",device:"WEB1",vuln:"sqli_login",order:2,description:"Patch login.php using PDO prepared statements in the code editor"},{id:"test_sqli_patched",type:"exploit_test",from:"PC-1",device:"WEB1",vuln:"sqli_login",expect:"patched",order:3,description:"Re-run SQLi test curl on PC-1 to verify attack fails (401 Unauthorized)"},{id:"test_xss_vuln",type:"exploit_test",from:"PC-1",device:"WEB1",vuln:"xss_search",expect:"vulnerable",order:1,description:'Execute XSS test curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>" on PC-1'},{id:"patch_xss",type:"vuln_patched",device:"WEB1",vuln:"xss_search",order:2,description:"Patch search.php with htmlspecialchars() to escape user output"},{id:"test_xss_patched",type:"exploit_test",from:"PC-1",device:"WEB1",vuln:"xss_search",expect:"patched",order:3,description:"Re-run XSS test curl on PC-1 to verify HTML special characters are escaped"}],debrief:`Security patches deployed successfully! Parameterized queries (prepared statements) neutralize SQL injection by separating code from data, completely neutralizing quotes and SQL syntax hijacking. htmlspecialchars() neutralizes Reflected XSS by converting sensitive characters (<, >, &, ', ") to HTML entities before output.`},yl=[qS,mf,YS,KS];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ep="170",ZS=0,Im=1,QS=2,cx=1,ux=2,qi=3,zr=0,In=1,Zi=2,Ur=0,fa=1,Dm=2,Um=3,Om=4,JS=5,ss=100,eM=101,tM=102,nM=103,iM=104,rM=200,sM=201,aM=202,oM=203,gf=204,vf=205,lM=206,cM=207,uM=208,dM=209,fM=210,hM=211,pM=212,mM=213,gM=214,xf=0,_f=1,yf=2,Ma=3,Sf=4,Mf=5,Ef=6,wf=7,dx=0,vM=1,xM=2,Or=0,_M=1,yM=2,SM=3,fx=4,MM=5,EM=6,wM=7,hx=300,Ea=301,wa=302,bf=303,Tf=304,su=306,Cf=1e3,us=1001,Af=1002,Mi=1003,bM=1004,Sl=1005,Ui=1006,Fu=1007,ds=1008,lr=1009,px=1010,mx=1011,Go=1012,tp=1013,Ss=1014,er=1015,Zo=1016,np=1017,ip=1018,ba=1020,gx=35902,vx=1021,xx=1022,_i=1023,_x=1024,yx=1025,ha=1026,Ta=1027,Sx=1028,rp=1029,Mx=1030,sp=1031,ap=1033,ac=33776,oc=33777,lc=33778,cc=33779,Rf=35840,Nf=35841,Pf=35842,Lf=35843,kf=36196,If=37492,Df=37496,Uf=37808,Of=37809,Ff=37810,Bf=37811,zf=37812,Hf=37813,Vf=37814,Gf=37815,jf=37816,Wf=37817,$f=37818,Xf=37819,qf=37820,Yf=37821,uc=36492,Kf=36494,Zf=36495,Ex=36283,Qf=36284,Jf=36285,eh=36286,TM=3200,CM=3201,wx=0,AM=1,wr="",Hn="srgb",La="srgb-linear",au="linear",Tt="srgb",Ls=7680,Fm=519,RM=512,NM=513,PM=514,bx=515,LM=516,kM=517,IM=518,DM=519,Bm=35044,zm="300 es",tr=2e3,Oc=2001;class ka{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hm=1234567;const Mo=Math.PI/180,jo=180/Math.PI;function Ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[t&255]+fn[t>>8&255]+fn[t>>16&255]+fn[t>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function op(t,e){return(t%e+e)%e}function UM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function OM(t,e,n){return t!==e?(n-t)/(e-t):0}function Eo(t,e,n){return(1-n)*t+n*e}function FM(t,e,n,i){return Eo(t,e,1-Math.exp(-n*i))}function BM(t,e=1){return e-Math.abs(op(t,e*2)-e)}function zM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function HM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function VM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function GM(t,e){return t+Math.random()*(e-t)}function jM(t){return t*(.5-Math.random())}function WM(t){t!==void 0&&(Hm=t);let e=Hm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $M(t){return t*Mo}function XM(t){return t*jo}function qM(t){return(t&t-1)===0&&t!==0}function YM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function KM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ZM(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),h=s((e-i)/2),p=a((e-i)/2),m=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*h,l*p,o*c);break;case"YZY":t.set(l*p,o*d,l*h,o*c);break;case"ZXZ":t.set(l*h,l*p,o*d,o*c);break;case"XZX":t.set(o*d,l*v,l*m,o*c);break;case"YXY":t.set(l*m,o*d,l*v,o*c);break;case"ZYZ":t.set(l*v,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $s(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function _n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Ml={DEG2RAD:Mo,RAD2DEG:jo,generateUUID:Ia,clamp:tn,euclideanModulo:op,mapLinear:UM,inverseLerp:OM,lerp:Eo,damp:FM,pingpong:BM,smoothstep:zM,smootherstep:HM,randInt:VM,randFloat:GM,randFloatSpread:jM,seededRandom:WM,degToRad:$M,radToDeg:XM,isPowerOfTwo:qM,ceilPowerOfTwo:YM,floorPowerOfTwo:KM,setQuaternionFromProperEuler:ZM,normalize:_n,denormalize:$s};class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,n,i,r,s,a,o,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],p=i[2],m=i[5],v=i[8],S=r[0],g=r[3],u=r[6],x=r[1],y=r[4],_=r[7],R=r[2],C=r[5],T=r[8];return s[0]=a*S+o*x+l*R,s[3]=a*g+o*y+l*C,s[6]=a*u+o*_+l*T,s[1]=c*S+d*x+h*R,s[4]=c*g+d*y+h*C,s[7]=c*u+d*_+h*T,s[2]=p*S+m*x+v*R,s[5]=p*g+m*y+v*C,s[8]=p*u+m*_+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,p=o*l-d*s,m=c*s-a*l,v=n*h+i*p+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=h*S,e[1]=(r*c-d*i)*S,e[2]=(o*i-r*a)*S,e[3]=p*S,e[4]=(d*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Bu.makeScale(e,n)),this}rotate(e){return this.premultiply(Bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bu=new et;function Tx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function QM(){const t=Fc("canvas");return t.style.display="block",t}const Vm={};function lo(t){t in Vm||(Vm[t]=!0,console.warn(t))}function JM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function eE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gt={enabled:!0,workingColorSpace:La,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Tt&&(t.r=ir(t.r),t.g=ir(t.g),t.b=ir(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Tt&&(t.r=pa(t.r),t.g=pa(t.g),t.b=pa(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===wr?au:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function ir(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Gm=[.64,.33,.3,.6,.15,.06],jm=[.2126,.7152,.0722],Wm=[.3127,.329],$m=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xm=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);gt.define({[La]:{primaries:Gm,whitePoint:Wm,transfer:au,toXYZ:$m,fromXYZ:Xm,luminanceCoefficients:jm,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:Gm,whitePoint:Wm,transfer:Tt,toXYZ:$m,fromXYZ:Xm,luminanceCoefficients:jm,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}});let ks;class nE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ks===void 0&&(ks=Fc("canvas")),ks.width=e.width,ks.height=e.height;const i=ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ks}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ir(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ir(n[i]/255)*255):n[i]=ir(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iE=0;class Cx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Ia(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zu(r[a].image)):s.push(zu(r[a]))}else s=zu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function zu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?nE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rE=0;class Dn extends ka{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,i=us,r=us,s=Ui,a=ds,o=_i,l=lr,c=Dn.DEFAULT_ANISOTROPY,d=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Ia(),this.name="",this.source=new Cx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cf:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case Af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cf:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case Af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=hx;Dn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],v=l[9],S=l[2],g=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-S)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+S)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,_=(m+1)/2,R=(u+1)/2,C=(d+p)/4,T=(h+S)/4,N=(v+g)/4;return y>_&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=T/i):_>R?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=C/r,s=N/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=N/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-v)*(g-v)+(h-S)*(h-S)+(p-d)*(p-d));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(h-S)/x,this.z=(p-d)/x,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sE extends ka{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Cx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends sE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ax extends Dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aE extends Dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const p=s[a+0],m=s[a+1],v=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(o===1){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=S;return}if(h!==S||l!==p||c!==m||d!==v){let g=1-o;const u=l*p+c*m+d*v+h*S,x=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const R=Math.sqrt(y),C=Math.atan2(R,u*x);g=Math.sin(g*C)/R,o=Math.sin(o*C)/R}const _=o*x;if(l=l*g+p*_,c=c*g+m*_,d=d*g+v*_,h=h*g+S*_,g===1-o){const R=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=R,c*=R,d*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],p=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+d*h+l*m-c*p,e[n+1]=l*v+d*p+c*h-o*m,e[n+2]=c*v+d*m+o*p-l*h,e[n+3]=d*v-o*h-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),p=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=p*d*h+c*m*v,this._y=c*m*h-p*d*v,this._z=c*d*v+p*m*h,this._w=c*d*h-p*m*v;break;case"YXZ":this._x=p*d*h+c*m*v,this._y=c*m*h-p*d*v,this._z=c*d*v-p*m*h,this._w=c*d*h+p*m*v;break;case"ZXY":this._x=p*d*h-c*m*v,this._y=c*m*h+p*d*v,this._z=c*d*v+p*m*h,this._w=c*d*h-p*m*v;break;case"ZYX":this._x=p*d*h-c*m*v,this._y=c*m*h+p*d*v,this._z=c*d*v-p*m*h,this._w=c*d*h+p*m*v;break;case"YZX":this._x=p*d*h+c*m*v,this._y=c*m*h+p*d*v,this._z=c*d*v-p*m*h,this._w=c*d*h-p*m*v;break;case"XZY":this._x=p*d*h-c*m*v,this._y=c*m*h-p*d*v,this._z=c*d*v+p*m*h,this._w=c*d*h+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],p=i+o+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=a*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hu=new k,qm=new Qo;class Jo{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ci):ci.fromBufferAttribute(s,a),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),El.copy(i.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qa),wl.subVectors(this.max,Qa),Is.subVectors(e.a,Qa),Ds.subVectors(e.b,Qa),Us.subVectors(e.c,Qa),pr.subVectors(Ds,Is),mr.subVectors(Us,Ds),Xr.subVectors(Is,Us);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Xr.z,Xr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Xr.z,0,-Xr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Xr.y,Xr.x,0];return!Vu(n,Is,Ds,Us,wl)||(n=[1,0,0,0,1,0,0,0,1],!Vu(n,Is,Ds,Us,wl))?!1:(bl.crossVectors(pr,mr),n=[bl.x,bl.y,bl.z],Vu(n,Is,Ds,Us,wl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gi=[new k,new k,new k,new k,new k,new k,new k,new k],ci=new k,El=new Jo,Is=new k,Ds=new k,Us=new k,pr=new k,mr=new k,Xr=new k,Qa=new k,wl=new k,bl=new k,qr=new k;function Vu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){qr.fromArray(t,s);const o=r.x*Math.abs(qr.x)+r.y*Math.abs(qr.y)+r.z*Math.abs(qr.z),l=e.dot(qr),c=n.dot(qr),d=i.dot(qr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const oE=new Jo,Ja=new k,Gu=new k;class ou{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ja.subVectors(e,this.center);const n=Ja.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ja,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ja.copy(e.center).add(Gu)),this.expandByPoint(Ja.copy(e.center).sub(Gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new k,ju=new k,Tl=new k,gr=new k,Wu=new k,Cl=new k,$u=new k;class lp{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ji.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,n),ji.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ju.copy(e).add(n).multiplyScalar(.5),Tl.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(ju);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Tl),o=gr.dot(this.direction),l=-gr.dot(Tl),c=gr.lengthSq(),d=Math.abs(1-a*a);let h,p,m,v;if(d>0)if(h=a*l-o,p=a*o-l,v=s*d,h>=0)if(p>=-v)if(p<=v){const S=1/d;h*=S,p*=S,m=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=s,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;else p<=-v?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c):p<=v?(h=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ju).addScaledVector(Tl,p),m}intersectSphere(e,n){ji.subVectors(e.center,this.origin);const i=ji.dot(this.direction),r=ji.dot(ji)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,n,i,r,s){Wu.subVectors(n,e),Cl.subVectors(i,e),$u.crossVectors(Wu,Cl);let a=this.direction.dot($u),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gr.subVectors(this.origin,e);const l=o*this.direction.dot(Cl.crossVectors(gr,Cl));if(l<0)return null;const c=o*this.direction.dot(Wu.cross(gr));if(c<0||l+c>a)return null;const d=-o*gr.dot($u);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,n,i,r,s,a,o,l,c,d,h,p,m,v,S,g){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,p,m,v,S,g)}set(e,n,i,r,s,a,o,l,c,d,h,p,m,v,S,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=p,u[3]=m,u[7]=v,u[11]=S,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Os.setFromMatrixColumn(e,0).length(),s=1/Os.setFromMatrixColumn(e,1).length(),a=1/Os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=a*d,m=a*h,v=o*d,S=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+v*c,n[5]=p-S*c,n[9]=-o*l,n[2]=S-p*c,n[6]=v+m*c,n[10]=a*l}else if(e.order==="YXZ"){const p=l*d,m=l*h,v=c*d,S=c*h;n[0]=p+S*o,n[4]=v*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=m*o-v,n[6]=S+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*d,m=l*h,v=c*d,S=c*h;n[0]=p-S*o,n[4]=-a*h,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*d,n[9]=S-p*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*d,m=a*h,v=o*d,S=o*h;n[0]=l*d,n[4]=v*c-m,n[8]=p*c+S,n[1]=l*h,n[5]=S*c+p,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*c,v=o*l,S=o*c;n[0]=l*d,n[4]=S-p*h,n[8]=v*h+m,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*h+v,n[10]=p-S*h}else if(e.order==="XZY"){const p=a*l,m=a*c,v=o*l,S=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=p*h+S,n[5]=a*d,n[9]=m*h-v,n[2]=v*h-m,n[6]=o*d,n[10]=S*h+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lE,e,cE)}lookAt(e,n,i){const r=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),vr.crossVectors(i,Fn),vr.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),vr.crossVectors(i,Fn)),vr.normalize(),Al.crossVectors(Fn,vr),r[0]=vr.x,r[4]=Al.x,r[8]=Fn.x,r[1]=vr.y,r[5]=Al.y,r[9]=Fn.y,r[2]=vr.z,r[6]=Al.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],p=i[9],m=i[13],v=i[2],S=i[6],g=i[10],u=i[14],x=i[3],y=i[7],_=i[11],R=i[15],C=r[0],T=r[4],N=r[8],E=r[12],M=r[1],P=r[5],V=r[9],H=r[13],Y=r[2],ee=r[6],q=r[10],ie=r[14],I=r[3],Z=r[7],K=r[11],he=r[15];return s[0]=a*C+o*M+l*Y+c*I,s[4]=a*T+o*P+l*ee+c*Z,s[8]=a*N+o*V+l*q+c*K,s[12]=a*E+o*H+l*ie+c*he,s[1]=d*C+h*M+p*Y+m*I,s[5]=d*T+h*P+p*ee+m*Z,s[9]=d*N+h*V+p*q+m*K,s[13]=d*E+h*H+p*ie+m*he,s[2]=v*C+S*M+g*Y+u*I,s[6]=v*T+S*P+g*ee+u*Z,s[10]=v*N+S*V+g*q+u*K,s[14]=v*E+S*H+g*ie+u*he,s[3]=x*C+y*M+_*Y+R*I,s[7]=x*T+y*P+_*ee+R*Z,s[11]=x*N+y*V+_*q+R*K,s[15]=x*E+y*H+_*ie+R*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],p=e[10],m=e[14],v=e[3],S=e[7],g=e[11],u=e[15];return v*(+s*l*h-r*c*h-s*o*p+i*c*p+r*o*m-i*l*m)+S*(+n*l*m-n*c*p+s*a*p-r*a*m+r*c*d-s*l*d)+g*(+n*c*h-n*o*m-s*a*h+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*h+n*o*p+r*a*h-i*a*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],p=e[10],m=e[11],v=e[12],S=e[13],g=e[14],u=e[15],x=h*g*c-S*p*c+S*l*m-o*g*m-h*l*u+o*p*u,y=v*p*c-d*g*c-v*l*m+a*g*m+d*l*u-a*p*u,_=d*S*c-v*h*c+v*o*m-a*S*m-d*o*u+a*h*u,R=v*h*l-d*S*l-v*o*p+a*S*p+d*o*g-a*h*g,C=n*x+i*y+r*_+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=x*T,e[1]=(S*p*s-h*g*s-S*r*m+i*g*m+h*r*u-i*p*u)*T,e[2]=(o*g*s-S*l*s+S*r*c-i*g*c-o*r*u+i*l*u)*T,e[3]=(h*l*s-o*p*s-h*r*c+i*p*c+o*r*m-i*l*m)*T,e[4]=y*T,e[5]=(d*g*s-v*p*s+v*r*m-n*g*m-d*r*u+n*p*u)*T,e[6]=(v*l*s-a*g*s-v*r*c+n*g*c+a*r*u-n*l*u)*T,e[7]=(a*p*s-d*l*s+d*r*c-n*p*c-a*r*m+n*l*m)*T,e[8]=_*T,e[9]=(v*h*s-d*S*s-v*i*m+n*S*m+d*i*u-n*h*u)*T,e[10]=(a*S*s-v*o*s+v*i*c-n*S*c-a*i*u+n*o*u)*T,e[11]=(d*o*s-a*h*s-d*i*c+n*h*c+a*i*m-n*o*m)*T,e[12]=R*T,e[13]=(d*S*r-v*h*r+v*i*p-n*S*p-d*i*g+n*h*g)*T,e[14]=(v*o*r-a*S*r-v*i*l+n*S*l+a*i*g-n*o*g)*T,e[15]=(a*h*r-d*o*r+d*i*l-n*h*l-a*i*p+n*o*p)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,p=s*c,m=s*d,v=s*h,S=a*d,g=a*h,u=o*h,x=l*c,y=l*d,_=l*h,R=i.x,C=i.y,T=i.z;return r[0]=(1-(S+u))*R,r[1]=(m+_)*R,r[2]=(v-y)*R,r[3]=0,r[4]=(m-_)*C,r[5]=(1-(p+u))*C,r[6]=(g+x)*C,r[7]=0,r[8]=(v+y)*T,r[9]=(g-x)*T,r[10]=(1-(p+S))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Os.set(r[0],r[1],r[2]).length();const a=Os.set(r[4],r[5],r[6]).length(),o=Os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ui.copy(this);const c=1/s,d=1/a,h=1/o;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=d,ui.elements[5]*=d,ui.elements[6]*=d,ui.elements[8]*=h,ui.elements[9]*=h,ui.elements[10]*=h,n.setFromRotationMatrix(ui),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=tr){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let m,v;if(o===tr)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Oc)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=tr){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(a-s),p=(n+e)*c,m=(i+r)*d;let v,S;if(o===tr)v=(a+s)*h,S=-2*h;else if(o===Oc)v=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Os=new k,ui=new Lt,lE=new k(0,0,0),cE=new k(1,1,1),vr=new k,Al=new k,Fn=new k,Ym=new Lt,Km=new Qo;class zi{constructor(e=0,n=0,i=0,r=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],p=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ym,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Km.setFromEuler(this),this.setFromQuaternion(Km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";let cp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},uE=0;const Zm=new k,Fs=new Qo,Wi=new Lt,Rl=new k,eo=new k,dE=new k,fE=new Qo,Qm=new k(1,0,0),Jm=new k(0,1,0),e0=new k(0,0,1),t0={type:"added"},hE={type:"removed"},Bs={type:"childadded",child:null},Xu={type:"childremoved",child:null};class mn extends ka{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new k,n=new zi,i=new Qo,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new et}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Qm,e)}rotateY(e){return this.rotateOnAxis(Jm,e)}rotateZ(e){return this.rotateOnAxis(e0,e)}translateOnAxis(e,n){return Zm.copy(e).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qm,e)}translateY(e){return this.translateOnAxis(Jm,e)}translateZ(e){return this.translateOnAxis(e0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Rl.copy(e):Rl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(eo,Rl,this.up):Wi.lookAt(Rl,eo,this.up),this.quaternion.setFromRotationMatrix(Wi),r&&(Wi.extractRotation(r.matrixWorld),Fs.setFromRotationMatrix(Wi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(t0),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(hE),Xu.child=e,this.dispatchEvent(Xu),Xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(t0),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,dE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,fE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),p=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new k(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new k,$i=new k,qu=new k,Xi=new k,zs=new k,Hs=new k,n0=new k,Yu=new k,Ku=new k,Zu=new k,Qu=new Ct,Ju=new Ct,ed=new Ct;class xi{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),di.subVectors(e,n),r.cross(di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){di.subVectors(r,n),$i.subVectors(i,n),qu.subVectors(e,n);const a=di.dot(di),o=di.dot($i),l=di.dot(qu),c=$i.dot($i),d=$i.dot(qu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,m=(c*l-o*d)*p,v=(a*d-o*l)*p;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Qu.setScalar(0),Ju.setScalar(0),ed.setScalar(0),Qu.fromBufferAttribute(e,n),Ju.fromBufferAttribute(e,i),ed.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qu,s.x),a.addScaledVector(Ju,s.y),a.addScaledVector(ed,s.z),a}static isFrontFacing(e,n,i,r){return di.subVectors(i,n),$i.subVectors(e,n),di.cross($i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),di.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return xi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;zs.subVectors(r,i),Hs.subVectors(s,i),Yu.subVectors(e,i);const l=zs.dot(Yu),c=Hs.dot(Yu);if(l<=0&&c<=0)return n.copy(i);Ku.subVectors(e,r);const d=zs.dot(Ku),h=Hs.dot(Ku);if(d>=0&&h<=d)return n.copy(r);const p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(zs,a);Zu.subVectors(e,s);const m=zs.dot(Zu),v=Hs.dot(Zu);if(v>=0&&m<=v)return n.copy(s);const S=m*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Hs,o);const g=d*v-m*h;if(g<=0&&h-d>=0&&m-v>=0)return n0.subVectors(s,r),o=(h-d)/(h-d+(m-v)),n.copy(r).addScaledVector(n0,o);const u=1/(g+S+p);return a=S*u,o=p*u,n.copy(i).addScaledVector(zs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function td(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ct{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=gt.workingColorSpace){if(e=op(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=td(a,s,e+1/3),this.g=td(a,s,e),this.b=td(a,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=Rx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return gt.fromWorkingColorSpace(hn.copy(this),e),Math.round(tn(hn.r*255,0,255))*65536+Math.round(tn(hn.g*255,0,255))*256+Math.round(tn(hn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace(hn.copy(this),n);const i=hn.r,r=hn.g,s=hn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Hn){gt.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,i=hn.g,r=hn.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+n,xr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(xr),e.getHSL(Nl);const i=Eo(xr.h,Nl.h,n),r=Eo(xr.s,Nl.s,n),s=Eo(xr.l,Nl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new ct;ct.NAMES=Rx;let pE=0;class Da extends ka{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Ia(),this.name="",this.blending=fa,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gf,this.blendDst=vf,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fa&&(i.blending=this.blending),this.side!==zr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gf&&(i.blendSrc=this.blendSrc),this.blendDst!==vf&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ma&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fi extends Da{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=dx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new k,Pl=new We;class Bi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Bm,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Pl.fromBufferAttribute(this,n),Pl.applyMatrix3(e),this.setXY(n,Pl.x,Pl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$s(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$s(n,this.array)),n}setX(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$s(n,this.array)),n}setY(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$s(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$s(n,this.array)),n}setW(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array),s=_n(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bm&&(e.usage=this.usage),e}}class Nx extends Bi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Px extends Bi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class jt extends Bi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let mE=0;const Zn=new Lt,nd=new mn,Vs=new k,Bn=new Jo,to=new Jo,Jt=new k;class ri extends ka{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tx(e)?Px:Nx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,i){return Zn.makeTranslation(e,n,i),this.applyMatrix4(Zn),this}scale(e,n,i){return Zn.makeScale(e,n,i),this.applyMatrix4(Zn),this}lookAt(e){return nd.lookAt(e),nd.updateMatrix(),this.applyMatrix4(nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ou);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];to.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Bn.min,to.min),Bn.expandByPoint(Jt),Jt.addVectors(Bn.max,to.max),Bn.expandByPoint(Jt)):(Bn.expandByPoint(to.min),Bn.expandByPoint(to.max))}Bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Jt.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(e,c),Jt.add(Vs)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new k,l[N]=new k;const c=new k,d=new k,h=new k,p=new We,m=new We,v=new We,S=new k,g=new k;function u(N,E,M){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),p.fromBufferAttribute(s,N),m.fromBufferAttribute(s,E),v.fromBufferAttribute(s,M),d.sub(c),h.sub(c),m.sub(p),v.sub(p);const P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(S.copy(d).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(P),g.copy(h).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(P),o[N].add(S),o[E].add(S),o[M].add(S),l[N].add(g),l[E].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let N=0,E=x.length;N<E;++N){const M=x[N],P=M.start,V=M.count;for(let H=P,Y=P+V;H<Y;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new k,_=new k,R=new k,C=new k;function T(N){R.fromBufferAttribute(r,N),C.copy(R);const E=o[N];y.copy(E),y.sub(R.multiplyScalar(R.dot(E))).normalize(),_.crossVectors(C,E);const P=_.dot(l[N])<0?-1:1;a.setXYZW(N,y.x,y.y,y.z,P)}for(let N=0,E=x.length;N<E;++N){const M=x[N],P=M.start,V=M.count;for(let H=P,Y=P+V;H<Y;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,d=new k,h=new k;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),S=e.getX(p+1),g=e.getX(p+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,g),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,m=n.count;p<m;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,p=new c.constructor(l.length*d);let m=0,v=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*d;for(let u=0;u<d;u++)p[v++]=c[m++]}return new Bi(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ri,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const p=c[d],m=e(p,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let p=0,m=h.length;p<m;p++)d.push(h[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i0=new Lt,Yr=new lp,Ll=new ou,r0=new k,kl=new k,Il=new k,Dl=new k,id=new k,Ul=new k,s0=new k,Ol=new k;class we extends mn{constructor(e=new ri,n=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ul.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(id.fromBufferAttribute(h,e),a?Ul.addScaledVector(id,d):Ul.addScaledVector(id.sub(n),d))}n.add(Ul)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(s),Yr.copy(e.ray).recast(e.near),!(Ll.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Ll,r0)===null||Yr.origin.distanceToSquared(r0)>(e.far-e.near)**2))&&(i0.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(i0),!(i.boundingBox!==null&&Yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=p.length;v<S;v++){const g=p[v],u=a[g.materialIndex],x=Math.max(g.start,m.start),y=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let _=x,R=y;_<R;_+=3){const C=o.getX(_),T=o.getX(_+1),N=o.getX(_+2);r=Fl(this,u,e,i,c,d,h,C,T,N),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let g=v,u=S;g<u;g+=3){const x=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);r=Fl(this,a,e,i,c,d,h,x,y,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=p.length;v<S;v++){const g=p[v],u=a[g.materialIndex],x=Math.max(g.start,m.start),y=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let _=x,R=y;_<R;_+=3){const C=_,T=_+1,N=_+2;r=Fl(this,u,e,i,c,d,h,C,T,N),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let g=v,u=S;g<u;g+=3){const x=g,y=g+1,_=g+2;r=Fl(this,a,e,i,c,d,h,x,y,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function gE(t,e,n,i,r,s,a,o){let l;if(e.side===In?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===zr,o),l===null)return null;Ol.copy(o),Ol.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ol);return c<n.near||c>n.far?null:{distance:c,point:Ol.clone(),object:t}}function Fl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,kl),t.getVertexPosition(l,Il),t.getVertexPosition(c,Dl);const d=gE(t,e,n,i,kl,Il,Dl,s0);if(d){const h=new k;xi.getBarycoord(s0,kl,Il,Dl,h),r&&(d.uv=xi.getInterpolatedAttribute(r,o,l,c,h,new We)),s&&(d.uv1=xi.getInterpolatedAttribute(s,o,l,c,h,new We)),a&&(d.normal=xi.getInterpolatedAttribute(a,o,l,c,h,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new k,materialIndex:0};xi.getNormal(kl,Il,Dl,p.normal),d.face=p,d.barycoord=h}return d}class Ke extends ri{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let p=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(h,2));function v(S,g,u,x,y,_,R,C,T,N,E){const M=_/T,P=R/N,V=_/2,H=R/2,Y=C/2,ee=T+1,q=N+1;let ie=0,I=0;const Z=new k;for(let K=0;K<q;K++){const he=K*P-H;for(let ke=0;ke<ee;ke++){const ft=ke*M-V;Z[S]=ft*x,Z[g]=he*y,Z[u]=Y,c.push(Z.x,Z.y,Z.z),Z[S]=0,Z[g]=0,Z[u]=C>0?1:-1,d.push(Z.x,Z.y,Z.z),h.push(ke/T),h.push(1-K/N),ie+=1}}for(let K=0;K<N;K++)for(let he=0;he<T;he++){const ke=p+he+ee*K,ft=p+he+ee*(K+1),X=p+(he+1)+ee*(K+1),le=p+(he+1)+ee*K;l.push(ke,ft,le),l.push(ft,X,le),I+=6}o.addGroup(m,I,E),m+=I,p+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ca(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function yn(t){const e={};for(let n=0;n<t.length;n++){const i=Ca(t[n]);for(const r in i)e[r]=i[r]}return e}function vE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Lx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const xE={clone:Ca,merge:yn};var _E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hr extends Da{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_E,this.fragmentShader=yE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ca(e.uniforms),this.uniformsGroups=vE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let kx=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=tr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const _r=new k,a0=new We,o0=new We;class Vn extends kx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,a0,o0),n.subVectors(o0,a0)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Mo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Gs=-90,js=1;class SE extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vn(Gs,js,e,n);r.layers=this.layers,this.add(r);const s=new Vn(Gs,js,e,n);s.layers=this.layers,this.add(s);const a=new Vn(Gs,js,e,n);a.layers=this.layers,this.add(a);const o=new Vn(Gs,js,e,n);o.layers=this.layers,this.add(o);const l=new Vn(Gs,js,e,n);l.layers=this.layers,this.add(l);const c=new Vn(Gs,js,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===tr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,p,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Ix extends Dn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ea,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ME extends Ms{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ix(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ui}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ke(5,5,5),s=new Hr({name:"CubemapFromEquirect",uniforms:Ca(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Ur});s.uniforms.tEquirect.value=n;const a=new we(r,s),o=n.minFilter;return n.minFilter===ds&&(n.minFilter=Ui),new SE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const rd=new k,EE=new k,wE=new et;class is{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=rd.subVectors(i,n).cross(EE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(rd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||wE.getNormalMatrix(e),r=this.coplanarPoint(rd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new ou,Bl=new k;class up{constructor(e=new is,n=new is,i=new is,r=new is,s=new is,a=new is){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=tr){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],h=r[6],p=r[7],m=r[8],v=r[9],S=r[10],g=r[11],u=r[12],x=r[13],y=r[14],_=r[15];if(i[0].setComponents(l-s,p-c,g-m,_-u).normalize(),i[1].setComponents(l+s,p+c,g+m,_+u).normalize(),i[2].setComponents(l+a,p+d,g+v,_+x).normalize(),i[3].setComponents(l-a,p-d,g-v,_-x).normalize(),i[4].setComponents(l-o,p-h,g-S,_-y).normalize(),n===tr)i[5].setComponents(l+o,p+h,g+S,_+y).normalize();else if(n===Oc)i[5].setComponents(o,h,S,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Bl.x=r.normal.x>0?e.max.x:e.min.x,Bl.y=r.normal.y>0?e.max.y:e.min.y,Bl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function bE(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<h.length;m++){const v=h[p],S=h[m];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++p,h[p]=S)}h.length=p+1;for(let m=0,v=h.length;m<v;m++){const S=h[m];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class gi extends ri{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,p=n/l,m=[],v=[],S=[],g=[];for(let u=0;u<d;u++){const x=u*p-a;for(let y=0;y<c;y++){const _=y*h-s;v.push(_,-x,0),S.push(0,0,1),g.push(y/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<o;x++){const y=x+c*u,_=x+c*(u+1),R=x+1+c*(u+1),C=x+1+c*u;m.push(y,_,C),m.push(_,R,C)}this.setIndex(m),this.setAttribute("position",new jt(v,3)),this.setAttribute("normal",new jt(S,3)),this.setAttribute("uv",new jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.widthSegments,e.heightSegments)}}var TE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,DE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,YE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ZE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ew=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nw="gl_FragColor = linearToOutputTexel( gl_FragColor );",iw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ow=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_w=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ew=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ww=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Aw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ow=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,t2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,l2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,c2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,u2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,m2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,y2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,S2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,w2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,k2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,K2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ib=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:TE,alphahash_pars_fragment:CE,alphamap_fragment:AE,alphamap_pars_fragment:RE,alphatest_fragment:NE,alphatest_pars_fragment:PE,aomap_fragment:LE,aomap_pars_fragment:kE,batching_pars_vertex:IE,batching_vertex:DE,begin_vertex:UE,beginnormal_vertex:OE,bsdfs:FE,iridescence_fragment:BE,bumpmap_pars_fragment:zE,clipping_planes_fragment:HE,clipping_planes_pars_fragment:VE,clipping_planes_pars_vertex:GE,clipping_planes_vertex:jE,color_fragment:WE,color_pars_fragment:$E,color_pars_vertex:XE,color_vertex:qE,common:YE,cube_uv_reflection_fragment:KE,defaultnormal_vertex:ZE,displacementmap_pars_vertex:QE,displacementmap_vertex:JE,emissivemap_fragment:ew,emissivemap_pars_fragment:tw,colorspace_fragment:nw,colorspace_pars_fragment:iw,envmap_fragment:rw,envmap_common_pars_fragment:sw,envmap_pars_fragment:aw,envmap_pars_vertex:ow,envmap_physical_pars_fragment:xw,envmap_vertex:lw,fog_vertex:cw,fog_pars_vertex:uw,fog_fragment:dw,fog_pars_fragment:fw,gradientmap_pars_fragment:hw,lightmap_pars_fragment:pw,lights_lambert_fragment:mw,lights_lambert_pars_fragment:gw,lights_pars_begin:vw,lights_toon_fragment:_w,lights_toon_pars_fragment:yw,lights_phong_fragment:Sw,lights_phong_pars_fragment:Mw,lights_physical_fragment:Ew,lights_physical_pars_fragment:ww,lights_fragment_begin:bw,lights_fragment_maps:Tw,lights_fragment_end:Cw,logdepthbuf_fragment:Aw,logdepthbuf_pars_fragment:Rw,logdepthbuf_pars_vertex:Nw,logdepthbuf_vertex:Pw,map_fragment:Lw,map_pars_fragment:kw,map_particle_fragment:Iw,map_particle_pars_fragment:Dw,metalnessmap_fragment:Uw,metalnessmap_pars_fragment:Ow,morphinstance_vertex:Fw,morphcolor_vertex:Bw,morphnormal_vertex:zw,morphtarget_pars_vertex:Hw,morphtarget_vertex:Vw,normal_fragment_begin:Gw,normal_fragment_maps:jw,normal_pars_fragment:Ww,normal_pars_vertex:$w,normal_vertex:Xw,normalmap_pars_fragment:qw,clearcoat_normal_fragment_begin:Yw,clearcoat_normal_fragment_maps:Kw,clearcoat_pars_fragment:Zw,iridescence_pars_fragment:Qw,opaque_fragment:Jw,packing:e2,premultiplied_alpha_fragment:t2,project_vertex:n2,dithering_fragment:i2,dithering_pars_fragment:r2,roughnessmap_fragment:s2,roughnessmap_pars_fragment:a2,shadowmap_pars_fragment:o2,shadowmap_pars_vertex:l2,shadowmap_vertex:c2,shadowmask_pars_fragment:u2,skinbase_vertex:d2,skinning_pars_vertex:f2,skinning_vertex:h2,skinnormal_vertex:p2,specularmap_fragment:m2,specularmap_pars_fragment:g2,tonemapping_fragment:v2,tonemapping_pars_fragment:x2,transmission_fragment:_2,transmission_pars_fragment:y2,uv_pars_fragment:S2,uv_pars_vertex:M2,uv_vertex:E2,worldpos_vertex:w2,background_vert:b2,background_frag:T2,backgroundCube_vert:C2,backgroundCube_frag:A2,cube_vert:R2,cube_frag:N2,depth_vert:P2,depth_frag:L2,distanceRGBA_vert:k2,distanceRGBA_frag:I2,equirect_vert:D2,equirect_frag:U2,linedashed_vert:O2,linedashed_frag:F2,meshbasic_vert:B2,meshbasic_frag:z2,meshlambert_vert:H2,meshlambert_frag:V2,meshmatcap_vert:G2,meshmatcap_frag:j2,meshnormal_vert:W2,meshnormal_frag:$2,meshphong_vert:X2,meshphong_frag:q2,meshphysical_vert:Y2,meshphysical_frag:K2,meshtoon_vert:Z2,meshtoon_frag:Q2,points_vert:J2,points_frag:eb,shadow_vert:tb,shadow_frag:nb,sprite_vert:ib,sprite_frag:rb},_e={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Ii={basic:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ct(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:yn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:yn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ct(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:yn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:yn([_e.points,_e.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:yn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:yn([_e.common,_e.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:yn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:yn([_e.sprite,_e.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:yn([_e.common,_e.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:yn([_e.lights,_e.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Ii.physical={uniforms:yn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const zl={r:0,b:0,g:0},Zr=new zi,sb=new Lt;function ab(t,e,n,i,r,s,a){const o=new ct(0);let l=s===!0?0:1,c,d,h=null,p=0,m=null;function v(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function S(x){let y=!1;const _=v(x);_===null?u(o,l):_&&_.isColor&&(u(_,1),y=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(x,y){const _=v(y);_&&(_.isCubeTexture||_.mapping===su)?(d===void 0&&(d=new we(new Ke(1,1,1),new Hr({name:"BackgroundCubeMaterial",uniforms:Ca(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Zr.copy(y.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(sb.makeRotationFromEuler(Zr)),d.material.toneMapped=gt.getTransfer(_.colorSpace)!==Tt,(h!==_||p!==_.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=_,p=_.version,m=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new we(new gi(2,2),new Hr({name:"BackgroundMaterial",uniforms:Ca(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=gt.getTransfer(_.colorSpace)!==Tt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=_,p=_.version,m=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,y){x.getRGB(zl,Lx(t)),i.buffers.color.setClear(zl.r,zl.g,zl.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:S,addToRenderList:g}}function ob(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(M,P,V,H,Y){let ee=!1;const q=h(H,V,P);s!==q&&(s=q,c(s.object)),ee=m(M,H,V,Y),ee&&v(M,H,V,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,_(M,P,V,H),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function h(M,P,V){const H=V.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let ee=Y[P.id];ee===void 0&&(ee={},Y[P.id]=ee);let q=ee[H];return q===void 0&&(q=p(l()),ee[H]=q),q}function p(M){const P=[],V=[],H=[];for(let Y=0;Y<n;Y++)P[Y]=0,V[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,P,V,H){const Y=s.attributes,ee=P.attributes;let q=0;const ie=V.getAttributes();for(const I in ie)if(ie[I].location>=0){const K=Y[I];let he=ee[I];if(he===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),K===void 0||K.attribute!==he||he&&K.data!==he.data)return!0;q++}return s.attributesNum!==q||s.index!==H}function v(M,P,V,H){const Y={},ee=P.attributes;let q=0;const ie=V.getAttributes();for(const I in ie)if(ie[I].location>=0){let K=ee[I];K===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const he={};he.attribute=K,K&&K.data&&(he.data=K.data),Y[I]=he,q++}s.attributes=Y,s.attributesNum=q,s.index=H}function S(){const M=s.newAttributes;for(let P=0,V=M.length;P<V;P++)M[P]=0}function g(M){u(M,0)}function u(M,P){const V=s.newAttributes,H=s.enabledAttributes,Y=s.attributeDivisors;V[M]=1,H[M]===0&&(t.enableVertexAttribArray(M),H[M]=1),Y[M]!==P&&(t.vertexAttribDivisor(M,P),Y[M]=P)}function x(){const M=s.newAttributes,P=s.enabledAttributes;for(let V=0,H=P.length;V<H;V++)P[V]!==M[V]&&(t.disableVertexAttribArray(V),P[V]=0)}function y(M,P,V,H,Y,ee,q){q===!0?t.vertexAttribIPointer(M,P,V,Y,ee):t.vertexAttribPointer(M,P,V,H,Y,ee)}function _(M,P,V,H){S();const Y=H.attributes,ee=V.getAttributes(),q=P.defaultAttributeValues;for(const ie in ee){const I=ee[ie];if(I.location>=0){let Z=Y[ie];if(Z===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const K=Z.normalized,he=Z.itemSize,ke=e.get(Z);if(ke===void 0)continue;const ft=ke.buffer,X=ke.type,le=ke.bytesPerElement,ye=X===t.INT||X===t.UNSIGNED_INT||Z.gpuType===tp;if(Z.isInterleavedBufferAttribute){const ue=Z.data,Oe=ue.stride,Ye=Z.offset;if(ue.isInstancedInterleavedBuffer){for(let tt=0;tt<I.locationSize;tt++)u(I.location+tt,ue.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let tt=0;tt<I.locationSize;tt++)g(I.location+tt);t.bindBuffer(t.ARRAY_BUFFER,ft);for(let tt=0;tt<I.locationSize;tt++)y(I.location+tt,he/I.locationSize,X,K,Oe*le,(Ye+he/I.locationSize*tt)*le,ye)}else{if(Z.isInstancedBufferAttribute){for(let ue=0;ue<I.locationSize;ue++)u(I.location+ue,Z.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ue=0;ue<I.locationSize;ue++)g(I.location+ue);t.bindBuffer(t.ARRAY_BUFFER,ft);for(let ue=0;ue<I.locationSize;ue++)y(I.location+ue,he/I.locationSize,X,K,he*le,he/I.locationSize*ue*le,ye)}}else if(q!==void 0){const K=q[ie];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(I.location,K);break;case 3:t.vertexAttrib3fv(I.location,K);break;case 4:t.vertexAttrib4fv(I.location,K);break;default:t.vertexAttrib1fv(I.location,K)}}}}x()}function R(){N();for(const M in i){const P=i[M];for(const V in P){const H=P[V];for(const Y in H)d(H[Y].object),delete H[Y];delete P[V]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const V in P){const H=P[V];for(const Y in H)d(H[Y].object),delete H[Y];delete P[V]}delete i[M.id]}function T(M){for(const P in i){const V=i[P];if(V[M.id]===void 0)continue;const H=V[M.id];for(const Y in H)d(H[Y].object),delete H[Y];delete V[M.id]}}function N(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:g,disableUnusedAttributes:x}}function lb(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=d[v];n.update(m,i,1)}function l(c,d,h,p){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],d[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,p,0,h);let v=0;for(let S=0;S<h;S++)v+=d[S]*p[S];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==_i&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const N=T===Zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==lr&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==er&&!N)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:R,maxSamples:C}}function ub(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new is,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||i!==0||r;return r=p,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){n=d(h,p,0)},this.setState=function(h,p,m){const v=h.clippingPlanes,S=h.clipIntersection,g=h.clipShadows,u=t.get(h);if(!r||v===null||v.length===0||s&&!g)s?d(null):c();else{const x=s?0:i,y=x*4;let _=u.clippingState||null;l.value=_,_=d(v,p,y,m);for(let R=0;R!==y;++R)_[R]=n[R];u.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,p,m,v){const S=h!==null?h.length:0;let g=null;if(S!==0){if(g=l.value,v!==!0||g===null){const u=m+S*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<u)&&(g=new Float32Array(u));for(let y=0,_=m;y!==S;++y,_+=4)a.copy(h[y]).applyMatrix4(x,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function db(t){let e=new WeakMap;function n(a,o){return o===bf?a.mapping=Ea:o===Tf&&(a.mapping=wa),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===bf||o===Tf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ME(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class fb extends kx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const sa=4,l0=[.125,.215,.35,.446,.526,.582],as=20,sd=new fb,c0=new ct;let ad=null,od=0,ld=0,cd=!1;const rs=(1+Math.sqrt(5))/2,Ws=1/rs,u0=[new k(-rs,Ws,0),new k(rs,Ws,0),new k(-Ws,0,rs),new k(Ws,0,rs),new k(0,rs,-Ws),new k(0,rs,Ws),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class d0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ad=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,od,ld),this._renderer.xr.enabled=cd,e.scissorTest=!1,Hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ea||e.mapping===wa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Zo,format:_i,colorSpace:La,depthBuffer:!1},r=f0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hb(s)),this._blurMaterial=pb(s,e,n)}return r}_compileMaterial(e){const n=new we(this._lodPlanes[0],e);this._renderer.compile(n,sd)}_sceneToCubeUV(e,n,i,r){const o=new Vn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(c0),d.toneMapping=Or,d.autoClear=!1;const m=new fi({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),v=new we(new Ke,m);let S=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,S=!0):(m.color.copy(c0),S=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):x===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const y=this._cubeSize;Hl(r,x*y,u>2?y:0,y,y),d.setRenderTarget(r),S&&d.render(v,o),d.render(e,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ea||e.mapping===wa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=p0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new we(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Hl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,sd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=u0[(r-s-1)%u0.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new we(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*as-1),S=s/v,g=isFinite(s)?1+Math.floor(d*S):as;g>as&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${as}`);const u=[];let x=0;for(let T=0;T<as;++T){const N=T/S,E=Math.exp(-N*N/2);u.push(E),T===0?x+=E:T<g&&(x+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/x;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:y}=this;p.dTheta.value=v,p.mipInt.value=y-i;const _=this._sizeLods[r],R=3*_*(r>y-sa?r-y+sa:0),C=4*(this._cubeSize-_);Hl(n,R,C,3*_,2*_),l.setRenderTarget(n),l.render(h,sd)}}function hb(t){const e=[],n=[],i=[];let r=t;const s=t-sa+1+l0.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-sa?l=l0[a-t+sa-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,v=6,S=3,g=2,u=1,x=new Float32Array(S*v*m),y=new Float32Array(g*v*m),_=new Float32Array(u*v*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,N=C>2?0:-1,E=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];x.set(E,S*v*C),y.set(p,g*v*C);const M=[C,C,C,C,C,C];_.set(M,u*v*C)}const R=new ri;R.setAttribute("position",new Bi(x,S)),R.setAttribute("uv",new Bi(y,g)),R.setAttribute("faceIndex",new Bi(_,u)),e.push(R),r>sa&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function f0(t,e,n){const i=new Ms(t,e,n);return i.texture.mapping=su,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function pb(t,e,n){const i=new Float32Array(as),r=new k(0,1,0);return new Hr({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function h0(){return new Hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function p0(){return new Hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function dp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mb(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===bf||l===Tf,d=l===Ea||l===wa;if(c||d){let h=e.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return n===null&&(n=new d0(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new d0(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function gb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&lo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vb(t,e,n,i){const r={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const S=p.morphAttributes[v];for(let g=0,u=S.length;g<u;g++)e.remove(S[g])}p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(h,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(h){const p=h.attributes;for(const v in p)e.update(p[v],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const S=m[v];for(let g=0,u=S.length;g<u;g++)e.update(S[g],t.ARRAY_BUFFER)}}function c(h){const p=[],m=h.index,v=h.attributes.position;let S=0;if(m!==null){const x=m.array;S=m.version;for(let y=0,_=x.length;y<_;y+=3){const R=x[y+0],C=x[y+1],T=x[y+2];p.push(R,C,C,T,T,R)}}else if(v!==void 0){const x=v.array;S=v.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const R=y+0,C=y+1,T=y+2;p.push(R,C,C,T,T,R)}}else return;const g=new(Tx(p)?Px:Nx)(p,1);g.version=S;const u=s.get(h);u&&e.remove(u),s.set(h,g)}function d(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function xb(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,m){t.drawElements(i,m,s,p*a),n.update(m,i,1)}function c(p,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,p*a,v),n.update(m,i,v))}function d(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,p,0,v);let g=0;for(let u=0;u<v;u++)g+=m[u];n.update(g,i,1)}function h(p,m,v,S){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<p.length;u++)c(p[u]/a,m[u],S[u]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,p,0,S,0,v);let u=0;for(let x=0;x<v;x++)u+=m[x]*S[x];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function _b(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function yb(t,e,n){const i=new WeakMap,r=new Ct;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let p=i.get(o);if(p===void 0||p.count!==h){let M=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;p!==void 0&&p.texture.dispose();const v=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;v===!0&&(_=1),S===!0&&(_=2),g===!0&&(_=3);let R=o.attributes.position.count*_,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const T=new Float32Array(R*C*4*h),N=new Ax(T,R,C,h);N.type=er,N.needsUpdate=!0;const E=_*4;for(let P=0;P<h;P++){const V=u[P],H=x[P],Y=y[P],ee=R*C*4*P;for(let q=0;q<V.count;q++){const ie=q*E;v===!0&&(r.fromBufferAttribute(V,q),T[ee+ie+0]=r.x,T[ee+ie+1]=r.y,T[ee+ie+2]=r.z,T[ee+ie+3]=0),S===!0&&(r.fromBufferAttribute(H,q),T[ee+ie+4]=r.x,T[ee+ie+5]=r.y,T[ee+ie+6]=r.z,T[ee+ie+7]=0),g===!0&&(r.fromBufferAttribute(Y,q),T[ee+ie+8]=r.x,T[ee+ie+9]=r.y,T[ee+ie+10]=r.z,T[ee+ie+11]=Y.itemSize===4?r.w:1)}}p={count:h,texture:N,size:new We(R,C)},i.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const S=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function Sb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Ux extends Dn{constructor(e,n,i,r,s,a,o,l,c,d=ha){if(d!==ha&&d!==Ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===ha&&(i=Ss),i===void 0&&d===Ta&&(i=ba),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Mi,this.minFilter=l!==void 0?l:Mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ox=new Dn,m0=new Ux(1,1),Fx=new Ax,Bx=new aE,zx=new Ix,g0=[],v0=[],x0=new Float32Array(16),_0=new Float32Array(9),y0=new Float32Array(4);function Ua(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=g0[r];if(s===void 0&&(s=new Float32Array(r),g0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lu(t,e){let n=v0[e];n===void 0&&(n=new Int32Array(e),v0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Mb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function Tb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,i))return;y0.set(i),t.uniformMatrix2fv(this.addr,!1,y0),Kt(n,i)}}function Cb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,i))return;_0.set(i),t.uniformMatrix3fv(this.addr,!1,_0),Kt(n,i)}}function Ab(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if(Yt(n,i))return;x0.set(i),t.uniformMatrix4fv(this.addr,!1,x0),Kt(n,i)}}function Rb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function Pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function Lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function kb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function Db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function Ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function Ob(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(m0.compareFunction=bx,s=m0):s=Ox,n.setTexture2D(e||s,r)}function Fb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Bx,r)}function Bb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zx,r)}function zb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Fx,r)}function Hb(t){switch(t){case 5126:return Mb;case 35664:return Eb;case 35665:return wb;case 35666:return bb;case 35674:return Tb;case 35675:return Cb;case 35676:return Ab;case 5124:case 35670:return Rb;case 35667:case 35671:return Nb;case 35668:case 35672:return Pb;case 35669:case 35673:return Lb;case 5125:return kb;case 36294:return Ib;case 36295:return Db;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Ob;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Bb;case 36289:case 36303:case 36311:case 36292:return zb}}function Vb(t,e){t.uniform1fv(this.addr,e)}function Gb(t,e){const n=Ua(e,this.size,2);t.uniform2fv(this.addr,n)}function jb(t,e){const n=Ua(e,this.size,3);t.uniform3fv(this.addr,n)}function Wb(t,e){const n=Ua(e,this.size,4);t.uniform4fv(this.addr,n)}function $b(t,e){const n=Ua(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Xb(t,e){const n=Ua(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function qb(t,e){const n=Ua(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Yb(t,e){t.uniform1iv(this.addr,e)}function Kb(t,e){t.uniform2iv(this.addr,e)}function Zb(t,e){t.uniform3iv(this.addr,e)}function Qb(t,e){t.uniform4iv(this.addr,e)}function Jb(t,e){t.uniform1uiv(this.addr,e)}function eT(t,e){t.uniform2uiv(this.addr,e)}function tT(t,e){t.uniform3uiv(this.addr,e)}function nT(t,e){t.uniform4uiv(this.addr,e)}function iT(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Ox,s[a])}function rT(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Bx,s[a])}function sT(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||zx,s[a])}function aT(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Yt(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Fx,s[a])}function oT(t){switch(t){case 5126:return Vb;case 35664:return Gb;case 35665:return jb;case 35666:return Wb;case 35674:return $b;case 35675:return Xb;case 35676:return qb;case 5124:case 35670:return Yb;case 35667:case 35671:return Kb;case 35668:case 35672:return Zb;case 35669:case 35673:return Qb;case 5125:return Jb;case 36294:return eT;case 36295:return tT;case 36296:return nT;case 35678:case 36198:case 36298:case 36306:case 35682:return iT;case 35679:case 36299:case 36307:return rT;case 35680:case 36300:case 36308:case 36293:return sT;case 36289:case 36303:case 36311:case 36292:return aT}}class lT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Hb(n.type)}}class cT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oT(n.type)}}class uT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function S0(t,e){t.seq.push(e),t.map[e.id]=e}function dT(t,e,n){const i=t.name,r=i.length;for(ud.lastIndex=0;;){const s=ud.exec(i),a=ud.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){S0(n,c===void 0?new lT(o,t,e):new cT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new uT(o),S0(n,h)),n=h}}}class dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);dT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function M0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const fT=37297;let hT=0;function pT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const E0=new et;function mT(t){gt._getMatrix(E0,gt.workingColorSpace,t);const e=`mat3( ${E0.elements.map(n=>n.toFixed(4))} )`;switch(gt.getTransfer(t)){case au:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function w0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+pT(t.getShaderSource(e),a)}else return r}function gT(t,e){const n=mT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function vT(t,e){let n;switch(e){case _M:n="Linear";break;case yM:n="Reinhard";break;case SM:n="Cineon";break;case fx:n="ACESFilmic";break;case EM:n="AgX";break;case wM:n="Neutral";break;case MM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vl=new k;function xT(){gt.getLuminanceCoefficients(Vl);const t=Vl.x.toFixed(4),e=Vl.y.toFixed(4),n=Vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _T(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function yT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ST(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function co(t){return t!==""}function b0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MT=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(t){return t.replace(MT,wT)}const ET=new Map;function wT(t,e){let n=it[e];if(n===void 0){const i=ET.get(e);if(i!==void 0)n=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return th(n)}const bT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C0(t){return t.replace(bT,TT)}function TT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function A0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===cx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ux?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function AT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ea:case wa:e="ENVMAP_TYPE_CUBE";break;case su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case wa:e="ENVMAP_MODE_REFRACTION";break}return e}function NT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case dx:e="ENVMAP_BLENDING_MULTIPLY";break;case vM:e="ENVMAP_BLENDING_MIX";break;case xM:e="ENVMAP_BLENDING_ADD";break}return e}function PT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function LT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=CT(n),c=AT(n),d=RT(n),h=NT(n),p=PT(n),m=_T(n),v=yT(s),S=r.createProgram();let g,u,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(co).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(co).join(`
`),u.length>0&&(u+=`
`)):(g=[A0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),u=[A0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Or?"#define TONE_MAPPING":"",n.toneMapping!==Or?it.tonemapping_pars_fragment:"",n.toneMapping!==Or?vT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,gT("linearToOutputTexel",n.outputColorSpace),xT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(co).join(`
`)),a=th(a),a=b0(a,n),a=T0(a,n),o=th(o),o=b0(o,n),o=T0(o,n),a=C0(a),o=C0(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=x+g+a,_=x+u+o,R=M0(r,r.VERTEX_SHADER,y),C=M0(r,r.FRAGMENT_SHADER,_);r.attachShader(S,R),r.attachShader(S,C),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function T(P){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(S).trim(),H=r.getShaderInfoLog(R).trim(),Y=r.getShaderInfoLog(C).trim();let ee=!0,q=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,R,C);else{const ie=w0(r,R,"vertex"),I=w0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ie+`
`+I)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||Y==="")&&(q=!1);q&&(P.diagnostics={runnable:ee,programLog:V,vertexShader:{log:H,prefix:g},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(R),r.deleteShader(C),N=new dc(r,S),E=ST(r,S)}let N;this.getUniforms=function(){return N===void 0&&T(this),N};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,fT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=C,this}let kT=0;class IT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new DT(e),n.set(e,i)),i}}class DT{constructor(e){this.id=kT++,this.code=e,this.usedTimes=0}}function UT(t,e,n,i,r,s,a){const o=new cp,l=new IT,c=new Set,d=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,P,V,H){const Y=V.fog,ee=H.geometry,q=E.isMeshStandardMaterial?V.environment:null,ie=(E.isMeshStandardMaterial?n:e).get(E.envMap||q),I=ie&&ie.mapping===su?ie.image.height:null,Z=v[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const K=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,he=K!==void 0?K.length:0;let ke=0;ee.morphAttributes.position!==void 0&&(ke=1),ee.morphAttributes.normal!==void 0&&(ke=2),ee.morphAttributes.color!==void 0&&(ke=3);let ft,X,le,ye;if(Z){const nt=Ii[Z];ft=nt.vertexShader,X=nt.fragmentShader}else ft=E.vertexShader,X=E.fragmentShader,l.update(E),le=l.getVertexShaderID(E),ye=l.getFragmentShaderID(E);const ue=t.getRenderTarget(),Oe=t.state.buffers.depth.getReversed(),Ye=H.isInstancedMesh===!0,tt=H.isBatchedMesh===!0,Rt=!!E.map,lt=!!E.matcap,Dt=!!ie,F=!!E.aoMap,bn=!!E.lightMap,rt=!!E.bumpMap,Je=!!E.normalMap,Be=!!E.displacementMap,At=!!E.emissiveMap,Ie=!!E.metalnessMap,A=!!E.roughnessMap,w=E.anisotropy>0,B=E.clearcoat>0,te=E.dispersion>0,re=E.iridescence>0,Q=E.sheen>0,De=E.transmission>0,ge=w&&!!E.anisotropyMap,Te=B&&!!E.clearcoatMap,ht=B&&!!E.clearcoatNormalMap,oe=B&&!!E.clearcoatRoughnessMap,Re=re&&!!E.iridescenceMap,ve=re&&!!E.iridescenceThicknessMap,Xe=Q&&!!E.sheenColorMap,Ce=Q&&!!E.sheenRoughnessMap,D=!!E.specularMap,G=!!E.specularColorMap,Me=!!E.specularIntensityMap,L=De&&!!E.transmissionMap,ne=De&&!!E.thicknessMap,z=!!E.gradientMap,$=!!E.alphaMap,xe=E.alphaTest>0,me=!!E.alphaHash,ze=!!E.extensions;let Mt=Or;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Mt=t.toneMapping);const Nt={shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:ft,fragmentShader:X,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:tt,batchingColor:tt&&H._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&H.instanceColor!==null,instancingMorph:Ye&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:La,alphaToCoverage:!!E.alphaToCoverage,map:Rt,matcap:lt,envMap:Dt,envMapMode:Dt&&ie.mapping,envMapCubeUVHeight:I,aoMap:F,lightMap:bn,bumpMap:rt,normalMap:Je,displacementMap:p&&Be,emissiveMap:At,normalMapObjectSpace:Je&&E.normalMapType===AM,normalMapTangentSpace:Je&&E.normalMapType===wx,metalnessMap:Ie,roughnessMap:A,anisotropy:w,anisotropyMap:ge,clearcoat:B,clearcoatMap:Te,clearcoatNormalMap:ht,clearcoatRoughnessMap:oe,dispersion:te,iridescence:re,iridescenceMap:Re,iridescenceThicknessMap:ve,sheen:Q,sheenColorMap:Xe,sheenRoughnessMap:Ce,specularMap:D,specularColorMap:G,specularIntensityMap:Me,transmission:De,transmissionMap:L,thicknessMap:ne,gradientMap:z,opaque:E.transparent===!1&&E.blending===fa&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:xe,alphaHash:me,combine:E.combine,mapUv:Rt&&S(E.map.channel),aoMapUv:F&&S(E.aoMap.channel),lightMapUv:bn&&S(E.lightMap.channel),bumpMapUv:rt&&S(E.bumpMap.channel),normalMapUv:Je&&S(E.normalMap.channel),displacementMapUv:Be&&S(E.displacementMap.channel),emissiveMapUv:At&&S(E.emissiveMap.channel),metalnessMapUv:Ie&&S(E.metalnessMap.channel),roughnessMapUv:A&&S(E.roughnessMap.channel),anisotropyMapUv:ge&&S(E.anisotropyMap.channel),clearcoatMapUv:Te&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:ht&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&S(E.sheenRoughnessMap.channel),specularMapUv:D&&S(E.specularMap.channel),specularColorMapUv:G&&S(E.specularColorMap.channel),specularIntensityMapUv:Me&&S(E.specularIntensityMap.channel),transmissionMapUv:L&&S(E.transmissionMap.channel),thicknessMapUv:ne&&S(E.thicknessMap.channel),alphaMapUv:$&&S(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Je||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ee.attributes.uv&&(Rt||$),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Oe,skinning:H.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Rt&&E.map.isVideoTexture===!0&&gt.getTransfer(E.map.colorSpace)===Tt,decodeVideoTextureEmissive:At&&E.emissiveMap.isVideoTexture===!0&&gt.getTransfer(E.emissiveMap.colorSpace)===Tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Zi,flipSided:E.side===In,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ze&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&E.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(x(M,E),y(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function x(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const M=v[E.type];let P;if(M){const V=Ii[M];P=xE.clone(V.uniforms)}else P=E.uniforms;return P}function R(E,M){let P;for(let V=0,H=d.length;V<H;V++){const Y=d[V];if(Y.cacheKey===M){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new LT(t,M,E,s),d.push(P)),P}function C(E){if(--E.usedTimes===0){const M=d.indexOf(E);d[M]=d[d.length-1],d.pop(),E.destroy()}}function T(E){l.remove(E)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:_,acquireProgram:R,releaseProgram:C,releaseShaderCache:T,programs:d,dispose:N}}function OT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function FT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function R0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function N0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,p,m,v,S,g){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:p,material:m,groupOrder:v,renderOrder:h.renderOrder,z:S,group:g},t[e]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=m,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=S,u.group=g),e++,u}function o(h,p,m,v,S,g){const u=a(h,p,m,v,S,g);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,p,m,v,S,g){const u=a(h,p,m,v,S,g);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,p){n.length>1&&n.sort(h||FT),i.length>1&&i.sort(p||R0),r.length>1&&r.sort(p||R0)}function d(){for(let h=e,p=t.length;h<p;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function BT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new N0,t.set(i,[a])):r>=s.length?(a=new N0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function zT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new ct};break;case"SpotLight":n={position:new k,direction:new k,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":n={color:new ct,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function HT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let VT=0;function GT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jT(t){const e=new zT,n=HT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new Lt,a=new Lt;function o(c){let d=0,h=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,v=0,S=0,g=0,u=0,x=0,y=0,_=0,R=0,C=0,T=0;c.sort(GT);for(let E=0,M=c.length;E<M;E++){const P=c[E],V=P.color,H=P.intensity,Y=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=V.r*H,h+=V.g*H,p+=V.b*H;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],H);T++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ie=P.shadow,I=n.get(P);I.shadowIntensity=ie.intensity,I.shadowBias=ie.bias,I.shadowNormalBias=ie.normalBias,I.shadowRadius=ie.radius,I.shadowMapSize=ie.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=P.shadow.matrix,x++}i.directional[m]=q,m++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(V).multiplyScalar(H),q.distance=Y,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[S]=q;const ie=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,ie.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[S]=ie.matrix,P.castShadow){const I=n.get(P);I.shadowIntensity=ie.intensity,I.shadowBias=ie.bias,I.shadowNormalBias=ie.normalBias,I.shadowRadius=ie.radius,I.shadowMapSize=ie.mapSize,i.spotShadow[S]=I,i.spotShadowMap[S]=ee,_++}S++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(V).multiplyScalar(H),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=q,g++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const ie=P.shadow,I=n.get(P);I.shadowIntensity=ie.intensity,I.shadowBias=ie.bias,I.shadowNormalBias=ie.normalBias,I.shadowRadius=ie.radius,I.shadowMapSize=ie.mapSize,I.shadowCameraNear=ie.camera.near,I.shadowCameraFar=ie.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=ee,i.pointShadowMatrix[v]=P.shadow.matrix,y++}i.point[v]=q,v++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(H),q.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[u]=q,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=p;const N=i.hash;(N.directionalLength!==m||N.pointLength!==v||N.spotLength!==S||N.rectAreaLength!==g||N.hemiLength!==u||N.numDirectionalShadows!==x||N.numPointShadows!==y||N.numSpotShadows!==_||N.numSpotMaps!==R||N.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=g,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,N.directionalLength=m,N.pointLength=v,N.spotLength=S,N.rectAreaLength=g,N.hemiLength=u,N.numDirectionalShadows=x,N.numPointShadows=y,N.numSpotShadows=_,N.numSpotMaps=R,N.numLightProbes=T,i.version=VT++)}function l(c,d){let h=0,p=0,m=0,v=0,S=0;const g=d.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){const y=c[u];if(y.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),h++}else if(y.isSpotLight){const _=i.spot[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const _=i.rectArea[v];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),p++}else if(y.isHemisphereLight){const _=i.hemi[S];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:i}}function P0(t){const e=new jT(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function WT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new P0(t),e.set(r,[o])):s>=a.length?(o=new P0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class $T extends Da{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=TM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XT extends Da{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KT(t,e,n){let i=new up;const r=new We,s=new We,a=new Ct,o=new $T({depthPacking:CM}),l=new XT,c={},d=n.maxTextureSize,h={[zr]:In,[In]:zr,[Zi]:Zi},p=new Hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:qT,fragmentShader:YT}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new ri;v.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new we(v,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cx;let u=this.type;this.render=function(C,T,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Ur),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=u!==qi&&this.type===qi,Y=u===qi&&this.type!==qi;for(let ee=0,q=C.length;ee<q;ee++){const ie=C[ee],I=ie.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const Z=I.getFrameExtents();if(r.multiply(Z),s.copy(I.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Z.x),r.x=s.x*Z.x,I.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Z.y),r.y=s.y*Z.y,I.mapSize.y=s.y)),I.map===null||H===!0||Y===!0){const he=this.type!==qi?{minFilter:Mi,magFilter:Mi}:{};I.map!==null&&I.map.dispose(),I.map=new Ms(r.x,r.y,he),I.map.texture.name=ie.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const K=I.getViewportCount();for(let he=0;he<K;he++){const ke=I.getViewport(he);a.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),V.viewport(a),I.updateMatrices(ie,he),i=I.getFrustum(),_(T,N,I.camera,ie,this.type)}I.isPointLightShadow!==!0&&this.type===qi&&x(I,N),I.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(E,M,P)};function x(C,T){const N=e.update(S);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ms(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,N,p,S,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,N,m,S,null)}function y(C,T,N,E){let M=null;const P=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=N.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=M.uuid,H=T.uuid;let Y=c[V];Y===void 0&&(Y={},c[V]=Y);let ee=Y[H];ee===void 0&&(ee=M.clone(),Y[H]=ee,T.addEventListener("dispose",R)),M=ee}if(M.visible=T.visible,M.wireframe=T.wireframe,E===qi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=t.properties.get(M);V.light=N}return M}function _(C,T,N,E,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===qi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const H=e.update(C),Y=C.material;if(Array.isArray(Y)){const ee=H.groups;for(let q=0,ie=ee.length;q<ie;q++){const I=ee[q],Z=Y[I.materialIndex];if(Z&&Z.visible){const K=y(C,Z,E,M);C.onBeforeShadow(t,C,T,N,H,K,I),t.renderBufferDirect(N,null,H,K,C,I),C.onAfterShadow(t,C,T,N,H,K,I)}}}else if(Y.visible){const ee=y(C,Y,E,M);C.onBeforeShadow(t,C,T,N,H,ee,null),t.renderBufferDirect(N,null,H,ee,C,null),C.onAfterShadow(t,C,T,N,H,ee,null)}}const V=C.children;for(let H=0,Y=V.length;H<Y;H++)_(V[H],T,N,E,M)}function R(C){C.target.removeEventListener("dispose",R);for(const N in c){const E=c[N],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const ZT={[xf]:_f,[yf]:Ef,[Sf]:wf,[Ma]:Mf,[_f]:xf,[Ef]:yf,[wf]:Sf,[Mf]:Ma};function QT(t,e){function n(){let L=!1;const ne=new Ct;let z=null;const $=new Ct(0,0,0,0);return{setMask:function(xe){z!==xe&&!L&&(t.colorMask(xe,xe,xe,xe),z=xe)},setLocked:function(xe){L=xe},setClear:function(xe,me,ze,Mt,Nt){Nt===!0&&(xe*=Mt,me*=Mt,ze*=Mt),ne.set(xe,me,ze,Mt),$.equals(ne)===!1&&(t.clearColor(xe,me,ze,Mt),$.copy(ne))},reset:function(){L=!1,z=null,$.set(-1,0,0,0)}}}function i(){let L=!1,ne=!1,z=null,$=null,xe=null;return{setReversed:function(me){if(ne!==me){const ze=e.get("EXT_clip_control");ne?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const Mt=xe;xe=null,this.setClear(Mt)}ne=me},getReversed:function(){return ne},setTest:function(me){me?ue(t.DEPTH_TEST):Oe(t.DEPTH_TEST)},setMask:function(me){z!==me&&!L&&(t.depthMask(me),z=me)},setFunc:function(me){if(ne&&(me=ZT[me]),$!==me){switch(me){case xf:t.depthFunc(t.NEVER);break;case _f:t.depthFunc(t.ALWAYS);break;case yf:t.depthFunc(t.LESS);break;case Ma:t.depthFunc(t.LEQUAL);break;case Sf:t.depthFunc(t.EQUAL);break;case Mf:t.depthFunc(t.GEQUAL);break;case Ef:t.depthFunc(t.GREATER);break;case wf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}$=me}},setLocked:function(me){L=me},setClear:function(me){xe!==me&&(ne&&(me=1-me),t.clearDepth(me),xe=me)},reset:function(){L=!1,z=null,$=null,xe=null,ne=!1}}}function r(){let L=!1,ne=null,z=null,$=null,xe=null,me=null,ze=null,Mt=null,Nt=null;return{setTest:function(nt){L||(nt?ue(t.STENCIL_TEST):Oe(t.STENCIL_TEST))},setMask:function(nt){ne!==nt&&!L&&(t.stencilMask(nt),ne=nt)},setFunc:function(nt,vn,xn){(z!==nt||$!==vn||xe!==xn)&&(t.stencilFunc(nt,vn,xn),z=nt,$=vn,xe=xn)},setOp:function(nt,vn,xn){(me!==nt||ze!==vn||Mt!==xn)&&(t.stencilOp(nt,vn,xn),me=nt,ze=vn,Mt=xn)},setLocked:function(nt){L=nt},setClear:function(nt){Nt!==nt&&(t.clearStencil(nt),Nt=nt)},reset:function(){L=!1,ne=null,z=null,$=null,xe=null,me=null,ze=null,Mt=null,Nt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},p=new WeakMap,m=[],v=null,S=!1,g=null,u=null,x=null,y=null,_=null,R=null,C=null,T=new ct(0,0,0),N=0,E=!1,M=null,P=null,V=null,H=null,Y=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ie=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(I)[1]),q=ie>=1):I.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),q=ie>=2);let Z=null,K={};const he=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),ft=new Ct().fromArray(he),X=new Ct().fromArray(ke);function le(L,ne,z,$){const xe=new Uint8Array(4),me=t.createTexture();t.bindTexture(L,me),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ze=0;ze<z;ze++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,t.RGBA,1,1,$,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ne+ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return me}const ye={};ye[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),a.setFunc(Ma),rt(!1),Je(Im),ue(t.CULL_FACE),F(Ur);function ue(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Oe(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Ye(L,ne){return h[L]!==ne?(t.bindFramebuffer(L,ne),h[L]=ne,L===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ne),L===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ne),!0):!1}function tt(L,ne){let z=m,$=!1;if(L){z=p.get(ne),z===void 0&&(z=[],p.set(ne,z));const xe=L.textures;if(z.length!==xe.length||z[0]!==t.COLOR_ATTACHMENT0){for(let me=0,ze=xe.length;me<ze;me++)z[me]=t.COLOR_ATTACHMENT0+me;z.length=xe.length,$=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,$=!0);$&&t.drawBuffers(z)}function Rt(L){return v!==L?(t.useProgram(L),v=L,!0):!1}const lt={[ss]:t.FUNC_ADD,[eM]:t.FUNC_SUBTRACT,[tM]:t.FUNC_REVERSE_SUBTRACT};lt[nM]=t.MIN,lt[iM]=t.MAX;const Dt={[rM]:t.ZERO,[sM]:t.ONE,[aM]:t.SRC_COLOR,[gf]:t.SRC_ALPHA,[fM]:t.SRC_ALPHA_SATURATE,[uM]:t.DST_COLOR,[lM]:t.DST_ALPHA,[oM]:t.ONE_MINUS_SRC_COLOR,[vf]:t.ONE_MINUS_SRC_ALPHA,[dM]:t.ONE_MINUS_DST_COLOR,[cM]:t.ONE_MINUS_DST_ALPHA,[hM]:t.CONSTANT_COLOR,[pM]:t.ONE_MINUS_CONSTANT_COLOR,[mM]:t.CONSTANT_ALPHA,[gM]:t.ONE_MINUS_CONSTANT_ALPHA};function F(L,ne,z,$,xe,me,ze,Mt,Nt,nt){if(L===Ur){S===!0&&(Oe(t.BLEND),S=!1);return}if(S===!1&&(ue(t.BLEND),S=!0),L!==JS){if(L!==g||nt!==E){if((u!==ss||_!==ss)&&(t.blendEquation(t.FUNC_ADD),u=ss,_=ss),nt)switch(L){case fa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dm:t.blendFunc(t.ONE,t.ONE);break;case Um:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Om:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case fa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Um:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Om:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,y=null,R=null,C=null,T.set(0,0,0),N=0,g=L,E=nt}return}xe=xe||ne,me=me||z,ze=ze||$,(ne!==u||xe!==_)&&(t.blendEquationSeparate(lt[ne],lt[xe]),u=ne,_=xe),(z!==x||$!==y||me!==R||ze!==C)&&(t.blendFuncSeparate(Dt[z],Dt[$],Dt[me],Dt[ze]),x=z,y=$,R=me,C=ze),(Mt.equals(T)===!1||Nt!==N)&&(t.blendColor(Mt.r,Mt.g,Mt.b,Nt),T.copy(Mt),N=Nt),g=L,E=!1}function bn(L,ne){L.side===Zi?Oe(t.CULL_FACE):ue(t.CULL_FACE);let z=L.side===In;ne&&(z=!z),rt(z),L.blending===fa&&L.transparent===!1?F(Ur):F(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const $=L.stencilWrite;o.setTest($),$&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),At(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):Oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function rt(L){M!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),M=L)}function Je(L){L!==ZS?(ue(t.CULL_FACE),L!==P&&(L===Im?t.cullFace(t.BACK):L===QS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Oe(t.CULL_FACE),P=L}function Be(L){L!==V&&(q&&t.lineWidth(L),V=L)}function At(L,ne,z){L?(ue(t.POLYGON_OFFSET_FILL),(H!==ne||Y!==z)&&(t.polygonOffset(ne,z),H=ne,Y=z)):Oe(t.POLYGON_OFFSET_FILL)}function Ie(L){L?ue(t.SCISSOR_TEST):Oe(t.SCISSOR_TEST)}function A(L){L===void 0&&(L=t.TEXTURE0+ee-1),Z!==L&&(t.activeTexture(L),Z=L)}function w(L,ne,z){z===void 0&&(Z===null?z=t.TEXTURE0+ee-1:z=Z);let $=K[z];$===void 0&&($={type:void 0,texture:void 0},K[z]=$),($.type!==L||$.texture!==ne)&&(Z!==z&&(t.activeTexture(z),Z=z),t.bindTexture(L,ne||ye[L]),$.type=L,$.texture=ne)}function B(){const L=K[Z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(L){ft.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ft.copy(L))}function Ce(L){X.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function D(L,ne){let z=c.get(ne);z===void 0&&(z=new WeakMap,c.set(ne,z));let $=z.get(L);$===void 0&&($=t.getUniformBlockIndex(ne,L.name),z.set(L,$))}function G(L,ne){const $=c.get(ne).get(L);l.get(ne)!==$&&(t.uniformBlockBinding(ne,$,L.__bindingPointIndex),l.set(ne,$))}function Me(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Z=null,K={},h={},p=new WeakMap,m=[],v=null,S=!1,g=null,u=null,x=null,y=null,_=null,R=null,C=null,T=new ct(0,0,0),N=0,E=!1,M=null,P=null,V=null,H=null,Y=null,ft.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:Oe,bindFramebuffer:Ye,drawBuffers:tt,useProgram:Rt,setBlending:F,setMaterial:bn,setFlipSided:rt,setCullFace:Je,setLineWidth:Be,setPolygonOffset:At,setScissorTest:Ie,activeTexture:A,bindTexture:w,unbindTexture:B,compressedTexImage2D:te,compressedTexImage3D:re,texImage2D:Re,texImage3D:ve,updateUBOMapping:D,uniformBlockBinding:G,texStorage2D:ht,texStorage3D:oe,texSubImage2D:Q,texSubImage3D:De,compressedTexSubImage2D:ge,compressedTexSubImage3D:Te,scissor:Xe,viewport:Ce,reset:Me}}function L0(t,e,n,i){const r=JT(i);switch(n){case vx:return t*e;case _x:return t*e;case yx:return t*e*2;case Sx:return t*e/r.components*r.byteLength;case rp:return t*e/r.components*r.byteLength;case Mx:return t*e*2/r.components*r.byteLength;case sp:return t*e*2/r.components*r.byteLength;case xx:return t*e*3/r.components*r.byteLength;case _i:return t*e*4/r.components*r.byteLength;case ap:return t*e*4/r.components*r.byteLength;case ac:case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nf:case Lf:return Math.max(t,16)*Math.max(e,8)/4;case Rf:case Pf:return Math.max(t,8)*Math.max(e,8)/2;case kf:case If:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Df:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case zf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case jf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case uc:case Kf:case Zf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ex:case Qf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Jf:case eh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function JT(t){switch(t){case lr:case px:return{byteLength:1,components:1};case Go:case mx:case Zo:return{byteLength:2,components:1};case np:case ip:return{byteLength:2,components:4};case Ss:case tp:case er:return{byteLength:4,components:1};case gx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function eC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,d=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,w){return m?new OffscreenCanvas(A,w):Fc("canvas")}function S(A,w,B){let te=1;const re=Ie(A);if((re.width>B||re.height>B)&&(te=B/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Q=Math.floor(te*re.width),De=Math.floor(te*re.height);h===void 0&&(h=v(Q,De));const ge=w?v(Q,De):h;return ge.width=Q,ge.height=De,ge.getContext("2d").drawImage(A,0,0,Q,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Q+"x"+De+")."),ge}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),A;return A}function g(A){return A.generateMipmaps}function u(A){t.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(A,w,B,te,re=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=w;if(w===t.RED&&(B===t.FLOAT&&(Q=t.R32F),B===t.HALF_FLOAT&&(Q=t.R16F),B===t.UNSIGNED_BYTE&&(Q=t.R8)),w===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.R8UI),B===t.UNSIGNED_SHORT&&(Q=t.R16UI),B===t.UNSIGNED_INT&&(Q=t.R32UI),B===t.BYTE&&(Q=t.R8I),B===t.SHORT&&(Q=t.R16I),B===t.INT&&(Q=t.R32I)),w===t.RG&&(B===t.FLOAT&&(Q=t.RG32F),B===t.HALF_FLOAT&&(Q=t.RG16F),B===t.UNSIGNED_BYTE&&(Q=t.RG8)),w===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RG8UI),B===t.UNSIGNED_SHORT&&(Q=t.RG16UI),B===t.UNSIGNED_INT&&(Q=t.RG32UI),B===t.BYTE&&(Q=t.RG8I),B===t.SHORT&&(Q=t.RG16I),B===t.INT&&(Q=t.RG32I)),w===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),B===t.UNSIGNED_INT&&(Q=t.RGB32UI),B===t.BYTE&&(Q=t.RGB8I),B===t.SHORT&&(Q=t.RGB16I),B===t.INT&&(Q=t.RGB32I)),w===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),B===t.UNSIGNED_INT&&(Q=t.RGBA32UI),B===t.BYTE&&(Q=t.RGBA8I),B===t.SHORT&&(Q=t.RGBA16I),B===t.INT&&(Q=t.RGBA32I)),w===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),w===t.RGBA){const De=re?au:gt.getTransfer(te);B===t.FLOAT&&(Q=t.RGBA32F),B===t.HALF_FLOAT&&(Q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Q=De===Tt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(A,w){let B;return A?w===null||w===Ss||w===ba?B=t.DEPTH24_STENCIL8:w===er?B=t.DEPTH32F_STENCIL8:w===Go&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ss||w===ba?B=t.DEPTH_COMPONENT24:w===er?B=t.DEPTH_COMPONENT32F:w===Go&&(B=t.DEPTH_COMPONENT16),B}function R(A,w){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Mi&&A.minFilter!==Ui?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function C(A){const w=A.target;w.removeEventListener("dispose",C),N(w),w.isVideoTexture&&d.delete(w)}function T(A){const w=A.target;w.removeEventListener("dispose",T),M(w)}function N(A){const w=i.get(A);if(w.__webglInit===void 0)return;const B=A.source,te=p.get(B);if(te){const re=te[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(A),Object.keys(te).length===0&&p.delete(B)}i.remove(A)}function E(A){const w=i.get(A);t.deleteTexture(w.__webglTexture);const B=A.source,te=p.get(B);delete te[w.__cacheKey],a.memory.textures--}function M(A){const w=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(w.__webglFramebuffer[te]))for(let re=0;re<w.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(w.__webglFramebuffer[te][re]);else t.deleteFramebuffer(w.__webglFramebuffer[te]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[te])}else{if(Array.isArray(w.__webglFramebuffer))for(let te=0;te<w.__webglFramebuffer.length;te++)t.deleteFramebuffer(w.__webglFramebuffer[te]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let te=0;te<w.__webglColorRenderbuffer.length;te++)w.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[te]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const B=A.textures;for(let te=0,re=B.length;te<re;te++){const Q=i.get(B[te]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(B[te])}i.remove(A)}let P=0;function V(){P=0}function H(){const A=P;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function Y(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function ee(A,w){const B=i.get(A);if(A.isVideoTexture&&Be(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,A,w);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+w)}function q(A,w){const B=i.get(A);if(A.version>0&&B.__version!==A.version){X(B,A,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+w)}function ie(A,w){const B=i.get(A);if(A.version>0&&B.__version!==A.version){X(B,A,w);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+w)}function I(A,w){const B=i.get(A);if(A.version>0&&B.__version!==A.version){le(B,A,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+w)}const Z={[Cf]:t.REPEAT,[us]:t.CLAMP_TO_EDGE,[Af]:t.MIRRORED_REPEAT},K={[Mi]:t.NEAREST,[bM]:t.NEAREST_MIPMAP_NEAREST,[Sl]:t.NEAREST_MIPMAP_LINEAR,[Ui]:t.LINEAR,[Fu]:t.LINEAR_MIPMAP_NEAREST,[ds]:t.LINEAR_MIPMAP_LINEAR},he={[RM]:t.NEVER,[DM]:t.ALWAYS,[NM]:t.LESS,[bx]:t.LEQUAL,[PM]:t.EQUAL,[IM]:t.GEQUAL,[LM]:t.GREATER,[kM]:t.NOTEQUAL};function ke(A,w){if(w.type===er&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ui||w.magFilter===Fu||w.magFilter===Sl||w.magFilter===ds||w.minFilter===Ui||w.minFilter===Fu||w.minFilter===Sl||w.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,Z[w.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Z[w.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Z[w.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,K[w.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,K[w.minFilter]),w.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Mi||w.minFilter!==Sl&&w.minFilter!==ds||w.type===er&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ft(A,w){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",C));const te=w.source;let re=p.get(te);re===void 0&&(re={},p.set(te,re));const Q=Y(w);if(Q!==A.__cacheKey){re[Q]===void 0&&(re[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),re[Q].usedTimes++;const De=re[A.__cacheKey];De!==void 0&&(re[A.__cacheKey].usedTimes--,De.usedTimes===0&&E(w)),A.__cacheKey=Q,A.__webglTexture=re[Q].texture}return B}function X(A,w,B){let te=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(te=t.TEXTURE_3D);const re=ft(A,w),Q=w.source;n.bindTexture(te,A.__webglTexture,t.TEXTURE0+B);const De=i.get(Q);if(Q.version!==De.__version||re===!0){n.activeTexture(t.TEXTURE0+B);const ge=gt.getPrimaries(gt.workingColorSpace),Te=w.colorSpace===wr?null:gt.getPrimaries(w.colorSpace),ht=w.colorSpace===wr||ge===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let oe=S(w.image,!1,r.maxTextureSize);oe=At(w,oe);const Re=s.convert(w.format,w.colorSpace),ve=s.convert(w.type);let Xe=y(w.internalFormat,Re,ve,w.colorSpace,w.isVideoTexture);ke(te,w);let Ce;const D=w.mipmaps,G=w.isVideoTexture!==!0,Me=De.__version===void 0||re===!0,L=Q.dataReady,ne=R(w,oe);if(w.isDepthTexture)Xe=_(w.format===Ta,w.type),Me&&(G?n.texStorage2D(t.TEXTURE_2D,1,Xe,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Xe,oe.width,oe.height,0,Re,ve,null));else if(w.isDataTexture)if(D.length>0){G&&Me&&n.texStorage2D(t.TEXTURE_2D,ne,Xe,D[0].width,D[0].height);for(let z=0,$=D.length;z<$;z++)Ce=D[z],G?L&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,Ce.width,Ce.height,Re,ve,Ce.data):n.texImage2D(t.TEXTURE_2D,z,Xe,Ce.width,Ce.height,0,Re,ve,Ce.data);w.generateMipmaps=!1}else G?(Me&&n.texStorage2D(t.TEXTURE_2D,ne,Xe,oe.width,oe.height),L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Re,ve,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Xe,oe.width,oe.height,0,Re,ve,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&Me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ne,Xe,D[0].width,D[0].height,oe.depth);for(let z=0,$=D.length;z<$;z++)if(Ce=D[z],w.format!==_i)if(Re!==null)if(G){if(L)if(w.layerUpdates.size>0){const xe=L0(Ce.width,Ce.height,w.format,w.type);for(const me of w.layerUpdates){const ze=Ce.data.subarray(me*xe/Ce.data.BYTES_PER_ELEMENT,(me+1)*xe/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,me,Ce.width,Ce.height,1,Re,ze)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,Ce.width,Ce.height,oe.depth,Re,Ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,Xe,Ce.width,Ce.height,oe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,Ce.width,Ce.height,oe.depth,Re,ve,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,Xe,Ce.width,Ce.height,oe.depth,0,Re,ve,Ce.data)}else{G&&Me&&n.texStorage2D(t.TEXTURE_2D,ne,Xe,D[0].width,D[0].height);for(let z=0,$=D.length;z<$;z++)Ce=D[z],w.format!==_i?Re!==null?G?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,Ce.width,Ce.height,Re,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,z,Xe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?L&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,Ce.width,Ce.height,Re,ve,Ce.data):n.texImage2D(t.TEXTURE_2D,z,Xe,Ce.width,Ce.height,0,Re,ve,Ce.data)}else if(w.isDataArrayTexture)if(G){if(Me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ne,Xe,oe.width,oe.height,oe.depth),L)if(w.layerUpdates.size>0){const z=L0(oe.width,oe.height,w.format,w.type);for(const $ of w.layerUpdates){const xe=oe.data.subarray($*z/oe.data.BYTES_PER_ELEMENT,($+1)*z/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,$,oe.width,oe.height,1,Re,ve,xe)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Re,ve,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Xe,oe.width,oe.height,oe.depth,0,Re,ve,oe.data);else if(w.isData3DTexture)G?(Me&&n.texStorage3D(t.TEXTURE_3D,ne,Xe,oe.width,oe.height,oe.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Re,ve,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Xe,oe.width,oe.height,oe.depth,0,Re,ve,oe.data);else if(w.isFramebufferTexture){if(Me)if(G)n.texStorage2D(t.TEXTURE_2D,ne,Xe,oe.width,oe.height);else{let z=oe.width,$=oe.height;for(let xe=0;xe<ne;xe++)n.texImage2D(t.TEXTURE_2D,xe,Xe,z,$,0,Re,ve,null),z>>=1,$>>=1}}else if(D.length>0){if(G&&Me){const z=Ie(D[0]);n.texStorage2D(t.TEXTURE_2D,ne,Xe,z.width,z.height)}for(let z=0,$=D.length;z<$;z++)Ce=D[z],G?L&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,Re,ve,Ce):n.texImage2D(t.TEXTURE_2D,z,Xe,Re,ve,Ce);w.generateMipmaps=!1}else if(G){if(Me){const z=Ie(oe);n.texStorage2D(t.TEXTURE_2D,ne,Xe,z.width,z.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,ve,oe)}else n.texImage2D(t.TEXTURE_2D,0,Xe,Re,ve,oe);g(w)&&u(te),De.__version=Q.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function le(A,w,B){if(w.image.length!==6)return;const te=ft(A,w),re=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);const Q=i.get(re);if(re.version!==Q.__version||te===!0){n.activeTexture(t.TEXTURE0+B);const De=gt.getPrimaries(gt.workingColorSpace),ge=w.colorSpace===wr?null:gt.getPrimaries(w.colorSpace),Te=w.colorSpace===wr||De===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ht=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,Re=[];for(let $=0;$<6;$++)!ht&&!oe?Re[$]=S(w.image[$],!0,r.maxCubemapSize):Re[$]=oe?w.image[$].image:w.image[$],Re[$]=At(w,Re[$]);const ve=Re[0],Xe=s.convert(w.format,w.colorSpace),Ce=s.convert(w.type),D=y(w.internalFormat,Xe,Ce,w.colorSpace),G=w.isVideoTexture!==!0,Me=Q.__version===void 0||te===!0,L=re.dataReady;let ne=R(w,ve);ke(t.TEXTURE_CUBE_MAP,w);let z;if(ht){G&&Me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ne,D,ve.width,ve.height);for(let $=0;$<6;$++){z=Re[$].mipmaps;for(let xe=0;xe<z.length;xe++){const me=z[xe];w.format!==_i?Xe!==null?G?L&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,0,0,me.width,me.height,Xe,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,D,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,0,0,me.width,me.height,Xe,Ce,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,D,me.width,me.height,0,Xe,Ce,me.data)}}}else{if(z=w.mipmaps,G&&Me){z.length>0&&ne++;const $=Ie(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ne,D,$.width,$.height)}for(let $=0;$<6;$++)if(oe){G?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Re[$].width,Re[$].height,Xe,Ce,Re[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,D,Re[$].width,Re[$].height,0,Xe,Ce,Re[$].data);for(let xe=0;xe<z.length;xe++){const ze=z[xe].image[$].image;G?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,0,0,ze.width,ze.height,Xe,Ce,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,D,ze.width,ze.height,0,Xe,Ce,ze.data)}}else{G?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Xe,Ce,Re[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,D,Xe,Ce,Re[$]);for(let xe=0;xe<z.length;xe++){const me=z[xe];G?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,0,0,Xe,Ce,me.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,D,Xe,Ce,me.image[$])}}}g(w)&&u(t.TEXTURE_CUBE_MAP),Q.__version=re.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ye(A,w,B,te,re,Q){const De=s.convert(B.format,B.colorSpace),ge=s.convert(B.type),Te=y(B.internalFormat,De,ge,B.colorSpace),ht=i.get(w),oe=i.get(B);if(oe.__renderTarget=w,!ht.__hasExternalTextures){const Re=Math.max(1,w.width>>Q),ve=Math.max(1,w.height>>Q);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,Q,Te,Re,ve,w.depth,0,De,ge,null):n.texImage2D(re,Q,Te,Re,ve,0,De,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Je(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,re,oe.__webglTexture,0,rt(w)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,re,oe.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(A,w,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),w.depthBuffer){const te=w.depthTexture,re=te&&te.isDepthTexture?te.type:null,Q=_(w.stencilBuffer,re),De=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=rt(w);Je(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,Q,w.width,w.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,Q,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Q,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,De,t.RENDERBUFFER,A)}else{const te=w.textures;for(let re=0;re<te.length;re++){const Q=te[re],De=s.convert(Q.format,Q.colorSpace),ge=s.convert(Q.type),Te=y(Q.internalFormat,De,ge,Q.colorSpace),ht=rt(w);B&&Je(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ht,Te,w.width,w.height):Je(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ht,Te,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Te,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(w.depthTexture);te.__renderTarget=w,(!te.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ee(w.depthTexture,0);const re=te.__webglTexture,Q=rt(w);if(w.depthTexture.format===ha)Je(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(w.depthTexture.format===Ta)Je(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ye(A){const w=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){const te=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),te){const re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,te.removeEventListener("dispose",re)};te.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=te}if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Oe(w.__webglFramebuffer,A)}else if(B){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]===void 0)w.__webglDepthbuffer[te]=t.createRenderbuffer(),ue(w.__webglDepthbuffer[te],A,!1);else{const re=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),ue(w.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,re)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function tt(A,w,B){const te=i.get(A);w!==void 0&&ye(te.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ye(A)}function Rt(A){const w=A.texture,B=i.get(A),te=i.get(w);A.addEventListener("dispose",T);const re=A.textures,Q=A.isWebGLCubeRenderTarget===!0,De=re.length>1;if(De||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=w.version,a.memory.textures++),Q){B.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[ge]=[];for(let Te=0;Te<w.mipmaps.length;Te++)B.__webglFramebuffer[ge][Te]=t.createFramebuffer()}else B.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let ge=0;ge<w.mipmaps.length;ge++)B.__webglFramebuffer[ge]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(De)for(let ge=0,Te=re.length;ge<Te;ge++){const ht=i.get(re[ge]);ht.__webglTexture===void 0&&(ht.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&Je(A)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ge=0;ge<re.length;ge++){const Te=re[ge];B.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ge]);const ht=s.convert(Te.format,Te.colorSpace),oe=s.convert(Te.type),Re=y(Te.internalFormat,ht,oe,Te.colorSpace,A.isXRRenderTarget===!0),ve=rt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Re,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,B.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),ke(t.TEXTURE_CUBE_MAP,w);for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)ye(B.__webglFramebuffer[ge][Te],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Te);else ye(B.__webglFramebuffer[ge],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(w)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let ge=0,Te=re.length;ge<Te;ge++){const ht=re[ge],oe=i.get(ht);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ke(t.TEXTURE_2D,ht),ye(B.__webglFramebuffer,A,ht,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),g(ht)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ge=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,te.__webglTexture),ke(ge,w),w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)ye(B.__webglFramebuffer[Te],A,w,t.COLOR_ATTACHMENT0,ge,Te);else ye(B.__webglFramebuffer,A,w,t.COLOR_ATTACHMENT0,ge,0);g(w)&&u(ge),n.unbindTexture()}A.depthBuffer&&Ye(A)}function lt(A){const w=A.textures;for(let B=0,te=w.length;B<te;B++){const re=w[B];if(g(re)){const Q=x(A),De=i.get(re).__webglTexture;n.bindTexture(Q,De),u(Q),n.unbindTexture()}}}const Dt=[],F=[];function bn(A){if(A.samples>0){if(Je(A)===!1){const w=A.textures,B=A.width,te=A.height;let re=t.COLOR_BUFFER_BIT;const Q=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=i.get(A),ge=w.length>1;if(ge)for(let Te=0;Te<w.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Te=0;Te<w.length;Te++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,De.__webglColorRenderbuffer[Te]);const ht=i.get(w[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ht,0)}t.blitFramebuffer(0,0,B,te,0,0,B,te,re,t.NEAREST),l===!0&&(Dt.length=0,F.length=0,Dt.push(t.COLOR_ATTACHMENT0+Te),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Dt.push(Q),F.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,F)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Dt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Te=0;Te<w.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,De.__webglColorRenderbuffer[Te]);const ht=i.get(w[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,ht,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const w=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function rt(A){return Math.min(r.maxSamples,A.samples)}function Je(A){const w=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Be(A){const w=a.render.frame;d.get(A)!==w&&(d.set(A,w),A.update())}function At(A,w){const B=A.colorSpace,te=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==La&&B!==wr&&(gt.getTransfer(B)===Tt?(te!==_i||re!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}function Ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=ee,this.setTexture2DArray=q,this.setTexture3D=ie,this.setTextureCube=I,this.rebindTextures=tt,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Je}function tC(t,e){function n(i,r=wr){let s;const a=gt.getTransfer(r);if(i===lr)return t.UNSIGNED_BYTE;if(i===np)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ip)return t.UNSIGNED_SHORT_5_5_5_1;if(i===gx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===px)return t.BYTE;if(i===mx)return t.SHORT;if(i===Go)return t.UNSIGNED_SHORT;if(i===tp)return t.INT;if(i===Ss)return t.UNSIGNED_INT;if(i===er)return t.FLOAT;if(i===Zo)return t.HALF_FLOAT;if(i===vx)return t.ALPHA;if(i===xx)return t.RGB;if(i===_i)return t.RGBA;if(i===_x)return t.LUMINANCE;if(i===yx)return t.LUMINANCE_ALPHA;if(i===ha)return t.DEPTH_COMPONENT;if(i===Ta)return t.DEPTH_STENCIL;if(i===Sx)return t.RED;if(i===rp)return t.RED_INTEGER;if(i===Mx)return t.RG;if(i===sp)return t.RG_INTEGER;if(i===ap)return t.RGBA_INTEGER;if(i===ac||i===oc||i===lc||i===cc)if(a===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rf||i===Nf||i===Pf||i===Lf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kf||i===If||i===Df)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===kf||i===If)return a===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Df)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uf||i===Of||i===Ff||i===Bf||i===zf||i===Hf||i===Vf||i===Gf||i===jf||i===Wf||i===$f||i===Xf||i===qf||i===Yf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uf)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Of)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ff)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bf)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zf)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hf)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vf)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gf)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jf)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wf)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$f)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xf)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qf)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yf)return a===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uc||i===Kf||i===Zf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===uc)return a===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ex||i===Qf||i===Jf||i===eh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===uc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ba?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class nC extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cr extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iC={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),u=this._getHandJoint(c,S);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&p>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Cr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const rC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Dn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Hr({vertexShader:rC,fragmentShader:sC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new we(new gi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oC extends ka{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,p=null,m=null,v=null;const S=new aC,g=n.getContextAttributes();let u=null,x=null;const y=[],_=[],R=new We;let C=null;const T=new Vn;T.viewport=new Ct;const N=new Vn;N.viewport=new Ct;const E=[T,N],M=new nC;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let le=y[X];return le===void 0&&(le=new dd,y[X]=le),le.getTargetRaySpace()},this.getControllerGrip=function(X){let le=y[X];return le===void 0&&(le=new dd,y[X]=le),le.getGripSpace()},this.getHand=function(X){let le=y[X];return le===void 0&&(le=new dd,y[X]=le),le.getHandSpace()};function H(X){const le=_.indexOf(X.inputSource);if(le===-1)return;const ye=y[le];ye!==void 0&&(ye.update(X.inputSource,X.frame,c||a),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",ee);for(let X=0;X<y.length;X++){const le=_[X];le!==null&&(_[X]=null,y[X].disconnect(le))}P=null,V=null,S.reset(),e.setRenderTarget(u),m=null,p=null,h=null,r=null,x=null,ft.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",ee),g.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Ms(m.framebufferWidth,m.framebufferHeight,{format:_i,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let le=null,ye=null,ue=null;g.depth&&(ue=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=g.stencil?Ta:ha,ye=g.stencil?ba:Ss);const Oe={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,n),p=h.createProjectionLayer(Oe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new Ms(p.textureWidth,p.textureHeight,{format:_i,type:lr,depthTexture:new Ux(p.textureWidth,p.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ft.setContext(r),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ee(X){for(let le=0;le<X.removed.length;le++){const ye=X.removed[le],ue=_.indexOf(ye);ue>=0&&(_[ue]=null,y[ue].disconnect(ye))}for(let le=0;le<X.added.length;le++){const ye=X.added[le];let ue=_.indexOf(ye);if(ue===-1){for(let Ye=0;Ye<y.length;Ye++)if(Ye>=_.length){_.push(ye),ue=Ye;break}else if(_[Ye]===null){_[Ye]=ye,ue=Ye;break}if(ue===-1)break}const Oe=y[ue];Oe&&Oe.connect(ye)}}const q=new k,ie=new k;function I(X,le,ye){q.setFromMatrixPosition(le.matrixWorld),ie.setFromMatrixPosition(ye.matrixWorld);const ue=q.distanceTo(ie),Oe=le.projectionMatrix.elements,Ye=ye.projectionMatrix.elements,tt=Oe[14]/(Oe[10]-1),Rt=Oe[14]/(Oe[10]+1),lt=(Oe[9]+1)/Oe[5],Dt=(Oe[9]-1)/Oe[5],F=(Oe[8]-1)/Oe[0],bn=(Ye[8]+1)/Ye[0],rt=tt*F,Je=tt*bn,Be=ue/(-F+bn),At=Be*-F;if(le.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(At),X.translateZ(Be),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Oe[10]===-1)X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Ie=tt+Be,A=Rt+Be,w=rt-At,B=Je+(ue-At),te=lt*Rt/A*Ie,re=Dt*Rt/A*Ie;X.projectionMatrix.makePerspective(w,B,te,re,Ie,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Z(X,le){le===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(le.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let le=X.near,ye=X.far;S.texture!==null&&(S.depthNear>0&&(le=S.depthNear),S.depthFar>0&&(ye=S.depthFar)),M.near=N.near=T.near=le,M.far=N.far=T.far=ye,(P!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,V=M.far),T.layers.mask=X.layers.mask|2,N.layers.mask=X.layers.mask|4,M.layers.mask=T.layers.mask|N.layers.mask;const ue=X.parent,Oe=M.cameras;Z(M,ue);for(let Ye=0;Ye<Oe.length;Ye++)Z(Oe[Ye],ue);Oe.length===2?I(M,T,N):M.projectionMatrix.copy(T.projectionMatrix),K(X,M,ue)};function K(X,le,ye){ye===null?X.matrix.copy(le.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply(le.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=jo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(M)};let he=null;function ke(X,le){if(d=le.getViewerPose(c||a),v=le,d!==null){const ye=d.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let ue=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let Ye=0;Ye<ye.length;Ye++){const tt=ye[Ye];let Rt=null;if(m!==null)Rt=m.getViewport(tt);else{const Dt=h.getViewSubImage(p,tt);Rt=Dt.viewport,Ye===0&&(e.setRenderTargetTextures(x,Dt.colorTexture,p.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(x))}let lt=E[Ye];lt===void 0&&(lt=new Vn,lt.layers.enable(Ye),lt.viewport=new Ct,E[Ye]=lt),lt.matrix.fromArray(tt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(tt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ye===0&&(M.matrix.copy(lt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(lt)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ye=h.getDepthInformation(ye[0]);Ye&&Ye.isValid&&Ye.texture&&S.init(e,Ye,r.renderState)}}for(let ye=0;ye<y.length;ye++){const ue=_[ye],Oe=y[ye];ue!==null&&Oe!==void 0&&Oe.update(ue,le,c||a)}he&&he(X,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),v=null}const ft=new Dx;ft.setAnimationLoop(ke),this.setAnimationLoop=function(X){he=X},this.dispose=function(){}}}const Qr=new zi,lC=new Lt;function cC(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Lx(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,x,y,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),h(g,u)):u.isMeshPhongMaterial?(s(g,u),d(g,u)):u.isMeshStandardMaterial?(s(g,u),p(g,u),u.isMeshPhysicalMaterial&&m(g,u,_)):u.isMeshMatcapMaterial?(s(g,u),v(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),S(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,x,y):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===In&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===In&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const x=e.get(u),y=x.envMap,_=x.envMapRotation;y&&(g.envMap.value=y,Qr.copy(_),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),g.envMapRotation.value.setFromMatrix4(lC.makeRotationFromEuler(Qr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,x,y){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*x,g.scale.value=y*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function h(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function p(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,x){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===In&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,u){u.matcap&&(g.matcap.value=u.matcap)}function S(g,u){const x=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const _=y.program;i.uniformBlockBinding(x,_)}function c(x,y){let _=r[x.id];_===void 0&&(v(x),_=d(x),r[x.id]=_,x.addEventListener("dispose",g));const R=y.program;i.updateUBOMapping(x,R);const C=e.render.frame;s[x.id]!==C&&(p(x),s[x.id]=C)}function d(x){const y=h();x.__bindingPointIndex=y;const _=t.createBuffer(),R=x.__size,C=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,_),_}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const y=r[x.id],_=x.uniforms,R=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let C=0,T=_.length;C<T;C++){const N=Array.isArray(_[C])?_[C]:[_[C]];for(let E=0,M=N.length;E<M;E++){const P=N[E];if(m(P,C,E,R)===!0){const V=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let ee=0;ee<H.length;ee++){const q=H[ee],ie=S(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,V+Y,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,Y),Y+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(x,y,_,R){const C=x.value,T=y+"_"+_;if(R[T]===void 0)return typeof C=="number"||typeof C=="boolean"?R[T]=C:R[T]=C.clone(),!0;{const N=R[T];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return R[T]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function v(x){const y=x.uniforms;let _=0;const R=16;for(let T=0,N=y.length;T<N;T++){const E=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,P=E.length;M<P;M++){const V=E[M],H=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,ee=H.length;Y<ee;Y++){const q=H[Y],ie=S(q),I=_%R,Z=I%ie.boundary,K=I+Z;_+=Z,K!==0&&R-K<ie.storage&&(_+=R-K),V.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=ie.storage}}}const C=_%R;return C>0&&(_+=R-C),x.__size=_,x.__cache={},this}function S(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class dC{constructor(e={}){const{canvas:n=QM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),S=new Int32Array(4);let g=null,u=null;const x=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=Or,this.toneMappingExposure=1;const _=this;let R=!1,C=0,T=0,N=null,E=-1,M=null;const P=new Ct,V=new Ct;let H=null;const Y=new ct(0);let ee=0,q=n.width,ie=n.height,I=1,Z=null,K=null;const he=new Ct(0,0,q,ie),ke=new Ct(0,0,q,ie);let ft=!1;const X=new up;let le=!1,ye=!1;const ue=new Lt,Oe=new Lt,Ye=new k,tt=new Ct,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Dt(){return N===null?I:1}let F=i;function bn(b,U){return n.getContext(b,U)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ep}`),n.addEventListener("webglcontextlost",$,!1),n.addEventListener("webglcontextrestored",xe,!1),n.addEventListener("webglcontextcreationerror",me,!1),F===null){const U="webgl2";if(F=bn(U,b),F===null)throw bn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let rt,Je,Be,At,Ie,A,w,B,te,re,Q,De,ge,Te,ht,oe,Re,ve,Xe,Ce,D,G,Me,L;function ne(){rt=new gb(F),rt.init(),G=new tC(F,rt),Je=new cb(F,rt,e,G),Be=new QT(F,rt),Je.reverseDepthBuffer&&p&&Be.buffers.depth.setReversed(!0),At=new _b(F),Ie=new OT,A=new eC(F,rt,Be,Ie,Je,G,At),w=new db(_),B=new mb(_),te=new bE(F),Me=new ob(F,te),re=new vb(F,te,At,Me),Q=new Sb(F,re,te,At),Xe=new yb(F,Je,A),oe=new ub(Ie),De=new UT(_,w,B,rt,Je,Me,oe),ge=new cC(_,Ie),Te=new BT,ht=new WT(rt),ve=new ab(_,w,B,Be,Q,m,l),Re=new KT(_,Q,Je),L=new uC(F,At,Je,Be),Ce=new lb(F,rt,At),D=new xb(F,rt,At),At.programs=De.programs,_.capabilities=Je,_.extensions=rt,_.properties=Ie,_.renderLists=Te,_.shadowMap=Re,_.state=Be,_.info=At}ne();const z=new oC(_,F);this.xr=z,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=rt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=rt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(b){b!==void 0&&(I=b,this.setSize(q,ie,!1))},this.getSize=function(b){return b.set(q,ie)},this.setSize=function(b,U,j=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,ie=U,n.width=Math.floor(b*I),n.height=Math.floor(U*I),j===!0&&(n.style.width=b+"px",n.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(q*I,ie*I).floor()},this.setDrawingBufferSize=function(b,U,j){q=b,ie=U,I=j,n.width=Math.floor(b*j),n.height=Math.floor(U*j),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(he)},this.setViewport=function(b,U,j,W){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,U,j,W),Be.viewport(P.copy(he).multiplyScalar(I).round())},this.getScissor=function(b){return b.copy(ke)},this.setScissor=function(b,U,j,W){b.isVector4?ke.set(b.x,b.y,b.z,b.w):ke.set(b,U,j,W),Be.scissor(V.copy(ke).multiplyScalar(I).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(b){Be.setScissorTest(ft=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){K=b},this.getClearColor=function(b){return b.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(b=!0,U=!0,j=!0){let W=0;if(b){let O=!1;if(N!==null){const ce=N.texture.format;O=ce===ap||ce===sp||ce===rp}if(O){const ce=N.texture.type,Se=ce===lr||ce===Ss||ce===Go||ce===ba||ce===np||ce===ip,Pe=ve.getClearColor(),Ne=ve.getClearAlpha(),$e=Pe.r,qe=Pe.g,Ee=Pe.b;Se?(v[0]=$e,v[1]=qe,v[2]=Ee,v[3]=Ne,F.clearBufferuiv(F.COLOR,0,v)):(S[0]=$e,S[1]=qe,S[2]=Ee,S[3]=Ne,F.clearBufferiv(F.COLOR,0,S))}else W|=F.COLOR_BUFFER_BIT}U&&(W|=F.DEPTH_BUFFER_BIT),j&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$,!1),n.removeEventListener("webglcontextrestored",xe,!1),n.removeEventListener("webglcontextcreationerror",me,!1),Te.dispose(),ht.dispose(),Ie.dispose(),w.dispose(),B.dispose(),Q.dispose(),Me.dispose(),L.dispose(),De.dispose(),z.dispose(),z.removeEventListener("sessionstart",wi),z.removeEventListener("sessionend",si),qn.stop()};function $(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=At.autoReset,U=Re.enabled,j=Re.autoUpdate,W=Re.needsUpdate,O=Re.type;ne(),At.autoReset=b,Re.enabled=U,Re.autoUpdate=j,Re.needsUpdate=W,Re.type=O}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ze(b){const U=b.target;U.removeEventListener("dispose",ze),Mt(U)}function Mt(b){Nt(b),Ie.remove(b)}function Nt(b){const U=Ie.get(b).programs;U!==void 0&&(U.forEach(function(j){De.releaseProgram(j)}),b.isShaderMaterial&&De.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,j,W,O,ce){U===null&&(U=Rt);const Se=O.isMesh&&O.matrixWorld.determinant()<0,Pe=za(b,U,j,W,O);Be.setMaterial(W,Se);let Ne=j.index,$e=1;if(W.wireframe===!0){if(Ne=re.getWireframeAttribute(j),Ne===void 0)return;$e=2}const qe=j.drawRange,Ee=j.attributes.position;let st=qe.start*$e,_t=(qe.start+qe.count)*$e;ce!==null&&(st=Math.max(st,ce.start*$e),_t=Math.min(_t,(ce.start+ce.count)*$e)),Ne!==null?(st=Math.max(st,0),_t=Math.min(_t,Ne.count)):Ee!=null&&(st=Math.max(st,0),_t=Math.min(_t,Ee.count));const Et=_t-st;if(Et<0||Et===1/0)return;Me.setup(O,W,Pe,j,Ne);let Zt,pt=Ce;if(Ne!==null&&(Zt=te.get(Ne),pt=D,pt.setIndex(Zt)),O.isMesh)W.wireframe===!0?(Be.setLineWidth(W.wireframeLinewidth*Dt()),pt.setMode(F.LINES)):pt.setMode(F.TRIANGLES);else if(O.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),Be.setLineWidth(Le*Dt()),O.isLineSegments?pt.setMode(F.LINES):O.isLineLoop?pt.setMode(F.LINE_LOOP):pt.setMode(F.LINE_STRIP)}else O.isPoints?pt.setMode(F.POINTS):O.isSprite&&pt.setMode(F.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)pt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))pt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Le=O._multiDrawStarts,Kn=O._multiDrawCounts,mt=O._multiDrawCount,Tn=Ne?te.get(Ne).bytesPerElement:1,Vi=Ie.get(W).currentProgram.getUniforms();for(let on=0;on<mt;on++)Vi.setValue(F,"_gl_DrawID",on),pt.render(Le[on]/Tn,Kn[on])}else if(O.isInstancedMesh)pt.renderInstances(st,Et,O.count);else if(j.isInstancedBufferGeometry){const Le=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Kn=Math.min(j.instanceCount,Le);pt.renderInstances(st,Et,Kn)}else pt.render(st,Et)};function nt(b,U,j){b.transparent===!0&&b.side===Zi&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,dr(b,U,j),b.side=zr,b.needsUpdate=!0,dr(b,U,j),b.side=Zi):dr(b,U,j)}this.compile=function(b,U,j=null){j===null&&(j=b),u=ht.get(j),u.init(U),y.push(u),j.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),b!==j&&b.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const W=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ce=O.material;if(ce)if(Array.isArray(ce))for(let Se=0;Se<ce.length;Se++){const Pe=ce[Se];nt(Pe,j,O),W.add(Pe)}else nt(ce,j,O),W.add(ce)}),y.pop(),u=null,W},this.compileAsync=function(b,U,j=null){const W=this.compile(b,U,j);return new Promise(O=>{function ce(){if(W.forEach(function(Se){Ie.get(Se).currentProgram.isReady()&&W.delete(Se)}),W.size===0){O(b);return}setTimeout(ce,10)}rt.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let vn=null;function xn(b){vn&&vn(b)}function wi(){qn.stop()}function si(){qn.start()}const qn=new Dx;qn.setAnimationLoop(xn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(b){vn=b,z.setAnimationLoop(b),b===null?qn.stop():qn.start()},z.addEventListener("sessionstart",wi),z.addEventListener("sessionend",si),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(U),U=z.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,U,N),u=ht.get(b,y.length),u.init(U),y.push(u),Oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Oe),ye=this.localClippingEnabled,le=oe.init(this.clippingPlanes,ye),g=Te.get(b,x.length),g.init(),x.push(g),z.enabled===!0&&z.isPresenting===!0){const ce=_.xr.getDepthSensingMesh();ce!==null&&Hi(ce,U,-1/0,_.sortObjects)}Hi(b,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Z,K),lt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,lt&&ve.addToRenderList(g,b),this.info.render.frame++,le===!0&&oe.beginShadows();const j=u.state.shadowsArray;Re.render(j,b,U),le===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,O=g.transmissive;if(u.setupLights(),U.isArrayCamera){const ce=U.cameras;if(O.length>0)for(let Se=0,Pe=ce.length;Se<Pe;Se++){const Ne=ce[Se];tl(W,O,b,Ne)}lt&&ve.render(b);for(let Se=0,Pe=ce.length;Se<Pe;Se++){const Ne=ce[Se];bs(g,b,Ne,Ne.viewport)}}else O.length>0&&tl(W,O,b,U),lt&&ve.render(b),bs(g,b,U);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(_,b,U),Me.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(u=y[y.length-1],le===!0&&oe.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Hi(b,U,j,W){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){W&&tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Oe);const Se=Q.update(b),Pe=b.material;Pe.visible&&g.push(b,Se,Pe,j,tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){const Se=Q.update(b),Pe=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),tt.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),tt.copy(Se.boundingSphere.center)),tt.applyMatrix4(b.matrixWorld).applyMatrix4(Oe)),Array.isArray(Pe)){const Ne=Se.groups;for(let $e=0,qe=Ne.length;$e<qe;$e++){const Ee=Ne[$e],st=Pe[Ee.materialIndex];st&&st.visible&&g.push(b,Se,st,j,tt.z,Ee)}}else Pe.visible&&g.push(b,Se,Pe,j,tt.z,null)}}const ce=b.children;for(let Se=0,Pe=ce.length;Se<Pe;Se++)Hi(ce[Se],U,j,W)}function bs(b,U,j,W){const O=b.opaque,ce=b.transmissive,Se=b.transparent;u.setupLightsView(j),le===!0&&oe.setGlobalState(_.clippingPlanes,j),W&&Be.viewport(P.copy(W)),O.length>0&&Wr(O,U,j),ce.length>0&&Wr(ce,U,j),Se.length>0&&Wr(Se,U,j),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function tl(b,U,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new Ms(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Zo:lr,minFilter:ds,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const ce=u.state.transmissionRenderTarget[W.id],Se=W.viewport||P;ce.setSize(Se.z,Se.w);const Pe=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(Y),ee=_.getClearAlpha(),ee<1&&_.setClearColor(16777215,.5),_.clear(),lt&&ve.render(j);const Ne=_.toneMapping;_.toneMapping=Or;const $e=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),le===!0&&oe.setGlobalState(_.clippingPlanes,W),Wr(b,j,W),A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce),rt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ee=0,st=U.length;Ee<st;Ee++){const _t=U[Ee],Et=_t.object,Zt=_t.geometry,pt=_t.material,Le=_t.group;if(pt.side===Zi&&Et.layers.test(W.layers)){const Kn=pt.side;pt.side=In,pt.needsUpdate=!0,Oa(Et,j,W,Zt,pt,Le),pt.side=Kn,pt.needsUpdate=!0,qe=!0}}qe===!0&&(A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce))}_.setRenderTarget(Pe),_.setClearColor(Y,ee),$e!==void 0&&(W.viewport=$e),_.toneMapping=Ne}function Wr(b,U,j){const W=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ce=b.length;O<ce;O++){const Se=b[O],Pe=Se.object,Ne=Se.geometry,$e=W===null?Se.material:W,qe=Se.group;Pe.layers.test(j.layers)&&Oa(Pe,U,j,Ne,$e,qe)}}function Oa(b,U,j,W,O,ce){b.onBeforeRender(_,U,j,W,O,ce),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(_,U,j,W,b,ce),O.transparent===!0&&O.side===Zi&&O.forceSinglePass===!1?(O.side=In,O.needsUpdate=!0,_.renderBufferDirect(j,U,W,O,b,ce),O.side=zr,O.needsUpdate=!0,_.renderBufferDirect(j,U,W,O,b,ce),O.side=Zi):_.renderBufferDirect(j,U,W,O,b,ce),b.onAfterRender(_,U,j,W,O,ce)}function dr(b,U,j){U.isScene!==!0&&(U=Rt);const W=Ie.get(b),O=u.state.lights,ce=u.state.shadowsArray,Se=O.state.version,Pe=De.getParameters(b,O.state,ce,U,j),Ne=De.getProgramCacheKey(Pe);let $e=W.programs;W.environment=b.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(b.isMeshStandardMaterial?B:w).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,$e===void 0&&(b.addEventListener("dispose",ze),$e=new Map,W.programs=$e);let qe=$e.get(Ne);if(qe!==void 0){if(W.currentProgram===qe&&W.lightsStateVersion===Se)return Ba(b,Pe),qe}else Pe.uniforms=De.getUniforms(b),b.onBeforeCompile(Pe,_),qe=De.acquireProgram(Pe,Ne),$e.set(Ne,qe),W.uniforms=Pe.uniforms;const Ee=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ee.clippingPlanes=oe.uniform),Ba(b,Pe),W.needsLights=Yn(b),W.lightsStateVersion=Se,W.needsLights&&(Ee.ambientLightColor.value=O.state.ambient,Ee.lightProbe.value=O.state.probe,Ee.directionalLights.value=O.state.directional,Ee.directionalLightShadows.value=O.state.directionalShadow,Ee.spotLights.value=O.state.spot,Ee.spotLightShadows.value=O.state.spotShadow,Ee.rectAreaLights.value=O.state.rectArea,Ee.ltc_1.value=O.state.rectAreaLTC1,Ee.ltc_2.value=O.state.rectAreaLTC2,Ee.pointLights.value=O.state.point,Ee.pointLightShadows.value=O.state.pointShadow,Ee.hemisphereLights.value=O.state.hemi,Ee.directionalShadowMap.value=O.state.directionalShadowMap,Ee.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ee.spotShadowMap.value=O.state.spotShadowMap,Ee.spotLightMatrix.value=O.state.spotLightMatrix,Ee.spotLightMap.value=O.state.spotLightMap,Ee.pointShadowMap.value=O.state.pointShadowMap,Ee.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=qe,W.uniformsList=null,qe}function Fa(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=dc.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Ba(b,U){const j=Ie.get(b);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.batchingColor=U.batchingColor,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.instancingMorph=U.instancingMorph,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function za(b,U,j,W,O){U.isScene!==!0&&(U=Rt),A.resetTextureUnits();const ce=U.fog,Se=W.isMeshStandardMaterial?U.environment:null,Pe=N===null?_.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:La,Ne=(W.isMeshStandardMaterial?B:w).get(W.envMap||Se),$e=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qe=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ee=!!j.morphAttributes.position,st=!!j.morphAttributes.normal,_t=!!j.morphAttributes.color;let Et=Or;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Et=_.toneMapping);const Zt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pt=Zt!==void 0?Zt.length:0,Le=Ie.get(W),Kn=u.state.lights;if(le===!0&&(ye===!0||b!==M)){const pe=b===M&&W.id===E;oe.setState(W,b,pe)}let mt=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Kn.state.version||Le.outputColorSpace!==Pe||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isBatchedMesh&&Le.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Le.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==Ne||W.fog===!0&&Le.fog!==ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==oe.numPlanes||Le.numIntersection!==oe.numIntersection)||Le.vertexAlphas!==$e||Le.vertexTangents!==qe||Le.morphTargets!==Ee||Le.morphNormals!==st||Le.morphColors!==_t||Le.toneMapping!==Et||Le.morphTargetsCount!==pt)&&(mt=!0):(mt=!0,Le.__version=W.version);let Tn=Le.currentProgram;mt===!0&&(Tn=dr(W,U,O));let Vi=!1,on=!1,$r=!1;const wt=Tn.getUniforms(),Un=Le.uniforms;if(Be.useProgram(Tn.program)&&(Vi=!0,on=!0,$r=!0),W.id!==E&&(E=W.id,on=!0),Vi||M!==b){Be.buffers.depth.getReversed()?(ue.copy(b.projectionMatrix),eE(ue),tE(ue),wt.setValue(F,"projectionMatrix",ue)):wt.setValue(F,"projectionMatrix",b.projectionMatrix),wt.setValue(F,"viewMatrix",b.matrixWorldInverse);const He=wt.map.cameraPosition;He!==void 0&&He.setValue(F,Ye.setFromMatrixPosition(b.matrixWorld)),Je.logarithmicDepthBuffer&&wt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&wt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,on=!0,$r=!0)}if(O.isSkinnedMesh){wt.setOptional(F,O,"bindMatrix"),wt.setOptional(F,O,"bindMatrixInverse");const pe=O.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),wt.setValue(F,"boneTexture",pe.boneTexture,A))}O.isBatchedMesh&&(wt.setOptional(F,O,"batchingTexture"),wt.setValue(F,"batchingTexture",O._matricesTexture,A),wt.setOptional(F,O,"batchingIdTexture"),wt.setValue(F,"batchingIdTexture",O._indirectTexture,A),wt.setOptional(F,O,"batchingColorTexture"),O._colorsTexture!==null&&wt.setValue(F,"batchingColorTexture",O._colorsTexture,A));const de=j.morphAttributes;if((de.position!==void 0||de.normal!==void 0||de.color!==void 0)&&Xe.update(O,j,Tn),(on||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,wt.setValue(F,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Un.envMap.value=Ne,Un.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Un.envMapIntensity.value=U.environmentIntensity),on&&(wt.setValue(F,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&Ha(Un,$r),ce&&W.fog===!0&&ge.refreshFogUniforms(Un,ce),ge.refreshMaterialUniforms(Un,W,I,ie,u.state.transmissionRenderTarget[b.id]),dc.upload(F,Fa(Le),Un,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(dc.upload(F,Fa(Le),Un,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&wt.setValue(F,"center",O.center),wt.setValue(F,"modelViewMatrix",O.modelViewMatrix),wt.setValue(F,"normalMatrix",O.normalMatrix),wt.setValue(F,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const pe=W.uniformsGroups;for(let He=0,fe=pe.length;He<fe;He++){const be=pe[He];L.update(be,Tn),L.bind(be,Tn)}}return Tn}function Ha(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Yn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,U,j){Ie.get(b.texture).__webglTexture=U,Ie.get(b.depthTexture).__webglTexture=j;const W=Ie.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=j===void 0,W.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const j=Ie.get(b);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,j=0){N=b,C=U,T=j;let W=!0,O=null,ce=!1,Se=!1;if(b){const Ne=Ie.get(b);if(Ne.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(F.FRAMEBUFFER,null),W=!1;else if(Ne.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Ne.__hasExternalTextures)A.rebindTextures(b,Ie.get(b.texture).__webglTexture,Ie.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ee=b.depthTexture;if(Ne.__boundDepthTexture!==Ee){if(Ee!==null&&Ie.has(Ee)&&(b.width!==Ee.image.width||b.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const $e=b.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Se=!0);const qe=Ie.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qe[U])?O=qe[U][j]:O=qe[U],ce=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?O=Ie.get(b).__webglMultisampledFramebuffer:Array.isArray(qe)?O=qe[j]:O=qe,P.copy(b.viewport),V.copy(b.scissor),H=b.scissorTest}else P.copy(he).multiplyScalar(I).floor(),V.copy(ke).multiplyScalar(I).floor(),H=ft;if(Be.bindFramebuffer(F.FRAMEBUFFER,O)&&W&&Be.drawBuffers(b,O),Be.viewport(P),Be.scissor(V),Be.setScissorTest(H),ce){const Ne=Ie.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ne.__webglTexture,j)}else if(Se){const Ne=Ie.get(b.texture),$e=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ne.__webglTexture,j||0,$e)}E=-1},this.readRenderTargetPixels=function(b,U,j,W,O,ce,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){Be.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const Ne=b.texture,$e=Ne.format,qe=Ne.type;if(!Je.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-W&&j>=0&&j<=b.height-O&&F.readPixels(U,j,W,O,G.convert($e),G.convert(qe),ce)}finally{const Ne=N!==null?Ie.get(N).__webglFramebuffer:null;Be.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(b,U,j,W,O,ce,Se){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){const Ne=b.texture,$e=Ne.format,qe=Ne.type;if(!Je.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-W&&j>=0&&j<=b.height-O){Be.bindFramebuffer(F.FRAMEBUFFER,Pe);const Ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ee),F.bufferData(F.PIXEL_PACK_BUFFER,ce.byteLength,F.STREAM_READ),F.readPixels(U,j,W,O,G.convert($e),G.convert(qe),0);const st=N!==null?Ie.get(N).__webglFramebuffer:null;Be.bindFramebuffer(F.FRAMEBUFFER,st);const _t=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await JM(F,_t,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ce),F.deleteBuffer(Ee),F.deleteSync(_t),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,j=0){b.isTexture!==!0&&(lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const W=Math.pow(2,-j),O=Math.floor(b.image.width*W),ce=Math.floor(b.image.height*W),Se=U!==null?U.x:0,Pe=U!==null?U.y:0;A.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,Se,Pe,O,ce),Be.unbindTexture()},this.copyTextureToTexture=function(b,U,j=null,W=null,O=0){b.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],U=arguments[2],O=arguments[3]||0,j=null);let ce,Se,Pe,Ne,$e,qe,Ee,st,_t;const Et=b.isCompressedTexture?b.mipmaps[O]:b.image;j!==null?(ce=j.max.x-j.min.x,Se=j.max.y-j.min.y,Pe=j.isBox3?j.max.z-j.min.z:1,Ne=j.min.x,$e=j.min.y,qe=j.isBox3?j.min.z:0):(ce=Et.width,Se=Et.height,Pe=Et.depth||1,Ne=0,$e=0,qe=0),W!==null?(Ee=W.x,st=W.y,_t=W.z):(Ee=0,st=0,_t=0);const Zt=G.convert(U.format),pt=G.convert(U.type);let Le;U.isData3DTexture?(A.setTexture3D(U,0),Le=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Le=F.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Le=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const Kn=F.getParameter(F.UNPACK_ROW_LENGTH),mt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Tn=F.getParameter(F.UNPACK_SKIP_PIXELS),Vi=F.getParameter(F.UNPACK_SKIP_ROWS),on=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Et.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),F.pixelStorei(F.UNPACK_SKIP_ROWS,$e),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qe);const $r=b.isDataArrayTexture||b.isData3DTexture,wt=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Un=Ie.get(b),de=Ie.get(U),pe=Ie.get(Un.__renderTarget),He=Ie.get(de.__renderTarget);Be.bindFramebuffer(F.READ_FRAMEBUFFER,pe.__webglFramebuffer),Be.bindFramebuffer(F.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let fe=0;fe<Pe;fe++)$r&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.get(b).__webglTexture,O,qe+fe),b.isDepthTexture?(wt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.get(U).__webglTexture,O,_t+fe),F.blitFramebuffer(Ne,$e,ce,Se,Ee,st,ce,Se,F.DEPTH_BUFFER_BIT,F.NEAREST)):wt?F.copyTexSubImage3D(Le,O,Ee,st,_t+fe,Ne,$e,ce,Se):F.copyTexSubImage2D(Le,O,Ee,st,_t+fe,Ne,$e,ce,Se);Be.bindFramebuffer(F.READ_FRAMEBUFFER,null),Be.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else wt?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Le,O,Ee,st,_t,ce,Se,Pe,Zt,pt,Et.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Le,O,Ee,st,_t,ce,Se,Pe,Zt,Et.data):F.texSubImage3D(Le,O,Ee,st,_t,ce,Se,Pe,Zt,pt,Et):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,O,Ee,st,ce,Se,Zt,pt,Et.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,O,Ee,st,Et.width,Et.height,Zt,Et.data):F.texSubImage2D(F.TEXTURE_2D,O,Ee,st,ce,Se,Zt,pt,Et);F.pixelStorei(F.UNPACK_ROW_LENGTH,Kn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Tn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Vi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,on),O===0&&U.generateMipmaps&&F.generateMipmap(Le),Be.unbindTexture()},this.copyTextureToTexture3D=function(b,U,j=null,W=null,O=0){return b.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,W=arguments[1]||null,b=arguments[2],U=arguments[3],O=arguments[4]||0),lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,j,W,O)},this.initRenderTarget=function(b){Ie.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Be.unbindTexture()},this.resetState=function(){C=0,T=0,N=null,Be.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=gt._getDrawingBufferColorSpace(e),n.unpackColorSpace=gt._getUnpackColorSpace()}}class fp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(e),this.density=n}clone(){return new fp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fC extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Hx extends Da{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bc=new k,zc=new k,k0=new Lt,no=new lp,Gl=new ou,fd=new k,I0=new k;class hC extends mn{constructor(e=new ri,n=new Hx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Bc.fromBufferAttribute(n,r-1),zc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Bc.distanceTo(zc);e.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(r),Gl.radius+=s,e.ray.intersectsSphere(Gl)===!1)return;k0.copy(r).invert(),no.copy(e.ray).applyMatrix4(k0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,p=i.attributes.position;if(d!==null){const m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let S=m,g=v-1;S<g;S+=c){const u=d.getX(S),x=d.getX(S+1),y=jl(this,e,no,l,u,x);y&&n.push(y)}if(this.isLineLoop){const S=d.getX(v-1),g=d.getX(m),u=jl(this,e,no,l,S,g);u&&n.push(u)}}else{const m=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let S=m,g=v-1;S<g;S+=c){const u=jl(this,e,no,l,S,S+1);u&&n.push(u)}if(this.isLineLoop){const S=jl(this,e,no,l,v-1,m);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jl(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Bc.fromBufferAttribute(a,r),zc.fromBufferAttribute(a,s),n.distanceSqToSegment(Bc,zc,fd,I0)>i)return;fd.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(fd);if(!(l<e.near||l>e.far))return{distance:l,point:I0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const D0=new k,U0=new k;class pC extends hC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)D0.fromBufferAttribute(n,r),U0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+D0.distanceTo(U0);e.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ur{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const d=i[r],p=i[r+1]-d,m=(a-d)/p;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new We:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new k,r=[],s=[],a=[],o=new k,l=new Lt;for(let m=0;m<=e;m++){const v=m/e;r[m]=this.getTangentAt(v,new k)}s[0]=new k,a[0]=new k;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),p<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(tn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,v))}a[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(tn(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],m*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vx extends ur{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new We){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*d-m*h+this.aX,c=p*h+m*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mC extends Vx{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function hp(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,d,h){let p=(a-s)/c-(o-s)/(c+d)+(o-a)/d,m=(o-a)/d-(l-a)/(d+h)+(l-o)/h;p*=d,m*=d,r(a,o,p,m)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const Wl=new k,hd=new hp,pd=new hp,md=new hp;class Gx extends ur{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new k){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,d;this.closed||o>0?c=r[(o-1)%s]:(Wl.subVectors(r[0],r[1]).add(r[0]),c=Wl);const h=r[o%s],p=r[(o+1)%s];if(this.closed||o+2<s?d=r[(o+2)%s]:(Wl.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Wl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),m),S=Math.pow(h.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(d),m);S<1e-4&&(S=1),v<1e-4&&(v=S),g<1e-4&&(g=S),hd.initNonuniformCatmullRom(c.x,h.x,p.x,d.x,v,S,g),pd.initNonuniformCatmullRom(c.y,h.y,p.y,d.y,v,S,g),md.initNonuniformCatmullRom(c.z,h.z,p.z,d.z,v,S,g)}else this.curveType==="catmullrom"&&(hd.initCatmullRom(c.x,h.x,p.x,d.x,this.tension),pd.initCatmullRom(c.y,h.y,p.y,d.y,this.tension),md.initCatmullRom(c.z,h.z,p.z,d.z,this.tension));return i.set(hd.calc(l),pd.calc(l),md.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function O0(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*t+n}function gC(t,e){const n=1-t;return n*n*e}function vC(t,e){return 2*(1-t)*t*e}function xC(t,e){return t*t*e}function wo(t,e,n,i){return gC(t,e)+vC(t,n)+xC(t,i)}function _C(t,e){const n=1-t;return n*n*n*e}function yC(t,e){const n=1-t;return 3*n*n*t*e}function SC(t,e){return 3*(1-t)*t*t*e}function MC(t,e){return t*t*t*e}function bo(t,e,n,i,r){return _C(t,e)+yC(t,n)+SC(t,i)+MC(t,r)}class EC extends ur{constructor(e=new We,n=new We,i=new We,r=new We){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new We){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(bo(e,r.x,s.x,a.x,o.x),bo(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wC extends ur{constructor(e=new k,n=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(bo(e,r.x,s.x,a.x,o.x),bo(e,r.y,s.y,a.y,o.y),bo(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bC extends ur{constructor(e=new We,n=new We){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new We){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new We){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class TC extends ur{constructor(e=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new k){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class CC extends ur{constructor(e=new We,n=new We,i=new We){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new We){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(wo(e,r.x,s.x,a.x),wo(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jx extends ur{constructor(e=new k,n=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(wo(e,r.x,s.x,a.x),wo(e,r.y,s.y,a.y),wo(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class AC extends ur{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new We){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],d=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(O0(o,l.x,c.x,d.x,h.x),O0(o,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new We().fromArray(r))}return this}}var RC=Object.freeze({__proto__:null,ArcCurve:mC,CatmullRomCurve3:Gx,CubicBezierCurve:EC,CubicBezierCurve3:wC,EllipseCurve:Vx,LineCurve:bC,LineCurve3:TC,QuadraticBezierCurve:CC,QuadraticBezierCurve3:jx,SplineCurve:AC});class Hc extends ri{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],p=[],m=[];let v=0;const S=[],g=i/2;let u=0;x(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(p,3)),this.setAttribute("uv",new jt(m,2));function x(){const _=new k,R=new k;let C=0;const T=(n-e)/i;for(let N=0;N<=s;N++){const E=[],M=N/s,P=M*(n-e)+e;for(let V=0;V<=r;V++){const H=V/r,Y=H*l+o,ee=Math.sin(Y),q=Math.cos(Y);R.x=P*ee,R.y=-M*i+g,R.z=P*q,h.push(R.x,R.y,R.z),_.set(ee,T,q).normalize(),p.push(_.x,_.y,_.z),m.push(H,1-M),E.push(v++)}S.push(E)}for(let N=0;N<r;N++)for(let E=0;E<s;E++){const M=S[E][N],P=S[E+1][N],V=S[E+1][N+1],H=S[E][N+1];(e>0||E!==0)&&(d.push(M,P,H),C+=3),(n>0||E!==s-1)&&(d.push(P,V,H),C+=3)}c.addGroup(u,C,0),u+=C}function y(_){const R=v,C=new We,T=new k;let N=0;const E=_===!0?e:n,M=_===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,g*M,0),p.push(0,M,0),m.push(.5,.5),v++;const P=v;for(let V=0;V<=r;V++){const Y=V/r*l+o,ee=Math.cos(Y),q=Math.sin(Y);T.x=E*q,T.y=g*M,T.z=E*ee,h.push(T.x,T.y,T.z),p.push(0,M,0),C.x=ee*.5+.5,C.y=q*.5*M+.5,m.push(C.x,C.y),v++}for(let V=0;V<r;V++){const H=R+V,Y=P+V;_===!0?d.push(Y,Y+1,H):d.push(Y+1,Y,H),N+=3}c.addGroup(u,N,_===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hi extends ri{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new k,p=new k,m=[],v=[],S=[],g=[];for(let u=0;u<=i;u++){const x=[],y=u/i;let _=0;u===0&&a===0?_=.5/n:u===i&&l===Math.PI&&(_=-.5/n);for(let R=0;R<=n;R++){const C=R/n;h.x=-e*Math.cos(r+C*s)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(r+C*s)*Math.sin(a+y*o),v.push(h.x,h.y,h.z),p.copy(h).normalize(),S.push(p.x,p.y,p.z),g.push(C+_,1-y),x.push(c++)}d.push(x)}for(let u=0;u<i;u++)for(let x=0;x<n;x++){const y=d[u][x+1],_=d[u][x],R=d[u+1][x],C=d[u+1][x+1];(u!==0||a>0)&&m.push(y,_,C),(u!==i-1||l<Math.PI)&&m.push(_,R,C)}this.setIndex(m),this.setAttribute("position",new jt(v,3)),this.setAttribute("normal",new jt(S,3)),this.setAttribute("uv",new jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pp extends ri{constructor(e=new jx(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new k,l=new k,c=new We;let d=new k;const h=[],p=[],m=[],v=[];S(),this.setIndex(v),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(p,3)),this.setAttribute("uv",new jt(m,2));function S(){for(let y=0;y<n;y++)g(y);g(s===!1?n:0),x(),u()}function g(y){d=e.getPointAt(y/n,d);const _=a.normals[y],R=a.binormals[y];for(let C=0;C<=r;C++){const T=C/r*Math.PI*2,N=Math.sin(T),E=-Math.cos(T);l.x=E*_.x+N*R.x,l.y=E*_.y+N*R.y,l.z=E*_.z+N*R.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=d.x+i*l.x,o.y=d.y+i*l.y,o.z=d.z+i*l.z,h.push(o.x,o.y,o.z)}}function u(){for(let y=1;y<=n;y++)for(let _=1;_<=r;_++){const R=(r+1)*(y-1)+(_-1),C=(r+1)*y+(_-1),T=(r+1)*y+_,N=(r+1)*(y-1)+_;v.push(R,C,N),v.push(C,T,N)}}function x(){for(let y=0;y<=n;y++)for(let _=0;_<=r;_++)c.x=y/n,c.y=_/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new pp(new RC[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ze extends Da{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wx,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mp extends mn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class NC extends mp{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const gd=new Lt,F0=new k,B0=new k;class PC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new up,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;F0.setFromMatrixPosition(e.matrixWorld),n.position.copy(F0),B0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(B0),n.updateMatrixWorld(),gd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const z0=new Lt,io=new k,vd=new k;class LC extends PC{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),io.setFromMatrixPosition(e.matrixWorld),i.position.copy(io),vd.copy(i.position),vd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(vd),i.updateMatrixWorld(),r.makeTranslation(-io.x,-io.y,-io.z),z0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(z0)}}class $l extends mp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new LC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kC extends mp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class IC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=H0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=H0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function H0(){return performance.now()}const V0=new Lt;class DC{constructor(e,n,i=0,r=1/0){this.ray=new lp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new cp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return V0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(V0),this}intersectObject(e,n=!0,i=[]){return nh(e,this,i,n),i.sort(G0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)nh(e[r],this,i,n);return i.sort(G0),i}}function G0(t,e){return t.distance-e.distance}function nh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)nh(s[a],e,n,!0)}}class UC{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class OC extends pC{constructor(e=10,n=10,i=4473924,r=8947848){i=new ct(i),r=new ct(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let p=0,m=0,v=-o;p<=n;p++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const S=p===s?i:r;S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3}const d=new ri;d.setAttribute("position",new jt(l,3)),d.setAttribute("color",new jt(c,3));const h=new Hx({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ep}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ep);class FC{constructor(){Ge(this,"ctx",null);Ge(this,"enabled",!0)}initCtx(){if(!this.enabled)return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}playKeyClick(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.createOscillator(),i=e.createGain(),r=e.currentTime;n.type="triangle",n.frequency.setValueAtTime(1400+Math.random()*300,r),n.frequency.exponentialRampToValueAtTime(120,r+.02),i.gain.setValueAtTime(.04,r),i.gain.exponentialRampToValueAtTime(1e-4,r+.02),n.connect(i),i.connect(e.destination),n.start(r),n.stop(r+.02)}catch{}}playCableSnap(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="square",i.frequency.setValueAtTime(600,n),i.frequency.exponentialRampToValueAtTime(80,n+.04),r.gain.setValueAtTime(.12,n),r.gain.exponentialRampToValueAtTime(.001,n+.05),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.05)}catch{}}playSuccessBeep(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((r,s)=>{const a=e.createOscillator(),o=e.createGain(),l=n+s*.08;a.type="sine",a.frequency.setValueAtTime(r,l),o.gain.setValueAtTime(.08,l),o.gain.exponentialRampToValueAtTime(.001,l+.25),a.connect(o),o.connect(e.destination),a.start(l),a.stop(l+.25)})}catch{}}playErrorBeep(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sawtooth",i.frequency.setValueAtTime(150,n),i.frequency.setValueAtTime(120,n+.08),r.gain.setValueAtTime(.1,n),r.gain.exponentialRampToValueAtTime(.001,n+.18),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.18)}catch{}}playRailSlide(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="triangle",i.frequency.setValueAtTime(180,n),i.frequency.linearRampToValueAtTime(320,n+.15),i.frequency.exponentialRampToValueAtTime(90,n+.35),r.gain.setValueAtTime(.06,n),r.gain.linearRampToValueAtTime(.08,n+.12),r.gain.exponentialRampToValueAtTime(1e-4,n+.35),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.35)}catch{}}playLatchClick(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="square",i.frequency.setValueAtTime(950,n),i.frequency.exponentialRampToValueAtTime(140,n+.04),r.gain.setValueAtTime(.08,n),r.gain.exponentialRampToValueAtTime(.001,n+.04),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.04)}catch{}}playSwitchClick(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="triangle",i.frequency.setValueAtTime(340,n),i.frequency.exponentialRampToValueAtTime(80,n+.035),r.gain.setValueAtTime(.12,n),r.gain.exponentialRampToValueAtTime(.001,n+.04),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.04)}catch{}}playFanSpool(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",i.frequency.setValueAtTime(180,n),i.frequency.linearRampToValueAtTime(540,n+.4),i.frequency.exponentialRampToValueAtTime(220,n+.8),r.gain.setValueAtTime(.02,n),r.gain.linearRampToValueAtTime(.05,n+.3),r.gain.exponentialRampToValueAtTime(.001,n+.8),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.8)}catch{}}}const Fe=new FC;/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function zC(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:BC(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=t=>{const e=HC(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function xd(t){return t!=null}function GC(t,e={}){var p,m;const n=e.attributeNames??{},i=v=>n[v]??v,r=t.size??t.width??Jr.width,s=t.size??t.height??Jr.height,a=((p=t.aliases)==null?void 0:p.filter(v=>typeof v=="string"&&v.trim()!=="").map(v=>`lucide-${v}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],l=((m=e.className)==null?void 0:m.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?ih(...l):ih("lucide",...o,...l),d=e.absoluteStrokeWidth?Number(e.strokeWidth??Jr["stroke-width"])*Number(t.size??t.width??Jr.width)/Number(e.size??e.width??Jr.width):e.strokeWidth??Jr["stroke-width"];return["svg",{...Object.entries(Jr).reduce((v,[S,g])=>(v[i(S)]=g,v),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&xd(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&xd(e.width)&&{[i("width")]:e.width},..."height"in e&&xd(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:d,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(v=>{const[S,g,u]=v,x=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...g}:g;return u?[S,x,u]:[S,x]})]}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function jC(t,e={}){return GC(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},$C=se.createContext({}),XC=()=>se.useContext($C),qC=se.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:c=[],icon:d={node:c,aliases:[],size:24},...h},p)=>{const{size:m=24,strokeWidth:v=2,absoluteStrokeWidth:S=!1,nonScalingStroke:g=!1,color:u="currentColor",className:x=""}=XC()??{},y=!!l||WC(h),[_,R,C=[]]=jC(d,{color:t??u,width:n??e??m,height:i??e??m,strokeWidth:r??v,absoluteStrokeWidth:s??S,nonScalingStroke:a??g,className:ih(x,o),hasA11yProp:y,attributes:h});return se.createElement(_,{ref:p,...R},[...C.map(([T,N])=>se.createElement(T,N)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function je(t,e=[],n=[]){const i=typeof t=="string"?zC(t,e,n):t,r=se.forwardRef(({className:s,...a},o)=>se.createElement(qC,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=VC(i.name)),r}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Wx.node;const YC=je(Wx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};$x.node;const j0=je($x);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};Xx.node;const rh=je(Xx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx={name:"cable",size:24,node:[["path",{d:"M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z",key:"trhst0"}],["path",{d:"M17 21v-2",key:"ds4u3f"}],["path",{d:"M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10",key:"1mo9zo"}],["path",{d:"M21 21v-2",key:"eo0ou"}],["path",{d:"M3 5V3",key:"1k5hjh"}],["path",{d:"M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z",key:"1dd30t"}],["path",{d:"M7 5V3",key:"1t1388"}]]};qx.node;const sh=je(qx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};Yx.node;const W0=je(Yx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Kx.node;const Zx=je(Kx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};Qx.node;const Jx=je(Qx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};e_.node;const KC=je(e_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};t_.node;const ZC=je(t_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};n_.node;const i_=je(n_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};r_.node;const QC=je(r_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};s_.node;const ms=je(s_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};a_.node;const $0=je(a_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_={name:"circle",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]};o_.node;const l_=je(o_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};c_.node;const cu=je(c_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};u_.node;const JC=je(u_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};d_.node;const X0=je(d_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_={name:"earth",size:24,node:[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["globe-2"]};f_.node;const q0=je(f_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};h_.node;const eA=je(h_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_={name:"file-code",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]]};p_.node;const Y0=je(p_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};m_.node;const Aa=je(m_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_={name:"folder-open",size:24,node:[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]};g_.node;const tA=je(g_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_={name:"hard-drive",size:24,node:[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]]};v_.node;const nA=je(v_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};x_.node;const _d=je(x_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __={name:"keyboard",size:24,node:[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]};__.node;const iA=je(__);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};y_.node;const S_=je(y_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};M_.node;const gp=je(M_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};E_.node;const Vc=je(E_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};w_.node;const b_=je(w_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};T_.node;const rA=je(T_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};C_.node;const sA=je(C_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};A_.node;const aA=je(A_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_={name:"power",size:24,node:[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]};R_.node;const oA=je(R_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};N_.node;const lA=je(N_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};P_.node;const L_=je(P_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};k_.node;const cA=je(k_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};I_.node;const uA=je(I_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};D_.node;const dA=je(D_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};U_.node;const fA=je(U_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_={name:"shield-alert",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]};O_.node;const hA=je(O_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};F_.node;const B_=je(F_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};z_.node;const pA=je(z_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]};H_.node;const mA=je(H_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};V_.node;const gA=je(V_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};G_.node;const vA=je(G_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};j_.node;const Wo=je(j_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};W_.node;const fc=je(W_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};$_.node;const X_=je($_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};q_.node;const Y_=je(q_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_={name:"wind",size:24,node:[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]};K_.node;const xA=je(K_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Z_.node;const el=je(Z_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Q_.node;const _A=je(Q_),Xl=[{id:"blue",label:"Cat6 Blue",role:"General LAN / Access",hex:2450411,css:"#2563eb"},{id:"cyan",label:"Aqua Cyan",role:"802.1Q Trunk / Uplink",hex:440020,css:"#06b6d4"},{id:"amber",label:"Amber Gold",role:"Workstation / Sales VLAN 20",hex:16096779,css:"#f59e0b"},{id:"green",label:"Emerald",role:"Default Gateway / Core",hex:1096065,css:"#10b981"},{id:"red",label:"Crimson Red",role:"Firewall / DMZ Security",hex:15680580,css:"#ef4444"},{id:"purple",label:"SOC Purple",role:"SPAN / IDS Tap Sensor",hex:11032055,css:"#a855f7"},{id:"orange",label:"Fiber Orange",role:"SAN Storage Array",hex:15357964,css:"#ea580c"},{id:"slate",label:"Stealth Slate",role:"Out-of-Band / IPMI Mgmt",hex:4674921,css:"#475569"},{id:"yellow",label:"High-Vis Yellow",role:"Restricted / Audit Zone",hex:15381256,css:"#eab308"},{id:"white",label:"Polar White",role:"Inter-Rack Backbone Tie",hex:16317180,css:"#f8fafc"}],es=[{id:"KVM1",name:"1U Master Rack Console (KVM Drawer)",rack:"Rack A",slot:1,uHeight:1,y:2.62,zBase:0,color:988970,canSlide:!0,canTerminal:!1,model:"kvm_1u",specs:'17" TFT 1080p Fold-Up LCD • 104-Key Chiclet Keyboard • USB/VGA Hub',isKvm:!0},{id:"BRUSH_A",name:"1U Cable Management Duct",rack:"Rack A",slot:2,uHeight:1,y:2.44,zBase:0,color:988970,canSlide:!1,canTerminal:!1,model:"duct_1u",specs:"Horizontal high-density nylon brush passthrough with strain relief"},{id:"R1",name:"Router R1 (Cisco 2901 ISR)",rack:"Rack A",slot:3,uHeight:1,y:2.22,zBase:0,color:165063,canSlide:!0,canTerminal:!0,model:"router_2port",specs:"Cisco 2901 Integrated Services Router • 2x GigabitEthernet • Cisco IOS 15.1"},{id:"PATCH_A",name:"1U 24-Port Cat6 Patch Bay",rack:"Rack A",slot:4,uHeight:1,y:2.02,zBase:0,color:1976635,canSlide:!1,canTerminal:!1,model:"patch_24",specs:"24-Port RJ45 Cat6 TIA-568A/B Unshielded 110 Punchdown Bay"},{id:"FIBER_A",name:"1U OM4 LC Duplex Fiber Enclosure",rack:"Rack A",slot:5,uHeight:1,y:1.86,zBase:0,color:536393,canSlide:!1,canTerminal:!1,model:"fiber_1u",specs:"12x LC Duplex Aqua Couplers • 50/125µm Multimode 100G Trunking"},{id:"S1",name:"Switch S1 (Cisco Catalyst 2960)",rack:"Rack A",slot:6,uHeight:1,y:1.68,zBase:0,color:3359061,canSlide:!0,canTerminal:!0,model:"switch_24",specs:"Cisco Catalyst 2960-24TT • 24x 10/100 + 2x 1000BASE-T • 802.1Q Trunking"},{id:"WEB1",name:"Server WEB1 (PowerEdge R640)",rack:"Rack A",slot:7,uHeight:1,y:1.48,zBase:0,color:1976635,canSlide:!0,canTerminal:!0,model:"server",specs:"Dell PowerEdge R640 1U • 2x Intel Xeon Silver • 64GB DDR4 • Apache/PHP",driveCount:8},{id:"HSM1",name:"Hardware Security Module (HSM-100)",rack:"Rack A",slot:8,uHeight:1,y:1.32,zBase:0,color:7346805,canSlide:!0,canTerminal:!1,model:"hsm_1u",specs:"FIPS 140-2 Level 4 Crypto Processor • Zeroized Tamper Grid • OLED Screen"},{id:"DB1",name:"Server DB1 (Database Array)",rack:"Rack A",slot:9,uHeight:2,y:1.1,zBase:0,color:1120295,canSlide:!0,canTerminal:!1,model:"server_2u",specs:"2U Storage Server • 12x 3.84TB SAS SSD • Hardware RAID 10 • MySQL Core",driveCount:12},{id:"FW1",name:"Firewall FW1 (Next-Gen Appliance)",rack:"Rack A",slot:11,uHeight:1,y:.82,zBase:0,color:10033947,canSlide:!0,canTerminal:!1,model:"firewall_1u",specs:"Enterprise State-Inspection Firewall • Deep Packet Inspection • IPS Engine"},{id:"ENV1",name:"Rack Environmental & Thermal Monitor",rack:"Rack A",slot:12,uHeight:1,y:.66,zBase:0,color:413243,canSlide:!1,canTerminal:!1,model:"env_1u",specs:"Dual Temp & Humidity Sensors (21.4°C / 42% RH) • 320 CFM Airflow Mon"},{id:"PDU1",name:"Smart Rack PDU & UPS Battery",rack:"Rack A",slot:13,uHeight:2,y:.4,zBase:0,color:988970,canSlide:!1,canTerminal:!1,model:"ups_2u",specs:"APC Smart-UPS On-Line 3000VA • Dual Inverter • 208V/120V Pure Sine"},{id:"BRUSH_B",name:"1U Cable Management Duct B",rack:"Rack B",slot:1,uHeight:1,y:2.62,zBase:-1.4,color:988970,canSlide:!1,canTerminal:!1,model:"duct_1u",specs:"Rack B Top-of-rack horizontal cable management duct"},{id:"R2",name:"Core Router R2 (Gateway B)",rack:"Rack B",slot:2,uHeight:1,y:2.38,zBase:-1.4,color:165063,canSlide:!0,canTerminal:!1,model:"router_2port",specs:"Redundant Core Edge Router • Dual 10G SFP+ Uplinks • BGP Peering"},{id:"PATCH_B",name:"1U Cat6A Shielded Patch Bay",rack:"Rack B",slot:3,uHeight:1,y:2.16,zBase:-1.4,color:1976635,canSlide:!1,canTerminal:!1,model:"patch_24",specs:"24-Port STP Shielded Cat6A Patch Panel • 10GbE Certified"},{id:"S2",name:"Distribution Switch S2",rack:"Rack B",slot:4,uHeight:1,y:1.94,zBase:-1.4,color:3359061,canSlide:!0,canTerminal:!1,model:"switch_24",specs:"Catalyst 3850 24-Port Stackable Distribution Switch • Multigigabit"},{id:"FIBER_B",name:"1U MPO/MTP High-Density Cassette",rack:"Rack B",slot:5,uHeight:1,y:1.76,zBase:-1.4,color:536393,canSlide:!1,canTerminal:!1,model:"fiber_1u",specs:"24-Fiber MPO to LC Breakout Module • Low Insertion Loss"},{id:"SAN1",name:"SAN Storage Array (Enterprise Vault)",rack:"Rack B",slot:6,uHeight:2,y:1.52,zBase:-1.4,color:1976635,canSlide:!0,canTerminal:!1,model:"storage_2u",specs:"12-Bay Fibre Channel / iSCSI SAN Storage Array • 192TB RAW",driveCount:12},{id:"SAN_EXP",name:"SAN High-Density Expansion Shelf",rack:"Rack B",slot:8,uHeight:2,y:1.2,zBase:-1.4,color:1120295,canSlide:!0,canTerminal:!1,model:"storage_2u",specs:"12-Bay JBOD Expansion Enclosure • 12Gb/s SAS-3 Interconnect",driveCount:12},{id:"IDS1",name:"Security Sensor IDS1 (Suricata/Zeek)",rack:"Rack B",slot:10,uHeight:1,y:.94,zBase:-1.4,color:8266446,canSlide:!0,canTerminal:!1,model:"sensor_1u",specs:"Full-Packet Capture & Network Intrusion Detection Appliance • Tap Interface"},{id:"APP2",name:"Secondary Compute Node APP2",rack:"Rack B",slot:11,uHeight:2,y:.68,zBase:-1.4,color:1120295,canSlide:!0,canTerminal:!1,model:"server_2u",specs:"Kubernetes Worker Node 02 • High-Memory 128GB • Docker Container Host",driveCount:8},{id:"UPS2",name:"Backup Battery Array UPS2",rack:"Rack B",slot:13,uHeight:2,y:.36,zBase:-1.4,color:988970,canSlide:!1,canTerminal:!1,model:"ups_2u",specs:"Redundant Power Distribution Unit • Phase Balanced • ATS Failover"}],yA=({sim:t,onOpenTerminal:e,selectedPort:n,onSelectPort:i,onOpenThreatMap:r})=>{const s=se.useRef(null),[a,o]=se.useState(null),[l,c]=se.useState(null),[d,h]=se.useState("R1"),[p,m]=se.useState(["WEB1"]),[v,S]=se.useState(null),[g,u]=se.useState({WEB1:[2]}),[x,y]=se.useState(["WEB1"]),[_,R]=se.useState([]),[C,T]=se.useState(!1),[N,E]=se.useState(!0),[M,P]=se.useState(0),[V,H]=se.useState("#2563eb"),[Y,ee]=se.useState({}),[q,ie]=se.useState(.28),[I,Z]=se.useState(!0),[K,he]=se.useState(null),[ke,ft]=se.useState("#00e5ff"),[X,le]=se.useState(!1),[ye,ue]=se.useState("chassis"),[Oe,Ye]=se.useState(!1),tt=se.useRef(!1),Rt=se.useRef(new Map),lt=se.useRef(new Map),Dt=se.useRef(null),F=se.useRef(null),bn=se.useRef(null),rt=se.useRef([]),Je=se.useRef([]),Be=se.useRef([]),At=se.useRef(new Map),Ie=se.useRef([]),A=se.useRef({pos:new k(0,3.2,5),lookAt:new k(0,1.2,0)}),w=se.useCallback(D=>{S(D),setTimeout(()=>{S(G=>G===D?null:G)},3500)},[]),B=D=>{Fe.playKeyClick(),D==="overview"?A.current={pos:new k(0,3.6,5.5),lookAt:new k(0,1.2,0)}:D==="rack_a"?A.current={pos:new k(-1.1,1.8,1.5),lookAt:new k(-1.8,1.5,0)}:D==="rack_b"?A.current={pos:new k(-1.1,1.8,-.1),lookAt:new k(-1.8,1.5,-1.4)}:D==="kvm"?A.current={pos:new k(-1.4,2.75,.95),lookAt:new k(-1.8,2.62,.45)}:D==="desk_1"?A.current={pos:new k(1.2,1.4,2),lookAt:new k(1.6,1,1.2)}:D==="desk_2"?A.current={pos:new k(1.2,1.4,-.8),lookAt:new k(1.6,1,-1.6)}:D==="soc"&&(A.current={pos:new k(0,2.2,1.8),lookAt:new k(0,2.2,-2.9)})},te=D=>{Fe.playRailSlide(),m(G=>{const Me=G.includes(D),L=Me?G.filter(ne=>ne!==D):[...G,D];return w(Me?`Retracted ${D} into rack rails.`:`Slid out ${D} chassis on telescopic rails.`),L})},re=D=>{Fe.playLatchClick(),y(G=>{const Me=G.includes(D),L=Me?G.filter(ne=>ne!==D):[...G,D];return w(Me?`Attached top cover lid to ${D}.`:`Removed top lid from ${D} (motherboard exposed).`),L})},Q=D=>{Fe.playSwitchClick(),R(G=>{const Me=G.includes(D),L=Me?G.filter(ne=>ne!==D):[...G,D];return w(Me?`Powering UP ${D} (POST boot sequence initiated).`:`Powering DOWN ${D} (Standby mode).`),L})},De=(D,G)=>{Fe.playLatchClick(),u(Me=>{const L=Me[D]||[],ne=L.includes(G),z=ne?L.filter($=>$!==G):[...L,G];return w(ne?`Latched SAS Drive #${G+1} into ${D} backplane.`:`⚠️ Unlatched & ejected SAS Drive #${G+1} from ${D} tray.`),{...Me,[D]:z}})},ge=se.useCallback(()=>{const D=Dt.current;if(D){for(const G of Je.current)D.remove(G.mesh),G.mesh.geometry.dispose(),Array.isArray(G.mesh.material)?G.mesh.material.forEach(Me=>Me.dispose()):G.mesh.material.dispose();Je.current=[];for(const G of Be.current)D.remove(G.mesh),G.mesh.geometry.dispose(),G.mesh.material.dispose();Be.current=[],Ie.current=Ie.current.filter(G=>G.type!=="cable");for(const G of t.links){const Me=rt.current.find(si=>si.portId===G.a),L=rt.current.find(si=>si.portId===G.b);if(!Me||!L)continue;const ne=Me.position.clone(),z=L.position.clone(),$=ne.clone().lerp(z,.5),xe=ne.distanceTo(z);$.y-=Math.min(.85,xe*q);const me=new Gx([ne,$,z]),ze=`${G.a}-${G.b}`,Mt=`${G.b}-${G.a}`,Nt=K===ze||K===Mt;let nt=Y[ze]||Y[Mt];nt||(G.a.includes("Gi0/1")||G.b.includes("Gi0/1")?nt=440020:G.a.includes("PC-B")||G.b.includes("PC-B")?nt=16096779:G.a.includes("PC-A")||G.b.includes("PC-A")||G.a.includes("SOC")||G.b.includes("SOC")?nt=2450411:nt=1096065);const vn=new pp(me,38,Nt?.026:.019,8,!1),xn=new Ze({color:nt,roughness:Nt?.2:.35,metalness:Nt?.4:.2,emissive:Nt?nt:0,emissiveIntensity:Nt?.35:0}),wi=new we(vn,xn);if(wi.castShadow=!0,D.add(wi),Je.current.push({mesh:wi,linkKey:ze,curve:me}),Ie.current.push({id:ze,mesh:wi,type:"cable",meta:{link:G,hex:nt}}),I){const si=new hi(.026,8,8),qn=new fi({color:Nt?16777215:8246268}),Hi=new we(si,qn);D.add(Hi),Be.current.push({mesh:Hi,curve:me,progress:Math.random(),speed:.35+Math.random()*.2})}}for(const G of rt.current){if(!G.ledMesh)continue;const[Me,L]=G.portId.split(":"),ne=t.devices.get(Me),z=ne==null?void 0:ne.getInterface(L),$=G.ledMesh.material;G.isReserved?($.color.setHex(15381256),$.emissive.setHex(7421714)):z!=null&&z.peer?z.adminUp?z.operUp?($.color.setHex(2278750),$.emissive.setHex(1483594)):($.color.setHex(16096779),$.emissive.setHex(11817737)):($.color.setHex(16096779),$.emissive.setHex(14251782)):($.color.setHex(1976635),$.emissive.setHex(0))}}},[t,Y,q,I,K]);se.useEffect(()=>{ge()},[t.links,Y,q,I,K,ge]);const Te=D=>{Fe.playKeyClick();const G={};for(const Me of t.links)G[`${Me.a}-${Me.b}`]=D;ee(G),w("Applied color to all Cat6 network cables in the room.")},ht=()=>{Fe.playSuccessBeep();const D={};for(const G of t.links){const Me=`${G.a}-${G.b}`;G.a.includes("Gi0/1")||G.b.includes("Gi0/1")?D[Me]=440020:G.a.includes("PC-B")||G.b.includes("PC-B")||G.a.includes("Fa0/2")||G.b.includes("Fa0/2")?D[Me]=16096779:G.a.includes("PC-A")||G.b.includes("PC-A")||G.a.includes("Fa0/1")||G.b.includes("Fa0/1")?D[Me]=2450411:G.a.includes("WEB")||G.b.includes("WEB")?D[Me]=1096065:D[Me]=2450411}ee(D),w("Color-coded all cables conforming to ANSI/TIA-606-C VLAN standards!")},oe=D=>{K&&(Fe.playKeyClick(),ee(G=>({...G,[K]:D})),w(`Updated color for cable ${K}`))};se.useEffect(()=>{const D=s.current;if(!D)return;const G=D.clientWidth,Me=D.clientHeight,L=new fC;L.background=new ct(395537),L.fog=new fp(395537,.075),Dt.current=L;const ne=new Vn(46,G/Me,.1,100);ne.position.set(0,3.6,5.5),ne.lookAt(0,1.2,0),F.current=ne;const z=new dC({antialias:!0,alpha:!1});z.setSize(G,Me),z.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.outputColorSpace=Hn,z.toneMapping=fx,z.toneMappingExposure=1.15,z.shadowMap.enabled=!0,z.shadowMap.type=ux,D.appendChild(z.domElement),bn.current=z;const $=new kC(2766408,1.6);L.add($);const xe=new NC(3718648,988970,1.3);L.add(xe);const me=new $l(14742270,3.2,16);me.position.set(-1.8,3.5,.2),me.castShadow=!0,L.add(me);const ze=new $l(12248829,2.6,16);ze.position.set(-1.8,3.5,-1.4),ze.castShadow=!0,L.add(ze);const Mt=new $l(9684477,2.2,16);Mt.position.set(1.5,3.4,0),L.add(Mt);const Nt=new $l(165063,3.8,8);Nt.position.set(0,2.4,-2.85),L.add(Nt);const nt=new gi(16,16),vn=new Ze({color:725280,roughness:.28,metalness:.65}),xn=new we(nt,vn);xn.rotation.x=-Math.PI/2,xn.receiveShadow=!0,L.add(xn);const wi=new OC(16,32,1976635,988970);wi.position.y=.005,L.add(wi);const si=new Ze({color:527640,roughness:.85}),qn=new we(new Ke(16,5,.2),si);qn.position.set(0,2.5,-3.2),L.add(qn);const Hi=new we(new Ke(.2,5,16),si);Hi.position.set(-5,2.5,0),L.add(Hi);const bs=new we(new gi(16,16),new Ze({color:329485,roughness:.9}));bs.position.y=4.2,bs.rotation.x=Math.PI/2,L.add(bs);for(const de of[-1.6,.2,1.8]){const pe=new we(new Ke(1.2,.05,2),new fi({color:16317180}));pe.position.set(-1.8,4.18,de),L.add(pe);const He=new we(new Ke(1.2,.05,2),new fi({color:16317180}));He.position.set(1.5,4.18,de),L.add(He)}const tl=new Ze({color:15381256,metalness:.7,roughness:.4}),Wr=new we(new Ke(.6,.04,5),tl);Wr.position.set(-1.8,3.1,-.6),L.add(Wr);const Oa=new we(new Ke(3.8,2,.1),new Ze({color:1976635,metalness:.8}));Oa.position.set(0,2.4,-3.08),L.add(Oa);const dr=new we(new gi(3.6,1.8),new fi({color:165063}));dr.position.set(0,2.4,-3.02),L.add(dr);const Fa=(de,pe,He)=>{const fe=new Cr;fe.position.set(de,0,pe);const be=new Ze({color:1976635,metalness:.8,roughness:.25}),dt=new Ke(.08,2.95,.08);for(const[Ti,Ci]of[[-.48,-.48],[.48,-.48],[-.48,.48],[.48,.48]]){const An=new we(dt,be);An.position.set(Ti,1.47,Ci),An.castShadow=!0,fe.add(An)}const xt=new Ze({color:4674921,metalness:.9,roughness:.2}),bt=new Ke(.04,2.8,.04);for(const Ti of[-.42,.42]){const Ci=new we(bt,xt);Ci.position.set(Ti,1.47,.38),fe.add(Ci);const An=new we(bt,xt);An.position.set(Ti,1.47,-.38),fe.add(An)}const yt=new Ze({color:988970,metalness:.7,roughness:.3}),Ue=new we(new Ke(1.08,.08,1.08),yt);Ue.position.set(0,2.92,0),fe.add(Ue);const Ve=new we(new Ke(1.08,.08,1.08),yt);Ve.position.set(0,.04,0),fe.add(Ve);const Wt=new Ze({color:593174,roughness:.8,wireframe:!0}),Cn=new we(new Ke(.02,2.75,.98),Wt);Cn.position.set(-.49,1.47,0),fe.add(Cn);const bi=new we(new Ke(.02,2.75,.98),Wt);return bi.position.set(.49,1.47,0),fe.add(bi),L.add(fe),fe};Fa(-1.8,0),Fa(-1.8,-1.4);const Ba=(de,pe,He)=>{const fe=new Cr;fe.position.set(de,0,pe);const be=new we(new Ke(1.4,.06,.9),new Ze({color:3359061,roughness:.45}));be.position.set(0,.8,0),fe.add(be);const dt=new Ze({color:1976635,metalness:.7});for(const[Wt,Cn]of[[-.62,-.38],[.62,-.38],[-.62,.38],[.62,.38]]){const bi=new we(new Ke(.06,.8,.06),dt);bi.position.set(Wt,.4,Cn),fe.add(bi)}const xt=new we(new Ke(.16,.25,.16),dt);xt.position.set(0,.93,-.15),fe.add(xt);const bt=new we(new Ke(.7,.45,.05),dt);bt.position.set(0,1.15,-.15),fe.add(bt);const yt=new we(new gi(.64,.39),new fi({color:1096065}));yt.position.set(0,1.15,-.12),fe.add(yt);const Ue=new we(new Ke(.42,.02,.14),new Ze({color:988970}));Ue.position.set(0,.83,.15),fe.add(Ue);const Ve=new we(new Ke(.22,.46,.48),new Ze({color:988970,roughness:.4}));return Ve.position.set(.5,.45,0),fe.add(Ve),L.add(fe),{deskGroup:fe,tower:Ve,screen:yt}},za=Ba(1.6,1.2),Ha=Ba(1.6,-1.2),Yn=[],b=[],U=new Map,j=de=>{const pe=new Cr,He=-1.8,fe=de.zBase;pe.position.set(He,de.y,fe);const be=de.uHeight*.0444+(de.uHeight-1)*.02,dt=.88,xt=.72,bt=[],yt=new Ze({color:de.color,metalness:.72,roughness:.35}),Ue=new we(new Ke(dt,be,xt),yt);Ue.castShadow=!0,pe.add(Ue),b.push({id:de.id,mesh:Ue,type:de.canTerminal?"device":"rackUnit"});const Ve=new Ze({color:9741240,metalness:.95,roughness:.15}),Wt=new we(new Ke(.015,be*.7,xt*.95),Ve);Wt.position.set(-dt/2-.01,0,0),pe.add(Wt);const Cn=new we(new Ke(.015,be*.7,xt*.95),Ve);Cn.position.set(dt/2+.01,0,0),pe.add(Cn);const bi=new Ze({color:659229,metalness:.8,roughness:.3}),Ti=new we(new Ke(dt+.02,be,.02),bi);Ti.position.set(0,0,xt/2+.01),pe.add(Ti);const Ci=new Ze({color:4674921,metalness:.9,roughness:.2});for(const $t of[-dt/2-.03,dt/2+.03]){const Qt=new we(new Ke(.04,be,.01),Ci);Qt.position.set($t,0,xt/2+.01),pe.add(Qt)}const An=[],Ts=new Hc(.009,.009,.012,12),Cs=new Ze({color:3718648,metalness:.8}),Ai=new we(Ts,Cs);Ai.rotation.x=Math.PI/2,Ai.position.set(dt/2-.04,0,xt/2+.022),pe.add(Ai);const vp=new hi(.005,8,8),Va=new Ze({color:2278750,emissive:1483594}),ai=new we(vp,Va);ai.position.set(dt/2-.04,be*.28,xt/2+.023),pe.add(ai),An.push(ai),b.push({id:de.id,mesh:Ai,type:"powerBtn",meta:{unitId:de.id}});let fr;if(de.canSlide&&!de.isKvm){const $t=new Ke(dt-.02,.008,xt-.04),Qt=new Ze({color:3359061,metalness:.8,roughness:.25});fr=new we($t,Qt),fr.position.set(0,be/2+.004,-.01),pe.add(fr),bt.push({mesh:fr,baseY:be/2+.004,explodeMult:1.4})}const xp=[],_p=[],yp=[];if(de.canSlide&&!de.isKvm){const $t=new Ze({color:413243,metalness:.4,roughness:.6}),Qt=new we(new Ke(dt-.06,.008,xt-.15),$t);Qt.position.set(0,-be/2+.01,-.04),pe.add(Qt),bt.push({mesh:Qt,baseY:-be/2+.01,explodeMult:0});const Ri=new Ze({color:12634320,metalness:.85,roughness:.2});for(const ln of[-.14,.14]){const Ni=new we(new Ke(.12,be*.6,.12),Ri);Ni.position.set(ln,-be/2+be*.3+.015,-.06),pe.add(Ni),bt.push({mesh:Ni,baseY:-be/2+be*.3+.015,explodeMult:.6})}const Rs=new Ze({color:1409085,metalness:.5,roughness:.4});for(let ln=0;ln<8;ln++){const Ni=-.32+ln*.035,oi=new we(new Ke(.012,be*.45,.11),Rs);oi.position.set(Ni,-be/2+be*.23,-.06),pe.add(oi),bt.push({mesh:oi,baseY:-be/2+be*.23,explodeMult:.4})}const On=new we(new Ke(dt-.08,be*.75,.03),new Ze({color:988970}));On.position.set(0,-be/2+be*.4,.12),pe.add(On),bt.push({mesh:On,baseY:-be/2+be*.4,explodeMult:.8});const Ns=new Ze({color:1976635,metalness:.3});for(let ln=0;ln<5;ln++){const Ni=-.28+ln*.14,oi=new we(new Hc(.032,.032,.02,8),Ns);oi.rotation.x=Math.PI/2,oi.position.set(Ni,-be/2+be*.4,.135),pe.add(oi),xp.push(oi)}}if(de.driveCount){const $t=de.driveCount,Qt=de.uHeight===2?Math.min(12,$t):Math.min(8,$t),Ri=.085,Rs=-((Qt-1)*Ri)/2;for(let On=0;On<Qt;On++){const Ns=Rs+On*Ri,ln=new we(new Ke(.075,be*.72,.024),new Ze({color:1976635,metalness:.75,roughness:.3})),Ni=xt/2+.02;ln.position.set(Ns,0,Ni),pe.add(ln);const oi=new we(new Ke(.045,.012,.008),new Ze({color:15680580,metalness:.6}));oi.position.set(0,-be*.22,.015),ln.add(oi);const uu=new we(new hi(.006,6,6),new Ze({color:2278750,emissive:1483594}));uu.position.set(.022,be*.24,.015),ln.add(uu),_p.push(uu),yp.push({mesh:ln,baseZ:Ni,driveIdx:On}),b.push({id:`${de.id}_drive_${On}`,mesh:ln,type:"drive",meta:{unitId:de.id,driveIdx:On}})}}let As;if(de.isKvm){const $t=new we(new Ke(dt-.1,.012,xt-.2),new Ze({color:1976635,roughness:.4}));$t.position.set(0,0,.05),pe.add($t);const Qt=new Ze({color:988970,roughness:.5}),Ri=new we(new Ke(.5,.006,.22),Qt);Ri.position.set(-.1,.01,.05),pe.add(Ri);const Rs=new we(new hi(.018,12,12),new Ze({color:3718648,metalness:.9}));Rs.position.set(.26,.015,.05),pe.add(Rs),As=new Cr,As.position.set(0,be/2,-xt/2+.12);const On=new we(new Ke(.68,.42,.02),new Ze({color:988970,metalness:.8,roughness:.3}));On.position.set(0,.21,0),As.add(On);const Ns=new we(new gi(.62,.36),new fi({color:165063}));Ns.position.set(0,.21,.012),As.add(Ns),pe.add(As)}if(de.id==="HSM1"){const $t=new we(new Ke(.24,.024,.01),new fi({color:0}));$t.position.set(-.18,0,xt/2+.022),pe.add($t);const Qt=new we(new gi(.22,.02),new fi({color:1096065}));Qt.position.set(-.18,0,xt/2+.028),pe.add(Qt)}if(de.id==="ENV1")for(let $t=0;$t<2;$t++){const Qt=-.16+$t*.32,Ri=new we(new gi(.12,.024),new fi({color:$t===0?3718648:1096065}));Ri.position.set(Qt,0,xt/2+.022),pe.add(Ri)}return L.add(pe),U.set(de.id,{group:pe,zBase:fe,targetZ:fe,fans:xp,leds:_p,drives:yp,lidMesh:fr,kvmScreenGroup:As,subLayers:bt,powerLeds:An}),pe};for(const de of es)j(de);const W=[{name:"Gi0/0",canonical:"GigabitEthernet0/0",x:-1.8-.16,isRes:!1},{name:"Gi0/1",canonical:"GigabitEthernet0/1",x:-1.8+.16,isRes:!0}];for(const de of W){const pe=`R1:${de.canonical}`,He=t.reservedPorts.has(pe),fe=new we(new Ke(.05,.038,.03),new Ze({color:He?15381256:988970}));fe.position.set(de.x,2.22,.38),L.add(fe);const be=new we(new hi(.012,8,8),new Ze({color:He?15381256:1976635}));be.position.set(de.x,2.245,.385),L.add(be),Yn.push({portId:pe,deviceId:"R1",shortName:de.name,position:new k(de.x,2.22,.39),isReserved:He,mesh:fe,ledMesh:be})}const O=[{name:"Fa0/1",canonical:"FastEthernet0/1",x:-1.8-.32},{name:"Fa0/2",canonical:"FastEthernet0/2",x:-1.8-.24},{name:"Fa0/3",canonical:"FastEthernet0/3",x:-1.8-.16},{name:"Fa0/4",canonical:"FastEthernet0/4",x:-1.8-.08},{name:"Fa0/5",canonical:"FastEthernet0/5",x:-1.8+0},{name:"Gi0/1",canonical:"GigabitEthernet0/1",x:-1.8+.28}];for(const de of O){const pe=`S1:${de.canonical}`,He=t.reservedPorts.has(pe),fe=new we(new Ke(.04,.035,.03),new Ze({color:He?15381256:988970}));fe.position.set(de.x,1.68,.38),L.add(fe);const be=new we(new hi(.01,8,8),new Ze({color:1976635}));be.position.set(de.x,1.705,.385),L.add(be),Yn.push({portId:pe,deviceId:"S1",shortName:de.name,position:new k(de.x,1.68,.39),isReserved:He,mesh:fe,ledMesh:be})}const ce="WEB1:Ethernet0",Se=new we(new Ke(.04,.035,.03),new Ze({color:988970}));Se.position.set(-1.8+.16,1.48,.38),L.add(Se);const Pe=new we(new hi(.01,8,8),new Ze({color:1976635}));Pe.position.set(-1.8+.16,1.505,.385),L.add(Pe),Yn.push({portId:ce,deviceId:"WEB1",shortName:"Eth0",position:new k(-1.8+.16,1.48,.39),isReserved:!1,mesh:Se,ledMesh:Pe});const Ne=t.devices.has("SOC-PC")?"SOC-PC":t.devices.has("PC-1")?"PC-1":"PC-A";b.push({id:Ne,mesh:za.screen,type:"device"}),b.push({id:Ne,mesh:za.tower,type:"device"});const $e=new we(new Ke(.04,.035,.03),new Ze({color:988970}));$e.position.set(1.6+.5,.45,1.2+.25),L.add($e);const qe=new we(new hi(.01,8,8),new Ze({color:1976635}));if(qe.position.set(1.6+.5,.48,1.2+.255),L.add(qe),Yn.push({portId:`${Ne}:Ethernet0`,deviceId:Ne,shortName:"Eth0",position:new k(1.6+.5,.45,1.2+.26),isReserved:!1,mesh:$e,ledMesh:qe}),t.devices.has("PC-B")){b.push({id:"PC-B",mesh:Ha.screen,type:"device"}),b.push({id:"PC-B",mesh:Ha.tower,type:"device"});const de=new we(new Ke(.04,.035,.03),new Ze({color:988970}));de.position.set(1.6+.5,.45,-1.2+.25),L.add(de);const pe=new we(new hi(.01,8,8),new Ze({color:1976635}));pe.position.set(1.6+.5,.48,-1.2+.255),L.add(pe),Yn.push({portId:"PC-B:Ethernet0",deviceId:"PC-B",shortName:"Eth0",position:new k(1.6+.5,.45,-1.2+.26),isReserved:!1,mesh:de,ledMesh:pe})}rt.current=Yn,At.current=U,Ie.current=b,Rt.current=new Map([...Array.from(U.entries()).map(([de,pe])=>[de,{id:de,object:pe.group,offset:new k(0,0,.42)}]),[Ne,{id:Ne,object:za.screen,offset:new k(0,.3,0)}],...t.devices.has("PC-B")?[["PC-B",{id:"PC-B",object:Ha.screen,offset:new k(0,.3,0)}]]:[]]),ge();const Ee=new DC,st=new We,_t=de=>{const pe=D.getBoundingClientRect();st.x=(de.clientX-pe.left)/pe.width*2-1,st.y=-((de.clientY-pe.top)/pe.height)*2+1,Ee.setFromCamera(st,ne);const He=Yn.map(yt=>yt.mesh).filter(yt=>!!yt),fe=Ee.intersectObjects(He);if(fe.length>0){const yt=fe[0].object,Ue=Yn.find(Ve=>Ve.mesh===yt);if(Ue){o(Ue.portId),c(null),D.style.cursor="pointer";return}}const be=Je.current.map(yt=>yt.mesh),dt=Ee.intersectObjects(be);if(dt.length>0){const yt=dt[0].object,Ue=Je.current.find(Ve=>Ve.mesh===yt);if(Ue){o(null),c(`Cable: ${Ue.linkKey}`),D.style.cursor="pointer";return}}const xt=Ie.current.map(yt=>yt.mesh),bt=Ee.intersectObjects(xt);if(bt.length>0){const yt=bt[0].object,Ue=Ie.current.find(Ve=>Ve.mesh===yt);if(Ue){Ue.type==="drive"?c(`${Ue.meta.unitId} Drive #${Ue.meta.driveIdx+1} (Hot-Swap)`):Ue.type==="powerBtn"?c(`${Ue.meta.unitId} Power Switch`):c(Ue.id),o(null),D.style.cursor="pointer";return}}o(null),c(null),D.style.cursor="default"},Et=de=>{const pe=D.getBoundingClientRect();st.x=(de.clientX-pe.left)/pe.width*2-1,st.y=-((de.clientY-pe.top)/pe.height)*2+1,Ee.setFromCamera(st,ne);const He=Yn.map(Ue=>Ue.mesh).filter(Ue=>!!Ue),fe=Ee.intersectObjects(He);if(fe.length>0){const Ue=fe[0].object,Ve=Yn.find(Wt=>Wt.mesh===Ue);if(Ve){Re(Ve);return}}const be=Je.current.map(Ue=>Ue.mesh),dt=Ee.intersectObjects(be);if(dt.length>0){const Ue=dt[0].object,Ve=Je.current.find(Wt=>Wt.mesh===Ue);if(Ve){Fe.playKeyClick(),he(Ve.linkKey),ue("cables"),w(`Selected cable: ${Ve.linkKey}. Customize jacket color, sag, or disconnect below.`);return}}const xt=Ie.current.map(Ue=>Ue.mesh),bt=Ee.intersectObjects(xt);if(bt.length>0){const Ue=bt[0].object,Ve=Ie.current.find(Wt=>Wt.mesh===Ue);if(Ve){if(Ve.type==="drive"){De(Ve.meta.unitId,Ve.meta.driveIdx);return}if(Ve.type==="powerBtn"){Q(Ve.meta.unitId);return}Fe.playKeyClick(),h(Ve.id),Ve.type==="device"&&t.devices.has(Ve.id)&&e(Ve.id);return}}if(Ee.intersectObject(dr).length>0&&r){Fe.playKeyClick(),r();return}};D.addEventListener("mousemove",_t),D.addEventListener("click",Et);let Zt=!1,pt=0,Le=0;const Kn=de=>{de.button===0&&(Zt=!0,pt=de.clientX,Le=de.clientY)},mt=()=>{Zt=!1},Tn=de=>{if(!Zt)return;const pe=de.clientX-pt,He=de.clientY-Le;pt=de.clientX,Le=de.clientY;const fe=A.current,be=fe.pos.clone().sub(fe.lookAt),dt=new UC().setFromVector3(be);dt.theta-=pe*.0055,dt.phi=Math.max(.08,Math.min(Math.PI/2-.04,dt.phi-He*.0055)),be.setFromSpherical(dt),fe.pos.copy(fe.lookAt).add(be)},Vi=de=>{de.preventDefault();const pe=A.current,He=pe.pos.clone().sub(pe.lookAt).normalize(),fe=pe.pos.distanceTo(pe.lookAt),be=Math.max(1.1,Math.min(9.5,fe+de.deltaY*.0045));pe.pos.copy(pe.lookAt).add(He.multiplyScalar(be))};D.addEventListener("mousedown",Kn),window.addEventListener("mouseup",mt),D.addEventListener("mousemove",Tn),D.addEventListener("wheel",Vi,{passive:!1});let on,$r=new IC;const wt=()=>{on=requestAnimationFrame(wt);const de=$r.getDelta();if(F.current){const He=F.current,fe=A.current;He.position.lerp(fe.pos,.08);const be=new k(0,0,-1).applyQuaternion(He.quaternion).add(He.position);be.lerp(fe.lookAt,.08),He.lookAt(be)}if(I)for(const He of Be.current){He.progress=(He.progress+de*He.speed)%1;const fe=He.curve.getPointAt(He.progress);He.mesh.position.copy(fe)}for(const[He,fe]of U.entries()){const be=p.includes(He),dt=_.includes(He),xt=x.includes(He),bt=d===He;if(fe.targetZ=be?fe.zBase+.58:fe.zBase,fe.group.position.z=Ml.damp(fe.group.position.z,fe.targetZ,9,de),fe.subLayers&&bt)for(const Ue of fe.subLayers){const Ve=Ue.baseY+M*Ue.explodeMult*.18;Ue.mesh.position.y=Ml.damp(Ue.mesh.position.y,Ve,8,de)}fe.lidMesh&&(fe.lidMesh.visible=!xt);for(const Ue of fe.powerLeds){const Ve=Ue.material;dt?(Ve.color.setHex(16096779),Ve.emissive.setHex(7877903)):(Ve.color.setHex(2278750),Ve.emissive.setHex(1483594))}if(fe.fans.length>0&&!dt){const Ue=C?58:be?28:14;for(const Ve of fe.fans)Ve.rotation.z+=de*Ue}const yt=g[He]||[];for(const Ue of fe.drives){const Wt=yt.includes(Ue.driveIdx)?Ue.baseZ+.14:Ue.baseZ;Ue.mesh.position.z=Ml.damp(Ue.mesh.position.z,Wt,12,de)}if(fe.leds.length>0&&!dt&&Math.random()<.2){const Ue=Math.floor(Math.random()*fe.leds.length),Ve=fe.leds[Ue],Wt=yt.includes(Ue),Cn=Ve.material;Wt?(Cn.color.setHex(16096779),Cn.emissive.setHex(14251782)):(Cn.color.setHex(Math.random()>.4?2278750:165063),Cn.emissive.setHex(Math.random()>.4?1483594:165063))}if(fe.kvmScreenGroup){const Ue=be&&N?-Math.PI*.42:0;fe.kvmScreenGroup.rotation.x=Ml.damp(fe.kvmScreenGroup.rotation.x,Ue,8,de)}}const pe=lt.current;if(tt.current){const He=D.clientWidth,fe=D.clientHeight,be=[],dt=new k;ne.getWorldDirection(dt);for(const xt of Rt.current.values()){const bt=pe.get(xt.id);if(!bt)continue;const yt=xt.object.localToWorld(xt.offset.clone()),Ue=yt.clone().sub(ne.position),Ve=yt.clone().project(ne),Wt=dt.dot(Ue)>0,Cn=Ve.z>-1&&Ve.z<1&&Math.abs(Ve.x)<.94&&Math.abs(Ve.y)<.9;if(!Wt||!Cn){bt.style.opacity="0";continue}const bi=(Ve.x*.5+.5)*He,Ti=(-Ve.y*.5+.5)*fe,Ci=Math.min(152,Math.max(104,He*.3)),An=30,Ts=Math.min(He-Ci-8,Math.max(8,bi+18)),Cs=Math.min(fe-An-8,Math.max(56,Ti-An/2)),Ai={left:Ts,top:Cs,right:Ts+Ci,bottom:Cs+An};if(be.some(ai=>Ai.left<ai.right+6&&Ai.right+6>ai.left&&Ai.top<ai.bottom+4&&Ai.bottom+4>ai.top)){bt.style.opacity="0";continue}be.push(Ai),bt.style.width=`${Ci}px`,bt.style.opacity="1",bt.style.transform=`translate3d(${Ts}px, ${Cs}px, 0)`;const Va=bt.querySelector("[data-equipment-leader]");if(Va){const ai=bi-Ts,fr=Ti-(Cs+An/2);Va.style.width=`${Math.hypot(ai,fr)}px`,Va.style.transform=`rotate(${Math.atan2(fr,ai)}rad)`}}}else for(const He of pe.values())He.style.opacity="0";z.render(L,ne)};wt();const Un=()=>{if(!D||!z||!ne)return;const de=D.clientWidth,pe=D.clientHeight;ne.aspect=de/pe,ne.updateProjectionMatrix(),z.setSize(de,pe)};return window.addEventListener("resize",Un),()=>{cancelAnimationFrame(on),window.removeEventListener("resize",Un),D.removeEventListener("mousemove",_t),D.removeEventListener("click",Et),D.removeEventListener("mousedown",Kn),window.removeEventListener("mouseup",mt),D.removeEventListener("mousemove",Tn),D.removeEventListener("wheel",Vi),D.contains(z.domElement)&&D.removeChild(z.domElement),z.dispose()}},[t,e,r,ge,p,g,x,_,C,N,M,d,I]);const Re=D=>{var z;if(Fe.playKeyClick(),D.isReserved){Fe.playErrorBeep(),w(`⚠️ Port ${D.portId} is reserved (dust cap attached). Cabling blocked.`);return}const[G,Me]=D.portId.split(":"),L=t.devices.get(G),ne=L==null?void 0:L.getInterface(Me);if(ne!=null&&ne.peer){const $=t.disconnectLink(D.portId);$.ok?(Fe.playCableSnap(),w(`🔌 Unplugged cable from ${D.portId}. Cable returned to inventory.`),i(null),he(null),ge()):(Fe.playErrorBeep(),w(`⚠️ ${$.reason||"Cannot unplug cable"}`));return}if(n){if(n===D.portId){i(null),w("Cabling cancelled.");return}const $=t.connectLink(n,D.portId);if($.ok){Fe.playCableSnap();const xe=((z=Xl.find(ze=>ze.css===V))==null?void 0:z.hex)||2450411,me=`${n}-${D.portId}`;ee(ze=>({...ze,[me]:xe})),he(me),w(`✅ Connected Cat6 cable: ${n} ↔ ${D.portId}`),i(null),ge()}else Fe.playErrorBeep(),w(`❌ Cabling rejected: ${$.reason||"Invalid connection"}`),i(null)}else{if(t.spareCablesCount<=0){Fe.playErrorBeep(),w("⚠️ No spare cables remaining in inventory.");return}i(D.portId),w(`Selected port ${D.portId}. Now click a destination port to plug in cable.`)}},ve=se.useMemo(()=>es.find(D=>D.id===d)||es[2],[d]),Xe=se.useMemo(()=>{const D=t.devices.has("SOC-PC")?"SOC-PC":t.devices.has("PC-1")?"PC-1":"PC-A";return[...es.map(G=>({id:G.id,name:G.name})),{id:D,name:`Workstation ${D}`},...t.devices.has("PC-B")?[{id:"PC-B",name:"Sales Workstation PC-B"}]:[]]},[t]),Ce=()=>{Fe.playKeyClick(),Ye(D=>{const G=!D;return tt.current=G,G})};return f.jsxs("div",{className:"relative w-full h-full select-none overflow-hidden bg-slate-950 font-sans",children:[f.jsx("div",{ref:s,className:"w-full h-full"}),f.jsx("div",{className:"pointer-events-none absolute inset-0 z-[8] overflow-hidden","aria-hidden":!Oe,children:Xe.map(D=>f.jsxs("div",{ref:G=>{G?lt.current.set(D.id,G):lt.current.delete(D.id)},className:"absolute left-0 top-0 h-[30px] opacity-0 transition-opacity duration-150 will-change-transform",children:[f.jsx("span",{"data-equipment-leader":!0,className:"absolute left-0 top-1/2 h-px origin-left bg-cyan-300 shadow-[0_0_5px_rgba(103,232,249,0.95)] after:absolute after:-right-0.5 after:-top-[3px] after:h-2 after:w-2 after:rotate-45 after:border-r after:border-t after:border-cyan-200"}),f.jsxs("span",{className:"relative z-10 flex h-[30px] items-center gap-1.5 rounded-md border border-cyan-300/70 bg-slate-950/95 px-2 text-[10px] font-semibold text-cyan-50 shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-sm",children:[f.jsx("span",{className:"h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(103,232,249,0.9)]"}),f.jsx("span",{className:"font-mono text-cyan-300",children:D.id}),f.jsx("span",{className:"truncate text-slate-300",children:D.name})]})]},D.id))}),f.jsxs("div",{className:"absolute top-2 left-2 right-2 z-10 flex max-w-max flex-wrap items-center gap-1 rounded-xl border border-slate-800 bg-slate-900/90 p-1.5 text-xs font-medium text-slate-300 shadow-xl sm:top-4 sm:left-4 sm:right-auto",children:[f.jsxs("span",{className:"px-2 py-1 text-slate-400 flex items-center gap-1",children:[f.jsx(W0,{className:"w-3.5 h-3.5 text-cyan-400"})," Angles:"]}),f.jsx("button",{onClick:()=>B("overview"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-white transition",children:"Overview"}),f.jsx("button",{onClick:()=>B("rack_a"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition",children:"Rack A"}),f.jsx("button",{onClick:()=>B("rack_b"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition",children:"Rack B"}),f.jsx("button",{onClick:()=>B("kvm"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-purple-400 transition",children:"KVM Drawer"}),f.jsx("button",{onClick:()=>B("desk_1"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-emerald-400 transition",children:"Desk 1"}),t.devices.has("PC-B")&&f.jsx("button",{onClick:()=>B("desk_2"),className:"min-h-11 px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition sm:min-h-0",children:"Desk 2"}),f.jsxs("button",{type:"button",onClick:Ce,"aria-pressed":Oe,"aria-label":`${Oe?"Hide":"Show"} equipment labels`,className:`hidden min-h-11 items-center gap-1.5 rounded-lg border px-2.5 py-1 font-semibold transition sm:flex sm:min-h-0 ${Oe?"border-cyan-300/70 bg-cyan-400/20 text-cyan-200":"border-slate-700 bg-slate-950/50 text-slate-300 hover:border-cyan-600 hover:text-cyan-300"}`,children:[f.jsx(_d,{className:"h-3.5 w-3.5"}),f.jsx("span",{children:"Labels"}),f.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${Oe?"bg-cyan-300":"bg-slate-600"}`})]})]}),f.jsxs("button",{type:"button",onClick:Ce,"aria-pressed":Oe,"aria-label":`${Oe?"Hide":"Show"} equipment labels`,className:`absolute right-2 top-[270px] z-20 flex min-h-11 items-center gap-2 rounded-xl border px-3 text-xs font-semibold shadow-xl backdrop-blur-md transition sm:hidden ${Oe?"border-cyan-300/80 bg-cyan-950/95 text-cyan-100":"border-slate-600 bg-slate-900/95 text-slate-200"}`,children:[f.jsx(_d,{className:"h-4 w-4"}),f.jsx("span",{children:"Equipment labels"}),f.jsx("span",{className:`h-2 w-2 rounded-full ${Oe?"bg-cyan-300":"bg-slate-500"}`})]}),f.jsxs("div",{className:"absolute top-4 right-4 z-10 flex items-center gap-3 p-2 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400"}),f.jsxs("span",{className:"text-slate-300",children:["Spare Cables: ",f.jsx("strong",{className:"text-cyan-300 font-mono text-sm",children:t.spareCablesCount})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5 pl-2 border-l border-slate-700",children:[f.jsx("span",{className:"text-slate-400 text-[11px]",children:"Active Color:"}),f.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-white/40 shadow-sm",style:{backgroundColor:V},title:V})]}),K&&f.jsxs("div",{className:"flex items-center gap-1.5 pl-2 border-l border-slate-700",children:[f.jsx("span",{className:"text-cyan-300 font-mono text-[11px] truncate max-w-[140px]",title:K,children:K}),f.jsx("button",{onClick:()=>he(null),className:"text-slate-400 hover:text-white px-1",children:"×"})]}),n&&f.jsxs("div",{className:"flex items-center gap-2 pl-3 border-l border-slate-700",children:[f.jsx("span",{className:"text-amber-300",children:"Holding cable from:"}),f.jsx("span",{className:"font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40 font-semibold",children:n}),f.jsx("button",{onClick:()=>i(null),className:"text-slate-400 hover:text-red-400 ml-1 px-1.5 py-0.5 rounded bg-slate-800 hover:bg-red-950/60 transition",children:"Cancel"})]})]}),a&&f.jsxs("div",{className:"absolute bottom-28 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-xl bg-slate-900/95 border border-cyan-500/40 text-xs shadow-2xl pointer-events-none flex items-center gap-3",children:[f.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400"}),f.jsxs("div",{children:[f.jsx("div",{className:"text-cyan-300 font-mono font-semibold",children:a}),f.jsx("div",{className:"text-slate-400 text-[11px]",children:t.reservedPorts.has(a)?"⚠️ Reserved Port (Dust Cap Attached)":"Click to attach / disconnect cable"})]})]}),l&&!a&&f.jsxs("div",{className:"absolute bottom-28 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-xl bg-slate-900/95 border border-indigo-500/40 text-xs shadow-2xl pointer-events-none flex items-center gap-3",children:[f.jsx("div",{className:"w-2 h-2 rounded-full bg-indigo-400"}),f.jsxs("div",{children:[f.jsx("div",{className:"text-indigo-300 font-semibold",children:l}),f.jsx("div",{className:"text-slate-400 text-[11px]",children:"Click to inspect unit, slide rails, or eject drive"})]})]}),f.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center max-w-5xl w-[96%]",children:[f.jsxs("button",{onClick:()=>{Fe.playKeyClick(),le(!X)},className:"flex items-center gap-1.5 px-4 py-1.5 rounded-t-xl bg-slate-900/90 border-t border-x border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition shadow-lg",children:[X?f.jsx(i_,{className:"w-3.5 h-3.5 text-cyan-400"}):f.jsx(Jx,{className:"w-3.5 h-3.5 text-cyan-400"}),f.jsx("span",{children:X?"Expand 3D Server Room Studio Controls":"Hide Controls"})]}),!X&&f.jsxs("div",{className:"w-full rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl overflow-hidden animate-fade-in flex flex-col",children:[f.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-slate-800 text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[f.jsxs("button",{onClick:()=>ue("chassis"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${ye==="chassis"?"bg-indigo-500/20 text-indigo-300 border border-indigo-500/40":"text-slate-400 hover:text-slate-200"}`,children:[f.jsx(X0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Chassis Mechanics & Rails"})]}),f.jsxs("button",{onClick:()=>ue("cables"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${ye==="cables"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40":"text-slate-400 hover:text-slate-200"}`,children:[f.jsx(sA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Cable Studio & Palette"})]}),f.jsxs("button",{onClick:()=>ue("catalog"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${ye==="catalog"?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"text-slate-400 hover:text-slate-200"}`,children:[f.jsx(fA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Rack Equipment Catalog"})]}),f.jsxs("button",{onClick:()=>ue("cameras"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${ye==="cameras"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"text-slate-400 hover:text-slate-200"}`,children:[f.jsx(W0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Camera Angles"})]})]}),f.jsx("div",{className:"text-[11px] text-slate-500 font-mono hidden md:block",children:"Click chassis/ports/cables to interact • Drag to orbit • Scroll to zoom"})]}),ye==="chassis"&&f.jsxs("div",{className:"p-4 flex flex-col gap-3 text-xs",children:[f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2.5",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40",children:f.jsx(X0,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("div",{className:"font-bold text-white text-sm flex items-center gap-2",children:[f.jsx("span",{children:ve.name}),f.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono border border-slate-700",children:[ve.rack," • Slot ",ve.slot," (",ve.uHeight,"U)"]}),f.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded font-mono border ${_.includes(ve.id)?"bg-amber-950 text-amber-300 border-amber-800":"bg-emerald-950 text-emerald-300 border-emerald-800"}`,children:_.includes(ve.id)?"STANDBY":"RUNNING"})]}),f.jsx("p",{className:"text-[11px] text-slate-400",children:ve.specs})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[f.jsx("span",{className:"text-slate-400 text-[11px] mr-1",children:"Select Unit:"}),es.filter(D=>D.canSlide||D.driveCount||D.isKvm).map(D=>f.jsx("button",{onClick:()=>{Fe.playKeyClick(),h(D.id)},className:`px-2 py-0.8 rounded text-[11px] font-mono transition ${d===D.id?"bg-indigo-600 text-white font-bold":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:D.id},D.id))]})]}),f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3 pt-1",children:[f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[ve.canSlide&&f.jsxs("button",{onClick:()=>te(ve.id),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-lg transition ${p.includes(ve.id)?"bg-indigo-600 hover:bg-indigo-500 text-white":"bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-indigo-500/30"}`,children:[f.jsx(gA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:p.includes(ve.id)?"Retract Rails":"Extend Rails (Slide Out)"})]}),ve.canSlide&&!ve.isKvm&&f.jsxs("button",{onClick:()=>re(ve.id),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${x.includes(ve.id)?"bg-amber-600/30 border border-amber-500/50 text-amber-300":"bg-slate-800 hover:bg-slate-700 text-slate-300"}`,children:[f.jsx(tA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:x.includes(ve.id)?"Replace Top Lid":"Remove Top Lid (Inspect Board)"})]}),ve.isKvm&&f.jsxs("button",{onClick:()=>{Fe.playKeyClick(),E(!N),w(N?"Folded LCD display down.":"Flipped LCD display up 75° to view status.")},className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${N?"bg-purple-600 text-white shadow-lg":"bg-slate-800 text-purple-300 hover:bg-slate-700"}`,children:[f.jsx(b_,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:N?"Fold LCD Down":"Flip LCD Monitor Up"})]}),f.jsxs("button",{onClick:()=>Q(ve.id),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${_.includes(ve.id)?"bg-emerald-600 hover:bg-emerald-500 text-white":"bg-slate-800 hover:bg-slate-700 text-red-400 border border-red-500/30"}`,children:[f.jsx(oA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:_.includes(ve.id)?"Boot / Power Up":"Power Down"})]}),f.jsxs("button",{onClick:()=>{Fe.playFanSpool(),T(!C),w(C?"Fan speed returned to normal (4,500 RPM).":"🌪️ Turbo Fan Mode Enabled: 14,500 RPM full blast.")},className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${C?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30":"bg-slate-800 hover:bg-slate-700 text-cyan-300"}`,children:[f.jsx(xA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:C?"Turbo Fan 14,500 RPM":"Normal Fan Speed"})]}),t.devices.has(ve.id)&&f.jsxs("button",{onClick:()=>{Fe.playKeyClick(),e(ve.id)},className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-mono text-xs flex items-center gap-1.5 transition border border-cyan-500/30",children:[f.jsx(Wo,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Open Console"})]})]}),f.jsxs("div",{className:"flex items-center gap-2 pl-3 border-l border-slate-800",children:[f.jsx(mA,{className:"w-3.5 h-3.5 text-slate-400"}),f.jsx("span",{className:"text-slate-400 text-[11px]",children:"Exploded View:"}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:M,onChange:D=>P(parseFloat(D.target.value)),className:"w-24 accent-indigo-500 h-1 bg-slate-800 rounded-lg cursor-pointer"}),f.jsxs("span",{className:"font-mono text-[10px] text-indigo-300 w-8",children:[Math.round(M*100),"%"]})]})]}),ve.driveCount&&f.jsxs("div",{className:"mt-1 p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between flex-wrap gap-2",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(nA,{className:"w-4 h-4 text-emerald-400"}),f.jsxs("span",{className:"text-slate-300 font-medium text-[11px]",children:["Hot-Swap SAS Drive Trays (",ve.driveCount," Bays):"]}),f.jsx("span",{className:"text-[10px] text-slate-500",children:"Click tray number to eject or latch back:"})]}),f.jsx("div",{className:"flex items-center gap-1.5 flex-wrap",children:Array.from({length:ve.driveCount}).map((D,G)=>{const Me=(g[ve.id]||[]).includes(G);return f.jsxs("button",{onClick:()=>De(ve.id,G),className:`px-2 py-0.5 rounded font-mono text-[10px] flex items-center gap-1 transition ${Me?"bg-amber-500 text-slate-950 font-bold border border-amber-400":"bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`,title:`Drive #${G+1}: ${Me?"Ejected":"Latched in backplane"}`,children:[f.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${Me?"bg-amber-950":"bg-emerald-400"}`}),f.jsxs("span",{children:["#",G+1]}),Me&&f.jsx("span",{className:"text-[9px] uppercase",children:"OUT"})]},G)})})]})]}),ye==="cables"&&f.jsxs("div",{className:"p-4 flex flex-col gap-3 text-xs",children:[f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3 border-b border-slate-800 pb-2.5",children:[f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[f.jsxs("span",{className:"text-slate-400 text-xs font-semibold flex items-center gap-1.5",children:[f.jsx(sh,{className:"w-4 h-4 text-cyan-400"})," Palette:"]}),Xl.map(D=>{const G=V===D.css;return f.jsxs("button",{onClick:()=>{Fe.playKeyClick(),H(D.css),K?oe(D.hex):w(`Selected ${D.label} (${D.role}) for next cables.`)},className:`group relative flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition ${G?"bg-slate-800 border-white text-white font-bold shadow-md":"bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[f.jsx("span",{className:"w-3 h-3 rounded-full border border-white/30 shrink-0",style:{backgroundColor:D.css}}),f.jsx("span",{className:"text-[11px]",children:D.label}),G&&f.jsx(Zx,{className:"w-3 h-3 text-white ml-0.5"})]},D.id)})]}),f.jsxs("div",{className:"flex items-center gap-1.5 pl-2 border-l border-slate-800",children:[f.jsx("input",{type:"color",value:ke,onChange:D=>{ft(D.target.value),H(D.target.value),K&&oe(parseInt(D.target.value.replace("#","0x"),16))},className:"w-7 h-7 rounded border border-slate-700 cursor-pointer bg-transparent",title:"Custom Color Picker"}),f.jsx("input",{type:"text",value:ke,onChange:D=>{ft(D.target.value),/^#[0-9A-Fa-f]{6}$/.test(D.target.value)&&(H(D.target.value),K&&oe(parseInt(D.target.value.replace("#","0x"),16)))},className:"w-16 px-1.5 py-0.5 bg-slate-950 border border-slate-800 rounded text-cyan-300 font-mono text-[11px]"})]})]}),f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3 pt-1",children:[K?f.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs",children:[f.jsxs("span",{className:"text-cyan-300 font-semibold flex items-center gap-1",children:[f.jsx(sh,{className:"w-3.5 h-3.5"})," Selected Cable:"]}),f.jsx("span",{className:"font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 font-semibold",children:K}),f.jsx("button",{onClick:()=>{var G;const D=((G=Xl.find(Me=>Me.css===V))==null?void 0:G.hex)||2450411;oe(D)},className:"px-2 py-0.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-[11px]",children:"Apply Active Color"}),f.jsx("button",{onClick:()=>{const[D]=K.split("-");t.disconnectLink(D).ok&&(Fe.playCableSnap(),he(null),ge(),w(`Unplugged cable ${K}`))},className:"px-2 py-0.5 rounded bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 text-[11px]",children:"Unplug"}),f.jsx("button",{onClick:()=>he(null),className:"text-slate-400 hover:text-white px-1 ml-1",children:"Close"})]}):f.jsxs("div",{className:"text-slate-400 text-[11px] flex items-center gap-1.5",children:[f.jsx(_d,{className:"w-3.5 h-3.5 text-cyan-400"}),f.jsx("span",{children:"Click any cable directly in the 3D server room to customize its jacket color & tension."})]}),f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[f.jsxs("button",{onClick:ht,className:"px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-600/20 transition",children:[f.jsx(lA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"TIA-606-C Standards Auto-Color"})]}),f.jsxs("button",{onClick:()=>{var G;const D=((G=Xl.find(Me=>Me.css===V))==null?void 0:G.hex)||2450411;Te(D)},className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition",children:[f.jsx(vA,{className:"w-3 h-3 text-amber-400"}),f.jsx("span",{children:"Color All Cables"})]}),f.jsxs("div",{className:"flex items-center gap-1.5 pl-2 border-l border-slate-800",children:[f.jsx("span",{className:"text-slate-400 text-[11px]",children:"Sag:"}),f.jsx("input",{type:"range",min:"0.10",max:"0.55",step:"0.02",value:q,onChange:D=>ie(parseFloat(D.target.value)),className:"w-16 accent-cyan-400 h-1 bg-slate-800 rounded-lg cursor-pointer",title:"Cable Slack / Catenary Curve"})]}),f.jsx("button",{onClick:()=>{Fe.playKeyClick(),Z(!I),w(I?"Packet pulses paused.":"Active packet light pulses enabled.")},className:`p-1.5 rounded-lg border transition ${I?"bg-cyan-950 text-cyan-300 border-cyan-800":"bg-slate-800 text-slate-400 border-slate-700"}`,title:"Toggle animated packet pulses",children:f.jsx(_A,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:()=>{Fe.playKeyClick(),ee({}),he(null),w("Reset all cables to enterprise role standards.")},className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition",title:"Reset all colors to default standards",children:f.jsx(L_,{className:"w-3.5 h-3.5"})})]})]})]}),ye==="catalog"&&f.jsx("div",{className:"p-4 flex flex-col gap-3 text-xs max-h-56 overflow-y-auto",children:f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[f.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col gap-2",children:[f.jsxs("div",{className:"font-bold text-cyan-300 flex items-center justify-between border-b border-slate-800 pb-1.5",children:[f.jsx("span",{children:"Rack A (Production Infrastructure)"}),f.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:'19" 42U Standard Cage'})]}),f.jsx("div",{className:"flex flex-col gap-1.5",children:es.filter(D=>D.rack==="Rack A").map(D=>f.jsxs("div",{onClick:()=>{Fe.playKeyClick(),h(D.id),ue("chassis")},className:`p-2 rounded-lg border cursor-pointer transition flex items-center justify-between ${d===D.id?"bg-indigo-950/60 border-indigo-500/60 text-white":"bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700"}`,children:[f.jsxs("div",{children:[f.jsxs("div",{className:"font-semibold text-xs flex items-center gap-1.5",children:[f.jsx("span",{className:"font-mono text-cyan-400 text-[11px]",children:D.id}),f.jsx("span",{children:D.name})]}),f.jsx("div",{className:"text-[10px] text-slate-400 truncate max-w-sm",children:D.specs})]}),f.jsxs("div",{className:"text-[10px] text-slate-500 font-mono shrink-0",children:["Slot ",D.slot," • ",D.uHeight,"U"]})]},D.id))})]}),f.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col gap-2",children:[f.jsxs("div",{className:"font-bold text-cyan-300 flex items-center justify-between border-b border-slate-800 pb-1.5",children:[f.jsx("span",{children:"Rack B (SAN Storage & Redundant Core)"}),f.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:'19" 42U Standard Cage'})]}),f.jsx("div",{className:"flex flex-col gap-1.5",children:es.filter(D=>D.rack==="Rack B").map(D=>f.jsxs("div",{onClick:()=>{Fe.playKeyClick(),h(D.id),ue("chassis")},className:`p-2 rounded-lg border cursor-pointer transition flex items-center justify-between ${d===D.id?"bg-indigo-950/60 border-indigo-500/60 text-white":"bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700"}`,children:[f.jsxs("div",{children:[f.jsxs("div",{className:"font-semibold text-xs flex items-center gap-1.5",children:[f.jsx("span",{className:"font-mono text-cyan-400 text-[11px]",children:D.id}),f.jsx("span",{children:D.name})]}),f.jsx("div",{className:"text-[10px] text-slate-400 truncate max-w-sm",children:D.specs})]}),f.jsxs("div",{className:"text-[10px] text-slate-500 font-mono shrink-0",children:["Slot ",D.slot," • ",D.uHeight,"U"]})]},D.id))})]})]})}),ye==="cameras"&&f.jsxs("div",{className:"p-4 flex items-center justify-between gap-2 flex-wrap text-xs",children:[f.jsx("span",{className:"text-slate-400 text-xs font-semibold",children:"Camera Positions:"}),f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[f.jsx("button",{onClick:()=>B("overview"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600/30 hover:text-emerald-300 text-slate-300 transition",children:"Full Room Overview"}),f.jsx("button",{onClick:()=>B("rack_a"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-600/30 hover:text-cyan-300 text-slate-300 transition",children:"Rack A (Production Gear)"}),f.jsx("button",{onClick:()=>B("rack_b"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-600/30 hover:text-cyan-300 text-slate-300 transition",children:"Rack B (SAN & Secondary)"}),f.jsx("button",{onClick:()=>B("kvm"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-purple-600/30 hover:text-purple-300 text-slate-300 transition",children:"KVM Console Drawer"}),f.jsx("button",{onClick:()=>B("desk_1"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600/30 hover:text-emerald-300 text-slate-300 transition",children:"Desk 1 (PC-A / SOC)"}),t.devices.has("PC-B")&&f.jsx("button",{onClick:()=>B("desk_2"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-600/30 hover:text-amber-300 text-slate-300 transition",children:"Desk 2 (Sales PC-B)"}),f.jsx("button",{onClick:()=>B("soc"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-sky-600/30 hover:text-sky-300 text-slate-300 transition",children:"Wall SOC Monitor"})]})]})]})]}),f.jsx("div",{className:"absolute bottom-4 left-4 z-10 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400",children:f.jsx("span",{children:"Click ports to cable • Click cables to recolor • Click chassis to extend rails • Click drive trays to eject"})}),v&&f.jsx("div",{className:"absolute top-16 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-xl bg-slate-900/95 border border-cyan-500/50 text-xs text-cyan-200 shadow-2xl animate-fade-in flex items-center gap-2 max-w-lg text-center",children:f.jsx("span",{children:v})})]})},SA=({sim:t,deviceId:e,onClose:n,onSwitchDevice:i,onOpenCodeEditor:r})=>{const[s,a]=se.useState(null),[o,l]=se.useState([]),[c,d]=se.useState(""),[h,p]=se.useState(-1),[m,v]=se.useState(!0),[S,g]=se.useState(!1),[u,x]=se.useState(!1),y=se.useRef(null),_=se.useRef(null);if(se.useEffect(()=>{try{const E=t.openSession(e);a(E);const M=E.device;let P="";M.type===Qe.ROUTER||M.type===Qe.SWITCH?P=`Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.2(4)M5, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Compiled Fri 12-Sep-14 17:02 by prod_rel_team

Press RETURN to get started!`:M.type===Qe.HOST?P=`Microsoft Windows [Version 10.0.19045.3803]
(c) Microsoft Corporation. All rights reserved.
Type "help" for available commands.`:M.type===Qe.SERVER&&(P=`Linux ${M.hostname} 5.15.0-89-generic #99-Ubuntu SMP x86_64

The programs included with the Ubuntu system are free software.
Type "help" for available commands.`),l([{type:"system",text:P},{type:"output",text:""}]),d(""),p(-1)}catch(E){console.error(E)}},[t,e]),se.useEffect(()=>{var E;(E=y.current)==null||E.focus()},[e,o]),se.useEffect(()=>{_.current&&(_.current.scrollTop=_.current.scrollHeight)},[o]),!s)return null;const R=s.getPrompt(),C=E=>{if(m&&Fe.playKeyClick(),E.key==="Enter"){E.preventDefault();const M=c,P=s.execute(M);if(l(V=>[...V,{type:"input",text:M,prompt:R},...P.output?[{type:"output",text:P.output}]:[]]),d(""),p(-1),P.action===J.CLOSE_SESSION){n();return}P.action===J.OPEN_EDITOR&&P.actionArg&&r&&r(P.actionArg);return}if(E.key==="ArrowUp"){E.preventDefault();const M=s.history;if(M.length===0)return;const P=h===-1?M.length-1:Math.max(0,h-1);p(P),d(M[P]||"");return}if(E.key==="ArrowDown"){E.preventDefault();const M=s.history;if(M.length===0||h===-1)return;const P=h+1;P>=M.length?(p(-1),d("")):(p(P),d(M[P]||""));return}if(E.key==="Tab"){E.preventDefault(),T();return}if(E.key==="?"&&(s.device.type===Qe.ROUTER||s.device.type===Qe.SWITCH)){E.preventDefault(),N();return}if(E.ctrlKey&&E.key==="z"){E.preventDefault();const M=s.execute("end");l(P=>[...P,{type:"input",text:"^Z",prompt:R},...M.output?[{type:"output",text:M.output}]:[]]),d("");return}if(E.ctrlKey&&E.key==="c"){E.preventDefault(),l(M=>[...M,{type:"input",text:"^C",prompt:R}]),d("");return}},T=()=>{const M=c.trimStart().split(" "),P=M[M.length-1];if(!P)return;let V=[];s.device.type===Qe.ROUTER||s.device.type===Qe.SWITCH?V=["enable","disable","configure","terminal","interface","shutdown","no","ip","address","vlan","name","switchport","mode","access","trunk","encapsulation","dot1Q","show","running-config","brief","ping","exit","end"]:s.device.type===Qe.HOST?V=["ipconfig","ping","curl","help","cls"]:V=["ls","cat","grep","tail","edit","service","status","help","clear"];const H=V.filter(Y=>Y.toLowerCase().startsWith(P.toLowerCase()));H.length===1&&(M[M.length-1]=H[0],d(M.join(" ")+" "))},N=()=>{const E=["Exec & Config Commands:","  enable          Turn on privileged commands","  disable         Turn off privileged commands","  configure       Enter configuration mode","  hostname        Set system network name","  interface       Select an interface to configure","  vlan            Configure VLAN parameters","  switchport      Set switching characteristics of the interface","  encapsulation   Set encapsulation method (e.g. dot1Q)","  ip              Global IP configuration subcommands","  shutdown        Shutdown the selected interface","  show            Show running system information","  ping            Send echo messages","  exit            Exit from the EXEC","  end             Exit to privileged EXEC mode"].join(`
`);l(M=>[...M,{type:"input",text:`${c}?`,prompt:R},{type:"output",text:E}])};return f.jsxs("div",{className:`fixed z-40 flex flex-col bg-slate-950/95 backdrop-blur-xl border border-slate-700 shadow-2xl transition-all duration-200 ${u?"inset-2 rounded-2xl":"bottom-4 right-4 w-[680px] h-[520px] rounded-2xl max-w-[calc(100vw-32px)] max-h-[calc(100vh-32px)]"}`,children:[f.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 rounded-t-2xl",children:[f.jsxs("div",{className:"flex items-center gap-2.5",children:[f.jsx(Wo,{className:"w-4 h-4 text-cyan-400"}),f.jsxs("span",{className:"font-mono text-xs font-semibold text-slate-200 flex items-center gap-2",children:[f.jsx("span",{children:"Terminal:"}),f.jsxs("span",{className:"px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60",children:[s.device.hostname," (",s.device.id,")"]})]}),f.jsx("div",{className:"hidden sm:flex items-center gap-1 ml-2 pl-2 border-l border-slate-700",children:Array.from(t.devices.values()).map(E=>f.jsx("button",{onClick:()=>i(E.id),className:`px-2 py-0.5 rounded text-[11px] font-mono transition ${E.id===e?"bg-cyan-500 text-slate-950 font-bold":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:E.hostname||E.id},E.id))})]}),f.jsxs("div",{className:"flex items-center gap-1.5 text-slate-400",children:[f.jsx("button",{onClick:()=>g(!S),title:"Command Cheatsheet",className:`p-1.5 rounded-lg hover:bg-slate-800 hover:text-cyan-300 transition ${S?"text-cyan-400 bg-slate-800":""}`,children:f.jsx(rh,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:()=>{v(!m),Fe.enabled=!m},title:m?"Mute Audio":"Enable Audio",className:"p-1.5 rounded-lg hover:bg-slate-800 hover:text-slate-200 transition",children:m?f.jsx(X_,{className:"w-3.5 h-3.5 text-cyan-400"}):f.jsx(Y_,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:()=>x(!u),title:u?"Restore":"Maximize",className:"p-1.5 rounded-lg hover:bg-slate-800 hover:text-slate-200 transition",children:u?f.jsx(rA,{className:"w-3.5 h-3.5"}):f.jsx(b_,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:n,title:"Close Terminal (Esc)",className:"p-1.5 rounded-lg hover:bg-red-950/80 hover:text-red-400 transition",children:f.jsx(el,{className:"w-4 h-4"})})]})]}),f.jsxs("div",{className:"relative flex-1 flex overflow-hidden",children:[f.jsxs("div",{ref:_,onClick:()=>{var E;return(E=y.current)==null?void 0:E.focus()},className:"flex-1 p-4 font-mono text-xs overflow-y-auto leading-relaxed select-text crt-screen",children:[o.map((E,M)=>f.jsxs("div",{className:"whitespace-pre-wrap break-all",children:[E.type==="input"&&f.jsxs("div",{className:"flex items-start text-emerald-400 font-semibold mt-1",children:[f.jsx("span",{className:"text-slate-400 mr-2 select-none",children:E.prompt}),f.jsx("span",{children:E.text})]}),E.type==="output"&&f.jsx("div",{className:"text-slate-300 ml-1 mb-1",children:E.text}),E.type==="system"&&f.jsx("div",{className:"text-slate-500 mb-2",children:E.text})]},M)),f.jsxs("div",{className:"flex items-center text-emerald-400 font-semibold mt-1",children:[f.jsx("span",{className:"text-slate-400 mr-2 select-none",children:R}),f.jsx("div",{className:"relative flex-1 flex items-center",children:f.jsx("input",{ref:y,type:"text",value:c,onChange:E=>d(E.target.value),onKeyDown:C,className:"w-full bg-transparent outline-none text-emerald-400 font-mono caret-cyan-400 text-xs",autoFocus:!0,spellCheck:!1,autoCapitalize:"off",autoComplete:"off"})})]})]}),S&&f.jsxs("div",{className:"w-64 border-l border-slate-800 bg-slate-900/90 p-3 text-xs overflow-y-auto font-mono text-slate-300",children:[f.jsxs("div",{className:"font-sans font-bold text-cyan-400 mb-2 flex items-center gap-1.5",children:[f.jsx(rh,{className:"w-3.5 h-3.5"})," Cheatsheet"]}),s.device.type===Qe.ROUTER&&f.jsxs("div",{className:"space-y-3 text-[11px]",children:[f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"1. Enable & Global Config:"}),f.jsx("div",{className:"text-emerald-400",children:"enable"}),f.jsx("div",{className:"text-emerald-400",children:"configure terminal"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"2. Bring physical interface up:"}),f.jsx("div",{className:"text-emerald-400",children:"interface gi0/0"}),f.jsx("div",{className:"text-emerald-400",children:"no shutdown"}),f.jsx("div",{className:"text-emerald-400",children:"exit"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"3. Router-on-a-Stick subinterface:"}),f.jsx("div",{className:"text-emerald-400",children:"interface gi0/0.10"}),f.jsx("div",{className:"text-emerald-400",children:"encapsulation dot1Q 10"}),f.jsx("div",{className:"text-emerald-400",children:"ip address 192.168.10.1 255.255.255.0"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"4. Verification:"}),f.jsx("div",{className:"text-cyan-400",children:"show ip interface brief"}),f.jsx("div",{className:"text-cyan-400",children:"show running-config"})]})]}),s.device.type===Qe.SWITCH&&f.jsxs("div",{className:"space-y-3 text-[11px]",children:[f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"1. Create VLAN:"}),f.jsx("div",{className:"text-emerald-400",children:"vlan 20"}),f.jsx("div",{className:"text-emerald-400",children:"name SALES"}),f.jsx("div",{className:"text-emerald-400",children:"exit"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"2. Assign Access Port:"}),f.jsx("div",{className:"text-emerald-400",children:"interface fa0/2"}),f.jsx("div",{className:"text-emerald-400",children:"switchport mode access"}),f.jsx("div",{className:"text-emerald-400",children:"switchport access vlan 20"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"3. Configure 802.1Q Trunk:"}),f.jsx("div",{className:"text-emerald-400",children:"interface gi0/1"}),f.jsx("div",{className:"text-emerald-400",children:"switchport mode trunk"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"4. Verification:"}),f.jsx("div",{className:"text-cyan-400",children:"show vlan brief"})]})]}),s.device.type===Qe.HOST&&f.jsxs("div",{className:"space-y-3 text-[11px]",children:[f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Check IP Configuration:"}),f.jsx("div",{className:"text-emerald-400",children:"ipconfig"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Test Connectivity:"}),f.jsx("div",{className:"text-emerald-400",children:"ping 192.168.20.10"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Test Web Service:"}),f.jsx("div",{className:"text-emerald-400",children:`curl "http://10.0.10.5/login.php?user=' OR '1'='1"`})]})]}),s.device.type===Qe.SERVER&&f.jsxs("div",{className:"space-y-3 text-[11px]",children:[f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Inspect Code / Logs:"}),f.jsx("div",{className:"text-emerald-400",children:"cat /var/www/login.php"}),f.jsx("div",{className:"text-emerald-400",children:"tail -n 20 /var/log/auth.log"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Open Patch Editor:"}),f.jsx("div",{className:"text-emerald-400",children:"edit /var/www/login.php"})]})]})]})]}),f.jsxs("div",{className:"px-4 py-1.5 bg-slate-900/90 border-t border-slate-800 rounded-b-2xl flex items-center justify-between text-[11px] text-slate-400",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("span",{children:"Tab: Auto-complete"}),f.jsx("span",{children:"?: Help list"}),f.jsx("span",{children:"Ctrl+Z: Exit config"}),f.jsx("span",{children:"Up/Down: History"})]}),f.jsx("div",{className:"text-slate-500 font-mono",children:"CCNA IOS Terminal Engine"})]})]})},MA=({sim:t,scenario:e,objectives:n,onOpenReport:i,onOpenCodeEditor:r,onOpenHint:s,onSelectMission:a,onRestartMission:o,allScenarios:l})=>{const[c,d]=se.useState(!1),[h,p]=se.useState(null),[m,v]=se.useState(!1),S=n.length>0&&n.every(x=>x.passed),g=()=>{var y,_;if(Fe.playKeyClick(),s){s();return}const x=n.find(R=>!R.passed&&!R.locked&&R.hint);if(x)p(x.hint);else{const R=((_=(y=e.hints)==null?void 0:y[0])==null?void 0:_.text)||"Review network configurations and interface IP assignments.";p(R)}},u=t.debriefView();return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center max-w-xl w-[92%] sm:w-auto",children:[f.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("span",{className:"px-2 py-0.5 rounded-md bg-cyan-950 text-cyan-400 font-mono text-xs font-bold border border-cyan-800/80",children:["M",e.sequence]}),f.jsx("span",{className:"font-bold text-slate-100 text-sm",children:e.title})]}),f.jsxs("button",{onClick:()=>d(!c),className:"flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-300 transition pl-2 border-l border-slate-700",children:[f.jsx("span",{children:"Briefing"}),c?f.jsx(i_,{className:"w-3.5 h-3.5"}):f.jsx(Jx,{className:"w-3.5 h-3.5"})]}),f.jsxs("button",{onClick:g,className:"flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-xs font-medium transition",children:[f.jsx($0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Hint (H)"})]}),e.id==="m2_log_triage"&&i&&f.jsxs("button",{onClick:i,className:"flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 text-xs font-medium transition",children:[f.jsx(Aa,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Incident Report"})]}),e.id==="m3_web_patch"&&r&&f.jsxs("button",{onClick:r,className:"flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 text-xs font-medium transition",children:[f.jsx(cu,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Code Editor"})]}),S&&f.jsxs("button",{onClick:()=>v(!0),className:"flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs animate-pulse shadow-lg shadow-emerald-500/20 transition",children:[f.jsx(j0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Debrief"})]})]}),c&&f.jsxs("div",{className:"mt-2 p-4 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-700 shadow-2xl text-xs text-slate-300 max-w-lg animate-fade-in",children:[f.jsxs("div",{className:"font-semibold text-cyan-400 mb-1 flex items-center gap-1.5",children:[f.jsx(Aa,{className:"w-4 h-4"})," Mission Ticket & Briefing"]}),f.jsx("p",{className:"leading-relaxed text-slate-300",children:e.briefing})]}),h&&f.jsxs("div",{className:"mt-2 p-3.5 rounded-xl bg-amber-950/90 backdrop-blur-xl border border-amber-600/50 shadow-2xl text-xs text-amber-200 max-w-lg flex items-start gap-2.5 animate-fade-in",children:[f.jsx($0,{className:"w-4 h-4 text-amber-400 shrink-0 mt-0.5"}),f.jsxs("div",{className:"flex-1",children:[f.jsx("div",{className:"font-bold text-amber-300 mb-0.5",children:"Diagnostic Hint:"}),f.jsx("p",{className:"leading-relaxed",children:h})]}),f.jsx("button",{onClick:()=>p(null),className:"text-amber-400 hover:text-white text-xs px-1.5 py-0.5",children:"✕"})]})]}),f.jsxs("div",{className:"absolute top-20 left-4 z-20 w-80 max-h-[calc(100vh-140px)] flex flex-col rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 shadow-2xl overflow-hidden",children:[f.jsxs("div",{className:"px-3.5 py-2.5 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between",children:[f.jsxs("span",{className:"text-xs font-bold text-slate-200 flex items-center gap-1.5",children:[f.jsx(B_,{className:"w-4 h-4 text-cyan-400"}),f.jsx("span",{children:"Mission Objectives"})]}),f.jsxs("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-700",children:[n.filter(x=>x.passed).length," / ",n.length]})]}),f.jsx("div",{className:"p-3 space-y-2.5 overflow-y-auto text-xs",children:n.map(x=>f.jsx("div",{className:`p-2.5 rounded-xl border transition-all ${x.passed?"bg-emerald-950/30 border-emerald-500/40 text-emerald-300":x.locked?"bg-slate-950/40 border-slate-800 text-slate-500 opacity-60":"bg-slate-950/60 border-slate-800 text-slate-300"}`,children:f.jsxs("div",{className:"flex items-start gap-2",children:[x.passed?f.jsx(ms,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-0.5"}):x.locked?f.jsx(Vc,{className:"w-4 h-4 text-slate-500 shrink-0 mt-0.5"}):f.jsx(l_,{className:"w-4 h-4 text-slate-500 shrink-0 mt-0.5"}),f.jsxs("div",{className:"flex-1",children:[f.jsx("div",{className:"leading-snug",children:x.description}),x.detail&&!x.passed&&!x.locked&&f.jsxs("div",{className:"text-[11px] text-amber-400/90 font-mono mt-1",children:["Status: ",x.detail]})]})]})},x.id))}),f.jsxs("div",{className:"px-3 py-2 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400",children:[f.jsxs("button",{onClick:o,className:"flex items-center gap-1 hover:text-red-400 transition",children:[f.jsx(L_,{className:"w-3 h-3"}),f.jsx("span",{children:"Restart"})]}),s&&f.jsxs("button",{onClick:()=>{Fe.playKeyClick(),s()},className:"text-amber-400/90 hover:text-amber-300 flex items-center gap-1 font-medium transition",children:[f.jsx(gp,{className:"w-3 h-3 text-amber-400"}),f.jsx("span",{children:"Step Guidance [H]"})]})]})]}),m&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"max-w-xl w-full rounded-2xl bg-slate-900 border border-emerald-500/50 shadow-2xl p-6 text-slate-200",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[f.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400",children:f.jsx(j0,{className:"w-6 h-6"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-lg font-bold text-white",children:"Mission Accomplished!"}),f.jsxs("p",{className:"text-xs text-emerald-400 font-mono",children:[e.title," — Verified"]})]})]}),f.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs leading-relaxed text-slate-300 mb-5",children:[f.jsx("h3",{className:"font-semibold text-cyan-400 mb-1",children:"Debrief & Technical Takeaways:"}),f.jsx("p",{children:(u==null?void 0:u.debrief)||e.debrief})]}),f.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-800",children:[f.jsx("button",{onClick:()=>v(!1),className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition",children:"Close & Explore"}),e.sequence<l.length?f.jsxs("button",{onClick:()=>{const x=l.find(y=>y.sequence===e.sequence+1);x&&a(x.id)},className:"px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 transition",children:[f.jsxs("span",{children:["Next: Mission ",e.sequence+1]}),f.jsx(YC,{className:"w-3.5 h-3.5"})]}):f.jsx("span",{className:"text-xs text-emerald-400 font-semibold",children:"Campaign Complete! 🎉"})]})]})})]})},EA=({sim:t,onClose:e,reportOnly:n=!1})=>{const[i,r]=se.useState(n?"report":"logs"),[s,a]=se.useState(""),[o,l]=se.useState(null),[c,d]=se.useState({attacker_ip:"",attack_type:"Brute force",compromised_user:""}),[h,p]=se.useState({}),m=t.currentScenario,v=(m==null?void 0:m.logs)||[],S=v.find(_=>_.file.includes("auth.log"))||v[0],g=S?S.lines:[],u=se.useMemo(()=>g.filter(_=>{if(o&&_.geo!==o)return!1;if(!s)return!0;const R=s.toLowerCase();return _.text.toLowerCase().includes(R)||_.src_ip&&_.src_ip.includes(R)||_.geo&&_.geo.toLowerCase().includes(R)}),[g,s,o]),x=se.useMemo(()=>{const _=new Map,R={NL:{x:50,y:32,name:"Netherlands (NL)"},CN:{x:78,y:42,name:"China (CN)"},RU:{x:72,y:26,name:"Russia (RU)"},US:{x:24,y:38,name:"United States (US)"}};for(const C of g)if(C.src_ip&&C.geo&&R[C.geo]){const T=C.geo,N=_.get(T);N?N.count++:_.set(T,{ip:C.src_ip,geo:C.geo,count:1,x:R[C.geo].x,y:R[C.geo].y,name:R[C.geo].name})}return Array.from(_.values())},[g]),y=_=>{const R=c[_]||"";if(!R.trim())return;Fe.playKeyClick();const C=t.submitReport(_,R);C.correct?(Fe.playSuccessBeep(),p(T=>({...T,[_]:{correct:!0,msg:"Verified Correct!"}}))):(Fe.playErrorBeep(),p(T=>({...T,[_]:{correct:!1,msg:`Incorrect answer. ${C.attemptsLeft} attempts remaining.`}})))};return f.jsxs("div",{className:"fixed inset-4 z-40 flex flex-col rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-slate-700 shadow-2xl overflow-hidden animate-fade-in",children:[f.jsxs("div",{className:"flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/40",children:f.jsx(hA,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("h2",{className:"text-sm font-bold text-white flex items-center gap-2",children:[f.jsx("span",{children:"SOC Security Analytics & Incident Response"}),f.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800",children:"WEB1 Target"})]}),f.jsx("p",{className:"text-xs text-slate-400",children:"Log triage, geographic threat correlation, and formal reporting"})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5 p-1 rounded-xl bg-slate-800/80 border border-slate-700 text-xs",children:[f.jsxs("button",{onClick:()=>r("logs"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="logs"?"bg-sky-500 text-slate-950 font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(Aa,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Auth Logs"})]}),f.jsxs("button",{onClick:()=>r("threatmap"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="threatmap"?"bg-sky-500 text-slate-950 font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(q0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Threat Map"})]}),f.jsxs("button",{onClick:()=>r("report"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="report"?"bg-sky-500 text-slate-950 font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(dA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Incident Report"})]})]}),f.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-slate-800 hover:bg-red-950/80 text-slate-400 hover:text-red-400 transition",children:f.jsx(el,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"flex-1 overflow-hidden flex flex-col",children:[i==="logs"&&f.jsxs("div",{className:"flex-1 flex flex-col p-4 overflow-hidden",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[f.jsxs("div",{className:"relative flex-1",children:[f.jsx(uA,{className:"w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"}),f.jsx("input",{type:"text",placeholder:"Filter by keyword (e.g., 'Failed', 'deploy', IP address, 'sshd')...",value:s,onChange:_=>a(_.target.value),className:"w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-slate-200 outline-none focus:border-sky-500 transition"})]}),o&&f.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-950 border border-sky-800 text-xs text-sky-300",children:[f.jsxs("span",{children:["Filtered: ",o]}),f.jsx("button",{onClick:()=>l(null),className:"hover:text-white ml-1",children:"✕"})]}),f.jsxs("div",{className:"text-xs font-mono text-slate-400 px-2",children:["Showing ",u.length," of ",g.length," entries"]})]}),f.jsx("div",{className:"flex-1 rounded-xl bg-slate-900/90 border border-slate-800 p-4 font-mono text-xs overflow-y-auto leading-relaxed select-text space-y-1 crt-screen",children:u.map((_,R)=>{const C=_.text.includes("Failed password"),T=_.text.includes("Accepted password"),N=_.text.includes("sudo");return f.jsxs("div",{className:`flex items-start gap-3 py-0.5 px-2 rounded hover:bg-slate-800/60 transition ${C?"text-red-400/90 bg-red-950/15":T?"text-emerald-400 bg-emerald-950/20 font-bold":N?"text-amber-300":"text-slate-300"}`,children:[f.jsx("span",{className:"text-slate-500 select-none shrink-0",children:_.t}),f.jsx("span",{className:"flex-1 break-all",children:_.text}),_.geo&&f.jsx("span",{className:"px-1.5 py-0.2 rounded bg-sky-950/80 text-sky-300 text-[10px] border border-sky-800 shrink-0 font-bold",children:_.geo})]},R)})})]}),i==="threatmap"&&f.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-hidden",children:[f.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsxs("h3",{className:"text-sm font-bold text-white flex items-center gap-2",children:[f.jsx(q0,{className:"w-4 h-4 text-sky-400"}),f.jsx("span",{children:"Geographic Origin of Authentication Inbound Requests"})]}),f.jsx("p",{className:"text-xs text-slate-400",children:"Click any country threat node to filter associated logs"})]}),f.jsx("div",{className:"flex items-center gap-2 text-xs",children:f.jsxs("span",{className:"flex items-center gap-1.5 text-red-400",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"}),f.jsx("span",{children:"Active Attack Origin"})]})})]}),f.jsx("div",{className:"relative flex-1 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center p-4",children:f.jsxs("svg",{className:"w-full h-full max-w-4xl max-h-[460px]",viewBox:"0 0 100 60",preserveAspectRatio:"xMidYMid meet",children:[f.jsx("path",{d:"M 0 30 L 100 30",stroke:"#1e293b",strokeWidth:"0.3",strokeDasharray:"1,1"}),f.jsx("path",{d:"M 50 0 L 50 60",stroke:"#1e293b",strokeWidth:"0.3",strokeDasharray:"1,1"}),f.jsx("path",{d:"M 12 16 L 28 14 L 32 28 L 22 40 L 14 30 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 24 38 L 34 38 L 30 54 L 25 50 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 46 16 L 56 16 L 58 28 L 48 28 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 46 30 L 60 30 L 56 50 L 50 48 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 60 14 L 88 16 L 84 40 L 62 36 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 80 44 L 92 44 L 90 54 L 82 52 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("circle",{cx:"25",cy:"30",r:"1.4",fill:"#0284c7"}),f.jsx("circle",{cx:"25",cy:"30",r:"3",fill:"none",stroke:"#0284c7",strokeWidth:"0.3",opacity:"0.7",children:f.jsx("animate",{attributeName:"r",values:"1.5;4;1.5",dur:"3s",repeatCount:"indefinite"})}),f.jsx("text",{x:"25",y:"34",fontSize:"1.8",fill:"#38bdf8",textAnchor:"middle",fontWeight:"bold",children:"WEB1 (DC)"}),x.map(_=>{const R=_.geo==="NL",C=R?"#ef4444":"#64748b",T=R?.8:.4,N=(_.x+25)/2,E=Math.min(_.y,30)-8;return f.jsxs("g",{onClick:()=>{Fe.playKeyClick(),l(_.geo),r("logs")},className:"cursor-pointer group",children:[f.jsx("path",{d:`M ${_.x} ${_.y} Q ${N} ${E} 25 30`,fill:"none",stroke:C,strokeWidth:T,strokeDasharray:R?"1.5,1":"none",children:R&&f.jsx("animate",{attributeName:"stroke-dashoffset",values:"20;0",dur:"1.2s",repeatCount:"indefinite"})}),f.jsx("circle",{cx:_.x,cy:_.y,r:R?1.6:1.1,fill:R?"#ef4444":"#94a3b8"}),R&&f.jsx("circle",{cx:_.x,cy:_.y,r:"3",fill:"none",stroke:"#ef4444",strokeWidth:"0.4",children:f.jsx("animate",{attributeName:"r",values:"1.5;4.5;1.5",dur:"1.5s",repeatCount:"indefinite"})}),f.jsxs("text",{x:_.x,y:_.y-2.5,fontSize:"2.0",fill:R?"#f87171":"#cbd5e1",textAnchor:"middle",fontWeight:"bold",children:[_.name," (",_.count," events)"]}),f.jsx("text",{x:_.x,y:_.y+3.6,fontSize:"1.6",fill:"#94a3b8",textAnchor:"middle",fontFamily:"monospace",children:_.ip})]},_.geo)})]})})]}),i==="report"&&f.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto max-w-2xl mx-auto w-full",children:[f.jsxs("div",{className:"mb-6",children:[f.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[f.jsx(Aa,{className:"w-5 h-5 text-sky-400"}),f.jsx("span",{children:"Incident Triage & Threat Report"})]}),f.jsx("p",{className:"text-xs text-slate-400",children:"Submit validated intelligence based on your log analysis. You have a maximum of 3 attempts per field."})]}),f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[f.jsx("label",{className:"block text-xs font-bold text-slate-200 mb-1",children:"1. Attacker External IPv4 Address"}),f.jsx("p",{className:"text-[11px] text-slate-400 mb-2",children:"The IP address responsible for repeated failed login attempts."}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("input",{type:"text",placeholder:"e.g. 203.0.113.45",value:c.attacker_ip,onChange:_=>d({...c,attacker_ip:_.target.value}),className:"flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-slate-100 outline-none focus:border-sky-500"}),f.jsx("button",{onClick:()=>y("attacker_ip"),className:"px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition",children:"Submit"})]}),h.attacker_ip&&f.jsxs("div",{className:`mt-2 text-xs font-medium flex items-center gap-1.5 ${h.attacker_ip.correct?"text-emerald-400":"text-red-400"}`,children:[h.attacker_ip.correct?f.jsx(ms,{className:"w-3.5 h-3.5"}):f.jsx(fc,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:h.attacker_ip.msg})]})]}),f.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[f.jsx("label",{className:"block text-xs font-bold text-slate-200 mb-1",children:"2. Attack Classification Vector"}),f.jsx("p",{className:"text-[11px] text-slate-400 mb-2",children:"The methodology observed in the authentication log patterns."}),f.jsxs("div",{className:"flex gap-2",children:[f.jsxs("select",{value:c.attack_type,onChange:_=>d({...c,attack_type:_.target.value}),className:"flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none focus:border-sky-500",children:[f.jsx("option",{value:"Brute force",children:"Brute force (Dictionary / Credential stuffing)"}),f.jsx("option",{value:"SQL injection",children:"SQL injection"}),f.jsx("option",{value:"Port scan",children:"Port scan"}),f.jsx("option",{value:"Phishing",children:"Phishing"})]}),f.jsx("button",{onClick:()=>y("attack_type"),className:"px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition",children:"Submit"})]}),h.attack_type&&f.jsxs("div",{className:`mt-2 text-xs font-medium flex items-center gap-1.5 ${h.attack_type.correct?"text-emerald-400":"text-red-400"}`,children:[h.attack_type.correct?f.jsx(ms,{className:"w-3.5 h-3.5"}):f.jsx(fc,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:h.attack_type.msg})]})]}),f.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[f.jsx("label",{className:"block text-xs font-bold text-slate-200 mb-1",children:"3. Compromised User Account"}),f.jsx("p",{className:"text-[11px] text-slate-400 mb-2",children:"The specific username that resulted in 'Accepted password' and an open session."}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("input",{type:"text",placeholder:"e.g. deploy",value:c.compromised_user,onChange:_=>d({...c,compromised_user:_.target.value}),className:"flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-slate-100 outline-none focus:border-sky-500"}),f.jsx("button",{onClick:()=>y("compromised_user"),className:"px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition",children:"Submit"})]}),h.compromised_user&&f.jsxs("div",{className:`mt-2 text-xs font-medium flex items-center gap-1.5 ${h.compromised_user.correct?"text-emerald-400":"text-red-400"}`,children:[h.compromised_user.correct?f.jsx(ms,{className:"w-3.5 h-3.5"}):f.jsx(fc,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:h.compromised_user.msg})]})]})]})]})]})]})},wA=({sim:t,onClose:e,initialFile:n="/var/www/login.php"})=>{const[i,r]=se.useState(n),[s,a]=se.useState(""),[o,l]=se.useState(null),c="WEB1",d=t.devices.get(c);t.patchViews(c,i);const h=d==null?void 0:d.vulns.find(x=>x.region.file===i),m=(t.readFile(c,i)||"").split(`
`),v=h?m.slice(0,h.region.firstLine-1):[],S=h?m.slice(h.region.lastLine):[];se.useEffect(()=>{if(h){const x=m.slice(h.region.firstLine-1,h.region.lastLine);a(x.join(`
`)),l(null)}},[i,h]);const g=()=>{if(!h)return;Fe.playKeyClick();const x=t.writePatch(c,h.id,s);x.accepted?(Fe.playSuccessBeep(),l({accepted:!0})):(Fe.playErrorBeep(),l({accepted:!1,hint:x.hint||h.hint}))},u=()=>{i==="/var/www/login.php"?a(`  $res = $db->prepare("SELECT * FROM users WHERE name = ?");
  $res->execute([$user]);`):i==="/var/www/search.php"&&a(`  echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`)};return f.jsxs("div",{className:"fixed inset-4 z-40 flex flex-col rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-indigo-500/50 shadow-2xl overflow-hidden animate-fade-in",children:[f.jsxs("div",{className:"flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40",children:f.jsx(cu,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("h2",{className:"text-sm font-bold text-white flex items-center gap-2",children:[f.jsx("span",{children:"Security Code Patch Editor"}),f.jsxs("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800",children:[c,":",i]})]}),f.jsx("p",{className:"text-xs text-slate-400",children:"Fix vulnerabilities using secure coding standards"})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5 p-1 rounded-xl bg-slate-800/80 border border-slate-700 text-xs",children:[f.jsxs("button",{onClick:()=>r("/var/www/login.php"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="/var/www/login.php"?"bg-indigo-500 text-white font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(Y0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"login.php (SQLi)"})]}),f.jsxs("button",{onClick:()=>r("/var/www/search.php"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="/var/www/search.php"?"bg-indigo-500 text-white font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(Y0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"search.php (XSS)"})]})]}),f.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-slate-800 hover:bg-red-950/80 text-slate-400 hover:text-red-400 transition",children:f.jsx(el,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[f.jsxs("div",{className:"flex-1 flex flex-col p-4 overflow-y-auto font-mono text-xs leading-relaxed select-text",children:[f.jsxs("div",{className:"bg-slate-900/50 p-3 rounded-t-xl border border-slate-800/80 text-slate-500 select-none",children:[f.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-slate-500 mb-2 font-sans font-semibold uppercase tracking-wider",children:[f.jsx(Vc,{className:"w-3 h-3"})," Read-Only Header (Lines 1 - ",v.length,")"]}),v.map((x,y)=>f.jsxs("div",{className:"flex",children:[f.jsx("span",{className:"w-8 text-slate-600 select-none text-right pr-3",children:y+1}),f.jsx("span",{className:"text-slate-400",children:x})]},y))]}),f.jsxs("div",{className:"p-3 bg-indigo-950/20 border-x-2 border-indigo-500/80 bg-slate-900 relative",children:[f.jsxs("div",{className:"flex items-center justify-between text-[11px] text-indigo-300 mb-2 font-sans font-bold",children:[f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400 animate-pulse"}),f.jsxs("span",{children:["Editable Patch Region (Lines ",h==null?void 0:h.region.firstLine," - ",h==null?void 0:h.region.lastLine,")"]})]}),f.jsx("button",{onClick:u,className:"text-xs px-2 py-0.5 rounded bg-indigo-900/60 hover:bg-indigo-800 text-indigo-200 border border-indigo-700/60 transition",children:"Insert Secure Pattern"})]}),f.jsx("textarea",{value:s,onChange:x=>{a(x.target.value),l(null)},rows:4,className:"w-full bg-slate-950 border border-indigo-500/60 rounded-lg p-3 text-emerald-300 font-mono text-xs outline-none focus:border-indigo-400 caret-cyan-400 resize-none shadow-inner",spellCheck:!1})]}),f.jsxs("div",{className:"bg-slate-900/50 p-3 rounded-b-xl border border-slate-800/80 text-slate-500 select-none",children:[f.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-slate-500 mb-2 font-sans font-semibold uppercase tracking-wider",children:[f.jsx(Vc,{className:"w-3 h-3"})," Read-Only Footer"]}),S.map((x,y)=>f.jsxs("div",{className:"flex",children:[f.jsx("span",{className:"w-8 text-slate-600 select-none text-right pr-3",children:((h==null?void 0:h.region.lastLine)||0)+y+1}),f.jsx("span",{className:"text-slate-400",children:x})]},y))]})]}),f.jsxs("div",{className:"w-80 border-l border-slate-800 bg-slate-900/70 p-5 flex flex-col justify-between text-xs",children:[f.jsxs("div",{children:[f.jsxs("h3",{className:"font-bold text-white mb-2 flex items-center gap-2",children:[f.jsx(B_,{className:"w-4 h-4 text-indigo-400"}),f.jsx("span",{children:"Vulnerability Analysis"})]}),i==="/var/www/login.php"?f.jsxs("div",{className:"space-y-3 text-slate-300",children:[f.jsxs("p",{className:"leading-relaxed",children:[f.jsx("strong",{className:"text-indigo-300",children:"CWE-89: SQL Injection"})," in user authentication query."]}),f.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400",children:[f.jsx("div",{className:"font-semibold text-slate-200 mb-1",children:"Expected Secure Pattern:"}),"Use PDO prepared statements with parameter placeholders (",f.jsx("code",{className:"text-emerald-400",children:"?"}),"):",f.jsx("pre",{className:"mt-1.5 p-1.5 rounded bg-slate-900 text-emerald-300 overflow-x-auto",children:`$res = $db->prepare("SELECT * FROM users WHERE name = ?");
$res->execute([$user]);`})]})]}):f.jsxs("div",{className:"space-y-3 text-slate-300",children:[f.jsxs("p",{className:"leading-relaxed",children:[f.jsx("strong",{className:"text-indigo-300",children:"CWE-79: Reflected XSS"})," in search result rendering."]}),f.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400",children:[f.jsx("div",{className:"font-semibold text-slate-200 mb-1",children:"Expected Secure Pattern:"}),"Escape HTML characters with ",f.jsx("code",{className:"text-emerald-400",children:"htmlspecialchars()"}),":",f.jsx("pre",{className:"mt-1.5 p-1.5 rounded bg-slate-900 text-emerald-300 overflow-x-auto",children:`echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`})]})]}),o&&f.jsxs("div",{className:`mt-4 p-3.5 rounded-xl border flex items-start gap-2.5 ${o.accepted?"bg-emerald-950/40 border-emerald-500/60 text-emerald-300":"bg-amber-950/40 border-amber-500/60 text-amber-300"}`,children:[o.accepted?f.jsx(ms,{className:"w-5 h-5 text-emerald-400 shrink-0"}):f.jsx(fc,{className:"w-5 h-5 text-amber-400 shrink-0"}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold",children:o.accepted?"Patch Verified & Accepted!":"Patch Needs Adjustment"}),o.hint&&f.jsx("p",{className:"text-[11px] mt-1 leading-snug",children:o.hint})]})]})]}),f.jsx("div",{className:"pt-4 border-t border-slate-800",children:f.jsxs("button",{onClick:g,className:"w-full py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 transition",children:[f.jsx(cA,{className:"w-4 h-4"}),f.jsx("span",{children:"Save & Verify Patch"})]})})]})]})]})},bA=({currentScenarioId:t,allScenarios:e,completedIds:n,onSelect:i,onClose:r})=>f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"max-w-2xl w-full rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 text-slate-200",children:[f.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-5",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40",children:f.jsx(S_,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-base font-bold text-white",children:"Campaign Mission Catalog"}),f.jsx("p",{className:"text-xs text-slate-400",children:"CCNA Networking & Cyber Security Simulator"})]})]}),f.jsx("button",{onClick:r,className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition",children:f.jsx(el,{className:"w-4 h-4"})})]}),f.jsx("div",{className:"space-y-3.5",children:e.map((s,a)=>{const o=n.includes(s.id),l=s.id===t,c=a===0||n.includes(e[a-1].id)||l;return f.jsxs("div",{onClick:()=>{c&&(Fe.playKeyClick(),i(s.id),r())},className:`p-4 rounded-xl border transition-all flex items-center justify-between ${l?"bg-cyan-950/40 border-cyan-500/80 shadow-lg shadow-cyan-950/50":c?"bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40 cursor-pointer":"bg-slate-950/30 border-slate-900 opacity-50 cursor-not-allowed"}`,children:[f.jsxs("div",{className:"flex items-start gap-3.5",children:[f.jsxs("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 ${o?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":l?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/50":c?"bg-slate-800 text-slate-300 border border-slate-700":"bg-slate-900 text-slate-600"}`,children:["M",s.sequence]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("h3",{className:"font-bold text-white text-sm",children:s.title}),o&&f.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-medium flex items-center gap-1",children:[f.jsx(ms,{className:"w-3 h-3"})," Solved"]}),l&&f.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-medium",children:"Active"})]}),f.jsx("p",{className:"text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed",children:s.briefing})]})]}),f.jsx("div",{className:"shrink-0 ml-4",children:c?f.jsxs("button",{className:"px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-cyan-600 hover:text-white text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition",children:[f.jsx(aA,{className:"w-3 h-3 fill-current"}),f.jsx("span",{children:l?"Continue":"Launch"})]}):f.jsx("div",{className:"p-2 rounded-xl bg-slate-900 text-slate-600",children:f.jsx(Vc,{className:"w-4 h-4"})})})]},s.id)})})]})}),TA=({scenario:t,objectives:e,isOpen:n,onClose:i,onOpenTerminal:r,onOpenReport:s,onOpenCodeEditor:a})=>{const o=e.findIndex(u=>!u.passed&&!u.locked),l=o!==-1?o:0,[c,d]=se.useState(l),[h,p]=se.useState(null);if(se.useEffect(()=>{if(n){const u=e.findIndex(x=>!x.passed&&!x.locked);d(u!==-1?u:0),Fe.playKeyClick()}},[n,e]),se.useEffect(()=>{if(!n)return;const u=x=>{x.key==="Escape"?(x.preventDefault(),i()):x.key==="ArrowLeft"?(x.preventDefault(),d(y=>Math.max(0,y-1)),Fe.playKeyClick()):x.key==="ArrowRight"&&(x.preventDefault(),d(y=>Math.min(e.length-1,y+1)),Fe.playKeyClick())};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[n,e.length,i]),!n||e.length===0)return null;const m=e[c]||e[0],v=m.guidance,S=u=>{navigator.clipboard.writeText(u),p(u),Fe.playKeyClick(),setTimeout(()=>{p(null)},2e3)},g=()=>{Fe.playKeyClick(),i(),(v==null?void 0:v.actionType)==="terminal"&&v.targetDevice&&r?r(v.targetDevice):(v==null?void 0:v.actionType)==="report"&&s?s():(v==null?void 0:v.actionType)==="editor"&&a&&a()};return f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-amber-500/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[f.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40",children:f.jsx(gp,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("h2",{className:"text-sm font-bold text-white tracking-wide",children:"Contextual Guidance & Step-by-Step Hint"}),f.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-800",children:"Shortcut: [H]"})]}),f.jsxs("p",{className:"text-xs text-slate-400",children:["Step-by-step walk-through for: ",f.jsx("strong",{className:"text-slate-200",children:t.title})]})]})]}),f.jsx("button",{onClick:i,className:"p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition",title:"Close [Esc or H]",children:f.jsx(el,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"px-6 py-2.5 bg-slate-900/60 border-b border-slate-800/80 flex items-center justify-between text-xs overflow-x-auto gap-2",children:[f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("button",{onClick:()=>{d(u=>Math.max(0,u-1)),Fe.playKeyClick()},disabled:c===0,className:"p-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300",title:"Previous objective (←)",children:f.jsx(KC,{className:"w-4 h-4"})}),f.jsxs("span",{className:"font-mono text-slate-300 px-2 font-semibold text-[11px]",children:["Step ",c+1," of ",e.length]}),f.jsx("button",{onClick:()=>{d(u=>Math.min(e.length-1,u+1)),Fe.playKeyClick()},disabled:c===e.length-1,className:"p-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300",title:"Next objective (→)",children:f.jsx(ZC,{className:"w-4 h-4"})})]}),f.jsx("div",{className:"flex items-center gap-1.5",children:e.map((u,x)=>f.jsx("button",{onClick:()=>{d(x),Fe.playKeyClick()},className:`w-2.5 h-2.5 rounded-full transition-all ${x===c?"w-6 bg-amber-400":u.passed?"bg-emerald-500":u.locked?"bg-slate-700":"bg-slate-500 hover:bg-amber-400/60"}`,title:`Objective ${x+1}: ${u.description}`},u.id))}),f.jsx("div",{className:"flex items-center gap-1.5",children:m.passed?f.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-[11px] font-semibold flex items-center gap-1",children:[f.jsx(ms,{className:"w-3 h-3"})," Completed"]}):m.locked?f.jsx("span",{className:"px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 text-[11px] font-medium",children:"Prerequisite Locked"}):f.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-700 text-[11px] font-semibold flex items-center gap-1 animate-pulse",children:[f.jsx(l_,{className:"w-2.5 h-2.5 fill-current"})," Active Target"]})})]}),f.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-5 text-xs text-slate-200",children:[f.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start justify-between gap-4",children:[f.jsxs("div",{children:[f.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5",children:f.jsx("span",{children:"Objective Goal:"})}),f.jsx("h3",{className:"text-sm font-semibold text-white leading-snug",children:m.description}),m.detail&&f.jsxs("div",{className:"text-[11px] text-amber-300/90 font-mono mt-1.5 flex items-center gap-1",children:[f.jsx(QC,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsxs("span",{children:["Current Status: ",m.detail]})]})]}),v&&f.jsxs("button",{onClick:g,className:"shrink-0 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition",children:[v.actionType==="terminal"&&f.jsx(Wo,{className:"w-4 h-4"}),v.actionType==="cable"&&f.jsx(sh,{className:"w-4 h-4"}),v.actionType==="report"&&f.jsx(Aa,{className:"w-4 h-4"}),v.actionType==="editor"&&f.jsx(cu,{className:"w-4 h-4"}),f.jsx("span",{children:v.actionType==="terminal"?`Open ${v.targetDevice||"Device"} Console`:v.actionType==="report"?"Open Incident Report":v.actionType==="editor"?"Open Patch Editor":"Jump to Cabling"}),f.jsx(eA,{className:"w-3 h-3 ml-0.5 opacity-70"})]})]}),v&&v.steps.length>0?f.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3",children:[f.jsxs("div",{className:"font-bold text-slate-100 flex items-center gap-2 text-xs",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),f.jsx("span",{children:"Step-by-Step Instructions:"})]}),f.jsx("div",{className:"space-y-2.5",children:v.steps.map((u,x)=>f.jsxs("div",{className:"flex items-start gap-3 text-slate-300",children:[f.jsx("span",{className:"w-5 h-5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5",children:x+1}),f.jsx("span",{className:"leading-relaxed flex-1",children:u})]},x))})]}):f.jsx("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-400",children:m.hint||"Review the mission briefing for requirements on this step."}),(v==null?void 0:v.suggestedCommands)&&v.suggestedCommands.length>0&&f.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/95 border border-slate-800/90",children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsxs("span",{className:"text-[11px] font-mono font-bold text-emerald-400 flex items-center gap-1.5",children:[f.jsx(Wo,{className:"w-3.5 h-3.5"}),f.jsxs("span",{children:["Command Sequence (",v.targetDevice||"Console","):"]})]}),f.jsxs("button",{onClick:()=>S(v.suggestedCommands.join(`
`)),className:"flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium transition",children:[h?f.jsx(Zx,{className:"w-3 h-3 text-emerald-400"}):f.jsx(JC,{className:"w-3 h-3"}),f.jsx("span",{children:h?"Copied!":"Copy Commands"})]})]}),f.jsx("pre",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed select-text",children:v.suggestedCommands.join(`
`)})]}),(v==null?void 0:v.explanation)&&f.jsxs("div",{className:"p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 text-slate-300 text-xs",children:[f.jsxs("div",{className:"font-bold text-sky-400 mb-1 flex items-center gap-1.5",children:[f.jsx(rh,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Under the Hood & CCNA Concepts:"})]}),f.jsx("p",{className:"leading-relaxed text-slate-300",children:v.explanation})]})]}),f.jsxs("div",{className:"px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400",children:[f.jsxs("div",{className:"flex items-center gap-3 text-[11px]",children:[f.jsxs("span",{className:"flex items-center gap-1",children:[f.jsx(iA,{className:"w-3.5 h-3.5 text-slate-500"}),f.jsxs("span",{children:["Press ",f.jsx("strong",{className:"text-slate-300",children:"H"})," or ",f.jsx("strong",{className:"text-slate-300",children:"Esc"})," to close"]})]}),f.jsx("span",{children:"•"}),f.jsxs("span",{children:["Use ",f.jsx("strong",{className:"text-slate-300",children:"← / →"})," keys to navigate steps"]})]}),f.jsx("button",{onClick:i,className:"px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition",children:"Got It"})]})]})})},CA=()=>{const t=se.useMemo(()=>new XS,[]),[e,n]=se.useState("m0_orientation"),[i,r]=se.useState([]),[s,a]=se.useState(()=>{try{const E=localStorage.getItem("netsec_completed_missions");return E?JSON.parse(E):[]}catch{return[]}}),[o,l]=se.useState(null),[c,d]=se.useState(null),[h,p]=se.useState(!1),[m,v]=se.useState(!1),[S,g]=se.useState("/var/www/login.php"),[u,x]=se.useState(!1),[y,_]=se.useState(!1),[R,C]=se.useState(!0),T=se.useMemo(()=>yl.find(E=>E.id===e)||mf,[e]),N=se.useCallback(E=>{const M=yl.find(P=>P.id===E)||mf;n(M.id),d(null),p(!1),v(!1),_(!1),t.loadScenario(M),r(t.objectiveStates()),M.id==="m0_orientation"?(l("PC-A"),_(!0)):M.id==="m1_vlan_ping"?l("R1"):M.id==="m2_log_triage"?l("SOC-PC"):M.id==="m3_web_patch"&&l("PC-1")},[t]);return se.useEffect(()=>{N(e),t.onObjectiveUpdated=E=>{r([...E])},t.onMissionCompleted=E=>{Fe.playSuccessBeep(),a(M=>{if(!M.includes(E)){const P=[...M,E];try{localStorage.setItem("netsec_completed_missions",JSON.stringify(P))}catch{}return P}return M})}},[t,N,e]),se.useEffect(()=>{const E=M=>{M.target instanceof HTMLInputElement||M.target instanceof HTMLTextAreaElement||(M.key==="h"||M.key==="H")&&(M.preventDefault(),_(P=>!P))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[]),f.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-slate-950 font-sans flex flex-col",children:[f.jsxs("header",{className:"h-12 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md px-4 flex items-center justify-between z-30 select-none",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/20",children:f.jsx(pA,{className:"w-4 h-4 fill-current"})}),f.jsx("div",{children:f.jsxs("span",{className:"font-bold text-white text-sm tracking-tight flex items-center gap-1.5",children:[f.jsx("span",{children:"NetSec 3D Simulator"}),f.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono font-semibold",children:"v1.0"})]})})]}),f.jsxs("button",{onClick:()=>{Fe.playKeyClick(),x(!0)},className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 transition",children:[f.jsx(S_,{className:"w-3.5 h-3.5 text-cyan-400"}),f.jsxs("span",{children:["M",T.sequence,": ",T.title]})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("button",{onClick:()=>{if(Fe.playKeyClick(),o)l(null);else{const E=Array.from(t.devices.keys())[0]||"R1";l(E)}},className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${o?"bg-cyan-500 text-slate-950 border-cyan-400 font-bold":"bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700"}`,children:[f.jsx(Wo,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"CLI Terminal"})]}),T.id==="m2_log_triage"&&f.jsxs("button",{onClick:()=>{Fe.playKeyClick(),p(!0)},className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-950 hover:bg-sky-900 border border-sky-700 text-sky-300 text-xs font-semibold transition",children:[f.jsx(Aa,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"SOC Logs & Threat Map"})]}),T.id==="m3_web_patch"&&f.jsxs("button",{onClick:()=>{Fe.playKeyClick(),v(!0)},className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-950 hover:bg-indigo-900 border border-indigo-700 text-indigo-300 text-xs font-semibold transition",children:[f.jsx(cu,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Patch Editor"})]}),f.jsxs("button",{onClick:()=>{Fe.playKeyClick(),_(E=>!E)},className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${y?"bg-amber-500 text-slate-950 border-amber-400 font-bold":"bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/40"}`,title:"Contextual Step-by-Step Guidance (Press 'H')",children:[f.jsx(gp,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsx("span",{children:"Guidance (H)"})]}),f.jsx("button",{onClick:()=>{const E=!R;C(E),Fe.enabled=E},title:R?"Mute Audio":"Unmute Audio",className:"p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition",children:R?f.jsx(X_,{className:"w-4 h-4 text-cyan-400"}):f.jsx(Y_,{className:"w-4 h-4"})})]})]}),f.jsxs("main",{className:"relative flex-1 w-full h-full overflow-hidden",children:[f.jsx(yA,{sim:t,onOpenTerminal:E=>l(E),selectedPort:c,onSelectPort:d,onOpenThreatMap:()=>p(!0),onOpenCodeEditor:E=>{const M=E.split(":");M[1]&&g(M[1]),v(!0)}}),f.jsx(MA,{sim:t,scenario:T,objectives:i,onOpenReport:()=>p(!0),onOpenCodeEditor:()=>v(!0),onOpenHint:()=>_(!0),onSelectMission:N,onRestartMission:()=>N(T.id),allScenarios:yl}),o&&f.jsx(SA,{sim:t,deviceId:o,onClose:()=>l(null),onSwitchDevice:E=>l(E),onOpenCodeEditor:E=>{const M=E.split(":");M[1]&&g(M[1]),v(!0)}}),f.jsx(TA,{scenario:T,objectives:i,isOpen:y,onClose:()=>_(!1),onOpenTerminal:E=>l(E),onOpenReport:()=>p(!0),onOpenCodeEditor:()=>v(!0)}),h&&f.jsx(EA,{sim:t,onClose:()=>p(!1)}),m&&f.jsx(wA,{sim:t,initialFile:S,onClose:()=>v(!1)}),u&&f.jsx(bA,{currentScenarioId:T.id,allScenarios:yl,completedIds:s,onSelect:E=>N(E),onClose:()=>x(!1)})]})]})};yd.createRoot(document.getElementById("root")).render(f.jsx(v1.StrictMode,{children:f.jsx(CA,{})}));
