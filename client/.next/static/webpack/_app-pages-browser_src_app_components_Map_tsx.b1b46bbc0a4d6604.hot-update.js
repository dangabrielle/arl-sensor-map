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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"(app-pages-browser)/./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"(app-pages-browser)/./node_modules/leaflet-defaulticon-compatibility/src/Icon.Default.compatibility.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst defaults = {\n    zoom: -5\n};\nconst Map = (param)=>{\n    let { sensorData } = param;\n    //   const { zoom = defaults.zoom, posix } = Map;\n    //   console.log(posix);\n    console.log(\"map: \", sensorData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_4__.MapContainer, {\n        center: [\n            37.7749,\n            -122.4194\n        ],\n        zoom: 10,\n        className: \"h-full w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.TileLayer, {\n                attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n            }, void 0, false, {\n                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            sensorData.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Marker, {\n                    position: [\n                        data.latitude,\n                        data.longitude\n                    ],\n                    draggable: false,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Popup, {\n                        children: data.nodeID\n                    }, void 0, false, {\n                        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYXAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFdUU7QUFHckM7QUFDb0Q7QUFDM0M7QUFPM0MsTUFBTUksV0FBVztJQUNmQyxNQUFNLENBQUM7QUFDVDtBQWtCQSxNQUFNQyxNQUFNO1FBQUMsRUFBRUMsVUFBVSxFQUFTO0lBQ2hDLGlEQUFpRDtJQUNqRCx3QkFBd0I7SUFDeEJDLFFBQVFDLEdBQUcsQ0FBQyxTQUFTRjtJQUNyQixxQkFDRSw4REFBQ1AsdURBQVlBO1FBQ1hVLFFBQVE7WUFBQztZQUFTLENBQUM7U0FBUztRQUM1QkwsTUFBTTtRQUNOTSxXQUFVOzswQkFFViw4REFBQ1Ysb0RBQVNBO2dCQUNSVyxhQUFZO2dCQUNaQyxLQUFJOzs7Ozs7WUFFTE4sV0FBV08sR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNyQiw4REFBQ2QsaURBQU1BO29CQUVMZSxVQUFVO3dCQUFDRixLQUFLRyxRQUFRO3dCQUFFSCxLQUFLSSxTQUFTO3FCQUFDO29CQUN6Q0MsV0FBVzs4QkFFWCw0RUFBQ2pCLGdEQUFLQTtrQ0FBRVksS0FBS00sTUFBTTs7Ozs7O21CQUpkTDs7Ozs7Ozs7Ozs7QUFTZjtLQXpCTVY7QUEyQk4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL01hcC50c3g/NzE2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgTWFwQ29udGFpbmVyLCBUaWxlTGF5ZXIsIE1hcmtlciwgUG9wdXAgfSBmcm9tIFwicmVhY3QtbGVhZmxldFwiO1xuaW1wb3J0IHsgTGF0TG5nRXhwcmVzc2lvbiwgTGF0TG5nVHVwbGUgfSBmcm9tIFwibGVhZmxldFwiO1xuXG5pbXBvcnQgXCJsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIjtcbmltcG9ydCBcImxlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eS9kaXN0L2xlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eS5jc3NcIjtcbmltcG9ydCBcImxlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eVwiO1xuXG5pbnRlcmZhY2UgTWFwUHJvcHMge1xuICBwb3NpeDogTGF0TG5nRXhwcmVzc2lvbltdIHwgTGF0TG5nVHVwbGVbXTtcbiAgem9vbT86IG51bWJlcjtcbn1cblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIHpvb206IC01LFxufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgc2Vuc29yRGF0YTogU2Vuc29yRGF0YVR5cGVbXTtcbn07XG5cbnR5cGUgU2Vuc29yRGF0YVR5cGUgPSB7XG4gIG5vZGVJRDogc3RyaW5nO1xuICBsYXRpdHVkZTogbnVtYmVyO1xuICBsb25naXR1ZGU6IG51bWJlcjtcbiAgdGltZTogc3RyaW5nO1xuICB0ZW1wOiBudW1iZXI7XG4gIGh1bWlkaXR5OiBudW1iZXI7XG4gIGJhdHRlcnk6IG51bWJlcjtcbiAgaGVhbHRoOiBzdHJpbmc7XG4gIGVtcGxveWVlSWQ/OiBzdHJpbmcgfCBudWxsO1xufTtcblxuY29uc3QgTWFwID0gKHsgc2Vuc29yRGF0YSB9OiBQcm9wcykgPT4ge1xuICAvLyAgIGNvbnN0IHsgem9vbSA9IGRlZmF1bHRzLnpvb20sIHBvc2l4IH0gPSBNYXA7XG4gIC8vICAgY29uc29sZS5sb2cocG9zaXgpO1xuICBjb25zb2xlLmxvZyhcIm1hcDogXCIsIHNlbnNvckRhdGEpO1xuICByZXR1cm4gKFxuICAgIDxNYXBDb250YWluZXJcbiAgICAgIGNlbnRlcj17WzM3Ljc3NDksIC0xMjIuNDE5NF19XG4gICAgICB6b29tPXsxMH1cbiAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGxcIlxuICAgID5cbiAgICAgIDxUaWxlTGF5ZXJcbiAgICAgICAgYXR0cmlidXRpb249JyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgICAgICB1cmw9XCJodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiXG4gICAgICAvPlxuICAgICAge3NlbnNvckRhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxuICAgICAgICA8TWFya2VyXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBwb3NpdGlvbj17W2RhdGEubGF0aXR1ZGUsIGRhdGEubG9uZ2l0dWRlXX1cbiAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICA+XG4gICAgICAgICAgPFBvcHVwPntkYXRhLm5vZGVJRH08L1BvcHVwPlxuICAgICAgICA8L01hcmtlcj5cbiAgICAgICkpfVxuICAgIDwvTWFwQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuIl0sIm5hbWVzIjpbIk1hcENvbnRhaW5lciIsIlRpbGVMYXllciIsIk1hcmtlciIsIlBvcHVwIiwiZGVmYXVsdHMiLCJ6b29tIiwiTWFwIiwic2Vuc29yRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjZW50ZXIiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGlvbiIsInVybCIsIm1hcCIsImRhdGEiLCJpbmRleCIsInBvc2l0aW9uIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJkcmFnZ2FibGUiLCJub2RlSUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Map.tsx\n"));

/***/ })

});