(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function mk(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ll={},gk={get exports(){return Ll},set exports(t){Ll=t}},Oc={},B={},yk={get exports(){return B},set exports(t){B=t}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu=Symbol.for("react.element"),vk=Symbol.for("react.portal"),wk=Symbol.for("react.fragment"),Ik=Symbol.for("react.strict_mode"),_k=Symbol.for("react.profiler"),Ek=Symbol.for("react.provider"),Sk=Symbol.for("react.context"),Tk=Symbol.for("react.forward_ref"),kk=Symbol.for("react.suspense"),Ck=Symbol.for("react.memo"),Nk=Symbol.for("react.lazy"),Ey=Symbol.iterator;function Ak(t){return t===null||typeof t!="object"?null:(t=Ey&&t[Ey]||t["@@iterator"],typeof t=="function"?t:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A0=Object.assign,D0={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=D0,this.updater=n||N0}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function x0(){}x0.prototype=Zs.prototype;function Lp(t,e,n){this.props=t,this.context=e,this.refs=D0,this.updater=n||N0}var Mp=Lp.prototype=new x0;Mp.constructor=Lp;A0(Mp,Zs.prototype);Mp.isPureReactComponent=!0;var Sy=Array.isArray,R0=Object.prototype.hasOwnProperty,$p={current:null},b0={key:!0,ref:!0,__self:!0,__source:!0};function P0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)R0.call(e,r)&&!b0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:nu,type:t,key:s,ref:o,props:i,_owner:$p.current}}function Dk(t,e){return{$$typeof:nu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fp(t){return typeof t=="object"&&t!==null&&t.$$typeof===nu}function xk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ty=/\/+/g;function Qh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xk(""+t.key):e.toString(36)}function dl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case nu:case vk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Qh(o,0):r,Sy(i)?(n="",t!=null&&(n=t.replace(Ty,"$&/")+"/"),dl(i,e,n,"",function(l){return l})):i!=null&&(Fp(i)&&(i=Dk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ty,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Sy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Qh(s,a);o+=dl(s,e,n,u,i)}else if(u=Ak(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Qh(s,a++),o+=dl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $u(t,e,n){if(t==null)return t;var r=[],i=0;return dl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Rk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},fl={transition:null},bk={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:fl,ReactCurrentOwner:$p};Q.Children={map:$u,forEach:function(t,e,n){$u(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $u(t,function(){e++}),e},toArray:function(t){return $u(t,function(e){return e})||[]},only:function(t){if(!Fp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=Zs;Q.Fragment=wk;Q.Profiler=_k;Q.PureComponent=Lp;Q.StrictMode=Ik;Q.Suspense=kk;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bk;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=A0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$p.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)R0.call(e,u)&&!b0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:nu,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:Sk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ek,_context:t},t.Consumer=t};Q.createElement=P0;Q.createFactory=function(t){var e=P0.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:Tk,render:t}};Q.isValidElement=Fp;Q.lazy=function(t){return{$$typeof:Nk,_payload:{_status:-1,_result:t},_init:Rk}};Q.memo=function(t,e){return{$$typeof:Ck,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=fl.transition;fl.transition={};try{t()}finally{fl.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return wt.current.useCallback(t,e)};Q.useContext=function(t){return wt.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};Q.useEffect=function(t,e){return wt.current.useEffect(t,e)};Q.useId=function(){return wt.current.useId()};Q.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return wt.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};Q.useRef=function(t){return wt.current.useRef(t)};Q.useState=function(t){return wt.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return wt.current.useTransition()};Q.version="18.2.0";(function(t){t.exports=Q})(yk);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pk=B,Ok=Symbol.for("react.element"),Lk=Symbol.for("react.fragment"),Mk=Object.prototype.hasOwnProperty,$k=Pk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fk={key:!0,ref:!0,__self:!0,__source:!0};function O0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Mk.call(e,r)&&!Fk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ok,type:t,key:s,ref:o,props:i,_owner:$k.current}}Oc.Fragment=Lk;Oc.jsx=O0;Oc.jsxs=O0;(function(t){t.exports=Oc})(gk);const V=Ll.jsx,Me=Ll.jsxs;var Wd={},Gd={},Uk={get exports(){return Gd},set exports(t){Gd=t}},Vt={},Kd={},Vk={get exports(){return Kd},set exports(t){Kd=t}},L0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,G){var K=L.length;L.push(G);e:for(;0<K;){var Se=K-1>>>1,Le=L[Se];if(0<i(Le,G))L[Se]=G,L[K]=Le,K=Se;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var G=L[0],K=L.pop();if(K!==G){L[0]=K;e:for(var Se=0,Le=L.length,Lu=Le>>>1;Se<Lu;){var Hr=2*(Se+1)-1,Hh=L[Hr],Qr=Hr+1,Mu=L[Qr];if(0>i(Hh,K))Qr<Le&&0>i(Mu,Hh)?(L[Se]=Mu,L[Qr]=K,Se=Qr):(L[Se]=Hh,L[Hr]=K,Se=Hr);else if(Qr<Le&&0>i(Mu,K))L[Se]=Mu,L[Qr]=K,Se=Qr;else break e}}return G}function i(L,G){var K=L.sortIndex-G.sortIndex;return K!==0?K:L.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,d=3,m=!1,y=!1,v=!1,D=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(L){for(var G=n(l);G!==null;){if(G.callback===null)r(l);else if(G.startTime<=L)r(l),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(l)}}function _(L){if(v=!1,p(L),!y)if(n(u)!==null)y=!0,Gh(E);else{var G=n(l);G!==null&&Kh(_,G.startTime-L)}}function E(L,G){y=!1,v&&(v=!1,g(b),b=-1),m=!0;var K=d;try{for(p(G),h=n(u);h!==null&&(!(h.expirationTime>G)||L&&!ct());){var Se=h.callback;if(typeof Se=="function"){h.callback=null,d=h.priorityLevel;var Le=Se(h.expirationTime<=G);G=t.unstable_now(),typeof Le=="function"?h.callback=Le:h===n(u)&&r(u),p(G)}else r(u);h=n(u)}if(h!==null)var Lu=!0;else{var Hr=n(l);Hr!==null&&Kh(_,Hr.startTime-G),Lu=!1}return Lu}finally{h=null,d=K,m=!1}}var k=!1,A=null,b=-1,te=5,j=-1;function ct(){return!(t.unstable_now()-j<te)}function an(){if(A!==null){var L=t.unstable_now();j=L;var G=!0;try{G=A(!0,L)}finally{G?ht():(k=!1,A=null)}}else k=!1}var ht;if(typeof f=="function")ht=function(){f(an)};else if(typeof MessageChannel<"u"){var zt=new MessageChannel,pk=zt.port2;zt.port1.onmessage=an,ht=function(){pk.postMessage(null)}}else ht=function(){D(an,0)};function Gh(L){A=L,k||(k=!0,ht())}function Kh(L,G){b=D(function(){L(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,Gh(E))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var K=d;d=G;try{return L()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,G){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=d;d=L;try{return G()}finally{d=K}},t.unstable_scheduleCallback=function(L,G,K){var Se=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Se+K:Se):K=Se,L){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=K+Le,L={id:c++,callback:G,priorityLevel:L,startTime:K,expirationTime:Le,sortIndex:-1},K>Se?(L.sortIndex=K,e(l,L),n(u)===null&&L===n(l)&&(v?(g(b),b=-1):v=!0,Kh(_,K-Se))):(L.sortIndex=Le,e(u,L),y||m||(y=!0,Gh(E))),L},t.unstable_shouldYield=ct,t.unstable_wrapCallback=function(L){var G=d;return function(){var K=d;d=G;try{return L.apply(this,arguments)}finally{d=K}}}})(L0);(function(t){t.exports=L0})(Vk);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0=B,$t=Kd;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $0=new Set,fa={};function Vi(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(fa[t]=e,t=0;t<e.length;t++)$0.add(e[t])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hd=Object.prototype.hasOwnProperty,Bk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ky={},Cy={};function zk(t){return Hd.call(Cy,t)?!0:Hd.call(ky,t)?!1:Bk.test(t)?Cy[t]=!0:(ky[t]=!0,!1)}function jk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qk(t,e,n,r){if(e===null||typeof e>"u"||jk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var Up=/[\-:]([a-z])/g;function Vp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Up,Vp);Ze[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Up,Vp);Ze[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Up,Vp);Ze[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bp(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qk(e,n,i,r)&&(n=null),r||i===null?zk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=M0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fu=Symbol.for("react.element"),ss=Symbol.for("react.portal"),os=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),Qd=Symbol.for("react.profiler"),F0=Symbol.for("react.provider"),U0=Symbol.for("react.context"),jp=Symbol.for("react.forward_ref"),Yd=Symbol.for("react.suspense"),Xd=Symbol.for("react.suspense_list"),qp=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),V0=Symbol.for("react.offscreen"),Ny=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=Ny&&t[Ny]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,Yh;function Mo(t){if(Yh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yh=e&&e[1]||""}return`
`+Yh+t}var Xh=!1;function Jh(t,e){if(!t||Xh)return"";Xh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Xh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mo(t):""}function Wk(t){switch(t.tag){case 5:return Mo(t.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return t=Jh(t.type,!1),t;case 11:return t=Jh(t.type.render,!1),t;case 1:return t=Jh(t.type,!0),t;default:return""}}function Jd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case os:return"Fragment";case ss:return"Portal";case Qd:return"Profiler";case zp:return"StrictMode";case Yd:return"Suspense";case Xd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U0:return(t.displayName||"Context")+".Consumer";case F0:return(t._context.displayName||"Context")+".Provider";case jp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qp:return e=t.displayName||null,e!==null?e:Jd(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return Jd(t(e))}catch{}}return null}function Gk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jd(e);case 8:return e===zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function B0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Kk(t){var e=B0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Uu(t){t._valueTracker||(t._valueTracker=Kk(t))}function z0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=B0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zd(t,e){var n=e.checked;return ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ay(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j0(t,e){e=e.checked,e!=null&&Bp(t,"checked",e,!1)}function ef(t,e){j0(t,e);var n=Tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&tf(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tf(t,e,n){(e!=="number"||Ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $o=Array.isArray;function ws(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if($o(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function q0(t,e){var n=Tr(e.value),r=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ry(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function W0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?W0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vu,G0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vu=Vu||document.createElement("div"),Vu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hk=["Webkit","ms","Moz","O"];Object.keys(Ho).forEach(function(t){Hk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ho[e]=Ho[t]})});function K0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ho.hasOwnProperty(t)&&Ho[t]?(""+e).trim():e+"px"}function H0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=K0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Qk=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sf(t,e){if(e){if(Qk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function of(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var af=null;function Wp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uf=null,Is=null,_s=null;function by(t){if(t=su(t)){if(typeof uf!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Uc(e),uf(t.stateNode,t.type,e))}}function Q0(t){Is?_s?_s.push(t):_s=[t]:Is=t}function Y0(){if(Is){var t=Is,e=_s;if(_s=Is=null,by(t),e)for(t=0;t<e.length;t++)by(e[t])}}function X0(t,e){return t(e)}function J0(){}var Zh=!1;function Z0(t,e,n){if(Zh)return t(e,n);Zh=!0;try{return X0(t,e,n)}finally{Zh=!1,(Is!==null||_s!==null)&&(J0(),Y0())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var r=Uc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var lf=!1;if(Un)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){lf=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{lf=!1}function Yk(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Qo=!1,$l=null,Fl=!1,cf=null,Xk={onError:function(t){Qo=!0,$l=t}};function Jk(t,e,n,r,i,s,o,a,u){Qo=!1,$l=null,Yk.apply(Xk,arguments)}function Zk(t,e,n,r,i,s,o,a,u){if(Jk.apply(this,arguments),Qo){if(Qo){var l=$l;Qo=!1,$l=null}else throw Error(C(198));Fl||(Fl=!0,cf=l)}}function Bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function eI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Py(t){if(Bi(t)!==t)throw Error(C(188))}function eC(t){var e=t.alternate;if(!e){if(e=Bi(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Py(i),t;if(s===r)return Py(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function tI(t){return t=eC(t),t!==null?nI(t):null}function nI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=nI(t);if(e!==null)return e;t=t.sibling}return null}var rI=$t.unstable_scheduleCallback,Oy=$t.unstable_cancelCallback,tC=$t.unstable_shouldYield,nC=$t.unstable_requestPaint,Te=$t.unstable_now,rC=$t.unstable_getCurrentPriorityLevel,Gp=$t.unstable_ImmediatePriority,iI=$t.unstable_UserBlockingPriority,Ul=$t.unstable_NormalPriority,iC=$t.unstable_LowPriority,sI=$t.unstable_IdlePriority,Lc=null,wn=null;function sC(t){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Lc,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:uC,oC=Math.log,aC=Math.LN2;function uC(t){return t>>>=0,t===0?32:31-(oC(t)/aC|0)|0}var Bu=64,zu=4194304;function Fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fo(a):(s&=o,s!==0&&(r=Fo(s)))}else o=n&~i,o!==0?r=Fo(o):s!==0&&(r=Fo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),i=1<<n,r|=t[n],e&=~i;return r}function lC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=lC(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function hf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function oI(){var t=Bu;return Bu<<=1,!(Bu&4194240)&&(Bu=64),t}function ed(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ru(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function hC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Kp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function aI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uI,Hp,lI,cI,hI,df=!1,ju=[],pr=null,mr=null,gr=null,ga=new Map,ya=new Map,or=[],dC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ly(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function Io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=su(e),e!==null&&Hp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function fC(t,e,n,r,i){switch(e){case"focusin":return pr=Io(pr,t,e,n,r,i),!0;case"dragenter":return mr=Io(mr,t,e,n,r,i),!0;case"mouseover":return gr=Io(gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ga.set(s,Io(ga.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ya.set(s,Io(ya.get(s)||null,t,e,n,r,i)),!0}return!1}function dI(t){var e=oi(t.target);if(e!==null){var n=Bi(e);if(n!==null){if(e=n.tag,e===13){if(e=eI(n),e!==null){t.blockedOn=e,hI(t.priority,function(){lI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ff(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);af=r,n.target.dispatchEvent(r),af=null}else return e=su(n),e!==null&&Hp(e),t.blockedOn=n,!1;e.shift()}return!0}function My(t,e,n){pl(t)&&n.delete(e)}function pC(){df=!1,pr!==null&&pl(pr)&&(pr=null),mr!==null&&pl(mr)&&(mr=null),gr!==null&&pl(gr)&&(gr=null),ga.forEach(My),ya.forEach(My)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,df||(df=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,pC)))}function va(t){function e(i){return _o(i,t)}if(0<ju.length){_o(ju[0],t);for(var n=1;n<ju.length;n++){var r=ju[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pr!==null&&_o(pr,t),mr!==null&&_o(mr,t),gr!==null&&_o(gr,t),ga.forEach(e),ya.forEach(e),n=0;n<or.length;n++)r=or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)dI(n),n.blockedOn===null&&or.shift()}var Es=Kn.ReactCurrentBatchConfig,Bl=!0;function mC(t,e,n,r){var i=re,s=Es.transition;Es.transition=null;try{re=1,Qp(t,e,n,r)}finally{re=i,Es.transition=s}}function gC(t,e,n,r){var i=re,s=Es.transition;Es.transition=null;try{re=4,Qp(t,e,n,r)}finally{re=i,Es.transition=s}}function Qp(t,e,n,r){if(Bl){var i=ff(t,e,n,r);if(i===null)cd(t,e,r,zl,n),Ly(t,r);else if(fC(i,t,e,n,r))r.stopPropagation();else if(Ly(t,r),e&4&&-1<dC.indexOf(t)){for(;i!==null;){var s=su(i);if(s!==null&&uI(s),s=ff(t,e,n,r),s===null&&cd(t,e,r,zl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else cd(t,e,r,null,n)}}var zl=null;function ff(t,e,n,r){if(zl=null,t=Wp(r),t=oi(t),t!==null)if(e=Bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=eI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function fI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rC()){case Gp:return 1;case iI:return 4;case Ul:case iC:return 16;case sI:return 536870912;default:return 16}default:return 16}}var cr=null,Yp=null,ml=null;function pI(){if(ml)return ml;var t,e=Yp,n=e.length,r,i="value"in cr?cr.value:cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ml=i.slice(t,1<r?1-r:void 0)}function gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qu(){return!0}function $y(){return!1}function Bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qu:$y,this.isPropagationStopped=$y,this}return ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qu)},persist:function(){},isPersistent:qu}),e}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xp=Bt(eo),iu=ge({},eo,{view:0,detail:0}),yC=Bt(iu),td,nd,Eo,Mc=ge({},iu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(td=t.screenX-Eo.screenX,nd=t.screenY-Eo.screenY):nd=td=0,Eo=t),td)},movementY:function(t){return"movementY"in t?t.movementY:nd}}),Fy=Bt(Mc),vC=ge({},Mc,{dataTransfer:0}),wC=Bt(vC),IC=ge({},iu,{relatedTarget:0}),rd=Bt(IC),_C=ge({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),EC=Bt(_C),SC=ge({},eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TC=Bt(SC),kC=ge({},eo,{data:0}),Uy=Bt(kC),CC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AC[t])?!!e[t]:!1}function Jp(){return DC}var xC=ge({},iu,{key:function(t){if(t.key){var e=CC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jp,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RC=Bt(xC),bC=ge({},Mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vy=Bt(bC),PC=ge({},iu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jp}),OC=Bt(PC),LC=ge({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),MC=Bt(LC),$C=ge({},Mc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FC=Bt($C),UC=[9,13,27,32],Zp=Un&&"CompositionEvent"in window,Yo=null;Un&&"documentMode"in document&&(Yo=document.documentMode);var VC=Un&&"TextEvent"in window&&!Yo,mI=Un&&(!Zp||Yo&&8<Yo&&11>=Yo),By=String.fromCharCode(32),zy=!1;function gI(t,e){switch(t){case"keyup":return UC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function BC(t,e){switch(t){case"compositionend":return yI(e);case"keypress":return e.which!==32?null:(zy=!0,By);case"textInput":return t=e.data,t===By&&zy?null:t;default:return null}}function zC(t,e){if(as)return t==="compositionend"||!Zp&&gI(t,e)?(t=pI(),ml=Yp=cr=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mI&&e.locale!=="ko"?null:e.data;default:return null}}var jC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jC[t.type]:e==="textarea"}function vI(t,e,n,r){Q0(r),e=jl(e,"onChange"),0<e.length&&(n=new Xp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xo=null,wa=null;function qC(t){DI(t,0)}function $c(t){var e=cs(t);if(z0(e))return t}function WC(t,e){if(t==="change")return e}var wI=!1;if(Un){var id;if(Un){var sd="oninput"in document;if(!sd){var qy=document.createElement("div");qy.setAttribute("oninput","return;"),sd=typeof qy.oninput=="function"}id=sd}else id=!1;wI=id&&(!document.documentMode||9<document.documentMode)}function Wy(){Xo&&(Xo.detachEvent("onpropertychange",II),wa=Xo=null)}function II(t){if(t.propertyName==="value"&&$c(wa)){var e=[];vI(e,wa,t,Wp(t)),Z0(qC,e)}}function GC(t,e,n){t==="focusin"?(Wy(),Xo=e,wa=n,Xo.attachEvent("onpropertychange",II)):t==="focusout"&&Wy()}function KC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $c(wa)}function HC(t,e){if(t==="click")return $c(e)}function QC(t,e){if(t==="input"||t==="change")return $c(e)}function YC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:YC;function Ia(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hd.call(e,i)||!sn(t[i],e[i]))return!1}return!0}function Gy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ky(t,e){var n=Gy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gy(n)}}function _I(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_I(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function EI(){for(var t=window,e=Ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ml(t.document)}return e}function em(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function XC(t){var e=EI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_I(n.ownerDocument.documentElement,n)){if(r!==null&&em(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ky(n,s);var o=Ky(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JC=Un&&"documentMode"in document&&11>=document.documentMode,us=null,pf=null,Jo=null,mf=!1;function Hy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mf||us==null||us!==Ml(r)||(r=us,"selectionStart"in r&&em(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jo&&Ia(Jo,r)||(Jo=r,r=jl(pf,"onSelect"),0<r.length&&(e=new Xp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=us)))}function Wu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:Wu("Animation","AnimationEnd"),animationiteration:Wu("Animation","AnimationIteration"),animationstart:Wu("Animation","AnimationStart"),transitionend:Wu("Transition","TransitionEnd")},od={},SI={};Un&&(SI=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Fc(t){if(od[t])return od[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in SI)return od[t]=e[n];return t}var TI=Fc("animationend"),kI=Fc("animationiteration"),CI=Fc("animationstart"),NI=Fc("transitionend"),AI=new Map,Qy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){AI.set(t,e),Vi(e,[t])}for(var ad=0;ad<Qy.length;ad++){var ud=Qy[ad],ZC=ud.toLowerCase(),eN=ud[0].toUpperCase()+ud.slice(1);Fr(ZC,"on"+eN)}Fr(TI,"onAnimationEnd");Fr(kI,"onAnimationIteration");Fr(CI,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(NI,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tN=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function Yy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Zk(r,e,void 0,t),t.currentTarget=null}function DI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Yy(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Yy(i,a,l),s=u}}}if(Fl)throw t=cf,Fl=!1,cf=null,t}function oe(t,e){var n=e[If];n===void 0&&(n=e[If]=new Set);var r=t+"__bubble";n.has(r)||(xI(e,t,2,!1),n.add(r))}function ld(t,e,n){var r=0;e&&(r|=4),xI(n,t,r,e)}var Gu="_reactListening"+Math.random().toString(36).slice(2);function _a(t){if(!t[Gu]){t[Gu]=!0,$0.forEach(function(n){n!=="selectionchange"&&(tN.has(n)||ld(n,!1,t),ld(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gu]||(e[Gu]=!0,ld("selectionchange",!1,e))}}function xI(t,e,n,r){switch(fI(e)){case 1:var i=mC;break;case 4:i=gC;break;default:i=Qp}n=i.bind(null,e,n,t),i=void 0,!lf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function cd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=oi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Z0(function(){var l=s,c=Wp(n),h=[];e:{var d=AI.get(t);if(d!==void 0){var m=Xp,y=t;switch(t){case"keypress":if(gl(n)===0)break e;case"keydown":case"keyup":m=RC;break;case"focusin":y="focus",m=rd;break;case"focusout":y="blur",m=rd;break;case"beforeblur":case"afterblur":m=rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Fy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=wC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=OC;break;case TI:case kI:case CI:m=EC;break;case NI:m=MC;break;case"scroll":m=yC;break;case"wheel":m=FC;break;case"copy":case"cut":case"paste":m=TC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vy}var v=(e&4)!==0,D=!v&&t==="scroll",g=v?d!==null?d+"Capture":null:d;v=[];for(var f=l,p;f!==null;){p=f;var _=p.stateNode;if(p.tag===5&&_!==null&&(p=_,g!==null&&(_=ma(f,g),_!=null&&v.push(Ea(f,_,p)))),D)break;f=f.return}0<v.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==af&&(y=n.relatedTarget||n.fromElement)&&(oi(y)||y[Vn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=l,y=y?oi(y):null,y!==null&&(D=Bi(y),y!==D||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=l),m!==y)){if(v=Fy,_="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Vy,_="onPointerLeave",g="onPointerEnter",f="pointer"),D=m==null?d:cs(m),p=y==null?d:cs(y),d=new v(_,f+"leave",m,n,c),d.target=D,d.relatedTarget=p,_=null,oi(c)===l&&(v=new v(g,f+"enter",y,n,c),v.target=p,v.relatedTarget=D,_=v),D=_,m&&y)t:{for(v=m,g=y,f=0,p=v;p;p=Ji(p))f++;for(p=0,_=g;_;_=Ji(_))p++;for(;0<f-p;)v=Ji(v),f--;for(;0<p-f;)g=Ji(g),p--;for(;f--;){if(v===g||g!==null&&v===g.alternate)break t;v=Ji(v),g=Ji(g)}v=null}else v=null;m!==null&&Xy(h,d,m,v,!1),y!==null&&D!==null&&Xy(h,D,y,v,!0)}}e:{if(d=l?cs(l):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var E=WC;else if(jy(d))if(wI)E=QC;else{E=KC;var k=GC}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=HC);if(E&&(E=E(t,l))){vI(h,E,n,c);break e}k&&k(t,d,l),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&tf(d,"number",d.value)}switch(k=l?cs(l):window,t){case"focusin":(jy(k)||k.contentEditable==="true")&&(us=k,pf=l,Jo=null);break;case"focusout":Jo=pf=us=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,Hy(h,n,c);break;case"selectionchange":if(JC)break;case"keydown":case"keyup":Hy(h,n,c)}var A;if(Zp)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else as?gI(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(mI&&n.locale!=="ko"&&(as||b!=="onCompositionStart"?b==="onCompositionEnd"&&as&&(A=pI()):(cr=c,Yp="value"in cr?cr.value:cr.textContent,as=!0)),k=jl(l,b),0<k.length&&(b=new Uy(b,t,null,n,c),h.push({event:b,listeners:k}),A?b.data=A:(A=yI(n),A!==null&&(b.data=A)))),(A=VC?BC(t,n):zC(t,n))&&(l=jl(l,"onBeforeInput"),0<l.length&&(c=new Uy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=A))}DI(h,e)})}function Ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ma(t,n),s!=null&&r.unshift(Ea(t,s,i)),s=ma(t,e),s!=null&&r.push(Ea(t,s,i))),t=t.return}return r}function Ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=ma(n,s),u!=null&&o.unshift(Ea(n,u,a))):i||(u=ma(n,s),u!=null&&o.push(Ea(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nN=/\r\n?/g,rN=/\u0000|\uFFFD/g;function Jy(t){return(typeof t=="string"?t:""+t).replace(nN,`
`).replace(rN,"")}function Ku(t,e,n){if(e=Jy(e),Jy(t)!==e&&n)throw Error(C(425))}function ql(){}var gf=null,yf=null;function vf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wf=typeof setTimeout=="function"?setTimeout:void 0,iN=typeof clearTimeout=="function"?clearTimeout:void 0,Zy=typeof Promise=="function"?Promise:void 0,sN=typeof queueMicrotask=="function"?queueMicrotask:typeof Zy<"u"?function(t){return Zy.resolve(null).then(t).catch(oN)}:wf;function oN(t){setTimeout(function(){throw t})}function hd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),va(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);va(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ev(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var to=Math.random().toString(36).slice(2),cn="__reactFiber$"+to,Sa="__reactProps$"+to,Vn="__reactContainer$"+to,If="__reactEvents$"+to,aN="__reactListeners$"+to,uN="__reactHandles$"+to;function oi(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vn]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ev(t);t!==null;){if(n=t[cn])return n;t=ev(t)}return e}t=n,n=t.parentNode}return null}function su(t){return t=t[cn]||t[Vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Uc(t){return t[Sa]||null}var _f=[],hs=-1;function Ur(t){return{current:t}}function ue(t){0>hs||(t.current=_f[hs],_f[hs]=null,hs--)}function se(t,e){hs++,_f[hs]=t.current,t.current=e}var kr={},lt=Ur(kr),At=Ur(!1),_i=kr;function Rs(t,e){var n=t.type.contextTypes;if(!n)return kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Dt(t){return t=t.childContextTypes,t!=null}function Wl(){ue(At),ue(lt)}function tv(t,e,n){if(lt.current!==kr)throw Error(C(168));se(lt,e),se(At,n)}function RI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,Gk(t)||"Unknown",i));return ge({},n,r)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,_i=lt.current,se(lt,t),se(At,At.current),!0}function nv(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=RI(t,e,_i),r.__reactInternalMemoizedMergedChildContext=t,ue(At),ue(lt),se(lt,t)):ue(At),se(At,n)}var xn=null,Vc=!1,dd=!1;function bI(t){xn===null?xn=[t]:xn.push(t)}function lN(t){Vc=!0,bI(t)}function Vr(){if(!dd&&xn!==null){dd=!0;var t=0,e=re;try{var n=xn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,Vc=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),rI(Gp,Vr),i}finally{re=e,dd=!1}}return null}var ds=[],fs=0,Kl=null,Hl=0,jt=[],qt=0,Ei=null,Rn=1,bn="";function Xr(t,e){ds[fs++]=Hl,ds[fs++]=Kl,Kl=t,Hl=e}function PI(t,e,n){jt[qt++]=Rn,jt[qt++]=bn,jt[qt++]=Ei,Ei=t;var r=Rn;t=bn;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-nn(e)+i|n<<i|r,bn=s+t}else Rn=1<<s|n<<i|r,bn=t}function tm(t){t.return!==null&&(Xr(t,1),PI(t,1,0))}function nm(t){for(;t===Kl;)Kl=ds[--fs],ds[fs]=null,Hl=ds[--fs],ds[fs]=null;for(;t===Ei;)Ei=jt[--qt],jt[qt]=null,bn=jt[--qt],jt[qt]=null,Rn=jt[--qt],jt[qt]=null}var Mt=null,Ot=null,ce=!1,en=null;function OI(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Ot=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ei!==null?{id:Rn,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,Ot=null,!0):!1;default:return!1}}function Ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sf(t){if(ce){var e=Ot;if(e){var n=e;if(!rv(t,e)){if(Ef(t))throw Error(C(418));e=yr(n.nextSibling);var r=Mt;e&&rv(t,e)?OI(r,n):(t.flags=t.flags&-4097|2,ce=!1,Mt=t)}}else{if(Ef(t))throw Error(C(418));t.flags=t.flags&-4097|2,ce=!1,Mt=t}}}function iv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function Hu(t){if(t!==Mt)return!1;if(!ce)return iv(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vf(t.type,t.memoizedProps)),e&&(e=Ot)){if(Ef(t))throw LI(),Error(C(418));for(;e;)OI(t,e),e=yr(e.nextSibling)}if(iv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=Mt?yr(t.stateNode.nextSibling):null;return!0}function LI(){for(var t=Ot;t;)t=yr(t.nextSibling)}function bs(){Ot=Mt=null,ce=!1}function rm(t){en===null?en=[t]:en.push(t)}var cN=Kn.ReactCurrentBatchConfig;function Jt(t,e){if(t&&t.defaultProps){e=ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ql=Ur(null),Yl=null,ps=null,im=null;function sm(){im=ps=Yl=null}function om(t){var e=Ql.current;ue(Ql),t._currentValue=e}function Tf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){Yl=t,im=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(im!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(Yl===null)throw Error(C(308));ps=t,Yl.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var ai=null;function am(t){ai===null?ai=[t]:ai.push(t)}function MI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,am(e)):(n.next=i.next,i.next=n),e.interleaved=n,Bn(t,r)}function Bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function um(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $I(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Bn(t,n)}return i=r.interleaved,i===null?(e.next=e,am(r)):(e.next=i.next,i.next=e),r.interleaved=e,Bn(t,n)}function yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}function sv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xl(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=ge({},h,d);break e;case 2:sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=m,u=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ti|=o,t.lanes=o,t.memoizedState=h}}function ov(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var FI=new M0.Component().refs;function kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bc={isMounted:function(t){return(t=t._reactInternals)?Bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),i=Ir(t),s=Mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(rn(e,t,i,r),yl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),i=Ir(t),s=Mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(rn(e,t,i,r),yl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=Ir(t),i=Mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=vr(t,i,r),e!==null&&(rn(e,t,r,n),yl(e,t,r))}};function av(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ia(n,r)||!Ia(i,s):!0}function UI(t,e,n){var r=!1,i=kr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=Dt(e)?_i:lt.current,r=e.contextTypes,s=(r=r!=null)?Rs(t,i):kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function uv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bc.enqueueReplaceState(e,e.state,null)}function Cf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=FI,um(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=Dt(e)?_i:lt.current,i.context=Rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Bc.enqueueReplaceState(i,i.state,null),Xl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===FI&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Qu(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lv(t){var e=t._init;return e(t._payload)}function VI(t){function e(g,f){if(t){var p=g.deletions;p===null?(g.deletions=[f],g.flags|=16):p.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=_r(g,f),g.index=0,g.sibling=null,g}function s(g,f,p){return g.index=p,t?(p=g.alternate,p!==null?(p=p.index,p<f?(g.flags|=2,f):p):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,p,_){return f===null||f.tag!==6?(f=wd(p,g.mode,_),f.return=g,f):(f=i(f,p),f.return=g,f)}function u(g,f,p,_){var E=p.type;return E===os?c(g,f,p.props.children,_,p.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ir&&lv(E)===f.type)?(_=i(f,p.props),_.ref=So(g,f,p),_.return=g,_):(_=Sl(p.type,p.key,p.props,null,g.mode,_),_.ref=So(g,f,p),_.return=g,_)}function l(g,f,p,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=Id(p,g.mode,_),f.return=g,f):(f=i(f,p.children||[]),f.return=g,f)}function c(g,f,p,_,E){return f===null||f.tag!==7?(f=mi(p,g.mode,_,E),f.return=g,f):(f=i(f,p),f.return=g,f)}function h(g,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=wd(""+f,g.mode,p),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Fu:return p=Sl(f.type,f.key,f.props,null,g.mode,p),p.ref=So(g,null,f),p.return=g,p;case ss:return f=Id(f,g.mode,p),f.return=g,f;case ir:var _=f._init;return h(g,_(f._payload),p)}if($o(f)||vo(f))return f=mi(f,g.mode,p,null),f.return=g,f;Qu(g,f)}return null}function d(g,f,p,_){var E=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(g,f,""+p,_);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fu:return p.key===E?u(g,f,p,_):null;case ss:return p.key===E?l(g,f,p,_):null;case ir:return E=p._init,d(g,f,E(p._payload),_)}if($o(p)||vo(p))return E!==null?null:c(g,f,p,_,null);Qu(g,p)}return null}function m(g,f,p,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(p)||null,a(f,g,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Fu:return g=g.get(_.key===null?p:_.key)||null,u(f,g,_,E);case ss:return g=g.get(_.key===null?p:_.key)||null,l(f,g,_,E);case ir:var k=_._init;return m(g,f,p,k(_._payload),E)}if($o(_)||vo(_))return g=g.get(p)||null,c(f,g,_,E,null);Qu(f,_)}return null}function y(g,f,p,_){for(var E=null,k=null,A=f,b=f=0,te=null;A!==null&&b<p.length;b++){A.index>b?(te=A,A=null):te=A.sibling;var j=d(g,A,p[b],_);if(j===null){A===null&&(A=te);break}t&&A&&j.alternate===null&&e(g,A),f=s(j,f,b),k===null?E=j:k.sibling=j,k=j,A=te}if(b===p.length)return n(g,A),ce&&Xr(g,b),E;if(A===null){for(;b<p.length;b++)A=h(g,p[b],_),A!==null&&(f=s(A,f,b),k===null?E=A:k.sibling=A,k=A);return ce&&Xr(g,b),E}for(A=r(g,A);b<p.length;b++)te=m(A,g,b,p[b],_),te!==null&&(t&&te.alternate!==null&&A.delete(te.key===null?b:te.key),f=s(te,f,b),k===null?E=te:k.sibling=te,k=te);return t&&A.forEach(function(ct){return e(g,ct)}),ce&&Xr(g,b),E}function v(g,f,p,_){var E=vo(p);if(typeof E!="function")throw Error(C(150));if(p=E.call(p),p==null)throw Error(C(151));for(var k=E=null,A=f,b=f=0,te=null,j=p.next();A!==null&&!j.done;b++,j=p.next()){A.index>b?(te=A,A=null):te=A.sibling;var ct=d(g,A,j.value,_);if(ct===null){A===null&&(A=te);break}t&&A&&ct.alternate===null&&e(g,A),f=s(ct,f,b),k===null?E=ct:k.sibling=ct,k=ct,A=te}if(j.done)return n(g,A),ce&&Xr(g,b),E;if(A===null){for(;!j.done;b++,j=p.next())j=h(g,j.value,_),j!==null&&(f=s(j,f,b),k===null?E=j:k.sibling=j,k=j);return ce&&Xr(g,b),E}for(A=r(g,A);!j.done;b++,j=p.next())j=m(A,g,b,j.value,_),j!==null&&(t&&j.alternate!==null&&A.delete(j.key===null?b:j.key),f=s(j,f,b),k===null?E=j:k.sibling=j,k=j);return t&&A.forEach(function(an){return e(g,an)}),ce&&Xr(g,b),E}function D(g,f,p,_){if(typeof p=="object"&&p!==null&&p.type===os&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Fu:e:{for(var E=p.key,k=f;k!==null;){if(k.key===E){if(E=p.type,E===os){if(k.tag===7){n(g,k.sibling),f=i(k,p.props.children),f.return=g,g=f;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ir&&lv(E)===k.type){n(g,k.sibling),f=i(k,p.props),f.ref=So(g,k,p),f.return=g,g=f;break e}n(g,k);break}else e(g,k);k=k.sibling}p.type===os?(f=mi(p.props.children,g.mode,_,p.key),f.return=g,g=f):(_=Sl(p.type,p.key,p.props,null,g.mode,_),_.ref=So(g,f,p),_.return=g,g=_)}return o(g);case ss:e:{for(k=p.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(g,f.sibling),f=i(f,p.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=Id(p,g.mode,_),f.return=g,g=f}return o(g);case ir:return k=p._init,D(g,f,k(p._payload),_)}if($o(p))return y(g,f,p,_);if(vo(p))return v(g,f,p,_);Qu(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,p),f.return=g,g=f):(n(g,f),f=wd(p,g.mode,_),f.return=g,g=f),o(g)):n(g,f)}return D}var Ps=VI(!0),BI=VI(!1),ou={},In=Ur(ou),Ta=Ur(ou),ka=Ur(ou);function ui(t){if(t===ou)throw Error(C(174));return t}function lm(t,e){switch(se(ka,e),se(Ta,t),se(In,ou),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rf(e,t)}ue(In),se(In,e)}function Os(){ue(In),ue(Ta),ue(ka)}function zI(t){ui(ka.current);var e=ui(In.current),n=rf(e,t.type);e!==n&&(se(Ta,t),se(In,n))}function cm(t){Ta.current===t&&(ue(In),ue(Ta))}var pe=Ur(0);function Jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fd=[];function hm(){for(var t=0;t<fd.length;t++)fd[t]._workInProgressVersionPrimary=null;fd.length=0}var vl=Kn.ReactCurrentDispatcher,pd=Kn.ReactCurrentBatchConfig,Si=0,me=null,xe=null,Fe=null,Zl=!1,Zo=!1,Ca=0,hN=0;function rt(){throw Error(C(321))}function dm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function fm(t,e,n,r,i,s){if(Si=s,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?mN:gN,t=n(r,i),Zo){s=0;do{if(Zo=!1,Ca=0,25<=s)throw Error(C(301));s+=1,Fe=xe=null,e.updateQueue=null,vl.current=yN,t=n(r,i)}while(Zo)}if(vl.current=ec,e=xe!==null&&xe.next!==null,Si=0,Fe=xe=me=null,Zl=!1,e)throw Error(C(300));return t}function pm(){var t=Ca!==0;return Ca=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?me.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Qt(){if(xe===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Fe===null?me.memoizedState:Fe.next;if(e!==null)Fe=e,xe=t;else{if(t===null)throw Error(C(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Fe===null?me.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Na(t,e){return typeof e=="function"?e(t):e}function md(t){var e=Qt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((Si&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,me.lanes|=c,Ti|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,sn(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,me.lanes|=s,Ti|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gd(t){var e=Qt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);sn(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function jI(){}function qI(t,e){var n=me,r=Qt(),i=e(),s=!sn(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,mm(KI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Aa(9,GI.bind(null,n,r,i,e),void 0,null),Ve===null)throw Error(C(349));Si&30||WI(n,e,i)}return i}function WI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function GI(t,e,n,r){e.value=n,e.getSnapshot=r,HI(e)&&QI(t)}function KI(t,e,n){return n(function(){HI(e)&&QI(t)})}function HI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function QI(t){var e=Bn(t,1);e!==null&&rn(e,t,1,-1)}function cv(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},e.queue=t,t=t.dispatch=pN.bind(null,me,t),[e.memoizedState,t]}function Aa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function YI(){return Qt().memoizedState}function wl(t,e,n,r){var i=ln();me.flags|=t,i.memoizedState=Aa(1|e,n,void 0,r===void 0?null:r)}function zc(t,e,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&dm(r,o.deps)){i.memoizedState=Aa(e,n,s,r);return}}me.flags|=t,i.memoizedState=Aa(1|e,n,s,r)}function hv(t,e){return wl(8390656,8,t,e)}function mm(t,e){return zc(2048,8,t,e)}function XI(t,e){return zc(4,2,t,e)}function JI(t,e){return zc(4,4,t,e)}function ZI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function e_(t,e,n){return n=n!=null?n.concat([t]):null,zc(4,4,ZI.bind(null,e,t),n)}function gm(){}function t_(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function n_(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function r_(t,e,n){return Si&21?(sn(n,e)||(n=oI(),me.lanes|=n,Ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function dN(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=pd.transition;pd.transition={};try{t(!1),e()}finally{re=n,pd.transition=r}}function i_(){return Qt().memoizedState}function fN(t,e,n){var r=Ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},s_(t))o_(e,n);else if(n=MI(t,e,n,r),n!==null){var i=gt();rn(n,t,r,i),a_(n,e,r)}}function pN(t,e,n){var r=Ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(s_(t))o_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,sn(a,o)){var u=e.interleaved;u===null?(i.next=i,am(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=MI(t,e,i,r),n!==null&&(i=gt(),rn(n,t,r,i),a_(n,e,r))}}function s_(t){var e=t.alternate;return t===me||e!==null&&e===me}function o_(t,e){Zo=Zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function a_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}var ec={readContext:Ht,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},mN={readContext:Ht,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:hv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,ZI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fN.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:cv,useDebugValue:gm,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=cv(!1),e=t[0];return t=dN.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=me,i=ln();if(ce){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Ve===null)throw Error(C(349));Si&30||WI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hv(KI.bind(null,r,s,t),[t]),r.flags|=2048,Aa(9,GI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=Ve.identifierPrefix;if(ce){var n=bn,r=Rn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gN={readContext:Ht,useCallback:t_,useContext:Ht,useEffect:mm,useImperativeHandle:e_,useInsertionEffect:XI,useLayoutEffect:JI,useMemo:n_,useReducer:md,useRef:YI,useState:function(){return md(Na)},useDebugValue:gm,useDeferredValue:function(t){var e=Qt();return r_(e,xe.memoizedState,t)},useTransition:function(){var t=md(Na)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:jI,useSyncExternalStore:qI,useId:i_,unstable_isNewReconciler:!1},yN={readContext:Ht,useCallback:t_,useContext:Ht,useEffect:mm,useImperativeHandle:e_,useInsertionEffect:XI,useLayoutEffect:JI,useMemo:n_,useReducer:gd,useRef:YI,useState:function(){return gd(Na)},useDebugValue:gm,useDeferredValue:function(t){var e=Qt();return xe===null?e.memoizedState=t:r_(e,xe.memoizedState,t)},useTransition:function(){var t=gd(Na)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:jI,useSyncExternalStore:qI,useId:i_,unstable_isNewReconciler:!1};function Ls(t,e){try{var n="",r=e;do n+=Wk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function yd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vN=typeof WeakMap=="function"?WeakMap:Map;function u_(t,e,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nc||(nc=!0,$f=r),Nf(t,e)},n}function l_(t,e,n){n=Mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Nf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nf(t,e),typeof r!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bN.bind(null,t,e,n),e.then(t,t))}function fv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mn(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var wN=Kn.ReactCurrentOwner,Tt=!1;function dt(t,e,n,r){e.child=t===null?BI(e,null,n,r):Ps(e,t.child,n,r)}function mv(t,e,n,r,i){n=n.render;var s=e.ref;return Ss(e,i),r=fm(t,e,n,r,s,i),n=pm(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(ce&&n&&tm(e),e.flags|=1,dt(t,e,r,i),e.child)}function gv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Tm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,c_(t,e,s,r,i)):(t=Sl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ia,n(o,r)&&t.ref===e.ref)return zn(t,e,i)}return e.flags|=1,t=_r(s,r),t.ref=e.ref,t.return=e,e.child=t}function c_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ia(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,zn(t,e,i)}return Af(t,e,n,r,i)}function h_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(gs,bt),bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(gs,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(gs,bt),bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(gs,bt),bt|=r;return dt(t,e,i,n),e.child}function d_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Af(t,e,n,r,i){var s=Dt(n)?_i:lt.current;return s=Rs(e,s),Ss(e,i),n=fm(t,e,n,r,s,i),r=pm(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(ce&&r&&tm(e),e.flags|=1,dt(t,e,n,i),e.child)}function yv(t,e,n,r,i){if(Dt(n)){var s=!0;Gl(e)}else s=!1;if(Ss(e,i),e.stateNode===null)Il(t,e),UI(e,n,r),Cf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Ht(l):(l=Dt(n)?_i:lt.current,l=Rs(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&uv(e,o,r,l),sr=!1;var d=e.memoizedState;o.state=d,Xl(e,r,o,i),u=e.memoizedState,a!==r||d!==u||At.current||sr?(typeof c=="function"&&(kf(e,n,c,r),u=e.memoizedState),(a=sr||av(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$I(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Jt(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ht(u):(u=Dt(n)?_i:lt.current,u=Rs(e,u));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&uv(e,o,r,u),sr=!1,d=e.memoizedState,o.state=d,Xl(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||At.current||sr?(typeof m=="function"&&(kf(e,n,m,r),y=e.memoizedState),(l=sr||av(e,n,l,r,d,y,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Df(t,e,n,r,s,i)}function Df(t,e,n,r,i,s){d_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&nv(e,n,!1),zn(t,e,s);r=e.stateNode,wN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,a,s)):dt(t,e,a,s),e.memoizedState=r.state,i&&nv(e,n,!0),e.child}function f_(t){var e=t.stateNode;e.pendingContext?tv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tv(t,e.context,!1),lm(t,e.containerInfo)}function vv(t,e,n,r,i){return bs(),rm(i),e.flags|=256,dt(t,e,n,r),e.child}var xf={dehydrated:null,treeContext:null,retryLane:0};function Rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function p_(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(pe,i&1),t===null)return Sf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wc(o,r,0,null),t=mi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Rf(n),e.memoizedState=xf,t):ym(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return IN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=_r(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=_r(a,s):(s=mi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Rf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xf,r}return s=t.child,t=s.sibling,r=_r(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ym(t,e){return e=Wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Yu(t,e,n,r){return r!==null&&rm(r),Ps(e,t.child,null,n),t=ym(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=yd(Error(C(422))),Yu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Wc({mode:"visible",children:r.children},i,0,null),s=mi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ps(e,t.child,null,o),e.child.memoizedState=Rf(o),e.memoizedState=xf,s);if(!(e.mode&1))return Yu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=yd(s,r,void 0),Yu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Tt||a){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bn(t,i),rn(r,t,i,-1))}return Sm(),r=yd(Error(C(421))),Yu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=PN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ot=yr(i.nextSibling),Mt=e,ce=!0,en=null,t!==null&&(jt[qt++]=Rn,jt[qt++]=bn,jt[qt++]=Ei,Rn=t.id,bn=t.overflow,Ei=e),e=ym(e,r.children),e.flags|=4096,e)}function wv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Tf(t.return,e,n)}function vd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function m_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wv(t,n,e);else if(t.tag===19)wv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Jl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),vd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Jl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}vd(e,!0,n,null,s);break;case"together":vd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _N(t,e,n){switch(e.tag){case 3:f_(e),bs();break;case 5:zI(e);break;case 1:Dt(e.type)&&Gl(e);break;case 4:lm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(Ql,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?p_(t,e,n):(se(pe,pe.current&1),t=zn(t,e,n),t!==null?t.sibling:null);se(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return m_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,h_(t,e,n)}return zn(t,e,n)}var g_,bf,y_,v_;g_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bf=function(){};y_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ui(In.current);var s=null;switch(n){case"input":i=Zd(t,i),r=Zd(t,r),s=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),s=[];break;case"textarea":i=nf(t,i),r=nf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ql)}sf(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(fa.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(fa.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&oe("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};v_=function(t,e,n,r){n!==r&&(e.flags|=4)};function To(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function EN(t,e,n){var r=e.pendingProps;switch(nm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return Dt(e.type)&&Wl(),it(e),null;case 3:return r=e.stateNode,Os(),ue(At),ue(lt),hm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(Vf(en),en=null))),bf(t,e),it(e),null;case 5:cm(e);var i=ui(ka.current);if(n=e.type,t!==null&&e.stateNode!=null)y_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return it(e),null}if(t=ui(In.current),Hu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<Uo.length;i++)oe(Uo[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Ay(r,s),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},oe("invalid",r);break;case"textarea":xy(r,s),oe("invalid",r)}sf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ku(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ku(r.textContent,a,t),i=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":Uu(r),Dy(r,s,!0);break;case"textarea":Uu(r),Ry(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ql)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=W0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[Sa]=r,g_(t,e,!1,!1),e.stateNode=t;e:{switch(o=of(n,r),n){case"dialog":oe("cancel",t),oe("close",t),i=r;break;case"iframe":case"object":case"embed":oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Uo.length;i++)oe(Uo[i],t);i=r;break;case"source":oe("error",t),i=r;break;case"img":case"image":case"link":oe("error",t),oe("load",t),i=r;break;case"details":oe("toggle",t),i=r;break;case"input":Ay(t,r),i=Zd(t,r),oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),oe("invalid",t);break;case"textarea":xy(t,r),i=nf(t,r),oe("invalid",t);break;default:i=r}sf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?H0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&G0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&pa(t,u):typeof u=="number"&&pa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&oe("scroll",t):u!=null&&Bp(t,s,u,o))}switch(n){case"input":Uu(t),Dy(t,r,!1);break;case"textarea":Uu(t),Ry(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ws(t,!!r.multiple,s,!1):r.defaultValue!=null&&ws(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)v_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=ui(ka.current),ui(In.current),Hu(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:Ku(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ku(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return it(e),null;case 13:if(ue(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&Ot!==null&&e.mode&1&&!(e.flags&128))LI(),bs(),e.flags|=98560,s=!1;else if(s=Hu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[cn]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),s=!1}else en!==null&&(Vf(en),en=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?be===0&&(be=3):Sm())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return Os(),bf(t,e),t===null&&_a(e.stateNode.containerInfo),it(e),null;case 10:return om(e.type._context),it(e),null;case 17:return Dt(e.type)&&Wl(),it(e),null;case 19:if(ue(pe),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)To(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Jl(t),o!==null){for(e.flags|=128,To(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Ms&&(e.flags|=128,r=!0,To(s,!1),e.lanes=4194304)}else{if(!r)if(t=Jl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),To(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return it(e),null}else 2*Te()-s.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,r=!0,To(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=pe.current,se(pe,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return Em(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?bt&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function SN(t,e){switch(nm(e),e.tag){case 1:return Dt(e.type)&&Wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Os(),ue(At),ue(lt),hm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cm(e),null;case 13:if(ue(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(pe),null;case 4:return Os(),null;case 10:return om(e.type._context),null;case 22:case 23:return Em(),null;case 24:return null;default:return null}}var Xu=!1,ot=!1,TN=typeof WeakSet=="function"?WeakSet:Set,O=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function Pf(t,e,n){try{n()}catch(r){ve(t,e,r)}}var Iv=!1;function kN(t,e){if(gf=Bl,t=EI(),em(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yf={focusedElem:t,selectionRange:n},Bl=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,D=y.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:Jt(e.type,v),D);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(_){ve(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return y=Iv,Iv=!1,y}function ea(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pf(e,n,s)}i=i.next}while(i!==r)}}function jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w_(t){var e=t.alternate;e!==null&&(t.alternate=null,w_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[Sa],delete e[If],delete e[aN],delete e[uN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I_(t){return t.tag===5||t.tag===3||t.tag===4}function _v(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ql));else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}function Mf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}var Ke=null,Zt=!1;function Zn(t,e,n){for(n=n.child;n!==null;)__(t,e,n),n=n.sibling}function __(t,e,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Lc,n)}catch{}switch(n.tag){case 5:ot||ms(n,e);case 6:var r=Ke,i=Zt;Ke=null,Zn(t,e,n),Ke=r,Zt=i,Ke!==null&&(Zt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Zt?(t=Ke,n=n.stateNode,t.nodeType===8?hd(t.parentNode,n):t.nodeType===1&&hd(t,n),va(t)):hd(Ke,n.stateNode));break;case 4:r=Ke,i=Zt,Ke=n.stateNode.containerInfo,Zt=!0,Zn(t,e,n),Ke=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pf(n,e,o),i=i.next}while(i!==r)}Zn(t,e,n);break;case 1:if(!ot&&(ms(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,e,a)}Zn(t,e,n);break;case 21:Zn(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Zn(t,e,n),ot=r):Zn(t,e,n);break;default:Zn(t,e,n)}}function Ev(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TN),e.forEach(function(r){var i=ON.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ke=a.stateNode,Zt=!1;break e;case 3:Ke=a.stateNode.containerInfo,Zt=!0;break e;case 4:Ke=a.stateNode.containerInfo,Zt=!0;break e}a=a.return}if(Ke===null)throw Error(C(160));__(s,o,i),Ke=null,Zt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){ve(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)E_(e,t),e=e.sibling}function E_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),un(t),r&4){try{ea(3,t,t.return),jc(3,t)}catch(v){ve(t,t.return,v)}try{ea(5,t,t.return)}catch(v){ve(t,t.return,v)}}break;case 1:Xt(e,t),un(t),r&512&&n!==null&&ms(n,n.return);break;case 5:if(Xt(e,t),un(t),r&512&&n!==null&&ms(n,n.return),t.flags&32){var i=t.stateNode;try{pa(i,"")}catch(v){ve(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&j0(i,s),of(a,o);var l=of(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?H0(i,h):c==="dangerouslySetInnerHTML"?G0(i,h):c==="children"?pa(i,h):Bp(i,c,h,l)}switch(a){case"input":ef(i,s);break;case"textarea":q0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ws(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?ws(i,!!s.multiple,s.defaultValue,!0):ws(i,!!s.multiple,s.multiple?[]:"",!1))}i[Sa]=s}catch(v){ve(t,t.return,v)}}break;case 6:if(Xt(e,t),un(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ve(t,t.return,v)}}break;case 3:if(Xt(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(v){ve(t,t.return,v)}break;case 4:Xt(e,t),un(t);break;case 13:Xt(e,t),un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Im=Te())),r&4&&Ev(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(l=ot)||c,Xt(e,t),ot=l):Xt(e,t),un(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(h=O=c;O!==null;){switch(d=O,m=d.child,d.tag){case 0:case 11:case 14:case 15:ea(4,d,d.return);break;case 1:ms(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ve(r,n,v)}}break;case 5:ms(d,d.return);break;case 22:if(d.memoizedState!==null){Tv(h);continue}}m!==null?(m.return=d,O=m):Tv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=K0("display",o))}catch(v){ve(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(v){ve(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Xt(e,t),un(t),r&4&&Ev(t);break;case 21:break;default:Xt(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I_(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pa(i,""),r.flags&=-33);var s=_v(t);Mf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=_v(t);Lf(t,a,o);break;default:throw Error(C(161))}}catch(u){ve(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function CN(t,e,n){O=t,S_(t)}function S_(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ot;a=Xu;var l=ot;if(Xu=o,(ot=u)&&!l)for(O=i;O!==null;)o=O,u=o.child,o.tag===22&&o.memoizedState!==null?kv(i):u!==null?(u.return=o,O=u):kv(i);for(;s!==null;)O=s,S_(s),s=s.sibling;O=i,Xu=a,ot=l}Sv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Sv(t)}}function Sv(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||jc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ov(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ov(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&va(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ot||e.flags&512&&Of(e)}catch(d){ve(e,e.return,d)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Tv(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function kv(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jc(4,e)}catch(u){ve(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ve(e,i,u)}}var s=e.return;try{Of(e)}catch(u){ve(e,s,u)}break;case 5:var o=e.return;try{Of(e)}catch(u){ve(e,o,u)}}}catch(u){ve(e,e.return,u)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var NN=Math.ceil,tc=Kn.ReactCurrentDispatcher,vm=Kn.ReactCurrentOwner,Kt=Kn.ReactCurrentBatchConfig,Z=0,Ve=null,De=null,Ye=0,bt=0,gs=Ur(0),be=0,Da=null,Ti=0,qc=0,wm=0,ta=null,St=null,Im=0,Ms=1/0,Dn=null,nc=!1,$f=null,wr=null,Ju=!1,hr=null,rc=0,na=0,Ff=null,_l=-1,El=0;function gt(){return Z&6?Te():_l!==-1?_l:_l=Te()}function Ir(t){return t.mode&1?Z&2&&Ye!==0?Ye&-Ye:cN.transition!==null?(El===0&&(El=oI()),El):(t=re,t!==0||(t=window.event,t=t===void 0?16:fI(t.type)),t):1}function rn(t,e,n,r){if(50<na)throw na=0,Ff=null,Error(C(185));ru(t,n,r),(!(Z&2)||t!==Ve)&&(t===Ve&&(!(Z&2)&&(qc|=n),be===4&&ar(t,Ye)),xt(t,r),n===1&&Z===0&&!(e.mode&1)&&(Ms=Te()+500,Vc&&Vr()))}function xt(t,e){var n=t.callbackNode;cC(t,e);var r=Vl(t,t===Ve?Ye:0);if(r===0)n!==null&&Oy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Oy(n),e===1)t.tag===0?lN(Cv.bind(null,t)):bI(Cv.bind(null,t)),sN(function(){!(Z&6)&&Vr()}),n=null;else{switch(aI(r)){case 1:n=Gp;break;case 4:n=iI;break;case 16:n=Ul;break;case 536870912:n=sI;break;default:n=Ul}n=R_(n,T_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function T_(t,e){if(_l=-1,El=0,Z&6)throw Error(C(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var r=Vl(t,t===Ve?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ic(t,r);else{e=r;var i=Z;Z|=2;var s=C_();(Ve!==t||Ye!==e)&&(Dn=null,Ms=Te()+500,pi(t,e));do try{xN();break}catch(a){k_(t,a)}while(1);sm(),tc.current=s,Z=i,De!==null?e=0:(Ve=null,Ye=0,e=be)}if(e!==0){if(e===2&&(i=hf(t),i!==0&&(r=i,e=Uf(t,i))),e===1)throw n=Da,pi(t,0),ar(t,r),xt(t,Te()),n;if(e===6)ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!AN(i)&&(e=ic(t,r),e===2&&(s=hf(t),s!==0&&(r=s,e=Uf(t,s))),e===1))throw n=Da,pi(t,0),ar(t,r),xt(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Jr(t,St,Dn);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=Im+500-Te(),10<e)){if(Vl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wf(Jr.bind(null,t,St,Dn),e);break}Jr(t,St,Dn);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NN(r/1960))-r,10<r){t.timeoutHandle=wf(Jr.bind(null,t,St,Dn),r);break}Jr(t,St,Dn);break;case 5:Jr(t,St,Dn);break;default:throw Error(C(329))}}}return xt(t,Te()),t.callbackNode===n?T_.bind(null,t):null}function Uf(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(pi(t,e).flags|=256),t=ic(t,e),t!==2&&(e=St,St=n,e!==null&&Vf(e)),t}function Vf(t){St===null?St=t:St.push.apply(St,t)}function AN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~wm,e&=~qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function Cv(t){if(Z&6)throw Error(C(327));Ts();var e=Vl(t,0);if(!(e&1))return xt(t,Te()),null;var n=ic(t,e);if(t.tag!==0&&n===2){var r=hf(t);r!==0&&(e=r,n=Uf(t,r))}if(n===1)throw n=Da,pi(t,0),ar(t,e),xt(t,Te()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,St,Dn),xt(t,Te()),null}function _m(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(Ms=Te()+500,Vc&&Vr())}}function ki(t){hr!==null&&hr.tag===0&&!(Z&6)&&Ts();var e=Z;Z|=1;var n=Kt.transition,r=re;try{if(Kt.transition=null,re=1,t)return t()}finally{re=r,Kt.transition=n,Z=e,!(Z&6)&&Vr()}}function Em(){bt=gs.current,ue(gs)}function pi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,iN(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(nm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wl();break;case 3:Os(),ue(At),ue(lt),hm();break;case 5:cm(r);break;case 4:Os();break;case 13:ue(pe);break;case 19:ue(pe);break;case 10:om(r.type._context);break;case 22:case 23:Em()}n=n.return}if(Ve=t,De=t=_r(t.current,null),Ye=bt=e,be=0,Da=null,wm=qc=Ti=0,St=ta=null,ai!==null){for(e=0;e<ai.length;e++)if(n=ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ai=null}return t}function k_(t,e){do{var n=De;try{if(sm(),vl.current=ec,Zl){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zl=!1}if(Si=0,Fe=xe=me=null,Zo=!1,Ca=0,vm.current=null,n===null||n.return===null){be=1,Da=e,De=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ye,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=fv(o);if(m!==null){m.flags&=-257,pv(m,o,a,s,e),m.mode&1&&dv(s,l,e),e=m,u=l;var y=e.updateQueue;if(y===null){var v=new Set;v.add(u),e.updateQueue=v}else y.add(u);break e}else{if(!(e&1)){dv(s,l,e),Sm();break e}u=Error(C(426))}}else if(ce&&a.mode&1){var D=fv(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),pv(D,o,a,s,e),rm(Ls(u,a));break e}}s=u=Ls(u,a),be!==4&&(be=2),ta===null?ta=[s]:ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=u_(s,u,e);sv(s,g);break e;case 1:a=u;var f=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(wr===null||!wr.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=l_(s,a,e);sv(s,_);break e}}s=s.return}while(s!==null)}A_(n)}catch(E){e=E,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function C_(){var t=tc.current;return tc.current=ec,t===null?ec:t}function Sm(){(be===0||be===3||be===2)&&(be=4),Ve===null||!(Ti&268435455)&&!(qc&268435455)||ar(Ve,Ye)}function ic(t,e){var n=Z;Z|=2;var r=C_();(Ve!==t||Ye!==e)&&(Dn=null,pi(t,e));do try{DN();break}catch(i){k_(t,i)}while(1);if(sm(),Z=n,tc.current=r,De!==null)throw Error(C(261));return Ve=null,Ye=0,be}function DN(){for(;De!==null;)N_(De)}function xN(){for(;De!==null&&!tC();)N_(De)}function N_(t){var e=x_(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?A_(t):De=e,vm.current=null}function A_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=SN(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,De=null;return}}else if(n=EN(n,e,bt),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);be===0&&(be=5)}function Jr(t,e,n){var r=re,i=Kt.transition;try{Kt.transition=null,re=1,RN(t,e,n,r)}finally{Kt.transition=i,re=r}return null}function RN(t,e,n,r){do Ts();while(hr!==null);if(Z&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hC(t,s),t===Ve&&(De=Ve=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ju||(Ju=!0,R_(Ul,function(){return Ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kt.transition,Kt.transition=null;var o=re;re=1;var a=Z;Z|=4,vm.current=null,kN(t,n),E_(n,t),XC(yf),Bl=!!gf,yf=gf=null,t.current=n,CN(n),nC(),Z=a,re=o,Kt.transition=s}else t.current=n;if(Ju&&(Ju=!1,hr=t,rc=i),s=t.pendingLanes,s===0&&(wr=null),sC(n.stateNode),xt(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nc)throw nc=!1,t=$f,$f=null,t;return rc&1&&t.tag!==0&&Ts(),s=t.pendingLanes,s&1?t===Ff?na++:(na=0,Ff=t):na=0,Vr(),null}function Ts(){if(hr!==null){var t=aI(rc),e=Kt.transition,n=re;try{if(Kt.transition=null,re=16>t?16:t,hr===null)var r=!1;else{if(t=hr,hr=null,rc=0,Z&6)throw Error(C(331));var i=Z;for(Z|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(O=l;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:ea(8,c,s)}var h=c.child;if(h!==null)h.return=c,O=h;else for(;O!==null;){c=O;var d=c.sibling,m=c.return;if(w_(c),c===l){O=null;break}if(d!==null){d.return=m,O=d;break}O=m}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var D=v.sibling;v.sibling=null,v=D}while(v!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,O=g;break e}O=s.return}}var f=t.current;for(O=f;O!==null;){o=O;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,O=p;else e:for(o=f;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jc(9,a)}}catch(E){ve(a,a.return,E)}if(a===o){O=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,O=_;break e}O=a.return}}if(Z=i,Vr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Lc,t)}catch{}r=!0}return r}finally{re=n,Kt.transition=e}}return!1}function Nv(t,e,n){e=Ls(n,e),e=u_(t,e,1),t=vr(t,e,1),e=gt(),t!==null&&(ru(t,1,e),xt(t,e))}function ve(t,e,n){if(t.tag===3)Nv(t,t,n);else for(;e!==null;){if(e.tag===3){Nv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wr===null||!wr.has(r))){t=Ls(n,t),t=l_(e,t,1),e=vr(e,t,1),t=gt(),e!==null&&(ru(e,1,t),xt(e,t));break}}e=e.return}}function bN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(Ye&n)===n&&(be===4||be===3&&(Ye&130023424)===Ye&&500>Te()-Im?pi(t,0):wm|=n),xt(t,e)}function D_(t,e){e===0&&(t.mode&1?(e=zu,zu<<=1,!(zu&130023424)&&(zu=4194304)):e=1);var n=gt();t=Bn(t,e),t!==null&&(ru(t,e,n),xt(t,n))}function PN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D_(t,n)}function ON(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),D_(t,n)}var x_;x_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||At.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,_N(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,ce&&e.flags&1048576&&PI(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Il(t,e),t=e.pendingProps;var i=Rs(e,lt.current);Ss(e,n),i=fm(null,e,r,t,i,n);var s=pm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)?(s=!0,Gl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,um(e),i.updater=Bc,e.stateNode=i,i._reactInternals=e,Cf(e,r,t,n),e=Df(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&tm(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Il(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=MN(r),t=Jt(r,t),i){case 0:e=Af(null,e,r,t,n);break e;case 1:e=yv(null,e,r,t,n);break e;case 11:e=mv(null,e,r,t,n);break e;case 14:e=gv(null,e,r,Jt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Af(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),yv(t,e,r,i,n);case 3:e:{if(f_(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$I(t,e),Xl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ls(Error(C(423)),e),e=vv(t,e,r,n,i);break e}else if(r!==i){i=Ls(Error(C(424)),e),e=vv(t,e,r,n,i);break e}else for(Ot=yr(e.stateNode.containerInfo.firstChild),Mt=e,ce=!0,en=null,n=BI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),r===i){e=zn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return zI(e),t===null&&Sf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,vf(r,i)?o=null:s!==null&&vf(r,s)&&(e.flags|=32),d_(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&Sf(e),null;case 13:return p_(t,e,n);case 4:return lm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ps(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),mv(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(Ql,r._currentValue),r._currentValue=o,s!==null)if(sn(s.value,o)){if(s.children===i.children&&!At.current){e=zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Mn(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Tf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Tf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ss(e,n),i=Ht(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=Jt(r,e.pendingProps),i=Jt(r.type,i),gv(t,e,r,i,n);case 15:return c_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Il(t,e),e.tag=1,Dt(r)?(t=!0,Gl(e)):t=!1,Ss(e,n),UI(e,r,i),Cf(e,r,i,n),Df(null,e,r,!0,t,n);case 19:return m_(t,e,n);case 22:return h_(t,e,n)}throw Error(C(156,e.tag))};function R_(t,e){return rI(t,e)}function LN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new LN(t,e,n,r)}function Tm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function MN(t){if(typeof t=="function")return Tm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jp)return 11;if(t===qp)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Tm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case os:return mi(n.children,i,s,e);case zp:o=8,i|=8;break;case Qd:return t=Wt(12,n,e,i|2),t.elementType=Qd,t.lanes=s,t;case Yd:return t=Wt(13,n,e,i),t.elementType=Yd,t.lanes=s,t;case Xd:return t=Wt(19,n,e,i),t.elementType=Xd,t.lanes=s,t;case V0:return Wc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F0:o=10;break e;case U0:o=9;break e;case jp:o=11;break e;case qp:o=14;break e;case ir:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Wt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function mi(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function Wc(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=V0,t.lanes=n,t.stateNode={isHidden:!1},t}function wd(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function Id(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $N(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ed(0),this.expirationTimes=ed(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ed(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function km(t,e,n,r,i,s,o,a,u){return t=new $N(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},um(s),t}function FN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function b_(t){if(!t)return kr;t=t._reactInternals;e:{if(Bi(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Dt(n))return RI(t,n,e)}return e}function P_(t,e,n,r,i,s,o,a,u){return t=km(n,r,!0,t,i,s,o,a,u),t.context=b_(null),n=t.current,r=gt(),i=Ir(n),s=Mn(r,i),s.callback=e??null,vr(n,s,i),t.current.lanes=i,ru(t,i,r),xt(t,r),t}function Gc(t,e,n,r){var i=e.current,s=gt(),o=Ir(i);return n=b_(n),e.context===null?e.context=n:e.pendingContext=n,e=Mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(i,e,o),t!==null&&(rn(t,i,o,s),yl(t,i,o)),o}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Av(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cm(t,e){Av(t,e),(t=t.alternate)&&Av(t,e)}function UN(){return null}var O_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nm(t){this._internalRoot=t}Kc.prototype.render=Nm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Gc(t,e,null,null)};Kc.prototype.unmount=Nm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ki(function(){Gc(null,t,null,null)}),e[Vn]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=cI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&dI(t)}};function Am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dv(){}function VN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=sc(o);s.call(l)}}var o=P_(e,r,t,0,null,!1,!1,"",Dv);return t._reactRootContainer=o,t[Vn]=o.current,_a(t.nodeType===8?t.parentNode:t),ki(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=sc(u);a.call(l)}}var u=km(t,0,!1,null,null,!1,!1,"",Dv);return t._reactRootContainer=u,t[Vn]=u.current,_a(t.nodeType===8?t.parentNode:t),ki(function(){Gc(e,u,n,r)}),u}function Qc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=sc(o);a.call(u)}}Gc(e,o,t,i)}else o=VN(n,e,t,i,r);return sc(o)}uI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fo(e.pendingLanes);n!==0&&(Kp(e,n|1),xt(e,Te()),!(Z&6)&&(Ms=Te()+500,Vr()))}break;case 13:ki(function(){var r=Bn(t,1);if(r!==null){var i=gt();rn(r,t,1,i)}}),Cm(t,1)}};Hp=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var n=gt();rn(e,t,134217728,n)}Cm(t,134217728)}};lI=function(t){if(t.tag===13){var e=Ir(t),n=Bn(t,e);if(n!==null){var r=gt();rn(n,t,e,r)}Cm(t,e)}};cI=function(){return re};hI=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};uf=function(t,e,n){switch(e){case"input":if(ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Uc(r);if(!i)throw Error(C(90));z0(r),ef(r,i)}}}break;case"textarea":q0(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};X0=_m;J0=ki;var BN={usingClientEntryPoint:!1,Events:[su,cs,Uc,Q0,Y0,_m]},ko={findFiberByHostInstance:oi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zN={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tI(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||UN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zu.isDisabled&&Zu.supportsFiber)try{Lc=Zu.inject(zN),wn=Zu}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BN;Vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Am(e))throw Error(C(200));return FN(t,e,null,n)};Vt.createRoot=function(t,e){if(!Am(t))throw Error(C(299));var n=!1,r="",i=O_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=km(t,1,!1,null,null,n,!1,r,i),t[Vn]=e.current,_a(t.nodeType===8?t.parentNode:t),new Nm(e)};Vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=tI(e),t=t===null?null:t.stateNode,t};Vt.flushSync=function(t){return ki(t)};Vt.hydrate=function(t,e,n){if(!Hc(e))throw Error(C(200));return Qc(null,t,e,!0,n)};Vt.hydrateRoot=function(t,e,n){if(!Am(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=O_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=P_(e,null,t,1,n??null,i,!1,s,o),t[Vn]=e.current,_a(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Kc(e)};Vt.render=function(t,e,n){if(!Hc(e))throw Error(C(200));return Qc(null,t,e,!1,n)};Vt.unmountComponentAtNode=function(t){if(!Hc(t))throw Error(C(40));return t._reactRootContainer?(ki(function(){Qc(null,null,t,!1,function(){t._reactRootContainer=null,t[Vn]=null})}),!0):!1};Vt.unstable_batchedUpdates=_m;Vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hc(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Qc(t,e,n,!1,r)};Vt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Vt})(Uk);var xv=Gd;Wd.createRoot=xv.createRoot,Wd.hydrateRoot=xv.hydrateRoot;const Rv=t=>{let e;const n=new Set,r=(u,l)=>{const c=typeof u=="function"?u(e):u;if(!Object.is(c,e)){const h=e;e=l??typeof c!="object"?c:Object.assign({},e,c),n.forEach(d=>d(e,h))}},i=()=>e,a={setState:r,getState:i,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{({BASE_URL:"/where-is-the-cat/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return e=t(r,i,a),a},jN=t=>t?Rv(t):Rv;var Bf={},qN={get exports(){return Bf},set exports(t){Bf=t}},L_={},zf={},WN={get exports(){return zf},set exports(t){zf=t}},M_={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $s=B;function GN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var KN=typeof Object.is=="function"?Object.is:GN,HN=$s.useState,QN=$s.useEffect,YN=$s.useLayoutEffect,XN=$s.useDebugValue;function JN(t,e){var n=e(),r=HN({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return YN(function(){i.value=n,i.getSnapshot=e,_d(i)&&s({inst:i})},[t,n,e]),QN(function(){return _d(i)&&s({inst:i}),t(function(){_d(i)&&s({inst:i})})},[t]),XN(n),n}function _d(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!KN(t,n)}catch{return!0}}function ZN(t,e){return e()}var eA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ZN:JN;M_.useSyncExternalStore=$s.useSyncExternalStore!==void 0?$s.useSyncExternalStore:eA;(function(t){t.exports=M_})(WN);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yc=B,tA=zf;function nA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rA=typeof Object.is=="function"?Object.is:nA,iA=tA.useSyncExternalStore,sA=Yc.useRef,oA=Yc.useEffect,aA=Yc.useMemo,uA=Yc.useDebugValue;L_.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=sA(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=aA(function(){function u(m){if(!l){if(l=!0,c=m,m=r(m),i!==void 0&&o.hasValue){var y=o.value;if(i(y,m))return h=y}return h=m}if(y=h,rA(c,m))return y;var v=r(m);return i!==void 0&&i(y,v)?y:(c=m,h=v)}var l=!1,c,h,d=n===void 0?null:n;return[function(){return u(e())},d===null?void 0:function(){return u(d())}]},[e,n,r,i]);var a=iA(t,s[0],s[1]);return oA(function(){o.hasValue=!0,o.value=a},[a]),uA(a),a};(function(t){t.exports=L_})(qN);const lA=mk(Bf),{useSyncExternalStoreWithSelector:cA}=lA;function hA(t,e=t.getState,n){const r=cA(t.subscribe,t.getState,t.getServerState||t.getState,e,n);return B.useDebugValue(r),r}const bv=t=>{({BASE_URL:"/where-is-the-cat/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?jN(t):t,n=(r,i)=>hA(e,r,i);return Object.assign(n,e),n},dA=t=>t?bv(t):bv,au=dA(t=>({difficulty:"Easy",changeDifficulty:e=>t(n=>({difficulty:e}))}));/**
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
 *//**
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
 */const $_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},F_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;u||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new pA;const d=s<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mA=function(t){const e=$_(t);return F_.encodeByteArray(e,!0)},oc=function(t){return mA(t).replace(/\./g,"")},U_=function(t){try{return F_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ac(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gA(n)||(t[n]=ac(t[n],e[n]));return t}function gA(t){return t!=="__proto__"}/**
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
 */function yA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vA=()=>yA().__FIREBASE_DEFAULTS__,wA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},IA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&U_(t[1]);return e&&JSON.parse(e)},Dm=()=>{try{return vA()||wA()||IA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_A=()=>{var t;return(t=Dm())===null||t===void 0?void 0:t.config},EA=t=>{var e;return(e=Dm())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class SA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function TA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[oc(JSON.stringify(n)),oc(JSON.stringify(o)),a].join(".")}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function xm(){var t;const e=(t=Dm())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CA(){return typeof self=="object"&&self.self===self}function V_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Rm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function B_(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NA(){return!xm()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xa(){try{return typeof indexedDB=="object"}catch{return!1}}function AA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const DA="FirebaseError";class yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DA,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yt(i,a,r)}}function xA(t,e){return t.replace(RA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const RA=/\{\$([^}]+)}/g;/**
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
 */function Pv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ov(s)&&Ov(o)){if(!jf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ov(t){return t!==null&&typeof t=="object"}/**
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
 */function no(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ys(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function z_(t,e){const n=new PA(t,e);return n.subscribe.bind(n)}class PA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ed),i.error===void 0&&(i.error=Ed),i.complete===void 0&&(i.complete=Ed);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ed(){}/**
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
 */function U(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zr="[DEFAULT]";/**
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
 */class LA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new SA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($A(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:MA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MA(t){return t===Zr?void 0:t}function $A(t){return t.instantiationMode==="EAGER"}/**
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
 */class FA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new LA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const bm=[];var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const j_={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},UA=J.INFO,VA={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},BA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=VA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xc{constructor(e){this.name=e,this._logLevel=UA,this._logHandler=BA,this._userLogHandler=null,bm.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?j_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}function zA(t){bm.forEach(e=>{e.setLogLevel(t)})}function jA(t,e){for(const n of bm){let r=null;e&&e.level&&(r=j_[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:J[s].toLowerCase(),message:a,args:o,type:i.name})}}}const qA=(t,e)=>e.some(n=>t instanceof n);let Lv,Mv;function WA(){return Lv||(Lv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GA(){return Mv||(Mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q_=new WeakMap,qf=new WeakMap,W_=new WeakMap,Sd=new WeakMap,Pm=new WeakMap;function KA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&q_.set(n,t)}).catch(()=>{}),Pm.set(e,t),e}function HA(t){if(qf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qf.set(t,e)}let Wf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||W_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QA(t){Wf=t(Wf)}function YA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Td(this),e,...n);return W_.set(r,e.sort?e.sort():[e]),Er(r)}:GA().includes(t)?function(...e){return t.apply(Td(this),e),Er(q_.get(this))}:function(...e){return Er(t.apply(Td(this),e))}}function XA(t){return typeof t=="function"?YA(t):(t instanceof IDBTransaction&&HA(t),qA(t,WA())?new Proxy(t,Wf):t)}function Er(t){if(t instanceof IDBRequest)return KA(t);if(Sd.has(t))return Sd.get(t);const e=XA(t);return e!==t&&(Sd.set(t,e),Pm.set(e,t)),e}const Td=t=>Pm.get(t);function JA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Er(o.result),u.oldVersion,u.newVersion,Er(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ZA=["get","getKey","getAll","getAllKeys","count"],eD=["put","add","delete","clear"],kd=new Map;function $v(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kd.get(e))return kd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZA.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return kd.set(e,s),s}QA(t=>({...t,get:(e,n,r)=>$v(e,n)||t.get(e,n,r),has:(e,n)=>!!$v(e,n)||t.has(e,n)}));/**
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
 */class tD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gf="@firebase/app",Fv="0.9.7";/**
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
 */const Ci=new Xc("@firebase/app"),rD="@firebase/app-compat",iD="@firebase/analytics-compat",sD="@firebase/analytics",oD="@firebase/app-check-compat",aD="@firebase/app-check",uD="@firebase/auth",lD="@firebase/auth-compat",cD="@firebase/database",hD="@firebase/database-compat",dD="@firebase/functions",fD="@firebase/functions-compat",pD="@firebase/installations",mD="@firebase/installations-compat",gD="@firebase/messaging",yD="@firebase/messaging-compat",vD="@firebase/performance",wD="@firebase/performance-compat",ID="@firebase/remote-config",_D="@firebase/remote-config-compat",ED="@firebase/storage",SD="@firebase/storage-compat",TD="@firebase/firestore",kD="@firebase/firestore-compat",CD="firebase",ND="9.19.1";/**
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
 */const Cr="[DEFAULT]",AD={[Gf]:"fire-core",[rD]:"fire-core-compat",[sD]:"fire-analytics",[iD]:"fire-analytics-compat",[aD]:"fire-app-check",[oD]:"fire-app-check-compat",[uD]:"fire-auth",[lD]:"fire-auth-compat",[cD]:"fire-rtdb",[hD]:"fire-rtdb-compat",[dD]:"fire-fn",[fD]:"fire-fn-compat",[pD]:"fire-iid",[mD]:"fire-iid-compat",[gD]:"fire-fcm",[yD]:"fire-fcm-compat",[vD]:"fire-perf",[wD]:"fire-perf-compat",[ID]:"fire-rc",[_D]:"fire-rc-compat",[ED]:"fire-gcs",[SD]:"fire-gcs-compat",[TD]:"fire-fst",[kD]:"fire-fst-compat","fire-js":"fire-js",[CD]:"fire-js-all"};/**
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
 */const Nr=new Map,Ra=new Map;function uc(t,e){try{t.container.addComponent(e)}catch(n){Ci.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function G_(t,e){t.container.addOrOverwriteComponent(e)}function Ar(t){const e=t.name;if(Ra.has(e))return Ci.debug(`There were multiple attempts to register component ${e}.`),!1;Ra.set(e,t);for(const n of Nr.values())uc(n,t);return!0}function K_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function DD(t,e,n=Cr){K_(t,e).clearInstance(n)}function xD(){Ra.clear()}/**
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
 */const RD={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$n=new zi("app","Firebase",RD);/**
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
 */let bD=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}};/**
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
 */const ji=ND;function Om(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $n.create("bad-app-name",{appName:String(i)});if(n||(n=_A()),!n)throw $n.create("no-options");const s=Nr.get(i);if(s){if(jf(n,s.options)&&jf(r,s.config))return s;throw $n.create("duplicate-app",{appName:i})}const o=new FA(i);for(const u of Ra.values())o.addComponent(u);const a=new bD(n,r,o);return Nr.set(i,a),a}function PD(t=Cr){const e=Nr.get(t);if(!e&&t===Cr)return Om();if(!e)throw $n.create("no-app",{appName:t});return e}function OD(){return Array.from(Nr.values())}async function H_(t){const e=t.name;Nr.has(e)&&(Nr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function _n(t,e,n){var r;let i=(r=AD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ci.warn(a.join(" "));return}Ar(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Q_(t,e){if(t!==null&&typeof t!="function")throw $n.create("invalid-log-argument");jA(t,e)}function Y_(t){zA(t)}/**
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
 */const LD="firebase-heartbeat-database",MD=1,ba="firebase-heartbeat-store";let Cd=null;function X_(){return Cd||(Cd=JA(LD,MD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ba)}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),Cd}async function $D(t){try{return(await X_()).transaction(ba).objectStore(ba).get(J_(t))}catch(e){if(e instanceof yt)Ci.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ci.warn(n.message)}}}async function Uv(t,e){try{const r=(await X_()).transaction(ba,"readwrite");return await r.objectStore(ba).put(e,J_(t)),r.done}catch(n){if(n instanceof yt)Ci.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ci.warn(r.message)}}}function J_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const FD=1024,UD=30*24*60*60*1e3;class VD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=UD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vv(),{heartbeatsToSend:n,unsentEntries:r}=BD(this._heartbeatsCache.heartbeats),i=oc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vv(){return new Date().toISOString().substring(0,10)}function BD(t,e=FD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xa()?AA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $D(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bv(t){return oc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jD(t){Ar(new Tn("platform-logger",e=>new tD(e),"PRIVATE")),Ar(new Tn("heartbeat",e=>new VD(e),"PRIVATE")),_n(Gf,Fv,t),_n(Gf,Fv,"esm2017"),_n("fire-js","")}jD("");const qD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:yt,SDK_VERSION:ji,_DEFAULT_ENTRY_NAME:Cr,_addComponent:uc,_addOrOverwriteComponent:G_,_apps:Nr,_clearComponents:xD,_components:Ra,_getProvider:K_,_registerComponent:Ar,_removeServiceInstance:DD,deleteApp:H_,getApp:PD,getApps:OD,initializeApp:Om,onLog:Q_,registerVersion:_n,setLogLevel:Y_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n){this._delegate=e,this.firebase=n,uc(e,new Tn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),H_(this._delegate)))}_getService(e,n=Cr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Cr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){uc(this._delegate,e)}_addOrOverwriteComponent(e){G_(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const GD={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},zv=new zi("app-compat","Firebase",GD);/**
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
 */function KD(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:_n,setLogLevel:Y_,onLog:Q_,apps:null,SDK_VERSION:ji,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:qD}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Cr,!Pv(e,l))throw zv.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=Om(l,c);if(Pv(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(Ar(l)&&l.type==="PUBLIC"){const d=(m=i())=>{if(typeof m[h]!="function")throw zv.create("invalid-app-argument",{appName:c});return m[h]()};l.serviceProps!==void 0&&ac(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...m){return this._getService.bind(this,c).apply(this,l.multipleInstances?m:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
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
 */function Z_(){const t=KD(WD);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Z_,extendNamespace:e,createSubscribe:z_,ErrorFactory:zi,deepExtend:ac});function e(n){ac(t,n)}return t}const HD=Z_();/**
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
 */const jv=new Xc("@firebase/app-compat"),QD="@firebase/app-compat",YD="0.2.7";/**
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
 */function XD(t){_n(QD,YD,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(CA()&&self.firebase!==void 0){jv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&jv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const qi=HD;XD();var JD="firebase",ZD="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qi.registerVersion(JD,ZD,"app-compat");function Lm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Co={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Zi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function eE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tx=ex,nx=eE,tE=new zi("auth","Firebase",eE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=new Xc("@firebase/auth");function Tl(t,...e){qv.logLevel<=J.ERROR&&qv.error(`Auth (${ji}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,...e){throw Mm(t,...e)}function Xe(t,...e){return Mm(t,...e)}function nE(t,e,n){const r=Object.assign(Object.assign({},nx()),{[e]:n});return new zi("auth","Firebase",r).create(e,{appName:t.name})}function ro(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&et(t,"argument-error"),nE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tE.create(t,...e)}function N(t,e,...n){if(!t)throw Mm(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tl(e),new Error(e)}function on(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=new Map;function Lt(t){on(t instanceof Function,"Expected a class definition");let e=Wv.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wv.set(t,e),e)}function rx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $m(){return Gv()==="http:"||Gv()==="https:"}function Gv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($m()||V_()||"connection"in navigator)?navigator.onLine:!0}function sx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.shortDelay=e,this.longDelay=n,on(n>e,"Short delay should be less than long delay!"),this.isMobile=kA()||Rm()}get(){return ix()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,e){on(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=new uu(3e4,6e4);function Oe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qe(t,e,n,r,i={}){return iE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=no(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),rE.fetch()(sE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function iE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ox),e);try{const i=new ux(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Bo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bo(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Bo(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Bo(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw nE(t,c,l);et(t,c)}}catch(i){if(i instanceof yt)throw i;et(t,"network-request-failed",{message:String(i)})}}async function Hn(t,e,n,r,i={}){const s=await qe(t,e,n,r,i);return"mfaPendingCredential"in s&&et(t,"multi-factor-auth-required",{_serverResponse:s}),s}function sE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fm(t.config,i):`${t.config.apiScheme}://${i}`}class ux{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),ax.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xe(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(t,e){return qe(t,"POST","/v1/accounts:delete",e)}async function cx(t,e){return qe(t,"POST","/v1/accounts:update",e)}async function hx(t,e){return qe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dx(t,e=!1){const n=U(t),r=await n.getIdToken(e),i=Jc(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ra(Nd(i.auth_time)),issuedAtTime:ra(Nd(i.iat)),expirationTime:ra(Nd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nd(t){return Number(t)*1e3}function Jc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tl("JWT malformed, contained fewer than 3 sections"),null;try{const i=U_(n);return i?JSON.parse(i):(Tl("Failed to decode base64 JWT payload"),null)}catch(i){return Tl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fx(t){const e=Jc(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yt&&px(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function px({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ra(this.lastLoginAt),this.creationTime=ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Oa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await jn(t,hx(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vx(s.providerUserInfo):[],a=yx(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new oE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function gx(t){const e=U(t);await Oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vx(t){return t.map(e=>{var{providerId:n}=e,r=Lm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wx(t,e){const n=await iE(t,{},async()=>{const r=no({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=sE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new La;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new La,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Lm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new oE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await jn(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dx(this,e)}reload(){return gx(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jn(this,lx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,g=(l=n.createdAt)!==null&&l!==void 0?l:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:_,isAnonymous:E,providerData:k,stsTokenManager:A}=n;N(p&&A,e,"internal-error");const b=La.fromJSON(this.name,A);N(typeof p=="string",e,"internal-error"),er(h,e.name),er(d,e.name),N(typeof _=="boolean",e,"internal-error"),N(typeof E=="boolean",e,"internal-error"),er(m,e.name),er(y,e.name),er(v,e.name),er(D,e.name),er(g,e.name),er(f,e.name);const te=new gi({uid:p,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:E,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:b,createdAt:g,lastLoginAt:f});return k&&Array.isArray(k)&&(te.providerData=k.map(j=>Object.assign({},j))),D&&(te._redirectEventId=D),te}static async _fromIdTokenResponse(e,n,r=!1){const i=new La;i.updateFromServerResponse(n);const s=new gi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Oa(s),s}}/**
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
 */class aE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}aE.type="NONE";const Fs=aE;/**
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
 */function yi(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yi(this.userKey,i.apiKey,s),this.fullPersistenceKey=yi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ks(Lt(Fs),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Lt(Fs);const o=yi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=gi._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ks(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ks(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hE(e))return"Blackberry";if(dE(e))return"Webos";if(Um(e))return"Safari";if((e.includes("chrome/")||lE(e))&&!e.includes("edge/"))return"Chrome";if(lu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uE(t=ye()){return/firefox\//i.test(t)}function Um(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lE(t=ye()){return/crios\//i.test(t)}function cE(t=ye()){return/iemobile/i.test(t)}function lu(t=ye()){return/android/i.test(t)}function hE(t=ye()){return/blackberry/i.test(t)}function dE(t=ye()){return/webos/i.test(t)}function io(t=ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ix(t=ye()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function _x(t=ye()){var e;return io(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ex(){return B_()&&document.documentMode===10}function fE(t=ye()){return io(t)||lu(t)||dE(t)||hE(t)||/windows phone/i.test(t)||cE(t)}function Sx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t,e=[]){let n;switch(t){case"Browser":n=Kv(ye());break;case"Worker":n=`${Kv(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ji}/${r}`}/**
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
 */class Tx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hv(this),this.idTokenSubscription=new Hv(this),this.beforeStateQueue=new Tx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Oa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?U(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lt(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ze(t){return U(t)}class Hv{constructor(e){this.auth=e,this.observer=null,this.addObserver=z_(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Cx(t,e,n){const r=ze(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=mE(e),{host:o,port:a}=Nx(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ax()}function mE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Nx(t){const e=mE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qv(o)}}}function Qv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ax(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(t,e){return qe(t,"POST","/v1/accounts:resetPassword",Oe(t,e))}async function yE(t,e){return qe(t,"POST","/v1/accounts:update",e)}async function Dx(t,e){return qe(t,"POST","/v1/accounts:update",Oe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(t,e){return Hn(t,"POST","/v1/accounts:signInWithPassword",Oe(t,e))}async function Zc(t,e){return qe(t,"POST","/v1/accounts:sendOobCode",Oe(t,e))}async function Rx(t,e){return Zc(t,e)}async function bx(t,e){return Zc(t,e)}async function Px(t,e){return Zc(t,e)}async function Ox(t,e){return Zc(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lx(t,e){return Hn(t,"POST","/v1/accounts:signInWithEmailLink",Oe(t,e))}async function Mx(t,e){return Hn(t,"POST","/v1/accounts:signInWithEmailLink",Oe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends so{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ma(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ma(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return xx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Lx(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return yE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Mx(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(t,e){return Hn(t,"POST","/v1/accounts:signInWithIdp",Oe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="http://localhost";class kn extends so{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Lm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new kn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fn(e,n)}buildRequest(){const e={requestUri:$x,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=no(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fx(t,e){return qe(t,"POST","/v1/accounts:sendVerificationCode",Oe(t,e))}async function Ux(t,e){return Hn(t,"POST","/v1/accounts:signInWithPhoneNumber",Oe(t,e))}async function Vx(t,e){const n=await Hn(t,"POST","/v1/accounts:signInWithPhoneNumber",Oe(t,e));if(n.temporaryProof)throw Bo(t,"account-exists-with-different-credential",n);return n}const Bx={USER_NOT_FOUND:"user-not-found"};async function zx(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Hn(t,"POST","/v1/accounts:signInWithPhoneNumber",Oe(t,n),Bx)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends so{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new vi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new vi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Ux(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Vx(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return zx(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new vi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qx(t){const e=ys(Vo(t)).link,n=e?ys(Vo(e)).deep_link_id:null,r=ys(Vo(t)).deep_link_id;return(r?ys(Vo(r)).link:null)||r||n||e||t}class eh{constructor(e){var n,r,i,s,o,a;const u=ys(Vo(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=jx((i=u.mode)!==null&&i!==void 0?i:null);N(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qx(e);try{return new eh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.providerId=Br.PROVIDER_ID}static credential(e,n){return Ma._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=eh.parseLink(n);return N(r,"argument-error"),Ma._fromEmailAndCode(e,r.code,r.tenantId)}}Br.PROVIDER_ID="password";Br.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Br.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oo extends Qn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Cs extends oo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),kn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),kn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Cs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Cs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Cs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends oo{constructor(){super("facebook.com")}static credential(e){return kn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends oo{constructor(){super("github.com")}static credential(e){return kn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx="http://localhost";class Us extends so{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Fn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Us(r,s)}static _create(e,n){return new Us(e,n)}buildRequest(){return{requestUri:Wx,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx="saml.";class lc extends Qn{constructor(e){N(e.startsWith(Gx),"argument-error"),super(e)}static credentialFromResult(e){return lc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return lc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Us.fromJSON(e);return N(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Us._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends oo{constructor(){super("twitter.com")}static credential(e,n){return kn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(t,e){return Hn(t,"POST","/v1/accounts:signUp",Oe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gi._fromIdTokenResponse(e,r,i),o=Yv(r);return new Yt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yv(r);return new Yt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kx(t){var e;const n=ze(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Yt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await vE(n,{returnSecureToken:!0}),i=await Yt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends yt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cc(e,n,r,i)}}function wE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Hx(t,e){const n=U(t);await th(!0,n,e);const{providerUserInfo:r}=await cx(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=IE(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Vm(t,e,n=!1){const r=await jn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yt._forOperation(t,"link",r)}async function th(t,e,n){await Oa(e);const r=IE(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";N(r.has(n)===t,e.auth,i)}/**
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
 */async function _E(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await jn(t,wE(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=Jc(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),Yt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&et(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(t,e,n=!1){const r="signIn",i=await wE(t,r,e),s=await Yt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function nh(t,e){return EE(ze(t),e)}async function SE(t,e){const n=U(t);return await th(!1,n,e.providerId),Vm(n,e)}async function TE(t,e){return _E(U(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qx(t,e){return Hn(t,"POST","/v1/accounts:signInWithCustomToken",Oe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(t,e){const n=ze(t),r=await Qx(n,{token:e,returnSecureToken:!0}),i=await Yt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Bm._fromServerResponse(e,n):"totpInfo"in n?zm._fromServerResponse(e,n):et(e,"internal-error")}}class Bm extends cu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Bm(n)}}class zm extends cu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new zm(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t,e,n){var r;N(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xx(t,e,n){const r=U(t),i={requestType:"PASSWORD_RESET",email:e};n&&rh(r,i,n),await bx(r,i)}async function Jx(t,e,n){await gE(U(t),{oobCode:e,newPassword:n})}async function Zx(t,e){await Dx(U(t),{oobCode:e})}async function kE(t,e){const n=U(t),r=await gE(n,{oobCode:e}),i=r.requestType;switch(N(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(r.mfaInfo,n,"internal-error");default:N(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=cu._fromServerResponse(ze(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function eR(t,e){const{data:n}=await kE(U(t),e);return n.email}async function tR(t,e,n){const r=ze(t),i=await vE(r,{returnSecureToken:!0,email:e,password:n}),s=await Yt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function nR(t,e,n){return nh(U(t),Br.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(t,e,n){const r=U(t),i={requestType:"EMAIL_SIGNIN",email:e};N(n.handleCodeInApp,r,"argument-error"),n&&rh(r,i,n),await Px(r,i)}function iR(t,e){const n=eh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function sR(t,e,n){const r=U(t),i=Br.credentialWithLink(e,n||Pa());return N(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),nh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(t,e){return qe(t,"POST","/v1/accounts:createAuthUri",Oe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aR(t,e){const n=$m()?Pa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await oR(U(t),r);return i||[]}async function uR(t,e){const n=U(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&rh(n.auth,i,e);const{email:s}=await Rx(n.auth,i);s!==t.email&&await t.reload()}async function lR(t,e,n){const r=U(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&rh(r.auth,s,n);const{email:o}=await Ox(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(t,e){return qe(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=U(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await jn(r,cR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function dR(t,e){return CE(U(t),e,null)}function fR(t,e){return CE(U(t),null,e)}async function CE(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await jn(t,yE(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function pR(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Jc(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ns(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new mR(s,i);case"github.com":return new gR(s,i);case"google.com":return new yR(s,i);case"twitter.com":return new vR(s,i,t.screenName||null);case"custom":case"anonymous":return new Ns(s,null);default:return new Ns(s,r,i)}}class Ns{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class NE extends Ns{constructor(e,n,r,i){super(e,n,r),this.username=i}}class mR extends Ns{constructor(e,n){super(e,"facebook.com",n)}}class gR extends NE{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class yR extends Ns{constructor(e,n){super(e,"google.com",n)}}class vR extends NE{constructor(e,n,r){super(e,"twitter.com",n,r)}}function wR(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:pR(n)}class li{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new li("enroll",e,n)}static _fromMfaPendingCredential(e){return new li("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return li._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return li._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ze(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>cu._fromServerResponse(r,a));N(i.mfaPendingCredential,r,"internal-error");const o=li._fromMfaPendingCredential(i.mfaPendingCredential);return new jm(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await Yt._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return N(n.user,r,"internal-error"),Yt._forOperation(n.user,n.operationType,l);default:et(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function IR(t,e){var n;const r=U(t),i=e;return N(e.customData.operationType,r,"argument-error"),N((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),jm._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:start",Oe(t,e))}function ER(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:finalize",Oe(t,e))}function SR(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Oe(t,e))}class qm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>cu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new qm(e)}async getSession(){return li._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await jn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await jn(this.user,SR(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Ad=new WeakMap;function TR(t){const e=U(t);return Ad.has(e)||Ad.set(e,qm._fromUser(e)),Ad.get(e)}const hc="__sak";/**
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
 */class AE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(){const t=ye();return Um(t)||io(t)}const CR=1e3,NR=10;class DE extends AE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kR()&&Sx(),this.fallbackToPolling=fE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ex()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,NR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}DE.type="LOCAL";const Wm=DE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE extends AE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xE.type="SESSION";const Ni=xE;/**
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
 */function AR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ih{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ih(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await AR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ih.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class DR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=hu("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return window}function xR(t){Re().location.href=t}/**
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
 */function Gm(){return typeof Re().WorkerGlobalScope<"u"&&typeof Re().importScripts=="function"}async function RR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function PR(){return Gm()?self:null}/**
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
 */const RE="firebaseLocalStorageDb",OR=1,dc="firebaseLocalStorage",bE="fbase_key";class du{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sh(t,e){return t.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function LR(){const t=indexedDB.deleteDatabase(RE);return new du(t).toPromise()}function Kf(){const t=indexedDB.open(RE,OR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dc,{keyPath:bE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dc)?e(r):(r.close(),await LR(),e(await Kf()))})})}async function Xv(t,e,n){const r=sh(t,!0).put({[bE]:e,value:n});return new du(r).toPromise()}async function MR(t,e){const n=sh(t,!1).get(e),r=await new du(n).toPromise();return r===void 0?null:r.value}function Jv(t,e){const n=sh(t,!0).delete(e);return new du(n).toPromise()}const $R=800,FR=3;class PE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ih._getInstance(PR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RR(),!this.activeServiceWorker)return;this.sender=new DR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kf();return await Xv(e,hc,"1"),await Jv(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>MR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=sh(i,!1).getAll();return new du(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}PE.type="LOCAL";const $a=PE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t,e){return qe(t,"POST","/v2/accounts/mfaSignIn:start",Oe(t,e))}function VR(t,e){return qe(t,"POST","/v2/accounts/mfaSignIn:finalize",Oe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(t){return(await qe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function OE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",zR().appendChild(r)})}function LE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=500,qR=6e4,el=1e12;class WR{constructor(e){this.auth=e,this.counter=el,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new GR(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||el;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||el;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||el;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class GR{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;N(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=KR(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},qR)},jR))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function KR(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=LE("rcb"),HR=new uu(3e4,6e4),QR="https://www.google.com/recaptcha/api.js?";class YR{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Re().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return N(XR(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Re().grecaptcha):new Promise((r,i)=>{const s=Re().setTimeout(()=>{i(Xe(e,"network-request-failed"))},HR.get());Re()[Dd]=()=>{Re().clearTimeout(s),delete Re()[Dd];const a=Re().grecaptcha;if(!a){i(Xe(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${QR}?${no({onload:Dd,render:"explicit",hl:n})}`;OE(o).catch(()=>{clearTimeout(s),i(Xe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Re().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function XR(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class JR{async load(e){return new WR(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="recaptcha",ZR={theme:"light",type:"image"};let eb=class{constructor(e,n=Object.assign({},ZR),r){this.parameters=n,this.type=ME,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ze(r),this.isInvisible=this.parameters.size==="invisible",N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;N(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new JR:new YR,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Re()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N($m()&&!Gm(),this.auth,"internal-error"),await tb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await BR(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function tb(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=vi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function nb(t,e,n){const r=ze(t),i=await oh(r,e,U(n));return new Km(i,s=>nh(r,s))}async function rb(t,e,n){const r=U(t);await th(!1,r,"phone");const i=await oh(r.auth,e,U(n));return new Km(i,s=>SE(r,s))}async function ib(t,e,n){const r=U(t),i=await oh(r.auth,e,U(n));return new Km(i,s=>TE(r,s))}async function oh(t,e,n){var r;const i=await n.verify();try{N(typeof i=="string",t,"argument-error"),N(n.type===ME,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await _R(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await UR(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Fx(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function sb(t,e){await Vm(U(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai=class kl{constructor(e){this.providerId=kl.PROVIDER_ID,this.auth=ze(e)}verifyPhoneNumber(e,n){return oh(this.auth,e,U(n))}static credential(e,n){return vi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return kl.credentialFromTaggedObject(n)}static credentialFromError(e){return kl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?vi._fromTokenResponse(n,r):null}};Ai.PROVIDER_ID="phone";Ai.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Wi(t,e){return e?Lt(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hm extends so{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ob(t){return EE(t.auth,new Hm(t),t.bypassAuthState)}function ab(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),_E(n,new Hm(t),t.bypassAuthState)}async function ub(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),Vm(n,new Hm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ob;case"linkViaPopup":case"linkViaRedirect":return ub;case"reauthViaPopup":case"reauthViaRedirect":return ab;default:et(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new uu(2e3,1e4);async function cb(t,e,n){const r=ze(t);ro(t,e,Qn);const i=Wi(r,n);return new Pn(r,"signInViaPopup",e,i).executeNotNull()}async function hb(t,e,n){const r=U(t);ro(r.auth,e,Qn);const i=Wi(r.auth,n);return new Pn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function db(t,e,n){const r=U(t);ro(r.auth,e,Qn);const i=Wi(r.auth,n);return new Pn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Pn extends $E{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,lb.get())};e()}}Pn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="pendingRedirect",ia=new Map;class pb extends $E{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const r=await mb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mb(t,e){const n=UE(e),r=FE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Qm(t,e){return FE(t)._set(UE(e),"true")}function gb(){ia.clear()}function Ym(t,e){ia.set(t._key(),e)}function FE(t){return Lt(t._redirectPersistence)}function UE(t){return yi(fb,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t,e,n){return vb(t,e,n)}async function vb(t,e,n){const r=ze(t);ro(t,e,Qn),await r._initializationPromise;const i=Wi(r,n);return await Qm(i,r),i._openRedirect(r,e,"signInViaRedirect")}function wb(t,e,n){return Ib(t,e,n)}async function Ib(t,e,n){const r=U(t);ro(r.auth,e,Qn),await r.auth._initializationPromise;const i=Wi(r.auth,n);await Qm(i,r.auth);const s=await VE(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function _b(t,e,n){return Eb(t,e,n)}async function Eb(t,e,n){const r=U(t);ro(r.auth,e,Qn),await r.auth._initializationPromise;const i=Wi(r.auth,n);await th(!1,r,e.providerId),await Qm(i,r.auth);const s=await VE(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Sb(t,e){return await ze(t)._initializationPromise,ah(t,e,!1)}async function ah(t,e,n=!1){const r=ze(t),i=Wi(r,e),o=await new pb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function VE(t){const e=hu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=10*60*1e3;class BE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zv(e))}saveEventToCache(e){this.cachedEventUids.add(Zv(e)),this.lastProcessedEventTime=Date.now()}}function Zv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(t,e={}){return qe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nb=/^https?/;async function Ab(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jE(t);for(const n of e)try{if(Db(n))return}catch{}et(t,"unauthorized-domain")}function Db(t){const e=Pa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Nb.test(n))return!1;if(Cb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const xb=new uu(3e4,6e4);function ew(){const t=Re().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Rb(t){return new Promise((e,n)=>{var r,i,s;function o(){ew(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ew(),n(Xe(t,"network-request-failed"))},timeout:xb.get()})}if(!((i=(r=Re().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Re().gapi)===null||s===void 0)&&s.load)o();else{const a=LE("iframefcb");return Re()[a]=()=>{gapi.load?o():n(Xe(t,"network-request-failed"))},OE(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Cl=null,e})}let Cl=null;function bb(t){return Cl=Cl||Rb(t),Cl}/**
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
 */const Pb=new uu(5e3,15e3),Ob="__/auth/iframe",Lb="emulator/auth/iframe",Mb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$b=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fb(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fm(e,Lb):`https://${t.config.authDomain}/${Ob}`,r={apiKey:e.apiKey,appName:t.name,v:ji},i=$b.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${no(r).slice(1)}`}async function Ub(t){const e=await bb(t),n=Re().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:Fb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xe(t,"network-request-failed"),a=Re().setTimeout(()=>{s(o)},Pb.get());function u(){Re().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Vb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bb=500,zb=600,jb="_blank",qb="http://localhost";class tw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wb(t,e,n,r=Bb,i=zb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},Vb),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ye().toLowerCase();n&&(a=lE(l)?jb:n),uE(l)&&(e=e||qb,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(_x(l)&&a!=="_self")return Gb(e||"",a),new tw(null);const h=window.open(e||"",a,c);N(h,t,"popup-blocked");try{h.focus()}catch{}return new tw(h)}function Gb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Kb="__/auth/handler",Hb="emulator/auth/handler";function Hf(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ji,eventId:i};if(e instanceof Qn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof oo){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${Qb(t)}?${no(a).slice(1)}`}function Qb({config:t}){return t.emulator?Fm(t,Hb):`https://${t.authDomain}/${Kb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="webStorageSupport";class Yb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ni,this._completeRedirectFn=ah,this._overrideRedirectResult=Ym}async _openPopup(e,n,r,i){var s;on((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Hf(e,n,r,Pa(),i);return Wb(e,o,hu())}async _openRedirect(e,n,r,i){return await this._originValidation(e),xR(Hf(e,n,r,Pa(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(on(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ub(e),r=new BE(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xd,{type:xd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xd];o!==void 0&&n(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ab(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fE()||Um()||io()}}const Xb=Yb;class Jb{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return gn("unexpected MultiFactorSessionType")}}}class Xm extends Jb{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Xm(e)}_finalizeEnroll(e,n,r){return ER(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return VR(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qE{constructor(){}static assertion(e){return Xm._fromCredential(e)}}qE.FACTOR_ID="phone";var nw="@firebase/auth",rw="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tP(t){Ar(new Tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{N(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),N(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pE(t)},c=new kx(a,u,l);return rx(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ar(new Tn("auth-internal",e=>{const n=ze(e.getProvider("auth").getImmediate());return(r=>new Zb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(nw,rw,eP(t)),_n(nw,rw,"esm2017")}/**
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
 */const nP=5*60;EA("authIdTokenMaxAge");tP("Browser");/**
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
 */function Di(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=2e3;async function iP(t,e,n){var r;const{BuildInfo:i}=Di();on(e.sessionId,"AuthEvent did not contain a session ID");const s=await lP(e.sessionId),o={};return io()?o.ibi=i.packageName:lu()?o.apn=i.packageName:et(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Hf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function sP(t){const{BuildInfo:e}=Di(),n={};io()?n.iosBundleId=e.packageName:lu()?n.androidPackageName=e.packageName:et(t,"operation-not-supported-in-this-environment"),await jE(t,n)}function oP(t){const{cordova:e}=Di();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,Ix()?"_blank":"_system","location=yes"),n(i)})})}async function aP(t,e,n){const{cordova:r}=Di();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Xe(t,"redirect-cancelled-by-user"))},rP))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),lu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function uP(t){var e,n,r,i,s,o,a,u,l,c;const h=Di();N(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function lP(t){const e=cP(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function cP(t){if(on(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=20;class dP extends BE{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function fP(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:gP(),postBody:null,tenantId:t.tenantId,error:Xe(t,"no-auth-event")}}function pP(t,e){return Qf()._set(Yf(t),e)}async function iw(t){const e=await Qf()._get(Yf(t));return e&&await Qf()._remove(Yf(t)),e}function mP(t,e){var n,r;const i=vP(e);if(i.includes("/__/auth/callback")){const s=Nl(i),o=s.firebaseError?yP(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Xe(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function gP(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<hP;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Qf(){return Lt(Wm)}function Yf(t){return yi("authEvent",t.config.apiKey,t.name)}function yP(t){try{return JSON.parse(t)}catch{return null}}function vP(t){const e=Nl(t),n=e.link?decodeURIComponent(e.link):void 0,r=Nl(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Nl(i).link||i||r||n||t}function Nl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return ys(n.join("?"))}/**
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
 */const wP=500;class IP{constructor(){this._redirectPersistence=Ni,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ah,this._overrideRedirectResult=Ym}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new dP(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){et(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){uP(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),gb(),await this._originValidation(e);const o=fP(e,r,i);await pP(e,o);const a=await iP(e,o,n),u=await oP(a);return aP(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sP(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Di(),o=setTimeout(async()=>{await iw(e),n.onEvent(sw())},wP),a=async c=>{clearTimeout(o);const h=await iw(e);let d=null;h&&(c!=null&&c.url)&&(d=mP(h,c.url)),n.onEvent(d||sw())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;Di().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const _P=IP;function sw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xe("no-auth-event")}}/**
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
 */function EP(t,e){ze(t)._logFramework(e)}var SP="@firebase/auth-compat",TP="0.3.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=1e3;function sa(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function CP(){return sa()==="http:"||sa()==="https:"}function WE(t=ye()){return!!((sa()==="file:"||sa()==="ionic:"||sa()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function NP(){return Rm()||xm()}function AP(){return B_()&&(document==null?void 0:document.documentMode)===11}function DP(t=ye()){return/Edge\/\d+/.test(t)}function xP(t=ye()){return AP()||DP(t)}function GE(){try{const t=self.localStorage,e=hu();if(t)return t.setItem(e,"1"),t.removeItem(e),xP()?xa():!0}catch{return Jm()&&xa()}return!1}function Jm(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Rd(){return(CP()||V_()||WE())&&!NP()&&GE()&&!Jm()}function KE(){return WE()&&typeof document<"u"}async function RP(){return KE()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},kP);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function bP(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt={LOCAL:"local",NONE:"none",SESSION:"session"},No=N,HE="persistence";function PP(t,e){if(No(Object.values(Pt).includes(e),t,"invalid-persistence-type"),Rm()){No(e!==Pt.SESSION,t,"unsupported-persistence-type");return}if(xm()){No(e===Pt.NONE,t,"unsupported-persistence-type");return}if(Jm()){No(e===Pt.NONE||e===Pt.LOCAL&&xa(),t,"unsupported-persistence-type");return}No(e===Pt.NONE||GE(),t,"unsupported-persistence-type")}async function Xf(t){await t._initializationPromise;const e=QE(),n=yi(HE,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function OP(t,e){const n=QE();if(!n)return[];const r=yi(HE,t,e);switch(n.getItem(r)){case Pt.NONE:return[Fs];case Pt.LOCAL:return[$a,Ni];case Pt.SESSION:return[Ni];default:return[]}}function QE(){var t;try{return((t=bP())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=N;class dr{constructor(){this.browserResolver=Lt(Xb),this.cordovaResolver=Lt(_P),this.underlyingResolver=null,this._redirectPersistence=Ni,this._completeRedirectFn=ah,this._overrideRedirectResult=Ym}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return KE()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return LP(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await RP();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t){return t.unwrap()}function MP(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t){return XE(t)}function FP(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new UP(t,IR(t,e))}else if(r){const i=XE(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function XE(t){const{_tokenResponse:e}=t instanceof yt?t.customData:t;if(!e)return null;if(!(t instanceof yt)&&"temporaryProof"in e&&"phoneNumber"in e)return Ai.credentialFromResult(t);const n=e.providerId;if(!n||n===Co.PASSWORD)return null;let r;switch(n){case Co.GOOGLE:r=dn;break;case Co.FACEBOOK:r=hn;break;case Co.GITHUB:r=fn;break;case Co.TWITTER:r=pn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Us._create(n,a):kn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Cs(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof yt?r.credentialFromError(t):r.credentialFromResult(t)}function _t(t,e){return e.catch(n=>{throw n instanceof yt&&FP(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:$P(n),additionalUserInfo:wR(n),user:On.getOrCreate(i)}})}async function Jf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>_t(t,n.confirm(r))}}class UP{constructor(e,n){this.resolver=n,this.auth=MP(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return _t(YE(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this._delegate=e,this.multiFactor=TR(e)}static getOrCreate(e){return On.USER_MAP.has(e)||On.USER_MAP.set(e,new On(e)),On.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return _t(this.auth,SE(this._delegate,e))}async linkWithPhoneNumber(e,n){return Jf(this.auth,rb(this._delegate,e,n))}async linkWithPopup(e){return _t(this.auth,db(this._delegate,e,dr))}async linkWithRedirect(e){return await Xf(ze(this.auth)),_b(this._delegate,e,dr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return _t(this.auth,TE(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Jf(this.auth,ib(this._delegate,e,n))}reauthenticateWithPopup(e){return _t(this.auth,hb(this._delegate,e,dr))}async reauthenticateWithRedirect(e){return await Xf(ze(this.auth)),wb(this._delegate,e,dr)}sendEmailVerification(e){return uR(this._delegate,e)}async unlink(e){return await Hx(this._delegate,e),this}updateEmail(e){return dR(this._delegate,e)}updatePassword(e){return fR(this._delegate,e)}updatePhoneNumber(e){return sb(this._delegate,e)}updateProfile(e){return hR(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return lR(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}On.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=N;class Zf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ao(r,"invalid-api-key",{appName:e.name}),Ao(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?dr:void 0;this._delegate=n.initialize({options:{persistence:VP(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(tx),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?On.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){Cx(this._delegate,e,n)}applyActionCode(e){return Zx(this._delegate,e)}checkActionCode(e){return kE(this._delegate,e)}confirmPasswordReset(e,n){return Jx(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return _t(this._delegate,tR(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return aR(this._delegate,e)}isSignInWithEmailLink(e){return iR(this._delegate,e)}async getRedirectResult(){Ao(Rd(),this._delegate,"operation-not-supported-in-this-environment");const e=await Sb(this._delegate,dr);return e?_t(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){EP(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=ow(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=ow(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return rR(this._delegate,e,n)}sendPasswordResetEmail(e,n){return Xx(this._delegate,e,n||void 0)}async setPersistence(e){PP(this._delegate,e);let n;switch(e){case Pt.SESSION:n=Ni;break;case Pt.LOCAL:n=await Lt($a)._isAvailable()?$a:Wm;break;case Pt.NONE:n=Fs;break;default:return et("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return _t(this._delegate,Kx(this._delegate))}signInWithCredential(e){return _t(this._delegate,nh(this._delegate,e))}signInWithCustomToken(e){return _t(this._delegate,Yx(this._delegate,e))}signInWithEmailAndPassword(e,n){return _t(this._delegate,nR(this._delegate,e,n))}signInWithEmailLink(e,n){return _t(this._delegate,sR(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Jf(this._delegate,nb(this._delegate,e,n))}async signInWithPopup(e){return Ao(Rd(),this._delegate,"operation-not-supported-in-this-environment"),_t(this._delegate,cb(this._delegate,e,dr))}async signInWithRedirect(e){return Ao(Rd(),this._delegate,"operation-not-supported-in-this-environment"),await Xf(this._delegate),yb(this._delegate,e,dr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return eR(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Zf.Persistence=Pt;function ow(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&On.getOrCreate(o)),error:e,complete:n}}function VP(t,e){const n=OP(t,e);if(typeof self<"u"&&!n.includes($a)&&n.push($a),typeof window<"u")for(const r of[Wm,Ni])n.includes(r)||n.push(r);return n.includes(Fs)||n.push(Fs),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.providerId="phone",this._delegate=new Ai(YE(qi.auth()))}static credential(e,n){return Ai.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Zm.PHONE_SIGN_IN_METHOD=Ai.PHONE_SIGN_IN_METHOD;Zm.PROVIDER_ID=Ai.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=N;class zP{constructor(e,n,r=qi.app()){var i;BP((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new eb(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="auth-compat";function qP(t){t.INTERNAL.registerComponent(new Tn(jP,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Zf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Zi.EMAIL_SIGNIN,PASSWORD_RESET:Zi.PASSWORD_RESET,RECOVER_EMAIL:Zi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Zi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Zi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Zi.VERIFY_EMAIL}},EmailAuthProvider:Br,FacebookAuthProvider:hn,GithubAuthProvider:fn,GoogleAuthProvider:dn,OAuthProvider:Cs,SAMLAuthProvider:lc,PhoneAuthProvider:Zm,PhoneMultiFactorGenerator:qE,RecaptchaVerifier:zP,TwitterAuthProvider:pn,Auth:Zf,AuthCredential:so,Error:yt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(SP,TP)}qP(qi);var WP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,eg=eg||{},z=WP||self;function fc(){}function uh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function GP(t){return Object.prototype.hasOwnProperty.call(t,bd)&&t[bd]||(t[bd]=++KP)}var bd="closure_uid_"+(1e9*Math.random()>>>0),KP=0;function HP(t,e,n){return t.call.apply(t.bind,arguments)}function QP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function at(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=HP:at=QP,at.apply(null,arguments)}function tl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function nt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function zr(){this.s=this.s,this.o=this.o}var YP=0;zr.prototype.s=!1;zr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),YP!=0)&&GP(this)};zr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const JE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function tg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function aw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(uh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var XP=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",fc,e),z.removeEventListener("test",fc,e)}catch{}return t}();function pc(t){return/^[\s\xa0]*$/.test(t)}var uw=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Pd(t,e){return t<e?-1:t>e?1:0}function lh(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function mn(t){return lh().indexOf(t)!=-1}function ng(t){return ng[" "](t),t}ng[" "]=fc;function JP(t){var e=tO;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ZP=mn("Opera"),Vs=mn("Trident")||mn("MSIE"),ZE=mn("Edge"),ep=ZE||Vs,e1=mn("Gecko")&&!(lh().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge"))&&!(mn("Trident")||mn("MSIE"))&&!mn("Edge"),eO=lh().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge");function t1(){var t=z.document;return t?t.documentMode:void 0}var mc;e:{var Od="",Ld=function(){var t=lh();if(e1)return/rv:([^\);]+)(\)|;)/.exec(t);if(ZE)return/Edge\/([\d\.]+)/.exec(t);if(Vs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(eO)return/WebKit\/(\S+)/.exec(t);if(ZP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ld&&(Od=Ld?Ld[1]:""),Vs){var Md=t1();if(Md!=null&&Md>parseFloat(Od)){mc=String(Md);break e}}mc=Od}var tO={};function nO(){return JP(function(){let t=0;const e=uw(String(mc)).split("."),n=uw("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Pd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Pd(i[2].length==0,s[2].length==0)||Pd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var tp;if(z.document&&Vs){var lw=t1();tp=lw||parseInt(mc,10)||void 0}else tp=void 0;var rO=tp;function Fa(t,e){if(ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(e1){e:{try{ng(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fa.X.h.call(this)}}nt(Fa,ut);var iO={2:"touch",3:"pen",4:"mouse"};Fa.prototype.h=function(){Fa.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var pu="closure_listenable_"+(1e6*Math.random()|0),sO=0;function oO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++sO,this.ba=this.ea=!1}function ch(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function rg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function n1(t){const e={};for(const n in t)e[n]=t[n];return e}const cw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function r1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<cw.length;s++)n=cw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function hh(t){this.src=t,this.g={},this.h=0}hh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=rp(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new oO(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function np(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=JE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ch(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function rp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var ig="closure_lm_"+(1e6*Math.random()|0),$d={};function i1(t,e,n,r,i){if(r&&r.once)return o1(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)i1(t,e[s],n,r,i);return null}return n=ag(n),t&&t[pu]?t.N(e,n,fu(r)?!!r.capture:!!r,i):s1(t,e,n,!1,r,i)}function s1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=fu(i)?!!i.capture:!!i,a=og(t);if(a||(t[ig]=a=new hh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=aO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)XP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(u1(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function aO(){function t(n){return e.call(t.src,t.listener,n)}const e=uO;return t}function o1(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)o1(t,e[s],n,r,i);return null}return n=ag(n),t&&t[pu]?t.O(e,n,fu(r)?!!r.capture:!!r,i):s1(t,e,n,!0,r,i)}function a1(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)a1(t,e[s],n,r,i);else r=fu(r)?!!r.capture:!!r,n=ag(n),t&&t[pu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=rp(s,n,r,i),-1<n&&(ch(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=og(t))&&(e=t.g[e.toString()],t=-1,e&&(t=rp(e,n,r,i)),(n=-1<t?e[t]:null)&&sg(n))}function sg(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[pu])np(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(u1(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=og(e))?(np(n,t),n.h==0&&(n.src=null,e[ig]=null)):ch(t)}}}function u1(t){return t in $d?$d[t]:$d[t]="on"+t}function uO(t,e){if(t.ba)t=!0;else{e=new Fa(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&sg(t),t=n.call(r,e)}return t}function og(t){return t=t[ig],t instanceof hh?t:null}var Fd="__closure_events_fn_"+(1e9*Math.random()>>>0);function ag(t){return typeof t=="function"?t:(t[Fd]||(t[Fd]=function(e){return t.handleEvent(e)}),t[Fd])}function je(){zr.call(this),this.i=new hh(this),this.P=this,this.I=null}nt(je,zr);je.prototype[pu]=!0;je.prototype.removeEventListener=function(t,e,n,r){a1(this,t,e,n,r)};function Je(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ut(e,t);else if(e instanceof ut)e.target=e.target||t;else{var i=e;e=new ut(r,t),r1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=nl(o,r,!0,e)&&i}if(o=e.g=t,i=nl(o,r,!0,e)&&i,i=nl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=nl(o,r,!1,e)&&i}je.prototype.M=function(){if(je.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ch(n[r]);delete t.g[e],t.h--}}this.I=null};je.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function nl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&np(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var ug=z.JSON.stringify;function lO(){var t=h1;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class cO{constructor(){this.h=this.g=null}add(e,n){const r=l1.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var l1=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new hO,t=>t.reset());class hO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dO(t){z.setTimeout(()=>{throw t},0)}function c1(t,e){ip||fO(),sp||(ip(),sp=!0),h1.add(t,e)}var ip;function fO(){var t=z.Promise.resolve(void 0);ip=function(){t.then(pO)}}var sp=!1,h1=new cO;function pO(){for(var t;t=lO();){try{t.h.call(t.g)}catch(n){dO(n)}var e=l1;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}sp=!1}function dh(t,e){je.call(this),this.h=t||1,this.g=e||z,this.j=at(this.lb,this),this.l=Date.now()}nt(dh,je);M=dh.prototype;M.ca=!1;M.R=null;M.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Je(this,"tick"),this.ca&&(lg(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lg(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}M.M=function(){dh.X.M.call(this),lg(this),delete this.g};function cg(t,e,n){if(typeof t=="function")n&&(t=at(t,n));else if(t&&typeof t.handleEvent=="function")t=at(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function d1(t){t.g=cg(()=>{t.g=null,t.i&&(t.i=!1,d1(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mO extends zr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:d1(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ua(t){zr.call(this),this.h=t,this.g={}}nt(Ua,zr);var hw=[];function f1(t,e,n,r){Array.isArray(n)||(n&&(hw[0]=n.toString()),n=hw);for(var i=0;i<n.length;i++){var s=i1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function p1(t){rg(t.g,function(e,n){this.g.hasOwnProperty(n)&&sg(e)},t),t.g={}}Ua.prototype.M=function(){Ua.X.M.call(this),p1(this)};Ua.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fh(){this.g=!0}fh.prototype.Aa=function(){this.g=!1};function gO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function yO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function vs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+wO(t,n)+(r?" "+r:"")})}function vO(t,e){t.info(function(){return"TIMEOUT: "+e})}fh.prototype.info=function(){};function wO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ug(n)}catch{return e}}var Gi={},dw=null;function ph(){return dw=dw||new je}Gi.Pa="serverreachability";function m1(t){ut.call(this,Gi.Pa,t)}nt(m1,ut);function Va(t){const e=ph();Je(e,new m1(e))}Gi.STAT_EVENT="statevent";function g1(t,e){ut.call(this,Gi.STAT_EVENT,t),this.stat=e}nt(g1,ut);function mt(t){const e=ph();Je(e,new g1(e,t))}Gi.Qa="timingevent";function y1(t,e){ut.call(this,Gi.Qa,t),this.size=e}nt(y1,ut);function mu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var mh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},v1={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function hg(){}hg.prototype.h=null;function fw(t){return t.h||(t.h=t.i())}function w1(){}var gu={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function dg(){ut.call(this,"d")}nt(dg,ut);function fg(){ut.call(this,"c")}nt(fg,ut);var op;function gh(){}nt(gh,hg);gh.prototype.g=function(){return new XMLHttpRequest};gh.prototype.i=function(){return{}};op=new gh;function yu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ua(this),this.O=IO,t=ep?125:void 0,this.T=new dh(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new I1}function I1(){this.i=null,this.g="",this.h=!1}var IO=45e3,ap={},gc={};M=yu.prototype;M.setTimeout=function(t){this.O=t};function up(t,e,n){t.K=1,t.v=vh(qn(e)),t.s=n,t.P=!0,_1(t,null)}function _1(t,e){t.F=Date.now(),vu(t),t.A=qn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),D1(n.i,"t",r),t.C=0,n=t.l.H,t.h=new I1,t.g=Y1(t.l,n?e:null,!t.s),0<t.N&&(t.L=new mO(at(t.La,t,t.g),t.N)),f1(t.S,t.g,"readystatechange",t.ib),e=t.H?n1(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Va(),gO(t.j,t.u,t.A,t.m,t.U,t.s)}M.ib=function(t){t=t.target;const e=this.L;e&&Ln(t)==3?e.l():this.La(t)};M.La=function(t){try{if(t==this.g)e:{const c=Ln(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||ep||this.g&&(this.h.h||this.g.fa()||yw(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Va(3):Va(2)),yh(this);var n=this.g.aa();this.Y=n;t:if(E1(this)){var r=yw(this.g);t="";var i=r.length,s=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ci(this),oa(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,yO(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pc(a)){var l=a;break t}}l=null}if(n=l)vs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,lp(this,n);else{this.i=!1,this.o=3,mt(12),ci(this),oa(this);break e}}this.P?(S1(this,c,o),ep&&this.i&&c==3&&(f1(this.S,this.T,"tick",this.hb),this.T.start())):(vs(this.j,this.m,o,null),lp(this,o)),c==4&&ci(this),this.i&&!this.I&&(c==4?G1(this.l,this):(this.i=!1,vu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mt(12)):(this.o=0,mt(13)),ci(this),oa(this)}}}catch{}finally{}};function E1(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function S1(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=_O(t,n),i==gc){e==4&&(t.o=4,mt(14),r=!1),vs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ap){t.o=4,mt(15),vs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vs(t.j,t.m,i,null),lp(t,i);E1(t)&&i!=gc&&i!=ap&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ig(e),e.K=!0,mt(11))):(vs(t.j,t.m,n,"[Invalid Chunked Response]"),ci(t),oa(t))}M.hb=function(){if(this.g){var t=Ln(this.g),e=this.g.fa();this.C<e.length&&(yh(this),S1(this,t,e),this.i&&t!=4&&vu(this))}};function _O(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?gc:(n=Number(e.substring(n,r)),isNaN(n)?ap:(r+=1,r+n>e.length?gc:(e=e.substr(r,n),t.C=r+n,e)))}M.cancel=function(){this.I=!0,ci(this)};function vu(t){t.V=Date.now()+t.O,T1(t,t.O)}function T1(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=mu(at(t.gb,t),e)}function yh(t){t.B&&(z.clearTimeout(t.B),t.B=null)}M.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(vO(this.j,this.A),this.K!=2&&(Va(),mt(17)),ci(this),this.o=2,oa(this)):T1(this,this.V-t)};function oa(t){t.l.G==0||t.I||G1(t.l,t)}function ci(t){yh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,lg(t.T),p1(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function lp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||cp(n.h,t))){if(!t.J&&cp(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)wc(n),_h(n);else break e;wg(n),mt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=mu(at(n.cb,n),6e3));if(1>=b1(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else hi(n,11)}else if((t.J||n.g==t)&&wc(n),!pc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(pg(s,s.h),s.h=null))}if(r.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,he(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Q1(r,r.H?r.ka:null,r.V),o.J){P1(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(yh(a),vu(a)),r.g=o}else q1(r);0<n.i.length&&Eh(n)}else l[0]!="stop"&&l[0]!="close"||hi(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?hi(n,7):vg(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Va(4)}catch{}}function EO(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(uh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function SO(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(uh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function k1(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(uh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=SO(t),r=EO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var C1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function TO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof wi){this.h=e!==void 0?e:t.h,yc(this,t.j),this.s=t.s,this.g=t.g,vc(this,t.m),this.l=t.l,e=t.i;var n=new Ba;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),pw(this,n),this.o=t.o}else t&&(n=String(t).match(C1))?(this.h=!!e,yc(this,n[1]||"",!0),this.s=zo(n[2]||""),this.g=zo(n[3]||"",!0),vc(this,n[4]),this.l=zo(n[5]||"",!0),pw(this,n[6]||"",!0),this.o=zo(n[7]||"")):(this.h=!!e,this.i=new Ba(null,this.h))}wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(jo(e,mw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(jo(e,mw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(jo(n,n.charAt(0)=="/"?NO:CO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",jo(n,DO)),t.join("")};function qn(t){return new wi(t)}function yc(t,e,n){t.j=n?zo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function pw(t,e,n){e instanceof Ba?(t.i=e,xO(t.i,t.h)):(n||(e=jo(e,AO)),t.i=new Ba(e,t.h))}function he(t,e,n){t.i.set(e,n)}function vh(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function jo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,kO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function kO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var mw=/[#\/\?@]/g,CO=/[#\?:]/g,NO=/[#\?]/g,AO=/[#\?@]/g,DO=/#/g;function Ba(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function jr(t){t.g||(t.g=new Map,t.h=0,t.i&&TO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Ba.prototype;M.add=function(t,e){jr(this),this.i=null,t=ao(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function N1(t,e){jr(t),e=ao(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function A1(t,e){return jr(t),e=ao(t,e),t.g.has(e)}M.forEach=function(t,e){jr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};M.oa=function(){jr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};M.W=function(t){jr(this);let e=[];if(typeof t=="string")A1(this,t)&&(e=e.concat(this.g.get(ao(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return jr(this),this.i=null,t=ao(this,t),A1(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function D1(t,e,n){N1(t,e),0<n.length&&(t.i=null,t.g.set(ao(t,e),tg(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ao(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xO(t,e){e&&!t.j&&(jr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(N1(this,r),D1(this,i,n))},t)),t.j=e}var RO=class{constructor(e,n){this.h=e,this.g=n}};function x1(t){this.l=t||bO,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bO=10;function R1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function b1(t){return t.h?1:t.g?t.g.size:0}function cp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function pg(t,e){t.g?t.g.add(e):t.h=e}function P1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}x1.prototype.cancel=function(){if(this.i=O1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function O1(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return tg(t.i)}function mg(){}mg.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};mg.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function PO(){this.g=new mg}function OO(t,e,n){const r=n||"";try{k1(t,function(i,s){let o=i;fu(i)&&(o=ug(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function LO(t,e){const n=new fh;if(z.Image){const r=new Image;r.onload=tl(rl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=tl(rl,n,r,"TestLoadImage: error",!1,e),r.onabort=tl(rl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=tl(rl,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function rl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function wu(t){this.l=t.ac||null,this.j=t.jb||!1}nt(wu,hg);wu.prototype.g=function(){return new wh(this.l,this.j)};wu.prototype.i=function(t){return function(){return t}}({});function wh(t,e){je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(wh,je);var gg=0;M=wh.prototype;M.open=function(t,e){if(this.readyState!=gg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,za(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Iu(this)),this.readyState=gg};M.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,za(this)),this.g&&(this.readyState=3,za(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;L1(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function L1(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}M.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Iu(this):za(this),this.readyState==3&&L1(this)}};M.Va=function(t){this.g&&(this.response=this.responseText=t,Iu(this))};M.Ua=function(t){this.g&&(this.response=t,Iu(this))};M.ga=function(){this.g&&Iu(this)};function Iu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,za(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function za(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(wh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var MO=z.JSON.parse;function Ie(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=M1,this.K=this.L=!1}nt(Ie,je);var M1="",$O=/^https?$/i,FO=["POST","PUT"];M=Ie.prototype;M.Ka=function(t){this.L=t};M.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():op.g(),this.C=this.u?fw(this.u):fw(op),this.g.onreadystatechange=at(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){gw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=z.FormData&&t instanceof z.FormData,!(0<=JE(FO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{U1(this),0<this.B&&((this.K=UO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.qa,this)):this.A=cg(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){gw(this,s)}};function UO(t){return Vs&&nO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.qa=function(){typeof eg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function gw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$1(t),Ih(t)}function $1(t){t.D||(t.D=!0,Je(t,"complete"),Je(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),Ih(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ih(this,!0)),Ie.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?F1(this):this.fb())};M.fb=function(){F1(this)};function F1(t){if(t.h&&typeof eg<"u"&&(!t.C[1]||Ln(t)!=4||t.aa()!=2)){if(t.v&&Ln(t)==4)cg(t.Ha,0,t);else if(Je(t,"readystatechange"),Ln(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(C1)[1]||null;if(!i&&z.self&&z.self.location){var s=z.self.location.protocol;i=s.substr(0,s.length-1)}r=!$O.test(i?i.toLowerCase():"")}n=r}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var o=2<Ln(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",$1(t)}}finally{Ih(t)}}}}function Ih(t,e){if(t.g){U1(t);const n=t.g,r=t.C[0]?fc:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=r}catch{}}}function U1(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function Ln(t){return t.g?t.g.readyState:0}M.aa=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),MO(e)}};function yw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case M1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function V1(t){let e="";return rg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function yg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=V1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function Do(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function B1(t){this.Ca=0,this.i=[],this.j=new fh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Do("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Do("baseRetryDelayMs",5e3,t),this.bb=Do("retryDelaySeedMs",1e4,t),this.$a=Do("forwardChannelMaxRetries",2,t),this.ta=Do("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new x1(t&&t.concurrentRequestLimit),this.Fa=new PO,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=B1.prototype;M.ma=8;M.G=1;function vg(t){if(z1(t),t.G==3){var e=t.U++,n=qn(t.F);he(n,"SID",t.I),he(n,"RID",e),he(n,"TYPE","terminate"),_u(t,n),e=new yu(t,t.j,e,void 0),e.K=2,e.v=vh(qn(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Y1(e.l,null),e.g.da(e.v)),e.F=Date.now(),vu(e)}H1(t)}function _h(t){t.g&&(Ig(t),t.g.cancel(),t.g=null)}function z1(t){_h(t),t.u&&(z.clearTimeout(t.u),t.u=null),wc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Eh(t){R1(t.h)||t.m||(t.m=!0,c1(t.Ja,t),t.C=0)}function VO(t,e){return b1(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=mu(at(t.Ja,t,e),K1(t,t.C)),t.C++,!0)}M.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new yu(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=n1(s),r1(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=j1(this,i,e),n=qn(this.F),he(n,"RID",t),he(n,"CVER",22),this.D&&he(n,"X-HTTP-Session-Id",this.D),_u(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(V1(s)))+"&"+e:this.o&&yg(n,this.o,s)),pg(this.h,i),this.Ya&&he(n,"TYPE","init"),this.O?(he(n,"$req",e),he(n,"SID","null"),i.Z=!0,up(i,n,null)):up(i,n,e),this.G=2}}else this.G==3&&(t?vw(this,t):this.i.length==0||R1(this.h)||vw(this))};function vw(t,e){var n;e?n=e.m:n=t.U++;const r=qn(t.F);he(r,"SID",t.I),he(r,"RID",n),he(r,"AID",t.T),_u(t,r),t.o&&t.s&&yg(r,t.o,t.s),n=new yu(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=j1(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),pg(t.h,n),up(n,r,e)}function _u(t,e){t.ia&&rg(t.ia,function(n,r){he(e,r,n)}),t.l&&k1({},function(n,r){he(e,r,n)})}function j1(t,e,n){n=Math.min(t.i.length,n);var r=t.l?at(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{OO(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function q1(t){t.g||t.u||(t.Z=1,c1(t.Ia,t),t.A=0)}function wg(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=mu(at(t.Ia,t),K1(t,t.A)),t.A++,!0)}M.Ia=function(){if(this.u=null,W1(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=mu(at(this.eb,this),t)}};M.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,mt(10),_h(this),W1(this))};function Ig(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function W1(t){t.g=new yu(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=qn(t.sa);he(e,"RID","rpc"),he(e,"SID",t.I),he(e,"CI",t.L?"0":"1"),he(e,"AID",t.T),he(e,"TYPE","xmlhttp"),_u(t,e),t.o&&t.s&&yg(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=vh(qn(e)),n.s=null,n.P=!0,_1(n,t)}M.cb=function(){this.v!=null&&(this.v=null,_h(this),wg(this),mt(19))};function wc(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function G1(t,e){var n=null;if(t.g==e){wc(t),Ig(t),t.g=null;var r=2}else if(cp(t.h,e))n=e.D,P1(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ph(),Je(r,new y1(r,n)),Eh(t)}else q1(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&VO(t,e)||r==2&&wg(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:hi(t,5);break;case 4:hi(t,10);break;case 3:hi(t,6);break;default:hi(t,2)}}}function K1(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function hi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=at(t.kb,t);n||(n=new wi("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||yc(n,"https"),vh(n)),LO(n.toString(),r)}else mt(2);t.G=0,t.l&&t.l.va(e),H1(t),z1(t)}M.kb=function(t){t?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function H1(t){if(t.G=0,t.la=[],t.l){const e=O1(t.h);(e.length!=0||t.i.length!=0)&&(aw(t.la,e),aw(t.la,t.i),t.h.i.length=0,tg(t.i),t.i.length=0),t.l.ua()}}function Q1(t,e,n){var r=n instanceof wi?qn(n):new wi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),vc(r,r.m);else{var i=z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new wi(null,void 0);r&&yc(s,r),e&&(s.g=e),i&&vc(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&he(r,n,e),he(r,"VER",t.ma),_u(t,r),r}function Y1(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ie(new wu({jb:!0})):new Ie(t.ra),e.Ka(t.H),e}function X1(){}M=X1.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Ra=function(){};function Ic(){if(Vs&&!(10<=Number(rO)))throw Error("Environmental error: no available transport.")}Ic.prototype.g=function(t,e){return new Ft(t,e)};function Ft(t,e){je.call(this),this.g=new B1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!pc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!pc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new uo(this)}nt(Ft,je);Ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;mt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Q1(t,null,t.V),Eh(t)};Ft.prototype.close=function(){vg(this.g)};Ft.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ug(t),t=n);e.i.push(new RO(e.ab++,t)),e.G==3&&Eh(e)};Ft.prototype.M=function(){this.g.l=null,delete this.j,vg(this.g),delete this.g,Ft.X.M.call(this)};function J1(t){dg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nt(J1,dg);function Z1(){fg.call(this),this.status=1}nt(Z1,fg);function uo(t){this.g=t}nt(uo,X1);uo.prototype.xa=function(){Je(this.g,"a")};uo.prototype.wa=function(t){Je(this.g,new J1(t))};uo.prototype.va=function(t){Je(this.g,new Z1)};uo.prototype.ua=function(){Je(this.g,"b")};Ic.prototype.createWebChannel=Ic.prototype.g;Ft.prototype.send=Ft.prototype.u;Ft.prototype.open=Ft.prototype.m;Ft.prototype.close=Ft.prototype.close;mh.NO_ERROR=0;mh.TIMEOUT=8;mh.HTTP_ERROR=6;v1.COMPLETE="complete";w1.EventType=gu;gu.OPEN="a";gu.CLOSE="b";gu.ERROR="c";gu.MESSAGE="d";je.prototype.listen=je.prototype.N;Ie.prototype.listenOnce=Ie.prototype.O;Ie.prototype.getLastError=Ie.prototype.Oa;Ie.prototype.getLastErrorCode=Ie.prototype.Ea;Ie.prototype.getStatus=Ie.prototype.aa;Ie.prototype.getResponseJson=Ie.prototype.Sa;Ie.prototype.getResponseText=Ie.prototype.fa;Ie.prototype.send=Ie.prototype.da;Ie.prototype.setWithCredentials=Ie.prototype.Ka;var BO=function(){return new Ic},zO=function(){return ph()},Ud=mh,jO=v1,qO=Gi,ww={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},WO=wu,il=w1,GO=Ie;const Iw="@firebase/firestore";/**
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
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
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
 */let lo="9.19.0";/**
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
 */const Dr=new Xc("@firebase/firestore");function hp(){return Dr.logLevel}function KO(t){Dr.setLogLevel(t)}function T(t,...e){if(Dr.logLevel<=J.DEBUG){const n=e.map(_g);Dr.debug(`Firestore (${lo}): ${t}`,...n)}}function ke(t,...e){if(Dr.logLevel<=J.ERROR){const n=e.map(_g);Dr.error(`Firestore (${lo}): ${t}`,...n)}}function Wn(t,...e){if(Dr.logLevel<=J.WARN){const n=e.map(_g);Dr.warn(`Firestore (${lo}): ${t}`,...n)}}function _g(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
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
 */function P(t="Unexpected state"){const e=`FIRESTORE (${lo}) INTERNAL ASSERTION FAILED: `+t;throw ke(e),new Error(e)}function $(t,e){t||P()}function HO(t,e){t||P()}function R(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Be{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class eS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ue.UNAUTHENTICATED))}shutdown(){}}class YO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XO{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Be;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Be,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Be)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new eS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new Ue(e)}}class JO{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ZO{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new JO(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($(typeof n.token=="string"),this.T=n.token,new eL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class tS{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=nL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function q(t,e){return t<e?-1:t>e?1:0}function Bs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function nS(t){return t+"\0"}/**
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
 */class fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new S(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new S(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new fe(0,0))}static max(){return new F(new fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ja{constructor(e,n,r){n===void 0?n=0:n>e.length&&P(),r===void 0?r=e.length-n:r>e.length-n&&P(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ja.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ja?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class X extends ja{construct(e,n,r){return new X(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new S(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new X(n)}static emptyPath(){return new X([])}}const rL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ce extends ja{construct(e,n,r){return new Ce(e,n,r)}static isValidIdentifier(e){return rL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ce(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new S(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new S(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new S(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new S(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ce(n)}static emptyPath(){return new Ce([])}}/**
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
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(X.fromString(e))}static fromName(e){return new x(X.fromString(e).popFirst(5))}static empty(){return new x(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return X.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new X(e.slice()))}}/**
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
 */class rS{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function dp(t){return t.fields.find(e=>e.kind===2)}function ei(t){return t.fields.filter(e=>e.kind!==2)}rS.UNKNOWN_ID=-1;class iL{constructor(e,n){this.fieldPath=e,this.kind=n}}class _c{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new _c(0,Ut.min())}}function iS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new Ut(i,x.empty(),e)}function sS(t){return new Ut(t.readTime,t.key,-1)}class Ut{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ut(F.min(),x.empty(),-1)}static max(){return new Ut(F.max(),x.empty(),-1)}}function Eg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=x.comparator(t.documentKey,e.documentKey),n!==0?n:q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qr(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==oS)throw t;T("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&P(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Sh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.R=new Be,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{n.error?this.R.reject(new aa(e,n.error)):this.R.resolve()},this.transaction.onerror=r=>{const i=Sg(r.target.error);this.R.reject(new aa(e,i))}}static open(e,n,r,i){try{return new Sh(n,e.transaction(i,r))}catch(s){throw new aa(n,s)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(T("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new oL(n)}}class tn{constructor(e,n,r){this.name=e,this.version=n,this.V=r,tn.S(ye())===12.2&&ke("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return T("SimpleDb","Removing database:",e),ti(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!xa())return!1;if(tn.C())return!0;const e=ye(),n=tn.S(e),r=0<n&&n<10,i=tn.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static O(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(T("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new aa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new S(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new S(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new aa(e,o))},i.onupgradeneeded=s=>{T("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.M(o,i.transaction,s.oldVersion,this.version).next(()=>{T("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Sh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.P(),l)).catch(l=>(a.abort(l),w.reject(l))).toPromise();return u.catch(()=>{}),await a.v,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(T("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class sL{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return ti(this.L.delete())}}class aa extends S{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Wr(t){return t.name==="IndexedDbTransactionError"}class oL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(T("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(T("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ti(r)}add(e){return T("SimpleDb","ADD",this.store.name,e,e),ti(this.store.add(e))}get(e){return ti(this.store.get(e)).next(n=>(n===void 0&&(n=null),T("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return T("SimpleDb","DELETE",this.store.name,e),ti(this.store.delete(e))}count(){return T("SimpleDb","COUNT",this.store.name),ti(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){T("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}X(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=Sg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new sL(a),l=n(a.primaryKey,a.value,u);if(l instanceof w){const c=l.catch(h=>(u.done(),w.reject(h)));r.push(c)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ti(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Sg(r.target.error);n(i)}})}let _w=!1;function Sg(t){const e=tn.S(ye());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new S("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return _w||(_w=!0,setTimeout(()=>{throw r},0)),r}}return t}class aL{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){T("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{T("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){Wr(n)?T("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await qr(n)}await this.et(6e4)})}}class uL{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return T("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(T("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=sS(s);Eg(o,r)>0&&(r=o)}),new Ut(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}kt.ct=-1;function Eu(t){return t==null}function qa(t){return t===0&&1/t==-1/0}function uS(t){return typeof t=="number"&&Number.isInteger(t)&&!qa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function vt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ew(e)),e=lL(t.get(n),e);return Ew(e)}function lL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Ew(t){return t+""}function yn(t){const e=t.length;if($(e>=2),e===2)return $(t.charAt(0)===""&&t.charAt(1)===""),X.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&P(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:P()}s=o+2}return new X(r)}/**
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
 */const Sw=["userId","batchId"];/**
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
 */function Al(t,e){return[t,vt(e)]}function lS(t,e,n){return[t,vt(e),n]}const cL={},hL=["prefixPath","collectionGroup","readTime","documentId"],dL=["prefixPath","collectionGroup","documentId"],fL=["collectionGroup","readTime","prefixPath","documentId"],pL=["canonicalId","targetId"],mL=["targetId","path"],gL=["path","targetId"],yL=["collectionId","parent"],vL=["indexId","uid"],wL=["uid","sequenceNumber"],IL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],_L=["indexId","uid","orderedDocumentKey"],EL=["userId","collectionPath","documentId"],SL=["userId","collectionPath","largestBatchId"],TL=["userId","collectionGroup","largestBatchId"],cS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],kL=[...cS,"documentOverlays"],hS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],dS=hS,CL=[...dS,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp extends aS{constructor(e,n){super(),this.at=e,this.currentSequenceNumber=n}}function We(t,e){const n=R(t);return tn.O(n.at,e)}/**
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
 */function Tw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class _e{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sl(this.root,e,this.comparator,!0)}}class sl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw P();const e=this.left.check();if(e!==this.right.check())throw P();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw P()}get value(){throw P()}get color(){throw P()}get left(){throw P()}get right(){throw P()}copy(t,e,n,r,i){return this}insert(t,e,n){return new He(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ie{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kw(this.data.getIterator())}getIteratorFrom(e){return new kw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ie)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ie(this.comparator);return n.data=e,n}}class kw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function es(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(Ce.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new ie(Ce.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new NL("Invalid base64 string: "+i):i}}(e);return new Pe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Pe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const DL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(t){if($(!!t),typeof t=="string"){let e=0;const n=DL.exec(t);if($(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xi(t){return typeof t=="string"?Pe.fromBase64String(t):Pe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pS(t){const e=t.mapValue.fields.__previous_value__;return Tg(e)?pS(e):e}function Wa(t){const e=xr(t.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class xL{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Rr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Rr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Dl={nullValue:"NULL_VALUE"};function Ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tg(t)?4:mS(t)?9007199254740991:10:P()}function Cn(t,e){if(t===e)return!0;const n=Ri(t);if(n!==Ri(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wa(t).isEqual(Wa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=xr(r.timestampValue),o=xr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return xi(r.bytesValue).isEqual(xi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return we(r.geoPointValue.latitude)===we(i.geoPointValue.latitude)&&we(r.geoPointValue.longitude)===we(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return we(r.integerValue)===we(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=we(r.doubleValue),o=we(i.doubleValue);return s===o?qa(s)===qa(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Bs(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Tw(s)!==Tw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Cn(s[a],o[a])))return!1;return!0}(t,e);default:return P()}}function Ga(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function br(t,e){if(t===e)return 0;const n=Ri(t),r=Ri(e);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=we(i.integerValue||i.doubleValue),a=we(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Cw(t.timestampValue,e.timestampValue);case 4:return Cw(Wa(t),Wa(e));case 5:return q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=xi(i),a=xi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=q(o[u],a[u]);if(l!==0)return l}return q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=q(we(i.latitude),we(s.latitude));return o!==0?o:q(we(i.longitude),we(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=br(o[u],a[u]);if(l)return l}return q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===fr.mapValue&&s===fr.mapValue)return 0;if(i===fr.mapValue)return 1;if(s===fr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=q(a[c],l[c]);if(h!==0)return h;const d=br(o[a[c]],u[l[c]]);if(d!==0)return d}return q(a.length,l.length)}(t.mapValue,e.mapValue);default:throw P()}}function Cw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return q(t,e);const n=xr(t),r=xr(e),i=q(n.seconds,r.seconds);return i!==0?i:q(n.nanos,r.nanos)}function zs(t){return pp(t)}function pp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=xr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?xi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,x.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=pp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${pp(r.fields[a])}`;return s+"}"}(t.mapValue):P();var e,n}function bi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mp(t){return!!t&&"integerValue"in t}function Ka(t){return!!t&&"arrayValue"in t}function Nw(t){return!!t&&"nullValue"in t}function Aw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xl(t){return!!t&&"mapValue"in t}function ua(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ua(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ua(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function RL(t){return"nullValue"in t?Dl:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?bi(Rr.empty(),x.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:P()}function bL(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?bi(Rr.empty(),x.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?fr:P()}function Dw(t,e){const n=br(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function xw(t,e){const n=br(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Qe{constructor(e){this.value=e}static empty(){return new Qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ua(n)}setAll(e){let n=Ce.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ua(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Qe(ua(this.value))}}function gS(t){const e=[];return Ki(t.fields,(n,r)=>{const i=new Ce([n]);if(xl(r)){const s=gS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ct(e)}/**
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
 */class ae{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ae(e,0,F.min(),F.min(),F.min(),Qe.empty(),0)}static newFoundDocument(e,n,r,i){return new ae(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new ae(e,2,n,F.min(),F.min(),Qe.empty(),0)}static newUnknownDocument(e,n){return new ae(e,3,n,F.min(),F.min(),Qe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pr{constructor(e,n){this.position=e,this.inclusive=n}}function Rw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),n.key):r=br(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class As{constructor(e,n="asc"){this.field=e,this.dir=n}}function PL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class yS{}class H extends yS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OL(e,n,r):n==="array-contains"?new $L(e,r):n==="in"?new SS(e,r):n==="not-in"?new FL(e,r):n==="array-contains-any"?new UL(e,r):new H(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new LL(e,r):new ML(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(br(n,this.value)):n!==null&&Ri(this.value)===Ri(n)&&this.matchesComparison(br(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return P()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ne extends yS{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ne(e,n)}matches(e){return js(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function js(t){return t.op==="and"}function gp(t){return t.op==="or"}function kg(t){return vS(t)&&js(t)}function vS(t){for(const e of t.filters)if(e instanceof ne)return!1;return!0}function yp(t){if(t instanceof H)return t.field.canonicalString()+t.op.toString()+zs(t.value);if(kg(t))return t.filters.map(e=>yp(e)).join(",");{const e=t.filters.map(n=>yp(n)).join(",");return`${t.op}(${e})`}}function wS(t,e){return t instanceof H?function(n,r){return r instanceof H&&n.op===r.op&&n.field.isEqual(r.field)&&Cn(n.value,r.value)}(t,e):t instanceof ne?function(n,r){return r instanceof ne&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&wS(s,r.filters[o]),!0):!1}(t,e):void P()}function IS(t,e){const n=t.filters.concat(e);return ne.create(n,t.op)}function _S(t){return t instanceof H?function(e){return`${e.field.canonicalString()} ${e.op} ${zs(e.value)}`}(t):t instanceof ne?function(e){return e.op.toString()+" {"+e.getFilters().map(_S).join(" ,")+"}"}(t):"Filter"}class OL extends H{constructor(e,n,r){super(e,n,r),this.key=x.fromName(r.referenceValue)}matches(e){const n=x.comparator(e.key,this.key);return this.matchesComparison(n)}}class LL extends H{constructor(e,n){super(e,"in",n),this.keys=ES("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ML extends H{constructor(e,n){super(e,"not-in",n),this.keys=ES("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ES(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>x.fromName(r.referenceValue))}class $L extends H{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ka(n)&&Ga(n.arrayValue,this.value)}}class SS extends H{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ga(this.value.arrayValue,n)}}class FL extends H{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ga(this.value.arrayValue,n)}}class UL extends H{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ka(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ga(this.value.arrayValue,r))}}/**
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
 */class VL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function vp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new VL(t,e,n,r,i,s,o)}function Pi(t){const e=R(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Eu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zs(r)).join(",")),e.ft=n}return e.ft}function Su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bw(t.startAt,e.startAt)&&bw(t.endAt,e.endAt)}function Ec(t){return x.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Sc(t,e){return t.filters.filter(n=>n instanceof H&&n.field.isEqual(e))}function Pw(t,e,n){let r=Dl,i=!0;for(const s of Sc(t,e)){let o=Dl,a=!0;switch(s.op){case"<":case"<=":o=RL(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Dl}Dw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Dw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Ow(t,e,n){let r=fr,i=!0;for(const s of Sc(t,e)){let o=fr,a=!0;switch(s.op){case">=":case">":o=bL(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=fr}xw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];xw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Yn{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this.wt=null,this.startAt,this.endAt}}function TS(t,e,n,r,i,s,o,a){return new Yn(t,e,n,r,i,s,o,a)}function co(t){return new Yn(t)}function Lw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Cg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Th(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Ng(t){return t.collectionGroup!==null}function Ii(t){const e=R(t);if(e.dt===null){e.dt=[];const n=Th(e),r=Cg(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new As(n)),e.dt.push(new As(Ce.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new As(Ce.keyField(),s))}}}return e.dt}function Rt(t){const e=R(t);if(!e.wt)if(e.limitType==="F")e.wt=vp(e.path,e.collectionGroup,Ii(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ii(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new As(s.field,o))}const r=e.endAt?new Pr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Pr(e.startAt.position,e.startAt.inclusive):null;e.wt=vp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function wp(t,e){e.getFirstInequalityField(),Th(t);const n=t.filters.concat([e]);return new Yn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Tc(t,e,n){return new Yn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Tu(t,e){return Su(Rt(t),Rt(e))&&t.limitType===e.limitType}function kS(t){return`${Pi(Rt(t))}|lt:${t.limitType}`}function Ip(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>_S(r)).join(", ")}]`),Eu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zs(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zs(r)).join(",")),`Target(${n})`}(Rt(t))}; limitType=${t.limitType})`}function ku(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):x.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ii(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Rw(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ii(n),r)||n.endAt&&!function(i,s,o){const a=Rw(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ii(n),r))}(t,e)}function CS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function NS(t){return(e,n)=>{let r=!1;for(const i of Ii(t)){const s=BL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function BL(t,e,n){const r=t.field.isKeyField()?x.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?br(a,u):P()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return P()}}/**
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
 */class Gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return fS(this.inner)}size(){return this.innerSize}}/**
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
 */const zL=new _e(x.comparator);function Nt(){return zL}const AS=new _e(x.comparator);function qo(...t){let e=AS;for(const n of t)e=e.insert(n.key,n);return e}function DS(t){let e=AS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vn(){return la()}function xS(){return la()}function la(){return new Gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const jL=new _e(x.comparator),qL=new ie(x.comparator);function W(...t){let e=qL;for(const n of t)e=e.add(n);return e}const WL=new ie(q);function kh(){return WL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qa(e)?"-0":e}}function bS(t){return{integerValue:""+t}}function PS(t,e){return uS(e)?bS(e):RS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(){this._=void 0}}function GL(t,e,n){return t instanceof qs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Oi?LS(t,e):t instanceof Li?MS(t,e):function(r,i){const s=OS(r,i),o=Mw(s)+Mw(r._t);return mp(s)&&mp(r._t)?bS(o):RS(r.serializer,o)}(t,e)}function KL(t,e,n){return t instanceof Oi?LS(t,e):t instanceof Li?MS(t,e):n}function OS(t,e){return t instanceof Ws?mp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class qs extends Ch{}class Oi extends Ch{constructor(e){super(),this.elements=e}}function LS(t,e){const n=$S(e);for(const r of t.elements)n.some(i=>Cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Li extends Ch{constructor(e){super(),this.elements=e}}function MS(t,e){let n=$S(e);for(const r of t.elements)n=n.filter(i=>!Cn(i,r));return{arrayValue:{values:n}}}class Ws extends Ch{constructor(e,n){super(),this.serializer=e,this._t=n}}function Mw(t){return we(t.integerValue||t.doubleValue)}function $S(t){return Ka(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Cu{constructor(e,n){this.field=e,this.transform=n}}function HL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Oi&&r instanceof Oi||n instanceof Li&&r instanceof Li?Bs(n.elements,r.elements,Cn):n instanceof Ws&&r instanceof Ws?Cn(n._t,r._t):n instanceof qs&&r instanceof qs}(t.transform,e.transform)}class QL{constructor(e,n){this.version=e,this.transformResults=n}}class de{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new de}static exists(e){return new de(void 0,e)}static updateTime(e){return new de(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nh{}function FS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fo(t.key,de.none()):new ho(t.key,t.data,de.none());{const n=t.data,r=Qe.empty();let i=new ie(Ce.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xn(t.key,r,new Ct(i.toArray()),de.none())}}function YL(t,e,n){t instanceof ho?function(r,i,s){const o=r.value.clone(),a=Fw(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Xn?function(r,i,s){if(!Rl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Fw(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(US(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ca(t,e,n,r){return t instanceof ho?function(i,s,o,a){if(!Rl(i.precondition,s))return o;const u=i.value.clone(),l=Uw(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xn?function(i,s,o,a){if(!Rl(i.precondition,s))return o;const u=Uw(i.fieldTransforms,a,s),l=s.data;return l.setAll(US(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Rl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function XL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=OS(r.transform,i||null);s!=null&&(n===null&&(n=Qe.empty()),n.set(r.field,s))}return n||null}function $w(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Bs(n,r,(i,s)=>HL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ho extends Nh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xn extends Nh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function US(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fw(t,e,n){const r=new Map;$(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,KL(o,a,n[i]))}return r}function Uw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,GL(s,o,e))}return r}class fo extends Nh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ag extends Nh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Dg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&YL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ca(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ca(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=FS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&Bs(this.mutations,e.mutations,(n,r)=>$w(n,r))&&Bs(this.baseMutations,e.baseMutations,(n,r)=>$w(n,r))}}class xg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){$(e.mutations.length===r.length);let i=jL;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new xg(e,n,r,i)}}/**
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
 */class Rg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class JL{constructor(e){this.count=e}}/**
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
 */var Ae,Y;function VS(t){switch(t){default:return P();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function BS(t){if(t===void 0)return ke("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ae.OK:return I.OK;case Ae.CANCELLED:return I.CANCELLED;case Ae.UNKNOWN:return I.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return I.INTERNAL;case Ae.UNAVAILABLE:return I.UNAVAILABLE;case Ae.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ae.NOT_FOUND:return I.NOT_FOUND;case Ae.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ae.ABORTED:return I.ABORTED;case Ae.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ae.DATA_LOSS:return I.DATA_LOSS;default:return P()}}(Y=Ae||(Ae={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ol}static getOrCreateInstance(){return ol===null&&(ol=new bg),ol}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ol=null;/**
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
 */class Nu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Au.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Nu(F.min(),i,kh(),Nt(),W())}}class Au{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Au(r,n,W(),W(),W())}}/**
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
 */class bl{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class zS{constructor(e,n){this.targetId=e,this.Et=n}}class jS{constructor(e,n,r=Pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Vw{constructor(){this.At=0,this.Rt=zw(),this.vt=Pe.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=W(),n=W(),r=W();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:P()}}),new Au(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=zw()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class ZL{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Nt(),this.qt=Bw(),this.Ut=new ie(q)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:P()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(Ec(o))if(i===0){const a=new x(o.path);this.Qt(r,a,ae.newNoDocument(a,F.min()))}else $(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=bg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Ec(a.target)){const u=new x(a.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,ae.newNoDocument(u,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=W();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Yt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Nu(e,n,this.Ut,this.Lt,r);return this.Lt=Nt(),this.qt=Bw(),this.Ut=new ie(q),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Vw,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ie(q),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||T("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Vw),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Bw(){return new _e(x.comparator)}function zw(){return new _e(x.comparator)}/**
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
 */const eM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),tM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),nM=(()=>({and:"AND",or:"OR"}))();class rM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iM(t,e){return Gs(t,e.toTimestamp())}function Ne(t){return $(!!t),F.fromTimestamp(function(e){const n=xr(e);return new fe(n.seconds,n.nanos)}(t))}function Pg(t,e){return function(n){return new X(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function WS(t){const e=X.fromString(t);return $(eT(e)),e}function Ha(t,e){return Pg(t.databaseId,e.path)}function En(t,e){const n=WS(e);if(n.get(1)!==t.databaseId.projectId)throw new S(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new S(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new x(KS(n))}function _p(t,e){return Pg(t.databaseId,e)}function GS(t){const e=WS(t);return e.length===4?X.emptyPath():KS(e)}function Qa(t){return new X(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KS(t){return $(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jw(t,e,n){return{name:Ha(t,e),fields:n.value.mapValue.fields}}function HS(t,e,n){const r=En(t,e.name),i=Ne(e.updateTime),s=e.createTime?Ne(e.createTime):F.min(),o=new Qe({mapValue:{fields:e.fields}}),a=ae.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function sM(t,e){return"found"in e?function(n,r){$(!!r.found),r.found.name,r.found.updateTime;const i=En(n,r.found.name),s=Ne(r.found.updateTime),o=r.found.createTime?Ne(r.found.createTime):F.min(),a=new Qe({mapValue:{fields:r.found.fields}});return ae.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){$(!!r.missing),$(!!r.readTime);const i=En(n,r.missing),s=Ne(r.readTime);return ae.newNoDocument(i,s)}(t,e):P()}function oM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:P()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?($(l===void 0||typeof l=="string"),Pe.fromBase64String(l||"")):($(l===void 0||l instanceof Uint8Array),Pe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?I.UNKNOWN:BS(u.code);return new S(l,u.message||"")}(o);n=new jS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=En(t,r.document.name),s=Ne(r.document.updateTime),o=r.document.createTime?Ne(r.document.createTime):F.min(),a=new Qe({mapValue:{fields:r.document.fields}}),u=ae.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new bl(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=En(t,r.document),s=r.readTime?Ne(r.readTime):F.min(),o=ae.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=En(t,r.document),s=r.removedTargetIds||[];n=new bl([],s,i,null)}else{if(!("filter"in e))return P();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new JL(i),o=r.targetId;n=new zS(o,s)}}return n}function Ya(t,e){let n;if(e instanceof ho)n={update:jw(t,e.key,e.value)};else if(e instanceof fo)n={delete:Ha(t,e.key)};else if(e instanceof Xn)n={update:jw(t,e.key,e.data),updateMask:dM(e.fieldMask)};else{if(!(e instanceof Ag))return P();n={verify:Ha(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof qs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Oi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Li)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ws)return{fieldPath:s.field.canonicalString(),increment:o._t};throw P()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:iM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:P()}(t,e.precondition)),n}function Ep(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?de.updateTime(Ne(i.updateTime)):i.exists!==void 0?de.exists(i.exists):de.none()}(e.currentDocument):de.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)$(o.setToServerValue==="REQUEST_TIME"),a=new qs;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Oi(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Li(l)}else"increment"in o?a=new Ws(s,o.increment):P();const u=Ce.fromServerFormat(o.fieldPath);return new Cu(u,a)}(t,i)):[];if(e.update){e.update.name;const i=En(t,e.update.name),s=new Qe({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Ct(u.map(l=>Ce.fromServerFormat(l)))}(e.updateMask);return new Xn(i,s,o,n,r)}return new ho(i,s,n,r)}if(e.delete){const i=En(t,e.delete);return new fo(i,n)}if(e.verify){const i=En(t,e.verify);return new Ag(i,n)}return P()}function aM(t,e){return t&&t.length>0?($(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ne(r.updateTime):Ne(i);return s.isEqual(F.min())&&(s=Ne(i)),new QL(s,r.transformResults||[])}(n,e))):[]}function QS(t,e){return{documents:[_p(t,e.path)]}}function YS(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=_p(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_p(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return ZS(ne.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:ns(c.field),direction:lM(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.useProto3Json||Eu(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function XS(t){let e=GS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){$(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=JS(c);return h instanceof ne&&kg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new As(rs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Eu(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new Pr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new Pr(d,h)}(n.endAt)),TS(e,i,o,s,a,"F",u,l)}function uM(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return P()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function JS(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=rs(e.unaryFilter.field);return H.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=rs(e.unaryFilter.field);return H.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=rs(e.unaryFilter.field);return H.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=rs(e.unaryFilter.field);return H.create(s,"!=",{nullValue:"NULL_VALUE"});default:return P()}}(t):t.fieldFilter!==void 0?function(e){return H.create(rs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return P()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ne.create(e.compositeFilter.filters.map(n=>JS(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return P()}}(e.compositeFilter.op))}(t):P()}function lM(t){return eM[t]}function cM(t){return tM[t]}function hM(t){return nM[t]}function ns(t){return{fieldPath:t.canonicalString()}}function rs(t){return Ce.fromServerFormat(t.fieldPath)}function ZS(t){return t instanceof H?function(e){if(e.op==="=="){if(Aw(e.value))return{unaryFilter:{field:ns(e.field),op:"IS_NAN"}};if(Nw(e.value))return{unaryFilter:{field:ns(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Aw(e.value))return{unaryFilter:{field:ns(e.field),op:"IS_NOT_NAN"}};if(Nw(e.value))return{unaryFilter:{field:ns(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ns(e.field),op:cM(e.op),value:e.value}}}(t):t instanceof ne?function(e){const n=e.getFilters().map(r=>ZS(r));return n.length===1?n[0]:{compositeFilter:{op:hM(e.op),filters:n}}}(t):P()}function dM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Sr{constructor(e,n,r,i,s=F.min(),o=F.min(),a=Pe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class tT{constructor(e){this.se=e}}function fM(t,e){let n;if(e.document)n=HS(t.se,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=x.fromSegments(e.noDocument.path),i=$i(e.noDocument.readTime);n=ae.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return P();{const r=x.fromSegments(e.unknownDocument.path),i=$i(e.unknownDocument.version);n=ae.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new fe(r[0],r[1]);return F.fromTimestamp(i)}(e.readTime)),n}function qw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:kc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Ha(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Gs(i,s.version.toTimestamp()),createTime:Gs(i,s.createTime.toTimestamp())}}(t.se,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Mi(e.version)};else{if(!e.isUnknownDocument())return P();r.unknownDocument={path:n.path.toArray(),version:Mi(e.version)}}return r}function kc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Mi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function $i(t){const e=new fe(t.seconds,t.nanoseconds);return F.fromTimestamp(e)}function ni(t,e){const n=(e.baseMutations||[]).map(s=>Ep(t.se,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Ep(t.se,s)),i=fe.fromMillis(e.localWriteTimeMs);return new Dg(e.batchId,i,n,r)}function Wo(t){const e=$i(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?$i(t.lastLimboFreeSnapshotVersion):F.min();let r;var i;return t.query.documents!==void 0?($((i=t.query).documents.length===1),r=Rt(co(GS(i.documents[0])))):r=function(s){return Rt(XS(s))}(t.query),new Sr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Pe.fromBase64String(t.resumeToken))}function nT(t,e){const n=Mi(e.snapshotVersion),r=Mi(e.lastLimboFreeSnapshotVersion);let i;i=Ec(e.target)?QS(t.se,e.target):YS(t.se,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Pi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Og(t){const e=XS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Tc(e,e.limit,"L"):e}function Vd(t,e){return new Rg(e.largestBatchId,Ep(t.se,e.overlayMutation))}function Ww(t,e){const n=e.path.lastSegment();return[t,vt(e.path.popLast()),n]}function Gw(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Mi(r.readTime),documentKey:vt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{getBundleMetadata(e,n){return Kw(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:$i(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return Kw(e).put({bundleId:(r=n).id,createTime:Mi(Ne(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return Hw(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Og(i.bundledQuery),readTime:$i(i.readTime)};var i})}saveNamedQuery(e,n){return Hw(e).put(function(r){return{name:r.name,readTime:Mi(Ne(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function Kw(t){return We(t,"bundles")}function Hw(t){return We(t,"namedQueries")}/**
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
 */class Ah{constructor(e,n){this.serializer=e,this.userId=n}static ie(e,n){const r=n.uid||"";return new Ah(e,r)}getOverlay(e,n){return xo(e).get(Ww(this.userId,n)).next(r=>r?Vd(this.serializer,r):null)}getOverlays(e,n){const r=vn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Rg(n,o);i.push(this.re(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(vt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(xo(e).J("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=vn(),s=vt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return xo(e).j("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=Vd(this.serializer,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=vn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return xo(e).Z({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const h=Vd(this.serializer,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}re(e,n){return xo(e).put(function(r,i,s){const[o,a,u]=Ww(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:u,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Ya(r.se,s.mutation)}}(this.serializer,this.userId,n))}}function xo(t){return We(t,"documentOverlays")}/**
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
 */class ri{constructor(){}oe(e,n){this.ue(e,n),n.ce()}ue(e,n){if("nullValue"in e)this.ae(n,5);else if("booleanValue"in e)this.ae(n,10),n.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(n,15),n.he(we(e.integerValue));else if("doubleValue"in e){const r=we(e.doubleValue);isNaN(r)?this.ae(n,13):(this.ae(n,15),qa(r)?n.he(0):n.he(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ae(n,20),typeof r=="string"?n.le(r):(n.le(`${r.seconds||""}`),n.he(r.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,n),this.de(n);else if("bytesValue"in e)this.ae(n,30),n.we(xi(e.bytesValue)),this.de(n);else if("referenceValue"in e)this._e(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ae(n,45),n.he(r.latitude||0),n.he(r.longitude||0)}else"mapValue"in e?mS(e)?this.ae(n,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,n),this.de(n)):"arrayValue"in e?(this.ge(e.arrayValue,n),this.de(n)):P()}fe(e,n){this.ae(n,25),this.ye(e,n)}ye(e,n){n.le(e)}me(e,n){const r=e.fields||{};this.ae(n,55);for(const i of Object.keys(r))this.fe(i,n),this.ue(r[i],n)}ge(e,n){const r=e.values||[];this.ae(n,50);for(const i of r)this.ue(i,n)}_e(e,n){this.ae(n,37),x.fromName(e).path.forEach(r=>{this.ae(n,60),this.ye(r,n)})}ae(e,n){e.he(n)}de(e){e.he(2)}}ri.pe=new ri;function mM(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Qw(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=mM(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class gM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ie(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Te(r.value),r=n.next();this.Ee()}Ae(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Re(r.value),r=n.next();this.ve()}be(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Te(r);else if(r<2048)this.Te(960|r>>>6),this.Te(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Te(480|r>>>12),this.Te(128|63&r>>>6),this.Te(128|63&r);else{const i=n.codePointAt(0);this.Te(240|i>>>18),this.Te(128|63&i>>>12),this.Te(128|63&i>>>6),this.Te(128|63&i)}}this.Ee()}Pe(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Re(r);else if(r<2048)this.Re(960|r>>>6),this.Re(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Re(480|r>>>12),this.Re(128|63&r>>>6),this.Re(128|63&r);else{const i=n.codePointAt(0);this.Re(240|i>>>18),this.Re(128|63&i>>>12),this.Re(128|63&i>>>6),this.Re(128|63&i)}}this.ve()}Ve(e){const n=this.Se(e),r=Qw(n);this.De(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Ce(e){const n=this.Se(e),r=Qw(n);this.De(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}xe(){this.Ne(255),this.Ne(255)}ke(){this.Oe(255),this.Oe(255)}reset(){this.position=0}seed(e){this.De(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Se(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Te(e){const n=255&e;n===0?(this.Ne(0),this.Ne(255)):n===255?(this.Ne(255),this.Ne(0)):this.Ne(n)}Re(e){const n=255&e;n===0?(this.Oe(0),this.Oe(255)):n===255?(this.Oe(255),this.Oe(0)):this.Oe(e)}Ee(){this.Ne(0),this.Ne(1)}ve(){this.Oe(0),this.Oe(1)}Ne(e){this.De(1),this.buffer[this.position++]=e}Oe(e){this.De(1),this.buffer[this.position++]=~e}De(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class yM{constructor(e){this.Me=e}we(e){this.Me.Ie(e)}le(e){this.Me.be(e)}he(e){this.Me.Ve(e)}ce(){this.Me.xe()}}class vM{constructor(e){this.Me=e}we(e){this.Me.Ae(e)}le(e){this.Me.Pe(e)}he(e){this.Me.Ce(e)}ce(){this.Me.ke()}}class Ro{constructor(){this.Me=new gM,this.Fe=new yM(this.Me),this.Be=new vM(this.Me)}seed(e){this.Me.seed(e)}Le(e){return e===0?this.Fe:this.Be}$e(){return this.Me.$e()}reset(){this.Me.reset()}}/**
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
 */class ii{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}qe(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ii(this.indexId,this.documentKey,this.arrayValue,r)}}function tr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Yw(t.arrayValue,e.arrayValue),n!==0?n:(n=Yw(t.directionalValue,e.directionalValue),n!==0?n:x.comparator(t.documentKey,e.documentKey)))}function Yw(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class wM{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.Ke=[];for(const n of e.filters){const r=n;r.isInequality()?this.Ge=r:this.Ke.push(r)}}Qe(e){$(e.collectionGroup===this.collectionId);const n=dp(e);if(n!==void 0&&!this.ze(n))return!1;const r=ei(e);let i=0,s=0;for(;i<r.length&&this.ze(r[i]);++i);if(i===r.length)return!0;if(this.Ge!==void 0){const o=r[i];if(!this.je(this.Ge,o)||!this.We(this.Ue[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ue.length||!this.We(this.Ue[s++],o))return!1}return!0}ze(e){for(const n of this.Ke)if(this.je(n,e))return!0;return!1}je(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}We(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function rT(t){var e,n;if($(t instanceof H||t instanceof ne),t instanceof H){if(t instanceof SS){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>H.create(t.field,"==",s)))||[];return ne.create(i,"or")}return t}const r=t.filters.map(i=>rT(i));return ne.create(r,t.op)}function IM(t){if(t.getFilters().length===0)return[];const e=kp(rT(t));return $(iT(e)),Sp(e)||Tp(e)?[e]:e.getFilters()}function Sp(t){return t instanceof H}function Tp(t){return t instanceof ne&&kg(t)}function iT(t){return Sp(t)||Tp(t)||function(e){if(e instanceof ne&&gp(e)){for(const n of e.getFilters())if(!Sp(n)&&!Tp(n))return!1;return!0}return!1}(t)}function kp(t){if($(t instanceof H||t instanceof ne),t instanceof H)return t;if(t.filters.length===1)return kp(t.filters[0]);const e=t.filters.map(r=>kp(r));let n=ne.create(e,t.op);return n=Cc(n),iT(n)?n:($(n instanceof ne),$(js(n)),$(n.filters.length>1),n.filters.reduce((r,i)=>Lg(r,i)))}function Lg(t,e){let n;return $(t instanceof H||t instanceof ne),$(e instanceof H||e instanceof ne),n=t instanceof H?e instanceof H?function(r,i){return ne.create([r,i],"and")}(t,e):Xw(t,e):e instanceof H?Xw(e,t):function(r,i){if($(r.filters.length>0&&i.filters.length>0),js(r)&&js(i))return IS(r,i.getFilters());const s=gp(r)?r:i,o=gp(r)?i:r,a=s.filters.map(u=>Lg(u,o));return ne.create(a,"or")}(t,e),Cc(n)}function Xw(t,e){if(js(e))return IS(e,t.getFilters());{const n=e.filters.map(r=>Lg(t,r));return ne.create(n,"or")}}function Cc(t){if($(t instanceof H||t instanceof ne),t instanceof H)return t;const e=t.getFilters();if(e.length===1)return Cc(e[0]);if(vS(t))return t;const n=e.map(i=>Cc(i)),r=[];return n.forEach(i=>{i instanceof H?r.push(i):i instanceof ne&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ne.create(r,t.op)}/**
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
 */class _M{constructor(){this.He=new Mg}addToCollectionParentIndex(e,n){return this.He.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Ut.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class Mg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ie(X.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ie(X.comparator)).toArray()}}/**
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
 */const al=new Uint8Array(0);class EM{constructor(e,n){this.user=e,this.databaseId=n,this.Je=new Mg,this.Ye=new Gr(r=>Pi(r),(r,i)=>Su(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Je.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Je.add(n)});const s={collectionId:r,parent:vt(i)};return Jw(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[nS(n),""],!1,!0);return Jw(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(yn(o.parent))}return r})}addFieldIndex(e,n){const r=ul(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Po(e);return s.next(a=>{o.put(Gw(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=ul(e),i=Po(e),s=bo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=bo(e);let i=!0;const s=new Map;return w.forEach(this.Ze(n),o=>this.Xe(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=W();const a=[];return w.forEach(s,(u,l)=>{var c;T("IndexedDbIndexManager",`Using index ${c=u,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(p=>`${p.fieldPath}:${p.kind}`).join(",")}`} to execute ${Pi(n)}`);const h=function(p,_){const E=dp(_);if(E===void 0)return null;for(const k of Sc(p,E.fieldPath))switch(k.op){case"array-contains-any":return k.value.arrayValue.values||[];case"array-contains":return[k.value]}return null}(l,u),d=function(p,_){const E=new Map;for(const k of ei(_))for(const A of Sc(p,k.fieldPath))switch(A.op){case"==":case"in":E.set(k.fieldPath.canonicalString(),A.value);break;case"not-in":case"!=":return E.set(k.fieldPath.canonicalString(),A.value),Array.from(E.values())}return null}(l,u),m=function(p,_){const E=[];let k=!0;for(const A of ei(_)){const b=A.kind===0?Pw(p,A.fieldPath,p.startAt):Ow(p,A.fieldPath,p.startAt);E.push(b.value),k&&(k=b.inclusive)}return new Pr(E,k)}(l,u),y=function(p,_){const E=[];let k=!0;for(const A of ei(_)){const b=A.kind===0?Ow(p,A.fieldPath,p.endAt):Pw(p,A.fieldPath,p.endAt);E.push(b.value),k&&(k=b.inclusive)}return new Pr(E,k)}(l,u),v=this.tn(u,l,m),D=this.tn(u,l,y),g=this.en(u,l,d),f=this.nn(u.indexId,h,v,m.inclusive,D,y.inclusive,g);return w.forEach(f,p=>r.H(p,n.limit).next(_=>{_.forEach(E=>{const k=x.fromSegments(E.documentKey);o.has(k)||(o=o.add(k),a.push(k))})}))}).next(()=>a)}return w.resolve(null)})}Ze(e){let n=this.Ye.get(e);return n||(e.filters.length===0?n=[e]:n=IM(ne.create(e.filters,"and")).map(r=>vp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Ye.set(e,n),n)}nn(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let h=0;h<u;++h){const d=n?this.sn(n[h/l]):al,m=this.rn(e,d,r[h%l],i),y=this.on(e,d,s[h%l],o),v=a.map(D=>this.rn(e,d,D,!0));c.push(...this.createRange(m,y,v))}return c}rn(e,n,r,i){const s=new ii(e,x.empty(),n,r);return i?s:s.qe()}on(e,n,r,i){const s=new ii(e,x.empty(),n,r);return i?s.qe():s}Xe(e,n){const r=new wM(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.Qe(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.Ze(n);return w.forEach(i,s=>this.Xe(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let u=new ie(Ce.comparator),l=!1;for(const c of a.filters)for(const h of c.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:u=u.add(h.field));for(const c of a.orderBy)c.field.isKeyField()||(u=u.add(c.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}un(e,n){const r=new Ro;for(const i of ei(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Le(i.kind);ri.pe.oe(s,o)}return r.$e()}sn(e){const n=new Ro;return ri.pe.oe(e,n.Le(0)),n.$e()}cn(e,n){const r=new Ro;return ri.pe.oe(bi(this.databaseId,n),r.Le(function(i){const s=ei(i);return s.length===0?0:s[s.length-1].kind}(e))),r.$e()}en(e,n,r){if(r===null)return[];let i=[];i.push(new Ro);let s=0;for(const o of ei(e)){const a=r[s++];for(const u of i)if(this.an(n,o.fieldPath)&&Ka(a))i=this.hn(i,o,a);else{const l=u.Le(o.kind);ri.pe.oe(a,l)}}return this.ln(i)}tn(e,n,r){return this.en(e,n,r.position)}ln(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].$e();return n}hn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Ro;u.seed(a.$e()),ri.pe.oe(o,u.Le(n.kind)),s.push(u)}return s}an(e,n){return!!e.filters.find(r=>r instanceof H&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ul(e),i=Po(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,c){const h=c?new _c(c.sequenceNumber,new Ut($i(c.readTime),new x(yn(c.documentKey)),c.largestBatchId)):_c.empty(),d=l.fields.map(([m,y])=>new iL(Ce.fromServerFormat(m),y));return new rS(l.indexId,l.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:q(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=ul(e),s=Po(e);return this.fn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,u=>s.put(Gw(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,u=>this.dn(e,i,u).next(l=>{const c=this.wn(s,u);return l.isEqual(c)?w.resolve():this._n(e,s,u,l,c)}))))})}mn(e,n,r,i){return bo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.cn(r,n.key),documentKey:n.key.path.toArray()})}gn(e,n,r,i){return bo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.cn(r,n.key),n.key.path.toArray()])}dn(e,n,r){const i=bo(e);let s=new ie(tr);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.cn(r,n)])},(o,a)=>{s=s.add(new ii(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,n){let r=new ie(tr);const i=this.un(n,e);if(i==null)return r;const s=dp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Ka(o))for(const a of o.arrayValue.values||[])r=r.add(new ii(n.indexId,e.key,this.sn(a),i))}else r=r.add(new ii(n.indexId,e.key,al,i));return r}_n(e,n,r,i,s){T("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,u,l,c,h){const d=a.getIterator(),m=u.getIterator();let y=es(d),v=es(m);for(;y||v;){let D=!1,g=!1;if(y&&v){const f=l(y,v);f<0?g=!0:f>0&&(D=!0)}else y!=null?g=!0:D=!0;D?(c(v),v=es(m)):g?(h(y),y=es(d)):(y=es(d),v=es(m))}}(i,s,tr,a=>{o.push(this.mn(e,n,r,a))},a=>{o.push(this.gn(e,n,r,a))}),w.waitFor(o)}fn(e){let n=1;return Po(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>tr(o,a)).filter((o,a,u)=>!a||tr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=tr(o,e),u=tr(o,n);if(a===0)i[0]=e.qe();else if(a>0&&u<0)i.push(o),i.push(o.qe());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.yn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,al,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,al,[]];s.push(IDBKeyRange.bound(a,u))}return s}yn(e,n){return tr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Zw)}getMinOffset(e,n){return w.mapArray(this.Ze(n),r=>this.Xe(e,r).next(i=>i||P())).next(Zw)}}function Jw(t){return We(t,"collectionParents")}function bo(t){return We(t,"indexEntries")}function ul(t){return We(t,"indexConfiguration")}function Po(t){return We(t,"indexState")}function Zw(t){$(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Eg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Ut(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Et{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Z({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{$(a===1)}));const l=[];for(const c of n.mutations){const h=lS(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return w.waitFor(s).next(()=>l)}function Nc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw P();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(41943040,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);class Dh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.pn={}}static ie(e,n,r,i){$(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Dh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return nr(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=is(e),o=nr(e);return o.add({}).next(a=>{$(typeof a=="number");const u=new Dg(a,n,r,i),l=function(d,m,y){const v=y.baseMutations.map(g=>Ya(d.se,g)),D=y.mutations.map(g=>Ya(d.se,g));return{userId:m,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:D}}(this.serializer,this.userId,u),c=[];let h=new ie((d,m)=>q(d.canonicalString(),m.canonicalString()));for(const d of i){const m=lS(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(m,cL))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.pn[a]=u.keys()}),w.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return nr(e).get(n).next(r=>r?($(r.userId===this.userId),ni(this.serializer,r)):null)}In(e,n){return this.pn[n]?w.resolve(this.pn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.pn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return nr(e).Z({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&($(a.batchId>=r),s=ni(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return nr(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return nr(e).j("userMutationsIndex",n).next(r=>r.map(i=>ni(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Al(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return is(e).Z({range:i},(o,a,u)=>{const[l,c,h]=o,d=yn(c);if(l===this.userId&&n.path.isEqual(d))return nr(e).get(h).next(m=>{if(!m)throw P();$(m.userId===this.userId),s.push(ni(this.serializer,m))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ie(q);const i=[];return n.forEach(s=>{const o=Al(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=is(e).Z({range:a},(l,c,h)=>{const[d,m,y]=l,v=yn(m);d===this.userId&&s.path.isEqual(v)?r=r.add(y):h.done()});i.push(u)}),w.waitFor(i).next(()=>this.Tn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Al(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ie(q);return is(e).Z({range:o},(u,l,c)=>{const[h,d,m]=u,y=yn(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(m)):c.done()}).next(()=>this.Tn(e,a))}Tn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(nr(e).get(s).next(o=>{if(o===null)throw P();$(o.userId===this.userId),r.push(ni(this.serializer,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return sT(e.at,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.En(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}En(e){delete this.pn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return is(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=yn(s[1]);i.push(u)}else a.done()}).next(()=>{$(i.length===0)})})}containsKey(e,n){return oT(e,this.userId,n)}An(e){return aT(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function oT(t,e,n){const r=Al(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return is(t).Z({range:s,Y:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function nr(t){return We(t,"mutations")}function is(t){return We(t,"documentMutations")}function aT(t){return We(t,"mutationQueues")}/**
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
 */class Fi{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Fi(0)}static bn(){return new Fi(-1)}}/**
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
 */class SM{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Pn(e).next(n=>{const r=new Fi(n.highestTargetId);return n.highestTargetId=r.next(),this.Vn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Pn(e).next(n=>F.fromTimestamp(new fe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Pn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Pn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Vn(e,i)))}addTargetData(e,n){return this.Sn(e,n).next(()=>this.Pn(e).next(r=>(r.targetCount+=1,this.Dn(n,r),this.Vn(e,r))))}updateTargetData(e,n){return this.Sn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ts(e).delete(n.targetId)).next(()=>this.Pn(e)).next(r=>($(r.targetCount>0),r.targetCount-=1,this.Vn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ts(e).Z((o,a)=>{const u=Wo(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ts(e).Z((r,i)=>{const s=Wo(i);n(s)})}Pn(e){return t0(e).get("targetGlobalKey").next(n=>($(n!==null),n))}Vn(e,n){return t0(e).put("targetGlobalKey",n)}Sn(e,n){return ts(e).put(nT(this.serializer,n))}Dn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Pn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Pi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ts(e).Z({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=Wo(a);Su(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ur(e);return n.forEach(o=>{const a=vt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=ur(e);return w.forEach(n,s=>{const o=vt(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ur(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ur(e);let s=W();return i.Z({range:r,Y:!0},(o,a,u)=>{const l=yn(o[1]),c=new x(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=vt(n.path),i=IDBKeyRange.bound([r],[nS(r)],!1,!0);let s=0;return ur(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}ne(e,n){return ts(e).get(n).next(r=>r?Wo(r):null)}}function ts(t){return We(t,"targets")}function t0(t){return We(t,"targetGlobal")}function ur(t){return We(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0([t,e],[n,r]){const i=q(t,n);return i===0?q(e,r):i}class TM{constructor(e){this.Cn=e,this.buffer=new ie(n0),this.xn=0}Nn(){return++this.xn}kn(e){const n=[e,this.Nn()];if(this.buffer.size<this.Cn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();n0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.On=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.$n(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return this.On!==null}$n(e){T("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Wr(n)?T("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await qr(n)}await this.$n(3e5)})}}class CM{constructor(e,n){this.Mn=e,this.params=n}calculateTargetCount(e,n){return this.Mn.Fn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(kt.ct);const r=new TM(n);return this.Mn.forEachTarget(e,i=>r.kn(i.sequenceNumber)).next(()=>this.Mn.Bn(e,i=>r.kn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Mn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Mn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(T("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(e0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(T("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),e0):this.Ln(e,n))}getCacheSize(e){return this.Mn.getCacheSize(e)}Ln(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(T("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),hp()<=J.DEBUG&&T("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new CM(r,i)}(this,n)}Fn(e){const n=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}qn(e){let n=0;return this.Bn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Bn(e,n){return this.Un(e,(r,i)=>n(i))}addReference(e,n,r){return ll(e,r)}removeReference(e,n,r){return ll(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return ll(e,n)}Kn(e,n){return function(r,i){let s=!1;return aT(r).X(o=>oT(r,o,i).next(a=>(a&&(s=!0),w.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Un(e,(o,a)=>{if(a<=n){const u=this.Kn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,F.min()),ur(e).delete([0,vt(o.path)])))});i.push(u)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return ll(e,n)}Un(e,n){const r=ur(e);let i,s=kt.ct;return r.Z({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==kt.ct&&n(new x(yn(i)),s),s=l,i=u):s=kt.ct}).next(()=>{s!==kt.ct&&n(new x(yn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ll(t,e){return ur(t).put(function(n,r){return{targetId:0,path:vt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class uT{constructor(){this.changes=new Gr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ae.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class AM{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Yr(e).put(r)}removeEntry(e,n,r){return Yr(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],kc(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Gn(e,r)))}getEntry(e,n){let r=ae.newInvalidDocument(n);return Yr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Oo(n))},(i,s)=>{r=this.Qn(n,s)}).next(()=>r)}zn(e,n){let r={size:0,document:ae.newInvalidDocument(n)};return Yr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Oo(n))},(i,s)=>{r={document:this.Qn(n,s),size:Nc(s)}}).next(()=>r)}getEntries(e,n){let r=Nt();return this.jn(e,n,(i,s)=>{const o=this.Qn(i,s);r=r.insert(i,o)}).next(()=>r)}Wn(e,n){let r=Nt(),i=new _e(x.comparator);return this.jn(e,n,(s,o)=>{const a=this.Qn(s,o);r=r.insert(s,a),i=i.insert(s,Nc(o))}).next(()=>({documents:r,Hn:i}))}jn(e,n,r){if(n.isEmpty())return w.resolve();let i=new ie(s0);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Oo(i.first()),Oo(i.last())),o=i.getIterator();let a=o.getNext();return Yr(e).Z({index:"documentKeyIndex",range:s},(u,l,c)=>{const h=x.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&s0(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.G(Oo(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),kc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Yr(e).j(IDBKeyRange.bound(o,a,!0)).next(u=>{let l=Nt();for(const c of u){const h=this.Qn(x.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);h.isFoundDocument()&&(ku(n,h)||i.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,n,r,i){let s=Nt();const o=i0(n,r),a=i0(n,Ut.max());return Yr(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const h=this.Qn(x.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new DM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return r0(e).get("remoteDocumentGlobalKey").next(n=>($(!!n),n))}Gn(e,n){return r0(e).put("remoteDocumentGlobalKey",n)}Qn(e,n){if(n){const r=fM(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(F.min())))return r}return ae.newInvalidDocument(e)}}function lT(t){return new AM(t)}class DM extends uT{constructor(e,n){super(),this.Jn=e,this.trackRemovals=n,this.Yn=new Gr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ie((s,o)=>q(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Yn.get(s);if(n.push(this.Jn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=qw(this.Jn.serializer,o);i=i.add(s.path.popLast());const l=Nc(u);r+=l-a.size,n.push(this.Jn.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=qw(this.Jn.serializer,o.convertToNoDocument(F.min()));n.push(this.Jn.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.Jn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Jn.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.Jn.zn(e,n).next(r=>(this.Yn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Jn.Wn(e,n).next(({documents:r,Hn:i})=>(i.forEach((s,o)=>{this.Yn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function r0(t){return We(t,"remoteDocumentGlobal")}function Yr(t){return We(t,"remoteDocumentsV14")}function Oo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function i0(t,e){const n=e.documentKey.path.toArray();return[t,kc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function s0(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=q(n[s],r[s]),i)return i;return i=q(n.length,r.length),i||(i=q(n[n.length-2],r[r.length-2]),i||q(n[n.length-1],r[r.length-1]))}/**
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
 *//**
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
 */class xM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class cT{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ca(r.mutation,i,Ct.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=vn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=qo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Nt();const o=la(),a=la();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Xn)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),ca(c.mutation,l,c.mutation.getFieldMask(),fe.now())):o.set(l.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new xM(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=la();let i=new _e((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||Ct.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||W()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=xS();c.forEach(d=>{if(!s.has(d)){const m=FS(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return x.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ng(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(vn());let a=-1,u=s;return o.next(l=>w.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?w.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,W())).next(c=>({batchId:a,changes:DS(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new x(n)).next(r=>{let i=qo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=qo();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const u=function(l,c){return new Yn(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,u)=>{const l=u.getKey();s.get(l)===null&&(s=s.insert(l,ae.newInvalidDocument(l)))});let o=qo();return s.forEach((a,u)=>{const l=i.get(a);l!==void 0&&ca(l.mutation,u,Ct.empty(),fe.now()),ku(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return w.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ne(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:Og(r.bundledQuery),readTime:Ne(r.readTime)}}(n)),w.resolve()}}/**
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
 */class bM{constructor(){this.overlays=new _e(x.comparator),this.ts=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=vn(),s=n.length+1,o=new x(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new _e((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=vn(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=vn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return w.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Rg(n,r));let s=this.ts.get(n);s===void 0&&(s=W(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
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
 */class $g{constructor(){this.es=new ie($e.ns),this.ss=new ie($e.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new $e(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new $e(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new x(new X([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new x(new X([])),r=new $e(n,e),i=new $e(n,e+1);let s=W();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return x.comparator(e.key,n.key)||q(e.ds,n.ds)}static rs(e,n){return q(e.ds,n.ds)||x.comparator(e.key,n.key)}}/**
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
 */class PM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new ie($e.ns)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Dg(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new $e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ie(q);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),w.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;x.isDocumentKey(s)||(s=s.child(""));const o=new $e(new x(s),0);let a=new ie(q);return this._s.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.ds)),!0)},o),w.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){$(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return w.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new $e(n,0),i=this._s.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class OM{constructor(e){this.Ts=e,this.docs=new _e(x.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():ae.newInvalidDocument(n))}getEntries(e,n){let r=Nt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ae.newInvalidDocument(i))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nt();const o=n.path,a=new x(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Eg(sS(c),r)<=0||(i.has(c.key)||ku(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,n,r,i){P()}Es(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LM(this)}getSize(e){return w.resolve(this.size)}}class LM extends uT{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class MM{constructor(e){this.persistence=e,this.As=new Gr(n=>Pi(n),Su),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Rs=0,this.vs=new $g,this.targetCount=0,this.bs=Fi.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),w.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Fi(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Sn(n),w.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.vs.containsKey(n))}}/**
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
 */class hT{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new kt(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new MM(this),this.indexManager=new _M,this.remoteDocumentCache=function(r){return new OM(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new tT(n),this.xs=new RM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new PM(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){T("MemoryPersistence","Starting transaction:",e);const i=new $M(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return w.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class $M extends aS{constructor(e){super(),this.currentSequenceNumber=e}}class xh{constructor(e){this.persistence=e,this.$s=new $g,this.Ms=null}static Fs(e){return new xh(e)}get Bs(){if(this.Ms)return this.Ms;throw P()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),w.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Bs,r=>{const i=x.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return w.or([()=>w.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e){this.serializer=e}M(e,n,r,i){const s=new Sh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Sw,{unique:!0}),a.createObjectStore("documentMutations")}(e),o0(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),o0(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:F.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").j().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Sw,{unique:!0});const c=u.store("mutations"),h=l.map(d=>c.put(d));return w.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.qs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Us(s)))),r<7&&i>=7&&(o=o.next(()=>this.Ks(s))),r<8&&i>=8&&(o=o.next(()=>this.Gs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Qs(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:EL});u.createIndex("collectionPathOverlayIndex",SL,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",TL,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:hL});u.createIndex("documentKeyIndex",dL),u.createIndex("collectionGroupIndex",fL)}(e)).next(()=>this.zs(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.js(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:vL}).createIndex("sequenceNumberIndex",wL,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:IL}).createIndex("documentKeyIndex",_L,{unique:!1})}(e))),o}Us(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Nc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>w.forEach(a,u=>{$(u.userId===s.userId);const l=ni(this.serializer,u);return sT(e,s.userId,l).next(()=>{})}))}))}Ks(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const u=new X(o),l=function(c){return[0,vt(c)]}(u);s.push(n.get(l).next(c=>c?w.resolve():(h=>n.put({targetId:0,path:vt(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>w.waitFor(s))})}Gs(e,n){e.createObjectStore("collectionParents",{keyPath:yL});const r=n.store("collectionParents"),i=new Mg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:vt(u)})}};return n.store("remoteDocuments").Z({Y:!0},(o,a)=>{const u=new X(o);return s(u.popLast())}).next(()=>n.store("documentMutations").Z({Y:!0},([o,a,u],l)=>{const c=yn(a);return s(c.popLast())}))}Qs(e){const n=e.store("targets");return n.Z((r,i)=>{const s=Wo(i),o=nT(this.serializer,s);return n.put(o)})}zs(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),u=(l=o,l.document?new x(X.fromString(l.document.name).popFirst(5)):l.noDocument?x.fromSegments(l.noDocument.path):l.unknownDocument?x.fromSegments(l.unknownDocument.path):P()).path.toArray();var l;/**
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
*/const c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>w.waitFor(i))}js(e,n){const r=n.store("mutations"),i=lT(this.serializer),s=new hT(xh.Fs,this.serializer.se);return r.j().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:W();ni(this.serializer,u).keys().forEach(h=>c=c.add(h)),a.set(u.userId,c)}),w.forEach(a,(u,l)=>{const c=new Ue(l),h=Ah.ie(this.serializer,c),d=s.getIndexManager(c),m=Dh.ie(c,this.serializer,d,s.referenceDelegate);return new cT(i,m,h,d).recalculateAndSaveOverlaysForDocumentKeys(new fp(n,kt.ct),u).next()})})}}function o0(t){t.createObjectStore("targetDocuments",{keyPath:mL}).createIndex("documentTargetsIndex",gL,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",pL,{unique:!0}),t.createObjectStore("targetGlobal")}const Bd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Fg{constructor(e,n,r,i,s,o,a,u,l,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Ws=s,this.window=o,this.document=a,this.Hs=l,this.Js=c,this.Ys=h,this.Vs=null,this.Ss=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.Xs=null,this.ti=null,this.ei=Number.NEGATIVE_INFINITY,this.ni=d=>Promise.resolve(),!Fg.D())throw new S(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new NM(this,i),this.si=n+"main",this.serializer=new tT(u),this.ii=new tn(this.si,this.Ys,new FM(this.serializer)),this.Ds=new SM(this.referenceDelegate,this.serializer),this.remoteDocumentCache=lT(this.serializer),this.xs=new pM,this.window&&this.window.localStorage?this.ri=this.window.localStorage:(this.ri=null,c===!1&&ke("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.oi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new S(I.FAILED_PRECONDITION,Bd);return this.ui(),this.ci(),this.ai(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ds.getHighestSequenceNumber(e))}).then(e=>{this.Vs=new kt(e,this.Hs)}).then(()=>{this.Ss=!0}).catch(e=>(this.ii&&this.ii.close(),Promise.reject(e)))}hi(e){return this.ni=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ii.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ws.enqueueAndForget(async()=>{this.started&&await this.oi()}))}oi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>cl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.li(e).next(n=>{n||(this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)))})}).next(()=>this.fi(e)).next(n=>this.isPrimary&&!n?this.di(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Wr(e))return T("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return T("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ws.enqueueRetryable(()=>this.ni(e)),this.isPrimary=e})}li(e){return Lo(e).get("owner").next(n=>w.resolve(this._i(n)))}mi(e){return cl(e).delete(this.clientId)}async gi(){if(this.isPrimary&&!this.yi(this.ei,18e5)){this.ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=We(n,"clientMetadata");return r.j().next(i=>{const s=this.pi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ri)for(const n of e)this.ri.removeItem(this.Ii(n.clientId))}}ai(){this.ti=this.Ws.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.oi().then(()=>this.gi()).then(()=>this.ai()))}_i(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.Js?w.resolve(!0):Lo(e).get("owner").next(n=>{if(n!==null&&this.yi(n.leaseTimestampMs,5e3)&&!this.Ti(n.ownerId)){if(this._i(n)&&this.networkEnabled)return!0;if(!this._i(n)){if(!n.allowTabSynchronization)throw new S(I.FAILED_PRECONDITION,Bd);return!1}}return!(!this.networkEnabled||!this.inForeground)||cl(e).j().next(r=>this.pi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&T("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ss=!1,this.Ei(),this.ti&&(this.ti.cancel(),this.ti=null),this.Ai(),this.Ri(),await this.ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new fp(e,kt.ct);return this.di(n).next(()=>this.mi(n))}),this.ii.close(),this.vi()}pi(e,n){return e.filter(r=>this.yi(r.updateTimeMs,n)&&!this.Ti(r.clientId))}bi(){return this.runTransaction("getActiveClients","readonly",e=>cl(e).j().next(n=>this.pi(n,18e5).map(r=>r.clientId)))}get started(){return this.Ss}getMutationQueue(e,n){return Dh.ie(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new EM(e,this.serializer.se.databaseId)}getDocumentOverlayCache(e){return Ah.ie(this.serializer,e)}getBundleCache(){return this.xs}runTransaction(e,n,r){T("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.Ys)===15?CL:o===14?dS:o===13?hS:o===12?kL:o===11?cS:void P();var o;let a;return this.ii.runTransaction(e,i,s,u=>(a=new fp(u,this.Vs?this.Vs.next():kt.ct),n==="readwrite-primary"?this.li(a).next(l=>!!l||this.fi(a)).next(l=>{if(!l)throw ke(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)),new S(I.FAILED_PRECONDITION,oS);return r(a)}).next(l=>this.wi(a).next(()=>l)):this.Pi(a).next(()=>r(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Pi(e){return Lo(e).get("owner").next(n=>{if(n!==null&&this.yi(n.leaseTimestampMs,5e3)&&!this.Ti(n.ownerId)&&!this._i(n)&&!(this.Js||this.allowTabSynchronization&&n.allowTabSynchronization))throw new S(I.FAILED_PRECONDITION,Bd)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Lo(e).put("owner",n)}static D(){return tn.D()}di(e){const n=Lo(e);return n.get("owner").next(r=>this._i(r)?(T("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}yi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(ke(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ui(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Xs=()=>{this.Ws.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.oi()))},this.document.addEventListener("visibilitychange",this.Xs),this.inForeground=this.document.visibilityState==="visible")}Ai(){this.Xs&&(this.document.removeEventListener("visibilitychange",this.Xs),this.Xs=null)}ci(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ei();const n=/(?:Version|Mobile)\/1[456]/;NA()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.Ws.enterRestrictedMode(!0),this.Ws.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}Ri(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ti(e){var n;try{const r=((n=this.ri)===null||n===void 0?void 0:n.getItem(this.Ii(e)))!==null;return T("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ke("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ei(){if(this.ri)try{this.ri.setItem(this.Ii(this.clientId),String(Date.now()))}catch(e){ke("Failed to set zombie client id.",e)}}vi(){if(this.ri)try{this.ri.removeItem(this.Ii(this.clientId))}catch{}}Ii(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Lo(t){return We(t,"owner")}function cl(t){return We(t,"clientMetadata")}function Ug(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Vg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vg(e,n.fromCache,r,i)}}/**
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
 */class dT{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(Lw(n))return w.resolve(null);let r=Rt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Tc(n,null,"F"),r=Rt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.$i(n,a);return this.Mi(n,l,o,u.readTime)?this.Ni(e,Tc(n,null,"F")):this.Fi(e,l,n,u)}))})))}ki(e,n,r,i){return Lw(n)||i.isEqual(F.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(hp()<=J.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ip(n)),this.Fi(e,o,n,iS(i,-1)))})}$i(e,n){let r=new ie(NS(e));return n.forEach((i,s)=>{ku(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return hp()<=J.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",Ip(n)),this.xi.getDocumentsMatchingQuery(e,n,Ut.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new _e(q),this.qi=new Gr(s=>Pi(s),Su),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cT(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function fT(t,e,n,r){return new UM(t,e,n,r)}async function pT(t,e){const n=R(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=W();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function VM(t,e){const n=R(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=w.resolve();return h.forEach(m=>{d=d.next(()=>l.getEntry(a,m)).next(y=>{const v=u.docVersions.get(m);$(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=W();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function mT(t){const e=R(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function BM(t,e){const n=R(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(Pe.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(y,v,D){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,m,c)&&a.push(n.Ds.updateTargetData(s,m))});let u=Nt(),l=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(gT(s,o,e.documentUpdates).next(c=>{u=c.zi,l=c.ji})),!r.isEqual(F.min())){const c=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Li=i,s))}function gT(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Nt();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(F.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{zi:o,ji:i}})}function zM(t,e){const n=R(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ks(t,e){const n=R(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new Sr(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Hs(t,e,n){const r=R(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Wr(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function Ac(t,e,n){const r=R(t);let i=F.min(),s=W();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=R(a),h=c.qi.get(l);return h!==void 0?w.resolve(c.Li.get(h)):c.Ds.getTargetData(u,l)}(r,o,Rt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:W())).next(a=>(wT(r,CS(e),a),{documents:a,Wi:s})))}function yT(t,e){const n=R(t),r=R(n.Ds),i=n.Li.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ne(s,e).next(o=>o?o.target:null))}function vT(t,e){const n=R(t),r=n.Ui.get(e)||F.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Ki.getAllFromCollectionGroup(i,e,iS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(wT(n,e,i),i))}function wT(t,e,n){let r=t.Ui.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}async function jM(t,e,n,r){const i=R(t);let s=W(),o=Nt();for(const l of n){const c=e.Hi(l.metadata.name);l.document&&(s=s.add(c));const h=e.Ji(l);h.setReadTime(e.Yi(l.metadata.readTime)),o=o.insert(c,h)}const a=i.Ki.newChangeBuffer({trackRemovals:!0}),u=await Ks(i,function(l){return Rt(co(X.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>gT(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.Ds.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.Ds.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.zi,c.ji)).next(()=>c.zi)))}async function qM(t,e,n=W()){const r=await Ks(t,Rt(Og(e.bundledQuery))),i=R(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ne(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.xs.saveNamedQuery(s,e);const a=r.withResumeToken(Pe.EMPTY_BYTE_STRING,o);return i.Li=i.Li.insert(a.targetId,a),i.Ds.updateTargetData(s,a).next(()=>i.Ds.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ds.addMatchingKeys(s,n,r.targetId)).next(()=>i.xs.saveNamedQuery(s,e))})}function a0(t,e){return`firestore_clients_${t}_${e}`}function u0(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function zd(t,e){return`firestore_targets_${t}_${e}`}class Dc{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Zi(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new S(i.error.code,i.error.message))),o?new Dc(e,n,i.state,s):(ke("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ha{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new S(r.error.code,r.error.message))),s?new ha(e,r.state,i):(ke("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class xc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=kh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=uS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new xc(e,s):(ke("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Bg{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Bg(n.clientId,n.onlineState):(ke("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Cp{constructor(){this.activeTargetIds=kh()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jd{constructor(e,n,r,i,s){this.window=e,this.Ws=n,this.persistenceKey=r,this.nr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.sr=this.ir.bind(this),this.rr=new _e(q),this.started=!1,this.ur=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.cr=a0(this.persistenceKey,this.nr),this.ar=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.rr=this.rr.insert(this.nr,new Cp),this.hr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.lr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.dr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this._r=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.sr)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.bi();for(const r of e){if(r===this.nr)continue;const i=this.getItem(a0(this.persistenceKey,r));if(i){const s=xc.Zi(r,i);s&&(this.rr=this.rr.insert(s.clientId,s))}}this.mr();const n=this.storage.getItem(this.wr);if(n){const r=this.gr(n);r&&this.yr(r)}for(const r of this.ur)this.ir(r);this.ur=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.pr(this.rr)}isActiveQueryTarget(e){let n=!1;return this.rr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ir(e,"pending")}updateMutationState(e,n,r){this.Ir(e,n,r),this.Tr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(zd(this.persistenceKey,e));if(r){const i=ha.Zi(e,r);i&&(n=i.state)}}return this.Er.tr(e),this.mr(),n}removeLocalQueryTarget(e){this.Er.er(e),this.mr()}isLocalQueryTarget(e){return this.Er.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(zd(this.persistenceKey,e))}updateQueryState(e,n,r){this.Ar(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Tr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Rr(e)}notifyBundleLoaded(e){this.vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.sr),this.removeItem(this.cr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return T("SharedClientState","READ",e,n),n}setItem(e,n){T("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){T("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ir(e){const n=e;if(n.storageArea===this.storage){if(T("SharedClientState","EVENT",n.key,n.newValue),n.key===this.cr)return void ke("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ws.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.hr.test(n.key)){if(n.newValue==null){const r=this.br(n.key);return this.Pr(r,null)}{const r=this.Vr(n.key,n.newValue);if(r)return this.Pr(r.clientId,r)}}else if(this.lr.test(n.key)){if(n.newValue!==null){const r=this.Sr(n.key,n.newValue);if(r)return this.Dr(r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Cr(n.key,n.newValue);if(r)return this.Nr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.gr(n.newValue);if(r)return this.yr(r)}}else if(n.key===this.ar){const r=function(i){let s=kt.ct;if(i!=null)try{const o=JSON.parse(i);$(typeof o=="number"),s=o}catch(o){ke("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==kt.ct&&this.sequenceNumberHandler(r)}else if(n.key===this._r){const r=this.kr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Or(i)))}}}else this.ur.push(n)})}}get Er(){return this.rr.get(this.nr)}mr(){this.setItem(this.cr,this.Er.Xi())}Ir(e,n,r){const i=new Dc(this.currentUser,e,n,r),s=u0(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Xi())}Tr(e){const n=u0(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Rr(e){const n={clientId:this.nr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Ar(e,n,r){const i=zd(this.persistenceKey,e),s=new ha(e,n,r);this.setItem(i,s.Xi())}vr(e){const n=JSON.stringify(Array.from(e));this.setItem(this._r,n)}br(e){const n=this.hr.exec(e);return n?n[1]:null}Vr(e,n){const r=this.br(e);return xc.Zi(r,n)}Sr(e,n){const r=this.lr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Dc.Zi(new Ue(s),i,n)}Cr(e,n){const r=this.dr.exec(e),i=Number(r[1]);return ha.Zi(i,n)}gr(e){return Bg.Zi(e)}kr(e){return JSON.parse(e)}async Dr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);T("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Nr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}Pr(e,n){const r=n?this.rr.insert(e,n):this.rr.remove(e),i=this.pr(this.rr),s=this.pr(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Fr(o,a).then(()=>{this.rr=r})}yr(e){this.rr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}pr(e){let n=kh();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class IT{constructor(){this.Br=new Cp,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Cp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class WM{qr(e){}shutdown(){}}/**
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
 */class l0{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl=null;function qd(){return hl===null?hl=268435456+Math.round(2147483648*Math.random()):hl++,"0x"+hl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class KM{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const st="WebChannelConnection";class HM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=qd(),a=this.ao(e,n);T("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const u={};return this.ho(u,i,s),this.lo(e,a,u,r).then(l=>(T("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Wn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+lo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=GM[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=qd();return new Promise((o,a)=>{const u=new GO;u.setWithCredentials(!0),u.listenOnce(jO.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ud.NO_ERROR:const c=u.getResponseJson();T(st,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ud.TIMEOUT:T(st,`RPC '${e}' ${s} timed out`),a(new S(I.DEADLINE_EXCEEDED,"Request time out"));break;case Ud.HTTP_ERROR:const h=u.getStatus();if(T(st,`RPC '${e}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const y=function(v){const D=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(D)>=0?D:I.UNKNOWN}(m.status);a(new S(y,m.message))}else a(new S(I.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new S(I.UNAVAILABLE,"Connection failed."));break;default:P()}}finally{T(st,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);T(st,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",l,r,15)})}wo(e,n,r){const i=qd(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=BO(),a=zO(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(u.xmlHttpFactory=new WO({})),this.ho(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const l=s.join("");T(st,`Creating RPC '${e}' stream ${i}: ${l}`,u);const c=o.createWebChannel(l,u);let h=!1,d=!1;const m=new KM({Wr:v=>{d?T(st,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(T(st,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),T(st,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},Hr:()=>c.close()}),y=(v,D,g)=>{v.listen(D,f=>{try{g(f)}catch(p){setTimeout(()=>{throw p},0)}})};return y(c,il.EventType.OPEN,()=>{d||T(st,`RPC '${e}' stream ${i} transport opened.`)}),y(c,il.EventType.CLOSE,()=>{d||(d=!0,T(st,`RPC '${e}' stream ${i} transport closed`),m.so())}),y(c,il.EventType.ERROR,v=>{d||(d=!0,Wn(st,`RPC '${e}' stream ${i} transport errored:`,v),m.so(new S(I.UNAVAILABLE,"The operation could not be completed")))}),y(c,il.EventType.MESSAGE,v=>{var D;if(!d){const g=v.data[0];$(!!g);const f=g,p=f.error||((D=f[0])===null||D===void 0?void 0:D.error);if(p){T(st,`RPC '${e}' stream ${i} received error:`,p);const _=p.status;let E=function(A){const b=Ae[A];if(b!==void 0)return BS(b)}(_),k=p.message;E===void 0&&(E=I.INTERNAL,k="Unknown error status: "+_+" with message "+p.message),d=!0,m.so(new S(E,k)),c.close()}else T(st,`RPC '${e}' stream ${i} received:`,g),m.io(g)}}),y(a,qO.STAT_EVENT,v=>{v.stat===ww.PROXY?T(st,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===ww.NOPROXY&&T(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.no()},0),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(){return typeof window<"u"?window:null}function Pl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){return new rM(t,!0)}/**
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
 */class zg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&T("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class ET{constructor(e,n,r,i,s,o,a,u){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new zg(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(ke(n.toString()),ke("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new S(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return T("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QM extends ET{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=oM(this.serializer,e),r=function(i){if(!("targetChange"in i))return F.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?F.min():s.readTime?Ne(s.readTime):F.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=Qa(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=Ec(a)?{documents:QS(i,a)}:{query:YS(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=qS(i,s.resumeToken):s.snapshotVersion.compareTo(F.min())>0&&(o.readTime=Gs(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=uM(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=Qa(this.serializer),n.removeTarget=e,this.Fo(n)}}class YM extends ET{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if($(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=aM(e.writeResults,e.commitTime),r=Ne(e.commitTime);return this.listener.Zo(r,n)}return $(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Qa(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ya(this.serializer,r))};this.Fo(n)}}/**
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
 */class XM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new S(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(I.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new S(I.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class JM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(ke(n),this.ru=!1):T("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class ZM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{Kr(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=R(a);u.du.add(4),await po(u),u.mu.set("Unknown"),u.du.delete(4),await xu(u)}(this))})}),this.mu=new JM(r,i)}}async function xu(t){if(Kr(t))for(const e of t.wu)await e(!0)}async function po(t){for(const e of t.wu)await e(!1)}function Rh(t,e){const n=R(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Wg(n)?qg(n):go(n).No()&&jg(n,e))}function Xa(t,e){const n=R(t),r=go(n);n.fu.delete(e),r.No()&&ST(n,e),n.fu.size===0&&(r.No()?r.$o():Kr(n)&&n.mu.set("Unknown"))}function jg(t,e){t.gu.Ot(e.targetId),go(t).jo(e)}function ST(t,e){t.gu.Ot(e),go(t).Wo(e)}function qg(t){t.gu=new ZL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),go(t).start(),t.mu.ou()}function Wg(t){return Kr(t)&&!go(t).xo()&&t.fu.size>0}function Kr(t){return R(t).du.size===0}function TT(t){t.gu=void 0}async function e$(t){t.fu.forEach((e,n)=>{jg(t,e)})}async function t$(t,e){TT(t),Wg(t)?(t.mu.au(e),qg(t)):t.mu.set("Unknown")}async function n$(t,e,n){if(t.mu.set("Online"),e instanceof jS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){T("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rc(t,r)}else if(e instanceof bl?t.gu.Kt(e):e instanceof zS?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(F.min()))try{const r=await mT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.fu.get(u);l&&i.fu.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.fu.get(a);if(!u)return;i.fu.set(a,u.withResumeToken(Pe.EMPTY_BYTE_STRING,u.snapshotVersion)),ST(i,a);const l=new Sr(u.target,a,1,u.sequenceNumber);jg(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){T("RemoteStore","Failed to raise snapshot:",r),await Rc(t,r)}}async function Rc(t,e,n){if(!Wr(e))throw e;t.du.add(1),await po(t),t.mu.set("Offline"),n||(n=()=>mT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await xu(t)})}function kT(t,e){return e().catch(n=>Rc(t,n,e))}async function mo(t){const e=R(t),n=Or(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;r$(e);)try{const i=await zM(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,i$(e,i)}catch(i){await Rc(e,i)}CT(e)&&NT(e)}function r$(t){return Kr(t)&&t.lu.length<10}function i$(t,e){t.lu.push(e);const n=Or(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function CT(t){return Kr(t)&&!Or(t).xo()&&t.lu.length>0}function NT(t){Or(t).start()}async function s$(t){Or(t).tu()}async function o$(t){const e=Or(t);for(const n of t.lu)e.Yo(n.mutations)}async function a$(t,e,n){const r=t.lu.shift(),i=xg.from(r,e,n);await kT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mo(t)}async function u$(t,e){e&&Or(t).Jo&&await async function(n,r){if(i=r.code,VS(i)&&i!==I.ABORTED){const s=n.lu.shift();Or(n).Oo(),await kT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await mo(n)}var i}(t,e),CT(t)&&NT(t)}async function c0(t,e){const n=R(t);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const r=Kr(n);n.du.add(3),await po(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await xu(n)}async function Np(t,e){const n=R(t);e?(n.du.delete(2),await xu(n)):e||(n.du.add(2),await po(n),n.mu.set("Unknown"))}function go(t){return t.yu||(t.yu=function(e,n,r){const i=R(e);return i.nu(),new QM(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:e$.bind(null,t),Zr:t$.bind(null,t),zo:n$.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Wg(t)?qg(t):t.mu.set("Unknown")):(await t.yu.stop(),TT(t))})),t.yu}function Or(t){return t.pu||(t.pu=function(e,n,r){const i=R(e);return i.nu(),new YM(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:s$.bind(null,t),Zr:u$.bind(null,t),Xo:o$.bind(null,t),Zo:a$.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await mo(t)):(await t.pu.stop(),t.lu.length>0&&(T("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class Gg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Be,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Gg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yo(t,e){if(ke("AsyncQueue",`${e}: ${t}`),Wr(t))return new S(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ds{constructor(e){this.comparator=e?(n,r)=>e(n,r)||x.comparator(n.key,r.key):(n,r)=>x.comparator(n.key,r.key),this.keyedMap=qo(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new Ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class h0{constructor(){this.Iu=new _e(x.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):P():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Qs{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qs(e,n,Ds.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class l${constructor(){this.Eu=void 0,this.listeners=[]}}class c${constructor(){this.queries=new Gr(e=>kS(e),Tu),this.onlineState="Unknown",this.Au=new Set}}async function Kg(t,e){const n=R(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new l$),i)try{s.Eu=await n.onListen(r)}catch(o){const a=yo(o,`Initialization of query '${Ip(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Qg(n)}async function Hg(t,e){const n=R(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function h$(t,e){const n=R(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&Qg(n)}function d$(t,e,n){const r=R(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Qg(t){t.Au.forEach(e=>{e.next()})}class Yg{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f${constructor(e,n){this.Nu=e,this.byteLength=n}ku(){return"metadata"in this.Nu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.serializer=e}Hi(e){return En(this.serializer,e)}Ji(e){return e.metadata.exists?HS(this.serializer,e.document,!1):ae.newNoDocument(this.Hi(e.metadata.name),this.Yi(e.metadata.readTime))}Yi(e){return Ne(e)}}class p${constructor(e,n,r){this.Ou=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=AT(e)}$u(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Nu.namedQuery)this.queries.push(e.Nu.namedQuery);else if(e.Nu.documentMetadata){this.documents.push({metadata:e.Nu.documentMetadata}),e.Nu.documentMetadata.exists||++n;const r=X.fromString(e.Nu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Nu.document&&(this.documents[this.documents.length-1].document=e.Nu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Mu(e){const n=new Map,r=new d0(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Hi(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||W()).add(s);n.set(o,a)}}return n}async complete(){const e=await jM(this.localStore,new d0(this.serializer),this.documents,this.Ou.id),n=this.Mu(this.documents);for(const r of this.queries)await qM(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Fu:this.collectionGroups,Bu:e}}}function AT(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class DT{constructor(e){this.key=e}}class xT{constructor(e){this.key=e}}class RT{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=W(),this.mutatedKeys=W(),this.Ku=NS(e),this.Gu=new Ds(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new h0,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=ku(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let D=!1;d&&m?d.data.isEqual(m.data)?y!==v&&(r.track({type:3,doc:m}),D=!0):this.Wu(d,m)||(r.track({type:2,doc:m}),D=!0,(u&&this.Ku(m,u)>0||l&&this.Ku(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),D=!0):d&&!m&&(r.track({type:1,doc:d}),D=!0,(u||l)&&(a=!0)),D&&(m?(o=o.add(m),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((l,c)=>function(h,d){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return P()}};return m(h)-m(d)}(l.type,c.type)||this.Ku(l.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,u=a!==this.qu;return this.qu=a,s.length!==0||u?{snapshot:new Qs(this.query,e.Gu,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new h0,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=W(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new xT(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new DT(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=W();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Qs.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class m${constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class g${constructor(e){this.key=e,this.ec=!1}}class y${constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Gr(a=>kS(a),Tu),this.ic=new Map,this.rc=new Set,this.oc=new _e(x.comparator),this.uc=new Map,this.cc=new $g,this.ac={},this.hc=new Map,this.lc=Fi.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function v$(t,e){const n=ty(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await Ks(n.localStore,Rt(e));n.isPrimaryClient&&Rh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Xg(n,e,r,a==="current",o.resumeToken)}return i}async function Xg(t,e,n,r,i){t.dc=(h,d,m)=>async function(y,v,D,g){let f=v.view.zu(D);f.Mi&&(f=await Ac(y.localStore,v.query,!1).then(({documents:E})=>v.view.zu(E,f)));const p=g&&g.targetChanges.get(v.targetId),_=v.view.applyChanges(f,y.isPrimaryClient,p);return Ap(y,v.targetId,_.Yu),_.snapshot}(t,h,d,m);const s=await Ac(t.localStore,e,!0),o=new RT(e,s.Wi),a=o.zu(s.documents),u=Au.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);Ap(t,n,l.Yu);const c=new m$(e,n,o);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function w$(t,e){const n=R(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Tu(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Hs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Xa(n.remoteStore,r.targetId),Ys(n,r.targetId)}).catch(qr)):(Ys(n,r.targetId),await Hs(n.localStore,r.targetId,!0))}async function I$(t,e,n){const r=ny(t);try{const i=await function(s,o){const a=R(s),u=fe.now(),l=o.reduce((d,m)=>d.add(m.key),W());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=Nt(),y=W();return a.Ki.getEntries(d,l).next(v=>{m=v,m.forEach((D,g)=>{g.isValidDocument()||(y=y.add(D))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{c=v;const D=[];for(const g of o){const f=XL(g,c.get(g.key).overlayedDocument);f!=null&&D.push(new Xn(g.key,f,gS(f.value.mapValue),de.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,D,o)}).next(v=>{h=v;const D=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,D)})}).then(()=>({batchId:h.batchId,changes:DS(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.ac[s.currentUser.toKey()];u||(u=new _e(q)),u=u.insert(o,a),s.ac[s.currentUser.toKey()]=u}(r,i.batchId,n),await Jn(r,i.changes),await mo(r.remoteStore)}catch(i){const s=yo(i,"Failed to persist write");n.reject(s)}}async function bT(t,e){const n=R(t);try{const r=await BM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?$(o.ec):i.removedDocuments.size>0&&($(o.ec),o.ec=!1))}),await Jn(n,r,e)}catch(r){await qr(r)}}function f0(t,e,n){const r=R(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=R(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.Ru(o)&&(u=!0)}),u&&Qg(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _$(t,e,n){const r=R(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new _e(x.comparator);o=o.insert(s,ae.newNoDocument(s,F.min()));const a=W().add(s),u=new Nu(F.min(),new Map,new ie(q),o,a);await bT(r,u),r.oc=r.oc.remove(s),r.uc.delete(e),ey(r)}else await Hs(r.localStore,e,!1).then(()=>Ys(r,e,n)).catch(qr)}async function E$(t,e){const n=R(t),r=e.batch.batchId;try{const i=await VM(n.localStore,e);Zg(n,r,null),Jg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jn(n,i)}catch(i){await qr(i)}}async function S$(t,e,n){const r=R(t);try{const i=await function(s,o){const a=R(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>($(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);Zg(r,e,n),Jg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Jn(r,i)}catch(i){await qr(i)}}async function T$(t,e){const n=R(t);Kr(n.remoteStore)||T("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=R(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.hc.get(r)||[];i.push(e),n.hc.set(r,i)}catch(r){const i=yo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Jg(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Zg(t,e,n){const r=R(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function Ys(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||PT(t,r)})}function PT(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Xa(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),ey(t))}function Ap(t,e,n){for(const r of n)r instanceof DT?(t.cc.addReference(r.key,e),k$(t,r)):r instanceof xT?(T("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||PT(t,r.key)):P()}function k$(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(T("SyncEngine","New document in limbo: "+n),t.rc.add(r),ey(t))}function ey(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new x(X.fromString(e)),r=t.lc.next();t.uc.set(r,new g$(n)),t.oc=t.oc.insert(n,r),Rh(t.remoteStore,new Sr(Rt(co(n.path)),r,2,kt.ct))}}async function Jn(t,e,n){const r=R(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,u)=>{o.push(r.dc(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Vg.Di(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,u){const l=R(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>w.forEach(u,h=>w.forEach(h.Vi,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>w.forEach(h.Si,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Wr(c))throw c;T("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Li.get(h),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);l.Li=l.Li.insert(h,y)}}}(r.localStore,s))}async function C$(t,e){const n=R(t);if(!n.currentUser.isEqual(e)){T("SyncEngine","User change. New user:",e.toKey());const r=await pT(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new S(I.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Jn(n,r.Qi)}}function N$(t,e){const n=R(t),r=n.uc.get(e);if(r&&r.ec)return W().add(r.key);{let i=W();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}async function A$(t,e){const n=R(t),r=await Ac(n.localStore,e.query,!0),i=e.view.Xu(r);return n.isPrimaryClient&&Ap(n,e.targetId,i.Yu),i}async function D$(t,e){const n=R(t);return vT(n.localStore,e).then(r=>Jn(n,r))}async function x$(t,e,n,r){const i=R(t),s=await function(o,a){const u=R(o),l=R(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.In(c,a).next(h=>h?u.localDocuments.getDocuments(c,h):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await mo(i.remoteStore):n==="acknowledged"||n==="rejected"?(Zg(i,e,r||null),Jg(i,e),function(o,a){R(R(o).mutationQueue).En(a)}(i.localStore,e)):P(),await Jn(i,s)):T("SyncEngine","Cannot apply mutation batch with id: "+e)}async function R$(t,e){const n=R(t);if(ty(n),ny(n),e===!0&&n.fc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await p0(n,r.toArray());n.fc=!0,await Np(n.remoteStore,!0);for(const s of i)Rh(n.remoteStore,s)}else if(e===!1&&n.fc!==!1){const r=[];let i=Promise.resolve();n.ic.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ys(n,o),Hs(n.localStore,o,!0))),Xa(n.remoteStore,o)}),await i,await p0(n,r),function(s){const o=R(s);o.uc.forEach((a,u)=>{Xa(o.remoteStore,u)}),o.cc.ls(),o.uc=new Map,o.oc=new _e(x.comparator)}(n),n.fc=!1,await Np(n.remoteStore,!1)}}async function p0(t,e,n){const r=R(t),i=[],s=[];for(const o of e){let a;const u=r.ic.get(o);if(u&&u.length!==0){a=await Ks(r.localStore,Rt(u[0]));for(const l of u){const c=r.sc.get(l),h=await A$(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await yT(r.localStore,o);a=await Ks(r.localStore,l),await Xg(r,OT(l),o,!1,a.resumeToken)}i.push(a)}return r.nc.zo(s),i}function OT(t){return TS(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function b$(t){const e=R(t);return R(R(e.localStore).persistence).bi()}async function P$(t,e,n,r){const i=R(t);if(i.fc)return void T("SyncEngine","Ignoring unexpected query state notification.");const s=i.ic.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await vT(i.localStore,CS(s[0])),a=Nu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Pe.EMPTY_BYTE_STRING);await Jn(i,o,a);break}case"rejected":await Hs(i.localStore,e,!0),Ys(i,e,r);break;default:P()}}async function O$(t,e,n){const r=ty(t);if(r.fc){for(const i of e){if(r.ic.has(i)){T("SyncEngine","Adding an already active target "+i);continue}const s=await yT(r.localStore,i),o=await Ks(r.localStore,s);await Xg(r,OT(s),o.targetId,!1,o.resumeToken),Rh(r.remoteStore,o)}for(const i of n)r.ic.has(i)&&await Hs(r.localStore,i,!1).then(()=>{Xa(r.remoteStore,i),Ys(r,i)}).catch(qr)}}function ty(t){const e=R(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=N$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_$.bind(null,e),e.nc.zo=h$.bind(null,e.eventManager),e.nc.wc=d$.bind(null,e.eventManager),e}function ny(t){const e=R(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=E$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=S$.bind(null,e),e}function L$(t,e,n){const r=R(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const m=R(h),y=Ne(d.createTime);return m.persistence.runTransaction("hasNewerBundle","readonly",v=>m.xs.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(AT(a));const u=new p$(a,i.localStore,s.serializer);let l=await s._c();for(;l;){const h=await u.$u(l);h&&o._updateProgress(h),l=await s._c()}const c=await u.complete();return await Jn(i,c.Bu,void 0),await function(h,d){const m=R(h);return m.persistence.runTransaction("Save bundle","readwrite",y=>m.xs.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Fu)}catch(a){return Wn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Dp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Du(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return fT(this.persistence,new dT,e.initialUser,this.serializer)}createPersistence(e){return new hT(xh.Fs,this.serializer)}createSharedClientState(e){return new IT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class LT extends Dp{constructor(e,n,r){super(),this.mc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.mc.initialize(this,e),await ny(this.mc.syncEngine),await mo(this.mc.remoteStore),await this.persistence.hi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return fT(this.persistence,new dT,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new kM(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new uL(n,this.persistence);return new aL(e.asyncQueue,r)}createPersistence(e){const n=Ug(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Fg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,_T(),Pl(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new IT}}class M$ extends LT{constructor(e,n){super(e,n,!1),this.mc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.mc.syncEngine;this.sharedClientState instanceof jd&&(this.sharedClientState.syncEngine={$r:x$.bind(null,n),Mr:P$.bind(null,n),Fr:O$.bind(null,n),bi:b$.bind(null,n),Or:D$.bind(null,n)},await this.sharedClientState.start()),await this.persistence.hi(async r=>{await R$(this.mc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=_T();if(!jd.D(n))throw new S(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Ug(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new jd(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class ry{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>f0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=C$.bind(null,this.syncEngine),await Np(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new c$}createDatastore(e){const n=Du(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new HM(i));var i;return function(s,o,a,u){return new XM(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>f0(this.syncEngine,a,0),o=l0.D()?new l0:new WM,new ZM(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new y$(r,i,s,o,a,u);return l&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=R(e);T("RemoteStore","RemoteStore shutting down."),n.du.add(5),await po(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class bh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):ke("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $${constructor(e,n){this.Ic=e,this.serializer=n,this.metadata=new Be,this.buffer=new Uint8Array,this.Tc=new TextDecoder("utf-8"),this.Ec().then(r=>{r&&r.ku()?this.metadata.resolve(r.Nu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Nu)}`))},r=>this.metadata.reject(r))}close(){return this.Ic.cancel()}async getMetadata(){return this.metadata.promise}async _c(){return await this.getMetadata(),this.Ec()}async Ec(){const e=await this.Ac();if(e===null)return null;const n=this.Tc.decode(e),r=Number(n);isNaN(r)&&this.Rc(`length string (${n}) is not valid number`);const i=await this.vc(r);return new f$(JSON.parse(i),e.length+r)}bc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ac(){for(;this.bc()<0&&!await this.Pc(););if(this.buffer.length===0)return null;const e=this.bc();e<0&&this.Rc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async vc(e){for(;this.buffer.length<e;)await this.Pc()&&this.Rc("Reached the end of bundle when more is expected.");const n=this.Tc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Rc(e){throw this.Ic.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pc(){const e=await this.Ic.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class F${constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new S(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=R(r),o=Qa(s.serializer)+"/documents",a={documents:i.map(h=>Ha(s.serializer,h))},u=await s.fo("BatchGetDocuments",o,a,i.length),l=new Map;u.forEach(h=>{const d=sM(s.serializer,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());$(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new fo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=x.fromPath(r);this.mutations.push(new Ag(i,this.precondition(i)))}),await async function(n,r){const i=R(n),s=Qa(i.serializer)+"/documents",o={writes:r.map(a=>Ya(i.serializer,a))};await i.co("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw P();n=F.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new S(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(F.min())?de.exists(!1):de.updateTime(n):de.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(F.min()))throw new S(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return de.updateTime(n)}return de.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class U${constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Vc=r.maxAttempts,this.Co=new zg(this.asyncQueue,"transaction_retry")}run(){this.Vc-=1,this.Sc()}Sc(){this.Co.Ao(async()=>{const e=new F$(this.datastore),n=this.Dc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Cc(i)}))}).catch(r=>{this.Cc(r)})})}Dc(e){try{const n=this.updateFunction(e);return!Eu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Cc(e){this.Vc>0&&this.xc(e)?(this.Vc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sc(),Promise.resolve()))):this.deferred.reject(e)}xc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!VS(n)}return!1}}/**
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
 */class V${constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ue.UNAUTHENTICATED,this.clientId=tS.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{T("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(T("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Be;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ol(t,e){t.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await pT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function xp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iy(t);T("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>c0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>c0(e.remoteStore,s)),t._onlineComponents=e}function MT(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function iy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){T("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ol(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!MT(n))throw n;Wn("Error using user provided cache. Falling back to memory cache: "+n),await Ol(t,new Dp)}}else T("FirestoreClient","Using default OfflineComponentProvider"),await Ol(t,new Dp);return t._offlineComponents}async function Ph(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(T("FirestoreClient","Using user provided OnlineComponentProvider"),await xp(t,t._uninitializedComponentsProvider._online)):(T("FirestoreClient","Using default OnlineComponentProvider"),await xp(t,new ry))),t._onlineComponents}function $T(t){return iy(t).then(e=>e.persistence)}function sy(t){return iy(t).then(e=>e.localStore)}function FT(t){return Ph(t).then(e=>e.remoteStore)}function oy(t){return Ph(t).then(e=>e.syncEngine)}function B$(t){return Ph(t).then(e=>e.datastore)}async function Xs(t){const e=await Ph(t),n=e.eventManager;return n.onListen=v$.bind(null,e.syncEngine),n.onUnlisten=w$.bind(null,e.syncEngine),n}function z$(t){return t.asyncQueue.enqueue(async()=>{const e=await $T(t),n=await FT(t);return e.setNetworkEnabled(!0),function(r){const i=R(r);return i.du.delete(0),xu(i)}(n)})}function j$(t){return t.asyncQueue.enqueue(async()=>{const e=await $T(t),n=await FT(t);return e.setNetworkEnabled(!1),async function(r){const i=R(r);i.du.add(0),await po(i),i.mu.set("Offline")}(n)})}function q$(t,e){const n=new Be;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=R(a);return l.persistence.runTransaction("read document","readonly",c=>l.localDocuments.getDocument(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new S(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=yo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await sy(t),e,n)),n.promise}function UT(t,e,n={}){const r=new Be;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new bh({next:h=>{s.enqueueAndForget(()=>Hg(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new S(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new S(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Yg(co(o.path),l,{includeMetadataChanges:!0,xu:!0});return Kg(i,c)}(await Xs(t),t.asyncQueue,e,n,r)),r.promise}function W$(t,e){const n=new Be;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Ac(r,i,!0),a=new RT(i,o.Wi),u=a.zu(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=yo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await sy(t),e,n)),n.promise}function VT(t,e,n={}){const r=new Be;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new bh({next:h=>{s.enqueueAndForget(()=>Hg(i,c)),h.fromCache&&a.source==="server"?u.reject(new S(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Yg(o,l,{includeMetadataChanges:!0,xu:!0});return Kg(i,c)}(await Xs(t),t.asyncQueue,e,n,r)),r.promise}function G$(t,e){const n=new bh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){R(r).Au.add(i),i.next()}(await Xs(t),n)),()=>{n.yc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){R(r).Au.delete(i)}(await Xs(t),n))}}function K$(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new $$(u,l)}(function(u,l){if(u instanceof Uint8Array)return m0(u,l);if(u instanceof ArrayBuffer)return m0(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Du(e));t.asyncQueue.enqueueAndForget(async()=>{L$(await oy(t),i,r)})}function H$(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=R(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.xs.getNamedQuery(s,r))}(await sy(t),e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=new Map;/**
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
 */function ay(t,e,n){if(!n)throw new S(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BT(t,e,n,r){if(e===!0&&r===!0)throw new S(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function y0(t){if(!x.isDocumentKey(t))throw new S(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function v0(t){if(x.isDocumentKey(t))throw new S(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Oh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":P()}function ee(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new S(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oh(t);throw new S(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function zT(t,e){if(e<=0)throw new S(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new S(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new S(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,BT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new w0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new S(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new w0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new QO;switch(n.type){case"firstParty":return new ZO(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new S(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=g0.get(e);n&&(T("ComponentProvider","Removing Datastore"),g0.delete(e),n.terminate())}(this),Promise.resolve()}}function Q$(t,e,n,r={}){var i;const s=(t=ee(t,Ru))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Wn("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ue.MOCK_USER;else{o=TA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new S(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ue(u)}t._authCredentials=new YO(new eS(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}}class tt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tt(this.firestore,e,this._query)}}class Sn extends tt{constructor(e,n,r){super(e,n,co(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new x(e))}withConverter(e){return new Sn(this.firestore,e,this._path)}}function Nn(t,e,...n){if(t=U(t),ay("collection","path",e),t instanceof Ru){const r=X.fromString(e,...n);return v0(r),new Sn(t,null,r)}{if(!(t instanceof le||t instanceof Sn))throw new S(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(X.fromString(e,...n));return v0(r),new Sn(t.firestore,null,r)}}function Y$(t,e){if(t=ee(t,Ru),ay("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new S(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new tt(t,null,function(n){return new Yn(X.emptyPath(),n)}(e))}function bc(t,e,...n){if(t=U(t),arguments.length===1&&(e=tS.A()),ay("doc","path",e),t instanceof Ru){const r=X.fromString(e,...n);return y0(r),new le(t,null,new x(r))}{if(!(t instanceof le||t instanceof Sn))throw new S(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(X.fromString(e,...n));return y0(r),new le(t.firestore,t instanceof Sn?t.converter:null,new x(r))}}function jT(t,e){return t=U(t),e=U(e),(t instanceof le||t instanceof Sn)&&(e instanceof le||e instanceof Sn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function qT(t,e){return t=U(t),e=U(e),t instanceof tt&&e instanceof tt&&t.firestore===e.firestore&&Tu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X${constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new zg(this,"async_queue_retry"),this.qc=()=>{const n=Pl();n&&T("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Pl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Pl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Be;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Wr(e))throw e;T("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ke("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Gg.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&P()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Rp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class J${constructor(){this._progressObserver={},this._taskCompletionResolver=new Be,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z$=-1;class Ee extends Ru{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new X$,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||WT(this),this._firestoreClient.terminate()}}function Ge(t){return t._firestoreClient||WT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function WT(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,u,l){return new xL(o,a,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new V$(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function eF(t,e){KT(t=ee(t,Ee));const n=Ge(t);if(n._uninitializedComponentsProvider)throw new S(I.FAILED_PRECONDITION,"SDK cache is already specified.");Wn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new ry;return GT(n,i,new LT(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function tF(t){KT(t=ee(t,Ee));const e=Ge(t);if(e._uninitializedComponentsProvider)throw new S(I.FAILED_PRECONDITION,"SDK cache is already specified.");Wn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new ry;return GT(e,r,new M$(r,n.cacheSizeBytes))}function GT(t,e,n){const r=new Be;return t.asyncQueue.enqueue(async()=>{try{await Ol(t,n),await xp(t,e),r.resolve()}catch(i){const s=i;if(!MT(s))throw s;Wn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function nF(t){if(t._initialized&&!t._terminated)throw new S(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Be;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!tn.D())return Promise.resolve();const r=n+"main";await tn.delete(r)}(Ug(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function rF(t){return function(e){const n=new Be;return e.asyncQueue.enqueueAndForget(async()=>T$(await oy(e),n)),n.promise}(Ge(t=ee(t,Ee)))}function iF(t){return z$(Ge(t=ee(t,Ee)))}function sF(t){return j$(Ge(t=ee(t,Ee)))}function oF(t,e){const n=Ge(t=ee(t,Ee)),r=new J$;return K$(n,t._databaseId,e,r),r}function aF(t,e){return H$(Ge(t=ee(t,Ee)),e).then(n=>n?new tt(t,null,n.query):null)}function KT(t){if(t._initialized||t._terminated)throw new S(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(Pe.fromBase64String(e))}catch(n){throw new S(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new An(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new S(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this._methodName=e}}/**
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
 */class Lh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new S(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new S(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
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
 */const uF=/^__.*__$/;class lF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ho(e,this.data,n,this.fieldTransforms)}}class HT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function QT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw P()}}class Mh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Mh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Pc(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(QT(this.Yc)&&uF.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class cF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Du(e)}ua(e,n,r,i=!1){return new Mh({Yc:e,methodName:n,oa:r,path:Ce.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qi(t){const e=t._freezeSettings(),n=Du(t._databaseId);return new cF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $h(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);hy("Data must be an object, but it was:",o,r);const a=JT(r,o);let u,l;if(s.merge)u=new Ct(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=bp(e,h,n);if(!o.contains(d))throw new S(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ek(c,d)||c.push(d)}u=new Ct(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new lF(new Qe(a),u,l)}class bu extends Hi{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bu}}function YT(t,e,n){return new Mh({Yc:3,oa:e.settings.oa,methodName:t._methodName,ta:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class uy extends Hi{_toFieldTransform(e){return new Cu(e.path,new qs)}isEqual(e){return e instanceof uy}}class hF extends Hi{constructor(e,n){super(e),this.ca=n}_toFieldTransform(e){const n=YT(this,e,!0),r=this.ca.map(s=>Yi(s,n)),i=new Oi(r);return new Cu(e.path,i)}isEqual(e){return this===e}}class dF extends Hi{constructor(e,n){super(e),this.ca=n}_toFieldTransform(e){const n=YT(this,e,!0),r=this.ca.map(s=>Yi(s,n)),i=new Li(r);return new Cu(e.path,i)}isEqual(e){return this===e}}class fF extends Hi{constructor(e,n){super(e),this.aa=n}_toFieldTransform(e){const n=new Ws(e.serializer,PS(e.serializer,this.aa));return new Cu(e.path,n)}isEqual(e){return this===e}}function ly(t,e,n,r){const i=t.ua(1,e,n);hy("Data must be an object, but it was:",i,r);const s=[],o=Qe.empty();Ki(r,(u,l)=>{const c=dy(e,u,n);l=U(l);const h=i.na(c);if(l instanceof bu)s.push(c);else{const d=Yi(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Ct(s);return new HT(o,a,i.fieldTransforms)}function cy(t,e,n,r,i,s){const o=t.ua(1,e,n),a=[bp(e,r,n)],u=[i];if(s.length%2!=0)throw new S(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(bp(e,s[d])),u.push(s[d+1]);const l=[],c=Qe.empty();for(let d=a.length-1;d>=0;--d)if(!ek(l,a[d])){const m=a[d];let y=u[d];y=U(y);const v=o.na(m);if(y instanceof bu)l.push(m);else{const D=Yi(y,v);D!=null&&(l.push(m),c.set(m,D))}}const h=new Ct(l);return new HT(c,h,o.fieldTransforms)}function XT(t,e,n,r=!1){return Yi(n,t.ua(r?4:3,e))}function Yi(t,e){if(ZT(t=U(t)))return hy("Unsupported field value:",e,t),JT(t,e);if(t instanceof Hi)return function(n,r){if(!QT(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Yi(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=U(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return PS(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=fe.fromDate(n);return{timestampValue:Gs(r.serializer,i)}}if(n instanceof fe){const i=new fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Gs(r.serializer,i)}}if(n instanceof Lh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof An)return{bytesValue:qS(r.serializer,n._byteString)};if(n instanceof le){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${Oh(n)}`)}(t,e)}function JT(t,e){const n={};return fS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(t,(r,i)=>{const s=Yi(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ZT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof Lh||t instanceof An||t instanceof le||t instanceof Hi)}function hy(t,e,n){if(!ZT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Oh(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function bp(t,e,n){if((e=U(e))instanceof Lr)return e._internalPath;if(typeof e=="string")return dy(t,e);throw Pc("Field path arguments must be of type string or ",t,!1,void 0,n)}const pF=new RegExp("[~\\*/\\[\\]]");function dy(t,e,n){if(e.search(pF)>=0)throw Pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lr(...e.split("."))._internalPath}catch{throw Pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new S(I.INVALID_ARGUMENT,a+t+u)}function ek(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mF extends Ja{data(){return super.data()}}function Fh(t,e){return typeof e=="string"?dy(t,e):e instanceof Lr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new S(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fy{}class Pu extends fy{}function rr(t,e,...n){let r=[];e instanceof fy&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof py).length,o=i.filter(a=>a instanceof Uh).length;if(s>1||s>0&&o>0)throw new S(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Uh extends Pu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Uh(e,n,r)}_apply(e){const n=this._parse(e);return rk(e._query,n),new tt(e.firestore,e.converter,wp(e._query,n))}_parse(e){const n=Qi(e.firestore);return function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new S(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){_0(c,l);const d=[];for(const m of c)d.push(I0(a,i,m));h={arrayValue:{values:d}}}else h=I0(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||_0(c,l),h=XT(o,s,c,l==="in"||l==="not-in");return H.create(u,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function gF(t,e,n){const r=e,i=Fh("where",t);return Uh._create(i,r,n)}class py extends fy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new py(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ne.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)rk(s,a),s=wp(s,a)}(e._query,n),new tt(e.firestore,e.converter,wp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class my extends Pu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new my(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new S(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new S(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new As(i,s);return function(a,u){if(Cg(a)===null){const l=Th(a);l!==null&&ik(a,l,u.field)}}(r,o),o}(e._query,this._field,this._direction);return new tt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Yn(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function yF(t,e="asc"){const n=e,r=Fh("orderBy",t);return my._create(r,n)}class Vh extends Pu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Vh(e,n,r)}_apply(e){return new tt(e.firestore,e.converter,Tc(e._query,this._limit,this._limitType))}}function vF(t){return zT("limit",t),Vh._create("limit",t,"F")}function wF(t){return zT("limitToLast",t),Vh._create("limitToLast",t,"L")}class Bh extends Pu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Bh(e,n,r)}_apply(e){const n=nk(e,this.type,this._docOrFields,this._inclusive);return new tt(e.firestore,e.converter,function(r,i){return new Yn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function IF(...t){return Bh._create("startAt",t,!0)}function _F(...t){return Bh._create("startAfter",t,!1)}class zh extends Pu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new zh(e,n,r)}_apply(e){const n=nk(e,this.type,this._docOrFields,this._inclusive);return new tt(e.firestore,e.converter,function(r,i){return new Yn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function EF(...t){return zh._create("endBefore",t,!1)}function SF(...t){return zh._create("endAt",t,!0)}function nk(t,e,n,r){if(n[0]=U(n[0]),n[0]instanceof Ja)return function(i,s,o,a,u){if(!a)throw new S(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of Ii(i))if(c.field.isKeyField())l.push(bi(s,a.key));else{const h=a.data.field(c.field);if(Tg(h))throw new S(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new S(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Pr(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Qi(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new S(I.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let m=0;m<l.length;m++){const y=l[m];if(h[m].field.isKeyField()){if(typeof y!="string")throw new S(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!Ng(s)&&y.indexOf("/")!==-1)throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const v=s.path.child(X.fromString(y));if(!x.isDocumentKey(v))throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const D=new x(v);d.push(bi(o,D))}else{const v=XT(a,u,y);d.push(v)}}return new Pr(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function I0(t,e,n){if(typeof(n=U(n))=="string"){if(n==="")throw new S(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ng(e)&&n.indexOf("/")!==-1)throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(X.fromString(n));if(!x.isDocumentKey(r))throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bi(t,new x(r))}if(n instanceof le)return bi(t,n._key);throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oh(n)}.`)}function _0(t,e){if(!Array.isArray(t)||t.length===0)throw new S(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rk(t,e){if(e.isInequality()){const r=Th(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new S(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Cg(t);s!==null&&ik(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new S(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new S(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function ik(t,e,n){if(!n.isEqual(e))throw new S(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class gy{convertValue(e,n="none"){switch(Ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw P()}}convertObject(e,n){const r={};return Ki(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Lh(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pS(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wa(e));default:return null}}convertTimestamp(e){const n=xr(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=X.fromString(e);$(eT(r));const i=new Rr(r.get(1),r.get(3)),s=new x(r.popFirst(5));return i.isEqual(n)||ke(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class TF extends gy{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gn extends Ja{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class da extends Gn{data(e={}){return super.data(e)}}class Mr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new di(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new da(this._firestore,this._userDataWriter,r.key,r,new di(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new S(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new da(r._firestore,r._userDataWriter,o.doc.key,o.doc,new di(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new da(r._firestore,r._userDataWriter,o.doc.key,o.doc,new di(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:kF(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return P()}}function sk(t,e){return t instanceof Gn&&e instanceof Gn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Mr&&e instanceof Mr&&t._firestore===e._firestore&&qT(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CF(t){t=ee(t,le);const e=ee(t.firestore,Ee);return UT(Ge(e),t._key).then(n=>yy(e,t,n))}class Xi extends gy{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,n)}}function NF(t){t=ee(t,le);const e=ee(t.firestore,Ee),n=Ge(e),r=new Xi(e);return q$(n,t._key).then(i=>new Gn(e,r,t._key,i,new di(i!==null&&i.hasLocalMutations,!0),t.converter))}function AF(t){t=ee(t,le);const e=ee(t.firestore,Ee);return UT(Ge(e),t._key,{source:"server"}).then(n=>yy(e,t,n))}function qh(t){t=ee(t,tt);const e=ee(t.firestore,Ee),n=Ge(e),r=new Xi(e);return tk(t._query),VT(n,t._query).then(i=>new Mr(e,r,t,i))}function DF(t){t=ee(t,tt);const e=ee(t.firestore,Ee),n=Ge(e),r=new Xi(e);return W$(n,t._query).then(i=>new Mr(e,r,t,i))}function xF(t){t=ee(t,tt);const e=ee(t.firestore,Ee),n=Ge(e),r=new Xi(e);return VT(n,t._query,{source:"server"}).then(i=>new Mr(e,r,t,i))}function E0(t,e,n){t=ee(t,le);const r=ee(t.firestore,Ee),i=jh(t.converter,e,n);return Ou(r,[$h(Qi(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,de.none())])}function S0(t,e,n,...r){t=ee(t,le);const i=ee(t.firestore,Ee),s=Qi(i);let o;return o=typeof(e=U(e))=="string"||e instanceof Lr?cy(s,"updateDoc",t._key,e,n,r):ly(s,"updateDoc",t._key,e),Ou(i,[o.toMutation(t._key,de.exists(!0))])}function RF(t){return Ou(ee(t.firestore,Ee),[new fo(t._key,de.none())])}function ok(t,e){const n=ee(t.firestore,Ee),r=bc(t),i=jh(t.converter,e);return Ou(n,[$h(Qi(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,de.exists(!1))]).then(()=>r)}function ak(t,...e){var n,r,i;t=U(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Rp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Rp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof le)l=ee(t.firestore,Ee),c=co(t._key.path),u={next:h=>{e[o]&&e[o](yy(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ee(t,tt);l=ee(h.firestore,Ee),c=h._query;const d=new Xi(l);u={next:m=>{e[o]&&e[o](new Mr(l,d,h,m))},error:e[o+1],complete:e[o+2]},tk(t._query)}return function(h,d,m,y){const v=new bh(y),D=new Yg(d,v,m);return h.asyncQueue.enqueueAndForget(async()=>Kg(await Xs(h),D)),()=>{v.yc(),h.asyncQueue.enqueueAndForget(async()=>Hg(await Xs(h),D))}}(Ge(l),c,a,u)}function bF(t,e){return G$(Ge(t=ee(t,Ee)),Rp(e)?e:{next:e})}function Ou(t,e){return function(n,r){const i=new Be;return n.asyncQueue.enqueueAndForget(async()=>I$(await oy(n),r,i)),i.promise}(Ge(t),e)}function yy(t,e,n){const r=n.docs.get(e._key),i=new Xi(t);return new Gn(t,i,e._key,r,new di(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const PF={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OF{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Qi(e)}set(e,n,r){this._verifyNotCommitted();const i=lr(e,this._firestore),s=jh(i.converter,n,r),o=$h(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,de.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=lr(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof Lr?cy(this._dataReader,"WriteBatch.update",s._key,n,r,i):ly(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,de.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=lr(e,this._firestore);return this._mutations=this._mutations.concat(new fo(n._key,de.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new S(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function lr(t,e){if((t=U(t)).firestore!==e)throw new S(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LF extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Qi(e)}get(e){const n=lr(e,this._firestore),r=new TF(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return P();const s=i[0];if(s.isFoundDocument())return new Ja(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Ja(this._firestore,r,n._key,null,n.converter);throw P()})}set(e,n,r){const i=lr(e,this._firestore),s=jh(i.converter,n,r),o=$h(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=lr(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof Lr?cy(this._dataReader,"Transaction.update",s._key,n,r,i):ly(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=lr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=lr(e,this._firestore),r=new Xi(this._firestore);return super.get(e).then(i=>new Gn(this._firestore,r,n._key,i._document,new di(!1,!1),n.converter))}}function MF(t,e,n){t=ee(t,Ee);const r=Object.assign(Object.assign({},PF),n);return function(i){if(i.maxAttempts<1)throw new S(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new Be;return i.asyncQueue.enqueueAndForget(async()=>{const u=await B$(i);new U$(i.asyncQueue,u,o,s,a).run()}),a.promise}(Ge(t),i=>e(new LF(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $F(){return new bu("deleteField")}function FF(){return new uy("serverTimestamp")}function UF(...t){return new hF("arrayUnion",t)}function VF(...t){return new dF("arrayRemove",t)}function BF(t){return new fF("increment",t)}(function(t,e=!0){(function(n){lo=n})(ji),Ar(new Tn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ee(new XO(n.getProvider("auth-internal")),new tL(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new S(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rr(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),_n(Iw,"3.10.0",t),_n(Iw,"3.10.0","esm2017")})();const zF="@firebase/firestore-compat",jF="0.3.6";/**
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
 */function vy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new S("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function T0(){if(typeof Uint8Array>"u")throw new S("unimplemented","Uint8Arrays are not available in this environment.")}function k0(){if(!AL())throw new S("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Za{constructor(e){this._delegate=e}static fromBase64String(e){return k0(),new Za(An.fromBase64String(e))}static fromUint8Array(e){return T0(),new Za(An.fromUint8Array(e))}toBase64(){return k0(),this._delegate.toBase64()}toUint8Array(){return T0(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Pp(t){return qF(t,["next","error","complete"])}function qF(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class WF{enableIndexedDbPersistence(e,n){return eF(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return tF(e._delegate)}clearIndexedDbPersistence(e){return nF(e._delegate)}}class uk{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Rr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Wn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){Q$(this._delegate,e,n,r)}enableNetwork(){return iF(this._delegate)}disableNetwork(){return sF(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,BT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return rF(this._delegate)}onSnapshotsInSync(e){return bF(this._delegate,e)}get app(){if(!this._appCompat)throw new S("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Js(this,Nn(this._delegate,e))}catch(n){throw pt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Gt(this,bc(this._delegate,e))}catch(n){throw pt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ft(this,Y$(this._delegate,e))}catch(n){throw pt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return MF(this._delegate,n=>e(new lk(this,n)))}batch(){return Ge(this._delegate),new ck(new OF(this._delegate,e=>Ou(this._delegate,e)))}loadBundle(e){return oF(this._delegate,e)}namedQuery(e){return aF(this._delegate,e).then(n=>n?new ft(this,n):null)}}class Wh extends gy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Za(new An(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Gt.forKey(n,this.firestore,null)}}function GF(t){KO(t)}class lk{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Wh(e)}get(e){const n=fi(e);return this._delegate.get(n).then(r=>new eu(this._firestore,new Gn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=fi(e);return r?(vy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=fi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=fi(e);return this._delegate.delete(n),this}}class ck{constructor(e){this._delegate=e}set(e,n,r){const i=fi(e);return r?(vy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=fi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=fi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ui{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new da(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new tu(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ui.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Ui(e,new Wh(e),n),i.set(n,s)),s}}Ui.INSTANCES=new WeakMap;class Gt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Wh(e)}static forPath(e,n,r){if(e.length%2!==0)throw new S("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Gt(n,new le(n._delegate,r,new x(e)))}static forKey(e,n,r){return new Gt(n,new le(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Js(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Js(this.firestore,Nn(this._delegate,e))}catch(n){throw pt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=U(e),e instanceof le?jT(this._delegate,e):!1}set(e,n){n=vy("DocumentReference.set",n);try{return n?E0(this._delegate,e,n):E0(this._delegate,e)}catch(r){throw pt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?S0(this._delegate,e):S0(this._delegate,e,n,...r)}catch(i){throw pt(i,"updateDoc()","DocumentReference.update()")}}delete(){return RF(this._delegate)}onSnapshot(...e){const n=hk(e),r=dk(e,i=>new eu(this.firestore,new Gn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return ak(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=NF(this._delegate):(e==null?void 0:e.source)==="server"?n=AF(this._delegate):n=CF(this._delegate),n.then(r=>new eu(this.firestore,new Gn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Gt(this.firestore,e?this._delegate.withConverter(Ui.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function pt(t,e,n){return t.message=t.message.replace(e,n),t}function hk(t){for(const e of t)if(typeof e=="object"&&!Pp(e))return e;return{}}function dk(t,e){var n,r;let i;return Pp(t[0])?i=t[0]:Pp(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class eu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Gt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return sk(this._delegate,e._delegate)}}class tu extends eu{data(e){const n=this._delegate.data(e);return HO(n!==void 0),n}}class ft{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Wh(e)}where(e,n,r){try{return new ft(this.firestore,rr(this._delegate,gF(e,n,r)))}catch(i){throw pt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new ft(this.firestore,rr(this._delegate,yF(e,n)))}catch(r){throw pt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ft(this.firestore,rr(this._delegate,vF(e)))}catch(n){throw pt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new ft(this.firestore,rr(this._delegate,wF(e)))}catch(n){throw pt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ft(this.firestore,rr(this._delegate,IF(...e)))}catch(n){throw pt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ft(this.firestore,rr(this._delegate,_F(...e)))}catch(n){throw pt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ft(this.firestore,rr(this._delegate,EF(...e)))}catch(n){throw pt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ft(this.firestore,rr(this._delegate,SF(...e)))}catch(n){throw pt(n,"endAt()","Query.endAt()")}}isEqual(e){return qT(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=DF(this._delegate):(e==null?void 0:e.source)==="server"?n=xF(this._delegate):n=qh(this._delegate),n.then(r=>new Op(this.firestore,new Mr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=hk(e),r=dk(e,i=>new Op(this.firestore,new Mr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return ak(this._delegate,n,r)}withConverter(e){return new ft(this.firestore,e?this._delegate.withConverter(Ui.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class KF{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new tu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Op{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new ft(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new tu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new KF(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new tu(this._firestore,r))})}isEqual(e){return sk(this._delegate,e._delegate)}}class Js extends ft{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Gt(this.firestore,e):null}doc(e){try{return e===void 0?new Gt(this.firestore,bc(this._delegate)):new Gt(this.firestore,bc(this._delegate,e))}catch(n){throw pt(n,"doc()","CollectionReference.doc()")}}add(e){return ok(this._delegate,e).then(n=>new Gt(this.firestore,n))}isEqual(e){return jT(this._delegate,e._delegate)}withConverter(e){return new Js(this.firestore,e?this._delegate.withConverter(Ui.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function fi(t){return ee(t,le)}/**
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
 */class wy{constructor(...e){this._delegate=new Lr(...e)}static documentId(){return new wy(Ce.keyField().canonicalString())}isEqual(e){return e=U(e),e instanceof Lr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class si{constructor(e){this._delegate=e}static serverTimestamp(){const e=FF();return e._methodName="FieldValue.serverTimestamp",new si(e)}static delete(){const e=$F();return e._methodName="FieldValue.delete",new si(e)}static arrayUnion(...e){const n=UF(...e);return n._methodName="FieldValue.arrayUnion",new si(n)}static arrayRemove(...e){const n=VF(...e);return n._methodName="FieldValue.arrayRemove",new si(n)}static increment(e){const n=BF(e);return n._methodName="FieldValue.increment",new si(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const HF={Firestore:uk,GeoPoint:Lh,Timestamp:fe,Blob:Za,Transaction:lk,WriteBatch:ck,DocumentReference:Gt,DocumentSnapshot:eu,Query:ft,QueryDocumentSnapshot:tu,QuerySnapshot:Op,CollectionReference:Js,FieldPath:wy,FieldValue:si,setLogLevel:GF,CACHE_SIZE_UNLIMITED:Z$};function QF(t,e){t.INTERNAL.registerComponent(new Tn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},HF)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YF(t){QF(t,(e,n)=>new uk(e,n,new WF)),t.registerVersion(zF,jF)}YF(qi);const XF={apiKey:"AIzaSyBd9qIqzD2iaoyOuqVoV4HtRkQ9h85Q8Mg",authDomain:"where-is-the-cat.firebaseapp.com",projectId:"where-is-the-cat",storageBucket:"where-is-the-cat.appspot.com",messagingSenderId:"349562676841",appId:"1:349562676841:web:2dc0e9d080c1f11406e4f8"},JF=qi.initializeApp(XF),$r=JF.firestore();qi.auth();const ZF="/where-is-the-cat/assets/easy-level-3dd74c60.jpg";class eU{constructor(e,n){this.x=e,this.y=n}}class C0{constructor(e,n){this.p1=e,this.p2=n}}function Go(t,e){return e.x<=Math.max(t.p1.x,t.p2.x)&&e.x<=Math.min(t.p1.x,t.p2.x)&&e.y<=Math.max(t.p1.y,t.p2.y)&&e.y<=Math.min(t.p1.y,t.p2.y)}function Ko(t,e,n){let r=(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y);return r==0?0:r<0?2:1}function tU(t,e){let n=Ko(t.p1,t.p2,e.p1),r=Ko(t.p1,t.p2,e.p2),i=Ko(e.p1,e.p2,t.p1),s=Ko(e.p1,e.p2,t.p2);return!!(n!=r&&i!=s||n==0&&Go(t,e.p1)||r==0&&Go(t,e.p2)||i==0&&Go(e,t.p1)||s==0&&Go(e,t.p2))}function fk(t,e,n){if(e<3)return!1;let r=new eU(9999,n.y),i=new C0(n,r),s=0,o=0;do{let a=new C0(t[o],t[(o+1)%e]);if(tU(a,i)){if(Ko(a.p1,n,a.p2)==0)return Go(a,n);s++}o=(o+1)%e}while(o!=0);return s&1}const Iy=({level:t,time:e})=>{const n=au(c=>c.changeDifficulty),[r,i]=B.useState(""),[s,o]=B.useState(!0);let a;return t==="levelOne"?a="Normal":t==="levelTwo"&&(a="Hard"),V("div",{children:s&&Me("form",{onSubmit:async c=>{c.preventDefault();try{const h=await ok(Nn($r,t),{name:r,time:e});console.log("Document written with ID: ",h.id),t!=="levelThree"?n(a):o(!1)}catch(h){console.error("Error adding document: ",h)}},children:[V("h1",{children:"You made it to the top 10!"}),V("p",{children:"Enter your name below:"}),Me("div",{className:"input-section",children:[V("input",{type:"text",onChange:c=>{i(c.target.value)},value:r,name:"name"}),V("button",{className:"add-score",children:"Submit"})]})]})})},_y=({level:t})=>{const[e,n]=B.useState(0),[r,i]=B.useState(!1),[s,o]=B.useState(!1),[a,u]=B.useState([]),l=au(v=>v.difficulty);B.useEffect(()=>{const D=$r.collection(t).orderBy("time","asc").limit(10).onSnapshot(g=>{const f=g.docs.map(p=>({id:p.id,...p.data()}));console.log(`Getting ${Nn}`),u(f)});return()=>D()},[]);const c=v=>{const D=`0${Math.round(v%60)}`.slice(-2);return`${`0${Math.floor(v/60)%60}`.slice(-2)}:${D}`};B.useEffect(()=>{setInterval(()=>{n(v=>v+1)},1e3)},[]),B.useEffect(()=>{n(0)},[l]);const h=()=>{i(!0)},d=()=>{i(!1)},m=()=>{o(!0)},y=()=>{o(!1)};return Me("div",{children:[V("nav",{children:Me("ul",{children:[V("div",{className:"logo-column",children:V("li",{className:"logo-text",children:"Where's the cat?"})}),Me("div",{className:"info-column",children:[V("li",{children:c(e)}),Me("li",{children:["Difficulty:"," ",V("span",{className:"difficulty-display",children:l})]}),V("li",{className:"nav-info",onClick:m,children:"Leaderboard"}),V("li",{className:"nav-info",onClick:h,children:"About"})]})]})}),r&&Me("div",{className:"about",children:[V("button",{className:"close-button",onClick:d,children:"X"}),V("h1",{children:"About"}),Me("div",{className:"about-text",children:[Me("p",{children:["This game was inspired by ",V("em",{children:"'Where's Waldo?'"}),". Instead of finding Waldo, you have to find the cat hidden in each photo! Try to do it quickly to compete for"," ",V("strong",{children:"a spot on the leaderboard!"})]}),Me("p",{children:["All the photos are courtesy of the ",V("em",{children:"There Is No Cat"})," ","subreddit. ",V("br",{}),"Made by ",V("strong",{children:"EnterOrion"})," using React and Firebase."]})]})]}),s&&Me("table",{children:[V("button",{className:"close-button",onClick:y,children:"X"}),Me("caption",{children:[V("span",{}),"Leaderboard"]}),V("thead",{children:Me("tr",{children:[V("th",{scope:"col",children:"Place"}),V("th",{scope:"col",children:"Name"}),V("th",{scope:"col",children:"Time (seconds)"})]})}),V("tbody",{children:a.map((v,D)=>[Me("tr",{children:[V("td",{children:D+1}),V("td",{children:v.name}),V("td",{children:v.time})]},D)])})]})]})},nU=()=>{const t=au(p=>p.changeDifficulty);class e{constructor(_,E){this.x=_,this.y=E}}const[n,r]=B.useState(!1),[i,s]=B.useState(0),[o,a]=B.useState([]),[u,l]=B.useState(0),[c,h]=B.useState(!1),[d,m]=B.useState([]),y=B.useRef(),v=B.useRef(),D=async()=>{await qh(Nn($r,"coordinates ")).then(p=>{const _=p.docs.map(E=>({...E.data()}));a(_)})},g=Date.now();return B.useEffect(()=>{D()},[]),B.useEffect(()=>{const _=$r.collection("levelOne").orderBy("time","asc").limit(10).onSnapshot(E=>{const k=E.docs.map(A=>({id:A.id,...A.data()}));console.log(`Getting ${Nn}`),m(k)});return()=>_()},[]),Me("div",{children:[V("div",{ref:v,children:V(_y,{level:"levelOne"})}),n&&V("div",{className:"green",children:"Cat found! 🐱"}),V("div",{className:"red",fade:i,onAnimationEnd:()=>s(0),children:"Try again!"}),c&&V(Iy,{time:u,level:"levelOne"}),V("img",{ref:y,src:ZF,onClick:p=>{const _=y.current.offsetWidth,E=y.current.offsetHeight,k=v.current.offsetHeight;let A=p.pageX/_,b=(p.pageY-k)/E,te=new e(A,b),j=[new e(o[0].x1,o[0].y1),new e(o[0].x2,o[0].y2),new e(o[0].x3,o[0].y3),new e(o[0].x4,o[0].y4),new e(o[0].x5,o[0].y5),new e(o[0].x6,o[0].y6),new e(o[0].x7,o[0].y7),new e(o[0].x8,o[0].y8),new e(o[0].x9,o[0].y9)];if(fk(j,9,te)){r(!0);let ht=(Date.now()-g)/1e3;l(ht);for(let zt=0;zt<d.length;zt++)d.length<10?setTimeout(()=>{h(!0)},3e3):ht<d[zt].time?setTimeout(()=>{h(!0)},3e3):zt===9&&setTimeout(()=>{t("Normal")},3e3)}else s(1)},alt:"Level one background"})]})},rU="/where-is-the-cat/assets/normal-level-0392912e.jpg",iU=()=>{const t=au(p=>p.changeDifficulty);class e{constructor(_,E){this.x=_,this.y=E}}const[n,r]=B.useState(!1),[i,s]=B.useState(0),[o,a]=B.useState([]),[u,l]=B.useState(0),[c,h]=B.useState(!1),[d,m]=B.useState([]),y=B.useRef(),v=B.useRef(),D=async()=>{await qh(Nn($r,"coordinates ")).then(p=>{const _=p.docs.map(E=>({...E.data()}));a(_)})},g=Date.now();return B.useEffect(()=>{D()},[]),B.useEffect(()=>{const _=$r.collection("levelTwo").orderBy("time","asc").limit(10).onSnapshot(E=>{const k=E.docs.map(A=>({id:A.id,...A.data()}));console.log(`Getting ${Nn}`),m(k)});return()=>_()},[]),Me("div",{children:[V("div",{ref:v,children:V(_y,{level:"levelTwo"})}),n&&V("div",{className:"green",children:"Cat found! 🐱"}),V("div",{className:"red",fade:i,onAnimationEnd:()=>s(0),children:"Try again!"}),c&&V(Iy,{time:u,level:"levelTwo"}),V("img",{ref:y,src:rU,alt:"Level two background",onClick:p=>{const _=y.current.offsetWidth,E=y.current.offsetHeight,k=v.current.offsetHeight;let A=p.pageX/_,b=(p.pageY-k)/E,te=new e(A,b),j=4,ct=[new e(o[2].x1,o[2].y1),new e(o[2].x2,o[2].y2),new e(o[2].x3,o[2].y3),new e(o[2].x4,o[2].y4)];if(fk(ct,j,te)){r(!0);let ht=(Date.now()-g)/1e3;l(ht);for(let zt=0;zt<d.length;zt++)d.length<10?setTimeout(()=>{h(!0)},3e3):ht<d[zt].time?setTimeout(()=>{h(!0)},3e3):zt===9&&setTimeout(()=>{t("Hard")},3e3)}else s(1)}})]})},sU="/where-is-the-cat/assets/hard-level-176ef8c7.jpg",oU=()=>{const[t,e]=B.useState(!1),[n,r]=B.useState([]),[i,s]=B.useState(0),[o,a]=B.useState(!1),[u,l]=B.useState(0),[c,h]=B.useState(!1),[d,m]=B.useState([]),y=B.useRef(),v=B.useRef(),D=async()=>{await qh(Nn($r,"coordinates ")).then(p=>{const _=p.docs.map(E=>({...E.data()}));r(_)})},g=Date.now();return B.useEffect(()=>{D()},[]),B.useEffect(()=>{const _=$r.collection("levelThree").orderBy("time","asc").limit(10).onSnapshot(E=>{const k=E.docs.map(A=>({id:A.id,...A.data()}));console.log(`Getting ${Nn}`),m(k)});return()=>_()},[]),Me("div",{children:[V("div",{ref:v,children:V(_y,{level:"levelThree"})}),t&&V("div",{className:"green",children:"Cat found! 🐱"}),V("div",{className:"red",fade:i,onAnimationEnd:()=>s(0),children:"Try again!"}),c&&V(Iy,{time:u,level:"levelThree"}),o&&V("div",{className:"green",children:"All cats found! 😸"}),V("img",{ref:y,src:sU,alt:"Level three background",onClick:p=>{const _=y.current.offsetWidth,E=y.current.offsetHeight,k=v.current.offsetHeight;let A=p.pageX/_,b=(p.pageY-k)/E;const te=Math.abs(A-n[1].x1)<.01,j=Math.abs(b-n[1].y1)<.01;if(te&&j){e(!0),setTimeout(()=>{a(!0)},1500);let an=(Date.now()-g)/1e3;l(an);for(let ht=0;ht<d.length;ht++)d.length<10?setTimeout(()=>{h(!0)},3500):an<d[ht].time&&setTimeout(()=>{h(!0)},3500)}else s(1)}})]})};function aU(){const t=au(e=>e.difficulty);return Me("div",{className:"App",children:[t==="Easy"&&V(nU,{}),t==="Normal"&&V(iU,{}),t==="Hard"&&V(oU,{})]})}Wd.createRoot(document.getElementById("root")).render(V(aU,{}));
