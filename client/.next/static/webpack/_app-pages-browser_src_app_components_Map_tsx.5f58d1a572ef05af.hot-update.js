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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/hooks.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"(app-pages-browser)/./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"(app-pages-browser)/./node_modules/leaflet-defaulticon-compatibility/src/Icon.Default.compatibility.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst FindLocation = ()=>{\n    _s();\n    const map = (0,react_leaflet__WEBPACK_IMPORTED_MODULE_4__.useMap)();\n    function handleClick() {\n        map.setView([\n            40.678,\n            -122.563,\n            13\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleClick,\n        children: \"Find\"\n    }, void 0, false, {\n        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n        lineNumber: 30,\n        columnNumber: 10\n    }, undefined);\n};\n_s(FindLocation, \"cX187cvZ2hODbkaiLn05gMk1sCM=\", false, function() {\n    return [\n        react_leaflet__WEBPACK_IMPORTED_MODULE_4__.useMap\n    ];\n});\n_c = FindLocation;\nconst Map = (param)=>{\n    let { sensorData } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.MapContainer, {\n                center: [\n                    38.46,\n                    -121.87\n                ],\n                zoom: 7.5,\n                className: \"h-full w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                        attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                        url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    sensorData.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Marker, {\n                            position: [\n                                data.latitude,\n                                data.longitude\n                            ],\n                            draggable: false,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_8__.Popup, {\n                                children: [\n                                    \"Node ID: \",\n                                    data.nodeID,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 38\n                                    }, undefined),\n                                    \"Longitude: \",\n                                    data.longitude,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 43\n                                    }, undefined),\n                                    \"Latitude: \",\n                                    data.latitude\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FindLocation, {}, void 0, false, {\n                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c, _c1;\n$RefreshReg$(_c, \"FindLocation\");\n$RefreshReg$(_c1, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYXAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUrRTtBQUU3QztBQUNvRDtBQUMzQztBQWtCM0MsTUFBTUssZUFBZTs7SUFDbkIsTUFBTUMsTUFBTUYscURBQU1BO0lBQ2xCLFNBQVNHO1FBQ1BELElBQUlFLE9BQU8sQ0FBQztZQUFDO1lBQVEsQ0FBQztZQUFTO1NBQUc7SUFDcEM7SUFDQSxxQkFBTyw4REFBQ0M7UUFBT0MsU0FBU0g7a0JBQWE7Ozs7OztBQUN2QztHQU5NRjs7UUFDUUQsaURBQU1BOzs7S0FEZEM7QUFPTixNQUFNTSxNQUFNO1FBQUMsRUFBRUMsVUFBVSxFQUFTO0lBQ2hDLHFCQUNFOzswQkFDRSw4REFBQ1osdURBQVlBO2dCQUNYYSxRQUFRO29CQUFDO29CQUFPLENBQUM7aUJBQU87Z0JBQ3hCQyxNQUFNO2dCQUNOQyxXQUFVOztrQ0FFViw4REFBQ2Qsb0RBQVNBO3dCQUNSZSxhQUFZO3dCQUNaQyxLQUFJOzs7Ozs7b0JBRUxMLFdBQVdOLEdBQUcsQ0FBQyxDQUFDWSxNQUFNQyxzQkFDckIsOERBQUNqQixpREFBTUE7NEJBRUxrQixVQUFVO2dDQUFDRixLQUFLRyxRQUFRO2dDQUFFSCxLQUFLSSxTQUFTOzZCQUFDOzRCQUN6Q0MsV0FBVztzQ0FFWCw0RUFBQ3BCLGdEQUFLQTs7b0NBQUM7b0NBQ0tlLEtBQUtNLE1BQU07b0NBQUM7a0RBQUMsOERBQUNDOzs7OztvQ0FBSztvQ0FDakJQLEtBQUtJLFNBQVM7b0NBQUM7a0RBQUMsOERBQUNHOzs7OztvQ0FBSztvQ0FDdkJQLEtBQUtHLFFBQVE7Ozs7Ozs7MkJBUHJCRjs7Ozs7Ozs7Ozs7MEJBWVgsOERBQUNkOzs7Ozs7O0FBR1A7TUE3Qk1NO0FBK0JOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYXAudHN4PzcxNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IE1hcENvbnRhaW5lciwgVGlsZUxheWVyLCBNYXJrZXIsIFBvcHVwLCB1c2VNYXAgfSBmcm9tIFwicmVhY3QtbGVhZmxldFwiO1xuXG5pbXBvcnQgXCJsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIjtcbmltcG9ydCBcImxlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eS9kaXN0L2xlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eS5jc3NcIjtcbmltcG9ydCBcImxlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eVwiO1xuXG50eXBlIFByb3BzID0ge1xuICBzZW5zb3JEYXRhOiBTZW5zb3JEYXRhVHlwZVtdO1xufTtcblxudHlwZSBTZW5zb3JEYXRhVHlwZSA9IHtcbiAgbm9kZUlEOiBzdHJpbmc7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuICB0aW1lOiBzdHJpbmc7XG4gIHRlbXA6IG51bWJlcjtcbiAgaHVtaWRpdHk6IG51bWJlcjtcbiAgYmF0dGVyeTogbnVtYmVyO1xuICBoZWFsdGg6IHN0cmluZztcbiAgZW1wbG95ZWVJZD86IHN0cmluZyB8IG51bGw7XG59O1xuXG5jb25zdCBGaW5kTG9jYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG1hcCA9IHVzZU1hcCgpO1xuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBtYXAuc2V0VmlldyhbNDAuNjc4LCAtMTIyLjU2MywgMTNdKTtcbiAgfVxuICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+RmluZDwvYnV0dG9uPjtcbn07XG5jb25zdCBNYXAgPSAoeyBzZW5zb3JEYXRhIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNYXBDb250YWluZXJcbiAgICAgICAgY2VudGVyPXtbMzguNDYsIC0xMjEuODddfVxuICAgICAgICB6b29tPXs3LjV9XG4gICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGxcIlxuICAgICAgPlxuICAgICAgICA8VGlsZUxheWVyXG4gICAgICAgICAgYXR0cmlidXRpb249JyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAge3NlbnNvckRhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxNYXJrZXJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBwb3NpdGlvbj17W2RhdGEubGF0aXR1ZGUsIGRhdGEubG9uZ2l0dWRlXX1cbiAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBvcHVwPlxuICAgICAgICAgICAgICBOb2RlIElEOiB7ZGF0YS5ub2RlSUR9IDxiciAvPlxuICAgICAgICAgICAgICBMb25naXR1ZGU6IHtkYXRhLmxvbmdpdHVkZX0gPGJyIC8+XG4gICAgICAgICAgICAgIExhdGl0dWRlOiB7ZGF0YS5sYXRpdHVkZX1cbiAgICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICAgPC9NYXJrZXI+XG4gICAgICAgICkpfVxuICAgICAgPC9NYXBDb250YWluZXI+XG4gICAgICA8RmluZExvY2F0aW9uIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iXSwibmFtZXMiOlsiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwiTWFya2VyIiwiUG9wdXAiLCJ1c2VNYXAiLCJGaW5kTG9jYXRpb24iLCJtYXAiLCJoYW5kbGVDbGljayIsInNldFZpZXciLCJidXR0b24iLCJvbkNsaWNrIiwiTWFwIiwic2Vuc29yRGF0YSIsImNlbnRlciIsInpvb20iLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGlvbiIsInVybCIsImRhdGEiLCJpbmRleCIsInBvc2l0aW9uIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJkcmFnZ2FibGUiLCJub2RlSUQiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Map.tsx\n"));

/***/ })

});