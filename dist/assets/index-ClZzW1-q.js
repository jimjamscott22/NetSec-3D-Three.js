var W_=Object.defineProperty;var $_=(t,e,n)=>e in t?W_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ve=(t,e,n)=>$_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function X_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var F0={exports:{}},Nc={},B0={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),q_=Symbol.for("react.portal"),Y_=Symbol.for("react.fragment"),K_=Symbol.for("react.strict_mode"),Z_=Symbol.for("react.profiler"),Q_=Symbol.for("react.provider"),J_=Symbol.for("react.context"),e1=Symbol.for("react.forward_ref"),t1=Symbol.for("react.suspense"),n1=Symbol.for("react.memo"),i1=Symbol.for("react.lazy"),cp=Symbol.iterator;function r1(t){return t===null||typeof t!="object"?null:(t=cp&&t[cp]||t["@@iterator"],typeof t=="function"?t:null)}var z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H0=Object.assign,V0={};function ma(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||z0}ma.prototype.isReactComponent={};ma.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ma.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function G0(){}G0.prototype=ma.prototype;function Yf(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||z0}var Kf=Yf.prototype=new G0;Kf.constructor=Yf;H0(Kf,ma.prototype);Kf.isPureReactComponent=!0;var up=Array.isArray,j0=Object.prototype.hasOwnProperty,Zf={current:null},W0={key:!0,ref:!0,__self:!0,__source:!0};function $0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)j0.call(e,i)&&!W0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Po,type:t,key:s,ref:a,props:r,_owner:Zf.current}}function s1(t,e){return{$$typeof:Po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Po}function a1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dp=/\/+/g;function tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?a1(""+t.key):e.toString(36)}function Dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Po:case q_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+tu(a,0):i,up(r)?(n="",t!=null&&(n=t.replace(dp,"$&/")+"/"),Dl(r,e,n,"",function(c){return c})):r!=null&&(Qf(r)&&(r=s1(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(dp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",up(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+tu(s,o);a+=Dl(s,e,n,l,r)}else if(l=r1(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+tu(s,o++),a+=Dl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Go(t,e,n){if(t==null)return t;var i=[],r=0;return Dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function o1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yn={current:null},Ul={transition:null},l1={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:Zf};function X0(){throw Error("act(...) is not supported in production builds of React.")}ft.Children={map:Go,forEach:function(t,e,n){Go(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Go(t,function(){e++}),e},toArray:function(t){return Go(t,function(e){return e})||[]},only:function(t){if(!Qf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ft.Component=ma;ft.Fragment=Y_;ft.Profiler=Z_;ft.PureComponent=Yf;ft.StrictMode=K_;ft.Suspense=t1;ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l1;ft.act=X0;ft.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=H0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Zf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)j0.call(e,l)&&!W0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Po,type:t.type,key:r,ref:s,props:i,_owner:a}};ft.createContext=function(t){return t={$$typeof:J_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Q_,_context:t},t.Consumer=t};ft.createElement=$0;ft.createFactory=function(t){var e=$0.bind(null,t);return e.type=t,e};ft.createRef=function(){return{current:null}};ft.forwardRef=function(t){return{$$typeof:e1,render:t}};ft.isValidElement=Qf;ft.lazy=function(t){return{$$typeof:i1,_payload:{_status:-1,_result:t},_init:o1}};ft.memo=function(t,e){return{$$typeof:n1,type:t,compare:e===void 0?null:e}};ft.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};ft.unstable_act=X0;ft.useCallback=function(t,e){return yn.current.useCallback(t,e)};ft.useContext=function(t){return yn.current.useContext(t)};ft.useDebugValue=function(){};ft.useDeferredValue=function(t){return yn.current.useDeferredValue(t)};ft.useEffect=function(t,e){return yn.current.useEffect(t,e)};ft.useId=function(){return yn.current.useId()};ft.useImperativeHandle=function(t,e,n){return yn.current.useImperativeHandle(t,e,n)};ft.useInsertionEffect=function(t,e){return yn.current.useInsertionEffect(t,e)};ft.useLayoutEffect=function(t,e){return yn.current.useLayoutEffect(t,e)};ft.useMemo=function(t,e){return yn.current.useMemo(t,e)};ft.useReducer=function(t,e,n){return yn.current.useReducer(t,e,n)};ft.useRef=function(t){return yn.current.useRef(t)};ft.useState=function(t){return yn.current.useState(t)};ft.useSyncExternalStore=function(t,e,n){return yn.current.useSyncExternalStore(t,e,n)};ft.useTransition=function(){return yn.current.useTransition()};ft.version="18.3.1";B0.exports=ft;var de=B0.exports;const c1=X_(de);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u1=de,d1=Symbol.for("react.element"),f1=Symbol.for("react.fragment"),h1=Object.prototype.hasOwnProperty,p1=u1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m1={key:!0,ref:!0,__self:!0,__source:!0};function q0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)h1.call(e,i)&&!m1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:d1,type:t,key:s,ref:a,props:r,_owner:p1.current}}Nc.Fragment=f1;Nc.jsx=q0;Nc.jsxs=q0;F0.exports=Nc;var f=F0.exports,cd={},Y0={exports:{}},Bn={},K0={exports:{}},Z0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,J){var K=I.length;I.push(J);e:for(;0<K;){var me=K-1>>>1,Le=I[me];if(0<r(Le,J))I[me]=J,I[K]=Le,K=me;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var J=I[0],K=I.pop();if(K!==J){I[0]=K;e:for(var me=0,Le=I.length,ht=Le>>>1;me<ht;){var X=2*(me+1)-1,fe=I[X],Me=X+1,pe=I[Me];if(0>r(fe,K))Me<Le&&0>r(pe,fe)?(I[me]=pe,I[Me]=K,me=Me):(I[me]=fe,I[X]=K,me=X);else if(Me<Le&&0>r(pe,K))I[me]=pe,I[Me]=K,me=Me;else break e}}return J}function r(I,J){var K=I.sortIndex-J.sortIndex;return K!==0?K:I.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,p=3,m=!1,v=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var J=n(c);J!==null;){if(J.callback===null)i(c);else if(J.startTime<=I)i(c),J.sortIndex=J.expirationTime,e(l,J);else break;J=n(c)}}function _(I){if(S=!1,y(I),!v)if(n(l)!==null)v=!0,q(A);else{var J=n(c);J!==null&&se(_,J.startTime-I)}}function A(I,J){v=!1,S&&(S=!1,u(R),R=-1),m=!0;var K=p;try{for(y(J),h=n(l);h!==null&&(!(h.expirationTime>J)||I&&!P());){var me=h.callback;if(typeof me=="function"){h.callback=null,p=h.priorityLevel;var Le=me(h.expirationTime<=J);J=t.unstable_now(),typeof Le=="function"?h.callback=Le:h===n(l)&&i(l),y(J)}else i(l);h=n(l)}if(h!==null)var ht=!0;else{var X=n(c);X!==null&&se(_,X.startTime-J),ht=!1}return ht}finally{h=null,p=K,m=!1}}var C=!1,T=null,R=-1,E=5,M=-1;function P(){return!(t.unstable_now()-M<E)}function H(){if(T!==null){var I=t.unstable_now();M=I;var J=!0;try{J=T(!0,I)}finally{J?z():(C=!1,T=null)}}else C=!1}var z;if(typeof x=="function")z=function(){x(H)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,te=Y.port2;Y.port1.onmessage=H,z=function(){te.postMessage(null)}}else z=function(){g(H,0)};function q(I){T=I,C||(C=!0,z())}function se(I,J){R=g(function(){I(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,q(A))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(p){case 1:case 2:case 3:var J=3;break;default:J=p}var K=p;p=J;try{return I()}finally{p=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,J){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=p;p=I;try{return J()}finally{p=K}},t.unstable_scheduleCallback=function(I,J,K){var me=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?me+K:me):K=me,I){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=K+Le,I={id:d++,callback:J,priorityLevel:I,startTime:K,expirationTime:Le,sortIndex:-1},K>me?(I.sortIndex=K,e(c,I),n(l)===null&&I===n(c)&&(S?(u(R),R=-1):S=!0,se(_,K-me))):(I.sortIndex=Le,e(l,I),v||m||(v=!0,q(A))),I},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(I){var J=p;return function(){var K=p;p=J;try{return I.apply(this,arguments)}finally{p=K}}}})(Z0);K0.exports=Z0;var g1=K0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1=de,Fn=g1;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q0=new Set,uo={};function ls(t,e){ta(t,e),ta(t+"Capture",e)}function ta(t,e){for(uo[t]=e,t=0;t<e.length;t++)Q0.add(e[t])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=Object.prototype.hasOwnProperty,x1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fp={},hp={};function _1(t){return ud.call(hp,t)?!0:ud.call(fp,t)?!1:x1.test(t)?hp[t]=!0:(fp[t]=!0,!1)}function y1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S1(t,e,n,i){if(e===null||typeof e>"u"||y1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Sn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){sn[t]=new Sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];sn[e]=new Sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){sn[t]=new Sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){sn[t]=new Sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){sn[t]=new Sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){sn[t]=new Sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){sn[t]=new Sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){sn[t]=new Sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){sn[t]=new Sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jf=/[\-:]([a-z])/g;function eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jf,eh);sn[e]=new Sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jf,eh);sn[e]=new Sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jf,eh);sn[e]=new Sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){sn[t]=new Sn(t,1,!1,t.toLowerCase(),null,!1,!1)});sn.xlinkHref=new Sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){sn[t]=new Sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function th(t,e,n,i){var r=sn.hasOwnProperty(e)?sn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(S1(e,n,r,i)&&(n=null),i||r===null?_1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Yi=v1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jo=Symbol.for("react.element"),ks=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),J0=Symbol.for("react.provider"),eg=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),fd=Symbol.for("react.suspense"),hd=Symbol.for("react.suspense_list"),rh=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),tg=Symbol.for("react.offscreen"),pp=Symbol.iterator;function Aa(t){return t===null||typeof t!="object"?null:(t=pp&&t[pp]||t["@@iterator"],typeof t=="function"?t:null)}var Ut=Object.assign,nu;function Ga(t){if(nu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nu=e&&e[1]||""}return`
`+nu+t}var iu=!1;function ru(t,e){if(!t||iu)return"";iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ga(t):""}function M1(t){switch(t.tag){case 5:return Ga(t.type);case 16:return Ga("Lazy");case 13:return Ga("Suspense");case 19:return Ga("SuspenseList");case 0:case 2:case 15:return t=ru(t.type,!1),t;case 11:return t=ru(t.type.render,!1),t;case 1:return t=ru(t.type,!0),t;default:return""}}function pd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case ks:return"Portal";case dd:return"Profiler";case nh:return"StrictMode";case fd:return"Suspense";case hd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case eg:return(t.displayName||"Context")+".Consumer";case J0:return(t._context.displayName||"Context")+".Provider";case ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rh:return e=t.displayName||null,e!==null?e:pd(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return pd(t(e))}catch{}}return null}function E1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pd(e);case 8:return e===nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ng(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function w1(t){var e=ng(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wo(t){t._valueTracker||(t._valueTracker=w1(t))}function ig(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ng(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ec(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function md(t,e){var n=e.checked;return Ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rg(t,e){e=e.checked,e!=null&&th(t,"checked",e,!1)}function gd(t,e){rg(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vd(t,e.type,n):e.hasOwnProperty("defaultValue")&&vd(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vd(t,e,n){(e!=="number"||ec(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ja=Array.isArray;function $s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(ja(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function sg(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function xp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ag(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ag(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $o,og=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($o=$o||document.createElement("div"),$o.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$o.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b1=["Webkit","ms","Moz","O"];Object.keys(Ya).forEach(function(t){b1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ya[e]=Ya[t]})});function lg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ya.hasOwnProperty(t)&&Ya[t]?(""+e).trim():e+"px"}function cg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=lg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var T1=Ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yd(t,e){if(e){if(T1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=null;function sh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ed=null,Xs=null,qs=null;function _p(t){if(t=Io(t)){if(typeof Ed!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Dc(e),Ed(t.stateNode,t.type,e))}}function ug(t){Xs?qs?qs.push(t):qs=[t]:Xs=t}function dg(){if(Xs){var t=Xs,e=qs;if(qs=Xs=null,_p(t),e)for(t=0;t<e.length;t++)_p(e[t])}}function fg(t,e){return t(e)}function hg(){}var su=!1;function pg(t,e,n){if(su)return t(e,n);su=!0;try{return fg(t,e,n)}finally{su=!1,(Xs!==null||qs!==null)&&(hg(),dg())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var i=Dc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var wd=!1;if(ji)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){wd=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{wd=!1}function C1(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ka=!1,tc=null,nc=!1,bd=null,A1={onError:function(t){Ka=!0,tc=t}};function R1(t,e,n,i,r,s,a,o,l){Ka=!1,tc=null,C1.apply(A1,arguments)}function N1(t,e,n,i,r,s,a,o,l){if(R1.apply(this,arguments),Ka){if(Ka){var c=tc;Ka=!1,tc=null}else throw Error(ce(198));nc||(nc=!0,bd=c)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yp(t){if(cs(t)!==t)throw Error(ce(188))}function P1(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yp(r),t;if(s===i)return yp(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function gg(t){return t=P1(t),t!==null?vg(t):null}function vg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vg(t);if(e!==null)return e;t=t.sibling}return null}var xg=Fn.unstable_scheduleCallback,Sp=Fn.unstable_cancelCallback,L1=Fn.unstable_shouldYield,k1=Fn.unstable_requestPaint,Ht=Fn.unstable_now,I1=Fn.unstable_getCurrentPriorityLevel,ah=Fn.unstable_ImmediatePriority,_g=Fn.unstable_UserBlockingPriority,ic=Fn.unstable_NormalPriority,D1=Fn.unstable_LowPriority,yg=Fn.unstable_IdlePriority,Pc=null,wi=null;function U1(t){if(wi&&typeof wi.onCommitFiberRoot=="function")try{wi.onCommitFiberRoot(Pc,t,void 0,(t.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:B1,O1=Math.log,F1=Math.LN2;function B1(t){return t>>>=0,t===0?32:31-(O1(t)/F1|0)|0}var Xo=64,qo=4194304;function Wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Wa(o):(s&=a,s!==0&&(i=Wa(s)))}else a=n&~r,a!==0?i=Wa(a):s!==0&&(i=Wa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-di(e),r=1<<n,i|=t[n],e&=~r;return i}function z1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-di(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=z1(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Td(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sg(){var t=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),t}function au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-di(e),t[e]=n}function V1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-di(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var yt=0;function Mg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Eg,lh,wg,bg,Tg,Cd=!1,Yo=[],hr=null,pr=null,mr=null,po=new Map,mo=new Map,or=[],G1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mp(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(e.pointerId)}}function Na(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Io(e),e!==null&&lh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function j1(t,e,n,i,r){switch(e){case"focusin":return hr=Na(hr,t,e,n,i,r),!0;case"dragenter":return pr=Na(pr,t,e,n,i,r),!0;case"mouseover":return mr=Na(mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return po.set(s,Na(po.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,mo.set(s,Na(mo.get(s)||null,t,e,n,i,r)),!0}return!1}function Cg(t){var e=$r(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=mg(n),e!==null){t.blockedOn=e,Tg(t.priority,function(){wg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ad(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Md=i,n.target.dispatchEvent(i),Md=null}else return e=Io(n),e!==null&&lh(e),t.blockedOn=n,!1;e.shift()}return!0}function Ep(t,e,n){Ol(t)&&n.delete(e)}function W1(){Cd=!1,hr!==null&&Ol(hr)&&(hr=null),pr!==null&&Ol(pr)&&(pr=null),mr!==null&&Ol(mr)&&(mr=null),po.forEach(Ep),mo.forEach(Ep)}function Pa(t,e){t.blockedOn===e&&(t.blockedOn=null,Cd||(Cd=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,W1)))}function go(t){function e(r){return Pa(r,t)}if(0<Yo.length){Pa(Yo[0],t);for(var n=1;n<Yo.length;n++){var i=Yo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(hr!==null&&Pa(hr,t),pr!==null&&Pa(pr,t),mr!==null&&Pa(mr,t),po.forEach(e),mo.forEach(e),n=0;n<or.length;n++)i=or[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)Cg(n),n.blockedOn===null&&or.shift()}var Ys=Yi.ReactCurrentBatchConfig,sc=!0;function $1(t,e,n,i){var r=yt,s=Ys.transition;Ys.transition=null;try{yt=1,ch(t,e,n,i)}finally{yt=r,Ys.transition=s}}function X1(t,e,n,i){var r=yt,s=Ys.transition;Ys.transition=null;try{yt=4,ch(t,e,n,i)}finally{yt=r,Ys.transition=s}}function ch(t,e,n,i){if(sc){var r=Ad(t,e,n,i);if(r===null)gu(t,e,i,ac,n),Mp(t,i);else if(j1(r,t,e,n,i))i.stopPropagation();else if(Mp(t,i),e&4&&-1<G1.indexOf(t)){for(;r!==null;){var s=Io(r);if(s!==null&&Eg(s),s=Ad(t,e,n,i),s===null&&gu(t,e,i,ac,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gu(t,e,i,null,n)}}var ac=null;function Ad(t,e,n,i){if(ac=null,t=sh(i),t=$r(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ac=t,null}function Ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(I1()){case ah:return 1;case _g:return 4;case ic:case D1:return 16;case yg:return 536870912;default:return 16}default:return 16}}var ur=null,uh=null,Fl=null;function Rg(){if(Fl)return Fl;var t,e=uh,n=e.length,i,r="value"in ur?ur.value:ur.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Fl=r.slice(t,1<i?1-i:void 0)}function Bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function wp(){return!1}function zn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ko:wp,this.isPropagationStopped=wp,this}return Ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),e}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=zn(ga),ko=Ut({},ga,{view:0,detail:0}),q1=zn(ko),ou,lu,La,Lc=Ut({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==La&&(La&&t.type==="mousemove"?(ou=t.screenX-La.screenX,lu=t.screenY-La.screenY):lu=ou=0,La=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),bp=zn(Lc),Y1=Ut({},Lc,{dataTransfer:0}),K1=zn(Y1),Z1=Ut({},ko,{relatedTarget:0}),cu=zn(Z1),Q1=Ut({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),J1=zn(Q1),ey=Ut({},ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ty=zn(ey),ny=Ut({},ga,{data:0}),Tp=zn(ny),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sy[t])?!!e[t]:!1}function fh(){return ay}var oy=Ut({},ko,{key:function(t){if(t.key){var e=iy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ry[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ly=zn(oy),cy=Ut({},Lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=zn(cy),uy=Ut({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),dy=zn(uy),fy=Ut({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=zn(fy),py=Ut({},Lc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),my=zn(py),gy=[9,13,27,32],hh=ji&&"CompositionEvent"in window,Za=null;ji&&"documentMode"in document&&(Za=document.documentMode);var vy=ji&&"TextEvent"in window&&!Za,Ng=ji&&(!hh||Za&&8<Za&&11>=Za),Ap=" ",Rp=!1;function Pg(t,e){switch(t){case"keyup":return gy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function xy(t,e){switch(t){case"compositionend":return Lg(e);case"keypress":return e.which!==32?null:(Rp=!0,Ap);case"textInput":return t=e.data,t===Ap&&Rp?null:t;default:return null}}function _y(t,e){if(Ds)return t==="compositionend"||!hh&&Pg(t,e)?(t=Rg(),Fl=uh=ur=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ng&&e.locale!=="ko"?null:e.data;default:return null}}var yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yy[t.type]:e==="textarea"}function kg(t,e,n,i){ug(i),e=oc(e,"onChange"),0<e.length&&(n=new dh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Qa=null,vo=null;function Sy(t){jg(t,0)}function kc(t){var e=Fs(t);if(ig(e))return t}function My(t,e){if(t==="change")return e}var Ig=!1;if(ji){var uu;if(ji){var du="oninput"in document;if(!du){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),du=typeof Pp.oninput=="function"}uu=du}else uu=!1;Ig=uu&&(!document.documentMode||9<document.documentMode)}function Lp(){Qa&&(Qa.detachEvent("onpropertychange",Dg),vo=Qa=null)}function Dg(t){if(t.propertyName==="value"&&kc(vo)){var e=[];kg(e,vo,t,sh(t)),pg(Sy,e)}}function Ey(t,e,n){t==="focusin"?(Lp(),Qa=e,vo=n,Qa.attachEvent("onpropertychange",Dg)):t==="focusout"&&Lp()}function wy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kc(vo)}function by(t,e){if(t==="click")return kc(e)}function Ty(t,e){if(t==="input"||t==="change")return kc(e)}function Cy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pi=typeof Object.is=="function"?Object.is:Cy;function xo(t,e){if(pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ud.call(e,r)||!pi(t[r],e[r]))return!1}return!0}function kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ip(t,e){var n=kp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kp(n)}}function Ug(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ug(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Og(){for(var t=window,e=ec();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ec(t.document)}return e}function ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ay(t){var e=Og(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ug(n.ownerDocument.documentElement,n)){if(i!==null&&ph(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ip(n,s);var a=Ip(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ry=ji&&"documentMode"in document&&11>=document.documentMode,Us=null,Rd=null,Ja=null,Nd=!1;function Dp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nd||Us==null||Us!==ec(i)||(i=Us,"selectionStart"in i&&ph(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ja&&xo(Ja,i)||(Ja=i,i=oc(Rd,"onSelect"),0<i.length&&(e=new dh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Us)))}function Zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},fu={},Fg={};ji&&(Fg=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Ic(t){if(fu[t])return fu[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fg)return fu[t]=e[n];return t}var Bg=Ic("animationend"),zg=Ic("animationiteration"),Hg=Ic("animationstart"),Vg=Ic("transitionend"),Gg=new Map,Up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){Gg.set(t,e),ls(e,[t])}for(var hu=0;hu<Up.length;hu++){var pu=Up[hu],Ny=pu.toLowerCase(),Py=pu[0].toUpperCase()+pu.slice(1);Cr(Ny,"on"+Py)}Cr(Bg,"onAnimationEnd");Cr(zg,"onAnimationIteration");Cr(Hg,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(Vg,"onTransitionEnd");ta("onMouseEnter",["mouseout","mouseover"]);ta("onMouseLeave",["mouseout","mouseover"]);ta("onPointerEnter",["pointerout","pointerover"]);ta("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("cancel close invalid load scroll toggle".split(" ").concat($a));function Op(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,N1(i,e,void 0,t),t.currentTarget=null}function jg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Op(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Op(r,o,c),s=l}}}if(nc)throw t=bd,nc=!1,bd=null,t}function Pt(t,e){var n=e[Dd];n===void 0&&(n=e[Dd]=new Set);var i=t+"__bubble";n.has(i)||(Wg(e,t,2,!1),n.add(i))}function mu(t,e,n){var i=0;e&&(i|=4),Wg(n,t,i,e)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[Qo]){t[Qo]=!0,Q0.forEach(function(n){n!=="selectionchange"&&(Ly.has(n)||mu(n,!1,t),mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qo]||(e[Qo]=!0,mu("selectionchange",!1,e))}}function Wg(t,e,n,i){switch(Ag(e)){case 1:var r=$1;break;case 4:r=X1;break;default:r=ch}n=r.bind(null,e,n,t),r=void 0,!wd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=$r(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}pg(function(){var c=s,d=sh(n),h=[];e:{var p=Gg.get(t);if(p!==void 0){var m=dh,v=t;switch(t){case"keypress":if(Bl(n)===0)break e;case"keydown":case"keyup":m=ly;break;case"focusin":v="focus",m=cu;break;case"focusout":v="blur",m=cu;break;case"beforeblur":case"afterblur":m=cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=K1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=dy;break;case Bg:case zg:case Hg:m=J1;break;case Vg:m=hy;break;case"scroll":m=q1;break;case"wheel":m=my;break;case"copy":case"cut":case"paste":m=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Cp}var S=(e&4)!==0,g=!S&&t==="scroll",u=S?p!==null?p+"Capture":null:p;S=[];for(var x=c,y;x!==null;){y=x;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,u!==null&&(_=ho(x,u),_!=null&&S.push(yo(x,_,y)))),g)break;x=x.return}0<S.length&&(p=new m(p,v,null,n,d),h.push({event:p,listeners:S}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==Md&&(v=n.relatedTarget||n.fromElement)&&($r(v)||v[Wi]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?$r(v):null,v!==null&&(g=cs(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(S=bp,_="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(S=Cp,_="onPointerLeave",u="onPointerEnter",x="pointer"),g=m==null?p:Fs(m),y=v==null?p:Fs(v),p=new S(_,x+"leave",m,n,d),p.target=g,p.relatedTarget=y,_=null,$r(d)===c&&(S=new S(u,x+"enter",v,n,d),S.target=y,S.relatedTarget=g,_=S),g=_,m&&v)t:{for(S=m,u=v,x=0,y=S;y;y=gs(y))x++;for(y=0,_=u;_;_=gs(_))y++;for(;0<x-y;)S=gs(S),x--;for(;0<y-x;)u=gs(u),y--;for(;x--;){if(S===u||u!==null&&S===u.alternate)break t;S=gs(S),u=gs(u)}S=null}else S=null;m!==null&&Fp(h,p,m,S,!1),v!==null&&g!==null&&Fp(h,g,v,S,!0)}}e:{if(p=c?Fs(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var A=My;else if(Np(p))if(Ig)A=Ty;else{A=wy;var C=Ey}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(A=by);if(A&&(A=A(t,c))){kg(h,A,n,d);break e}C&&C(t,p,c),t==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&vd(p,"number",p.value)}switch(C=c?Fs(c):window,t){case"focusin":(Np(C)||C.contentEditable==="true")&&(Us=C,Rd=c,Ja=null);break;case"focusout":Ja=Rd=Us=null;break;case"mousedown":Nd=!0;break;case"contextmenu":case"mouseup":case"dragend":Nd=!1,Dp(h,n,d);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":Dp(h,n,d)}var T;if(hh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ds?Pg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Ng&&n.locale!=="ko"&&(Ds||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ds&&(T=Rg()):(ur=d,uh="value"in ur?ur.value:ur.textContent,Ds=!0)),C=oc(c,R),0<C.length&&(R=new Tp(R,t,null,n,d),h.push({event:R,listeners:C}),T?R.data=T:(T=Lg(n),T!==null&&(R.data=T)))),(T=vy?xy(t,n):_y(t,n))&&(c=oc(c,"onBeforeInput"),0<c.length&&(d=new Tp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}jg(h,e)})}function yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ho(t,n),s!=null&&i.unshift(yo(t,s,r)),s=ho(t,e),s!=null&&i.push(yo(t,s,r))),t=t.return}return i}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ho(n,s),l!=null&&a.unshift(yo(n,l,o))):r||(l=ho(n,s),l!=null&&a.push(yo(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ky=/\r\n?/g,Iy=/\u0000|\uFFFD/g;function Bp(t){return(typeof t=="string"?t:""+t).replace(ky,`
`).replace(Iy,"")}function Jo(t,e,n){if(e=Bp(e),Bp(t)!==e&&n)throw Error(ce(425))}function lc(){}var Pd=null,Ld=null;function kd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Id=typeof setTimeout=="function"?setTimeout:void 0,Dy=typeof clearTimeout=="function"?clearTimeout:void 0,zp=typeof Promise=="function"?Promise:void 0,Uy=typeof queueMicrotask=="function"?queueMicrotask:typeof zp<"u"?function(t){return zp.resolve(null).then(t).catch(Oy)}:Id;function Oy(t){setTimeout(function(){throw t})}function vu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),go(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);go(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var va=Math.random().toString(36).slice(2),Mi="__reactFiber$"+va,So="__reactProps$"+va,Wi="__reactContainer$"+va,Dd="__reactEvents$"+va,Fy="__reactListeners$"+va,By="__reactHandles$"+va;function $r(t){var e=t[Mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[Mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hp(t);t!==null;){if(n=t[Mi])return n;t=Hp(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[Mi]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Dc(t){return t[So]||null}var Ud=[],Bs=-1;function Ar(t){return{current:t}}function Lt(t){0>Bs||(t.current=Ud[Bs],Ud[Bs]=null,Bs--)}function Rt(t,e){Bs++,Ud[Bs]=t.current,t.current=e}var wr={},pn=Ar(wr),wn=Ar(!1),ts=wr;function na(t,e){var n=t.type.contextTypes;if(!n)return wr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function cc(){Lt(wn),Lt(pn)}function Vp(t,e,n){if(pn.current!==wr)throw Error(ce(168));Rt(pn,e),Rt(wn,n)}function $g(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,E1(t)||"Unknown",r));return Ut({},n,i)}function uc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,ts=pn.current,Rt(pn,t),Rt(wn,wn.current),!0}function Gp(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=$g(t,e,ts),i.__reactInternalMemoizedMergedChildContext=t,Lt(wn),Lt(pn),Rt(pn,t)):Lt(wn),Rt(wn,n)}var Ui=null,Uc=!1,xu=!1;function Xg(t){Ui===null?Ui=[t]:Ui.push(t)}function zy(t){Uc=!0,Xg(t)}function Rr(){if(!xu&&Ui!==null){xu=!0;var t=0,e=yt;try{var n=Ui;for(yt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,Uc=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),xg(ah,Rr),r}finally{yt=e,xu=!1}}return null}var zs=[],Hs=0,dc=null,fc=0,jn=[],Wn=0,ns=null,Fi=1,Bi="";function zr(t,e){zs[Hs++]=fc,zs[Hs++]=dc,dc=t,fc=e}function qg(t,e,n){jn[Wn++]=Fi,jn[Wn++]=Bi,jn[Wn++]=ns,ns=t;var i=Fi;t=Bi;var r=32-di(i)-1;i&=~(1<<r),n+=1;var s=32-di(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Fi=1<<32-di(e)+r|n<<r|i,Bi=s+t}else Fi=1<<s|n<<r|i,Bi=t}function mh(t){t.return!==null&&(zr(t,1),qg(t,1,0))}function gh(t){for(;t===dc;)dc=zs[--Hs],zs[Hs]=null,fc=zs[--Hs],zs[Hs]=null;for(;t===ns;)ns=jn[--Wn],jn[Wn]=null,Bi=jn[--Wn],jn[Wn]=null,Fi=jn[--Wn],jn[Wn]=null}var On=null,Un=null,kt=!1,li=null;function Yg(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,On=t,Un=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,On=t,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ns!==null?{id:Fi,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,On=t,Un=null,!0):!1;default:return!1}}function Od(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fd(t){if(kt){var e=Un;if(e){var n=e;if(!jp(t,e)){if(Od(t))throw Error(ce(418));e=gr(n.nextSibling);var i=On;e&&jp(t,e)?Yg(i,n):(t.flags=t.flags&-4097|2,kt=!1,On=t)}}else{if(Od(t))throw Error(ce(418));t.flags=t.flags&-4097|2,kt=!1,On=t}}}function Wp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function el(t){if(t!==On)return!1;if(!kt)return Wp(t),kt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kd(t.type,t.memoizedProps)),e&&(e=Un)){if(Od(t))throw Kg(),Error(ce(418));for(;e;)Yg(t,e),e=gr(e.nextSibling)}if(Wp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Un=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Un=null}}else Un=On?gr(t.stateNode.nextSibling):null;return!0}function Kg(){for(var t=Un;t;)t=gr(t.nextSibling)}function ia(){Un=On=null,kt=!1}function vh(t){li===null?li=[t]:li.push(t)}var Hy=Yi.ReactCurrentBatchConfig;function ka(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function tl(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $p(t){var e=t._init;return e(t._payload)}function Zg(t){function e(u,x){if(t){var y=u.deletions;y===null?(u.deletions=[x],u.flags|=16):y.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u,x){for(u=new Map;x!==null;)x.key!==null?u.set(x.key,x):u.set(x.index,x),x=x.sibling;return u}function r(u,x){return u=yr(u,x),u.index=0,u.sibling=null,u}function s(u,x,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<x?(u.flags|=2,x):y):(u.flags|=2,x)):(u.flags|=1048576,x)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,x,y,_){return x===null||x.tag!==6?(x=bu(y,u.mode,_),x.return=u,x):(x=r(x,y),x.return=u,x)}function l(u,x,y,_){var A=y.type;return A===Is?d(u,x,y.props.children,_,y.key):x!==null&&(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===sr&&$p(A)===x.type)?(_=r(x,y.props),_.ref=ka(u,x,y),_.return=u,_):(_=$l(y.type,y.key,y.props,null,u.mode,_),_.ref=ka(u,x,y),_.return=u,_)}function c(u,x,y,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Tu(y,u.mode,_),x.return=u,x):(x=r(x,y.children||[]),x.return=u,x)}function d(u,x,y,_,A){return x===null||x.tag!==7?(x=Qr(y,u.mode,_,A),x.return=u,x):(x=r(x,y),x.return=u,x)}function h(u,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=bu(""+x,u.mode,y),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case jo:return y=$l(x.type,x.key,x.props,null,u.mode,y),y.ref=ka(u,null,x),y.return=u,y;case ks:return x=Tu(x,u.mode,y),x.return=u,x;case sr:var _=x._init;return h(u,_(x._payload),y)}if(ja(x)||Aa(x))return x=Qr(x,u.mode,y,null),x.return=u,x;tl(u,x)}return null}function p(u,x,y,_){var A=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:o(u,x,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case jo:return y.key===A?l(u,x,y,_):null;case ks:return y.key===A?c(u,x,y,_):null;case sr:return A=y._init,p(u,x,A(y._payload),_)}if(ja(y)||Aa(y))return A!==null?null:d(u,x,y,_,null);tl(u,y)}return null}function m(u,x,y,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return u=u.get(y)||null,o(x,u,""+_,A);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case jo:return u=u.get(_.key===null?y:_.key)||null,l(x,u,_,A);case ks:return u=u.get(_.key===null?y:_.key)||null,c(x,u,_,A);case sr:var C=_._init;return m(u,x,y,C(_._payload),A)}if(ja(_)||Aa(_))return u=u.get(y)||null,d(x,u,_,A,null);tl(x,_)}return null}function v(u,x,y,_){for(var A=null,C=null,T=x,R=x=0,E=null;T!==null&&R<y.length;R++){T.index>R?(E=T,T=null):E=T.sibling;var M=p(u,T,y[R],_);if(M===null){T===null&&(T=E);break}t&&T&&M.alternate===null&&e(u,T),x=s(M,x,R),C===null?A=M:C.sibling=M,C=M,T=E}if(R===y.length)return n(u,T),kt&&zr(u,R),A;if(T===null){for(;R<y.length;R++)T=h(u,y[R],_),T!==null&&(x=s(T,x,R),C===null?A=T:C.sibling=T,C=T);return kt&&zr(u,R),A}for(T=i(u,T);R<y.length;R++)E=m(T,u,R,y[R],_),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?R:E.key),x=s(E,x,R),C===null?A=E:C.sibling=E,C=E);return t&&T.forEach(function(P){return e(u,P)}),kt&&zr(u,R),A}function S(u,x,y,_){var A=Aa(y);if(typeof A!="function")throw Error(ce(150));if(y=A.call(y),y==null)throw Error(ce(151));for(var C=A=null,T=x,R=x=0,E=null,M=y.next();T!==null&&!M.done;R++,M=y.next()){T.index>R?(E=T,T=null):E=T.sibling;var P=p(u,T,M.value,_);if(P===null){T===null&&(T=E);break}t&&T&&P.alternate===null&&e(u,T),x=s(P,x,R),C===null?A=P:C.sibling=P,C=P,T=E}if(M.done)return n(u,T),kt&&zr(u,R),A;if(T===null){for(;!M.done;R++,M=y.next())M=h(u,M.value,_),M!==null&&(x=s(M,x,R),C===null?A=M:C.sibling=M,C=M);return kt&&zr(u,R),A}for(T=i(u,T);!M.done;R++,M=y.next())M=m(T,u,R,M.value,_),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?R:M.key),x=s(M,x,R),C===null?A=M:C.sibling=M,C=M);return t&&T.forEach(function(H){return e(u,H)}),kt&&zr(u,R),A}function g(u,x,y,_){if(typeof y=="object"&&y!==null&&y.type===Is&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case jo:e:{for(var A=y.key,C=x;C!==null;){if(C.key===A){if(A=y.type,A===Is){if(C.tag===7){n(u,C.sibling),x=r(C,y.props.children),x.return=u,u=x;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===sr&&$p(A)===C.type){n(u,C.sibling),x=r(C,y.props),x.ref=ka(u,C,y),x.return=u,u=x;break e}n(u,C);break}else e(u,C);C=C.sibling}y.type===Is?(x=Qr(y.props.children,u.mode,_,y.key),x.return=u,u=x):(_=$l(y.type,y.key,y.props,null,u.mode,_),_.ref=ka(u,x,y),_.return=u,u=_)}return a(u);case ks:e:{for(C=y.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(u,x.sibling),x=r(x,y.children||[]),x.return=u,u=x;break e}else{n(u,x);break}else e(u,x);x=x.sibling}x=Tu(y,u.mode,_),x.return=u,u=x}return a(u);case sr:return C=y._init,g(u,x,C(y._payload),_)}if(ja(y))return v(u,x,y,_);if(Aa(y))return S(u,x,y,_);tl(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(u,x.sibling),x=r(x,y),x.return=u,u=x):(n(u,x),x=bu(y,u.mode,_),x.return=u,u=x),a(u)):n(u,x)}return g}var ra=Zg(!0),Qg=Zg(!1),hc=Ar(null),pc=null,Vs=null,xh=null;function _h(){xh=Vs=pc=null}function yh(t){var e=hc.current;Lt(hc),t._currentValue=e}function Bd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){pc=t,xh=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(xh!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(pc===null)throw Error(ce(308));Vs=t,pc.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var Xr=null;function Sh(t){Xr===null?Xr=[t]:Xr.push(t)}function Jg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sh(e)):(n.next=r.next,r.next=n),e.interleaved=n,$i(t,i)}function $i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ev(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,vt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(t,n)}return r=i.interleaved,r===null?(e.next=e,Sh(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(t,n)}function zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}function Xp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mc(t,e,n,i){var r=t.updateQueue;ar=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var p=o.lane,m=o.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,S=o;switch(p=e,m=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){h=v.call(m,h,p);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,p=typeof v=="function"?v.call(m,h,p):v,p==null)break e;h=Ut({},h,p);break e;case 2:ar=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else m={eventTime:m,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);rs|=a,t.lanes=a,t.memoizedState=h}}function qp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Do={},bi=Ar(Do),Mo=Ar(Do),Eo=Ar(Do);function qr(t){if(t===Do)throw Error(ce(174));return t}function Eh(t,e){switch(Rt(Eo,e),Rt(Mo,t),Rt(bi,Do),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_d(e,t)}Lt(bi),Rt(bi,e)}function sa(){Lt(bi),Lt(Mo),Lt(Eo)}function tv(t){qr(Eo.current);var e=qr(bi.current),n=_d(e,t.type);e!==n&&(Rt(Mo,t),Rt(bi,n))}function wh(t){Mo.current===t&&(Lt(bi),Lt(Mo))}var It=Ar(0);function gc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function bh(){for(var t=0;t<_u.length;t++)_u[t]._workInProgressVersionPrimary=null;_u.length=0}var Hl=Yi.ReactCurrentDispatcher,yu=Yi.ReactCurrentBatchConfig,is=0,Dt=null,$t=null,Qt=null,vc=!1,eo=!1,wo=0,Vy=0;function on(){throw Error(ce(321))}function Th(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pi(t[n],e[n]))return!1;return!0}function Ch(t,e,n,i,r,s){if(is=s,Dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=t===null||t.memoizedState===null?$y:Xy,t=n(i,r),eo){s=0;do{if(eo=!1,wo=0,25<=s)throw Error(ce(301));s+=1,Qt=$t=null,e.updateQueue=null,Hl.current=qy,t=n(i,r)}while(eo)}if(Hl.current=xc,e=$t!==null&&$t.next!==null,is=0,Qt=$t=Dt=null,vc=!1,e)throw Error(ce(300));return t}function Ah(){var t=wo!==0;return wo=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Dt.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Yn(){if($t===null){var t=Dt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var e=Qt===null?Dt.memoizedState:Qt.next;if(e!==null)Qt=e,$t=t;else{if(t===null)throw Error(ce(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Qt===null?Dt.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function bo(t,e){return typeof e=="function"?e(t):e}function Su(t){var e=Yn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=$t,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((is&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Dt.lanes|=d,rs|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,pi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Dt.lanes|=s,rs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);pi(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function nv(){}function iv(t,e){var n=Dt,i=Yn(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,Rh(av.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Qt!==null&&Qt.memoizedState.tag&1){if(n.flags|=2048,To(9,sv.bind(null,n,i,r,e),void 0,null),en===null)throw Error(ce(349));is&30||rv(n,e,r)}return r}function rv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sv(t,e,n,i){e.value=n,e.getSnapshot=i,ov(e)&&lv(t)}function av(t,e,n){return n(function(){ov(e)&&lv(t)})}function ov(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pi(t,n)}catch{return!0}}function lv(t){var e=$i(t,1);e!==null&&fi(e,t,1,-1)}function Yp(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:t},e.queue=t,t=t.dispatch=Wy.bind(null,Dt,t),[e.memoizedState,t]}function To(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function cv(){return Yn().memoizedState}function Vl(t,e,n,i){var r=_i();Dt.flags|=t,r.memoizedState=To(1|e,n,void 0,i===void 0?null:i)}function Oc(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if($t!==null){var a=$t.memoizedState;if(s=a.destroy,i!==null&&Th(i,a.deps)){r.memoizedState=To(e,n,s,i);return}}Dt.flags|=t,r.memoizedState=To(1|e,n,s,i)}function Kp(t,e){return Vl(8390656,8,t,e)}function Rh(t,e){return Oc(2048,8,t,e)}function uv(t,e){return Oc(4,2,t,e)}function dv(t,e){return Oc(4,4,t,e)}function fv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hv(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4,4,fv.bind(null,e,t),n)}function Nh(){}function pv(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Th(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function mv(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Th(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function gv(t,e,n){return is&21?(pi(n,e)||(n=Sg(),Dt.lanes|=n,rs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function Gy(t,e){var n=yt;yt=n!==0&&4>n?n:4,t(!0);var i=yu.transition;yu.transition={};try{t(!1),e()}finally{yt=n,yu.transition=i}}function vv(){return Yn().memoizedState}function jy(t,e,n){var i=_r(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},xv(t))_v(e,n);else if(n=Jg(t,e,n,i),n!==null){var r=_n();fi(n,t,i,r),yv(n,e,i)}}function Wy(t,e,n){var i=_r(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(xv(t))_v(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,pi(o,a)){var l=e.interleaved;l===null?(r.next=r,Sh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Jg(t,e,r,i),n!==null&&(r=_n(),fi(n,t,i,r),yv(n,e,i))}}function xv(t){var e=t.alternate;return t===Dt||e!==null&&e===Dt}function _v(t,e){eo=vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}var xc={readContext:qn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},$y={readContext:qn,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:Kp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4194308,4,fv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vl(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=jy.bind(null,Dt,t),[i.memoizedState,t]},useRef:function(t){var e=_i();return t={current:t},e.memoizedState=t},useState:Yp,useDebugValue:Nh,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Yp(!1),e=t[0];return t=Gy.bind(null,t[1]),_i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Dt,r=_i();if(kt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),en===null)throw Error(ce(349));is&30||rv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kp(av.bind(null,i,s,t),[t]),i.flags|=2048,To(9,sv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=_i(),e=en.identifierPrefix;if(kt){var n=Bi,i=Fi;n=(i&~(1<<32-di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Vy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xy={readContext:qn,useCallback:pv,useContext:qn,useEffect:Rh,useImperativeHandle:hv,useInsertionEffect:uv,useLayoutEffect:dv,useMemo:mv,useReducer:Su,useRef:cv,useState:function(){return Su(bo)},useDebugValue:Nh,useDeferredValue:function(t){var e=Yn();return gv(e,$t.memoizedState,t)},useTransition:function(){var t=Su(bo)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:nv,useSyncExternalStore:iv,useId:vv,unstable_isNewReconciler:!1},qy={readContext:qn,useCallback:pv,useContext:qn,useEffect:Rh,useImperativeHandle:hv,useInsertionEffect:uv,useLayoutEffect:dv,useMemo:mv,useReducer:Mu,useRef:cv,useState:function(){return Mu(bo)},useDebugValue:Nh,useDeferredValue:function(t){var e=Yn();return $t===null?e.memoizedState=t:gv(e,$t.memoizedState,t)},useTransition:function(){var t=Mu(bo)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:nv,useSyncExternalStore:iv,useId:vv,unstable_isNewReconciler:!1};function si(t,e){if(t&&t.defaultProps){e=Ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fc={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=_n(),r=_r(t),s=Vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(fi(e,t,r,i),zl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=_n(),r=_r(t),s=Vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(fi(e,t,r,i),zl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_n(),i=_r(t),r=Vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=vr(t,r,i),e!==null&&(fi(e,t,i,n),zl(e,t,i))}};function Zp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!xo(n,i)||!xo(r,s):!0}function Sv(t,e,n){var i=!1,r=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=bn(e)?ts:pn.current,i=e.contextTypes,s=(i=i!=null)?na(t,r):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Fc.enqueueReplaceState(e,e.state,null)}function Hd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=bn(e)?ts:pn.current,r.context=na(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Fc.enqueueReplaceState(r,r.state,null),mc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function aa(t,e){try{var n="",i=e;do n+=M1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Yy=typeof WeakMap=="function"?WeakMap:Map;function Mv(t,e,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){yc||(yc=!0,Qd=i),Vd(t,e)},n}function Ev(t,e,n){n=Vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Vd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vd(t,e),typeof i!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Jp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Yy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=cS.bind(null,t,e,n),e.then(t,t))}function em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vi(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var Ky=Yi.ReactCurrentOwner,En=!1;function xn(t,e,n,i){e.child=t===null?Qg(e,null,n,i):ra(e,t.child,n,i)}function nm(t,e,n,i,r){n=n.render;var s=e.ref;return Ks(e,r),i=Ch(t,e,n,i,s,r),n=Ah(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(kt&&n&&mh(e),e.flags|=1,xn(t,e,i,r),e.child)}function im(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Fh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wv(t,e,s,i,r)):(t=$l(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(a,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=yr(s,i),t.ref=e.ref,t.return=e,e.child=t}function wv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(xo(s,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return Gd(t,e,n,i,r)}function bv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(js,kn),kn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Rt(js,kn),kn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Rt(js,kn),kn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Rt(js,kn),kn|=i;return xn(t,e,r,n),e.child}function Tv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gd(t,e,n,i,r){var s=bn(n)?ts:pn.current;return s=na(e,s),Ks(e,r),n=Ch(t,e,n,i,s,r),i=Ah(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(kt&&i&&mh(e),e.flags|=1,xn(t,e,n,r),e.child)}function rm(t,e,n,i,r){if(bn(n)){var s=!0;uc(e)}else s=!1;if(Ks(e,r),e.stateNode===null)Gl(t,e),Sv(e,n,i),Hd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=bn(n)?ts:pn.current,c=na(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Qp(e,a,i,c),ar=!1;var p=e.memoizedState;a.state=p,mc(e,i,a,r),l=e.memoizedState,o!==i||p!==l||wn.current||ar?(typeof d=="function"&&(zd(e,n,d,i),l=e.memoizedState),(o=ar||Zp(e,n,o,i,p,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,ev(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:si(e.type,o),a.props=c,h=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=bn(n)?ts:pn.current,l=na(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||p!==l)&&Qp(e,a,i,l),ar=!1,p=e.memoizedState,a.state=p,mc(e,i,a,r);var v=e.memoizedState;o!==h||p!==v||wn.current||ar?(typeof m=="function"&&(zd(e,n,m,i),v=e.memoizedState),(c=ar||Zp(e,n,c,i,p,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return jd(t,e,n,i,s,r)}function jd(t,e,n,i,r,s){Tv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Gp(e,n,!1),Xi(t,e,s);i=e.stateNode,Ky.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ra(e,t.child,null,s),e.child=ra(e,null,o,s)):xn(t,e,o,s),e.memoizedState=i.state,r&&Gp(e,n,!0),e.child}function Cv(t){var e=t.stateNode;e.pendingContext?Vp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vp(t,e.context,!1),Eh(t,e.containerInfo)}function sm(t,e,n,i,r){return ia(),vh(r),e.flags|=256,xn(t,e,n,i),e.child}var Wd={dehydrated:null,treeContext:null,retryLane:0};function $d(t){return{baseLanes:t,cachePool:null,transitions:null}}function Av(t,e,n){var i=e.pendingProps,r=It.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Rt(It,r&1),t===null)return Fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Hc(a,i,0,null),t=Qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$d(n),e.memoizedState=Wd,t):Ph(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Zy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=yr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=yr(o,s):(s=Qr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?$d(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Wd,i}return s=t.child,t=s.sibling,i=yr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ph(t,e){return e=Hc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nl(t,e,n,i){return i!==null&&vh(i),ra(e,t.child,null,n),t=Ph(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Eu(Error(ce(422))),nl(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Hc({mode:"visible",children:i.children},r,0,null),s=Qr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ra(e,t.child,null,a),e.child.memoizedState=$d(a),e.memoizedState=Wd,s);if(!(e.mode&1))return nl(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=Eu(s,i,void 0),nl(t,e,a,i)}if(o=(a&t.childLanes)!==0,En||o){if(i=en,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(t,r),fi(i,t,r,-1))}return Oh(),i=Eu(Error(ce(421))),nl(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=uS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Un=gr(r.nextSibling),On=e,kt=!0,li=null,t!==null&&(jn[Wn++]=Fi,jn[Wn++]=Bi,jn[Wn++]=ns,Fi=t.id,Bi=t.overflow,ns=e),e=Ph(e,i.children),e.flags|=4096,e)}function am(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bd(t.return,e,n)}function wu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Rv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(xn(t,e,i.children,n),i=It.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&am(t,n,e);else if(t.tag===19)am(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Rt(It,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&gc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),wu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&gc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}wu(e,!0,n,null,s);break;case"together":wu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),rs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Qy(t,e,n){switch(e.tag){case 3:Cv(e),ia();break;case 5:tv(e);break;case 1:bn(e.type)&&uc(e);break;case 4:Eh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Rt(hc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Rt(It,It.current&1),e.flags|=128,null):n&e.child.childLanes?Av(t,e,n):(Rt(It,It.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);Rt(It,It.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Rv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Rt(It,It.current),i)break;return null;case 22:case 23:return e.lanes=0,bv(t,e,n)}return Xi(t,e,n)}var Nv,Xd,Pv,Lv;Nv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xd=function(){};Pv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(bi.current);var s=null;switch(n){case"input":r=md(t,r),i=md(t,i),s=[];break;case"select":r=Ut({},r,{value:void 0}),i=Ut({},i,{value:void 0}),s=[];break;case"textarea":r=xd(t,r),i=xd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=lc)}yd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(uo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(uo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Pt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Lv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ia(t,e){if(!kt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function ln(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Jy(t,e,n){var i=e.pendingProps;switch(gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(e),null;case 1:return bn(e.type)&&cc(),ln(e),null;case 3:return i=e.stateNode,sa(),Lt(wn),Lt(pn),bh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(el(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(tf(li),li=null))),Xd(t,e),ln(e),null;case 5:wh(e);var r=qr(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)Pv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return ln(e),null}if(t=qr(bi.current),el(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Mi]=e,i[So]=s,t=(e.mode&1)!==0,n){case"dialog":Pt("cancel",i),Pt("close",i);break;case"iframe":case"object":case"embed":Pt("load",i);break;case"video":case"audio":for(r=0;r<$a.length;r++)Pt($a[r],i);break;case"source":Pt("error",i);break;case"img":case"image":case"link":Pt("error",i),Pt("load",i);break;case"details":Pt("toggle",i);break;case"input":mp(i,s),Pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Pt("invalid",i);break;case"textarea":vp(i,s),Pt("invalid",i)}yd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Jo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Jo(i.textContent,o,t),r=["children",""+o]):uo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Pt("scroll",i)}switch(n){case"input":Wo(i),gp(i,s,!0);break;case"textarea":Wo(i),xp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=lc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ag(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Mi]=e,t[So]=i,Nv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Sd(n,i),n){case"dialog":Pt("cancel",t),Pt("close",t),r=i;break;case"iframe":case"object":case"embed":Pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<$a.length;r++)Pt($a[r],t);r=i;break;case"source":Pt("error",t),r=i;break;case"img":case"image":case"link":Pt("error",t),Pt("load",t),r=i;break;case"details":Pt("toggle",t),r=i;break;case"input":mp(t,i),r=md(t,i),Pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ut({},i,{value:void 0}),Pt("invalid",t);break;case"textarea":vp(t,i),r=xd(t,i),Pt("invalid",t);break;default:r=i}yd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?cg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&og(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fo(t,l):typeof l=="number"&&fo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Pt("scroll",t):l!=null&&th(t,s,l,a))}switch(n){case"input":Wo(t),gp(t,i,!1);break;case"textarea":Wo(t),xp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?$s(t,!!i.multiple,s,!1):i.defaultValue!=null&&$s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=lc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ln(e),null;case 6:if(t&&e.stateNode!=null)Lv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=qr(Eo.current),qr(bi.current),el(e)){if(i=e.stateNode,n=e.memoizedProps,i[Mi]=e,(s=i.nodeValue!==n)&&(t=On,t!==null))switch(t.tag){case 3:Jo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return ln(e),null;case 13:if(Lt(It),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&Un!==null&&e.mode&1&&!(e.flags&128))Kg(),ia(),e.flags|=98560,s=!1;else if(s=el(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[Mi]=e}else ia(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ln(e),s=!1}else li!==null&&(tf(li),li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||It.current&1?Xt===0&&(Xt=3):Oh())),e.updateQueue!==null&&(e.flags|=4),ln(e),null);case 4:return sa(),Xd(t,e),t===null&&_o(e.stateNode.containerInfo),ln(e),null;case 10:return yh(e.type._context),ln(e),null;case 17:return bn(e.type)&&cc(),ln(e),null;case 19:if(Lt(It),s=e.memoizedState,s===null)return ln(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ia(s,!1);else{if(Xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=gc(t),a!==null){for(e.flags|=128,Ia(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Rt(It,It.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ht()>oa&&(e.flags|=128,i=!0,Ia(s,!1),e.lanes=4194304)}else{if(!i)if(t=gc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ia(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!kt)return ln(e),null}else 2*Ht()-s.renderingStartTime>oa&&n!==1073741824&&(e.flags|=128,i=!0,Ia(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ht(),e.sibling=null,n=It.current,Rt(It,i?n&1|2:n&1),e):(ln(e),null);case 22:case 23:return Uh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?kn&1073741824&&(ln(e),e.subtreeFlags&6&&(e.flags|=8192)):ln(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function eS(t,e){switch(gh(e),e.tag){case 1:return bn(e.type)&&cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sa(),Lt(wn),Lt(pn),bh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wh(e),null;case 13:if(Lt(It),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));ia()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Lt(It),null;case 4:return sa(),null;case 10:return yh(e.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var il=!1,fn=!1,tS=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ft(t,e,i)}else n.current=null}function qd(t,e,n){try{n()}catch(i){Ft(t,e,i)}}var om=!1;function nS(t,e){if(Pd=sc,t=Og(),ph(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,p=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)p=h,h=m;for(;;){if(h===t)break t;if(p===n&&++c===r&&(o=a),p===s&&++d===i&&(l=a),(m=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ld={focusedElem:t,selectionRange:n},sc=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,g=v.memoizedState,u=e.stateNode,x=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:si(e.type,S),g);u.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(_){Ft(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return v=om,om=!1,v}function to(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&qd(e,n,s)}r=r.next}while(r!==i)}}function Bc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kv(t){var e=t.alternate;e!==null&&(t.alternate=null,kv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mi],delete e[So],delete e[Dd],delete e[Fy],delete e[By])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Iv(t){return t.tag===5||t.tag===3||t.tag===4}function lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Iv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lc));else if(i!==4&&(t=t.child,t!==null))for(Kd(t,e,n),t=t.sibling;t!==null;)Kd(t,e,n),t=t.sibling}function Zd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Zd(t,e,n),t=t.sibling;t!==null;)Zd(t,e,n),t=t.sibling}var nn=null,ai=!1;function Qi(t,e,n){for(n=n.child;n!==null;)Dv(t,e,n),n=n.sibling}function Dv(t,e,n){if(wi&&typeof wi.onCommitFiberUnmount=="function")try{wi.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:fn||Gs(n,e);case 6:var i=nn,r=ai;nn=null,Qi(t,e,n),nn=i,ai=r,nn!==null&&(ai?(t=nn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nn.removeChild(n.stateNode));break;case 18:nn!==null&&(ai?(t=nn,n=n.stateNode,t.nodeType===8?vu(t.parentNode,n):t.nodeType===1&&vu(t,n),go(t)):vu(nn,n.stateNode));break;case 4:i=nn,r=ai,nn=n.stateNode.containerInfo,ai=!0,Qi(t,e,n),nn=i,ai=r;break;case 0:case 11:case 14:case 15:if(!fn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&qd(n,e,a),r=r.next}while(r!==i)}Qi(t,e,n);break;case 1:if(!fn&&(Gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Ft(n,e,o)}Qi(t,e,n);break;case 21:Qi(t,e,n);break;case 22:n.mode&1?(fn=(i=fn)||n.memoizedState!==null,Qi(t,e,n),fn=i):Qi(t,e,n);break;default:Qi(t,e,n)}}function cm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tS),e.forEach(function(i){var r=dS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:nn=o.stateNode,ai=!1;break e;case 3:nn=o.stateNode.containerInfo,ai=!0;break e;case 4:nn=o.stateNode.containerInfo,ai=!0;break e}o=o.return}if(nn===null)throw Error(ce(160));Dv(s,a,r),nn=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ft(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Uv(e,t),e=e.sibling}function Uv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),xi(t),i&4){try{to(3,t,t.return),Bc(3,t)}catch(S){Ft(t,t.return,S)}try{to(5,t,t.return)}catch(S){Ft(t,t.return,S)}}break;case 1:Jn(e,t),xi(t),i&512&&n!==null&&Gs(n,n.return);break;case 5:if(Jn(e,t),xi(t),i&512&&n!==null&&Gs(n,n.return),t.flags&32){var r=t.stateNode;try{fo(r,"")}catch(S){Ft(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&rg(r,s),Sd(o,a);var c=Sd(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?cg(r,h):d==="dangerouslySetInnerHTML"?og(r,h):d==="children"?fo(r,h):th(r,d,h,c)}switch(o){case"input":gd(r,s);break;case"textarea":sg(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?$s(r,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?$s(r,!!s.multiple,s.defaultValue,!0):$s(r,!!s.multiple,s.multiple?[]:"",!1))}r[So]=s}catch(S){Ft(t,t.return,S)}}break;case 6:if(Jn(e,t),xi(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Ft(t,t.return,S)}}break;case 3:if(Jn(e,t),xi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{go(e.containerInfo)}catch(S){Ft(t,t.return,S)}break;case 4:Jn(e,t),xi(t);break;case 13:Jn(e,t),xi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ih=Ht())),i&4&&cm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(fn=(c=fn)||d,Jn(e,t),fn=c):Jn(e,t),xi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Te=t,d=t.child;d!==null;){for(h=Te=d;Te!==null;){switch(p=Te,m=p.child,p.tag){case 0:case 11:case 14:case 15:to(4,p,p.return);break;case 1:Gs(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){Ft(i,n,S)}}break;case 5:Gs(p,p.return);break;case 22:if(p.memoizedState!==null){dm(h);continue}}m!==null?(m.return=p,Te=m):dm(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=lg("display",a))}catch(S){Ft(t,t.return,S)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){Ft(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Jn(e,t),xi(t),i&4&&cm(t);break;case 21:break;default:Jn(e,t),xi(t)}}function xi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Iv(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fo(r,""),i.flags&=-33);var s=lm(t);Zd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=lm(t);Kd(t,o,a);break;default:throw Error(ce(161))}}catch(l){Ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iS(t,e,n){Te=t,Ov(t)}function Ov(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||il;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||fn;o=il;var c=fn;if(il=a,(fn=l)&&!c)for(Te=r;Te!==null;)a=Te,l=a.child,a.tag===22&&a.memoizedState!==null?fm(r):l!==null?(l.return=a,Te=l):fm(r);for(;s!==null;)Te=s,Ov(s),s=s.sibling;Te=r,il=o,fn=c}um(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):um(t)}}function um(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:fn||Bc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!fn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:si(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&go(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}fn||e.flags&512&&Yd(e)}catch(p){Ft(e,e.return,p)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function dm(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function fm(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bc(4,e)}catch(l){Ft(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ft(e,r,l)}}var s=e.return;try{Yd(e)}catch(l){Ft(e,s,l)}break;case 5:var a=e.return;try{Yd(e)}catch(l){Ft(e,a,l)}}}catch(l){Ft(e,e.return,l)}if(e===t){Te=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Te=o;break}Te=e.return}}var rS=Math.ceil,_c=Yi.ReactCurrentDispatcher,Lh=Yi.ReactCurrentOwner,Xn=Yi.ReactCurrentBatchConfig,vt=0,en=null,Gt=null,rn=0,kn=0,js=Ar(0),Xt=0,Co=null,rs=0,zc=0,kh=0,no=null,Mn=null,Ih=0,oa=1/0,Di=null,yc=!1,Qd=null,xr=null,rl=!1,dr=null,Sc=0,io=0,Jd=null,jl=-1,Wl=0;function _n(){return vt&6?Ht():jl!==-1?jl:jl=Ht()}function _r(t){return t.mode&1?vt&2&&rn!==0?rn&-rn:Hy.transition!==null?(Wl===0&&(Wl=Sg()),Wl):(t=yt,t!==0||(t=window.event,t=t===void 0?16:Ag(t.type)),t):1}function fi(t,e,n,i){if(50<io)throw io=0,Jd=null,Error(ce(185));Lo(t,n,i),(!(vt&2)||t!==en)&&(t===en&&(!(vt&2)&&(zc|=n),Xt===4&&lr(t,rn)),Tn(t,i),n===1&&vt===0&&!(e.mode&1)&&(oa=Ht()+500,Uc&&Rr()))}function Tn(t,e){var n=t.callbackNode;H1(t,e);var i=rc(t,t===en?rn:0);if(i===0)n!==null&&Sp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sp(n),e===1)t.tag===0?zy(hm.bind(null,t)):Xg(hm.bind(null,t)),Uy(function(){!(vt&6)&&Rr()}),n=null;else{switch(Mg(i)){case 1:n=ah;break;case 4:n=_g;break;case 16:n=ic;break;case 536870912:n=yg;break;default:n=ic}n=Wv(n,Fv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Fv(t,e){if(jl=-1,Wl=0,vt&6)throw Error(ce(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var i=rc(t,t===en?rn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Mc(t,i);else{e=i;var r=vt;vt|=2;var s=zv();(en!==t||rn!==e)&&(Di=null,oa=Ht()+500,Zr(t,e));do try{oS();break}catch(o){Bv(t,o)}while(!0);_h(),_c.current=s,vt=r,Gt!==null?e=0:(en=null,rn=0,e=Xt)}if(e!==0){if(e===2&&(r=Td(t),r!==0&&(i=r,e=ef(t,r))),e===1)throw n=Co,Zr(t,0),lr(t,i),Tn(t,Ht()),n;if(e===6)lr(t,i);else{if(r=t.current.alternate,!(i&30)&&!sS(r)&&(e=Mc(t,i),e===2&&(s=Td(t),s!==0&&(i=s,e=ef(t,s))),e===1))throw n=Co,Zr(t,0),lr(t,i),Tn(t,Ht()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Hr(t,Mn,Di);break;case 3:if(lr(t,i),(i&130023424)===i&&(e=Ih+500-Ht(),10<e)){if(rc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){_n(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Id(Hr.bind(null,t,Mn,Di),e);break}Hr(t,Mn,Di);break;case 4:if(lr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-di(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rS(i/1960))-i,10<i){t.timeoutHandle=Id(Hr.bind(null,t,Mn,Di),i);break}Hr(t,Mn,Di);break;case 5:Hr(t,Mn,Di);break;default:throw Error(ce(329))}}}return Tn(t,Ht()),t.callbackNode===n?Fv.bind(null,t):null}function ef(t,e){var n=no;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=Mc(t,e),t!==2&&(e=Mn,Mn=n,e!==null&&tf(e)),t}function tf(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function sS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~kh,e&=~zc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-di(e),i=1<<n;t[n]=-1,e&=~i}}function hm(t){if(vt&6)throw Error(ce(327));Zs();var e=rc(t,0);if(!(e&1))return Tn(t,Ht()),null;var n=Mc(t,e);if(t.tag!==0&&n===2){var i=Td(t);i!==0&&(e=i,n=ef(t,i))}if(n===1)throw n=Co,Zr(t,0),lr(t,e),Tn(t,Ht()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,Mn,Di),Tn(t,Ht()),null}function Dh(t,e){var n=vt;vt|=1;try{return t(e)}finally{vt=n,vt===0&&(oa=Ht()+500,Uc&&Rr())}}function ss(t){dr!==null&&dr.tag===0&&!(vt&6)&&Zs();var e=vt;vt|=1;var n=Xn.transition,i=yt;try{if(Xn.transition=null,yt=1,t)return t()}finally{yt=i,Xn.transition=n,vt=e,!(vt&6)&&Rr()}}function Uh(){kn=js.current,Lt(js)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dy(n)),Gt!==null)for(n=Gt.return;n!==null;){var i=n;switch(gh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&cc();break;case 3:sa(),Lt(wn),Lt(pn),bh();break;case 5:wh(i);break;case 4:sa();break;case 13:Lt(It);break;case 19:Lt(It);break;case 10:yh(i.type._context);break;case 22:case 23:Uh()}n=n.return}if(en=t,Gt=t=yr(t.current,null),rn=kn=e,Xt=0,Co=null,kh=zc=rs=0,Mn=no=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Xr=null}return t}function Bv(t,e){do{var n=Gt;try{if(_h(),Hl.current=xc,vc){for(var i=Dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}vc=!1}if(is=0,Qt=$t=Dt=null,eo=!1,wo=0,Lh.current=null,n===null||n.return===null){Xt=1,Co=e,Gt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=rn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=em(a);if(m!==null){m.flags&=-257,tm(m,a,o,s,e),m.mode&1&&Jp(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(l),e.updateQueue=S}else v.add(l);break e}else{if(!(e&1)){Jp(s,c,e),Oh();break e}l=Error(ce(426))}}else if(kt&&o.mode&1){var g=em(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),tm(g,a,o,s,e),vh(aa(l,o));break e}}s=l=aa(l,o),Xt!==4&&(Xt=2),no===null?no=[s]:no.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Mv(s,l,e);Xp(s,u);break e;case 1:o=l;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(xr===null||!xr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Ev(s,o,e);Xp(s,_);break e}}s=s.return}while(s!==null)}Vv(n)}catch(A){e=A,Gt===n&&n!==null&&(Gt=n=n.return);continue}break}while(!0)}function zv(){var t=_c.current;return _c.current=xc,t===null?xc:t}function Oh(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),en===null||!(rs&268435455)&&!(zc&268435455)||lr(en,rn)}function Mc(t,e){var n=vt;vt|=2;var i=zv();(en!==t||rn!==e)&&(Di=null,Zr(t,e));do try{aS();break}catch(r){Bv(t,r)}while(!0);if(_h(),vt=n,_c.current=i,Gt!==null)throw Error(ce(261));return en=null,rn=0,Xt}function aS(){for(;Gt!==null;)Hv(Gt)}function oS(){for(;Gt!==null&&!L1();)Hv(Gt)}function Hv(t){var e=jv(t.alternate,t,kn);t.memoizedProps=t.pendingProps,e===null?Vv(t):Gt=e,Lh.current=null}function Vv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eS(n,e),n!==null){n.flags&=32767,Gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xt=6,Gt=null;return}}else if(n=Jy(n,e,kn),n!==null){Gt=n;return}if(e=e.sibling,e!==null){Gt=e;return}Gt=e=t}while(e!==null);Xt===0&&(Xt=5)}function Hr(t,e,n){var i=yt,r=Xn.transition;try{Xn.transition=null,yt=1,lS(t,e,n,i)}finally{Xn.transition=r,yt=i}return null}function lS(t,e,n,i){do Zs();while(dr!==null);if(vt&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(V1(t,s),t===en&&(Gt=en=null,rn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rl||(rl=!0,Wv(ic,function(){return Zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var a=yt;yt=1;var o=vt;vt|=4,Lh.current=null,nS(t,n),Uv(n,t),Ay(Ld),sc=!!Pd,Ld=Pd=null,t.current=n,iS(n),k1(),vt=o,yt=a,Xn.transition=s}else t.current=n;if(rl&&(rl=!1,dr=t,Sc=r),s=t.pendingLanes,s===0&&(xr=null),U1(n.stateNode),Tn(t,Ht()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(yc)throw yc=!1,t=Qd,Qd=null,t;return Sc&1&&t.tag!==0&&Zs(),s=t.pendingLanes,s&1?t===Jd?io++:(io=0,Jd=t):io=0,Rr(),null}function Zs(){if(dr!==null){var t=Mg(Sc),e=Xn.transition,n=yt;try{if(Xn.transition=null,yt=16>t?16:t,dr===null)var i=!1;else{if(t=dr,dr=null,Sc=0,vt&6)throw Error(ce(331));var r=vt;for(vt|=4,Te=t.current;Te!==null;){var s=Te,a=s.child;if(Te.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Te=c;Te!==null;){var d=Te;switch(d.tag){case 0:case 11:case 15:to(8,d,s)}var h=d.child;if(h!==null)h.return=d,Te=h;else for(;Te!==null;){d=Te;var p=d.sibling,m=d.return;if(kv(d),d===c){Te=null;break}if(p!==null){p.return=m,Te=p;break}Te=m}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}Te=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Te=a;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:to(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Te=u;break e}Te=s.return}}var x=t.current;for(Te=x;Te!==null;){a=Te;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Te=y;else e:for(a=x;Te!==null;){if(o=Te,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Bc(9,o)}}catch(A){Ft(o,o.return,A)}if(o===a){Te=null;break e}var _=o.sibling;if(_!==null){_.return=o.return,Te=_;break e}Te=o.return}}if(vt=r,Rr(),wi&&typeof wi.onPostCommitFiberRoot=="function")try{wi.onPostCommitFiberRoot(Pc,t)}catch{}i=!0}return i}finally{yt=n,Xn.transition=e}}return!1}function pm(t,e,n){e=aa(n,e),e=Mv(t,e,1),t=vr(t,e,1),e=_n(),t!==null&&(Lo(t,1,e),Tn(t,e))}function Ft(t,e,n){if(t.tag===3)pm(t,t,n);else for(;e!==null;){if(e.tag===3){pm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))){t=aa(n,t),t=Ev(e,t,1),e=vr(e,t,1),t=_n(),e!==null&&(Lo(e,1,t),Tn(e,t));break}}e=e.return}}function cS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=_n(),t.pingedLanes|=t.suspendedLanes&n,en===t&&(rn&n)===n&&(Xt===4||Xt===3&&(rn&130023424)===rn&&500>Ht()-Ih?Zr(t,0):kh|=n),Tn(t,e)}function Gv(t,e){e===0&&(t.mode&1?(e=qo,qo<<=1,!(qo&130023424)&&(qo=4194304)):e=1);var n=_n();t=$i(t,e),t!==null&&(Lo(t,e,n),Tn(t,n))}function uS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Gv(t,n)}function dS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Gv(t,n)}var jv;jv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wn.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,Qy(t,e,n);En=!!(t.flags&131072)}else En=!1,kt&&e.flags&1048576&&qg(e,fc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Gl(t,e),t=e.pendingProps;var r=na(e,pn.current);Ks(e,n),r=Ch(null,e,i,t,r,n);var s=Ah();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,uc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mh(e),r.updater=Fc,e.stateNode=r,r._reactInternals=e,Hd(e,i,t,n),e=jd(null,e,i,!0,s,n)):(e.tag=0,kt&&s&&mh(e),xn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Gl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hS(i),t=si(i,t),r){case 0:e=Gd(null,e,i,t,n);break e;case 1:e=rm(null,e,i,t,n);break e;case 11:e=nm(null,e,i,t,n);break e;case 14:e=im(null,e,i,si(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Gd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),rm(t,e,i,r,n);case 3:e:{if(Cv(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ev(t,e),mc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=aa(Error(ce(423)),e),e=sm(t,e,i,n,r);break e}else if(i!==r){r=aa(Error(ce(424)),e),e=sm(t,e,i,n,r);break e}else for(Un=gr(e.stateNode.containerInfo.firstChild),On=e,kt=!0,li=null,n=Qg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ia(),i===r){e=Xi(t,e,n);break e}xn(t,e,i,n)}e=e.child}return e;case 5:return tv(e),t===null&&Fd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,kd(i,r)?a=null:s!==null&&kd(i,s)&&(e.flags|=32),Tv(t,e),xn(t,e,a,n),e.child;case 6:return t===null&&Fd(e),null;case 13:return Av(t,e,n);case 4:return Eh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ra(e,null,i,n):xn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),nm(t,e,i,r,n);case 7:return xn(t,e,e.pendingProps,n),e.child;case 8:return xn(t,e,e.pendingProps.children,n),e.child;case 12:return xn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Rt(hc,i._currentValue),i._currentValue=a,s!==null)if(pi(s.value,a)){if(s.children===r.children&&!wn.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Bd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}xn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ks(e,n),r=qn(r),i=i(r),e.flags|=1,xn(t,e,i,n),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),im(t,e,i,r,n);case 15:return wv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Gl(t,e),e.tag=1,bn(i)?(t=!0,uc(e)):t=!1,Ks(e,n),Sv(e,i,r),Hd(e,i,r,n),jd(null,e,i,!0,t,n);case 19:return Rv(t,e,n);case 22:return bv(t,e,n)}throw Error(ce(156,e.tag))};function Wv(t,e){return xg(t,e)}function fS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,i){return new fS(t,e,n,i)}function Fh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hS(t){if(typeof t=="function")return Fh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ih)return 11;if(t===rh)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Fh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Is:return Qr(n.children,r,s,e);case nh:a=8,r|=8;break;case dd:return t=$n(12,n,e,r|2),t.elementType=dd,t.lanes=s,t;case fd:return t=$n(13,n,e,r),t.elementType=fd,t.lanes=s,t;case hd:return t=$n(19,n,e,r),t.elementType=hd,t.lanes=s,t;case tg:return Hc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J0:a=10;break e;case eg:a=9;break e;case ih:a=11;break e;case rh:a=14;break e;case sr:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=$n(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qr(t,e,n,i){return t=$n(7,t,i,e),t.lanes=n,t}function Hc(t,e,n,i){return t=$n(22,t,i,e),t.elementType=tg,t.lanes=n,t.stateNode={isHidden:!1},t}function bu(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function Tu(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=au(0),this.expirationTimes=au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bh(t,e,n,i,r,s,a,o,l){return t=new pS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mh(s),t}function mS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function $v(t){if(!t)return wr;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(bn(n))return $g(t,n,e)}return e}function Xv(t,e,n,i,r,s,a,o,l){return t=Bh(n,i,!0,t,r,s,a,o,l),t.context=$v(null),n=t.current,i=_n(),r=_r(n),s=Vi(i,r),s.callback=e??null,vr(n,s,r),t.current.lanes=r,Lo(t,r,i),Tn(t,i),t}function Vc(t,e,n,i){var r=e.current,s=_n(),a=_r(r);return n=$v(n),e.context===null?e.context=n:e.pendingContext=n,e=Vi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=vr(r,e,a),t!==null&&(fi(t,r,a,s),zl(t,r,a)),a}function Ec(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zh(t,e){mm(t,e),(t=t.alternate)&&mm(t,e)}function gS(){return null}var qv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hh(t){this._internalRoot=t}Gc.prototype.render=Hh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Vc(t,e,null,null)};Gc.prototype.unmount=Hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ss(function(){Vc(null,t,null,null)}),e[Wi]=null}};function Gc(t){this._internalRoot=t}Gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&Cg(t)}};function Vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gm(){}function vS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ec(a);s.call(c)}}var a=Xv(e,i,t,0,null,!1,!1,"",gm);return t._reactRootContainer=a,t[Wi]=a.current,_o(t.nodeType===8?t.parentNode:t),ss(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Ec(l);o.call(c)}}var l=Bh(t,0,!1,null,null,!1,!1,"",gm);return t._reactRootContainer=l,t[Wi]=l.current,_o(t.nodeType===8?t.parentNode:t),ss(function(){Vc(e,l,n,i)}),l}function Wc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ec(a);o.call(l)}}Vc(e,a,t,r)}else a=vS(n,e,t,r,i);return Ec(a)}Eg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wa(e.pendingLanes);n!==0&&(oh(e,n|1),Tn(e,Ht()),!(vt&6)&&(oa=Ht()+500,Rr()))}break;case 13:ss(function(){var i=$i(t,1);if(i!==null){var r=_n();fi(i,t,1,r)}}),zh(t,1)}};lh=function(t){if(t.tag===13){var e=$i(t,134217728);if(e!==null){var n=_n();fi(e,t,134217728,n)}zh(t,134217728)}};wg=function(t){if(t.tag===13){var e=_r(t),n=$i(t,e);if(n!==null){var i=_n();fi(n,t,e,i)}zh(t,e)}};bg=function(){return yt};Tg=function(t,e){var n=yt;try{return yt=t,e()}finally{yt=n}};Ed=function(t,e,n){switch(e){case"input":if(gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Dc(i);if(!r)throw Error(ce(90));ig(i),gd(i,r)}}}break;case"textarea":sg(t,n);break;case"select":e=n.value,e!=null&&$s(t,!!n.multiple,e,!1)}};fg=Dh;hg=ss;var xS={usingClientEntryPoint:!1,Events:[Io,Fs,Dc,ug,dg,Dh]},Da={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_S={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gg(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||gS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Pc=sl.inject(_S),wi=sl}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xS;Bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vh(e))throw Error(ce(200));return mS(t,e,null,n)};Bn.createRoot=function(t,e){if(!Vh(t))throw Error(ce(299));var n=!1,i="",r=qv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bh(t,1,!1,null,null,n,!1,i,r),t[Wi]=e.current,_o(t.nodeType===8?t.parentNode:t),new Hh(e)};Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=gg(e),t=t===null?null:t.stateNode,t};Bn.flushSync=function(t){return ss(t)};Bn.hydrate=function(t,e,n){if(!jc(e))throw Error(ce(200));return Wc(null,t,e,!0,n)};Bn.hydrateRoot=function(t,e,n){if(!Vh(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=qv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Xv(e,null,t,1,n??null,r,!1,s,a),t[Wi]=e.current,_o(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gc(e)};Bn.render=function(t,e,n){if(!jc(e))throw Error(ce(200));return Wc(null,t,e,!1,n)};Bn.unmountComponentAtNode=function(t){if(!jc(t))throw Error(ce(40));return t._reactRootContainer?(ss(function(){Wc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};Bn.unstable_batchedUpdates=Dh;Bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!jc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Wc(t,e,n,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function Yv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yv)}catch(t){console.error(t)}}Yv(),Y0.exports=Bn;var yS=Y0.exports,vm=yS;cd.createRoot=vm.createRoot,cd.hydrateRoot=vm.hydrateRoot;var lt=(t=>(t.USER_EXEC="USER_EXEC",t.PRIV_EXEC="PRIV_EXEC",t.GLOBAL_CONFIG="GLOBAL_CONFIG",t.INTERFACE_CONFIG="INTERFACE_CONFIG",t.VLAN_CONFIG="VLAN_CONFIG",t.LINE_CONFIG="LINE_CONFIG",t))(lt||{}),tt=(t=>(t.ROUTER="router",t.SWITCH="switch",t.HOST="host",t.SERVER="server",t))(tt||{}),ct=(t=>(t.NONE="NONE",t.NO_IP="NO_IP",t.NO_LINK="NO_LINK",t.ADMIN_DOWN="ADMIN_DOWN",t.VLAN_MISMATCH="VLAN_MISMATCH",t.WRONG_SUBNET="WRONG_SUBNET",t.NO_GATEWAY="NO_GATEWAY",t.NO_ROUTE="NO_ROUTE",t.HOST_UNREACHABLE="HOST_UNREACHABLE",t.ACL_DENIED="ACL_DENIED",t))(ct||{}),ee=(t=>(t.NONE="NONE",t.CLOSE_SESSION="CLOSE_SESSION",t.OPEN_EDITOR="OPEN_EDITOR",t))(ee||{}),yi=(t=>(t.VULNERABLE="VULNERABLE",t.PATCHED="PATCHED",t.NORMAL="NORMAL",t.ERROR="ERROR",t))(yi||{});function ro(t){const e=t.trim();if(!e)return"";const n=e.match(/^([^.]+)\.(\d+)$/);if(n)return`${ro(n[1])}.${n[2]}`;const i=e.match(/^([a-zA-Z]+)\s*(\d+(?:\/\d+)*(?:\.\d+)?)$/);if(!i)return e;const r=i[1].toLowerCase(),s=i[2];return r.startsWith("gi")||r.startsWith("g")?`GigabitEthernet${s}`:r.startsWith("fa")||r.startsWith("f")?`FastEthernet${s}`:r.startsWith("et")||r.startsWith("e")?`Ethernet${s}`:`${i[1]}${s}`}function nf(t){const e=t.trim(),n=e.match(/^([^.]+)\.(\d+)$/);return n?`${nf(n[1])}.${n[2]}`:e.startsWith("GigabitEthernet")?`Gi${e.slice(15)}`:e.startsWith("FastEthernet")?`Fa${e.slice(12)}`:e.startsWith("Ethernet")?`Eth${e.slice(8)}`:e}function Kv(t){return t.includes(".")}function SS(t){return t.split(".")[0]}function MS(t){const e=t.split(".");if(e.length>1){const n=parseInt(e[1],10);return isNaN(n)?null:n}return null}const ES={router_2port:{id:"router_2port",type:tt.ROUTER,interfaces:["GigabitEthernet0/0","GigabitEthernet0/1"],defaultRackUnits:1},switch_24:{id:"switch_24",type:tt.SWITCH,interfaces:[...Array.from({length:24},(t,e)=>`FastEthernet0/${e+1}`),"GigabitEthernet0/1","GigabitEthernet0/2"],defaultRackUnits:1},pc:{id:"pc",type:tt.HOST,interfaces:["Ethernet0"]},server:{id:"server",type:tt.SERVER,interfaces:["Ethernet0"],defaultRackUnits:1}};function wS(t){const e=ES[t];return e?[...e.interfaces]:[]}class bS{constructor(e,n,i,r){Ve(this,"id");Ve(this,"type");Ve(this,"model");Ve(this,"hostname");Ve(this,"rack");Ve(this,"slot");Ve(this,"desk");Ve(this,"interfaces",new Map);Ve(this,"enableSecret","");Ve(this,"users",new Map);Ve(this,"domainName","");Ve(this,"hasRsaKey",!1);Ve(this,"vlans",new Map);Ve(this,"routes",[]);Ve(this,"natRules",[]);Ve(this,"acls",[]);Ve(this,"ipRouting",!0);Ve(this,"ip",null);Ve(this,"mask",null);Ve(this,"gateway",null);Ve(this,"locked",!1);Ve(this,"files",new Map);Ve(this,"services",[]);Ve(this,"vulns",[]);Ve(this,"patchRevs",new Map);this.id=e,this.type=n,this.model=i,this.hostname=r||e,this.type===tt.SWITCH&&this.vlans.set(1,"default");const s=wS(i);for(const a of s){const o=ro(a),l=this.type===tt.SWITCH,c=this.type===tt.ROUTER;this.interfaces.set(o,{fullName:o,shortName:nf(o),adminUp:!c,operUp:!1,ip:null,mask:null,peer:null,mode:l?"access":void 0,accessVlan:l?1:void 0,trunkAllowed:l?[]:void 0})}}getInterface(e){const n=ro(e);return this.interfaces.get(n)}ensureSubinterface(e){const n=ro(e);if(!Kv(n))return null;if(this.interfaces.has(n))return this.interfaces.get(n);const i=SS(n);if(!this.interfaces.get(i))return null;const s=MS(n),a={fullName:n,shortName:nf(n),adminUp:!0,operUp:!1,ip:null,mask:null,peer:null,isSubinterface:!0,parent:i,dot1qVlan:s||void 0};return this.interfaces.set(n,a),a}getOrderedInterfaces(){return Array.from(this.interfaces.values())}updateOperStatus(e,n){const i=this.getInterface(e);if(!i)return;if(i.isSubinterface&&i.parent){const l=this.getInterface(i.parent);i.operUp=i.adminUp&&((l==null?void 0:l.operUp)??!1);return}if(!i.adminUp||!i.peer){i.operUp=!1;return}const[r,s]=i.peer.split(":"),a=n.get(r);if(!a){i.operUp=!1;return}const o=a.getInterface(s);i.operUp=i.adminUp&&((o==null?void 0:o.adminUp)??!1)}}function Jr(t){const e=t.trim().split(".");if(e.length!==4)return-1;let n=0;for(let i=0;i<4;i++){const r=Number(e[i]);if(isNaN(r)||r<0||r>255||e[i].trim()===""||!/^\d+$/.test(e[i]))return-1;n=n<<8|r}return n>>>0}function TS(t){const e=t>>>0;return`${e>>>24&255}.${e>>>16&255}.${e>>>8&255}.${e&255}`}function al(t){return Jr(t)!==-1}function xm(t){const e=Jr(t);if(e===-1)return!1;const n=~e>>>0;return(n+1&n)===0}function Ua(t,e,n){const i=Jr(t),r=Jr(e),s=Jr(n);return i===-1||r===-1||s===-1?!1:(i&s)>>>0===(r&s)>>>0}function _m(t,e){const n=Jr(t),i=Jr(e);return n===-1||i===-1?"0.0.0.0":TS((n&i)>>>0)}function CS(t,e,n){return _m(t,n)===_m(e,n)}class AS{constructor(e){Ve(this,"devices");this.devices=e}refreshAllOperStatuses(){for(const e of this.devices.values())for(const n of e.interfaces.values())e.updateOperStatus(n.fullName,this.devices)}resolvePing(e,n){this.refreshAllOperStatuses();const i=this.devices.get(e);if(!i)return{success:!1,hops:[],failReason:ct.HOST_UNREACHABLE,failAt:e};const r=this.resolveOneWay(i,n,!0);if(!r.success)return r;const s=r.hops[r.hops.length-1],a=this.devices.get(s);if(!a)return{success:!1,hops:r.hops,failReason:ct.HOST_UNREACHABLE,failAt:n};const o=this.getDeviceIp(i,n);if(!o)return{success:!1,hops:r.hops,failReason:ct.NO_IP,failAt:e};const l=this.resolveOneWay(a,o,!1);return l.success?{success:!0,hops:r.hops,failReason:ct.NONE,failAt:""}:{success:!1,hops:r.hops,failReason:l.failReason,failAt:l.failAt}}getDeviceIp(e,n){if(e.type===tt.HOST||e.type===tt.SERVER)return e.ip;for(const i of e.interfaces.values())if(i.ip&&n&&i.mask&&Ua(i.ip,n,i.mask))return i.ip;for(const i of e.interfaces.values())if(i.ip)return i.ip;return null}resolveOneWay(e,n,i){const r=[e.id];let s=e,a=15;for(;a-- >0;){if(this.deviceOwnsIp(s,n))return{success:!0,hops:r,failReason:ct.NONE,failAt:""};let o=null,l=null,c=1;if(s.type===tt.HOST||s.type===tt.SERVER){if(!s.ip||!s.mask)return{success:!1,hops:r,failReason:ct.NO_IP,failAt:s.id};if(l=s.getInterface("Ethernet0")||s.getOrderedInterfaces()[0]||null,!l)return{success:!1,hops:r,failReason:ct.NO_LINK,failAt:s.id};if(Ua(s.ip,n,s.mask))o=n;else{if(!s.gateway)return{success:!1,hops:r,failReason:ct.NO_GATEWAY,failAt:s.id};if(!Ua(s.ip,s.gateway,s.mask))return{success:!1,hops:r,failReason:ct.WRONG_SUBNET,failAt:s.id};o=s.gateway}}else if(s.type===tt.ROUTER){let m=null;for(const v of s.interfaces.values())if(v.ip&&v.mask&&Ua(v.ip,n,v.mask)){m={iface:v,nextHop:n,maskBits:24};break}if(!m){for(const v of s.routes)if(CS(n,v.network,v.mask)){for(const S of s.interfaces.values())if(S.ip&&S.mask&&Ua(S.ip,v.nextHop,S.mask)){m={iface:S,nextHop:v.nextHop,maskBits:24};break}}}if(!m)return{success:!1,hops:r,failReason:ct.NO_ROUTE,failAt:s.id};l=m.iface,o=m.nextHop,l.isSubinterface&&l.dot1qVlan&&(c=l.dot1qVlan)}if(!l)return{success:!1,hops:r,failReason:ct.NO_ROUTE,failAt:s.id};const d=l.isSubinterface&&l.parent?s.getInterface(l.parent):l;if(!d)return{success:!1,hops:r,failReason:ct.NO_LINK,failAt:s.id};if(!l.adminUp||!d.adminUp)return{success:!1,hops:r,failReason:ct.ADMIN_DOWN,failAt:`${s.id}:${l.shortName}`};if(!d.peer)return{success:!1,hops:r,failReason:ct.NO_LINK,failAt:`${s.id}:${d.shortName}`};if(!d.operUp){const[m,v]=d.peer.split(":"),S=this.devices.get(m),g=S==null?void 0:S.getInterface(v);return g&&!g.adminUp?{success:!1,hops:r,failReason:ct.ADMIN_DOWN,failAt:`${m}:${g.shortName}`}:{success:!1,hops:r,failReason:ct.NO_LINK,failAt:`${s.id}:${d.shortName}`}}if(!o)return{success:!1,hops:r,failReason:ct.NO_ROUTE,failAt:s.id};const h=this.traverseL2(s,l,c,o);if(!h.success)return{success:!1,hops:[...r,...h.switchHops],failReason:h.failReason,failAt:h.failAt};for(const m of h.switchHops)r.push(m);const p=h.targetDevice;if(r.push(p.id),s=p,this.deviceOwnsIp(s,n))return{success:!0,hops:r,failReason:ct.NONE,failAt:""}}return{success:!1,hops:r,failReason:ct.HOST_UNREACHABLE,failAt:n}}deviceOwnsIp(e,n){if(e.ip===n)return!0;for(const i of e.interfaces.values())if(i.ip===n)return!0;return!1}traverseL2(e,n,i,r){const s=n.isSubinterface&&n.parent?e.getInterface(n.parent):n;if(!s.peer)return{success:!1,switchHops:[],failReason:ct.NO_LINK,failAt:`${e.id}:${s.shortName}`};const[a,o]=s.peer.split(":"),l=this.devices.get(a);if(!l)return{success:!1,switchHops:[],failReason:ct.HOST_UNREACHABLE,failAt:r};if(l.type!==tt.SWITCH)return this.deviceOwnsIp(l,r)?{success:!0,targetDevice:l,targetIface:l.getInterface(o),switchHops:[],failReason:ct.NONE,failAt:""}:{success:!1,switchHops:[],failReason:ct.HOST_UNREACHABLE,failAt:r};const c=[],d=l.getInterface(o);let h=i;if(d.mode==="access"){if(h=d.accessVlan||1,n.isSubinterface&&n.dot1qVlan&&n.dot1qVlan!==h)return{success:!1,switchHops:[l.id],failReason:ct.VLAN_MISMATCH,failAt:`${l.id}:${d.shortName}`}}else if(d.mode==="trunk"){const v=d.trunkAllowed||[];if(v.length>0&&!v.includes(i))return{success:!1,switchHops:[l.id],failReason:ct.VLAN_MISMATCH,failAt:`${l.id}:${d.shortName}`};h=i}c.push({dev:l,ingressIf:d,vlan:h,switchHops:[l.id]});const p=new Set([l.id]);let m="";for(;c.length>0;){const{dev:v,ingressIf:S,vlan:g,switchHops:u}=c.shift();for(const x of v.interfaces.values()){if(x.fullName===S.fullName||!x.peer)continue;let y=!1,_=!1;if(x.mode==="access")x.accessVlan===g?(y=!0,_=!1):m=`${v.id}:${x.shortName}`;else if(x.mode==="trunk"){const E=x.trunkAllowed||[];E.length===0||E.includes(g)?(y=!0,_=!0):m=`${v.id}:${x.shortName}`}if(!y)continue;const[A,C]=x.peer.split(":"),T=this.devices.get(A);if(!T)continue;const R=T.getInterface(C);if(!(!R||!R.operUp)){if(T.type===tt.SWITCH)p.has(T.id)||(p.add(T.id),c.push({dev:T,ingressIf:R,vlan:g,switchHops:[...u,T.id]}));else if(T.type===tt.ROUTER){if(_){for(const E of T.interfaces.values())if(E.isSubinterface&&E.parent===R.fullName&&E.dot1qVlan===g&&E.operUp&&this.deviceOwnsIp(T,r))return{success:!0,targetDevice:T,targetIface:E,switchHops:u,failReason:ct.NONE,failAt:""}}else if(R.operUp&&this.deviceOwnsIp(T,r))return{success:!0,targetDevice:T,targetIface:R,switchHops:u,failReason:ct.NONE,failAt:""}}else if(this.deviceOwnsIp(T,r))return{success:!0,targetDevice:T,targetIface:R,switchHops:u,failReason:ct.NONE,failAt:""}}}}return m?{success:!1,switchHops:[l.id],failReason:ct.VLAN_MISMATCH,failAt:m}:{success:!1,switchHops:[l.id],failReason:ct.HOST_UNREACHABLE,failAt:r}}}function Cu(t){const e=[];let n="",i=!1;for(let r=0;r<t.length;r++){const s=t[r];s==='"'?i=!i:s===" "&&!i?n.length>0&&(e.push(n),n=""):n+=s}return n.length>0&&e.push(n),e}function cn(t,e){const n=t.toLowerCase();for(const r of e)if(r.toLowerCase()===n)return{match:r,ambiguous:!1,matches:[r]};const i=e.filter(r=>r.toLowerCase().startsWith(n));return i.length===1?{match:i[0],ambiguous:!1,matches:i}:i.length>1?{match:null,ambiguous:!0,matches:i}:{match:null,ambiguous:!1,matches:[]}}function RS(t){const e=[];e.push("Building configuration..."),e.push(""),e.push("Current configuration : 1024 bytes"),e.push("!"),e.push("version 15.2"),e.push("no service timestamps log datetime msec"),e.push("no service password-encryption"),e.push("!"),e.push(`hostname ${t.hostname}`),e.push("!"),t.enableSecret&&(e.push(`enable secret 5 $1$mERr$${t.enableSecret.slice(0,10)}...`),e.push("!"));for(const[n]of t.users)e.push(`username ${n} secret 5 $1$...`);if(t.type===tt.SWITCH)for(const[n,i]of t.vlans)n!==1&&(e.push("!"),e.push(`vlan ${n}`),e.push(` name ${i}`));for(const n of t.getOrderedInterfaces())e.push("!"),e.push(`interface ${n.shortName}`),n.isSubinterface&&n.dot1qVlan&&e.push(` encapsulation dot1Q ${n.dot1qVlan}`),n.ip&&n.mask?e.push(` ip address ${n.ip} ${n.mask}`):t.type===tt.ROUTER&&!n.isSubinterface&&e.push(" no ip address"),t.type===tt.SWITCH&&(n.mode==="trunk"?e.push(" switchport mode trunk"):n.mode==="access"&&(e.push(" switchport mode access"),n.accessVlan&&n.accessVlan!==1&&e.push(` switchport access vlan ${n.accessVlan}`))),n.adminUp?e.push(" no shutdown"):e.push(" shutdown");if(t.type===tt.ROUTER)for(const n of t.routes)e.push(`ip route ${n.network} ${n.mask} ${n.nextHop}`);return e.push("!"),e.push("line con 0"),e.push("line vty 0 4"),e.push(" login"),e.push("!"),e.push("end"),e.join(`
`)}function NS(t){const e=[];e.push("Interface              IP-Address      OK? Method Status                Protocol");for(const n of t.getOrderedInterfaces()){const i=n.shortName.padEnd(22," "),r=(n.ip||"unassigned").padEnd(15," "),s="YES".padEnd(4," "),a=(n.ip?"manual":"unset").padEnd(7," "),o=(n.adminUp?"up":"administratively down").padEnd(22," "),l=n.operUp?"up":"down";e.push(`${i} ${r}${s}${a}${o}${l}`)}return e.join(`
`)}function ym(t){if(t.type!==tt.SWITCH)return"% This command is only supported on switches.";const e=[];e.push("VLAN Name                             Status    Ports"),e.push("---- -------------------------------- --------- -------------------------------");for(const[n,i]of t.vlans){const r=String(n).padEnd(4," "),s=i.padEnd(32," "),a="active   ",o=[];for(const c of t.getOrderedInterfaces())c.mode==="access"&&c.accessVlan===n&&o.push(c.shortName);const l=o.join(", ");e.push(`${r} ${s} ${a} ${l}`)}return e.join(`
`)}function PS(t,e,n=2){const i=[];if(i.push("Type escape sequence to abort."),i.push(`Sending 5, 100-byte ICMP Echos to ${t}, timeout is 2 seconds:`),e){i.push("!!!!!");const r=Math.max(1,n*2);i.push(`Success rate is 100 percent (5/5), round-trip min/avg/max = ${r}/${r+2}/${r+5} ms`)}else i.push("....."),i.push("Success rate is 0 percent (0/5)");return i.join(`
`)}function LS(t,e){const n=[];if(n.push(`Pinging ${t} with 32 bytes of data:`),e){for(let i=0;i<4;i++)n.push(`Reply from ${t}: bytes=32 time=2ms TTL=128`);n.push(""),n.push(`Ping statistics for ${t}:`),n.push("    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),"),n.push("Approximate round trip times in milli-seconds:"),n.push("    Minimum = 2ms, Maximum = 3ms, Average = 2ms")}else{for(let i=0;i<4;i++)n.push("Request timed out.");n.push(""),n.push(`Ping statistics for ${t}:`),n.push("    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss),")}return n.join(`
`)}class kS{constructor(e,n,i){Ve(this,"device");Ve(this,"mode",lt.USER_EXEC);Ve(this,"currentInterface",null);Ve(this,"currentVlan",null);Ve(this,"history",[]);Ve(this,"historyIndex",-1);Ve(this,"pingHandler");Ve(this,"httpHandler");this.device=e,this.pingHandler=n,this.httpHandler=i,(this.device.type===tt.ROUTER||this.device.type===tt.SWITCH)&&(this.mode=lt.USER_EXEC)}getPrompt(){if(this.device.type===tt.HOST)return"C:\\Users\\User>";if(this.device.type===tt.SERVER)return`root@${this.device.hostname}:~# `;const e=this.device.hostname;switch(this.mode){case lt.USER_EXEC:return`${e}>`;case lt.PRIV_EXEC:return`${e}#`;case lt.GLOBAL_CONFIG:return`${e}(config)#`;case lt.INTERFACE_CONFIG:return`${e}(config-if)#`;case lt.VLAN_CONFIG:return`${e}(config-vlan)#`;case lt.LINE_CONFIG:return`${e}(config-line)#`;default:return`${e}#`}}execute(e){const n=e.trim();return n?(this.history.push(e),this.historyIndex=this.history.length,this.device.type===tt.HOST?this.executePcShell(n):this.device.type===tt.SERVER?this.executeServerShell(n):this.executeIos(n)):{output:"",ok:!0,action:ee.NONE}}executePcShell(e){const n=Cu(e),i=n[0].toLowerCase();if(i==="cls")return{output:"\x1B[2J\x1B[0;0H",ok:!0,action:ee.NONE};if(i==="help")return{output:["Available commands:","  ipconfig                  Display current IP configuration","  ipconfig /set <ip> <mask> <gw>  Set IP address, subnet mask, and gateway","  ping <ip>                 Send ICMP Echo requests to destination IP","  curl <url>                Send simulated HTTP GET request","  cls                       Clear console screen"].join(`
`),ok:!0,action:ee.NONE};if(i==="ipconfig"){if(n.length>1&&n[1].toLowerCase()==="/set"){if(this.device.locked)return{output:"Access is denied. Network settings are managed by IT.",ok:!1,action:ee.NONE};if(n.length<5)return{output:"Syntax: ipconfig /set <ip> <subnet_mask> <default_gateway>",ok:!1,action:ee.NONE};const s=n[2],a=n[3],o=n[4];if(!al(s)||!xm(a)||!al(o))return{output:"Error: Invalid IPv4 address or subnet mask.",ok:!1,action:ee.NONE};this.device.ip=s,this.device.mask=a,this.device.gateway=o;const l=this.device.getInterface("Ethernet0");return l&&(l.ip=s,l.mask=a),{output:"IP configuration updated successfully.",ok:!0,action:ee.NONE}}return{output:["Windows IP Configuration","","Ethernet adapter Ethernet0:",`   IPv4 Address. . . . . . . . . . . : ${this.device.ip||"0.0.0.0"}`,`   Subnet Mask . . . . . . . . . . . : ${this.device.mask||"0.0.0.0"}`,`   Default Gateway . . . . . . . . . : ${this.device.gateway||"0.0.0.0"}`].join(`
`),ok:!0,action:ee.NONE}}if(i==="ping"){if(n.length<2)return{output:"Usage: ping [-t] target_name",ok:!1,action:ee.NONE};const r=n[1],s=this.pingHandler(this.device.id,r);return{output:LS(r,s.success),ok:s.success,action:ee.NONE}}if(i==="curl"){if(n.length<2)return{output:"curl: try 'curl --help' for more information",ok:!1,action:ee.NONE};const r=n[1];if(!this.httpHandler)return{output:"curl: HTTP client service unavailable",ok:!1,action:ee.NONE};const s=this.httpHandler(this.device.id,r);return{output:s.body,ok:s.ok,action:ee.NONE}}return{output:`'${n[0]}' is not recognized as an internal or external command, operable program or batch file.`,ok:!1,action:ee.NONE}}executeServerShell(e){const n=Cu(e),i=n[0].toLowerCase();if(i==="help")return{output:["Linux Server Shell commands:","  ls [path]                 List directory contents","  cat <file>                Print file contents","  grep [-i] <pattern> <file> Search for pattern in file","  tail [-n N] <file>        Output the last part of files","  edit <file>               Open file in code patch editor","  service <name> status     Check status of a system service","  clear                     Clear screen"].join(`
`),ok:!0,action:ee.NONE};if(i==="clear")return{output:"\x1B[2J\x1B[0;0H",ok:!0,action:ee.NONE};if(i==="ls"){const r=Array.from(this.device.files.keys());return r.length===0?{output:"",ok:!0,action:ee.NONE}:{output:r.join("  "),ok:!0,action:ee.NONE}}if(i==="cat"){if(n.length<2)return{output:"cat: missing file operand",ok:!1,action:ee.NONE};const r=n[1],s=this.device.files.get(r);return s===void 0?{output:`cat: ${r}: No such file or directory`,ok:!1,action:ee.NONE}:{output:s,ok:!0,action:ee.NONE}}if(i==="tail"){let r=10,s="";if(n[1]==="-n"&&n[2]?(r=parseInt(n[2],10)||10,s=n[3]||""):s=n[1]||"",!s)return{output:"tail: missing file operand",ok:!1,action:ee.NONE};const a=this.device.files.get(s);return a===void 0?{output:`tail: cannot open '${s}' for reading: No such file or directory`,ok:!1,action:ee.NONE}:{output:a.split(`
`).slice(-r).join(`
`),ok:!0,action:ee.NONE}}if(i==="grep"){let r=!1,s="",a="",o=1;if(n[o]==="-i"&&(r=!0,o++),s=n[o++]||"",a=n[o++]||"",!s||!a)return{output:"Usage: grep [-i] <pattern> <file>",ok:!1,action:ee.NONE};const l=this.device.files.get(a);return l===void 0?{output:`grep: ${a}: No such file or directory`,ok:!1,action:ee.NONE}:{output:l.split(`
`).filter(h=>r?h.toLowerCase().includes(s.toLowerCase()):h.includes(s)).join(`
`),ok:!0,action:ee.NONE}}if(i==="edit"){if(n.length<2)return{output:"edit: missing file operand",ok:!1,action:ee.NONE};const r=n[1];return this.device.files.has(r)?{output:`Opening patch editor for ${r}...`,ok:!0,action:ee.OPEN_EDITOR,actionArg:`${this.device.id}:${r}`}:{output:`edit: ${r}: No such file or directory`,ok:!1,action:ee.NONE}}if(i==="service"){const r=n[1];if(n[2]==="status"){const a=this.device.services.find(o=>o.id===r);return a?{output:`● ${r}.service - Apache/Nginx Web Service
   Loaded: loaded
   Active: active (running) on port ${a.port}`,ok:!0,action:ee.NONE}:{output:`Unit ${r}.service could not be found.`,ok:!1,action:ee.NONE}}return{output:"Usage: service <name> status",ok:!1,action:ee.NONE}}return{output:`bash: ${n[0]}: command not found`,ok:!1,action:ee.NONE}}executeIos(e){let n=Cu(e);if(n.length===0)return{output:"",ok:!0,action:ee.NONE};if(n[0].toLowerCase()==="do"&&this.mode!==lt.USER_EXEC&&this.mode!==lt.PRIV_EXEC){const i=this.mode;this.mode=lt.PRIV_EXEC;const r=this.executeIos(n.slice(1).join(" "));return this.mode=i,r}if(n[0].toLowerCase()==="end"&&this.mode!==lt.USER_EXEC&&this.mode!==lt.PRIV_EXEC)return this.mode=lt.PRIV_EXEC,this.currentInterface=null,this.currentVlan=null,{output:"",ok:!0,action:ee.NONE};if(n[0].toLowerCase()==="exit")return this.handleExit();switch(this.mode){case lt.USER_EXEC:return this.handleUserExec(n,e);case lt.PRIV_EXEC:return this.handlePrivExec(n,e);case lt.GLOBAL_CONFIG:return this.handleGlobalConfig(n,e);case lt.INTERFACE_CONFIG:return this.handleInterfaceConfig(n,e);case lt.VLAN_CONFIG:return this.handleVlanConfig(n,e);default:return{output:"% Invalid mode",ok:!1,action:ee.NONE}}}handleExit(){switch(this.mode){case lt.USER_EXEC:return{output:"",ok:!0,action:ee.CLOSE_SESSION};case lt.PRIV_EXEC:return this.mode=lt.USER_EXEC,{output:"",ok:!0,action:ee.NONE};case lt.GLOBAL_CONFIG:return this.mode=lt.PRIV_EXEC,{output:"",ok:!0,action:ee.NONE};case lt.INTERFACE_CONFIG:return this.mode=lt.GLOBAL_CONFIG,this.currentInterface=null,{output:"",ok:!0,action:ee.NONE};case lt.VLAN_CONFIG:return this.mode=lt.GLOBAL_CONFIG,this.currentVlan=null,{output:"",ok:!0,action:ee.NONE};default:return this.mode=lt.PRIV_EXEC,{output:"",ok:!0,action:ee.NONE}}}handleUserExec(e,n){const i=cn(e[0],["enable","show","ping","exit"]);return i.ambiguous?{output:`% Ambiguous command:  "${n}"`,ok:!1,action:ee.NONE}:i.match?i.match==="enable"?(this.mode=lt.PRIV_EXEC,{output:"",ok:!0,action:ee.NONE}):i.match==="ping"?this.handlePing(e.slice(1)):i.match==="show"?this.handleShow(e.slice(1)):{output:"% Incomplete command.",ok:!1,action:ee.NONE}:{output:`Translating "${e[0]}"... % Unknown command or computer name, or unable to find computer address`,ok:!1,action:ee.NONE}}handlePrivExec(e,n){const i=cn(e[0],["disable","configure","show","ping","exit"]);return i.ambiguous?{output:`% Ambiguous command:  "${n}"`,ok:!1,action:ee.NONE}:i.match?i.match==="disable"?(this.mode=lt.USER_EXEC,{output:"",ok:!0,action:ee.NONE}):i.match==="configure"?e.length<2?{output:"% Incomplete command.",ok:!1,action:ee.NONE}:cn(e[1],["terminal","memory"]).match==="terminal"?(this.mode=lt.GLOBAL_CONFIG,{output:"Enter configuration commands, one per line.  End with CNTL/Z.",ok:!0,action:ee.NONE}):{output:"% Invalid input detected at '^' marker.",ok:!1,action:ee.NONE}:i.match==="show"?this.handleShow(e.slice(1)):i.match==="ping"?this.handlePing(e.slice(1)):{output:"% Incomplete command.",ok:!1,action:ee.NONE}:{output:`Translating "${e[0]}"... % Unknown command or computer name, or unable to find computer address`,ok:!1,action:ee.NONE}}handleGlobalConfig(e,n){const i=cn(e[0],["hostname","interface","vlan","no","ip","line","exit","end"]);if(i.ambiguous)return{output:`% Ambiguous command:  "${n}"`,ok:!1,action:ee.NONE};if(!i.match)return{output:"% Invalid input detected at '^' marker.",ok:!1,action:ee.NONE};if(i.match==="hostname")return e.length<2?{output:"% Incomplete command.",ok:!1,action:ee.NONE}:(this.device.hostname=e[1],{output:"",ok:!0,action:ee.NONE});if(i.match==="interface"){if(e.length<2)return{output:"% Incomplete command.",ok:!1,action:ee.NONE};const r=e[1],s=ro(r);return Kv(s)?this.device.type!==tt.ROUTER?{output:"% Subinterfaces are not supported on this device type.",ok:!1,action:ee.NONE}:this.device.ensureSubinterface(s)?(this.currentInterface=s,this.mode=lt.INTERFACE_CONFIG,{output:"",ok:!0,action:ee.NONE}):{output:`% Invalid subinterface "${r}".`,ok:!1,action:ee.NONE}:this.device.getInterface(s)?(this.currentInterface=s,this.mode=lt.INTERFACE_CONFIG,{output:"",ok:!0,action:ee.NONE}):{output:`% Interface "${r}" does not exist.`,ok:!1,action:ee.NONE}}if(i.match==="vlan"){if(this.device.type!==tt.SWITCH)return{output:"% VLAN configuration is only supported on switches.",ok:!1,action:ee.NONE};if(e.length<2)return{output:"% Incomplete command.",ok:!1,action:ee.NONE};const r=parseInt(e[1],10);return isNaN(r)||r<1||r>4094?{output:"% Invalid VLAN ID. Range: 1-4094.",ok:!1,action:ee.NONE}:(this.device.vlans.has(r)||this.device.vlans.set(r,`VLAN${r.toString().padStart(4,"0")}`),this.currentVlan=r,this.mode=lt.VLAN_CONFIG,{output:"",ok:!0,action:ee.NONE})}return{output:"% Invalid input detected at '^' marker.",ok:!1,action:ee.NONE}}handleInterfaceConfig(e,n){if(!this.currentInterface)return this.mode=lt.GLOBAL_CONFIG,{output:"",ok:!0,action:ee.NONE};const i=this.device.getInterface(this.currentInterface);if(!i)return this.mode=lt.GLOBAL_CONFIG,{output:"",ok:!0,action:ee.NONE};if(cn(e[0],["interface"]).match==="interface")return this.handleGlobalConfig(e,n);const s=e[0].toLowerCase()==="no",a=s?e.slice(1):e;if(a.length===0)return{output:"% Incomplete command.",ok:!1,action:ee.NONE};const o=cn(a[0],["shutdown","ip","switchport","encapsulation"]);if(o.ambiguous)return{output:`% Ambiguous command:  "${n}"`,ok:!1,action:ee.NONE};if(!o.match)return{output:"% Invalid input detected at '^' marker.",ok:!1,action:ee.NONE};if(o.match==="shutdown")return i.adminUp=s,{output:"",ok:!0,action:ee.NONE};if(o.match==="encapsulation"){if(!i.isSubinterface)return{output:"% Encapsulation can only be set on subinterfaces.",ok:!1,action:ee.NONE};if(a.length<3)return{output:"% Incomplete command.",ok:!1,action:ee.NONE};if(!cn(a[1],["dot1Q"]).match)return{output:"% Invalid input detected at '^' marker.",ok:!1,action:ee.NONE};const c=parseInt(a[2],10);return isNaN(c)||c<1||c>4094?{output:"% Invalid VLAN ID.",ok:!1,action:ee.NONE}:(i.dot1qVlan=c,{output:"",ok:!0,action:ee.NONE})}if(o.match==="ip"){if(a.length<2)return{output:"% Incomplete command.",ok:!1,action:ee.NONE};if(cn(a[1],["address"]).match==="address"){if(s)return i.ip=null,i.mask=null,{output:"",ok:!0,action:ee.NONE};if(a.length<4)return{output:"% Incomplete command.",ok:!1,action:ee.NONE};const c=a[2],d=a[3];return!al(c)||!xm(d)?{output:"% Invalid IP address or subnet mask.",ok:!1,action:ee.NONE}:(i.ip=c,i.mask=d,{output:"",ok:!0,action:ee.NONE})}return{output:"% Invalid input detected at '^' marker.",ok:!1,action:ee.NONE}}if(o.match==="switchport"){if(this.device.type!==tt.SWITCH)return{output:"% switchport commands are only valid on switches.",ok:!1,action:ee.NONE};if(a.length<2)return{output:"% Incomplete command.",ok:!1,action:ee.NONE};const l=cn(a[1],["mode","access"]);if(l.match==="mode"){if(a.length<3)return{output:"% Incomplete command.",ok:!1,action:ee.NONE};const c=cn(a[2],["access","trunk"]);return c.match?(i.mode=c.match,{output:"",ok:!0,action:ee.NONE}):{output:"% Invalid input detected at '^' marker.",ok:!1,action:ee.NONE}}if(l.match==="access"){if(a.length<4)return{output:"% Incomplete command.",ok:!1,action:ee.NONE};if(!cn(a[2],["vlan"]).match)return{output:"% Invalid input detected at '^' marker.",ok:!1,action:ee.NONE};const d=parseInt(a[3],10);return isNaN(d)||d<1||d>4094?{output:"% Invalid VLAN ID.",ok:!1,action:ee.NONE}:(i.accessVlan=d,{output:"",ok:!0,action:ee.NONE})}return{output:"% Invalid input detected at '^' marker.",ok:!1,action:ee.NONE}}return{output:"% Invalid input detected at '^' marker.",ok:!1,action:ee.NONE}}handleVlanConfig(e,n){return this.currentVlan===null?(this.mode=lt.GLOBAL_CONFIG,{output:"",ok:!0,action:ee.NONE}):cn(e[0],["name","exit","end"]).match==="name"?e.length<2?{output:"% Incomplete command.",ok:!1,action:ee.NONE}:(this.device.vlans.set(this.currentVlan,e[1].toUpperCase()),{output:"",ok:!0,action:ee.NONE}):{output:"% Invalid input detected at '^' marker.",ok:!1,action:ee.NONE}}handleShow(e){if(e.length===0)return{output:"% Incomplete command.",ok:!1,action:ee.NONE};const n=cn(e[0],["running-config","ip","vlan"]);return n.match==="running-config"?{output:RS(this.device),ok:!0,action:ee.NONE}:n.match==="ip"?e.length<2?{output:"% Incomplete command.",ok:!1,action:ee.NONE}:cn(e[1],["interface"]).match==="interface"&&e.length>=3&&cn(e[2],["brief"]).match==="brief"?{output:NS(this.device),ok:!0,action:ee.NONE}:{output:"% Invalid input detected at '^' marker.",ok:!1,action:ee.NONE}:n.match==="vlan"?e.length>=2&&cn(e[1],["brief"]).match==="brief"?{output:ym(this.device),ok:!0,action:ee.NONE}:{output:ym(this.device),ok:!0,action:ee.NONE}:{output:"% Invalid input detected at '^' marker.",ok:!1,action:ee.NONE}}handlePing(e){if(e.length===0)return{output:"% Incomplete command.",ok:!1,action:ee.NONE};const n=e[0];if(!al(n))return{output:"% Invalid IP address.",ok:!1,action:ee.NONE};const i=this.pingHandler(this.device.id,n);return{output:PS(n,i.success,i.hops.length),ok:i.success,action:ee.NONE}}}function IS(t){let e="",n=!1,i=!1,r=0;for(;r<t.length;){const s=t[r],a=t[r+1]||"";if(!n&&!i){if(s==="/"&&a==="/"){for(r+=2;r<t.length&&t[r]!==`
`;)r++;continue}if(s==="#"){for(r++;r<t.length&&t[r]!==`
`;)r++;continue}if(s==="/"&&a==="*"){for(r+=2;r<t.length&&!(t[r]==="*"&&t[r+1]==="/");)r++;r+=2;continue}if(s==="'"){n=!0,e+=s,r++;continue}if(s==='"'){i=!0,e+=s,r++;continue}if(/\s/.test(s)){r++;continue}e+=s,r++}else n?(e+=s,s==="\\"?(r++,r<t.length&&(e+=t[r])):s==="'"&&(n=!1),r++):i&&(e+=s,s==="\\"?(r++,r<t.length&&(e+=t[r])):s==='"'&&(i=!1),r++)}return e}function so(t,e){const n=IS(t);if(!n)return!1;for(const i of e)try{if(new RegExp(`^${i}$`).test(n))return!0}catch(r){console.warn("Invalid regex in accept pattern:",i,r)}return!1}const DS={cable_pc_b:{targetDevice:"PC-B",actionType:"cable",summary:"Cable PC-B on Desk 2 to switch S1 port FastEthernet0/2.",steps:['Look at Switch S1 in Rack A (slot 3) or click camera preset "Rack A (Gear)".',"Click on free port socket S1:Fa0/2 (the second FastEthernet port from the left).","You are now holding an Ethernet cable from S1:Fa0/2 (see status banner).","Turn towards Desk 2 and click PC-B:Eth0 (or click the PC-B tower).","The cable will connect and appear in 3D. The port LED will turn amber, awaiting VLAN configuration."],suggestedCommands:["Click S1:Fa0/2 ➜ Click PC-B:Eth0"],explanation:"PC-B was completely uncabled. Establishing physical Layer 1 connectivity to switch S1 is the first step before configuring Layer 2 VLANs."},vlan20_port:{targetDevice:"S1",actionType:"terminal",summary:"Create VLAN 20 (SALES) on S1 and assign Fa0/2 as an access port.",steps:['Open the console for Switch S1 (click S1 in Rack A, or click "CLI Terminal" and select S1).','Enter Privileged EXEC mode: type "enable".','Enter Global Configuration mode: type "configure terminal" (or "conf t").','Create and name the Sales VLAN: type "vlan 20", then "name SALES", then "exit".','Enter interface configuration for port Fa0/2: type "interface fa0/2".','Configure the port for access mode: type "switchport mode access".','Assign the port to VLAN 20: type "switchport access vlan 20", then "exit".','Verify with: "do show vlan brief".'],suggestedCommands:["enable","configure terminal","vlan 20","name SALES","exit","interface fa0/2","switchport mode access","switchport access vlan 20","end"],explanation:"All switch ports default to VLAN 1. Placing Fa0/2 into VLAN 20 isolates PC-B into its own broadcast domain separate from Accounting (VLAN 10)."},trunk:{targetDevice:"S1",actionType:"terminal",summary:"Configure uplink interface Gi0/1 on S1 as an 802.1Q trunk port.",steps:['In the Switch S1 terminal, enter configuration mode: "enable", then "configure terminal".','Select the Gigabit uplink interface connected to Router R1: "interface gi0/1".','Enable 802.1Q trunking: "switchport mode trunk".','Exit configuration: "end".','Verify your trunk interface with: "show running-config" or "show ip interface brief".'],suggestedCommands:["enable","conf t","interface gi0/1","switchport mode trunk","end"],explanation:"Standard access ports carry untagged traffic for only a single VLAN. A trunk port tags Ethernet frames with an 802.1Q header, allowing traffic from both VLAN 10 and VLAN 20 to share the single physical link to Router R1."},r1_no_shut:{targetDevice:"R1",actionType:"terminal",summary:"Administratively enable physical interface GigabitEthernet0/0 on Router R1.",steps:["Open the console for Router R1 (click R1 in Rack A or select R1 from the terminal device switcher).",'Enter Privileged EXEC: type "enable".','Enter Global Configuration: type "configure terminal" (or "conf t").','Select the physical interface: type "interface gi0/0".','Enable the interface: type "no shutdown".',"Notice the R1 Gi0/0 LED turns green on the router faceplate in the 3D room!"],suggestedCommands:["enable","conf t","interface gi0/0","no shutdown","exit"],explanation:'On Cisco IOS routers, physical interfaces are administratively shut down by default upon booting. They must be explicitly brought up with "no shutdown".'},sub10:{targetDevice:"R1",actionType:"terminal",summary:"Configure subinterface Gi0/0.10 as the default gateway for Accounting (VLAN 10).",steps:['In the Router R1 configuration terminal ("conf t"), create the logical subinterface: "interface gi0/0.10".','Set 802.1Q encapsulation for VLAN 10: "encapsulation dot1Q 10".','Assign the gateway IP address and subnet mask: "ip address 192.168.10.1 255.255.255.0".',"Subinterfaces on Cisco IOS are automatically admin-up once the parent interface is enabled."],suggestedCommands:["interface gi0/0.10","encapsulation dot1Q 10","ip address 192.168.10.1 255.255.255.0","exit"],explanation:"Router-on-a-Stick creates virtual subinterfaces on a single physical cable. Subinterface Gi0/0.10 acts as the default gateway for PC-A (192.168.10.10)."},sub20:{targetDevice:"R1",actionType:"terminal",summary:"Configure subinterface Gi0/0.20 as the default gateway for Sales (VLAN 20).",steps:['In Router R1 configuration mode ("conf t"), create the second subinterface: "interface gi0/0.20".','Set 802.1Q encapsulation for VLAN 20: "encapsulation dot1Q 20".','Assign the gateway IP address and subnet mask: "ip address 192.168.20.1 255.255.255.0".','Exit configuration with "end".'],suggestedCommands:["interface gi0/0.20","encapsulation dot1Q 20","ip address 192.168.20.1 255.255.255.0","end"],explanation:"Subinterface Gi0/0.20 acts as the default gateway (192.168.20.1) for PC-B (192.168.20.10), completing the routing bridge between the two subnets."},parent_noip:{targetDevice:"R1",actionType:"terminal",summary:"Ensure parent physical interface Gi0/0 has no IP address assigned.",steps:['If you accidentally assigned an IP address directly to the physical interface "gi0/0", remove it: "interface gi0/0" followed by "no ip address".','Verify with "show ip interface brief" that GigabitEthernet0/0 shows "unassigned".'],suggestedCommands:["interface gi0/0","no ip address","exit"],explanation:"In a Router-on-a-Stick setup, IP addresses belong on the dot1Q subinterfaces, while the parent physical interface acts strictly as the raw trunk transport."},ping_ab:{targetDevice:"PC-A",actionType:"terminal",summary:"Verify end-to-end connectivity by pinging PC-B from PC-A through R1.",steps:["Switch the terminal to PC-A (Desk 1).",'Verify PC-A network settings with: "ipconfig".','Ping PC-B: type "ping 192.168.20.10".','Verify 4 successful ICMP echo replies: "Reply from 192.168.20.10: bytes=32 time=2ms TTL=128".'],suggestedCommands:["ipconfig","ping 192.168.20.10"],explanation:"Packets leave PC-A (192.168.10.10), travel across S1, up the 802.1Q trunk to R1 Gi0/0.10, get routed to Gi0/0.20, and back down to PC-B (192.168.20.10)."},report_attacker_ip:{targetDevice:"SOC-PC",actionType:"report",summary:"Identify the external attacker IP address in the authentication logs.",steps:['Click "SOC Logs & Threat Map" in the top bar (or click the SOC monitor on the wall).','In the "Auth Logs" tab, look for repeated red lines: "sshd: Failed password for invalid user ...".',"Check the Threat Map tab to see the red animated attack arc originating from Netherlands (NL).","Note the source IP address: 203.0.113.45.",'Open the "Incident Report" tab, enter "203.0.113.45" in Field 1, and click Submit.'],suggestedCommands:['grep "Failed password" /var/log/auth.log'],explanation:"Dozens of failed login attempts in quick succession from an external address indicates an automated brute force scanner targeting SSH."},report_attack_type:{targetDevice:"SOC-PC",actionType:"report",summary:"Classify the attack vector observed in the authentication logs.",steps:["Inspect the usernames tested in the logs: root, admin, test, oracle, postgres, ubuntu, git, backup, deploy.","Notice the rapid cadence of common administrative dictionary words.",'In the Incident Report tab, select "Brute force" in the Attack Classification dropdown and submit.'],explanation:"Rapidly attempting passwords against known or common usernames is a classic Dictionary / Credential Stuffing Brute Force attack."},report_compromised_user:{targetDevice:"SOC-PC",actionType:"report",summary:"Identify which user account credentials were breached.",steps:['In the Log Viewer, search for "Accepted password" or filter by "deploy".','At 02:11:36Z, observe: "sshd[840]: Accepted password for deploy from 203.0.113.45 port 51142 ssh2".','Followed by: "systemd-logind: New session 42 of user deploy".','In the Incident Report tab, enter "deploy" in Field 3 and click Submit.'],suggestedCommands:['grep "Accepted password" /var/log/auth.log'],explanation:'The attacker successfully guessed the password for user "deploy", opening an interactive shell session on the production server.'},test_sqli_vuln:{targetDevice:"PC-1",actionType:"terminal",summary:"Prove the SQL injection vulnerability on WEB1 by executing curl on PC-1.",steps:["Open the console for PC-1 on Desk 1.",`Execute the test payload in curl: curl "http://10.0.10.5/login.php?user=' OR '1'='1"`,'Observe the response: "HTTP/1.1 200 OK - Welcome, admin! Authentication bypass successful."',"This proves that unescaped single quotes alter the query logic and bypass authentication."],suggestedCommands:[`curl "http://10.0.10.5/login.php?user=' OR '1'='1"`],explanation:`The payload "' OR '1'='1" closes the SQL string literal and injects an always-true condition, returning the first record (admin) without password validation.`},patch_sqli:{targetDevice:"WEB1",actionType:"editor",summary:"Patch login.php using PDO prepared statements with parameterized queries.",steps:['Click "Patch Editor" in the top bar, and ensure "login.php" is selected.',"Notice the vulnerable code in the editable region concatenates $user directly into SQL.","Replace the editable region with a secure prepared statement:",'  $res = $db->prepare("SELECT * FROM users WHERE name = ?");',"  $res->execute([$user]);",'Click "Save & Verify Patch" to apply and validate your fix.'],suggestedCommands:['$res = $db->prepare("SELECT * FROM users WHERE name = ?");',"$res->execute([$user]);"],explanation:"Prepared statements ensure user input is sent to the database engine separately as parameter data, making it impossible for input characters to alter SQL syntax."},test_sqli_patched:{targetDevice:"PC-1",actionType:"terminal",summary:"Re-run the SQL injection test on PC-1 to verify the vulnerability is mitigated.",steps:["Switch back to the PC-1 terminal on Desk 1.",`Re-run: curl "http://10.0.10.5/login.php?user=' OR '1'='1"`,'Verify the server now returns: "HTTP/1.1 401 Unauthorized - Login failed."'],suggestedCommands:[`curl "http://10.0.10.5/login.php?user=' OR '1'='1"`],explanation:`With prepared statements active, the input "' OR '1'='1" is searched literally as a username, which does not exist, correctly rejecting the login attempt.`},test_xss_vuln:{targetDevice:"PC-1",actionType:"terminal",summary:"Prove Reflected XSS vulnerability in search.php using curl on PC-1.",steps:["In the PC-1 terminal, send an XSS probe with a script tag:",'curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>"','Observe that the server echoes the raw "<script>alert(1)<\/script>" directly in HTML.'],suggestedCommands:['curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>"'],explanation:"Reflected XSS occurs when an application receives untrusted data in an HTTP request and echoes it back in an immediate response without escaping HTML entities."},patch_xss:{targetDevice:"WEB1",actionType:"editor",summary:"Patch search.php with htmlspecialchars() to escape user output.",steps:['Open the "Patch Editor" and select the "search.php (XSS)" tab.',"Notice line 4 directly concatenates $q into HTML output.","Replace the editable patch region with:",`  echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`,'Click "Save & Verify Patch".'],suggestedCommands:[`echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`],explanation:`htmlspecialchars() converts HTML special characters (&, <, >, ", ') into safe HTML entities (&amp;, &lt;, &gt;, etc.), preventing the browser from interpreting them as executable tags.`},test_xss_patched:{targetDevice:"PC-1",actionType:"terminal",summary:"Re-run the XSS test on PC-1 to confirm script tags are safely escaped.",steps:["In the PC-1 terminal, re-run:",'curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>"','Verify the response now contains escaped entities: "&lt;script&gt;alert(1)&lt;/script&gt;".'],suggestedCommands:['curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>"'],explanation:"The probe string is now neutralized into harmless text rather than an executable JavaScript payload."}};function US(t){return DS[t]||null}function Sm(t,e,n,i,r,s=[]){const a=[];for(const c of t){let d=!1,h=!1,p=ct.NONE,m="",v=!1;if(c.order&&c.order>1){for(const g of t)if(g.order&&g.order<c.order){const u=a.find(x=>x.id===g.id);if(!u||!u.passed){v=!0;break}}}if(c.type==="ping"&&c.from&&c.to_ip){const g=n(c.from,c.to_ip);if(p=g.failReason,g.success){let u=!0;if(c.to_device){const x=g.hops[g.hops.length-1];x!==c.to_device&&(u=!1,m=`Reached, but last hop was ${x} instead of ${c.to_device}`)}u&&c.via&&(g.hops.includes(c.via)||(u=!1,m=`Reached, but did not route through ${c.via}`)),d=u}else d=!1,m=g.failAt?`Failed at ${g.failAt}`:""}else if(c.type==="config"&&c.device&&c.path){const g=e.get(c.device);if(!g)d=!1;else{const u=Array.isArray(c.path)?c.path:[c.path],x=OS(g,u);typeof c.equals=="object"&&c.equals!==null?d=FS(x,c.equals):d=x===c.equals}}else if(c.type==="report"&&c.field){const g=i.get(c.field);g&&(g.solved?d=!0:g.attemptsLeft<=0?(h=!0,m="Out of attempts"):m=`${g.attemptsLeft} attempts remaining`)}else if(c.type==="vuln_patched"&&c.device&&c.vuln){const g=e.get(c.device),u=g==null?void 0:g.vulns.find(x=>x.id===c.vuln);if(g&&u){const x=g.files.get(u.region.file);if(x){const A=x.split(`
`).slice(u.region.firstLine-1,u.region.lastLine).join(`
`);d=so(A,u.accept)}}}else if(c.type==="exploit_test"&&c.from&&c.device&&c.vuln&&c.expect){const g=e.get(c.device),u=g==null?void 0:g.vulns.find(y=>y.id===c.vuln),x=(g==null?void 0:g.patchRevs.get(c.vuln))||0;if(c.expect==="vulnerable")d=!!r.find(_=>_.srcId===c.from&&_.dstDevice===c.device&&_.vulnId===c.vuln&&_.outcome===yi.VULNERABLE);else if(c.expect==="patched"){let y=!1;if(g&&u){const R=(g.files.get(u.region.file)||"").split(`
`).slice(u.region.firstLine-1,u.region.lastLine).join(`
`);y=so(R,u.accept)}const _=r.filter(C=>C.srcId===c.from&&C.dstDevice===c.device&&C.vulnId===c.vuln),A=_[_.length-1];d=y&&!!A&&A.outcome===yi.PATCHED&&A.patchRev===x}}let S="";if(p!==ct.NONE){const g=s.find(u=>u.reason===p);g&&(S=g.text)}a.push({id:c.id,type:c.type,description:c.description,order:c.order,locked:v,passed:!v&&d,failed:!v&&h,failReason:p,hint:S,detail:m,guidance:c.guidance||US(c.id)||void 0})}const o=a.length>0&&a.every(c=>c.passed),l=a.some(c=>c.failed);return{states:a,allCompleted:o,hasFailed:l}}function OS(t,e){if(e.length===0)return t;let n=t;for(let i=0;i<e.length;i++){const r=e[i];if(n==null)return;if(r==="interfaces"&&typeof n.getInterface=="function"){const s=n;if(i+1<e.length){const a=e[i+1];i++,n=s.getInterface(a);continue}}if(n instanceof Map){const s=n.get(r);n=s!==void 0?s:n.get(Number(r))}else if(typeof n.get=="function"){const s=n.get(r);n=s!==void 0?s:n.get(Number(r))}else n=n[r]}return n}function FS(t,e){if(typeof t!="object"||t===null)return!1;for(const[n,i]of Object.entries(e)){const r=n==="dot1q_vlan"?"dot1qVlan":n==="dot1qVlan"?"dot1q_vlan":n;if((t[n]!==void 0?t[n]:t[r])!==i)return!1}return!0}class BS{constructor(){Ve(this,"currentScenario",null);Ve(this,"devices",new Map);Ve(this,"links",[]);Ve(this,"spareCablesCount",0);Ve(this,"reservedPorts",new Set);Ve(this,"reportStates",new Map);Ve(this,"reportAnswers",new Map);Ve(this,"httpLogs",[]);Ve(this,"resolver");Ve(this,"sessions",new Map);Ve(this,"onLinkChanged");Ve(this,"onConfigChanged");Ve(this,"onObjectiveUpdated");Ve(this,"onMissionCompleted");Ve(this,"onMissionFailed");this.resolver=new AS(this.devices)}loadScenario(e){this.currentScenario=e,this.devices.clear(),this.links=[],this.sessions.clear(),this.reportStates.clear(),this.reportAnswers.clear(),this.httpLogs=[],this.spareCablesCount=e.spare_cables||0,this.reservedPorts=new Set(e.reserved_ports||[]);for(const n of e.devices){const i=new bS(n.id,n.type,n.model,n.hostname);i.rack=n.rack,i.slot=n.slot,i.desk=n.desk;const r=n.config||{};if(r.ip&&(i.ip=r.ip),r.mask&&(i.mask=r.mask),r.gateway&&(i.gateway=r.gateway),r.locked!==void 0&&(i.locked=r.locked),r.vlans)for(const[s,a]of Object.entries(r.vlans))i.vlans.set(Number(s),String(a));if(r.interfaces)for(const[s,a]of Object.entries(r.interfaces)){const o=i.getInterface(s)||i.ensureSubinterface(s);o&&(a.mode&&(o.mode=a.mode),a.accessVlan!==void 0&&(o.accessVlan=a.accessVlan),a.trunkAllowed&&(o.trunkAllowed=a.trunkAllowed),a.adminUp!==void 0&&(o.adminUp=a.adminUp),a.ip&&(o.ip=a.ip),a.mask&&(o.mask=a.mask),a.dot1qVlan!==void 0&&(o.dot1qVlan=a.dot1qVlan))}if(r.files)for(const[s,a]of Object.entries(r.files))i.files.set(s,a);r.services&&(i.services=[...r.services]),r.vulns&&(i.vulns=[...r.vulns]),this.devices.set(i.id,i)}for(const n of e.links)this.applyLink(n.a,n.b,n.locked??!1);if(e.report&&e.report.fields){const n=e.report.max_attempts||3;for(const i of e.report.fields)this.reportStates.set(i.id,{id:i.id,label:i.label,kind:i.kind,options:i.options,attemptsLeft:n,lastValue:null,solved:!1,maxAttempts:n});if(e.solution)for(const i of e.solution)i.field&&i.value&&this.reportAnswers.set(i.field,i.value)}return this.resolver.refreshAllOperStatuses(),this.notifyObjectives(),{ok:!0,errors:[]}}applyLink(e,n,i=!1){const[r,s]=e.split(":"),[a,o]=n.split(":"),l=this.devices.get(r),c=this.devices.get(a);if(!l||!c)return!1;const d=l.getInterface(s),h=c.getInterface(o);return!d||!h?!1:(d.peer=n,h.peer=e,this.links.push({a:e,b:n,locked:i}),this.resolver.refreshAllOperStatuses(),!0)}connectLink(e,n){if(this.spareCablesCount<=0)return{ok:!1,reason:"No spare cables remaining in inventory."};if(this.reservedPorts.has(e))return{ok:!1,reason:`Port ${e} is reserved (dust cap attached).`};if(this.reservedPorts.has(n))return{ok:!1,reason:`Port ${n} is reserved (dust cap attached).`};const[i,r]=e.split(":"),[s,a]=n.split(":");if(i===s)return{ok:!1,reason:"Cannot connect a cable to the same device."};const o=this.devices.get(i),l=this.devices.get(s);if(!o||!l)return{ok:!1,reason:"Target device not found."};const c=o.getInterface(r),d=l.getInterface(a);return!c||!d?{ok:!1,reason:"Interface not found."}:c.peer?{ok:!1,reason:`Port ${e} is already in use.`}:d.peer?{ok:!1,reason:`Port ${n} is already in use.`}:(this.applyLink(e,n,!1),this.spareCablesCount--,this.onLinkChanged&&this.onLinkChanged(e,n,!0),this.notifyObjectives(),{ok:!0})}disconnectLink(e){const n=this.links.findIndex(d=>d.a===e||d.b===e);if(n===-1)return{ok:!1,reason:"No link connected to this port."};const i=this.links[n];if(i.locked)return{ok:!1,reason:"This cable is locked by facility security."};const[r,s]=i.a.split(":"),[a,o]=i.b.split(":"),l=this.devices.get(r),c=this.devices.get(a);if(l){const d=l.getInterface(s);d&&(d.peer=null)}if(c){const d=c.getInterface(o);d&&(d.peer=null)}return this.links.splice(n,1),this.spareCablesCount++,this.resolver.refreshAllOperStatuses(),this.onLinkChanged&&this.onLinkChanged(i.a,i.b,!1),this.notifyObjectives(),{ok:!0}}ping(e,n){return this.resolver.resolvePing(e,n)}httpRequest(e,n){const i=n.match(/^http:\/\/([^/:]+)(?::(\d+))?(\/[^?]*)(?:\?(.*))?$/);if(!i)return{ok:!1,status:400,body:`curl: (3) URL malformed: ${n}`,outcome:yi.ERROR};const r=i[1],s=i[2]?parseInt(i[2],10):80,a=i[3]||"/",o=i[4]||"";if(!this.ping(e,r).success)return{ok:!1,status:0,body:`curl: (7) Failed to connect to ${r} port ${s}: Connection refused`,outcome:yi.ERROR};let c=null;for(const p of this.devices.values())if(p.ip===r){c=p;break}if(!c)return{ok:!1,status:0,body:`curl: (7) Failed to connect to ${r} port ${s}: No response`,outcome:yi.ERROR};if(!c.services.find(p=>p.port===s))return{ok:!1,status:0,body:`curl: (7) Failed to connect to ${r} port ${s}: Port closed`,outcome:yi.ERROR};const h=c.vulns.find(p=>p.route===a);if(h){const m=new URLSearchParams(o).get(h.exploit.param)||"",v=decodeURIComponent(m.trim()),u=(c.files.get(h.region.file)||"").split(`
`).slice(h.region.firstLine-1,h.region.lastLine).join(`
`),x=so(u,h.accept),y=c.patchRevs.get(h.id)||0;if(v===h.exploit.payload){const _=x?yi.PATCHED:yi.VULNERABLE,A=x?h.exploit.patchedBody:h.exploit.vulnerableBody,C=x?401:200;return this.httpLogs.push({srcId:e,dstDevice:c.id,vulnId:h.id,patchRev:y,outcome:_}),this.notifyObjectives(),{ok:x,status:C,body:A,outcome:_}}}return{ok:!0,status:200,body:`HTTP/1.1 200 OK

<html><body><h1>It Works!</h1></body></html>`,outcome:yi.NORMAL}}submitReport(e,n){var c;const i=this.reportStates.get(e);if(!i||i.attemptsLeft<=0)return{ok:!1,correct:!1,attemptsLeft:0};let r="";const s=(c=this.currentScenario)==null?void 0:c.objectives.find(d=>d.type==="report"&&d.field===e);s?r=String(s.equals||""):this.reportAnswers.has(e)&&(r=this.reportAnswers.get(e));const a=n.trim().toLowerCase(),o=r.trim().toLowerCase(),l=a===o;return i.lastValue=n.trim(),l?i.solved=!0:i.attemptsLeft--,this.notifyObjectives(),{ok:!0,correct:l,attemptsLeft:i.attemptsLeft}}readFile(e,n){const i=this.devices.get(e);return i?i.files.get(n)??null:null}patchViews(e,n){const i=this.devices.get(e);if(!i)return[];const r=[];for(const s of i.vulns)if(s.region.file===n){const l=(i.files.get(n)||"").split(`
`).slice(s.region.firstLine-1,s.region.lastLine).join(`
`),c=so(l,s.accept);r.push({vulnId:s.id,file:n,firstLine:s.region.firstLine,lastLine:s.region.lastLine,hint:s.hint,isPatched:c})}return r}writePatch(e,n,i){const r=this.devices.get(e);if(!r)return{ok:!1,accepted:!1};const s=r.vulns.find(v=>v.id===n);if(!s)return{ok:!1,accepted:!1};const a=r.files.get(s.region.file);if(!a)return{ok:!1,accepted:!1};const o=a.split(`
`),l=o.slice(0,s.region.firstLine-1),c=o.slice(s.region.lastLine),d=i.split(`
`),h=[...l,...d,...c];r.files.set(s.region.file,h.join(`
`)),s.region.lastLine=s.region.firstLine+d.length-1;const p=(r.patchRevs.get(n)||0)+1;r.patchRevs.set(n,p);const m=so(i,s.accept);return this.notifyObjectives(),{ok:!0,accepted:m,hint:m?void 0:s.hint}}openSession(e){if(this.sessions.has(e))return this.sessions.get(e);const n=this.devices.get(e);if(!n)throw new Error(`Device ${e} not found`);const i=new kS(n,(r,s)=>this.ping(r,s),(r,s)=>this.httpRequest(r,s));return this.sessions.set(e,i),i}notifyObjectives(){if(!this.currentScenario)return;const e=Sm(this.currentScenario.objectives,this.devices,(n,i)=>this.ping(n,i),this.reportStates,this.httpLogs,this.currentScenario.hints);this.onObjectiveUpdated&&this.onObjectiveUpdated(e.states),e.allCompleted&&this.onMissionCompleted?this.onMissionCompleted(this.currentScenario.id):e.hasFailed&&this.onMissionFailed&&this.onMissionFailed(this.currentScenario.id)}objectiveStates(){return this.currentScenario?Sm(this.currentScenario.objectives,this.devices,(e,n)=>this.ping(e,n),this.reportStates,this.httpLogs,this.currentScenario.hints).states:[]}debriefView(){var i;if(!this.currentScenario)return null;const e=this.objectiveStates(),n={};if(this.currentScenario.report&&this.currentScenario.report.fields)for(const r of this.currentScenario.report.fields){const s=this.currentScenario.objectives.find(l=>l.type==="report"&&l.field===r.id),a=String((s==null?void 0:s.equals)||""),o=[];if(r.evidence)for(const l of r.evidence){const c=(i=this.currentScenario.logs)==null?void 0:i.find(h=>h.source===l.source&&h.file===l.file),d=c==null?void 0:c.lines[l.line-1];d&&o.push({source:l.source,file:l.file,line:l.line,text:d.text})}n[r.id]={answer:a,evidence:o}}return{debrief:this.currentScenario.debrief||"Mission completed successfully!",objectives:e,reportAnswers:n}}}const zS={schema_version:1,id:"m0_orientation",sequence:0,title:"Orientation: First Connection",briefing:"Welcome to the server room. This short tutorial teaches the core loop: use camera presets to find equipment, click a device to open its console, run a command, and read the objective panel for your next step. Start in the PC-A console, then ping PC-B.",devices:[{id:"PC-A",type:"host",model:"pc",hostname:"PC-A",desk:"desk_1",config:{ip:"192.168.1.10",mask:"255.255.255.0",gateway:"192.168.1.1"}},{id:"PC-B",type:"host",model:"pc",hostname:"PC-B",desk:"desk_2",config:{ip:"192.168.1.20",mask:"255.255.255.0",gateway:"192.168.1.1"}}],links:[{a:"PC-A:Eth0",b:"PC-B:Eth0",locked:!0}],spare_cables:0,objectives:[{id:"tutorial_ping",type:"ping",from:"PC-A",to_ip:"192.168.1.20",to_device:"PC-B",description:"From PC-A, ping PC-B at 192.168.1.20",guidance:{targetDevice:"PC-A",actionType:"terminal",summary:"Open the PC-A terminal and run one ping.",steps:["Use the Desk 1 camera angle to locate PC-A, or use the already-open PC-A console.","Click inside the terminal input at the bottom of the console.","Type ping 192.168.1.20 and press Enter.","A successful reply marks the tutorial complete. The objective panel on the left tracks your progress."],suggestedCommands:["ping 192.168.1.20"],explanation:"The 3D room is the workspace, while the terminal and objective panel are your primary tools. You do not need to interact with every rack object—only the highlighted device or port required by the active objective."}}],hints:[{reason:ct.HOST_UNREACHABLE,text:"This tutorial is already wired. Open the PC-A console and run ping 192.168.1.20."}],debrief:"You have learned the core interaction loop: choose a camera angle, identify the named device, open its console, perform the requested action, and use the objective panel to confirm progress. Mission 1 adds cabling and switch/router configuration."},rf={schema_version:1,id:"m1_vlan_ping",sequence:1,title:"Day One: Get Them Talking",briefing:"Accounting (PC-A) and Sales (PC-B) can't reach each other. The router is racked and cabled to the switch. Cable up PC-B, configure VLANs and a Router-on-a-Stick trunk, and make PC-A ping PC-B.",devices:[{id:"R1",type:"router",model:"router_2port",hostname:"Router",rack:"rack_a",slot:1,config:{}},{id:"S1",type:"switch",model:"switch_24",hostname:"Switch",rack:"rack_a",slot:3,config:{vlans:{10:"ACCOUNTING"},interfaces:{"Fa0/1":{mode:"access",accessVlan:10}}}},{id:"PC-A",type:"host",model:"pc",hostname:"PC-A",desk:"desk_1",config:{ip:"192.168.10.10",mask:"255.255.255.0",gateway:"192.168.10.1",locked:!0}},{id:"PC-B",type:"host",model:"pc",hostname:"PC-B",desk:"desk_2",config:{ip:"192.168.20.10",mask:"255.255.255.0",gateway:"192.168.20.1",locked:!0}}],links:[{a:"R1:Gi0/0",b:"S1:Gi0/1",locked:!0},{a:"S1:Fa0/1",b:"PC-A:Eth0",locked:!0}],spare_cables:1,reserved_ports:["R1:Gi0/1"],objectives:[{id:"cable_pc_b",type:"config",device:"S1",path:["interfaces","Fa0/2","peer"],equals:"PC-B:Eth0",description:"Connect spare cable from S1 Fa0/2 to PC-B Eth0"},{id:"vlan20_port",type:"config",device:"S1",path:["interfaces","Fa0/2","accessVlan"],equals:20,description:"Configure S1 Fa0/2 in VLAN 20 (Sales)"},{id:"trunk",type:"config",device:"S1",path:["interfaces","Gi0/1","mode"],equals:"trunk",description:"Configure S1 Gi0/1 as an 802.1Q trunk port"},{id:"r1_no_shut",type:"config",device:"R1",path:["interfaces","Gi0/0","adminUp"],equals:!0,description:"Enable R1 physical interface (no shutdown on Gi0/0)"},{id:"sub10",type:"config",device:"R1",path:["interfaces","Gi0/0.10"],equals:{dot1qVlan:10,ip:"192.168.10.1",mask:"255.255.255.0"},description:"Configure R1 Gi0/0.10: encapsulation dot1Q 10, IP 192.168.10.1/24"},{id:"sub20",type:"config",device:"R1",path:["interfaces","Gi0/0.20"],equals:{dot1qVlan:20,ip:"192.168.20.1",mask:"255.255.255.0"},description:"Configure R1 Gi0/0.20: encapsulation dot1Q 20, IP 192.168.20.1/24"},{id:"parent_noip",type:"config",device:"R1",path:["interfaces","Gi0/0","ip"],equals:null,description:"Ensure Gi0/0 parent interface has no IP address assigned"},{id:"ping_ab",type:"ping",from:"PC-A",to_ip:"192.168.20.10",to_device:"PC-B",via:"R1",description:"Verify PC-A can ping PC-B (192.168.20.10) through router R1"}],hints:[{reason:ct.NO_LINK,text:"PC-B isn't cabled to anything yet. Grab a cable from your inventory and plug it into S1 Fa0/2."},{reason:ct.ADMIN_DOWN,text:"The physical interface Gi0/0 on R1 is shut down. Enter config-if on R1 and execute 'no shutdown'."},{reason:ct.NO_GATEWAY,text:"Hosts in different subnets require a default gateway to communicate."},{reason:ct.VLAN_MISMATCH,text:"Check which VLAN each switch port is in, and verify that S1 Gi0/1 is set to 'switchport mode trunk'."},{reason:ct.NO_ROUTE,text:"R1 cannot find a route for the subnet. Make sure subinterfaces Gi0/0.10 and Gi0/0.20 are configured."}],debrief:"Outstanding work! You set up a classic Router-on-a-Stick (ROAS) architecture. Subinterfaces Gi0/0.10 and Gi0/0.20 act as default gateways for VLANs 10 and 20, routing frames tagged with 802.1Q across the Gi0/1 trunk link.",solution:[{link:{a:"S1:Fa0/2",b:"PC-B:Eth0"}},{device:"S1",commands:["enable","conf t","vlan 20","name SALES","exit","interface fa0/2","switchport mode access","switchport access vlan 20","exit","interface gi0/1","switchport mode trunk","end"]},{device:"R1",commands:["enable","conf t","interface gi0/0","no shutdown","exit","interface gi0/0.10","encapsulation dot1Q 10","ip address 192.168.10.1 255.255.255.0","exit","interface gi0/0.20","encapsulation dot1Q 20","ip address 192.168.20.1 255.255.255.0","end"]}]},HS={schema_version:1,id:"m2_log_triage",sequence:2,title:"Who Knocked?",briefing:"Security Operations alert: Suspicious unauthorized login activity detected on production server WEB1. Investigate the system authentication logs, correlate threat intel on the SOC monitor, and file an incident triage report.",devices:[{id:"WEB1",type:"server",model:"server",hostname:"web1",rack:"rack_a",slot:5,config:{ip:"10.0.10.5",mask:"255.255.255.0",gateway:"10.0.10.1"}},{id:"S1",type:"switch",model:"switch_24",hostname:"Switch",rack:"rack_a",slot:3,config:{vlans:{10:"DMZ"},interfaces:{"Fa0/1":{mode:"access",accessVlan:10},"Fa0/5":{mode:"access",accessVlan:10}}}},{id:"SOC-PC",type:"host",model:"pc",hostname:"SOC-PC",desk:"desk_1",config:{ip:"10.0.10.50",mask:"255.255.255.0",gateway:"10.0.10.1"}}],links:[{a:"S1:Fa0/1",b:"SOC-PC:Eth0",locked:!0},{a:"S1:Fa0/5",b:"WEB1:Eth0",locked:!0}],spare_cables:0,logs:[{source:"WEB1",file:"/var/log/auth.log",lines:[{t:"2026-03-14T01:45:10Z",text:"systemd[1]: Started OpenSSH server daemon."},{t:"2026-03-14T01:52:03Z",text:"sshd[702]: Accepted publickey for admin from 10.0.10.50 port 54102 ssh2"},{t:"2026-03-14T01:52:15Z",text:"sudo[708]: admin : TTY=pts/0 ; PWD=/home/admin ; USER=root ; COMMAND=/usr/bin/apt update"},{t:"2026-03-14T02:05:12Z",text:"sshd[750]: Received disconnect from 198.51.100.12 port 41100: 11: Normal Shutdown",src_ip:"198.51.100.12",geo:"CN"},{t:"2026-03-14T02:11:05Z",text:"sshd[811]: Failed password for invalid user root from 203.0.113.45 port 51122 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:07Z",text:"sshd[813]: Failed password for invalid user admin from 203.0.113.45 port 51124 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:10Z",text:"sshd[815]: Failed password for invalid user test from 203.0.113.45 port 51126 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:12Z",text:"sshd[817]: Failed password for invalid user oracle from 203.0.113.45 port 51128 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:15Z",text:"sshd[820]: Failed password for invalid user postgres from 203.0.113.45 port 51130 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:18Z",text:"sshd[823]: Failed password for invalid user ubuntu from 203.0.113.45 port 51132 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:21Z",text:"sshd[826]: Failed password for invalid user git from 203.0.113.45 port 51134 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:25Z",text:"sshd[829]: Failed password for invalid user backup from 203.0.113.45 port 51136 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:29Z",text:"sshd[832]: Failed password for deploy from 203.0.113.45 port 51138 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:32Z",text:"sshd[835]: Failed password for deploy from 203.0.113.45 port 51140 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:36Z",text:"sshd[840]: Accepted password for deploy from 203.0.113.45 port 51142 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:37Z",text:"systemd-logind[412]: New session 42 of user deploy.",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:15:01Z",text:"CRON[901]: (root) CMD (/usr/local/bin/backup-sync.sh >/dev/null 2>&1)"},{t:"2026-03-14T02:22:40Z",text:"sshd[950]: Connection closed by authenticating user root 185.220.101.5 port 49201 [preauth]",src_ip:"185.220.101.5",geo:"RU"}]}],report:{max_attempts:3,fields:[{id:"attacker_ip",label:"Attacker IP Address",kind:"ipv4",evidence:[{source:"WEB1",file:"/var/log/auth.log",line:15}]},{id:"attack_type",label:"Attack Vector",kind:"choice",options:["Brute force","SQL injection","Port scan","Phishing"],evidence:[{source:"WEB1",file:"/var/log/auth.log",line:5}]},{id:"compromised_user",label:"Compromised User Account",kind:"text",evidence:[{source:"WEB1",file:"/var/log/auth.log",line:15}]}]},objectives:[{id:"report_attacker_ip",type:"report",field:"attacker_ip",equals:"203.0.113.45",description:"Identify and submit the external Attacker IP address"},{id:"report_attack_type",type:"report",field:"attack_type",equals:"Brute force",description:"Classify the attack vector (Brute force dictionary attack)"},{id:"report_compromised_user",type:"report",field:"compromised_user",equals:"deploy",description:"Determine which user account credentials were breached"}],debrief:"Incident Report accepted! You spotted the sustained SSH dictionary attack from 203.0.113.45 (Netherlands) testing common service usernames before successfully compromising 'deploy' via password authentication. Recommended hardening: disable password auth in /etc/ssh/sshd_config (PasswordAuthentication no), enforce public key auth, and install Fail2ban.",solution:[{field:"attacker_ip",value:"203.0.113.45"},{field:"attack_type",value:"Brute force"},{field:"compromised_user",value:"deploy"}]},VS={schema_version:1,id:"m3_web_patch",sequence:3,title:"Patch Tuesday",briefing:"Security auditing discovered two critical flaws on WEB1: an unauthenticated SQL Injection in login.php and Reflected XSS in search.php. Prove each exploit with curl from your PC, patch the code in the editor, and verify the attack is neutralized.",devices:[{id:"WEB1",type:"server",model:"server",hostname:"web1",rack:"rack_a",slot:5,config:{ip:"10.0.10.5",mask:"255.255.255.0",gateway:"10.0.10.1",files:{"/var/www/login.php":`<?php
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

<div class='results'>Results for: &lt;script&gt;alert(1)&lt;/script&gt;</div>`}}]}},{id:"S1",type:"switch",model:"switch_24",hostname:"Switch",rack:"rack_a",slot:3,config:{vlans:{10:"DMZ"},interfaces:{"Fa0/1":{mode:"access",accessVlan:10},"Fa0/5":{mode:"access",accessVlan:10}}}},{id:"PC-1",type:"host",model:"pc",hostname:"PC-1",desk:"desk_1",config:{ip:"10.0.10.50",mask:"255.255.255.0",gateway:"10.0.10.1"}}],links:[{a:"S1:Fa0/1",b:"PC-1:Eth0",locked:!0},{a:"S1:Fa0/5",b:"WEB1:Eth0",locked:!0}],spare_cables:0,objectives:[{id:"test_sqli_vuln",type:"exploit_test",from:"PC-1",device:"WEB1",vuln:"sqli_login",expect:"vulnerable",order:1,description:`Execute SQLi test curl "http://10.0.10.5/login.php?user=' OR '1'='1" on PC-1 to confirm vulnerability`},{id:"patch_sqli",type:"vuln_patched",device:"WEB1",vuln:"sqli_login",order:2,description:"Patch login.php using PDO prepared statements in the code editor"},{id:"test_sqli_patched",type:"exploit_test",from:"PC-1",device:"WEB1",vuln:"sqli_login",expect:"patched",order:3,description:"Re-run SQLi test curl on PC-1 to verify attack fails (401 Unauthorized)"},{id:"test_xss_vuln",type:"exploit_test",from:"PC-1",device:"WEB1",vuln:"xss_search",expect:"vulnerable",order:1,description:'Execute XSS test curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>" on PC-1'},{id:"patch_xss",type:"vuln_patched",device:"WEB1",vuln:"xss_search",order:2,description:"Patch search.php with htmlspecialchars() to escape user output"},{id:"test_xss_patched",type:"exploit_test",from:"PC-1",device:"WEB1",vuln:"xss_search",expect:"patched",order:3,description:"Re-run XSS test curl on PC-1 to verify HTML special characters are escaped"}],debrief:`Security patches deployed successfully! Parameterized queries (prepared statements) neutralize SQL injection by separating code from data, completely neutralizing quotes and SQL syntax hijacking. htmlspecialchars() neutralizes Reflected XSS by converting sensitive characters (<, >, &, ', ") to HTML entities before output.`},ol=[zS,rf,HS,VS];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="170",GS=0,Mm=1,jS=2,Zv=1,Qv=2,Ii=3,br=0,Cn=1,Oi=2,Sr=0,Qs=1,Em=2,wm=3,bm=4,WS=5,jr=100,$S=101,XS=102,qS=103,YS=104,KS=200,ZS=201,QS=202,JS=203,sf=204,af=205,eM=206,tM=207,nM=208,iM=209,rM=210,sM=211,aM=212,oM=213,lM=214,of=0,lf=1,cf=2,la=3,uf=4,df=5,ff=6,hf=7,Jv=0,cM=1,uM=2,Mr=0,dM=1,fM=2,hM=3,ex=4,pM=5,mM=6,gM=7,tx=300,ca=301,ua=302,pf=303,mf=304,$c=306,gf=1e3,Yr=1001,vf=1002,hi=1003,vM=1004,ll=1005,Ei=1006,Au=1007,Kr=1008,qi=1009,nx=1010,ix=1011,Ao=1012,jh=1013,as=1014,zi=1015,Uo=1016,Wh=1017,$h=1018,da=1020,rx=35902,sx=1021,ax=1022,ui=1023,ox=1024,lx=1025,Js=1026,fa=1027,cx=1028,Xh=1029,ux=1030,qh=1031,Yh=1033,Xl=33776,ql=33777,Yl=33778,Kl=33779,xf=35840,_f=35841,yf=35842,Sf=35843,Mf=36196,Ef=37492,wf=37496,bf=37808,Tf=37809,Cf=37810,Af=37811,Rf=37812,Nf=37813,Pf=37814,Lf=37815,kf=37816,If=37817,Df=37818,Uf=37819,Of=37820,Ff=37821,Zl=36492,Bf=36494,zf=36495,dx=36283,Hf=36284,Vf=36285,Gf=36286,xM=3200,_M=3201,fx=0,yM=1,cr="",In="srgb",xa="srgb-linear",Xc="linear",Et="srgb",vs=7680,Tm=519,SM=512,MM=513,EM=514,hx=515,wM=516,bM=517,TM=518,CM=519,Cm=35044,Am="300 es",Hi=2e3,wc=2001;class _a{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rm=1234567;const ao=Math.PI/180,Ro=180/Math.PI;function ya(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[t&255]+un[t>>8&255]+un[t>>16&255]+un[t>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function Kh(t,e){return(t%e+e)%e}function AM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function RM(t,e,n){return t!==e?(n-t)/(e-t):0}function oo(t,e,n){return(1-n)*t+n*e}function NM(t,e,n,i){return oo(t,e,1-Math.exp(-n*i))}function PM(t,e=1){return e-Math.abs(Kh(t,e*2)-e)}function LM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function kM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function IM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function DM(t,e){return t+Math.random()*(e-t)}function UM(t){return t*(.5-Math.random())}function OM(t){t!==void 0&&(Rm=t);let e=Rm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function FM(t){return t*ao}function BM(t){return t*Ro}function zM(t){return(t&t-1)===0&&t!==0}function HM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function VM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function GM(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),h=s((e-i)/2),p=a((e-i)/2),m=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*h,l*p,o*c);break;case"YZY":t.set(l*p,o*d,l*h,o*c);break;case"ZXZ":t.set(l*h,l*p,o*d,o*c);break;case"XZX":t.set(o*d,l*v,l*m,o*c);break;case"YXY":t.set(l*m,o*d,l*v,o*c);break;case"ZYZ":t.set(l*v,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ls(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const cl={DEG2RAD:ao,RAD2DEG:Ro,generateUUID:ya,clamp:Jt,euclideanModulo:Kh,mapLinear:AM,inverseLerp:RM,lerp:oo,damp:NM,pingpong:PM,smoothstep:LM,smootherstep:kM,randInt:IM,randFloat:DM,randFloatSpread:UM,seededRandom:OM,degToRad:FM,radToDeg:BM,isPowerOfTwo:zM,ceilPowerOfTwo:HM,floorPowerOfTwo:VM,setQuaternionFromProperEuler:GM,normalize:gn,denormalize:Ls};class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,n,i,r,s,a,o,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],p=i[2],m=i[5],v=i[8],S=r[0],g=r[3],u=r[6],x=r[1],y=r[4],_=r[7],A=r[2],C=r[5],T=r[8];return s[0]=a*S+o*x+l*A,s[3]=a*g+o*y+l*C,s[6]=a*u+o*_+l*T,s[1]=c*S+d*x+h*A,s[4]=c*g+d*y+h*C,s[7]=c*u+d*_+h*T,s[2]=p*S+m*x+v*A,s[5]=p*g+m*y+v*C,s[8]=p*u+m*_+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,p=o*l-d*s,m=c*s-a*l,v=n*h+i*p+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=h*S,e[1]=(r*c-d*i)*S,e[2]=(o*i-r*a)*S,e[3]=p*S,e[4]=(d*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ru.makeScale(e,n)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new it;function px(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function bc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jM(){const t=bc("canvas");return t.style.display="block",t}const Nm={};function Xa(t){t in Nm||(Nm[t]=!0,console.warn(t))}function WM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function $M(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function XM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gt={enabled:!0,workingColorSpace:xa,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Et&&(t.r=Gi(t.r),t.g=Gi(t.g),t.b=Gi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Et&&(t.r=ea(t.r),t.g=ea(t.g),t.b=ea(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===cr?Xc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Gi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ea(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Pm=[.64,.33,.3,.6,.15,.06],Lm=[.2126,.7152,.0722],km=[.3127,.329],Im=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dm=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);gt.define({[xa]:{primaries:Pm,whitePoint:km,transfer:Xc,toXYZ:Im,fromXYZ:Dm,luminanceCoefficients:Lm,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:Pm,whitePoint:km,transfer:Et,toXYZ:Im,fromXYZ:Dm,luminanceCoefficients:Lm,outputColorSpaceConfig:{drawingBufferColorSpace:In}}});let xs;class qM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=bc("canvas")),xs.width=e.width,xs.height=e.height;const i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Gi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gi(n[i]/255)*255):n[i]=Gi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YM=0;class mx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=ya(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Nu(r[a].image)):s.push(Nu(r[a]))}else s=Nu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Nu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?qM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KM=0;class An extends _a{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,i=Yr,r=Yr,s=Ei,a=Kr,o=ui,l=qi,c=An.DEFAULT_ANISOTROPY,d=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=ya(),this.name="",this.source=new mx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gf:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gf:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=tx;An.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],v=l[9],S=l[2],g=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-S)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+S)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,_=(m+1)/2,A=(u+1)/2,C=(d+p)/4,T=(h+S)/4,R=(v+g)/4;return y>_&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=T/i):_>A?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=C/r,s=R/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=T/s,r=R/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-v)*(g-v)+(h-S)*(h-S)+(p-d)*(p-d));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(h-S)/x,this.z=(p-d)/x,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZM extends _a{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new An(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new mx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends ZM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class gx extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=hi,this.minFilter=hi,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QM extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=hi,this.minFilter=hi,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const p=s[a+0],m=s[a+1],v=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(o===1){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=S;return}if(h!==S||l!==p||c!==m||d!==v){let g=1-o;const u=l*p+c*m+d*v+h*S,x=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const A=Math.sqrt(y),C=Math.atan2(A,u*x);g=Math.sin(g*C)/A,o=Math.sin(o*C)/A}const _=o*x;if(l=l*g+p*_,c=c*g+m*_,d=d*g+v*_,h=h*g+S*_,g===1-o){const A=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=A,c*=A,d*=A,h*=A}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],p=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+d*h+l*m-c*p,e[n+1]=l*v+d*p+c*h-o*m,e[n+2]=c*v+d*m+o*p-l*h,e[n+3]=d*v-o*h-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),p=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=p*d*h+c*m*v,this._y=c*m*h-p*d*v,this._z=c*d*v+p*m*h,this._w=c*d*h-p*m*v;break;case"YXZ":this._x=p*d*h+c*m*v,this._y=c*m*h-p*d*v,this._z=c*d*v-p*m*h,this._w=c*d*h+p*m*v;break;case"ZXY":this._x=p*d*h-c*m*v,this._y=c*m*h+p*d*v,this._z=c*d*v+p*m*h,this._w=c*d*h-p*m*v;break;case"ZYX":this._x=p*d*h-c*m*v,this._y=c*m*h+p*d*v,this._z=c*d*v-p*m*h,this._w=c*d*h+p*m*v;break;case"YZX":this._x=p*d*h+c*m*v,this._y=c*m*h+p*d*v,this._z=c*d*v-p*m*h,this._w=c*d*h-p*m*v;break;case"XZY":this._x=p*d*h-c*m*v,this._y=c*m*h-p*d*v,this._z=c*d*v+p*m*h,this._w=c*d*h+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],p=i+o+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=a*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new k,Um=new Oo;class Fo{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ul.copy(i.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),dl.subVectors(this.max,Oa),_s.subVectors(e.a,Oa),ys.subVectors(e.b,Oa),Ss.subVectors(e.c,Oa),Ji.subVectors(ys,_s),er.subVectors(Ss,ys),kr.subVectors(_s,Ss);let n=[0,-Ji.z,Ji.y,0,-er.z,er.y,0,-kr.z,kr.y,Ji.z,0,-Ji.x,er.z,0,-er.x,kr.z,0,-kr.x,-Ji.y,Ji.x,0,-er.y,er.x,0,-kr.y,kr.x,0];return!Lu(n,_s,ys,Ss,dl)||(n=[1,0,0,0,1,0,0,0,1],!Lu(n,_s,ys,Ss,dl))?!1:(fl.crossVectors(Ji,er),n=[fl.x,fl.y,fl.z],Lu(n,_s,ys,Ss,dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new k,new k,new k,new k,new k,new k,new k,new k],ei=new k,ul=new Fo,_s=new k,ys=new k,Ss=new k,Ji=new k,er=new k,kr=new k,Oa=new k,dl=new k,fl=new k,Ir=new k;function Lu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ir.fromArray(t,s);const o=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=e.dot(Ir),c=n.dot(Ir),d=i.dot(Ir);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const JM=new Fo,Fa=new k,ku=new k;class qc{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):JM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const n=Fa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(ku)),this.expandByPoint(Fa.copy(e.center).sub(ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new k,Iu=new k,hl=new k,tr=new k,Du=new k,pl=new k,Uu=new k;class Zh{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Iu.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),tr.copy(this.origin).sub(Iu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(hl),o=tr.dot(this.direction),l=-tr.dot(hl),c=tr.lengthSq(),d=Math.abs(1-a*a);let h,p,m,v;if(d>0)if(h=a*l-o,p=a*o-l,v=s*d,h>=0)if(p>=-v)if(p<=v){const S=1/d;h*=S,p*=S,m=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=s,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;else p<=-v?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c):p<=v?(h=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Iu).addScaledVector(hl,p),m}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,i,r,s){Du.subVectors(n,e),pl.subVectors(i,e),Uu.crossVectors(Du,pl);let a=this.direction.dot(Uu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;tr.subVectors(this.origin,e);const l=o*this.direction.dot(pl.crossVectors(tr,pl));if(l<0)return null;const c=o*this.direction.dot(Du.cross(tr));if(c<0||l+c>a)return null;const d=-o*tr.dot(Uu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,n,i,r,s,a,o,l,c,d,h,p,m,v,S,g){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,p,m,v,S,g)}set(e,n,i,r,s,a,o,l,c,d,h,p,m,v,S,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=p,u[3]=m,u[7]=v,u[11]=S,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),a=1/Ms.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=a*d,m=a*h,v=o*d,S=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+v*c,n[5]=p-S*c,n[9]=-o*l,n[2]=S-p*c,n[6]=v+m*c,n[10]=a*l}else if(e.order==="YXZ"){const p=l*d,m=l*h,v=c*d,S=c*h;n[0]=p+S*o,n[4]=v*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=m*o-v,n[6]=S+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*d,m=l*h,v=c*d,S=c*h;n[0]=p-S*o,n[4]=-a*h,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*d,n[9]=S-p*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*d,m=a*h,v=o*d,S=o*h;n[0]=l*d,n[4]=v*c-m,n[8]=p*c+S,n[1]=l*h,n[5]=S*c+p,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*c,v=o*l,S=o*c;n[0]=l*d,n[4]=S-p*h,n[8]=v*h+m,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*h+v,n[10]=p-S*h}else if(e.order==="XZY"){const p=a*l,m=a*c,v=o*l,S=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=p*h+S,n[5]=a*d,n[9]=m*h-v,n[2]=v*h-m,n[6]=o*d,n[10]=S*h+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eE,e,tE)}lookAt(e,n,i){const r=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),nr.crossVectors(i,Pn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),nr.crossVectors(i,Pn)),nr.normalize(),ml.crossVectors(Pn,nr),r[0]=nr.x,r[4]=ml.x,r[8]=Pn.x,r[1]=nr.y,r[5]=ml.y,r[9]=Pn.y,r[2]=nr.z,r[6]=ml.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],p=i[9],m=i[13],v=i[2],S=i[6],g=i[10],u=i[14],x=i[3],y=i[7],_=i[11],A=i[15],C=r[0],T=r[4],R=r[8],E=r[12],M=r[1],P=r[5],H=r[9],z=r[13],Y=r[2],te=r[6],q=r[10],se=r[14],I=r[3],J=r[7],K=r[11],me=r[15];return s[0]=a*C+o*M+l*Y+c*I,s[4]=a*T+o*P+l*te+c*J,s[8]=a*R+o*H+l*q+c*K,s[12]=a*E+o*z+l*se+c*me,s[1]=d*C+h*M+p*Y+m*I,s[5]=d*T+h*P+p*te+m*J,s[9]=d*R+h*H+p*q+m*K,s[13]=d*E+h*z+p*se+m*me,s[2]=v*C+S*M+g*Y+u*I,s[6]=v*T+S*P+g*te+u*J,s[10]=v*R+S*H+g*q+u*K,s[14]=v*E+S*z+g*se+u*me,s[3]=x*C+y*M+_*Y+A*I,s[7]=x*T+y*P+_*te+A*J,s[11]=x*R+y*H+_*q+A*K,s[15]=x*E+y*z+_*se+A*me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],p=e[10],m=e[14],v=e[3],S=e[7],g=e[11],u=e[15];return v*(+s*l*h-r*c*h-s*o*p+i*c*p+r*o*m-i*l*m)+S*(+n*l*m-n*c*p+s*a*p-r*a*m+r*c*d-s*l*d)+g*(+n*c*h-n*o*m-s*a*h+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*h+n*o*p+r*a*h-i*a*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],p=e[10],m=e[11],v=e[12],S=e[13],g=e[14],u=e[15],x=h*g*c-S*p*c+S*l*m-o*g*m-h*l*u+o*p*u,y=v*p*c-d*g*c-v*l*m+a*g*m+d*l*u-a*p*u,_=d*S*c-v*h*c+v*o*m-a*S*m-d*o*u+a*h*u,A=v*h*l-d*S*l-v*o*p+a*S*p+d*o*g-a*h*g,C=n*x+i*y+r*_+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=x*T,e[1]=(S*p*s-h*g*s-S*r*m+i*g*m+h*r*u-i*p*u)*T,e[2]=(o*g*s-S*l*s+S*r*c-i*g*c-o*r*u+i*l*u)*T,e[3]=(h*l*s-o*p*s-h*r*c+i*p*c+o*r*m-i*l*m)*T,e[4]=y*T,e[5]=(d*g*s-v*p*s+v*r*m-n*g*m-d*r*u+n*p*u)*T,e[6]=(v*l*s-a*g*s-v*r*c+n*g*c+a*r*u-n*l*u)*T,e[7]=(a*p*s-d*l*s+d*r*c-n*p*c-a*r*m+n*l*m)*T,e[8]=_*T,e[9]=(v*h*s-d*S*s-v*i*m+n*S*m+d*i*u-n*h*u)*T,e[10]=(a*S*s-v*o*s+v*i*c-n*S*c-a*i*u+n*o*u)*T,e[11]=(d*o*s-a*h*s-d*i*c+n*h*c+a*i*m-n*o*m)*T,e[12]=A*T,e[13]=(d*S*r-v*h*r+v*i*p-n*S*p-d*i*g+n*h*g)*T,e[14]=(v*o*r-a*S*r-v*i*l+n*S*l+a*i*g-n*o*g)*T,e[15]=(a*h*r-d*o*r+d*i*l-n*h*l-a*i*p+n*o*p)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,p=s*c,m=s*d,v=s*h,S=a*d,g=a*h,u=o*h,x=l*c,y=l*d,_=l*h,A=i.x,C=i.y,T=i.z;return r[0]=(1-(S+u))*A,r[1]=(m+_)*A,r[2]=(v-y)*A,r[3]=0,r[4]=(m-_)*C,r[5]=(1-(p+u))*C,r[6]=(g+x)*C,r[7]=0,r[8]=(v+y)*T,r[9]=(g-x)*T,r[10]=(1-(p+S))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ms.set(r[0],r[1],r[2]).length();const a=Ms.set(r[4],r[5],r[6]).length(),o=Ms.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,d=1/a,h=1/o;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=d,ti.elements[5]*=d,ti.elements[6]*=d,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,n.setFromRotationMatrix(ti),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Hi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let m,v;if(o===Hi)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===wc)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Hi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(a-s),p=(n+e)*c,m=(i+r)*d;let v,S;if(o===Hi)v=(a+s)*h,S=-2*h;else if(o===wc)v=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ms=new k,ti=new Nt,eE=new k(0,0,0),tE=new k(1,1,1),nr=new k,ml=new k,Pn=new k,Om=new Nt,Fm=new Oo;class Ci{constructor(e=0,n=0,i=0,r=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],p=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Om,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fm.setFromEuler(this),this.setFromQuaternion(Fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";let Qh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nE=0;const Bm=new k,Es=new Oo,Pi=new Nt,gl=new k,Ba=new k,iE=new k,rE=new Oo,zm=new k(1,0,0),Hm=new k(0,1,0),Vm=new k(0,0,1),Gm={type:"added"},sE={type:"removed"},ws={type:"childadded",child:null},Ou={type:"childremoved",child:null};class hn extends _a{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new k,n=new Ci,i=new Oo,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new it}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(zm,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Vm,e)}translateOnAxis(e,n){return Bm.copy(e).applyQuaternion(this.quaternion),this.position.add(Bm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zm,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?gl.copy(e):gl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Ba,gl,this.up):Pi.lookAt(gl,Ba,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),Es.setFromRotationMatrix(Pi),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gm),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sE),Ou.child=e,this.dispatchEvent(Ou),Ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gm),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,iE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,rE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),p=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new k(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new k,Li=new k,Fu=new k,ki=new k,bs=new k,Ts=new k,jm=new k,Bu=new k,zu=new k,Hu=new k,Vu=new wt,Gu=new wt,ju=new wt;class ci{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ni.subVectors(r,n),Li.subVectors(i,n),Fu.subVectors(e,n);const a=ni.dot(ni),o=ni.dot(Li),l=ni.dot(Fu),c=Li.dot(Li),d=Li.dot(Fu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,m=(c*l-o*d)*p,v=(a*d-o*l)*p;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Vu.setScalar(0),Gu.setScalar(0),ju.setScalar(0),Vu.fromBufferAttribute(e,n),Gu.fromBufferAttribute(e,i),ju.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vu,s.x),a.addScaledVector(Gu,s.y),a.addScaledVector(ju,s.z),a}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),Li.subVectors(e,n),ni.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ni.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;bs.subVectors(r,i),Ts.subVectors(s,i),Bu.subVectors(e,i);const l=bs.dot(Bu),c=Ts.dot(Bu);if(l<=0&&c<=0)return n.copy(i);zu.subVectors(e,r);const d=bs.dot(zu),h=Ts.dot(zu);if(d>=0&&h<=d)return n.copy(r);const p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(bs,a);Hu.subVectors(e,s);const m=bs.dot(Hu),v=Ts.dot(Hu);if(v>=0&&m<=v)return n.copy(s);const S=m*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Ts,o);const g=d*v-m*h;if(g<=0&&h-d>=0&&m-v>=0)return jm.subVectors(s,r),o=(h-d)/(h-d+(m-v)),n.copy(r).addScaledVector(jm,o);const u=1/(g+S+p);return a=S*u,o=p*u,n.copy(i).addScaledVector(bs,a).addScaledVector(Ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},vl={h:0,s:0,l:0};function Wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class dt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=gt.workingColorSpace){if(e=Kh(e,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Wu(a,s,e+1/3),this.g=Wu(a,s,e),this.b=Wu(a,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,n=In){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=vx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return gt.fromWorkingColorSpace(dn.copy(this),e),Math.round(Jt(dn.r*255,0,255))*65536+Math.round(Jt(dn.g*255,0,255))*256+Math.round(Jt(dn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace(dn.copy(this),n);const i=dn.r,r=dn.g,s=dn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=In){gt.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,i=dn.g,r=dn.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(vl);const i=oo(ir.h,vl.h,n),r=oo(ir.s,vl.s,n),s=oo(ir.l,vl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new dt;dt.NAMES=vx;let aE=0;class Sa extends _a{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=ya(),this.name="",this.blending=Qs,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=af,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sf&&(i.blendSrc=this.blendSrc),this.blendDst!==af&&(i.blendDst=this.blendDst),this.blendEquation!==jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==la&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ii extends Sa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new k,xl=new We;class Ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cm,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xl.fromBufferAttribute(this,n),xl.applyMatrix3(e),this.setXY(n,xl.x,xl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ls(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ls(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ls(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ls(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ls(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cm&&(e.usage=this.usage),e}}class xx extends Ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _x extends Ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class jt extends Ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let oE=0;const Gn=new Nt,$u=new hn,Cs=new k,Ln=new Fo,za=new Fo,Zt=new k;class Kn extends _a{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(px(e)?_x:xx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,i){return Gn.makeTranslation(e,n,i),this.applyMatrix4(Gn),this}scale(e,n,i){return Gn.makeScale(e,n,i),this.applyMatrix4(Gn),this}lookAt(e){return $u.lookAt(e),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];za.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Ln.min,za.min),Ln.expandByPoint(Zt),Zt.addVectors(Ln.max,za.max),Ln.expandByPoint(Zt)):(Ln.expandByPoint(za.min),Ln.expandByPoint(za.max))}Ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Zt.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),Zt.add(Cs)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new k,l[R]=new k;const c=new k,d=new k,h=new k,p=new We,m=new We,v=new We,S=new k,g=new k;function u(R,E,M){c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,E),v.fromBufferAttribute(s,M),d.sub(c),h.sub(c),m.sub(p),v.sub(p);const P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(S.copy(d).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(P),g.copy(h).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(P),o[R].add(S),o[E].add(S),o[M].add(S),l[R].add(g),l[E].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,E=x.length;R<E;++R){const M=x[R],P=M.start,H=M.count;for(let z=P,Y=P+H;z<Y;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new k,_=new k,A=new k,C=new k;function T(R){A.fromBufferAttribute(r,R),C.copy(A);const E=o[R];y.copy(E),y.sub(A.multiplyScalar(A.dot(E))).normalize(),_.crossVectors(C,E);const P=_.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,P)}for(let R=0,E=x.length;R<E;++R){const M=x[R],P=M.start,H=M.count;for(let z=P,Y=P+H;z<Y;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,d=new k,h=new k;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),S=e.getX(p+1),g=e.getX(p+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,g),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,m=n.count;p<m;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Zt.fromBufferAttribute(e,n),Zt.normalize(),e.setXYZ(n,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,p=new c.constructor(l.length*d);let m=0,v=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*d;for(let u=0;u<d;u++)p[v++]=c[m++]}return new Ti(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const p=c[d],m=e(p,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let p=0,m=h.length;p<m;p++)d.push(h[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wm=new Nt,Dr=new Zh,_l=new qc,$m=new k,yl=new k,Sl=new k,Ml=new k,Xu=new k,El=new k,Xm=new k,wl=new k;class we extends hn{constructor(e=new Kn,n=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){El.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Xu.fromBufferAttribute(h,e),a?El.addScaledVector(Xu,d):El.addScaledVector(Xu.sub(n),d))}n.add(El)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(_l.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(_l,$m)===null||Dr.origin.distanceToSquared($m)>(e.far-e.near)**2))&&(Wm.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Wm),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=p.length;v<S;v++){const g=p[v],u=a[g.materialIndex],x=Math.max(g.start,m.start),y=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let _=x,A=y;_<A;_+=3){const C=o.getX(_),T=o.getX(_+1),R=o.getX(_+2);r=bl(this,u,e,i,c,d,h,C,T,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let g=v,u=S;g<u;g+=3){const x=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);r=bl(this,a,e,i,c,d,h,x,y,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=p.length;v<S;v++){const g=p[v],u=a[g.materialIndex],x=Math.max(g.start,m.start),y=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let _=x,A=y;_<A;_+=3){const C=_,T=_+1,R=_+2;r=bl(this,u,e,i,c,d,h,C,T,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let g=v,u=S;g<u;g+=3){const x=g,y=g+1,_=g+2;r=bl(this,a,e,i,c,d,h,x,y,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function lE(t,e,n,i,r,s,a,o){let l;if(e.side===Cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===br,o),l===null)return null;wl.copy(o),wl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(wl);return c<n.near||c>n.far?null:{distance:c,point:wl.clone(),object:t}}function bl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,yl),t.getVertexPosition(l,Sl),t.getVertexPosition(c,Ml);const d=lE(t,e,n,i,yl,Sl,Ml,Xm);if(d){const h=new k;ci.getBarycoord(Xm,yl,Sl,Ml,h),r&&(d.uv=ci.getInterpolatedAttribute(r,o,l,c,h,new We)),s&&(d.uv1=ci.getInterpolatedAttribute(s,o,l,c,h,new We)),a&&(d.normal=ci.getInterpolatedAttribute(a,o,l,c,h,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new k,materialIndex:0};ci.getNormal(yl,Sl,Ml,p.normal),d.face=p,d.barycoord=h}return d}class Je extends Kn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let p=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(h,2));function v(S,g,u,x,y,_,A,C,T,R,E){const M=_/T,P=A/R,H=_/2,z=A/2,Y=C/2,te=T+1,q=R+1;let se=0,I=0;const J=new k;for(let K=0;K<q;K++){const me=K*P-z;for(let Le=0;Le<te;Le++){const ht=Le*M-H;J[S]=ht*x,J[g]=me*y,J[u]=Y,c.push(J.x,J.y,J.z),J[S]=0,J[g]=0,J[u]=C>0?1:-1,d.push(J.x,J.y,J.z),h.push(Le/T),h.push(1-K/R),se+=1}}for(let K=0;K<R;K++)for(let me=0;me<T;me++){const Le=p+me+te*K,ht=p+me+te*(K+1),X=p+(me+1)+te*(K+1),fe=p+(me+1)+te*K;l.push(Le,ht,fe),l.push(ht,X,fe),I+=6}o.addGroup(m,I,E),m+=I,p+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Je(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ha(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function vn(t){const e={};for(let n=0;n<t.length;n++){const i=ha(t[n]);for(const r in i)e[r]=i[r]}return e}function cE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function yx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const uE={clone:ha,merge:vn};var dE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Sa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dE,this.fragmentShader=fE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=cE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let Sx=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const rr=new k,qm=new We,Ym=new We;class Dn extends Sx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ro*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,qm,Ym),n.subVectors(Ym,qm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ao*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const As=-90,Rs=1;class hE extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(As,Rs,e,n);r.layers=this.layers,this.add(r);const s=new Dn(As,Rs,e,n);s.layers=this.layers,this.add(s);const a=new Dn(As,Rs,e,n);a.layers=this.layers,this.add(a);const o=new Dn(As,Rs,e,n);o.layers=this.layers,this.add(o);const l=new Dn(As,Rs,e,n);l.layers=this.layers,this.add(l);const c=new Dn(As,Rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,p,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Mx extends An{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:ca,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pE extends os{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ei}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Je(5,5,5),s=new Tr({name:"CubemapFromEquirect",uniforms:ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Sr});s.uniforms.tEquirect.value=n;const a=new we(r,s),o=n.minFilter;return n.minFilter===Kr&&(n.minFilter=Ei),new hE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const qu=new k,mE=new k,gE=new it;class Vr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qu.subVectors(i,n).cross(mE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(qu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gE.getNormalMatrix(e),r=this.coplanarPoint(qu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new qc,Tl=new k;class Jh{constructor(e=new Vr,n=new Vr,i=new Vr,r=new Vr,s=new Vr,a=new Vr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Hi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],h=r[6],p=r[7],m=r[8],v=r[9],S=r[10],g=r[11],u=r[12],x=r[13],y=r[14],_=r[15];if(i[0].setComponents(l-s,p-c,g-m,_-u).normalize(),i[1].setComponents(l+s,p+c,g+m,_+u).normalize(),i[2].setComponents(l+a,p+d,g+v,_+x).normalize(),i[3].setComponents(l-a,p-d,g-v,_-x).normalize(),i[4].setComponents(l-o,p-h,g-S,_-y).normalize(),n===Hi)i[5].setComponents(l+o,p+h,g+S,_+y).normalize();else if(n===wc)i[5].setComponents(o,h,S,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Tl.x=r.normal.x>0?e.max.x:e.min.x,Tl.y=r.normal.y>0?e.max.y:e.min.y,Tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ex(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function vE(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<h.length;m++){const v=h[p],S=h[m];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++p,h[p]=S)}h.length=p+1;for(let m=0,v=h.length;m<v;m++){const S=h[m];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class oi extends Kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,p=n/l,m=[],v=[],S=[],g=[];for(let u=0;u<d;u++){const x=u*p-a;for(let y=0;y<c;y++){const _=y*h-s;v.push(_,-x,0),S.push(0,0,1),g.push(y/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<o;x++){const y=x+c*u,_=x+c*(u+1),A=x+1+c*(u+1),C=x+1+c*u;m.push(y,_,C),m.push(_,A,C)}this.setIndex(m),this.setAttribute("position",new jt(v,3)),this.setAttribute("normal",new jt(S,3)),this.setAttribute("uv",new jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.widthSegments,e.heightSegments)}}var xE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_E=`#ifdef USE_ALPHAHASH
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
#endif`,yE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ME=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wE=`#ifdef USE_AOMAP
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
#endif`,bE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TE=`#ifdef USE_BATCHING
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
#endif`,CE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PE=`#ifdef USE_IRIDESCENCE
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
#endif`,LE=`#ifdef USE_BUMPMAP
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
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,HE=`#define PI 3.141592653589793
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
} // validated`,VE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GE=`vec3 transformedNormal = objectNormal;
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
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qE="gl_FragColor = linearToOutputTexel( gl_FragColor );",YE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ew=`#ifdef USE_ENVMAP
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
#endif`,tw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sw=`#ifdef USE_GRADIENTMAP
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
}`,aw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ow=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cw=`uniform bool receiveShadow;
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
#endif`,uw=`#ifdef USE_ENVMAP
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
#endif`,dw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mw=`PhysicalMaterial material;
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
#endif`,gw=`struct PhysicalMaterial {
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
}`,vw=`
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
#endif`,xw=`#if defined( RE_IndirectDiffuse )
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
#endif`,_w=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ew=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ww=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cw=`#if defined( USE_POINTS_UV )
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
#endif`,Aw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kw=`#ifdef USE_MORPHTARGETS
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
#endif`,Iw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zw=`#ifdef USE_NORMALMAP
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
#endif`,Hw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ww=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$w=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n2=`float getShadowMask() {
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
}`,i2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r2=`#ifdef USE_SKINNING
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
#endif`,s2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a2=`#ifdef USE_SKINNING
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
#endif`,o2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d2=`#ifdef USE_TRANSMISSION
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
#endif`,f2=`#ifdef USE_TRANSMISSION
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
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x2=`uniform sampler2D t2D;
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
}`,_2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E2=`#include <common>
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
}`,w2=`#if DEPTH_PACKING == 3200
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
}`,b2=`#define DISTANCE
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
}`,T2=`#define DISTANCE
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
}`,C2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R2=`uniform float scale;
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
}`,N2=`uniform vec3 diffuse;
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
}`,P2=`#include <common>
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
}`,L2=`uniform vec3 diffuse;
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
}`,k2=`#define LAMBERT
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
}`,I2=`#define LAMBERT
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
}`,D2=`#define MATCAP
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
}`,U2=`#define MATCAP
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
}`,O2=`#define NORMAL
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
}`,F2=`#define NORMAL
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
}`,B2=`#define PHONG
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
}`,z2=`#define PHONG
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
}`,H2=`#define STANDARD
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
}`,V2=`#define STANDARD
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
}`,G2=`#define TOON
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
}`,j2=`#define TOON
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
}`,W2=`uniform float size;
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
}`,$2=`uniform vec3 diffuse;
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
}`,X2=`#include <common>
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
}`,q2=`uniform vec3 color;
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
}`,Y2=`uniform float rotation;
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
}`,K2=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:xE,alphahash_pars_fragment:_E,alphamap_fragment:yE,alphamap_pars_fragment:SE,alphatest_fragment:ME,alphatest_pars_fragment:EE,aomap_fragment:wE,aomap_pars_fragment:bE,batching_pars_vertex:TE,batching_vertex:CE,begin_vertex:AE,beginnormal_vertex:RE,bsdfs:NE,iridescence_fragment:PE,bumpmap_pars_fragment:LE,clipping_planes_fragment:kE,clipping_planes_pars_fragment:IE,clipping_planes_pars_vertex:DE,clipping_planes_vertex:UE,color_fragment:OE,color_pars_fragment:FE,color_pars_vertex:BE,color_vertex:zE,common:HE,cube_uv_reflection_fragment:VE,defaultnormal_vertex:GE,displacementmap_pars_vertex:jE,displacementmap_vertex:WE,emissivemap_fragment:$E,emissivemap_pars_fragment:XE,colorspace_fragment:qE,colorspace_pars_fragment:YE,envmap_fragment:KE,envmap_common_pars_fragment:ZE,envmap_pars_fragment:QE,envmap_pars_vertex:JE,envmap_physical_pars_fragment:uw,envmap_vertex:ew,fog_vertex:tw,fog_pars_vertex:nw,fog_fragment:iw,fog_pars_fragment:rw,gradientmap_pars_fragment:sw,lightmap_pars_fragment:aw,lights_lambert_fragment:ow,lights_lambert_pars_fragment:lw,lights_pars_begin:cw,lights_toon_fragment:dw,lights_toon_pars_fragment:fw,lights_phong_fragment:hw,lights_phong_pars_fragment:pw,lights_physical_fragment:mw,lights_physical_pars_fragment:gw,lights_fragment_begin:vw,lights_fragment_maps:xw,lights_fragment_end:_w,logdepthbuf_fragment:yw,logdepthbuf_pars_fragment:Sw,logdepthbuf_pars_vertex:Mw,logdepthbuf_vertex:Ew,map_fragment:ww,map_pars_fragment:bw,map_particle_fragment:Tw,map_particle_pars_fragment:Cw,metalnessmap_fragment:Aw,metalnessmap_pars_fragment:Rw,morphinstance_vertex:Nw,morphcolor_vertex:Pw,morphnormal_vertex:Lw,morphtarget_pars_vertex:kw,morphtarget_vertex:Iw,normal_fragment_begin:Dw,normal_fragment_maps:Uw,normal_pars_fragment:Ow,normal_pars_vertex:Fw,normal_vertex:Bw,normalmap_pars_fragment:zw,clearcoat_normal_fragment_begin:Hw,clearcoat_normal_fragment_maps:Vw,clearcoat_pars_fragment:Gw,iridescence_pars_fragment:jw,opaque_fragment:Ww,packing:$w,premultiplied_alpha_fragment:Xw,project_vertex:qw,dithering_fragment:Yw,dithering_pars_fragment:Kw,roughnessmap_fragment:Zw,roughnessmap_pars_fragment:Qw,shadowmap_pars_fragment:Jw,shadowmap_pars_vertex:e2,shadowmap_vertex:t2,shadowmask_pars_fragment:n2,skinbase_vertex:i2,skinning_pars_vertex:r2,skinning_vertex:s2,skinnormal_vertex:a2,specularmap_fragment:o2,specularmap_pars_fragment:l2,tonemapping_fragment:c2,tonemapping_pars_fragment:u2,transmission_fragment:d2,transmission_pars_fragment:f2,uv_pars_fragment:h2,uv_pars_vertex:p2,uv_vertex:m2,worldpos_vertex:g2,background_vert:v2,background_frag:x2,backgroundCube_vert:_2,backgroundCube_frag:y2,cube_vert:S2,cube_frag:M2,depth_vert:E2,depth_frag:w2,distanceRGBA_vert:b2,distanceRGBA_frag:T2,equirect_vert:C2,equirect_frag:A2,linedashed_vert:R2,linedashed_frag:N2,meshbasic_vert:P2,meshbasic_frag:L2,meshlambert_vert:k2,meshlambert_frag:I2,meshmatcap_vert:D2,meshmatcap_frag:U2,meshnormal_vert:O2,meshnormal_frag:F2,meshphong_vert:B2,meshphong_frag:z2,meshphysical_vert:H2,meshphysical_frag:V2,meshtoon_vert:G2,meshtoon_frag:j2,points_vert:W2,points_frag:$2,shadow_vert:X2,shadow_frag:q2,sprite_vert:Y2,sprite_frag:K2},Se={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Si={basic:{uniforms:vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new dt(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:vn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:vn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new dt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:vn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:vn([Se.points,Se.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:vn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:vn([Se.common,Se.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:vn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:vn([Se.sprite,Se.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:vn([Se.common,Se.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:vn([Se.lights,Se.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Si.physical={uniforms:vn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Cl={r:0,b:0,g:0},Or=new Ci,Z2=new Nt;function Q2(t,e,n,i,r,s,a){const o=new dt(0);let l=s===!0?0:1,c,d,h=null,p=0,m=null;function v(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function S(x){let y=!1;const _=v(x);_===null?u(o,l):_&&_.isColor&&(u(_,1),y=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(x,y){const _=v(y);_&&(_.isCubeTexture||_.mapping===$c)?(d===void 0&&(d=new we(new Je(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:ha(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Or.copy(y.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Z2.makeRotationFromEuler(Or)),d.material.toneMapped=gt.getTransfer(_.colorSpace)!==Et,(h!==_||p!==_.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=_,p=_.version,m=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new we(new oi(2,2),new Tr({name:"BackgroundMaterial",uniforms:ha(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=gt.getTransfer(_.colorSpace)!==Et,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=_,p=_.version,m=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,y){x.getRGB(Cl,yx(t)),i.buffers.color.setClear(Cl.r,Cl.g,Cl.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:S,addToRenderList:g}}function J2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(M,P,H,z,Y){let te=!1;const q=h(z,H,P);s!==q&&(s=q,c(s.object)),te=m(M,z,H,Y),te&&v(M,z,H,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,_(M,P,H,z),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function h(M,P,H){const z=H.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let te=Y[P.id];te===void 0&&(te={},Y[P.id]=te);let q=te[z];return q===void 0&&(q=p(l()),te[z]=q),q}function p(M){const P=[],H=[],z=[];for(let Y=0;Y<n;Y++)P[Y]=0,H[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:z,object:M,attributes:{},index:null}}function m(M,P,H,z){const Y=s.attributes,te=P.attributes;let q=0;const se=H.getAttributes();for(const I in se)if(se[I].location>=0){const K=Y[I];let me=te[I];if(me===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),K===void 0||K.attribute!==me||me&&K.data!==me.data)return!0;q++}return s.attributesNum!==q||s.index!==z}function v(M,P,H,z){const Y={},te=P.attributes;let q=0;const se=H.getAttributes();for(const I in se)if(se[I].location>=0){let K=te[I];K===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const me={};me.attribute=K,K&&K.data&&(me.data=K.data),Y[I]=me,q++}s.attributes=Y,s.attributesNum=q,s.index=z}function S(){const M=s.newAttributes;for(let P=0,H=M.length;P<H;P++)M[P]=0}function g(M){u(M,0)}function u(M,P){const H=s.newAttributes,z=s.enabledAttributes,Y=s.attributeDivisors;H[M]=1,z[M]===0&&(t.enableVertexAttribArray(M),z[M]=1),Y[M]!==P&&(t.vertexAttribDivisor(M,P),Y[M]=P)}function x(){const M=s.newAttributes,P=s.enabledAttributes;for(let H=0,z=P.length;H<z;H++)P[H]!==M[H]&&(t.disableVertexAttribArray(H),P[H]=0)}function y(M,P,H,z,Y,te,q){q===!0?t.vertexAttribIPointer(M,P,H,Y,te):t.vertexAttribPointer(M,P,H,z,Y,te)}function _(M,P,H,z){S();const Y=z.attributes,te=H.getAttributes(),q=P.defaultAttributeValues;for(const se in te){const I=te[se];if(I.location>=0){let J=Y[se];if(J===void 0&&(se==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),se==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const K=J.normalized,me=J.itemSize,Le=e.get(J);if(Le===void 0)continue;const ht=Le.buffer,X=Le.type,fe=Le.bytesPerElement,Me=X===t.INT||X===t.UNSIGNED_INT||J.gpuType===jh;if(J.isInterleavedBufferAttribute){const pe=J.data,$e=pe.stride,Ye=J.offset;if(pe.isInstancedInterleavedBuffer){for(let at=0;at<I.locationSize;at++)u(I.location+at,pe.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let at=0;at<I.locationSize;at++)g(I.location+at);t.bindBuffer(t.ARRAY_BUFFER,ht);for(let at=0;at<I.locationSize;at++)y(I.location+at,me/I.locationSize,X,K,$e*fe,(Ye+me/I.locationSize*at)*fe,Me)}else{if(J.isInstancedBufferAttribute){for(let pe=0;pe<I.locationSize;pe++)u(I.location+pe,J.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let pe=0;pe<I.locationSize;pe++)g(I.location+pe);t.bindBuffer(t.ARRAY_BUFFER,ht);for(let pe=0;pe<I.locationSize;pe++)y(I.location+pe,me/I.locationSize,X,K,me*fe,me/I.locationSize*pe*fe,Me)}}else if(q!==void 0){const K=q[se];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(I.location,K);break;case 3:t.vertexAttrib3fv(I.location,K);break;case 4:t.vertexAttrib4fv(I.location,K);break;default:t.vertexAttrib1fv(I.location,K)}}}}x()}function A(){R();for(const M in i){const P=i[M];for(const H in P){const z=P[H];for(const Y in z)d(z[Y].object),delete z[Y];delete P[H]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const H in P){const z=P[H];for(const Y in z)d(z[Y].object),delete z[Y];delete P[H]}delete i[M.id]}function T(M){for(const P in i){const H=i[P];if(H[M.id]===void 0)continue;const z=H[M.id];for(const Y in z)d(z[Y].object),delete z[Y];delete H[M.id]}}function R(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:g,disableUnusedAttributes:x}}function eb(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=d[v];n.update(m,i,1)}function l(c,d,h,p){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],d[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,p,0,h);let v=0;for(let S=0;S<h;S++)v+=d[S]*p[S];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==ui&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==qi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==zi&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:A,maxSamples:C}}function nb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Vr,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||i!==0||r;return r=p,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){n=d(h,p,0)},this.setState=function(h,p,m){const v=h.clippingPlanes,S=h.clipIntersection,g=h.clipShadows,u=t.get(h);if(!r||v===null||v.length===0||s&&!g)s?d(null):c();else{const x=s?0:i,y=x*4;let _=u.clippingState||null;l.value=_,_=d(v,p,y,m);for(let A=0;A!==y;++A)_[A]=n[A];u.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,p,m,v){const S=h!==null?h.length:0;let g=null;if(S!==0){if(g=l.value,v!==!0||g===null){const u=m+S*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<u)&&(g=new Float32Array(u));for(let y=0,_=m;y!==S;++y,_+=4)a.copy(h[y]).applyMatrix4(x,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function ib(t){let e=new WeakMap;function n(a,o){return o===pf?a.mapping=ca:o===mf&&(a.mapping=ua),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===pf||o===mf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pE(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class rb extends Sx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ws=4,Km=[.125,.215,.35,.446,.526,.582],Wr=20,Yu=new rb,Zm=new dt;let Ku=null,Zu=0,Qu=0,Ju=!1;const Gr=(1+Math.sqrt(5))/2,Ns=1/Gr,Qm=[new k(-Gr,Ns,0),new k(Gr,Ns,0),new k(-Ns,0,Gr),new k(Ns,0,Gr),new k(0,Gr,-Ns),new k(0,Gr,Ns),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Zu,Qu),this._renderer.xr.enabled=Ju,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ca||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Uo,format:ui,colorSpace:xa,depthBuffer:!1},r=e0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sb(s)),this._blurMaterial=ab(s,e,n)}return r}_compileMaterial(e){const n=new we(this._lodPlanes[0],e);this._renderer.compile(n,Yu)}_sceneToCubeUV(e,n,i,r){const o=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Zm),d.toneMapping=Mr,d.autoClear=!1;const m=new ii({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),v=new we(new Je,m);let S=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,S=!0):(m.color.copy(Zm),S=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):x===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const y=this._cubeSize;Al(r,x*y,u>2?y:0,y,y),d.setRenderTarget(r),S&&d.render(v,o),d.render(e,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ca||e.mapping===ua;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new we(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Al(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Yu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Qm[(r-s-1)%Qm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new we(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Wr-1),S=s/v,g=isFinite(s)?1+Math.floor(d*S):Wr;g>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wr}`);const u=[];let x=0;for(let T=0;T<Wr;++T){const R=T/S,E=Math.exp(-R*R/2);u.push(E),T===0?x+=E:T<g&&(x+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/x;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:y}=this;p.dTheta.value=v,p.mipInt.value=y-i;const _=this._sizeLods[r],A=3*_*(r>y-Ws?r-y+Ws:0),C=4*(this._cubeSize-_);Al(n,A,C,3*_,2*_),l.setRenderTarget(n),l.render(h,Yu)}}function sb(t){const e=[],n=[],i=[];let r=t;const s=t-Ws+1+Km.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Ws?l=Km[a-t+Ws-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,v=6,S=3,g=2,u=1,x=new Float32Array(S*v*m),y=new Float32Array(g*v*m),_=new Float32Array(u*v*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,R=C>2?0:-1,E=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(E,S*v*C),y.set(p,g*v*C);const M=[C,C,C,C,C,C];_.set(M,u*v*C)}const A=new Kn;A.setAttribute("position",new Ti(x,S)),A.setAttribute("uv",new Ti(y,g)),A.setAttribute("faceIndex",new Ti(_,u)),e.push(A),r>Ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function e0(t,e,n){const i=new os(t,e,n);return i.texture.mapping=$c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Al(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ab(t,e,n){const i=new Float32Array(Wr),r=new k(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ep(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function t0(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ep(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function n0(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function ep(){return`

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
	`}function ob(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===pf||l===mf,d=l===ca||l===ua;if(c||d){let h=e.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return n===null&&(n=new Jm(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Jm(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function lb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Xa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cb(t,e,n,i){const r={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const S=p.morphAttributes[v];for(let g=0,u=S.length;g<u;g++)e.remove(S[g])}p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(h,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(h){const p=h.attributes;for(const v in p)e.update(p[v],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const S=m[v];for(let g=0,u=S.length;g<u;g++)e.update(S[g],t.ARRAY_BUFFER)}}function c(h){const p=[],m=h.index,v=h.attributes.position;let S=0;if(m!==null){const x=m.array;S=m.version;for(let y=0,_=x.length;y<_;y+=3){const A=x[y+0],C=x[y+1],T=x[y+2];p.push(A,C,C,T,T,A)}}else if(v!==void 0){const x=v.array;S=v.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const A=y+0,C=y+1,T=y+2;p.push(A,C,C,T,T,A)}}else return;const g=new(px(p)?_x:xx)(p,1);g.version=S;const u=s.get(h);u&&e.remove(u),s.set(h,g)}function d(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function ub(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,m){t.drawElements(i,m,s,p*a),n.update(m,i,1)}function c(p,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,p*a,v),n.update(m,i,v))}function d(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,p,0,v);let g=0;for(let u=0;u<v;u++)g+=m[u];n.update(g,i,1)}function h(p,m,v,S){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<p.length;u++)c(p[u]/a,m[u],S[u]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,p,0,S,0,v);let u=0;for(let x=0;x<v;x++)u+=m[x]*S[x];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function db(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function fb(t,e,n){const i=new WeakMap,r=new wt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let p=i.get(o);if(p===void 0||p.count!==h){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;p!==void 0&&p.texture.dispose();const v=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;v===!0&&(_=1),S===!0&&(_=2),g===!0&&(_=3);let A=o.attributes.position.count*_,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*C*4*h),R=new gx(T,A,C,h);R.type=zi,R.needsUpdate=!0;const E=_*4;for(let P=0;P<h;P++){const H=u[P],z=x[P],Y=y[P],te=A*C*4*P;for(let q=0;q<H.count;q++){const se=q*E;v===!0&&(r.fromBufferAttribute(H,q),T[te+se+0]=r.x,T[te+se+1]=r.y,T[te+se+2]=r.z,T[te+se+3]=0),S===!0&&(r.fromBufferAttribute(z,q),T[te+se+4]=r.x,T[te+se+5]=r.y,T[te+se+6]=r.z,T[te+se+7]=0),g===!0&&(r.fromBufferAttribute(Y,q),T[te+se+8]=r.x,T[te+se+9]=r.y,T[te+se+10]=r.z,T[te+se+11]=Y.itemSize===4?r.w:1)}}p={count:h,texture:R,size:new We(A,C)},i.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const S=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function hb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class wx extends An{constructor(e,n,i,r,s,a,o,l,c,d=Js){if(d!==Js&&d!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Js&&(i=as),i===void 0&&d===fa&&(i=da),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:hi,this.minFilter=l!==void 0?l:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const bx=new An,i0=new wx(1,1),Tx=new gx,Cx=new QM,Ax=new Mx,r0=[],s0=[],a0=new Float32Array(16),o0=new Float32Array(9),l0=new Float32Array(4);function Ma(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=r0[r];if(s===void 0&&(s=new Float32Array(r),r0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function qt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yc(t,e){let n=s0[e];n===void 0&&(n=new Int32Array(e),s0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function pb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2fv(this.addr,e),Yt(n,e)}}function gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;t.uniform3fv(this.addr,e),Yt(n,e)}}function vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4fv(this.addr,e),Yt(n,e)}}function xb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Yt(n,e)}else{if(qt(n,i))return;l0.set(i),t.uniformMatrix2fv(this.addr,!1,l0),Yt(n,i)}}function _b(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Yt(n,e)}else{if(qt(n,i))return;o0.set(i),t.uniformMatrix3fv(this.addr,!1,o0),Yt(n,i)}}function yb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Yt(n,e)}else{if(qt(n,i))return;a0.set(i),t.uniformMatrix4fv(this.addr,!1,a0),Yt(n,i)}}function Sb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2iv(this.addr,e),Yt(n,e)}}function Eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3iv(this.addr,e),Yt(n,e)}}function wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4iv(this.addr,e),Yt(n,e)}}function bb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2uiv(this.addr,e),Yt(n,e)}}function Cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3uiv(this.addr,e),Yt(n,e)}}function Ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4uiv(this.addr,e),Yt(n,e)}}function Rb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(i0.compareFunction=hx,s=i0):s=bx,n.setTexture2D(e||s,r)}function Nb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Cx,r)}function Pb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ax,r)}function Lb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Tx,r)}function kb(t){switch(t){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return vb;case 35674:return xb;case 35675:return _b;case 35676:return yb;case 5124:case 35670:return Sb;case 35667:case 35671:return Mb;case 35668:case 35672:return Eb;case 35669:case 35673:return wb;case 5125:return bb;case 36294:return Tb;case 36295:return Cb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Lb}}function Ib(t,e){t.uniform1fv(this.addr,e)}function Db(t,e){const n=Ma(e,this.size,2);t.uniform2fv(this.addr,n)}function Ub(t,e){const n=Ma(e,this.size,3);t.uniform3fv(this.addr,n)}function Ob(t,e){const n=Ma(e,this.size,4);t.uniform4fv(this.addr,n)}function Fb(t,e){const n=Ma(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Bb(t,e){const n=Ma(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function zb(t,e){const n=Ma(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Hb(t,e){t.uniform1iv(this.addr,e)}function Vb(t,e){t.uniform2iv(this.addr,e)}function Gb(t,e){t.uniform3iv(this.addr,e)}function jb(t,e){t.uniform4iv(this.addr,e)}function Wb(t,e){t.uniform1uiv(this.addr,e)}function $b(t,e){t.uniform2uiv(this.addr,e)}function Xb(t,e){t.uniform3uiv(this.addr,e)}function qb(t,e){t.uniform4uiv(this.addr,e)}function Yb(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||bx,s[a])}function Kb(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Cx,s[a])}function Zb(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Ax,s[a])}function Qb(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Tx,s[a])}function Jb(t){switch(t){case 5126:return Ib;case 35664:return Db;case 35665:return Ub;case 35666:return Ob;case 35674:return Fb;case 35675:return Bb;case 35676:return zb;case 5124:case 35670:return Hb;case 35667:case 35671:return Vb;case 35668:case 35672:return Gb;case 35669:case 35673:return jb;case 5125:return Wb;case 36294:return $b;case 36295:return Xb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Yb;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return Qb}}class eT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kb(n.type)}}class tT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Jb(n.type)}}class nT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function c0(t,e){t.seq.push(e),t.map[e.id]=e}function iT(t,e,n){const i=t.name,r=i.length;for(ed.lastIndex=0;;){const s=ed.exec(i),a=ed.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){c0(n,c===void 0?new eT(o,t,e):new tT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new nT(o),c0(n,h)),n=h}}}class Ql{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);iT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function u0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const rT=37297;let sT=0;function aT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const d0=new it;function oT(t){gt._getMatrix(d0,gt.workingColorSpace,t);const e=`mat3( ${d0.elements.map(n=>n.toFixed(4))} )`;switch(gt.getTransfer(t)){case Xc:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function f0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+aT(t.getShaderSource(e),a)}else return r}function lT(t,e){const n=oT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function cT(t,e){let n;switch(e){case dM:n="Linear";break;case fM:n="Reinhard";break;case hM:n="Cineon";break;case ex:n="ACESFilmic";break;case mM:n="AgX";break;case gM:n="Neutral";break;case pM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Rl=new k;function uT(){gt.getLuminanceCoefficients(Rl);const t=Rl.x.toFixed(4),e=Rl.y.toFixed(4),n=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function fT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function qa(t){return t!==""}function h0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pT=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(t){return t.replace(pT,gT)}const mT=new Map;function gT(t,e){let n=st[e];if(n===void 0){const i=mT.get(e);if(i!==void 0)n=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jf(n)}const vT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(t){return t.replace(vT,xT)}function xT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function g0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function _T(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Qv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function yT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ca:case ua:e="ENVMAP_TYPE_CUBE";break;case $c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ST(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ua:e="ENVMAP_MODE_REFRACTION";break}return e}function MT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jv:e="ENVMAP_BLENDING_MULTIPLY";break;case cM:e="ENVMAP_BLENDING_MIX";break;case uM:e="ENVMAP_BLENDING_ADD";break}return e}function ET(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function wT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=_T(n),c=yT(n),d=ST(n),h=MT(n),p=ET(n),m=dT(n),v=fT(s),S=r.createProgram();let g,u,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(qa).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(qa).join(`
`),u.length>0&&(u+=`
`)):(g=[g0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),u=[g0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?st.tonemapping_pars_fragment:"",n.toneMapping!==Mr?cT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,lT("linearToOutputTexel",n.outputColorSpace),uT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qa).join(`
`)),a=jf(a),a=h0(a,n),a=p0(a,n),o=jf(o),o=h0(o,n),o=p0(o,n),a=m0(a),o=m0(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===Am?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=x+g+a,_=x+u+o,A=u0(r,r.VERTEX_SHADER,y),C=u0(r,r.FRAGMENT_SHADER,_);r.attachShader(S,A),r.attachShader(S,C),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function T(P){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(S).trim(),z=r.getShaderInfoLog(A).trim(),Y=r.getShaderInfoLog(C).trim();let te=!0,q=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,A,C);else{const se=f0(r,A,"vertex"),I=f0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+se+`
`+I)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||Y==="")&&(q=!1);q&&(P.diagnostics={runnable:te,programLog:H,vertexShader:{log:z,prefix:g},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(A),r.deleteShader(C),R=new Ql(r,S),E=hT(r,S)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,rT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=C,this}let bT=0;class TT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new CT(e),n.set(e,i)),i}}class CT{constructor(e){this.id=bT++,this.code=e,this.usedTimes=0}}function AT(t,e,n,i,r,s,a){const o=new Qh,l=new TT,c=new Set,d=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,P,H,z){const Y=H.fog,te=z.geometry,q=E.isMeshStandardMaterial?H.environment:null,se=(E.isMeshStandardMaterial?n:e).get(E.envMap||q),I=se&&se.mapping===$c?se.image.height:null,J=v[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const K=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,me=K!==void 0?K.length:0;let Le=0;te.morphAttributes.position!==void 0&&(Le=1),te.morphAttributes.normal!==void 0&&(Le=2),te.morphAttributes.color!==void 0&&(Le=3);let ht,X,fe,Me;if(J){const mt=Si[J];ht=mt.vertexShader,X=mt.fragmentShader}else ht=E.vertexShader,X=E.fragmentShader,l.update(E),fe=l.getVertexShaderID(E),Me=l.getFragmentShaderID(E);const pe=t.getRenderTarget(),$e=t.state.buffers.depth.getReversed(),Ye=z.isInstancedMesh===!0,at=z.isBatchedMesh===!0,St=!!E.map,nt=!!E.matcap,At=!!se,F=!!E.aoMap,Bt=!!E.lightMap,Ze=!!E.bumpMap,Ue=!!E.normalMap,Ae=!!E.displacementMap,bt=!!E.emissiveMap,He=!!E.metalnessMap,N=!!E.roughnessMap,w=E.anisotropy>0,B=E.clearcoat>0,ie=E.dispersion>0,ae=E.iridescence>0,Z=E.sheen>0,Ie=E.transmission>0,oe=w&&!!E.anisotropyMap,L=B&&!!E.clearcoatMap,W=B&&!!E.clearcoatNormalMap,$=B&&!!E.clearcoatRoughnessMap,Q=ae&&!!E.iridescenceMap,ve=ae&&!!E.iridescenceThicknessMap,_e=Z&&!!E.sheenColorMap,he=Z&&!!E.sheenRoughnessMap,rt=!!E.specularMap,je=!!E.specularColorMap,ot=!!E.specularIntensityMap,D=Ie&&!!E.transmissionMap,ge=Ie&&!!E.thicknessMap,j=!!E.gradientMap,ne=!!E.alphaMap,ye=E.alphaTest>0,xe=!!E.alphaHash,Xe=!!E.extensions;let Tt=Mr;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Tt=t.toneMapping);const Ot={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:ht,fragmentShader:X,defines:E.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:at,batchingColor:at&&z._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&z.instanceColor!==null,instancingMorph:Ye&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:xa,alphaToCoverage:!!E.alphaToCoverage,map:St,matcap:nt,envMap:At,envMapMode:At&&se.mapping,envMapCubeUVHeight:I,aoMap:F,lightMap:Bt,bumpMap:Ze,normalMap:Ue,displacementMap:p&&Ae,emissiveMap:bt,normalMapObjectSpace:Ue&&E.normalMapType===yM,normalMapTangentSpace:Ue&&E.normalMapType===fx,metalnessMap:He,roughnessMap:N,anisotropy:w,anisotropyMap:oe,clearcoat:B,clearcoatMap:L,clearcoatNormalMap:W,clearcoatRoughnessMap:$,dispersion:ie,iridescence:ae,iridescenceMap:Q,iridescenceThicknessMap:ve,sheen:Z,sheenColorMap:_e,sheenRoughnessMap:he,specularMap:rt,specularColorMap:je,specularIntensityMap:ot,transmission:Ie,transmissionMap:D,thicknessMap:ge,gradientMap:j,opaque:E.transparent===!1&&E.blending===Qs&&E.alphaToCoverage===!1,alphaMap:ne,alphaTest:ye,alphaHash:xe,combine:E.combine,mapUv:St&&S(E.map.channel),aoMapUv:F&&S(E.aoMap.channel),lightMapUv:Bt&&S(E.lightMap.channel),bumpMapUv:Ze&&S(E.bumpMap.channel),normalMapUv:Ue&&S(E.normalMap.channel),displacementMapUv:Ae&&S(E.displacementMap.channel),emissiveMapUv:bt&&S(E.emissiveMap.channel),metalnessMapUv:He&&S(E.metalnessMap.channel),roughnessMapUv:N&&S(E.roughnessMap.channel),anisotropyMapUv:oe&&S(E.anisotropyMap.channel),clearcoatMapUv:L&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:W&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:he&&S(E.sheenRoughnessMap.channel),specularMapUv:rt&&S(E.specularMap.channel),specularColorMapUv:je&&S(E.specularColorMap.channel),specularIntensityMapUv:ot&&S(E.specularIntensityMap.channel),transmissionMapUv:D&&S(E.transmissionMap.channel),thicknessMapUv:ge&&S(E.thicknessMap.channel),alphaMapUv:ne&&S(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ue||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(St||ne),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:$e,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Le,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Tt,decodeVideoTexture:St&&E.map.isVideoTexture===!0&&gt.getTransfer(E.map.colorSpace)===Et,decodeVideoTextureEmissive:bt&&E.emissiveMap.isVideoTexture===!0&&gt.getTransfer(E.emissiveMap.colorSpace)===Et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Oi,flipSided:E.side===Cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&E.extensions.multiDraw===!0||at)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(x(M,E),y(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function x(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const M=v[E.type];let P;if(M){const H=Si[M];P=uE.clone(H.uniforms)}else P=E.uniforms;return P}function A(E,M){let P;for(let H=0,z=d.length;H<z;H++){const Y=d[H];if(Y.cacheKey===M){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new wT(t,M,E,s),d.push(P)),P}function C(E){if(--E.usedTimes===0){const M=d.indexOf(E);d[M]=d[d.length-1],d.pop(),E.destroy()}}function T(E){l.remove(E)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:_,acquireProgram:A,releaseProgram:C,releaseShaderCache:T,programs:d,dispose:R}}function RT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function NT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function v0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function x0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,p,m,v,S,g){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:p,material:m,groupOrder:v,renderOrder:h.renderOrder,z:S,group:g},t[e]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=m,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=S,u.group=g),e++,u}function o(h,p,m,v,S,g){const u=a(h,p,m,v,S,g);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,p,m,v,S,g){const u=a(h,p,m,v,S,g);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,p){n.length>1&&n.sort(h||NT),i.length>1&&i.sort(p||v0),r.length>1&&r.sort(p||v0)}function d(){for(let h=e,p=t.length;h<p;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function PT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new x0,t.set(i,[a])):r>=s.length?(a=new x0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function LT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new dt};break;case"SpotLight":n={position:new k,direction:new k,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":n={color:new dt,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function kT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let IT=0;function DT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function UT(t){const e=new LT,n=kT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new Nt,a=new Nt;function o(c){let d=0,h=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,v=0,S=0,g=0,u=0,x=0,y=0,_=0,A=0,C=0,T=0;c.sort(DT);for(let E=0,M=c.length;E<M;E++){const P=c[E],H=P.color,z=P.intensity,Y=P.distance,te=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=H.r*z,h+=H.g*z,p+=H.b*z;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],z);T++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const se=P.shadow,I=n.get(P);I.shadowIntensity=se.intensity,I.shadowBias=se.bias,I.shadowNormalBias=se.normalBias,I.shadowRadius=se.radius,I.shadowMapSize=se.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=P.shadow.matrix,x++}i.directional[m]=q,m++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(H).multiplyScalar(z),q.distance=Y,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[S]=q;const se=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,se.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[S]=se.matrix,P.castShadow){const I=n.get(P);I.shadowIntensity=se.intensity,I.shadowBias=se.bias,I.shadowNormalBias=se.normalBias,I.shadowRadius=se.radius,I.shadowMapSize=se.mapSize,i.spotShadow[S]=I,i.spotShadowMap[S]=te,_++}S++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(H).multiplyScalar(z),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=q,g++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const se=P.shadow,I=n.get(P);I.shadowIntensity=se.intensity,I.shadowBias=se.bias,I.shadowNormalBias=se.normalBias,I.shadowRadius=se.radius,I.shadowMapSize=se.mapSize,I.shadowCameraNear=se.camera.near,I.shadowCameraFar=se.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=te,i.pointShadowMatrix[v]=P.shadow.matrix,y++}i.point[v]=q,v++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(z),q.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[u]=q,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=p;const R=i.hash;(R.directionalLength!==m||R.pointLength!==v||R.spotLength!==S||R.rectAreaLength!==g||R.hemiLength!==u||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==_||R.numSpotMaps!==A||R.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=g,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,R.directionalLength=m,R.pointLength=v,R.spotLength=S,R.rectAreaLength=g,R.hemiLength=u,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=_,R.numSpotMaps=A,R.numLightProbes=T,i.version=IT++)}function l(c,d){let h=0,p=0,m=0,v=0,S=0;const g=d.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){const y=c[u];if(y.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),h++}else if(y.isSpotLight){const _=i.spot[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const _=i.rectArea[v];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),p++}else if(y.isHemisphereLight){const _=i.hemi[S];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:i}}function _0(t){const e=new UT(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function OT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new _0(t),e.set(r,[o])):s>=a.length?(o=new _0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class FT extends Sa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BT extends Sa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HT=`uniform sampler2D shadow_pass;
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
}`;function VT(t,e,n){let i=new Jh;const r=new We,s=new We,a=new wt,o=new FT({depthPacking:_M}),l=new BT,c={},d=n.maxTextureSize,h={[br]:Cn,[Cn]:br,[Oi]:Oi},p=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:zT,fragmentShader:HT}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new Kn;v.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new we(v,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zv;let u=this.type;this.render=function(C,T,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Sr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=u!==Ii&&this.type===Ii,Y=u===Ii&&this.type!==Ii;for(let te=0,q=C.length;te<q;te++){const se=C[te],I=se.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const J=I.getFrameExtents();if(r.multiply(J),s.copy(I.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/J.x),r.x=s.x*J.x,I.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/J.y),r.y=s.y*J.y,I.mapSize.y=s.y)),I.map===null||z===!0||Y===!0){const me=this.type!==Ii?{minFilter:hi,magFilter:hi}:{};I.map!==null&&I.map.dispose(),I.map=new os(r.x,r.y,me),I.map.texture.name=se.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const K=I.getViewportCount();for(let me=0;me<K;me++){const Le=I.getViewport(me);a.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),H.viewport(a),I.updateMatrices(se,me),i=I.getFrustum(),_(T,R,I.camera,se,this.type)}I.isPointLightShadow!==!0&&this.type===Ii&&x(I,R),I.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(E,M,P)};function x(C,T){const R=e.update(S);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new os(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,R,p,S,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,R,m,S,null)}function y(C,T,R,E){let M=null;const P=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=M.uuid,z=T.uuid;let Y=c[H];Y===void 0&&(Y={},c[H]=Y);let te=Y[z];te===void 0&&(te=M.clone(),Y[z]=te,T.addEventListener("dispose",A)),M=te}if(M.visible=T.visible,M.wireframe=T.wireframe,E===Ii?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=t.properties.get(M);H.light=R}return M}function _(C,T,R,E,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Ii)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const z=e.update(C),Y=C.material;if(Array.isArray(Y)){const te=z.groups;for(let q=0,se=te.length;q<se;q++){const I=te[q],J=Y[I.materialIndex];if(J&&J.visible){const K=y(C,J,E,M);C.onBeforeShadow(t,C,T,R,z,K,I),t.renderBufferDirect(R,null,z,K,C,I),C.onAfterShadow(t,C,T,R,z,K,I)}}}else if(Y.visible){const te=y(C,Y,E,M);C.onBeforeShadow(t,C,T,R,z,te,null),t.renderBufferDirect(R,null,z,te,C,null),C.onAfterShadow(t,C,T,R,z,te,null)}}const H=C.children;for(let z=0,Y=H.length;z<Y;z++)_(H[z],T,R,E,M)}function A(C){C.target.removeEventListener("dispose",A);for(const R in c){const E=c[R],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const GT={[of]:lf,[cf]:ff,[uf]:hf,[la]:df,[lf]:of,[ff]:cf,[hf]:uf,[df]:la};function jT(t,e){function n(){let D=!1;const ge=new wt;let j=null;const ne=new wt(0,0,0,0);return{setMask:function(ye){j!==ye&&!D&&(t.colorMask(ye,ye,ye,ye),j=ye)},setLocked:function(ye){D=ye},setClear:function(ye,xe,Xe,Tt,Ot){Ot===!0&&(ye*=Tt,xe*=Tt,Xe*=Tt),ge.set(ye,xe,Xe,Tt),ne.equals(ge)===!1&&(t.clearColor(ye,xe,Xe,Tt),ne.copy(ge))},reset:function(){D=!1,j=null,ne.set(-1,0,0,0)}}}function i(){let D=!1,ge=!1,j=null,ne=null,ye=null;return{setReversed:function(xe){if(ge!==xe){const Xe=e.get("EXT_clip_control");ge?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const Tt=ye;ye=null,this.setClear(Tt)}ge=xe},getReversed:function(){return ge},setTest:function(xe){xe?pe(t.DEPTH_TEST):$e(t.DEPTH_TEST)},setMask:function(xe){j!==xe&&!D&&(t.depthMask(xe),j=xe)},setFunc:function(xe){if(ge&&(xe=GT[xe]),ne!==xe){switch(xe){case of:t.depthFunc(t.NEVER);break;case lf:t.depthFunc(t.ALWAYS);break;case cf:t.depthFunc(t.LESS);break;case la:t.depthFunc(t.LEQUAL);break;case uf:t.depthFunc(t.EQUAL);break;case df:t.depthFunc(t.GEQUAL);break;case ff:t.depthFunc(t.GREATER);break;case hf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=xe}},setLocked:function(xe){D=xe},setClear:function(xe){ye!==xe&&(ge&&(xe=1-xe),t.clearDepth(xe),ye=xe)},reset:function(){D=!1,j=null,ne=null,ye=null,ge=!1}}}function r(){let D=!1,ge=null,j=null,ne=null,ye=null,xe=null,Xe=null,Tt=null,Ot=null;return{setTest:function(mt){D||(mt?pe(t.STENCIL_TEST):$e(t.STENCIL_TEST))},setMask:function(mt){ge!==mt&&!D&&(t.stencilMask(mt),ge=mt)},setFunc:function(mt,Rn,Hn){(j!==mt||ne!==Rn||ye!==Hn)&&(t.stencilFunc(mt,Rn,Hn),j=mt,ne=Rn,ye=Hn)},setOp:function(mt,Rn,Hn){(xe!==mt||Xe!==Rn||Tt!==Hn)&&(t.stencilOp(mt,Rn,Hn),xe=mt,Xe=Rn,Tt=Hn)},setLocked:function(mt){D=mt},setClear:function(mt){Ot!==mt&&(t.clearStencil(mt),Ot=mt)},reset:function(){D=!1,ge=null,j=null,ne=null,ye=null,xe=null,Xe=null,Tt=null,Ot=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},p=new WeakMap,m=[],v=null,S=!1,g=null,u=null,x=null,y=null,_=null,A=null,C=null,T=new dt(0,0,0),R=0,E=!1,M=null,P=null,H=null,z=null,Y=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,se=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(I)[1]),q=se>=1):I.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),q=se>=2);let J=null,K={};const me=t.getParameter(t.SCISSOR_BOX),Le=t.getParameter(t.VIEWPORT),ht=new wt().fromArray(me),X=new wt().fromArray(Le);function fe(D,ge,j,ne){const ye=new Uint8Array(4),xe=t.createTexture();t.bindTexture(D,xe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<j;Xe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(ge+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return xe}const Me={};Me[t.TEXTURE_2D]=fe(t.TEXTURE_2D,t.TEXTURE_2D,1),Me[t.TEXTURE_CUBE_MAP]=fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[t.TEXTURE_2D_ARRAY]=fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Me[t.TEXTURE_3D]=fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),a.setFunc(la),Ze(!1),Ue(Mm),pe(t.CULL_FACE),F(Sr);function pe(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function $e(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Ye(D,ge){return h[D]!==ge?(t.bindFramebuffer(D,ge),h[D]=ge,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ge),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function at(D,ge){let j=m,ne=!1;if(D){j=p.get(ge),j===void 0&&(j=[],p.set(ge,j));const ye=D.textures;if(j.length!==ye.length||j[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,Xe=ye.length;xe<Xe;xe++)j[xe]=t.COLOR_ATTACHMENT0+xe;j.length=ye.length,ne=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,ne=!0);ne&&t.drawBuffers(j)}function St(D){return v!==D?(t.useProgram(D),v=D,!0):!1}const nt={[jr]:t.FUNC_ADD,[$S]:t.FUNC_SUBTRACT,[XS]:t.FUNC_REVERSE_SUBTRACT};nt[qS]=t.MIN,nt[YS]=t.MAX;const At={[KS]:t.ZERO,[ZS]:t.ONE,[QS]:t.SRC_COLOR,[sf]:t.SRC_ALPHA,[rM]:t.SRC_ALPHA_SATURATE,[nM]:t.DST_COLOR,[eM]:t.DST_ALPHA,[JS]:t.ONE_MINUS_SRC_COLOR,[af]:t.ONE_MINUS_SRC_ALPHA,[iM]:t.ONE_MINUS_DST_COLOR,[tM]:t.ONE_MINUS_DST_ALPHA,[sM]:t.CONSTANT_COLOR,[aM]:t.ONE_MINUS_CONSTANT_COLOR,[oM]:t.CONSTANT_ALPHA,[lM]:t.ONE_MINUS_CONSTANT_ALPHA};function F(D,ge,j,ne,ye,xe,Xe,Tt,Ot,mt){if(D===Sr){S===!0&&($e(t.BLEND),S=!1);return}if(S===!1&&(pe(t.BLEND),S=!0),D!==WS){if(D!==g||mt!==E){if((u!==jr||_!==jr)&&(t.blendEquation(t.FUNC_ADD),u=jr,_=jr),mt)switch(D){case Qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Em:t.blendFunc(t.ONE,t.ONE);break;case wm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Em:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case wm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case bm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,y=null,A=null,C=null,T.set(0,0,0),R=0,g=D,E=mt}return}ye=ye||ge,xe=xe||j,Xe=Xe||ne,(ge!==u||ye!==_)&&(t.blendEquationSeparate(nt[ge],nt[ye]),u=ge,_=ye),(j!==x||ne!==y||xe!==A||Xe!==C)&&(t.blendFuncSeparate(At[j],At[ne],At[xe],At[Xe]),x=j,y=ne,A=xe,C=Xe),(Tt.equals(T)===!1||Ot!==R)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Ot),T.copy(Tt),R=Ot),g=D,E=!1}function Bt(D,ge){D.side===Oi?$e(t.CULL_FACE):pe(t.CULL_FACE);let j=D.side===Cn;ge&&(j=!j),Ze(j),D.blending===Qs&&D.transparent===!1?F(Sr):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ne=D.stencilWrite;o.setTest(ne),ne&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),bt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):$e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(D){M!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),M=D)}function Ue(D){D!==GS?(pe(t.CULL_FACE),D!==P&&(D===Mm?t.cullFace(t.BACK):D===jS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):$e(t.CULL_FACE),P=D}function Ae(D){D!==H&&(q&&t.lineWidth(D),H=D)}function bt(D,ge,j){D?(pe(t.POLYGON_OFFSET_FILL),(z!==ge||Y!==j)&&(t.polygonOffset(ge,j),z=ge,Y=j)):$e(t.POLYGON_OFFSET_FILL)}function He(D){D?pe(t.SCISSOR_TEST):$e(t.SCISSOR_TEST)}function N(D){D===void 0&&(D=t.TEXTURE0+te-1),J!==D&&(t.activeTexture(D),J=D)}function w(D,ge,j){j===void 0&&(J===null?j=t.TEXTURE0+te-1:j=J);let ne=K[j];ne===void 0&&(ne={type:void 0,texture:void 0},K[j]=ne),(ne.type!==D||ne.texture!==ge)&&(J!==j&&(t.activeTexture(j),J=j),t.bindTexture(D,ge||Me[D]),ne.type=D,ne.texture=ge)}function B(){const D=K[J];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function L(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(D){ht.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),ht.copy(D))}function he(D){X.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function rt(D,ge){let j=c.get(ge);j===void 0&&(j=new WeakMap,c.set(ge,j));let ne=j.get(D);ne===void 0&&(ne=t.getUniformBlockIndex(ge,D.name),j.set(D,ne))}function je(D,ge){const ne=c.get(ge).get(D);l.get(ge)!==ne&&(t.uniformBlockBinding(ge,ne,D.__bindingPointIndex),l.set(ge,ne))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},J=null,K={},h={},p=new WeakMap,m=[],v=null,S=!1,g=null,u=null,x=null,y=null,_=null,A=null,C=null,T=new dt(0,0,0),R=0,E=!1,M=null,P=null,H=null,z=null,Y=null,ht.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pe,disable:$e,bindFramebuffer:Ye,drawBuffers:at,useProgram:St,setBlending:F,setMaterial:Bt,setFlipSided:Ze,setCullFace:Ue,setLineWidth:Ae,setPolygonOffset:bt,setScissorTest:He,activeTexture:N,bindTexture:w,unbindTexture:B,compressedTexImage2D:ie,compressedTexImage3D:ae,texImage2D:Q,texImage3D:ve,updateUBOMapping:rt,uniformBlockBinding:je,texStorage2D:W,texStorage3D:$,texSubImage2D:Z,texSubImage3D:Ie,compressedTexSubImage2D:oe,compressedTexSubImage3D:L,scissor:_e,viewport:he,reset:ot}}function y0(t,e,n,i){const r=WT(i);switch(n){case sx:return t*e;case ox:return t*e;case lx:return t*e*2;case cx:return t*e/r.components*r.byteLength;case Xh:return t*e/r.components*r.byteLength;case ux:return t*e*2/r.components*r.byteLength;case qh:return t*e*2/r.components*r.byteLength;case ax:return t*e*3/r.components*r.byteLength;case ui:return t*e*4/r.components*r.byteLength;case Yh:return t*e*4/r.components*r.byteLength;case Xl:case ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yl:case Kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _f:case Sf:return Math.max(t,16)*Math.max(e,8)/4;case xf:case yf:return Math.max(t,8)*Math.max(e,8)/2;case Mf:case Ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Af:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case kf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case If:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Of:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Zl:case Bf:case zf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case dx:case Hf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vf:case Gf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function WT(t){switch(t){case qi:case nx:return{byteLength:1,components:1};case Ao:case ix:case Uo:return{byteLength:2,components:1};case Wh:case $h:return{byteLength:2,components:4};case as:case jh:case zi:return{byteLength:4,components:1};case rx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function $T(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,d=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,w){return m?new OffscreenCanvas(N,w):bc("canvas")}function S(N,w,B){let ie=1;const ae=He(N);if((ae.width>B||ae.height>B)&&(ie=B/Math.max(ae.width,ae.height)),ie<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Z=Math.floor(ie*ae.width),Ie=Math.floor(ie*ae.height);h===void 0&&(h=v(Z,Ie));const oe=w?v(Z,Ie):h;return oe.width=Z,oe.height=Ie,oe.getContext("2d").drawImage(N,0,0,Z,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Z+"x"+Ie+")."),oe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),N;return N}function g(N){return N.generateMipmaps}function u(N){t.generateMipmap(N)}function x(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(N,w,B,ie,ae=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Z=w;if(w===t.RED&&(B===t.FLOAT&&(Z=t.R32F),B===t.HALF_FLOAT&&(Z=t.R16F),B===t.UNSIGNED_BYTE&&(Z=t.R8)),w===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.R8UI),B===t.UNSIGNED_SHORT&&(Z=t.R16UI),B===t.UNSIGNED_INT&&(Z=t.R32UI),B===t.BYTE&&(Z=t.R8I),B===t.SHORT&&(Z=t.R16I),B===t.INT&&(Z=t.R32I)),w===t.RG&&(B===t.FLOAT&&(Z=t.RG32F),B===t.HALF_FLOAT&&(Z=t.RG16F),B===t.UNSIGNED_BYTE&&(Z=t.RG8)),w===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RG8UI),B===t.UNSIGNED_SHORT&&(Z=t.RG16UI),B===t.UNSIGNED_INT&&(Z=t.RG32UI),B===t.BYTE&&(Z=t.RG8I),B===t.SHORT&&(Z=t.RG16I),B===t.INT&&(Z=t.RG32I)),w===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),B===t.UNSIGNED_INT&&(Z=t.RGB32UI),B===t.BYTE&&(Z=t.RGB8I),B===t.SHORT&&(Z=t.RGB16I),B===t.INT&&(Z=t.RGB32I)),w===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),B===t.UNSIGNED_INT&&(Z=t.RGBA32UI),B===t.BYTE&&(Z=t.RGBA8I),B===t.SHORT&&(Z=t.RGBA16I),B===t.INT&&(Z=t.RGBA32I)),w===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),w===t.RGBA){const Ie=ae?Xc:gt.getTransfer(ie);B===t.FLOAT&&(Z=t.RGBA32F),B===t.HALF_FLOAT&&(Z=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Z=Ie===Et?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(N,w){let B;return N?w===null||w===as||w===da?B=t.DEPTH24_STENCIL8:w===zi?B=t.DEPTH32F_STENCIL8:w===Ao&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===as||w===da?B=t.DEPTH_COMPONENT24:w===zi?B=t.DEPTH_COMPONENT32F:w===Ao&&(B=t.DEPTH_COMPONENT16),B}function A(N,w){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==hi&&N.minFilter!==Ei?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function C(N){const w=N.target;w.removeEventListener("dispose",C),R(w),w.isVideoTexture&&d.delete(w)}function T(N){const w=N.target;w.removeEventListener("dispose",T),M(w)}function R(N){const w=i.get(N);if(w.__webglInit===void 0)return;const B=N.source,ie=p.get(B);if(ie){const ae=ie[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&E(N),Object.keys(ie).length===0&&p.delete(B)}i.remove(N)}function E(N){const w=i.get(N);t.deleteTexture(w.__webglTexture);const B=N.source,ie=p.get(B);delete ie[w.__cacheKey],a.memory.textures--}function M(N){const w=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(w.__webglFramebuffer[ie]))for(let ae=0;ae<w.__webglFramebuffer[ie].length;ae++)t.deleteFramebuffer(w.__webglFramebuffer[ie][ae]);else t.deleteFramebuffer(w.__webglFramebuffer[ie]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[ie])}else{if(Array.isArray(w.__webglFramebuffer))for(let ie=0;ie<w.__webglFramebuffer.length;ie++)t.deleteFramebuffer(w.__webglFramebuffer[ie]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ie=0;ie<w.__webglColorRenderbuffer.length;ie++)w.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[ie]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const B=N.textures;for(let ie=0,ae=B.length;ie<ae;ie++){const Z=i.get(B[ie]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(B[ie])}i.remove(N)}let P=0;function H(){P=0}function z(){const N=P;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),P+=1,N}function Y(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function te(N,w){const B=i.get(N);if(N.isVideoTexture&&Ae(N),N.isRenderTargetTexture===!1&&N.version>0&&B.__version!==N.version){const ie=N.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,N,w);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+w)}function q(N,w){const B=i.get(N);if(N.version>0&&B.__version!==N.version){X(B,N,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+w)}function se(N,w){const B=i.get(N);if(N.version>0&&B.__version!==N.version){X(B,N,w);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+w)}function I(N,w){const B=i.get(N);if(N.version>0&&B.__version!==N.version){fe(B,N,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+w)}const J={[gf]:t.REPEAT,[Yr]:t.CLAMP_TO_EDGE,[vf]:t.MIRRORED_REPEAT},K={[hi]:t.NEAREST,[vM]:t.NEAREST_MIPMAP_NEAREST,[ll]:t.NEAREST_MIPMAP_LINEAR,[Ei]:t.LINEAR,[Au]:t.LINEAR_MIPMAP_NEAREST,[Kr]:t.LINEAR_MIPMAP_LINEAR},me={[SM]:t.NEVER,[CM]:t.ALWAYS,[MM]:t.LESS,[hx]:t.LEQUAL,[EM]:t.EQUAL,[TM]:t.GEQUAL,[wM]:t.GREATER,[bM]:t.NOTEQUAL};function Le(N,w){if(w.type===zi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ei||w.magFilter===Au||w.magFilter===ll||w.magFilter===Kr||w.minFilter===Ei||w.minFilter===Au||w.minFilter===ll||w.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,J[w.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,J[w.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,J[w.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,K[w.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,K[w.minFilter]),w.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,me[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===hi||w.minFilter!==ll&&w.minFilter!==Kr||w.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ht(N,w){let B=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",C));const ie=w.source;let ae=p.get(ie);ae===void 0&&(ae={},p.set(ie,ae));const Z=Y(w);if(Z!==N.__cacheKey){ae[Z]===void 0&&(ae[Z]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ae[Z].usedTimes++;const Ie=ae[N.__cacheKey];Ie!==void 0&&(ae[N.__cacheKey].usedTimes--,Ie.usedTimes===0&&E(w)),N.__cacheKey=Z,N.__webglTexture=ae[Z].texture}return B}function X(N,w,B){let ie=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=t.TEXTURE_3D);const ae=ht(N,w),Z=w.source;n.bindTexture(ie,N.__webglTexture,t.TEXTURE0+B);const Ie=i.get(Z);if(Z.version!==Ie.__version||ae===!0){n.activeTexture(t.TEXTURE0+B);const oe=gt.getPrimaries(gt.workingColorSpace),L=w.colorSpace===cr?null:gt.getPrimaries(w.colorSpace),W=w.colorSpace===cr||oe===L?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);let $=S(w.image,!1,r.maxTextureSize);$=bt(w,$);const Q=s.convert(w.format,w.colorSpace),ve=s.convert(w.type);let _e=y(w.internalFormat,Q,ve,w.colorSpace,w.isVideoTexture);Le(ie,w);let he;const rt=w.mipmaps,je=w.isVideoTexture!==!0,ot=Ie.__version===void 0||ae===!0,D=Z.dataReady,ge=A(w,$);if(w.isDepthTexture)_e=_(w.format===fa,w.type),ot&&(je?n.texStorage2D(t.TEXTURE_2D,1,_e,$.width,$.height):n.texImage2D(t.TEXTURE_2D,0,_e,$.width,$.height,0,Q,ve,null));else if(w.isDataTexture)if(rt.length>0){je&&ot&&n.texStorage2D(t.TEXTURE_2D,ge,_e,rt[0].width,rt[0].height);for(let j=0,ne=rt.length;j<ne;j++)he=rt[j],je?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,he.width,he.height,Q,ve,he.data):n.texImage2D(t.TEXTURE_2D,j,_e,he.width,he.height,0,Q,ve,he.data);w.generateMipmaps=!1}else je?(ot&&n.texStorage2D(t.TEXTURE_2D,ge,_e,$.width,$.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,$.width,$.height,Q,ve,$.data)):n.texImage2D(t.TEXTURE_2D,0,_e,$.width,$.height,0,Q,ve,$.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){je&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,_e,rt[0].width,rt[0].height,$.depth);for(let j=0,ne=rt.length;j<ne;j++)if(he=rt[j],w.format!==ui)if(Q!==null)if(je){if(D)if(w.layerUpdates.size>0){const ye=y0(he.width,he.height,w.format,w.type);for(const xe of w.layerUpdates){const Xe=he.data.subarray(xe*ye/he.data.BYTES_PER_ELEMENT,(xe+1)*ye/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,xe,he.width,he.height,1,Q,Xe)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,$.depth,Q,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,_e,he.width,he.height,$.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,$.depth,Q,ve,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,_e,he.width,he.height,$.depth,0,Q,ve,he.data)}else{je&&ot&&n.texStorage2D(t.TEXTURE_2D,ge,_e,rt[0].width,rt[0].height);for(let j=0,ne=rt.length;j<ne;j++)he=rt[j],w.format!==ui?Q!==null?je?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,he.width,he.height,Q,he.data):n.compressedTexImage2D(t.TEXTURE_2D,j,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,he.width,he.height,Q,ve,he.data):n.texImage2D(t.TEXTURE_2D,j,_e,he.width,he.height,0,Q,ve,he.data)}else if(w.isDataArrayTexture)if(je){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,_e,$.width,$.height,$.depth),D)if(w.layerUpdates.size>0){const j=y0($.width,$.height,w.format,w.type);for(const ne of w.layerUpdates){const ye=$.data.subarray(ne*j/$.data.BYTES_PER_ELEMENT,(ne+1)*j/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,$.width,$.height,1,Q,ve,ye)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Q,ve,$.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,_e,$.width,$.height,$.depth,0,Q,ve,$.data);else if(w.isData3DTexture)je?(ot&&n.texStorage3D(t.TEXTURE_3D,ge,_e,$.width,$.height,$.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Q,ve,$.data)):n.texImage3D(t.TEXTURE_3D,0,_e,$.width,$.height,$.depth,0,Q,ve,$.data);else if(w.isFramebufferTexture){if(ot)if(je)n.texStorage2D(t.TEXTURE_2D,ge,_e,$.width,$.height);else{let j=$.width,ne=$.height;for(let ye=0;ye<ge;ye++)n.texImage2D(t.TEXTURE_2D,ye,_e,j,ne,0,Q,ve,null),j>>=1,ne>>=1}}else if(rt.length>0){if(je&&ot){const j=He(rt[0]);n.texStorage2D(t.TEXTURE_2D,ge,_e,j.width,j.height)}for(let j=0,ne=rt.length;j<ne;j++)he=rt[j],je?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,Q,ve,he):n.texImage2D(t.TEXTURE_2D,j,_e,Q,ve,he);w.generateMipmaps=!1}else if(je){if(ot){const j=He($);n.texStorage2D(t.TEXTURE_2D,ge,_e,j.width,j.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q,ve,$)}else n.texImage2D(t.TEXTURE_2D,0,_e,Q,ve,$);g(w)&&u(ie),Ie.__version=Z.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function fe(N,w,B){if(w.image.length!==6)return;const ie=ht(N,w),ae=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+B);const Z=i.get(ae);if(ae.version!==Z.__version||ie===!0){n.activeTexture(t.TEXTURE0+B);const Ie=gt.getPrimaries(gt.workingColorSpace),oe=w.colorSpace===cr?null:gt.getPrimaries(w.colorSpace),L=w.colorSpace===cr||Ie===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);const W=w.isCompressedTexture||w.image[0].isCompressedTexture,$=w.image[0]&&w.image[0].isDataTexture,Q=[];for(let ne=0;ne<6;ne++)!W&&!$?Q[ne]=S(w.image[ne],!0,r.maxCubemapSize):Q[ne]=$?w.image[ne].image:w.image[ne],Q[ne]=bt(w,Q[ne]);const ve=Q[0],_e=s.convert(w.format,w.colorSpace),he=s.convert(w.type),rt=y(w.internalFormat,_e,he,w.colorSpace),je=w.isVideoTexture!==!0,ot=Z.__version===void 0||ie===!0,D=ae.dataReady;let ge=A(w,ve);Le(t.TEXTURE_CUBE_MAP,w);let j;if(W){je&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,rt,ve.width,ve.height);for(let ne=0;ne<6;ne++){j=Q[ne].mipmaps;for(let ye=0;ye<j.length;ye++){const xe=j[ye];w.format!==ui?_e!==null?je?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,xe.width,xe.height,_e,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,rt,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,xe.width,xe.height,_e,he,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,rt,xe.width,xe.height,0,_e,he,xe.data)}}}else{if(j=w.mipmaps,je&&ot){j.length>0&&ge++;const ne=He(Q[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,rt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if($){je?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Q[ne].width,Q[ne].height,_e,he,Q[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,rt,Q[ne].width,Q[ne].height,0,_e,he,Q[ne].data);for(let ye=0;ye<j.length;ye++){const Xe=j[ye].image[ne].image;je?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,Xe.width,Xe.height,_e,he,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,rt,Xe.width,Xe.height,0,_e,he,Xe.data)}}else{je?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,_e,he,Q[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,rt,_e,he,Q[ne]);for(let ye=0;ye<j.length;ye++){const xe=j[ye];je?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,_e,he,xe.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,rt,_e,he,xe.image[ne])}}}g(w)&&u(t.TEXTURE_CUBE_MAP),Z.__version=ae.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Me(N,w,B,ie,ae,Z){const Ie=s.convert(B.format,B.colorSpace),oe=s.convert(B.type),L=y(B.internalFormat,Ie,oe,B.colorSpace),W=i.get(w),$=i.get(B);if($.__renderTarget=w,!W.__hasExternalTextures){const Q=Math.max(1,w.width>>Z),ve=Math.max(1,w.height>>Z);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,Z,L,Q,ve,w.depth,0,Ie,oe,null):n.texImage2D(ae,Z,L,Q,ve,0,Ie,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),Ue(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ae,$.__webglTexture,0,Ze(w)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ae,$.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(N,w,B){if(t.bindRenderbuffer(t.RENDERBUFFER,N),w.depthBuffer){const ie=w.depthTexture,ae=ie&&ie.isDepthTexture?ie.type:null,Z=_(w.stencilBuffer,ae),Ie=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=Ze(w);Ue(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,Z,w.width,w.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,Z,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Z,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,N)}else{const ie=w.textures;for(let ae=0;ae<ie.length;ae++){const Z=ie[ae],Ie=s.convert(Z.format,Z.colorSpace),oe=s.convert(Z.type),L=y(Z.internalFormat,Ie,oe,Z.colorSpace),W=Ze(w);B&&Ue(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,W,L,w.width,w.height):Ue(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,W,L,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,L,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function $e(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(w.depthTexture);ie.__renderTarget=w,(!ie.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),te(w.depthTexture,0);const ae=ie.__webglTexture,Z=Ze(w);if(w.depthTexture.format===Js)Ue(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(w.depthTexture.format===fa)Ue(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ye(N){const w=i.get(N),B=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const ie=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ie){const ae=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ie.removeEventListener("dispose",ae)};ie.addEventListener("dispose",ae),w.__depthDisposeCallback=ae}w.__boundDepthTexture=ie}if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");$e(w.__webglFramebuffer,N)}else if(B){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]===void 0)w.__webglDepthbuffer[ie]=t.createRenderbuffer(),pe(w.__webglDepthbuffer[ie],N,!1);else{const ae=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[ie];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,Z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),pe(w.__webglDepthbuffer,N,!1);else{const ie=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ae)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function at(N,w,B){const ie=i.get(N);w!==void 0&&Me(ie.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ye(N)}function St(N){const w=N.texture,B=i.get(N),ie=i.get(w);N.addEventListener("dispose",T);const ae=N.textures,Z=N.isWebGLCubeRenderTarget===!0,Ie=ae.length>1;if(Ie||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=w.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let L=0;L<w.mipmaps.length;L++)B.__webglFramebuffer[oe][L]=t.createFramebuffer()}else B.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<w.mipmaps.length;oe++)B.__webglFramebuffer[oe]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let oe=0,L=ae.length;oe<L;oe++){const W=i.get(ae[oe]);W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&Ue(N)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<ae.length;oe++){const L=ae[oe];B.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);const W=s.convert(L.format,L.colorSpace),$=s.convert(L.type),Q=y(L.internalFormat,W,$,L.colorSpace,N.isXRRenderTarget===!0),ve=Ze(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Q,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(B.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Le(t.TEXTURE_CUBE_MAP,w);for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0)for(let L=0;L<w.mipmaps.length;L++)Me(B.__webglFramebuffer[oe][L],N,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,L);else Me(B.__webglFramebuffer[oe],N,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(w)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let oe=0,L=ae.length;oe<L;oe++){const W=ae[oe],$=i.get(W);n.bindTexture(t.TEXTURE_2D,$.__webglTexture),Le(t.TEXTURE_2D,W),Me(B.__webglFramebuffer,N,W,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),g(W)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(oe=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,ie.__webglTexture),Le(oe,w),w.mipmaps&&w.mipmaps.length>0)for(let L=0;L<w.mipmaps.length;L++)Me(B.__webglFramebuffer[L],N,w,t.COLOR_ATTACHMENT0,oe,L);else Me(B.__webglFramebuffer,N,w,t.COLOR_ATTACHMENT0,oe,0);g(w)&&u(oe),n.unbindTexture()}N.depthBuffer&&Ye(N)}function nt(N){const w=N.textures;for(let B=0,ie=w.length;B<ie;B++){const ae=w[B];if(g(ae)){const Z=x(N),Ie=i.get(ae).__webglTexture;n.bindTexture(Z,Ie),u(Z),n.unbindTexture()}}}const At=[],F=[];function Bt(N){if(N.samples>0){if(Ue(N)===!1){const w=N.textures,B=N.width,ie=N.height;let ae=t.COLOR_BUFFER_BIT;const Z=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(N),oe=w.length>1;if(oe)for(let L=0;L<w.length;L++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let L=0;L<w.length;L++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[L]);const W=i.get(w[L]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,W,0)}t.blitFramebuffer(0,0,B,ie,0,0,B,ie,ae,t.NEAREST),l===!0&&(At.length=0,F.length=0,At.push(t.COLOR_ATTACHMENT0+L),N.depthBuffer&&N.resolveDepthBuffer===!1&&(At.push(Z),F.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,F)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,At))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let L=0;L<w.length;L++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[L]);const W=i.get(w[L]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.TEXTURE_2D,W,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const w=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Ze(N){return Math.min(r.maxSamples,N.samples)}function Ue(N){const w=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ae(N){const w=a.render.frame;d.get(N)!==w&&(d.set(N,w),N.update())}function bt(N,w){const B=N.colorSpace,ie=N.format,ae=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||B!==xa&&B!==cr&&(gt.getTransfer(B)===Et?(ie!==ui||ae!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}function He(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=te,this.setTexture2DArray=q,this.setTexture3D=se,this.setTextureCube=I,this.rebindTextures=at,this.setupRenderTarget=St,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ue}function XT(t,e){function n(i,r=cr){let s;const a=gt.getTransfer(r);if(i===qi)return t.UNSIGNED_BYTE;if(i===Wh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$h)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===nx)return t.BYTE;if(i===ix)return t.SHORT;if(i===Ao)return t.UNSIGNED_SHORT;if(i===jh)return t.INT;if(i===as)return t.UNSIGNED_INT;if(i===zi)return t.FLOAT;if(i===Uo)return t.HALF_FLOAT;if(i===sx)return t.ALPHA;if(i===ax)return t.RGB;if(i===ui)return t.RGBA;if(i===ox)return t.LUMINANCE;if(i===lx)return t.LUMINANCE_ALPHA;if(i===Js)return t.DEPTH_COMPONENT;if(i===fa)return t.DEPTH_STENCIL;if(i===cx)return t.RED;if(i===Xh)return t.RED_INTEGER;if(i===ux)return t.RG;if(i===qh)return t.RG_INTEGER;if(i===Yh)return t.RGBA_INTEGER;if(i===Xl||i===ql||i===Yl||i===Kl)if(a===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Kl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xf||i===_f||i===yf||i===Sf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_f)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mf||i===Ef||i===wf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mf||i===Ef)return a===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bf||i===Tf||i===Cf||i===Af||i===Rf||i===Nf||i===Pf||i===Lf||i===kf||i===If||i===Df||i===Uf||i===Of||i===Ff)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Af)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===If)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Df)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uf)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Of)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ff)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zl||i===Bf||i===zf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zl)return a===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dx||i===Hf||i===Vf||i===Gf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===da?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class qT extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fr extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YT={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),u=this._getHandJoint(c,S);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&p>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(YT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const KT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZT=`
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

}`;class QT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new An,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Tr({vertexShader:KT,fragmentShader:ZT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new we(new oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JT extends _a{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,p=null,m=null,v=null;const S=new QT,g=n.getContextAttributes();let u=null,x=null;const y=[],_=[],A=new We;let C=null;const T=new Dn;T.viewport=new wt;const R=new Dn;R.viewport=new wt;const E=[T,R],M=new qT;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let fe=y[X];return fe===void 0&&(fe=new td,y[X]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(X){let fe=y[X];return fe===void 0&&(fe=new td,y[X]=fe),fe.getGripSpace()},this.getHand=function(X){let fe=y[X];return fe===void 0&&(fe=new td,y[X]=fe),fe.getHandSpace()};function z(X){const fe=_.indexOf(X.inputSource);if(fe===-1)return;const Me=y[fe];Me!==void 0&&(Me.update(X.inputSource,X.frame,c||a),Me.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",te);for(let X=0;X<y.length;X++){const fe=_[X];fe!==null&&(_[X]=null,y[X].disconnect(fe))}P=null,H=null,S.reset(),e.setRenderTarget(u),m=null,p=null,h=null,r=null,x=null,ht.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",te),g.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const fe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,fe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new os(m.framebufferWidth,m.framebufferHeight,{format:ui,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let fe=null,Me=null,pe=null;g.depth&&(pe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=g.stencil?fa:Js,Me=g.stencil?da:as);const $e={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(r,n),p=h.createProjectionLayer($e),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new os(p.textureWidth,p.textureHeight,{format:ui,type:qi,depthTexture:new wx(p.textureWidth,p.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ht.setContext(r),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function te(X){for(let fe=0;fe<X.removed.length;fe++){const Me=X.removed[fe],pe=_.indexOf(Me);pe>=0&&(_[pe]=null,y[pe].disconnect(Me))}for(let fe=0;fe<X.added.length;fe++){const Me=X.added[fe];let pe=_.indexOf(Me);if(pe===-1){for(let Ye=0;Ye<y.length;Ye++)if(Ye>=_.length){_.push(Me),pe=Ye;break}else if(_[Ye]===null){_[Ye]=Me,pe=Ye;break}if(pe===-1)break}const $e=y[pe];$e&&$e.connect(Me)}}const q=new k,se=new k;function I(X,fe,Me){q.setFromMatrixPosition(fe.matrixWorld),se.setFromMatrixPosition(Me.matrixWorld);const pe=q.distanceTo(se),$e=fe.projectionMatrix.elements,Ye=Me.projectionMatrix.elements,at=$e[14]/($e[10]-1),St=$e[14]/($e[10]+1),nt=($e[9]+1)/$e[5],At=($e[9]-1)/$e[5],F=($e[8]-1)/$e[0],Bt=(Ye[8]+1)/Ye[0],Ze=at*F,Ue=at*Bt,Ae=pe/(-F+Bt),bt=Ae*-F;if(fe.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(bt),X.translateZ(Ae),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),$e[10]===-1)X.projectionMatrix.copy(fe.projectionMatrix),X.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const He=at+Ae,N=St+Ae,w=Ze-bt,B=Ue+(pe-bt),ie=nt*St/N*He,ae=At*St/N*He;X.projectionMatrix.makePerspective(w,B,ie,ae,He,N),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function J(X,fe){fe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(fe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let fe=X.near,Me=X.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(Me=S.depthFar)),M.near=R.near=T.near=fe,M.far=R.far=T.far=Me,(P!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,H=M.far),T.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;const pe=X.parent,$e=M.cameras;J(M,pe);for(let Ye=0;Ye<$e.length;Ye++)J($e[Ye],pe);$e.length===2?I(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),K(X,M,pe)};function K(X,fe,Me){Me===null?X.matrix.copy(fe.matrixWorld):(X.matrix.copy(Me.matrixWorld),X.matrix.invert(),X.matrix.multiply(fe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(fe.projectionMatrix),X.projectionMatrixInverse.copy(fe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ro*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(M)};let me=null;function Le(X,fe){if(d=fe.getViewerPose(c||a),v=fe,d!==null){const Me=d.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let pe=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let Ye=0;Ye<Me.length;Ye++){const at=Me[Ye];let St=null;if(m!==null)St=m.getViewport(at);else{const At=h.getViewSubImage(p,at);St=At.viewport,Ye===0&&(e.setRenderTargetTextures(x,At.colorTexture,p.ignoreDepthValues?void 0:At.depthStencilTexture),e.setRenderTarget(x))}let nt=E[Ye];nt===void 0&&(nt=new Dn,nt.layers.enable(Ye),nt.viewport=new wt,E[Ye]=nt),nt.matrix.fromArray(at.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(at.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(St.x,St.y,St.width,St.height),Ye===0&&(M.matrix.copy(nt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(nt)}const $e=r.enabledFeatures;if($e&&$e.includes("depth-sensing")){const Ye=h.getDepthInformation(Me[0]);Ye&&Ye.isValid&&Ye.texture&&S.init(e,Ye,r.renderState)}}for(let Me=0;Me<y.length;Me++){const pe=_[Me],$e=y[Me];pe!==null&&$e!==void 0&&$e.update(pe,fe,c||a)}me&&me(X,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),v=null}const ht=new Ex;ht.setAnimationLoop(Le),this.setAnimationLoop=function(X){me=X},this.dispose=function(){}}}const Fr=new Ci,eC=new Nt;function tC(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,yx(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,x,y,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),h(g,u)):u.isMeshPhongMaterial?(s(g,u),d(g,u)):u.isMeshStandardMaterial?(s(g,u),p(g,u),u.isMeshPhysicalMaterial&&m(g,u,_)):u.isMeshMatcapMaterial?(s(g,u),v(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),S(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,x,y):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Cn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Cn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const x=e.get(u),y=x.envMap,_=x.envMapRotation;y&&(g.envMap.value=y,Fr.copy(_),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),g.envMapRotation.value.setFromMatrix4(eC.makeRotationFromEuler(Fr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,x,y){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*x,g.scale.value=y*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function h(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function p(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,x){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Cn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,u){u.matcap&&(g.matcap.value=u.matcap)}function S(g,u){const x=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const _=y.program;i.uniformBlockBinding(x,_)}function c(x,y){let _=r[x.id];_===void 0&&(v(x),_=d(x),r[x.id]=_,x.addEventListener("dispose",g));const A=y.program;i.updateUBOMapping(x,A);const C=e.render.frame;s[x.id]!==C&&(p(x),s[x.id]=C)}function d(x){const y=h();x.__bindingPointIndex=y;const _=t.createBuffer(),A=x.__size,C=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,_),_}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const y=r[x.id],_=x.uniforms,A=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let C=0,T=_.length;C<T;C++){const R=Array.isArray(_[C])?_[C]:[_[C]];for(let E=0,M=R.length;E<M;E++){const P=R[E];if(m(P,C,E,A)===!0){const H=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let te=0;te<z.length;te++){const q=z[te],se=S(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,H+Y,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,Y),Y+=se.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(x,y,_,A){const C=x.value,T=y+"_"+_;if(A[T]===void 0)return typeof C=="number"||typeof C=="boolean"?A[T]=C:A[T]=C.clone(),!0;{const R=A[T];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return A[T]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function v(x){const y=x.uniforms;let _=0;const A=16;for(let T=0,R=y.length;T<R;T++){const E=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,P=E.length;M<P;M++){const H=E[M],z=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,te=z.length;Y<te;Y++){const q=z[Y],se=S(q),I=_%A,J=I%se.boundary,K=I+J;_+=J,K!==0&&A-K<se.storage&&(_+=A-K),H.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=se.storage}}}const C=_%A;return C>0&&(_+=A-C),x.__size=_,x.__cache={},this}function S(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class iC{constructor(e={}){const{canvas:n=jM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),S=new Int32Array(4);let g=null,u=null;const x=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=In,this.toneMapping=Mr,this.toneMappingExposure=1;const _=this;let A=!1,C=0,T=0,R=null,E=-1,M=null;const P=new wt,H=new wt;let z=null;const Y=new dt(0);let te=0,q=n.width,se=n.height,I=1,J=null,K=null;const me=new wt(0,0,q,se),Le=new wt(0,0,q,se);let ht=!1;const X=new Jh;let fe=!1,Me=!1;const pe=new Nt,$e=new Nt,Ye=new k,at=new wt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function At(){return R===null?I:1}let F=i;function Bt(b,O){return n.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gh}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",xe,!1),F===null){const O="webgl2";if(F=Bt(O,b),F===null)throw Bt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ze,Ue,Ae,bt,He,N,w,B,ie,ae,Z,Ie,oe,L,W,$,Q,ve,_e,he,rt,je,ot,D;function ge(){Ze=new lb(F),Ze.init(),je=new XT(F,Ze),Ue=new tb(F,Ze,e,je),Ae=new jT(F,Ze),Ue.reverseDepthBuffer&&p&&Ae.buffers.depth.setReversed(!0),bt=new db(F),He=new RT,N=new $T(F,Ze,Ae,He,Ue,je,bt),w=new ib(_),B=new ob(_),ie=new vE(F),ot=new J2(F,ie),ae=new cb(F,ie,bt,ot),Z=new hb(F,ae,ie,bt),_e=new fb(F,Ue,N),$=new nb(He),Ie=new AT(_,w,B,Ze,Ue,ot,$),oe=new tC(_,He),L=new PT,W=new OT(Ze),ve=new Q2(_,w,B,Ae,Z,m,l),Q=new VT(_,Z,Ue),D=new nC(F,bt,Ue,Ae),he=new eb(F,Ze,bt),rt=new ub(F,Ze,bt),bt.programs=Ie.programs,_.capabilities=Ue,_.extensions=Ze,_.properties=He,_.renderLists=L,_.shadowMap=Q,_.state=Ae,_.info=bt}ge();const j=new JT(_,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Ze.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ze.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(b){b!==void 0&&(I=b,this.setSize(q,se,!1))},this.getSize=function(b){return b.set(q,se)},this.setSize=function(b,O,V=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,se=O,n.width=Math.floor(b*I),n.height=Math.floor(O*I),V===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(q*I,se*I).floor()},this.setDrawingBufferSize=function(b,O,V){q=b,se=O,I=V,n.width=Math.floor(b*V),n.height=Math.floor(O*V),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(me)},this.setViewport=function(b,O,V,G){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,O,V,G),Ae.viewport(P.copy(me).multiplyScalar(I).round())},this.getScissor=function(b){return b.copy(Le)},this.setScissor=function(b,O,V,G){b.isVector4?Le.set(b.x,b.y,b.z,b.w):Le.set(b,O,V,G),Ae.scissor(H.copy(Le).multiplyScalar(I).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(b){Ae.setScissorTest(ht=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){K=b},this.getClearColor=function(b){return b.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(b=!0,O=!0,V=!0){let G=0;if(b){let U=!1;if(R!==null){const ue=R.texture.format;U=ue===Yh||ue===qh||ue===Xh}if(U){const ue=R.texture.type,Ee=ue===qi||ue===as||ue===Ao||ue===da||ue===Wh||ue===$h,Ne=ve.getClearColor(),Re=ve.getClearAlpha(),qe=Ne.r,Qe=Ne.g,Pe=Ne.b;Ee?(v[0]=qe,v[1]=Qe,v[2]=Pe,v[3]=Re,F.clearBufferuiv(F.COLOR,0,v)):(S[0]=qe,S[1]=Qe,S[2]=Pe,S[3]=Re,F.clearBufferiv(F.COLOR,0,S))}else G|=F.COLOR_BUFFER_BIT}O&&(G|=F.DEPTH_BUFFER_BIT),V&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),L.dispose(),W.dispose(),He.dispose(),w.dispose(),B.dispose(),Z.dispose(),ot.dispose(),D.dispose(),Ie.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ea),j.removeEventListener("sessionend",us),mi.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=bt.autoReset,O=Q.enabled,V=Q.autoUpdate,G=Q.needsUpdate,U=Q.type;ge(),bt.autoReset=b,Q.enabled=O,Q.autoUpdate=V,Q.needsUpdate=G,Q.type=U}function xe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xe(b){const O=b.target;O.removeEventListener("dispose",Xe),Tt(O)}function Tt(b){Ot(b),He.remove(b)}function Ot(b){const O=He.get(b).programs;O!==void 0&&(O.forEach(function(V){Ie.releaseProgram(V)}),b.isShaderMaterial&&Ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,V,G,U,ue){O===null&&(O=St);const Ee=U.isMesh&&U.matrixWorld.determinant()<0,Ne=Zc(b,O,V,G,U);Ae.setMaterial(G,Ee);let Re=V.index,qe=1;if(G.wireframe===!0){if(Re=ae.getWireframeAttribute(V),Re===void 0)return;qe=2}const Qe=V.drawRange,Pe=V.attributes.position;let pt=Qe.start*qe,_t=(Qe.start+Qe.count)*qe;ue!==null&&(pt=Math.max(pt,ue.start*qe),_t=Math.min(_t,(ue.start+ue.count)*qe)),Re!==null?(pt=Math.max(pt,0),_t=Math.min(_t,Re.count)):Pe!=null&&(pt=Math.max(pt,0),_t=Math.min(_t,Pe.count));const Mt=_t-pt;if(Mt<0||Mt===1/0)return;ot.setup(U,G,Ne,V,Re);let tn,xt=he;if(Re!==null&&(tn=ie.get(Re),xt=rt,xt.setIndex(tn)),U.isMesh)G.wireframe===!0?(Ae.setLineWidth(G.wireframeLinewidth*At()),xt.setMode(F.LINES)):xt.setMode(F.TRIANGLES);else if(U.isLine){let ke=G.linewidth;ke===void 0&&(ke=1),Ae.setLineWidth(ke*At()),U.isLineSegments?xt.setMode(F.LINES):U.isLineLoop?xt.setMode(F.LINE_LOOP):xt.setMode(F.LINE_STRIP)}else U.isPoints?xt.setMode(F.POINTS):U.isSprite&&xt.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)xt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))xt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ke=U._multiDrawStarts,Vn=U._multiDrawCounts,re=U._multiDrawCount,le=Re?ie.get(Re).bytesPerElement:1,ze=He.get(G).currentProgram.getUniforms();for(let be=0;be<re;be++)ze.setValue(F,"_gl_DrawID",be),xt.render(ke[be]/le,Vn[be])}else if(U.isInstancedMesh)xt.renderInstances(pt,Mt,U.count);else if(V.isInstancedBufferGeometry){const ke=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Vn=Math.min(V.instanceCount,ke);xt.renderInstances(pt,Mt,Vn)}else xt.render(pt,Mt)};function mt(b,O,V){b.transparent===!0&&b.side===Oi&&b.forceSinglePass===!1?(b.side=Cn,b.needsUpdate=!0,Zi(b,O,V),b.side=br,b.needsUpdate=!0,Zi(b,O,V),b.side=Oi):Zi(b,O,V)}this.compile=function(b,O,V=null){V===null&&(V=b),u=W.get(V),u.init(O),y.push(u),V.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),b!==V&&b.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const G=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ue=U.material;if(ue)if(Array.isArray(ue))for(let Ee=0;Ee<ue.length;Ee++){const Ne=ue[Ee];mt(Ne,V,U),G.add(Ne)}else mt(ue,V,U),G.add(ue)}),y.pop(),u=null,G},this.compileAsync=function(b,O,V=null){const G=this.compile(b,O,V);return new Promise(U=>{function ue(){if(G.forEach(function(Ee){He.get(Ee).currentProgram.isReady()&&G.delete(Ee)}),G.size===0){U(b);return}setTimeout(ue,10)}Ze.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Rn=null;function Hn(b){Rn&&Rn(b)}function Ea(){mi.stop()}function us(){mi.start()}const mi=new Ex;mi.setAnimationLoop(Hn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(b){Rn=b,j.setAnimationLoop(b),b===null?mi.stop():mi.start()},j.addEventListener("sessionstart",Ea),j.addEventListener("sessionend",us),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(O),O=j.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,O,R),u=W.get(b,y.length),u.init(O),y.push(u),$e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix($e),Me=this.localClippingEnabled,fe=$.init(this.clippingPlanes,Me),g=L.get(b,x.length),g.init(),x.push(g),j.enabled===!0&&j.isPresenting===!0){const ue=_.xr.getDepthSensingMesh();ue!==null&&ds(ue,O,-1/0,_.sortObjects)}ds(b,O,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(J,K),nt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,nt&&ve.addToRenderList(g,b),this.info.render.frame++,fe===!0&&$.beginShadows();const V=u.state.shadowsArray;Q.render(V,b,O),fe===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,U=g.transmissive;if(u.setupLights(),O.isArrayCamera){const ue=O.cameras;if(U.length>0)for(let Ee=0,Ne=ue.length;Ee<Ne;Ee++){const Re=ue[Ee];ba(G,U,b,Re)}nt&&ve.render(b);for(let Ee=0,Ne=ue.length;Ee<Ne;Ee++){const Re=ue[Ee];wa(g,b,Re,Re.viewport)}}else U.length>0&&ba(G,U,b,O),nt&&ve.render(b),wa(g,b,O);R!==null&&(N.updateMultisampleRenderTarget(R),N.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(_,b,O),ot.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(u=y[y.length-1],fe===!0&&$.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function ds(b,O,V,G){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){G&&at.setFromMatrixPosition(b.matrixWorld).applyMatrix4($e);const Ee=Z.update(b),Ne=b.material;Ne.visible&&g.push(b,Ee,Ne,V,at.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){const Ee=Z.update(b),Ne=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),at.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),at.copy(Ee.boundingSphere.center)),at.applyMatrix4(b.matrixWorld).applyMatrix4($e)),Array.isArray(Ne)){const Re=Ee.groups;for(let qe=0,Qe=Re.length;qe<Qe;qe++){const Pe=Re[qe],pt=Ne[Pe.materialIndex];pt&&pt.visible&&g.push(b,Ee,pt,V,at.z,Pe)}}else Ne.visible&&g.push(b,Ee,Ne,V,at.z,null)}}const ue=b.children;for(let Ee=0,Ne=ue.length;Ee<Ne;Ee++)ds(ue[Ee],O,V,G)}function wa(b,O,V,G){const U=b.opaque,ue=b.transmissive,Ee=b.transparent;u.setupLightsView(V),fe===!0&&$.setGlobalState(_.clippingPlanes,V),G&&Ae.viewport(P.copy(G)),U.length>0&&mn(U,O,V),ue.length>0&&mn(ue,O,V),Ee.length>0&&mn(Ee,O,V),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function ba(b,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new os(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Uo:qi,minFilter:Kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const ue=u.state.transmissionRenderTarget[G.id],Ee=G.viewport||P;ue.setSize(Ee.z,Ee.w);const Ne=_.getRenderTarget();_.setRenderTarget(ue),_.getClearColor(Y),te=_.getClearAlpha(),te<1&&_.setClearColor(16777215,.5),_.clear(),nt&&ve.render(V);const Re=_.toneMapping;_.toneMapping=Mr;const qe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),fe===!0&&$.setGlobalState(_.clippingPlanes,G),mn(b,V,G),N.updateMultisampleRenderTarget(ue),N.updateRenderTargetMipmap(ue),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Pe=0,pt=O.length;Pe<pt;Pe++){const _t=O[Pe],Mt=_t.object,tn=_t.geometry,xt=_t.material,ke=_t.group;if(xt.side===Oi&&Mt.layers.test(G.layers)){const Vn=xt.side;xt.side=Cn,xt.needsUpdate=!0,Zn(Mt,V,G,tn,xt,ke),xt.side=Vn,xt.needsUpdate=!0,Qe=!0}}Qe===!0&&(N.updateMultisampleRenderTarget(ue),N.updateRenderTargetMipmap(ue))}_.setRenderTarget(Ne),_.setClearColor(Y,te),qe!==void 0&&(G.viewport=qe),_.toneMapping=Re}function mn(b,O,V){const G=O.isScene===!0?O.overrideMaterial:null;for(let U=0,ue=b.length;U<ue;U++){const Ee=b[U],Ne=Ee.object,Re=Ee.geometry,qe=G===null?Ee.material:G,Qe=Ee.group;Ne.layers.test(V.layers)&&Zn(Ne,O,V,Re,qe,Qe)}}function Zn(b,O,V,G,U,ue){b.onBeforeRender(_,O,V,G,U,ue),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(_,O,V,G,b,ue),U.transparent===!0&&U.side===Oi&&U.forceSinglePass===!1?(U.side=Cn,U.needsUpdate=!0,_.renderBufferDirect(V,O,G,U,b,ue),U.side=br,U.needsUpdate=!0,_.renderBufferDirect(V,O,G,U,b,ue),U.side=Oi):_.renderBufferDirect(V,O,G,U,b,ue),b.onAfterRender(_,O,V,G,U,ue)}function Zi(b,O,V){O.isScene!==!0&&(O=St);const G=He.get(b),U=u.state.lights,ue=u.state.shadowsArray,Ee=U.state.version,Ne=Ie.getParameters(b,U.state,ue,O,V),Re=Ie.getProgramCacheKey(Ne);let qe=G.programs;G.environment=b.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(b.isMeshStandardMaterial?B:w).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,qe===void 0&&(b.addEventListener("dispose",Xe),qe=new Map,G.programs=qe);let Qe=qe.get(Re);if(Qe!==void 0){if(G.currentProgram===Qe&&G.lightsStateVersion===Ee)return Ho(b,Ne),Qe}else Ne.uniforms=Ie.getUniforms(b),b.onBeforeCompile(Ne,_),Qe=Ie.acquireProgram(Ne,Re),qe.set(Re,Qe),G.uniforms=Ne.uniforms;const Pe=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pe.clippingPlanes=$.uniform),Ho(b,Ne),G.needsLights=Ta(b),G.lightsStateVersion=Ee,G.needsLights&&(Pe.ambientLightColor.value=U.state.ambient,Pe.lightProbe.value=U.state.probe,Pe.directionalLights.value=U.state.directional,Pe.directionalLightShadows.value=U.state.directionalShadow,Pe.spotLights.value=U.state.spot,Pe.spotLightShadows.value=U.state.spotShadow,Pe.rectAreaLights.value=U.state.rectArea,Pe.ltc_1.value=U.state.rectAreaLTC1,Pe.ltc_2.value=U.state.rectAreaLTC2,Pe.pointLights.value=U.state.point,Pe.pointLightShadows.value=U.state.pointShadow,Pe.hemisphereLights.value=U.state.hemi,Pe.directionalShadowMap.value=U.state.directionalShadowMap,Pe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Pe.spotShadowMap.value=U.state.spotShadowMap,Pe.spotLightMatrix.value=U.state.spotLightMatrix,Pe.spotLightMap.value=U.state.spotLightMap,Pe.pointShadowMap.value=U.state.pointShadowMap,Pe.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Qe,G.uniformsList=null,Qe}function zo(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Ql.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Ho(b,O){const V=He.get(b);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Zc(b,O,V,G,U){O.isScene!==!0&&(O=St),N.resetTextureUnits();const ue=O.fog,Ee=G.isMeshStandardMaterial?O.environment:null,Ne=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xa,Re=(G.isMeshStandardMaterial?B:w).get(G.envMap||Ee),qe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Qe=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!V.morphAttributes.position,pt=!!V.morphAttributes.normal,_t=!!V.morphAttributes.color;let Mt=Mr;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Mt=_.toneMapping);const tn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xt=tn!==void 0?tn.length:0,ke=He.get(G),Vn=u.state.lights;if(fe===!0&&(Me===!0||b!==M)){const Fe=b===M&&G.id===E;$.setState(G,b,Fe)}let re=!1;G.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Vn.state.version||ke.outputColorSpace!==Ne||U.isBatchedMesh&&ke.batching===!1||!U.isBatchedMesh&&ke.batching===!0||U.isBatchedMesh&&ke.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ke.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ke.instancing===!1||!U.isInstancedMesh&&ke.instancing===!0||U.isSkinnedMesh&&ke.skinning===!1||!U.isSkinnedMesh&&ke.skinning===!0||U.isInstancedMesh&&ke.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ke.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ke.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ke.instancingMorph===!1&&U.morphTexture!==null||ke.envMap!==Re||G.fog===!0&&ke.fog!==ue||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==$.numPlanes||ke.numIntersection!==$.numIntersection)||ke.vertexAlphas!==qe||ke.vertexTangents!==Qe||ke.morphTargets!==Pe||ke.morphNormals!==pt||ke.morphColors!==_t||ke.toneMapping!==Mt||ke.morphTargetsCount!==xt)&&(re=!0):(re=!0,ke.__version=G.version);let le=ke.currentProgram;re===!0&&(le=Zi(G,O,U));let ze=!1,be=!1,Ce=!1;const Oe=le.getUniforms(),ut=ke.uniforms;if(Ae.useProgram(le.program)&&(ze=!0,be=!0,Ce=!0),G.id!==E&&(E=G.id,be=!0),ze||M!==b){Ae.buffers.depth.getReversed()?(pe.copy(b.projectionMatrix),$M(pe),XM(pe),Oe.setValue(F,"projectionMatrix",pe)):Oe.setValue(F,"projectionMatrix",b.projectionMatrix),Oe.setValue(F,"viewMatrix",b.matrixWorldInverse);const De=Oe.map.cameraPosition;De!==void 0&&De.setValue(F,Ye.setFromMatrixPosition(b.matrixWorld)),Ue.logarithmicDepthBuffer&&Oe.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Oe.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,be=!0,Ce=!0)}if(U.isSkinnedMesh){Oe.setOptional(F,U,"bindMatrix"),Oe.setOptional(F,U,"bindMatrixInverse");const Fe=U.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),Oe.setValue(F,"boneTexture",Fe.boneTexture,N))}U.isBatchedMesh&&(Oe.setOptional(F,U,"batchingTexture"),Oe.setValue(F,"batchingTexture",U._matricesTexture,N),Oe.setOptional(F,U,"batchingIdTexture"),Oe.setValue(F,"batchingIdTexture",U._indirectTexture,N),Oe.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&Oe.setValue(F,"batchingColorTexture",U._colorsTexture,N));const Ct=V.morphAttributes;if((Ct.position!==void 0||Ct.normal!==void 0||Ct.color!==void 0)&&_e.update(U,V,le),(be||ke.receiveShadow!==U.receiveShadow)&&(ke.receiveShadow=U.receiveShadow,Oe.setValue(F,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ut.envMap.value=Re,ut.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(ut.envMapIntensity.value=O.environmentIntensity),be&&(Oe.setValue(F,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&Qc(ut,Ce),ue&&G.fog===!0&&oe.refreshFogUniforms(ut,ue),oe.refreshMaterialUniforms(ut,G,I,se,u.state.transmissionRenderTarget[b.id]),Ql.upload(F,zo(ke),ut,N)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ql.upload(F,zo(ke),ut,N),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Oe.setValue(F,"center",U.center),Oe.setValue(F,"modelViewMatrix",U.modelViewMatrix),Oe.setValue(F,"normalMatrix",U.normalMatrix),Oe.setValue(F,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Fe=G.uniformsGroups;for(let De=0,Ke=Fe.length;De<Ke;De++){const zt=Fe[De];D.update(zt,le),D.bind(zt,le)}}return le}function Qc(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Ta(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,O,V){He.get(b.texture).__webglTexture=O,He.get(b.depthTexture).__webglTexture=V;const G=He.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const V=He.get(b);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,V=0){R=b,C=O,T=V;let G=!0,U=null,ue=!1,Ee=!1;if(b){const Re=He.get(b);if(Re.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(F.FRAMEBUFFER,null),G=!1;else if(Re.__webglFramebuffer===void 0)N.setupRenderTarget(b);else if(Re.__hasExternalTextures)N.rebindTextures(b,He.get(b.texture).__webglTexture,He.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Pe=b.depthTexture;if(Re.__boundDepthTexture!==Pe){if(Pe!==null&&He.has(Pe)&&(b.width!==Pe.image.width||b.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(b)}}const qe=b.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ee=!0);const Qe=He.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[O])?U=Qe[O][V]:U=Qe[O],ue=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?U=He.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?U=Qe[V]:U=Qe,P.copy(b.viewport),H.copy(b.scissor),z=b.scissorTest}else P.copy(me).multiplyScalar(I).floor(),H.copy(Le).multiplyScalar(I).floor(),z=ht;if(Ae.bindFramebuffer(F.FRAMEBUFFER,U)&&G&&Ae.drawBuffers(b,U),Ae.viewport(P),Ae.scissor(H),Ae.setScissorTest(z),ue){const Re=He.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,V)}else if(Ee){const Re=He.get(b.texture),qe=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.__webglTexture,V||0,qe)}E=-1},this.readRenderTargetPixels=function(b,O,V,G,U,ue,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=He.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne){Ae.bindFramebuffer(F.FRAMEBUFFER,Ne);try{const Re=b.texture,qe=Re.format,Qe=Re.type;if(!Ue.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-G&&V>=0&&V<=b.height-U&&F.readPixels(O,V,G,U,je.convert(qe),je.convert(Qe),ue)}finally{const Re=R!==null?He.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,O,V,G,U,ue,Ee){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=He.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne){const Re=b.texture,qe=Re.format,Qe=Re.type;if(!Ue.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-G&&V>=0&&V<=b.height-U){Ae.bindFramebuffer(F.FRAMEBUFFER,Ne);const Pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Pe),F.bufferData(F.PIXEL_PACK_BUFFER,ue.byteLength,F.STREAM_READ),F.readPixels(O,V,G,U,je.convert(qe),je.convert(Qe),0);const pt=R!==null?He.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,pt);const _t=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await WM(F,_t,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ue),F.deleteBuffer(Pe),F.deleteSync(_t),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,V=0){b.isTexture!==!0&&(Xa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-V),U=Math.floor(b.image.width*G),ue=Math.floor(b.image.height*G),Ee=O!==null?O.x:0,Ne=O!==null?O.y:0;N.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,Ee,Ne,U,ue),Ae.unbindTexture()},this.copyTextureToTexture=function(b,O,V=null,G=null,U=0){b.isTexture!==!0&&(Xa("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],O=arguments[2],U=arguments[3]||0,V=null);let ue,Ee,Ne,Re,qe,Qe,Pe,pt,_t;const Mt=b.isCompressedTexture?b.mipmaps[U]:b.image;V!==null?(ue=V.max.x-V.min.x,Ee=V.max.y-V.min.y,Ne=V.isBox3?V.max.z-V.min.z:1,Re=V.min.x,qe=V.min.y,Qe=V.isBox3?V.min.z:0):(ue=Mt.width,Ee=Mt.height,Ne=Mt.depth||1,Re=0,qe=0,Qe=0),G!==null?(Pe=G.x,pt=G.y,_t=G.z):(Pe=0,pt=0,_t=0);const tn=je.convert(O.format),xt=je.convert(O.type);let ke;O.isData3DTexture?(N.setTexture3D(O,0),ke=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(N.setTexture2DArray(O,0),ke=F.TEXTURE_2D_ARRAY):(N.setTexture2D(O,0),ke=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const Vn=F.getParameter(F.UNPACK_ROW_LENGTH),re=F.getParameter(F.UNPACK_IMAGE_HEIGHT),le=F.getParameter(F.UNPACK_SKIP_PIXELS),ze=F.getParameter(F.UNPACK_SKIP_ROWS),be=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Re),F.pixelStorei(F.UNPACK_SKIP_ROWS,qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Qe);const Ce=b.isDataArrayTexture||b.isData3DTexture,Oe=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const ut=He.get(b),Ct=He.get(O),Fe=He.get(ut.__renderTarget),De=He.get(Ct.__renderTarget);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,Fe.__webglFramebuffer),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ke=0;Ke<Ne;Ke++)Ce&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.get(b).__webglTexture,U,Qe+Ke),b.isDepthTexture?(Oe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.get(O).__webglTexture,U,_t+Ke),F.blitFramebuffer(Re,qe,ue,Ee,Pe,pt,ue,Ee,F.DEPTH_BUFFER_BIT,F.NEAREST)):Oe?F.copyTexSubImage3D(ke,U,Pe,pt,_t+Ke,Re,qe,ue,Ee):F.copyTexSubImage2D(ke,U,Pe,pt,_t+Ke,Re,qe,ue,Ee);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Oe?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(ke,U,Pe,pt,_t,ue,Ee,Ne,tn,xt,Mt.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(ke,U,Pe,pt,_t,ue,Ee,Ne,tn,Mt.data):F.texSubImage3D(ke,U,Pe,pt,_t,ue,Ee,Ne,tn,xt,Mt):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,Pe,pt,ue,Ee,tn,xt,Mt.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,Pe,pt,Mt.width,Mt.height,tn,Mt.data):F.texSubImage2D(F.TEXTURE_2D,U,Pe,pt,ue,Ee,tn,xt,Mt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Vn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,re),F.pixelStorei(F.UNPACK_SKIP_PIXELS,le),F.pixelStorei(F.UNPACK_SKIP_ROWS,ze),F.pixelStorei(F.UNPACK_SKIP_IMAGES,be),U===0&&O.generateMipmaps&&F.generateMipmap(ke),Ae.unbindTexture()},this.copyTextureToTexture3D=function(b,O,V=null,G=null,U=0){return b.isTexture!==!0&&(Xa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,b=arguments[2],O=arguments[3],U=arguments[4]||0),Xa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,V,G,U)},this.initRenderTarget=function(b){He.get(b).__webglFramebuffer===void 0&&N.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),Ae.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,Ae.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=gt._getDrawingBufferColorSpace(e),n.unpackColorSpace=gt._getUnpackColorSpace()}}class tp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(e),this.density=n}clone(){return new tp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rC extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Rx extends Sa{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new k,Cc=new k,S0=new Nt,Ha=new Zh,Nl=new qc,nd=new k,M0=new k;class sC extends hn{constructor(e=new Kn,n=new Rx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Tc.fromBufferAttribute(n,r-1),Cc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Tc.distanceTo(Cc);e.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;S0.copy(r).invert(),Ha.copy(e.ray).applyMatrix4(S0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,p=i.attributes.position;if(d!==null){const m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let S=m,g=v-1;S<g;S+=c){const u=d.getX(S),x=d.getX(S+1),y=Pl(this,e,Ha,l,u,x);y&&n.push(y)}if(this.isLineLoop){const S=d.getX(v-1),g=d.getX(m),u=Pl(this,e,Ha,l,S,g);u&&n.push(u)}}else{const m=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let S=m,g=v-1;S<g;S+=c){const u=Pl(this,e,Ha,l,S,S+1);u&&n.push(u)}if(this.isLineLoop){const S=Pl(this,e,Ha,l,v-1,m);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Pl(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Tc.fromBufferAttribute(a,r),Cc.fromBufferAttribute(a,s),n.distanceSqToSegment(Tc,Cc,nd,M0)>i)return;nd.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(nd);if(!(l<e.near||l>e.far))return{distance:l,point:M0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const E0=new k,w0=new k;class aC extends sC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)E0.fromBufferAttribute(n,r),w0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+E0.distanceTo(w0);e.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const d=i[r],p=i[r+1]-d,m=(a-d)/p;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new We:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new k,r=[],s=[],a=[],o=new k,l=new Nt;for(let m=0;m<=e;m++){const v=m/e;r[m]=this.getTangentAt(v,new k)}s[0]=new k,a[0]=new k;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),p<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Jt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,v))}a[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(Jt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],m*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nx extends Ki{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new We){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*d-m*h+this.aX,c=p*h+m*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class oC extends Nx{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function np(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,d,h){let p=(a-s)/c-(o-s)/(c+d)+(o-a)/d,m=(o-a)/d-(l-a)/(d+h)+(l-o)/h;p*=d,m*=d,r(a,o,p,m)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const Ll=new k,id=new np,rd=new np,sd=new np;class Px extends Ki{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new k){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,d;this.closed||o>0?c=r[(o-1)%s]:(Ll.subVectors(r[0],r[1]).add(r[0]),c=Ll);const h=r[o%s],p=r[(o+1)%s];if(this.closed||o+2<s?d=r[(o+2)%s]:(Ll.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Ll),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),m),S=Math.pow(h.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(d),m);S<1e-4&&(S=1),v<1e-4&&(v=S),g<1e-4&&(g=S),id.initNonuniformCatmullRom(c.x,h.x,p.x,d.x,v,S,g),rd.initNonuniformCatmullRom(c.y,h.y,p.y,d.y,v,S,g),sd.initNonuniformCatmullRom(c.z,h.z,p.z,d.z,v,S,g)}else this.curveType==="catmullrom"&&(id.initCatmullRom(c.x,h.x,p.x,d.x,this.tension),rd.initCatmullRom(c.y,h.y,p.y,d.y,this.tension),sd.initCatmullRom(c.z,h.z,p.z,d.z,this.tension));return i.set(id.calc(l),rd.calc(l),sd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function b0(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*t+n}function lC(t,e){const n=1-t;return n*n*e}function cC(t,e){return 2*(1-t)*t*e}function uC(t,e){return t*t*e}function lo(t,e,n,i){return lC(t,e)+cC(t,n)+uC(t,i)}function dC(t,e){const n=1-t;return n*n*n*e}function fC(t,e){const n=1-t;return 3*n*n*t*e}function hC(t,e){return 3*(1-t)*t*t*e}function pC(t,e){return t*t*t*e}function co(t,e,n,i,r){return dC(t,e)+fC(t,n)+hC(t,i)+pC(t,r)}class mC extends Ki{constructor(e=new We,n=new We,i=new We,r=new We){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new We){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(co(e,r.x,s.x,a.x,o.x),co(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gC extends Ki{constructor(e=new k,n=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(co(e,r.x,s.x,a.x,o.x),co(e,r.y,s.y,a.y,o.y),co(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vC extends Ki{constructor(e=new We,n=new We){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new We){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new We){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xC extends Ki{constructor(e=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new k){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _C extends Ki{constructor(e=new We,n=new We,i=new We){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new We){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(lo(e,r.x,s.x,a.x),lo(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lx extends Ki{constructor(e=new k,n=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(lo(e,r.x,s.x,a.x),lo(e,r.y,s.y,a.y),lo(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yC extends Ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new We){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],d=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(b0(o,l.x,c.x,d.x,h.x),b0(o,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new We().fromArray(r))}return this}}var SC=Object.freeze({__proto__:null,ArcCurve:oC,CatmullRomCurve3:Px,CubicBezierCurve:mC,CubicBezierCurve3:gC,EllipseCurve:Nx,LineCurve:vC,LineCurve3:xC,QuadraticBezierCurve:_C,QuadraticBezierCurve3:Lx,SplineCurve:yC});class Ac extends Kn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],p=[],m=[];let v=0;const S=[],g=i/2;let u=0;x(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(p,3)),this.setAttribute("uv",new jt(m,2));function x(){const _=new k,A=new k;let C=0;const T=(n-e)/i;for(let R=0;R<=s;R++){const E=[],M=R/s,P=M*(n-e)+e;for(let H=0;H<=r;H++){const z=H/r,Y=z*l+o,te=Math.sin(Y),q=Math.cos(Y);A.x=P*te,A.y=-M*i+g,A.z=P*q,h.push(A.x,A.y,A.z),_.set(te,T,q).normalize(),p.push(_.x,_.y,_.z),m.push(z,1-M),E.push(v++)}S.push(E)}for(let R=0;R<r;R++)for(let E=0;E<s;E++){const M=S[E][R],P=S[E+1][R],H=S[E+1][R+1],z=S[E][R+1];(e>0||E!==0)&&(d.push(M,P,z),C+=3),(n>0||E!==s-1)&&(d.push(P,H,z),C+=3)}c.addGroup(u,C,0),u+=C}function y(_){const A=v,C=new We,T=new k;let R=0;const E=_===!0?e:n,M=_===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,g*M,0),p.push(0,M,0),m.push(.5,.5),v++;const P=v;for(let H=0;H<=r;H++){const Y=H/r*l+o,te=Math.cos(Y),q=Math.sin(Y);T.x=E*q,T.y=g*M,T.z=E*te,h.push(T.x,T.y,T.z),p.push(0,M,0),C.x=te*.5+.5,C.y=q*.5*M+.5,m.push(C.x,C.y),v++}for(let H=0;H<r;H++){const z=A+H,Y=P+H;_===!0?d.push(Y,Y+1,z):d.push(Y+1,Y,z),R+=3}c.addGroup(u,R,_===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ri extends Kn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new k,p=new k,m=[],v=[],S=[],g=[];for(let u=0;u<=i;u++){const x=[],y=u/i;let _=0;u===0&&a===0?_=.5/n:u===i&&l===Math.PI&&(_=-.5/n);for(let A=0;A<=n;A++){const C=A/n;h.x=-e*Math.cos(r+C*s)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(r+C*s)*Math.sin(a+y*o),v.push(h.x,h.y,h.z),p.copy(h).normalize(),S.push(p.x,p.y,p.z),g.push(C+_,1-y),x.push(c++)}d.push(x)}for(let u=0;u<i;u++)for(let x=0;x<n;x++){const y=d[u][x+1],_=d[u][x],A=d[u+1][x],C=d[u+1][x+1];(u!==0||a>0)&&m.push(y,_,C),(u!==i-1||l<Math.PI)&&m.push(_,A,C)}this.setIndex(m),this.setAttribute("position",new jt(v,3)),this.setAttribute("normal",new jt(S,3)),this.setAttribute("uv",new jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ip extends Kn{constructor(e=new Lx(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new k,l=new k,c=new We;let d=new k;const h=[],p=[],m=[],v=[];S(),this.setIndex(v),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(p,3)),this.setAttribute("uv",new jt(m,2));function S(){for(let y=0;y<n;y++)g(y);g(s===!1?n:0),x(),u()}function g(y){d=e.getPointAt(y/n,d);const _=a.normals[y],A=a.binormals[y];for(let C=0;C<=r;C++){const T=C/r*Math.PI*2,R=Math.sin(T),E=-Math.cos(T);l.x=E*_.x+R*A.x,l.y=E*_.y+R*A.y,l.z=E*_.z+R*A.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=d.x+i*l.x,o.y=d.y+i*l.y,o.z=d.z+i*l.z,h.push(o.x,o.y,o.z)}}function u(){for(let y=1;y<=n;y++)for(let _=1;_<=r;_++){const A=(r+1)*(y-1)+(_-1),C=(r+1)*y+(_-1),T=(r+1)*y+_,R=(r+1)*(y-1)+_;v.push(A,C,R),v.push(C,T,R)}}function x(){for(let y=0;y<=n;y++)for(let _=0;_<=r;_++)c.x=y/n,c.y=_/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ip(new SC[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class et extends Sa{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fx,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rp extends hn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class MC extends rp{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const ad=new Nt,T0=new k,C0=new k;class EC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jh,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;T0.setFromMatrixPosition(e.matrixWorld),n.position.copy(T0),C0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(C0),n.updateMatrixWorld(),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const A0=new Nt,Va=new k,od=new k;class wC extends EC{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Va.setFromMatrixPosition(e.matrixWorld),i.position.copy(Va),od.copy(i.position),od.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(od),i.updateMatrixWorld(),r.makeTranslation(-Va.x,-Va.y,-Va.z),A0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(A0)}}class kl extends rp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new wC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bC extends rp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class TC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=R0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=R0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function R0(){return performance.now()}const N0=new Nt;class CC{constructor(e,n,i=0,r=1/0){this.ray=new Zh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Qh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return N0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(N0),this}intersectObject(e,n=!0,i=[]){return Wf(e,this,i,n),i.sort(P0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Wf(e[r],this,i,n);return i.sort(P0),i}}function P0(t,e){return t.distance-e.distance}function Wf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Wf(s[a],e,n,!0)}}class AC{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Jt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class RC extends aC{constructor(e=10,n=10,i=4473924,r=8947848){i=new dt(i),r=new dt(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let p=0,m=0,v=-o;p<=n;p++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const S=p===s?i:r;S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3}const d=new Kn;d.setAttribute("position",new jt(l,3)),d.setAttribute("color",new jt(c,3));const h=new Rx({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);class NC{constructor(){Ve(this,"ctx",null);Ve(this,"enabled",!0)}initCtx(){if(!this.enabled)return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}playKeyClick(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.createOscillator(),i=e.createGain(),r=e.currentTime;n.type="triangle",n.frequency.setValueAtTime(1400+Math.random()*300,r),n.frequency.exponentialRampToValueAtTime(120,r+.02),i.gain.setValueAtTime(.04,r),i.gain.exponentialRampToValueAtTime(1e-4,r+.02),n.connect(i),i.connect(e.destination),n.start(r),n.stop(r+.02)}catch{}}playCableSnap(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="square",i.frequency.setValueAtTime(600,n),i.frequency.exponentialRampToValueAtTime(80,n+.04),r.gain.setValueAtTime(.12,n),r.gain.exponentialRampToValueAtTime(.001,n+.05),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.05)}catch{}}playSuccessBeep(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((r,s)=>{const a=e.createOscillator(),o=e.createGain(),l=n+s*.08;a.type="sine",a.frequency.setValueAtTime(r,l),o.gain.setValueAtTime(.08,l),o.gain.exponentialRampToValueAtTime(.001,l+.25),a.connect(o),o.connect(e.destination),a.start(l),a.stop(l+.25)})}catch{}}playErrorBeep(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sawtooth",i.frequency.setValueAtTime(150,n),i.frequency.setValueAtTime(120,n+.08),r.gain.setValueAtTime(.1,n),r.gain.exponentialRampToValueAtTime(.001,n+.18),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.18)}catch{}}playRailSlide(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="triangle",i.frequency.setValueAtTime(180,n),i.frequency.linearRampToValueAtTime(320,n+.15),i.frequency.exponentialRampToValueAtTime(90,n+.35),r.gain.setValueAtTime(.06,n),r.gain.linearRampToValueAtTime(.08,n+.12),r.gain.exponentialRampToValueAtTime(1e-4,n+.35),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.35)}catch{}}playLatchClick(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="square",i.frequency.setValueAtTime(950,n),i.frequency.exponentialRampToValueAtTime(140,n+.04),r.gain.setValueAtTime(.08,n),r.gain.exponentialRampToValueAtTime(.001,n+.04),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.04)}catch{}}playSwitchClick(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="triangle",i.frequency.setValueAtTime(340,n),i.frequency.exponentialRampToValueAtTime(80,n+.035),r.gain.setValueAtTime(.12,n),r.gain.exponentialRampToValueAtTime(.001,n+.04),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.04)}catch{}}playFanSpool(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",i.frequency.setValueAtTime(180,n),i.frequency.linearRampToValueAtTime(540,n+.4),i.frequency.exponentialRampToValueAtTime(220,n+.8),r.gain.setValueAtTime(.02,n),r.gain.linearRampToValueAtTime(.05,n+.3),r.gain.exponentialRampToValueAtTime(.001,n+.8),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.8)}catch{}}}const Be=new NC;/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function LC(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:PC(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=t=>{const e=kC(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ld(t){return t!=null}function DC(t,e={}){var p,m;const n=e.attributeNames??{},i=v=>n[v]??v,r=t.size??t.width??Br.width,s=t.size??t.height??Br.height,a=((p=t.aliases)==null?void 0:p.filter(v=>typeof v=="string"&&v.trim()!=="").map(v=>`lucide-${v}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],l=((m=e.className)==null?void 0:m.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?$f(...l):$f("lucide",...o,...l),d=e.absoluteStrokeWidth?Number(e.strokeWidth??Br["stroke-width"])*Number(t.size??t.width??Br.width)/Number(e.size??e.width??Br.width):e.strokeWidth??Br["stroke-width"];return["svg",{...Object.entries(Br).reduce((v,[S,g])=>(v[i(S)]=g,v),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&ld(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&ld(e.width)&&{[i("width")]:e.width},..."height"in e&&ld(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:d,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(v=>{const[S,g,u]=v,x=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...g}:g;return u?[S,x,u]:[S,x]})]}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function UC(t,e={}){return DC(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},FC=de.createContext({}),BC=()=>de.useContext(FC),zC=de.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:c=[],icon:d={node:c,aliases:[],size:24},...h},p)=>{const{size:m=24,strokeWidth:v=2,absoluteStrokeWidth:S=!1,nonScalingStroke:g=!1,color:u="currentColor",className:x=""}=BC()??{},y=!!l||OC(h),[_,A,C=[]]=UC(d,{color:t??u,width:n??e??m,height:i??e??m,strokeWidth:r??v,absoluteStrokeWidth:s??S,nonScalingStroke:a??g,className:$f(x,o),hasA11yProp:y,attributes:h});return de.createElement(_,{ref:p,...A},[...C.map(([T,R])=>de.createElement(T,R)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ge(t,e=[],n=[]){const i=typeof t=="string"?LC(t,e,n):t,r=de.forwardRef(({className:s,...a},o)=>de.createElement(zC,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=IC(i.name)),r}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};kx.node;const HC=Ge(kx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};Ix.node;const L0=Ge(Ix);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};Dx.node;const Xf=Ge(Dx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux={name:"cable",size:24,node:[["path",{d:"M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z",key:"trhst0"}],["path",{d:"M17 21v-2",key:"ds4u3f"}],["path",{d:"M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10",key:"1mo9zo"}],["path",{d:"M21 21v-2",key:"eo0ou"}],["path",{d:"M3 5V3",key:"1k5hjh"}],["path",{d:"M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z",key:"1dd30t"}],["path",{d:"M7 5V3",key:"1t1388"}]]};Ux.node;const qf=Ge(Ux);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};Ox.node;const k0=Ge(Ox);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Fx.node;const Bx=Ge(Fx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};zx.node;const Hx=Ge(zx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};Vx.node;const VC=Ge(Vx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Gx.node;const GC=Ge(Gx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};jx.node;const Wx=Ge(jx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};$x.node;const jC=Ge($x);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Xx.node;const es=Ge(Xx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};qx.node;const I0=Ge(qx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx={name:"circle",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]};Yx.node;const Kx=Ge(Yx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};Zx.node;const Kc=Ge(Zx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Qx.node;const WC=Ge(Qx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};Jx.node;const D0=Ge(Jx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_={name:"earth",size:24,node:[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["globe-2"]};e_.node;const U0=Ge(e_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};t_.node;const $C=Ge(t_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_={name:"file-code",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]]};n_.node;const O0=Ge(n_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};i_.node;const pa=Ge(i_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_={name:"folder-open",size:24,node:[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]};r_.node;const XC=Ge(r_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_={name:"hard-drive",size:24,node:[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]]};s_.node;const qC=Ge(s_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};a_.node;const YC=Ge(a_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_={name:"keyboard",size:24,node:[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]};o_.node;const KC=Ge(o_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};l_.node;const c_=Ge(l_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};u_.node;const sp=Ge(u_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};d_.node;const Rc=Ge(d_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};f_.node;const h_=Ge(f_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};p_.node;const ZC=Ge(p_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};m_.node;const QC=Ge(m_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};g_.node;const JC=Ge(g_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_={name:"power",size:24,node:[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]};v_.node;const eA=Ge(v_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};x_.node;const tA=Ge(x_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};__.node;const y_=Ge(__);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};S_.node;const nA=Ge(S_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};M_.node;const iA=Ge(M_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};E_.node;const rA=Ge(E_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};w_.node;const sA=Ge(w_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_={name:"shield-alert",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]};b_.node;const aA=Ge(b_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};T_.node;const C_=Ge(T_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};A_.node;const oA=Ge(A_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]};R_.node;const lA=Ge(R_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};N_.node;const cA=Ge(N_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};P_.node;const uA=Ge(P_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};L_.node;const No=Ge(L_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};k_.node;const Jl=Ge(k_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};I_.node;const D_=Ge(I_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};U_.node;const O_=Ge(U_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_={name:"wind",size:24,node:[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]};F_.node;const dA=Ge(F_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};B_.node;const Bo=Ge(B_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};z_.node;const fA=Ge(z_),Il=[{id:"blue",label:"Cat6 Blue",role:"General LAN / Access",hex:2450411,css:"#2563eb"},{id:"cyan",label:"Aqua Cyan",role:"802.1Q Trunk / Uplink",hex:440020,css:"#06b6d4"},{id:"amber",label:"Amber Gold",role:"Workstation / Sales VLAN 20",hex:16096779,css:"#f59e0b"},{id:"green",label:"Emerald",role:"Default Gateway / Core",hex:1096065,css:"#10b981"},{id:"red",label:"Crimson Red",role:"Firewall / DMZ Security",hex:15680580,css:"#ef4444"},{id:"purple",label:"SOC Purple",role:"SPAN / IDS Tap Sensor",hex:11032055,css:"#a855f7"},{id:"orange",label:"Fiber Orange",role:"SAN Storage Array",hex:15357964,css:"#ea580c"},{id:"slate",label:"Stealth Slate",role:"Out-of-Band / IPMI Mgmt",hex:4674921,css:"#475569"},{id:"yellow",label:"High-Vis Yellow",role:"Restricted / Audit Zone",hex:15381256,css:"#eab308"},{id:"white",label:"Polar White",role:"Inter-Rack Backbone Tie",hex:16317180,css:"#f8fafc"}],Ps=[{id:"KVM1",name:"1U Master Rack Console (KVM Drawer)",rack:"Rack A",slot:1,uHeight:1,y:2.62,zBase:0,color:988970,canSlide:!0,canTerminal:!1,model:"kvm_1u",specs:'17" TFT 1080p Fold-Up LCD • 104-Key Chiclet Keyboard • USB/VGA Hub',isKvm:!0},{id:"BRUSH_A",name:"1U Cable Management Duct",rack:"Rack A",slot:2,uHeight:1,y:2.44,zBase:0,color:988970,canSlide:!1,canTerminal:!1,model:"duct_1u",specs:"Horizontal high-density nylon brush passthrough with strain relief"},{id:"R1",name:"Router R1 (Cisco 2901 ISR)",rack:"Rack A",slot:3,uHeight:1,y:2.22,zBase:0,color:165063,canSlide:!0,canTerminal:!0,model:"router_2port",specs:"Cisco 2901 Integrated Services Router • 2x GigabitEthernet • Cisco IOS 15.1"},{id:"PATCH_A",name:"1U 24-Port Cat6 Patch Bay",rack:"Rack A",slot:4,uHeight:1,y:2.02,zBase:0,color:1976635,canSlide:!1,canTerminal:!1,model:"patch_24",specs:"24-Port RJ45 Cat6 TIA-568A/B Unshielded 110 Punchdown Bay"},{id:"FIBER_A",name:"1U OM4 LC Duplex Fiber Enclosure",rack:"Rack A",slot:5,uHeight:1,y:1.86,zBase:0,color:536393,canSlide:!1,canTerminal:!1,model:"fiber_1u",specs:"12x LC Duplex Aqua Couplers • 50/125µm Multimode 100G Trunking"},{id:"S1",name:"Switch S1 (Cisco Catalyst 2960)",rack:"Rack A",slot:6,uHeight:1,y:1.68,zBase:0,color:3359061,canSlide:!0,canTerminal:!0,model:"switch_24",specs:"Cisco Catalyst 2960-24TT • 24x 10/100 + 2x 1000BASE-T • 802.1Q Trunking"},{id:"WEB1",name:"Server WEB1 (PowerEdge R640)",rack:"Rack A",slot:7,uHeight:1,y:1.48,zBase:0,color:1976635,canSlide:!0,canTerminal:!0,model:"server",specs:"Dell PowerEdge R640 1U • 2x Intel Xeon Silver • 64GB DDR4 • Apache/PHP",driveCount:8},{id:"HSM1",name:"Hardware Security Module (HSM-100)",rack:"Rack A",slot:8,uHeight:1,y:1.32,zBase:0,color:7346805,canSlide:!0,canTerminal:!1,model:"hsm_1u",specs:"FIPS 140-2 Level 4 Crypto Processor • Zeroized Tamper Grid • OLED Screen"},{id:"DB1",name:"Server DB1 (Database Array)",rack:"Rack A",slot:9,uHeight:2,y:1.1,zBase:0,color:1120295,canSlide:!0,canTerminal:!1,model:"server_2u",specs:"2U Storage Server • 12x 3.84TB SAS SSD • Hardware RAID 10 • MySQL Core",driveCount:12},{id:"FW1",name:"Firewall FW1 (Next-Gen Appliance)",rack:"Rack A",slot:11,uHeight:1,y:.82,zBase:0,color:10033947,canSlide:!0,canTerminal:!1,model:"firewall_1u",specs:"Enterprise State-Inspection Firewall • Deep Packet Inspection • IPS Engine"},{id:"ENV1",name:"Rack Environmental & Thermal Monitor",rack:"Rack A",slot:12,uHeight:1,y:.66,zBase:0,color:413243,canSlide:!1,canTerminal:!1,model:"env_1u",specs:"Dual Temp & Humidity Sensors (21.4°C / 42% RH) • 320 CFM Airflow Mon"},{id:"PDU1",name:"Smart Rack PDU & UPS Battery",rack:"Rack A",slot:13,uHeight:2,y:.4,zBase:0,color:988970,canSlide:!1,canTerminal:!1,model:"ups_2u",specs:"APC Smart-UPS On-Line 3000VA • Dual Inverter • 208V/120V Pure Sine"},{id:"BRUSH_B",name:"1U Cable Management Duct B",rack:"Rack B",slot:1,uHeight:1,y:2.62,zBase:-1.4,color:988970,canSlide:!1,canTerminal:!1,model:"duct_1u",specs:"Rack B Top-of-rack horizontal cable management duct"},{id:"R2",name:"Core Router R2 (Gateway B)",rack:"Rack B",slot:2,uHeight:1,y:2.38,zBase:-1.4,color:165063,canSlide:!0,canTerminal:!1,model:"router_2port",specs:"Redundant Core Edge Router • Dual 10G SFP+ Uplinks • BGP Peering"},{id:"PATCH_B",name:"1U Cat6A Shielded Patch Bay",rack:"Rack B",slot:3,uHeight:1,y:2.16,zBase:-1.4,color:1976635,canSlide:!1,canTerminal:!1,model:"patch_24",specs:"24-Port STP Shielded Cat6A Patch Panel • 10GbE Certified"},{id:"S2",name:"Distribution Switch S2",rack:"Rack B",slot:4,uHeight:1,y:1.94,zBase:-1.4,color:3359061,canSlide:!0,canTerminal:!1,model:"switch_24",specs:"Catalyst 3850 24-Port Stackable Distribution Switch • Multigigabit"},{id:"FIBER_B",name:"1U MPO/MTP High-Density Cassette",rack:"Rack B",slot:5,uHeight:1,y:1.76,zBase:-1.4,color:536393,canSlide:!1,canTerminal:!1,model:"fiber_1u",specs:"24-Fiber MPO to LC Breakout Module • Low Insertion Loss"},{id:"SAN1",name:"SAN Storage Array (Enterprise Vault)",rack:"Rack B",slot:6,uHeight:2,y:1.52,zBase:-1.4,color:1976635,canSlide:!0,canTerminal:!1,model:"storage_2u",specs:"12-Bay Fibre Channel / iSCSI SAN Storage Array • 192TB RAW",driveCount:12},{id:"SAN_EXP",name:"SAN High-Density Expansion Shelf",rack:"Rack B",slot:8,uHeight:2,y:1.2,zBase:-1.4,color:1120295,canSlide:!0,canTerminal:!1,model:"storage_2u",specs:"12-Bay JBOD Expansion Enclosure • 12Gb/s SAS-3 Interconnect",driveCount:12},{id:"IDS1",name:"Security Sensor IDS1 (Suricata/Zeek)",rack:"Rack B",slot:10,uHeight:1,y:.94,zBase:-1.4,color:8266446,canSlide:!0,canTerminal:!1,model:"sensor_1u",specs:"Full-Packet Capture & Network Intrusion Detection Appliance • Tap Interface"},{id:"APP2",name:"Secondary Compute Node APP2",rack:"Rack B",slot:11,uHeight:2,y:.68,zBase:-1.4,color:1120295,canSlide:!0,canTerminal:!1,model:"server_2u",specs:"Kubernetes Worker Node 02 • High-Memory 128GB • Docker Container Host",driveCount:8},{id:"UPS2",name:"Backup Battery Array UPS2",rack:"Rack B",slot:13,uHeight:2,y:.36,zBase:-1.4,color:988970,canSlide:!1,canTerminal:!1,model:"ups_2u",specs:"Redundant Power Distribution Unit • Phase Balanced • ATS Failover"}],hA=({sim:t,onOpenTerminal:e,selectedPort:n,onSelectPort:i,onOpenThreatMap:r})=>{const s=de.useRef(null),[a,o]=de.useState(null),[l,c]=de.useState(null),[d,h]=de.useState("R1"),[p,m]=de.useState(["WEB1"]),[v,S]=de.useState(null),[g,u]=de.useState({WEB1:[2]}),[x,y]=de.useState(["WEB1"]),[_,A]=de.useState([]),[C,T]=de.useState(!1),[R,E]=de.useState(!0),[M,P]=de.useState(0),[H,z]=de.useState("#2563eb"),[Y,te]=de.useState({}),[q,se]=de.useState(.28),[I,J]=de.useState(!0),[K,me]=de.useState(null),[Le,ht]=de.useState("#00e5ff"),[X,fe]=de.useState(!1),[Me,pe]=de.useState("chassis"),$e=de.useRef(null),Ye=de.useRef(null),at=de.useRef(null),St=de.useRef([]),nt=de.useRef([]),At=de.useRef([]),F=de.useRef(new Map),Bt=de.useRef([]),Ze=de.useRef({pos:new k(0,3.2,5),lookAt:new k(0,1.2,0)}),Ue=de.useCallback(L=>{S(L),setTimeout(()=>{S(W=>W===L?null:W)},3500)},[]),Ae=L=>{Be.playKeyClick(),L==="overview"?Ze.current={pos:new k(0,3.6,5.5),lookAt:new k(0,1.2,0)}:L==="rack_a"?Ze.current={pos:new k(-1.1,1.8,1.5),lookAt:new k(-1.8,1.5,0)}:L==="rack_b"?Ze.current={pos:new k(-1.1,1.8,-.1),lookAt:new k(-1.8,1.5,-1.4)}:L==="kvm"?Ze.current={pos:new k(-1.4,2.75,.95),lookAt:new k(-1.8,2.62,.45)}:L==="desk_1"?Ze.current={pos:new k(1.2,1.4,2),lookAt:new k(1.6,1,1.2)}:L==="desk_2"?Ze.current={pos:new k(1.2,1.4,-.8),lookAt:new k(1.6,1,-1.6)}:L==="soc"&&(Ze.current={pos:new k(0,2.2,1.8),lookAt:new k(0,2.2,-2.9)})},bt=L=>{Be.playRailSlide(),m(W=>{const $=W.includes(L),Q=$?W.filter(ve=>ve!==L):[...W,L];return Ue($?`Retracted ${L} into rack rails.`:`Slid out ${L} chassis on telescopic rails.`),Q})},He=L=>{Be.playLatchClick(),y(W=>{const $=W.includes(L),Q=$?W.filter(ve=>ve!==L):[...W,L];return Ue($?`Attached top cover lid to ${L}.`:`Removed top lid from ${L} (motherboard exposed).`),Q})},N=L=>{Be.playSwitchClick(),A(W=>{const $=W.includes(L),Q=$?W.filter(ve=>ve!==L):[...W,L];return Ue($?`Powering UP ${L} (POST boot sequence initiated).`:`Powering DOWN ${L} (Standby mode).`),Q})},w=(L,W)=>{Be.playLatchClick(),u($=>{const Q=$[L]||[],ve=Q.includes(W),_e=ve?Q.filter(he=>he!==W):[...Q,W];return Ue(ve?`Latched SAS Drive #${W+1} into ${L} backplane.`:`⚠️ Unlatched & ejected SAS Drive #${W+1} from ${L} tray.`),{...$,[L]:_e}})},B=de.useCallback(()=>{const L=$e.current;if(L){for(const W of nt.current)L.remove(W.mesh),W.mesh.geometry.dispose(),Array.isArray(W.mesh.material)?W.mesh.material.forEach($=>$.dispose()):W.mesh.material.dispose();nt.current=[];for(const W of At.current)L.remove(W.mesh),W.mesh.geometry.dispose(),W.mesh.material.dispose();At.current=[],Bt.current=Bt.current.filter(W=>W.type!=="cable");for(const W of t.links){const $=St.current.find(Xe=>Xe.portId===W.a),Q=St.current.find(Xe=>Xe.portId===W.b);if(!$||!Q)continue;const ve=$.position.clone(),_e=Q.position.clone(),he=ve.clone().lerp(_e,.5),rt=ve.distanceTo(_e);he.y-=Math.min(.85,rt*q);const je=new Px([ve,he,_e]),ot=`${W.a}-${W.b}`,D=`${W.b}-${W.a}`,ge=K===ot||K===D;let j=Y[ot]||Y[D];j||(W.a.includes("Gi0/1")||W.b.includes("Gi0/1")?j=440020:W.a.includes("PC-B")||W.b.includes("PC-B")?j=16096779:W.a.includes("PC-A")||W.b.includes("PC-A")||W.a.includes("SOC")||W.b.includes("SOC")?j=2450411:j=1096065);const ne=new ip(je,38,ge?.026:.019,8,!1),ye=new et({color:j,roughness:ge?.2:.35,metalness:ge?.4:.2,emissive:ge?j:0,emissiveIntensity:ge?.35:0}),xe=new we(ne,ye);if(xe.castShadow=!0,L.add(xe),nt.current.push({mesh:xe,linkKey:ot,curve:je}),Bt.current.push({id:ot,mesh:xe,type:"cable",meta:{link:W,hex:j}}),I){const Xe=new ri(.026,8,8),Tt=new ii({color:ge?16777215:8246268}),Ot=new we(Xe,Tt);L.add(Ot),At.current.push({mesh:Ot,curve:je,progress:Math.random(),speed:.35+Math.random()*.2})}}for(const W of St.current){if(!W.ledMesh)continue;const[$,Q]=W.portId.split(":"),ve=t.devices.get($),_e=ve==null?void 0:ve.getInterface(Q),he=W.ledMesh.material;W.isReserved?(he.color.setHex(15381256),he.emissive.setHex(7421714)):_e!=null&&_e.peer?_e.adminUp?_e.operUp?(he.color.setHex(2278750),he.emissive.setHex(1483594)):(he.color.setHex(16096779),he.emissive.setHex(11817737)):(he.color.setHex(16096779),he.emissive.setHex(14251782)):(he.color.setHex(1976635),he.emissive.setHex(0))}}},[t,Y,q,I,K]);de.useEffect(()=>{B()},[t.links,Y,q,I,K,B]);const ie=L=>{Be.playKeyClick();const W={};for(const $ of t.links)W[`${$.a}-${$.b}`]=L;te(W),Ue("Applied color to all Cat6 network cables in the room.")},ae=()=>{Be.playSuccessBeep();const L={};for(const W of t.links){const $=`${W.a}-${W.b}`;W.a.includes("Gi0/1")||W.b.includes("Gi0/1")?L[$]=440020:W.a.includes("PC-B")||W.b.includes("PC-B")||W.a.includes("Fa0/2")||W.b.includes("Fa0/2")?L[$]=16096779:W.a.includes("PC-A")||W.b.includes("PC-A")||W.a.includes("Fa0/1")||W.b.includes("Fa0/1")?L[$]=2450411:W.a.includes("WEB")||W.b.includes("WEB")?L[$]=1096065:L[$]=2450411}te(L),Ue("Color-coded all cables conforming to ANSI/TIA-606-C VLAN standards!")},Z=L=>{K&&(Be.playKeyClick(),te(W=>({...W,[K]:L})),Ue(`Updated color for cable ${K}`))};de.useEffect(()=>{const L=s.current;if(!L)return;const W=L.clientWidth,$=L.clientHeight,Q=new rC;Q.background=new dt(395537),Q.fog=new tp(395537,.075),$e.current=Q;const ve=new Dn(46,W/$,.1,100);ve.position.set(0,3.6,5.5),ve.lookAt(0,1.2,0),Ye.current=ve;const _e=new iC({antialias:!0,alpha:!1});_e.setSize(W,$),_e.setPixelRatio(Math.min(window.devicePixelRatio,2)),_e.outputColorSpace=In,_e.toneMapping=ex,_e.toneMappingExposure=1.15,_e.shadowMap.enabled=!0,_e.shadowMap.type=Qv,L.appendChild(_e.domElement),at.current=_e;const he=new bC(2766408,1.6);Q.add(he);const rt=new MC(3718648,988970,1.3);Q.add(rt);const je=new kl(14742270,3.2,16);je.position.set(-1.8,3.5,.2),je.castShadow=!0,Q.add(je);const ot=new kl(12248829,2.6,16);ot.position.set(-1.8,3.5,-1.4),ot.castShadow=!0,Q.add(ot);const D=new kl(9684477,2.2,16);D.position.set(1.5,3.4,0),Q.add(D);const ge=new kl(165063,3.8,8);ge.position.set(0,2.4,-2.85),Q.add(ge);const j=new oi(16,16),ne=new et({color:725280,roughness:.28,metalness:.65}),ye=new we(j,ne);ye.rotation.x=-Math.PI/2,ye.receiveShadow=!0,Q.add(ye);const xe=new RC(16,32,1976635,988970);xe.position.y=.005,Q.add(xe);const Xe=new et({color:527640,roughness:.85}),Tt=new we(new Je(16,5,.2),Xe);Tt.position.set(0,2.5,-3.2),Q.add(Tt);const Ot=new we(new Je(.2,5,16),Xe);Ot.position.set(-5,2.5,0),Q.add(Ot);const mt=new we(new oi(16,16),new et({color:329485,roughness:.9}));mt.position.y=4.2,mt.rotation.x=Math.PI/2,Q.add(mt);for(const re of[-1.6,.2,1.8]){const le=new we(new Je(1.2,.05,2),new ii({color:16317180}));le.position.set(-1.8,4.18,re),Q.add(le);const ze=new we(new Je(1.2,.05,2),new ii({color:16317180}));ze.position.set(1.5,4.18,re),Q.add(ze)}const Rn=new et({color:15381256,metalness:.7,roughness:.4}),Hn=new we(new Je(.6,.04,5),Rn);Hn.position.set(-1.8,3.1,-.6),Q.add(Hn);const Ea=new we(new Je(3.8,2,.1),new et({color:1976635,metalness:.8}));Ea.position.set(0,2.4,-3.08),Q.add(Ea);const us=new we(new oi(3.6,1.8),new ii({color:165063}));us.position.set(0,2.4,-3.02),Q.add(us);const mi=(re,le,ze)=>{const be=new fr;be.position.set(re,0,le);const Ce=new et({color:1976635,metalness:.8,roughness:.25}),Oe=new Je(.08,2.95,.08);for(const[Lr,fs]of[[-.48,-.48],[.48,-.48],[-.48,.48],[.48,.48]]){const Ai=new we(Oe,Ce);Ai.position.set(Lr,1.47,fs),Ai.castShadow=!0,be.add(Ai)}const ut=new et({color:4674921,metalness:.9,roughness:.2}),Ct=new Je(.04,2.8,.04);for(const Lr of[-.42,.42]){const fs=new we(Ct,ut);fs.position.set(Lr,1.47,.38),be.add(fs);const Ai=new we(Ct,ut);Ai.position.set(Lr,1.47,-.38),be.add(Ai)}const Fe=new et({color:988970,metalness:.7,roughness:.3}),De=new we(new Je(1.08,.08,1.08),Fe);De.position.set(0,2.92,0),be.add(De);const Ke=new we(new Je(1.08,.08,1.08),Fe);Ke.position.set(0,.04,0),be.add(Ke);const zt=new et({color:593174,roughness:.8,wireframe:!0}),Nr=new we(new Je(.02,2.75,.98),zt);Nr.position.set(-.49,1.47,0),be.add(Nr);const Pr=new we(new Je(.02,2.75,.98),zt);return Pr.position.set(.49,1.47,0),be.add(Pr),Q.add(be),be};mi(-1.8,0),mi(-1.8,-1.4);const ds=(re,le,ze)=>{const be=new fr;be.position.set(re,0,le);const Ce=new we(new Je(1.4,.06,.9),new et({color:3359061,roughness:.45}));Ce.position.set(0,.8,0),be.add(Ce);const Oe=new et({color:1976635,metalness:.7});for(const[zt,Nr]of[[-.62,-.38],[.62,-.38],[-.62,.38],[.62,.38]]){const Pr=new we(new Je(.06,.8,.06),Oe);Pr.position.set(zt,.4,Nr),be.add(Pr)}const ut=new we(new Je(.16,.25,.16),Oe);ut.position.set(0,.93,-.15),be.add(ut);const Ct=new we(new Je(.7,.45,.05),Oe);Ct.position.set(0,1.15,-.15),be.add(Ct);const Fe=new we(new oi(.64,.39),new ii({color:1096065}));Fe.position.set(0,1.15,-.12),be.add(Fe);const De=new we(new Je(.42,.02,.14),new et({color:988970}));De.position.set(0,.83,.15),be.add(De);const Ke=new we(new Je(.22,.46,.48),new et({color:988970,roughness:.4}));return Ke.position.set(.5,.45,0),be.add(Ke),Q.add(be),{deskGroup:be,tower:Ke,screen:Fe}},wa=ds(1.6,1.2),ba=ds(1.6,-1.2),mn=[],Zn=[],Zi=new Map,zo=re=>{const le=new fr,ze=-1.8,be=re.zBase;le.position.set(ze,re.y,be);const Ce=re.uHeight*.0444+(re.uHeight-1)*.02,Oe=.88,ut=.72,Ct=[],Fe=new et({color:re.color,metalness:.72,roughness:.35}),De=new we(new Je(Oe,Ce,ut),Fe);De.castShadow=!0,le.add(De),Zn.push({id:re.id,mesh:De,type:re.canTerminal?"device":"rackUnit"});const Ke=new et({color:9741240,metalness:.95,roughness:.15}),zt=new we(new Je(.015,Ce*.7,ut*.95),Ke);zt.position.set(-Oe/2-.01,0,0),le.add(zt);const Nr=new we(new Je(.015,Ce*.7,ut*.95),Ke);Nr.position.set(Oe/2+.01,0,0),le.add(Nr);const Pr=new et({color:659229,metalness:.8,roughness:.3}),Lr=new we(new Je(Oe+.02,Ce,.02),Pr);Lr.position.set(0,0,ut/2+.01),le.add(Lr);const fs=new et({color:4674921,metalness:.9,roughness:.2});for(const Wt of[-Oe/2-.03,Oe/2+.03]){const Kt=new we(new Je(.04,Ce,.01),fs);Kt.position.set(Wt,0,ut/2+.01),le.add(Kt)}const Ai=[],H_=new Ac(.009,.009,.012,12),V_=new et({color:3718648,metalness:.8}),Vo=new we(H_,V_);Vo.rotation.x=Math.PI/2,Vo.position.set(Oe/2-.04,0,ut/2+.022),le.add(Vo);const G_=new ri(.005,8,8),j_=new et({color:2278750,emissive:1483594}),Jc=new we(G_,j_);Jc.position.set(Oe/2-.04,Ce*.28,ut/2+.023),le.add(Jc),Ai.push(Jc),Zn.push({id:re.id,mesh:Vo,type:"powerBtn",meta:{unitId:re.id}});let Ca;if(re.canSlide&&!re.isKvm){const Wt=new Je(Oe-.02,.008,ut-.04),Kt=new et({color:3359061,metalness:.8,roughness:.25});Ca=new we(Wt,Kt),Ca.position.set(0,Ce/2+.004,-.01),le.add(Ca),Ct.push({mesh:Ca,baseY:Ce/2+.004,explodeMult:1.4})}const ap=[],op=[],lp=[];if(re.canSlide&&!re.isKvm){const Wt=new et({color:413243,metalness:.4,roughness:.6}),Kt=new we(new Je(Oe-.06,.008,ut-.15),Wt);Kt.position.set(0,-Ce/2+.01,-.04),le.add(Kt),Ct.push({mesh:Kt,baseY:-Ce/2+.01,explodeMult:0});const gi=new et({color:12634320,metalness:.85,roughness:.2});for(const an of[-.14,.14]){const vi=new we(new Je(.12,Ce*.6,.12),gi);vi.position.set(an,-Ce/2+Ce*.3+.015,-.06),le.add(vi),Ct.push({mesh:vi,baseY:-Ce/2+Ce*.3+.015,explodeMult:.6})}const ps=new et({color:1409085,metalness:.5,roughness:.4});for(let an=0;an<8;an++){const vi=-.32+an*.035,Qn=new we(new Je(.012,Ce*.45,.11),ps);Qn.position.set(vi,-Ce/2+Ce*.23,-.06),le.add(Qn),Ct.push({mesh:Qn,baseY:-Ce/2+Ce*.23,explodeMult:.4})}const Nn=new we(new Je(Oe-.08,Ce*.75,.03),new et({color:988970}));Nn.position.set(0,-Ce/2+Ce*.4,.12),le.add(Nn),Ct.push({mesh:Nn,baseY:-Ce/2+Ce*.4,explodeMult:.8});const ms=new et({color:1976635,metalness:.3});for(let an=0;an<5;an++){const vi=-.28+an*.14,Qn=new we(new Ac(.032,.032,.02,8),ms);Qn.rotation.x=Math.PI/2,Qn.position.set(vi,-Ce/2+Ce*.4,.135),le.add(Qn),ap.push(Qn)}}if(re.driveCount){const Wt=re.driveCount,Kt=re.uHeight===2?Math.min(12,Wt):Math.min(8,Wt),gi=.085,ps=-((Kt-1)*gi)/2;for(let Nn=0;Nn<Kt;Nn++){const ms=ps+Nn*gi,an=new we(new Je(.075,Ce*.72,.024),new et({color:1976635,metalness:.75,roughness:.3})),vi=ut/2+.02;an.position.set(ms,0,vi),le.add(an);const Qn=new we(new Je(.045,.012,.008),new et({color:15680580,metalness:.6}));Qn.position.set(0,-Ce*.22,.015),an.add(Qn);const eu=new we(new ri(.006,6,6),new et({color:2278750,emissive:1483594}));eu.position.set(.022,Ce*.24,.015),an.add(eu),op.push(eu),lp.push({mesh:an,baseZ:vi,driveIdx:Nn}),Zn.push({id:`${re.id}_drive_${Nn}`,mesh:an,type:"drive",meta:{unitId:re.id,driveIdx:Nn}})}}let hs;if(re.isKvm){const Wt=new we(new Je(Oe-.1,.012,ut-.2),new et({color:1976635,roughness:.4}));Wt.position.set(0,0,.05),le.add(Wt);const Kt=new et({color:988970,roughness:.5}),gi=new we(new Je(.5,.006,.22),Kt);gi.position.set(-.1,.01,.05),le.add(gi);const ps=new we(new ri(.018,12,12),new et({color:3718648,metalness:.9}));ps.position.set(.26,.015,.05),le.add(ps),hs=new fr,hs.position.set(0,Ce/2,-ut/2+.12);const Nn=new we(new Je(.68,.42,.02),new et({color:988970,metalness:.8,roughness:.3}));Nn.position.set(0,.21,0),hs.add(Nn);const ms=new we(new oi(.62,.36),new ii({color:165063}));ms.position.set(0,.21,.012),hs.add(ms),le.add(hs)}if(re.id==="HSM1"){const Wt=new we(new Je(.24,.024,.01),new ii({color:0}));Wt.position.set(-.18,0,ut/2+.022),le.add(Wt);const Kt=new we(new oi(.22,.02),new ii({color:1096065}));Kt.position.set(-.18,0,ut/2+.028),le.add(Kt)}if(re.id==="ENV1")for(let Wt=0;Wt<2;Wt++){const Kt=-.16+Wt*.32,gi=new we(new oi(.12,.024),new ii({color:Wt===0?3718648:1096065}));gi.position.set(Kt,0,ut/2+.022),le.add(gi)}return Q.add(le),Zi.set(re.id,{group:le,zBase:be,targetZ:be,fans:ap,leds:op,drives:lp,lidMesh:Ca,kvmScreenGroup:hs,subLayers:Ct,powerLeds:Ai}),le};for(const re of Ps)zo(re);const Ho=[{name:"Gi0/0",canonical:"GigabitEthernet0/0",x:-1.8-.16,isRes:!1},{name:"Gi0/1",canonical:"GigabitEthernet0/1",x:-1.8+.16,isRes:!0}];for(const re of Ho){const le=`R1:${re.canonical}`,ze=t.reservedPorts.has(le),be=new we(new Je(.05,.038,.03),new et({color:ze?15381256:988970}));be.position.set(re.x,2.22,.38),Q.add(be);const Ce=new we(new ri(.012,8,8),new et({color:ze?15381256:1976635}));Ce.position.set(re.x,2.245,.385),Q.add(Ce),mn.push({portId:le,deviceId:"R1",shortName:re.name,position:new k(re.x,2.22,.39),isReserved:ze,mesh:be,ledMesh:Ce})}const Zc=[{name:"Fa0/1",canonical:"FastEthernet0/1",x:-1.8-.32},{name:"Fa0/2",canonical:"FastEthernet0/2",x:-1.8-.24},{name:"Fa0/3",canonical:"FastEthernet0/3",x:-1.8-.16},{name:"Fa0/4",canonical:"FastEthernet0/4",x:-1.8-.08},{name:"Fa0/5",canonical:"FastEthernet0/5",x:-1.8+0},{name:"Gi0/1",canonical:"GigabitEthernet0/1",x:-1.8+.28}];for(const re of Zc){const le=`S1:${re.canonical}`,ze=t.reservedPorts.has(le),be=new we(new Je(.04,.035,.03),new et({color:ze?15381256:988970}));be.position.set(re.x,1.68,.38),Q.add(be);const Ce=new we(new ri(.01,8,8),new et({color:1976635}));Ce.position.set(re.x,1.705,.385),Q.add(Ce),mn.push({portId:le,deviceId:"S1",shortName:re.name,position:new k(re.x,1.68,.39),isReserved:ze,mesh:be,ledMesh:Ce})}const Qc="WEB1:Ethernet0",Ta=new we(new Je(.04,.035,.03),new et({color:988970}));Ta.position.set(-1.8+.16,1.48,.38),Q.add(Ta);const b=new we(new ri(.01,8,8),new et({color:1976635}));b.position.set(-1.8+.16,1.505,.385),Q.add(b),mn.push({portId:Qc,deviceId:"WEB1",shortName:"Eth0",position:new k(-1.8+.16,1.48,.39),isReserved:!1,mesh:Ta,ledMesh:b});const O=t.devices.has("SOC-PC")?"SOC-PC":t.devices.has("PC-1")?"PC-1":"PC-A";Zn.push({id:O,mesh:wa.screen,type:"device"}),Zn.push({id:O,mesh:wa.tower,type:"device"});const V=new we(new Je(.04,.035,.03),new et({color:988970}));V.position.set(1.6+.5,.45,1.2+.25),Q.add(V);const G=new we(new ri(.01,8,8),new et({color:1976635}));if(G.position.set(1.6+.5,.48,1.2+.255),Q.add(G),mn.push({portId:`${O}:Ethernet0`,deviceId:O,shortName:"Eth0",position:new k(1.6+.5,.45,1.2+.26),isReserved:!1,mesh:V,ledMesh:G}),t.devices.has("PC-B")){Zn.push({id:"PC-B",mesh:ba.screen,type:"device"}),Zn.push({id:"PC-B",mesh:ba.tower,type:"device"});const re=new we(new Je(.04,.035,.03),new et({color:988970}));re.position.set(1.6+.5,.45,-1.2+.25),Q.add(re);const le=new we(new ri(.01,8,8),new et({color:1976635}));le.position.set(1.6+.5,.48,-1.2+.255),Q.add(le),mn.push({portId:"PC-B:Ethernet0",deviceId:"PC-B",shortName:"Eth0",position:new k(1.6+.5,.45,-1.2+.26),isReserved:!1,mesh:re,ledMesh:le})}St.current=mn,F.current=Zi,Bt.current=Zn,B();const U=new CC,ue=new We,Ee=re=>{const le=L.getBoundingClientRect();ue.x=(re.clientX-le.left)/le.width*2-1,ue.y=-((re.clientY-le.top)/le.height)*2+1,U.setFromCamera(ue,ve);const ze=mn.map(Fe=>Fe.mesh).filter(Fe=>!!Fe),be=U.intersectObjects(ze);if(be.length>0){const Fe=be[0].object,De=mn.find(Ke=>Ke.mesh===Fe);if(De){o(De.portId),c(null),L.style.cursor="pointer";return}}const Ce=nt.current.map(Fe=>Fe.mesh),Oe=U.intersectObjects(Ce);if(Oe.length>0){const Fe=Oe[0].object,De=nt.current.find(Ke=>Ke.mesh===Fe);if(De){o(null),c(`Cable: ${De.linkKey}`),L.style.cursor="pointer";return}}const ut=Bt.current.map(Fe=>Fe.mesh),Ct=U.intersectObjects(ut);if(Ct.length>0){const Fe=Ct[0].object,De=Bt.current.find(Ke=>Ke.mesh===Fe);if(De){De.type==="drive"?c(`${De.meta.unitId} Drive #${De.meta.driveIdx+1} (Hot-Swap)`):De.type==="powerBtn"?c(`${De.meta.unitId} Power Switch`):c(De.id),o(null),L.style.cursor="pointer";return}}o(null),c(null),L.style.cursor="default"},Ne=re=>{const le=L.getBoundingClientRect();ue.x=(re.clientX-le.left)/le.width*2-1,ue.y=-((re.clientY-le.top)/le.height)*2+1,U.setFromCamera(ue,ve);const ze=mn.map(De=>De.mesh).filter(De=>!!De),be=U.intersectObjects(ze);if(be.length>0){const De=be[0].object,Ke=mn.find(zt=>zt.mesh===De);if(Ke){Ie(Ke);return}}const Ce=nt.current.map(De=>De.mesh),Oe=U.intersectObjects(Ce);if(Oe.length>0){const De=Oe[0].object,Ke=nt.current.find(zt=>zt.mesh===De);if(Ke){Be.playKeyClick(),me(Ke.linkKey),pe("cables"),Ue(`Selected cable: ${Ke.linkKey}. Customize jacket color, sag, or disconnect below.`);return}}const ut=Bt.current.map(De=>De.mesh),Ct=U.intersectObjects(ut);if(Ct.length>0){const De=Ct[0].object,Ke=Bt.current.find(zt=>zt.mesh===De);if(Ke){if(Ke.type==="drive"){w(Ke.meta.unitId,Ke.meta.driveIdx);return}if(Ke.type==="powerBtn"){N(Ke.meta.unitId);return}Be.playKeyClick(),h(Ke.id),Ke.type==="device"&&t.devices.has(Ke.id)&&e(Ke.id);return}}if(U.intersectObject(us).length>0&&r){Be.playKeyClick(),r();return}};L.addEventListener("mousemove",Ee),L.addEventListener("click",Ne);let Re=!1,qe=0,Qe=0;const Pe=re=>{re.button===0&&(Re=!0,qe=re.clientX,Qe=re.clientY)},pt=()=>{Re=!1},_t=re=>{if(!Re)return;const le=re.clientX-qe,ze=re.clientY-Qe;qe=re.clientX,Qe=re.clientY;const be=Ze.current,Ce=be.pos.clone().sub(be.lookAt),Oe=new AC().setFromVector3(Ce);Oe.theta-=le*.0055,Oe.phi=Math.max(.08,Math.min(Math.PI/2-.04,Oe.phi-ze*.0055)),Ce.setFromSpherical(Oe),be.pos.copy(be.lookAt).add(Ce)},Mt=re=>{re.preventDefault();const le=Ze.current,ze=le.pos.clone().sub(le.lookAt).normalize(),be=le.pos.distanceTo(le.lookAt),Ce=Math.max(1.1,Math.min(9.5,be+re.deltaY*.0045));le.pos.copy(le.lookAt).add(ze.multiplyScalar(Ce))};L.addEventListener("mousedown",Pe),window.addEventListener("mouseup",pt),L.addEventListener("mousemove",_t),L.addEventListener("wheel",Mt,{passive:!1});let tn,xt=new TC;const ke=()=>{tn=requestAnimationFrame(ke);const re=xt.getDelta();if(Ye.current){const le=Ye.current,ze=Ze.current;le.position.lerp(ze.pos,.08);const be=new k(0,0,-1).applyQuaternion(le.quaternion).add(le.position);be.lerp(ze.lookAt,.08),le.lookAt(be)}if(I)for(const le of At.current){le.progress=(le.progress+re*le.speed)%1;const ze=le.curve.getPointAt(le.progress);le.mesh.position.copy(ze)}for(const[le,ze]of Zi.entries()){const be=p.includes(le),Ce=_.includes(le),Oe=x.includes(le),ut=d===le;if(ze.targetZ=be?ze.zBase+.58:ze.zBase,ze.group.position.z=cl.damp(ze.group.position.z,ze.targetZ,9,re),ze.subLayers&&ut)for(const Fe of ze.subLayers){const De=Fe.baseY+M*Fe.explodeMult*.18;Fe.mesh.position.y=cl.damp(Fe.mesh.position.y,De,8,re)}ze.lidMesh&&(ze.lidMesh.visible=!Oe);for(const Fe of ze.powerLeds){const De=Fe.material;Ce?(De.color.setHex(16096779),De.emissive.setHex(7877903)):(De.color.setHex(2278750),De.emissive.setHex(1483594))}if(ze.fans.length>0&&!Ce){const Fe=C?58:be?28:14;for(const De of ze.fans)De.rotation.z+=re*Fe}const Ct=g[le]||[];for(const Fe of ze.drives){const Ke=Ct.includes(Fe.driveIdx)?Fe.baseZ+.14:Fe.baseZ;Fe.mesh.position.z=cl.damp(Fe.mesh.position.z,Ke,12,re)}if(ze.leds.length>0&&!Ce&&Math.random()<.2){const Fe=Math.floor(Math.random()*ze.leds.length),De=ze.leds[Fe],Ke=Ct.includes(Fe),zt=De.material;Ke?(zt.color.setHex(16096779),zt.emissive.setHex(14251782)):(zt.color.setHex(Math.random()>.4?2278750:165063),zt.emissive.setHex(Math.random()>.4?1483594:165063))}if(ze.kvmScreenGroup){const Fe=be&&R?-Math.PI*.42:0;ze.kvmScreenGroup.rotation.x=cl.damp(ze.kvmScreenGroup.rotation.x,Fe,8,re)}}_e.render(Q,ve)};ke();const Vn=()=>{if(!L||!_e||!ve)return;const re=L.clientWidth,le=L.clientHeight;ve.aspect=re/le,ve.updateProjectionMatrix(),_e.setSize(re,le)};return window.addEventListener("resize",Vn),()=>{cancelAnimationFrame(tn),window.removeEventListener("resize",Vn),L.removeEventListener("mousemove",Ee),L.removeEventListener("click",Ne),L.removeEventListener("mousedown",Pe),window.removeEventListener("mouseup",pt),L.removeEventListener("mousemove",_t),L.removeEventListener("wheel",Mt),L.contains(_e.domElement)&&L.removeChild(_e.domElement),_e.dispose()}},[t,e,r,B,p,g,x,_,C,R,M,d,I]);const Ie=L=>{var _e;if(Be.playKeyClick(),L.isReserved){Be.playErrorBeep(),Ue(`⚠️ Port ${L.portId} is reserved (dust cap attached). Cabling blocked.`);return}const[W,$]=L.portId.split(":"),Q=t.devices.get(W),ve=Q==null?void 0:Q.getInterface($);if(ve!=null&&ve.peer){const he=t.disconnectLink(L.portId);he.ok?(Be.playCableSnap(),Ue(`🔌 Unplugged cable from ${L.portId}. Cable returned to inventory.`),i(null),me(null),B()):(Be.playErrorBeep(),Ue(`⚠️ ${he.reason||"Cannot unplug cable"}`));return}if(n){if(n===L.portId){i(null),Ue("Cabling cancelled.");return}const he=t.connectLink(n,L.portId);if(he.ok){Be.playCableSnap();const rt=((_e=Il.find(ot=>ot.css===H))==null?void 0:_e.hex)||2450411,je=`${n}-${L.portId}`;te(ot=>({...ot,[je]:rt})),me(je),Ue(`✅ Connected Cat6 cable: ${n} ↔ ${L.portId}`),i(null),B()}else Be.playErrorBeep(),Ue(`❌ Cabling rejected: ${he.reason||"Invalid connection"}`),i(null)}else{if(t.spareCablesCount<=0){Be.playErrorBeep(),Ue("⚠️ No spare cables remaining in inventory.");return}i(L.portId),Ue(`Selected port ${L.portId}. Now click a destination port to plug in cable.`)}},oe=de.useMemo(()=>Ps.find(L=>L.id===d)||Ps[2],[d]);return f.jsxs("div",{className:"relative w-full h-full select-none overflow-hidden bg-slate-950 font-sans",children:[f.jsx("div",{ref:s,className:"w-full h-full"}),f.jsxs("div",{className:"absolute top-4 left-4 z-10 flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl text-xs font-medium text-slate-300",children:[f.jsxs("span",{className:"px-2 py-1 text-slate-400 flex items-center gap-1",children:[f.jsx(k0,{className:"w-3.5 h-3.5 text-cyan-400"})," Angles:"]}),f.jsx("button",{onClick:()=>Ae("overview"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-white transition",children:"Overview"}),f.jsx("button",{onClick:()=>Ae("rack_a"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition",children:"Rack A"}),f.jsx("button",{onClick:()=>Ae("rack_b"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition",children:"Rack B"}),f.jsx("button",{onClick:()=>Ae("kvm"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-purple-400 transition",children:"KVM Drawer"}),f.jsx("button",{onClick:()=>Ae("desk_1"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-emerald-400 transition",children:"Desk 1"}),t.devices.has("PC-B")&&f.jsx("button",{onClick:()=>Ae("desk_2"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition",children:"Desk 2"})]}),f.jsxs("div",{className:"absolute top-4 right-4 z-10 flex items-center gap-3 p-2 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400"}),f.jsxs("span",{className:"text-slate-300",children:["Spare Cables: ",f.jsx("strong",{className:"text-cyan-300 font-mono text-sm",children:t.spareCablesCount})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5 pl-2 border-l border-slate-700",children:[f.jsx("span",{className:"text-slate-400 text-[11px]",children:"Active Color:"}),f.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-white/40 shadow-sm",style:{backgroundColor:H},title:H})]}),K&&f.jsxs("div",{className:"flex items-center gap-1.5 pl-2 border-l border-slate-700",children:[f.jsx("span",{className:"text-cyan-300 font-mono text-[11px] truncate max-w-[140px]",title:K,children:K}),f.jsx("button",{onClick:()=>me(null),className:"text-slate-400 hover:text-white px-1",children:"×"})]}),n&&f.jsxs("div",{className:"flex items-center gap-2 pl-3 border-l border-slate-700",children:[f.jsx("span",{className:"text-amber-300",children:"Holding cable from:"}),f.jsx("span",{className:"font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40 font-semibold",children:n}),f.jsx("button",{onClick:()=>i(null),className:"text-slate-400 hover:text-red-400 ml-1 px-1.5 py-0.5 rounded bg-slate-800 hover:bg-red-950/60 transition",children:"Cancel"})]})]}),a&&f.jsxs("div",{className:"absolute bottom-28 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-xl bg-slate-900/95 border border-cyan-500/40 text-xs shadow-2xl pointer-events-none flex items-center gap-3",children:[f.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400"}),f.jsxs("div",{children:[f.jsx("div",{className:"text-cyan-300 font-mono font-semibold",children:a}),f.jsx("div",{className:"text-slate-400 text-[11px]",children:t.reservedPorts.has(a)?"⚠️ Reserved Port (Dust Cap Attached)":"Click to attach / disconnect cable"})]})]}),l&&!a&&f.jsxs("div",{className:"absolute bottom-28 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-xl bg-slate-900/95 border border-indigo-500/40 text-xs shadow-2xl pointer-events-none flex items-center gap-3",children:[f.jsx("div",{className:"w-2 h-2 rounded-full bg-indigo-400"}),f.jsxs("div",{children:[f.jsx("div",{className:"text-indigo-300 font-semibold",children:l}),f.jsx("div",{className:"text-slate-400 text-[11px]",children:"Click to inspect unit, slide rails, or eject drive"})]})]}),f.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center max-w-5xl w-[96%]",children:[f.jsxs("button",{onClick:()=>{Be.playKeyClick(),fe(!X)},className:"flex items-center gap-1.5 px-4 py-1.5 rounded-t-xl bg-slate-900/90 border-t border-x border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition shadow-lg",children:[X?f.jsx(Wx,{className:"w-3.5 h-3.5 text-cyan-400"}):f.jsx(Hx,{className:"w-3.5 h-3.5 text-cyan-400"}),f.jsx("span",{children:X?"Expand 3D Server Room Studio Controls":"Hide Controls"})]}),!X&&f.jsxs("div",{className:"w-full rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl overflow-hidden animate-fade-in flex flex-col",children:[f.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-slate-800 text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[f.jsxs("button",{onClick:()=>pe("chassis"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${Me==="chassis"?"bg-indigo-500/20 text-indigo-300 border border-indigo-500/40":"text-slate-400 hover:text-slate-200"}`,children:[f.jsx(D0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Chassis Mechanics & Rails"})]}),f.jsxs("button",{onClick:()=>pe("cables"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${Me==="cables"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40":"text-slate-400 hover:text-slate-200"}`,children:[f.jsx(QC,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Cable Studio & Palette"})]}),f.jsxs("button",{onClick:()=>pe("catalog"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${Me==="catalog"?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"text-slate-400 hover:text-slate-200"}`,children:[f.jsx(sA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Rack Equipment Catalog"})]}),f.jsxs("button",{onClick:()=>pe("cameras"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${Me==="cameras"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"text-slate-400 hover:text-slate-200"}`,children:[f.jsx(k0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Camera Angles"})]})]}),f.jsx("div",{className:"text-[11px] text-slate-500 font-mono hidden md:block",children:"Click chassis/ports/cables to interact • Drag to orbit • Scroll to zoom"})]}),Me==="chassis"&&f.jsxs("div",{className:"p-4 flex flex-col gap-3 text-xs",children:[f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2.5",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40",children:f.jsx(D0,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("div",{className:"font-bold text-white text-sm flex items-center gap-2",children:[f.jsx("span",{children:oe.name}),f.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono border border-slate-700",children:[oe.rack," • Slot ",oe.slot," (",oe.uHeight,"U)"]}),f.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded font-mono border ${_.includes(oe.id)?"bg-amber-950 text-amber-300 border-amber-800":"bg-emerald-950 text-emerald-300 border-emerald-800"}`,children:_.includes(oe.id)?"STANDBY":"RUNNING"})]}),f.jsx("p",{className:"text-[11px] text-slate-400",children:oe.specs})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[f.jsx("span",{className:"text-slate-400 text-[11px] mr-1",children:"Select Unit:"}),Ps.filter(L=>L.canSlide||L.driveCount||L.isKvm).map(L=>f.jsx("button",{onClick:()=>{Be.playKeyClick(),h(L.id)},className:`px-2 py-0.8 rounded text-[11px] font-mono transition ${d===L.id?"bg-indigo-600 text-white font-bold":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:L.id},L.id))]})]}),f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3 pt-1",children:[f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[oe.canSlide&&f.jsxs("button",{onClick:()=>bt(oe.id),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-lg transition ${p.includes(oe.id)?"bg-indigo-600 hover:bg-indigo-500 text-white":"bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-indigo-500/30"}`,children:[f.jsx(cA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:p.includes(oe.id)?"Retract Rails":"Extend Rails (Slide Out)"})]}),oe.canSlide&&!oe.isKvm&&f.jsxs("button",{onClick:()=>He(oe.id),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${x.includes(oe.id)?"bg-amber-600/30 border border-amber-500/50 text-amber-300":"bg-slate-800 hover:bg-slate-700 text-slate-300"}`,children:[f.jsx(XC,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:x.includes(oe.id)?"Replace Top Lid":"Remove Top Lid (Inspect Board)"})]}),oe.isKvm&&f.jsxs("button",{onClick:()=>{Be.playKeyClick(),E(!R),Ue(R?"Folded LCD display down.":"Flipped LCD display up 75° to view status.")},className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${R?"bg-purple-600 text-white shadow-lg":"bg-slate-800 text-purple-300 hover:bg-slate-700"}`,children:[f.jsx(h_,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:R?"Fold LCD Down":"Flip LCD Monitor Up"})]}),f.jsxs("button",{onClick:()=>N(oe.id),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${_.includes(oe.id)?"bg-emerald-600 hover:bg-emerald-500 text-white":"bg-slate-800 hover:bg-slate-700 text-red-400 border border-red-500/30"}`,children:[f.jsx(eA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:_.includes(oe.id)?"Boot / Power Up":"Power Down"})]}),f.jsxs("button",{onClick:()=>{Be.playFanSpool(),T(!C),Ue(C?"Fan speed returned to normal (4,500 RPM).":"🌪️ Turbo Fan Mode Enabled: 14,500 RPM full blast.")},className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${C?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30":"bg-slate-800 hover:bg-slate-700 text-cyan-300"}`,children:[f.jsx(dA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:C?"Turbo Fan 14,500 RPM":"Normal Fan Speed"})]}),t.devices.has(oe.id)&&f.jsxs("button",{onClick:()=>{Be.playKeyClick(),e(oe.id)},className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-mono text-xs flex items-center gap-1.5 transition border border-cyan-500/30",children:[f.jsx(No,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Open Console"})]})]}),f.jsxs("div",{className:"flex items-center gap-2 pl-3 border-l border-slate-800",children:[f.jsx(lA,{className:"w-3.5 h-3.5 text-slate-400"}),f.jsx("span",{className:"text-slate-400 text-[11px]",children:"Exploded View:"}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:M,onChange:L=>P(parseFloat(L.target.value)),className:"w-24 accent-indigo-500 h-1 bg-slate-800 rounded-lg cursor-pointer"}),f.jsxs("span",{className:"font-mono text-[10px] text-indigo-300 w-8",children:[Math.round(M*100),"%"]})]})]}),oe.driveCount&&f.jsxs("div",{className:"mt-1 p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between flex-wrap gap-2",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(qC,{className:"w-4 h-4 text-emerald-400"}),f.jsxs("span",{className:"text-slate-300 font-medium text-[11px]",children:["Hot-Swap SAS Drive Trays (",oe.driveCount," Bays):"]}),f.jsx("span",{className:"text-[10px] text-slate-500",children:"Click tray number to eject or latch back:"})]}),f.jsx("div",{className:"flex items-center gap-1.5 flex-wrap",children:Array.from({length:oe.driveCount}).map((L,W)=>{const $=(g[oe.id]||[]).includes(W);return f.jsxs("button",{onClick:()=>w(oe.id,W),className:`px-2 py-0.5 rounded font-mono text-[10px] flex items-center gap-1 transition ${$?"bg-amber-500 text-slate-950 font-bold border border-amber-400":"bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`,title:`Drive #${W+1}: ${$?"Ejected":"Latched in backplane"}`,children:[f.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${$?"bg-amber-950":"bg-emerald-400"}`}),f.jsxs("span",{children:["#",W+1]}),$&&f.jsx("span",{className:"text-[9px] uppercase",children:"OUT"})]},W)})})]})]}),Me==="cables"&&f.jsxs("div",{className:"p-4 flex flex-col gap-3 text-xs",children:[f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3 border-b border-slate-800 pb-2.5",children:[f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[f.jsxs("span",{className:"text-slate-400 text-xs font-semibold flex items-center gap-1.5",children:[f.jsx(qf,{className:"w-4 h-4 text-cyan-400"})," Palette:"]}),Il.map(L=>{const W=H===L.css;return f.jsxs("button",{onClick:()=>{Be.playKeyClick(),z(L.css),K?Z(L.hex):Ue(`Selected ${L.label} (${L.role}) for next cables.`)},className:`group relative flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition ${W?"bg-slate-800 border-white text-white font-bold shadow-md":"bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[f.jsx("span",{className:"w-3 h-3 rounded-full border border-white/30 shrink-0",style:{backgroundColor:L.css}}),f.jsx("span",{className:"text-[11px]",children:L.label}),W&&f.jsx(Bx,{className:"w-3 h-3 text-white ml-0.5"})]},L.id)})]}),f.jsxs("div",{className:"flex items-center gap-1.5 pl-2 border-l border-slate-800",children:[f.jsx("input",{type:"color",value:Le,onChange:L=>{ht(L.target.value),z(L.target.value),K&&Z(parseInt(L.target.value.replace("#","0x"),16))},className:"w-7 h-7 rounded border border-slate-700 cursor-pointer bg-transparent",title:"Custom Color Picker"}),f.jsx("input",{type:"text",value:Le,onChange:L=>{ht(L.target.value),/^#[0-9A-Fa-f]{6}$/.test(L.target.value)&&(z(L.target.value),K&&Z(parseInt(L.target.value.replace("#","0x"),16)))},className:"w-16 px-1.5 py-0.5 bg-slate-950 border border-slate-800 rounded text-cyan-300 font-mono text-[11px]"})]})]}),f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3 pt-1",children:[K?f.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs",children:[f.jsxs("span",{className:"text-cyan-300 font-semibold flex items-center gap-1",children:[f.jsx(qf,{className:"w-3.5 h-3.5"})," Selected Cable:"]}),f.jsx("span",{className:"font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 font-semibold",children:K}),f.jsx("button",{onClick:()=>{var W;const L=((W=Il.find($=>$.css===H))==null?void 0:W.hex)||2450411;Z(L)},className:"px-2 py-0.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-[11px]",children:"Apply Active Color"}),f.jsx("button",{onClick:()=>{const[L]=K.split("-");t.disconnectLink(L).ok&&(Be.playCableSnap(),me(null),B(),Ue(`Unplugged cable ${K}`))},className:"px-2 py-0.5 rounded bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 text-[11px]",children:"Unplug"}),f.jsx("button",{onClick:()=>me(null),className:"text-slate-400 hover:text-white px-1 ml-1",children:"Close"})]}):f.jsxs("div",{className:"text-slate-400 text-[11px] flex items-center gap-1.5",children:[f.jsx(YC,{className:"w-3.5 h-3.5 text-cyan-400"}),f.jsx("span",{children:"Click any cable directly in the 3D server room to customize its jacket color & tension."})]}),f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[f.jsxs("button",{onClick:ae,className:"px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-600/20 transition",children:[f.jsx(tA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"TIA-606-C Standards Auto-Color"})]}),f.jsxs("button",{onClick:()=>{var W;const L=((W=Il.find($=>$.css===H))==null?void 0:W.hex)||2450411;ie(L)},className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition",children:[f.jsx(uA,{className:"w-3 h-3 text-amber-400"}),f.jsx("span",{children:"Color All Cables"})]}),f.jsxs("div",{className:"flex items-center gap-1.5 pl-2 border-l border-slate-800",children:[f.jsx("span",{className:"text-slate-400 text-[11px]",children:"Sag:"}),f.jsx("input",{type:"range",min:"0.10",max:"0.55",step:"0.02",value:q,onChange:L=>se(parseFloat(L.target.value)),className:"w-16 accent-cyan-400 h-1 bg-slate-800 rounded-lg cursor-pointer",title:"Cable Slack / Catenary Curve"})]}),f.jsx("button",{onClick:()=>{Be.playKeyClick(),J(!I),Ue(I?"Packet pulses paused.":"Active packet light pulses enabled.")},className:`p-1.5 rounded-lg border transition ${I?"bg-cyan-950 text-cyan-300 border-cyan-800":"bg-slate-800 text-slate-400 border-slate-700"}`,title:"Toggle animated packet pulses",children:f.jsx(fA,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:()=>{Be.playKeyClick(),te({}),me(null),Ue("Reset all cables to enterprise role standards.")},className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition",title:"Reset all colors to default standards",children:f.jsx(y_,{className:"w-3.5 h-3.5"})})]})]})]}),Me==="catalog"&&f.jsx("div",{className:"p-4 flex flex-col gap-3 text-xs max-h-56 overflow-y-auto",children:f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[f.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col gap-2",children:[f.jsxs("div",{className:"font-bold text-cyan-300 flex items-center justify-between border-b border-slate-800 pb-1.5",children:[f.jsx("span",{children:"Rack A (Production Infrastructure)"}),f.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:'19" 42U Standard Cage'})]}),f.jsx("div",{className:"flex flex-col gap-1.5",children:Ps.filter(L=>L.rack==="Rack A").map(L=>f.jsxs("div",{onClick:()=>{Be.playKeyClick(),h(L.id),pe("chassis")},className:`p-2 rounded-lg border cursor-pointer transition flex items-center justify-between ${d===L.id?"bg-indigo-950/60 border-indigo-500/60 text-white":"bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700"}`,children:[f.jsxs("div",{children:[f.jsxs("div",{className:"font-semibold text-xs flex items-center gap-1.5",children:[f.jsx("span",{className:"font-mono text-cyan-400 text-[11px]",children:L.id}),f.jsx("span",{children:L.name})]}),f.jsx("div",{className:"text-[10px] text-slate-400 truncate max-w-sm",children:L.specs})]}),f.jsxs("div",{className:"text-[10px] text-slate-500 font-mono shrink-0",children:["Slot ",L.slot," • ",L.uHeight,"U"]})]},L.id))})]}),f.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col gap-2",children:[f.jsxs("div",{className:"font-bold text-cyan-300 flex items-center justify-between border-b border-slate-800 pb-1.5",children:[f.jsx("span",{children:"Rack B (SAN Storage & Redundant Core)"}),f.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:'19" 42U Standard Cage'})]}),f.jsx("div",{className:"flex flex-col gap-1.5",children:Ps.filter(L=>L.rack==="Rack B").map(L=>f.jsxs("div",{onClick:()=>{Be.playKeyClick(),h(L.id),pe("chassis")},className:`p-2 rounded-lg border cursor-pointer transition flex items-center justify-between ${d===L.id?"bg-indigo-950/60 border-indigo-500/60 text-white":"bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700"}`,children:[f.jsxs("div",{children:[f.jsxs("div",{className:"font-semibold text-xs flex items-center gap-1.5",children:[f.jsx("span",{className:"font-mono text-cyan-400 text-[11px]",children:L.id}),f.jsx("span",{children:L.name})]}),f.jsx("div",{className:"text-[10px] text-slate-400 truncate max-w-sm",children:L.specs})]}),f.jsxs("div",{className:"text-[10px] text-slate-500 font-mono shrink-0",children:["Slot ",L.slot," • ",L.uHeight,"U"]})]},L.id))})]})]})}),Me==="cameras"&&f.jsxs("div",{className:"p-4 flex items-center justify-between gap-2 flex-wrap text-xs",children:[f.jsx("span",{className:"text-slate-400 text-xs font-semibold",children:"Camera Positions:"}),f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[f.jsx("button",{onClick:()=>Ae("overview"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600/30 hover:text-emerald-300 text-slate-300 transition",children:"Full Room Overview"}),f.jsx("button",{onClick:()=>Ae("rack_a"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-600/30 hover:text-cyan-300 text-slate-300 transition",children:"Rack A (Production Gear)"}),f.jsx("button",{onClick:()=>Ae("rack_b"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-600/30 hover:text-cyan-300 text-slate-300 transition",children:"Rack B (SAN & Secondary)"}),f.jsx("button",{onClick:()=>Ae("kvm"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-purple-600/30 hover:text-purple-300 text-slate-300 transition",children:"KVM Console Drawer"}),f.jsx("button",{onClick:()=>Ae("desk_1"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600/30 hover:text-emerald-300 text-slate-300 transition",children:"Desk 1 (PC-A / SOC)"}),t.devices.has("PC-B")&&f.jsx("button",{onClick:()=>Ae("desk_2"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-600/30 hover:text-amber-300 text-slate-300 transition",children:"Desk 2 (Sales PC-B)"}),f.jsx("button",{onClick:()=>Ae("soc"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-sky-600/30 hover:text-sky-300 text-slate-300 transition",children:"Wall SOC Monitor"})]})]})]})]}),f.jsx("div",{className:"absolute bottom-4 left-4 z-10 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400",children:f.jsx("span",{children:"Click ports to cable • Click cables to recolor • Click chassis to extend rails • Click drive trays to eject"})}),v&&f.jsx("div",{className:"absolute top-16 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-xl bg-slate-900/95 border border-cyan-500/50 text-xs text-cyan-200 shadow-2xl animate-fade-in flex items-center gap-2 max-w-lg text-center",children:f.jsx("span",{children:v})})]})},pA=({sim:t,deviceId:e,onClose:n,onSwitchDevice:i,onOpenCodeEditor:r})=>{const[s,a]=de.useState(null),[o,l]=de.useState([]),[c,d]=de.useState(""),[h,p]=de.useState(-1),[m,v]=de.useState(!0),[S,g]=de.useState(!1),[u,x]=de.useState(!1),y=de.useRef(null),_=de.useRef(null);if(de.useEffect(()=>{try{const E=t.openSession(e);a(E);const M=E.device;let P="";M.type===tt.ROUTER||M.type===tt.SWITCH?P=`Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.2(4)M5, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Compiled Fri 12-Sep-14 17:02 by prod_rel_team

Press RETURN to get started!`:M.type===tt.HOST?P=`Microsoft Windows [Version 10.0.19045.3803]
(c) Microsoft Corporation. All rights reserved.
Type "help" for available commands.`:M.type===tt.SERVER&&(P=`Linux ${M.hostname} 5.15.0-89-generic #99-Ubuntu SMP x86_64

The programs included with the Ubuntu system are free software.
Type "help" for available commands.`),l([{type:"system",text:P},{type:"output",text:""}]),d(""),p(-1)}catch(E){console.error(E)}},[t,e]),de.useEffect(()=>{var E;(E=y.current)==null||E.focus()},[e,o]),de.useEffect(()=>{_.current&&(_.current.scrollTop=_.current.scrollHeight)},[o]),!s)return null;const A=s.getPrompt(),C=E=>{if(m&&Be.playKeyClick(),E.key==="Enter"){E.preventDefault();const M=c,P=s.execute(M);if(l(H=>[...H,{type:"input",text:M,prompt:A},...P.output?[{type:"output",text:P.output}]:[]]),d(""),p(-1),P.action===ee.CLOSE_SESSION){n();return}P.action===ee.OPEN_EDITOR&&P.actionArg&&r&&r(P.actionArg);return}if(E.key==="ArrowUp"){E.preventDefault();const M=s.history;if(M.length===0)return;const P=h===-1?M.length-1:Math.max(0,h-1);p(P),d(M[P]||"");return}if(E.key==="ArrowDown"){E.preventDefault();const M=s.history;if(M.length===0||h===-1)return;const P=h+1;P>=M.length?(p(-1),d("")):(p(P),d(M[P]||""));return}if(E.key==="Tab"){E.preventDefault(),T();return}if(E.key==="?"&&(s.device.type===tt.ROUTER||s.device.type===tt.SWITCH)){E.preventDefault(),R();return}if(E.ctrlKey&&E.key==="z"){E.preventDefault();const M=s.execute("end");l(P=>[...P,{type:"input",text:"^Z",prompt:A},...M.output?[{type:"output",text:M.output}]:[]]),d("");return}if(E.ctrlKey&&E.key==="c"){E.preventDefault(),l(M=>[...M,{type:"input",text:"^C",prompt:A}]),d("");return}},T=()=>{const M=c.trimStart().split(" "),P=M[M.length-1];if(!P)return;let H=[];s.device.type===tt.ROUTER||s.device.type===tt.SWITCH?H=["enable","disable","configure","terminal","interface","shutdown","no","ip","address","vlan","name","switchport","mode","access","trunk","encapsulation","dot1Q","show","running-config","brief","ping","exit","end"]:s.device.type===tt.HOST?H=["ipconfig","ping","curl","help","cls"]:H=["ls","cat","grep","tail","edit","service","status","help","clear"];const z=H.filter(Y=>Y.toLowerCase().startsWith(P.toLowerCase()));z.length===1&&(M[M.length-1]=z[0],d(M.join(" ")+" "))},R=()=>{const E=["Exec & Config Commands:","  enable          Turn on privileged commands","  disable         Turn off privileged commands","  configure       Enter configuration mode","  hostname        Set system network name","  interface       Select an interface to configure","  vlan            Configure VLAN parameters","  switchport      Set switching characteristics of the interface","  encapsulation   Set encapsulation method (e.g. dot1Q)","  ip              Global IP configuration subcommands","  shutdown        Shutdown the selected interface","  show            Show running system information","  ping            Send echo messages","  exit            Exit from the EXEC","  end             Exit to privileged EXEC mode"].join(`
`);l(M=>[...M,{type:"input",text:`${c}?`,prompt:A},{type:"output",text:E}])};return f.jsxs("div",{className:`fixed z-40 flex flex-col bg-slate-950/95 backdrop-blur-xl border border-slate-700 shadow-2xl transition-all duration-200 ${u?"inset-2 rounded-2xl":"bottom-4 right-4 w-[680px] h-[520px] rounded-2xl max-w-[calc(100vw-32px)] max-h-[calc(100vh-32px)]"}`,children:[f.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 rounded-t-2xl",children:[f.jsxs("div",{className:"flex items-center gap-2.5",children:[f.jsx(No,{className:"w-4 h-4 text-cyan-400"}),f.jsxs("span",{className:"font-mono text-xs font-semibold text-slate-200 flex items-center gap-2",children:[f.jsx("span",{children:"Terminal:"}),f.jsxs("span",{className:"px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60",children:[s.device.hostname," (",s.device.id,")"]})]}),f.jsx("div",{className:"hidden sm:flex items-center gap-1 ml-2 pl-2 border-l border-slate-700",children:Array.from(t.devices.values()).map(E=>f.jsx("button",{onClick:()=>i(E.id),className:`px-2 py-0.5 rounded text-[11px] font-mono transition ${E.id===e?"bg-cyan-500 text-slate-950 font-bold":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:E.hostname||E.id},E.id))})]}),f.jsxs("div",{className:"flex items-center gap-1.5 text-slate-400",children:[f.jsx("button",{onClick:()=>g(!S),title:"Command Cheatsheet",className:`p-1.5 rounded-lg hover:bg-slate-800 hover:text-cyan-300 transition ${S?"text-cyan-400 bg-slate-800":""}`,children:f.jsx(Xf,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:()=>{v(!m),Be.enabled=!m},title:m?"Mute Audio":"Enable Audio",className:"p-1.5 rounded-lg hover:bg-slate-800 hover:text-slate-200 transition",children:m?f.jsx(D_,{className:"w-3.5 h-3.5 text-cyan-400"}):f.jsx(O_,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:()=>x(!u),title:u?"Restore":"Maximize",className:"p-1.5 rounded-lg hover:bg-slate-800 hover:text-slate-200 transition",children:u?f.jsx(ZC,{className:"w-3.5 h-3.5"}):f.jsx(h_,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:n,title:"Close Terminal (Esc)",className:"p-1.5 rounded-lg hover:bg-red-950/80 hover:text-red-400 transition",children:f.jsx(Bo,{className:"w-4 h-4"})})]})]}),f.jsxs("div",{className:"relative flex-1 flex overflow-hidden",children:[f.jsxs("div",{ref:_,onClick:()=>{var E;return(E=y.current)==null?void 0:E.focus()},className:"flex-1 p-4 font-mono text-xs overflow-y-auto leading-relaxed select-text crt-screen",children:[o.map((E,M)=>f.jsxs("div",{className:"whitespace-pre-wrap break-all",children:[E.type==="input"&&f.jsxs("div",{className:"flex items-start text-emerald-400 font-semibold mt-1",children:[f.jsx("span",{className:"text-slate-400 mr-2 select-none",children:E.prompt}),f.jsx("span",{children:E.text})]}),E.type==="output"&&f.jsx("div",{className:"text-slate-300 ml-1 mb-1",children:E.text}),E.type==="system"&&f.jsx("div",{className:"text-slate-500 mb-2",children:E.text})]},M)),f.jsxs("div",{className:"flex items-center text-emerald-400 font-semibold mt-1",children:[f.jsx("span",{className:"text-slate-400 mr-2 select-none",children:A}),f.jsx("div",{className:"relative flex-1 flex items-center",children:f.jsx("input",{ref:y,type:"text",value:c,onChange:E=>d(E.target.value),onKeyDown:C,className:"w-full bg-transparent outline-none text-emerald-400 font-mono caret-cyan-400 text-xs",autoFocus:!0,spellCheck:!1,autoCapitalize:"off",autoComplete:"off"})})]})]}),S&&f.jsxs("div",{className:"w-64 border-l border-slate-800 bg-slate-900/90 p-3 text-xs overflow-y-auto font-mono text-slate-300",children:[f.jsxs("div",{className:"font-sans font-bold text-cyan-400 mb-2 flex items-center gap-1.5",children:[f.jsx(Xf,{className:"w-3.5 h-3.5"})," Cheatsheet"]}),s.device.type===tt.ROUTER&&f.jsxs("div",{className:"space-y-3 text-[11px]",children:[f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"1. Enable & Global Config:"}),f.jsx("div",{className:"text-emerald-400",children:"enable"}),f.jsx("div",{className:"text-emerald-400",children:"configure terminal"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"2. Bring physical interface up:"}),f.jsx("div",{className:"text-emerald-400",children:"interface gi0/0"}),f.jsx("div",{className:"text-emerald-400",children:"no shutdown"}),f.jsx("div",{className:"text-emerald-400",children:"exit"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"3. Router-on-a-Stick subinterface:"}),f.jsx("div",{className:"text-emerald-400",children:"interface gi0/0.10"}),f.jsx("div",{className:"text-emerald-400",children:"encapsulation dot1Q 10"}),f.jsx("div",{className:"text-emerald-400",children:"ip address 192.168.10.1 255.255.255.0"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"4. Verification:"}),f.jsx("div",{className:"text-cyan-400",children:"show ip interface brief"}),f.jsx("div",{className:"text-cyan-400",children:"show running-config"})]})]}),s.device.type===tt.SWITCH&&f.jsxs("div",{className:"space-y-3 text-[11px]",children:[f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"1. Create VLAN:"}),f.jsx("div",{className:"text-emerald-400",children:"vlan 20"}),f.jsx("div",{className:"text-emerald-400",children:"name SALES"}),f.jsx("div",{className:"text-emerald-400",children:"exit"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"2. Assign Access Port:"}),f.jsx("div",{className:"text-emerald-400",children:"interface fa0/2"}),f.jsx("div",{className:"text-emerald-400",children:"switchport mode access"}),f.jsx("div",{className:"text-emerald-400",children:"switchport access vlan 20"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"3. Configure 802.1Q Trunk:"}),f.jsx("div",{className:"text-emerald-400",children:"interface gi0/1"}),f.jsx("div",{className:"text-emerald-400",children:"switchport mode trunk"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"4. Verification:"}),f.jsx("div",{className:"text-cyan-400",children:"show vlan brief"})]})]}),s.device.type===tt.HOST&&f.jsxs("div",{className:"space-y-3 text-[11px]",children:[f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Check IP Configuration:"}),f.jsx("div",{className:"text-emerald-400",children:"ipconfig"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Test Connectivity:"}),f.jsx("div",{className:"text-emerald-400",children:"ping 192.168.20.10"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Test Web Service:"}),f.jsx("div",{className:"text-emerald-400",children:`curl "http://10.0.10.5/login.php?user=' OR '1'='1"`})]})]}),s.device.type===tt.SERVER&&f.jsxs("div",{className:"space-y-3 text-[11px]",children:[f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Inspect Code / Logs:"}),f.jsx("div",{className:"text-emerald-400",children:"cat /var/www/login.php"}),f.jsx("div",{className:"text-emerald-400",children:"tail -n 20 /var/log/auth.log"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Open Patch Editor:"}),f.jsx("div",{className:"text-emerald-400",children:"edit /var/www/login.php"})]})]})]})]}),f.jsxs("div",{className:"px-4 py-1.5 bg-slate-900/90 border-t border-slate-800 rounded-b-2xl flex items-center justify-between text-[11px] text-slate-400",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("span",{children:"Tab: Auto-complete"}),f.jsx("span",{children:"?: Help list"}),f.jsx("span",{children:"Ctrl+Z: Exit config"}),f.jsx("span",{children:"Up/Down: History"})]}),f.jsx("div",{className:"text-slate-500 font-mono",children:"CCNA IOS Terminal Engine"})]})]})},mA=({sim:t,scenario:e,objectives:n,onOpenReport:i,onOpenCodeEditor:r,onOpenHint:s,onSelectMission:a,onRestartMission:o,allScenarios:l})=>{const[c,d]=de.useState(!1),[h,p]=de.useState(null),[m,v]=de.useState(!1),S=n.length>0&&n.every(x=>x.passed),g=()=>{var y,_;if(Be.playKeyClick(),s){s();return}const x=n.find(A=>!A.passed&&!A.locked&&A.hint);if(x)p(x.hint);else{const A=((_=(y=e.hints)==null?void 0:y[0])==null?void 0:_.text)||"Review network configurations and interface IP assignments.";p(A)}},u=t.debriefView();return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center max-w-xl w-[92%] sm:w-auto",children:[f.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("span",{className:"px-2 py-0.5 rounded-md bg-cyan-950 text-cyan-400 font-mono text-xs font-bold border border-cyan-800/80",children:["M",e.sequence]}),f.jsx("span",{className:"font-bold text-slate-100 text-sm",children:e.title})]}),f.jsxs("button",{onClick:()=>d(!c),className:"flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-300 transition pl-2 border-l border-slate-700",children:[f.jsx("span",{children:"Briefing"}),c?f.jsx(Wx,{className:"w-3.5 h-3.5"}):f.jsx(Hx,{className:"w-3.5 h-3.5"})]}),f.jsxs("button",{onClick:g,className:"flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-xs font-medium transition",children:[f.jsx(I0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Hint (H)"})]}),e.id==="m2_log_triage"&&i&&f.jsxs("button",{onClick:i,className:"flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 text-xs font-medium transition",children:[f.jsx(pa,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Incident Report"})]}),e.id==="m3_web_patch"&&r&&f.jsxs("button",{onClick:r,className:"flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 text-xs font-medium transition",children:[f.jsx(Kc,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Code Editor"})]}),S&&f.jsxs("button",{onClick:()=>v(!0),className:"flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs animate-pulse shadow-lg shadow-emerald-500/20 transition",children:[f.jsx(L0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Debrief"})]})]}),c&&f.jsxs("div",{className:"mt-2 p-4 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-700 shadow-2xl text-xs text-slate-300 max-w-lg animate-fade-in",children:[f.jsxs("div",{className:"font-semibold text-cyan-400 mb-1 flex items-center gap-1.5",children:[f.jsx(pa,{className:"w-4 h-4"})," Mission Ticket & Briefing"]}),f.jsx("p",{className:"leading-relaxed text-slate-300",children:e.briefing})]}),h&&f.jsxs("div",{className:"mt-2 p-3.5 rounded-xl bg-amber-950/90 backdrop-blur-xl border border-amber-600/50 shadow-2xl text-xs text-amber-200 max-w-lg flex items-start gap-2.5 animate-fade-in",children:[f.jsx(I0,{className:"w-4 h-4 text-amber-400 shrink-0 mt-0.5"}),f.jsxs("div",{className:"flex-1",children:[f.jsx("div",{className:"font-bold text-amber-300 mb-0.5",children:"Diagnostic Hint:"}),f.jsx("p",{className:"leading-relaxed",children:h})]}),f.jsx("button",{onClick:()=>p(null),className:"text-amber-400 hover:text-white text-xs px-1.5 py-0.5",children:"✕"})]})]}),f.jsxs("div",{className:"absolute top-20 left-4 z-20 w-80 max-h-[calc(100vh-140px)] flex flex-col rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 shadow-2xl overflow-hidden",children:[f.jsxs("div",{className:"px-3.5 py-2.5 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between",children:[f.jsxs("span",{className:"text-xs font-bold text-slate-200 flex items-center gap-1.5",children:[f.jsx(C_,{className:"w-4 h-4 text-cyan-400"}),f.jsx("span",{children:"Mission Objectives"})]}),f.jsxs("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-700",children:[n.filter(x=>x.passed).length," / ",n.length]})]}),f.jsx("div",{className:"p-3 space-y-2.5 overflow-y-auto text-xs",children:n.map(x=>f.jsx("div",{className:`p-2.5 rounded-xl border transition-all ${x.passed?"bg-emerald-950/30 border-emerald-500/40 text-emerald-300":x.locked?"bg-slate-950/40 border-slate-800 text-slate-500 opacity-60":"bg-slate-950/60 border-slate-800 text-slate-300"}`,children:f.jsxs("div",{className:"flex items-start gap-2",children:[x.passed?f.jsx(es,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-0.5"}):x.locked?f.jsx(Rc,{className:"w-4 h-4 text-slate-500 shrink-0 mt-0.5"}):f.jsx(Kx,{className:"w-4 h-4 text-slate-500 shrink-0 mt-0.5"}),f.jsxs("div",{className:"flex-1",children:[f.jsx("div",{className:"leading-snug",children:x.description}),x.detail&&!x.passed&&!x.locked&&f.jsxs("div",{className:"text-[11px] text-amber-400/90 font-mono mt-1",children:["Status: ",x.detail]})]})]})},x.id))}),f.jsxs("div",{className:"px-3 py-2 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400",children:[f.jsxs("button",{onClick:o,className:"flex items-center gap-1 hover:text-red-400 transition",children:[f.jsx(y_,{className:"w-3 h-3"}),f.jsx("span",{children:"Restart"})]}),s&&f.jsxs("button",{onClick:()=>{Be.playKeyClick(),s()},className:"text-amber-400/90 hover:text-amber-300 flex items-center gap-1 font-medium transition",children:[f.jsx(sp,{className:"w-3 h-3 text-amber-400"}),f.jsx("span",{children:"Step Guidance [H]"})]})]})]}),m&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"max-w-xl w-full rounded-2xl bg-slate-900 border border-emerald-500/50 shadow-2xl p-6 text-slate-200",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[f.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400",children:f.jsx(L0,{className:"w-6 h-6"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-lg font-bold text-white",children:"Mission Accomplished!"}),f.jsxs("p",{className:"text-xs text-emerald-400 font-mono",children:[e.title," — Verified"]})]})]}),f.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs leading-relaxed text-slate-300 mb-5",children:[f.jsx("h3",{className:"font-semibold text-cyan-400 mb-1",children:"Debrief & Technical Takeaways:"}),f.jsx("p",{children:(u==null?void 0:u.debrief)||e.debrief})]}),f.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-800",children:[f.jsx("button",{onClick:()=>v(!1),className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition",children:"Close & Explore"}),e.sequence<l.length?f.jsxs("button",{onClick:()=>{const x=l.find(y=>y.sequence===e.sequence+1);x&&a(x.id)},className:"px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 transition",children:[f.jsxs("span",{children:["Next: Mission ",e.sequence+1]}),f.jsx(HC,{className:"w-3.5 h-3.5"})]}):f.jsx("span",{className:"text-xs text-emerald-400 font-semibold",children:"Campaign Complete! 🎉"})]})]})})]})},gA=({sim:t,onClose:e,reportOnly:n=!1})=>{const[i,r]=de.useState(n?"report":"logs"),[s,a]=de.useState(""),[o,l]=de.useState(null),[c,d]=de.useState({attacker_ip:"",attack_type:"Brute force",compromised_user:""}),[h,p]=de.useState({}),m=t.currentScenario,v=(m==null?void 0:m.logs)||[],S=v.find(_=>_.file.includes("auth.log"))||v[0],g=S?S.lines:[],u=de.useMemo(()=>g.filter(_=>{if(o&&_.geo!==o)return!1;if(!s)return!0;const A=s.toLowerCase();return _.text.toLowerCase().includes(A)||_.src_ip&&_.src_ip.includes(A)||_.geo&&_.geo.toLowerCase().includes(A)}),[g,s,o]),x=de.useMemo(()=>{const _=new Map,A={NL:{x:50,y:32,name:"Netherlands (NL)"},CN:{x:78,y:42,name:"China (CN)"},RU:{x:72,y:26,name:"Russia (RU)"},US:{x:24,y:38,name:"United States (US)"}};for(const C of g)if(C.src_ip&&C.geo&&A[C.geo]){const T=C.geo,R=_.get(T);R?R.count++:_.set(T,{ip:C.src_ip,geo:C.geo,count:1,x:A[C.geo].x,y:A[C.geo].y,name:A[C.geo].name})}return Array.from(_.values())},[g]),y=_=>{const A=c[_]||"";if(!A.trim())return;Be.playKeyClick();const C=t.submitReport(_,A);C.correct?(Be.playSuccessBeep(),p(T=>({...T,[_]:{correct:!0,msg:"Verified Correct!"}}))):(Be.playErrorBeep(),p(T=>({...T,[_]:{correct:!1,msg:`Incorrect answer. ${C.attemptsLeft} attempts remaining.`}})))};return f.jsxs("div",{className:"fixed inset-4 z-40 flex flex-col rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-slate-700 shadow-2xl overflow-hidden animate-fade-in",children:[f.jsxs("div",{className:"flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/40",children:f.jsx(aA,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("h2",{className:"text-sm font-bold text-white flex items-center gap-2",children:[f.jsx("span",{children:"SOC Security Analytics & Incident Response"}),f.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800",children:"WEB1 Target"})]}),f.jsx("p",{className:"text-xs text-slate-400",children:"Log triage, geographic threat correlation, and formal reporting"})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5 p-1 rounded-xl bg-slate-800/80 border border-slate-700 text-xs",children:[f.jsxs("button",{onClick:()=>r("logs"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="logs"?"bg-sky-500 text-slate-950 font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(pa,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Auth Logs"})]}),f.jsxs("button",{onClick:()=>r("threatmap"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="threatmap"?"bg-sky-500 text-slate-950 font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(U0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Threat Map"})]}),f.jsxs("button",{onClick:()=>r("report"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="report"?"bg-sky-500 text-slate-950 font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(rA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Incident Report"})]})]}),f.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-slate-800 hover:bg-red-950/80 text-slate-400 hover:text-red-400 transition",children:f.jsx(Bo,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"flex-1 overflow-hidden flex flex-col",children:[i==="logs"&&f.jsxs("div",{className:"flex-1 flex flex-col p-4 overflow-hidden",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[f.jsxs("div",{className:"relative flex-1",children:[f.jsx(iA,{className:"w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"}),f.jsx("input",{type:"text",placeholder:"Filter by keyword (e.g., 'Failed', 'deploy', IP address, 'sshd')...",value:s,onChange:_=>a(_.target.value),className:"w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-slate-200 outline-none focus:border-sky-500 transition"})]}),o&&f.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-950 border border-sky-800 text-xs text-sky-300",children:[f.jsxs("span",{children:["Filtered: ",o]}),f.jsx("button",{onClick:()=>l(null),className:"hover:text-white ml-1",children:"✕"})]}),f.jsxs("div",{className:"text-xs font-mono text-slate-400 px-2",children:["Showing ",u.length," of ",g.length," entries"]})]}),f.jsx("div",{className:"flex-1 rounded-xl bg-slate-900/90 border border-slate-800 p-4 font-mono text-xs overflow-y-auto leading-relaxed select-text space-y-1 crt-screen",children:u.map((_,A)=>{const C=_.text.includes("Failed password"),T=_.text.includes("Accepted password"),R=_.text.includes("sudo");return f.jsxs("div",{className:`flex items-start gap-3 py-0.5 px-2 rounded hover:bg-slate-800/60 transition ${C?"text-red-400/90 bg-red-950/15":T?"text-emerald-400 bg-emerald-950/20 font-bold":R?"text-amber-300":"text-slate-300"}`,children:[f.jsx("span",{className:"text-slate-500 select-none shrink-0",children:_.t}),f.jsx("span",{className:"flex-1 break-all",children:_.text}),_.geo&&f.jsx("span",{className:"px-1.5 py-0.2 rounded bg-sky-950/80 text-sky-300 text-[10px] border border-sky-800 shrink-0 font-bold",children:_.geo})]},A)})})]}),i==="threatmap"&&f.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-hidden",children:[f.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsxs("h3",{className:"text-sm font-bold text-white flex items-center gap-2",children:[f.jsx(U0,{className:"w-4 h-4 text-sky-400"}),f.jsx("span",{children:"Geographic Origin of Authentication Inbound Requests"})]}),f.jsx("p",{className:"text-xs text-slate-400",children:"Click any country threat node to filter associated logs"})]}),f.jsx("div",{className:"flex items-center gap-2 text-xs",children:f.jsxs("span",{className:"flex items-center gap-1.5 text-red-400",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"}),f.jsx("span",{children:"Active Attack Origin"})]})})]}),f.jsx("div",{className:"relative flex-1 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center p-4",children:f.jsxs("svg",{className:"w-full h-full max-w-4xl max-h-[460px]",viewBox:"0 0 100 60",preserveAspectRatio:"xMidYMid meet",children:[f.jsx("path",{d:"M 0 30 L 100 30",stroke:"#1e293b",strokeWidth:"0.3",strokeDasharray:"1,1"}),f.jsx("path",{d:"M 50 0 L 50 60",stroke:"#1e293b",strokeWidth:"0.3",strokeDasharray:"1,1"}),f.jsx("path",{d:"M 12 16 L 28 14 L 32 28 L 22 40 L 14 30 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 24 38 L 34 38 L 30 54 L 25 50 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 46 16 L 56 16 L 58 28 L 48 28 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 46 30 L 60 30 L 56 50 L 50 48 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 60 14 L 88 16 L 84 40 L 62 36 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 80 44 L 92 44 L 90 54 L 82 52 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("circle",{cx:"25",cy:"30",r:"1.4",fill:"#0284c7"}),f.jsx("circle",{cx:"25",cy:"30",r:"3",fill:"none",stroke:"#0284c7",strokeWidth:"0.3",opacity:"0.7",children:f.jsx("animate",{attributeName:"r",values:"1.5;4;1.5",dur:"3s",repeatCount:"indefinite"})}),f.jsx("text",{x:"25",y:"34",fontSize:"1.8",fill:"#38bdf8",textAnchor:"middle",fontWeight:"bold",children:"WEB1 (DC)"}),x.map(_=>{const A=_.geo==="NL",C=A?"#ef4444":"#64748b",T=A?.8:.4,R=(_.x+25)/2,E=Math.min(_.y,30)-8;return f.jsxs("g",{onClick:()=>{Be.playKeyClick(),l(_.geo),r("logs")},className:"cursor-pointer group",children:[f.jsx("path",{d:`M ${_.x} ${_.y} Q ${R} ${E} 25 30`,fill:"none",stroke:C,strokeWidth:T,strokeDasharray:A?"1.5,1":"none",children:A&&f.jsx("animate",{attributeName:"stroke-dashoffset",values:"20;0",dur:"1.2s",repeatCount:"indefinite"})}),f.jsx("circle",{cx:_.x,cy:_.y,r:A?1.6:1.1,fill:A?"#ef4444":"#94a3b8"}),A&&f.jsx("circle",{cx:_.x,cy:_.y,r:"3",fill:"none",stroke:"#ef4444",strokeWidth:"0.4",children:f.jsx("animate",{attributeName:"r",values:"1.5;4.5;1.5",dur:"1.5s",repeatCount:"indefinite"})}),f.jsxs("text",{x:_.x,y:_.y-2.5,fontSize:"2.0",fill:A?"#f87171":"#cbd5e1",textAnchor:"middle",fontWeight:"bold",children:[_.name," (",_.count," events)"]}),f.jsx("text",{x:_.x,y:_.y+3.6,fontSize:"1.6",fill:"#94a3b8",textAnchor:"middle",fontFamily:"monospace",children:_.ip})]},_.geo)})]})})]}),i==="report"&&f.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto max-w-2xl mx-auto w-full",children:[f.jsxs("div",{className:"mb-6",children:[f.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[f.jsx(pa,{className:"w-5 h-5 text-sky-400"}),f.jsx("span",{children:"Incident Triage & Threat Report"})]}),f.jsx("p",{className:"text-xs text-slate-400",children:"Submit validated intelligence based on your log analysis. You have a maximum of 3 attempts per field."})]}),f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[f.jsx("label",{className:"block text-xs font-bold text-slate-200 mb-1",children:"1. Attacker External IPv4 Address"}),f.jsx("p",{className:"text-[11px] text-slate-400 mb-2",children:"The IP address responsible for repeated failed login attempts."}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("input",{type:"text",placeholder:"e.g. 203.0.113.45",value:c.attacker_ip,onChange:_=>d({...c,attacker_ip:_.target.value}),className:"flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-slate-100 outline-none focus:border-sky-500"}),f.jsx("button",{onClick:()=>y("attacker_ip"),className:"px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition",children:"Submit"})]}),h.attacker_ip&&f.jsxs("div",{className:`mt-2 text-xs font-medium flex items-center gap-1.5 ${h.attacker_ip.correct?"text-emerald-400":"text-red-400"}`,children:[h.attacker_ip.correct?f.jsx(es,{className:"w-3.5 h-3.5"}):f.jsx(Jl,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:h.attacker_ip.msg})]})]}),f.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[f.jsx("label",{className:"block text-xs font-bold text-slate-200 mb-1",children:"2. Attack Classification Vector"}),f.jsx("p",{className:"text-[11px] text-slate-400 mb-2",children:"The methodology observed in the authentication log patterns."}),f.jsxs("div",{className:"flex gap-2",children:[f.jsxs("select",{value:c.attack_type,onChange:_=>d({...c,attack_type:_.target.value}),className:"flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none focus:border-sky-500",children:[f.jsx("option",{value:"Brute force",children:"Brute force (Dictionary / Credential stuffing)"}),f.jsx("option",{value:"SQL injection",children:"SQL injection"}),f.jsx("option",{value:"Port scan",children:"Port scan"}),f.jsx("option",{value:"Phishing",children:"Phishing"})]}),f.jsx("button",{onClick:()=>y("attack_type"),className:"px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition",children:"Submit"})]}),h.attack_type&&f.jsxs("div",{className:`mt-2 text-xs font-medium flex items-center gap-1.5 ${h.attack_type.correct?"text-emerald-400":"text-red-400"}`,children:[h.attack_type.correct?f.jsx(es,{className:"w-3.5 h-3.5"}):f.jsx(Jl,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:h.attack_type.msg})]})]}),f.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[f.jsx("label",{className:"block text-xs font-bold text-slate-200 mb-1",children:"3. Compromised User Account"}),f.jsx("p",{className:"text-[11px] text-slate-400 mb-2",children:"The specific username that resulted in 'Accepted password' and an open session."}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("input",{type:"text",placeholder:"e.g. deploy",value:c.compromised_user,onChange:_=>d({...c,compromised_user:_.target.value}),className:"flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-slate-100 outline-none focus:border-sky-500"}),f.jsx("button",{onClick:()=>y("compromised_user"),className:"px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition",children:"Submit"})]}),h.compromised_user&&f.jsxs("div",{className:`mt-2 text-xs font-medium flex items-center gap-1.5 ${h.compromised_user.correct?"text-emerald-400":"text-red-400"}`,children:[h.compromised_user.correct?f.jsx(es,{className:"w-3.5 h-3.5"}):f.jsx(Jl,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:h.compromised_user.msg})]})]})]})]})]})]})},vA=({sim:t,onClose:e,initialFile:n="/var/www/login.php"})=>{const[i,r]=de.useState(n),[s,a]=de.useState(""),[o,l]=de.useState(null),c="WEB1",d=t.devices.get(c);t.patchViews(c,i);const h=d==null?void 0:d.vulns.find(x=>x.region.file===i),m=(t.readFile(c,i)||"").split(`
`),v=h?m.slice(0,h.region.firstLine-1):[],S=h?m.slice(h.region.lastLine):[];de.useEffect(()=>{if(h){const x=m.slice(h.region.firstLine-1,h.region.lastLine);a(x.join(`
`)),l(null)}},[i,h]);const g=()=>{if(!h)return;Be.playKeyClick();const x=t.writePatch(c,h.id,s);x.accepted?(Be.playSuccessBeep(),l({accepted:!0})):(Be.playErrorBeep(),l({accepted:!1,hint:x.hint||h.hint}))},u=()=>{i==="/var/www/login.php"?a(`  $res = $db->prepare("SELECT * FROM users WHERE name = ?");
  $res->execute([$user]);`):i==="/var/www/search.php"&&a(`  echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`)};return f.jsxs("div",{className:"fixed inset-4 z-40 flex flex-col rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-indigo-500/50 shadow-2xl overflow-hidden animate-fade-in",children:[f.jsxs("div",{className:"flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40",children:f.jsx(Kc,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("h2",{className:"text-sm font-bold text-white flex items-center gap-2",children:[f.jsx("span",{children:"Security Code Patch Editor"}),f.jsxs("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800",children:[c,":",i]})]}),f.jsx("p",{className:"text-xs text-slate-400",children:"Fix vulnerabilities using secure coding standards"})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5 p-1 rounded-xl bg-slate-800/80 border border-slate-700 text-xs",children:[f.jsxs("button",{onClick:()=>r("/var/www/login.php"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="/var/www/login.php"?"bg-indigo-500 text-white font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(O0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"login.php (SQLi)"})]}),f.jsxs("button",{onClick:()=>r("/var/www/search.php"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="/var/www/search.php"?"bg-indigo-500 text-white font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(O0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"search.php (XSS)"})]})]}),f.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-slate-800 hover:bg-red-950/80 text-slate-400 hover:text-red-400 transition",children:f.jsx(Bo,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[f.jsxs("div",{className:"flex-1 flex flex-col p-4 overflow-y-auto font-mono text-xs leading-relaxed select-text",children:[f.jsxs("div",{className:"bg-slate-900/50 p-3 rounded-t-xl border border-slate-800/80 text-slate-500 select-none",children:[f.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-slate-500 mb-2 font-sans font-semibold uppercase tracking-wider",children:[f.jsx(Rc,{className:"w-3 h-3"})," Read-Only Header (Lines 1 - ",v.length,")"]}),v.map((x,y)=>f.jsxs("div",{className:"flex",children:[f.jsx("span",{className:"w-8 text-slate-600 select-none text-right pr-3",children:y+1}),f.jsx("span",{className:"text-slate-400",children:x})]},y))]}),f.jsxs("div",{className:"p-3 bg-indigo-950/20 border-x-2 border-indigo-500/80 bg-slate-900 relative",children:[f.jsxs("div",{className:"flex items-center justify-between text-[11px] text-indigo-300 mb-2 font-sans font-bold",children:[f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400 animate-pulse"}),f.jsxs("span",{children:["Editable Patch Region (Lines ",h==null?void 0:h.region.firstLine," - ",h==null?void 0:h.region.lastLine,")"]})]}),f.jsx("button",{onClick:u,className:"text-xs px-2 py-0.5 rounded bg-indigo-900/60 hover:bg-indigo-800 text-indigo-200 border border-indigo-700/60 transition",children:"Insert Secure Pattern"})]}),f.jsx("textarea",{value:s,onChange:x=>{a(x.target.value),l(null)},rows:4,className:"w-full bg-slate-950 border border-indigo-500/60 rounded-lg p-3 text-emerald-300 font-mono text-xs outline-none focus:border-indigo-400 caret-cyan-400 resize-none shadow-inner",spellCheck:!1})]}),f.jsxs("div",{className:"bg-slate-900/50 p-3 rounded-b-xl border border-slate-800/80 text-slate-500 select-none",children:[f.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-slate-500 mb-2 font-sans font-semibold uppercase tracking-wider",children:[f.jsx(Rc,{className:"w-3 h-3"})," Read-Only Footer"]}),S.map((x,y)=>f.jsxs("div",{className:"flex",children:[f.jsx("span",{className:"w-8 text-slate-600 select-none text-right pr-3",children:((h==null?void 0:h.region.lastLine)||0)+y+1}),f.jsx("span",{className:"text-slate-400",children:x})]},y))]})]}),f.jsxs("div",{className:"w-80 border-l border-slate-800 bg-slate-900/70 p-5 flex flex-col justify-between text-xs",children:[f.jsxs("div",{children:[f.jsxs("h3",{className:"font-bold text-white mb-2 flex items-center gap-2",children:[f.jsx(C_,{className:"w-4 h-4 text-indigo-400"}),f.jsx("span",{children:"Vulnerability Analysis"})]}),i==="/var/www/login.php"?f.jsxs("div",{className:"space-y-3 text-slate-300",children:[f.jsxs("p",{className:"leading-relaxed",children:[f.jsx("strong",{className:"text-indigo-300",children:"CWE-89: SQL Injection"})," in user authentication query."]}),f.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400",children:[f.jsx("div",{className:"font-semibold text-slate-200 mb-1",children:"Expected Secure Pattern:"}),"Use PDO prepared statements with parameter placeholders (",f.jsx("code",{className:"text-emerald-400",children:"?"}),"):",f.jsx("pre",{className:"mt-1.5 p-1.5 rounded bg-slate-900 text-emerald-300 overflow-x-auto",children:`$res = $db->prepare("SELECT * FROM users WHERE name = ?");
$res->execute([$user]);`})]})]}):f.jsxs("div",{className:"space-y-3 text-slate-300",children:[f.jsxs("p",{className:"leading-relaxed",children:[f.jsx("strong",{className:"text-indigo-300",children:"CWE-79: Reflected XSS"})," in search result rendering."]}),f.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400",children:[f.jsx("div",{className:"font-semibold text-slate-200 mb-1",children:"Expected Secure Pattern:"}),"Escape HTML characters with ",f.jsx("code",{className:"text-emerald-400",children:"htmlspecialchars()"}),":",f.jsx("pre",{className:"mt-1.5 p-1.5 rounded bg-slate-900 text-emerald-300 overflow-x-auto",children:`echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`})]})]}),o&&f.jsxs("div",{className:`mt-4 p-3.5 rounded-xl border flex items-start gap-2.5 ${o.accepted?"bg-emerald-950/40 border-emerald-500/60 text-emerald-300":"bg-amber-950/40 border-amber-500/60 text-amber-300"}`,children:[o.accepted?f.jsx(es,{className:"w-5 h-5 text-emerald-400 shrink-0"}):f.jsx(Jl,{className:"w-5 h-5 text-amber-400 shrink-0"}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold",children:o.accepted?"Patch Verified & Accepted!":"Patch Needs Adjustment"}),o.hint&&f.jsx("p",{className:"text-[11px] mt-1 leading-snug",children:o.hint})]})]})]}),f.jsx("div",{className:"pt-4 border-t border-slate-800",children:f.jsxs("button",{onClick:g,className:"w-full py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 transition",children:[f.jsx(nA,{className:"w-4 h-4"}),f.jsx("span",{children:"Save & Verify Patch"})]})})]})]})]})},xA=({currentScenarioId:t,allScenarios:e,completedIds:n,onSelect:i,onClose:r})=>f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"max-w-2xl w-full rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 text-slate-200",children:[f.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-5",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40",children:f.jsx(c_,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-base font-bold text-white",children:"Campaign Mission Catalog"}),f.jsx("p",{className:"text-xs text-slate-400",children:"CCNA Networking & Cyber Security Simulator"})]})]}),f.jsx("button",{onClick:r,className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition",children:f.jsx(Bo,{className:"w-4 h-4"})})]}),f.jsx("div",{className:"space-y-3.5",children:e.map((s,a)=>{const o=n.includes(s.id),l=s.id===t,c=a===0||n.includes(e[a-1].id)||l;return f.jsxs("div",{onClick:()=>{c&&(Be.playKeyClick(),i(s.id),r())},className:`p-4 rounded-xl border transition-all flex items-center justify-between ${l?"bg-cyan-950/40 border-cyan-500/80 shadow-lg shadow-cyan-950/50":c?"bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40 cursor-pointer":"bg-slate-950/30 border-slate-900 opacity-50 cursor-not-allowed"}`,children:[f.jsxs("div",{className:"flex items-start gap-3.5",children:[f.jsxs("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 ${o?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":l?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/50":c?"bg-slate-800 text-slate-300 border border-slate-700":"bg-slate-900 text-slate-600"}`,children:["M",s.sequence]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("h3",{className:"font-bold text-white text-sm",children:s.title}),o&&f.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-medium flex items-center gap-1",children:[f.jsx(es,{className:"w-3 h-3"})," Solved"]}),l&&f.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-medium",children:"Active"})]}),f.jsx("p",{className:"text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed",children:s.briefing})]})]}),f.jsx("div",{className:"shrink-0 ml-4",children:c?f.jsxs("button",{className:"px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-cyan-600 hover:text-white text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition",children:[f.jsx(JC,{className:"w-3 h-3 fill-current"}),f.jsx("span",{children:l?"Continue":"Launch"})]}):f.jsx("div",{className:"p-2 rounded-xl bg-slate-900 text-slate-600",children:f.jsx(Rc,{className:"w-4 h-4"})})})]},s.id)})})]})}),_A=({scenario:t,objectives:e,isOpen:n,onClose:i,onOpenTerminal:r,onOpenReport:s,onOpenCodeEditor:a})=>{const o=e.findIndex(u=>!u.passed&&!u.locked),l=o!==-1?o:0,[c,d]=de.useState(l),[h,p]=de.useState(null);if(de.useEffect(()=>{if(n){const u=e.findIndex(x=>!x.passed&&!x.locked);d(u!==-1?u:0),Be.playKeyClick()}},[n,e]),de.useEffect(()=>{if(!n)return;const u=x=>{x.key==="Escape"?(x.preventDefault(),i()):x.key==="ArrowLeft"?(x.preventDefault(),d(y=>Math.max(0,y-1)),Be.playKeyClick()):x.key==="ArrowRight"&&(x.preventDefault(),d(y=>Math.min(e.length-1,y+1)),Be.playKeyClick())};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[n,e.length,i]),!n||e.length===0)return null;const m=e[c]||e[0],v=m.guidance,S=u=>{navigator.clipboard.writeText(u),p(u),Be.playKeyClick(),setTimeout(()=>{p(null)},2e3)},g=()=>{Be.playKeyClick(),i(),(v==null?void 0:v.actionType)==="terminal"&&v.targetDevice&&r?r(v.targetDevice):(v==null?void 0:v.actionType)==="report"&&s?s():(v==null?void 0:v.actionType)==="editor"&&a&&a()};return f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-amber-500/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[f.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40",children:f.jsx(sp,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("h2",{className:"text-sm font-bold text-white tracking-wide",children:"Contextual Guidance & Step-by-Step Hint"}),f.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-800",children:"Shortcut: [H]"})]}),f.jsxs("p",{className:"text-xs text-slate-400",children:["Step-by-step walk-through for: ",f.jsx("strong",{className:"text-slate-200",children:t.title})]})]})]}),f.jsx("button",{onClick:i,className:"p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition",title:"Close [Esc or H]",children:f.jsx(Bo,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"px-6 py-2.5 bg-slate-900/60 border-b border-slate-800/80 flex items-center justify-between text-xs overflow-x-auto gap-2",children:[f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("button",{onClick:()=>{d(u=>Math.max(0,u-1)),Be.playKeyClick()},disabled:c===0,className:"p-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300",title:"Previous objective (←)",children:f.jsx(VC,{className:"w-4 h-4"})}),f.jsxs("span",{className:"font-mono text-slate-300 px-2 font-semibold text-[11px]",children:["Step ",c+1," of ",e.length]}),f.jsx("button",{onClick:()=>{d(u=>Math.min(e.length-1,u+1)),Be.playKeyClick()},disabled:c===e.length-1,className:"p-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300",title:"Next objective (→)",children:f.jsx(GC,{className:"w-4 h-4"})})]}),f.jsx("div",{className:"flex items-center gap-1.5",children:e.map((u,x)=>f.jsx("button",{onClick:()=>{d(x),Be.playKeyClick()},className:`w-2.5 h-2.5 rounded-full transition-all ${x===c?"w-6 bg-amber-400":u.passed?"bg-emerald-500":u.locked?"bg-slate-700":"bg-slate-500 hover:bg-amber-400/60"}`,title:`Objective ${x+1}: ${u.description}`},u.id))}),f.jsx("div",{className:"flex items-center gap-1.5",children:m.passed?f.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-[11px] font-semibold flex items-center gap-1",children:[f.jsx(es,{className:"w-3 h-3"})," Completed"]}):m.locked?f.jsx("span",{className:"px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 text-[11px] font-medium",children:"Prerequisite Locked"}):f.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-700 text-[11px] font-semibold flex items-center gap-1 animate-pulse",children:[f.jsx(Kx,{className:"w-2.5 h-2.5 fill-current"})," Active Target"]})})]}),f.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-5 text-xs text-slate-200",children:[f.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start justify-between gap-4",children:[f.jsxs("div",{children:[f.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5",children:f.jsx("span",{children:"Objective Goal:"})}),f.jsx("h3",{className:"text-sm font-semibold text-white leading-snug",children:m.description}),m.detail&&f.jsxs("div",{className:"text-[11px] text-amber-300/90 font-mono mt-1.5 flex items-center gap-1",children:[f.jsx(jC,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsxs("span",{children:["Current Status: ",m.detail]})]})]}),v&&f.jsxs("button",{onClick:g,className:"shrink-0 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition",children:[v.actionType==="terminal"&&f.jsx(No,{className:"w-4 h-4"}),v.actionType==="cable"&&f.jsx(qf,{className:"w-4 h-4"}),v.actionType==="report"&&f.jsx(pa,{className:"w-4 h-4"}),v.actionType==="editor"&&f.jsx(Kc,{className:"w-4 h-4"}),f.jsx("span",{children:v.actionType==="terminal"?`Open ${v.targetDevice||"Device"} Console`:v.actionType==="report"?"Open Incident Report":v.actionType==="editor"?"Open Patch Editor":"Jump to Cabling"}),f.jsx($C,{className:"w-3 h-3 ml-0.5 opacity-70"})]})]}),v&&v.steps.length>0?f.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3",children:[f.jsxs("div",{className:"font-bold text-slate-100 flex items-center gap-2 text-xs",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),f.jsx("span",{children:"Step-by-Step Instructions:"})]}),f.jsx("div",{className:"space-y-2.5",children:v.steps.map((u,x)=>f.jsxs("div",{className:"flex items-start gap-3 text-slate-300",children:[f.jsx("span",{className:"w-5 h-5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5",children:x+1}),f.jsx("span",{className:"leading-relaxed flex-1",children:u})]},x))})]}):f.jsx("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-400",children:m.hint||"Review the mission briefing for requirements on this step."}),(v==null?void 0:v.suggestedCommands)&&v.suggestedCommands.length>0&&f.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/95 border border-slate-800/90",children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsxs("span",{className:"text-[11px] font-mono font-bold text-emerald-400 flex items-center gap-1.5",children:[f.jsx(No,{className:"w-3.5 h-3.5"}),f.jsxs("span",{children:["Command Sequence (",v.targetDevice||"Console","):"]})]}),f.jsxs("button",{onClick:()=>S(v.suggestedCommands.join(`
`)),className:"flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium transition",children:[h?f.jsx(Bx,{className:"w-3 h-3 text-emerald-400"}):f.jsx(WC,{className:"w-3 h-3"}),f.jsx("span",{children:h?"Copied!":"Copy Commands"})]})]}),f.jsx("pre",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed select-text",children:v.suggestedCommands.join(`
`)})]}),(v==null?void 0:v.explanation)&&f.jsxs("div",{className:"p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 text-slate-300 text-xs",children:[f.jsxs("div",{className:"font-bold text-sky-400 mb-1 flex items-center gap-1.5",children:[f.jsx(Xf,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Under the Hood & CCNA Concepts:"})]}),f.jsx("p",{className:"leading-relaxed text-slate-300",children:v.explanation})]})]}),f.jsxs("div",{className:"px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400",children:[f.jsxs("div",{className:"flex items-center gap-3 text-[11px]",children:[f.jsxs("span",{className:"flex items-center gap-1",children:[f.jsx(KC,{className:"w-3.5 h-3.5 text-slate-500"}),f.jsxs("span",{children:["Press ",f.jsx("strong",{className:"text-slate-300",children:"H"})," or ",f.jsx("strong",{className:"text-slate-300",children:"Esc"})," to close"]})]}),f.jsx("span",{children:"•"}),f.jsxs("span",{children:["Use ",f.jsx("strong",{className:"text-slate-300",children:"← / →"})," keys to navigate steps"]})]}),f.jsx("button",{onClick:i,className:"px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition",children:"Got It"})]})]})})},yA=()=>{const t=de.useMemo(()=>new BS,[]),[e,n]=de.useState("m0_orientation"),[i,r]=de.useState([]),[s,a]=de.useState(()=>{try{const E=localStorage.getItem("netsec_completed_missions");return E?JSON.parse(E):[]}catch{return[]}}),[o,l]=de.useState(null),[c,d]=de.useState(null),[h,p]=de.useState(!1),[m,v]=de.useState(!1),[S,g]=de.useState("/var/www/login.php"),[u,x]=de.useState(!1),[y,_]=de.useState(!1),[A,C]=de.useState(!0),T=de.useMemo(()=>ol.find(E=>E.id===e)||rf,[e]),R=de.useCallback(E=>{const M=ol.find(P=>P.id===E)||rf;n(M.id),d(null),p(!1),v(!1),_(!1),t.loadScenario(M),r(t.objectiveStates()),M.id==="m0_orientation"?(l("PC-A"),_(!0)):M.id==="m1_vlan_ping"?l("R1"):M.id==="m2_log_triage"?l("SOC-PC"):M.id==="m3_web_patch"&&l("PC-1")},[t]);return de.useEffect(()=>{R(e),t.onObjectiveUpdated=E=>{r([...E])},t.onMissionCompleted=E=>{Be.playSuccessBeep(),a(M=>{if(!M.includes(E)){const P=[...M,E];try{localStorage.setItem("netsec_completed_missions",JSON.stringify(P))}catch{}return P}return M})}},[t,R,e]),de.useEffect(()=>{const E=M=>{M.target instanceof HTMLInputElement||M.target instanceof HTMLTextAreaElement||(M.key==="h"||M.key==="H")&&(M.preventDefault(),_(P=>!P))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[]),f.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-slate-950 font-sans flex flex-col",children:[f.jsxs("header",{className:"h-12 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md px-4 flex items-center justify-between z-30 select-none",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/20",children:f.jsx(oA,{className:"w-4 h-4 fill-current"})}),f.jsx("div",{children:f.jsxs("span",{className:"font-bold text-white text-sm tracking-tight flex items-center gap-1.5",children:[f.jsx("span",{children:"NetSec 3D Simulator"}),f.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono font-semibold",children:"v1.0"})]})})]}),f.jsxs("button",{onClick:()=>{Be.playKeyClick(),x(!0)},className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 transition",children:[f.jsx(c_,{className:"w-3.5 h-3.5 text-cyan-400"}),f.jsxs("span",{children:["M",T.sequence,": ",T.title]})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("button",{onClick:()=>{if(Be.playKeyClick(),o)l(null);else{const E=Array.from(t.devices.keys())[0]||"R1";l(E)}},className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${o?"bg-cyan-500 text-slate-950 border-cyan-400 font-bold":"bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700"}`,children:[f.jsx(No,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"CLI Terminal"})]}),T.id==="m2_log_triage"&&f.jsxs("button",{onClick:()=>{Be.playKeyClick(),p(!0)},className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-950 hover:bg-sky-900 border border-sky-700 text-sky-300 text-xs font-semibold transition",children:[f.jsx(pa,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"SOC Logs & Threat Map"})]}),T.id==="m3_web_patch"&&f.jsxs("button",{onClick:()=>{Be.playKeyClick(),v(!0)},className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-950 hover:bg-indigo-900 border border-indigo-700 text-indigo-300 text-xs font-semibold transition",children:[f.jsx(Kc,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Patch Editor"})]}),f.jsxs("button",{onClick:()=>{Be.playKeyClick(),_(E=>!E)},className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${y?"bg-amber-500 text-slate-950 border-amber-400 font-bold":"bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/40"}`,title:"Contextual Step-by-Step Guidance (Press 'H')",children:[f.jsx(sp,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsx("span",{children:"Guidance (H)"})]}),f.jsx("button",{onClick:()=>{const E=!A;C(E),Be.enabled=E},title:A?"Mute Audio":"Unmute Audio",className:"p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition",children:A?f.jsx(D_,{className:"w-4 h-4 text-cyan-400"}):f.jsx(O_,{className:"w-4 h-4"})})]})]}),f.jsxs("main",{className:"relative flex-1 w-full h-full overflow-hidden",children:[f.jsx(hA,{sim:t,onOpenTerminal:E=>l(E),selectedPort:c,onSelectPort:d,onOpenThreatMap:()=>p(!0),onOpenCodeEditor:E=>{const M=E.split(":");M[1]&&g(M[1]),v(!0)}}),f.jsx(mA,{sim:t,scenario:T,objectives:i,onOpenReport:()=>p(!0),onOpenCodeEditor:()=>v(!0),onOpenHint:()=>_(!0),onSelectMission:R,onRestartMission:()=>R(T.id),allScenarios:ol}),o&&f.jsx(pA,{sim:t,deviceId:o,onClose:()=>l(null),onSwitchDevice:E=>l(E),onOpenCodeEditor:E=>{const M=E.split(":");M[1]&&g(M[1]),v(!0)}}),f.jsx(_A,{scenario:T,objectives:i,isOpen:y,onClose:()=>_(!1),onOpenTerminal:E=>l(E),onOpenReport:()=>p(!0),onOpenCodeEditor:()=>v(!0)}),h&&f.jsx(gA,{sim:t,onClose:()=>p(!1)}),m&&f.jsx(vA,{sim:t,initialFile:S,onClose:()=>v(!1)}),u&&f.jsx(xA,{currentScenarioId:T.id,allScenarios:ol,completedIds:s,onSelect:E=>R(E),onClose:()=>x(!1)})]})]})};cd.createRoot(document.getElementById("root")).render(f.jsx(c1.StrictMode,{children:f.jsx(yA,{})}));
