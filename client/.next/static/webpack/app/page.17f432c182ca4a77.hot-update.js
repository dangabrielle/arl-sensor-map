"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/LoadMap.tsx":
/*!****************************************!*\
  !*** ./src/app/components/LoadMap.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst LoadMap = ()=>{\n    _s();\n    const map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_app_components_Map_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./Map */ \"(app-pages-browser)/./src/app/components/Map.tsx\")), {\n            loadableGenerated: {\n                modules: [\n                    \"app/components/LoadMap.tsx -> \" + \"./Map\"\n                ]\n            },\n            loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"A map is loading\"\n                }, void 0, false, {\n                    fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/LoadMap.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 24\n                }, undefined),\n            ssr: false\n        }), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white-700 mx-auto my-5 w-[98%] h-[480px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Map, {\n            posix: [\n                4.79029,\n                -75.69003\n            ]\n        }, void 0, false, {\n            fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/LoadMap.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/LoadMap.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoadMap, \"JeOpYFfQ1iWGEGxGNP8dZtLfD0w=\");\n_c = LoadMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadMap);\nvar _c;\n$RefreshReg$(_c, \"LoadMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2FkTWFwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzBCO0FBQ007QUFDTztBQUV2QyxNQUFNRyxVQUFVOztJQUNkLE1BQU1DLE1BQU1ILDhDQUFPQSxDQUNqQixJQUNFQyx3REFBV0EsQ0FBQyxJQUFNLDJNQUFlOzs7Ozs7WUFDL0JHLFNBQVMsa0JBQU0sOERBQUNDOzhCQUFFOzs7Ozs7WUFDbEJDLEtBQUs7WUFFVCxFQUFFO0lBRUoscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUlDLE9BQU87Z0JBQUM7Z0JBQVMsQ0FBQzthQUFTOzs7Ozs7Ozs7OztBQUd0QztHQWRNUjtLQUFBQTtBQWdCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTG9hZE1hcC50c3g/NjhjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBuZXh0RHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IExvYWRNYXAgPSAoKSA9PiB7XG4gIGNvbnN0IG1hcCA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIG5leHREeW5hbWljKCgpID0+IGltcG9ydChcIi4vTWFwXCIpLCB7XG4gICAgICAgIGxvYWRpbmc6ICgpID0+IDxwPkEgbWFwIGlzIGxvYWRpbmc8L3A+LFxuICAgICAgICBzc3I6IGZhbHNlLFxuICAgICAgfSksXG4gICAgW11cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLTcwMCBteC1hdXRvIG15LTUgdy1bOTglXSBoLVs0ODBweF1cIj5cbiAgICAgIDxNYXAgcG9zaXg9e1s0Ljc5MDI5LCAtNzUuNjkwMDNdfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZE1hcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZU1lbW8iLCJuZXh0RHluYW1pYyIsIkxvYWRNYXAiLCJtYXAiLCJsb2FkaW5nIiwicCIsInNzciIsImRpdiIsImNsYXNzTmFtZSIsIk1hcCIsInBvc2l4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/LoadMap.tsx\n"));

/***/ })

});