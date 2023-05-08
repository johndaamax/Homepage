import{r as d}from"./index.45a47ed6.js";function _(e,n,u){let r=new Set([...n,void 0]);return e.listen((t,s)=>{r.has(s)&&u(t,s)})}let o=[],h=(e,n)=>{let u,r=[],t={lc:0,l:n||0,value:e,set(s){t.value=s,t.notify()},get(){return t.lc||t.listen(()=>{})(),t.value},notify(s){u=r;let l=!o.length;for(let i=0;i<u.length;i+=2)o.push(u[i],t.value,s,u[i+1]);if(l){for(let i=0;i<o.length;i+=4){let v=!1;for(let a=i+7;a<o.length;a+=4)if(o[a]<o[i+3]){v=!0;break}v?o.push(o[i],o[i+1],o[i+2],o[i+3]):o[i](o[i+1],o[i+2])}o.length=0}},listen(s,l){return r===u&&(r=r.slice()),t.lc=r.push(s,l||t.l)/2,()=>{r===u&&(r=r.slice());let i=r.indexOf(s);~i&&(r.splice(i,2),t.lc--,t.lc||t.off())}},subscribe(s,l){let i=t.listen(s,l);return s(t.value),i},off(){}};return t};var y={},E={get exports(){return y},set exports(e){y=e}},S={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=d;function g(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var k=typeof Object.is=="function"?Object.is:g,w=f.useState,O=f.useEffect,b=f.useLayoutEffect,j=f.useDebugValue;function R(e,n){var u=n(),r=w({inst:{value:u,getSnapshot:n}}),t=r[0].inst,s=r[1];return b(function(){t.value=u,t.getSnapshot=n,p(t)&&s({inst:t})},[e,u,n]),O(function(){return p(t)&&s({inst:t}),e(function(){p(t)&&s({inst:t})})},[e]),j(u),u}function p(e){var n=e.getSnapshot;e=e.value;try{var u=n();return!k(e,u)}catch{return!0}}function $(e,n){return n()}var L=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?$:R;S.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:L;(function(e){e.exports=S})(E);function Q(e,n={}){let u=d.useCallback(t=>n.keys?_(e,n.keys,t):e.listen(t),[n.keys,e]),r=e.get.bind(e);return y.useSyncExternalStore(u,r,r)}const U=h(!1);var x={},P={get exports(){return x},set exports(e){x=e}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D=d,I=Symbol.for("react.element"),N=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,q=D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function m(e,n,u){var r,t={},s=null,l=null;u!==void 0&&(s=""+u),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)T.call(n,r)&&!C.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)t[r]===void 0&&(t[r]=n[r]);return{$$typeof:I,type:e,key:s,ref:l,props:t,_owner:q.current}}c.Fragment=N;c.jsx=m;c.jsxs=m;(function(e){e.exports=c})(P);export{U as i,x as j,Q as u};
