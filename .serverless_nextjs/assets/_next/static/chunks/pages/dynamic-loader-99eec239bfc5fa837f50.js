_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"2qu3":function(e,t,n){"use strict";var r=n("lSNA"),o=n("lwsE"),i=n("W8MJ");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var s,d=(s=n("q1tI"))&&s.__esModule?s:{default:s},f=n("8L3h"),p=n("jwwS");var b=[],_=[],m=!1;function y(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function h(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=y(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function g(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new O(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!m&&"function"===typeof n.webpack){var i=n.webpack();_.push((function(e){var t,n=l(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(a){n.e(a)}finally{n.f()}}))}var a=function(e,t){o();var i=d.default.useContext(p.LoadableContext),a=(0,f.useSubscription)(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),d.default.useMemo((function(){return a.loading||a.error?d.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?n.render(a.loaded,e):null}),[e,a])};return a.preload=function(){return o()},a.displayName="LoadableComponent",d.default.forwardRef(a)}var O=function(){function e(t,n){o(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function j(e){return g(y,e)}function w(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}j.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return g(h,e)},j.preloadAll=function(){return new Promise((function(e,t){w(b).then(e,t)}))},j.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return m=!0,t()};w(_,e).then(n,n)}))},window.__NEXT_PRELOADREADY=j.preloadReady;var E=j;t.default=E},JvsX:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dynamic-loader",function(){return n("Kesa")}])},Kesa:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("q1tI"),i=n("vRNQ"),a=n.n(i),u=n("Vvt1"),l=n.n(u),c=l()((function(){return Promise.all([n.e(2),n.e(12)]).then(n.bind(null,"EMJK"))}),{loading:function(){return Object(r.jsx)("p",{children:"Loading..."})},loadableGenerated:{webpack:function(){return["EMJK"]},modules:["../../components/animation.js"]}}),s=l()((function(){return n.e(13).then(n.bind(null,"ZCmT"))}),{loading:function(){return Object(r.jsx)("p",{children:"Loading..."})},loadableGenerated:{webpack:function(){return["ZCmT"]},modules:["../../components/giraffe.js"]}});t.default=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1],i=Object(o.useState)(!1),u=i[0],l=i[1];return Object(r.jsxs)("div",{className:a.a.container,children:[t?Object(r.jsx)(s,{}):Object(r.jsx)("button",{onClick:function(){return l(!1),void n(!0)},children:"CLICK FOR GIRAFFE"}),u?Object(r.jsx)(c,{}):Object(r.jsx)("button",{onClick:function(){return n(!1),void l(!0)},children:"CLICK FOR SOLDIER"})]})}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Vvt1:function(e,t,n){e.exports=n("a6RD")},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},a6RD:function(e,t,n){"use strict";var r=n("lSNA");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=l,t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i(i({},r),e));if(r=i(i({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=a.default.Map;var o={},u=e.modules();Object.keys(u).forEach((function(e){var t=u[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}r.loadableGenerated&&delete(r=i(i({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,l(n,r);delete r.ssr}return n(r)};u(n("q1tI"));var a=u(n("2qu3"));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},jwwS:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",supervillainImage:"Home_supervillainImage__LS88E",villainContainer:"Home_villainContainer__36sw9",villainList:"Home_villainList__mriGI",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}}},[["JvsX",0,1]]]);