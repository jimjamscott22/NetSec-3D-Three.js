var a1=Object.defineProperty;var o1=(t,e,n)=>e in t?a1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Oe=(t,e,n)=>o1(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function l1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ig={exports:{}},Kc={},rg={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),c1=Symbol.for("react.portal"),u1=Symbol.for("react.fragment"),d1=Symbol.for("react.strict_mode"),f1=Symbol.for("react.profiler"),h1=Symbol.for("react.provider"),p1=Symbol.for("react.context"),m1=Symbol.for("react.forward_ref"),g1=Symbol.for("react.suspense"),v1=Symbol.for("react.memo"),x1=Symbol.for("react.lazy"),Ap=Symbol.iterator;function _1(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var sg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ag=Object.assign,og={};function Oa(t,e,n){this.props=t,this.context=e,this.refs=og,this.updater=n||sg}Oa.prototype.isReactComponent={};Oa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lg(){}lg.prototype=Oa.prototype;function hh(t,e,n){this.props=t,this.context=e,this.refs=og,this.updater=n||sg}var ph=hh.prototype=new lg;ph.constructor=hh;ag(ph,Oa.prototype);ph.isPureReactComponent=!0;var Rp=Array.isArray,cg=Object.prototype.hasOwnProperty,mh={current:null},ug={key:!0,ref:!0,__self:!0,__source:!0};function dg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)cg.call(e,i)&&!ug.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Qo,type:t,key:s,ref:a,props:r,_owner:mh.current}}function y1(t,e){return{$$typeof:Qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qo}function S1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Np=/\/+/g;function xu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?S1(""+t.key):e.toString(36)}function tc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Qo:case c1:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+xu(a,0):i,Rp(r)?(n="",t!=null&&(n=t.replace(Np,"$&/")+"/"),tc(r,e,n,"",function(c){return c})):r!=null&&(gh(r)&&(r=y1(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Np,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Rp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+xu(s,o);a+=tc(s,e,n,l,r)}else if(l=_1(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+xu(s,o++),a+=tc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function cl(t,e,n){if(t==null)return t;var i=[],r=0;return tc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function M1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tn={current:null},nc={transition:null},E1={ReactCurrentDispatcher:Tn,ReactCurrentBatchConfig:nc,ReactCurrentOwner:mh};function fg(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:cl,forEach:function(t,e,n){cl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return cl(t,function(){e++}),e},toArray:function(t){return cl(t,function(e){return e})||[]},only:function(t){if(!gh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};lt.Component=Oa;lt.Fragment=u1;lt.Profiler=f1;lt.PureComponent=hh;lt.StrictMode=d1;lt.Suspense=g1;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E1;lt.act=fg;lt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ag({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=mh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)cg.call(e,l)&&!ug.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Qo,type:t.type,key:r,ref:s,props:i,_owner:a}};lt.createContext=function(t){return t={$$typeof:p1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:h1,_context:t},t.Consumer=t};lt.createElement=dg;lt.createFactory=function(t){var e=dg.bind(null,t);return e.type=t,e};lt.createRef=function(){return{current:null}};lt.forwardRef=function(t){return{$$typeof:m1,render:t}};lt.isValidElement=gh;lt.lazy=function(t){return{$$typeof:x1,_payload:{_status:-1,_result:t},_init:M1}};lt.memo=function(t,e){return{$$typeof:v1,type:t,compare:e===void 0?null:e}};lt.startTransition=function(t){var e=nc.transition;nc.transition={};try{t()}finally{nc.transition=e}};lt.unstable_act=fg;lt.useCallback=function(t,e){return Tn.current.useCallback(t,e)};lt.useContext=function(t){return Tn.current.useContext(t)};lt.useDebugValue=function(){};lt.useDeferredValue=function(t){return Tn.current.useDeferredValue(t)};lt.useEffect=function(t,e){return Tn.current.useEffect(t,e)};lt.useId=function(){return Tn.current.useId()};lt.useImperativeHandle=function(t,e,n){return Tn.current.useImperativeHandle(t,e,n)};lt.useInsertionEffect=function(t,e){return Tn.current.useInsertionEffect(t,e)};lt.useLayoutEffect=function(t,e){return Tn.current.useLayoutEffect(t,e)};lt.useMemo=function(t,e){return Tn.current.useMemo(t,e)};lt.useReducer=function(t,e,n){return Tn.current.useReducer(t,e,n)};lt.useRef=function(t){return Tn.current.useRef(t)};lt.useState=function(t){return Tn.current.useState(t)};lt.useSyncExternalStore=function(t,e,n){return Tn.current.useSyncExternalStore(t,e,n)};lt.useTransition=function(){return Tn.current.useTransition()};lt.version="18.3.1";rg.exports=lt;var se=rg.exports;const w1=l1(se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1=se,T1=Symbol.for("react.element"),C1=Symbol.for("react.fragment"),A1=Object.prototype.hasOwnProperty,R1=b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N1={key:!0,ref:!0,__self:!0,__source:!0};function hg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)A1.call(e,i)&&!N1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:T1,type:t,key:s,ref:a,props:r,_owner:R1.current}}Kc.Fragment=C1;Kc.jsx=hg;Kc.jsxs=hg;ig.exports=Kc;var f=ig.exports,Cd={},pg={exports:{}},Kn={},mg={exports:{}},gg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,Q){var ie=I.length;I.push(Q);e:for(;0<ie;){var ue=ie-1>>>1,ke=I[ue];if(0<r(ke,Q))I[ue]=Q,I[ie]=ke,ie=ue;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var Q=I[0],ie=I.pop();if(ie!==Q){I[0]=ie;e:for(var ue=0,ke=I.length,Ve=ke>>>1;ue<Ve;){var $=2*(ue+1)-1,le=I[$],xe=$+1,de=I[xe];if(0>r(le,ie))xe<ke&&0>r(de,le)?(I[ue]=de,I[xe]=ie,ue=xe):(I[ue]=le,I[$]=ie,ue=$);else if(xe<ke&&0>r(de,ie))I[ue]=de,I[xe]=ie,ue=xe;else break e}}return Q}function r(I,Q){var ie=I.sortIndex-Q.sortIndex;return ie!==0?ie:I.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,d=null,p=3,m=!1,g=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var Q=n(c);Q!==null;){if(Q.callback===null)i(c);else if(Q.startTime<=I)i(c),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(c)}}function _(I){if(S=!1,y(I),!g)if(n(l)!==null)g=!0,Y(R);else{var Q=n(c);Q!==null&&ne(_,Q.startTime-I)}}function R(I,Q){g=!1,S&&(S=!1,u(L),L=-1),m=!0;var ie=p;try{for(y(Q),d=n(l);d!==null&&(!(d.expirationTime>Q)||I&&!N());){var ue=d.callback;if(typeof ue=="function"){d.callback=null,p=d.priorityLevel;var ke=ue(d.expirationTime<=Q);Q=t.unstable_now(),typeof ke=="function"?d.callback=ke:d===n(l)&&i(l),y(Q)}else i(l);d=n(l)}if(d!==null)var Ve=!0;else{var $=n(c);$!==null&&ne(_,$.startTime-Q),Ve=!1}return Ve}finally{d=null,p=ie,m=!1}}var A=!1,C=null,L=-1,E=5,M=-1;function N(){return!(t.unstable_now()-M<E)}function z(){if(C!==null){var I=t.unstable_now();M=I;var Q=!0;try{Q=C(!0,I)}finally{Q?V():(A=!1,C=null)}}else A=!1}var V;if(typeof v=="function")V=function(){v(z)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ee=K.port2;K.port1.onmessage=z,V=function(){ee.postMessage(null)}}else V=function(){x(z,0)};function Y(I){C=I,A||(A=!0,V())}function ne(I,Q){L=x(function(){I(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,Y(R))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(p){case 1:case 2:case 3:var Q=3;break;default:Q=p}var ie=p;p=Q;try{return I()}finally{p=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,Q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ie=p;p=I;try{return Q()}finally{p=ie}},t.unstable_scheduleCallback=function(I,Q,ie){var ue=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ue+ie:ue):ie=ue,I){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=ie+ke,I={id:h++,callback:Q,priorityLevel:I,startTime:ie,expirationTime:ke,sortIndex:-1},ie>ue?(I.sortIndex=ie,e(c,I),n(l)===null&&I===n(c)&&(S?(u(L),L=-1):S=!0,ne(_,ie-ue))):(I.sortIndex=ke,e(l,I),g||m||(g=!0,Y(R))),I},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(I){var Q=p;return function(){var ie=p;p=Q;try{return I.apply(this,arguments)}finally{p=ie}}}})(gg);mg.exports=gg;var P1=mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L1=se,Yn=P1;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vg=new Set,Lo={};function Cs(t,e){Ea(t,e),Ea(t+"Capture",e)}function Ea(t,e){for(Lo[t]=e,t=0;t<e.length;t++)vg.add(e[t])}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ad=Object.prototype.hasOwnProperty,k1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pp={},Lp={};function I1(t){return Ad.call(Lp,t)?!0:Ad.call(Pp,t)?!1:k1.test(t)?Lp[t]=!0:(Pp[t]=!0,!1)}function D1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function U1(t,e,n,i){if(e===null||typeof e>"u"||D1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Cn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ln[t]=new Cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ln[e]=new Cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ln[t]=new Cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ln[t]=new Cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ln[t]=new Cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ln[t]=new Cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ln[t]=new Cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ln[t]=new Cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ln[t]=new Cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var vh=/[\-:]([a-z])/g;function xh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vh,xh);ln[e]=new Cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vh,xh);ln[e]=new Cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vh,xh);ln[e]=new Cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ln[t]=new Cn(t,1,!1,t.toLowerCase(),null,!1,!1)});ln.xlinkHref=new Cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ln[t]=new Cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function _h(t,e,n,i){var r=ln.hasOwnProperty(e)?ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(U1(e,n,r,i)&&(n=null),i||r===null?I1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var fr=L1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ul=Symbol.for("react.element"),ea=Symbol.for("react.portal"),ta=Symbol.for("react.fragment"),yh=Symbol.for("react.strict_mode"),Rd=Symbol.for("react.profiler"),xg=Symbol.for("react.provider"),_g=Symbol.for("react.context"),Sh=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),Pd=Symbol.for("react.suspense_list"),Mh=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),yg=Symbol.for("react.offscreen"),kp=Symbol.iterator;function Ya(t){return t===null||typeof t!="object"?null:(t=kp&&t[kp]||t["@@iterator"],typeof t=="function"?t:null)}var Bt=Object.assign,_u;function fo(t){if(_u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_u=e&&e[1]||""}return`
`+_u+t}var yu=!1;function Su(t,e){if(!t||yu)return"";yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fo(t):""}function O1(t){switch(t.tag){case 5:return fo(t.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return t=Su(t.type,!1),t;case 11:return t=Su(t.type.render,!1),t;case 1:return t=Su(t.type,!0),t;default:return""}}function Ld(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ta:return"Fragment";case ea:return"Portal";case Rd:return"Profiler";case yh:return"StrictMode";case Nd:return"Suspense";case Pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _g:return(t.displayName||"Context")+".Consumer";case xg:return(t._context.displayName||"Context")+".Provider";case Sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mh:return e=t.displayName||null,e!==null?e:Ld(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return Ld(t(e))}catch{}}return null}function F1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ld(e);case 8:return e===yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function B1(t){var e=Sg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function dl(t){t._valueTracker||(t._valueTracker=B1(t))}function Mg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Sg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kd(t,e){var n=e.checked;return Bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ip(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Eg(t,e){e=e.checked,e!=null&&_h(t,"checked",e,!1)}function Id(t,e){Eg(t,e);var n=Gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dd(t,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dd(t,e,n){(e!=="number"||yc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ho=Array.isArray;function ha(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ud(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(ho(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gr(n)}}function wg(t,e){var n=Gr(e.value),i=Gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Od(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fl,Tg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fl=fl||document.createElement("div"),fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z1=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(t){z1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xo[e]=xo[t]})});function Cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xo.hasOwnProperty(t)&&xo[t]?(""+e).trim():e+"px"}function Ag(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Cg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var H1=Bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fd(t,e){if(e){if(H1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=null;function Eh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hd=null,pa=null,ma=null;function Fp(t){if(t=tl(t)){if(typeof Hd!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=tu(e),Hd(t.stateNode,t.type,e))}}function Rg(t){pa?ma?ma.push(t):ma=[t]:pa=t}function Ng(){if(pa){var t=pa,e=ma;if(ma=pa=null,Fp(t),e)for(t=0;t<e.length;t++)Fp(e[t])}}function Pg(t,e){return t(e)}function Lg(){}var Mu=!1;function kg(t,e,n){if(Mu)return t(e,n);Mu=!0;try{return Pg(t,e,n)}finally{Mu=!1,(pa!==null||ma!==null)&&(Lg(),Ng())}}function Io(t,e){var n=t.stateNode;if(n===null)return null;var i=tu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Vd=!1;if(or)try{var Ka={};Object.defineProperty(Ka,"passive",{get:function(){Vd=!0}}),window.addEventListener("test",Ka,Ka),window.removeEventListener("test",Ka,Ka)}catch{Vd=!1}function V1(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var _o=!1,Sc=null,Mc=!1,Gd=null,G1={onError:function(t){_o=!0,Sc=t}};function j1(t,e,n,i,r,s,a,o,l){_o=!1,Sc=null,V1.apply(G1,arguments)}function W1(t,e,n,i,r,s,a,o,l){if(j1.apply(this,arguments),_o){if(_o){var c=Sc;_o=!1,Sc=null}else throw Error(oe(198));Mc||(Mc=!0,Gd=c)}}function As(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ig(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bp(t){if(As(t)!==t)throw Error(oe(188))}function $1(t){var e=t.alternate;if(!e){if(e=As(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bp(r),t;if(s===i)return Bp(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Dg(t){return t=$1(t),t!==null?Ug(t):null}function Ug(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ug(t);if(e!==null)return e;t=t.sibling}return null}var Og=Yn.unstable_scheduleCallback,zp=Yn.unstable_cancelCallback,X1=Yn.unstable_shouldYield,q1=Yn.unstable_requestPaint,Gt=Yn.unstable_now,Y1=Yn.unstable_getCurrentPriorityLevel,wh=Yn.unstable_ImmediatePriority,Fg=Yn.unstable_UserBlockingPriority,Ec=Yn.unstable_NormalPriority,K1=Yn.unstable_LowPriority,Bg=Yn.unstable_IdlePriority,Zc=null,Vi=null;function Z1(t){if(Vi&&typeof Vi.onCommitFiberRoot=="function")try{Vi.onCommitFiberRoot(Zc,t,void 0,(t.current.flags&128)===128)}catch{}}var wi=Math.clz32?Math.clz32:ey,Q1=Math.log,J1=Math.LN2;function ey(t){return t>>>=0,t===0?32:31-(Q1(t)/J1|0)|0}var hl=64,pl=4194304;function po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=po(o):(s&=a,s!==0&&(i=po(s)))}else a=n&~r,a!==0?i=po(a):s!==0&&(i=po(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-wi(e),r=1<<n,i|=t[n],e&=~r;return i}function ty(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ny(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-wi(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=ty(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function jd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zg(){var t=hl;return hl<<=1,!(hl&4194240)&&(hl=64),t}function Eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wi(e),t[e]=n}function iy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-wi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-wi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var wt=0;function Hg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vg,Th,Gg,jg,Wg,Wd=!1,ml=[],kr=null,Ir=null,Dr=null,Do=new Map,Uo=new Map,Cr=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(t,e){switch(t){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(e.pointerId)}}function Za(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=tl(e),e!==null&&Th(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sy(t,e,n,i,r){switch(e){case"focusin":return kr=Za(kr,t,e,n,i,r),!0;case"dragenter":return Ir=Za(Ir,t,e,n,i,r),!0;case"mouseover":return Dr=Za(Dr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Do.set(s,Za(Do.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Uo.set(s,Za(Uo.get(s)||null,t,e,n,i,r)),!0}return!1}function $g(t){var e=ds(t.target);if(e!==null){var n=As(e);if(n!==null){if(e=n.tag,e===13){if(e=Ig(n),e!==null){t.blockedOn=e,Wg(t.priority,function(){Gg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ic(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$d(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zd=i,n.target.dispatchEvent(i),zd=null}else return e=tl(n),e!==null&&Th(e),t.blockedOn=n,!1;e.shift()}return!0}function Vp(t,e,n){ic(t)&&n.delete(e)}function ay(){Wd=!1,kr!==null&&ic(kr)&&(kr=null),Ir!==null&&ic(Ir)&&(Ir=null),Dr!==null&&ic(Dr)&&(Dr=null),Do.forEach(Vp),Uo.forEach(Vp)}function Qa(t,e){t.blockedOn===e&&(t.blockedOn=null,Wd||(Wd=!0,Yn.unstable_scheduleCallback(Yn.unstable_NormalPriority,ay)))}function Oo(t){function e(r){return Qa(r,t)}if(0<ml.length){Qa(ml[0],t);for(var n=1;n<ml.length;n++){var i=ml[n];i.blockedOn===t&&(i.blockedOn=null)}}for(kr!==null&&Qa(kr,t),Ir!==null&&Qa(Ir,t),Dr!==null&&Qa(Dr,t),Do.forEach(e),Uo.forEach(e),n=0;n<Cr.length;n++)i=Cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)$g(n),n.blockedOn===null&&Cr.shift()}var ga=fr.ReactCurrentBatchConfig,bc=!0;function oy(t,e,n,i){var r=wt,s=ga.transition;ga.transition=null;try{wt=1,Ch(t,e,n,i)}finally{wt=r,ga.transition=s}}function ly(t,e,n,i){var r=wt,s=ga.transition;ga.transition=null;try{wt=4,Ch(t,e,n,i)}finally{wt=r,ga.transition=s}}function Ch(t,e,n,i){if(bc){var r=$d(t,e,n,i);if(r===null)ku(t,e,i,Tc,n),Hp(t,i);else if(sy(r,t,e,n,i))i.stopPropagation();else if(Hp(t,i),e&4&&-1<ry.indexOf(t)){for(;r!==null;){var s=tl(r);if(s!==null&&Vg(s),s=$d(t,e,n,i),s===null&&ku(t,e,i,Tc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ku(t,e,i,null,n)}}var Tc=null;function $d(t,e,n,i){if(Tc=null,t=Eh(i),t=ds(t),t!==null)if(e=As(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ig(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tc=t,null}function Xg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y1()){case wh:return 1;case Fg:return 4;case Ec:case K1:return 16;case Bg:return 536870912;default:return 16}default:return 16}}var Nr=null,Ah=null,rc=null;function qg(){if(rc)return rc;var t,e=Ah,n=e.length,i,r="value"in Nr?Nr.value:Nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return rc=r.slice(t,1<i?1-i:void 0)}function sc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function Gp(){return!1}function Zn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gl:Gp,this.isPropagationStopped=Gp,this}return Bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),e}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rh=Zn(Fa),el=Bt({},Fa,{view:0,detail:0}),cy=Zn(el),wu,bu,Ja,Qc=Bt({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ja&&(Ja&&t.type==="mousemove"?(wu=t.screenX-Ja.screenX,bu=t.screenY-Ja.screenY):bu=wu=0,Ja=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),jp=Zn(Qc),uy=Bt({},Qc,{dataTransfer:0}),dy=Zn(uy),fy=Bt({},el,{relatedTarget:0}),Tu=Zn(fy),hy=Bt({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),py=Zn(hy),my=Bt({},Fa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gy=Zn(my),vy=Bt({},Fa,{data:0}),Wp=Zn(vy),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yy[t])?!!e[t]:!1}function Nh(){return Sy}var My=Bt({},el,{key:function(t){if(t.key){var e=xy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_y[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nh,charCode:function(t){return t.type==="keypress"?sc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ey=Zn(My),wy=Bt({},Qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Zn(wy),by=Bt({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nh}),Ty=Zn(by),Cy=Bt({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ay=Zn(Cy),Ry=Bt({},Qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ny=Zn(Ry),Py=[9,13,27,32],Ph=or&&"CompositionEvent"in window,yo=null;or&&"documentMode"in document&&(yo=document.documentMode);var Ly=or&&"TextEvent"in window&&!yo,Yg=or&&(!Ph||yo&&8<yo&&11>=yo),Xp=" ",qp=!1;function Kg(t,e){switch(t){case"keyup":return Py.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var na=!1;function ky(t,e){switch(t){case"compositionend":return Zg(e);case"keypress":return e.which!==32?null:(qp=!0,Xp);case"textInput":return t=e.data,t===Xp&&qp?null:t;default:return null}}function Iy(t,e){if(na)return t==="compositionend"||!Ph&&Kg(t,e)?(t=qg(),rc=Ah=Nr=null,na=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yg&&e.locale!=="ko"?null:e.data;default:return null}}var Dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Dy[t.type]:e==="textarea"}function Qg(t,e,n,i){Rg(i),e=Cc(e,"onChange"),0<e.length&&(n=new Rh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var So=null,Fo=null;function Uy(t){cv(t,0)}function Jc(t){var e=sa(t);if(Mg(e))return t}function Oy(t,e){if(t==="change")return e}var Jg=!1;if(or){var Cu;if(or){var Au="oninput"in document;if(!Au){var Kp=document.createElement("div");Kp.setAttribute("oninput","return;"),Au=typeof Kp.oninput=="function"}Cu=Au}else Cu=!1;Jg=Cu&&(!document.documentMode||9<document.documentMode)}function Zp(){So&&(So.detachEvent("onpropertychange",ev),Fo=So=null)}function ev(t){if(t.propertyName==="value"&&Jc(Fo)){var e=[];Qg(e,Fo,t,Eh(t)),kg(Uy,e)}}function Fy(t,e,n){t==="focusin"?(Zp(),So=e,Fo=n,So.attachEvent("onpropertychange",ev)):t==="focusout"&&Zp()}function By(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jc(Fo)}function zy(t,e){if(t==="click")return Jc(e)}function Hy(t,e){if(t==="input"||t==="change")return Jc(e)}function Vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ci=typeof Object.is=="function"?Object.is:Vy;function Bo(t,e){if(Ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ad.call(e,r)||!Ci(t[r],e[r]))return!1}return!0}function Qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jp(t,e){var n=Qp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qp(n)}}function tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nv(){for(var t=window,e=yc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yc(t.document)}return e}function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gy(t){var e=nv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tv(n.ownerDocument.documentElement,n)){if(i!==null&&Lh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Jp(n,s);var a=Jp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jy=or&&"documentMode"in document&&11>=document.documentMode,ia=null,Xd=null,Mo=null,qd=!1;function em(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qd||ia==null||ia!==yc(i)||(i=ia,"selectionStart"in i&&Lh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Mo&&Bo(Mo,i)||(Mo=i,i=Cc(Xd,"onSelect"),0<i.length&&(e=new Rh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ia)))}function vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ra={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},Ru={},iv={};or&&(iv=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);function eu(t){if(Ru[t])return Ru[t];if(!ra[t])return t;var e=ra[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iv)return Ru[t]=e[n];return t}var rv=eu("animationend"),sv=eu("animationiteration"),av=eu("animationstart"),ov=eu("transitionend"),lv=new Map,tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(t,e){lv.set(t,e),Cs(e,[t])}for(var Nu=0;Nu<tm.length;Nu++){var Pu=tm[Nu],Wy=Pu.toLowerCase(),$y=Pu[0].toUpperCase()+Pu.slice(1);Xr(Wy,"on"+$y)}Xr(rv,"onAnimationEnd");Xr(sv,"onAnimationIteration");Xr(av,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(ov,"onTransitionEnd");Ea("onMouseEnter",["mouseout","mouseover"]);Ea("onMouseLeave",["mouseout","mouseover"]);Ea("onPointerEnter",["pointerout","pointerover"]);Ea("onPointerLeave",["pointerout","pointerover"]);Cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function nm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,W1(i,e,void 0,t),t.currentTarget=null}function cv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;nm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;nm(r,o,c),s=l}}}if(Mc)throw t=Gd,Mc=!1,Gd=null,t}function kt(t,e){var n=e[Jd];n===void 0&&(n=e[Jd]=new Set);var i=t+"__bubble";n.has(i)||(uv(e,t,2,!1),n.add(i))}function Lu(t,e,n){var i=0;e&&(i|=4),uv(n,t,i,e)}var xl="_reactListening"+Math.random().toString(36).slice(2);function zo(t){if(!t[xl]){t[xl]=!0,vg.forEach(function(n){n!=="selectionchange"&&(Xy.has(n)||Lu(n,!1,t),Lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xl]||(e[xl]=!0,Lu("selectionchange",!1,e))}}function uv(t,e,n,i){switch(Xg(e)){case 1:var r=oy;break;case 4:r=ly;break;default:r=Ch}n=r.bind(null,e,n,t),r=void 0,!Vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ku(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=ds(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}kg(function(){var c=s,h=Eh(n),d=[];e:{var p=lv.get(t);if(p!==void 0){var m=Rh,g=t;switch(t){case"keypress":if(sc(n)===0)break e;case"keydown":case"keyup":m=Ey;break;case"focusin":g="focus",m=Tu;break;case"focusout":g="blur",m=Tu;break;case"beforeblur":case"afterblur":m=Tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ty;break;case rv:case sv:case av:m=py;break;case ov:m=Ay;break;case"scroll":m=cy;break;case"wheel":m=Ny;break;case"copy":case"cut":case"paste":m=gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=$p}var S=(e&4)!==0,x=!S&&t==="scroll",u=S?p!==null?p+"Capture":null:p;S=[];for(var v=c,y;v!==null;){y=v;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,u!==null&&(_=Io(v,u),_!=null&&S.push(Ho(v,_,y)))),x)break;v=v.return}0<S.length&&(p=new m(p,g,null,n,h),d.push({event:p,listeners:S}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==zd&&(g=n.relatedTarget||n.fromElement)&&(ds(g)||g[lr]))break e;if((m||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=c,g=g?ds(g):null,g!==null&&(x=As(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=c),m!==g)){if(S=jp,_="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=$p,_="onPointerLeave",u="onPointerEnter",v="pointer"),x=m==null?p:sa(m),y=g==null?p:sa(g),p=new S(_,v+"leave",m,n,h),p.target=x,p.relatedTarget=y,_=null,ds(h)===c&&(S=new S(u,v+"enter",g,n,h),S.target=y,S.relatedTarget=x,_=S),x=_,m&&g)t:{for(S=m,u=g,v=0,y=S;y;y=Os(y))v++;for(y=0,_=u;_;_=Os(_))y++;for(;0<v-y;)S=Os(S),v--;for(;0<y-v;)u=Os(u),y--;for(;v--;){if(S===u||u!==null&&S===u.alternate)break t;S=Os(S),u=Os(u)}S=null}else S=null;m!==null&&im(d,p,m,S,!1),g!==null&&x!==null&&im(d,x,g,S,!0)}}e:{if(p=c?sa(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var R=Oy;else if(Yp(p))if(Jg)R=Hy;else{R=By;var A=Fy}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(R=zy);if(R&&(R=R(t,c))){Qg(d,R,n,h);break e}A&&A(t,p,c),t==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&Dd(p,"number",p.value)}switch(A=c?sa(c):window,t){case"focusin":(Yp(A)||A.contentEditable==="true")&&(ia=A,Xd=c,Mo=null);break;case"focusout":Mo=Xd=ia=null;break;case"mousedown":qd=!0;break;case"contextmenu":case"mouseup":case"dragend":qd=!1,em(d,n,h);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":em(d,n,h)}var C;if(Ph)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else na?Kg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Yg&&n.locale!=="ko"&&(na||L!=="onCompositionStart"?L==="onCompositionEnd"&&na&&(C=qg()):(Nr=h,Ah="value"in Nr?Nr.value:Nr.textContent,na=!0)),A=Cc(c,L),0<A.length&&(L=new Wp(L,t,null,n,h),d.push({event:L,listeners:A}),C?L.data=C:(C=Zg(n),C!==null&&(L.data=C)))),(C=Ly?ky(t,n):Iy(t,n))&&(c=Cc(c,"onBeforeInput"),0<c.length&&(h=new Wp("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=C))}cv(d,e)})}function Ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Io(t,n),s!=null&&i.unshift(Ho(t,s,r)),s=Io(t,e),s!=null&&i.push(Ho(t,s,r))),t=t.return}return i}function Os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function im(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Io(n,s),l!=null&&a.unshift(Ho(n,l,o))):r||(l=Io(n,s),l!=null&&a.push(Ho(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var qy=/\r\n?/g,Yy=/\u0000|\uFFFD/g;function rm(t){return(typeof t=="string"?t:""+t).replace(qy,`
`).replace(Yy,"")}function _l(t,e,n){if(e=rm(e),rm(t)!==e&&n)throw Error(oe(425))}function Ac(){}var Yd=null,Kd=null;function Zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qd=typeof setTimeout=="function"?setTimeout:void 0,Ky=typeof clearTimeout=="function"?clearTimeout:void 0,sm=typeof Promise=="function"?Promise:void 0,Zy=typeof queueMicrotask=="function"?queueMicrotask:typeof sm<"u"?function(t){return sm.resolve(null).then(t).catch(Qy)}:Qd;function Qy(t){setTimeout(function(){throw t})}function Iu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Oo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Oo(e)}function Ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ba=Math.random().toString(36).slice(2),zi="__reactFiber$"+Ba,Vo="__reactProps$"+Ba,lr="__reactContainer$"+Ba,Jd="__reactEvents$"+Ba,Jy="__reactListeners$"+Ba,eS="__reactHandles$"+Ba;function ds(t){var e=t[zi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[zi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[zi])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function tl(t){return t=t[zi]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function sa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function tu(t){return t[Vo]||null}var ef=[],aa=-1;function qr(t){return{current:t}}function It(t){0>aa||(t.current=ef[aa],ef[aa]=null,aa--)}function Pt(t,e){aa++,ef[aa]=t.current,t.current=e}var jr={},yn=qr(jr),Ln=qr(!1),ys=jr;function wa(t,e){var n=t.type.contextTypes;if(!n)return jr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function kn(t){return t=t.childContextTypes,t!=null}function Rc(){It(Ln),It(yn)}function om(t,e,n){if(yn.current!==jr)throw Error(oe(168));Pt(yn,e),Pt(Ln,n)}function dv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,F1(t)||"Unknown",r));return Bt({},n,i)}function Nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jr,ys=yn.current,Pt(yn,t),Pt(Ln,Ln.current),!0}function lm(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=dv(t,e,ys),i.__reactInternalMemoizedMergedChildContext=t,It(Ln),It(yn),Pt(yn,t)):It(Ln),Pt(Ln,n)}var Ji=null,nu=!1,Du=!1;function fv(t){Ji===null?Ji=[t]:Ji.push(t)}function tS(t){nu=!0,fv(t)}function Yr(){if(!Du&&Ji!==null){Du=!0;var t=0,e=wt;try{var n=Ji;for(wt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ji=null,nu=!1}catch(r){throw Ji!==null&&(Ji=Ji.slice(t+1)),Og(wh,Yr),r}finally{wt=e,Du=!1}}return null}var oa=[],la=0,Pc=null,Lc=0,Jn=[],ei=0,Ss=null,tr=1,nr="";function ss(t,e){oa[la++]=Lc,oa[la++]=Pc,Pc=t,Lc=e}function hv(t,e,n){Jn[ei++]=tr,Jn[ei++]=nr,Jn[ei++]=Ss,Ss=t;var i=tr;t=nr;var r=32-wi(i)-1;i&=~(1<<r),n+=1;var s=32-wi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,tr=1<<32-wi(e)+r|n<<r|i,nr=s+t}else tr=1<<s|n<<r|i,nr=t}function kh(t){t.return!==null&&(ss(t,1),hv(t,1,0))}function Ih(t){for(;t===Pc;)Pc=oa[--la],oa[la]=null,Lc=oa[--la],oa[la]=null;for(;t===Ss;)Ss=Jn[--ei],Jn[ei]=null,nr=Jn[--ei],Jn[ei]=null,tr=Jn[--ei],Jn[ei]=null}var qn=null,Xn=null,Ut=!1,Si=null;function pv(t,e){var n=ti(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qn=t,Xn=Ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qn=t,Xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ss!==null?{id:tr,overflow:nr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ti(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,qn=t,Xn=null,!0):!1;default:return!1}}function tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nf(t){if(Ut){var e=Xn;if(e){var n=e;if(!cm(t,e)){if(tf(t))throw Error(oe(418));e=Ur(n.nextSibling);var i=qn;e&&cm(t,e)?pv(i,n):(t.flags=t.flags&-4097|2,Ut=!1,qn=t)}}else{if(tf(t))throw Error(oe(418));t.flags=t.flags&-4097|2,Ut=!1,qn=t}}}function um(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qn=t}function yl(t){if(t!==qn)return!1;if(!Ut)return um(t),Ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zd(t.type,t.memoizedProps)),e&&(e=Xn)){if(tf(t))throw mv(),Error(oe(418));for(;e;)pv(t,e),e=Ur(e.nextSibling)}if(um(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xn=Ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xn=null}}else Xn=qn?Ur(t.stateNode.nextSibling):null;return!0}function mv(){for(var t=Xn;t;)t=Ur(t.nextSibling)}function ba(){Xn=qn=null,Ut=!1}function Dh(t){Si===null?Si=[t]:Si.push(t)}var nS=fr.ReactCurrentBatchConfig;function eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Sl(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dm(t){var e=t._init;return e(t._payload)}function gv(t){function e(u,v){if(t){var y=u.deletions;y===null?(u.deletions=[v],u.flags|=16):y.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=zr(u,v),u.index=0,u.sibling=null,u}function s(u,v,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<v?(u.flags|=2,v):y):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,y,_){return v===null||v.tag!==6?(v=Vu(y,u.mode,_),v.return=u,v):(v=r(v,y),v.return=u,v)}function l(u,v,y,_){var R=y.type;return R===ta?h(u,v,y.props.children,_,y.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wr&&dm(R)===v.type)?(_=r(v,y.props),_.ref=eo(u,v,y),_.return=u,_):(_=fc(y.type,y.key,y.props,null,u.mode,_),_.ref=eo(u,v,y),_.return=u,_)}function c(u,v,y,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Gu(y,u.mode,_),v.return=u,v):(v=r(v,y.children||[]),v.return=u,v)}function h(u,v,y,_,R){return v===null||v.tag!==7?(v=vs(y,u.mode,_,R),v.return=u,v):(v=r(v,y),v.return=u,v)}function d(u,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Vu(""+v,u.mode,y),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ul:return y=fc(v.type,v.key,v.props,null,u.mode,y),y.ref=eo(u,null,v),y.return=u,y;case ea:return v=Gu(v,u.mode,y),v.return=u,v;case wr:var _=v._init;return d(u,_(v._payload),y)}if(ho(v)||Ya(v))return v=vs(v,u.mode,y,null),v.return=u,v;Sl(u,v)}return null}function p(u,v,y,_){var R=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return R!==null?null:o(u,v,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ul:return y.key===R?l(u,v,y,_):null;case ea:return y.key===R?c(u,v,y,_):null;case wr:return R=y._init,p(u,v,R(y._payload),_)}if(ho(y)||Ya(y))return R!==null?null:h(u,v,y,_,null);Sl(u,y)}return null}function m(u,v,y,_,R){if(typeof _=="string"&&_!==""||typeof _=="number")return u=u.get(y)||null,o(v,u,""+_,R);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ul:return u=u.get(_.key===null?y:_.key)||null,l(v,u,_,R);case ea:return u=u.get(_.key===null?y:_.key)||null,c(v,u,_,R);case wr:var A=_._init;return m(u,v,y,A(_._payload),R)}if(ho(_)||Ya(_))return u=u.get(y)||null,h(v,u,_,R,null);Sl(v,_)}return null}function g(u,v,y,_){for(var R=null,A=null,C=v,L=v=0,E=null;C!==null&&L<y.length;L++){C.index>L?(E=C,C=null):E=C.sibling;var M=p(u,C,y[L],_);if(M===null){C===null&&(C=E);break}t&&C&&M.alternate===null&&e(u,C),v=s(M,v,L),A===null?R=M:A.sibling=M,A=M,C=E}if(L===y.length)return n(u,C),Ut&&ss(u,L),R;if(C===null){for(;L<y.length;L++)C=d(u,y[L],_),C!==null&&(v=s(C,v,L),A===null?R=C:A.sibling=C,A=C);return Ut&&ss(u,L),R}for(C=i(u,C);L<y.length;L++)E=m(C,u,L,y[L],_),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?L:E.key),v=s(E,v,L),A===null?R=E:A.sibling=E,A=E);return t&&C.forEach(function(N){return e(u,N)}),Ut&&ss(u,L),R}function S(u,v,y,_){var R=Ya(y);if(typeof R!="function")throw Error(oe(150));if(y=R.call(y),y==null)throw Error(oe(151));for(var A=R=null,C=v,L=v=0,E=null,M=y.next();C!==null&&!M.done;L++,M=y.next()){C.index>L?(E=C,C=null):E=C.sibling;var N=p(u,C,M.value,_);if(N===null){C===null&&(C=E);break}t&&C&&N.alternate===null&&e(u,C),v=s(N,v,L),A===null?R=N:A.sibling=N,A=N,C=E}if(M.done)return n(u,C),Ut&&ss(u,L),R;if(C===null){for(;!M.done;L++,M=y.next())M=d(u,M.value,_),M!==null&&(v=s(M,v,L),A===null?R=M:A.sibling=M,A=M);return Ut&&ss(u,L),R}for(C=i(u,C);!M.done;L++,M=y.next())M=m(C,u,L,M.value,_),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?L:M.key),v=s(M,v,L),A===null?R=M:A.sibling=M,A=M);return t&&C.forEach(function(z){return e(u,z)}),Ut&&ss(u,L),R}function x(u,v,y,_){if(typeof y=="object"&&y!==null&&y.type===ta&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ul:e:{for(var R=y.key,A=v;A!==null;){if(A.key===R){if(R=y.type,R===ta){if(A.tag===7){n(u,A.sibling),v=r(A,y.props.children),v.return=u,u=v;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wr&&dm(R)===A.type){n(u,A.sibling),v=r(A,y.props),v.ref=eo(u,A,y),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}y.type===ta?(v=vs(y.props.children,u.mode,_,y.key),v.return=u,u=v):(_=fc(y.type,y.key,y.props,null,u.mode,_),_.ref=eo(u,v,y),_.return=u,u=_)}return a(u);case ea:e:{for(A=y.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(u,v.sibling),v=r(v,y.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Gu(y,u.mode,_),v.return=u,u=v}return a(u);case wr:return A=y._init,x(u,v,A(y._payload),_)}if(ho(y))return g(u,v,y,_);if(Ya(y))return S(u,v,y,_);Sl(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,y),v.return=u,u=v):(n(u,v),v=Vu(y,u.mode,_),v.return=u,u=v),a(u)):n(u,v)}return x}var Ta=gv(!0),vv=gv(!1),kc=qr(null),Ic=null,ca=null,Uh=null;function Oh(){Uh=ca=Ic=null}function Fh(t){var e=kc.current;It(kc),t._currentValue=e}function rf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function va(t,e){Ic=t,Uh=ca=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pn=!0),t.firstContext=null)}function ii(t){var e=t._currentValue;if(Uh!==t)if(t={context:t,memoizedValue:e,next:null},ca===null){if(Ic===null)throw Error(oe(308));ca=t,Ic.dependencies={lanes:0,firstContext:t}}else ca=ca.next=t;return e}var fs=null;function Bh(t){fs===null?fs=[t]:fs.push(t)}function xv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Bh(e)):(n.next=r.next,r.next=n),e.interleaved=n,cr(t,i)}function cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var br=!1;function zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _v(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Or(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,xt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,cr(t,n)}return r=i.interleaved,r===null?(e.next=e,Bh(i)):(e.next=r.next,r.next=e),i.interleaved=e,cr(t,n)}function ac(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bh(t,n)}}function fm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dc(t,e,n,i){var r=t.updateQueue;br=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,h=c=l=null,o=s;do{var p=o.lane,m=o.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,S=o;switch(p=e,m=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){d=g.call(m,d,p);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,p=typeof g=="function"?g.call(m,d,p):g,p==null)break e;d=Bt({},d,p);break e;case 2:br=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else m={eventTime:m,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=d):h=h.next=m,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Es|=a,t.lanes=a,t.memoizedState=d}}function hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var nl={},Gi=qr(nl),Go=qr(nl),jo=qr(nl);function hs(t){if(t===nl)throw Error(oe(174));return t}function Hh(t,e){switch(Pt(jo,e),Pt(Go,t),Pt(Gi,nl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Od(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Od(e,t)}It(Gi),Pt(Gi,e)}function Ca(){It(Gi),It(Go),It(jo)}function yv(t){hs(jo.current);var e=hs(Gi.current),n=Od(e,t.type);e!==n&&(Pt(Go,t),Pt(Gi,n))}function Vh(t){Go.current===t&&(It(Gi),It(Go))}var Ot=qr(0);function Uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uu=[];function Gh(){for(var t=0;t<Uu.length;t++)Uu[t]._workInProgressVersionPrimary=null;Uu.length=0}var oc=fr.ReactCurrentDispatcher,Ou=fr.ReactCurrentBatchConfig,Ms=0,Ft=null,Yt=null,tn=null,Oc=!1,Eo=!1,Wo=0,iS=0;function hn(){throw Error(oe(321))}function jh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ci(t[n],e[n]))return!1;return!0}function Wh(t,e,n,i,r,s){if(Ms=s,Ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,oc.current=t===null||t.memoizedState===null?oS:lS,t=n(i,r),Eo){s=0;do{if(Eo=!1,Wo=0,25<=s)throw Error(oe(301));s+=1,tn=Yt=null,e.updateQueue=null,oc.current=cS,t=n(i,r)}while(Eo)}if(oc.current=Fc,e=Yt!==null&&Yt.next!==null,Ms=0,tn=Yt=Ft=null,Oc=!1,e)throw Error(oe(300));return t}function $h(){var t=Wo!==0;return Wo=0,t}function Oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Ft.memoizedState=tn=t:tn=tn.next=t,tn}function ri(){if(Yt===null){var t=Ft.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var e=tn===null?Ft.memoizedState:tn.next;if(e!==null)tn=e,Yt=t;else{if(t===null)throw Error(oe(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},tn===null?Ft.memoizedState=tn=t:tn=tn.next=t}return tn}function $o(t,e){return typeof e=="function"?e(t):e}function Fu(t){var e=ri(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Ms&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,Ft.lanes|=h,Es|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Ci(i,e.memoizedState)||(Pn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ft.lanes|=s,Es|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bu(t){var e=ri(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Ci(s,e.memoizedState)||(Pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Sv(){}function Mv(t,e){var n=Ft,i=ri(),r=e(),s=!Ci(i.memoizedState,r);if(s&&(i.memoizedState=r,Pn=!0),i=i.queue,Xh(bv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||tn!==null&&tn.memoizedState.tag&1){if(n.flags|=2048,Xo(9,wv.bind(null,n,i,r,e),void 0,null),rn===null)throw Error(oe(349));Ms&30||Ev(n,e,r)}return r}function Ev(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ft.updateQueue,e===null?(e={lastEffect:null,stores:null},Ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wv(t,e,n,i){e.value=n,e.getSnapshot=i,Tv(e)&&Cv(t)}function bv(t,e,n){return n(function(){Tv(e)&&Cv(t)})}function Tv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ci(t,n)}catch{return!0}}function Cv(t){var e=cr(t,1);e!==null&&bi(e,t,1,-1)}function pm(t){var e=Oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},e.queue=t,t=t.dispatch=aS.bind(null,Ft,t),[e.memoizedState,t]}function Xo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ft.updateQueue,e===null?(e={lastEffect:null,stores:null},Ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Av(){return ri().memoizedState}function lc(t,e,n,i){var r=Oi();Ft.flags|=t,r.memoizedState=Xo(1|e,n,void 0,i===void 0?null:i)}function iu(t,e,n,i){var r=ri();i=i===void 0?null:i;var s=void 0;if(Yt!==null){var a=Yt.memoizedState;if(s=a.destroy,i!==null&&jh(i,a.deps)){r.memoizedState=Xo(e,n,s,i);return}}Ft.flags|=t,r.memoizedState=Xo(1|e,n,s,i)}function mm(t,e){return lc(8390656,8,t,e)}function Xh(t,e){return iu(2048,8,t,e)}function Rv(t,e){return iu(4,2,t,e)}function Nv(t,e){return iu(4,4,t,e)}function Pv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Lv(t,e,n){return n=n!=null?n.concat([t]):null,iu(4,4,Pv.bind(null,e,t),n)}function qh(){}function kv(t,e){var n=ri();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Iv(t,e){var n=ri();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Dv(t,e,n){return Ms&21?(Ci(n,e)||(n=zg(),Ft.lanes|=n,Es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=n)}function rS(t,e){var n=wt;wt=n!==0&&4>n?n:4,t(!0);var i=Ou.transition;Ou.transition={};try{t(!1),e()}finally{wt=n,Ou.transition=i}}function Uv(){return ri().memoizedState}function sS(t,e,n){var i=Br(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ov(t))Fv(e,n);else if(n=xv(t,e,n,i),n!==null){var r=bn();bi(n,t,i,r),Bv(n,e,i)}}function aS(t,e,n){var i=Br(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ov(t))Fv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Ci(o,a)){var l=e.interleaved;l===null?(r.next=r,Bh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=xv(t,e,r,i),n!==null&&(r=bn(),bi(n,t,i,r),Bv(n,e,i))}}function Ov(t){var e=t.alternate;return t===Ft||e!==null&&e===Ft}function Fv(t,e){Eo=Oc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bh(t,n)}}var Fc={readContext:ii,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},oS={readContext:ii,useCallback:function(t,e){return Oi().memoizedState=[t,e===void 0?null:e],t},useContext:ii,useEffect:mm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,lc(4194308,4,Pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return lc(4194308,4,t,e)},useInsertionEffect:function(t,e){return lc(4,2,t,e)},useMemo:function(t,e){var n=Oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sS.bind(null,Ft,t),[i.memoizedState,t]},useRef:function(t){var e=Oi();return t={current:t},e.memoizedState=t},useState:pm,useDebugValue:qh,useDeferredValue:function(t){return Oi().memoizedState=t},useTransition:function(){var t=pm(!1),e=t[0];return t=rS.bind(null,t[1]),Oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ft,r=Oi();if(Ut){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),rn===null)throw Error(oe(349));Ms&30||Ev(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,mm(bv.bind(null,i,s,t),[t]),i.flags|=2048,Xo(9,wv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Oi(),e=rn.identifierPrefix;if(Ut){var n=nr,i=tr;n=(i&~(1<<32-wi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lS={readContext:ii,useCallback:kv,useContext:ii,useEffect:Xh,useImperativeHandle:Lv,useInsertionEffect:Rv,useLayoutEffect:Nv,useMemo:Iv,useReducer:Fu,useRef:Av,useState:function(){return Fu($o)},useDebugValue:qh,useDeferredValue:function(t){var e=ri();return Dv(e,Yt.memoizedState,t)},useTransition:function(){var t=Fu($o)[0],e=ri().memoizedState;return[t,e]},useMutableSource:Sv,useSyncExternalStore:Mv,useId:Uv,unstable_isNewReconciler:!1},cS={readContext:ii,useCallback:kv,useContext:ii,useEffect:Xh,useImperativeHandle:Lv,useInsertionEffect:Rv,useLayoutEffect:Nv,useMemo:Iv,useReducer:Bu,useRef:Av,useState:function(){return Bu($o)},useDebugValue:qh,useDeferredValue:function(t){var e=ri();return Yt===null?e.memoizedState=t:Dv(e,Yt.memoizedState,t)},useTransition:function(){var t=Bu($o)[0],e=ri().memoizedState;return[t,e]},useMutableSource:Sv,useSyncExternalStore:Mv,useId:Uv,unstable_isNewReconciler:!1};function xi(t,e){if(t&&t.defaultProps){e=Bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ru={isMounted:function(t){return(t=t._reactInternals)?As(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=bn(),r=Br(t),s=sr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Or(t,s,r),e!==null&&(bi(e,t,r,i),ac(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=bn(),r=Br(t),s=sr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Or(t,s,r),e!==null&&(bi(e,t,r,i),ac(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bn(),i=Br(t),r=sr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Or(t,r,i),e!==null&&(bi(e,t,i,n),ac(e,t,i))}};function gm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Bo(n,i)||!Bo(r,s):!0}function zv(t,e,n){var i=!1,r=jr,s=e.contextType;return typeof s=="object"&&s!==null?s=ii(s):(r=kn(e)?ys:yn.current,i=e.contextTypes,s=(i=i!=null)?wa(t,r):jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ru,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ru.enqueueReplaceState(e,e.state,null)}function af(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},zh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ii(s):(s=kn(e)?ys:yn.current,r.context=wa(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ru.enqueueReplaceState(r,r.state,null),Dc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Aa(t,e){try{var n="",i=e;do n+=O1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function of(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uS=typeof WeakMap=="function"?WeakMap:Map;function Hv(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){zc||(zc=!0,vf=i),of(t,e)},n}function Vv(t,e,n){n=sr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){of(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){of(t,e),typeof i!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function xm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new uS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=wS.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ym(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,Or(n,e,1))),n.lanes|=1),t)}var dS=fr.ReactCurrentOwner,Pn=!1;function wn(t,e,n,i){e.child=t===null?vv(e,null,n,i):Ta(e,t.child,n,i)}function Sm(t,e,n,i,r){n=n.render;var s=e.ref;return va(e,r),i=Wh(t,e,n,i,s,r),n=$h(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ur(t,e,r)):(Ut&&n&&kh(e),e.flags|=1,wn(t,e,i,r),e.child)}function Mm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!np(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gv(t,e,s,i,r)):(t=fc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(a,i)&&t.ref===e.ref)return ur(t,e,r)}return e.flags|=1,t=zr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Gv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Bo(s,i)&&t.ref===e.ref)if(Pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Pn=!0);else return e.lanes=t.lanes,ur(t,e,r)}return lf(t,e,n,i,r)}function jv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(da,jn),jn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pt(da,jn),jn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Pt(da,jn),jn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Pt(da,jn),jn|=i;return wn(t,e,r,n),e.child}function Wv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lf(t,e,n,i,r){var s=kn(n)?ys:yn.current;return s=wa(e,s),va(e,r),n=Wh(t,e,n,i,s,r),i=$h(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ur(t,e,r)):(Ut&&i&&kh(e),e.flags|=1,wn(t,e,n,r),e.child)}function Em(t,e,n,i,r){if(kn(n)){var s=!0;Nc(e)}else s=!1;if(va(e,r),e.stateNode===null)cc(t,e),zv(e,n,i),af(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=ii(c):(c=kn(n)?ys:yn.current,c=wa(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&vm(e,a,i,c),br=!1;var p=e.memoizedState;a.state=p,Dc(e,i,a,r),l=e.memoizedState,o!==i||p!==l||Ln.current||br?(typeof h=="function"&&(sf(e,n,h,i),l=e.memoizedState),(o=br||gm(e,n,o,i,p,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,_v(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:xi(e.type,o),a.props=c,d=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=ii(l):(l=kn(n)?ys:yn.current,l=wa(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||p!==l)&&vm(e,a,i,l),br=!1,p=e.memoizedState,a.state=p,Dc(e,i,a,r);var g=e.memoizedState;o!==d||p!==g||Ln.current||br?(typeof m=="function"&&(sf(e,n,m,i),g=e.memoizedState),(c=br||gm(e,n,c,i,p,g,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return cf(t,e,n,i,s,r)}function cf(t,e,n,i,r,s){Wv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&lm(e,n,!1),ur(t,e,s);i=e.stateNode,dS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ta(e,t.child,null,s),e.child=Ta(e,null,o,s)):wn(t,e,o,s),e.memoizedState=i.state,r&&lm(e,n,!0),e.child}function $v(t){var e=t.stateNode;e.pendingContext?om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&om(t,e.context,!1),Hh(t,e.containerInfo)}function wm(t,e,n,i,r){return ba(),Dh(r),e.flags|=256,wn(t,e,n,i),e.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function df(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xv(t,e,n){var i=e.pendingProps,r=Ot.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Pt(Ot,r&1),t===null)return nf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ou(a,i,0,null),t=vs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=df(n),e.memoizedState=uf,t):Yh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return fS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=zr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=zr(o,s):(s=vs(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?df(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=uf,i}return s=t.child,t=s.sibling,i=zr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Yh(t,e){return e=ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ml(t,e,n,i){return i!==null&&Dh(i),Ta(e,t.child,null,n),t=Yh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=zu(Error(oe(422))),Ml(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ou({mode:"visible",children:i.children},r,0,null),s=vs(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ta(e,t.child,null,a),e.child.memoizedState=df(a),e.memoizedState=uf,s);if(!(e.mode&1))return Ml(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(oe(419)),i=zu(s,i,void 0),Ml(t,e,a,i)}if(o=(a&t.childLanes)!==0,Pn||o){if(i=rn,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,cr(t,r),bi(i,t,r,-1))}return tp(),i=zu(Error(oe(421))),Ml(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=bS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Xn=Ur(r.nextSibling),qn=e,Ut=!0,Si=null,t!==null&&(Jn[ei++]=tr,Jn[ei++]=nr,Jn[ei++]=Ss,tr=t.id,nr=t.overflow,Ss=e),e=Yh(e,i.children),e.flags|=4096,e)}function bm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),rf(t.return,e,n)}function Hu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function qv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(wn(t,e,i.children,n),i=Ot.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bm(t,n,e);else if(t.tag===19)bm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Pt(Ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Uc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Uc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hu(e,!0,n,null,s);break;case"together":Hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ur(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hS(t,e,n){switch(e.tag){case 3:$v(e),ba();break;case 5:yv(e);break;case 1:kn(e.type)&&Nc(e);break;case 4:Hh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Pt(kc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Pt(Ot,Ot.current&1),e.flags|=128,null):n&e.child.childLanes?Xv(t,e,n):(Pt(Ot,Ot.current&1),t=ur(t,e,n),t!==null?t.sibling:null);Pt(Ot,Ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return qv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Pt(Ot,Ot.current),i)break;return null;case 22:case 23:return e.lanes=0,jv(t,e,n)}return ur(t,e,n)}var Yv,ff,Kv,Zv;Yv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ff=function(){};Kv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,hs(Gi.current);var s=null;switch(n){case"input":r=kd(t,r),i=kd(t,i),s=[];break;case"select":r=Bt({},r,{value:void 0}),i=Bt({},i,{value:void 0}),s=[];break;case"textarea":r=Ud(t,r),i=Ud(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ac)}Fd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&kt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Zv=function(t,e,n,i){n!==i&&(e.flags|=4)};function to(t,e){if(!Ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function pn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function pS(t,e,n){var i=e.pendingProps;switch(Ih(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(e),null;case 1:return kn(e.type)&&Rc(),pn(e),null;case 3:return i=e.stateNode,Ca(),It(Ln),It(yn),Gh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Si!==null&&(yf(Si),Si=null))),ff(t,e),pn(e),null;case 5:Vh(e);var r=hs(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)Kv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return pn(e),null}if(t=hs(Gi.current),yl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[zi]=e,i[Vo]=s,t=(e.mode&1)!==0,n){case"dialog":kt("cancel",i),kt("close",i);break;case"iframe":case"object":case"embed":kt("load",i);break;case"video":case"audio":for(r=0;r<mo.length;r++)kt(mo[r],i);break;case"source":kt("error",i);break;case"img":case"image":case"link":kt("error",i),kt("load",i);break;case"details":kt("toggle",i);break;case"input":Ip(i,s),kt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},kt("invalid",i);break;case"textarea":Up(i,s),kt("invalid",i)}Fd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&_l(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&_l(i.textContent,o,t),r=["children",""+o]):Lo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&kt("scroll",i)}switch(n){case"input":dl(i),Dp(i,s,!0);break;case"textarea":dl(i),Op(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[zi]=e,t[Vo]=i,Yv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Bd(n,i),n){case"dialog":kt("cancel",t),kt("close",t),r=i;break;case"iframe":case"object":case"embed":kt("load",t),r=i;break;case"video":case"audio":for(r=0;r<mo.length;r++)kt(mo[r],t);r=i;break;case"source":kt("error",t),r=i;break;case"img":case"image":case"link":kt("error",t),kt("load",t),r=i;break;case"details":kt("toggle",t),r=i;break;case"input":Ip(t,i),r=kd(t,i),kt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Bt({},i,{value:void 0}),kt("invalid",t);break;case"textarea":Up(t,i),r=Ud(t,i),kt("invalid",t);break;default:r=i}Fd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Ag(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ko(t,l):typeof l=="number"&&ko(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Lo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&kt("scroll",t):l!=null&&_h(t,s,l,a))}switch(n){case"input":dl(t),Dp(t,i,!1);break;case"textarea":dl(t),Op(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Gr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ha(t,!!i.multiple,s,!1):i.defaultValue!=null&&ha(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ac)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pn(e),null;case 6:if(t&&e.stateNode!=null)Zv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=hs(jo.current),hs(Gi.current),yl(e)){if(i=e.stateNode,n=e.memoizedProps,i[zi]=e,(s=i.nodeValue!==n)&&(t=qn,t!==null))switch(t.tag){case 3:_l(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_l(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[zi]=e,e.stateNode=i}return pn(e),null;case 13:if(It(Ot),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Xn!==null&&e.mode&1&&!(e.flags&128))mv(),ba(),e.flags|=98560,s=!1;else if(s=yl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[zi]=e}else ba(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pn(e),s=!1}else Si!==null&&(yf(Si),Si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ot.current&1?Kt===0&&(Kt=3):tp())),e.updateQueue!==null&&(e.flags|=4),pn(e),null);case 4:return Ca(),ff(t,e),t===null&&zo(e.stateNode.containerInfo),pn(e),null;case 10:return Fh(e.type._context),pn(e),null;case 17:return kn(e.type)&&Rc(),pn(e),null;case 19:if(It(Ot),s=e.memoizedState,s===null)return pn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)to(s,!1);else{if(Kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Uc(t),a!==null){for(e.flags|=128,to(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pt(Ot,Ot.current&1|2),e.child}t=t.sibling}s.tail!==null&&Gt()>Ra&&(e.flags|=128,i=!0,to(s,!1),e.lanes=4194304)}else{if(!i)if(t=Uc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),to(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Ut)return pn(e),null}else 2*Gt()-s.renderingStartTime>Ra&&n!==1073741824&&(e.flags|=128,i=!0,to(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Gt(),e.sibling=null,n=Ot.current,Pt(Ot,i?n&1|2:n&1),e):(pn(e),null);case 22:case 23:return ep(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?jn&1073741824&&(pn(e),e.subtreeFlags&6&&(e.flags|=8192)):pn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function mS(t,e){switch(Ih(e),e.tag){case 1:return kn(e.type)&&Rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ca(),It(Ln),It(yn),Gh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vh(e),null;case 13:if(It(Ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));ba()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return It(Ot),null;case 4:return Ca(),null;case 10:return Fh(e.type._context),null;case 22:case 23:return ep(),null;case 24:return null;default:return null}}var El=!1,xn=!1,gS=typeof WeakSet=="function"?WeakSet:Set,Se=null;function ua(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ht(t,e,i)}else n.current=null}function hf(t,e,n){try{n()}catch(i){Ht(t,e,i)}}var Tm=!1;function vS(t,e){if(Yd=bc,t=nv(),Lh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,d=t,p=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(m=d.firstChild)!==null;)p=d,d=m;for(;;){if(d===t)break t;if(p===n&&++c===r&&(o=a),p===s&&++h===i&&(l=a),(m=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kd={focusedElem:t,selectionRange:n},bc=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,x=g.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:xi(e.type,S),x);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(_){Ht(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return g=Tm,Tm=!1,g}function wo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&hf(e,n,s)}r=r.next}while(r!==i)}}function su(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function pf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qv(t){var e=t.alternate;e!==null&&(t.alternate=null,Qv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zi],delete e[Vo],delete e[Jd],delete e[Jy],delete e[eS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jv(t){return t.tag===5||t.tag===3||t.tag===4}function Cm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ac));else if(i!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}function gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(gf(t,e,n),t=t.sibling;t!==null;)gf(t,e,n),t=t.sibling}var an=null,_i=!1;function vr(t,e,n){for(n=n.child;n!==null;)ex(t,e,n),n=n.sibling}function ex(t,e,n){if(Vi&&typeof Vi.onCommitFiberUnmount=="function")try{Vi.onCommitFiberUnmount(Zc,n)}catch{}switch(n.tag){case 5:xn||ua(n,e);case 6:var i=an,r=_i;an=null,vr(t,e,n),an=i,_i=r,an!==null&&(_i?(t=an,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):an.removeChild(n.stateNode));break;case 18:an!==null&&(_i?(t=an,n=n.stateNode,t.nodeType===8?Iu(t.parentNode,n):t.nodeType===1&&Iu(t,n),Oo(t)):Iu(an,n.stateNode));break;case 4:i=an,r=_i,an=n.stateNode.containerInfo,_i=!0,vr(t,e,n),an=i,_i=r;break;case 0:case 11:case 14:case 15:if(!xn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&hf(n,e,a),r=r.next}while(r!==i)}vr(t,e,n);break;case 1:if(!xn&&(ua(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Ht(n,e,o)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(xn=(i=xn)||n.memoizedState!==null,vr(t,e,n),xn=i):vr(t,e,n);break;default:vr(t,e,n)}}function Am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gS),e.forEach(function(i){var r=TS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function fi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:an=o.stateNode,_i=!1;break e;case 3:an=o.stateNode.containerInfo,_i=!0;break e;case 4:an=o.stateNode.containerInfo,_i=!0;break e}o=o.return}if(an===null)throw Error(oe(160));ex(s,a,r),an=null,_i=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ht(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tx(e,t),e=e.sibling}function tx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fi(e,t),Ui(t),i&4){try{wo(3,t,t.return),su(3,t)}catch(S){Ht(t,t.return,S)}try{wo(5,t,t.return)}catch(S){Ht(t,t.return,S)}}break;case 1:fi(e,t),Ui(t),i&512&&n!==null&&ua(n,n.return);break;case 5:if(fi(e,t),Ui(t),i&512&&n!==null&&ua(n,n.return),t.flags&32){var r=t.stateNode;try{ko(r,"")}catch(S){Ht(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Eg(r,s),Bd(o,a);var c=Bd(o,s);for(a=0;a<l.length;a+=2){var h=l[a],d=l[a+1];h==="style"?Ag(r,d):h==="dangerouslySetInnerHTML"?Tg(r,d):h==="children"?ko(r,d):_h(r,h,d,c)}switch(o){case"input":Id(r,s);break;case"textarea":wg(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ha(r,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?ha(r,!!s.multiple,s.defaultValue,!0):ha(r,!!s.multiple,s.multiple?[]:"",!1))}r[Vo]=s}catch(S){Ht(t,t.return,S)}}break;case 6:if(fi(e,t),Ui(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Ht(t,t.return,S)}}break;case 3:if(fi(e,t),Ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(e.containerInfo)}catch(S){Ht(t,t.return,S)}break;case 4:fi(e,t),Ui(t);break;case 13:fi(e,t),Ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Qh=Gt())),i&4&&Am(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(xn=(c=xn)||h,fi(e,t),xn=c):fi(e,t),Ui(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Se=t,h=t.child;h!==null;){for(d=Se=h;Se!==null;){switch(p=Se,m=p.child,p.tag){case 0:case 11:case 14:case 15:wo(4,p,p.return);break;case 1:ua(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(S){Ht(i,n,S)}}break;case 5:ua(p,p.return);break;case 22:if(p.memoizedState!==null){Nm(d);continue}}m!==null?(m.return=p,Se=m):Nm(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Cg("display",a))}catch(S){Ht(t,t.return,S)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(S){Ht(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:fi(e,t),Ui(t),i&4&&Am(t);break;case 21:break;default:fi(e,t),Ui(t)}}function Ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jv(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ko(r,""),i.flags&=-33);var s=Cm(t);gf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Cm(t);mf(t,o,a);break;default:throw Error(oe(161))}}catch(l){Ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xS(t,e,n){Se=t,nx(t)}function nx(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||El;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||xn;o=El;var c=xn;if(El=a,(xn=l)&&!c)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?Pm(r):l!==null?(l.return=a,Se=l):Pm(r);for(;s!==null;)Se=s,nx(s),s=s.sibling;Se=r,El=o,xn=c}Rm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Rm(t)}}function Rm(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xn||su(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!xn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:xi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Oo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}xn||e.flags&512&&pf(e)}catch(p){Ht(e,e.return,p)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Nm(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Pm(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{su(4,e)}catch(l){Ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ht(e,r,l)}}var s=e.return;try{pf(e)}catch(l){Ht(e,s,l)}break;case 5:var a=e.return;try{pf(e)}catch(l){Ht(e,a,l)}}}catch(l){Ht(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var _S=Math.ceil,Bc=fr.ReactCurrentDispatcher,Kh=fr.ReactCurrentOwner,ni=fr.ReactCurrentBatchConfig,xt=0,rn=null,Wt=null,on=0,jn=0,da=qr(0),Kt=0,qo=null,Es=0,au=0,Zh=0,bo=null,Nn=null,Qh=0,Ra=1/0,Qi=null,zc=!1,vf=null,Fr=null,wl=!1,Pr=null,Hc=0,To=0,xf=null,uc=-1,dc=0;function bn(){return xt&6?Gt():uc!==-1?uc:uc=Gt()}function Br(t){return t.mode&1?xt&2&&on!==0?on&-on:nS.transition!==null?(dc===0&&(dc=zg()),dc):(t=wt,t!==0||(t=window.event,t=t===void 0?16:Xg(t.type)),t):1}function bi(t,e,n,i){if(50<To)throw To=0,xf=null,Error(oe(185));Jo(t,n,i),(!(xt&2)||t!==rn)&&(t===rn&&(!(xt&2)&&(au|=n),Kt===4&&Ar(t,on)),In(t,i),n===1&&xt===0&&!(e.mode&1)&&(Ra=Gt()+500,nu&&Yr()))}function In(t,e){var n=t.callbackNode;ny(t,e);var i=wc(t,t===rn?on:0);if(i===0)n!==null&&zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zp(n),e===1)t.tag===0?tS(Lm.bind(null,t)):fv(Lm.bind(null,t)),Zy(function(){!(xt&6)&&Yr()}),n=null;else{switch(Hg(i)){case 1:n=wh;break;case 4:n=Fg;break;case 16:n=Ec;break;case 536870912:n=Bg;break;default:n=Ec}n=ux(n,ix.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ix(t,e){if(uc=-1,dc=0,xt&6)throw Error(oe(327));var n=t.callbackNode;if(xa()&&t.callbackNode!==n)return null;var i=wc(t,t===rn?on:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vc(t,i);else{e=i;var r=xt;xt|=2;var s=sx();(rn!==t||on!==e)&&(Qi=null,Ra=Gt()+500,gs(t,e));do try{MS();break}catch(o){rx(t,o)}while(!0);Oh(),Bc.current=s,xt=r,Wt!==null?e=0:(rn=null,on=0,e=Kt)}if(e!==0){if(e===2&&(r=jd(t),r!==0&&(i=r,e=_f(t,r))),e===1)throw n=qo,gs(t,0),Ar(t,i),In(t,Gt()),n;if(e===6)Ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!yS(r)&&(e=Vc(t,i),e===2&&(s=jd(t),s!==0&&(i=s,e=_f(t,s))),e===1))throw n=qo,gs(t,0),Ar(t,i),In(t,Gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:as(t,Nn,Qi);break;case 3:if(Ar(t,i),(i&130023424)===i&&(e=Qh+500-Gt(),10<e)){if(wc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){bn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Qd(as.bind(null,t,Nn,Qi),e);break}as(t,Nn,Qi);break;case 4:if(Ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-wi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_S(i/1960))-i,10<i){t.timeoutHandle=Qd(as.bind(null,t,Nn,Qi),i);break}as(t,Nn,Qi);break;case 5:as(t,Nn,Qi);break;default:throw Error(oe(329))}}}return In(t,Gt()),t.callbackNode===n?ix.bind(null,t):null}function _f(t,e){var n=bo;return t.current.memoizedState.isDehydrated&&(gs(t,e).flags|=256),t=Vc(t,e),t!==2&&(e=Nn,Nn=n,e!==null&&yf(e)),t}function yf(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function yS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~Zh,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wi(e),i=1<<n;t[n]=-1,e&=~i}}function Lm(t){if(xt&6)throw Error(oe(327));xa();var e=wc(t,0);if(!(e&1))return In(t,Gt()),null;var n=Vc(t,e);if(t.tag!==0&&n===2){var i=jd(t);i!==0&&(e=i,n=_f(t,i))}if(n===1)throw n=qo,gs(t,0),Ar(t,e),In(t,Gt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,as(t,Nn,Qi),In(t,Gt()),null}function Jh(t,e){var n=xt;xt|=1;try{return t(e)}finally{xt=n,xt===0&&(Ra=Gt()+500,nu&&Yr())}}function ws(t){Pr!==null&&Pr.tag===0&&!(xt&6)&&xa();var e=xt;xt|=1;var n=ni.transition,i=wt;try{if(ni.transition=null,wt=1,t)return t()}finally{wt=i,ni.transition=n,xt=e,!(xt&6)&&Yr()}}function ep(){jn=da.current,It(da)}function gs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ky(n)),Wt!==null)for(n=Wt.return;n!==null;){var i=n;switch(Ih(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rc();break;case 3:Ca(),It(Ln),It(yn),Gh();break;case 5:Vh(i);break;case 4:Ca();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:Fh(i.type._context);break;case 22:case 23:ep()}n=n.return}if(rn=t,Wt=t=zr(t.current,null),on=jn=e,Kt=0,qo=null,Zh=au=Es=0,Nn=bo=null,fs!==null){for(e=0;e<fs.length;e++)if(n=fs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}fs=null}return t}function rx(t,e){do{var n=Wt;try{if(Oh(),oc.current=Fc,Oc){for(var i=Ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Oc=!1}if(Ms=0,tn=Yt=Ft=null,Eo=!1,Wo=0,Kh.current=null,n===null||n.return===null){Kt=1,qo=e,Wt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=on,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=_m(a);if(m!==null){m.flags&=-257,ym(m,a,o,s,e),m.mode&1&&xm(s,c,e),e=m,l=c;var g=e.updateQueue;if(g===null){var S=new Set;S.add(l),e.updateQueue=S}else g.add(l);break e}else{if(!(e&1)){xm(s,c,e),tp();break e}l=Error(oe(426))}}else if(Ut&&o.mode&1){var x=_m(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),ym(x,a,o,s,e),Dh(Aa(l,o));break e}}s=l=Aa(l,o),Kt!==4&&(Kt=2),bo===null?bo=[s]:bo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Hv(s,l,e);fm(s,u);break e;case 1:o=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Fr===null||!Fr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Vv(s,o,e);fm(s,_);break e}}s=s.return}while(s!==null)}ox(n)}catch(R){e=R,Wt===n&&n!==null&&(Wt=n=n.return);continue}break}while(!0)}function sx(){var t=Bc.current;return Bc.current=Fc,t===null?Fc:t}function tp(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),rn===null||!(Es&268435455)&&!(au&268435455)||Ar(rn,on)}function Vc(t,e){var n=xt;xt|=2;var i=sx();(rn!==t||on!==e)&&(Qi=null,gs(t,e));do try{SS();break}catch(r){rx(t,r)}while(!0);if(Oh(),xt=n,Bc.current=i,Wt!==null)throw Error(oe(261));return rn=null,on=0,Kt}function SS(){for(;Wt!==null;)ax(Wt)}function MS(){for(;Wt!==null&&!X1();)ax(Wt)}function ax(t){var e=cx(t.alternate,t,jn);t.memoizedProps=t.pendingProps,e===null?ox(t):Wt=e,Kh.current=null}function ox(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mS(n,e),n!==null){n.flags&=32767,Wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Wt=null;return}}else if(n=pS(n,e,jn),n!==null){Wt=n;return}if(e=e.sibling,e!==null){Wt=e;return}Wt=e=t}while(e!==null);Kt===0&&(Kt=5)}function as(t,e,n){var i=wt,r=ni.transition;try{ni.transition=null,wt=1,ES(t,e,n,i)}finally{ni.transition=r,wt=i}return null}function ES(t,e,n,i){do xa();while(Pr!==null);if(xt&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iy(t,s),t===rn&&(Wt=rn=null,on=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wl||(wl=!0,ux(Ec,function(){return xa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ni.transition,ni.transition=null;var a=wt;wt=1;var o=xt;xt|=4,Kh.current=null,vS(t,n),tx(n,t),Gy(Kd),bc=!!Yd,Kd=Yd=null,t.current=n,xS(n),q1(),xt=o,wt=a,ni.transition=s}else t.current=n;if(wl&&(wl=!1,Pr=t,Hc=r),s=t.pendingLanes,s===0&&(Fr=null),Z1(n.stateNode),In(t,Gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(zc)throw zc=!1,t=vf,vf=null,t;return Hc&1&&t.tag!==0&&xa(),s=t.pendingLanes,s&1?t===xf?To++:(To=0,xf=t):To=0,Yr(),null}function xa(){if(Pr!==null){var t=Hg(Hc),e=ni.transition,n=wt;try{if(ni.transition=null,wt=16>t?16:t,Pr===null)var i=!1;else{if(t=Pr,Pr=null,Hc=0,xt&6)throw Error(oe(331));var r=xt;for(xt|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Se=c;Se!==null;){var h=Se;switch(h.tag){case 0:case 11:case 15:wo(8,h,s)}var d=h.child;if(d!==null)d.return=h,Se=d;else for(;Se!==null;){h=Se;var p=h.sibling,m=h.return;if(Qv(h),h===c){Se=null;break}if(p!==null){p.return=m,Se=p;break}Se=m}}}var g=s.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var x=S.sibling;S.sibling=null,S=x}while(S!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Se=u;break e}Se=s.return}}var v=t.current;for(Se=v;Se!==null;){a=Se;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Se=y;else e:for(a=v;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:su(9,o)}}catch(R){Ht(o,o.return,R)}if(o===a){Se=null;break e}var _=o.sibling;if(_!==null){_.return=o.return,Se=_;break e}Se=o.return}}if(xt=r,Yr(),Vi&&typeof Vi.onPostCommitFiberRoot=="function")try{Vi.onPostCommitFiberRoot(Zc,t)}catch{}i=!0}return i}finally{wt=n,ni.transition=e}}return!1}function km(t,e,n){e=Aa(n,e),e=Hv(t,e,1),t=Or(t,e,1),e=bn(),t!==null&&(Jo(t,1,e),In(t,e))}function Ht(t,e,n){if(t.tag===3)km(t,t,n);else for(;e!==null;){if(e.tag===3){km(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fr===null||!Fr.has(i))){t=Aa(n,t),t=Vv(e,t,1),e=Or(e,t,1),t=bn(),e!==null&&(Jo(e,1,t),In(e,t));break}}e=e.return}}function wS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=bn(),t.pingedLanes|=t.suspendedLanes&n,rn===t&&(on&n)===n&&(Kt===4||Kt===3&&(on&130023424)===on&&500>Gt()-Qh?gs(t,0):Zh|=n),In(t,e)}function lx(t,e){e===0&&(t.mode&1?(e=pl,pl<<=1,!(pl&130023424)&&(pl=4194304)):e=1);var n=bn();t=cr(t,e),t!==null&&(Jo(t,e,n),In(t,n))}function bS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lx(t,n)}function TS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),lx(t,n)}var cx;cx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ln.current)Pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pn=!1,hS(t,e,n);Pn=!!(t.flags&131072)}else Pn=!1,Ut&&e.flags&1048576&&hv(e,Lc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cc(t,e),t=e.pendingProps;var r=wa(e,yn.current);va(e,n),r=Wh(null,e,i,t,r,n);var s=$h();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kn(i)?(s=!0,Nc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zh(e),r.updater=ru,e.stateNode=r,r._reactInternals=e,af(e,i,t,n),e=cf(null,e,i,!0,s,n)):(e.tag=0,Ut&&s&&kh(e),wn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=AS(i),t=xi(i,t),r){case 0:e=lf(null,e,i,t,n);break e;case 1:e=Em(null,e,i,t,n);break e;case 11:e=Sm(null,e,i,t,n);break e;case 14:e=Mm(null,e,i,xi(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),lf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),Em(t,e,i,r,n);case 3:e:{if($v(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,_v(t,e),Dc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Aa(Error(oe(423)),e),e=wm(t,e,i,n,r);break e}else if(i!==r){r=Aa(Error(oe(424)),e),e=wm(t,e,i,n,r);break e}else for(Xn=Ur(e.stateNode.containerInfo.firstChild),qn=e,Ut=!0,Si=null,n=vv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ba(),i===r){e=ur(t,e,n);break e}wn(t,e,i,n)}e=e.child}return e;case 5:return yv(e),t===null&&nf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Zd(i,r)?a=null:s!==null&&Zd(i,s)&&(e.flags|=32),Wv(t,e),wn(t,e,a,n),e.child;case 6:return t===null&&nf(e),null;case 13:return Xv(t,e,n);case 4:return Hh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ta(e,null,i,n):wn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),Sm(t,e,i,r,n);case 7:return wn(t,e,e.pendingProps,n),e.child;case 8:return wn(t,e,e.pendingProps.children,n),e.child;case 12:return wn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Pt(kc,i._currentValue),i._currentValue=a,s!==null)if(Ci(s.value,a)){if(s.children===r.children&&!Ln.current){e=ur(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=sr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(oe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),rf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}wn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,va(e,n),r=ii(r),i=i(r),e.flags|=1,wn(t,e,i,n),e.child;case 14:return i=e.type,r=xi(i,e.pendingProps),r=xi(i.type,r),Mm(t,e,i,r,n);case 15:return Gv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),cc(t,e),e.tag=1,kn(i)?(t=!0,Nc(e)):t=!1,va(e,n),zv(e,i,r),af(e,i,r,n),cf(null,e,i,!0,t,n);case 19:return qv(t,e,n);case 22:return jv(t,e,n)}throw Error(oe(156,e.tag))};function ux(t,e){return Og(t,e)}function CS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,e,n,i){return new CS(t,e,n,i)}function np(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AS(t){if(typeof t=="function")return np(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sh)return 11;if(t===Mh)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=ti(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fc(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")np(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ta:return vs(n.children,r,s,e);case yh:a=8,r|=8;break;case Rd:return t=ti(12,n,e,r|2),t.elementType=Rd,t.lanes=s,t;case Nd:return t=ti(13,n,e,r),t.elementType=Nd,t.lanes=s,t;case Pd:return t=ti(19,n,e,r),t.elementType=Pd,t.lanes=s,t;case yg:return ou(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xg:a=10;break e;case _g:a=9;break e;case Sh:a=11;break e;case Mh:a=14;break e;case wr:a=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=ti(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function vs(t,e,n,i){return t=ti(7,t,i,e),t.lanes=n,t}function ou(t,e,n,i){return t=ti(22,t,i,e),t.elementType=yg,t.lanes=n,t.stateNode={isHidden:!1},t}function Vu(t,e,n){return t=ti(6,t,null,e),t.lanes=n,t}function Gu(t,e,n){return e=ti(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function RS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Eu(0),this.expirationTimes=Eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ip(t,e,n,i,r,s,a,o,l){return t=new RS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ti(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zh(s),t}function NS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ea,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function dx(t){if(!t)return jr;t=t._reactInternals;e:{if(As(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(kn(n))return dv(t,n,e)}return e}function fx(t,e,n,i,r,s,a,o,l){return t=ip(n,i,!0,t,r,s,a,o,l),t.context=dx(null),n=t.current,i=bn(),r=Br(n),s=sr(i,r),s.callback=e??null,Or(n,s,r),t.current.lanes=r,Jo(t,r,i),In(t,i),t}function lu(t,e,n,i){var r=e.current,s=bn(),a=Br(r);return n=dx(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Or(r,e,a),t!==null&&(bi(t,r,a,s),ac(t,r,a)),a}function Gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Im(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rp(t,e){Im(t,e),(t=t.alternate)&&Im(t,e)}function PS(){return null}var hx=typeof reportError=="function"?reportError:function(t){console.error(t)};function sp(t){this._internalRoot=t}cu.prototype.render=sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));lu(t,e,null,null)};cu.prototype.unmount=sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ws(function(){lu(null,t,null,null)}),e[lr]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=jg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cr.length&&e!==0&&e<Cr[n].priority;n++);Cr.splice(n,0,t),n===0&&$g(t)}};function ap(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function LS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Gc(a);s.call(c)}}var a=fx(e,i,t,0,null,!1,!1,"",Dm);return t._reactRootContainer=a,t[lr]=a.current,zo(t.nodeType===8?t.parentNode:t),ws(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Gc(l);o.call(c)}}var l=ip(t,0,!1,null,null,!1,!1,"",Dm);return t._reactRootContainer=l,t[lr]=l.current,zo(t.nodeType===8?t.parentNode:t),ws(function(){lu(e,l,n,i)}),l}function du(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Gc(a);o.call(l)}}lu(e,a,t,r)}else a=LS(n,e,t,r,i);return Gc(a)}Vg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=po(e.pendingLanes);n!==0&&(bh(e,n|1),In(e,Gt()),!(xt&6)&&(Ra=Gt()+500,Yr()))}break;case 13:ws(function(){var i=cr(t,1);if(i!==null){var r=bn();bi(i,t,1,r)}}),rp(t,1)}};Th=function(t){if(t.tag===13){var e=cr(t,134217728);if(e!==null){var n=bn();bi(e,t,134217728,n)}rp(t,134217728)}};Gg=function(t){if(t.tag===13){var e=Br(t),n=cr(t,e);if(n!==null){var i=bn();bi(n,t,e,i)}rp(t,e)}};jg=function(){return wt};Wg=function(t,e){var n=wt;try{return wt=t,e()}finally{wt=n}};Hd=function(t,e,n){switch(e){case"input":if(Id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=tu(i);if(!r)throw Error(oe(90));Mg(i),Id(i,r)}}}break;case"textarea":wg(t,n);break;case"select":e=n.value,e!=null&&ha(t,!!n.multiple,e,!1)}};Pg=Jh;Lg=ws;var kS={usingClientEntryPoint:!1,Events:[tl,sa,tu,Rg,Ng,Jh]},no={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},IS={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dg(t),t===null?null:t.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||PS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{Zc=bl.inject(IS),Vi=bl}catch{}}Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kS;Kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ap(e))throw Error(oe(200));return NS(t,e,null,n)};Kn.createRoot=function(t,e){if(!ap(t))throw Error(oe(299));var n=!1,i="",r=hx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ip(t,1,!1,null,null,n,!1,i,r),t[lr]=e.current,zo(t.nodeType===8?t.parentNode:t),new sp(e)};Kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Dg(e),t=t===null?null:t.stateNode,t};Kn.flushSync=function(t){return ws(t)};Kn.hydrate=function(t,e,n){if(!uu(e))throw Error(oe(200));return du(null,t,e,!0,n)};Kn.hydrateRoot=function(t,e,n){if(!ap(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=hx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=fx(e,null,t,1,n??null,r,!1,s,a),t[lr]=e.current,zo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new cu(e)};Kn.render=function(t,e,n){if(!uu(e))throw Error(oe(200));return du(null,t,e,!1,n)};Kn.unmountComponentAtNode=function(t){if(!uu(t))throw Error(oe(40));return t._reactRootContainer?(ws(function(){du(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};Kn.unstable_batchedUpdates=Jh;Kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!uu(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return du(t,e,n,!1,i)};Kn.version="18.3.1-next-f1338f8080-20240426";function px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(px)}catch(t){console.error(t)}}px(),pg.exports=Kn;var DS=pg.exports,Um=DS;Cd.createRoot=Um.createRoot,Cd.hydrateRoot=Um.hydrateRoot;var it=(t=>(t.USER_EXEC="USER_EXEC",t.PRIV_EXEC="PRIV_EXEC",t.GLOBAL_CONFIG="GLOBAL_CONFIG",t.INTERFACE_CONFIG="INTERFACE_CONFIG",t.VLAN_CONFIG="VLAN_CONFIG",t.LINE_CONFIG="LINE_CONFIG",t))(it||{}),Qe=(t=>(t.ROUTER="router",t.SWITCH="switch",t.HOST="host",t.SERVER="server",t))(Qe||{}),rt=(t=>(t.NONE="NONE",t.NO_IP="NO_IP",t.NO_LINK="NO_LINK",t.ADMIN_DOWN="ADMIN_DOWN",t.VLAN_MISMATCH="VLAN_MISMATCH",t.WRONG_SUBNET="WRONG_SUBNET",t.NO_GATEWAY="NO_GATEWAY",t.NO_ROUTE="NO_ROUTE",t.HOST_UNREACHABLE="HOST_UNREACHABLE",t.ACL_DENIED="ACL_DENIED",t))(rt||{}),J=(t=>(t.NONE="NONE",t.CLOSE_SESSION="CLOSE_SESSION",t.OPEN_EDITOR="OPEN_EDITOR",t))(J||{}),Fi=(t=>(t.VULNERABLE="VULNERABLE",t.PATCHED="PATCHED",t.NORMAL="NORMAL",t.ERROR="ERROR",t))(Fi||{});function _a(t){const e=t.trim();if(!e)return"";const n=e.match(/^([^.]+)\.(\d+)$/);if(n)return`${_a(n[1])}.${n[2]}`;const i=e.match(/^([a-zA-Z]+)\s*(\d+(?:\/\d+)*(?:\.\d+)?)$/);if(!i)return e;const r=i[1].toLowerCase(),s=i[2];return r.startsWith("gi")||r.startsWith("g")?`GigabitEthernet${s}`:r.startsWith("fa")||r.startsWith("f")?`FastEthernet${s}`:r.startsWith("et")||r.startsWith("e")?`Ethernet${s}`:`${i[1]}${s}`}function Sf(t){const e=t.trim(),n=e.match(/^([^.]+)\.(\d+)$/);return n?`${Sf(n[1])}.${n[2]}`:e.startsWith("GigabitEthernet")?`Gi${e.slice(15)}`:e.startsWith("FastEthernet")?`Fa${e.slice(12)}`:e.startsWith("Ethernet")?`Eth${e.slice(8)}`:e}function mx(t){return t.includes(".")}function US(t){return t.split(".")[0]}function OS(t){const e=t.split(".");if(e.length>1){const n=parseInt(e[1],10);return isNaN(n)?null:n}return null}function Tr(t){const e=t.indexOf(":");if(e===-1)return t;const n=t.slice(0,e),i=t.slice(e+1);return`${n}:${_a(i)}`}const FS={router_2port:{id:"router_2port",type:Qe.ROUTER,interfaces:["GigabitEthernet0/0","GigabitEthernet0/1"],defaultRackUnits:1},switch_24:{id:"switch_24",type:Qe.SWITCH,interfaces:[...Array.from({length:24},(t,e)=>`FastEthernet0/${e+1}`),"GigabitEthernet0/1","GigabitEthernet0/2"],defaultRackUnits:1},pc:{id:"pc",type:Qe.HOST,interfaces:["Ethernet0"]},server:{id:"server",type:Qe.SERVER,interfaces:["Ethernet0"],defaultRackUnits:1}};function BS(t){const e=FS[t];return e?[...e.interfaces]:[]}class zS{constructor(e,n,i,r){Oe(this,"id");Oe(this,"type");Oe(this,"model");Oe(this,"hostname");Oe(this,"rack");Oe(this,"slot");Oe(this,"desk");Oe(this,"interfaces",new Map);Oe(this,"enableSecret","");Oe(this,"users",new Map);Oe(this,"domainName","");Oe(this,"hasRsaKey",!1);Oe(this,"vlans",new Map);Oe(this,"routes",[]);Oe(this,"natRules",[]);Oe(this,"acls",[]);Oe(this,"ipRouting",!0);Oe(this,"ip",null);Oe(this,"mask",null);Oe(this,"gateway",null);Oe(this,"locked",!1);Oe(this,"files",new Map);Oe(this,"services",[]);Oe(this,"vulns",[]);Oe(this,"patchRevs",new Map);this.id=e,this.type=n,this.model=i,this.hostname=r||e,this.type===Qe.SWITCH&&this.vlans.set(1,"default");const s=BS(i);for(const a of s){const o=_a(a),l=this.type===Qe.SWITCH,c=this.type===Qe.ROUTER;this.interfaces.set(o,{fullName:o,shortName:Sf(o),adminUp:!c,operUp:!1,ip:null,mask:null,peer:null,mode:l?"access":void 0,accessVlan:l?1:void 0,trunkAllowed:l?[]:void 0})}}getInterface(e){const n=_a(e);return this.interfaces.get(n)}ensureSubinterface(e){const n=_a(e);if(!mx(n))return null;if(this.interfaces.has(n))return this.interfaces.get(n);const i=US(n);if(!this.interfaces.get(i))return null;const s=OS(n),a={fullName:n,shortName:Sf(n),adminUp:!0,operUp:!1,ip:null,mask:null,peer:null,isSubinterface:!0,parent:i,dot1qVlan:s||void 0};return this.interfaces.set(n,a),a}getOrderedInterfaces(){return Array.from(this.interfaces.values())}updateOperStatus(e,n){const i=this.getInterface(e);if(!i)return;if(i.isSubinterface&&i.parent){const l=this.getInterface(i.parent);i.operUp=i.adminUp&&((l==null?void 0:l.operUp)??!1);return}if(!i.adminUp||!i.peer){i.operUp=!1;return}const[r,s]=i.peer.split(":"),a=n.get(r);if(!a){i.operUp=!1;return}const o=a.getInterface(s);i.operUp=i.adminUp&&((o==null?void 0:o.adminUp)??!1)}}function xs(t){const e=t.trim().split(".");if(e.length!==4)return-1;let n=0;for(let i=0;i<4;i++){const r=Number(e[i]);if(isNaN(r)||r<0||r>255||e[i].trim()===""||!/^\d+$/.test(e[i]))return-1;n=n<<8|r}return n>>>0}function HS(t){const e=t>>>0;return`${e>>>24&255}.${e>>>16&255}.${e>>>8&255}.${e&255}`}function Tl(t){return xs(t)!==-1}function Om(t){const e=xs(t);if(e===-1)return!1;const n=~e>>>0;return(n+1&n)===0}function io(t,e,n){const i=xs(t),r=xs(e),s=xs(n);return i===-1||r===-1||s===-1?!1:(i&s)>>>0===(r&s)>>>0}function Fm(t,e){const n=xs(t),i=xs(e);return n===-1||i===-1?"0.0.0.0":HS((n&i)>>>0)}function VS(t,e,n){return Fm(t,n)===Fm(e,n)}class GS{constructor(e){Oe(this,"devices");this.devices=e}refreshAllOperStatuses(){for(const e of this.devices.values())for(const n of e.interfaces.values())e.updateOperStatus(n.fullName,this.devices)}resolvePing(e,n){this.refreshAllOperStatuses();const i=this.devices.get(e);if(!i)return{success:!1,hops:[],failReason:rt.HOST_UNREACHABLE,failAt:e};const r=this.resolveOneWay(i,n,!0);if(!r.success)return r;const s=r.hops[r.hops.length-1],a=this.devices.get(s);if(!a)return{success:!1,hops:r.hops,failReason:rt.HOST_UNREACHABLE,failAt:n};const o=this.getDeviceIp(i,n);if(!o)return{success:!1,hops:r.hops,failReason:rt.NO_IP,failAt:e};const l=this.resolveOneWay(a,o,!1);return l.success?{success:!0,hops:r.hops,failReason:rt.NONE,failAt:""}:{success:!1,hops:r.hops,failReason:l.failReason,failAt:l.failAt}}getDeviceIp(e,n){if(e.type===Qe.HOST||e.type===Qe.SERVER)return e.ip;for(const i of e.interfaces.values())if(i.ip&&n&&i.mask&&io(i.ip,n,i.mask))return i.ip;for(const i of e.interfaces.values())if(i.ip)return i.ip;return null}resolveOneWay(e,n,i){const r=[e.id];let s=e,a=15;for(;a-- >0;){if(this.deviceOwnsIp(s,n))return{success:!0,hops:r,failReason:rt.NONE,failAt:""};let o=null,l=null,c=1;if(s.type===Qe.HOST||s.type===Qe.SERVER){if(!s.ip||!s.mask)return{success:!1,hops:r,failReason:rt.NO_IP,failAt:s.id};if(l=s.getInterface("Ethernet0")||s.getOrderedInterfaces()[0]||null,!l)return{success:!1,hops:r,failReason:rt.NO_LINK,failAt:s.id};if(io(s.ip,n,s.mask))o=n;else{if(!s.gateway)return{success:!1,hops:r,failReason:rt.NO_GATEWAY,failAt:s.id};if(!io(s.ip,s.gateway,s.mask))return{success:!1,hops:r,failReason:rt.WRONG_SUBNET,failAt:s.id};o=s.gateway}}else if(s.type===Qe.ROUTER){let m=null;for(const g of s.interfaces.values())if(g.ip&&g.mask&&io(g.ip,n,g.mask)){m={iface:g,nextHop:n,maskBits:24};break}if(!m){for(const g of s.routes)if(VS(n,g.network,g.mask)){for(const S of s.interfaces.values())if(S.ip&&S.mask&&io(S.ip,g.nextHop,S.mask)){m={iface:S,nextHop:g.nextHop,maskBits:24};break}}}if(!m)return{success:!1,hops:r,failReason:rt.NO_ROUTE,failAt:s.id};l=m.iface,o=m.nextHop,l.isSubinterface&&l.dot1qVlan&&(c=l.dot1qVlan)}if(!l)return{success:!1,hops:r,failReason:rt.NO_ROUTE,failAt:s.id};const h=l.isSubinterface&&l.parent?s.getInterface(l.parent):l;if(!h)return{success:!1,hops:r,failReason:rt.NO_LINK,failAt:s.id};if(!l.adminUp||!h.adminUp)return{success:!1,hops:r,failReason:rt.ADMIN_DOWN,failAt:`${s.id}:${l.shortName}`};if(!h.peer)return{success:!1,hops:r,failReason:rt.NO_LINK,failAt:`${s.id}:${h.shortName}`};if(!h.operUp){const[m,g]=h.peer.split(":"),S=this.devices.get(m),x=S==null?void 0:S.getInterface(g);return x&&!x.adminUp?{success:!1,hops:r,failReason:rt.ADMIN_DOWN,failAt:`${m}:${x.shortName}`}:{success:!1,hops:r,failReason:rt.NO_LINK,failAt:`${s.id}:${h.shortName}`}}if(!o)return{success:!1,hops:r,failReason:rt.NO_ROUTE,failAt:s.id};const d=this.traverseL2(s,l,c,o);if(!d.success)return{success:!1,hops:[...r,...d.switchHops],failReason:d.failReason,failAt:d.failAt};for(const m of d.switchHops)r.push(m);const p=d.targetDevice;if(r.push(p.id),s=p,this.deviceOwnsIp(s,n))return{success:!0,hops:r,failReason:rt.NONE,failAt:""}}return{success:!1,hops:r,failReason:rt.HOST_UNREACHABLE,failAt:n}}deviceOwnsIp(e,n){if(e.ip===n)return!0;for(const i of e.interfaces.values())if(i.ip===n)return!0;return!1}traverseL2(e,n,i,r){const s=n.isSubinterface&&n.parent?e.getInterface(n.parent):n;if(!s.peer)return{success:!1,switchHops:[],failReason:rt.NO_LINK,failAt:`${e.id}:${s.shortName}`};const[a,o]=s.peer.split(":"),l=this.devices.get(a);if(!l)return{success:!1,switchHops:[],failReason:rt.HOST_UNREACHABLE,failAt:r};if(l.type!==Qe.SWITCH)return this.deviceOwnsIp(l,r)?{success:!0,targetDevice:l,targetIface:l.getInterface(o),switchHops:[],failReason:rt.NONE,failAt:""}:{success:!1,switchHops:[],failReason:rt.HOST_UNREACHABLE,failAt:r};const c=[],h=l.getInterface(o);let d=i;if(h.mode==="access"){if(d=h.accessVlan||1,n.isSubinterface&&n.dot1qVlan&&n.dot1qVlan!==d)return{success:!1,switchHops:[l.id],failReason:rt.VLAN_MISMATCH,failAt:`${l.id}:${h.shortName}`}}else if(h.mode==="trunk"){const g=h.trunkAllowed||[];if(g.length>0&&!g.includes(i))return{success:!1,switchHops:[l.id],failReason:rt.VLAN_MISMATCH,failAt:`${l.id}:${h.shortName}`};d=i}c.push({dev:l,ingressIf:h,vlan:d,switchHops:[l.id]});const p=new Set([l.id]);let m="";for(;c.length>0;){const{dev:g,ingressIf:S,vlan:x,switchHops:u}=c.shift();for(const v of g.interfaces.values()){if(v.fullName===S.fullName||!v.peer)continue;let y=!1,_=!1;if(v.mode==="access")v.accessVlan===x?(y=!0,_=!1):m=`${g.id}:${v.shortName}`;else if(v.mode==="trunk"){const E=v.trunkAllowed||[];E.length===0||E.includes(x)?(y=!0,_=!0):m=`${g.id}:${v.shortName}`}if(!y)continue;const[R,A]=v.peer.split(":"),C=this.devices.get(R);if(!C)continue;const L=C.getInterface(A);if(!(!L||!L.operUp)){if(C.type===Qe.SWITCH)p.has(C.id)||(p.add(C.id),c.push({dev:C,ingressIf:L,vlan:x,switchHops:[...u,C.id]}));else if(C.type===Qe.ROUTER){if(_){for(const E of C.interfaces.values())if(E.isSubinterface&&E.parent===L.fullName&&E.dot1qVlan===x&&E.operUp&&this.deviceOwnsIp(C,r))return{success:!0,targetDevice:C,targetIface:E,switchHops:u,failReason:rt.NONE,failAt:""}}else if(L.operUp&&this.deviceOwnsIp(C,r))return{success:!0,targetDevice:C,targetIface:L,switchHops:u,failReason:rt.NONE,failAt:""}}else if(this.deviceOwnsIp(C,r))return{success:!0,targetDevice:C,targetIface:L,switchHops:u,failReason:rt.NONE,failAt:""}}}}return m?{success:!1,switchHops:[l.id],failReason:rt.VLAN_MISMATCH,failAt:m}:{success:!1,switchHops:[l.id],failReason:rt.HOST_UNREACHABLE,failAt:r}}}function ju(t){const e=[];let n="",i=!1;for(let r=0;r<t.length;r++){const s=t[r];s==='"'?i=!i:s===" "&&!i?n.length>0&&(e.push(n),n=""):n+=s}return n.length>0&&e.push(n),e}function mn(t,e){const n=t.toLowerCase();for(const r of e)if(r.toLowerCase()===n)return{match:r,ambiguous:!1,matches:[r]};const i=e.filter(r=>r.toLowerCase().startsWith(n));return i.length===1?{match:i[0],ambiguous:!1,matches:i}:i.length>1?{match:null,ambiguous:!0,matches:i}:{match:null,ambiguous:!1,matches:[]}}function jS(t){const e=[];e.push("Building configuration..."),e.push(""),e.push("Current configuration : 1024 bytes"),e.push("!"),e.push("version 15.2"),e.push("no service timestamps log datetime msec"),e.push("no service password-encryption"),e.push("!"),e.push(`hostname ${t.hostname}`),e.push("!"),t.enableSecret&&(e.push(`enable secret 5 $1$mERr$${t.enableSecret.slice(0,10)}...`),e.push("!"));for(const[n]of t.users)e.push(`username ${n} secret 5 $1$...`);if(t.type===Qe.SWITCH)for(const[n,i]of t.vlans)n!==1&&(e.push("!"),e.push(`vlan ${n}`),e.push(` name ${i}`));for(const n of t.getOrderedInterfaces())e.push("!"),e.push(`interface ${n.shortName}`),n.isSubinterface&&n.dot1qVlan&&e.push(` encapsulation dot1Q ${n.dot1qVlan}`),n.ip&&n.mask?e.push(` ip address ${n.ip} ${n.mask}`):t.type===Qe.ROUTER&&!n.isSubinterface&&e.push(" no ip address"),t.type===Qe.SWITCH&&(n.mode==="trunk"?e.push(" switchport mode trunk"):n.mode==="access"&&(e.push(" switchport mode access"),n.accessVlan&&n.accessVlan!==1&&e.push(` switchport access vlan ${n.accessVlan}`))),n.adminUp?e.push(" no shutdown"):e.push(" shutdown");if(t.type===Qe.ROUTER)for(const n of t.routes)e.push(`ip route ${n.network} ${n.mask} ${n.nextHop}`);return e.push("!"),e.push("line con 0"),e.push("line vty 0 4"),e.push(" login"),e.push("!"),e.push("end"),e.join(`
`)}function WS(t){const e=[];e.push("Interface              IP-Address      OK? Method Status                Protocol");for(const n of t.getOrderedInterfaces()){const i=n.shortName.padEnd(22," "),r=(n.ip||"unassigned").padEnd(15," "),s="YES".padEnd(4," "),a=(n.ip?"manual":"unset").padEnd(7," "),o=(n.adminUp?"up":"administratively down").padEnd(22," "),l=n.operUp?"up":"down";e.push(`${i} ${r}${s}${a}${o}${l}`)}return e.join(`
`)}function Bm(t){if(t.type!==Qe.SWITCH)return"% This command is only supported on switches.";const e=[];e.push("VLAN Name                             Status    Ports"),e.push("---- -------------------------------- --------- -------------------------------");for(const[n,i]of t.vlans){const r=String(n).padEnd(4," "),s=i.padEnd(32," "),a="active   ",o=[];for(const c of t.getOrderedInterfaces())c.mode==="access"&&c.accessVlan===n&&o.push(c.shortName);const l=o.join(", ");e.push(`${r} ${s} ${a} ${l}`)}return e.join(`
`)}function $S(t,e,n=2){const i=[];if(i.push("Type escape sequence to abort."),i.push(`Sending 5, 100-byte ICMP Echos to ${t}, timeout is 2 seconds:`),e){i.push("!!!!!");const r=Math.max(1,n*2);i.push(`Success rate is 100 percent (5/5), round-trip min/avg/max = ${r}/${r+2}/${r+5} ms`)}else i.push("....."),i.push("Success rate is 0 percent (0/5)");return i.join(`
`)}function XS(t,e){const n=[];if(n.push(`Pinging ${t} with 32 bytes of data:`),e){for(let i=0;i<4;i++)n.push(`Reply from ${t}: bytes=32 time=2ms TTL=128`);n.push(""),n.push(`Ping statistics for ${t}:`),n.push("    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),"),n.push("Approximate round trip times in milli-seconds:"),n.push("    Minimum = 2ms, Maximum = 3ms, Average = 2ms")}else{for(let i=0;i<4;i++)n.push("Request timed out.");n.push(""),n.push(`Ping statistics for ${t}:`),n.push("    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss),")}return n.join(`
`)}class qS{constructor(e,n,i){Oe(this,"device");Oe(this,"mode",it.USER_EXEC);Oe(this,"currentInterface",null);Oe(this,"currentVlan",null);Oe(this,"history",[]);Oe(this,"historyIndex",-1);Oe(this,"pingHandler");Oe(this,"httpHandler");this.device=e,this.pingHandler=n,this.httpHandler=i,(this.device.type===Qe.ROUTER||this.device.type===Qe.SWITCH)&&(this.mode=it.USER_EXEC)}getPrompt(){if(this.device.type===Qe.HOST)return"C:\\Users\\User>";if(this.device.type===Qe.SERVER)return`root@${this.device.hostname}:~# `;const e=this.device.hostname;switch(this.mode){case it.USER_EXEC:return`${e}>`;case it.PRIV_EXEC:return`${e}#`;case it.GLOBAL_CONFIG:return`${e}(config)#`;case it.INTERFACE_CONFIG:return`${e}(config-if)#`;case it.VLAN_CONFIG:return`${e}(config-vlan)#`;case it.LINE_CONFIG:return`${e}(config-line)#`;default:return`${e}#`}}execute(e){const n=e.trim();return n?(this.history.push(e),this.historyIndex=this.history.length,this.device.type===Qe.HOST?this.executePcShell(n):this.device.type===Qe.SERVER?this.executeServerShell(n):this.executeIos(n)):{output:"",ok:!0,action:J.NONE}}executePcShell(e){const n=ju(e),i=n[0].toLowerCase();if(i==="cls")return{output:"\x1B[2J\x1B[0;0H",ok:!0,action:J.NONE};if(i==="help")return{output:["Available commands:","  ipconfig                  Display current IP configuration","  ipconfig /set <ip> <mask> <gw>  Set IP address, subnet mask, and gateway","  ping <ip>                 Send ICMP Echo requests to destination IP","  curl <url>                Send simulated HTTP GET request","  cls                       Clear console screen"].join(`
`),ok:!0,action:J.NONE};if(i==="ipconfig"){if(n.length>1&&n[1].toLowerCase()==="/set"){if(this.device.locked)return{output:"Access is denied. Network settings are managed by IT.",ok:!1,action:J.NONE};if(n.length<5)return{output:"Syntax: ipconfig /set <ip> <subnet_mask> <default_gateway>",ok:!1,action:J.NONE};const s=n[2],a=n[3],o=n[4];if(!Tl(s)||!Om(a)||!Tl(o))return{output:"Error: Invalid IPv4 address or subnet mask.",ok:!1,action:J.NONE};this.device.ip=s,this.device.mask=a,this.device.gateway=o;const l=this.device.getInterface("Ethernet0");return l&&(l.ip=s,l.mask=a),{output:"IP configuration updated successfully.",ok:!0,action:J.NONE}}return{output:["Windows IP Configuration","","Ethernet adapter Ethernet0:",`   IPv4 Address. . . . . . . . . . . : ${this.device.ip||"0.0.0.0"}`,`   Subnet Mask . . . . . . . . . . . : ${this.device.mask||"0.0.0.0"}`,`   Default Gateway . . . . . . . . . : ${this.device.gateway||"0.0.0.0"}`].join(`
`),ok:!0,action:J.NONE}}if(i==="ping"){if(n.length<2)return{output:"Usage: ping [-t] target_name",ok:!1,action:J.NONE};const r=n[1],s=this.pingHandler(this.device.id,r);return{output:XS(r,s.success),ok:s.success,action:J.NONE}}if(i==="curl"){if(n.length<2)return{output:"curl: try 'curl --help' for more information",ok:!1,action:J.NONE};const r=n[1];if(!this.httpHandler)return{output:"curl: HTTP client service unavailable",ok:!1,action:J.NONE};const s=this.httpHandler(this.device.id,r);return{output:s.body,ok:s.ok,action:J.NONE}}return{output:`'${n[0]}' is not recognized as an internal or external command, operable program or batch file.`,ok:!1,action:J.NONE}}executeServerShell(e){const n=ju(e),i=n[0].toLowerCase();if(i==="help")return{output:["Linux Server Shell commands:","  ls [path]                 List directory contents","  cat <file>                Print file contents","  grep [-i] <pattern> <file> Search for pattern in file","  tail [-n N] <file>        Output the last part of files","  edit <file>               Open file in code patch editor","  service <name> status     Check status of a system service","  clear                     Clear screen"].join(`
`),ok:!0,action:J.NONE};if(i==="clear")return{output:"\x1B[2J\x1B[0;0H",ok:!0,action:J.NONE};if(i==="ls"){const r=Array.from(this.device.files.keys());return r.length===0?{output:"",ok:!0,action:J.NONE}:{output:r.join("  "),ok:!0,action:J.NONE}}if(i==="cat"){if(n.length<2)return{output:"cat: missing file operand",ok:!1,action:J.NONE};const r=n[1],s=this.device.files.get(r);return s===void 0?{output:`cat: ${r}: No such file or directory`,ok:!1,action:J.NONE}:{output:s,ok:!0,action:J.NONE}}if(i==="tail"){let r=10,s="";if(n[1]==="-n"&&n[2]?(r=parseInt(n[2],10)||10,s=n[3]||""):s=n[1]||"",!s)return{output:"tail: missing file operand",ok:!1,action:J.NONE};const a=this.device.files.get(s);return a===void 0?{output:`tail: cannot open '${s}' for reading: No such file or directory`,ok:!1,action:J.NONE}:{output:a.split(`
`).slice(-r).join(`
`),ok:!0,action:J.NONE}}if(i==="grep"){let r=!1,s="",a="",o=1;if(n[o]==="-i"&&(r=!0,o++),s=n[o++]||"",a=n[o++]||"",!s||!a)return{output:"Usage: grep [-i] <pattern> <file>",ok:!1,action:J.NONE};const l=this.device.files.get(a);return l===void 0?{output:`grep: ${a}: No such file or directory`,ok:!1,action:J.NONE}:{output:l.split(`
`).filter(d=>r?d.toLowerCase().includes(s.toLowerCase()):d.includes(s)).join(`
`),ok:!0,action:J.NONE}}if(i==="edit"){if(n.length<2)return{output:"edit: missing file operand",ok:!1,action:J.NONE};const r=n[1];return this.device.files.has(r)?{output:`Opening patch editor for ${r}...`,ok:!0,action:J.OPEN_EDITOR,actionArg:`${this.device.id}:${r}`}:{output:`edit: ${r}: No such file or directory`,ok:!1,action:J.NONE}}if(i==="service"){const r=n[1];if(n[2]==="status"){const a=this.device.services.find(o=>o.id===r);return a?{output:`● ${r}.service - Apache/Nginx Web Service
   Loaded: loaded
   Active: active (running) on port ${a.port}`,ok:!0,action:J.NONE}:{output:`Unit ${r}.service could not be found.`,ok:!1,action:J.NONE}}return{output:"Usage: service <name> status",ok:!1,action:J.NONE}}return{output:`bash: ${n[0]}: command not found`,ok:!1,action:J.NONE}}executeIos(e){let n=ju(e);if(n.length===0)return{output:"",ok:!0,action:J.NONE};if(n[0].toLowerCase()==="do"&&this.mode!==it.USER_EXEC&&this.mode!==it.PRIV_EXEC){const i=this.mode;this.mode=it.PRIV_EXEC;const r=this.executeIos(n.slice(1).join(" "));return this.mode=i,r}if(n[0].toLowerCase()==="end"&&this.mode!==it.USER_EXEC&&this.mode!==it.PRIV_EXEC)return this.mode=it.PRIV_EXEC,this.currentInterface=null,this.currentVlan=null,{output:"",ok:!0,action:J.NONE};if(n[0].toLowerCase()==="exit")return this.handleExit();switch(this.mode){case it.USER_EXEC:return this.handleUserExec(n,e);case it.PRIV_EXEC:return this.handlePrivExec(n,e);case it.GLOBAL_CONFIG:return this.handleGlobalConfig(n,e);case it.INTERFACE_CONFIG:return this.handleInterfaceConfig(n,e);case it.VLAN_CONFIG:return this.handleVlanConfig(n,e);default:return{output:"% Invalid mode",ok:!1,action:J.NONE}}}handleExit(){switch(this.mode){case it.USER_EXEC:return{output:"",ok:!0,action:J.CLOSE_SESSION};case it.PRIV_EXEC:return this.mode=it.USER_EXEC,{output:"",ok:!0,action:J.NONE};case it.GLOBAL_CONFIG:return this.mode=it.PRIV_EXEC,{output:"",ok:!0,action:J.NONE};case it.INTERFACE_CONFIG:return this.mode=it.GLOBAL_CONFIG,this.currentInterface=null,{output:"",ok:!0,action:J.NONE};case it.VLAN_CONFIG:return this.mode=it.GLOBAL_CONFIG,this.currentVlan=null,{output:"",ok:!0,action:J.NONE};default:return this.mode=it.PRIV_EXEC,{output:"",ok:!0,action:J.NONE}}}handleUserExec(e,n){const i=mn(e[0],["enable","show","ping","exit"]);return i.ambiguous?{output:`% Ambiguous command:  "${n}"`,ok:!1,action:J.NONE}:i.match?i.match==="enable"?(this.mode=it.PRIV_EXEC,{output:"",ok:!0,action:J.NONE}):i.match==="ping"?this.handlePing(e.slice(1)):i.match==="show"?this.handleShow(e.slice(1)):{output:"% Incomplete command.",ok:!1,action:J.NONE}:{output:`Translating "${e[0]}"... % Unknown command or computer name, or unable to find computer address`,ok:!1,action:J.NONE}}handlePrivExec(e,n){const i=mn(e[0],["disable","configure","show","ping","exit"]);return i.ambiguous?{output:`% Ambiguous command:  "${n}"`,ok:!1,action:J.NONE}:i.match?i.match==="disable"?(this.mode=it.USER_EXEC,{output:"",ok:!0,action:J.NONE}):i.match==="configure"?e.length<2?{output:"% Incomplete command.",ok:!1,action:J.NONE}:mn(e[1],["terminal","memory"]).match==="terminal"?(this.mode=it.GLOBAL_CONFIG,{output:"Enter configuration commands, one per line.  End with CNTL/Z.",ok:!0,action:J.NONE}):{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}:i.match==="show"?this.handleShow(e.slice(1)):i.match==="ping"?this.handlePing(e.slice(1)):{output:"% Incomplete command.",ok:!1,action:J.NONE}:{output:`Translating "${e[0]}"... % Unknown command or computer name, or unable to find computer address`,ok:!1,action:J.NONE}}handleGlobalConfig(e,n){const i=mn(e[0],["hostname","interface","vlan","no","ip","line","exit","end"]);if(i.ambiguous)return{output:`% Ambiguous command:  "${n}"`,ok:!1,action:J.NONE};if(!i.match)return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE};if(i.match==="hostname")return e.length<2?{output:"% Incomplete command.",ok:!1,action:J.NONE}:(this.device.hostname=e[1],{output:"",ok:!0,action:J.NONE});if(i.match==="interface"){if(e.length<2)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const r=e[1],s=_a(r);return mx(s)?this.device.type!==Qe.ROUTER?{output:"% Subinterfaces are not supported on this device type.",ok:!1,action:J.NONE}:this.device.ensureSubinterface(s)?(this.currentInterface=s,this.mode=it.INTERFACE_CONFIG,{output:"",ok:!0,action:J.NONE}):{output:`% Invalid subinterface "${r}".`,ok:!1,action:J.NONE}:this.device.getInterface(s)?(this.currentInterface=s,this.mode=it.INTERFACE_CONFIG,{output:"",ok:!0,action:J.NONE}):{output:`% Interface "${r}" does not exist.`,ok:!1,action:J.NONE}}if(i.match==="vlan"){if(this.device.type!==Qe.SWITCH)return{output:"% VLAN configuration is only supported on switches.",ok:!1,action:J.NONE};if(e.length<2)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const r=parseInt(e[1],10);return isNaN(r)||r<1||r>4094?{output:"% Invalid VLAN ID. Range: 1-4094.",ok:!1,action:J.NONE}:(this.device.vlans.has(r)||this.device.vlans.set(r,`VLAN${r.toString().padStart(4,"0")}`),this.currentVlan=r,this.mode=it.VLAN_CONFIG,{output:"",ok:!0,action:J.NONE})}return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}}handleInterfaceConfig(e,n){if(!this.currentInterface)return this.mode=it.GLOBAL_CONFIG,{output:"",ok:!0,action:J.NONE};const i=this.device.getInterface(this.currentInterface);if(!i)return this.mode=it.GLOBAL_CONFIG,{output:"",ok:!0,action:J.NONE};if(mn(e[0],["interface"]).match==="interface")return this.handleGlobalConfig(e,n);const s=e[0].toLowerCase()==="no",a=s?e.slice(1):e;if(a.length===0)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const o=mn(a[0],["shutdown","ip","switchport","encapsulation"]);if(o.ambiguous)return{output:`% Ambiguous command:  "${n}"`,ok:!1,action:J.NONE};if(!o.match)return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE};if(o.match==="shutdown")return i.adminUp=s,{output:"",ok:!0,action:J.NONE};if(o.match==="encapsulation"){if(!i.isSubinterface)return{output:"% Encapsulation can only be set on subinterfaces.",ok:!1,action:J.NONE};if(a.length<3)return{output:"% Incomplete command.",ok:!1,action:J.NONE};if(!mn(a[1],["dot1Q"]).match)return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE};const c=parseInt(a[2],10);return isNaN(c)||c<1||c>4094?{output:"% Invalid VLAN ID.",ok:!1,action:J.NONE}:(i.dot1qVlan=c,{output:"",ok:!0,action:J.NONE})}if(o.match==="ip"){if(a.length<2)return{output:"% Incomplete command.",ok:!1,action:J.NONE};if(mn(a[1],["address"]).match==="address"){if(s)return i.ip=null,i.mask=null,{output:"",ok:!0,action:J.NONE};if(a.length<4)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const c=a[2],h=a[3];return!Tl(c)||!Om(h)?{output:"% Invalid IP address or subnet mask.",ok:!1,action:J.NONE}:(i.ip=c,i.mask=h,{output:"",ok:!0,action:J.NONE})}return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}}if(o.match==="switchport"){if(this.device.type!==Qe.SWITCH)return{output:"% switchport commands are only valid on switches.",ok:!1,action:J.NONE};if(a.length<2)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const l=mn(a[1],["mode","access"]);if(l.match==="mode"){if(a.length<3)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const c=mn(a[2],["access","trunk"]);return c.match?(i.mode=c.match,{output:"",ok:!0,action:J.NONE}):{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}}if(l.match==="access"){if(a.length<4)return{output:"% Incomplete command.",ok:!1,action:J.NONE};if(!mn(a[2],["vlan"]).match)return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE};const h=parseInt(a[3],10);return isNaN(h)||h<1||h>4094?{output:"% Invalid VLAN ID.",ok:!1,action:J.NONE}:(i.accessVlan=h,{output:"",ok:!0,action:J.NONE})}return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}}return{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}}handleVlanConfig(e,n){return this.currentVlan===null?(this.mode=it.GLOBAL_CONFIG,{output:"",ok:!0,action:J.NONE}):mn(e[0],["name","exit","end"]).match==="name"?e.length<2?{output:"% Incomplete command.",ok:!1,action:J.NONE}:(this.device.vlans.set(this.currentVlan,e[1].toUpperCase()),{output:"",ok:!0,action:J.NONE}):{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}}handleShow(e){if(e.length===0)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const n=mn(e[0],["running-config","ip","vlan"]);return n.match==="running-config"?{output:jS(this.device),ok:!0,action:J.NONE}:n.match==="ip"?e.length<2?{output:"% Incomplete command.",ok:!1,action:J.NONE}:mn(e[1],["interface"]).match==="interface"&&e.length>=3&&mn(e[2],["brief"]).match==="brief"?{output:WS(this.device),ok:!0,action:J.NONE}:{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}:n.match==="vlan"?e.length>=2&&mn(e[1],["brief"]).match==="brief"?{output:Bm(this.device),ok:!0,action:J.NONE}:{output:Bm(this.device),ok:!0,action:J.NONE}:{output:"% Invalid input detected at '^' marker.",ok:!1,action:J.NONE}}handlePing(e){if(e.length===0)return{output:"% Incomplete command.",ok:!1,action:J.NONE};const n=e[0];if(!Tl(n))return{output:"% Invalid IP address.",ok:!1,action:J.NONE};const i=this.pingHandler(this.device.id,n);return{output:$S(n,i.success,i.hops.length),ok:i.success,action:J.NONE}}}function YS(t){let e="",n=!1,i=!1,r=0;for(;r<t.length;){const s=t[r],a=t[r+1]||"";if(!n&&!i){if(s==="/"&&a==="/"){for(r+=2;r<t.length&&t[r]!==`
`;)r++;continue}if(s==="#"){for(r++;r<t.length&&t[r]!==`
`;)r++;continue}if(s==="/"&&a==="*"){for(r+=2;r<t.length&&!(t[r]==="*"&&t[r+1]==="/");)r++;r+=2;continue}if(s==="'"){n=!0,e+=s,r++;continue}if(s==='"'){i=!0,e+=s,r++;continue}if(/\s/.test(s)){r++;continue}e+=s,r++}else n?(e+=s,s==="\\"?(r++,r<t.length&&(e+=t[r])):s==="'"&&(n=!1),r++):i&&(e+=s,s==="\\"?(r++,r<t.length&&(e+=t[r])):s==='"'&&(i=!1),r++)}return e}function Co(t,e){const n=YS(t);if(!n)return!1;for(const i of e)try{if(new RegExp(`^${i}$`).test(n))return!0}catch(r){console.warn("Invalid regex in accept pattern:",i,r)}return!1}const KS={cable_pc_b:{targetDevice:"PC-B",actionType:"cable",summary:"Cable PC-B on Desk 2 to switch S1 port FastEthernet0/2.",steps:['Click the "Rack A" camera angle to look at Switch S1 (slot 3).',"Click on free port socket S1:Fa0/2 (the second FastEthernet port from the left).","You are now holding an Ethernet cable from S1:Fa0/2 (see status banner).",'Click the "Desk 2" camera angle, then click the PC-B tower or its Eth0 socket.',"The cable appears in 3D and both port LEDs turn green. PC-B is still in VLAN 1 until you configure Fa0/2."],suggestedCommands:["Click S1:Fa0/2 ➜ Click PC-B:Eth0"],explanation:"PC-B was completely uncabled. Establishing physical Layer 1 connectivity to switch S1 is the first step before configuring Layer 2 VLANs."},vlan20_port:{targetDevice:"S1",actionType:"terminal",summary:"Create VLAN 20 (SALES) on S1 and assign Fa0/2 as an access port.",steps:['Open the console for Switch S1 (click S1 in Rack A, or click "CLI Terminal" and select S1).','Enter Privileged EXEC mode: type "enable".','Enter Global Configuration mode: type "configure terminal" (or "conf t").','Create and name the Sales VLAN: type "vlan 20", then "name SALES", then "exit".','Enter interface configuration for port Fa0/2: type "interface fa0/2".','Configure the port for access mode: type "switchport mode access".','Assign the port to VLAN 20: type "switchport access vlan 20", then "exit".','Verify with: "do show vlan brief".'],suggestedCommands:["enable","configure terminal","vlan 20","name SALES","exit","interface fa0/2","switchport mode access","switchport access vlan 20","end"],explanation:"All switch ports default to VLAN 1. Placing Fa0/2 into VLAN 20 isolates PC-B into its own broadcast domain separate from Accounting (VLAN 10)."},trunk:{targetDevice:"S1",actionType:"terminal",summary:"Configure uplink interface Gi0/1 on S1 as an 802.1Q trunk port.",steps:['In the Switch S1 terminal, enter configuration mode: "enable", then "configure terminal".','Select the Gigabit uplink interface connected to Router R1: "interface gi0/1".','Enable 802.1Q trunking: "switchport mode trunk".','Exit configuration: "end".','Verify your trunk interface with: "show running-config" or "show ip interface brief".'],suggestedCommands:["enable","conf t","interface gi0/1","switchport mode trunk","end"],explanation:"Standard access ports carry untagged traffic for only a single VLAN. A trunk port tags Ethernet frames with an 802.1Q header, allowing traffic from both VLAN 10 and VLAN 20 to share the single physical link to Router R1."},r1_no_shut:{targetDevice:"R1",actionType:"terminal",summary:"Administratively enable physical interface GigabitEthernet0/0 on Router R1.",steps:["Open the console for Router R1 (click R1 in Rack A or select R1 from the terminal device switcher).",'Enter Privileged EXEC: type "enable".','Enter Global Configuration: type "configure terminal" (or "conf t").','Select the physical interface: type "interface gi0/0".','Enable the interface: type "no shutdown".',"Notice the R1 Gi0/0 LED turns green on the router faceplate in the 3D room!"],suggestedCommands:["enable","conf t","interface gi0/0","no shutdown","exit"],explanation:'On Cisco IOS routers, physical interfaces are administratively shut down by default upon booting. They must be explicitly brought up with "no shutdown".'},sub10:{targetDevice:"R1",actionType:"terminal",summary:"Configure subinterface Gi0/0.10 as the default gateway for Accounting (VLAN 10).",steps:['In the Router R1 configuration terminal ("conf t"), create the logical subinterface: "interface gi0/0.10".','Set 802.1Q encapsulation for VLAN 10: "encapsulation dot1Q 10".','Assign the gateway IP address and subnet mask: "ip address 192.168.10.1 255.255.255.0".',"Subinterfaces on Cisco IOS are automatically admin-up once the parent interface is enabled."],suggestedCommands:["interface gi0/0.10","encapsulation dot1Q 10","ip address 192.168.10.1 255.255.255.0","exit"],explanation:"Router-on-a-Stick creates virtual subinterfaces on a single physical cable. Subinterface Gi0/0.10 acts as the default gateway for PC-A (192.168.10.10)."},sub20:{targetDevice:"R1",actionType:"terminal",summary:"Configure subinterface Gi0/0.20 as the default gateway for Sales (VLAN 20).",steps:['In Router R1 configuration mode ("conf t"), create the second subinterface: "interface gi0/0.20".','Set 802.1Q encapsulation for VLAN 20: "encapsulation dot1Q 20".','Assign the gateway IP address and subnet mask: "ip address 192.168.20.1 255.255.255.0".','Exit configuration with "end".'],suggestedCommands:["interface gi0/0.20","encapsulation dot1Q 20","ip address 192.168.20.1 255.255.255.0","end"],explanation:"Subinterface Gi0/0.20 acts as the default gateway (192.168.20.1) for PC-B (192.168.20.10), completing the routing bridge between the two subnets."},parent_noip:{targetDevice:"R1",actionType:"terminal",summary:"Ensure parent physical interface Gi0/0 has no IP address assigned.",steps:['If you accidentally assigned an IP address directly to the physical interface "gi0/0", remove it: "interface gi0/0" followed by "no ip address".','Verify with "show ip interface brief" that GigabitEthernet0/0 shows "unassigned".'],suggestedCommands:["interface gi0/0","no ip address","exit"],explanation:"In a Router-on-a-Stick setup, IP addresses belong on the dot1Q subinterfaces, while the parent physical interface acts strictly as the raw trunk transport."},ping_ab:{targetDevice:"PC-A",actionType:"terminal",summary:"Verify end-to-end connectivity by pinging PC-B from PC-A through R1.",steps:["Switch the terminal to PC-A (Desk 1).",'Verify PC-A network settings with: "ipconfig".','Ping PC-B: type "ping 192.168.20.10".','Verify 4 successful ICMP echo replies: "Reply from 192.168.20.10: bytes=32 time=2ms TTL=128".'],suggestedCommands:["ipconfig","ping 192.168.20.10"],explanation:"Packets leave PC-A (192.168.10.10), travel across S1, up the 802.1Q trunk to R1 Gi0/0.10, get routed to Gi0/0.20, and back down to PC-B (192.168.20.10)."},report_attacker_ip:{targetDevice:"SOC-PC",actionType:"report",summary:"Identify the external attacker IP address in the authentication logs.",steps:['Click "SOC Logs & Threat Map" in the top bar (or click the SOC monitor on the wall).','In the "Auth Logs" tab, look for repeated red lines: "sshd: Failed password for invalid user ...".',"Check the Threat Map tab to see the red animated attack arc originating from Netherlands (NL).","Note the source IP address: 203.0.113.45.",'Open the "Incident Report" tab, enter "203.0.113.45" in Field 1, and click Submit.'],suggestedCommands:['grep "Failed password" /var/log/auth.log'],explanation:"Dozens of failed login attempts in quick succession from an external address indicates an automated brute force scanner targeting SSH."},report_attack_type:{targetDevice:"SOC-PC",actionType:"report",summary:"Classify the attack vector observed in the authentication logs.",steps:["Inspect the usernames tested in the logs: root, admin, test, oracle, postgres, ubuntu, git, backup, deploy.","Notice the rapid cadence of common administrative dictionary words.",'In the Incident Report tab, select "Brute force" in the Attack Classification dropdown and submit.'],explanation:"Rapidly attempting passwords against known or common usernames is a classic Dictionary / Credential Stuffing Brute Force attack."},report_compromised_user:{targetDevice:"SOC-PC",actionType:"report",summary:"Identify which user account credentials were breached.",steps:['In the Log Viewer, search for "Accepted password" or filter by "deploy".','At 02:11:36Z, observe: "sshd[840]: Accepted password for deploy from 203.0.113.45 port 51142 ssh2".','Followed by: "systemd-logind: New session 42 of user deploy".','In the Incident Report tab, enter "deploy" in Field 3 and click Submit.'],suggestedCommands:['grep "Accepted password" /var/log/auth.log'],explanation:'The attacker successfully guessed the password for user "deploy", opening an interactive shell session on the production server.'},test_sqli_vuln:{targetDevice:"PC-1",actionType:"terminal",summary:"Prove the SQL injection vulnerability on WEB1 by executing curl on PC-1.",steps:["Open the console for PC-1 on Desk 1.",`Execute the test payload in curl: curl "http://10.0.10.5/login.php?user=' OR '1'='1"`,'Observe the response: "HTTP/1.1 200 OK - Welcome, admin! Authentication bypass successful."',"This proves that unescaped single quotes alter the query logic and bypass authentication."],suggestedCommands:[`curl "http://10.0.10.5/login.php?user=' OR '1'='1"`],explanation:`The payload "' OR '1'='1" closes the SQL string literal and injects an always-true condition, returning the first record (admin) without password validation.`},patch_sqli:{targetDevice:"WEB1",actionType:"editor",summary:"Patch login.php using PDO prepared statements with parameterized queries.",steps:['Click "Patch Editor" in the top bar, and ensure "login.php" is selected.',"Notice the vulnerable code in the editable region concatenates $user directly into SQL.","Replace the editable region with a secure prepared statement:",'  $res = $db->prepare("SELECT * FROM users WHERE name = ?");',"  $res->execute([$user]);",'Click "Save & Verify Patch" to apply and validate your fix.'],suggestedCommands:['$res = $db->prepare("SELECT * FROM users WHERE name = ?");',"$res->execute([$user]);"],explanation:"Prepared statements ensure user input is sent to the database engine separately as parameter data, making it impossible for input characters to alter SQL syntax."},test_sqli_patched:{targetDevice:"PC-1",actionType:"terminal",summary:"Re-run the SQL injection test on PC-1 to verify the vulnerability is mitigated.",steps:["Switch back to the PC-1 terminal on Desk 1.",`Re-run: curl "http://10.0.10.5/login.php?user=' OR '1'='1"`,'Verify the server now returns: "HTTP/1.1 401 Unauthorized - Login failed."'],suggestedCommands:[`curl "http://10.0.10.5/login.php?user=' OR '1'='1"`],explanation:`With prepared statements active, the input "' OR '1'='1" is searched literally as a username, which does not exist, correctly rejecting the login attempt.`},test_xss_vuln:{targetDevice:"PC-1",actionType:"terminal",summary:"Prove Reflected XSS vulnerability in search.php using curl on PC-1.",steps:["In the PC-1 terminal, send an XSS probe with a script tag:",'curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>"','Observe that the server echoes the raw "<script>alert(1)<\/script>" directly in HTML.'],suggestedCommands:['curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>"'],explanation:"Reflected XSS occurs when an application receives untrusted data in an HTTP request and echoes it back in an immediate response without escaping HTML entities."},patch_xss:{targetDevice:"WEB1",actionType:"editor",summary:"Patch search.php with htmlspecialchars() to escape user output.",steps:['Open the "Patch Editor" and select the "search.php (XSS)" tab.',"Notice line 4 directly concatenates $q into HTML output.","Replace the editable patch region with:",`  echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`,'Click "Save & Verify Patch".'],suggestedCommands:[`echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`],explanation:`htmlspecialchars() converts HTML special characters (&, <, >, ", ') into safe HTML entities (&amp;, &lt;, &gt;, etc.), preventing the browser from interpreting them as executable tags.`},test_xss_patched:{targetDevice:"PC-1",actionType:"terminal",summary:"Re-run the XSS test on PC-1 to confirm script tags are safely escaped.",steps:["In the PC-1 terminal, re-run:",'curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>"','Verify the response now contains escaped entities: "&lt;script&gt;alert(1)&lt;/script&gt;".'],suggestedCommands:['curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>"'],explanation:"The probe string is now neutralized into harmless text rather than an executable JavaScript payload."}};function ZS(t){return KS[t]||null}function zm(t,e,n,i,r,s=[],a=[]){const o=[];for(const d of t){let p=!1,m=!1,g=rt.NONE,S="";if(d.type==="ping"&&d.from&&d.to_ip){const u=n(d.from,d.to_ip);if(g=u.failReason,u.success){let v=!0;if(d.to_device){const y=u.hops[u.hops.length-1];y!==d.to_device&&(v=!1,S=`Reached, but last hop was ${y} instead of ${d.to_device}`)}v&&d.via&&(u.hops.includes(d.via)||(v=!1,S=`Reached, but did not route through ${d.via}`)),v&&d.require_run&&(a.some(_=>_.srcId===d.from&&_.dstIp===d.to_ip&&_.success)||(v=!1,S=`Run the ping from ${d.from} to complete this step`)),p=v}else p=!1,S=u.failAt?`Failed at ${u.failAt}`:""}else if(d.type==="config"&&d.device&&d.path){const u=e.get(d.device);if(!u)p=!1;else{const v=Array.isArray(d.path)?d.path:[d.path],y=QS(u,v),_=v[v.length-1];typeof d.equals=="object"&&d.equals!==null?p=JS(y,d.equals):_==="peer"&&typeof d.equals=="string"?p=typeof y=="string"&&Tr(y)===Tr(d.equals):p=y===d.equals}}else if(d.type==="report"&&d.field){const u=i.get(d.field);u&&(u.solved?p=!0:u.attemptsLeft<=0?(m=!0,S="Out of attempts"):S=`${u.attemptsLeft} attempts remaining`)}else if(d.type==="vuln_patched"&&d.device&&d.vuln){const u=e.get(d.device),v=u==null?void 0:u.vulns.find(y=>y.id===d.vuln);if(u&&v){const y=u.files.get(v.region.file);if(y){const A=y.split(`
`).slice(v.region.firstLine-1,v.region.lastLine).join(`
`);p=Co(A,v.accept)}}}else if(d.type==="exploit_test"&&d.from&&d.device&&d.vuln&&d.expect){const u=e.get(d.device),v=u==null?void 0:u.vulns.find(_=>_.id===d.vuln),y=(u==null?void 0:u.patchRevs.get(d.vuln))||0;if(d.expect==="vulnerable")p=!!r.find(R=>R.srcId===d.from&&R.dstDevice===d.device&&R.vulnId===d.vuln&&R.outcome===Fi.VULNERABLE);else if(d.expect==="patched"){let _=!1;if(u&&v){const E=(u.files.get(v.region.file)||"").split(`
`).slice(v.region.firstLine-1,v.region.lastLine).join(`
`);_=Co(E,v.accept)}const R=r.filter(C=>C.srcId===d.from&&C.dstDevice===d.device&&C.vulnId===d.vuln),A=R[R.length-1];p=_&&!!A&&A.outcome===Fi.PATCHED&&A.patchRev===y}}let x="";if(g!==rt.NONE){const u=s.find(v=>v.reason===g);u&&(x=u.text)}o.push({id:d.id,type:d.type,description:d.description,order:d.order,locked:!1,passed:p,failed:m,failReason:g,hint:x,detail:S,guidance:d.guidance||ZS(d.id)||void 0})}const l=new Map(o.map(d=>[d.id,d.passed]));for(const d of o)!d.order||d.order<=1||(d.locked=t.some(p=>p.order!==void 0&&p.order<d.order&&!l.get(p.id)),d.locked&&(d.passed=!1,d.failed=!1));const c=o.length>0&&o.every(d=>d.passed),h=o.some(d=>d.failed);return{states:o,allCompleted:c,hasFailed:h}}function QS(t,e){if(e.length===0)return t;let n=t;for(let i=0;i<e.length;i++){const r=e[i];if(n==null)return;if(r==="interfaces"&&typeof n.getInterface=="function"){const s=n;if(i+1<e.length){const a=e[i+1];i++,n=s.getInterface(a);continue}}if(n instanceof Map){const s=n.get(r);n=s!==void 0?s:n.get(Number(r))}else if(typeof n.get=="function"){const s=n.get(r);n=s!==void 0?s:n.get(Number(r))}else n=n[r]}return n}function JS(t,e){if(typeof t!="object"||t===null)return!1;for(const[n,i]of Object.entries(e)){const r=n==="dot1q_vlan"?"dot1qVlan":n==="dot1qVlan"?"dot1q_vlan":n;if((t[n]!==void 0?t[n]:t[r])!==i)return!1}return!0}class eM{constructor(){Oe(this,"currentScenario",null);Oe(this,"devices",new Map);Oe(this,"links",[]);Oe(this,"spareCablesCount",0);Oe(this,"reservedPorts",new Set);Oe(this,"reportStates",new Map);Oe(this,"reportAnswers",new Map);Oe(this,"httpLogs",[]);Oe(this,"playerPings",[]);Oe(this,"missionCompleteNotified",!1);Oe(this,"resolver");Oe(this,"sessions",new Map);Oe(this,"onLinkChanged");Oe(this,"onConfigChanged");Oe(this,"onObjectiveUpdated");Oe(this,"onMissionCompleted");Oe(this,"onMissionFailed");this.resolver=new GS(this.devices)}loadScenario(e){this.currentScenario=e,this.devices.clear(),this.links=[],this.sessions.clear(),this.reportStates.clear(),this.reportAnswers.clear(),this.httpLogs=[],this.playerPings=[],this.missionCompleteNotified=!1,this.spareCablesCount=e.spare_cables||0,this.reservedPorts=new Set((e.reserved_ports||[]).map(Tr));for(const n of e.devices){const i=new zS(n.id,n.type,n.model,n.hostname);i.rack=n.rack,i.slot=n.slot,i.desk=n.desk;const r=n.config||{};if(r.ip&&(i.ip=r.ip),r.mask&&(i.mask=r.mask),r.gateway&&(i.gateway=r.gateway),r.locked!==void 0&&(i.locked=r.locked),r.vlans)for(const[s,a]of Object.entries(r.vlans))i.vlans.set(Number(s),String(a));if(r.interfaces)for(const[s,a]of Object.entries(r.interfaces)){const o=i.getInterface(s)||i.ensureSubinterface(s);o&&(a.mode&&(o.mode=a.mode),a.accessVlan!==void 0&&(o.accessVlan=a.accessVlan),a.trunkAllowed&&(o.trunkAllowed=a.trunkAllowed),a.adminUp!==void 0&&(o.adminUp=a.adminUp),a.ip&&(o.ip=a.ip),a.mask&&(o.mask=a.mask),a.dot1qVlan!==void 0&&(o.dot1qVlan=a.dot1qVlan))}if(r.files)for(const[s,a]of Object.entries(r.files))i.files.set(s,a);r.services&&(i.services=[...r.services]),r.vulns&&(i.vulns=JSON.parse(JSON.stringify(r.vulns))),this.devices.set(i.id,i)}for(const n of e.links)this.applyLink(n.a,n.b,n.locked??!1);if(e.report&&e.report.fields){const n=e.report.max_attempts||3;for(const i of e.report.fields)this.reportStates.set(i.id,{id:i.id,label:i.label,kind:i.kind,options:i.options,attemptsLeft:n,lastValue:null,solved:!1,maxAttempts:n});if(e.solution)for(const i of e.solution)i.field&&i.value&&this.reportAnswers.set(i.field,i.value)}return this.resolver.refreshAllOperStatuses(),this.notifyObjectives(),{ok:!0,errors:[]}}applyLink(e,n,i=!1){const r=Tr(e),s=Tr(n),[a,o]=r.split(":"),[l,c]=s.split(":"),h=this.devices.get(a),d=this.devices.get(l);if(!h||!d)return!1;const p=h.getInterface(o),m=d.getInterface(c);return!p||!m?!1:(p.peer=s,m.peer=r,this.links.push({a:r,b:s,locked:i}),this.resolver.refreshAllOperStatuses(),!0)}connectLink(e,n){const i=Tr(e),r=Tr(n);if(this.spareCablesCount<=0)return{ok:!1,reason:"No spare cables remaining in inventory."};if(this.reservedPorts.has(i))return{ok:!1,reason:`Port ${i} is reserved (dust cap attached).`};if(this.reservedPorts.has(r))return{ok:!1,reason:`Port ${r} is reserved (dust cap attached).`};const[s,a]=i.split(":"),[o,l]=r.split(":");if(s===o)return{ok:!1,reason:"Cannot connect a cable to the same device."};const c=this.devices.get(s),h=this.devices.get(o);if(!c||!h)return{ok:!1,reason:"Target device not found."};const d=c.getInterface(a),p=h.getInterface(l);return!d||!p?{ok:!1,reason:"Interface not found."}:d.peer?{ok:!1,reason:`Port ${i} is already in use.`}:p.peer?{ok:!1,reason:`Port ${r} is already in use.`}:(this.applyLink(i,r,!1),this.spareCablesCount--,this.onLinkChanged&&this.onLinkChanged(i,r,!0),this.notifyObjectives(),{ok:!0})}disconnectLink(e){const n=Tr(e),i=this.links.findIndex(d=>d.a===n||d.b===n);if(i===-1)return{ok:!1,reason:"No link connected to this port."};const r=this.links[i];if(r.locked)return{ok:!1,reason:"This cable is locked by facility security."};const[s,a]=r.a.split(":"),[o,l]=r.b.split(":"),c=this.devices.get(s),h=this.devices.get(o);if(c){const d=c.getInterface(a);d&&(d.peer=null)}if(h){const d=h.getInterface(l);d&&(d.peer=null)}return this.links.splice(i,1),this.spareCablesCount++,this.resolver.refreshAllOperStatuses(),this.onLinkChanged&&this.onLinkChanged(r.a,r.b,!1),this.notifyObjectives(),{ok:!0}}ping(e,n){return this.resolver.resolvePing(e,n)}playerPing(e,n){const i=this.ping(e,n);return this.playerPings.push({srcId:e,dstIp:n,success:i.success}),i}httpRequest(e,n){const i=n.match(/^http:\/\/([^/:]+)(?::(\d+))?(\/[^?]*)(?:\?(.*))?$/);if(!i)return{ok:!1,status:400,body:`curl: (3) URL malformed: ${n}`,outcome:Fi.ERROR};const r=i[1],s=i[2]?parseInt(i[2],10):80,a=i[3]||"/",o=i[4]||"";if(!this.ping(e,r).success)return{ok:!1,status:0,body:`curl: (7) Failed to connect to ${r} port ${s}: Connection refused`,outcome:Fi.ERROR};let c=null;for(const p of this.devices.values())if(p.ip===r){c=p;break}if(!c)return{ok:!1,status:0,body:`curl: (7) Failed to connect to ${r} port ${s}: No response`,outcome:Fi.ERROR};if(!c.services.find(p=>p.port===s))return{ok:!1,status:0,body:`curl: (7) Failed to connect to ${r} port ${s}: Port closed`,outcome:Fi.ERROR};const d=c.vulns.find(p=>p.route===a);if(d){let g=(new URLSearchParams(o).get(d.exploit.param)||"").trim();try{g=decodeURIComponent(g)}catch{}const u=(c.files.get(d.region.file)||"").split(`
`).slice(d.region.firstLine-1,d.region.lastLine).join(`
`),v=Co(u,d.accept),y=c.patchRevs.get(d.id)||0;if(g===d.exploit.payload){const _=v?Fi.PATCHED:Fi.VULNERABLE,R=v?d.exploit.patchedBody:d.exploit.vulnerableBody,A=v?401:200;return this.httpLogs.push({srcId:e,dstDevice:c.id,vulnId:d.id,patchRev:y,outcome:_}),this.notifyObjectives(),{ok:v,status:A,body:R,outcome:_}}}return{ok:!0,status:200,body:`HTTP/1.1 200 OK

<html><body><h1>It Works!</h1></body></html>`,outcome:Fi.NORMAL}}submitReport(e,n){var c;const i=this.reportStates.get(e);if(!i||i.attemptsLeft<=0)return{ok:!1,correct:!1,attemptsLeft:0};let r="";const s=(c=this.currentScenario)==null?void 0:c.objectives.find(h=>h.type==="report"&&h.field===e);s?r=String(s.equals||""):this.reportAnswers.has(e)&&(r=this.reportAnswers.get(e));const a=n.trim().toLowerCase(),o=r.trim().toLowerCase(),l=a===o;return i.lastValue=n.trim(),l?i.solved=!0:i.attemptsLeft--,this.notifyObjectives(),{ok:!0,correct:l,attemptsLeft:i.attemptsLeft}}readFile(e,n){const i=this.devices.get(e);return i?i.files.get(n)??null:null}patchViews(e,n){const i=this.devices.get(e);if(!i)return[];const r=[];for(const s of i.vulns)if(s.region.file===n){const l=(i.files.get(n)||"").split(`
`).slice(s.region.firstLine-1,s.region.lastLine).join(`
`),c=Co(l,s.accept);r.push({vulnId:s.id,file:n,firstLine:s.region.firstLine,lastLine:s.region.lastLine,hint:s.hint,isPatched:c})}return r}writePatch(e,n,i){const r=this.devices.get(e);if(!r)return{ok:!1,accepted:!1};const s=r.vulns.find(g=>g.id===n);if(!s)return{ok:!1,accepted:!1};const a=r.files.get(s.region.file);if(!a)return{ok:!1,accepted:!1};const o=a.split(`
`),l=o.slice(0,s.region.firstLine-1),c=o.slice(s.region.lastLine),h=i.split(`
`),d=[...l,...h,...c];r.files.set(s.region.file,d.join(`
`)),s.region.lastLine=s.region.firstLine+h.length-1;const p=(r.patchRevs.get(n)||0)+1;r.patchRevs.set(n,p);const m=Co(i,s.accept);return this.notifyObjectives(),{ok:!0,accepted:m,hint:m?void 0:s.hint}}openSession(e){if(this.sessions.has(e))return this.sessions.get(e);const n=this.devices.get(e);if(!n)throw new Error(`Device ${e} not found`);const i=new qS(n,(r,s)=>this.playerPing(r,s),(r,s)=>this.httpRequest(r,s));return this.sessions.set(e,i),i}notifyObjectives(){var n;if(!this.currentScenario)return;const e=zm(this.currentScenario.objectives,this.devices,(i,r)=>this.ping(i,r),this.reportStates,this.httpLogs,this.currentScenario.hints,this.playerPings);this.onObjectiveUpdated&&this.onObjectiveUpdated(e.states),e.allCompleted?this.missionCompleteNotified||(this.missionCompleteNotified=!0,(n=this.onMissionCompleted)==null||n.call(this,this.currentScenario.id)):e.hasFailed&&this.onMissionFailed&&this.onMissionFailed(this.currentScenario.id)}objectiveStates(){return this.currentScenario?zm(this.currentScenario.objectives,this.devices,(e,n)=>this.ping(e,n),this.reportStates,this.httpLogs,this.currentScenario.hints,this.playerPings).states:[]}debriefView(){var i;if(!this.currentScenario)return null;const e=this.objectiveStates(),n={};if(this.currentScenario.report&&this.currentScenario.report.fields)for(const r of this.currentScenario.report.fields){const s=this.currentScenario.objectives.find(l=>l.type==="report"&&l.field===r.id),a=String((s==null?void 0:s.equals)||""),o=[];if(r.evidence)for(const l of r.evidence){const c=(i=this.currentScenario.logs)==null?void 0:i.find(d=>d.source===l.source&&d.file===l.file),h=c==null?void 0:c.lines[l.line-1];h&&o.push({source:l.source,file:l.file,line:l.line,text:h.text})}n[r.id]={answer:a,evidence:o}}return{debrief:this.currentScenario.debrief||"Mission completed successfully!",objectives:e,reportAnswers:n}}}const tM={schema_version:1,id:"m0_orientation",sequence:0,title:"Orientation: First Connection",briefing:"Welcome to the server room. This short tutorial teaches the core loop: use camera presets to find equipment, click a device to open its console, run a command, and read the objective panel for your next step. Start in the PC-A console, then ping PC-B.",devices:[{id:"PC-A",type:"host",model:"pc",hostname:"PC-A",desk:"desk_1",config:{ip:"192.168.1.10",mask:"255.255.255.0",gateway:"192.168.1.1"}},{id:"PC-B",type:"host",model:"pc",hostname:"PC-B",desk:"desk_2",config:{ip:"192.168.1.20",mask:"255.255.255.0",gateway:"192.168.1.1"}}],links:[{a:"PC-A:Eth0",b:"PC-B:Eth0",locked:!0}],spare_cables:0,objectives:[{id:"tutorial_ping",type:"ping",from:"PC-A",to_ip:"192.168.1.20",to_device:"PC-B",require_run:!0,description:"From PC-A, ping PC-B at 192.168.1.20",guidance:{targetDevice:"PC-A",actionType:"terminal",summary:"Open the PC-A terminal and run one ping.",steps:["Use the Desk 1 camera angle to locate PC-A, or use the already-open PC-A console.","Click inside the terminal input at the bottom of the console.","Type ping 192.168.1.20 and press Enter.","A successful reply marks the tutorial complete. The objective panel on the left tracks your progress."],suggestedCommands:["ping 192.168.1.20"],explanation:"The 3D room is the workspace, while the terminal and objective panel are your primary tools. You do not need to interact with every rack object—only the highlighted device or port required by the active objective."}}],hints:[{reason:rt.HOST_UNREACHABLE,text:"This tutorial is already wired. Open the PC-A console and run ping 192.168.1.20."}],debrief:"You have learned the core interaction loop: choose a camera angle, identify the named device, open its console, perform the requested action, and use the objective panel to confirm progress. Mission 1 adds cabling and switch/router configuration."},Mf={schema_version:1,id:"m1_vlan_ping",sequence:1,title:"Day One: Get Them Talking",briefing:"Accounting (PC-A) and Sales (PC-B) can't reach each other. The router is racked and cabled to the switch. Cable up PC-B, configure VLANs and a Router-on-a-Stick trunk, and make PC-A ping PC-B.",devices:[{id:"R1",type:"router",model:"router_2port",hostname:"Router",rack:"rack_a",slot:1,config:{}},{id:"S1",type:"switch",model:"switch_24",hostname:"Switch",rack:"rack_a",slot:3,config:{vlans:{10:"ACCOUNTING"},interfaces:{"Fa0/1":{mode:"access",accessVlan:10}}}},{id:"PC-A",type:"host",model:"pc",hostname:"PC-A",desk:"desk_1",config:{ip:"192.168.10.10",mask:"255.255.255.0",gateway:"192.168.10.1",locked:!0}},{id:"PC-B",type:"host",model:"pc",hostname:"PC-B",desk:"desk_2",config:{ip:"192.168.20.10",mask:"255.255.255.0",gateway:"192.168.20.1",locked:!0}}],links:[{a:"R1:Gi0/0",b:"S1:Gi0/1",locked:!0},{a:"S1:Fa0/1",b:"PC-A:Eth0",locked:!0}],spare_cables:1,reserved_ports:["R1:Gi0/1"],objectives:[{id:"cable_pc_b",type:"config",device:"S1",path:["interfaces","Fa0/2","peer"],equals:"PC-B:Eth0",description:"Connect spare cable from S1 Fa0/2 to PC-B Eth0"},{id:"vlan20_port",type:"config",device:"S1",path:["interfaces","Fa0/2","accessVlan"],equals:20,description:"Configure S1 Fa0/2 in VLAN 20 (Sales)"},{id:"trunk",type:"config",device:"S1",path:["interfaces","Gi0/1","mode"],equals:"trunk",description:"Configure S1 Gi0/1 as an 802.1Q trunk port"},{id:"r1_no_shut",type:"config",device:"R1",path:["interfaces","Gi0/0","adminUp"],equals:!0,description:"Enable R1 physical interface (no shutdown on Gi0/0)"},{id:"sub10",type:"config",device:"R1",path:["interfaces","Gi0/0.10"],equals:{dot1qVlan:10,ip:"192.168.10.1",mask:"255.255.255.0"},description:"Configure R1 Gi0/0.10: encapsulation dot1Q 10, IP 192.168.10.1/24"},{id:"sub20",type:"config",device:"R1",path:["interfaces","Gi0/0.20"],equals:{dot1qVlan:20,ip:"192.168.20.1",mask:"255.255.255.0"},description:"Configure R1 Gi0/0.20: encapsulation dot1Q 20, IP 192.168.20.1/24"},{id:"parent_noip",type:"config",device:"R1",path:["interfaces","Gi0/0","ip"],equals:null,description:"Ensure Gi0/0 parent interface has no IP address assigned"},{id:"ping_ab",type:"ping",from:"PC-A",to_ip:"192.168.20.10",to_device:"PC-B",via:"R1",description:"Verify PC-A can ping PC-B (192.168.20.10) through router R1"}],hints:[{reason:rt.NO_LINK,text:"PC-B isn't cabled to anything yet. Grab a cable from your inventory and plug it into S1 Fa0/2."},{reason:rt.ADMIN_DOWN,text:"The physical interface Gi0/0 on R1 is shut down. Enter config-if on R1 and execute 'no shutdown'."},{reason:rt.NO_GATEWAY,text:"Hosts in different subnets require a default gateway to communicate."},{reason:rt.VLAN_MISMATCH,text:"Check which VLAN each switch port is in, and verify that S1 Gi0/1 is set to 'switchport mode trunk'."},{reason:rt.NO_ROUTE,text:"R1 cannot find a route for the subnet. Make sure subinterfaces Gi0/0.10 and Gi0/0.20 are configured."}],debrief:"Outstanding work! You set up a classic Router-on-a-Stick (ROAS) architecture. Subinterfaces Gi0/0.10 and Gi0/0.20 act as default gateways for VLANs 10 and 20, routing frames tagged with 802.1Q across the Gi0/1 trunk link.",solution:[{link:{a:"S1:Fa0/2",b:"PC-B:Eth0"}},{device:"S1",commands:["enable","conf t","vlan 20","name SALES","exit","interface fa0/2","switchport mode access","switchport access vlan 20","exit","interface gi0/1","switchport mode trunk","end"]},{device:"R1",commands:["enable","conf t","interface gi0/0","no shutdown","exit","interface gi0/0.10","encapsulation dot1Q 10","ip address 192.168.10.1 255.255.255.0","exit","interface gi0/0.20","encapsulation dot1Q 20","ip address 192.168.20.1 255.255.255.0","end"]}]},nM={schema_version:1,id:"m2_log_triage",sequence:2,title:"Who Knocked?",briefing:"Security Operations alert: Suspicious unauthorized login activity detected on production server WEB1. Investigate the system authentication logs, correlate threat intel on the SOC monitor, and file an incident triage report.",devices:[{id:"WEB1",type:"server",model:"server",hostname:"web1",rack:"rack_a",slot:5,config:{ip:"10.0.10.5",mask:"255.255.255.0",gateway:"10.0.10.1"}},{id:"S1",type:"switch",model:"switch_24",hostname:"Switch",rack:"rack_a",slot:3,config:{vlans:{10:"DMZ"},interfaces:{"Fa0/1":{mode:"access",accessVlan:10},"Fa0/5":{mode:"access",accessVlan:10}}}},{id:"SOC-PC",type:"host",model:"pc",hostname:"SOC-PC",desk:"desk_1",config:{ip:"10.0.10.50",mask:"255.255.255.0",gateway:"10.0.10.1"}}],links:[{a:"S1:Fa0/1",b:"SOC-PC:Eth0",locked:!0},{a:"S1:Fa0/5",b:"WEB1:Eth0",locked:!0}],spare_cables:0,logs:[{source:"WEB1",file:"/var/log/auth.log",lines:[{t:"2026-03-14T01:45:10Z",text:"systemd[1]: Started OpenSSH server daemon."},{t:"2026-03-14T01:52:03Z",text:"sshd[702]: Accepted publickey for admin from 10.0.10.50 port 54102 ssh2"},{t:"2026-03-14T01:52:15Z",text:"sudo[708]: admin : TTY=pts/0 ; PWD=/home/admin ; USER=root ; COMMAND=/usr/bin/apt update"},{t:"2026-03-14T02:05:12Z",text:"sshd[750]: Received disconnect from 198.51.100.12 port 41100: 11: Normal Shutdown",src_ip:"198.51.100.12",geo:"CN"},{t:"2026-03-14T02:11:05Z",text:"sshd[811]: Failed password for invalid user root from 203.0.113.45 port 51122 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:07Z",text:"sshd[813]: Failed password for invalid user admin from 203.0.113.45 port 51124 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:10Z",text:"sshd[815]: Failed password for invalid user test from 203.0.113.45 port 51126 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:12Z",text:"sshd[817]: Failed password for invalid user oracle from 203.0.113.45 port 51128 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:15Z",text:"sshd[820]: Failed password for invalid user postgres from 203.0.113.45 port 51130 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:18Z",text:"sshd[823]: Failed password for invalid user ubuntu from 203.0.113.45 port 51132 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:21Z",text:"sshd[826]: Failed password for invalid user git from 203.0.113.45 port 51134 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:25Z",text:"sshd[829]: Failed password for invalid user backup from 203.0.113.45 port 51136 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:29Z",text:"sshd[832]: Failed password for deploy from 203.0.113.45 port 51138 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:32Z",text:"sshd[835]: Failed password for deploy from 203.0.113.45 port 51140 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:36Z",text:"sshd[840]: Accepted password for deploy from 203.0.113.45 port 51142 ssh2",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:11:37Z",text:"systemd-logind[412]: New session 42 of user deploy.",src_ip:"203.0.113.45",geo:"NL"},{t:"2026-03-14T02:15:01Z",text:"CRON[901]: (root) CMD (/usr/local/bin/backup-sync.sh >/dev/null 2>&1)"},{t:"2026-03-14T02:22:40Z",text:"sshd[950]: Connection closed by authenticating user root 185.220.101.5 port 49201 [preauth]",src_ip:"185.220.101.5",geo:"RU"}]}],report:{max_attempts:3,fields:[{id:"attacker_ip",label:"Attacker IP Address",kind:"ipv4",evidence:[{source:"WEB1",file:"/var/log/auth.log",line:15}]},{id:"attack_type",label:"Attack Vector",kind:"choice",options:["Brute force","SQL injection","Port scan","Phishing"],evidence:[{source:"WEB1",file:"/var/log/auth.log",line:5}]},{id:"compromised_user",label:"Compromised User Account",kind:"text",evidence:[{source:"WEB1",file:"/var/log/auth.log",line:15}]}]},objectives:[{id:"report_attacker_ip",type:"report",field:"attacker_ip",equals:"203.0.113.45",description:"Identify and submit the external Attacker IP address"},{id:"report_attack_type",type:"report",field:"attack_type",equals:"Brute force",description:"Classify the attack vector (Brute force dictionary attack)"},{id:"report_compromised_user",type:"report",field:"compromised_user",equals:"deploy",description:"Determine which user account credentials were breached"}],debrief:"Incident Report accepted! You spotted the sustained SSH dictionary attack from 203.0.113.45 (Netherlands) testing common service usernames before successfully compromising 'deploy' via password authentication. Recommended hardening: disable password auth in /etc/ssh/sshd_config (PasswordAuthentication no), enforce public key auth, and install Fail2ban.",solution:[{field:"attacker_ip",value:"203.0.113.45"},{field:"attack_type",value:"Brute force"},{field:"compromised_user",value:"deploy"}]},iM={schema_version:1,id:"m3_web_patch",sequence:3,title:"Patch Tuesday",briefing:"Security auditing discovered two critical flaws on WEB1: an unauthenticated SQL Injection in login.php and Reflected XSS in search.php. Prove each exploit with curl from your PC, patch the code in the editor, and verify the attack is neutralized.",devices:[{id:"WEB1",type:"server",model:"server",hostname:"web1",rack:"rack_a",slot:5,config:{ip:"10.0.10.5",mask:"255.255.255.0",gateway:"10.0.10.1",files:{"/var/www/login.php":`<?php
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

<h1>Login failed.</h1><p>Invalid credentials.</p>`}},{id:"xss_search",kind:"xss",service:"http",route:"/search.php",region:{file:"/var/www/search.php",firstLine:4,lastLine:4},accept:[`echo ?"<div class='results'>Results for: "\\.htmlspecialchars\\(\\$q,ENT_QUOTES,['"]UTF-8['"]\\)\\."</div>";`,`echo ?"<div class='results'>Results for: "\\.htmlspecialchars\\(\\$q\\)\\."</div>";`,`\\$safe=htmlspecialchars\\(\\$q\\);echo ?"<div class='results'>Results for: "\\.\\$safe\\."</div>";`],hint:`Sanitize output using htmlspecialchars: echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`,exploit:{param:"q",payload:"<script>alert(1)<\/script>",vulnerableBody:`HTTP/1.1 200 OK

<div class='results'>Results for: <script>alert(1)<\/script></div>`,patchedBody:`HTTP/1.1 200 OK

<div class='results'>Results for: &lt;script&gt;alert(1)&lt;/script&gt;</div>`}}]}},{id:"S1",type:"switch",model:"switch_24",hostname:"Switch",rack:"rack_a",slot:3,config:{vlans:{10:"DMZ"},interfaces:{"Fa0/1":{mode:"access",accessVlan:10},"Fa0/5":{mode:"access",accessVlan:10}}}},{id:"PC-1",type:"host",model:"pc",hostname:"PC-1",desk:"desk_1",config:{ip:"10.0.10.50",mask:"255.255.255.0",gateway:"10.0.10.1"}}],links:[{a:"S1:Fa0/1",b:"PC-1:Eth0",locked:!0},{a:"S1:Fa0/5",b:"WEB1:Eth0",locked:!0}],spare_cables:0,objectives:[{id:"test_sqli_vuln",type:"exploit_test",from:"PC-1",device:"WEB1",vuln:"sqli_login",expect:"vulnerable",order:1,description:`Execute SQLi test curl "http://10.0.10.5/login.php?user=' OR '1'='1" on PC-1 to confirm vulnerability`},{id:"patch_sqli",type:"vuln_patched",device:"WEB1",vuln:"sqli_login",order:2,description:"Patch login.php using PDO prepared statements in the code editor"},{id:"test_sqli_patched",type:"exploit_test",from:"PC-1",device:"WEB1",vuln:"sqli_login",expect:"patched",order:3,description:"Re-run SQLi test curl on PC-1 to verify attack fails (401 Unauthorized)"},{id:"test_xss_vuln",type:"exploit_test",from:"PC-1",device:"WEB1",vuln:"xss_search",expect:"vulnerable",order:1,description:'Execute XSS test curl "http://10.0.10.5/search.php?q=<script>alert(1)<\/script>" on PC-1'},{id:"patch_xss",type:"vuln_patched",device:"WEB1",vuln:"xss_search",order:2,description:"Patch search.php with htmlspecialchars() to escape user output"},{id:"test_xss_patched",type:"exploit_test",from:"PC-1",device:"WEB1",vuln:"xss_search",expect:"patched",order:3,description:"Re-run XSS test curl on PC-1 to verify HTML special characters are escaped"}],debrief:`Security patches deployed successfully! Parameterized queries (prepared statements) neutralize SQL injection by separating code from data, completely neutralizing quotes and SQL syntax hijacking. htmlspecialchars() neutralizes Reflected XSS by converting sensitive characters (<, >, &, ', ") to HTML entities before output.`},Fs=[tM,Mf,nM,iM];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const op="170",rM=0,Hm=1,sM=2,gx=1,vx=2,Zi=3,Wr=0,Dn=1,er=2,Hr=0,ya=1,Vm=2,Gm=3,jm=4,aM=5,cs=100,oM=101,lM=102,cM=103,uM=104,dM=200,fM=201,hM=202,pM=203,Ef=204,wf=205,mM=206,gM=207,vM=208,xM=209,_M=210,yM=211,SM=212,MM=213,EM=214,bf=0,Tf=1,Cf=2,Na=3,Af=4,Rf=5,Nf=6,Pf=7,xx=0,wM=1,bM=2,Vr=0,TM=1,CM=2,AM=3,_x=4,RM=5,NM=6,PM=7,yx=300,Pa=301,La=302,Lf=303,kf=304,fu=306,If=1e3,ps=1001,Df=1002,Ti=1003,LM=1004,Cl=1005,Hi=1006,Wu=1007,ms=1008,dr=1009,Sx=1010,Mx=1011,Yo=1012,lp=1013,bs=1014,ir=1015,il=1016,cp=1017,up=1018,ka=1020,Ex=35902,wx=1021,bx=1022,Ei=1023,Tx=1024,Cx=1025,Sa=1026,Ia=1027,Ax=1028,dp=1029,Rx=1030,fp=1031,hp=1033,hc=33776,pc=33777,mc=33778,gc=33779,Uf=35840,Of=35841,Ff=35842,Bf=35843,zf=36196,Hf=37492,Vf=37496,Gf=37808,jf=37809,Wf=37810,$f=37811,Xf=37812,qf=37813,Yf=37814,Kf=37815,Zf=37816,Qf=37817,Jf=37818,eh=37819,th=37820,nh=37821,vc=36492,ih=36494,rh=36495,Nx=36283,sh=36284,ah=36285,oh=36286,kM=3200,IM=3201,Px=0,DM=1,Rr="",Wn="srgb",za="srgb-linear",hu="linear",At="srgb",Bs=7680,Wm=519,UM=512,OM=513,FM=514,Lx=515,BM=516,zM=517,HM=518,VM=519,$m=35044,Xm="300 es",rr=2e3,jc=2001;class Ha{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qm=1234567;const Ao=Math.PI/180,Ko=180/Math.PI;function Va(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[t&255]+gn[t>>8&255]+gn[t>>16&255]+gn[t>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function pp(t,e){return(t%e+e)%e}function GM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function jM(t,e,n){return t!==e?(n-t)/(e-t):0}function Ro(t,e,n){return(1-n)*t+n*e}function WM(t,e,n,i){return Ro(t,e,1-Math.exp(-n*i))}function $M(t,e=1){return e-Math.abs(pp(t,e*2)-e)}function XM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function qM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function YM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function KM(t,e){return t+Math.random()*(e-t)}function ZM(t){return t*(.5-Math.random())}function QM(t){t!==void 0&&(qm=t);let e=qm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function JM(t){return t*Ao}function eE(t){return t*Ko}function tE(t){return(t&t-1)===0&&t!==0}function nE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function iE(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function rE(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),p=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*d,l*p,o*c);break;case"YZY":t.set(l*p,o*h,l*d,o*c);break;case"ZXZ":t.set(l*d,l*p,o*h,o*c);break;case"XZX":t.set(o*h,l*g,l*m,o*c);break;case"YXY":t.set(l*m,o*h,l*g,o*c);break;case"ZYZ":t.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Al={DEG2RAD:Ao,RAD2DEG:Ko,generateUUID:Va,clamp:nn,euclideanModulo:pp,mapLinear:GM,inverseLerp:jM,lerp:Ro,damp:WM,pingpong:$M,smoothstep:XM,smootherstep:qM,randInt:YM,randFloat:KM,randFloatSpread:ZM,seededRandom:QM,degToRad:JM,radToDeg:eE,isPowerOfTwo:tE,ceilPowerOfTwo:nE,floorPowerOfTwo:iE,setQuaternionFromProperEuler:rE,normalize:Mn,denormalize:Js};class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,n,i,r,s,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],p=i[2],m=i[5],g=i[8],S=r[0],x=r[3],u=r[6],v=r[1],y=r[4],_=r[7],R=r[2],A=r[5],C=r[8];return s[0]=a*S+o*v+l*R,s[3]=a*x+o*y+l*A,s[6]=a*u+o*_+l*C,s[1]=c*S+h*v+d*R,s[4]=c*x+h*y+d*A,s[7]=c*u+h*_+d*C,s[2]=p*S+m*v+g*R,s[5]=p*x+m*y+g*A,s[8]=p*u+m*_+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,p=o*l-h*s,m=c*s-a*l,g=n*d+i*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=d*S,e[1]=(r*c-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=p*S,e[4]=(h*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply($u.makeScale(e,n)),this}rotate(e){return this.premultiply($u.makeRotation(-e)),this}translate(e,n){return this.premultiply($u.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $u=new tt;function kx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sE(){const t=Wc("canvas");return t.style.display="block",t}const Ym={};function go(t){t in Ym||(Ym[t]=!0,console.warn(t))}function aE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function oE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vt={enabled:!0,workingColorSpace:za,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===At&&(t.r=ar(t.r),t.g=ar(t.g),t.b=ar(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===At&&(t.r=Ma(t.r),t.g=Ma(t.g),t.b=Ma(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Rr?hu:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function ar(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ma(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Km=[.64,.33,.3,.6,.15,.06],Zm=[.2126,.7152,.0722],Qm=[.3127,.329],Jm=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e0=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[za]:{primaries:Km,whitePoint:Qm,transfer:hu,toXYZ:Jm,fromXYZ:e0,luminanceCoefficients:Zm,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:Km,whitePoint:Qm,transfer:At,toXYZ:Jm,fromXYZ:e0,luminanceCoefficients:Zm,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}});let zs;class cE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zs===void 0&&(zs=Wc("canvas")),zs.width=e.width,zs.height=e.height;const i=zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ar(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ar(n[i]/255)*255):n[i]=ar(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uE=0;class Ix{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Va(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xu(r[a].image)):s.push(Xu(r[a]))}else s=Xu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dE=0;class Un extends Ha{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,i=ps,r=ps,s=Hi,a=ms,o=Ei,l=dr,c=Un.DEFAULT_ANISOTROPY,h=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Va(),this.name="",this.source=new Ix(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case If:e.x=e.x-Math.floor(e.x);break;case ps:e.x=e.x<0?0:1;break;case Df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case If:e.y=e.y-Math.floor(e.y);break;case ps:e.y=e.y<0?0:1;break;case Df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=yx;Un.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],S=l[2],x=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-S)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+S)<.1&&Math.abs(g+x)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,_=(m+1)/2,R=(u+1)/2,A=(h+p)/4,C=(d+S)/4,L=(g+x)/4;return y>_&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=C/i):_>R?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=A/r,s=L/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=L/s),this.set(i,r,s,n),this}let v=Math.sqrt((x-g)*(x-g)+(d-S)*(d-S)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(x-g)/v,this.y=(d-S)/v,this.z=(p-h)/v,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fE extends Ha{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ix(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends fE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Dx extends Un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hE extends Un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const p=s[a+0],m=s[a+1],g=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d;return}if(o===1){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=S;return}if(d!==S||l!==p||c!==m||h!==g){let x=1-o;const u=l*p+c*m+h*g+d*S,v=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const R=Math.sqrt(y),A=Math.atan2(R,u*v);x=Math.sin(x*A)/R,o=Math.sin(o*A)/R}const _=o*v;if(l=l*x+p*_,c=c*x+m*_,h=h*x+g*_,d=d*x+S*_,x===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[a],p=s[a+1],m=s[a+2],g=s[a+3];return e[n]=o*g+h*d+l*m-c*p,e[n+1]=l*g+h*p+c*d-o*m,e[n+2]=c*g+h*m+o*p-l*d,e[n+3]=h*g-o*d-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(s/2),p=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=p*h*d+c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d-p*m*g;break;case"YXZ":this._x=p*h*d+c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d+p*m*g;break;case"ZXY":this._x=p*h*d-c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d-p*m*g;break;case"ZYX":this._x=p*h*d-c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d+p*m*g;break;case"YZX":this._x=p*h*d+c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d-p*m*g;break;case"XZY":this._x=p*h*d-c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],p=i+o+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,p=Math.sin(n*h)/c;return this._w=a*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(t0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(t0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qu=new k,t0=new rl;class sl{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(s,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rl.copy(i.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),Nl.subVectors(this.max,ro),Hs.subVectors(e.a,ro),Vs.subVectors(e.b,ro),Gs.subVectors(e.c,ro),xr.subVectors(Vs,Hs),_r.subVectors(Gs,Vs),Zr.subVectors(Hs,Gs);let n=[0,-xr.z,xr.y,0,-_r.z,_r.y,0,-Zr.z,Zr.y,xr.z,0,-xr.x,_r.z,0,-_r.x,Zr.z,0,-Zr.x,-xr.y,xr.x,0,-_r.y,_r.x,0,-Zr.y,Zr.x,0];return!Yu(n,Hs,Vs,Gs,Nl)||(n=[1,0,0,0,1,0,0,0,1],!Yu(n,Hs,Vs,Gs,Nl))?!1:(Pl.crossVectors(xr,_r),n=[Pl.x,Pl.y,Pl.z],Yu(n,Hs,Vs,Gs,Nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new k,new k,new k,new k,new k,new k,new k,new k],hi=new k,Rl=new sl,Hs=new k,Vs=new k,Gs=new k,xr=new k,_r=new k,Zr=new k,ro=new k,Nl=new k,Pl=new k,Qr=new k;function Yu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Qr.fromArray(t,s);const o=r.x*Math.abs(Qr.x)+r.y*Math.abs(Qr.y)+r.z*Math.abs(Qr.z),l=e.dot(Qr),c=n.dot(Qr),h=i.dot(Qr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const pE=new sl,so=new k,Ku=new k;class pu{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):pE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);const n=so.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(so,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add(Ku)),this.expandByPoint(so.copy(e.center).sub(Ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new k,Zu=new k,Ll=new k,yr=new k,Qu=new k,kl=new k,Ju=new k;class mp{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,n),Xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zu.copy(e).add(n).multiplyScalar(.5),Ll.copy(n).sub(e).normalize(),yr.copy(this.origin).sub(Zu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ll),o=yr.dot(this.direction),l=-yr.dot(Ll),c=yr.lengthSq(),h=Math.abs(1-a*a);let d,p,m,g;if(h>0)if(d=a*l-o,p=a*o-l,g=s*h,d>=0)if(p>=-g)if(p<=g){const S=1/h;d*=S,p*=S,m=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+p*(p+2*l)+c);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Zu).addScaledVector(Ll,p),m}intersectSphere(e,n){Xi.subVectors(e.center,this.origin);const i=Xi.dot(this.direction),r=Xi.dot(Xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,n,i,r,s){Qu.subVectors(n,e),kl.subVectors(i,e),Ju.crossVectors(Qu,kl);let a=this.direction.dot(Ju),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yr.subVectors(this.origin,e);const l=o*this.direction.dot(kl.crossVectors(yr,kl));if(l<0)return null;const c=o*this.direction.dot(Qu.cross(yr));if(c<0||l+c>a)return null;const h=-o*yr.dot(Ju);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,n,i,r,s,a,o,l,c,h,d,p,m,g,S,x){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,d,p,m,g,S,x)}set(e,n,i,r,s,a,o,l,c,h,d,p,m,g,S,x){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=m,u[7]=g,u[11]=S,u[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/js.setFromMatrixColumn(e,0).length(),s=1/js.setFromMatrixColumn(e,1).length(),a=1/js.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=a*h,m=a*d,g=o*h,S=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=m+g*c,n[5]=p-S*c,n[9]=-o*l,n[2]=S-p*c,n[6]=g+m*c,n[10]=a*l}else if(e.order==="YXZ"){const p=l*h,m=l*d,g=c*h,S=c*d;n[0]=p+S*o,n[4]=g*o-m,n[8]=a*c,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=m*o-g,n[6]=S+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*h,m=l*d,g=c*h,S=c*d;n[0]=p-S*o,n[4]=-a*d,n[8]=g+m*o,n[1]=m+g*o,n[5]=a*h,n[9]=S-p*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*h,m=a*d,g=o*h,S=o*d;n[0]=l*h,n[4]=g*c-m,n[8]=p*c+S,n[1]=l*d,n[5]=S*c+p,n[9]=m*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*c,g=o*l,S=o*c;n[0]=l*h,n[4]=S-p*d,n[8]=g*d+m,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*d+g,n[10]=p-S*d}else if(e.order==="XZY"){const p=a*l,m=a*c,g=o*l,S=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=p*d+S,n[5]=a*h,n[9]=m*d-g,n[2]=g*d-m,n[6]=o*h,n[10]=S*d+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mE,e,gE)}lookAt(e,n,i){const r=this.elements;return Vn.subVectors(e,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Sr.crossVectors(i,Vn),Sr.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Sr.crossVectors(i,Vn)),Sr.normalize(),Il.crossVectors(Vn,Sr),r[0]=Sr.x,r[4]=Il.x,r[8]=Vn.x,r[1]=Sr.y,r[5]=Il.y,r[9]=Vn.y,r[2]=Sr.z,r[6]=Il.z,r[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],p=i[9],m=i[13],g=i[2],S=i[6],x=i[10],u=i[14],v=i[3],y=i[7],_=i[11],R=i[15],A=r[0],C=r[4],L=r[8],E=r[12],M=r[1],N=r[5],z=r[9],V=r[13],K=r[2],ee=r[6],Y=r[10],ne=r[14],I=r[3],Q=r[7],ie=r[11],ue=r[15];return s[0]=a*A+o*M+l*K+c*I,s[4]=a*C+o*N+l*ee+c*Q,s[8]=a*L+o*z+l*Y+c*ie,s[12]=a*E+o*V+l*ne+c*ue,s[1]=h*A+d*M+p*K+m*I,s[5]=h*C+d*N+p*ee+m*Q,s[9]=h*L+d*z+p*Y+m*ie,s[13]=h*E+d*V+p*ne+m*ue,s[2]=g*A+S*M+x*K+u*I,s[6]=g*C+S*N+x*ee+u*Q,s[10]=g*L+S*z+x*Y+u*ie,s[14]=g*E+S*V+x*ne+u*ue,s[3]=v*A+y*M+_*K+R*I,s[7]=v*C+y*N+_*ee+R*Q,s[11]=v*L+y*z+_*Y+R*ie,s[15]=v*E+y*V+_*ne+R*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],m=e[14],g=e[3],S=e[7],x=e[11],u=e[15];return g*(+s*l*d-r*c*d-s*o*p+i*c*p+r*o*m-i*l*m)+S*(+n*l*m-n*c*p+s*a*p-r*a*m+r*c*h-s*l*h)+x*(+n*c*d-n*o*m-s*a*d+i*a*m+s*o*h-i*c*h)+u*(-r*o*h-n*l*d+n*o*p+r*a*d-i*a*p+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],m=e[11],g=e[12],S=e[13],x=e[14],u=e[15],v=d*x*c-S*p*c+S*l*m-o*x*m-d*l*u+o*p*u,y=g*p*c-h*x*c-g*l*m+a*x*m+h*l*u-a*p*u,_=h*S*c-g*d*c+g*o*m-a*S*m-h*o*u+a*d*u,R=g*d*l-h*S*l-g*o*p+a*S*p+h*o*x-a*d*x,A=n*v+i*y+r*_+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(S*p*s-d*x*s-S*r*m+i*x*m+d*r*u-i*p*u)*C,e[2]=(o*x*s-S*l*s+S*r*c-i*x*c-o*r*u+i*l*u)*C,e[3]=(d*l*s-o*p*s-d*r*c+i*p*c+o*r*m-i*l*m)*C,e[4]=y*C,e[5]=(h*x*s-g*p*s+g*r*m-n*x*m-h*r*u+n*p*u)*C,e[6]=(g*l*s-a*x*s-g*r*c+n*x*c+a*r*u-n*l*u)*C,e[7]=(a*p*s-h*l*s+h*r*c-n*p*c-a*r*m+n*l*m)*C,e[8]=_*C,e[9]=(g*d*s-h*S*s-g*i*m+n*S*m+h*i*u-n*d*u)*C,e[10]=(a*S*s-g*o*s+g*i*c-n*S*c-a*i*u+n*o*u)*C,e[11]=(h*o*s-a*d*s-h*i*c+n*d*c+a*i*m-n*o*m)*C,e[12]=R*C,e[13]=(h*S*r-g*d*r+g*i*p-n*S*p-h*i*x+n*d*x)*C,e[14]=(g*o*r-a*S*r-g*i*l+n*S*l+a*i*x-n*o*x)*C,e[15]=(a*d*r-h*o*r+h*i*l-n*d*l-a*i*p+n*o*p)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,d=o+o,p=s*c,m=s*h,g=s*d,S=a*h,x=a*d,u=o*d,v=l*c,y=l*h,_=l*d,R=i.x,A=i.y,C=i.z;return r[0]=(1-(S+u))*R,r[1]=(m+_)*R,r[2]=(g-y)*R,r[3]=0,r[4]=(m-_)*A,r[5]=(1-(p+u))*A,r[6]=(x+v)*A,r[7]=0,r[8]=(g+y)*C,r[9]=(x-v)*C,r[10]=(1-(p+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=js.set(r[0],r[1],r[2]).length();const a=js.set(r[4],r[5],r[6]).length(),o=js.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pi.copy(this);const c=1/s,h=1/a,d=1/o;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,n.setFromRotationMatrix(pi),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=rr){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let m,g;if(o===rr)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===jc)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=rr){const l=this.elements,c=1/(n-e),h=1/(i-r),d=1/(a-s),p=(n+e)*c,m=(i+r)*h;let g,S;if(o===rr)g=(a+s)*d,S=-2*d;else if(o===jc)g=s*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const js=new k,pi=new Lt,mE=new k(0,0,0),gE=new k(1,1,1),Sr=new k,Il=new k,Vn=new k,n0=new Lt,i0=new rl;class Wi{constructor(e=0,n=0,i=0,r=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],p=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return n0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(n0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return i0.setFromEuler(this),this.setFromQuaternion(i0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";let gp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vE=0;const r0=new k,Ws=new rl,qi=new Lt,Dl=new k,ao=new k,xE=new k,_E=new rl,s0=new k(1,0,0),a0=new k(0,1,0),o0=new k(0,0,1),l0={type:"added"},yE={type:"removed"},$s={type:"childadded",child:null},ed={type:"childremoved",child:null};class _n extends Ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new k,n=new Wi,i=new rl,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new tt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ws.setFromAxisAngle(e,n),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,n){return Ws.setFromAxisAngle(e,n),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(s0,e)}rotateY(e){return this.rotateOnAxis(a0,e)}rotateZ(e){return this.rotateOnAxis(o0,e)}translateOnAxis(e,n){return r0.copy(e).applyQuaternion(this.quaternion),this.position.add(r0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(s0,e)}translateY(e){return this.translateOnAxis(a0,e)}translateZ(e){return this.translateOnAxis(o0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Dl.copy(e):Dl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(ao,Dl,this.up):qi.lookAt(Dl,ao,this.up),this.quaternion.setFromRotationMatrix(qi),r&&(qi.extractRotation(r.matrixWorld),Ws.setFromRotationMatrix(qi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(l0),$s.child=e,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yE),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(l0),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,xE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,_E,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DEFAULT_UP=new k(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new k,Yi=new k,td=new k,Ki=new k,Xs=new k,qs=new k,c0=new k,nd=new k,id=new k,rd=new k,sd=new Rt,ad=new Rt,od=new Rt;class Mi{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),mi.subVectors(e,n),r.cross(mi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){mi.subVectors(r,n),Yi.subVectors(i,n),td.subVectors(e,n);const a=mi.dot(mi),o=mi.dot(Yi),l=mi.dot(td),c=Yi.dot(Yi),h=Yi.dot(td),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,m=(c*l-o*h)*p,g=(a*h-o*l)*p;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ki.x),l.addScaledVector(a,Ki.y),l.addScaledVector(o,Ki.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return sd.setScalar(0),ad.setScalar(0),od.setScalar(0),sd.fromBufferAttribute(e,n),ad.fromBufferAttribute(e,i),od.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(sd,s.x),a.addScaledVector(ad,s.y),a.addScaledVector(od,s.z),a}static isFrontFacing(e,n,i,r){return mi.subVectors(i,n),Yi.subVectors(e,n),mi.cross(Yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),mi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Mi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Mi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Xs.subVectors(r,i),qs.subVectors(s,i),nd.subVectors(e,i);const l=Xs.dot(nd),c=qs.dot(nd);if(l<=0&&c<=0)return n.copy(i);id.subVectors(e,r);const h=Xs.dot(id),d=qs.dot(id);if(h>=0&&d<=h)return n.copy(r);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Xs,a);rd.subVectors(e,s);const m=Xs.dot(rd),g=qs.dot(rd);if(g>=0&&m<=g)return n.copy(s);const S=m*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(qs,o);const x=h*g-m*d;if(x<=0&&d-h>=0&&m-g>=0)return c0.subVectors(s,r),o=(d-h)/(d-h+(m-g)),n.copy(r).addScaledVector(c0,o);const u=1/(x+S+p);return a=S*u,o=p*u,n.copy(i).addScaledVector(Xs,a).addScaledVector(qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function ld(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=vt.workingColorSpace){return this.r=e,this.g=n,this.b=i,vt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=vt.workingColorSpace){if(e=pp(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ld(a,s,e+1/3),this.g=ld(a,s,e),this.b=ld(a,s,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=Ux[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return vt.fromWorkingColorSpace(vn.copy(this),e),Math.round(nn(vn.r*255,0,255))*65536+Math.round(nn(vn.g*255,0,255))*256+Math.round(nn(vn.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=vt.workingColorSpace){vt.fromWorkingColorSpace(vn.copy(this),n);const i=vn.r,r=vn.g,s=vn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=vt.workingColorSpace){return vt.fromWorkingColorSpace(vn.copy(this),n),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Wn){vt.fromWorkingColorSpace(vn.copy(this),e);const n=vn.r,i=vn.g,r=vn.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+n,Mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mr),e.getHSL(Ul);const i=Ro(Mr.h,Ul.h,n),r=Ro(Mr.s,Ul.s,n),s=Ro(Mr.l,Ul.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new ot;ot.NAMES=Ux;let SE=0;class Ga extends Ha{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Va(),this.name="",this.blending=ya,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ef,this.blendDst=wf,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ya&&(i.blending=this.blending),this.side!==Wr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ef&&(i.blendSrc=this.blendSrc),this.blendDst!==wf&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Na&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gi extends Ga{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new k,Ol=new He;class ji{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$m,this.updateRanges=[],this.gpuType=ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ol.fromBufferAttribute(this,n),Ol.applyMatrix3(e),this.setXY(n,Ol.x,Ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Js(n,this.array)),n}setX(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Js(n,this.array)),n}setY(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Js(n,this.array)),n}setW(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array),r=Mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array),r=Mn(r,this.array),s=Mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$m&&(e.usage=this.usage),e}}class Ox extends ji{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Fx extends ji{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends ji{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ME=0;const Qn=new Lt,cd=new _n,Ys=new k,Gn=new sl,oo=new sl,en=new k;class si extends Ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kx(e)?Fx:Ox)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,n,i){return Qn.makeTranslation(e,n,i),this.applyMatrix4(Qn),this}scale(e,n,i){return Qn.makeScale(e,n,i),this.applyMatrix4(Qn),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];oo.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Gn.min,oo.min),Gn.expandByPoint(en),en.addVectors(Gn.max,oo.max),Gn.expandByPoint(en)):(Gn.expandByPoint(oo.min),Gn.expandByPoint(oo.max))}Gn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)en.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(en));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)en.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(e,c),en.add(Ys)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new k,l[L]=new k;const c=new k,h=new k,d=new k,p=new He,m=new He,g=new He,S=new k,x=new k;function u(L,E,M){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),p.fromBufferAttribute(s,L),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),h.sub(c),d.sub(c),m.sub(p),g.sub(p);const N=1/(m.x*g.y-g.x*m.y);isFinite(N)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(N),x.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(N),o[L].add(S),o[E].add(S),o[M].add(S),l[L].add(x),l[E].add(x),l[M].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,E=v.length;L<E;++L){const M=v[L],N=M.start,z=M.count;for(let V=N,K=N+z;V<K;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new k,_=new k,R=new k,A=new k;function C(L){R.fromBufferAttribute(r,L),A.copy(R);const E=o[L];y.copy(E),y.sub(R.multiplyScalar(R.dot(E))).normalize(),_.crossVectors(A,E);const N=_.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,N)}for(let L=0,E=v.length;L<E;++L){const M=v[L],N=M.start,z=M.count;for(let V=N,K=N+z;V<K;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ji(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,h=new k,d=new k;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),S=e.getX(p+1),x=e.getX(p+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,x),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,x),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let p=0,m=n.count;p<m;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,p=new c.constructor(l.length*h);let m=0,g=0;for(let S=0,x=l.length;S<x;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let u=0;u<h;u++)p[g++]=c[m++]}return new ji(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new si,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const p=c[h],m=e(p,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let p=0,m=d.length;p<m;p++)h.push(d[p].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u0=new Lt,Jr=new mp,Fl=new pu,d0=new k,Bl=new k,zl=new k,Hl=new k,ud=new k,Vl=new k,f0=new k,Gl=new k;class _e extends _n{constructor(e=new si,n=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(ud.fromBufferAttribute(d,e),a?Vl.addScaledVector(ud,h):Vl.addScaledVector(ud.sub(n),h))}n.add(Vl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(s),Jr.copy(e.ray).recast(e.near),!(Fl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Fl,d0)===null||Jr.origin.distanceToSquared(d0)>(e.far-e.near)**2))&&(u0.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(u0),!(i.boundingBox!==null&&Jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Jr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=p.length;g<S;g++){const x=p[g],u=a[x.materialIndex],v=Math.max(x.start,m.start),y=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let _=v,R=y;_<R;_+=3){const A=o.getX(_),C=o.getX(_+1),L=o.getX(_+2);r=jl(this,u,e,i,c,h,d,A,C,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let x=g,u=S;x<u;x+=3){const v=o.getX(x),y=o.getX(x+1),_=o.getX(x+2);r=jl(this,a,e,i,c,h,d,v,y,_),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=p.length;g<S;g++){const x=p[g],u=a[x.materialIndex],v=Math.max(x.start,m.start),y=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let _=v,R=y;_<R;_+=3){const A=_,C=_+1,L=_+2;r=jl(this,u,e,i,c,h,d,A,C,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let x=g,u=S;x<u;x+=3){const v=x,y=x+1,_=x+2;r=jl(this,a,e,i,c,h,d,v,y,_),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function EE(t,e,n,i,r,s,a,o){let l;if(e.side===Dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Wr,o),l===null)return null;Gl.copy(o),Gl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Gl);return c<n.near||c>n.far?null:{distance:c,point:Gl.clone(),object:t}}function jl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Bl),t.getVertexPosition(l,zl),t.getVertexPosition(c,Hl);const h=EE(t,e,n,i,Bl,zl,Hl,f0);if(h){const d=new k;Mi.getBarycoord(f0,Bl,zl,Hl,d),r&&(h.uv=Mi.getInterpolatedAttribute(r,o,l,c,d,new He)),s&&(h.uv1=Mi.getInterpolatedAttribute(s,o,l,c,d,new He)),a&&(h.normal=Mi.getInterpolatedAttribute(a,o,l,c,d,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new k,materialIndex:0};Mi.getNormal(Bl,zl,Hl,p.normal),h.face=p,h.barycoord=d}return h}class Ke extends si{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let p=0,m=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(d,2));function g(S,x,u,v,y,_,R,A,C,L,E){const M=_/C,N=R/L,z=_/2,V=R/2,K=A/2,ee=C+1,Y=L+1;let ne=0,I=0;const Q=new k;for(let ie=0;ie<Y;ie++){const ue=ie*N-V;for(let ke=0;ke<ee;ke++){const Ve=ke*M-z;Q[S]=Ve*v,Q[x]=ue*y,Q[u]=K,c.push(Q.x,Q.y,Q.z),Q[S]=0,Q[x]=0,Q[u]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(ke/C),d.push(1-ie/L),ne+=1}}for(let ie=0;ie<L;ie++)for(let ue=0;ue<C;ue++){const ke=p+ue+ee*ie,Ve=p+ue+ee*(ie+1),$=p+(ue+1)+ee*(ie+1),le=p+(ue+1)+ee*ie;l.push(ke,Ve,le),l.push(Ve,$,le),I+=6}o.addGroup(m,I,E),m+=I,p+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Da(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function En(t){const e={};for(let n=0;n<t.length;n++){const i=Da(t[n]);for(const r in i)e[r]=i[r]}return e}function wE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Bx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const bE={clone:Da,merge:En};var TE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $r extends Ga{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TE,this.fragmentShader=CE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Da(e.uniforms),this.uniformsGroups=wE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let zx=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=rr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Er=new k,h0=new He,p0=new He;class $n extends zx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ko*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,n){return this.getViewBounds(e,h0,p0),n.subVectors(p0,h0)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ao*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ks=-90,Zs=1;class AE extends _n{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $n(Ks,Zs,e,n);r.layers=this.layers,this.add(r);const s=new $n(Ks,Zs,e,n);s.layers=this.layers,this.add(s);const a=new $n(Ks,Zs,e,n);a.layers=this.layers,this.add(a);const o=new $n(Ks,Zs,e,n);o.layers=this.layers,this.add(o);const l=new $n(Ks,Zs,e,n);l.layers=this.layers,this.add(l);const c=new $n(Ks,Zs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===rr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(d,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hx extends Un{constructor(e,n,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Pa,super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class RE extends Ts{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Hi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ke(5,5,5),s=new $r({name:"CubemapFromEquirect",uniforms:Da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:Hr});s.uniforms.tEquirect.value=n;const a=new _e(r,s),o=n.minFilter;return n.minFilter===ms&&(n.minFilter=Hi),new AE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const dd=new k,NE=new k,PE=new tt;class os{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=dd.subVectors(i,n).cross(NE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(dd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PE.getNormalMatrix(e),r=this.coplanarPoint(dd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new pu,Wl=new k;class vp{constructor(e=new os,n=new os,i=new os,r=new os,s=new os,a=new os){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=rr){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],p=r[7],m=r[8],g=r[9],S=r[10],x=r[11],u=r[12],v=r[13],y=r[14],_=r[15];if(i[0].setComponents(l-s,p-c,x-m,_-u).normalize(),i[1].setComponents(l+s,p+c,x+m,_+u).normalize(),i[2].setComponents(l+a,p+h,x+g,_+v).normalize(),i[3].setComponents(l-a,p-h,x-g,_-v).normalize(),i[4].setComponents(l-o,p-d,x-S,_-y).normalize(),n===rr)i[5].setComponents(l+o,p+d,x+S,_+y).normalize();else if(n===jc)i[5].setComponents(o,d,S,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Wl.x=r.normal.x>0?e.max.x:e.min.x,Wl.y=r.normal.y>0?e.max.y:e.min.y,Wl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function LE(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,d=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<d.length;m++){const g=d[p],S=d[m];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++p,d[p]=S)}d.length=p+1;for(let m=0,g=d.length;m<g;m++){const S=d[m];t.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class yi extends si{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,p=n/l,m=[],g=[],S=[],x=[];for(let u=0;u<h;u++){const v=u*p-a;for(let y=0;y<c;y++){const _=y*d-s;g.push(_,-v,0),S.push(0,0,1),x.push(y/o),x.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const y=v+c*u,_=v+c*(u+1),R=v+1+c*(u+1),A=v+1+c*u;m.push(y,_,A),m.push(_,R,A)}this.setIndex(m),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(S,3)),this.setAttribute("uv",new $t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.widthSegments,e.heightSegments)}}var kE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IE=`#ifdef USE_ALPHAHASH
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
#endif`,DE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BE=`#ifdef USE_AOMAP
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
#endif`,zE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HE=`#ifdef USE_BATCHING
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
#endif`,VE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$E=`#ifdef USE_IRIDESCENCE
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
#endif`,XE=`#ifdef USE_BUMPMAP
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
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nw=`#define PI 3.141592653589793
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
} // validated`,iw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rw=`vec3 transformedNormal = objectNormal;
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
#endif`,sw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ow=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cw="gl_FragColor = linearToOutputTexel( gl_FragColor );",uw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dw=`#ifdef USE_ENVMAP
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
#endif`,fw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hw=`#ifdef USE_ENVMAP
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
#endif`,pw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mw=`#ifdef USE_ENVMAP
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
#endif`,gw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_w=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yw=`#ifdef USE_GRADIENTMAP
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
}`,Sw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ew=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ww=`uniform bool receiveShadow;
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
#endif`,bw=`#ifdef USE_ENVMAP
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
#endif`,Tw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Aw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nw=`PhysicalMaterial material;
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
#endif`,Pw=`struct PhysicalMaterial {
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
}`,Lw=`
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
#endif`,kw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Iw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ow=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vw=`#if defined( USE_POINTS_UV )
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
#endif`,Gw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ww=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$w=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qw=`#ifdef USE_MORPHTARGETS
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
#endif`,Yw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t2=`#ifdef USE_NORMALMAP
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
#endif`,n2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v2=`float getShadowMask() {
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
}`,x2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_2=`#ifdef USE_SKINNING
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
#endif`,y2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S2=`#ifdef USE_SKINNING
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
#endif`,M2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T2=`#ifdef USE_TRANSMISSION
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
#endif`,C2=`#ifdef USE_TRANSMISSION
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
#endif`,A2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k2=`uniform sampler2D t2D;
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
}`,I2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F2=`#include <common>
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
}`,B2=`#if DEPTH_PACKING == 3200
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
}`,z2=`#define DISTANCE
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
}`,H2=`#define DISTANCE
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
}`,V2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j2=`uniform float scale;
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
}`,W2=`uniform vec3 diffuse;
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
}`,$2=`#include <common>
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
}`,X2=`uniform vec3 diffuse;
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
}`,q2=`#define LAMBERT
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
}`,Y2=`#define LAMBERT
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
}`,K2=`#define MATCAP
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
}`,Z2=`#define MATCAP
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
}`,Q2=`#define NORMAL
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
}`,J2=`#define NORMAL
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
}`,eb=`#define PHONG
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
}`,tb=`#define PHONG
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
}`,nb=`#define STANDARD
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
}`,ib=`#define STANDARD
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
}`,rb=`#define TOON
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
}`,sb=`#define TOON
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
}`,ab=`uniform float size;
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
}`,ob=`uniform vec3 diffuse;
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
}`,lb=`#include <common>
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
}`,cb=`uniform vec3 color;
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
}`,ub=`uniform float rotation;
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
}`,db=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:kE,alphahash_pars_fragment:IE,alphamap_fragment:DE,alphamap_pars_fragment:UE,alphatest_fragment:OE,alphatest_pars_fragment:FE,aomap_fragment:BE,aomap_pars_fragment:zE,batching_pars_vertex:HE,batching_vertex:VE,begin_vertex:GE,beginnormal_vertex:jE,bsdfs:WE,iridescence_fragment:$E,bumpmap_pars_fragment:XE,clipping_planes_fragment:qE,clipping_planes_pars_fragment:YE,clipping_planes_pars_vertex:KE,clipping_planes_vertex:ZE,color_fragment:QE,color_pars_fragment:JE,color_pars_vertex:ew,color_vertex:tw,common:nw,cube_uv_reflection_fragment:iw,defaultnormal_vertex:rw,displacementmap_pars_vertex:sw,displacementmap_vertex:aw,emissivemap_fragment:ow,emissivemap_pars_fragment:lw,colorspace_fragment:cw,colorspace_pars_fragment:uw,envmap_fragment:dw,envmap_common_pars_fragment:fw,envmap_pars_fragment:hw,envmap_pars_vertex:pw,envmap_physical_pars_fragment:bw,envmap_vertex:mw,fog_vertex:gw,fog_pars_vertex:vw,fog_fragment:xw,fog_pars_fragment:_w,gradientmap_pars_fragment:yw,lightmap_pars_fragment:Sw,lights_lambert_fragment:Mw,lights_lambert_pars_fragment:Ew,lights_pars_begin:ww,lights_toon_fragment:Tw,lights_toon_pars_fragment:Cw,lights_phong_fragment:Aw,lights_phong_pars_fragment:Rw,lights_physical_fragment:Nw,lights_physical_pars_fragment:Pw,lights_fragment_begin:Lw,lights_fragment_maps:kw,lights_fragment_end:Iw,logdepthbuf_fragment:Dw,logdepthbuf_pars_fragment:Uw,logdepthbuf_pars_vertex:Ow,logdepthbuf_vertex:Fw,map_fragment:Bw,map_pars_fragment:zw,map_particle_fragment:Hw,map_particle_pars_fragment:Vw,metalnessmap_fragment:Gw,metalnessmap_pars_fragment:jw,morphinstance_vertex:Ww,morphcolor_vertex:$w,morphnormal_vertex:Xw,morphtarget_pars_vertex:qw,morphtarget_vertex:Yw,normal_fragment_begin:Kw,normal_fragment_maps:Zw,normal_pars_fragment:Qw,normal_pars_vertex:Jw,normal_vertex:e2,normalmap_pars_fragment:t2,clearcoat_normal_fragment_begin:n2,clearcoat_normal_fragment_maps:i2,clearcoat_pars_fragment:r2,iridescence_pars_fragment:s2,opaque_fragment:a2,packing:o2,premultiplied_alpha_fragment:l2,project_vertex:c2,dithering_fragment:u2,dithering_pars_fragment:d2,roughnessmap_fragment:f2,roughnessmap_pars_fragment:h2,shadowmap_pars_fragment:p2,shadowmap_pars_vertex:m2,shadowmap_vertex:g2,shadowmask_pars_fragment:v2,skinbase_vertex:x2,skinning_pars_vertex:_2,skinning_vertex:y2,skinnormal_vertex:S2,specularmap_fragment:M2,specularmap_pars_fragment:E2,tonemapping_fragment:w2,tonemapping_pars_fragment:b2,transmission_fragment:T2,transmission_pars_fragment:C2,uv_pars_fragment:A2,uv_pars_vertex:R2,uv_vertex:N2,worldpos_vertex:P2,background_vert:L2,background_frag:k2,backgroundCube_vert:I2,backgroundCube_frag:D2,cube_vert:U2,cube_frag:O2,depth_vert:F2,depth_frag:B2,distanceRGBA_vert:z2,distanceRGBA_frag:H2,equirect_vert:V2,equirect_frag:G2,linedashed_vert:j2,linedashed_frag:W2,meshbasic_vert:$2,meshbasic_frag:X2,meshlambert_vert:q2,meshlambert_frag:Y2,meshmatcap_vert:K2,meshmatcap_frag:Z2,meshnormal_vert:Q2,meshnormal_frag:J2,meshphong_vert:eb,meshphong_frag:tb,meshphysical_vert:nb,meshphysical_frag:ib,meshtoon_vert:rb,meshtoon_frag:sb,points_vert:ab,points_frag:ob,shadow_vert:lb,shadow_frag:cb,sprite_vert:ub,sprite_frag:db},pe={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Bi={basic:{uniforms:En([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:En([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ot(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:En([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:En([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:En([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ot(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:En([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:En([pe.points,pe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:En([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:En([pe.common,pe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:En([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:En([pe.sprite,pe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:En([pe.common,pe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:En([pe.lights,pe.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Bi.physical={uniforms:En([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const $l={r:0,b:0,g:0},ts=new Wi,fb=new Lt;function hb(t,e,n,i,r,s,a){const o=new ot(0);let l=s===!0?0:1,c,h,d=null,p=0,m=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y)),y}function S(v){let y=!1;const _=g(v);_===null?u(o,l):_&&_.isColor&&(u(_,1),y=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(v,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===fu)?(h===void 0&&(h=new _e(new Ke(1,1,1),new $r({name:"BackgroundCubeMaterial",uniforms:Da(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ts.copy(y.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fb.makeRotationFromEuler(ts)),h.material.toneMapped=vt.getTransfer(_.colorSpace)!==At,(d!==_||p!==_.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,d=_,p=_.version,m=t.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new _e(new yi(2,2),new $r({name:"BackgroundMaterial",uniforms:Da(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=vt.getTransfer(_.colorSpace)!==At,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||p!==_.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,p=_.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,y){v.getRGB($l,Bx(t)),i.buffers.color.setClear($l.r,$l.g,$l.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(o,l)},render:S,addToRenderList:x}}function pb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(M,N,z,V,K){let ee=!1;const Y=d(V,z,N);s!==Y&&(s=Y,c(s.object)),ee=m(M,V,z,K),ee&&g(M,V,z,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,_(M,N,z,V),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function h(M){return t.deleteVertexArray(M)}function d(M,N,z){const V=z.wireframe===!0;let K=i[M.id];K===void 0&&(K={},i[M.id]=K);let ee=K[N.id];ee===void 0&&(ee={},K[N.id]=ee);let Y=ee[V];return Y===void 0&&(Y=p(l()),ee[V]=Y),Y}function p(M){const N=[],z=[],V=[];for(let K=0;K<n;K++)N[K]=0,z[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:V,object:M,attributes:{},index:null}}function m(M,N,z,V){const K=s.attributes,ee=N.attributes;let Y=0;const ne=z.getAttributes();for(const I in ne)if(ne[I].location>=0){const ie=K[I];let ue=ee[I];if(ue===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ie===void 0||ie.attribute!==ue||ue&&ie.data!==ue.data)return!0;Y++}return s.attributesNum!==Y||s.index!==V}function g(M,N,z,V){const K={},ee=N.attributes;let Y=0;const ne=z.getAttributes();for(const I in ne)if(ne[I].location>=0){let ie=ee[I];ie===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));const ue={};ue.attribute=ie,ie&&ie.data&&(ue.data=ie.data),K[I]=ue,Y++}s.attributes=K,s.attributesNum=Y,s.index=V}function S(){const M=s.newAttributes;for(let N=0,z=M.length;N<z;N++)M[N]=0}function x(M){u(M,0)}function u(M,N){const z=s.newAttributes,V=s.enabledAttributes,K=s.attributeDivisors;z[M]=1,V[M]===0&&(t.enableVertexAttribArray(M),V[M]=1),K[M]!==N&&(t.vertexAttribDivisor(M,N),K[M]=N)}function v(){const M=s.newAttributes,N=s.enabledAttributes;for(let z=0,V=N.length;z<V;z++)N[z]!==M[z]&&(t.disableVertexAttribArray(z),N[z]=0)}function y(M,N,z,V,K,ee,Y){Y===!0?t.vertexAttribIPointer(M,N,z,K,ee):t.vertexAttribPointer(M,N,z,V,K,ee)}function _(M,N,z,V){S();const K=V.attributes,ee=z.getAttributes(),Y=N.defaultAttributeValues;for(const ne in ee){const I=ee[ne];if(I.location>=0){let Q=K[ne];if(Q===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const ie=Q.normalized,ue=Q.itemSize,ke=e.get(Q);if(ke===void 0)continue;const Ve=ke.buffer,$=ke.type,le=ke.bytesPerElement,xe=$===t.INT||$===t.UNSIGNED_INT||Q.gpuType===lp;if(Q.isInterleavedBufferAttribute){const de=Q.data,We=de.stride,Be=Q.offset;if(de.isInstancedInterleavedBuffer){for(let qe=0;qe<I.locationSize;qe++)u(I.location+qe,de.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let qe=0;qe<I.locationSize;qe++)x(I.location+qe);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let qe=0;qe<I.locationSize;qe++)y(I.location+qe,ue/I.locationSize,$,ie,We*le,(Be+ue/I.locationSize*qe)*le,xe)}else{if(Q.isInstancedBufferAttribute){for(let de=0;de<I.locationSize;de++)u(I.location+de,Q.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let de=0;de<I.locationSize;de++)x(I.location+de);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let de=0;de<I.locationSize;de++)y(I.location+de,ue/I.locationSize,$,ie,ue*le,ue/I.locationSize*de*le,xe)}}else if(Y!==void 0){const ie=Y[ne];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(I.location,ie);break;case 3:t.vertexAttrib3fv(I.location,ie);break;case 4:t.vertexAttrib4fv(I.location,ie);break;default:t.vertexAttrib1fv(I.location,ie)}}}}v()}function R(){L();for(const M in i){const N=i[M];for(const z in N){const V=N[z];for(const K in V)h(V[K].object),delete V[K];delete N[z]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const N=i[M.id];for(const z in N){const V=N[z];for(const K in V)h(V[K].object),delete V[K];delete N[z]}delete i[M.id]}function C(M){for(const N in i){const z=i[N];if(z[M.id]===void 0)continue;const V=z[M.id];for(const K in V)h(V[K].object),delete V[K];delete z[M.id]}}function L(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:x,disableUnusedAttributes:v}}function mb(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,d){d!==0&&(t.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];n.update(m,i,1)}function l(c,h,d,p){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,d);let g=0;for(let S=0;S<d;S++)g+=h[S]*p[S];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function gb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Ei&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===il&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==dr&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ir&&!L)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:x,maxAttributes:u,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:R,maxSamples:A}}function vb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new os,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||i!==0||r;return r=p,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){n=h(d,p,0)},this.setState=function(d,p,m){const g=d.clippingPlanes,S=d.clipIntersection,x=d.clipShadows,u=t.get(d);if(!r||g===null||g.length===0||s&&!x)s?h(null):c();else{const v=s?0:i,y=v*4;let _=u.clippingState||null;l.value=_,_=h(g,p,y,m);for(let R=0;R!==y;++R)_[R]=n[R];u.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,m,g){const S=d!==null?d.length:0;let x=null;if(S!==0){if(x=l.value,g!==!0||x===null){const u=m+S*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(x===null||x.length<u)&&(x=new Float32Array(u));for(let y=0,_=m;y!==S;++y,_+=4)a.copy(d[y]).applyMatrix4(v,o),a.normal.toArray(x,_),x[_+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}function xb(t){let e=new WeakMap;function n(a,o){return o===Lf?a.mapping=Pa:o===kf&&(a.mapping=La),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lf||o===kf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new RE(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _b extends zx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fa=4,m0=[.125,.215,.35,.446,.526,.582],us=20,fd=new _b,g0=new ot;let hd=null,pd=0,md=0,gd=!1;const ls=(1+Math.sqrt(5))/2,Qs=1/ls,v0=[new k(-ls,Qs,0),new k(ls,Qs,0),new k(-Qs,0,ls),new k(Qs,0,ls),new k(0,ls,-Qs),new k(0,ls,Qs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class x0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hd,pd,md),this._renderer.xr.enabled=gd,e.scissorTest=!1,Xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Pa||e.mapping===La?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:il,format:Ei,colorSpace:za,depthBuffer:!1},r=_0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yb(s)),this._blurMaterial=Sb(s,e,n)}return r}_compileMaterial(e){const n=new _e(this._lodPlanes[0],e);this._renderer.compile(n,fd)}_sceneToCubeUV(e,n,i,r){const o=new $n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(g0),h.toneMapping=Vr,h.autoClear=!1;const m=new gi({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),g=new _e(new Ke,m);let S=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,S=!0):(m.color.copy(g0),S=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const y=this._cubeSize;Xl(r,v*y,u>2?y:0,y,y),h.setRenderTarget(r),S&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Pa||e.mapping===La;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=S0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _e(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Xl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,fd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=v0[(r-s-1)%v0.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new _e(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*us-1),S=s/g,x=isFinite(s)?1+Math.floor(h*S):us;x>us&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${us}`);const u=[];let v=0;for(let C=0;C<us;++C){const L=C/S,E=Math.exp(-L*L/2);u.push(E),C===0?v+=E:C<x&&(v+=2*E)}for(let C=0;C<u.length;C++)u[C]=u[C]/v;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-i;const _=this._sizeLods[r],R=3*_*(r>y-fa?r-y+fa:0),A=4*(this._cubeSize-_);Xl(n,R,A,3*_,2*_),l.setRenderTarget(n),l.render(d,fd)}}function yb(t){const e=[],n=[],i=[];let r=t;const s=t-fa+1+m0.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-fa?l=m0[a-t+fa-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,S=3,x=2,u=1,v=new Float32Array(S*g*m),y=new Float32Array(x*g*m),_=new Float32Array(u*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,L=A>2?0:-1,E=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];v.set(E,S*g*A),y.set(p,x*g*A);const M=[A,A,A,A,A,A];_.set(M,u*g*A)}const R=new si;R.setAttribute("position",new ji(v,S)),R.setAttribute("uv",new ji(y,x)),R.setAttribute("faceIndex",new ji(_,u)),e.push(R),r>fa&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _0(t,e,n){const i=new Ts(t,e,n);return i.texture.mapping=fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Sb(t,e,n){const i=new Float32Array(us),r=new k(0,1,0);return new $r({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function y0(){return new $r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function S0(){return new $r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function xp(){return`

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
	`}function Mb(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Lf||l===kf,h=l===Pa||l===La;if(c||h){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return n===null&&(n=new x0(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(n===null&&(n=new x0(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Eb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&go("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function wb(t,e,n,i){const r={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const S=p.morphAttributes[g];for(let x=0,u=S.length;x<u;x++)e.remove(S[x])}p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(d){const p=d.attributes;for(const g in p)e.update(p[g],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const S=m[g];for(let x=0,u=S.length;x<u;x++)e.update(S[x],t.ARRAY_BUFFER)}}function c(d){const p=[],m=d.index,g=d.attributes.position;let S=0;if(m!==null){const v=m.array;S=m.version;for(let y=0,_=v.length;y<_;y+=3){const R=v[y+0],A=v[y+1],C=v[y+2];p.push(R,A,A,C,C,R)}}else if(g!==void 0){const v=g.array;S=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const R=y+0,A=y+1,C=y+2;p.push(R,A,A,C,C,R)}}else return;const x=new(kx(p)?Fx:Ox)(p,1);x.version=S;const u=s.get(d);u&&e.remove(u),s.set(d,x)}function h(d){const p=s.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function bb(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,m){t.drawElements(i,m,s,p*a),n.update(m,i,1)}function c(p,m,g){g!==0&&(t.drawElementsInstanced(i,m,s,p*a,g),n.update(m,i,g))}function h(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,p,0,g);let x=0;for(let u=0;u<g;u++)x+=m[u];n.update(x,i,1)}function d(p,m,g,S){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let u=0;u<p.length;u++)c(p[u]/a,m[u],S[u]);else{x.multiDrawElementsInstancedWEBGL(i,m,0,s,p,0,S,0,g);let u=0;for(let v=0;v<g;v++)u+=m[v]*S[v];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Tb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Cb(t,e,n){const i=new WeakMap,r=new Rt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==d){let M=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),S===!0&&(_=2),x===!0&&(_=3);let R=o.attributes.position.count*_,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*A*4*d),L=new Dx(C,R,A,d);L.type=ir,L.needsUpdate=!0;const E=_*4;for(let N=0;N<d;N++){const z=u[N],V=v[N],K=y[N],ee=R*A*4*N;for(let Y=0;Y<z.count;Y++){const ne=Y*E;g===!0&&(r.fromBufferAttribute(z,Y),C[ee+ne+0]=r.x,C[ee+ne+1]=r.y,C[ee+ne+2]=r.z,C[ee+ne+3]=0),S===!0&&(r.fromBufferAttribute(V,Y),C[ee+ne+4]=r.x,C[ee+ne+5]=r.y,C[ee+ne+6]=r.z,C[ee+ne+7]=0),x===!0&&(r.fromBufferAttribute(K,Y),C[ee+ne+8]=r.x,C[ee+ne+9]=r.y,C[ee+ne+10]=r.z,C[ee+ne+11]=K.itemSize===4?r.w:1)}}p={count:d,texture:L,size:new He(R,A)},i.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];const S=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function Ab(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Gx extends Un{constructor(e,n,i,r,s,a,o,l,c,h=Sa){if(h!==Sa&&h!==Ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Sa&&(i=bs),i===void 0&&h===Ia&&(i=ka),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Ti,this.minFilter=l!==void 0?l:Ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const jx=new Un,M0=new Gx(1,1),Wx=new Dx,$x=new hE,Xx=new Hx,E0=[],w0=[],b0=new Float32Array(16),T0=new Float32Array(9),C0=new Float32Array(4);function ja(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=E0[r];if(s===void 0&&(s=new Float32Array(r),E0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mu(t,e){let n=w0[e];n===void 0&&(n=new Int32Array(e),w0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Rb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2fv(this.addr,e),Qt(n,e)}}function Pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;t.uniform3fv(this.addr,e),Qt(n,e)}}function Lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4fv(this.addr,e),Qt(n,e)}}function kb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,i))return;C0.set(i),t.uniformMatrix2fv(this.addr,!1,C0),Qt(n,i)}}function Ib(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,i))return;T0.set(i),t.uniformMatrix3fv(this.addr,!1,T0),Qt(n,i)}}function Db(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,i))return;b0.set(i),t.uniformMatrix4fv(this.addr,!1,b0),Qt(n,i)}}function Ub(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2iv(this.addr,e),Qt(n,e)}}function Fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3iv(this.addr,e),Qt(n,e)}}function Bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4iv(this.addr,e),Qt(n,e)}}function zb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2uiv(this.addr,e),Qt(n,e)}}function Vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3uiv(this.addr,e),Qt(n,e)}}function Gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4uiv(this.addr,e),Qt(n,e)}}function jb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(M0.compareFunction=Lx,s=M0):s=jx,n.setTexture2D(e||s,r)}function Wb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$x,r)}function $b(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Xx,r)}function Xb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Wx,r)}function qb(t){switch(t){case 5126:return Rb;case 35664:return Nb;case 35665:return Pb;case 35666:return Lb;case 35674:return kb;case 35675:return Ib;case 35676:return Db;case 5124:case 35670:return Ub;case 35667:case 35671:return Ob;case 35668:case 35672:return Fb;case 35669:case 35673:return Bb;case 5125:return zb;case 36294:return Hb;case 36295:return Vb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return Xb}}function Yb(t,e){t.uniform1fv(this.addr,e)}function Kb(t,e){const n=ja(e,this.size,2);t.uniform2fv(this.addr,n)}function Zb(t,e){const n=ja(e,this.size,3);t.uniform3fv(this.addr,n)}function Qb(t,e){const n=ja(e,this.size,4);t.uniform4fv(this.addr,n)}function Jb(t,e){const n=ja(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function eT(t,e){const n=ja(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function tT(t,e){const n=ja(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function nT(t,e){t.uniform1iv(this.addr,e)}function iT(t,e){t.uniform2iv(this.addr,e)}function rT(t,e){t.uniform3iv(this.addr,e)}function sT(t,e){t.uniform4iv(this.addr,e)}function aT(t,e){t.uniform1uiv(this.addr,e)}function oT(t,e){t.uniform2uiv(this.addr,e)}function lT(t,e){t.uniform3uiv(this.addr,e)}function cT(t,e){t.uniform4uiv(this.addr,e)}function uT(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||jx,s[a])}function dT(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||$x,s[a])}function fT(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Xx,s[a])}function hT(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Wx,s[a])}function pT(t){switch(t){case 5126:return Yb;case 35664:return Kb;case 35665:return Zb;case 35666:return Qb;case 35674:return Jb;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return aT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return hT}}class mT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=qb(n.type)}}class gT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pT(n.type)}}class vT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function A0(t,e){t.seq.push(e),t.map[e.id]=e}function xT(t,e,n){const i=t.name,r=i.length;for(vd.lastIndex=0;;){const s=vd.exec(i),a=vd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){A0(n,c===void 0?new mT(o,t,e):new gT(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new vT(o),A0(n,d)),n=d}}}class xc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);xT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function R0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const _T=37297;let yT=0;function ST(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const N0=new tt;function MT(t){vt._getMatrix(N0,vt.workingColorSpace,t);const e=`mat3( ${N0.elements.map(n=>n.toFixed(4))} )`;switch(vt.getTransfer(t)){case hu:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function P0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ST(t.getShaderSource(e),a)}else return r}function ET(t,e){const n=MT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function wT(t,e){let n;switch(e){case TM:n="Linear";break;case CM:n="Reinhard";break;case AM:n="Cineon";break;case _x:n="ACESFilmic";break;case NM:n="AgX";break;case PM:n="Neutral";break;case RM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ql=new k;function bT(){vt.getLuminanceCoefficients(ql);const t=ql.x.toFixed(4),e=ql.y.toFixed(4),n=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function CT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function AT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function vo(t){return t!==""}function L0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RT=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(t){return t.replace(RT,PT)}const NT=new Map;function PT(t,e){let n=nt[e];if(n===void 0){const i=NT.get(e);if(i!==void 0)n=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lh(n)}const LT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I0(t){return t.replace(LT,kT)}function kT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function D0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function IT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===gx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===vx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function DT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Pa:case La:e="ENVMAP_TYPE_CUBE";break;case fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case La:e="ENVMAP_MODE_REFRACTION";break}return e}function OT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case xx:e="ENVMAP_BLENDING_MULTIPLY";break;case wM:e="ENVMAP_BLENDING_MIX";break;case bM:e="ENVMAP_BLENDING_ADD";break}return e}function FT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function BT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=IT(n),c=DT(n),h=UT(n),d=OT(n),p=FT(n),m=TT(n),g=CT(s),S=r.createProgram();let x,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(vo).join(`
`),x.length>0&&(x+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(vo).join(`
`),u.length>0&&(u+=`
`)):(x=[D0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),u=[D0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vr?"#define TONE_MAPPING":"",n.toneMapping!==Vr?nt.tonemapping_pars_fragment:"",n.toneMapping!==Vr?wT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,ET("linearToOutputTexel",n.outputColorSpace),bT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vo).join(`
`)),a=lh(a),a=L0(a,n),a=k0(a,n),o=lh(o),o=L0(o,n),o=k0(o,n),a=I0(a),o=I0(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,u=["#define varying in",n.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=v+x+a,_=v+u+o,R=R0(r,r.VERTEX_SHADER,y),A=R0(r,r.FRAGMENT_SHADER,_);r.attachShader(S,R),r.attachShader(S,A),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(N){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(S).trim(),V=r.getShaderInfoLog(R).trim(),K=r.getShaderInfoLog(A).trim();let ee=!0,Y=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,R,A);else{const ne=P0(r,R,"vertex"),I=P0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+ne+`
`+I)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(V===""||K==="")&&(Y=!1);Y&&(N.diagnostics={runnable:ee,programLog:z,vertexShader:{log:V,prefix:x},fragmentShader:{log:K,prefix:u}})}r.deleteShader(R),r.deleteShader(A),L=new xc(r,S),E=AT(r,S)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,_T)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=A,this}let zT=0;class HT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new VT(e),n.set(e,i)),i}}class VT{constructor(e){this.id=zT++,this.code=e,this.usedTimes=0}}function GT(t,e,n,i,r,s,a){const o=new gp,l=new HT,c=new Set,h=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return c.add(E),E===0?"uv":`uv${E}`}function x(E,M,N,z,V){const K=z.fog,ee=V.geometry,Y=E.isMeshStandardMaterial?z.environment:null,ne=(E.isMeshStandardMaterial?n:e).get(E.envMap||Y),I=ne&&ne.mapping===fu?ne.image.height:null,Q=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ie=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ue=ie!==void 0?ie.length:0;let ke=0;ee.morphAttributes.position!==void 0&&(ke=1),ee.morphAttributes.normal!==void 0&&(ke=2),ee.morphAttributes.color!==void 0&&(ke=3);let Ve,$,le,xe;if(Q){const et=Bi[Q];Ve=et.vertexShader,$=et.fragmentShader}else Ve=E.vertexShader,$=E.fragmentShader,l.update(E),le=l.getVertexShaderID(E),xe=l.getFragmentShaderID(E);const de=t.getRenderTarget(),We=t.state.buffers.depth.getReversed(),Be=V.isInstancedMesh===!0,qe=V.isBatchedMesh===!0,mt=!!E.map,ft=!!E.matcap,Dt=!!ne,O=!!E.aoMap,cn=!!E.lightMap,at=!!E.bumpMap,st=!!E.normalMap,ze=!!E.displacementMap,yt=!!E.emissiveMap,Ie=!!E.metalnessMap,P=!!E.roughnessMap,b=E.anisotropy>0,G=E.clearcoat>0,Z=E.dispersion>0,q=E.iridescence>0,X=E.sheen>0,De=E.transmission>0,me=b&&!!E.anisotropyMap,ye=G&&!!E.clearcoatMap,ct=G&&!!E.clearcoatNormalMap,ae=G&&!!E.clearcoatRoughnessMap,Me=q&&!!E.iridescenceMap,Ge=q&&!!E.iridescenceThicknessMap,je=X&&!!E.sheenColorMap,Ee=X&&!!E.sheenRoughnessMap,Ce=!!E.specularMap,Je=!!E.specularColorMap,Mt=!!E.specularIntensityMap,w=De&&!!E.transmissionMap,F=De&&!!E.thicknessMap,B=!!E.gradientMap,H=!!E.alphaMap,te=E.alphaTest>0,re=!!E.alphaHash,we=!!E.extensions;let bt=Vr;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(bt=t.toneMapping);const Nt={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:$,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:qe,batchingColor:qe&&V._colorsTexture!==null,instancing:Be,instancingColor:Be&&V.instanceColor!==null,instancingMorph:Be&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:za,alphaToCoverage:!!E.alphaToCoverage,map:mt,matcap:ft,envMap:Dt,envMapMode:Dt&&ne.mapping,envMapCubeUVHeight:I,aoMap:O,lightMap:cn,bumpMap:at,normalMap:st,displacementMap:p&&ze,emissiveMap:yt,normalMapObjectSpace:st&&E.normalMapType===DM,normalMapTangentSpace:st&&E.normalMapType===Px,metalnessMap:Ie,roughnessMap:P,anisotropy:b,anisotropyMap:me,clearcoat:G,clearcoatMap:ye,clearcoatNormalMap:ct,clearcoatRoughnessMap:ae,dispersion:Z,iridescence:q,iridescenceMap:Me,iridescenceThicknessMap:Ge,sheen:X,sheenColorMap:je,sheenRoughnessMap:Ee,specularMap:Ce,specularColorMap:Je,specularIntensityMap:Mt,transmission:De,transmissionMap:w,thicknessMap:F,gradientMap:B,opaque:E.transparent===!1&&E.blending===ya&&E.alphaToCoverage===!1,alphaMap:H,alphaTest:te,alphaHash:re,combine:E.combine,mapUv:mt&&S(E.map.channel),aoMapUv:O&&S(E.aoMap.channel),lightMapUv:cn&&S(E.lightMap.channel),bumpMapUv:at&&S(E.bumpMap.channel),normalMapUv:st&&S(E.normalMap.channel),displacementMapUv:ze&&S(E.displacementMap.channel),emissiveMapUv:yt&&S(E.emissiveMap.channel),metalnessMapUv:Ie&&S(E.metalnessMap.channel),roughnessMapUv:P&&S(E.roughnessMap.channel),anisotropyMapUv:me&&S(E.anisotropyMap.channel),clearcoatMapUv:ye&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:ct&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:je&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&S(E.sheenRoughnessMap.channel),specularMapUv:Ce&&S(E.specularMap.channel),specularColorMapUv:Je&&S(E.specularColorMap.channel),specularIntensityMapUv:Mt&&S(E.specularIntensityMap.channel),transmissionMapUv:w&&S(E.transmissionMap.channel),thicknessMapUv:F&&S(E.thicknessMap.channel),alphaMapUv:H&&S(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(st||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ee.attributes.uv&&(mt||H),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:We,skinning:V.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:bt,decodeVideoTexture:mt&&E.map.isVideoTexture===!0&&vt.getTransfer(E.map.colorSpace)===At,decodeVideoTextureEmissive:yt&&E.emissiveMap.isVideoTexture===!0&&vt.getTransfer(E.emissiveMap.colorSpace)===At,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===er,flipSided:E.side===Dn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:we&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&E.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)M.push(N),M.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(v(M,E),y(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const M=g[E.type];let N;if(M){const z=Bi[M];N=bE.clone(z.uniforms)}else N=E.uniforms;return N}function R(E,M){let N;for(let z=0,V=h.length;z<V;z++){const K=h[z];if(K.cacheKey===M){N=K,++N.usedTimes;break}}return N===void 0&&(N=new BT(t,M,E,s),h.push(N)),N}function A(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function L(){l.dispose()}return{getParameters:x,getProgramCacheKey:u,getUniforms:_,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:L}}function jT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function WT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function U0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function O0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,p,m,g,S,x){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:S,group:x},t[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=S,u.group=x),e++,u}function o(d,p,m,g,S,x){const u=a(d,p,m,g,S,x);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,p,m,g,S,x){const u=a(d,p,m,g,S,x);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,p){n.length>1&&n.sort(d||WT),i.length>1&&i.sort(p||U0),r.length>1&&r.sort(p||U0)}function h(){for(let d=e,p=t.length;d<p;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function $T(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new O0,t.set(i,[a])):r>=s.length?(a=new O0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function XT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new ot};break;case"SpotLight":n={position:new k,direction:new k,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function qT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let YT=0;function KT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZT(t){const e=new XT,n=qT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new Lt,a=new Lt;function o(c){let h=0,d=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,S=0,x=0,u=0,v=0,y=0,_=0,R=0,A=0,C=0;c.sort(KT);for(let E=0,M=c.length;E<M;E++){const N=c[E],z=N.color,V=N.intensity,K=N.distance,ee=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=z.r*V,d+=z.g*V,p+=z.b*V;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],V);C++}else if(N.isDirectionalLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ne=N.shadow,I=n.get(N);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=N.shadow.matrix,v++}i.directional[m]=Y,m++}else if(N.isSpotLight){const Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(z).multiplyScalar(V),Y.distance=K,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[S]=Y;const ne=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,ne.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[S]=ne.matrix,N.castShadow){const I=n.get(N);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,i.spotShadow[S]=I,i.spotShadowMap[S]=ee,_++}S++}else if(N.isRectAreaLight){const Y=e.get(N);Y.color.copy(z).multiplyScalar(V),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[x]=Y,x++}else if(N.isPointLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const ne=N.shadow,I=n.get(N);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,I.shadowCameraNear=ne.camera.near,I.shadowCameraFar=ne.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=N.shadow.matrix,y++}i.point[g]=Y,g++}else if(N.isHemisphereLight){const Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(V),Y.groundColor.copy(N.groundColor).multiplyScalar(V),i.hemi[u]=Y,u++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const L=i.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==S||L.rectAreaLength!==x||L.hemiLength!==u||L.numDirectionalShadows!==v||L.numPointShadows!==y||L.numSpotShadows!==_||L.numSpotMaps!==R||L.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=x,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,L.directionalLength=m,L.pointLength=g,L.spotLength=S,L.rectAreaLength=x,L.hemiLength=u,L.numDirectionalShadows=v,L.numPointShadows=y,L.numSpotShadows=_,L.numSpotMaps=R,L.numLightProbes=C,i.version=YT++)}function l(c,h){let d=0,p=0,m=0,g=0,S=0;const x=h.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const y=c[u];if(y.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(x),d++}else if(y.isSpotLight){const _=i.spot[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(x),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(x),m++}else if(y.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(x),a.identity(),s.copy(y.matrixWorld),s.premultiply(x),a.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(x),p++}else if(y.isHemisphereLight){const _=i.hemi[S];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(x),S++}}}return{setup:o,setupView:l,state:i}}function F0(t){const e=new ZT(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function QT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new F0(t),e.set(r,[o])):s>=a.length?(o=new F0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class JT extends Ga{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eC extends Ga{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nC=`uniform sampler2D shadow_pass;
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
}`;function iC(t,e,n){let i=new vp;const r=new He,s=new He,a=new Rt,o=new JT({depthPacking:IM}),l=new eC,c={},h=n.maxTextureSize,d={[Wr]:Dn,[Dn]:Wr,[er]:er},p=new $r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:tC,fragmentShader:nC}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new si;g.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new _e(g,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gx;let u=this.type;this.render=function(A,C,L){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Hr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=u!==Zi&&this.type===Zi,K=u===Zi&&this.type!==Zi;for(let ee=0,Y=A.length;ee<Y;ee++){const ne=A[ee],I=ne.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const Q=I.getFrameExtents();if(r.multiply(Q),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Q.x),r.x=s.x*Q.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Q.y),r.y=s.y*Q.y,I.mapSize.y=s.y)),I.map===null||V===!0||K===!0){const ue=this.type!==Zi?{minFilter:Ti,magFilter:Ti}:{};I.map!==null&&I.map.dispose(),I.map=new Ts(r.x,r.y,ue),I.map.texture.name=ne.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const ie=I.getViewportCount();for(let ue=0;ue<ie;ue++){const ke=I.getViewport(ue);a.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),z.viewport(a),I.updateMatrices(ne,ue),i=I.getFrustum(),_(C,L,I.camera,ne,this.type)}I.isPointLightShadow!==!0&&this.type===Zi&&v(I,L),I.needsUpdate=!1}u=this.type,x.needsUpdate=!1,t.setRenderTarget(E,M,N)};function v(A,C){const L=e.update(S);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ts(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,L,p,S,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,L,m,S,null)}function y(A,C,L,E){let M=null;const N=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)M=N;else if(M=L.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=M.uuid,V=C.uuid;let K=c[z];K===void 0&&(K={},c[z]=K);let ee=K[V];ee===void 0&&(ee=M.clone(),K[V]=ee,C.addEventListener("dispose",R)),M=ee}if(M.visible=C.visible,M.wireframe=C.wireframe,E===Zi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=t.properties.get(M);z.light=L}return M}function _(A,C,L,E,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Zi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const V=e.update(A),K=A.material;if(Array.isArray(K)){const ee=V.groups;for(let Y=0,ne=ee.length;Y<ne;Y++){const I=ee[Y],Q=K[I.materialIndex];if(Q&&Q.visible){const ie=y(A,Q,E,M);A.onBeforeShadow(t,A,C,L,V,ie,I),t.renderBufferDirect(L,null,V,ie,A,I),A.onAfterShadow(t,A,C,L,V,ie,I)}}}else if(K.visible){const ee=y(A,K,E,M);A.onBeforeShadow(t,A,C,L,V,ee,null),t.renderBufferDirect(L,null,V,ee,A,null),A.onAfterShadow(t,A,C,L,V,ee,null)}}const z=A.children;for(let V=0,K=z.length;V<K;V++)_(z[V],C,L,E,M)}function R(A){A.target.removeEventListener("dispose",R);for(const L in c){const E=c[L],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const rC={[bf]:Tf,[Cf]:Nf,[Af]:Pf,[Na]:Rf,[Tf]:bf,[Nf]:Cf,[Pf]:Af,[Rf]:Na};function sC(t,e){function n(){let w=!1;const F=new Rt;let B=null;const H=new Rt(0,0,0,0);return{setMask:function(te){B!==te&&!w&&(t.colorMask(te,te,te,te),B=te)},setLocked:function(te){w=te},setClear:function(te,re,we,bt,Nt){Nt===!0&&(te*=bt,re*=bt,we*=bt),F.set(te,re,we,bt),H.equals(F)===!1&&(t.clearColor(te,re,we,bt),H.copy(F))},reset:function(){w=!1,B=null,H.set(-1,0,0,0)}}}function i(){let w=!1,F=!1,B=null,H=null,te=null;return{setReversed:function(re){if(F!==re){const we=e.get("EXT_clip_control");F?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT);const bt=te;te=null,this.setClear(bt)}F=re},getReversed:function(){return F},setTest:function(re){re?de(t.DEPTH_TEST):We(t.DEPTH_TEST)},setMask:function(re){B!==re&&!w&&(t.depthMask(re),B=re)},setFunc:function(re){if(F&&(re=rC[re]),H!==re){switch(re){case bf:t.depthFunc(t.NEVER);break;case Tf:t.depthFunc(t.ALWAYS);break;case Cf:t.depthFunc(t.LESS);break;case Na:t.depthFunc(t.LEQUAL);break;case Af:t.depthFunc(t.EQUAL);break;case Rf:t.depthFunc(t.GEQUAL);break;case Nf:t.depthFunc(t.GREATER);break;case Pf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=re}},setLocked:function(re){w=re},setClear:function(re){te!==re&&(F&&(re=1-re),t.clearDepth(re),te=re)},reset:function(){w=!1,B=null,H=null,te=null,F=!1}}}function r(){let w=!1,F=null,B=null,H=null,te=null,re=null,we=null,bt=null,Nt=null;return{setTest:function(et){w||(et?de(t.STENCIL_TEST):We(t.STENCIL_TEST))},setMask:function(et){F!==et&&!w&&(t.stencilMask(et),F=et)},setFunc:function(et,sn,Xt){(B!==et||H!==sn||te!==Xt)&&(t.stencilFunc(et,sn,Xt),B=et,H=sn,te=Xt)},setOp:function(et,sn,Xt){(re!==et||we!==sn||bt!==Xt)&&(t.stencilOp(et,sn,Xt),re=et,we=sn,bt=Xt)},setLocked:function(et){w=et},setClear:function(et){Nt!==et&&(t.clearStencil(et),Nt=et)},reset:function(){w=!1,F=null,B=null,H=null,te=null,re=null,we=null,bt=null,Nt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},d={},p=new WeakMap,m=[],g=null,S=!1,x=null,u=null,v=null,y=null,_=null,R=null,A=null,C=new ot(0,0,0),L=0,E=!1,M=null,N=null,z=null,V=null,K=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ne=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(I)[1]),Y=ne>=1):I.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Y=ne>=2);let Q=null,ie={};const ue=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),Ve=new Rt().fromArray(ue),$=new Rt().fromArray(ke);function le(w,F,B,H){const te=new Uint8Array(4),re=t.createTexture();t.bindTexture(w,re),t.texParameteri(w,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(w,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<B;we++)w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY?t.texImage3D(F,0,t.RGBA,1,1,H,0,t.RGBA,t.UNSIGNED_BYTE,te):t.texImage2D(F+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,te);return re}const xe={};xe[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(t.DEPTH_TEST),a.setFunc(Na),at(!1),st(Hm),de(t.CULL_FACE),O(Hr);function de(w){h[w]!==!0&&(t.enable(w),h[w]=!0)}function We(w){h[w]!==!1&&(t.disable(w),h[w]=!1)}function Be(w,F){return d[w]!==F?(t.bindFramebuffer(w,F),d[w]=F,w===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=F),w===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=F),!0):!1}function qe(w,F){let B=m,H=!1;if(w){B=p.get(F),B===void 0&&(B=[],p.set(F,B));const te=w.textures;if(B.length!==te.length||B[0]!==t.COLOR_ATTACHMENT0){for(let re=0,we=te.length;re<we;re++)B[re]=t.COLOR_ATTACHMENT0+re;B.length=te.length,H=!0}}else B[0]!==t.BACK&&(B[0]=t.BACK,H=!0);H&&t.drawBuffers(B)}function mt(w){return g!==w?(t.useProgram(w),g=w,!0):!1}const ft={[cs]:t.FUNC_ADD,[oM]:t.FUNC_SUBTRACT,[lM]:t.FUNC_REVERSE_SUBTRACT};ft[cM]=t.MIN,ft[uM]=t.MAX;const Dt={[dM]:t.ZERO,[fM]:t.ONE,[hM]:t.SRC_COLOR,[Ef]:t.SRC_ALPHA,[_M]:t.SRC_ALPHA_SATURATE,[vM]:t.DST_COLOR,[mM]:t.DST_ALPHA,[pM]:t.ONE_MINUS_SRC_COLOR,[wf]:t.ONE_MINUS_SRC_ALPHA,[xM]:t.ONE_MINUS_DST_COLOR,[gM]:t.ONE_MINUS_DST_ALPHA,[yM]:t.CONSTANT_COLOR,[SM]:t.ONE_MINUS_CONSTANT_COLOR,[MM]:t.CONSTANT_ALPHA,[EM]:t.ONE_MINUS_CONSTANT_ALPHA};function O(w,F,B,H,te,re,we,bt,Nt,et){if(w===Hr){S===!0&&(We(t.BLEND),S=!1);return}if(S===!1&&(de(t.BLEND),S=!0),w!==aM){if(w!==x||et!==E){if((u!==cs||_!==cs)&&(t.blendEquation(t.FUNC_ADD),u=cs,_=cs),et)switch(w){case ya:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vm:t.blendFunc(t.ONE,t.ONE);break;case Gm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case ya:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}v=null,y=null,R=null,A=null,C.set(0,0,0),L=0,x=w,E=et}return}te=te||F,re=re||B,we=we||H,(F!==u||te!==_)&&(t.blendEquationSeparate(ft[F],ft[te]),u=F,_=te),(B!==v||H!==y||re!==R||we!==A)&&(t.blendFuncSeparate(Dt[B],Dt[H],Dt[re],Dt[we]),v=B,y=H,R=re,A=we),(bt.equals(C)===!1||Nt!==L)&&(t.blendColor(bt.r,bt.g,bt.b,Nt),C.copy(bt),L=Nt),x=w,E=!1}function cn(w,F){w.side===er?We(t.CULL_FACE):de(t.CULL_FACE);let B=w.side===Dn;F&&(B=!B),at(B),w.blending===ya&&w.transparent===!1?O(Hr):O(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),s.setMask(w.colorWrite);const H=w.stencilWrite;o.setTest(H),H&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),yt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):We(t.SAMPLE_ALPHA_TO_COVERAGE)}function at(w){M!==w&&(w?t.frontFace(t.CW):t.frontFace(t.CCW),M=w)}function st(w){w!==rM?(de(t.CULL_FACE),w!==N&&(w===Hm?t.cullFace(t.BACK):w===sM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):We(t.CULL_FACE),N=w}function ze(w){w!==z&&(Y&&t.lineWidth(w),z=w)}function yt(w,F,B){w?(de(t.POLYGON_OFFSET_FILL),(V!==F||K!==B)&&(t.polygonOffset(F,B),V=F,K=B)):We(t.POLYGON_OFFSET_FILL)}function Ie(w){w?de(t.SCISSOR_TEST):We(t.SCISSOR_TEST)}function P(w){w===void 0&&(w=t.TEXTURE0+ee-1),Q!==w&&(t.activeTexture(w),Q=w)}function b(w,F,B){B===void 0&&(Q===null?B=t.TEXTURE0+ee-1:B=Q);let H=ie[B];H===void 0&&(H={type:void 0,texture:void 0},ie[B]=H),(H.type!==w||H.texture!==F)&&(Q!==B&&(t.activeTexture(B),Q=B),t.bindTexture(w,F||xe[w]),H.type=w,H.texture=F)}function G(){const w=ie[Q];w!==void 0&&w.type!==void 0&&(t.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function X(){try{t.texSubImage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function De(){try{t.texSubImage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ct(){try{t.texStorage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ge(){try{t.texImage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function je(w){Ve.equals(w)===!1&&(t.scissor(w.x,w.y,w.z,w.w),Ve.copy(w))}function Ee(w){$.equals(w)===!1&&(t.viewport(w.x,w.y,w.z,w.w),$.copy(w))}function Ce(w,F){let B=c.get(F);B===void 0&&(B=new WeakMap,c.set(F,B));let H=B.get(w);H===void 0&&(H=t.getUniformBlockIndex(F,w.name),B.set(w,H))}function Je(w,F){const H=c.get(F).get(w);l.get(F)!==H&&(t.uniformBlockBinding(F,H,w.__bindingPointIndex),l.set(F,H))}function Mt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Q=null,ie={},d={},p=new WeakMap,m=[],g=null,S=!1,x=null,u=null,v=null,y=null,_=null,R=null,A=null,C=new ot(0,0,0),L=0,E=!1,M=null,N=null,z=null,V=null,K=null,Ve.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:de,disable:We,bindFramebuffer:Be,drawBuffers:qe,useProgram:mt,setBlending:O,setMaterial:cn,setFlipSided:at,setCullFace:st,setLineWidth:ze,setPolygonOffset:yt,setScissorTest:Ie,activeTexture:P,bindTexture:b,unbindTexture:G,compressedTexImage2D:Z,compressedTexImage3D:q,texImage2D:Me,texImage3D:Ge,updateUBOMapping:Ce,uniformBlockBinding:Je,texStorage2D:ct,texStorage3D:ae,texSubImage2D:X,texSubImage3D:De,compressedTexSubImage2D:me,compressedTexSubImage3D:ye,scissor:je,viewport:Ee,reset:Mt}}function B0(t,e,n,i){const r=aC(i);switch(n){case wx:return t*e;case Tx:return t*e;case Cx:return t*e*2;case Ax:return t*e/r.components*r.byteLength;case dp:return t*e/r.components*r.byteLength;case Rx:return t*e*2/r.components*r.byteLength;case fp:return t*e*2/r.components*r.byteLength;case bx:return t*e*3/r.components*r.byteLength;case Ei:return t*e*4/r.components*r.byteLength;case hp:return t*e*4/r.components*r.byteLength;case hc:case pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Of:case Bf:return Math.max(t,16)*Math.max(e,8)/4;case Uf:case Ff:return Math.max(t,8)*Math.max(e,8)/2;case zf:case Hf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case $f:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case qf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case eh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case th:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case nh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vc:case ih:case rh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Nx:case sh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ah:case oh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function aC(t){switch(t){case dr:case Sx:return{byteLength:1,components:1};case Yo:case Mx:case il:return{byteLength:2,components:1};case cp:case up:return{byteLength:2,components:4};case bs:case lp:case ir:return{byteLength:4,components:1};case Ex:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function oC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,h=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return m?new OffscreenCanvas(P,b):Wc("canvas")}function S(P,b,G){let Z=1;const q=Ie(P);if((q.width>G||q.height>G)&&(Z=G/Math.max(q.width,q.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const X=Math.floor(Z*q.width),De=Math.floor(Z*q.height);d===void 0&&(d=g(X,De));const me=b?g(X,De):d;return me.width=X,me.height=De,me.getContext("2d").drawImage(P,0,0,X,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+X+"x"+De+")."),me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),P;return P}function x(P){return P.generateMipmaps}function u(P){t.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(P,b,G,Z,q=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let X=b;if(b===t.RED&&(G===t.FLOAT&&(X=t.R32F),G===t.HALF_FLOAT&&(X=t.R16F),G===t.UNSIGNED_BYTE&&(X=t.R8)),b===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(X=t.R8UI),G===t.UNSIGNED_SHORT&&(X=t.R16UI),G===t.UNSIGNED_INT&&(X=t.R32UI),G===t.BYTE&&(X=t.R8I),G===t.SHORT&&(X=t.R16I),G===t.INT&&(X=t.R32I)),b===t.RG&&(G===t.FLOAT&&(X=t.RG32F),G===t.HALF_FLOAT&&(X=t.RG16F),G===t.UNSIGNED_BYTE&&(X=t.RG8)),b===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(X=t.RG8UI),G===t.UNSIGNED_SHORT&&(X=t.RG16UI),G===t.UNSIGNED_INT&&(X=t.RG32UI),G===t.BYTE&&(X=t.RG8I),G===t.SHORT&&(X=t.RG16I),G===t.INT&&(X=t.RG32I)),b===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(X=t.RGB8UI),G===t.UNSIGNED_SHORT&&(X=t.RGB16UI),G===t.UNSIGNED_INT&&(X=t.RGB32UI),G===t.BYTE&&(X=t.RGB8I),G===t.SHORT&&(X=t.RGB16I),G===t.INT&&(X=t.RGB32I)),b===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),G===t.UNSIGNED_INT&&(X=t.RGBA32UI),G===t.BYTE&&(X=t.RGBA8I),G===t.SHORT&&(X=t.RGBA16I),G===t.INT&&(X=t.RGBA32I)),b===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),b===t.RGBA){const De=q?hu:vt.getTransfer(Z);G===t.FLOAT&&(X=t.RGBA32F),G===t.HALF_FLOAT&&(X=t.RGBA16F),G===t.UNSIGNED_BYTE&&(X=De===At?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function _(P,b){let G;return P?b===null||b===bs||b===ka?G=t.DEPTH24_STENCIL8:b===ir?G=t.DEPTH32F_STENCIL8:b===Yo&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===bs||b===ka?G=t.DEPTH_COMPONENT24:b===ir?G=t.DEPTH_COMPONENT32F:b===Yo&&(G=t.DEPTH_COMPONENT16),G}function R(P,b){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ti&&P.minFilter!==Hi?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function A(P){const b=P.target;b.removeEventListener("dispose",A),L(b),b.isVideoTexture&&h.delete(b)}function C(P){const b=P.target;b.removeEventListener("dispose",C),M(b)}function L(P){const b=i.get(P);if(b.__webglInit===void 0)return;const G=P.source,Z=p.get(G);if(Z){const q=Z[b.__cacheKey];q.usedTimes--,q.usedTimes===0&&E(P),Object.keys(Z).length===0&&p.delete(G)}i.remove(P)}function E(P){const b=i.get(P);t.deleteTexture(b.__webglTexture);const G=P.source,Z=p.get(G);delete Z[b.__cacheKey],a.memory.textures--}function M(P){const b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let q=0;q<b.__webglFramebuffer[Z].length;q++)t.deleteFramebuffer(b.__webglFramebuffer[Z][q]);else t.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)t.deleteFramebuffer(b.__webglFramebuffer[Z]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=P.textures;for(let Z=0,q=G.length;Z<q;Z++){const X=i.get(G[Z]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(G[Z])}i.remove(P)}let N=0;function z(){N=0}function V(){const P=N;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),N+=1,P}function K(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ee(P,b){const G=i.get(P);if(P.isVideoTexture&&ze(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,P,b);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+b)}function Y(P,b){const G=i.get(P);if(P.version>0&&G.__version!==P.version){$(G,P,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+b)}function ne(P,b){const G=i.get(P);if(P.version>0&&G.__version!==P.version){$(G,P,b);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+b)}function I(P,b){const G=i.get(P);if(P.version>0&&G.__version!==P.version){le(G,P,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+b)}const Q={[If]:t.REPEAT,[ps]:t.CLAMP_TO_EDGE,[Df]:t.MIRRORED_REPEAT},ie={[Ti]:t.NEAREST,[LM]:t.NEAREST_MIPMAP_NEAREST,[Cl]:t.NEAREST_MIPMAP_LINEAR,[Hi]:t.LINEAR,[Wu]:t.LINEAR_MIPMAP_NEAREST,[ms]:t.LINEAR_MIPMAP_LINEAR},ue={[UM]:t.NEVER,[VM]:t.ALWAYS,[OM]:t.LESS,[Lx]:t.LEQUAL,[FM]:t.EQUAL,[HM]:t.GEQUAL,[BM]:t.GREATER,[zM]:t.NOTEQUAL};function ke(P,b){if(b.type===ir&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Hi||b.magFilter===Wu||b.magFilter===Cl||b.magFilter===ms||b.minFilter===Hi||b.minFilter===Wu||b.minFilter===Cl||b.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,Q[b.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,Q[b.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,Q[b.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,ie[b.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,ie[b.minFilter]),b.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ue[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ti||b.minFilter!==Cl&&b.minFilter!==ms||b.type===ir&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ve(P,b){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",A));const Z=b.source;let q=p.get(Z);q===void 0&&(q={},p.set(Z,q));const X=K(b);if(X!==P.__cacheKey){q[X]===void 0&&(q[X]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),q[X].usedTimes++;const De=q[P.__cacheKey];De!==void 0&&(q[P.__cacheKey].usedTimes--,De.usedTimes===0&&E(b)),P.__cacheKey=X,P.__webglTexture=q[X].texture}return G}function $(P,b,G){let Z=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=t.TEXTURE_3D);const q=Ve(P,b),X=b.source;n.bindTexture(Z,P.__webglTexture,t.TEXTURE0+G);const De=i.get(X);if(X.version!==De.__version||q===!0){n.activeTexture(t.TEXTURE0+G);const me=vt.getPrimaries(vt.workingColorSpace),ye=b.colorSpace===Rr?null:vt.getPrimaries(b.colorSpace),ct=b.colorSpace===Rr||me===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let ae=S(b.image,!1,r.maxTextureSize);ae=yt(b,ae);const Me=s.convert(b.format,b.colorSpace),Ge=s.convert(b.type);let je=y(b.internalFormat,Me,Ge,b.colorSpace,b.isVideoTexture);ke(Z,b);let Ee;const Ce=b.mipmaps,Je=b.isVideoTexture!==!0,Mt=De.__version===void 0||q===!0,w=X.dataReady,F=R(b,ae);if(b.isDepthTexture)je=_(b.format===Ia,b.type),Mt&&(Je?n.texStorage2D(t.TEXTURE_2D,1,je,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,je,ae.width,ae.height,0,Me,Ge,null));else if(b.isDataTexture)if(Ce.length>0){Je&&Mt&&n.texStorage2D(t.TEXTURE_2D,F,je,Ce[0].width,Ce[0].height);for(let B=0,H=Ce.length;B<H;B++)Ee=Ce[B],Je?w&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,Ee.width,Ee.height,Me,Ge,Ee.data):n.texImage2D(t.TEXTURE_2D,B,je,Ee.width,Ee.height,0,Me,Ge,Ee.data);b.generateMipmaps=!1}else Je?(Mt&&n.texStorage2D(t.TEXTURE_2D,F,je,ae.width,ae.height),w&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,Me,Ge,ae.data)):n.texImage2D(t.TEXTURE_2D,0,je,ae.width,ae.height,0,Me,Ge,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Je&&Mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,F,je,Ce[0].width,Ce[0].height,ae.depth);for(let B=0,H=Ce.length;B<H;B++)if(Ee=Ce[B],b.format!==Ei)if(Me!==null)if(Je){if(w)if(b.layerUpdates.size>0){const te=B0(Ee.width,Ee.height,b.format,b.type);for(const re of b.layerUpdates){const we=Ee.data.subarray(re*te/Ee.data.BYTES_PER_ELEMENT,(re+1)*te/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,re,Ee.width,Ee.height,1,Me,we)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,Ee.width,Ee.height,ae.depth,Me,Ee.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,je,Ee.width,Ee.height,ae.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?w&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,Ee.width,Ee.height,ae.depth,Me,Ge,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,je,Ee.width,Ee.height,ae.depth,0,Me,Ge,Ee.data)}else{Je&&Mt&&n.texStorage2D(t.TEXTURE_2D,F,je,Ce[0].width,Ce[0].height);for(let B=0,H=Ce.length;B<H;B++)Ee=Ce[B],b.format!==Ei?Me!==null?Je?w&&n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,Ee.width,Ee.height,Me,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,B,je,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?w&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,Ee.width,Ee.height,Me,Ge,Ee.data):n.texImage2D(t.TEXTURE_2D,B,je,Ee.width,Ee.height,0,Me,Ge,Ee.data)}else if(b.isDataArrayTexture)if(Je){if(Mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,F,je,ae.width,ae.height,ae.depth),w)if(b.layerUpdates.size>0){const B=B0(ae.width,ae.height,b.format,b.type);for(const H of b.layerUpdates){const te=ae.data.subarray(H*B/ae.data.BYTES_PER_ELEMENT,(H+1)*B/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,H,ae.width,ae.height,1,Me,Ge,te)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,Ge,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,je,ae.width,ae.height,ae.depth,0,Me,Ge,ae.data);else if(b.isData3DTexture)Je?(Mt&&n.texStorage3D(t.TEXTURE_3D,F,je,ae.width,ae.height,ae.depth),w&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,Ge,ae.data)):n.texImage3D(t.TEXTURE_3D,0,je,ae.width,ae.height,ae.depth,0,Me,Ge,ae.data);else if(b.isFramebufferTexture){if(Mt)if(Je)n.texStorage2D(t.TEXTURE_2D,F,je,ae.width,ae.height);else{let B=ae.width,H=ae.height;for(let te=0;te<F;te++)n.texImage2D(t.TEXTURE_2D,te,je,B,H,0,Me,Ge,null),B>>=1,H>>=1}}else if(Ce.length>0){if(Je&&Mt){const B=Ie(Ce[0]);n.texStorage2D(t.TEXTURE_2D,F,je,B.width,B.height)}for(let B=0,H=Ce.length;B<H;B++)Ee=Ce[B],Je?w&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,Me,Ge,Ee):n.texImage2D(t.TEXTURE_2D,B,je,Me,Ge,Ee);b.generateMipmaps=!1}else if(Je){if(Mt){const B=Ie(ae);n.texStorage2D(t.TEXTURE_2D,F,je,B.width,B.height)}w&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Ge,ae)}else n.texImage2D(t.TEXTURE_2D,0,je,Me,Ge,ae);x(b)&&u(Z),De.__version=X.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function le(P,b,G){if(b.image.length!==6)return;const Z=Ve(P,b),q=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+G);const X=i.get(q);if(q.version!==X.__version||Z===!0){n.activeTexture(t.TEXTURE0+G);const De=vt.getPrimaries(vt.workingColorSpace),me=b.colorSpace===Rr?null:vt.getPrimaries(b.colorSpace),ye=b.colorSpace===Rr||De===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const ct=b.isCompressedTexture||b.image[0].isCompressedTexture,ae=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let H=0;H<6;H++)!ct&&!ae?Me[H]=S(b.image[H],!0,r.maxCubemapSize):Me[H]=ae?b.image[H].image:b.image[H],Me[H]=yt(b,Me[H]);const Ge=Me[0],je=s.convert(b.format,b.colorSpace),Ee=s.convert(b.type),Ce=y(b.internalFormat,je,Ee,b.colorSpace),Je=b.isVideoTexture!==!0,Mt=X.__version===void 0||Z===!0,w=q.dataReady;let F=R(b,Ge);ke(t.TEXTURE_CUBE_MAP,b);let B;if(ct){Je&&Mt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,F,Ce,Ge.width,Ge.height);for(let H=0;H<6;H++){B=Me[H].mipmaps;for(let te=0;te<B.length;te++){const re=B[te];b.format!==Ei?je!==null?Je?w&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te,0,0,re.width,re.height,je,re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te,Ce,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te,0,0,re.width,re.height,je,Ee,re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te,Ce,re.width,re.height,0,je,Ee,re.data)}}}else{if(B=b.mipmaps,Je&&Mt){B.length>0&&F++;const H=Ie(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,F,Ce,H.width,H.height)}for(let H=0;H<6;H++)if(ae){Je?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Me[H].width,Me[H].height,je,Ee,Me[H].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ce,Me[H].width,Me[H].height,0,je,Ee,Me[H].data);for(let te=0;te<B.length;te++){const we=B[te].image[H].image;Je?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te+1,0,0,we.width,we.height,je,Ee,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te+1,Ce,we.width,we.height,0,je,Ee,we.data)}}else{Je?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,je,Ee,Me[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ce,je,Ee,Me[H]);for(let te=0;te<B.length;te++){const re=B[te];Je?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te+1,0,0,je,Ee,re.image[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,te+1,Ce,je,Ee,re.image[H])}}}x(b)&&u(t.TEXTURE_CUBE_MAP),X.__version=q.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function xe(P,b,G,Z,q,X){const De=s.convert(G.format,G.colorSpace),me=s.convert(G.type),ye=y(G.internalFormat,De,me,G.colorSpace),ct=i.get(b),ae=i.get(G);if(ae.__renderTarget=b,!ct.__hasExternalTextures){const Me=Math.max(1,b.width>>X),Ge=Math.max(1,b.height>>X);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,X,ye,Me,Ge,b.depth,0,De,me,null):n.texImage2D(q,X,ye,Me,Ge,0,De,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),st(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,q,ae.__webglTexture,0,at(b)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,q,ae.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(P,b,G){if(t.bindRenderbuffer(t.RENDERBUFFER,P),b.depthBuffer){const Z=b.depthTexture,q=Z&&Z.isDepthTexture?Z.type:null,X=_(b.stencilBuffer,q),De=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=at(b);st(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,X,b.width,b.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,X,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,X,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,De,t.RENDERBUFFER,P)}else{const Z=b.textures;for(let q=0;q<Z.length;q++){const X=Z[q],De=s.convert(X.format,X.colorSpace),me=s.convert(X.type),ye=y(X.internalFormat,De,me,X.colorSpace),ct=at(b);G&&st(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ct,ye,b.width,b.height):st(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ct,ye,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,ye,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ee(b.depthTexture,0);const q=Z.__webglTexture,X=at(b);if(b.depthTexture.format===Sa)st(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(b.depthTexture.format===Ia)st(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Be(P){const b=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",q)};Z.addEventListener("dispose",q),b.__depthDisposeCallback=q}b.__boundDepthTexture=Z}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");We(b.__webglFramebuffer,P)}else if(G){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=t.createRenderbuffer(),de(b.__webglDepthbuffer[Z],P,!1);else{const q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,X)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),de(b.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,q)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(P,b,G){const Z=i.get(P);b!==void 0&&xe(Z.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Be(P)}function mt(P){const b=P.texture,G=i.get(P),Z=i.get(b);P.addEventListener("dispose",C);const q=P.textures,X=P.isWebGLCubeRenderTarget===!0,De=q.length>1;if(De||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=b.version,a.memory.textures++),X){G.__webglFramebuffer=[];for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[me]=[];for(let ye=0;ye<b.mipmaps.length;ye++)G.__webglFramebuffer[me][ye]=t.createFramebuffer()}else G.__webglFramebuffer[me]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let me=0;me<b.mipmaps.length;me++)G.__webglFramebuffer[me]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(De)for(let me=0,ye=q.length;me<ye;me++){const ct=i.get(q[me]);ct.__webglTexture===void 0&&(ct.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&st(P)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<q.length;me++){const ye=q[me];G.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[me]);const ct=s.convert(ye.format,ye.colorSpace),ae=s.convert(ye.type),Me=y(ye.internalFormat,ct,ae,ye.colorSpace,P.isXRRenderTarget===!0),Ge=at(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Me,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,G.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),de(G.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),ke(t.TEXTURE_CUBE_MAP,b);for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)xe(G.__webglFramebuffer[me][ye],P,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,ye);else xe(G.__webglFramebuffer[me],P,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);x(b)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let me=0,ye=q.length;me<ye;me++){const ct=q[me],ae=i.get(ct);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),ke(t.TEXTURE_2D,ct),xe(G.__webglFramebuffer,P,ct,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),x(ct)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,Z.__webglTexture),ke(me,b),b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)xe(G.__webglFramebuffer[ye],P,b,t.COLOR_ATTACHMENT0,me,ye);else xe(G.__webglFramebuffer,P,b,t.COLOR_ATTACHMENT0,me,0);x(b)&&u(me),n.unbindTexture()}P.depthBuffer&&Be(P)}function ft(P){const b=P.textures;for(let G=0,Z=b.length;G<Z;G++){const q=b[G];if(x(q)){const X=v(P),De=i.get(q).__webglTexture;n.bindTexture(X,De),u(X),n.unbindTexture()}}}const Dt=[],O=[];function cn(P){if(P.samples>0){if(st(P)===!1){const b=P.textures,G=P.width,Z=P.height;let q=t.COLOR_BUFFER_BIT;const X=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=i.get(P),me=b.length>1;if(me)for(let ye=0;ye<b.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,De.__webglColorRenderbuffer[ye]);const ct=i.get(b[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ct,0)}t.blitFramebuffer(0,0,G,Z,0,0,G,Z,q,t.NEAREST),l===!0&&(Dt.length=0,O.length=0,Dt.push(t.COLOR_ATTACHMENT0+ye),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Dt.push(X),O.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,O)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Dt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let ye=0;ye<b.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,De.__webglColorRenderbuffer[ye]);const ct=i.get(b[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,ct,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function at(P){return Math.min(r.maxSamples,P.samples)}function st(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ze(P){const b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function yt(P,b){const G=P.colorSpace,Z=P.format,q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==za&&G!==Rr&&(vt.getTransfer(G)===At?(Z!==Ei||q!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Ie(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=ee,this.setTexture2DArray=Y,this.setTexture3D=ne,this.setTextureCube=I,this.rebindTextures=qe,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=st}function lC(t,e){function n(i,r=Rr){let s;const a=vt.getTransfer(r);if(i===dr)return t.UNSIGNED_BYTE;if(i===cp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===up)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ex)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Sx)return t.BYTE;if(i===Mx)return t.SHORT;if(i===Yo)return t.UNSIGNED_SHORT;if(i===lp)return t.INT;if(i===bs)return t.UNSIGNED_INT;if(i===ir)return t.FLOAT;if(i===il)return t.HALF_FLOAT;if(i===wx)return t.ALPHA;if(i===bx)return t.RGB;if(i===Ei)return t.RGBA;if(i===Tx)return t.LUMINANCE;if(i===Cx)return t.LUMINANCE_ALPHA;if(i===Sa)return t.DEPTH_COMPONENT;if(i===Ia)return t.DEPTH_STENCIL;if(i===Ax)return t.RED;if(i===dp)return t.RED_INTEGER;if(i===Rx)return t.RG;if(i===fp)return t.RG_INTEGER;if(i===hp)return t.RGBA_INTEGER;if(i===hc||i===pc||i===mc||i===gc)if(a===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uf||i===Of||i===Ff||i===Bf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Uf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Of)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ff)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zf||i===Hf||i===Vf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zf||i===Hf)return a===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vf)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gf||i===jf||i===Wf||i===$f||i===Xf||i===qf||i===Yf||i===Kf||i===Zf||i===Qf||i===Jf||i===eh||i===th||i===nh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gf)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jf)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wf)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$f)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xf)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qf)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yf)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kf)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zf)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qf)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jf)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===eh)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===th)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nh)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vc||i===ih||i===rh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vc)return a===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ih)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nx||i===sh||i===ah||i===oh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ah)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ka?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class cC extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lr extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uC={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const x=n.getJointPose(S,i),u=this._getHandJoint(c,S);x!==null&&(u.matrix.fromArray(x.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=x.radius),u.visible=x!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Lr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const dC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fC=`
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

}`;class hC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $r({vertexShader:dC,fragmentShader:fC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _e(new yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pC extends Ha{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,p=null,m=null,g=null;const S=new hC,x=n.getContextAttributes();let u=null,v=null;const y=[],_=[],R=new He;let A=null;const C=new $n;C.viewport=new Rt;const L=new $n;L.viewport=new Rt;const E=[C,L],M=new cC;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let le=y[$];return le===void 0&&(le=new xd,y[$]=le),le.getTargetRaySpace()},this.getControllerGrip=function($){let le=y[$];return le===void 0&&(le=new xd,y[$]=le),le.getGripSpace()},this.getHand=function($){let le=y[$];return le===void 0&&(le=new xd,y[$]=le),le.getHandSpace()};function V($){const le=_.indexOf($.inputSource);if(le===-1)return;const xe=y[le];xe!==void 0&&(xe.update($.inputSource,$.frame,c||a),xe.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",ee);for(let $=0;$<y.length;$++){const le=_[$];le!==null&&(_[$]=null,y[$].disconnect(le))}N=null,z=null,S.reset(),e.setRenderTarget(u),m=null,p=null,d=null,r=null,v=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",K),r.addEventListener("inputsourceschange",ee),x.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Ts(m.framebufferWidth,m.framebufferHeight,{format:Ei,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let le=null,xe=null,de=null;x.depth&&(de=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=x.stencil?Ia:Sa,xe=x.stencil?ka:bs);const We={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,n),p=d.createProjectionLayer(We),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Ts(p.textureWidth,p.textureHeight,{format:Ei,type:dr,depthTexture:new Gx(p.textureWidth,p.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ee($){for(let le=0;le<$.removed.length;le++){const xe=$.removed[le],de=_.indexOf(xe);de>=0&&(_[de]=null,y[de].disconnect(xe))}for(let le=0;le<$.added.length;le++){const xe=$.added[le];let de=_.indexOf(xe);if(de===-1){for(let Be=0;Be<y.length;Be++)if(Be>=_.length){_.push(xe),de=Be;break}else if(_[Be]===null){_[Be]=xe,de=Be;break}if(de===-1)break}const We=y[de];We&&We.connect(xe)}}const Y=new k,ne=new k;function I($,le,xe){Y.setFromMatrixPosition(le.matrixWorld),ne.setFromMatrixPosition(xe.matrixWorld);const de=Y.distanceTo(ne),We=le.projectionMatrix.elements,Be=xe.projectionMatrix.elements,qe=We[14]/(We[10]-1),mt=We[14]/(We[10]+1),ft=(We[9]+1)/We[5],Dt=(We[9]-1)/We[5],O=(We[8]-1)/We[0],cn=(Be[8]+1)/Be[0],at=qe*O,st=qe*cn,ze=de/(-O+cn),yt=ze*-O;if(le.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(yt),$.translateZ(ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),We[10]===-1)$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Ie=qe+ze,P=mt+ze,b=at-yt,G=st+(de-yt),Z=ft*mt/P*Ie,q=Dt*mt/P*Ie;$.projectionMatrix.makePerspective(b,G,Z,q,Ie,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Q($,le){le===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(le.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let le=$.near,xe=$.far;S.texture!==null&&(S.depthNear>0&&(le=S.depthNear),S.depthFar>0&&(xe=S.depthFar)),M.near=L.near=C.near=le,M.far=L.far=C.far=xe,(N!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,z=M.far),C.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,M.layers.mask=C.layers.mask|L.layers.mask;const de=$.parent,We=M.cameras;Q(M,de);for(let Be=0;Be<We.length;Be++)Q(We[Be],de);We.length===2?I(M,C,L):M.projectionMatrix.copy(C.projectionMatrix),ie($,M,de)};function ie($,le,xe){xe===null?$.matrix.copy(le.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(le.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ko*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function($){l=$,p!==null&&(p.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(M)};let ue=null;function ke($,le){if(h=le.getViewerPose(c||a),g=le,h!==null){const xe=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let de=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Be=0;Be<xe.length;Be++){const qe=xe[Be];let mt=null;if(m!==null)mt=m.getViewport(qe);else{const Dt=d.getViewSubImage(p,qe);mt=Dt.viewport,Be===0&&(e.setRenderTargetTextures(v,Dt.colorTexture,p.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(v))}let ft=E[Be];ft===void 0&&(ft=new $n,ft.layers.enable(Be),ft.viewport=new Rt,E[Be]=ft),ft.matrix.fromArray(qe.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(qe.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(mt.x,mt.y,mt.width,mt.height),Be===0&&(M.matrix.copy(ft.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(ft)}const We=r.enabledFeatures;if(We&&We.includes("depth-sensing")){const Be=d.getDepthInformation(xe[0]);Be&&Be.isValid&&Be.texture&&S.init(e,Be,r.renderState)}}for(let xe=0;xe<y.length;xe++){const de=_[xe],We=y[xe];de!==null&&We!==void 0&&We.update(de,le,c||a)}ue&&ue($,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}const Ve=new Vx;Ve.setAnimationLoop(ke),this.setAnimationLoop=function($){ue=$},this.dispose=function(){}}}const ns=new Wi,mC=new Lt;function gC(t,e){function n(x,u){x.matrixAutoUpdate===!0&&x.updateMatrix(),u.value.copy(x.matrix)}function i(x,u){u.color.getRGB(x.fogColor.value,Bx(t)),u.isFog?(x.fogNear.value=u.near,x.fogFar.value=u.far):u.isFogExp2&&(x.fogDensity.value=u.density)}function r(x,u,v,y,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(x,u):u.isMeshToonMaterial?(s(x,u),d(x,u)):u.isMeshPhongMaterial?(s(x,u),h(x,u)):u.isMeshStandardMaterial?(s(x,u),p(x,u),u.isMeshPhysicalMaterial&&m(x,u,_)):u.isMeshMatcapMaterial?(s(x,u),g(x,u)):u.isMeshDepthMaterial?s(x,u):u.isMeshDistanceMaterial?(s(x,u),S(x,u)):u.isMeshNormalMaterial?s(x,u):u.isLineBasicMaterial?(a(x,u),u.isLineDashedMaterial&&o(x,u)):u.isPointsMaterial?l(x,u,v,y):u.isSpriteMaterial?c(x,u):u.isShadowMaterial?(x.color.value.copy(u.color),x.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(x,u){x.opacity.value=u.opacity,u.color&&x.diffuse.value.copy(u.color),u.emissive&&x.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.bumpMap&&(x.bumpMap.value=u.bumpMap,n(u.bumpMap,x.bumpMapTransform),x.bumpScale.value=u.bumpScale,u.side===Dn&&(x.bumpScale.value*=-1)),u.normalMap&&(x.normalMap.value=u.normalMap,n(u.normalMap,x.normalMapTransform),x.normalScale.value.copy(u.normalScale),u.side===Dn&&x.normalScale.value.negate()),u.displacementMap&&(x.displacementMap.value=u.displacementMap,n(u.displacementMap,x.displacementMapTransform),x.displacementScale.value=u.displacementScale,x.displacementBias.value=u.displacementBias),u.emissiveMap&&(x.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,x.emissiveMapTransform)),u.specularMap&&(x.specularMap.value=u.specularMap,n(u.specularMap,x.specularMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest);const v=e.get(u),y=v.envMap,_=v.envMapRotation;y&&(x.envMap.value=y,ns.copy(_),ns.x*=-1,ns.y*=-1,ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),x.envMapRotation.value.setFromMatrix4(mC.makeRotationFromEuler(ns)),x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=u.reflectivity,x.ior.value=u.ior,x.refractionRatio.value=u.refractionRatio),u.lightMap&&(x.lightMap.value=u.lightMap,x.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,x.lightMapTransform)),u.aoMap&&(x.aoMap.value=u.aoMap,x.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,x.aoMapTransform))}function a(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform))}function o(x,u){x.dashSize.value=u.dashSize,x.totalSize.value=u.dashSize+u.gapSize,x.scale.value=u.scale}function l(x,u,v,y){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.size.value=u.size*v,x.scale.value=y*.5,u.map&&(x.map.value=u.map,n(u.map,x.uvTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function c(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.rotation.value=u.rotation,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function h(x,u){x.specular.value.copy(u.specular),x.shininess.value=Math.max(u.shininess,1e-4)}function d(x,u){u.gradientMap&&(x.gradientMap.value=u.gradientMap)}function p(x,u){x.metalness.value=u.metalness,u.metalnessMap&&(x.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,x.metalnessMapTransform)),x.roughness.value=u.roughness,u.roughnessMap&&(x.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,x.roughnessMapTransform)),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)}function m(x,u,v){x.ior.value=u.ior,u.sheen>0&&(x.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),x.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(x.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,x.sheenColorMapTransform)),u.sheenRoughnessMap&&(x.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,x.sheenRoughnessMapTransform))),u.clearcoat>0&&(x.clearcoat.value=u.clearcoat,x.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(x.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,x.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(x.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Dn&&x.clearcoatNormalScale.value.negate())),u.dispersion>0&&(x.dispersion.value=u.dispersion),u.iridescence>0&&(x.iridescence.value=u.iridescence,x.iridescenceIOR.value=u.iridescenceIOR,x.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(x.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,x.iridescenceMapTransform)),u.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),u.transmission>0&&(x.transmission.value=u.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(x.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,x.transmissionMapTransform)),x.thickness.value=u.thickness,u.thicknessMap&&(x.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=u.attenuationDistance,x.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(x.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(x.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=u.specularIntensity,x.specularColor.value.copy(u.specularColor),u.specularColorMap&&(x.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,x.specularColorMapTransform)),u.specularIntensityMap&&(x.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,u){u.matcap&&(x.matcap.value=u.matcap)}function S(x,u){const v=e.get(u).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const _=y.program;i.uniformBlockBinding(v,_)}function c(v,y){let _=r[v.id];_===void 0&&(g(v),_=h(v),r[v.id]=_,v.addEventListener("dispose",x));const R=y.program;i.updateUBOMapping(v,R);const A=e.render.frame;s[v.id]!==A&&(p(v),s[v.id]=A)}function h(v){const y=d();v.__bindingPointIndex=y;const _=t.createBuffer(),R=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,_),_}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const y=r[v.id],_=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let A=0,C=_.length;A<C;A++){const L=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,M=L.length;E<M;E++){const N=L[E];if(m(N,A,E,R)===!0){const z=N.__offset,V=Array.isArray(N.value)?N.value:[N.value];let K=0;for(let ee=0;ee<V.length;ee++){const Y=V[ee],ne=S(Y);typeof Y=="number"||typeof Y=="boolean"?(N.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,z+K,N.__data)):Y.isMatrix3?(N.__data[0]=Y.elements[0],N.__data[1]=Y.elements[1],N.__data[2]=Y.elements[2],N.__data[3]=0,N.__data[4]=Y.elements[3],N.__data[5]=Y.elements[4],N.__data[6]=Y.elements[5],N.__data[7]=0,N.__data[8]=Y.elements[6],N.__data[9]=Y.elements[7],N.__data[10]=Y.elements[8],N.__data[11]=0):(Y.toArray(N.__data,K),K+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,y,_,R){const A=v.value,C=y+"_"+_;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const L=R[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(v){const y=v.uniforms;let _=0;const R=16;for(let C=0,L=y.length;C<L;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,N=E.length;M<N;M++){const z=E[M],V=Array.isArray(z.value)?z.value:[z.value];for(let K=0,ee=V.length;K<ee;K++){const Y=V[K],ne=S(Y),I=_%R,Q=I%ne.boundary,ie=I+Q;_+=Q,ie!==0&&R-ie<ne.storage&&(_+=R-ie),z.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=ne.storage}}}const A=_%R;return A>0&&(_+=R-A),v.__size=_,v.__cache={},this}function S(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function x(v){const y=v.target;y.removeEventListener("dispose",x);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class xC{constructor(e={}){const{canvas:n=sE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),S=new Int32Array(4);let x=null,u=null;const v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=Vr,this.toneMappingExposure=1;const _=this;let R=!1,A=0,C=0,L=null,E=-1,M=null;const N=new Rt,z=new Rt;let V=null;const K=new ot(0);let ee=0,Y=n.width,ne=n.height,I=1,Q=null,ie=null;const ue=new Rt(0,0,Y,ne),ke=new Rt(0,0,Y,ne);let Ve=!1;const $=new vp;let le=!1,xe=!1;const de=new Lt,We=new Lt,Be=new k,qe=new Rt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Dt(){return L===null?I:1}let O=i;function cn(T,D){return n.getContext(T,D)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${op}`),n.addEventListener("webglcontextlost",H,!1),n.addEventListener("webglcontextrestored",te,!1),n.addEventListener("webglcontextcreationerror",re,!1),O===null){const D="webgl2";if(O=cn(D,T),O===null)throw cn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let at,st,ze,yt,Ie,P,b,G,Z,q,X,De,me,ye,ct,ae,Me,Ge,je,Ee,Ce,Je,Mt,w;function F(){at=new Eb(O),at.init(),Je=new lC(O,at),st=new gb(O,at,e,Je),ze=new sC(O,at),st.reverseDepthBuffer&&p&&ze.buffers.depth.setReversed(!0),yt=new Tb(O),Ie=new jT,P=new oC(O,at,ze,Ie,st,Je,yt),b=new xb(_),G=new Mb(_),Z=new LE(O),Mt=new pb(O,Z),q=new wb(O,Z,yt,Mt),X=new Ab(O,q,Z,yt),je=new Cb(O,st,P),ae=new vb(Ie),De=new GT(_,b,G,at,st,Mt,ae),me=new gC(_,Ie),ye=new $T,ct=new QT(at),Ge=new hb(_,b,G,ze,X,m,l),Me=new iC(_,X,st),w=new vC(O,yt,st,ze),Ee=new mb(O,at,yt),Ce=new bb(O,at,yt),yt.programs=De.programs,_.capabilities=st,_.extensions=at,_.properties=Ie,_.renderLists=ye,_.shadowMap=Me,_.state=ze,_.info=yt}F();const B=new pC(_,O);this.xr=B,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(T){T!==void 0&&(I=T,this.setSize(Y,ne,!1))},this.getSize=function(T){return T.set(Y,ne)},this.setSize=function(T,D,j=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,ne=D,n.width=Math.floor(T*I),n.height=Math.floor(D*I),j===!0&&(n.style.width=T+"px",n.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(Y*I,ne*I).floor()},this.setDrawingBufferSize=function(T,D,j){Y=T,ne=D,I=j,n.width=Math.floor(T*j),n.height=Math.floor(D*j),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(ue)},this.setViewport=function(T,D,j,W){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,D,j,W),ze.viewport(N.copy(ue).multiplyScalar(I).round())},this.getScissor=function(T){return T.copy(ke)},this.setScissor=function(T,D,j,W){T.isVector4?ke.set(T.x,T.y,T.z,T.w):ke.set(T,D,j,W),ze.scissor(z.copy(ke).multiplyScalar(I).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(T){ze.setScissorTest(Ve=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){ie=T},this.getClearColor=function(T){return T.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(T=!0,D=!0,j=!0){let W=0;if(T){let U=!1;if(L!==null){const ce=L.texture.format;U=ce===hp||ce===fp||ce===dp}if(U){const ce=L.texture.type,ge=ce===dr||ce===bs||ce===Yo||ce===ka||ce===cp||ce===up,Ae=Ge.getClearColor(),Re=Ge.getClearAlpha(),$e=Ae.r,Ye=Ae.g,be=Ae.b;ge?(g[0]=$e,g[1]=Ye,g[2]=be,g[3]=Re,O.clearBufferuiv(O.COLOR,0,g)):(S[0]=$e,S[1]=Ye,S[2]=be,S[3]=Re,O.clearBufferiv(O.COLOR,0,S))}else W|=O.COLOR_BUFFER_BIT}D&&(W|=O.DEPTH_BUFFER_BIT),j&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",H,!1),n.removeEventListener("webglcontextrestored",te,!1),n.removeEventListener("webglcontextcreationerror",re,!1),ye.dispose(),ct.dispose(),Ie.dispose(),b.dispose(),G.dispose(),X.dispose(),Mt.dispose(),w.dispose(),De.dispose(),B.dispose(),B.removeEventListener("sessionstart",On),B.removeEventListener("sessionend",Rs),Fn.stop()};function H(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=yt.autoReset,D=Me.enabled,j=Me.autoUpdate,W=Me.needsUpdate,U=Me.type;F(),yt.autoReset=T,Me.enabled=D,Me.autoUpdate=j,Me.needsUpdate=W,Me.type=U}function re(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function we(T){const D=T.target;D.removeEventListener("dispose",we),bt(D)}function bt(T){Nt(T),Ie.remove(T)}function Nt(T){const D=Ie.get(T).programs;D!==void 0&&(D.forEach(function(j){De.releaseProgram(j)}),T.isShaderMaterial&&De.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,j,W,U,ce){D===null&&(D=mt);const ge=U.isMesh&&U.matrixWorld.determinant()<0,Ae=Xa(T,D,j,W,U);ze.setMaterial(W,ge);let Re=j.index,$e=1;if(W.wireframe===!0){if(Re=q.getWireframeAttribute(j),Re===void 0)return;$e=2}const Ye=j.drawRange,be=j.attributes.position;let ut=Ye.start*$e,St=(Ye.start+Ye.count)*$e;ce!==null&&(ut=Math.max(ut,ce.start*$e),St=Math.min(St,(ce.start+ce.count)*$e)),Re!==null?(ut=Math.max(ut,0),St=Math.min(St,Re.count)):be!=null&&(ut=Math.max(ut,0),St=Math.min(St,be.count));const ht=St-ut;if(ht<0||ht===1/0)return;Mt.setup(U,W,Ae,j,Re);let Vt,gt=Ee;if(Re!==null&&(Vt=Z.get(Re),gt=Ce,gt.setIndex(Vt)),U.isMesh)W.wireframe===!0?(ze.setLineWidth(W.wireframeLinewidth*Dt()),gt.setMode(O.LINES)):gt.setMode(O.TRIANGLES);else if(U.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),ze.setLineWidth(Ne*Dt()),U.isLineSegments?gt.setMode(O.LINES):U.isLineLoop?gt.setMode(O.LINE_LOOP):gt.setMode(O.LINE_STRIP)}else U.isPoints?gt.setMode(O.POINTS):U.isSprite&&gt.setMode(O.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)gt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))gt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ne=U._multiDrawStarts,Bn=U._multiDrawCounts,pt=U._multiDrawCount,Sn=Re?Z.get(Re).bytesPerElement:1,Ri=Ie.get(W).currentProgram.getUniforms();for(let un=0;un<pt;un++)Ri.setValue(O,"_gl_DrawID",un),gt.render(Ne[un]/Sn,Bn[un])}else if(U.isInstancedMesh)gt.renderInstances(ut,ht,U.count);else if(j.isInstancedBufferGeometry){const Ne=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Bn=Math.min(j.instanceCount,Ne);gt.renderInstances(ut,ht,Bn)}else gt.render(ut,ht)};function et(T,D,j){T.transparent===!0&&T.side===er&&T.forceSinglePass===!1?(T.side=Dn,T.needsUpdate=!0,Ps(T,D,j),T.side=Wr,T.needsUpdate=!0,Ps(T,D,j),T.side=er):Ps(T,D,j)}this.compile=function(T,D,j=null){j===null&&(j=T),u=ct.get(j),u.init(D),y.push(u),j.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),T!==j&&T.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const W=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ce=U.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){const Ae=ce[ge];et(Ae,j,U),W.add(Ae)}else et(ce,j,U),W.add(ce)}),y.pop(),u=null,W},this.compileAsync=function(T,D,j=null){const W=this.compile(T,D,j);return new Promise(U=>{function ce(){if(W.forEach(function(ge){Ie.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){U(T);return}setTimeout(ce,10)}at.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let sn=null;function Xt(T){sn&&sn(T)}function On(){Fn.stop()}function Rs(){Fn.start()}const Fn=new Vx;Fn.setAnimationLoop(Xt),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(T){sn=T,B.setAnimationLoop(T),T===null?Fn.stop():Fn.start()},B.addEventListener("sessionstart",On),B.addEventListener("sessionend",Rs),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(D),D=B.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,D,L),u=ct.get(T,y.length),u.init(D),y.push(u),We.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$.setFromProjectionMatrix(We),xe=this.localClippingEnabled,le=ae.init(this.clippingPlanes,xe),x=ye.get(T,v.length),x.init(),v.push(x),B.enabled===!0&&B.isPresenting===!0){const ce=_.xr.getDepthSensingMesh();ce!==null&&ai(ce,D,-1/0,_.sortObjects)}ai(T,D,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(Q,ie),ft=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,ft&&Ge.addToRenderList(x,T),this.info.render.frame++,le===!0&&ae.beginShadows();const j=u.state.shadowsArray;Me.render(j,T,D),le===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,U=x.transmissive;if(u.setupLights(),D.isArrayCamera){const ce=D.cameras;if(U.length>0)for(let ge=0,Ae=ce.length;ge<Ae;ge++){const Re=ce[ge];Kr(W,U,T,Re)}ft&&Ge.render(T);for(let ge=0,Ae=ce.length;ge<Ae;ge++){const Re=ce[ge];oi(x,T,Re,Re.viewport)}}else U.length>0&&Kr(W,U,T,D),ft&&Ge.render(T),oi(x,T,D);L!==null&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(_,T,D),Mt.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(u=y[y.length-1],le===!0&&ae.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?x=v[v.length-1]:x=null};function ai(T,D,j,W){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){W&&qe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(We);const ge=X.update(T),Ae=T.material;Ae.visible&&x.push(T,ge,Ae,j,qe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const ge=X.update(T),Ae=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),qe.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),qe.copy(ge.boundingSphere.center)),qe.applyMatrix4(T.matrixWorld).applyMatrix4(We)),Array.isArray(Ae)){const Re=ge.groups;for(let $e=0,Ye=Re.length;$e<Ye;$e++){const be=Re[$e],ut=Ae[be.materialIndex];ut&&ut.visible&&x.push(T,ge,ut,j,qe.z,be)}}else Ae.visible&&x.push(T,ge,Ae,j,qe.z,null)}}const ce=T.children;for(let ge=0,Ae=ce.length;ge<Ae;ge++)ai(ce[ge],D,j,W)}function oi(T,D,j,W){const U=T.opaque,ce=T.transmissive,ge=T.transparent;u.setupLightsView(j),le===!0&&ae.setGlobalState(_.clippingPlanes,j),W&&ze.viewport(N.copy(W)),U.length>0&&Ai(U,D,j),ce.length>0&&Ai(ce,D,j),ge.length>0&&Ai(ge,D,j),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Kr(T,D,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new Ts(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?il:dr,minFilter:ms,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const ce=u.state.transmissionRenderTarget[W.id],ge=W.viewport||N;ce.setSize(ge.z,ge.w);const Ae=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(K),ee=_.getClearAlpha(),ee<1&&_.setClearColor(16777215,.5),_.clear(),ft&&Ge.render(j);const Re=_.toneMapping;_.toneMapping=Vr;const $e=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),le===!0&&ae.setGlobalState(_.clippingPlanes,W),Ai(T,j,W),P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let be=0,ut=D.length;be<ut;be++){const St=D[be],ht=St.object,Vt=St.geometry,gt=St.material,Ne=St.group;if(gt.side===er&&ht.layers.test(W.layers)){const Bn=gt.side;gt.side=Dn,gt.needsUpdate=!0,Ns(ht,j,W,Vt,gt,Ne),gt.side=Bn,gt.needsUpdate=!0,Ye=!0}}Ye===!0&&(P.updateMultisampleRenderTarget(ce),P.updateRenderTargetMipmap(ce))}_.setRenderTarget(Ae),_.setClearColor(K,ee),$e!==void 0&&(W.viewport=$e),_.toneMapping=Re}function Ai(T,D,j){const W=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ce=T.length;U<ce;U++){const ge=T[U],Ae=ge.object,Re=ge.geometry,$e=W===null?ge.material:W,Ye=ge.group;Ae.layers.test(j.layers)&&Ns(Ae,D,j,Re,$e,Ye)}}function Ns(T,D,j,W,U,ce){T.onBeforeRender(_,D,j,W,U,ce),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(_,D,j,W,T,ce),U.transparent===!0&&U.side===er&&U.forceSinglePass===!1?(U.side=Dn,U.needsUpdate=!0,_.renderBufferDirect(j,D,W,U,T,ce),U.side=Wr,U.needsUpdate=!0,_.renderBufferDirect(j,D,W,U,T,ce),U.side=er):_.renderBufferDirect(j,D,W,U,T,ce),T.onAfterRender(_,D,j,W,U,ce)}function Ps(T,D,j){D.isScene!==!0&&(D=mt);const W=Ie.get(T),U=u.state.lights,ce=u.state.shadowsArray,ge=U.state.version,Ae=De.getParameters(T,U.state,ce,D,j),Re=De.getProgramCacheKey(Ae);let $e=W.programs;W.environment=T.isMeshStandardMaterial?D.environment:null,W.fog=D.fog,W.envMap=(T.isMeshStandardMaterial?G:b).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?D.environmentRotation:T.envMapRotation,$e===void 0&&(T.addEventListener("dispose",we),$e=new Map,W.programs=$e);let Ye=$e.get(Re);if(Ye!==void 0){if(W.currentProgram===Ye&&W.lightsStateVersion===ge)return $a(T,Ae),Ye}else Ae.uniforms=De.getUniforms(T),T.onBeforeCompile(Ae,_),Ye=De.acquireProgram(Ae,Re),$e.set(Re,Ye),W.uniforms=Ae.uniforms;const be=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=ae.uniform),$a(T,Ae),W.needsLights=ll(T),W.lightsStateVersion=ge,W.needsLights&&(be.ambientLightColor.value=U.state.ambient,be.lightProbe.value=U.state.probe,be.directionalLights.value=U.state.directional,be.directionalLightShadows.value=U.state.directionalShadow,be.spotLights.value=U.state.spot,be.spotLightShadows.value=U.state.spotShadow,be.rectAreaLights.value=U.state.rectArea,be.ltc_1.value=U.state.rectAreaLTC1,be.ltc_2.value=U.state.rectAreaLTC2,be.pointLights.value=U.state.point,be.pointLightShadows.value=U.state.pointShadow,be.hemisphereLights.value=U.state.hemi,be.directionalShadowMap.value=U.state.directionalShadowMap,be.directionalShadowMatrix.value=U.state.directionalShadowMatrix,be.spotShadowMap.value=U.state.spotShadowMap,be.spotLightMatrix.value=U.state.spotLightMatrix,be.spotLightMap.value=U.state.spotLightMap,be.pointShadowMap.value=U.state.pointShadowMap,be.pointShadowMatrix.value=U.state.pointShadowMatrix),W.currentProgram=Ye,W.uniformsList=null,Ye}function Wa(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=xc.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function $a(T,D){const j=Ie.get(T);j.outputColorSpace=D.outputColorSpace,j.batching=D.batching,j.batchingColor=D.batchingColor,j.instancing=D.instancing,j.instancingColor=D.instancingColor,j.instancingMorph=D.instancingMorph,j.skinning=D.skinning,j.morphTargets=D.morphTargets,j.morphNormals=D.morphNormals,j.morphColors=D.morphColors,j.morphTargetsCount=D.morphTargetsCount,j.numClippingPlanes=D.numClippingPlanes,j.numIntersection=D.numClipIntersection,j.vertexAlphas=D.vertexAlphas,j.vertexTangents=D.vertexTangents,j.toneMapping=D.toneMapping}function Xa(T,D,j,W,U){D.isScene!==!0&&(D=mt),P.resetTextureUnits();const ce=D.fog,ge=W.isMeshStandardMaterial?D.environment:null,Ae=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:za,Re=(W.isMeshStandardMaterial?G:b).get(W.envMap||ge),$e=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ye=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!j.morphAttributes.position,ut=!!j.morphAttributes.normal,St=!!j.morphAttributes.color;let ht=Vr;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ht=_.toneMapping);const Vt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,gt=Vt!==void 0?Vt.length:0,Ne=Ie.get(W),Bn=u.state.lights;if(le===!0&&(xe===!0||T!==M)){const An=T===M&&W.id===E;ae.setState(W,T,An)}let pt=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Bn.state.version||Ne.outputColorSpace!==Ae||U.isBatchedMesh&&Ne.batching===!1||!U.isBatchedMesh&&Ne.batching===!0||U.isBatchedMesh&&Ne.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ne.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ne.instancing===!1||!U.isInstancedMesh&&Ne.instancing===!0||U.isSkinnedMesh&&Ne.skinning===!1||!U.isSkinnedMesh&&Ne.skinning===!0||U.isInstancedMesh&&Ne.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ne.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ne.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ne.instancingMorph===!1&&U.morphTexture!==null||Ne.envMap!==Re||W.fog===!0&&Ne.fog!==ce||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ae.numPlanes||Ne.numIntersection!==ae.numIntersection)||Ne.vertexAlphas!==$e||Ne.vertexTangents!==Ye||Ne.morphTargets!==be||Ne.morphNormals!==ut||Ne.morphColors!==St||Ne.toneMapping!==ht||Ne.morphTargetsCount!==gt)&&(pt=!0):(pt=!0,Ne.__version=W.version);let Sn=Ne.currentProgram;pt===!0&&(Sn=Ps(W,D,U));let Ri=!1,un=!1,pr=!1;const Tt=Sn.getUniforms(),zn=Ne.uniforms;if(ze.useProgram(Sn.program)&&(Ri=!0,un=!0,pr=!0),W.id!==E&&(E=W.id,un=!0),Ri||M!==T){ze.buffers.depth.getReversed()?(de.copy(T.projectionMatrix),oE(de),lE(de),Tt.setValue(O,"projectionMatrix",de)):Tt.setValue(O,"projectionMatrix",T.projectionMatrix),Tt.setValue(O,"viewMatrix",T.matrixWorldInverse);const li=Tt.map.cameraPosition;li!==void 0&&li.setValue(O,Be.setFromMatrixPosition(T.matrixWorld)),st.logarithmicDepthBuffer&&Tt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Tt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,un=!0,pr=!0)}if(U.isSkinnedMesh){Tt.setOptional(O,U,"bindMatrix"),Tt.setOptional(O,U,"bindMatrixInverse");const An=U.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Tt.setValue(O,"boneTexture",An.boneTexture,P))}U.isBatchedMesh&&(Tt.setOptional(O,U,"batchingTexture"),Tt.setValue(O,"batchingTexture",U._matricesTexture,P),Tt.setOptional(O,U,"batchingIdTexture"),Tt.setValue(O,"batchingIdTexture",U._indirectTexture,P),Tt.setOptional(O,U,"batchingColorTexture"),U._colorsTexture!==null&&Tt.setValue(O,"batchingColorTexture",U._colorsTexture,P));const mr=j.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0)&&je.update(U,j,Sn),(un||Ne.receiveShadow!==U.receiveShadow)&&(Ne.receiveShadow=U.receiveShadow,Tt.setValue(O,"receiveShadow",U.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(zn.envMap.value=Re,zn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&D.environment!==null&&(zn.envMapIntensity.value=D.environmentIntensity),un&&(Tt.setValue(O,"toneMappingExposure",_.toneMappingExposure),Ne.needsLights&&ol(zn,pr),ce&&W.fog===!0&&me.refreshFogUniforms(zn,ce),me.refreshMaterialUniforms(zn,W,I,ne,u.state.transmissionRenderTarget[T.id]),xc.upload(O,Wa(Ne),zn,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(xc.upload(O,Wa(Ne),zn,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Tt.setValue(O,"center",U.center),Tt.setValue(O,"modelViewMatrix",U.modelViewMatrix),Tt.setValue(O,"normalMatrix",U.normalMatrix),Tt.setValue(O,"modelMatrix",U.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const An=W.uniformsGroups;for(let li=0,ci=An.length;li<ci;li++){const fe=An[li];w.update(fe,Sn),w.bind(fe,Sn)}}return Sn}function ol(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function ll(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,D,j){Ie.get(T.texture).__webglTexture=D,Ie.get(T.depthTexture).__webglTexture=j;const W=Ie.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=j===void 0,W.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,D){const j=Ie.get(T);j.__webglFramebuffer=D,j.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,j=0){L=T,A=D,C=j;let W=!0,U=null,ce=!1,ge=!1;if(T){const Re=Ie.get(T);if(Re.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(O.FRAMEBUFFER,null),W=!1;else if(Re.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Re.__hasExternalTextures)P.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const be=T.depthTexture;if(Re.__boundDepthTexture!==be){if(be!==null&&Ie.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const $e=T.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ge=!0);const Ye=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ye[D])?U=Ye[D][j]:U=Ye[D],ce=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?U=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Ye)?U=Ye[j]:U=Ye,N.copy(T.viewport),z.copy(T.scissor),V=T.scissorTest}else N.copy(ue).multiplyScalar(I).floor(),z.copy(ke).multiplyScalar(I).floor(),V=Ve;if(ze.bindFramebuffer(O.FRAMEBUFFER,U)&&W&&ze.drawBuffers(T,U),ze.viewport(N),ze.scissor(z),ze.setScissorTest(V),ce){const Re=Ie.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,Re.__webglTexture,j)}else if(ge){const Re=Ie.get(T.texture),$e=D||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,j||0,$e)}E=-1},this.readRenderTargetPixels=function(T,D,j,W,U,ce,ge){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Ae=Ae[ge]),Ae){ze.bindFramebuffer(O.FRAMEBUFFER,Ae);try{const Re=T.texture,$e=Re.format,Ye=Re.type;if(!st.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-W&&j>=0&&j<=T.height-U&&O.readPixels(D,j,W,U,Je.convert($e),Je.convert(Ye),ce)}finally{const Re=L!==null?Ie.get(L).__webglFramebuffer:null;ze.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(T,D,j,W,U,ce,ge){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Ae=Ae[ge]),Ae){const Re=T.texture,$e=Re.format,Ye=Re.type;if(!st.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=T.width-W&&j>=0&&j<=T.height-U){ze.bindFramebuffer(O.FRAMEBUFFER,Ae);const be=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,be),O.bufferData(O.PIXEL_PACK_BUFFER,ce.byteLength,O.STREAM_READ),O.readPixels(D,j,W,U,Je.convert($e),Je.convert(Ye),0);const ut=L!==null?Ie.get(L).__webglFramebuffer:null;ze.bindFramebuffer(O.FRAMEBUFFER,ut);const St=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await aE(O,St,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,be),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ce),O.deleteBuffer(be),O.deleteSync(St),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,D=null,j=0){T.isTexture!==!0&&(go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-j),U=Math.floor(T.image.width*W),ce=Math.floor(T.image.height*W),ge=D!==null?D.x:0,Ae=D!==null?D.y:0;P.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,ge,Ae,U,ce),ze.unbindTexture()},this.copyTextureToTexture=function(T,D,j=null,W=null,U=0){T.isTexture!==!0&&(go("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],D=arguments[2],U=arguments[3]||0,j=null);let ce,ge,Ae,Re,$e,Ye,be,ut,St;const ht=T.isCompressedTexture?T.mipmaps[U]:T.image;j!==null?(ce=j.max.x-j.min.x,ge=j.max.y-j.min.y,Ae=j.isBox3?j.max.z-j.min.z:1,Re=j.min.x,$e=j.min.y,Ye=j.isBox3?j.min.z:0):(ce=ht.width,ge=ht.height,Ae=ht.depth||1,Re=0,$e=0,Ye=0),W!==null?(be=W.x,ut=W.y,St=W.z):(be=0,ut=0,St=0);const Vt=Je.convert(D.format),gt=Je.convert(D.type);let Ne;D.isData3DTexture?(P.setTexture3D(D,0),Ne=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(P.setTexture2DArray(D,0),Ne=O.TEXTURE_2D_ARRAY):(P.setTexture2D(D,0),Ne=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);const Bn=O.getParameter(O.UNPACK_ROW_LENGTH),pt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Sn=O.getParameter(O.UNPACK_SKIP_PIXELS),Ri=O.getParameter(O.UNPACK_SKIP_ROWS),un=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ht.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),O.pixelStorei(O.UNPACK_SKIP_ROWS,$e),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ye);const pr=T.isDataArrayTexture||T.isData3DTexture,Tt=D.isDataArrayTexture||D.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const zn=Ie.get(T),mr=Ie.get(D),An=Ie.get(zn.__renderTarget),li=Ie.get(mr.__renderTarget);ze.bindFramebuffer(O.READ_FRAMEBUFFER,An.__webglFramebuffer),ze.bindFramebuffer(O.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let ci=0;ci<Ae;ci++)pr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.get(T).__webglTexture,U,Ye+ci),T.isDepthTexture?(Tt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.get(D).__webglTexture,U,St+ci),O.blitFramebuffer(Re,$e,ce,ge,be,ut,ce,ge,O.DEPTH_BUFFER_BIT,O.NEAREST)):Tt?O.copyTexSubImage3D(Ne,U,be,ut,St+ci,Re,$e,ce,ge):O.copyTexSubImage2D(Ne,U,be,ut,St+ci,Re,$e,ce,ge);ze.bindFramebuffer(O.READ_FRAMEBUFFER,null),ze.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Tt?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Ne,U,be,ut,St,ce,ge,Ae,Vt,gt,ht.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(Ne,U,be,ut,St,ce,ge,Ae,Vt,ht.data):O.texSubImage3D(Ne,U,be,ut,St,ce,ge,Ae,Vt,gt,ht):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,U,be,ut,ce,ge,Vt,gt,ht.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,U,be,ut,ht.width,ht.height,Vt,ht.data):O.texSubImage2D(O.TEXTURE_2D,U,be,ut,ce,ge,Vt,gt,ht);O.pixelStorei(O.UNPACK_ROW_LENGTH,Bn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Sn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ri),O.pixelStorei(O.UNPACK_SKIP_IMAGES,un),U===0&&D.generateMipmaps&&O.generateMipmap(Ne),ze.unbindTexture()},this.copyTextureToTexture3D=function(T,D,j=null,W=null,U=0){return T.isTexture!==!0&&(go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,W=arguments[1]||null,T=arguments[2],D=arguments[3],U=arguments[4]||0),go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,D,j,W,U)},this.initRenderTarget=function(T){Ie.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),ze.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,ze.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),n.unpackColorSpace=vt._getUnpackColorSpace()}}class _p{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=n}clone(){return new _p(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _C extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class qx extends Ga{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $c=new k,Xc=new k,z0=new Lt,lo=new mp,Yl=new pu,_d=new k,H0=new k;class yC extends _n{constructor(e=new si,n=new qx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)$c.fromBufferAttribute(n,r-1),Xc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=$c.distanceTo(Xc);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(r),Yl.radius+=s,e.ray.intersectsSphere(Yl)===!1)return;z0.copy(r).invert(),lo.copy(e.ray).applyMatrix4(z0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let S=m,x=g-1;S<x;S+=c){const u=h.getX(S),v=h.getX(S+1),y=Kl(this,e,lo,l,u,v);y&&n.push(y)}if(this.isLineLoop){const S=h.getX(g-1),x=h.getX(m),u=Kl(this,e,lo,l,S,x);u&&n.push(u)}}else{const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let S=m,x=g-1;S<x;S+=c){const u=Kl(this,e,lo,l,S,S+1);u&&n.push(u)}if(this.isLineLoop){const S=Kl(this,e,lo,l,g-1,m);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kl(t,e,n,i,r,s){const a=t.geometry.attributes.position;if($c.fromBufferAttribute(a,r),Xc.fromBufferAttribute(a,s),n.distanceSqToSegment($c,Xc,_d,H0)>i)return;_d.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(_d);if(!(l<e.near||l>e.far))return{distance:l,point:H0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const V0=new k,G0=new k;class SC extends yC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)V0.fromBufferAttribute(n,r),G0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+V0.distanceTo(G0);e.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const h=i[r],p=i[r+1]-h,m=(a-h)/p;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new He:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new k,r=[],s=[],a=[],o=new k,l=new Lt;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new k)}s[0]=new k,a[0]=new k;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),p=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),p<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(nn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(nn(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Yx extends hr{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new He){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*d+this.aX,c=p*d+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class MC extends Yx{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function yp(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let p=(a-s)/c-(o-s)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+d)+(l-o)/d;p*=h,m*=h,r(a,o,p,m)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const Zl=new k,yd=new yp,Sd=new yp,Md=new yp;class Kx extends hr{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new k){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(Zl.subVectors(r[0],r[1]).add(r[0]),c=Zl);const d=r[o%s],p=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Zl.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Zl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),m),S=Math.pow(d.distanceToSquared(p),m),x=Math.pow(p.distanceToSquared(h),m);S<1e-4&&(S=1),g<1e-4&&(g=S),x<1e-4&&(x=S),yd.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,g,S,x),Sd.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,g,S,x),Md.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,g,S,x)}else this.curveType==="catmullrom"&&(yd.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),Sd.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),Md.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return i.set(yd.calc(l),Sd.calc(l),Md.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function j0(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*t+n}function EC(t,e){const n=1-t;return n*n*e}function wC(t,e){return 2*(1-t)*t*e}function bC(t,e){return t*t*e}function No(t,e,n,i){return EC(t,e)+wC(t,n)+bC(t,i)}function TC(t,e){const n=1-t;return n*n*n*e}function CC(t,e){const n=1-t;return 3*n*n*t*e}function AC(t,e){return 3*(1-t)*t*t*e}function RC(t,e){return t*t*t*e}function Po(t,e,n,i,r){return TC(t,e)+CC(t,n)+AC(t,i)+RC(t,r)}class NC extends hr{constructor(e=new He,n=new He,i=new He,r=new He){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new He){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Po(e,r.x,s.x,a.x,o.x),Po(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class PC extends hr{constructor(e=new k,n=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Po(e,r.x,s.x,a.x,o.x),Po(e,r.y,s.y,a.y,o.y),Po(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LC extends hr{constructor(e=new He,n=new He){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new He){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new He){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kC extends hr{constructor(e=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new k){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class IC extends hr{constructor(e=new He,n=new He,i=new He){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new He){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(No(e,r.x,s.x,a.x),No(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zx extends hr{constructor(e=new k,n=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(No(e,r.x,s.x,a.x),No(e,r.y,s.y,a.y),No(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DC extends hr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new He){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return i.set(j0(o,l.x,c.x,h.x,d.x),j0(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new He().fromArray(r))}return this}}var UC=Object.freeze({__proto__:null,ArcCurve:MC,CatmullRomCurve3:Kx,CubicBezierCurve:NC,CubicBezierCurve3:PC,EllipseCurve:Yx,LineCurve:LC,LineCurve3:kC,QuadraticBezierCurve:IC,QuadraticBezierCurve3:Zx,SplineCurve:DC});class qc extends si{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],p=[],m=[];let g=0;const S=[],x=i/2;let u=0;v(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(m,2));function v(){const _=new k,R=new k;let A=0;const C=(n-e)/i;for(let L=0;L<=s;L++){const E=[],M=L/s,N=M*(n-e)+e;for(let z=0;z<=r;z++){const V=z/r,K=V*l+o,ee=Math.sin(K),Y=Math.cos(K);R.x=N*ee,R.y=-M*i+x,R.z=N*Y,d.push(R.x,R.y,R.z),_.set(ee,C,Y).normalize(),p.push(_.x,_.y,_.z),m.push(V,1-M),E.push(g++)}S.push(E)}for(let L=0;L<r;L++)for(let E=0;E<s;E++){const M=S[E][L],N=S[E+1][L],z=S[E+1][L+1],V=S[E][L+1];(e>0||E!==0)&&(h.push(M,N,V),A+=3),(n>0||E!==s-1)&&(h.push(N,z,V),A+=3)}c.addGroup(u,A,0),u+=A}function y(_){const R=g,A=new He,C=new k;let L=0;const E=_===!0?e:n,M=_===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,x*M,0),p.push(0,M,0),m.push(.5,.5),g++;const N=g;for(let z=0;z<=r;z++){const K=z/r*l+o,ee=Math.cos(K),Y=Math.sin(K);C.x=E*Y,C.y=x*M,C.z=E*ee,d.push(C.x,C.y,C.z),p.push(0,M,0),A.x=ee*.5+.5,A.y=Y*.5*M+.5,m.push(A.x,A.y),g++}for(let z=0;z<r;z++){const V=R+z,K=N+z;_===!0?h.push(K,K+1,V):h.push(K+1,K,V),L+=3}c.addGroup(u,L,_===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vi extends si{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new k,p=new k,m=[],g=[],S=[],x=[];for(let u=0;u<=i;u++){const v=[],y=u/i;let _=0;u===0&&a===0?_=.5/n:u===i&&l===Math.PI&&(_=-.5/n);for(let R=0;R<=n;R++){const A=R/n;d.x=-e*Math.cos(r+A*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+y*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),S.push(p.x,p.y,p.z),x.push(A+_,1-y),v.push(c++)}h.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const y=h[u][v+1],_=h[u][v],R=h[u+1][v],A=h[u+1][v+1];(u!==0||a>0)&&m.push(y,_,A),(u!==i-1||l<Math.PI)&&m.push(_,R,A)}this.setIndex(m),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(S,3)),this.setAttribute("uv",new $t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sp extends si{constructor(e=new Zx(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new k,l=new k,c=new He;let h=new k;const d=[],p=[],m=[],g=[];S(),this.setIndex(g),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(m,2));function S(){for(let y=0;y<n;y++)x(y);x(s===!1?n:0),v(),u()}function x(y){h=e.getPointAt(y/n,h);const _=a.normals[y],R=a.binormals[y];for(let A=0;A<=r;A++){const C=A/r*Math.PI*2,L=Math.sin(C),E=-Math.cos(C);l.x=E*_.x+L*R.x,l.y=E*_.y+L*R.y,l.z=E*_.z+L*R.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function u(){for(let y=1;y<=n;y++)for(let _=1;_<=r;_++){const R=(r+1)*(y-1)+(_-1),A=(r+1)*y+(_-1),C=(r+1)*y+_,L=(r+1)*(y-1)+_;g.push(R,A,L),g.push(A,C,L)}}function v(){for(let y=0;y<=n;y++)for(let _=0;_<=r;_++)c.x=y/n,c.y=_/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Sp(new UC[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ze extends Ga{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Px,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mp extends _n{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class OC extends Mp{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Ed=new Lt,W0=new k,$0=new k;class FC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vp,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;W0.setFromMatrixPosition(e.matrixWorld),n.position.copy(W0),$0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt($0),n.updateMatrixWorld(),Ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const X0=new Lt,co=new k,wd=new k;class BC extends FC{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),co.setFromMatrixPosition(e.matrixWorld),i.position.copy(co),wd.copy(i.position),wd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(wd),i.updateMatrixWorld(),r.makeTranslation(-co.x,-co.y,-co.z),X0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(X0)}}class Ql extends Mp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new BC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zC extends Mp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class HC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=q0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=q0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function q0(){return performance.now()}const Y0=new Lt;class VC{constructor(e,n,i=0,r=1/0){this.ray=new mp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new gp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Y0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Y0),this}intersectObject(e,n=!0,i=[]){return ch(e,this,i,n),i.sort(K0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ch(e[r],this,i,n);return i.sort(K0),i}}function K0(t,e){return t.distance-e.distance}function ch(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)ch(s[a],e,n,!0)}}class GC{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jC extends SC{constructor(e=10,n=10,i=4473924,r=8947848){i=new ot(i),r=new ot(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let p=0,m=0,g=-o;p<=n;p++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const S=p===s?i:r;S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3}const h=new si;h.setAttribute("position",new $t(l,3)),h.setAttribute("color",new $t(c,3));const d=new qx({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);class WC{constructor(){Oe(this,"ctx",null);Oe(this,"enabled",!0)}initCtx(){if(!this.enabled)return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}playKeyClick(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.createOscillator(),i=e.createGain(),r=e.currentTime;n.type="triangle",n.frequency.setValueAtTime(1400+Math.random()*300,r),n.frequency.exponentialRampToValueAtTime(120,r+.02),i.gain.setValueAtTime(.04,r),i.gain.exponentialRampToValueAtTime(1e-4,r+.02),n.connect(i),i.connect(e.destination),n.start(r),n.stop(r+.02)}catch{}}playCableSnap(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="square",i.frequency.setValueAtTime(600,n),i.frequency.exponentialRampToValueAtTime(80,n+.04),r.gain.setValueAtTime(.12,n),r.gain.exponentialRampToValueAtTime(.001,n+.05),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.05)}catch{}}playSuccessBeep(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((r,s)=>{const a=e.createOscillator(),o=e.createGain(),l=n+s*.08;a.type="sine",a.frequency.setValueAtTime(r,l),o.gain.setValueAtTime(.08,l),o.gain.exponentialRampToValueAtTime(.001,l+.25),a.connect(o),o.connect(e.destination),a.start(l),a.stop(l+.25)})}catch{}}playErrorBeep(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sawtooth",i.frequency.setValueAtTime(150,n),i.frequency.setValueAtTime(120,n+.08),r.gain.setValueAtTime(.1,n),r.gain.exponentialRampToValueAtTime(.001,n+.18),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.18)}catch{}}playRailSlide(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="triangle",i.frequency.setValueAtTime(180,n),i.frequency.linearRampToValueAtTime(320,n+.15),i.frequency.exponentialRampToValueAtTime(90,n+.35),r.gain.setValueAtTime(.06,n),r.gain.linearRampToValueAtTime(.08,n+.12),r.gain.exponentialRampToValueAtTime(1e-4,n+.35),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.35)}catch{}}playLatchClick(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="square",i.frequency.setValueAtTime(950,n),i.frequency.exponentialRampToValueAtTime(140,n+.04),r.gain.setValueAtTime(.08,n),r.gain.exponentialRampToValueAtTime(.001,n+.04),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.04)}catch{}}playSwitchClick(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="triangle",i.frequency.setValueAtTime(340,n),i.frequency.exponentialRampToValueAtTime(80,n+.035),r.gain.setValueAtTime(.12,n),r.gain.exponentialRampToValueAtTime(.001,n+.04),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.04)}catch{}}playFanSpool(){if(this.enabled)try{const e=this.initCtx();if(!e)return;const n=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",i.frequency.setValueAtTime(180,n),i.frequency.linearRampToValueAtTime(540,n+.4),i.frequency.exponentialRampToValueAtTime(220,n+.8),r.gain.setValueAtTime(.02,n),r.gain.linearRampToValueAtTime(.05,n+.3),r.gain.exponentialRampToValueAtTime(.001,n+.8),i.connect(r),r.connect(e.destination),i.start(n),i.stop(n+.8)}catch{}}}const Le=new WC;/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function XC(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:$C(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=t=>{const e=qC(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function bd(t){return t!=null}function KC(t,e={}){var p,m;const n=e.attributeNames??{},i=g=>n[g]??g,r=t.size??t.width??is.width,s=t.size??t.height??is.height,a=((p=t.aliases)==null?void 0:p.filter(g=>typeof g=="string"&&g.trim()!=="").map(g=>`lucide-${g}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],l=((m=e.className)==null?void 0:m.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?uh(...l):uh("lucide",...o,...l),h=e.absoluteStrokeWidth?Number(e.strokeWidth??is["stroke-width"])*Number(t.size??t.width??is.width)/Number(e.size??e.width??is.width):e.strokeWidth??is["stroke-width"];return["svg",{...Object.entries(is).reduce((g,[S,x])=>(g[i(S)]=x,g),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&bd(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&bd(e.width)&&{[i("width")]:e.width},..."height"in e&&bd(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:h,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(g=>{const[S,x,u]=g,v=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...x}:x;return u?[S,v,u]:[S,v]})]}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ZC(t,e={}){return KC(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},JC=se.createContext({}),eA=()=>se.useContext(JC),tA=se.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:c=[],icon:h={node:c,aliases:[],size:24},...d},p)=>{const{size:m=24,strokeWidth:g=2,absoluteStrokeWidth:S=!1,nonScalingStroke:x=!1,color:u="currentColor",className:v=""}=eA()??{},y=!!l||QC(d),[_,R,A=[]]=ZC(h,{color:t??u,width:n??e??m,height:i??e??m,strokeWidth:r??g,absoluteStrokeWidth:s??S,nonScalingStroke:a??x,className:uh(v,o),hasA11yProp:y,attributes:d});return se.createElement(_,{ref:p,...R},[...A.map(([C,L])=>se.createElement(C,L)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Fe(t,e=[],n=[]){const i=typeof t=="string"?XC(t,e,n):t,r=se.forwardRef(({className:s,...a},o)=>se.createElement(tA,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=YC(i.name)),r}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Qx.node;const nA=Fe(Qx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};Jx.node;const Z0=Fe(Jx);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};e_.node;const dh=Fe(e_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_={name:"cable",size:24,node:[["path",{d:"M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z",key:"trhst0"}],["path",{d:"M17 21v-2",key:"ds4u3f"}],["path",{d:"M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10",key:"1mo9zo"}],["path",{d:"M21 21v-2",key:"eo0ou"}],["path",{d:"M3 5V3",key:"1k5hjh"}],["path",{d:"M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z",key:"1dd30t"}],["path",{d:"M7 5V3",key:"1t1388"}]]};t_.node;const fh=Fe(t_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};n_.node;const Q0=Fe(n_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};i_.node;const r_=Fe(i_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};s_.node;const a_=Fe(s_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};o_.node;const iA=Fe(o_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};l_.node;const rA=Fe(l_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};c_.node;const u_=Fe(c_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};d_.node;const sA=Fe(d_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};f_.node;const _s=Fe(f_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};h_.node;const J0=Fe(h_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_={name:"circle",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]};p_.node;const m_=Fe(p_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};g_.node;const gu=Fe(g_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};v_.node;const aA=Fe(v_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};x_.node;const eg=Fe(x_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __={name:"earth",size:24,node:[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["globe-2"]};__.node;const tg=Fe(__);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};y_.node;const oA=Fe(y_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_={name:"file-code",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]]};S_.node;const ng=Fe(S_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};M_.node;const Ua=Fe(M_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_={name:"folder-open",size:24,node:[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]};E_.node;const lA=Fe(E_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_={name:"hard-drive",size:24,node:[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]]};w_.node;const cA=Fe(w_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};b_.node;const Td=Fe(b_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_={name:"keyboard",size:24,node:[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]};T_.node;const uA=Fe(T_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};C_.node;const A_=Fe(C_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};R_.node;const Ep=Fe(R_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};N_.node;const Yc=Fe(N_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};P_.node;const L_=Fe(P_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};k_.node;const dA=Fe(k_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};I_.node;const fA=Fe(I_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};D_.node;const hA=Fe(D_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_={name:"power",size:24,node:[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]};U_.node;const pA=Fe(U_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};O_.node;const mA=Fe(O_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};F_.node;const B_=Fe(F_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};z_.node;const gA=Fe(z_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};H_.node;const vA=Fe(H_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};V_.node;const xA=Fe(V_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};G_.node;const _A=Fe(G_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_={name:"shield-alert",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]};j_.node;const yA=Fe(j_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};W_.node;const $_=Fe(W_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};X_.node;const SA=Fe(X_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]};q_.node;const MA=Fe(q_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Y_.node;const EA=Fe(Y_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};K_.node;const wA=Fe(K_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};Z_.node;const Zo=Fe(Z_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};Q_.node;const _c=Fe(Q_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};J_.node;const e1=Fe(J_);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};t1.node;const n1=Fe(t1);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1={name:"wind",size:24,node:[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]};i1.node;const bA=Fe(i1);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};r1.node;const al=Fe(r1);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};s1.node;const TA=Fe(s1),Jl=[{id:"blue",label:"Cat6 Blue",role:"General LAN / Access",hex:2450411,css:"#2563eb"},{id:"cyan",label:"Aqua Cyan",role:"802.1Q Trunk / Uplink",hex:440020,css:"#06b6d4"},{id:"amber",label:"Amber Gold",role:"Workstation / Sales VLAN 20",hex:16096779,css:"#f59e0b"},{id:"green",label:"Emerald",role:"Default Gateway / Core",hex:1096065,css:"#10b981"},{id:"red",label:"Crimson Red",role:"Firewall / DMZ Security",hex:15680580,css:"#ef4444"},{id:"purple",label:"SOC Purple",role:"SPAN / IDS Tap Sensor",hex:11032055,css:"#a855f7"},{id:"orange",label:"Fiber Orange",role:"SAN Storage Array",hex:15357964,css:"#ea580c"},{id:"slate",label:"Stealth Slate",role:"Out-of-Band / IPMI Mgmt",hex:4674921,css:"#475569"},{id:"yellow",label:"High-Vis Yellow",role:"Restricted / Audit Zone",hex:15381256,css:"#eab308"},{id:"white",label:"Polar White",role:"Inter-Rack Backbone Tie",hex:16317180,css:"#f8fafc"}],rs=[{id:"KVM1",name:"1U Master Rack Console (KVM Drawer)",rack:"Rack A",slot:1,uHeight:1,y:2.62,zBase:0,color:988970,canSlide:!0,canTerminal:!1,model:"kvm_1u",specs:'17" TFT 1080p Fold-Up LCD • 104-Key Chiclet Keyboard • USB/VGA Hub',isKvm:!0},{id:"BRUSH_A",name:"1U Cable Management Duct",rack:"Rack A",slot:2,uHeight:1,y:2.44,zBase:0,color:988970,canSlide:!1,canTerminal:!1,model:"duct_1u",specs:"Horizontal high-density nylon brush passthrough with strain relief"},{id:"R1",name:"Router R1 (Cisco 2901 ISR)",rack:"Rack A",slot:3,uHeight:1,y:2.22,zBase:0,color:165063,canSlide:!0,canTerminal:!0,model:"router_2port",specs:"Cisco 2901 Integrated Services Router • 2x GigabitEthernet • Cisco IOS 15.1"},{id:"PATCH_A",name:"1U 24-Port Cat6 Patch Bay",rack:"Rack A",slot:4,uHeight:1,y:2.02,zBase:0,color:1976635,canSlide:!1,canTerminal:!1,model:"patch_24",specs:"24-Port RJ45 Cat6 TIA-568A/B Unshielded 110 Punchdown Bay"},{id:"FIBER_A",name:"1U OM4 LC Duplex Fiber Enclosure",rack:"Rack A",slot:5,uHeight:1,y:1.86,zBase:0,color:536393,canSlide:!1,canTerminal:!1,model:"fiber_1u",specs:"12x LC Duplex Aqua Couplers • 50/125µm Multimode 100G Trunking"},{id:"S1",name:"Switch S1 (Cisco Catalyst 2960)",rack:"Rack A",slot:6,uHeight:1,y:1.68,zBase:0,color:3359061,canSlide:!0,canTerminal:!0,model:"switch_24",specs:"Cisco Catalyst 2960-24TT • 24x 10/100 + 2x 1000BASE-T • 802.1Q Trunking"},{id:"WEB1",name:"Server WEB1 (PowerEdge R640)",rack:"Rack A",slot:7,uHeight:1,y:1.48,zBase:0,color:1976635,canSlide:!0,canTerminal:!0,model:"server",specs:"Dell PowerEdge R640 1U • 2x Intel Xeon Silver • 64GB DDR4 • Apache/PHP",driveCount:8},{id:"HSM1",name:"Hardware Security Module (HSM-100)",rack:"Rack A",slot:8,uHeight:1,y:1.32,zBase:0,color:7346805,canSlide:!0,canTerminal:!1,model:"hsm_1u",specs:"FIPS 140-2 Level 4 Crypto Processor • Zeroized Tamper Grid • OLED Screen"},{id:"DB1",name:"Server DB1 (Database Array)",rack:"Rack A",slot:9,uHeight:2,y:1.1,zBase:0,color:1120295,canSlide:!0,canTerminal:!1,model:"server_2u",specs:"2U Storage Server • 12x 3.84TB SAS SSD • Hardware RAID 10 • MySQL Core",driveCount:12},{id:"FW1",name:"Firewall FW1 (Next-Gen Appliance)",rack:"Rack A",slot:11,uHeight:1,y:.82,zBase:0,color:10033947,canSlide:!0,canTerminal:!1,model:"firewall_1u",specs:"Enterprise State-Inspection Firewall • Deep Packet Inspection • IPS Engine"},{id:"ENV1",name:"Rack Environmental & Thermal Monitor",rack:"Rack A",slot:12,uHeight:1,y:.66,zBase:0,color:413243,canSlide:!1,canTerminal:!1,model:"env_1u",specs:"Dual Temp & Humidity Sensors (21.4°C / 42% RH) • 320 CFM Airflow Mon"},{id:"PDU1",name:"Smart Rack PDU & UPS Battery",rack:"Rack A",slot:13,uHeight:2,y:.4,zBase:0,color:988970,canSlide:!1,canTerminal:!1,model:"ups_2u",specs:"APC Smart-UPS On-Line 3000VA • Dual Inverter • 208V/120V Pure Sine"},{id:"BRUSH_B",name:"1U Cable Management Duct B",rack:"Rack B",slot:1,uHeight:1,y:2.62,zBase:-1.4,color:988970,canSlide:!1,canTerminal:!1,model:"duct_1u",specs:"Rack B Top-of-rack horizontal cable management duct"},{id:"R2",name:"Core Router R2 (Gateway B)",rack:"Rack B",slot:2,uHeight:1,y:2.38,zBase:-1.4,color:165063,canSlide:!0,canTerminal:!1,model:"router_2port",specs:"Redundant Core Edge Router • Dual 10G SFP+ Uplinks • BGP Peering"},{id:"PATCH_B",name:"1U Cat6A Shielded Patch Bay",rack:"Rack B",slot:3,uHeight:1,y:2.16,zBase:-1.4,color:1976635,canSlide:!1,canTerminal:!1,model:"patch_24",specs:"24-Port STP Shielded Cat6A Patch Panel • 10GbE Certified"},{id:"S2",name:"Distribution Switch S2",rack:"Rack B",slot:4,uHeight:1,y:1.94,zBase:-1.4,color:3359061,canSlide:!0,canTerminal:!1,model:"switch_24",specs:"Catalyst 3850 24-Port Stackable Distribution Switch • Multigigabit"},{id:"FIBER_B",name:"1U MPO/MTP High-Density Cassette",rack:"Rack B",slot:5,uHeight:1,y:1.76,zBase:-1.4,color:536393,canSlide:!1,canTerminal:!1,model:"fiber_1u",specs:"24-Fiber MPO to LC Breakout Module • Low Insertion Loss"},{id:"SAN1",name:"SAN Storage Array (Enterprise Vault)",rack:"Rack B",slot:6,uHeight:2,y:1.52,zBase:-1.4,color:1976635,canSlide:!0,canTerminal:!1,model:"storage_2u",specs:"12-Bay Fibre Channel / iSCSI SAN Storage Array • 192TB RAW",driveCount:12},{id:"SAN_EXP",name:"SAN High-Density Expansion Shelf",rack:"Rack B",slot:8,uHeight:2,y:1.2,zBase:-1.4,color:1120295,canSlide:!0,canTerminal:!1,model:"storage_2u",specs:"12-Bay JBOD Expansion Enclosure • 12Gb/s SAS-3 Interconnect",driveCount:12},{id:"IDS1",name:"Security Sensor IDS1 (Suricata/Zeek)",rack:"Rack B",slot:10,uHeight:1,y:.94,zBase:-1.4,color:8266446,canSlide:!0,canTerminal:!1,model:"sensor_1u",specs:"Full-Packet Capture & Network Intrusion Detection Appliance • Tap Interface"},{id:"APP2",name:"Secondary Compute Node APP2",rack:"Rack B",slot:11,uHeight:2,y:.68,zBase:-1.4,color:1120295,canSlide:!0,canTerminal:!1,model:"server_2u",specs:"Kubernetes Worker Node 02 • High-Memory 128GB • Docker Container Host",driveCount:8},{id:"UPS2",name:"Backup Battery Array UPS2",rack:"Rack B",slot:13,uHeight:2,y:.36,zBase:-1.4,color:988970,canSlide:!1,canTerminal:!1,model:"ups_2u",specs:"Redundant Power Distribution Unit • Phase Balanced • ATS Failover"}],uo=(t,e)=>`${t}|${e}`,ec=(t,e)=>t.endsWith(`:${e}`),CA=({sim:t,scenarioId:e,simRevision:n,onOpenTerminal:i,selectedPort:r,onSelectPort:s,onOpenThreatMap:a})=>{const o=se.useRef(null),l=se.useRef(null),[c,h]=se.useState(null),[d,p]=se.useState(null),[m,g]=se.useState("R1"),[S,x]=se.useState(["WEB1"]),[u,v]=se.useState(null),[y,_]=se.useState({WEB1:[2]}),[R,A]=se.useState(["WEB1"]),[C,L]=se.useState([]),[E,M]=se.useState(!1),[N,z]=se.useState(!0),[V,K]=se.useState(0),[ee,Y]=se.useState("#2563eb"),[ne,I]=se.useState({}),[Q,ie]=se.useState(.28),[ue,ke]=se.useState(!0),[Ve,$]=se.useState(null),[le,xe]=se.useState("#00e5ff"),[de,We]=se.useState(!1),[Be,qe]=se.useState("chassis"),[mt,ft]=se.useState(!1),Dt=se.useRef(!1),O=se.useRef(new Map),cn=se.useRef(new Map),at=se.useRef(null),st=se.useRef(null),ze=se.useRef(null),yt=se.useRef([]),Ie=se.useRef([]),P=se.useRef([]),b=se.useRef(new Map),G=se.useRef([]),Z=se.useRef({pos:new k(0,3.2,5),lookAt:new k(0,1.2,0)}),q=se.useCallback(w=>{v(w),setTimeout(()=>{v(F=>F===w?null:F)},3500)},[]),X=w=>{Le.playKeyClick(),w==="overview"?Z.current={pos:new k(0,3.6,5.5),lookAt:new k(0,1.2,0)}:w==="rack_a"?Z.current={pos:new k(-1.1,1.8,1.5),lookAt:new k(-1.8,1.5,0)}:w==="rack_b"?Z.current={pos:new k(-1.1,1.8,-.1),lookAt:new k(-1.8,1.5,-1.4)}:w==="kvm"?Z.current={pos:new k(-1.4,2.75,.95),lookAt:new k(-1.8,2.62,.45)}:w==="desk_1"?Z.current={pos:new k(.8,1.9,3.3),lookAt:new k(1.9,.2,1.2)}:w==="desk_2"?Z.current={pos:new k(.8,1.9,.9),lookAt:new k(1.9,.2,-1.2)}:w==="soc"&&(Z.current={pos:new k(0,2.2,1.8),lookAt:new k(0,2.2,-2.9)})},De=w=>{Le.playRailSlide(),x(F=>{const B=F.includes(w),H=B?F.filter(te=>te!==w):[...F,w];return q(B?`Retracted ${w} into rack rails.`:`Slid out ${w} chassis on telescopic rails.`),H})},me=w=>{Le.playLatchClick(),A(F=>{const B=F.includes(w),H=B?F.filter(te=>te!==w):[...F,w];return q(B?`Attached top cover lid to ${w}.`:`Removed top lid from ${w} (motherboard exposed).`),H})},ye=w=>{Le.playSwitchClick(),L(F=>{const B=F.includes(w),H=B?F.filter(te=>te!==w):[...F,w];return q(B?`Powering UP ${w} (POST boot sequence initiated).`:`Powering DOWN ${w} (Standby mode).`),H})},ct=(w,F)=>{Le.playLatchClick(),_(B=>{const H=B[w]||[],te=H.includes(F),re=te?H.filter(we=>we!==F):[...H,F];return q(te?`Latched SAS Drive #${F+1} into ${w} backplane.`:`⚠️ Unlatched & ejected SAS Drive #${F+1} from ${w} tray.`),{...B,[w]:re}})},ae=se.useCallback(()=>{const w=at.current;if(w){for(const F of Ie.current)w.remove(F.mesh),F.mesh.geometry.dispose(),Array.isArray(F.mesh.material)?F.mesh.material.forEach(B=>B.dispose()):F.mesh.material.dispose();Ie.current=[];for(const F of P.current)w.remove(F.mesh),F.mesh.geometry.dispose(),F.mesh.material.dispose();P.current=[],G.current=G.current.filter(F=>F.type!=="cable");for(const F of t.links){const B=yt.current.find(oi=>oi.portId===F.a),H=yt.current.find(oi=>oi.portId===F.b);if(!B||!H)continue;const te=B.position.clone(),re=H.position.clone(),we=te.clone().lerp(re,.5),bt=te.distanceTo(re);we.y-=Math.min(.85,bt*Q);const Nt=new Kx([te,we,re]),et=uo(F.a,F.b),sn=uo(F.b,F.a),Xt=Ve===et||Ve===sn;let On=ne[et]||ne[sn];On||(ec(F.a,"GigabitEthernet0/1")||ec(F.b,"GigabitEthernet0/1")?On=440020:F.a.includes("PC-B")||F.b.includes("PC-B")?On=16096779:F.a.includes("PC-A")||F.b.includes("PC-A")||F.a.includes("SOC")||F.b.includes("SOC")?On=2450411:On=1096065);const Rs=new Sp(Nt,38,Xt?.026:.019,8,!1),Fn=new Ze({color:On,roughness:Xt?.2:.35,metalness:Xt?.4:.2,emissive:Xt?On:0,emissiveIntensity:Xt?.35:0}),ai=new _e(Rs,Fn);if(ai.castShadow=!0,w.add(ai),Ie.current.push({mesh:ai,linkKey:et,curve:Nt}),G.current.push({id:et,mesh:ai,type:"cable",meta:{link:F,hex:On}}),ue){const oi=new vi(.026,8,8),Kr=new gi({color:Xt?16777215:8246268}),Ai=new _e(oi,Kr);w.add(Ai),P.current.push({mesh:Ai,curve:Nt,progress:Math.random(),speed:.35+Math.random()*.2})}}for(const F of yt.current){if(!F.ledMesh)continue;const[B,H]=F.portId.split(":"),te=t.devices.get(B),re=te==null?void 0:te.getInterface(H),we=F.ledMesh.material;F.isReserved?(we.color.setHex(15381256),we.emissive.setHex(7421714)):re!=null&&re.peer?re.adminUp?re.operUp?(we.color.setHex(2278750),we.emissive.setHex(1483594)):(we.color.setHex(16096779),we.emissive.setHex(11817737)):(we.color.setHex(16096779),we.emissive.setHex(14251782)):(we.color.setHex(1976635),we.emissive.setHex(0))}}},[t,ne,Q,ue,Ve]);se.useEffect(()=>{ae()},[t.links,n,ne,Q,ue,Ve,ae]);const Me=w=>{Le.playKeyClick();const F={};for(const B of t.links)F[uo(B.a,B.b)]=w;I(F),q("Applied color to all Cat6 network cables in the room.")},Ge=()=>{Le.playSuccessBeep();const w={};for(const F of t.links){const B=uo(F.a,F.b),H=te=>ec(F.a,te)||ec(F.b,te);H("GigabitEthernet0/1")?w[B]=440020:F.a.includes("PC-B")||F.b.includes("PC-B")||H("FastEthernet0/2")?w[B]=16096779:F.a.includes("PC-A")||F.b.includes("PC-A")||H("FastEthernet0/1")?w[B]=2450411:F.a.includes("WEB")||F.b.includes("WEB")?w[B]=1096065:w[B]=2450411}I(w),q("Color-coded all cables conforming to ANSI/TIA-606-C VLAN standards!")},je=w=>{Ve&&(Le.playKeyClick(),I(F=>({...F,[Ve]:w})),q(`Updated color for cable ${Ve}`))};se.useEffect(()=>{const w=o.current;if(!w)return;const F=w.clientWidth,B=w.clientHeight,H=new _C;H.background=new ot(395537),H.fog=new _p(395537,.075),at.current=H;const te=new $n(46,F/B,.1,100);te.position.copy(Z.current.pos),te.lookAt(Z.current.lookAt),st.current=te;const re=new xC({antialias:!0,alpha:!1});re.setSize(F,B),re.setPixelRatio(Math.min(window.devicePixelRatio,2)),re.outputColorSpace=Wn,re.toneMapping=_x,re.toneMappingExposure=1.15,re.shadowMap.enabled=!0,re.shadowMap.type=vx,w.appendChild(re.domElement),ze.current=re;const we=new zC(2766408,1.6);H.add(we);const bt=new OC(3718648,988970,1.3);H.add(bt);const Nt=new Ql(14742270,3.2,16);Nt.position.set(-1.8,3.5,.2),Nt.castShadow=!0,H.add(Nt);const et=new Ql(12248829,2.6,16);et.position.set(-1.8,3.5,-1.4),et.castShadow=!0,H.add(et);const sn=new Ql(9684477,2.2,16);sn.position.set(1.5,3.4,0),H.add(sn);const Xt=new Ql(165063,3.8,8);Xt.position.set(0,2.4,-2.85),H.add(Xt);const On=new yi(16,16),Rs=new Ze({color:725280,roughness:.28,metalness:.65}),Fn=new _e(On,Rs);Fn.rotation.x=-Math.PI/2,Fn.receiveShadow=!0,H.add(Fn);const ai=new jC(16,32,1976635,988970);ai.position.y=.005,H.add(ai);const oi=new Ze({color:527640,roughness:.85}),Kr=new _e(new Ke(16,5,.2),oi);Kr.position.set(0,2.5,-3.2),H.add(Kr);const Ai=new _e(new Ke(.2,5,16),oi);Ai.position.set(-5,2.5,0),H.add(Ai);const Ns=new _e(new yi(16,16),new Ze({color:329485,roughness:.9}));Ns.position.y=4.2,Ns.rotation.x=Math.PI/2,H.add(Ns);for(const fe of[-1.6,.2,1.8]){const ve=new _e(new Ke(1.2,.05,2),new gi({color:16317180}));ve.position.set(-1.8,4.18,fe),H.add(ve);const Xe=new _e(new Ke(1.2,.05,2),new gi({color:16317180}));Xe.position.set(1.5,4.18,fe),H.add(Xe)}const Ps=new Ze({color:15381256,metalness:.7,roughness:.4}),Wa=new _e(new Ke(.6,.04,5),Ps);Wa.position.set(-1.8,3.1,-.6),H.add(Wa);const $a=new _e(new Ke(3.8,2,.1),new Ze({color:1976635,metalness:.8}));$a.position.set(0,2.4,-3.08),H.add($a);const Xa=new _e(new yi(3.6,1.8),new gi({color:165063}));Xa.position.set(0,2.4,-3.02),H.add(Xa);const ol=(fe,ve,Xe)=>{const he=new Lr;he.position.set(fe,0,ve);const Te=new Ze({color:1976635,metalness:.8,roughness:.25}),dt=new Ke(.08,2.95,.08);for(const[Pi,Li]of[[-.48,-.48],[.48,-.48],[-.48,.48],[.48,.48]]){const Rn=new _e(dt,Te);Rn.position.set(Pi,1.47,Li),Rn.castShadow=!0,he.add(Rn)}const _t=new Ze({color:4674921,metalness:.9,roughness:.2}),Ct=new Ke(.04,2.8,.04);for(const Pi of[-.42,.42]){const Li=new _e(Ct,_t);Li.position.set(Pi,1.47,.38),he.add(Li);const Rn=new _e(Ct,_t);Rn.position.set(Pi,1.47,-.38),he.add(Rn)}const Et=new Ze({color:988970,metalness:.7,roughness:.3}),Pe=new _e(new Ke(1.08,.08,1.08),Et);Pe.position.set(0,2.92,0),he.add(Pe);const Ue=new _e(new Ke(1.08,.08,1.08),Et);Ue.position.set(0,.04,0),he.add(Ue);const zt=new Ze({color:593174,roughness:.8,wireframe:!0}),dn=new _e(new Ke(.02,2.75,.98),zt);dn.position.set(-.49,1.47,0),he.add(dn);const Ni=new _e(new Ke(.02,2.75,.98),zt);return Ni.position.set(.49,1.47,0),he.add(Ni),H.add(he),he};ol(-1.8,0),ol(-1.8,-1.4);const ll=(fe,ve,Xe)=>{const he=new Lr;he.position.set(fe,0,ve);const Te=new _e(new Ke(1.4,.06,.9),new Ze({color:3359061,roughness:.45}));Te.position.set(0,.8,0),he.add(Te);const dt=new Ze({color:1976635,metalness:.7});for(const[zt,dn]of[[-.62,-.38],[.62,-.38],[-.62,.38],[.62,.38]]){const Ni=new _e(new Ke(.06,.8,.06),dt);Ni.position.set(zt,.4,dn),he.add(Ni)}const _t=new _e(new Ke(.16,.25,.16),dt);_t.position.set(0,.93,-.15),he.add(_t);const Ct=new _e(new Ke(.7,.45,.05),dt);Ct.position.set(0,1.15,-.15),he.add(Ct);const Et=new _e(new yi(.64,.39),new gi({color:1096065}));Et.position.set(0,1.15,-.12),he.add(Et);const Pe=new _e(new Ke(.42,.02,.14),new Ze({color:988970}));Pe.position.set(0,.83,.15),he.add(Pe);const Ue=new _e(new Ke(.22,.46,.48),new Ze({color:988970,roughness:.4}));return Ue.position.set(.5,.45,0),he.add(Ue),H.add(he),{deskGroup:he,tower:Ue,screen:Et}},T=ll(1.6,1.2),D=ll(1.6,-1.2),j=[],W=[],U=new Map,ce=fe=>{const ve=new Lr,Xe=-1.8,he=fe.zBase;ve.position.set(Xe,fe.y,he);const Te=fe.uHeight*.0444+(fe.uHeight-1)*.02,dt=.88,_t=.72,Ct=[],Et=new Ze({color:fe.color,metalness:.72,roughness:.35}),Pe=new _e(new Ke(dt,Te,_t),Et);Pe.castShadow=!0,ve.add(Pe),W.push({id:fe.id,mesh:Pe,type:fe.canTerminal?"device":"rackUnit"});const Ue=new Ze({color:9741240,metalness:.95,roughness:.15}),zt=new _e(new Ke(.015,Te*.7,_t*.95),Ue);zt.position.set(-dt/2-.01,0,0),ve.add(zt);const dn=new _e(new Ke(.015,Te*.7,_t*.95),Ue);dn.position.set(dt/2+.01,0,0),ve.add(dn);const Ni=new Ze({color:659229,metalness:.8,roughness:.3}),Pi=new _e(new Ke(dt+.02,Te,.02),Ni);Pi.position.set(0,0,_t/2+.01),ve.add(Pi);const Li=new Ze({color:4674921,metalness:.9,roughness:.2});for(const qt of[-dt/2-.03,dt/2+.03]){const Jt=new _e(new Ke(.04,Te,.01),Li);Jt.position.set(qt,0,_t/2+.01),ve.add(Jt)}const Rn=[],Ls=new qc(.009,.009,.012,12),ks=new Ze({color:3718648,metalness:.8}),ki=new _e(Ls,ks);ki.rotation.x=Math.PI/2,ki.position.set(dt/2-.04,0,_t/2+.022),ve.add(ki);const wp=new vi(.005,8,8),qa=new Ze({color:2278750,emissive:1483594}),ui=new _e(wp,qa);ui.position.set(dt/2-.04,Te*.28,_t/2+.023),ve.add(ui),Rn.push(ui),W.push({id:fe.id,mesh:ki,type:"powerBtn",meta:{unitId:fe.id}});let gr;if(fe.canSlide&&!fe.isKvm){const qt=new Ke(dt-.02,.008,_t-.04),Jt=new Ze({color:3359061,metalness:.8,roughness:.25});gr=new _e(qt,Jt),gr.position.set(0,Te/2+.004,-.01),ve.add(gr),Ct.push({mesh:gr,baseY:Te/2+.004,explodeMult:1.4})}const bp=[],Tp=[],Cp=[];if(fe.canSlide&&!fe.isKvm){const qt=new Ze({color:413243,metalness:.4,roughness:.6}),Jt=new _e(new Ke(dt-.06,.008,_t-.15),qt);Jt.position.set(0,-Te/2+.01,-.04),ve.add(Jt),Ct.push({mesh:Jt,baseY:-Te/2+.01,explodeMult:0});const Ii=new Ze({color:12634320,metalness:.85,roughness:.2});for(const fn of[-.14,.14]){const Di=new _e(new Ke(.12,Te*.6,.12),Ii);Di.position.set(fn,-Te/2+Te*.3+.015,-.06),ve.add(Di),Ct.push({mesh:Di,baseY:-Te/2+Te*.3+.015,explodeMult:.6})}const Ds=new Ze({color:1409085,metalness:.5,roughness:.4});for(let fn=0;fn<8;fn++){const Di=-.32+fn*.035,di=new _e(new Ke(.012,Te*.45,.11),Ds);di.position.set(Di,-Te/2+Te*.23,-.06),ve.add(di),Ct.push({mesh:di,baseY:-Te/2+Te*.23,explodeMult:.4})}const Hn=new _e(new Ke(dt-.08,Te*.75,.03),new Ze({color:988970}));Hn.position.set(0,-Te/2+Te*.4,.12),ve.add(Hn),Ct.push({mesh:Hn,baseY:-Te/2+Te*.4,explodeMult:.8});const Us=new Ze({color:1976635,metalness:.3});for(let fn=0;fn<5;fn++){const Di=-.28+fn*.14,di=new _e(new qc(.032,.032,.02,8),Us);di.rotation.x=Math.PI/2,di.position.set(Di,-Te/2+Te*.4,.135),ve.add(di),bp.push(di)}}if(fe.driveCount){const qt=fe.driveCount,Jt=fe.uHeight===2?Math.min(12,qt):Math.min(8,qt),Ii=.085,Ds=-((Jt-1)*Ii)/2;for(let Hn=0;Hn<Jt;Hn++){const Us=Ds+Hn*Ii,fn=new _e(new Ke(.075,Te*.72,.024),new Ze({color:1976635,metalness:.75,roughness:.3})),Di=_t/2+.02;fn.position.set(Us,0,Di),ve.add(fn);const di=new _e(new Ke(.045,.012,.008),new Ze({color:15680580,metalness:.6}));di.position.set(0,-Te*.22,.015),fn.add(di);const vu=new _e(new vi(.006,6,6),new Ze({color:2278750,emissive:1483594}));vu.position.set(.022,Te*.24,.015),fn.add(vu),Tp.push(vu),Cp.push({mesh:fn,baseZ:Di,driveIdx:Hn}),W.push({id:`${fe.id}_drive_${Hn}`,mesh:fn,type:"drive",meta:{unitId:fe.id,driveIdx:Hn}})}}let Is;if(fe.isKvm){const qt=new _e(new Ke(dt-.1,.012,_t-.2),new Ze({color:1976635,roughness:.4}));qt.position.set(0,0,.05),ve.add(qt);const Jt=new Ze({color:988970,roughness:.5}),Ii=new _e(new Ke(.5,.006,.22),Jt);Ii.position.set(-.1,.01,.05),ve.add(Ii);const Ds=new _e(new vi(.018,12,12),new Ze({color:3718648,metalness:.9}));Ds.position.set(.26,.015,.05),ve.add(Ds),Is=new Lr,Is.position.set(0,Te/2,-_t/2+.12);const Hn=new _e(new Ke(.68,.42,.02),new Ze({color:988970,metalness:.8,roughness:.3}));Hn.position.set(0,.21,0),Is.add(Hn);const Us=new _e(new yi(.62,.36),new gi({color:165063}));Us.position.set(0,.21,.012),Is.add(Us),ve.add(Is)}if(fe.id==="HSM1"){const qt=new _e(new Ke(.24,.024,.01),new gi({color:0}));qt.position.set(-.18,0,_t/2+.022),ve.add(qt);const Jt=new _e(new yi(.22,.02),new gi({color:1096065}));Jt.position.set(-.18,0,_t/2+.028),ve.add(Jt)}if(fe.id==="ENV1")for(let qt=0;qt<2;qt++){const Jt=-.16+qt*.32,Ii=new _e(new yi(.12,.024),new gi({color:qt===0?3718648:1096065}));Ii.position.set(Jt,0,_t/2+.022),ve.add(Ii)}return H.add(ve),U.set(fe.id,{group:ve,zBase:he,targetZ:he,fans:bp,leds:Tp,drives:Cp,lidMesh:gr,kvmScreenGroup:Is,subLayers:Ct,powerLeds:Rn}),ve};for(const fe of rs)ce(fe);const ge=[{name:"Gi0/0",canonical:"GigabitEthernet0/0",x:-1.8-.16,isRes:!1},{name:"Gi0/1",canonical:"GigabitEthernet0/1",x:-1.8+.16,isRes:!0}];for(const fe of ge){const ve=`R1:${fe.canonical}`,Xe=t.reservedPorts.has(ve),he=new _e(new Ke(.05,.038,.03),new Ze({color:Xe?15381256:988970}));he.position.set(fe.x,2.22,.38),H.add(he);const Te=new _e(new vi(.012,8,8),new Ze({color:Xe?15381256:1976635}));Te.position.set(fe.x,2.245,.385),H.add(Te),j.push({portId:ve,deviceId:"R1",shortName:fe.name,position:new k(fe.x,2.22,.39),isReserved:Xe,mesh:he,ledMesh:Te})}const Ae=[{name:"Fa0/1",canonical:"FastEthernet0/1",x:-1.8-.32},{name:"Fa0/2",canonical:"FastEthernet0/2",x:-1.8-.24},{name:"Fa0/3",canonical:"FastEthernet0/3",x:-1.8-.16},{name:"Fa0/4",canonical:"FastEthernet0/4",x:-1.8-.08},{name:"Fa0/5",canonical:"FastEthernet0/5",x:-1.8+0},{name:"Gi0/1",canonical:"GigabitEthernet0/1",x:-1.8+.28}];for(const fe of Ae){const ve=`S1:${fe.canonical}`,Xe=t.reservedPorts.has(ve),he=new _e(new Ke(.04,.035,.03),new Ze({color:Xe?15381256:988970}));he.position.set(fe.x,1.68,.38),H.add(he);const Te=new _e(new vi(.01,8,8),new Ze({color:1976635}));Te.position.set(fe.x,1.705,.385),H.add(Te),j.push({portId:ve,deviceId:"S1",shortName:fe.name,position:new k(fe.x,1.68,.39),isReserved:Xe,mesh:he,ledMesh:Te})}const Re="WEB1:Ethernet0",$e=new _e(new Ke(.04,.035,.03),new Ze({color:988970}));$e.position.set(-1.8+.16,1.48,.38),H.add($e);const Ye=new _e(new vi(.01,8,8),new Ze({color:1976635}));Ye.position.set(-1.8+.16,1.505,.385),H.add(Ye),j.push({portId:Re,deviceId:"WEB1",shortName:"Eth0",position:new k(-1.8+.16,1.48,.39),isReserved:!1,mesh:$e,ledMesh:Ye});const be=t.devices.has("SOC-PC")?"SOC-PC":t.devices.has("PC-1")?"PC-1":"PC-A";W.push({id:be,mesh:T.screen,type:"device"}),W.push({id:be,mesh:T.tower,type:"device"});const ut=new _e(new Ke(.04,.035,.03),new Ze({color:988970}));ut.position.set(1.6+.5,.45,1.2+.25),H.add(ut);const St=new _e(new vi(.01,8,8),new Ze({color:1976635}));if(St.position.set(1.6+.5,.48,1.2+.255),H.add(St),j.push({portId:`${be}:Ethernet0`,deviceId:be,shortName:"Eth0",position:new k(1.6+.5,.45,1.2+.26),isReserved:!1,mesh:ut,ledMesh:St}),t.devices.has("PC-B")){W.push({id:"PC-B",mesh:D.screen,type:"device"}),W.push({id:"PC-B",mesh:D.tower,type:"device"});const fe=new _e(new Ke(.04,.035,.03),new Ze({color:988970}));fe.position.set(1.6+.5,.45,-1.2+.25),H.add(fe);const ve=new _e(new vi(.01,8,8),new Ze({color:1976635}));ve.position.set(1.6+.5,.48,-1.2+.255),H.add(ve),j.push({portId:"PC-B:Ethernet0",deviceId:"PC-B",shortName:"Eth0",position:new k(1.6+.5,.45,-1.2+.26),isReserved:!1,mesh:fe,ledMesh:ve})}yt.current=j,b.current=U,G.current=W,O.current=new Map([...Array.from(U.entries()).map(([fe,ve])=>[fe,{id:fe,object:ve.group,offset:new k(0,0,.42)}]),[be,{id:be,object:T.screen,offset:new k(0,.3,0)}],...t.devices.has("PC-B")?[["PC-B",{id:"PC-B",object:D.screen,offset:new k(0,.3,0)}]]:[]]),l.current.updateCablesAndLeds();const ht=new VC,Vt=new He,gt=fe=>{const ve=w.getBoundingClientRect();Vt.x=(fe.clientX-ve.left)/ve.width*2-1,Vt.y=-((fe.clientY-ve.top)/ve.height)*2+1,ht.setFromCamera(Vt,te);const Xe=j.map(Et=>Et.mesh).filter(Et=>!!Et),he=ht.intersectObjects(Xe);if(he.length>0){const Et=he[0].object,Pe=j.find(Ue=>Ue.mesh===Et);if(Pe){h(Pe.portId),p(null),w.style.cursor="pointer";return}}const Te=Ie.current.map(Et=>Et.mesh),dt=ht.intersectObjects(Te);if(dt.length>0){const Et=dt[0].object,Pe=Ie.current.find(Ue=>Ue.mesh===Et);if(Pe){h(null),p(`Cable: ${Pe.linkKey}`),w.style.cursor="pointer";return}}const _t=G.current.map(Et=>Et.mesh),Ct=ht.intersectObjects(_t);if(Ct.length>0){const Et=Ct[0].object,Pe=G.current.find(Ue=>Ue.mesh===Et);if(Pe){Pe.type==="drive"?p(`${Pe.meta.unitId} Drive #${Pe.meta.driveIdx+1} (Hot-Swap)`):Pe.type==="powerBtn"?p(`${Pe.meta.unitId} Power Switch`):p(Pe.id),h(null),w.style.cursor="pointer";return}}h(null),p(null),w.style.cursor="default"},Ne=fe=>{if(Ri>6)return;const ve=w.getBoundingClientRect();Vt.x=(fe.clientX-ve.left)/ve.width*2-1,Vt.y=-((fe.clientY-ve.top)/ve.height)*2+1,ht.setFromCamera(Vt,te);const Xe=j.map(Pe=>Pe.mesh).filter(Pe=>!!Pe),he=ht.intersectObjects(Xe);if(he.length>0){const Pe=he[0].object,Ue=j.find(zt=>zt.mesh===Pe);if(Ue){l.current.handlePortClick(Ue);return}}const Te=Ie.current.map(Pe=>Pe.mesh),dt=ht.intersectObjects(Te);if(dt.length>0){const Pe=dt[0].object,Ue=Ie.current.find(zt=>zt.mesh===Pe);if(Ue){Le.playKeyClick(),$(Ue.linkKey),qe("cables"),q(`Selected cable: ${Ue.linkKey}. Customize jacket color, sag, or disconnect below.`);return}}const _t=G.current.map(Pe=>Pe.mesh),Ct=ht.intersectObjects(_t);if(Ct.length>0){const Pe=Ct[0].object,Ue=G.current.find(zt=>zt.mesh===Pe);if(Ue){if(Ue.type==="drive"){l.current.toggleDriveEject(Ue.meta.unitId,Ue.meta.driveIdx);return}if(Ue.type==="powerBtn"){l.current.toggleChassisPower(Ue.meta.unitId);return}if(l.current.selectedPort&&Ue.type==="device"){const zt=j.filter(dn=>dn.deviceId===Ue.id);if(zt.length===1){l.current.handlePortClick(zt[0]);return}}Le.playKeyClick(),g(Ue.id),Ue.type==="device"&&t.devices.has(Ue.id)&&l.current.onOpenTerminal(Ue.id);return}}if(ht.intersectObject(Xa).length>0&&l.current.onOpenThreatMap){Le.playKeyClick(),l.current.onOpenThreatMap();return}};w.addEventListener("mousemove",gt),w.addEventListener("click",Ne);let Bn=!1,pt=0,Sn=0,Ri=0;const un=fe=>{fe.button===0&&(Bn=!0,Ri=0,pt=fe.clientX,Sn=fe.clientY)},pr=()=>{Bn=!1},Tt=fe=>{if(!Bn)return;const ve=fe.clientX-pt,Xe=fe.clientY-Sn;Ri+=Math.abs(ve)+Math.abs(Xe),pt=fe.clientX,Sn=fe.clientY;const he=Z.current,Te=he.pos.clone().sub(he.lookAt),dt=new GC().setFromVector3(Te);dt.theta-=ve*.0055,dt.phi=Math.max(.08,Math.min(Math.PI/2-.04,dt.phi-Xe*.0055)),Te.setFromSpherical(dt),he.pos.copy(he.lookAt).add(Te)},zn=fe=>{fe.preventDefault();const ve=Z.current,Xe=ve.pos.clone().sub(ve.lookAt).normalize(),he=ve.pos.distanceTo(ve.lookAt),Te=Math.max(1.1,Math.min(9.5,he+fe.deltaY*.0045));ve.pos.copy(ve.lookAt).add(Xe.multiplyScalar(Te))};w.addEventListener("mousedown",un),window.addEventListener("mouseup",pr),w.addEventListener("mousemove",Tt),w.addEventListener("wheel",zn,{passive:!1});let mr,An=new HC;const li=()=>{mr=requestAnimationFrame(li);const fe=An.getDelta();if(st.current){const Xe=st.current,he=Z.current;Xe.position.lerp(he.pos,.08);const Te=new k(0,0,-1).applyQuaternion(Xe.quaternion).add(Xe.position);Te.lerp(he.lookAt,.08),Xe.lookAt(Te)}if(l.current.isSignalPulseActive)for(const Xe of P.current){Xe.progress=(Xe.progress+fe*Xe.speed)%1;const he=Xe.curve.getPointAt(Xe.progress);Xe.mesh.position.copy(he)}for(const[Xe,he]of U.entries()){const Te=l.current.slidOutUnitIds.includes(Xe),dt=l.current.powerOffUnits.includes(Xe),_t=l.current.lidOpenUnits.includes(Xe),Ct=l.current.selectedUnitId===Xe;if(he.targetZ=Te?he.zBase+.58:he.zBase,he.group.position.z=Al.damp(he.group.position.z,he.targetZ,9,fe),he.subLayers&&Ct)for(const Pe of he.subLayers){const Ue=Pe.baseY+l.current.explodedSeparation*Pe.explodeMult*.18;Pe.mesh.position.y=Al.damp(Pe.mesh.position.y,Ue,8,fe)}he.lidMesh&&(he.lidMesh.visible=!_t);for(const Pe of he.powerLeds){const Ue=Pe.material;dt?(Ue.color.setHex(16096779),Ue.emissive.setHex(7877903)):(Ue.color.setHex(2278750),Ue.emissive.setHex(1483594))}if(he.fans.length>0&&!dt){const Pe=l.current.isTurboFan?58:Te?28:14;for(const Ue of he.fans)Ue.rotation.z+=fe*Pe}const Et=l.current.ejectedDrives[Xe]||[];for(const Pe of he.drives){const zt=Et.includes(Pe.driveIdx)?Pe.baseZ+.14:Pe.baseZ;Pe.mesh.position.z=Al.damp(Pe.mesh.position.z,zt,12,fe)}if(he.leds.length>0&&!dt&&Math.random()<.2){const Pe=Math.floor(Math.random()*he.leds.length),Ue=he.leds[Pe],zt=Et.includes(Pe),dn=Ue.material;zt?(dn.color.setHex(16096779),dn.emissive.setHex(14251782)):(dn.color.setHex(Math.random()>.4?2278750:165063),dn.emissive.setHex(Math.random()>.4?1483594:165063))}if(he.kvmScreenGroup){const Pe=Te&&l.current.isKvmFoldedUp?-Math.PI*.42:0;he.kvmScreenGroup.rotation.x=Al.damp(he.kvmScreenGroup.rotation.x,Pe,8,fe)}}const ve=cn.current;if(Dt.current){const Xe=w.clientWidth,he=w.clientHeight,Te=[],dt=new k;te.getWorldDirection(dt);for(const _t of O.current.values()){const Ct=ve.get(_t.id);if(!Ct)continue;const Et=_t.object.localToWorld(_t.offset.clone()),Pe=Et.clone().sub(te.position),Ue=Et.clone().project(te),zt=dt.dot(Pe)>0,dn=Ue.z>-1&&Ue.z<1&&Math.abs(Ue.x)<.94&&Math.abs(Ue.y)<.9;if(!zt||!dn){Ct.style.opacity="0";continue}const Ni=(Ue.x*.5+.5)*Xe,Pi=(-Ue.y*.5+.5)*he,Li=Math.min(152,Math.max(104,Xe*.3)),Rn=30,Ls=Math.min(Xe-Li-8,Math.max(8,Ni+18)),ks=Math.min(he-Rn-8,Math.max(56,Pi-Rn/2)),ki={left:Ls,top:ks,right:Ls+Li,bottom:ks+Rn};if(Te.some(ui=>ki.left<ui.right+6&&ki.right+6>ui.left&&ki.top<ui.bottom+4&&ki.bottom+4>ui.top)){Ct.style.opacity="0";continue}Te.push(ki),Ct.style.width=`${Li}px`,Ct.style.opacity="1",Ct.style.transform=`translate3d(${Ls}px, ${ks}px, 0)`;const qa=Ct.querySelector("[data-equipment-leader]");if(qa){const ui=Ni-Ls,gr=Pi-(ks+Rn/2);qa.style.width=`${Math.hypot(ui,gr)}px`,qa.style.transform=`rotate(${Math.atan2(gr,ui)}rad)`}}}else for(const Xe of ve.values())Xe.style.opacity="0";re.render(H,te)};li();const ci=()=>{if(!w||!re||!te)return;const fe=w.clientWidth,ve=w.clientHeight;te.aspect=fe/ve,te.updateProjectionMatrix(),re.setSize(fe,ve)};return window.addEventListener("resize",ci),()=>{cancelAnimationFrame(mr),window.removeEventListener("resize",ci),w.removeEventListener("mousemove",gt),w.removeEventListener("click",Ne),w.removeEventListener("mousedown",un),window.removeEventListener("mouseup",pr),w.removeEventListener("mousemove",Tt),w.removeEventListener("wheel",zn),w.contains(re.domElement)&&w.removeChild(re.domElement),re.dispose()}},[t,e]);const Ee=w=>{var re;if(Le.playKeyClick(),w.isReserved){Le.playErrorBeep(),q(`⚠️ Port ${w.portId} is reserved (dust cap attached). Cabling blocked.`);return}const[F,B]=w.portId.split(":"),H=t.devices.get(F),te=H==null?void 0:H.getInterface(B);if(te!=null&&te.peer&&r&&r!==w.portId){Le.playErrorBeep(),q(`⚠️ Port ${w.portId} is already in use. Pick a free port (dark LED).`);return}if(te!=null&&te.peer){const we=t.disconnectLink(w.portId);we.ok?(Le.playCableSnap(),q(`🔌 Unplugged cable from ${w.portId}. Cable returned to inventory.`),s(null),$(null),ae()):(Le.playErrorBeep(),q(`⚠️ ${we.reason||"Cannot unplug cable"}`));return}if(r){if(r===w.portId){s(null),q("Cabling cancelled.");return}const we=t.connectLink(r,w.portId);if(we.ok){Le.playCableSnap();const bt=((re=Jl.find(et=>et.css===ee))==null?void 0:re.hex)||2450411,Nt=uo(r,w.portId);I(et=>({...et,[Nt]:bt})),$(Nt),q(`✅ Connected Cat6 cable: ${r} ↔ ${w.portId}`),s(null),ae()}else Le.playErrorBeep(),q(`❌ Cabling rejected: ${we.reason||"Invalid connection"}`),s(null)}else{if(t.spareCablesCount<=0){Le.playErrorBeep(),q("⚠️ No spare cables remaining in inventory.");return}s(w.portId),q(`Selected port ${w.portId}. Now click a destination port to plug in cable.`)}};l.current={slidOutUnitIds:S,ejectedDrives:y,lidOpenUnits:R,powerOffUnits:C,isTurboFan:E,isKvmFoldedUp:N,explodedSeparation:V,selectedUnitId:m,isSignalPulseActive:ue,selectedPort:r,handlePortClick:Ee,toggleDriveEject:ct,toggleChassisPower:ye,onOpenTerminal:i,onOpenThreatMap:a,updateCablesAndLeds:ae};const Ce=se.useMemo(()=>rs.find(w=>w.id===m)||rs[2],[m]),Je=se.useMemo(()=>{const w=t.devices.has("SOC-PC")?"SOC-PC":t.devices.has("PC-1")?"PC-1":"PC-A";return[...rs.map(F=>({id:F.id,name:F.name})),{id:w,name:`Workstation ${w}`},...t.devices.has("PC-B")?[{id:"PC-B",name:"Sales Workstation PC-B"}]:[]]},[t,e]),Mt=()=>{Le.playKeyClick(),ft(w=>{const F=!w;return Dt.current=F,F})};return f.jsxs("div",{className:"relative w-full h-full select-none overflow-hidden bg-slate-950 font-sans",children:[f.jsx("div",{ref:o,className:"w-full h-full"}),f.jsx("div",{className:"pointer-events-none absolute inset-0 z-[8] overflow-hidden","aria-hidden":!mt,children:Je.map(w=>f.jsxs("div",{ref:F=>{F?cn.current.set(w.id,F):cn.current.delete(w.id)},className:"absolute left-0 top-0 h-[30px] opacity-0 transition-opacity duration-150 will-change-transform",children:[f.jsx("span",{"data-equipment-leader":!0,className:"absolute left-0 top-1/2 h-px origin-left bg-cyan-300 shadow-[0_0_5px_rgba(103,232,249,0.95)] after:absolute after:-right-0.5 after:-top-[3px] after:h-2 after:w-2 after:rotate-45 after:border-r after:border-t after:border-cyan-200"}),f.jsxs("span",{className:"relative z-10 flex h-[30px] items-center gap-1.5 rounded-md border border-cyan-300/70 bg-slate-950/95 px-2 text-[10px] font-semibold text-cyan-50 shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-sm",children:[f.jsx("span",{className:"h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(103,232,249,0.9)]"}),f.jsx("span",{className:"font-mono text-cyan-300",children:w.id}),f.jsx("span",{className:"truncate text-slate-300",children:w.name})]})]},w.id))}),f.jsxs("div",{className:"absolute top-2 left-2 right-2 z-10 flex max-w-max flex-wrap items-center gap-1 rounded-xl border border-slate-800 bg-slate-900/90 p-1.5 text-xs font-medium text-slate-300 shadow-xl sm:top-4 sm:left-4 sm:right-auto",children:[f.jsxs("span",{className:"px-2 py-1 text-slate-400 flex items-center gap-1",children:[f.jsx(Q0,{className:"w-3.5 h-3.5 text-cyan-400"})," Angles:"]}),f.jsx("button",{onClick:()=>X("overview"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-white transition",children:"Overview"}),f.jsx("button",{onClick:()=>X("rack_a"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition",children:"Rack A"}),f.jsx("button",{onClick:()=>X("rack_b"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition",children:"Rack B"}),f.jsx("button",{onClick:()=>X("kvm"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-purple-400 transition",children:"KVM Drawer"}),f.jsx("button",{onClick:()=>X("desk_1"),className:"px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-emerald-400 transition",children:"Desk 1"}),t.devices.has("PC-B")&&f.jsx("button",{onClick:()=>X("desk_2"),className:"min-h-11 px-2.5 py-1 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition sm:min-h-0",children:"Desk 2"}),f.jsxs("button",{type:"button",onClick:Mt,"aria-pressed":mt,"aria-label":`${mt?"Hide":"Show"} equipment labels`,className:`hidden min-h-11 items-center gap-1.5 rounded-lg border px-2.5 py-1 font-semibold transition sm:flex sm:min-h-0 ${mt?"border-cyan-300/70 bg-cyan-400/20 text-cyan-200":"border-slate-700 bg-slate-950/50 text-slate-300 hover:border-cyan-600 hover:text-cyan-300"}`,children:[f.jsx(Td,{className:"h-3.5 w-3.5"}),f.jsx("span",{children:"Labels"}),f.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${mt?"bg-cyan-300":"bg-slate-600"}`})]})]}),f.jsxs("button",{type:"button",onClick:Mt,"aria-pressed":mt,"aria-label":`${mt?"Hide":"Show"} equipment labels`,className:`absolute right-2 top-[270px] z-20 flex min-h-11 items-center gap-2 rounded-xl border px-3 text-xs font-semibold shadow-xl backdrop-blur-md transition sm:hidden ${mt?"border-cyan-300/80 bg-cyan-950/95 text-cyan-100":"border-slate-600 bg-slate-900/95 text-slate-200"}`,children:[f.jsx(Td,{className:"h-4 w-4"}),f.jsx("span",{children:"Equipment labels"}),f.jsx("span",{className:`h-2 w-2 rounded-full ${mt?"bg-cyan-300":"bg-slate-500"}`})]}),f.jsxs("div",{className:"absolute top-4 right-4 z-10 flex items-center gap-3 p-2 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400"}),f.jsxs("span",{className:"text-slate-300",children:["Spare Cables: ",f.jsx("strong",{className:"text-cyan-300 font-mono text-sm",children:t.spareCablesCount})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5 pl-2 border-l border-slate-700",children:[f.jsx("span",{className:"text-slate-400 text-[11px]",children:"Active Color:"}),f.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-white/40 shadow-sm",style:{backgroundColor:ee},title:ee})]}),Ve&&f.jsxs("div",{className:"flex items-center gap-1.5 pl-2 border-l border-slate-700",children:[f.jsx("span",{className:"text-cyan-300 font-mono text-[11px] truncate max-w-[140px]",title:Ve,children:Ve}),f.jsx("button",{onClick:()=>$(null),className:"text-slate-400 hover:text-white px-1",children:"×"})]}),r&&f.jsxs("div",{className:"flex items-center gap-2 pl-3 border-l border-slate-700",children:[f.jsx("span",{className:"text-amber-300",children:"Holding cable from:"}),f.jsx("span",{className:"font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40 font-semibold",children:r}),f.jsx("button",{onClick:()=>s(null),className:"text-slate-400 hover:text-red-400 ml-1 px-1.5 py-0.5 rounded bg-slate-800 hover:bg-red-950/60 transition",children:"Cancel"})]})]}),c&&f.jsxs("div",{className:"absolute bottom-28 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-xl bg-slate-900/95 border border-cyan-500/40 text-xs shadow-2xl pointer-events-none flex items-center gap-3",children:[f.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400"}),f.jsxs("div",{children:[f.jsx("div",{className:"text-cyan-300 font-mono font-semibold",children:c}),f.jsx("div",{className:"text-slate-400 text-[11px]",children:t.reservedPorts.has(c)?"⚠️ Reserved Port (Dust Cap Attached)":"Click to attach / disconnect cable"})]})]}),d&&!c&&f.jsxs("div",{className:"absolute bottom-28 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-xl bg-slate-900/95 border border-indigo-500/40 text-xs shadow-2xl pointer-events-none flex items-center gap-3",children:[f.jsx("div",{className:"w-2 h-2 rounded-full bg-indigo-400"}),f.jsxs("div",{children:[f.jsx("div",{className:"text-indigo-300 font-semibold",children:d}),f.jsx("div",{className:"text-slate-400 text-[11px]",children:"Click to inspect unit, slide rails, or eject drive"})]})]}),f.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center max-w-5xl w-[96%]",children:[f.jsxs("button",{onClick:()=>{Le.playKeyClick(),We(!de)},className:"flex items-center gap-1.5 px-4 py-1.5 rounded-t-xl bg-slate-900/90 border-t border-x border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition shadow-lg",children:[de?f.jsx(u_,{className:"w-3.5 h-3.5 text-cyan-400"}):f.jsx(a_,{className:"w-3.5 h-3.5 text-cyan-400"}),f.jsx("span",{children:de?"Expand 3D Server Room Studio Controls":"Hide Controls"})]}),!de&&f.jsxs("div",{className:"w-full rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl overflow-hidden animate-fade-in flex flex-col",children:[f.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-slate-800 text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[f.jsxs("button",{onClick:()=>qe("chassis"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${Be==="chassis"?"bg-indigo-500/20 text-indigo-300 border border-indigo-500/40":"text-slate-400 hover:text-slate-200"}`,children:[f.jsx(eg,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Chassis Mechanics & Rails"})]}),f.jsxs("button",{onClick:()=>qe("cables"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${Be==="cables"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40":"text-slate-400 hover:text-slate-200"}`,children:[f.jsx(fA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Cable Studio & Palette"})]}),f.jsxs("button",{onClick:()=>qe("catalog"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${Be==="catalog"?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"text-slate-400 hover:text-slate-200"}`,children:[f.jsx(_A,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Rack Equipment Catalog"})]}),f.jsxs("button",{onClick:()=>qe("cameras"),className:`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition ${Be==="cameras"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"text-slate-400 hover:text-slate-200"}`,children:[f.jsx(Q0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Camera Angles"})]})]}),f.jsx("div",{className:"text-[11px] text-slate-500 font-mono hidden md:block",children:"Click chassis/ports/cables to interact • Drag to orbit • Scroll to zoom"})]}),Be==="chassis"&&f.jsxs("div",{className:"p-4 flex flex-col gap-3 text-xs",children:[f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2.5",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40",children:f.jsx(eg,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("div",{className:"font-bold text-white text-sm flex items-center gap-2",children:[f.jsx("span",{children:Ce.name}),f.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono border border-slate-700",children:[Ce.rack," • Slot ",Ce.slot," (",Ce.uHeight,"U)"]}),f.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded font-mono border ${C.includes(Ce.id)?"bg-amber-950 text-amber-300 border-amber-800":"bg-emerald-950 text-emerald-300 border-emerald-800"}`,children:C.includes(Ce.id)?"STANDBY":"RUNNING"})]}),f.jsx("p",{className:"text-[11px] text-slate-400",children:Ce.specs})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[f.jsx("span",{className:"text-slate-400 text-[11px] mr-1",children:"Select Unit:"}),rs.filter(w=>w.canSlide||w.driveCount||w.isKvm).map(w=>f.jsx("button",{onClick:()=>{Le.playKeyClick(),g(w.id)},className:`px-2 py-0.8 rounded text-[11px] font-mono transition ${m===w.id?"bg-indigo-600 text-white font-bold":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:w.id},w.id))]})]}),f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3 pt-1",children:[f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[Ce.canSlide&&f.jsxs("button",{onClick:()=>De(Ce.id),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-lg transition ${S.includes(Ce.id)?"bg-indigo-600 hover:bg-indigo-500 text-white":"bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-indigo-500/30"}`,children:[f.jsx(EA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:S.includes(Ce.id)?"Retract Rails":"Extend Rails (Slide Out)"})]}),Ce.canSlide&&!Ce.isKvm&&f.jsxs("button",{onClick:()=>me(Ce.id),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${R.includes(Ce.id)?"bg-amber-600/30 border border-amber-500/50 text-amber-300":"bg-slate-800 hover:bg-slate-700 text-slate-300"}`,children:[f.jsx(lA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:R.includes(Ce.id)?"Replace Top Lid":"Remove Top Lid (Inspect Board)"})]}),Ce.isKvm&&f.jsxs("button",{onClick:()=>{Le.playKeyClick(),z(!N),q(N?"Folded LCD display down.":"Flipped LCD display up 75° to view status.")},className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${N?"bg-purple-600 text-white shadow-lg":"bg-slate-800 text-purple-300 hover:bg-slate-700"}`,children:[f.jsx(L_,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:N?"Fold LCD Down":"Flip LCD Monitor Up"})]}),f.jsxs("button",{onClick:()=>ye(Ce.id),className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${C.includes(Ce.id)?"bg-emerald-600 hover:bg-emerald-500 text-white":"bg-slate-800 hover:bg-slate-700 text-red-400 border border-red-500/30"}`,children:[f.jsx(pA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:C.includes(Ce.id)?"Boot / Power Up":"Power Down"})]}),f.jsxs("button",{onClick:()=>{Le.playFanSpool(),M(!E),q(E?"Fan speed returned to normal (4,500 RPM).":"🌪️ Turbo Fan Mode Enabled: 14,500 RPM full blast.")},className:`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${E?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30":"bg-slate-800 hover:bg-slate-700 text-cyan-300"}`,children:[f.jsx(bA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:E?"Turbo Fan 14,500 RPM":"Normal Fan Speed"})]}),t.devices.has(Ce.id)&&f.jsxs("button",{onClick:()=>{Le.playKeyClick(),i(Ce.id)},className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-mono text-xs flex items-center gap-1.5 transition border border-cyan-500/30",children:[f.jsx(Zo,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Open Console"})]})]}),f.jsxs("div",{className:"flex items-center gap-2 pl-3 border-l border-slate-800",children:[f.jsx(MA,{className:"w-3.5 h-3.5 text-slate-400"}),f.jsx("span",{className:"text-slate-400 text-[11px]",children:"Exploded View:"}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:V,onChange:w=>K(parseFloat(w.target.value)),className:"w-24 accent-indigo-500 h-1 bg-slate-800 rounded-lg cursor-pointer"}),f.jsxs("span",{className:"font-mono text-[10px] text-indigo-300 w-8",children:[Math.round(V*100),"%"]})]})]}),Ce.driveCount&&f.jsxs("div",{className:"mt-1 p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between flex-wrap gap-2",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(cA,{className:"w-4 h-4 text-emerald-400"}),f.jsxs("span",{className:"text-slate-300 font-medium text-[11px]",children:["Hot-Swap SAS Drive Trays (",Ce.driveCount," Bays):"]}),f.jsx("span",{className:"text-[10px] text-slate-500",children:"Click tray number to eject or latch back:"})]}),f.jsx("div",{className:"flex items-center gap-1.5 flex-wrap",children:Array.from({length:Ce.driveCount}).map((w,F)=>{const B=(y[Ce.id]||[]).includes(F);return f.jsxs("button",{onClick:()=>ct(Ce.id,F),className:`px-2 py-0.5 rounded font-mono text-[10px] flex items-center gap-1 transition ${B?"bg-amber-500 text-slate-950 font-bold border border-amber-400":"bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`,title:`Drive #${F+1}: ${B?"Ejected":"Latched in backplane"}`,children:[f.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${B?"bg-amber-950":"bg-emerald-400"}`}),f.jsxs("span",{children:["#",F+1]}),B&&f.jsx("span",{className:"text-[9px] uppercase",children:"OUT"})]},F)})})]})]}),Be==="cables"&&f.jsxs("div",{className:"p-4 flex flex-col gap-3 text-xs",children:[f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3 border-b border-slate-800 pb-2.5",children:[f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[f.jsxs("span",{className:"text-slate-400 text-xs font-semibold flex items-center gap-1.5",children:[f.jsx(fh,{className:"w-4 h-4 text-cyan-400"})," Palette:"]}),Jl.map(w=>{const F=ee===w.css;return f.jsxs("button",{onClick:()=>{Le.playKeyClick(),Y(w.css),Ve?je(w.hex):q(`Selected ${w.label} (${w.role}) for next cables.`)},className:`group relative flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition ${F?"bg-slate-800 border-white text-white font-bold shadow-md":"bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`,children:[f.jsx("span",{className:"w-3 h-3 rounded-full border border-white/30 shrink-0",style:{backgroundColor:w.css}}),f.jsx("span",{className:"text-[11px]",children:w.label}),F&&f.jsx(r_,{className:"w-3 h-3 text-white ml-0.5"})]},w.id)})]}),f.jsxs("div",{className:"flex items-center gap-1.5 pl-2 border-l border-slate-800",children:[f.jsx("input",{type:"color",value:le,onChange:w=>{xe(w.target.value),Y(w.target.value),Ve&&je(parseInt(w.target.value.replace("#","0x"),16))},className:"w-7 h-7 rounded border border-slate-700 cursor-pointer bg-transparent",title:"Custom Color Picker"}),f.jsx("input",{type:"text",value:le,onChange:w=>{xe(w.target.value),/^#[0-9A-Fa-f]{6}$/.test(w.target.value)&&(Y(w.target.value),Ve&&je(parseInt(w.target.value.replace("#","0x"),16)))},className:"w-16 px-1.5 py-0.5 bg-slate-950 border border-slate-800 rounded text-cyan-300 font-mono text-[11px]"})]})]}),f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3 pt-1",children:[Ve?f.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs",children:[f.jsxs("span",{className:"text-cyan-300 font-semibold flex items-center gap-1",children:[f.jsx(fh,{className:"w-3.5 h-3.5"})," Selected Cable:"]}),f.jsx("span",{className:"font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 font-semibold",children:Ve}),f.jsx("button",{onClick:()=>{var F;const w=((F=Jl.find(B=>B.css===ee))==null?void 0:F.hex)||2450411;je(w)},className:"px-2 py-0.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-[11px]",children:"Apply Active Color"}),f.jsx("button",{onClick:()=>{const[w]=Ve.split("|"),F=t.disconnectLink(w);F.ok?(Le.playCableSnap(),$(null),ae(),q(`Unplugged cable ${Ve}`)):(Le.playErrorBeep(),q(`⚠️ ${F.reason||"Cannot unplug cable"}`))},className:"px-2 py-0.5 rounded bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 text-[11px]",children:"Unplug"}),f.jsx("button",{onClick:()=>$(null),className:"text-slate-400 hover:text-white px-1 ml-1",children:"Close"})]}):f.jsxs("div",{className:"text-slate-400 text-[11px] flex items-center gap-1.5",children:[f.jsx(Td,{className:"w-3.5 h-3.5 text-cyan-400"}),f.jsx("span",{children:"Click any cable directly in the 3D server room to customize its jacket color & tension."})]}),f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[f.jsxs("button",{onClick:Ge,className:"px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-600/20 transition",children:[f.jsx(mA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"TIA-606-C Standards Auto-Color"})]}),f.jsxs("button",{onClick:()=>{var F;const w=((F=Jl.find(B=>B.css===ee))==null?void 0:F.hex)||2450411;Me(w)},className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition",children:[f.jsx(wA,{className:"w-3 h-3 text-amber-400"}),f.jsx("span",{children:"Color All Cables"})]}),f.jsxs("div",{className:"flex items-center gap-1.5 pl-2 border-l border-slate-800",children:[f.jsx("span",{className:"text-slate-400 text-[11px]",children:"Sag:"}),f.jsx("input",{type:"range",min:"0.10",max:"0.55",step:"0.02",value:Q,onChange:w=>ie(parseFloat(w.target.value)),className:"w-16 accent-cyan-400 h-1 bg-slate-800 rounded-lg cursor-pointer",title:"Cable Slack / Catenary Curve"})]}),f.jsx("button",{onClick:()=>{Le.playKeyClick(),ke(!ue),q(ue?"Packet pulses paused.":"Active packet light pulses enabled.")},className:`p-1.5 rounded-lg border transition ${ue?"bg-cyan-950 text-cyan-300 border-cyan-800":"bg-slate-800 text-slate-400 border-slate-700"}`,title:"Toggle animated packet pulses",children:f.jsx(TA,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:()=>{Le.playKeyClick(),I({}),$(null),q("Reset all cables to enterprise role standards.")},className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition",title:"Reset all colors to default standards",children:f.jsx(B_,{className:"w-3.5 h-3.5"})})]})]})]}),Be==="catalog"&&f.jsx("div",{className:"p-4 flex flex-col gap-3 text-xs max-h-56 overflow-y-auto",children:f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[f.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col gap-2",children:[f.jsxs("div",{className:"font-bold text-cyan-300 flex items-center justify-between border-b border-slate-800 pb-1.5",children:[f.jsx("span",{children:"Rack A (Production Infrastructure)"}),f.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:'19" 42U Standard Cage'})]}),f.jsx("div",{className:"flex flex-col gap-1.5",children:rs.filter(w=>w.rack==="Rack A").map(w=>f.jsxs("div",{onClick:()=>{Le.playKeyClick(),g(w.id),qe("chassis")},className:`p-2 rounded-lg border cursor-pointer transition flex items-center justify-between ${m===w.id?"bg-indigo-950/60 border-indigo-500/60 text-white":"bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700"}`,children:[f.jsxs("div",{children:[f.jsxs("div",{className:"font-semibold text-xs flex items-center gap-1.5",children:[f.jsx("span",{className:"font-mono text-cyan-400 text-[11px]",children:w.id}),f.jsx("span",{children:w.name})]}),f.jsx("div",{className:"text-[10px] text-slate-400 truncate max-w-sm",children:w.specs})]}),f.jsxs("div",{className:"text-[10px] text-slate-500 font-mono shrink-0",children:["Slot ",w.slot," • ",w.uHeight,"U"]})]},w.id))})]}),f.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col gap-2",children:[f.jsxs("div",{className:"font-bold text-cyan-300 flex items-center justify-between border-b border-slate-800 pb-1.5",children:[f.jsx("span",{children:"Rack B (SAN Storage & Redundant Core)"}),f.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:'19" 42U Standard Cage'})]}),f.jsx("div",{className:"flex flex-col gap-1.5",children:rs.filter(w=>w.rack==="Rack B").map(w=>f.jsxs("div",{onClick:()=>{Le.playKeyClick(),g(w.id),qe("chassis")},className:`p-2 rounded-lg border cursor-pointer transition flex items-center justify-between ${m===w.id?"bg-indigo-950/60 border-indigo-500/60 text-white":"bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700"}`,children:[f.jsxs("div",{children:[f.jsxs("div",{className:"font-semibold text-xs flex items-center gap-1.5",children:[f.jsx("span",{className:"font-mono text-cyan-400 text-[11px]",children:w.id}),f.jsx("span",{children:w.name})]}),f.jsx("div",{className:"text-[10px] text-slate-400 truncate max-w-sm",children:w.specs})]}),f.jsxs("div",{className:"text-[10px] text-slate-500 font-mono shrink-0",children:["Slot ",w.slot," • ",w.uHeight,"U"]})]},w.id))})]})]})}),Be==="cameras"&&f.jsxs("div",{className:"p-4 flex items-center justify-between gap-2 flex-wrap text-xs",children:[f.jsx("span",{className:"text-slate-400 text-xs font-semibold",children:"Camera Positions:"}),f.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[f.jsx("button",{onClick:()=>X("overview"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600/30 hover:text-emerald-300 text-slate-300 transition",children:"Full Room Overview"}),f.jsx("button",{onClick:()=>X("rack_a"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-600/30 hover:text-cyan-300 text-slate-300 transition",children:"Rack A (Production Gear)"}),f.jsx("button",{onClick:()=>X("rack_b"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-600/30 hover:text-cyan-300 text-slate-300 transition",children:"Rack B (SAN & Secondary)"}),f.jsx("button",{onClick:()=>X("kvm"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-purple-600/30 hover:text-purple-300 text-slate-300 transition",children:"KVM Console Drawer"}),f.jsx("button",{onClick:()=>X("desk_1"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600/30 hover:text-emerald-300 text-slate-300 transition",children:"Desk 1 (PC-A / SOC)"}),t.devices.has("PC-B")&&f.jsx("button",{onClick:()=>X("desk_2"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-amber-600/30 hover:text-amber-300 text-slate-300 transition",children:"Desk 2 (Sales PC-B)"}),f.jsx("button",{onClick:()=>X("soc"),className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-sky-600/30 hover:text-sky-300 text-slate-300 transition",children:"Wall SOC Monitor"})]})]})]})]}),f.jsx("div",{className:"absolute bottom-4 left-4 z-10 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400",children:f.jsx("span",{children:"Click ports to cable • Click cables to recolor • Click chassis to extend rails • Click drive trays to eject"})}),u&&f.jsx("div",{className:"absolute top-32 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-xl bg-slate-900/95 border border-cyan-500/50 text-xs text-cyan-200 shadow-2xl animate-fade-in flex items-center gap-2 max-w-lg text-center",children:f.jsx("span",{children:u})})]})},AA=({sim:t,deviceId:e,onClose:n,onSwitchDevice:i,onOpenCodeEditor:r})=>{const[s,a]=se.useState(null),[o,l]=se.useState([]),[c,h]=se.useState(""),[d,p]=se.useState(-1),[m,g]=se.useState(!0),[S,x]=se.useState(!1),[u,v]=se.useState(!1),y=se.useRef(null),_=se.useRef(null);if(se.useEffect(()=>{try{const E=t.openSession(e);a(E);const M=E.device;let N="";M.type===Qe.ROUTER||M.type===Qe.SWITCH?N=`Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.2(4)M5, RELEASE SOFTWARE (fc2)
Technical Support: http://www.cisco.com/techsupport
Compiled Fri 12-Sep-14 17:02 by prod_rel_team

Press RETURN to get started!`:M.type===Qe.HOST?N=`Microsoft Windows [Version 10.0.19045.3803]
(c) Microsoft Corporation. All rights reserved.
Type "help" for available commands.`:M.type===Qe.SERVER&&(N=`Linux ${M.hostname} 5.15.0-89-generic #99-Ubuntu SMP x86_64

The programs included with the Ubuntu system are free software.
Type "help" for available commands.`),l([{type:"system",text:N},{type:"output",text:""}]),h(""),p(-1)}catch(E){console.error(E)}},[t,e]),se.useEffect(()=>{var E;(E=y.current)==null||E.focus()},[e,o]),se.useEffect(()=>{_.current&&(_.current.scrollTop=_.current.scrollHeight)},[o]),!s)return null;const R=s.getPrompt(),A=E=>{if(m&&Le.playKeyClick(),E.key==="Enter"){E.preventDefault();const M=c,N=s.execute(M);if(t.notifyObjectives(),l(z=>[...z,{type:"input",text:M,prompt:R},...N.output?[{type:"output",text:N.output}]:[]]),h(""),p(-1),N.action===J.CLOSE_SESSION){n();return}N.action===J.OPEN_EDITOR&&N.actionArg&&r&&r(N.actionArg);return}if(E.key==="ArrowUp"){E.preventDefault();const M=s.history;if(M.length===0)return;const N=d===-1?M.length-1:Math.max(0,d-1);p(N),h(M[N]||"");return}if(E.key==="ArrowDown"){E.preventDefault();const M=s.history;if(M.length===0||d===-1)return;const N=d+1;N>=M.length?(p(-1),h("")):(p(N),h(M[N]||""));return}if(E.key==="Tab"){E.preventDefault(),C();return}if(E.key==="?"&&(s.device.type===Qe.ROUTER||s.device.type===Qe.SWITCH)){E.preventDefault(),L();return}if(E.ctrlKey&&E.key==="z"){E.preventDefault();const M=s.execute("end");t.notifyObjectives(),l(N=>[...N,{type:"input",text:"^Z",prompt:R},...M.output?[{type:"output",text:M.output}]:[]]),h("");return}if(E.ctrlKey&&E.key==="c"){E.preventDefault(),l(M=>[...M,{type:"input",text:"^C",prompt:R}]),h("");return}},C=()=>{const M=c.trimStart().split(" "),N=M[M.length-1];if(!N)return;let z=[];s.device.type===Qe.ROUTER||s.device.type===Qe.SWITCH?z=["enable","disable","configure","terminal","interface","shutdown","no","ip","address","vlan","name","switchport","mode","access","trunk","encapsulation","dot1Q","show","running-config","brief","ping","exit","end"]:s.device.type===Qe.HOST?z=["ipconfig","ping","curl","help","cls"]:z=["ls","cat","grep","tail","edit","service","status","help","clear"];const V=z.filter(K=>K.toLowerCase().startsWith(N.toLowerCase()));V.length===1&&(M[M.length-1]=V[0],h(M.join(" ")+" "))},L=()=>{const E=["Exec & Config Commands:","  enable          Turn on privileged commands","  disable         Turn off privileged commands","  configure       Enter configuration mode","  hostname        Set system network name","  interface       Select an interface to configure","  vlan            Configure VLAN parameters","  switchport      Set switching characteristics of the interface","  encapsulation   Set encapsulation method (e.g. dot1Q)","  ip              Global IP configuration subcommands","  shutdown        Shutdown the selected interface","  show            Show running system information","  ping            Send echo messages","  exit            Exit from the EXEC","  end             Exit to privileged EXEC mode"].join(`
`);l(M=>[...M,{type:"input",text:`${c}?`,prompt:R},{type:"output",text:E}])};return f.jsxs("div",{className:`fixed z-40 flex flex-col bg-slate-950/95 backdrop-blur-xl border border-slate-700 shadow-2xl transition-all duration-200 ${u?"inset-2 rounded-2xl":"bottom-4 right-4 w-[680px] h-[520px] rounded-2xl max-w-[calc(100vw-32px)] max-h-[calc(100vh-32px)]"}`,children:[f.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 rounded-t-2xl",children:[f.jsxs("div",{className:"flex items-center gap-2.5",children:[f.jsx(Zo,{className:"w-4 h-4 text-cyan-400"}),f.jsxs("span",{className:"font-mono text-xs font-semibold text-slate-200 flex items-center gap-2",children:[f.jsx("span",{children:"Terminal:"}),f.jsxs("span",{className:"px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60",children:[s.device.hostname," (",s.device.id,")"]})]}),f.jsx("div",{className:"hidden sm:flex items-center gap-1 ml-2 pl-2 border-l border-slate-700",children:Array.from(t.devices.values()).map(E=>f.jsx("button",{onClick:()=>i(E.id),className:`px-2 py-0.5 rounded text-[11px] font-mono transition ${E.id===e?"bg-cyan-500 text-slate-950 font-bold":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:E.hostname||E.id},E.id))})]}),f.jsxs("div",{className:"flex items-center gap-1.5 text-slate-400",children:[f.jsx("button",{onClick:()=>x(!S),title:"Command Cheatsheet",className:`p-1.5 rounded-lg hover:bg-slate-800 hover:text-cyan-300 transition ${S?"text-cyan-400 bg-slate-800":""}`,children:f.jsx(dh,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:()=>{g(!m),Le.enabled=!m},title:m?"Mute Audio":"Enable Audio",className:"p-1.5 rounded-lg hover:bg-slate-800 hover:text-slate-200 transition",children:m?f.jsx(e1,{className:"w-3.5 h-3.5 text-cyan-400"}):f.jsx(n1,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:()=>v(!u),title:u?"Restore":"Maximize",className:"p-1.5 rounded-lg hover:bg-slate-800 hover:text-slate-200 transition",children:u?f.jsx(dA,{className:"w-3.5 h-3.5"}):f.jsx(L_,{className:"w-3.5 h-3.5"})}),f.jsx("button",{onClick:n,title:"Close Terminal (Esc)",className:"p-1.5 rounded-lg hover:bg-red-950/80 hover:text-red-400 transition",children:f.jsx(al,{className:"w-4 h-4"})})]})]}),f.jsxs("div",{className:"relative flex-1 flex overflow-hidden",children:[f.jsxs("div",{ref:_,onClick:()=>{var E;return(E=y.current)==null?void 0:E.focus()},className:"flex-1 p-4 font-mono text-xs overflow-y-auto leading-relaxed select-text crt-screen",children:[o.map((E,M)=>f.jsxs("div",{className:"whitespace-pre-wrap break-all",children:[E.type==="input"&&f.jsxs("div",{className:"flex items-start text-emerald-400 font-semibold mt-1",children:[f.jsx("span",{className:"text-slate-400 mr-2 select-none",children:E.prompt}),f.jsx("span",{children:E.text})]}),E.type==="output"&&f.jsx("div",{className:"text-slate-300 ml-1 mb-1",children:E.text}),E.type==="system"&&f.jsx("div",{className:"text-slate-500 mb-2",children:E.text})]},M)),f.jsxs("div",{className:"flex items-center text-emerald-400 font-semibold mt-1",children:[f.jsx("span",{className:"text-slate-400 mr-2 select-none",children:R}),f.jsx("div",{className:"relative flex-1 flex items-center",children:f.jsx("input",{ref:y,type:"text",value:c,onChange:E=>h(E.target.value),onKeyDown:A,className:"w-full bg-transparent outline-none text-emerald-400 font-mono caret-cyan-400 text-xs",autoFocus:!0,spellCheck:!1,autoCapitalize:"off",autoComplete:"off"})})]})]}),S&&f.jsxs("div",{className:"w-64 border-l border-slate-800 bg-slate-900/90 p-3 text-xs overflow-y-auto font-mono text-slate-300",children:[f.jsxs("div",{className:"font-sans font-bold text-cyan-400 mb-2 flex items-center gap-1.5",children:[f.jsx(dh,{className:"w-3.5 h-3.5"})," Cheatsheet"]}),s.device.type===Qe.ROUTER&&f.jsxs("div",{className:"space-y-3 text-[11px]",children:[f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"1. Enable & Global Config:"}),f.jsx("div",{className:"text-emerald-400",children:"enable"}),f.jsx("div",{className:"text-emerald-400",children:"configure terminal"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"2. Bring physical interface up:"}),f.jsx("div",{className:"text-emerald-400",children:"interface gi0/0"}),f.jsx("div",{className:"text-emerald-400",children:"no shutdown"}),f.jsx("div",{className:"text-emerald-400",children:"exit"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"3. Router-on-a-Stick subinterface:"}),f.jsx("div",{className:"text-emerald-400",children:"interface gi0/0.10"}),f.jsx("div",{className:"text-emerald-400",children:"encapsulation dot1Q 10"}),f.jsx("div",{className:"text-emerald-400",children:"ip address 192.168.10.1 255.255.255.0"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"4. Verification:"}),f.jsx("div",{className:"text-cyan-400",children:"show ip interface brief"}),f.jsx("div",{className:"text-cyan-400",children:"show running-config"})]})]}),s.device.type===Qe.SWITCH&&f.jsxs("div",{className:"space-y-3 text-[11px]",children:[f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"1. Create VLAN:"}),f.jsx("div",{className:"text-emerald-400",children:"vlan 20"}),f.jsx("div",{className:"text-emerald-400",children:"name SALES"}),f.jsx("div",{className:"text-emerald-400",children:"exit"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"2. Assign Access Port:"}),f.jsx("div",{className:"text-emerald-400",children:"interface fa0/2"}),f.jsx("div",{className:"text-emerald-400",children:"switchport mode access"}),f.jsx("div",{className:"text-emerald-400",children:"switchport access vlan 20"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"3. Configure 802.1Q Trunk:"}),f.jsx("div",{className:"text-emerald-400",children:"interface gi0/1"}),f.jsx("div",{className:"text-emerald-400",children:"switchport mode trunk"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"4. Verification:"}),f.jsx("div",{className:"text-cyan-400",children:"show vlan brief"})]})]}),s.device.type===Qe.HOST&&f.jsxs("div",{className:"space-y-3 text-[11px]",children:[f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Check IP Configuration:"}),f.jsx("div",{className:"text-emerald-400",children:"ipconfig"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Test Connectivity:"}),f.jsx("div",{className:"text-emerald-400",children:"ping 192.168.20.10"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Test Web Service:"}),f.jsx("div",{className:"text-emerald-400",children:`curl "http://10.0.10.5/login.php?user=' OR '1'='1"`})]})]}),s.device.type===Qe.SERVER&&f.jsxs("div",{className:"space-y-3 text-[11px]",children:[f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Inspect Code / Logs:"}),f.jsx("div",{className:"text-emerald-400",children:"cat /var/www/login.php"}),f.jsx("div",{className:"text-emerald-400",children:"tail -n 20 /var/log/auth.log"})]}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold text-slate-200",children:"Open Patch Editor:"}),f.jsx("div",{className:"text-emerald-400",children:"edit /var/www/login.php"})]})]})]})]}),f.jsxs("div",{className:"px-4 py-1.5 bg-slate-900/90 border-t border-slate-800 rounded-b-2xl flex items-center justify-between text-[11px] text-slate-400",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("span",{children:"Tab: Auto-complete"}),f.jsx("span",{children:"?: Help list"}),f.jsx("span",{children:"Ctrl+Z: Exit config"}),f.jsx("span",{children:"Up/Down: History"})]}),f.jsx("div",{className:"text-slate-500 font-mono",children:"CCNA IOS Terminal Engine"})]})]})},RA=({sim:t,scenario:e,objectives:n,onOpenReport:i,onOpenCodeEditor:r,onOpenHint:s,onSelectMission:a,onRestartMission:o,allScenarios:l})=>{const[c,h]=se.useState(!1),[d,p]=se.useState(null),[m,g]=se.useState(!1),S=n.length>0&&n.every(v=>v.passed),x=()=>{var y,_;if(Le.playKeyClick(),s){s();return}const v=n.find(R=>!R.passed&&!R.locked&&R.hint);if(v)p(v.hint);else{const R=((_=(y=e.hints)==null?void 0:y[0])==null?void 0:_.text)||"Review network configurations and interface IP assignments.";p(R)}},u=t.debriefView();return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"absolute top-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center max-w-xl w-[92%] sm:w-auto",children:[f.jsxs("div",{className:"flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("span",{className:"px-2 py-0.5 rounded-md bg-cyan-950 text-cyan-400 font-mono text-xs font-bold border border-cyan-800/80",children:["M",e.sequence]}),f.jsx("span",{className:"font-bold text-slate-100 text-sm",children:e.title})]}),f.jsxs("button",{onClick:()=>h(!c),className:"flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-300 transition pl-2 border-l border-slate-700",children:[f.jsx("span",{children:"Briefing"}),c?f.jsx(u_,{className:"w-3.5 h-3.5"}):f.jsx(a_,{className:"w-3.5 h-3.5"})]}),f.jsxs("button",{onClick:x,className:"flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-xs font-medium transition",children:[f.jsx(J0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Hint (H)"})]}),e.id==="m2_log_triage"&&i&&f.jsxs("button",{onClick:i,className:"flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 text-xs font-medium transition",children:[f.jsx(Ua,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Incident Report"})]}),e.id==="m3_web_patch"&&r&&f.jsxs("button",{onClick:r,className:"flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 text-xs font-medium transition",children:[f.jsx(gu,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Code Editor"})]}),S&&f.jsxs("button",{onClick:()=>g(!0),className:"flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs animate-pulse shadow-lg shadow-emerald-500/20 transition",children:[f.jsx(Z0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Debrief"})]})]}),c&&f.jsxs("div",{className:"mt-2 p-4 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-700 shadow-2xl text-xs text-slate-300 max-w-lg animate-fade-in",children:[f.jsxs("div",{className:"font-semibold text-cyan-400 mb-1 flex items-center gap-1.5",children:[f.jsx(Ua,{className:"w-4 h-4"})," Mission Ticket & Briefing"]}),f.jsx("p",{className:"leading-relaxed text-slate-300",children:e.briefing})]}),d&&f.jsxs("div",{className:"mt-2 p-3.5 rounded-xl bg-amber-950/90 backdrop-blur-xl border border-amber-600/50 shadow-2xl text-xs text-amber-200 max-w-lg flex items-start gap-2.5 animate-fade-in",children:[f.jsx(J0,{className:"w-4 h-4 text-amber-400 shrink-0 mt-0.5"}),f.jsxs("div",{className:"flex-1",children:[f.jsx("div",{className:"font-bold text-amber-300 mb-0.5",children:"Diagnostic Hint:"}),f.jsx("p",{className:"leading-relaxed",children:d})]}),f.jsx("button",{onClick:()=>p(null),className:"text-amber-400 hover:text-white text-xs px-1.5 py-0.5",children:"✕"})]})]}),f.jsxs("div",{className:"absolute top-20 left-4 z-20 w-80 max-h-[calc(100vh-140px)] flex flex-col rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 shadow-2xl overflow-hidden",children:[f.jsxs("div",{className:"px-3.5 py-2.5 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between",children:[f.jsxs("span",{className:"text-xs font-bold text-slate-200 flex items-center gap-1.5",children:[f.jsx($_,{className:"w-4 h-4 text-cyan-400"}),f.jsx("span",{children:"Mission Objectives"})]}),f.jsxs("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-700",children:[n.filter(v=>v.passed).length," / ",n.length]})]}),f.jsx("div",{className:"p-3 space-y-2.5 overflow-y-auto text-xs",children:n.map(v=>f.jsx("div",{className:`p-2.5 rounded-xl border transition-all ${v.passed?"bg-emerald-950/30 border-emerald-500/40 text-emerald-300":v.locked?"bg-slate-950/40 border-slate-800 text-slate-500 opacity-60":"bg-slate-950/60 border-slate-800 text-slate-300"}`,children:f.jsxs("div",{className:"flex items-start gap-2",children:[v.passed?f.jsx(_s,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-0.5"}):v.locked?f.jsx(Yc,{className:"w-4 h-4 text-slate-500 shrink-0 mt-0.5"}):f.jsx(m_,{className:"w-4 h-4 text-slate-500 shrink-0 mt-0.5"}),f.jsxs("div",{className:"flex-1",children:[f.jsx("div",{className:"leading-snug",children:v.description}),v.detail&&!v.passed&&!v.locked&&f.jsxs("div",{className:"text-[11px] text-amber-400/90 font-mono mt-1",children:["Status: ",v.detail]})]})]})},v.id))}),f.jsxs("div",{className:"px-3 py-2 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400",children:[f.jsxs("button",{onClick:o,className:"flex items-center gap-1 hover:text-red-400 transition",children:[f.jsx(B_,{className:"w-3 h-3"}),f.jsx("span",{children:"Restart"})]}),s&&f.jsxs("button",{onClick:()=>{Le.playKeyClick(),s()},className:"text-amber-400/90 hover:text-amber-300 flex items-center gap-1 font-medium transition",children:[f.jsx(Ep,{className:"w-3 h-3 text-amber-400"}),f.jsx("span",{children:"Step Guidance [H]"})]})]})]}),m&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"max-w-xl w-full rounded-2xl bg-slate-900 border border-emerald-500/50 shadow-2xl p-6 text-slate-200",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[f.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400",children:f.jsx(Z0,{className:"w-6 h-6"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-lg font-bold text-white",children:"Mission Accomplished!"}),f.jsxs("p",{className:"text-xs text-emerald-400 font-mono",children:[e.title," — Verified"]})]})]}),f.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs leading-relaxed text-slate-300 mb-5",children:[f.jsx("h3",{className:"font-semibold text-cyan-400 mb-1",children:"Debrief & Technical Takeaways:"}),f.jsx("p",{children:(u==null?void 0:u.debrief)||e.debrief})]}),f.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-800",children:[f.jsx("button",{onClick:()=>g(!1),className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition",children:"Close & Explore"}),e.sequence<l.length?f.jsxs("button",{onClick:()=>{const v=l.find(y=>y.sequence===e.sequence+1);v&&a(v.id)},className:"px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 transition",children:[f.jsxs("span",{children:["Next: Mission ",e.sequence+1]}),f.jsx(nA,{className:"w-3.5 h-3.5"})]}):f.jsx("span",{className:"text-xs text-emerald-400 font-semibold",children:"Campaign Complete! 🎉"})]})]})})]})},NA=({sim:t,onClose:e,reportOnly:n=!1})=>{const[i,r]=se.useState(n?"report":"logs"),[s,a]=se.useState(""),[o,l]=se.useState(null),[c,h]=se.useState({attacker_ip:"",attack_type:"Brute force",compromised_user:""}),[d,p]=se.useState({}),m=t.currentScenario,g=(m==null?void 0:m.logs)||[],S=g.find(_=>_.file.includes("auth.log"))||g[0],x=S?S.lines:[],u=se.useMemo(()=>x.filter(_=>{if(o&&_.geo!==o)return!1;if(!s)return!0;const R=s.toLowerCase();return _.text.toLowerCase().includes(R)||_.src_ip&&_.src_ip.includes(R)||_.geo&&_.geo.toLowerCase().includes(R)}),[x,s,o]),v=se.useMemo(()=>{const _=new Map,R={NL:{x:50,y:32,name:"Netherlands (NL)"},CN:{x:78,y:42,name:"China (CN)"},RU:{x:72,y:26,name:"Russia (RU)"},US:{x:24,y:38,name:"United States (US)"}};for(const A of x)if(A.src_ip&&A.geo&&R[A.geo]){const C=A.geo,L=_.get(C);L?L.count++:_.set(C,{ip:A.src_ip,geo:A.geo,count:1,x:R[A.geo].x,y:R[A.geo].y,name:R[A.geo].name})}return Array.from(_.values())},[x]),y=_=>{const R=c[_]||"";if(!R.trim())return;Le.playKeyClick();const A=t.submitReport(_,R);A.correct?(Le.playSuccessBeep(),p(C=>({...C,[_]:{correct:!0,msg:"Verified Correct!"}}))):(Le.playErrorBeep(),p(C=>({...C,[_]:{correct:!1,msg:`Incorrect answer. ${A.attemptsLeft} attempts remaining.`}})))};return f.jsxs("div",{className:"fixed inset-4 z-40 flex flex-col rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-slate-700 shadow-2xl overflow-hidden animate-fade-in",children:[f.jsxs("div",{className:"flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/40",children:f.jsx(yA,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("h2",{className:"text-sm font-bold text-white flex items-center gap-2",children:[f.jsx("span",{children:"SOC Security Analytics & Incident Response"}),f.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800",children:"WEB1 Target"})]}),f.jsx("p",{className:"text-xs text-slate-400",children:"Log triage, geographic threat correlation, and formal reporting"})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5 p-1 rounded-xl bg-slate-800/80 border border-slate-700 text-xs",children:[f.jsxs("button",{onClick:()=>r("logs"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="logs"?"bg-sky-500 text-slate-950 font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(Ua,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Auth Logs"})]}),f.jsxs("button",{onClick:()=>r("threatmap"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="threatmap"?"bg-sky-500 text-slate-950 font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(tg,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Threat Map"})]}),f.jsxs("button",{onClick:()=>r("report"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="report"?"bg-sky-500 text-slate-950 font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(xA,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Incident Report"})]})]}),f.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-slate-800 hover:bg-red-950/80 text-slate-400 hover:text-red-400 transition",children:f.jsx(al,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"flex-1 overflow-hidden flex flex-col",children:[i==="logs"&&f.jsxs("div",{className:"flex-1 flex flex-col p-4 overflow-hidden",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[f.jsxs("div",{className:"relative flex-1",children:[f.jsx(vA,{className:"w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"}),f.jsx("input",{type:"text",placeholder:"Filter by keyword (e.g., 'Failed', 'deploy', IP address, 'sshd')...",value:s,onChange:_=>a(_.target.value),className:"w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-slate-200 outline-none focus:border-sky-500 transition"})]}),o&&f.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-950 border border-sky-800 text-xs text-sky-300",children:[f.jsxs("span",{children:["Filtered: ",o]}),f.jsx("button",{onClick:()=>l(null),className:"hover:text-white ml-1",children:"✕"})]}),f.jsxs("div",{className:"text-xs font-mono text-slate-400 px-2",children:["Showing ",u.length," of ",x.length," entries"]})]}),f.jsx("div",{className:"flex-1 rounded-xl bg-slate-900/90 border border-slate-800 p-4 font-mono text-xs overflow-y-auto leading-relaxed select-text space-y-1 crt-screen",children:u.map((_,R)=>{const A=_.text.includes("Failed password"),C=_.text.includes("Accepted password"),L=_.text.includes("sudo");return f.jsxs("div",{className:`flex items-start gap-3 py-0.5 px-2 rounded hover:bg-slate-800/60 transition ${A?"text-red-400/90 bg-red-950/15":C?"text-emerald-400 bg-emerald-950/20 font-bold":L?"text-amber-300":"text-slate-300"}`,children:[f.jsx("span",{className:"text-slate-500 select-none shrink-0",children:_.t}),f.jsx("span",{className:"flex-1 break-all",children:_.text}),_.geo&&f.jsx("span",{className:"px-1.5 py-0.2 rounded bg-sky-950/80 text-sky-300 text-[10px] border border-sky-800 shrink-0 font-bold",children:_.geo})]},R)})})]}),i==="threatmap"&&f.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-hidden",children:[f.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsxs("h3",{className:"text-sm font-bold text-white flex items-center gap-2",children:[f.jsx(tg,{className:"w-4 h-4 text-sky-400"}),f.jsx("span",{children:"Geographic Origin of Authentication Inbound Requests"})]}),f.jsx("p",{className:"text-xs text-slate-400",children:"Click any country threat node to filter associated logs"})]}),f.jsx("div",{className:"flex items-center gap-2 text-xs",children:f.jsxs("span",{className:"flex items-center gap-1.5 text-red-400",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"}),f.jsx("span",{children:"Active Attack Origin"})]})})]}),f.jsx("div",{className:"relative flex-1 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center p-4",children:f.jsxs("svg",{className:"w-full h-full max-w-4xl max-h-[460px]",viewBox:"0 0 100 60",preserveAspectRatio:"xMidYMid meet",children:[f.jsx("path",{d:"M 0 30 L 100 30",stroke:"#1e293b",strokeWidth:"0.3",strokeDasharray:"1,1"}),f.jsx("path",{d:"M 50 0 L 50 60",stroke:"#1e293b",strokeWidth:"0.3",strokeDasharray:"1,1"}),f.jsx("path",{d:"M 12 16 L 28 14 L 32 28 L 22 40 L 14 30 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 24 38 L 34 38 L 30 54 L 25 50 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 46 16 L 56 16 L 58 28 L 48 28 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 46 30 L 60 30 L 56 50 L 50 48 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 60 14 L 88 16 L 84 40 L 62 36 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("path",{d:"M 80 44 L 92 44 L 90 54 L 82 52 Z",fill:"#1e293b",stroke:"#334155",strokeWidth:"0.4",opacity:"0.6"}),f.jsx("circle",{cx:"25",cy:"30",r:"1.4",fill:"#0284c7"}),f.jsx("circle",{cx:"25",cy:"30",r:"3",fill:"none",stroke:"#0284c7",strokeWidth:"0.3",opacity:"0.7",children:f.jsx("animate",{attributeName:"r",values:"1.5;4;1.5",dur:"3s",repeatCount:"indefinite"})}),f.jsx("text",{x:"25",y:"34",fontSize:"1.8",fill:"#38bdf8",textAnchor:"middle",fontWeight:"bold",children:"WEB1 (DC)"}),v.map(_=>{const R=_.geo==="NL",A=R?"#ef4444":"#64748b",C=R?.8:.4,L=(_.x+25)/2,E=Math.min(_.y,30)-8;return f.jsxs("g",{onClick:()=>{Le.playKeyClick(),l(_.geo),r("logs")},className:"cursor-pointer group",children:[f.jsx("path",{d:`M ${_.x} ${_.y} Q ${L} ${E} 25 30`,fill:"none",stroke:A,strokeWidth:C,strokeDasharray:R?"1.5,1":"none",children:R&&f.jsx("animate",{attributeName:"stroke-dashoffset",values:"20;0",dur:"1.2s",repeatCount:"indefinite"})}),f.jsx("circle",{cx:_.x,cy:_.y,r:R?1.6:1.1,fill:R?"#ef4444":"#94a3b8"}),R&&f.jsx("circle",{cx:_.x,cy:_.y,r:"3",fill:"none",stroke:"#ef4444",strokeWidth:"0.4",children:f.jsx("animate",{attributeName:"r",values:"1.5;4.5;1.5",dur:"1.5s",repeatCount:"indefinite"})}),f.jsxs("text",{x:_.x,y:_.y-2.5,fontSize:"2.0",fill:R?"#f87171":"#cbd5e1",textAnchor:"middle",fontWeight:"bold",children:[_.name," (",_.count," events)"]}),f.jsx("text",{x:_.x,y:_.y+3.6,fontSize:"1.6",fill:"#94a3b8",textAnchor:"middle",fontFamily:"monospace",children:_.ip})]},_.geo)})]})})]}),i==="report"&&f.jsxs("div",{className:"flex-1 flex flex-col p-6 overflow-y-auto max-w-2xl mx-auto w-full",children:[f.jsxs("div",{className:"mb-6",children:[f.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[f.jsx(Ua,{className:"w-5 h-5 text-sky-400"}),f.jsx("span",{children:"Incident Triage & Threat Report"})]}),f.jsx("p",{className:"text-xs text-slate-400",children:"Submit validated intelligence based on your log analysis. You have a maximum of 3 attempts per field."})]}),f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[f.jsx("label",{className:"block text-xs font-bold text-slate-200 mb-1",children:"1. Attacker External IPv4 Address"}),f.jsx("p",{className:"text-[11px] text-slate-400 mb-2",children:"The IP address responsible for repeated failed login attempts."}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("input",{type:"text",placeholder:"e.g. 203.0.113.45",value:c.attacker_ip,onChange:_=>h({...c,attacker_ip:_.target.value}),className:"flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-slate-100 outline-none focus:border-sky-500"}),f.jsx("button",{onClick:()=>y("attacker_ip"),className:"px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition",children:"Submit"})]}),d.attacker_ip&&f.jsxs("div",{className:`mt-2 text-xs font-medium flex items-center gap-1.5 ${d.attacker_ip.correct?"text-emerald-400":"text-red-400"}`,children:[d.attacker_ip.correct?f.jsx(_s,{className:"w-3.5 h-3.5"}):f.jsx(_c,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:d.attacker_ip.msg})]})]}),f.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[f.jsx("label",{className:"block text-xs font-bold text-slate-200 mb-1",children:"2. Attack Classification Vector"}),f.jsx("p",{className:"text-[11px] text-slate-400 mb-2",children:"The methodology observed in the authentication log patterns."}),f.jsxs("div",{className:"flex gap-2",children:[f.jsxs("select",{value:c.attack_type,onChange:_=>h({...c,attack_type:_.target.value}),className:"flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none focus:border-sky-500",children:[f.jsx("option",{value:"Brute force",children:"Brute force (Dictionary / Credential stuffing)"}),f.jsx("option",{value:"SQL injection",children:"SQL injection"}),f.jsx("option",{value:"Port scan",children:"Port scan"}),f.jsx("option",{value:"Phishing",children:"Phishing"})]}),f.jsx("button",{onClick:()=>y("attack_type"),className:"px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition",children:"Submit"})]}),d.attack_type&&f.jsxs("div",{className:`mt-2 text-xs font-medium flex items-center gap-1.5 ${d.attack_type.correct?"text-emerald-400":"text-red-400"}`,children:[d.attack_type.correct?f.jsx(_s,{className:"w-3.5 h-3.5"}):f.jsx(_c,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:d.attack_type.msg})]})]}),f.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[f.jsx("label",{className:"block text-xs font-bold text-slate-200 mb-1",children:"3. Compromised User Account"}),f.jsx("p",{className:"text-[11px] text-slate-400 mb-2",children:"The specific username that resulted in 'Accepted password' and an open session."}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("input",{type:"text",placeholder:"e.g. deploy",value:c.compromised_user,onChange:_=>h({...c,compromised_user:_.target.value}),className:"flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-slate-100 outline-none focus:border-sky-500"}),f.jsx("button",{onClick:()=>y("compromised_user"),className:"px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition",children:"Submit"})]}),d.compromised_user&&f.jsxs("div",{className:`mt-2 text-xs font-medium flex items-center gap-1.5 ${d.compromised_user.correct?"text-emerald-400":"text-red-400"}`,children:[d.compromised_user.correct?f.jsx(_s,{className:"w-3.5 h-3.5"}):f.jsx(_c,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:d.compromised_user.msg})]})]})]})]})]})]})},PA=({sim:t,onClose:e,initialFile:n="/var/www/login.php"})=>{const[i,r]=se.useState(n),[s,a]=se.useState(""),[o,l]=se.useState(null),c="WEB1",h=t.devices.get(c);t.patchViews(c,i);const d=h==null?void 0:h.vulns.find(v=>v.region.file===i),m=(t.readFile(c,i)||"").split(`
`),g=d?m.slice(0,d.region.firstLine-1):[],S=d?m.slice(d.region.lastLine):[];se.useEffect(()=>{if(d){const v=m.slice(d.region.firstLine-1,d.region.lastLine);a(v.join(`
`)),l(null)}},[i,d]);const x=()=>{if(!d)return;Le.playKeyClick();const v=t.writePatch(c,d.id,s);v.accepted?(Le.playSuccessBeep(),l({accepted:!0})):(Le.playErrorBeep(),l({accepted:!1,hint:v.hint||d.hint}))},u=()=>{i==="/var/www/login.php"?a(`  $res = $db->prepare("SELECT * FROM users WHERE name = ?");
  $res->execute([$user]);`):i==="/var/www/search.php"&&a(`  echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`)};return f.jsxs("div",{className:"fixed inset-4 z-40 flex flex-col rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-indigo-500/50 shadow-2xl overflow-hidden animate-fade-in",children:[f.jsxs("div",{className:"flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40",children:f.jsx(gu,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("h2",{className:"text-sm font-bold text-white flex items-center gap-2",children:[f.jsx("span",{children:"Security Code Patch Editor"}),f.jsxs("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800",children:[c,":",i]})]}),f.jsx("p",{className:"text-xs text-slate-400",children:"Fix vulnerabilities using secure coding standards"})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5 p-1 rounded-xl bg-slate-800/80 border border-slate-700 text-xs",children:[f.jsxs("button",{onClick:()=>r("/var/www/login.php"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="/var/www/login.php"?"bg-indigo-500 text-white font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(ng,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"login.php (SQLi)"})]}),f.jsxs("button",{onClick:()=>r("/var/www/search.php"),className:`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${i==="/var/www/search.php"?"bg-indigo-500 text-white font-bold":"text-slate-300 hover:text-white"}`,children:[f.jsx(ng,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"search.php (XSS)"})]})]}),f.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-slate-800 hover:bg-red-950/80 text-slate-400 hover:text-red-400 transition",children:f.jsx(al,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[f.jsxs("div",{className:"flex-1 flex flex-col p-4 overflow-y-auto font-mono text-xs leading-relaxed select-text",children:[f.jsxs("div",{className:"bg-slate-900/50 p-3 rounded-t-xl border border-slate-800/80 text-slate-500 select-none",children:[f.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-slate-500 mb-2 font-sans font-semibold uppercase tracking-wider",children:[f.jsx(Yc,{className:"w-3 h-3"})," Read-Only Header (Lines 1 - ",g.length,")"]}),g.map((v,y)=>f.jsxs("div",{className:"flex",children:[f.jsx("span",{className:"w-8 text-slate-600 select-none text-right pr-3",children:y+1}),f.jsx("span",{className:"text-slate-400",children:v})]},y))]}),f.jsxs("div",{className:"p-3 bg-indigo-950/20 border-x-2 border-indigo-500/80 bg-slate-900 relative",children:[f.jsxs("div",{className:"flex items-center justify-between text-[11px] text-indigo-300 mb-2 font-sans font-bold",children:[f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400 animate-pulse"}),f.jsxs("span",{children:["Editable Patch Region (Lines ",d==null?void 0:d.region.firstLine," - ",d==null?void 0:d.region.lastLine,")"]})]}),f.jsx("button",{onClick:u,className:"text-xs px-2 py-0.5 rounded bg-indigo-900/60 hover:bg-indigo-800 text-indigo-200 border border-indigo-700/60 transition",children:"Insert Secure Pattern"})]}),f.jsx("textarea",{value:s,onChange:v=>{a(v.target.value),l(null)},rows:4,className:"w-full bg-slate-950 border border-indigo-500/60 rounded-lg p-3 text-emerald-300 font-mono text-xs outline-none focus:border-indigo-400 caret-cyan-400 resize-none shadow-inner",spellCheck:!1})]}),f.jsxs("div",{className:"bg-slate-900/50 p-3 rounded-b-xl border border-slate-800/80 text-slate-500 select-none",children:[f.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-slate-500 mb-2 font-sans font-semibold uppercase tracking-wider",children:[f.jsx(Yc,{className:"w-3 h-3"})," Read-Only Footer"]}),S.map((v,y)=>f.jsxs("div",{className:"flex",children:[f.jsx("span",{className:"w-8 text-slate-600 select-none text-right pr-3",children:((d==null?void 0:d.region.lastLine)||0)+y+1}),f.jsx("span",{className:"text-slate-400",children:v})]},y))]})]}),f.jsxs("div",{className:"w-80 border-l border-slate-800 bg-slate-900/70 p-5 flex flex-col justify-between text-xs",children:[f.jsxs("div",{children:[f.jsxs("h3",{className:"font-bold text-white mb-2 flex items-center gap-2",children:[f.jsx($_,{className:"w-4 h-4 text-indigo-400"}),f.jsx("span",{children:"Vulnerability Analysis"})]}),i==="/var/www/login.php"?f.jsxs("div",{className:"space-y-3 text-slate-300",children:[f.jsxs("p",{className:"leading-relaxed",children:[f.jsx("strong",{className:"text-indigo-300",children:"CWE-89: SQL Injection"})," in user authentication query."]}),f.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400",children:[f.jsx("div",{className:"font-semibold text-slate-200 mb-1",children:"Expected Secure Pattern:"}),"Use PDO prepared statements with parameter placeholders (",f.jsx("code",{className:"text-emerald-400",children:"?"}),"):",f.jsx("pre",{className:"mt-1.5 p-1.5 rounded bg-slate-900 text-emerald-300 overflow-x-auto",children:`$res = $db->prepare("SELECT * FROM users WHERE name = ?");
$res->execute([$user]);`})]})]}):f.jsxs("div",{className:"space-y-3 text-slate-300",children:[f.jsxs("p",{className:"leading-relaxed",children:[f.jsx("strong",{className:"text-indigo-300",children:"CWE-79: Reflected XSS"})," in search result rendering."]}),f.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400",children:[f.jsx("div",{className:"font-semibold text-slate-200 mb-1",children:"Expected Secure Pattern:"}),"Escape HTML characters with ",f.jsx("code",{className:"text-emerald-400",children:"htmlspecialchars()"}),":",f.jsx("pre",{className:"mt-1.5 p-1.5 rounded bg-slate-900 text-emerald-300 overflow-x-auto",children:`echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`})]})]}),o&&f.jsxs("div",{className:`mt-4 p-3.5 rounded-xl border flex items-start gap-2.5 ${o.accepted?"bg-emerald-950/40 border-emerald-500/60 text-emerald-300":"bg-amber-950/40 border-amber-500/60 text-amber-300"}`,children:[o.accepted?f.jsx(_s,{className:"w-5 h-5 text-emerald-400 shrink-0"}):f.jsx(_c,{className:"w-5 h-5 text-amber-400 shrink-0"}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold",children:o.accepted?"Patch Verified & Accepted!":"Patch Needs Adjustment"}),o.hint&&f.jsx("p",{className:"text-[11px] mt-1 leading-snug",children:o.hint})]})]})]}),f.jsx("div",{className:"pt-4 border-t border-slate-800",children:f.jsxs("button",{onClick:x,className:"w-full py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 transition",children:[f.jsx(gA,{className:"w-4 h-4"}),f.jsx("span",{children:"Save & Verify Patch"})]})})]})]})]})},LA=({currentScenarioId:t,allScenarios:e,completedIds:n,onSelect:i,onClose:r})=>f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"max-w-2xl w-full rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 text-slate-200",children:[f.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-5",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40",children:f.jsx(A_,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-base font-bold text-white",children:"Campaign Mission Catalog"}),f.jsx("p",{className:"text-xs text-slate-400",children:"CCNA Networking & Cyber Security Simulator"})]})]}),f.jsx("button",{onClick:r,className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition",children:f.jsx(al,{className:"w-4 h-4"})})]}),f.jsx("div",{className:"space-y-3.5",children:e.map((s,a)=>{const o=n.includes(s.id),l=s.id===t,c=a===0||n.includes(e[a-1].id)||l;return f.jsxs("div",{onClick:()=>{c&&(Le.playKeyClick(),i(s.id),r())},className:`p-4 rounded-xl border transition-all flex items-center justify-between ${l?"bg-cyan-950/40 border-cyan-500/80 shadow-lg shadow-cyan-950/50":c?"bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40 cursor-pointer":"bg-slate-950/30 border-slate-900 opacity-50 cursor-not-allowed"}`,children:[f.jsxs("div",{className:"flex items-start gap-3.5",children:[f.jsxs("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 ${o?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":l?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/50":c?"bg-slate-800 text-slate-300 border border-slate-700":"bg-slate-900 text-slate-600"}`,children:["M",s.sequence]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("h3",{className:"font-bold text-white text-sm",children:s.title}),o&&f.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-medium flex items-center gap-1",children:[f.jsx(_s,{className:"w-3 h-3"})," Solved"]}),l&&f.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-medium",children:"Active"})]}),f.jsx("p",{className:"text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed",children:s.briefing})]})]}),f.jsx("div",{className:"shrink-0 ml-4",children:c?f.jsxs("button",{className:"px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-cyan-600 hover:text-white text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition",children:[f.jsx(hA,{className:"w-3 h-3 fill-current"}),f.jsx("span",{children:l?"Continue":"Launch"})]}):f.jsx("div",{className:"p-2 rounded-xl bg-slate-900 text-slate-600",children:f.jsx(Yc,{className:"w-4 h-4"})})})]},s.id)})})]})}),kA=({scenario:t,objectives:e,isOpen:n,onClose:i,onOpenTerminal:r,onOpenReport:s,onOpenCodeEditor:a})=>{const o=e.findIndex(u=>!u.passed&&!u.locked),l=o!==-1?o:0,[c,h]=se.useState(l),[d,p]=se.useState(null);if(se.useEffect(()=>{if(n){const u=e.findIndex(v=>!v.passed&&!v.locked);h(u!==-1?u:0),Le.playKeyClick()}},[n,e]),se.useEffect(()=>{if(!n)return;const u=v=>{v.key==="Escape"?(v.preventDefault(),i()):v.key==="ArrowLeft"?(v.preventDefault(),h(y=>Math.max(0,y-1)),Le.playKeyClick()):v.key==="ArrowRight"&&(v.preventDefault(),h(y=>Math.min(e.length-1,y+1)),Le.playKeyClick())};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[n,e.length,i]),!n||e.length===0)return null;const m=e[c]||e[0],g=m.guidance,S=u=>{navigator.clipboard.writeText(u),p(u),Le.playKeyClick(),setTimeout(()=>{p(null)},2e3)},x=()=>{Le.playKeyClick(),i(),(g==null?void 0:g.actionType)==="terminal"&&g.targetDevice&&r?r(g.targetDevice):(g==null?void 0:g.actionType)==="report"&&s?s():(g==null?void 0:g.actionType)==="editor"&&a&&a()};return f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-amber-500/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[f.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40",children:f.jsx(Ep,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("h2",{className:"text-sm font-bold text-white tracking-wide",children:"Contextual Guidance & Step-by-Step Hint"}),f.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-800",children:"Shortcut: [H]"})]}),f.jsxs("p",{className:"text-xs text-slate-400",children:["Step-by-step walk-through for: ",f.jsx("strong",{className:"text-slate-200",children:t.title})]})]})]}),f.jsx("button",{onClick:i,className:"p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition",title:"Close [Esc or H]",children:f.jsx(al,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"px-6 py-2.5 bg-slate-900/60 border-b border-slate-800/80 flex items-center justify-between text-xs overflow-x-auto gap-2",children:[f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("button",{onClick:()=>{h(u=>Math.max(0,u-1)),Le.playKeyClick()},disabled:c===0,className:"p-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300",title:"Previous objective (←)",children:f.jsx(iA,{className:"w-4 h-4"})}),f.jsxs("span",{className:"font-mono text-slate-300 px-2 font-semibold text-[11px]",children:["Step ",c+1," of ",e.length]}),f.jsx("button",{onClick:()=>{h(u=>Math.min(e.length-1,u+1)),Le.playKeyClick()},disabled:c===e.length-1,className:"p-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300",title:"Next objective (→)",children:f.jsx(rA,{className:"w-4 h-4"})})]}),f.jsx("div",{className:"flex items-center gap-1.5",children:e.map((u,v)=>f.jsx("button",{onClick:()=>{h(v),Le.playKeyClick()},className:`w-2.5 h-2.5 rounded-full transition-all ${v===c?"w-6 bg-amber-400":u.passed?"bg-emerald-500":u.locked?"bg-slate-700":"bg-slate-500 hover:bg-amber-400/60"}`,title:`Objective ${v+1}: ${u.description}`},u.id))}),f.jsx("div",{className:"flex items-center gap-1.5",children:m.passed?f.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-[11px] font-semibold flex items-center gap-1",children:[f.jsx(_s,{className:"w-3 h-3"})," Completed"]}):m.locked?f.jsx("span",{className:"px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 text-[11px] font-medium",children:"Prerequisite Locked"}):f.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-700 text-[11px] font-semibold flex items-center gap-1 animate-pulse",children:[f.jsx(m_,{className:"w-2.5 h-2.5 fill-current"})," Active Target"]})})]}),f.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-5 text-xs text-slate-200",children:[f.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start justify-between gap-4",children:[f.jsxs("div",{children:[f.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5",children:f.jsx("span",{children:"Objective Goal:"})}),f.jsx("h3",{className:"text-sm font-semibold text-white leading-snug",children:m.description}),m.detail&&f.jsxs("div",{className:"text-[11px] text-amber-300/90 font-mono mt-1.5 flex items-center gap-1",children:[f.jsx(sA,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsxs("span",{children:["Current Status: ",m.detail]})]})]}),g&&f.jsxs("button",{onClick:x,className:"shrink-0 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition",children:[g.actionType==="terminal"&&f.jsx(Zo,{className:"w-4 h-4"}),g.actionType==="cable"&&f.jsx(fh,{className:"w-4 h-4"}),g.actionType==="report"&&f.jsx(Ua,{className:"w-4 h-4"}),g.actionType==="editor"&&f.jsx(gu,{className:"w-4 h-4"}),f.jsx("span",{children:g.actionType==="terminal"?`Open ${g.targetDevice||"Device"} Console`:g.actionType==="report"?"Open Incident Report":g.actionType==="editor"?"Open Patch Editor":"Jump to Cabling"}),f.jsx(oA,{className:"w-3 h-3 ml-0.5 opacity-70"})]})]}),g&&g.steps.length>0?f.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3",children:[f.jsxs("div",{className:"font-bold text-slate-100 flex items-center gap-2 text-xs",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),f.jsx("span",{children:"Step-by-Step Instructions:"})]}),f.jsx("div",{className:"space-y-2.5",children:g.steps.map((u,v)=>f.jsxs("div",{className:"flex items-start gap-3 text-slate-300",children:[f.jsx("span",{className:"w-5 h-5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5",children:v+1}),f.jsx("span",{className:"leading-relaxed flex-1",children:u})]},v))})]}):f.jsx("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-400",children:m.hint||"Review the mission briefing for requirements on this step."}),(g==null?void 0:g.suggestedCommands)&&g.suggestedCommands.length>0&&f.jsxs("div",{className:"p-4 rounded-xl bg-slate-950/95 border border-slate-800/90",children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsxs("span",{className:"text-[11px] font-mono font-bold text-emerald-400 flex items-center gap-1.5",children:[f.jsx(Zo,{className:"w-3.5 h-3.5"}),f.jsxs("span",{children:["Command Sequence (",g.targetDevice||"Console","):"]})]}),f.jsxs("button",{onClick:()=>S(g.suggestedCommands.join(`
`)),className:"flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium transition",children:[d?f.jsx(r_,{className:"w-3 h-3 text-emerald-400"}):f.jsx(aA,{className:"w-3 h-3"}),f.jsx("span",{children:d?"Copied!":"Copy Commands"})]})]}),f.jsx("pre",{className:"p-3 rounded-lg bg-slate-900 border border-slate-800 text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed select-text",children:g.suggestedCommands.join(`
`)})]}),(g==null?void 0:g.explanation)&&f.jsxs("div",{className:"p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 text-slate-300 text-xs",children:[f.jsxs("div",{className:"font-bold text-sky-400 mb-1 flex items-center gap-1.5",children:[f.jsx(dh,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Under the Hood & CCNA Concepts:"})]}),f.jsx("p",{className:"leading-relaxed text-slate-300",children:g.explanation})]})]}),f.jsxs("div",{className:"px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400",children:[f.jsxs("div",{className:"flex items-center gap-3 text-[11px]",children:[f.jsxs("span",{className:"flex items-center gap-1",children:[f.jsx(uA,{className:"w-3.5 h-3.5 text-slate-500"}),f.jsxs("span",{children:["Press ",f.jsx("strong",{className:"text-slate-300",children:"H"})," or ",f.jsx("strong",{className:"text-slate-300",children:"Esc"})," to close"]})]}),f.jsx("span",{children:"•"}),f.jsxs("span",{children:["Use ",f.jsx("strong",{className:"text-slate-300",children:"← / →"})," keys to navigate steps"]})]}),f.jsx("button",{onClick:i,className:"px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition",children:"Got It"})]})]})})},IA=()=>{const t=se.useMemo(()=>{const N=new eM;return N.loadScenario(Fs[0]),N},[]),[e,n]=se.useState(Fs[0].id),[i,r]=se.useState([]),[s,a]=se.useState(()=>{try{const N=localStorage.getItem("netsec_completed_missions");return N?JSON.parse(N):[]}catch{return[]}}),[o,l]=se.useState(null),[c,h]=se.useState(null),[d,p]=se.useState(!1),[m,g]=se.useState(!1),[S,x]=se.useState("/var/www/login.php"),[u,v]=se.useState(!1),[y,_]=se.useState(!1),[R,A]=se.useState(!0),C=se.useMemo(()=>Fs.find(N=>N.id===e)||Mf,[e]),L=se.useCallback(N=>{const z=Fs.find(V=>V.id===N)||Mf;n(z.id),h(null),p(!1),g(!1),_(!1),t.loadScenario(z),r(t.objectiveStates()),z.id==="m0_orientation"?(l("PC-A"),_(!0)):z.id==="m1_vlan_ping"?l("R1"):z.id==="m2_log_triage"?l("SOC-PC"):z.id==="m3_web_patch"&&l("PC-1")},[t]);se.useEffect(()=>{t.onObjectiveUpdated=N=>{r([...N])},t.onMissionCompleted=N=>{Le.playSuccessBeep(),a(z=>{if(!z.includes(N)){const V=[...z,N];try{localStorage.setItem("netsec_completed_missions",JSON.stringify(V))}catch{}return V}return z})},L(e)},[t]);const E=se.useCallback(N=>l(N),[]),M=se.useCallback(()=>p(!0),[]);return se.useEffect(()=>{const N=z=>{z.target instanceof HTMLInputElement||z.target instanceof HTMLTextAreaElement||(z.key==="h"||z.key==="H")&&(z.preventDefault(),_(V=>!V))};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[]),f.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-slate-950 font-sans flex flex-col",children:[f.jsxs("header",{className:"h-12 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md px-4 flex items-center justify-between z-30 select-none",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/20",children:f.jsx(SA,{className:"w-4 h-4 fill-current"})}),f.jsx("div",{children:f.jsxs("span",{className:"font-bold text-white text-sm tracking-tight flex items-center gap-1.5",children:[f.jsx("span",{children:"NetSec 3D Simulator"}),f.jsx("span",{className:"text-[10px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono font-semibold",children:"v1.0"})]})})]}),f.jsxs("button",{onClick:()=>{Le.playKeyClick(),v(!0)},className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 transition",children:[f.jsx(A_,{className:"w-3.5 h-3.5 text-cyan-400"}),f.jsxs("span",{children:["M",C.sequence,": ",C.title]})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("button",{onClick:()=>{if(Le.playKeyClick(),o)l(null);else{const N=Array.from(t.devices.keys())[0]||"R1";l(N)}},className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${o?"bg-cyan-500 text-slate-950 border-cyan-400 font-bold":"bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700"}`,children:[f.jsx(Zo,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"CLI Terminal"})]}),C.id==="m2_log_triage"&&f.jsxs("button",{onClick:()=>{Le.playKeyClick(),p(!0)},className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-950 hover:bg-sky-900 border border-sky-700 text-sky-300 text-xs font-semibold transition",children:[f.jsx(Ua,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"SOC Logs & Threat Map"})]}),C.id==="m3_web_patch"&&f.jsxs("button",{onClick:()=>{Le.playKeyClick(),g(!0)},className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-950 hover:bg-indigo-900 border border-indigo-700 text-indigo-300 text-xs font-semibold transition",children:[f.jsx(gu,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Patch Editor"})]}),f.jsxs("button",{onClick:()=>{Le.playKeyClick(),_(N=>!N)},className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${y?"bg-amber-500 text-slate-950 border-amber-400 font-bold":"bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/40"}`,title:"Contextual Step-by-Step Guidance (Press 'H')",children:[f.jsx(Ep,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsx("span",{children:"Guidance (H)"})]}),f.jsx("button",{onClick:()=>{const N=!R;A(N),Le.enabled=N},title:R?"Mute Audio":"Unmute Audio",className:"p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition",children:R?f.jsx(e1,{className:"w-4 h-4 text-cyan-400"}):f.jsx(n1,{className:"w-4 h-4"})})]})]}),f.jsxs("main",{className:"relative flex-1 w-full h-full overflow-hidden",children:[f.jsx(CA,{sim:t,scenarioId:e,simRevision:i,onOpenTerminal:E,selectedPort:c,onSelectPort:h,onOpenThreatMap:M,onOpenCodeEditor:N=>{const z=N.split(":");z[1]&&x(z[1]),g(!0)}}),f.jsx(RA,{sim:t,scenario:C,objectives:i,onOpenReport:()=>p(!0),onOpenCodeEditor:()=>g(!0),onOpenHint:()=>_(!0),onSelectMission:L,onRestartMission:()=>L(C.id),allScenarios:Fs}),o&&f.jsx(AA,{sim:t,deviceId:o,onClose:()=>l(null),onSwitchDevice:N=>l(N),onOpenCodeEditor:N=>{const z=N.split(":");z[1]&&x(z[1]),g(!0)}}),f.jsx(kA,{scenario:C,objectives:i,isOpen:y,onClose:()=>_(!1),onOpenTerminal:N=>l(N),onOpenReport:()=>p(!0),onOpenCodeEditor:()=>g(!0)}),d&&f.jsx(NA,{sim:t,onClose:()=>p(!1)}),m&&f.jsx(PA,{sim:t,initialFile:S,onClose:()=>g(!1)}),u&&f.jsx(LA,{currentScenarioId:C.id,allScenarios:Fs,completedIds:s,onSelect:N=>L(N),onClose:()=>v(!1)})]})]})};Cd.createRoot(document.getElementById("root")).render(f.jsx(w1.StrictMode,{children:f.jsx(IA,{})}));
