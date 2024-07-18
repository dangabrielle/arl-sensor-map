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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/hooks.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"(app-pages-browser)/./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"(app-pages-browser)/./node_modules/leaflet-defaulticon-compatibility/src/Icon.Default.compatibility.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst FindLocation = ()=>{\n    _s();\n    const map = (0,react_leaflet__WEBPACK_IMPORTED_MODULE_4__.useMap)();\n    function handleClick() {\n        map.setView([\n            40.678,\n            -122.563,\n            18\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleClick,\n        className: \"absolute top-2 left-2 bg-white p-2 rounded shadow-lg\",\n        children: \"Find Location\"\n    }, void 0, false, {\n        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FindLocation, \"cX187cvZ2hODbkaiLn05gMk1sCM=\", false, function() {\n    return [\n        react_leaflet__WEBPACK_IMPORTED_MODULE_4__.useMap\n    ];\n});\n_c = FindLocation;\nconst Map = (param)=>{\n    let { sensorData } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.MapContainer, {\n                center: [\n                    38.46,\n                    -121.87\n                ],\n                zoom: 7.5,\n                className: \"h-full w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                        attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                        url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    sensorData.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Marker, {\n                            position: [\n                                data.latitude,\n                                data.longitude\n                            ],\n                            draggable: false,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_8__.Popup, {\n                                children: [\n                                    \"Node ID: \",\n                                    data.nodeID,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 38\n                                    }, undefined),\n                                    \"Longitude: \",\n                                    data.longitude,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 43\n                                    }, undefined),\n                                    \"Latitude: \",\n                                    data.latitude\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FindLocation, {}, void 0, false, {\n                        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Click\"\n            }, void 0, false, {\n                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/Map.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c, _c1;\n$RefreshReg$(_c, \"FindLocation\");\n$RefreshReg$(_c1, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NYXAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUrRTtBQUU3QztBQUNvRDtBQUMzQztBQWtCM0MsTUFBTUssZUFBZTs7SUFDbkIsTUFBTUMsTUFBTUYscURBQU1BO0lBQ2xCLFNBQVNHO1FBQ1BELElBQUlFLE9BQU8sQ0FBQztZQUFDO1lBQVEsQ0FBQztZQUFTO1NBQUc7SUFDcEM7SUFDQSxxQkFDRSw4REFBQ0M7UUFDQ0MsU0FBU0g7UUFDVEksV0FBVTtrQkFDWDs7Ozs7O0FBSUw7R0FiTU47O1FBQ1FELGlEQUFNQTs7O0tBRGRDO0FBZU4sTUFBTU8sTUFBTTtRQUFDLEVBQUVDLFVBQVUsRUFBUztJQUNoQyxxQkFDRTs7MEJBQ0UsOERBQUNiLHVEQUFZQTtnQkFDWGMsUUFBUTtvQkFBQztvQkFBTyxDQUFDO2lCQUFPO2dCQUN4QkMsTUFBTTtnQkFDTkosV0FBVTs7a0NBRVYsOERBQUNWLG9EQUFTQTt3QkFDUmUsYUFBWTt3QkFDWkMsS0FBSTs7Ozs7O29CQUVMSixXQUFXUCxHQUFHLENBQUMsQ0FBQ1ksTUFBTUMsc0JBQ3JCLDhEQUFDakIsaURBQU1BOzRCQUVMa0IsVUFBVTtnQ0FBQ0YsS0FBS0csUUFBUTtnQ0FBRUgsS0FBS0ksU0FBUzs2QkFBQzs0QkFDekNDLFdBQVc7c0NBRVgsNEVBQUNwQixnREFBS0E7O29DQUFDO29DQUNLZSxLQUFLTSxNQUFNO29DQUFDO2tEQUFDLDhEQUFDQzs7Ozs7b0NBQUs7b0NBQ2pCUCxLQUFLSSxTQUFTO29DQUFDO2tEQUFDLDhEQUFDRzs7Ozs7b0NBQUs7b0NBQ3ZCUCxLQUFLRyxRQUFROzs7Ozs7OzJCQVByQkY7Ozs7O2tDQVdULDhEQUFDZDs7Ozs7Ozs7Ozs7MEJBRUgsOERBQUNJOzBCQUFPOzs7Ozs7OztBQUdkO01BOUJNRztBQWdDTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTWFwLnRzeD83MTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBNYXBDb250YWluZXIsIFRpbGVMYXllciwgTWFya2VyLCBQb3B1cCwgdXNlTWFwIH0gZnJvbSBcInJlYWN0LWxlYWZsZXRcIjtcblxuaW1wb3J0IFwibGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7XG5pbXBvcnQgXCJsZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHkvZGlzdC9sZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHkuY3NzXCI7XG5pbXBvcnQgXCJsZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHlcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgc2Vuc29yRGF0YTogU2Vuc29yRGF0YVR5cGVbXTtcbn07XG5cbnR5cGUgU2Vuc29yRGF0YVR5cGUgPSB7XG4gIG5vZGVJRDogc3RyaW5nO1xuICBsYXRpdHVkZTogbnVtYmVyO1xuICBsb25naXR1ZGU6IG51bWJlcjtcbiAgdGltZTogc3RyaW5nO1xuICB0ZW1wOiBudW1iZXI7XG4gIGh1bWlkaXR5OiBudW1iZXI7XG4gIGJhdHRlcnk6IG51bWJlcjtcbiAgaGVhbHRoOiBzdHJpbmc7XG4gIGVtcGxveWVlSWQ/OiBzdHJpbmcgfCBudWxsO1xufTtcblxuY29uc3QgRmluZExvY2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCBtYXAgPSB1c2VNYXAoKTtcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgbWFwLnNldFZpZXcoWzQwLjY3OCwgLTEyMi41NjMsIDE4XSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIGxlZnQtMiBiZy13aGl0ZSBwLTIgcm91bmRlZCBzaGFkb3ctbGdcIlxuICAgID5cbiAgICAgIEZpbmQgTG9jYXRpb25cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmNvbnN0IE1hcCA9ICh7IHNlbnNvckRhdGEgfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1hcENvbnRhaW5lclxuICAgICAgICBjZW50ZXI9e1szOC40NiwgLTEyMS44N119XG4gICAgICAgIHpvb209ezcuNX1cbiAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbFwiXG4gICAgICA+XG4gICAgICAgIDxUaWxlTGF5ZXJcbiAgICAgICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICAgICAgdXJsPVwiaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICB7c2Vuc29yRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPE1hcmtlclxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHBvc2l0aW9uPXtbZGF0YS5sYXRpdHVkZSwgZGF0YS5sb25naXR1ZGVdfVxuICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UG9wdXA+XG4gICAgICAgICAgICAgIE5vZGUgSUQ6IHtkYXRhLm5vZGVJRH0gPGJyIC8+XG4gICAgICAgICAgICAgIExvbmdpdHVkZToge2RhdGEubG9uZ2l0dWRlfSA8YnIgLz5cbiAgICAgICAgICAgICAgTGF0aXR1ZGU6IHtkYXRhLmxhdGl0dWRlfVxuICAgICAgICAgICAgPC9Qb3B1cD5cbiAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxGaW5kTG9jYXRpb24gLz5cbiAgICAgIDwvTWFwQ29udGFpbmVyPlxuICAgICAgPGJ1dHRvbj5DbGljazwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuIl0sIm5hbWVzIjpbIk1hcENvbnRhaW5lciIsIlRpbGVMYXllciIsIk1hcmtlciIsIlBvcHVwIiwidXNlTWFwIiwiRmluZExvY2F0aW9uIiwibWFwIiwiaGFuZGxlQ2xpY2siLCJzZXRWaWV3IiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsIk1hcCIsInNlbnNvckRhdGEiLCJjZW50ZXIiLCJ6b29tIiwiYXR0cmlidXRpb24iLCJ1cmwiLCJkYXRhIiwiaW5kZXgiLCJwb3NpdGlvbiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZHJhZ2dhYmxlIiwibm9kZUlEIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Map.tsx\n"));

/***/ })

});