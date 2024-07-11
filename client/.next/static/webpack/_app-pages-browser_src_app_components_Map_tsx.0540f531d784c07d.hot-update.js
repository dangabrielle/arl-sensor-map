"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_app_components_Map_tsx",{

/***/ "(app-pages-browser)/./src/app/components/Map.tsx":
/*!************************************!*\
  !*** ./src/app/components/Map.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"(app-pages-browser)/./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"(app-pages-browser)/./node_modules/leaflet-defaulticon-compatibility/src/Icon.Default.compatibility.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst defaults = {\n    zoom: 19\n};\nconst Map = (Map, param)=>{\n    let { sensorData } = param;\n    const { zoom = defaults.zoom, posix } = Map;\n    console.log(posix);\n    console.log(\"map: \", sensorData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_4__.MapContainer, {\n        center: posix,\n        zoom: zoom,\n        className: \"h-full w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.TileLayer, {\n                attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n            }, void 0, false, {\n                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Marker, {\n                position: posix,\n                draggable: false,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Popup, {\n                    children: \"Manoa Innovation Center\"\n                }, void 0, false, {\n                    fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYXAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFdUU7QUFHckM7QUFDb0Q7QUFDM0M7QUFPM0MsTUFBTUksV0FBVztJQUNmQyxNQUFNO0FBQ1I7QUFrQkEsTUFBTUMsTUFBTSxDQUFDQTtRQUFlLEVBQUVDLFVBQVUsRUFBUztJQUMvQyxNQUFNLEVBQUVGLE9BQU9ELFNBQVNDLElBQUksRUFBRUcsS0FBSyxFQUFFLEdBQUdGO0lBQ3hDRyxRQUFRQyxHQUFHLENBQUNGO0lBQ1pDLFFBQVFDLEdBQUcsQ0FBQyxTQUFTSDtJQUNyQixxQkFDRSw4REFBQ1AsdURBQVlBO1FBQUNXLFFBQVFIO1FBQU9ILE1BQU1BO1FBQU1PLFdBQVU7OzBCQUNqRCw4REFBQ1gsb0RBQVNBO2dCQUNSWSxhQUFZO2dCQUNaQyxLQUFJOzs7Ozs7MEJBRU4sOERBQUNaLGlEQUFNQTtnQkFBQ2EsVUFBVVA7Z0JBQU9RLFdBQVc7MEJBQ2xDLDRFQUFDYixnREFBS0E7OEJBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWY7S0FmTUc7QUFpQk4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL01hcC50c3g/NzE2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgTWFwQ29udGFpbmVyLCBUaWxlTGF5ZXIsIE1hcmtlciwgUG9wdXAgfSBmcm9tIFwicmVhY3QtbGVhZmxldFwiO1xuaW1wb3J0IHsgTGF0TG5nRXhwcmVzc2lvbiwgTGF0TG5nVHVwbGUgfSBmcm9tIFwibGVhZmxldFwiO1xuXG5pbXBvcnQgXCJsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIjtcbmltcG9ydCBcImxlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eS9kaXN0L2xlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eS5jc3NcIjtcbmltcG9ydCBcImxlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eVwiO1xuXG5pbnRlcmZhY2UgTWFwUHJvcHMge1xuICBwb3NpeDogTGF0TG5nRXhwcmVzc2lvbltdIHwgTGF0TG5nVHVwbGVbXTtcbiAgem9vbT86IG51bWJlcjtcbn1cblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIHpvb206IDE5LFxufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgc2Vuc29yRGF0YTogU2Vuc29yRGF0YVR5cGVbXTtcbn07XG5cbnR5cGUgU2Vuc29yRGF0YVR5cGUgPSB7XG4gIG5vZGVJRDogc3RyaW5nO1xuICBsYXRpdHVkZTogbnVtYmVyO1xuICBsb25naXR1ZGU6IG51bWJlcjtcbiAgdGltZTogc3RyaW5nO1xuICB0ZW1wOiBudW1iZXI7XG4gIGh1bWlkaXR5OiBudW1iZXI7XG4gIGJhdHRlcnk6IG51bWJlcjtcbiAgaGVhbHRoOiBzdHJpbmc7XG4gIGVtcGxveWVlSWQ/OiBzdHJpbmcgfCBudWxsO1xufTtcblxuY29uc3QgTWFwID0gKE1hcDogTWFwUHJvcHMsIHsgc2Vuc29yRGF0YSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHpvb20gPSBkZWZhdWx0cy56b29tLCBwb3NpeCB9ID0gTWFwO1xuICBjb25zb2xlLmxvZyhwb3NpeCk7XG4gIGNvbnNvbGUubG9nKFwibWFwOiBcIiwgc2Vuc29yRGF0YSk7XG4gIHJldHVybiAoXG4gICAgPE1hcENvbnRhaW5lciBjZW50ZXI9e3Bvc2l4fSB6b29tPXt6b29tfSBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICA8VGlsZUxheWVyXG4gICAgICAgIGF0dHJpYnV0aW9uPScmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICAgICAgdXJsPVwiaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIlxuICAgICAgLz5cbiAgICAgIDxNYXJrZXIgcG9zaXRpb249e3Bvc2l4fSBkcmFnZ2FibGU9e2ZhbHNlfT5cbiAgICAgICAgPFBvcHVwPk1hbm9hIElubm92YXRpb24gQ2VudGVyPC9Qb3B1cD5cbiAgICAgIDwvTWFya2VyPlxuICAgIDwvTWFwQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuIl0sIm5hbWVzIjpbIk1hcENvbnRhaW5lciIsIlRpbGVMYXllciIsIk1hcmtlciIsIlBvcHVwIiwiZGVmYXVsdHMiLCJ6b29tIiwiTWFwIiwic2Vuc29yRGF0YSIsInBvc2l4IiwiY29uc29sZSIsImxvZyIsImNlbnRlciIsImNsYXNzTmFtZSIsImF0dHJpYnV0aW9uIiwidXJsIiwicG9zaXRpb24iLCJkcmFnZ2FibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Map.tsx\n"));

/***/ })

});