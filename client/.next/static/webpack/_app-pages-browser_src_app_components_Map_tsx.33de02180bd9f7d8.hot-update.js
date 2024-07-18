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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/hooks.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"(app-pages-browser)/./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"(app-pages-browser)/./node_modules/leaflet-defaulticon-compatibility/src/Icon.Default.compatibility.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst FindLocation = (param)=>{\n    let { lat, lng } = param;\n    _s();\n    const map = (0,react_leaflet__WEBPACK_IMPORTED_MODULE_4__.useMap)();\n    function handleClick() {\n        map.setView([\n            lat,\n            lng,\n            13\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleClick,\n        children: \"Find Location\"\n    }, void 0, false, {\n        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n        lineNumber: 30,\n        columnNumber: 10\n    }, undefined);\n};\n_s(FindLocation, \"cX187cvZ2hODbkaiLn05gMk1sCM=\", false, function() {\n    return [\n        react_leaflet__WEBPACK_IMPORTED_MODULE_4__.useMap\n    ];\n});\n_c = FindLocation;\nconst Map = (param)=>{\n    let { sensorData } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.MapContainer, {\n            center: [\n                38.46,\n                -121.87\n            ],\n            zoom: 7.5,\n            className: \"h-full w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                    attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                    url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                }, void 0, false, {\n                    fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                sensorData.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Marker, {\n                        position: [\n                            data.latitude,\n                            data.longitude\n                        ],\n                        draggable: false,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_8__.Popup, {\n                            children: [\n                                \"Node ID: \",\n                                data.nodeID,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 38\n                                }, undefined),\n                                \"Longitude: \",\n                                data.longitude,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 43\n                                }, undefined),\n                                \"Latitude: \",\n                                data.latitude\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FindLocation, {\n                    lat: 40.678,\n                    lng: -122.563\n                }, void 0, false, {\n                    fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c, _c1;\n$RefreshReg$(_c, \"FindLocation\");\n$RefreshReg$(_c1, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYXAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUrRTtBQUU3QztBQUNvRDtBQUMzQztBQWtCM0MsTUFBTUssZUFBZTtRQUFDLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFOztJQUNoQyxNQUFNQyxNQUFNSixxREFBTUE7SUFDbEIsU0FBU0s7UUFDUEQsSUFBSUUsT0FBTyxDQUFDO1lBQUNKO1lBQUtDO1lBQUs7U0FBRztJQUM1QjtJQUNBLHFCQUFPLDhEQUFDSTtRQUFPQyxTQUFTSDtrQkFBYTs7Ozs7O0FBQ3ZDO0dBTk1KOztRQUNRRCxpREFBTUE7OztLQURkQztBQVFOLE1BQU1RLE1BQU07UUFBQyxFQUFFQyxVQUFVLEVBQVM7SUFDaEMscUJBQ0U7a0JBQ0UsNEVBQUNkLHVEQUFZQTtZQUNYZSxRQUFRO2dCQUFDO2dCQUFPLENBQUM7YUFBTztZQUN4QkMsTUFBTTtZQUNOQyxXQUFVOzs4QkFFViw4REFBQ2hCLG9EQUFTQTtvQkFDUmlCLGFBQVk7b0JBQ1pDLEtBQUk7Ozs7OztnQkFFTEwsV0FBV04sR0FBRyxDQUFDLENBQUNZLE1BQU1DLHNCQUNyQiw4REFBQ25CLGlEQUFNQTt3QkFFTG9CLFVBQVU7NEJBQUNGLEtBQUtHLFFBQVE7NEJBQUVILEtBQUtJLFNBQVM7eUJBQUM7d0JBQ3pDQyxXQUFXO2tDQUVYLDRFQUFDdEIsZ0RBQUtBOztnQ0FBQztnQ0FDS2lCLEtBQUtNLE1BQU07Z0NBQUM7OENBQUMsOERBQUNDOzs7OztnQ0FBSztnQ0FDakJQLEtBQUtJLFNBQVM7Z0NBQUM7OENBQUMsOERBQUNHOzs7OztnQ0FBSztnQ0FDdkJQLEtBQUtHLFFBQVE7Ozs7Ozs7dUJBUHJCRjs7Ozs7OEJBV1QsOERBQUNoQjtvQkFBYUMsS0FBSztvQkFBUUMsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBS3pDO01BOUJNTTtBQWdDTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFwLnRzeD83MTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBNYXBDb250YWluZXIsIFRpbGVMYXllciwgTWFya2VyLCBQb3B1cCwgdXNlTWFwIH0gZnJvbSBcInJlYWN0LWxlYWZsZXRcIjtcblxuaW1wb3J0IFwibGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7XG5pbXBvcnQgXCJsZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHkvZGlzdC9sZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHkuY3NzXCI7XG5pbXBvcnQgXCJsZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHlcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgc2Vuc29yRGF0YTogU2Vuc29yRGF0YVR5cGVbXTtcbn07XG5cbnR5cGUgU2Vuc29yRGF0YVR5cGUgPSB7XG4gIG5vZGVJRDogc3RyaW5nO1xuICBsYXRpdHVkZTogbnVtYmVyO1xuICBsb25naXR1ZGU6IG51bWJlcjtcbiAgdGltZTogc3RyaW5nO1xuICB0ZW1wOiBudW1iZXI7XG4gIGh1bWlkaXR5OiBudW1iZXI7XG4gIGJhdHRlcnk6IG51bWJlcjtcbiAgaGVhbHRoOiBzdHJpbmc7XG4gIGVtcGxveWVlSWQ/OiBzdHJpbmcgfCBudWxsO1xufTtcblxuY29uc3QgRmluZExvY2F0aW9uID0gKHsgbGF0LCBsbmcgfSkgPT4ge1xuICBjb25zdCBtYXAgPSB1c2VNYXAoKTtcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgbWFwLnNldFZpZXcoW2xhdCwgbG5nLCAxM10pO1xuICB9XG4gIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5GaW5kIExvY2F0aW9uPC9idXR0b24+O1xufTtcblxuY29uc3QgTWFwID0gKHsgc2Vuc29yRGF0YSB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWFwQ29udGFpbmVyXG4gICAgICAgIGNlbnRlcj17WzM4LjQ2LCAtMTIxLjg3XX1cbiAgICAgICAgem9vbT17Ny41fVxuICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsXCJcbiAgICAgID5cbiAgICAgICAgPFRpbGVMYXllclxuICAgICAgICAgIGF0dHJpYnV0aW9uPScmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICAgICAgICB1cmw9XCJodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIHtzZW5zb3JEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TWFya2VyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgcG9zaXRpb249e1tkYXRhLmxhdGl0dWRlLCBkYXRhLmxvbmdpdHVkZV19XG4gICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQb3B1cD5cbiAgICAgICAgICAgICAgTm9kZSBJRDoge2RhdGEubm9kZUlEfSA8YnIgLz5cbiAgICAgICAgICAgICAgTG9uZ2l0dWRlOiB7ZGF0YS5sb25naXR1ZGV9IDxiciAvPlxuICAgICAgICAgICAgICBMYXRpdHVkZToge2RhdGEubGF0aXR1ZGV9XG4gICAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICAgIDwvTWFya2VyPlxuICAgICAgICApKX1cbiAgICAgICAgPEZpbmRMb2NhdGlvbiBsYXQ9ezQwLjY3OH0gbG5nPXstMTIyLjU2M30gLz5cbiAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkNsaWNrPC9idXR0b24+ICovfVxuICAgICAgPC9NYXBDb250YWluZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iXSwibmFtZXMiOlsiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwiTWFya2VyIiwiUG9wdXAiLCJ1c2VNYXAiLCJGaW5kTG9jYXRpb24iLCJsYXQiLCJsbmciLCJtYXAiLCJoYW5kbGVDbGljayIsInNldFZpZXciLCJidXR0b24iLCJvbkNsaWNrIiwiTWFwIiwic2Vuc29yRGF0YSIsImNlbnRlciIsInpvb20iLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGlvbiIsInVybCIsImRhdGEiLCJpbmRleCIsInBvc2l0aW9uIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJkcmFnZ2FibGUiLCJub2RlSUQiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Map.tsx\n"));

/***/ })

});