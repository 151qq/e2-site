webpackJsonp([30],{

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(352)
}
var Component = __webpack_require__(172)(
  /* script */
  __webpack_require__(280),
  /* template */
  __webpack_require__(410),
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

/***/ 280:
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
            },
            imgList: ['/static/images/bench1.png', '/static/images/bench1.png', '/static/images/bench1.png'],
            fileList: [{
                id: 0,
                imgUrl: '/static/images/detail1.png',
                title: '爱谁谁爱啥啥',
                des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
            }, {
                id: 1,
                imgUrl: '/static/images/detail1.png',
                title: '不知道不明了',
                des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
            }, {
                id: 2,
                imgUrl: '/static/images/detail1.png',
                title: '你瞅啥，你看啥',
                des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
            }, {
                id: 3,
                imgUrl: '/static/images/detail1.png',
                title: '瞅你咋地',
                des: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
            }]
        };
    },
    mounted: function mounted() {},

    methods: {
        getData: function getData() {}
    }
});

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(false);
// imports


// module
exports.push([module.i, ".member-detail-box .avatar-box{position:relative;z-index:10;height:60px;overflow:hidden;margin-top:-40px}.member-detail-box .avatar-box div{float:right}.member-detail-box .avatar-box div img{display:block;width:100%;height:100%}.member-detail-box .avatar-box .img-box{width:60px;height:60px;border:1px solid #e5e5e5;background:#fff;margin-right:15px;box-sizing:border-box}.member-detail-box .avatar-box .name-box{font-size:16px;line-height:40px;margin-right:20px;color:#fff}", ""]);

// exports


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(314);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(109)("500d9ba2", content, true);

/***/ }),

/***/ 410:
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
  }, [_vm._v(_vm._s(_vm.memberInfo.name))])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("接待备忘")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_form no-margin"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "weui-cell no-line"
  }, [_c('div', {
    staticClass: "weui-uploader"
  }, [_c('div', {
    staticClass: "weui-uploader__bd"
  }, [_c('ul', {
    staticClass: "weui-uploader__files",
    attrs: {
      "id": "uploaderFiles"
    }
  }, [_vm._l((_vm.imgList), function(item, index) {
    return _c('li', {
      staticClass: "weui-uploader__file",
      on: {
        "click": function($event) {
          _vm.showBigImg(index)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item
      }
    })])
  }), _vm._v(" "), _c('li', {
    staticClass: "weui-uploader__input-box",
    on: {
      "click": _vm.uploadImg
    }
  })], 2)])])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__title"
  }, [_vm._v("附件")]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells no-margin"
  }, _vm._l((_vm.fileList), function(item, index) {
    return _c('router-link', {
      staticClass: "weui-media-box weui-media-box_appmsg",
      attrs: {
        "to": {}
      }
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
    }, [_vm._v(_vm._s(item.des))])])])
  })), _vm._v(" "), _c('a', {
    staticClass: "add-file-btn"
  }, [_vm._v("添加附件")]), _vm._v(" "), _vm._m(2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
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
  }, [_vm._v("接待结果")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('select', {
    staticClass: "weui-select"
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("中国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("美国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("英国")])])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label"
  }, [_vm._v("购买产品")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_select weui-cell_select-after"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("客户性别")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('select', {
    staticClass: "weui-select"
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("中国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("美国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("英国")])])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_select weui-cell_select-after"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("客户年龄")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('select', {
    staticClass: "weui-select"
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("中国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("美国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("英国")])])])]), _vm._v(" "), _c('div', {
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
    staticClass: "weui-select"
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("中国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("美国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("英国")])])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_select weui-cell_select-after"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("社会阶层")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('select', {
    staticClass: "weui-select"
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("中国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("美国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("英国")])])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_select weui-cell_select-after"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("客户职业")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('select', {
    staticClass: "weui-select"
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("中国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("美国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("英国")])])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_select weui-cell_select-after"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("沟通特征")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('select', {
    staticClass: "weui-select"
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("中国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("美国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("英国")])])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_select weui-cell_select-after"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("行为特征")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('select', {
    staticClass: "weui-select"
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("中国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("美国")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("英国")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('textarea', {
    staticClass: "weui-textarea",
    attrs: {
      "placeholder": "请输入文本内容...",
      "rows": "3"
    }
  })])])
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