webpackHotUpdate(5,{

/***/ "./components/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=5.f6e7178f363d2625f114.hot-update.js.map