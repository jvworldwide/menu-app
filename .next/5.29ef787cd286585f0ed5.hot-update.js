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



var Logo = function Logo() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-2918947118"
  }, "menu", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2918947118",
    css: "h1.jsx-2918947118{margin:0;grid-column-start:2;justify-self:flex-end;-webkit-transform:rotate(-5deg);-ms-transform:rotate(-5deg);transform:rotate(-5deg);padding:20px;font-size:5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZ0IsQUFHa0IsU0FDVyxvQkFDRSxzQkFDRSxvRkFDWCxhQUNFLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qdi9sb2NhbC1kZXYvcHJpdmF0ZS9tZW51LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTG9nbyA9ICgpID0+IChcbiAgPGgxPlxuICAgIG1lbnVcbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oMT5cbik7XG5cbmNvbnN0IFN1YmNhdGVnb3J5ID0gKHsgZGF0YSA9IHsgbWVudUl0ZW1zOiBbXSB9LCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic3ViY2F0ZWdvcnlcIiB7Li4ucHJvcHN9PlxuICAgIDxoMj57ZGF0YS5uYW1lfTwvaDI+XG4gICAgPHVsPlxuICAgICAge2RhdGEubWVudUl0ZW1zLm1hcChlbGVtZW50ID0+IChcbiAgICAgICAgPGxpIGtleT17ZWxlbWVudC5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAge2VsZW1lbnQuZGVzY3JpcHRpb259XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj57ZWxlbWVudC5wcmljZX08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHVsLFxuICAgICAgaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICB9XG4gICAgICAuc3ViY2F0ZWdvcnkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgLnN1YmNhdGVnb3J5IHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc3ViY2F0ZWdvcnkgPiBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuICAgICAgLnByaWNlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IENhdGVnb3J5ID0gKHsgZGF0YSA9IHsgc3ViY2F0ZWdvcmllczogW10gfSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiIHsuLi5wcm9wc30+XG4gICAgPExvZ28gLz5cbiAgICB7ZGF0YS5zdWJjYXRlZ29yaWVzLm1hcChzdWJjYXRlZ29yeSA9PiAoXG4gICAgICA8U3ViY2F0ZWdvcnkga2V5PXtzdWJjYXRlZ29yeS5uYW1lfSBkYXRhPXtzdWJjYXRlZ29yeX0gLz5cbiAgICApKX1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2F0ZWdvcnk6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzBiMGIwOTtcbiAgICAgIH1cbiAgICAgIC5jYXRlZ29yeTpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhNzIyMDM7XG4gICAgICB9XG4gICAgICAuY2F0ZWdvcnkge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5MHZ3IDFmcjtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICAuY2F0ZWdvcnkge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDcwMHB4IDFmcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNhdGVnb3J5ID4gOmdsb2JhbChkaXYpIHtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5jb25zdCBNZW51ID0gKHsgZGF0YSA9IHsgY2F0ZWdvcmllczogW10gfSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAge2RhdGEuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxuICAgICAgICA8Q2F0ZWdvcnkga2V5PXtjYXRlZ29yeS5uYW1lfSBkYXRhPXtjYXRlZ29yeX0gLz5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWVudSB7XG4gICAgICAgICAgY29sb3I6ICNlZWU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAvKiBTeXN0ZW0gZm9udCBzdGFjazogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3Mvc3lzdGVtLWZvbnQtc3RhY2svICovXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXX0= */\n/*@ sourceURL=components/Menu.js */"
  }));
};

var Subcategory = function Subcategory(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? {
    menuItems: []
  } : _ref$data,
      props = _objectWithoutProperties(_ref, ["data"]);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-2949732501" + " " + (props.className != null && props.className || "subcategory")
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-2949732501"
  }, data.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-2949732501"
  }, data.menuItems.map(function (element) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: element.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      className: "jsx-2949732501"
    }, element.description, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      className: "jsx-2949732501" + " " + "price"
    }, element.price));
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2949732501",
    css: "ul.jsx-2949732501,h2.jsx-2949732501{margin:0;text-transform:lowercase;}ul.jsx-2949732501{list-style:none;padding:0;}li.jsx-2949732501{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:1rem;text-transform:uppercase;margin-bottom:10px;font-family:Arial;}.subcategory.jsx-2949732501{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-transform:rotate(-5deg);-ms-transform:rotate(-5deg);transform:rotate(-5deg);-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}@media (min-width:750px){.subcategory.jsx-2949732501{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}}.subcategory.jsx-2949732501>h2.jsx-2949732501{font-size:3rem;margin-right:20px;margin-bottom:20px;}.price.jsx-2949732501{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmdCLEFBSWtCLEFBSU8sQUFJSCxBQVFBLEFBUVEsQUFJTixBQUtFLFNBaENRLE1BNEJQLENBeEJSLENBNkJaLFNBNUJBLE9Bd0JxQixDQTVCckIsa0JBNkJBLGlCQU5FLEtBaEI4QixBQVFSLDhFQUNULGFBQ1csd0JBVFQsZUFDVSx5QkFDTixtQkFDRCxDQU9PLGlCQU4zQixnRkFPQSIsImZpbGUiOiJjb21wb25lbnRzL01lbnUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvanYvbG9jYWwtZGV2L3ByaXZhdGUvbWVudS1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IExvZ28gPSAoKSA9PiAoXG4gIDxoMT5cbiAgICBtZW51XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaDE+XG4pO1xuXG5jb25zdCBTdWJjYXRlZ29yeSA9ICh7IGRhdGEgPSB7IG1lbnVJdGVtczogW10gfSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInN1YmNhdGVnb3J5XCIgey4uLnByb3BzfT5cbiAgICA8aDI+e2RhdGEubmFtZX08L2gyPlxuICAgIDx1bD5cbiAgICAgIHtkYXRhLm1lbnVJdGVtcy5tYXAoZWxlbWVudCA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2VsZW1lbnQuZGVzY3JpcHRpb259PlxuICAgICAgICAgIHtlbGVtZW50LmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+e2VsZW1lbnQucHJpY2V9PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICB1bCxcbiAgICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgICAgfVxuICAgICAgLnN1YmNhdGVnb3J5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gICAgICAgIC5zdWJjYXRlZ29yeSB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnN1YmNhdGVnb3J5ID4gaDIge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cbiAgICAgIC5wcmljZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBDYXRlZ29yeSA9ICh7IGRhdGEgPSB7IHN1YmNhdGVnb3JpZXM6IFtdIH0sIC4uLnByb3BzIH0pID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIiB7Li4ucHJvcHN9PlxuICAgIDxMb2dvIC8+XG4gICAge2RhdGEuc3ViY2F0ZWdvcmllcy5tYXAoc3ViY2F0ZWdvcnkgPT4gKFxuICAgICAgPFN1YmNhdGVnb3J5IGtleT17c3ViY2F0ZWdvcnkubmFtZX0gZGF0YT17c3ViY2F0ZWdvcnl9IC8+XG4gICAgKSl9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNhdGVnb3J5Om50aC1jaGlsZChldmVuKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwYjBiMDk7XG4gICAgICB9XG4gICAgICAuY2F0ZWdvcnk6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYTcyMjAzO1xuICAgICAgfVxuICAgICAgLmNhdGVnb3J5IHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOTB2dyAxZnI7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgLmNhdGVnb3J5IHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3MDBweCAxZnI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jYXRlZ29yeSA+IDpnbG9iYWwoZGl2KSB7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKTtcblxuY29uc3QgTWVudSA9ICh7IGRhdGEgPSB7IGNhdGVnb3JpZXM6IFtdIH0gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgIHtkYXRhLmNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcbiAgICAgICAgPENhdGVnb3J5IGtleT17Y2F0ZWdvcnkubmFtZX0gZGF0YT17Y2F0ZWdvcnl9IC8+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1lbnUge1xuICAgICAgICAgIGNvbG9yOiAjZWVlO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgLyogU3lzdGVtIGZvbnQgc3RhY2s6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvY3NzL3N5c3RlbS1mb250LXN0YWNrLyAqL1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il19 */\n/*@ sourceURL=components/Menu.js */"
  }));
};

var Category = function Category(_ref2) {
  var _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? {
    subcategories: []
  } : _ref2$data,
      props = _objectWithoutProperties(_ref2, ["data"]);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    className: "jsx-3278984034" + " " + (props.className != null && props.className || "category")
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }), data.subcategories.map(function (subcategory) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Subcategory, {
      key: subcategory.name,
      data: subcategory,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      }
    });
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3278984034",
    css: ".category.jsx-3278984034:nth-child(even){background:#0b0b09;}.category.jsx-3278984034:nth-child(odd){background:#a72203;}.category.jsx-3278984034{padding:20px;display:grid;grid-template-columns:1fr 90vw 1fr;}@media (min-width:750px){.category.jsx-3278984034{grid-template-columns:1fr 700px 1fr;}}.category.jsx-3278984034>div{grid-column-start:2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RWdCLEFBRzRCLEFBR0EsQUFHTixBQU15QixBQUlsQixhQVRQLE1BTmYsQUFHQSxDQWFBLE1BVHFDLFVBS25DLHlCQUpGIiwiZmlsZSI6ImNvbXBvbmVudHMvTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qdi9sb2NhbC1kZXYvcHJpdmF0ZS9tZW51LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTG9nbyA9ICgpID0+IChcbiAgPGgxPlxuICAgIG1lbnVcbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oMT5cbik7XG5cbmNvbnN0IFN1YmNhdGVnb3J5ID0gKHsgZGF0YSA9IHsgbWVudUl0ZW1zOiBbXSB9LCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic3ViY2F0ZWdvcnlcIiB7Li4ucHJvcHN9PlxuICAgIDxoMj57ZGF0YS5uYW1lfTwvaDI+XG4gICAgPHVsPlxuICAgICAge2RhdGEubWVudUl0ZW1zLm1hcChlbGVtZW50ID0+IChcbiAgICAgICAgPGxpIGtleT17ZWxlbWVudC5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAge2VsZW1lbnQuZGVzY3JpcHRpb259XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj57ZWxlbWVudC5wcmljZX08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHVsLFxuICAgICAgaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICB9XG4gICAgICAuc3ViY2F0ZWdvcnkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgLnN1YmNhdGVnb3J5IHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc3ViY2F0ZWdvcnkgPiBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuICAgICAgLnByaWNlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IENhdGVnb3J5ID0gKHsgZGF0YSA9IHsgc3ViY2F0ZWdvcmllczogW10gfSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiIHsuLi5wcm9wc30+XG4gICAgPExvZ28gLz5cbiAgICB7ZGF0YS5zdWJjYXRlZ29yaWVzLm1hcChzdWJjYXRlZ29yeSA9PiAoXG4gICAgICA8U3ViY2F0ZWdvcnkga2V5PXtzdWJjYXRlZ29yeS5uYW1lfSBkYXRhPXtzdWJjYXRlZ29yeX0gLz5cbiAgICApKX1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2F0ZWdvcnk6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzBiMGIwOTtcbiAgICAgIH1cbiAgICAgIC5jYXRlZ29yeTpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhNzIyMDM7XG4gICAgICB9XG4gICAgICAuY2F0ZWdvcnkge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5MHZ3IDFmcjtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICAuY2F0ZWdvcnkge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDcwMHB4IDFmcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNhdGVnb3J5ID4gOmdsb2JhbChkaXYpIHtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5jb25zdCBNZW51ID0gKHsgZGF0YSA9IHsgY2F0ZWdvcmllczogW10gfSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAge2RhdGEuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxuICAgICAgICA8Q2F0ZWdvcnkga2V5PXtjYXRlZ29yeS5uYW1lfSBkYXRhPXtjYXRlZ29yeX0gLz5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWVudSB7XG4gICAgICAgICAgY29sb3I6ICNlZWU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAvKiBTeXN0ZW0gZm9udCBzdGFjazogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3Mvc3lzdGVtLWZvbnQtc3RhY2svICovXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXX0= */\n/*@ sourceURL=components/Menu.js */"
  }));
};

var Menu = function Menu(_ref3) {
  var _ref3$data = _ref3.data,
      data = _ref3$data === void 0 ? {
    categories: []
  } : _ref3$data;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    className: "jsx-2554746086" + " " + "menu"
  }, data.categories.map(function (category) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Category, {
      key: category.name,
      data: category,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      }
    });
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2554746086",
    css: ".menu.jsx-2554746086{color:#eee;background:#eee;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto, Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;padding:10px;max-width:100%;overflow:hidden;min-height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyR2tCLEFBR3NCLFdBQ0ssZ0JBRzhDLHlIQUNqRCxhQUNFLGVBQ0MsZ0JBQ0MsaUJBQ25CIiwiZmlsZSI6ImNvbXBvbmVudHMvTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qdi9sb2NhbC1kZXYvcHJpdmF0ZS9tZW51LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTG9nbyA9ICgpID0+IChcbiAgPGgxPlxuICAgIG1lbnVcbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oMT5cbik7XG5cbmNvbnN0IFN1YmNhdGVnb3J5ID0gKHsgZGF0YSA9IHsgbWVudUl0ZW1zOiBbXSB9LCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic3ViY2F0ZWdvcnlcIiB7Li4ucHJvcHN9PlxuICAgIDxoMj57ZGF0YS5uYW1lfTwvaDI+XG4gICAgPHVsPlxuICAgICAge2RhdGEubWVudUl0ZW1zLm1hcChlbGVtZW50ID0+IChcbiAgICAgICAgPGxpIGtleT17ZWxlbWVudC5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAge2VsZW1lbnQuZGVzY3JpcHRpb259XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj57ZWxlbWVudC5wcmljZX08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHVsLFxuICAgICAgaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICB9XG4gICAgICAuc3ViY2F0ZWdvcnkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgLnN1YmNhdGVnb3J5IHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc3ViY2F0ZWdvcnkgPiBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuICAgICAgLnByaWNlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IENhdGVnb3J5ID0gKHsgZGF0YSA9IHsgc3ViY2F0ZWdvcmllczogW10gfSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiIHsuLi5wcm9wc30+XG4gICAgPExvZ28gLz5cbiAgICB7ZGF0YS5zdWJjYXRlZ29yaWVzLm1hcChzdWJjYXRlZ29yeSA9PiAoXG4gICAgICA8U3ViY2F0ZWdvcnkga2V5PXtzdWJjYXRlZ29yeS5uYW1lfSBkYXRhPXtzdWJjYXRlZ29yeX0gLz5cbiAgICApKX1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY2F0ZWdvcnk6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzBiMGIwOTtcbiAgICAgIH1cbiAgICAgIC5jYXRlZ29yeTpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhNzIyMDM7XG4gICAgICB9XG4gICAgICAuY2F0ZWdvcnkge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5MHZ3IDFmcjtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xuICAgICAgICAuY2F0ZWdvcnkge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDcwMHB4IDFmcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNhdGVnb3J5ID4gOmdsb2JhbChkaXYpIHtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5jb25zdCBNZW51ID0gKHsgZGF0YSA9IHsgY2F0ZWdvcmllczogW10gfSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAge2RhdGEuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxuICAgICAgICA8Q2F0ZWdvcnkga2V5PXtjYXRlZ29yeS5uYW1lfSBkYXRhPXtjYXRlZ29yeX0gLz5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWVudSB7XG4gICAgICAgICAgY29sb3I6ICNlZWU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAvKiBTeXN0ZW0gZm9udCBzdGFjazogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3Mvc3lzdGVtLWZvbnQtc3RhY2svICovXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXX0= */\n/*@ sourceURL=components/Menu.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
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


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.29ef787cd286585f0ed5.hot-update.js.map