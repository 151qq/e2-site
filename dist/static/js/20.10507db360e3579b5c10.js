webpackJsonp([20],{

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(351)
}
var Component = __webpack_require__(172)(
  /* script */
  __webpack_require__(286),
  /* template */
  __webpack_require__(406),
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

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['imgPath', 'index', 'isShowImg'],
    data: function data() {
        return {};
    },

    methods: {
        hiddenImg: function hiddenImg() {
            this.isShowImg.value = false;
        },
        deleteImg: function deleteImg() {
            this.$emit('deleteImg', this.index);
            this.isShowImg.value = false;
        }
    }
});

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(false);
// imports


// module
exports.push([module.i, ".img-box-bg{position:fixed;top:0;left:0;width:100%;height:100%;background:#000;z-index:1000}.img-box-bg .img-big-box{position:absolute;width:100%;top:50%;transform:translateY(-50%)}.img-box-bg .img-big-box img{display:block;width:100%}.img-box-bg .delete-box{position:absolute;width:100%;bottom:0;left:0;height:60px;text-align:center}.img-box-bg .delete-box a{display:inline-block;width:60px;height:60px;text-align:center;line-height:60px}", ""]);

// exports


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(109)("783f5dca", content, true);

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(176)
}
var Component = __webpack_require__(172)(
  /* script */
  __webpack_require__(174),
  /* template */
  __webpack_require__(178),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowImg.value),
      expression: "isShowImg.value"
    }],
    staticClass: "img-box-bg",
    on: {
      "click": _vm.hiddenImg
    }
  }, [_c('div', {
    staticClass: "img-big-box"
  }, [_c('img', {
    attrs: {
      "src": _vm.imgPath
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "delete-box"
  }, [_c('a', {
    staticClass: "weui-gallery__del",
    attrs: {
      "href": "javascript:"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.deleteImg($event)
      }
    }
  }, [_c('i', {
    staticClass: "weui-icon-delete weui-icon_gallery-delete"
  })])])])
},staticRenderFns: []}

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_tools__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_deleteImg_vue__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_deleteImg_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_deleteImg_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            fontNum: 0,
            submitCotent: '',
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
            }],
            totalFont: 140,
            nowIndex: '',
            nowPath: '',
            isShowImg: {
                value: false
            }
        };
    },
    mounted: function mounted() {
        console.log(this.imgList, 'imgList');
    },

    watch: {
        submitCotent: function submitCotent() {
            this.fontNum = this.submitCotent.length;
        }
    },
    methods: {
        uploadImg: function uploadImg(e) {
            var _this = this;

            console.log(e);
            __WEBPACK_IMPORTED_MODULE_0__utils_tools__["a" /* default */].upFile(e).then(function (res) {
                if (res.result.success == '1') {
                    var imgUrl = res.result.result[0];
                    _this.imgList.push(imgUrl);
                } else {}
            });
        },
        goBack: function goBack() {
            this.$router.go(-1);
        },
        showBigImg: function showBigImg(index) {
            this.nowIndex = index;
            this.nowPath = this.imgList[index];
            this.isShowImg.value = true;
        },
        deleteImg: function deleteImg(index) {
            this.imgList.splice(index, 1);
        }
    },
    components: {
        deleteImg: __WEBPACK_IMPORTED_MODULE_1__common_deleteImg_vue___default.a
    }
});

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(false);
// imports


// module
exports.push([module.i, ".submit-box{position:fixed;left:0;top:0;width:100%;height:100%;background:#fff;z-index:1001}.submit-box .weui-cells{margin-top:0}.submit-box .no-line:after,.submit-box .no-line:before{height:0;border:none}.submit-box .weui-uploader__file{background:#e5e5e5;position:relative;overflow:hidden}.submit-box .weui-uploader__file img{position:absolute;width:100%;top:50%;transform:translateY(-50%)}", ""]);

// exports


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(313);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(109)("290a2fd0", content, true);

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "submit-box"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "wx-area-line"
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_form no-line"
  }, [_c('div', {
    staticClass: "weui-cell no-line"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.submitCotent),
      expression: "submitCotent"
    }],
    staticClass: "weui-textarea",
    attrs: {
      "placeholder": "这一刻的想法...",
      "rows": "3"
    },
    domProps: {
      "value": (_vm.submitCotent)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.submitCotent = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
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
    staticClass: "weui-uploader__input-box"
  })], 2)])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("添加附件")]), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('a', {
    staticClass: "weui-btn weui-btn_primary",
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v("发布")])]), _vm._v(" "), _c('delete-img', {
    attrs: {
      "index": _vm.nowIndex,
      "img-path": _vm.nowPath,
      "is-show-img": _vm.isShowImg
    },
    on: {
      "deleteImg": _vm.deleteImg
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell weui-cell_select weui-cell_select-after"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("评论情绪")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("英国")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell weui-cell_select weui-cell_select-after"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("评论标注")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("英国")])])])])
}]}

/***/ })

});