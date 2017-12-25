webpackJsonp([41],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(365)
}
var Component = __webpack_require__(172)(
  /* script */
  __webpack_require__(246),
  /* template */
  __webpack_require__(433),
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

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            peopleData: [{
                id: 0,
                peopleNum: 13,
                imgUrl: '/static/images/detail1.png'
            }, {
                id: 1,
                peopleNum: 13,
                imgUrl: '/static/images/detail1.png'
            }]
        };
    },
    mounted: function mounted() {},

    methods: {
        getData: function getData() {}
    }
});

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(327);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(109)("61d80ada", content, true);

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._l((_vm.peopleData), function(item, index) {
    return [(index) ? _c('div', {
      staticClass: "wx-area-line"
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "weui-cells no-margin"
    }, [_c('div', {
      staticClass: "weui-media-box weui-media-box_appmsg"
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
    }, [_vm._v(_vm._s(item.peopleNum) + "人")])])]), _vm._v(" "), _vm._m(0, true), _vm._v(" "), _vm._m(1, true), _vm._v(" "), _vm._m(2, true), _vm._v(" "), _vm._m(3, true)])]
  }), _vm._v(" "), _c('div', {
    staticClass: "wx-bottom-nav"
  }, [_c('router-link', {
    staticClass: "wx-nav-item",
    attrs: {
      "to": {}
    }
  }, [_vm._v("\n            营销研讨\n        ")]), _vm._v(" "), _c('router-link', {
    staticClass: "wx-nav-item",
    attrs: {
      "to": {
        name: 'marketPacket'
      }
    }
  }, [_vm._v("\n            营销红包\n        ")]), _vm._v(" "), _c('router-link', {
    staticClass: "wx-nav-item",
    attrs: {
      "to": {
        name: 'marketTask'
      }
    }
  }, [_vm._v("\n            营销任务\n        ")])], 1)], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell weui-cell_access show-message-box"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_vm._v("阅读数")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft"
  }, [_vm._v("556")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell weui-cell_access show-message-box"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_vm._v("阅读领券数")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft"
  }, [_vm._v("556")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell weui-cell_access show-message-box"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_vm._v("分享领券数")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft"
  }, [_vm._v("556")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell weui-cell_access show-message-box"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_vm._v("新增潜客数")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft"
  }, [_vm._v("556")])])
}]}

/***/ })

});