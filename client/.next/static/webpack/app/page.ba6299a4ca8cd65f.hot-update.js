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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst LoadMap = (param)=>{\n    let { sensorData } = param;\n    _s();\n    const Map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_app_components_Map_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./Map */ \"(app-pages-browser)/./src/app/components/Map.tsx\")), {\n            loadableGenerated: {\n                modules: [\n                    \"app/components/LoadMap.tsx -> \" + \"./Map\"\n                ]\n            },\n            loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"A map is loading\"\n                }, void 0, false, {\n                    fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/LoadMap.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 24\n                }, undefined),\n            ssr: false\n        }), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white-700 mx-auto my-5 w-[98%] h-[480px]\",\n        children: [\n            console.log(sensorData),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Map, {\n                posix: [\n                    37.7749,\n                    -122.4194\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/LoadMap.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/LoadMap.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoadMap, \"f3lw+jZ26orTq1jygxeFLR2VEaU=\");\n_c = LoadMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadMap);\nvar _c;\n$RefreshReg$(_c, \"LoadMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2FkTWFwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzBCO0FBQ007QUFDTztBQWtCdkMsTUFBTUcsVUFBVTtRQUFDLEVBQUVDLFVBQVUsRUFBUzs7SUFDcEMsTUFBTUMsTUFBTUosOENBQU9BLENBQ2pCLElBQ0VDLHdEQUFXQSxDQUFDLElBQU0sMk1BQWU7Ozs7OztZQUMvQkksU0FBUyxrQkFBTSw4REFBQ0M7OEJBQUU7Ozs7OztZQUNsQkMsS0FBSztZQUVULEVBQUU7SUFFSixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDWkMsUUFBUUMsR0FBRyxDQUFDUjswQkFDYiw4REFBQ0M7Z0JBQUlRLE9BQU87b0JBQUM7b0JBQVMsQ0FBQztpQkFBUzs7Ozs7Ozs7Ozs7O0FBR3RDO0dBZk1WO0tBQUFBO0FBaUJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2FkTWFwLnRzeD82OGNiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG5leHREeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgc2Vuc29yRGF0YTogU2Vuc29yRGF0YVR5cGVbXTtcbn07XG5cbnR5cGUgU2Vuc29yRGF0YVR5cGUgPSB7XG4gIG5vZGVJRDogc3RyaW5nO1xuICBsYXRpdHVkZTogbnVtYmVyO1xuICBsb25naXR1ZGU6IG51bWJlcjtcbiAgdGltZTogc3RyaW5nO1xuICB0ZW1wOiBudW1iZXI7XG4gIGh1bWlkaXR5OiBudW1iZXI7XG4gIGJhdHRlcnk6IG51bWJlcjtcbiAgaGVhbHRoOiBzdHJpbmc7XG4gIGVtcGxveWVlSWQ/OiBzdHJpbmcgfCBudWxsO1xufTtcblxuY29uc3QgTG9hZE1hcCA9ICh7IHNlbnNvckRhdGEgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgTWFwID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgbmV4dER5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9NYXBcIiksIHtcbiAgICAgICAgbG9hZGluZzogKCkgPT4gPHA+QSBtYXAgaXMgbG9hZGluZzwvcD4sXG4gICAgICAgIHNzcjogZmFsc2UsXG4gICAgICB9KSxcbiAgICBbXVxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUtNzAwIG14LWF1dG8gbXktNSB3LVs5OCVdIGgtWzQ4MHB4XVwiPlxuICAgICAge2NvbnNvbGUubG9nKHNlbnNvckRhdGEpfVxuICAgICAgPE1hcCBwb3NpeD17WzM3Ljc3NDksIC0xMjIuNDE5NF19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkTWFwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTWVtbyIsIm5leHREeW5hbWljIiwiTG9hZE1hcCIsInNlbnNvckRhdGEiLCJNYXAiLCJsb2FkaW5nIiwicCIsInNzciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJwb3NpeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/LoadMap.tsx\n"));

/***/ })

});