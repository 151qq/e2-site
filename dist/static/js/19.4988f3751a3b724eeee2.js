webpackJsonp([19],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(340)
}
var Component = __webpack_require__(172)(
  /* script */
  __webpack_require__(266),
  /* template */
  __webpack_require__(388),
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

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['isShowSheet', 'itemList', 'cb'],
    data: function data() {
        return {};
    },

    methods: {
        hiddenSheet: function hiddenSheet() {
            this.isShowSheet.value = false;
        }
    }
});

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_sheet_vue__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_sheet_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_sheet_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            listData: [],
            isShowSheet: {
                value: false
            },
            sheetList: [{
                label: '通用任务',
                pathName: 'activity-task'
            }, {
                label: '编辑任务',
                pathName: 'edit-task'
            }, {
                label: '推广任务',
                pathName: 'spreed-task'
            }, {
                label: '地推任务',
                pathName: 'push-task'
            }, {
                label: '营销活动方案设计任务',
                pathName: 'design-task'
            }]
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
                title: '通用任务',
                date: '2017-09-09 上午 10:23',
                state: '0',
                type: 'activity'
            }, {
                id: 1,
                imgUrl: '/static/images/detail1.png',
                title: '编辑任务',
                date: '2017-09-09 上午 10:23',
                state: '0',
                type: 'edit'
            }, {
                id: 2,
                imgUrl: '/static/images/detail1.png',
                title: '地推任务',
                date: '2017-09-09 上午 10:23',
                state: '1',
                type: 'push'
            }, {
                id: 3,
                imgUrl: '/static/images/detail1.png',
                title: '推广任务',
                date: '2017-09-09 上午 10:23',
                state: '1',
                type: 'spreed'
            }, {
                id: 3,
                imgUrl: '/static/images/detail1.png',
                title: '营销活动方案设计任务',
                date: '2017-09-09 上午 10:23',
                state: '1',
                type: 'design'
            }];

            this.listData = listDataITL;
        },
        showSheet: function showSheet() {
            this.isShowSheet.value = true;
        },
        creatTask: function creatTask(item) {
            this.$router.push({ name: item.pathName });
        }
    },
    components: {
        sheet: __WEBPACK_IMPORTED_MODULE_0__common_sheet_vue___default.a
    }
});

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(false);
// imports


// module
exports.push([module.i, ".task-list-box .weui-cells{margin-top:0}", ""]);

// exports


/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(108)(false);
// imports


// module
exports.push([module.i, ".sheet-box .weui-mask{opacity:0;display:none}.sheet-box .show-box{opacity:1;display:block}", ""]);

// exports


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(302);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(109)("96be8200", content, true);

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(326);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(109)("6d18d340", content, true);

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(364)
}
var Component = __webpack_require__(172)(
  /* script */
  __webpack_require__(241),
  /* template */
  __webpack_require__(432),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "task-list-box page__bd"
  }, [_c('div', {
    staticClass: "weui-cells"
  }, _vm._l((_vm.listData), function(item, index) {
    return _c('router-link', {
      staticClass: "weui-media-box weui-media-box_appmsg show-state-box",
      attrs: {
        "to": {
          name: item.type + '-detail',
          query: {
            id: item.id
          }
        }
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
    }, [_vm._v(_vm._s(item.date))])]), _vm._v(" "), (item.state == '0') ? _c('div', {
      staticClass: "weui-cell__ft"
    }, [_c('span', {
      staticClass: "no-done"
    }, [_vm._v("待办")])]) : _vm._e(), _vm._v(" "), (item.state == '1') ? _c('div', {
      staticClass: "weui-cell__ft"
    }, [_c('span', {
      staticClass: "has-done"
    }, [_vm._v("完成")])]) : _vm._e()])
  })), _vm._v(" "), _c('div', {
    staticClass: "wx-bottom-nav"
  }, [_c('router-link', {
    staticClass: "wx-nav-item",
    attrs: {
      "to": {}
    }
  }, [_vm._v("\n            我的待办任务\n        ")]), _vm._v(" "), _c('a', {
    staticClass: "wx-nav-item",
    on: {
      "click": _vm.showSheet
    }
  }, [_vm._v("\n            新建任务\n        ")]), _vm._v(" "), _c('router-link', {
    staticClass: "wx-nav-item",
    attrs: {
      "to": {
        name: 'assignment-task'
      }
    }
  }, [_vm._v("\n            我发布的任务\n        ")])], 1), _vm._v(" "), _c('sheet', {
    attrs: {
      "is-show-sheet": _vm.isShowSheet,
      "item-list": _vm.sheetList,
      "cb": _vm.creatTask
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "sheet-box",
    on: {
      "click": function($event) {
        if ($event.target !== $event.currentTarget) { return null; }
        _vm.hiddenSheet($event)
      }
    }
  }, [_c('div', {
    staticClass: "weui-mask",
    class: _vm.isShowSheet.value ? 'show-box' : ''
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-actionsheet",
    class: _vm.isShowSheet.value ? 'weui-actionsheet_toggle' : ''
  }, [_c('div', {
    staticClass: "weui-actionsheet__menu"
  }, _vm._l((_vm.itemList), function(item, index) {
    return _c('div', {
      staticClass: "weui-actionsheet__cell",
      on: {
        "click": function($event) {
          _vm.cb(item)
        }
      }
    }, [_vm._v(_vm._s(item.label))])
  })), _vm._v(" "), _c('div', {
    staticClass: "weui-actionsheet__action"
  }, [_c('div', {
    staticClass: "weui-actionsheet__cell",
    on: {
      "click": _vm.hiddenSheet
    }
  }, [_vm._v("取消")])])])])
},staticRenderFns: []}

/***/ })

});