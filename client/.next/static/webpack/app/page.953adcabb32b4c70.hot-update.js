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

/***/ "(app-pages-browser)/./src/app/components/FindLocation.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/FindLocation.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/hooks.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst FindLocation = (param)=>{\n    let { lat, lng } = param;\n    _s();\n    console.log(lat);\n    const map = (0,react_leaflet__WEBPACK_IMPORTED_MODULE_2__.useMap)();\n    function handleClick() {\n        map.setView([\n            lat,\n            lng\n        ], 13);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            // onClick={handleClick}\n            className: \"absolute top-50 left-50 bg-white p-2 rounded shadow-lg z-10\",\n            children: \"Find Location\"\n        }, void 0, false, {\n            fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/FindLocation.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(FindLocation, \"cX187cvZ2hODbkaiLn05gMk1sCM=\", false, function() {\n    return [\n        react_leaflet__WEBPACK_IMPORTED_MODULE_2__.useMap\n    ];\n});\n_c = FindLocation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FindLocation);\nvar _c;\n$RefreshReg$(_c, \"FindLocation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9GaW5kTG9jYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDYTtBQU92QyxNQUFNRSxlQUFlO1FBQUMsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQWtCOztJQUNoREMsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLE1BQU1JLE1BQU1OLHFEQUFNQTtJQUNsQixTQUFTTztRQUNQRCxJQUFJRSxPQUFPLENBQUM7WUFBQ047WUFBS0M7U0FBSSxFQUFFO0lBQzFCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNNO1lBQ0Msd0JBQXdCO1lBQ3hCQyxXQUFVO3NCQUNYOzs7Ozs7O0FBS1A7R0FqQk1UOztRQUVRRCxpREFBTUE7OztLQUZkQztBQW1CTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvRmluZExvY2F0aW9uLnRzeD9jOWQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU1hcCB9IGZyb20gXCJyZWFjdC1sZWFmbGV0XCI7XG5cbnR5cGUgU2Vuc29yRGF0YVR5cGUgPSB7XG4gIGxhdDogbnVtYmVyO1xuICBsbmc6IG51bWJlcjtcbn07XG5cbmNvbnN0IEZpbmRMb2NhdGlvbiA9ICh7IGxhdCwgbG5nIH06IFNlbnNvckRhdGFUeXBlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGxhdCk7XG4gIGNvbnN0IG1hcCA9IHVzZU1hcCgpO1xuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBtYXAuc2V0VmlldyhbbGF0LCBsbmddLCAxMyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIC8vIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNTAgbGVmdC01MCBiZy13aGl0ZSBwLTIgcm91bmRlZCBzaGFkb3ctbGcgei0xMFwiXG4gICAgICA+XG4gICAgICAgIEZpbmQgTG9jYXRpb25cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmluZExvY2F0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTWFwIiwiRmluZExvY2F0aW9uIiwibGF0IiwibG5nIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImhhbmRsZUNsaWNrIiwic2V0VmlldyIsImJ1dHRvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/FindLocation.tsx\n"));

/***/ })

});