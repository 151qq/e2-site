webpackJsonp([28],{

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(346)
}
var Component = __webpack_require__(172)(
  /* script */
  __webpack_require__(284),
  /* template */
  __webpack_require__(398),
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

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },
    mounted: function mounted() {},

    methods: {
        getData: function getData() {}
    }
});

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(false);
// imports


// module
exports.push([module.i, ".spreed-join-box .weui-cells{margin-top:0}", ""]);

// exports


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(308);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(109)("b020e190", content, true);

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "spreed-join-box"
  }, [_c('section', {
    staticClass: "weui-cells weui-cells_form"
  }, [_c('div', {
    staticClass: "weui-cell weui-cell_select weui-cell_select-after"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("性别")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('select', {
    staticClass: "weui-select",
    attrs: {
      "name": "select2"
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("男")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("女")])])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_select weui-cell_select-after"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("年龄")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('select', {
    staticClass: "weui-select",
    attrs: {
      "name": "select2"
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("3")])])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_select weui-cell_select-after"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("教育背景")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('select', {
    staticClass: "weui-select",
    attrs: {
      "name": "select2"
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("3")])])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_select weui-cell_select-after"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("职业")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('select', {
    staticClass: "weui-select",
    attrs: {
      "name": "select2"
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("3")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('a', {
    staticClass: "weui-btn weui-btn_primary",
    attrs: {
      "href": "/check-confirm"
    }
  }, [_vm._v("确认")])])])
}]}

/***/ })

});