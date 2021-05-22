(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Demo/index.ux?uxType=page":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Demo/index.ux?uxType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ajax = _interopRequireDefault(__webpack_require__(/*! ../../helper/ajax.js */ "./src/helper/ajax.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  private: {
    size: 10,
    url: 'https://wikihow.xiaozuowen.net/categories/',
    currentIndex: 0,
    tabList: ['饮食与休闲', '艺术与娱乐', '健康', '教育与交流', '运动与保健', '旅行', '工作', '家居与园艺'],
    list: []
  },

  onInit() {
    this.initList();
  },

  initList() {
    this.list = this.tabList.map((e, idx) => {
      return {
        name: e,
        index: idx,
        data: [],
        render: this.currentIndex === idx,
        padding: false
      };
    });
  },

  onChangeTabIndex(evt) {
    this.currentIndex = evt.index;
    this.list = this.list.map((e, idx) => {
      return Object.assign({}, e, {
        render: this.currentIndex === idx,
        data: this.currentIndex === idx ? e.data : []
      });
    });

    if (this.list[this.currentIndex].data.length === 0) {
      this.getNextPage();
    }
  },

  getNextPage() {
    let url = `${this.url}${this.tabList[this.currentIndex]}`;
    let params = {
      size: this.size,
      offset: this.list[this.currentIndex].data.length
    };
    this.list[this.currentIndex].padding = true;

    _ajax.default.get(url, params).then(res => {
      let list = res.list;

      let tabData = _objectSpread(_objectSpread({}, this.list[this.currentIndex]), {}, {
        data: [...this.list[this.currentIndex].data, ...list],
        padding: false
      });

      this.list.splice(this.currentIndex, 1, tabData);
    });
  }

};
exports.default = _default;
const moduleOwn = exports.default || module.exports;
const accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    const accType = typeof moduleOwn[acc];

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (const name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Demo/padding.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Demo/padding.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: {
    size: [1, 2, 3, 4, 5]
  },

  onInit() {}

};
exports.default = _default;}

/***/ }),

/***/ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Demo/tabitem.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Demo/tabitem.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: ['index', 'itemdata', 'currentIndex'],
  data: {
    loadMore: false
  },

  onInit() {
    this.$watch('currentIndex', 'watchCurrentIndex');
  },

  watchCurrentIndex(newValue, oldValue) {
    if (parseInt(this.index) === this.currentIndex) {
      console.info(`当前用户选择了这个标签：${this.index}, ${newValue}, ${oldValue}`);
    }
  },

  onScrollBottom() {
    if (this.itemdata.padding) {
      return;
    }

    this.$emit('scrollbottom', {
      index: this.index
    });
  }

};
exports.default = _default;}

/***/ }),

/***/ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/sass-loader/dist/cjs.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Demo/index.ux?uxType=page":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/sass-loader/dist/cjs.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Demo/index.ux?uxType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".wrapper": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".wrapper .tab-bar .tab-item": {
    "paddingTop": "0px",
    "paddingRight": "16px",
    "paddingBottom": "0px",
    "paddingLeft": "16px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        }
      ]
    }
  },
  ".wrapper .tab-bar .tab-item .item": {
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        }
      ]
    }
  },
  ".wrapper .tab-bar .tab-item .item .tab-title": {
    "color": "#333333",
    "marginBottom": "4px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-title"
        }
      ]
    }
  },
  ".wrapper .tab-bar .tab-item .item .line": {
    "width": "100%",
    "height": "4px",
    "borderRadius": "2px",
    "backgroundColor": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "line"
        }
      ]
    }
  },
  ".wrapper .tab-bar .tab-item .active .tab-title": {
    "fontWeight": "bold",
    "color": "#636ce5",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "active"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-title"
        }
      ]
    }
  },
  ".wrapper .tab-bar .tab-item .active .line": {
    "backgroundColor": "#636ce5",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrapper"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "active"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "line"
        }
      ]
    }
  }
}

/***/ }),

/***/ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/sass-loader/dist/cjs.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Demo/padding.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/sass-loader/dist/cjs.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Demo/padding.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".padding-comps": {
    "width": "100%"
  },
  ".padding-comps .padding-list": {
    "flexDirection": "column",
    "paddingTop": "0px",
    "paddingRight": "24px",
    "paddingBottom": "0px",
    "paddingLeft": "24px",
    "width": "100%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-comps"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-list"
        }
      ]
    }
  },
  ".padding-comps .padding-list .padding-item": {
    "marginBottom": "16px",
    "paddingBottom": "16px",
    "borderBottomWidth": "1px",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#e1e6eb",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-comps"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-item"
        }
      ]
    }
  },
  ".padding-comps .padding-list .padding-item .text-wrap": {
    "flexGrow": 1,
    "flexDirection": "column",
    "marginRight": "16px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-comps"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-wrap"
        }
      ]
    }
  },
  ".padding-comps .padding-list .padding-item .text-wrap .title-wrap": {
    "marginTop": "16px",
    "marginBottom": "14px",
    "height": "30px",
    "width": "120px",
    "backgroundColor": "#e1e6eb",
    "borderRadius": "4px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-comps"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title-wrap"
        }
      ]
    }
  },
  ".padding-comps .padding-list .padding-item .text-wrap .desc-wrap": {
    "height": "20px",
    "marginTop": "5px",
    "marginRight": "0px",
    "marginBottom": "5px",
    "marginLeft": "0px",
    "backgroundColor": "#e1e6eb",
    "borderRadius": "4px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-comps"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "desc-wrap"
        }
      ]
    }
  },
  ".padding-comps .padding-list .padding-item .img-wrap": {
    "flexGrow": 0,
    "width": "120px",
    "height": "120px",
    "backgroundColor": "#e1e6eb",
    "borderRadius": "4px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-comps"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "padding-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "img-wrap"
        }
      ]
    }
  }
}

/***/ }),

/***/ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/sass-loader/dist/cjs.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Demo/tabitem.ux?uxType=comp":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/sass-loader/dist/cjs.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Demo/tabitem.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".section-container": {
    "paddingTop": "10px"
  },
  ".articles": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "center",
    "backgroundColor": "#ffffff",
    "paddingTop": "0px",
    "paddingRight": "24px",
    "paddingBottom": "0px",
    "paddingLeft": "24px"
  },
  ".articles .item": {
    "display": "flex",
    "marginBottom": "16px",
    "paddingBottom": "16px",
    "borderBottomWidth": "1px",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#e1e6eb",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "articles"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        }
      ]
    }
  },
  ".articles .item .item-details": {
    "flexDirection": "column",
    "marginRight": "16px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "articles"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-details"
        }
      ]
    }
  },
  ".articles .item .item-details .title": {
    "fontSize": "30px",
    "fontWeight": "bold",
    "marginTop": "16px",
    "marginBottom": "14px",
    "lineHeight": "30px",
    "color": "#333333",
    "lines": 1,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "articles"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-details"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title"
        }
      ]
    }
  },
  ".articles .item .item-details .desc": {
    "fontSize": "20px",
    "lineHeight": "30px",
    "lines": 2,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "articles"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-details"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "desc"
        }
      ]
    }
  },
  ".articles .item .avatar": {
    "flex": 0,
    "width": "120px",
    "height": "120px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "articles"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "avatar"
        }
      ]
    }
  },
  ".articles .item .avatar image": {
    "width": "100%",
    "height": "100%",
    "borderRadius": "4px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "articles"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "avatar"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".load-more": {
    "justifyContent": "center",
    "alignItems": "center",
    "height": "100px",
    "borderTopColor": "#bbbbbb",
    "borderRightColor": "#bbbbbb",
    "borderBottomColor": "#bbbbbb",
    "borderLeftColor": "#bbbbbb",
    "borderBottomWidth": "1px"
  }
}

/***/ }),

/***/ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Demo/index.ux?uxType=page&importNames[]=tab-content-item":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Demo/index.ux?uxType=page&importNames[]=tab-content-item ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "wrapper"
  ],
  "children": [
    {
      "type": "tabs",
      "attr": {},
      "events": {
        "change": "onChangeTabIndex"
      },
      "children": [
        {
          "type": "tab-bar",
          "attr": {
            "mode": "scrollable"
          },
          "classList": [
            "tab-bar"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-item"
              ],
              "repeat": function () {return this.tabList},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "shown": function () {return this.$idx===this.currentIndex},
                  "classList": [
                    "item",
                    "active"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item}
                      },
                      "classList": [
                        "tab-title"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "line"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "shown": function () {return !(this.$idx===this.currentIndex)},
                  "classList": [
                    "item"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item}
                      },
                      "classList": [
                        "tab-title"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "line"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "tab-content",
          "attr": {},
          "classList": [
            "tab-content"
          ],
          "children": [
            {
              "type": "tab-content-item",
              "attr": {
                "index": function () {return this.$idx},
                "itemdata": function () {return this.$item},
                "currentIndex": function () {return this.currentIndex}
              },
              "repeat": function () {return this.list},
              "events": {
                "scrollbottom": "getNextPage"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Demo/padding.ux?uxType=comp&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Demo/padding.ux?uxType=comp& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "padding-comps"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "padding-list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "padding-item"
          ],
          "repeat": function () {return this.size},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "text-wrap"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "title-wrap"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "desc-wrap"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "img-wrap"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Demo/tabitem.ux?uxType=comp&importNames[]=padding":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Demo/tabitem.ux?uxType=comp&importNames[]=padding ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "tab-section"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "section-container"
      ],
      "shown": function () {return this.itemdata.render},
      "children": [
        {
          "type": "padding",
          "attr": {},
          "shown": function () {return this.itemdata.data.length===0}
        },
        {
          "type": "list",
          "attr": {},
          "shown": function () {return !(this.itemdata.data.length===0)},
          "classList": [
            "articles"
          ],
          "events": {
            "scrollbottom": "onScrollBottom"
          },
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": function () {return this.itemdata.type}
              },
              "classList": [
                "item"
              ],
              "repeat": function () {return this.itemdata.data},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "item-details"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.title}
                      },
                      "classList": [
                        "title"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.desc}
                      },
                      "classList": [
                        "desc"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "avatar"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.cover_img}
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "list-item",
              "attr": {
                "type": "loadMore"
              },
              "classList": [
                "load-more"
              ],
              "shown": function () {return this.itemdata.loadMore},
              "children": [
                {
                  "type": "progress",
                  "attr": {
                    "type": "circular"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "加载更多"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&type=import!./src/pages/Demo/padding.ux?uxType=comp&name=padding":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&type=import!./src/pages/Demo/padding.ux?uxType=comp&name=padding ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!sass-loader!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./padding.ux?uxType=comp */ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/sass-loader/dist/cjs.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Demo/padding.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./padding.ux?uxType=comp */ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Demo/padding.ux?uxType=comp")

$app_define$('@app-component/padding', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./padding.ux?uxType=comp& */ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Demo/padding.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&type=import!./src/pages/Demo/tabitem.ux?uxType=comp&name=tab-content-item":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&type=import!./src/pages/Demo/tabitem.ux?uxType=comp&name=tab-content-item ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! !../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&type=import!./padding.ux?uxType=comp&name=padding */ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&type=import!./src/pages/Demo/padding.ux?uxType=comp&name=padding")

var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!sass-loader!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./tabitem.ux?uxType=comp */ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/sass-loader/dist/cjs.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Demo/tabitem.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./tabitem.ux?uxType=comp */ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Demo/tabitem.ux?uxType=comp")

$app_define$('@app-component/tab-content-item', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./tabitem.ux?uxType=comp&importNames[]=padding */ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Demo/tabitem.ux?uxType=comp&importNames[]=padding")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "./src/helper/ajax.js":
/*!****************************!*\
  !*** ./src/helper/ajax.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ./utils */ "./src/helper/utils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 封装了一些网络请求方法，方便通过 Promise 的形式请求接口
 */
const TIMEOUT = 20000;

Promise.prototype.finally = function (callback) {
  const P = this.constructor;
  return this.then(value => P.resolve(callback()).then(() => value), reason => P.resolve(callback()).then(() => {
    throw reason;
  }));
};
/**
 * 调用快应用 fetch 接口做网络请求
 * @param params
 */


function fetchPromise(params) {
  return new Promise((resolve, reject) => {
    _system.default.fetch({
      url: params.url,
      method: params.method,
      data: params.data
    }).then(response => {
      const result = response.data;
      const content = JSON.parse(result.data);
      /* @desc: 可跟具体不同业务接口数据，返回你所需要的部分，使得使用尽可能便捷 */

      resolve(content);
    }).catch((error, code) => {
      console.log(`🐛 request fail, code = ${code}`);
      reject(error);
    }).finally(() => {
      console.log(`✔️ request @${params.url} has been completed.`);
      resolve();
    });
  });
}
/**
 * 处理网络请求，timeout 是网络请求超时之后返回，默认 20s 可自行修改
 * @param params
 */


function requestHandle(params, timeout = TIMEOUT) {
  try {
    return Promise.race([fetchPromise(params), new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('网络状况不太好，再刷新一次？'));
      }, timeout);
    })]);
  } catch (error) {
    console.log(error);
  }
}

var _default = {
  post: function (url, params) {
    return requestHandle({
      method: 'post',
      url: url,
      data: params
    });
  },
  get: function (url, params) {
    return requestHandle({
      method: 'get',
      url: _utils.default.queryString(url, params)
    });
  },
  put: function (url, params) {
    return requestHandle({
      method: 'put',
      url: url,
      data: params
    });
  } // 如果，method 您需要更多类型，可自行添加更多方法；

};
exports.default = _default;

/***/ }),

/***/ "./src/helper/utils.js":
/*!*****************************!*\
  !*** ./src/helper/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

/**
 * 您可以将常用的方法、或系统 API，统一封装，暴露全局，以便各页面、组件调用，而无需 require / import.
 */
const prompt = $app_require$('@app-module/system.prompt');
/**
 * 拼接 url 和参数
 */


function queryString(url, query) {
  let str = [];

  for (let key in query) {
    str.push(key + '=' + query[key]);
  }

  let paramStr = str.join('&');
  return paramStr ? `${url}?${paramStr}` : url;
}

function showToast(message = '', duration = 0) {
  if (!message) return;
  prompt.showToast({
    message: message,
    duration
  });
}

var _default = {
  showToast,
  queryString
};
exports.default = _default;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./src/pages/Demo/index.ux?uxType=page ***!
  \*********************************************/
__webpack_require__(/*! !../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&type=import!./tabitem.ux?uxType=comp&name=tab-content-item */ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&type=import!./src/pages/Demo/tabitem.ux?uxType=comp&name=tab-content-item")

var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!sass-loader!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/sass-loader/dist/cjs.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Demo/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/hongqiancheng/Downloads/webfiles/quick-apps/demo/demo&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Demo/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=tab-content-item */ "../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Demo/index.ux?uxType=page&importNames[]=tab-content-item")

     $app_module$.exports.style = $app_style$
})
$app_bootstrap$('@app-component/index',{ packagerVersion: "1.9.2" })
})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createPageHandler();
    }
    else {
      window.createPageHandler = createPageHandler
    }
  })();