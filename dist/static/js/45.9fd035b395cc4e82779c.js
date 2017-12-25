webpackJsonp([45],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(343)
}
var Component = __webpack_require__(172)(
  /* script */
  __webpack_require__(235),
  /* template */
  __webpack_require__(394),
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

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            memberInfo: {
                name: '爱咋咋地',
                tel: '1387762887',
                avatar: '/static/images/head-icon.png',
                coverImg: '/static/images/bench1.png'
            }
        };
    },
    mounted: function mounted() {},

    methods: {
        getData: function getData() {}
    }
});

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(false);
// imports


// module
exports.push([module.i, ".member-detail-box .avatar-box{position:relative;z-index:10;height:60px;overflow:hidden;margin-top:-40px}.member-detail-box .avatar-box div{float:right}.member-detail-box .avatar-box div img{display:block;width:100%;height:100%}.member-detail-box .avatar-box .img-box{width:60px;height:60px;border:1px solid #e5e5e5;background:#fff;margin-right:15px;box-sizing:border-box}.member-detail-box .avatar-box .name-box{font-size:16px;line-height:40px;margin-right:20px;color:#fff}", ""]);

// exports


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(305);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(109)("5e990fd2", content, true);

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "member-detail-box"
  }, [_c('div', {
    staticClass: "wx-area-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.memberInfo.coverImg
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "avatar-box"
  }, [_c('div', {
    staticClass: "img-box"
  }, [_c('img', {
    attrs: {
      "src": _vm.memberInfo.avatar
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "name-box"
  }, [_vm._v(_vm._s(_vm.memberInfo.name))])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "weui-cells weui-cells_form"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label"
  }, [_vm._v("姓名")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_vcode"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label"
  }, [_vm._v("手机")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "type": "tel",
      "placeholder": "请输入手机号"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft"
  }, [_c('button', {
    staticClass: "weui-vcode-btn"
  }, [_vm._v("获取验证码")])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label"
  }, [_vm._v("验证码")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入"
    }
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('a', {
    staticClass: "weui-btn weui-btn_primary",
    attrs: {
      "href": "/promotionFranchise/registorConfirm"
    }
  }, [_vm._v("确认")])])
}]}

/***/ })

});