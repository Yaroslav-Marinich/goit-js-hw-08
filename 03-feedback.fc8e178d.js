function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,r,i,a,u,f,c=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function w(e){return c=e,u=setTimeout(j,t),l?g(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function j(){var e=v();if(h(e))return x(e);u=setTimeout(j,function(e){var n=t-(e-f);return d?m(n,i-(e-c)):n}(e))}function x(e){return u=void 0,p&&o?g(e):(o=r=void 0,a)}function S(){var e=v(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return w(f);if(d)return u=setTimeout(j,t),g(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,b(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},S.flush=function(){return void 0===u?a:x(v())},S}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const g=document.querySelector(".feedback-form"),w=document.querySelector(".feedback-form input"),h=document.querySelector(".feedback-form textarea");g.addEventListener("input",e(t)((()=>{const e={email:w.value,text:h.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))})),500),window.onload=e=>{try{let e=JSON.parse(localStorage.getItem("feedback-form-state"));w.value=e.email,h.value=e.text}catch(e){loadForm=[]}},g.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:w.value,message:h.value}),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.fc8e178d.js.map
