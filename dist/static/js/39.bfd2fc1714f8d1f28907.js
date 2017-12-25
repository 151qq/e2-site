webpackJsonp([39],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(339)
}
var Component = __webpack_require__(172)(
  /* script */
  __webpack_require__(252),
  /* template */
  __webpack_require__(387),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 172:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            listData: []
        };
    },
    mounted: function mounted() {
        this.getData();
    },

    methods: {
        getData: function getData() {
            var listDataITL = [{
                id: 0,
                imgUrl: '/static/images/detail1.png',
                title: '爱谁谁爱啥啥',
                paket: 22,
                integral: 33,
                date: '2017-02-09'
            }, {
                id: 1,
                imgUrl: '/static/images/detail1.png',
                title: '不知道不明了',
                paket: 22,
                integral: '',
                date: '2017-02-09'
            }, {
                id: 2,
                imgUrl: '/static/images/detail1.png',
                title: '你瞅啥，你看啥',
                paket: 22,
                integral: '',
                date: '2017-02-09'
            }, {
                id: 3,
                imgUrl: '/static/images/detail1.png',
                title: '瞅你咋地',
                paket: '',
                integral: 33,
                date: '2017-02-09'
            }];

            this.listData = listDataITL;
        }
    }
});

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(false);
// imports


// module
exports.push([module.i, ".paket-case-box .weui-cells{margin-top:0}.paket-case-box .weui-media-box__desc{font-size:16px;color:#000;line-height:1.6}.paket-case-box .weui-cell__ft{height:45px;color:#999;font-size:14px}", ""]);

// exports


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(301);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(109)("38e51082", content, true);

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "paket-case-box page__bd"
  }, [_c('div', {
    staticClass: "weui-cells"
  }, _vm._l((_vm.listData), function(item, index) {
    return _c('div', {
      staticClass: "weui-media-box weui-media-box_appmsg show-message-box"
    }, [_c('div', {
      staticClass: "weui-media-box__hd"
    }, [_c('img', {
      staticClass: "weui-media-box__thumb",
      attrs: {
        "src": item.imgUrl
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "weui-media-box__bd"
    }, [_c('h4', {
      staticClass: "weui-media-box__title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', {
      staticClass: "weui-media-box__desc"
    }, [(item.paket) ? _c('span', [_vm._v("红包 " + _vm._s(item.paket) + "   ")]) : _vm._e(), _vm._v(" "), (item.integral) ? _c('span', [_vm._v("积分 " + _vm._s(item.integral) + " ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
      staticClass: "weui-cell__ft"
    }, [_vm._v(_vm._s(item.date))])])
  }))])
},staticRenderFns: []}

/***/ })

});