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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst LoadMap = (param, param1)=>{\n    let { sensorData } = param, { clickedSensor } = param1;\n    _s();\n    console.log(\"in loadmap\", clickedSensor);\n    const Map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_app_components_Map_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./Map */ \"(app-pages-browser)/./src/app/components/Map.tsx\")), {\n            loadableGenerated: {\n                modules: [\n                    \"app/components/LoadMap.tsx -> \" + \"./Map\"\n                ]\n            },\n            loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"A map is loading\"\n                }, void 0, false, {\n                    fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/LoadMap.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 24\n                }, undefined),\n            ssr: false\n        }), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white-700 mx-auto my-5 w-[98%] h-[480px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Map, {\n            sensorData: sensorData,\n            clickedSensor: clickedSensor\n        }, void 0, false, {\n            fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/LoadMap.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/LoadMap.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoadMap, \"f3lw+jZ26orTq1jygxeFLR2VEaU=\");\n_c = LoadMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadMap);\nvar _c;\n$RefreshReg$(_c, \"LoadMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Mb2FkTWFwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzBCO0FBQ007QUFDTztBQXFCdkMsTUFBTUcsVUFBVTtRQUFDLEVBQUVDLFVBQVUsRUFBUyxVQUFFLEVBQUVDLGFBQWEsRUFBZTs7SUFDcEVDLFFBQVFDLEdBQUcsQ0FBQyxjQUFjRjtJQUMxQixNQUFNRyxNQUFNUCw4Q0FBT0EsQ0FDakIsSUFDRUMsd0RBQVdBLENBQUMsSUFBTSwyTUFBZTs7Ozs7O1lBQy9CTyxTQUFTLGtCQUFNLDhEQUFDQzs4QkFBRTs7Ozs7O1lBQ2xCQyxLQUFLO1lBRVQsRUFBRTtJQUVKLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDTDtZQUFJSixZQUFZQTtZQUFZQyxlQUFlQTs7Ozs7Ozs7Ozs7QUFHbEQ7R0FmTUY7S0FBQUE7QUFpQk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0xvYWRNYXAudHN4PzY4Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbmV4dER5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgcG9zaXggfSBmcm9tIFwicGF0aFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBzZW5zb3JEYXRhOiBTZW5zb3JEYXRhVHlwZVtdO1xufTtcblxudHlwZSBDb29yZGluYXRlcyA9IFtsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlcl0gfCBudWxsO1xuXG50eXBlIFNlbnNvckRhdGFUeXBlID0ge1xuICBub2RlSUQ6IHN0cmluZztcbiAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gIHRpbWU6IHN0cmluZztcbiAgdGVtcDogbnVtYmVyO1xuICBodW1pZGl0eTogbnVtYmVyO1xuICBiYXR0ZXJ5OiBudW1iZXI7XG4gIGhlYWx0aDogc3RyaW5nO1xuICBlbXBsb3llZUlkPzogc3RyaW5nIHwgbnVsbDtcbn07XG5cbmNvbnN0IExvYWRNYXAgPSAoeyBzZW5zb3JEYXRhIH06IFByb3BzLCB7IGNsaWNrZWRTZW5zb3IgfTogQ29vcmRpbmF0ZXMpID0+IHtcbiAgY29uc29sZS5sb2coXCJpbiBsb2FkbWFwXCIsIGNsaWNrZWRTZW5zb3IpO1xuICBjb25zdCBNYXAgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBuZXh0RHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL01hcFwiKSwge1xuICAgICAgICBsb2FkaW5nOiAoKSA9PiA8cD5BIG1hcCBpcyBsb2FkaW5nPC9wPixcbiAgICAgICAgc3NyOiBmYWxzZSxcbiAgICAgIH0pLFxuICAgIFtdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZS03MDAgbXgtYXV0byBteS01IHctWzk4JV0gaC1bNDgwcHhdXCI+XG4gICAgICA8TWFwIHNlbnNvckRhdGE9e3NlbnNvckRhdGF9IGNsaWNrZWRTZW5zb3I9e2NsaWNrZWRTZW5zb3J9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkTWFwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTWVtbyIsIm5leHREeW5hbWljIiwiTG9hZE1hcCIsInNlbnNvckRhdGEiLCJjbGlja2VkU2Vuc29yIiwiY29uc29sZSIsImxvZyIsIk1hcCIsImxvYWRpbmciLCJwIiwic3NyIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/LoadMap.tsx\n"));

/***/ })

});