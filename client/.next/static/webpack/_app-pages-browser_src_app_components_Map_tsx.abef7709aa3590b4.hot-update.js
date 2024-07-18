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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var react_leaflet_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-leaflet/hooks */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/hooks.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"(app-pages-browser)/./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"(app-pages-browser)/./node_modules/leaflet-defaulticon-compatibility/src/Icon.Default.compatibility.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MyComponent = (param)=>{\n    let { clickedSensor } = param;\n    _s();\n    const map = (0,react_leaflet_hooks__WEBPACK_IMPORTED_MODULE_4__.useMap)();\n    // Update map view when clickedSensor changes\n    if (clickedSensor) {\n        console.log(\"after change\", clickedSensor);\n        map.setView(clickedSensor, 13); // Set view to the clickedSensor location with zoom level 13\n    }\n    return null; // or return any other JSX if needed\n};\n_s(MyComponent, \"cX187cvZ2hODbkaiLn05gMk1sCM=\", false, function() {\n    return [\n        react_leaflet_hooks__WEBPACK_IMPORTED_MODULE_4__.useMap\n    ];\n});\n_c = MyComponent;\nconst Map = (param)=>{\n    let { sensorData, clickedSensor } = param;\n    console.log(\"clicked\", clickedSensor);\n    //   function findLocation() {\n    //       clickedSensor ? map.setView(clickedSensor, 13) : null;\n    //     }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.MapContainer, {\n            center: [\n                38.46,\n                -121.87\n            ],\n            zoom: 7.5,\n            className: \"h-full w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                    attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                    url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                }, void 0, false, {\n                    fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined),\n                sensorData.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Marker, {\n                        position: [\n                            data.latitude,\n                            data.longitude\n                        ],\n                        draggable: false,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_8__.Popup, {\n                            children: [\n                                \"Node ID: \",\n                                data.nodeID,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 38\n                                }, undefined),\n                                \"Longitude: \",\n                                data.longitude,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 43\n                                }, undefined),\n                                \"Latitude: \",\n                                data.latitude\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyComponent, {\n                    clickedSensor: clickedSensor\n                }, void 0, false, {\n                    fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c, _c1;\n$RefreshReg$(_c, \"MyComponent\");\n$RefreshReg$(_c1, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYXAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV1RTtBQUMxQjtBQUdYO0FBQ29EO0FBQzNDO0FBb0IzQyxNQUFNSyxjQUFjO1FBQUMsRUFBRUMsYUFBYSxFQUFTOztJQUMzQyxNQUFNQyxNQUFNSCwyREFBTUE7SUFFbEIsNkNBQTZDO0lBQzdDLElBQUlFLGVBQWU7UUFDakJFLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JIO1FBQzVCQyxJQUFJRyxPQUFPLENBQUNKLGVBQWUsS0FBSyw0REFBNEQ7SUFDOUY7SUFFQSxPQUFPLE1BQU0sb0NBQW9DO0FBQ25EO0dBVk1EOztRQUNRRCx1REFBTUE7OztLQURkQztBQVlOLE1BQU1NLE1BQU07UUFBQyxFQUFFQyxVQUFVLEVBQUVOLGFBQWEsRUFBUztJQUMvQ0UsUUFBUUMsR0FBRyxDQUFDLFdBQVdIO0lBQ3ZCLDhCQUE4QjtJQUM5QiwrREFBK0Q7SUFDL0QsUUFBUTtJQUVSLHFCQUNFO2tCQUNFLDRFQUFDTix1REFBWUE7WUFDWGEsUUFBUTtnQkFBQztnQkFBTyxDQUFDO2FBQU87WUFDeEJDLE1BQU07WUFDTkMsV0FBVTs7OEJBRVYsOERBQUNkLG9EQUFTQTtvQkFDUmUsYUFBWTtvQkFDWkMsS0FBSTs7Ozs7O2dCQUVMTCxXQUFXTCxHQUFHLENBQUMsQ0FBQ1csTUFBTUMsc0JBQ3JCLDhEQUFDakIsaURBQU1BO3dCQUVMa0IsVUFBVTs0QkFBQ0YsS0FBS0csUUFBUTs0QkFBRUgsS0FBS0ksU0FBUzt5QkFBQzt3QkFDekNDLFdBQVc7a0NBRVgsNEVBQUNwQixnREFBS0E7O2dDQUFDO2dDQUNLZSxLQUFLTSxNQUFNO2dDQUFDOzhDQUFDLDhEQUFDQzs7Ozs7Z0NBQUs7Z0NBQ2pCUCxLQUFLSSxTQUFTO2dDQUFDOzhDQUFDLDhEQUFDRzs7Ozs7Z0NBQUs7Z0NBQ3ZCUCxLQUFLRyxRQUFROzs7Ozs7O3VCQVByQkY7Ozs7OzhCQVdULDhEQUFDZDtvQkFBWUMsZUFBZUE7Ozs7Ozs7Ozs7Ozs7QUFJcEM7TUFsQ01LO0FBb0NOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYXAudHN4PzcxNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IE1hcENvbnRhaW5lciwgVGlsZUxheWVyLCBNYXJrZXIsIFBvcHVwIH0gZnJvbSBcInJlYWN0LWxlYWZsZXRcIjtcbmltcG9ydCB7IHVzZU1hcCB9IGZyb20gXCJyZWFjdC1sZWFmbGV0L2hvb2tzXCI7XG5pbXBvcnQgRmluZExvY2F0aW9uIGZyb20gXCIuL0ZpbmRMb2NhdGlvblwiO1xuXG5pbXBvcnQgXCJsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIjtcbmltcG9ydCBcImxlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eS9kaXN0L2xlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eS5jc3NcIjtcbmltcG9ydCBcImxlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eVwiO1xuXG50eXBlIFByb3BzID0ge1xuICBzZW5zb3JEYXRhOiBTZW5zb3JEYXRhVHlwZVtdO1xuICBjbGlja2VkU2Vuc29yOiBDb29yZGluYXRlcyB8IG51bGw7XG59O1xuXG50eXBlIENvb3JkaW5hdGVzID0gW2xhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyXTtcblxudHlwZSBTZW5zb3JEYXRhVHlwZSA9IHtcbiAgbm9kZUlEOiBzdHJpbmc7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuICB0aW1lOiBzdHJpbmc7XG4gIHRlbXA6IG51bWJlcjtcbiAgaHVtaWRpdHk6IG51bWJlcjtcbiAgYmF0dGVyeTogbnVtYmVyO1xuICBoZWFsdGg6IHN0cmluZztcbiAgZW1wbG95ZWVJZD86IHN0cmluZyB8IG51bGw7XG59O1xuY29uc3QgTXlDb21wb25lbnQgPSAoeyBjbGlja2VkU2Vuc29yIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IG1hcCA9IHVzZU1hcCgpO1xuXG4gIC8vIFVwZGF0ZSBtYXAgdmlldyB3aGVuIGNsaWNrZWRTZW5zb3IgY2hhbmdlc1xuICBpZiAoY2xpY2tlZFNlbnNvcikge1xuICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgY2hhbmdlXCIsIGNsaWNrZWRTZW5zb3IpO1xuICAgIG1hcC5zZXRWaWV3KGNsaWNrZWRTZW5zb3IsIDEzKTsgLy8gU2V0IHZpZXcgdG8gdGhlIGNsaWNrZWRTZW5zb3IgbG9jYXRpb24gd2l0aCB6b29tIGxldmVsIDEzXG4gIH1cblxuICByZXR1cm4gbnVsbDsgLy8gb3IgcmV0dXJuIGFueSBvdGhlciBKU1ggaWYgbmVlZGVkXG59O1xuXG5jb25zdCBNYXAgPSAoeyBzZW5zb3JEYXRhLCBjbGlja2VkU2Vuc29yIH06IFByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiLCBjbGlja2VkU2Vuc29yKTtcbiAgLy8gICBmdW5jdGlvbiBmaW5kTG9jYXRpb24oKSB7XG4gIC8vICAgICAgIGNsaWNrZWRTZW5zb3IgPyBtYXAuc2V0VmlldyhjbGlja2VkU2Vuc29yLCAxMykgOiBudWxsO1xuICAvLyAgICAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNYXBDb250YWluZXJcbiAgICAgICAgY2VudGVyPXtbMzguNDYsIC0xMjEuODddfVxuICAgICAgICB6b29tPXs3LjV9XG4gICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGxcIlxuICAgICAgPlxuICAgICAgICA8VGlsZUxheWVyXG4gICAgICAgICAgYXR0cmlidXRpb249JyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAge3NlbnNvckRhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxNYXJrZXJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBwb3NpdGlvbj17W2RhdGEubGF0aXR1ZGUsIGRhdGEubG9uZ2l0dWRlXX1cbiAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBvcHVwPlxuICAgICAgICAgICAgICBOb2RlIElEOiB7ZGF0YS5ub2RlSUR9IDxiciAvPlxuICAgICAgICAgICAgICBMb25naXR1ZGU6IHtkYXRhLmxvbmdpdHVkZX0gPGJyIC8+XG4gICAgICAgICAgICAgIExhdGl0dWRlOiB7ZGF0YS5sYXRpdHVkZX1cbiAgICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICAgPC9NYXJrZXI+XG4gICAgICAgICkpfVxuICAgICAgICA8TXlDb21wb25lbnQgY2xpY2tlZFNlbnNvcj17Y2xpY2tlZFNlbnNvcn0gLz5cbiAgICAgIDwvTWFwQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuIl0sIm5hbWVzIjpbIk1hcENvbnRhaW5lciIsIlRpbGVMYXllciIsIk1hcmtlciIsIlBvcHVwIiwidXNlTWFwIiwiTXlDb21wb25lbnQiLCJjbGlja2VkU2Vuc29yIiwibWFwIiwiY29uc29sZSIsImxvZyIsInNldFZpZXciLCJNYXAiLCJzZW5zb3JEYXRhIiwiY2VudGVyIiwiem9vbSIsImNsYXNzTmFtZSIsImF0dHJpYnV0aW9uIiwidXJsIiwiZGF0YSIsImluZGV4IiwicG9zaXRpb24iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImRyYWdnYWJsZSIsIm5vZGVJRCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Map.tsx\n"));

/***/ })

});