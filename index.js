!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("just-my-luck"),require("@seregpie/vector-math")):"function"==typeof define&&define.amd?define(["just-my-luck","@seregpie/vector-math"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).KMeans=t(r.JustMyLuck,r.VectorMath)}(this,(function(r,t){"use strict";function n(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var e=n(r),a=n(t);function o(r){return function(r){if(Array.isArray(r))return i(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||function(r,t){if(!r)return;if("string"==typeof r)return i(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(r,t)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function u(r){return Array.from({length:r})}function f(r,t){var n=0;return r.map(t).reduce((function(r,t,e){return t<r&&(r=t,n=e),r})),n}function c(){return[]}var m=Object.assign((function(r,t){var n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=a.distance,d=void 0===i?m.distance:i,s=a.map,l=void 0===s?m.map:s,p=a.maxIterations,y=void 0===p?m.maxIterations:p,v=a.mean,h=void 0===v?m.mean:v,b=a.random,g=void 0===b?m.random:b,A=Number.isFinite(t);if(A?n=t:(t=Array.from(t),n=t.length),!n)return[];if(r=Array.from(r),1===n)return[r];var j,k=new e.default(g),I=r.map(l);j=A?k.pickCombination(I,n):t.map(l);for(var x=[],M=function(r){var t=!0;if(I.forEach((function(r,n){var e=f(j,(function(t){return d(r,t)}));e!==x[n]&&(x[n]=e,t=!1)})),t)return"break";var e=u(n).map(c);x.forEach((function(r,t){e[r].push(I[t])})),j=j.map((function(r,t){var n=e[t];return n.length&&(r=h.apply(void 0,o(n))),r}))},S=0;S<y;S++){var w=M();if("break"===w)break}var E=u(n).map(c);return x.forEach((function(t,n){E[t].push(r[n])})),E}),{distance:a.default.distance,map:function(r){return r},maxIterations:1024,mean:a.default.mean,random:Math.random});return m}));
