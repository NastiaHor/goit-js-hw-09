function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("7Y9D8");const u=document.querySelector(".form");function l({position:n,delay:t}){e(i).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)}function a({position:n,delay:t}){e(i).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)}function s(e,n){return new Promise(((t,o)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}u.addEventListener("submit",(e=>{e.preventDefault();const{delay:n,step:t,amount:o}=function(e){const n=e.querySelector('input[name="delay"]'),t=e.querySelector('input[name="step"]'),o=e.querySelector('input[name="amount"]');return{delay:parseInt(n.value),step:parseInt(t.value),amount:parseInt(o.value)}}(u);!function(e,n,t){for(let o=1;o<=t;o+=1)s(o,e+(o-1)*n).then((e=>l(e))).catch((e=>a(e)))}(n,t,o)}));
//# sourceMappingURL=03-promises.588646f5.js.map