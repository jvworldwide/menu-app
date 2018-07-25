module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/jv/local-dev/private/menu-app/components/Menu.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var Subcategory = function Subcategory(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? {
    menuItems: []
  } : _ref$data,
      props = _objectWithoutProperties(_ref, ["data"]);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", _extends({
    className: "subcategory"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, data.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, data.menuItems.map(function (element) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: element.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, element.description, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, element.price));
  })));
};

var Logo = function Logo() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-1137876687"
  }, "menu", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1137876687",
    css: "h1.jsx-1137876687{margin:0;grid-column-start:2;justify-self:flex-end;padding:20px;font-size:5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmtCLEFBQ1ksU0FBcUIsb0JBQXNCLHNCQUFhLGFBQWdCLGVBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9NZW51LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2p2L2xvY2FsLWRldi9wcml2YXRlL21lbnUtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTdWJjYXRlZ29yeSA9ICh7IGRhdGEgPSB7IG1lbnVJdGVtczogW10gfSwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViY2F0ZWdvcnlcIiB7Li4ucHJvcHN9PlxuICAgICAgPGgyPntkYXRhLm5hbWV9PC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGEubWVudUl0ZW1zLm1hcChlbGVtZW50ID0+IChcbiAgICAgICAgICA8bGkga2V5PXtlbGVtZW50LmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIHtlbGVtZW50LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj57ZWxlbWVudC5wcmljZX08L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xuXG5jb25zdCBMb2dvID0gKCkgPT4gKFxuICAgIDxoMT5cbiAgICAgIG1lbnVcbiAgICAgIDxzdHlsZSBqc3g+eydoMSB7bWFyZ2luOjA7IGdyaWQtY29sdW1uLXN0YXJ0OiAyO2p1c3RpZnktc2VsZjogZmxleC1lbmQ7cGFkZGluZzogMjBweDsgZm9udC1zaXplOiA1cmVtO30nfTwvc3R5bGU+XG4gICAgPC9oMT5cbiAgKTtcblxuY29uc3QgQ2F0ZWdvcnkgPSAoeyBkYXRhID0geyBzdWJjYXRlZ29yaWVzOiBbXSB9LCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIiB7Li4ucHJvcHN9PlxuICAgICAgPExvZ28gLz5cbiAgICAgIHtkYXRhLnN1YmNhdGVnb3JpZXMubWFwKHN1YmNhdGVnb3J5ID0+IChcbiAgICAgICAgPFN1YmNhdGVnb3J5IGtleT17c3ViY2F0ZWdvcnkubmFtZX0gZGF0YT17c3ViY2F0ZWdvcnl9IC8+XG4gICAgICApKX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG5cbmNvbnN0IE1lbnUgPSAoeyBkYXRhID0geyBjYXRlZ29yaWVzOiBbXSB9IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICB7ZGF0YS5jYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiAoXG4gICAgICAgIDxDYXRlZ29yeSBrZXk9e2NhdGVnb3J5Lm5hbWV9IGRhdGE9e2NhdGVnb3J5fSAvPlxuICAgICAgKSl9XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXX0= */\n/*@ sourceURL=components/Menu.js */"
  }));
};

var Category = function Category(_ref2) {
  var _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? {
    subcategories: []
  } : _ref2$data,
      props = _objectWithoutProperties(_ref2, ["data"]);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", _extends({
    className: "category"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), data.subcategories.map(function (subcategory) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Subcategory, {
      key: subcategory.name,
      data: subcategory,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    });
  }));
};

var Menu = function Menu(_ref3) {
  var _ref3$data = _ref3.data,
      data = _ref3$data === void 0 ? {
    categories: []
  } : _ref3$data;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("article", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, data.categories.map(function (category) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Category, {
      key: category.name,
      data: category,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Menu__ = __webpack_require__("./components/Menu.js");

var _jsxFileName = "/home/jv/local-dev/private/menu-app/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Menu__["a" /* default */], {
        data: this.props.data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1824508078",
        css: "html,body{padding:0;margin:0;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCNkIsQUFDbUIsQUFBK0IsVUFBdkIsU0FBQyxHQUF1QiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qdi9sb2NhbC1kZXYvcHJpdmF0ZS9tZW51LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmltcG9ydCBNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OiR7cHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwfS9zdGF0aWMvZGF0YS5qc29uYDtcbiAgICBjb25zdCBvcHRpb25zID0geyBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0gfTtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgcmV0dXJuIHsgZGF0YSB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPE1lbnUgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSAvPlxuICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PnsnaHRtbCxib2R5e3BhZGRpbmc6MDttYXJnaW46MDt9Kntib3gtc2l6aW5nOmJvcmRlci1ib3g7fSd9PC9zdHlsZT5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59Il19 */\n/*@ sourceURL=pages/index.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var url, options, _ref, data;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "http://localhost:".concat(process.env.PORT || 3000, "/static/data.json");
                options = {
                  headers: {
                    "Content-Type": "application/json"
                  }
                };
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(url, options).then(function (res) {
                  return res.json();
                });

              case 4:
                _ref = _context.sent;
                data = _ref.data;
                return _context.abrupt("return", {
                  data: data
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map