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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/hooks.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst FindLocation = (param)=>{\n    let { lat, lng } = param;\n    _s();\n    const map = (0,react_leaflet__WEBPACK_IMPORTED_MODULE_2__.useMap)();\n    map.setView([\n        lat,\n        lng\n    ], 13);\n    return(// <>\n    //   <button\n    //     onClick={handleClick}\n    //     className=\"absolute top-2 left-2 bg-white p-2 rounded shadow-lg z-10\"\n    //   >\n    //     Find Location\n    //   </button>\n    // </>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/FindLocation.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined));\n};\n_s(FindLocation, \"cX187cvZ2hODbkaiLn05gMk1sCM=\", false, function() {\n    return [\n        react_leaflet__WEBPACK_IMPORTED_MODULE_2__.useMap\n    ];\n});\n_c = FindLocation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FindLocation);\nvar _c;\n$RefreshReg$(_c, \"FindLocation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9GaW5kTG9jYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDYTtBQUV2QyxNQUFNRSxlQUFlO1FBQUMsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7O0lBQ2hDLE1BQU1DLE1BQU1KLHFEQUFNQTtJQUVsQkksSUFBSUMsT0FBTyxDQUFDO1FBQUNIO1FBQUtDO0tBQUksRUFBRTtJQUV4QixPQUNFLEtBQUs7SUFDTCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDRFQUE0RTtJQUM1RSxNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxNQUFNO2tCQUNOLDhEQUFDRzs7Ozs7QUFFTDtHQWhCTUw7O1FBQ1FELGlEQUFNQTs7O0tBRGRDO0FBa0JOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9GaW5kTG9jYXRpb24udHN4P2M5ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWFwIH0gZnJvbSBcInJlYWN0LWxlYWZsZXRcIjtcblxuY29uc3QgRmluZExvY2F0aW9uID0gKHsgbGF0LCBsbmcgfSkgPT4ge1xuICBjb25zdCBtYXAgPSB1c2VNYXAoKTtcblxuICBtYXAuc2V0VmlldyhbbGF0LCBsbmddLCAxMyk7XG5cbiAgcmV0dXJuIChcbiAgICAvLyA8PlxuICAgIC8vICAgPGJ1dHRvblxuICAgIC8vICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAvLyAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgbGVmdC0yIGJnLXdoaXRlIHAtMiByb3VuZGVkIHNoYWRvdy1sZyB6LTEwXCJcbiAgICAvLyAgID5cbiAgICAvLyAgICAgRmluZCBMb2NhdGlvblxuICAgIC8vICAgPC9idXR0b24+XG4gICAgLy8gPC8+XG4gICAgPGRpdj48L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbmRMb2NhdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZU1hcCIsIkZpbmRMb2NhdGlvbiIsImxhdCIsImxuZyIsIm1hcCIsInNldFZpZXciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/FindLocation.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/SensorData.tsx":
/*!*******************************************!*\
  !*** ./src/app/components/SensorData.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket */ \"(app-pages-browser)/./src/socket.js\");\n/* harmony import */ var _LoadMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoadMap */ \"(app-pages-browser)/./src/app/components/LoadMap.tsx\");\n/* harmony import */ var _FindLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FindLocation */ \"(app-pages-browser)/./src/app/components/FindLocation.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SensorData = (param)=>{\n    let { initialData } = param;\n    _s();\n    const [isConnected, setIsConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [transport, setTransport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"N/A\");\n    const [sensorData, setSensorData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const onConnect = ()=>{\n            setIsConnected(true);\n            setTransport(_socket__WEBPACK_IMPORTED_MODULE_2__.socket.io.engine.transport.name);\n            console.log(\"Connected to server\");\n        };\n        const onDisconnect = ()=>{\n            setIsConnected(false);\n            setTransport(\"N/A\");\n            console.log(\"Disconnected from server\");\n        };\n        const onNewSensorData = (data)=>{\n            console.log(\"Received new sensor data:\", data);\n            // add updates to coordinates logic for existing nodes here\n            // let alreadyExists = false;\n            // for (let i = 0; i < sensorData.length; i++) {\n            //   if (sensorData[i].nodeID === data.nodeID) {\n            //     sensorData[i] = data;\n            //     alreadyExists = true;\n            //   }\n            // }\n            // console.log(\"sensor data update\", sensorData);\n            // console.log(alreadyExists);\n            // if (alreadyExists) {\n            //   setSensorData(sensorData);\n            // } else {\n            //   setSensorData((prevData) => [...prevData, data]);\n            // }\n            setSensorData((prevData)=>{\n                let idx = prevData.findIndex((current)=>current.nodeID == data.nodeID);\n                let newData = [\n                    ...prevData\n                ];\n                if (idx !== -1) {\n                    newData[idx] = data;\n                    console.log(newData);\n                    return newData;\n                } else {\n                    return [\n                        ...prevData,\n                        data\n                    ];\n                }\n            });\n        };\n        _socket__WEBPACK_IMPORTED_MODULE_2__.socket.on(\"connect\", onConnect);\n        _socket__WEBPACK_IMPORTED_MODULE_2__.socket.on(\"disconnect\", onDisconnect);\n        _socket__WEBPACK_IMPORTED_MODULE_2__.socket.on(\"newSensorData\", onNewSensorData);\n        return ()=>{\n            _socket__WEBPACK_IMPORTED_MODULE_2__.socket.off(\"connect\", onConnect);\n            _socket__WEBPACK_IMPORTED_MODULE_2__.socket.off(\"disconnect\", onDisconnect);\n            _socket__WEBPACK_IMPORTED_MODULE_2__.socket.off(\"newSensorData\", onNewSensorData);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Real-Time Sensor Data\"\n            }, void 0, false, {\n                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/SensorData.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Connection status: \",\n                    isConnected ? \"Connected\" : \"Disconnected\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/SensorData.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Transport: \",\n                    transport\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/SensorData.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: sensorData.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: [\n                                \"Node ID: \",\n                                data.nodeID,\n                                \", Temperature: \",\n                                data.temp,\n                                \", Humidity:\",\n                                \" \",\n                                data.humidity,\n                                \", Latitude: \",\n                                data.latitude,\n                                \", Longitude:\",\n                                \" \",\n                                data.longitude,\n                                \", Time: \",\n                                data.time,\n                                \", Battery: \",\n                                data.battery,\n                                \", Health: \",\n                                data.health,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FindLocation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    lat: data.latitude,\n                                    lng: data.longitude\n                                }, void 0, false, {\n                                    fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/SensorData.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/SensorData.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/SensorData.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/SensorData.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoadMap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sensorData: sensorData\n            }, void 0, false, {\n                fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/SensorData.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/components/SensorData.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SensorData, \"xXiACdQfvyvRzbD+QPt3FiFf+wE=\");\n_c = SensorData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SensorData);\nvar _c;\n$RefreshReg$(_c, \"SensorData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TZW5zb3JEYXRhLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFNEM7QUFDTjtBQUNaO0FBQ007QUFDVTtBQWlCMUMsTUFBTU0sYUFBYTtRQUFDLEVBQUVDLFdBQVcsRUFBUzs7SUFDeEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQW1CTTtJQUUvRFAsZ0RBQVNBLENBQUM7UUFDUixNQUFNYyxZQUFZO1lBQ2hCTCxlQUFlO1lBQ2ZFLGFBQWFULDJDQUFNQSxDQUFDYSxFQUFFLENBQUNDLE1BQU0sQ0FBQ04sU0FBUyxDQUFDTyxJQUFJO1lBQzVDQyxRQUFRQyxHQUFHLENBQUM7UUFDZDtRQUVBLE1BQU1DLGVBQWU7WUFDbkJYLGVBQWU7WUFDZkUsYUFBYTtZQUNiTyxRQUFRQyxHQUFHLENBQUM7UUFDZDtRQUVBLE1BQU1FLGtCQUFrQixDQUFDQztZQUN2QkosUUFBUUMsR0FBRyxDQUFDLDZCQUE2Qkc7WUFDekMsMkRBQTJEO1lBQzNELDZCQUE2QjtZQUM3QixnREFBZ0Q7WUFDaEQsZ0RBQWdEO1lBQ2hELDRCQUE0QjtZQUM1Qiw0QkFBNEI7WUFDNUIsTUFBTTtZQUNOLElBQUk7WUFFSixpREFBaUQ7WUFDakQsOEJBQThCO1lBRTlCLHVCQUF1QjtZQUN2QiwrQkFBK0I7WUFDL0IsV0FBVztZQUNYLHNEQUFzRDtZQUN0RCxJQUFJO1lBRUpULGNBQWMsQ0FBQ1U7Z0JBQ2IsSUFBSUMsTUFBTUQsU0FBU0UsU0FBUyxDQUMxQixDQUFDQyxVQUFZQSxRQUFRQyxNQUFNLElBQUlMLEtBQUtLLE1BQU07Z0JBRTVDLElBQUlDLFVBQVU7dUJBQUlMO2lCQUFTO2dCQUMzQixJQUFJQyxRQUFRLENBQUMsR0FBRztvQkFDZEksT0FBTyxDQUFDSixJQUFJLEdBQUdGO29CQUNmSixRQUFRQyxHQUFHLENBQUNTO29CQUNaLE9BQU9BO2dCQUNULE9BQU87b0JBQ0wsT0FBTzsyQkFBSUw7d0JBQVVEO3FCQUFLO2dCQUM1QjtZQUNGO1FBQ0Y7UUFFQXBCLDJDQUFNQSxDQUFDMkIsRUFBRSxDQUFDLFdBQVdmO1FBQ3JCWiwyQ0FBTUEsQ0FBQzJCLEVBQUUsQ0FBQyxjQUFjVDtRQUN4QmxCLDJDQUFNQSxDQUFDMkIsRUFBRSxDQUFDLGlCQUFpQlI7UUFFM0IsT0FBTztZQUNMbkIsMkNBQU1BLENBQUM0QixHQUFHLENBQUMsV0FBV2hCO1lBQ3RCWiwyQ0FBTUEsQ0FBQzRCLEdBQUcsQ0FBQyxjQUFjVjtZQUN6QmxCLDJDQUFNQSxDQUFDNEIsR0FBRyxDQUFDLGlCQUFpQlQ7UUFDOUI7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1U7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7b0JBQUU7b0JBQW9CekIsY0FBYyxjQUFjOzs7Ozs7OzBCQUNuRCw4REFBQ3lCOztvQkFBRTtvQkFBWXZCOzs7Ozs7OzBCQUNmLDhEQUFDd0I7MEJBQ0V0QixXQUFXdUIsR0FBRyxDQUFDLENBQUNiLE1BQU1jLHNCQUNyQiw4REFBQ0M7a0NBQ0MsNEVBQUNDOztnQ0FBTztnQ0FDSWhCLEtBQUtLLE1BQU07Z0NBQUM7Z0NBQWdCTCxLQUFLaUIsSUFBSTtnQ0FBQztnQ0FBWTtnQ0FDM0RqQixLQUFLa0IsUUFBUTtnQ0FBQztnQ0FBYWxCLEtBQUttQixRQUFRO2dDQUFDO2dDQUFhO2dDQUN0RG5CLEtBQUtvQixTQUFTO2dDQUFDO2dDQUFTcEIsS0FBS3FCLElBQUk7Z0NBQUM7Z0NBQVlyQixLQUFLc0IsT0FBTztnQ0FBQztnQ0FDbkR0QixLQUFLdUIsTUFBTTs4Q0FDcEIsOERBQUN4QyxxREFBWUE7b0NBQUN5QyxLQUFLeEIsS0FBS21CLFFBQVE7b0NBQUVNLEtBQUt6QixLQUFLb0IsU0FBUzs7Ozs7Ozs7Ozs7O3VCQU5oRE47Ozs7Ozs7Ozs7MEJBWWIsOERBQUNoQyxnREFBT0E7Z0JBQUNRLFlBQVlBOzs7Ozs7Ozs7Ozs7QUFHM0I7R0F0Rk1OO0tBQUFBO0FBd0ZOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9TZW5zb3JEYXRhLnRzeD9jOWExIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzb2NrZXQgfSBmcm9tIFwiLi4vLi4vc29ja2V0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZE1hcCBmcm9tIFwiLi9Mb2FkTWFwXCI7XG5pbXBvcnQgRmluZExvY2F0aW9uIGZyb20gXCIuL0ZpbmRMb2NhdGlvblwiO1xuXG50eXBlIFByb3BzID0ge1xuICBpbml0aWFsRGF0YTogU2Vuc29yRGF0YVR5cGVbXTtcbn07XG5cbnR5cGUgU2Vuc29yRGF0YVR5cGUgPSB7XG4gIG5vZGVJRDogc3RyaW5nO1xuICBsYXRpdHVkZTogbnVtYmVyO1xuICBsb25naXR1ZGU6IG51bWJlcjtcbiAgdGltZTogc3RyaW5nO1xuICB0ZW1wOiBudW1iZXI7XG4gIGh1bWlkaXR5OiBudW1iZXI7XG4gIGJhdHRlcnk6IG51bWJlcjtcbiAgaGVhbHRoOiBzdHJpbmc7XG4gIGVtcGxveWVlSWQ/OiBzdHJpbmcgfCBudWxsO1xufTtcbmNvbnN0IFNlbnNvckRhdGEgPSAoeyBpbml0aWFsRGF0YSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbaXNDb25uZWN0ZWQsIHNldElzQ29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RyYW5zcG9ydCwgc2V0VHJhbnNwb3J0XSA9IHVzZVN0YXRlKFwiTi9BXCIpO1xuICBjb25zdCBbc2Vuc29yRGF0YSwgc2V0U2Vuc29yRGF0YV0gPSB1c2VTdGF0ZTxTZW5zb3JEYXRhVHlwZVtdPihpbml0aWFsRGF0YSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvbkNvbm5lY3QgPSAoKSA9PiB7XG4gICAgICBzZXRJc0Nvbm5lY3RlZCh0cnVlKTtcbiAgICAgIHNldFRyYW5zcG9ydChzb2NrZXQuaW8uZW5naW5lLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIHNlcnZlclwiKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25EaXNjb25uZWN0ID0gKCkgPT4ge1xuICAgICAgc2V0SXNDb25uZWN0ZWQoZmFsc2UpO1xuICAgICAgc2V0VHJhbnNwb3J0KFwiTi9BXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJEaXNjb25uZWN0ZWQgZnJvbSBzZXJ2ZXJcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uTmV3U2Vuc29yRGF0YSA9IChkYXRhOiBTZW5zb3JEYXRhVHlwZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBuZXcgc2Vuc29yIGRhdGE6XCIsIGRhdGEpO1xuICAgICAgLy8gYWRkIHVwZGF0ZXMgdG8gY29vcmRpbmF0ZXMgbG9naWMgZm9yIGV4aXN0aW5nIG5vZGVzIGhlcmVcbiAgICAgIC8vIGxldCBhbHJlYWR5RXhpc3RzID0gZmFsc2U7XG4gICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHNlbnNvckRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICAgaWYgKHNlbnNvckRhdGFbaV0ubm9kZUlEID09PSBkYXRhLm5vZGVJRCkge1xuICAgICAgLy8gICAgIHNlbnNvckRhdGFbaV0gPSBkYXRhO1xuICAgICAgLy8gICAgIGFscmVhZHlFeGlzdHMgPSB0cnVlO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2Vuc29yIGRhdGEgdXBkYXRlXCIsIHNlbnNvckRhdGEpO1xuICAgICAgLy8gY29uc29sZS5sb2coYWxyZWFkeUV4aXN0cyk7XG5cbiAgICAgIC8vIGlmIChhbHJlYWR5RXhpc3RzKSB7XG4gICAgICAvLyAgIHNldFNlbnNvckRhdGEoc2Vuc29yRGF0YSk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBzZXRTZW5zb3JEYXRhKChwcmV2RGF0YSkgPT4gWy4uLnByZXZEYXRhLCBkYXRhXSk7XG4gICAgICAvLyB9XG5cbiAgICAgIHNldFNlbnNvckRhdGEoKHByZXZEYXRhKSA9PiB7XG4gICAgICAgIGxldCBpZHggPSBwcmV2RGF0YS5maW5kSW5kZXgoXG4gICAgICAgICAgKGN1cnJlbnQpID0+IGN1cnJlbnQubm9kZUlEID09IGRhdGEubm9kZUlEXG4gICAgICAgICk7XG4gICAgICAgIGxldCBuZXdEYXRhID0gWy4uLnByZXZEYXRhXTtcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICBuZXdEYXRhW2lkeF0gPSBkYXRhO1xuICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0RhdGEpO1xuICAgICAgICAgIHJldHVybiBuZXdEYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBbLi4ucHJldkRhdGEsIGRhdGFdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCBvbkNvbm5lY3QpO1xuICAgIHNvY2tldC5vbihcImRpc2Nvbm5lY3RcIiwgb25EaXNjb25uZWN0KTtcbiAgICBzb2NrZXQub24oXCJuZXdTZW5zb3JEYXRhXCIsIG9uTmV3U2Vuc29yRGF0YSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc29ja2V0Lm9mZihcImNvbm5lY3RcIiwgb25Db25uZWN0KTtcbiAgICAgIHNvY2tldC5vZmYoXCJkaXNjb25uZWN0XCIsIG9uRGlzY29ubmVjdCk7XG4gICAgICBzb2NrZXQub2ZmKFwibmV3U2Vuc29yRGF0YVwiLCBvbk5ld1NlbnNvckRhdGEpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UmVhbC1UaW1lIFNlbnNvciBEYXRhPC9oMT5cbiAgICAgIDxwPkNvbm5lY3Rpb24gc3RhdHVzOiB7aXNDb25uZWN0ZWQgPyBcIkNvbm5lY3RlZFwiIDogXCJEaXNjb25uZWN0ZWRcIn08L3A+XG4gICAgICA8cD5UcmFuc3BvcnQ6IHt0cmFuc3BvcnR9PC9wPlxuICAgICAgPHVsPlxuICAgICAgICB7c2Vuc29yRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgTm9kZSBJRDoge2RhdGEubm9kZUlEfSwgVGVtcGVyYXR1cmU6IHtkYXRhLnRlbXB9LCBIdW1pZGl0eTp7XCIgXCJ9XG4gICAgICAgICAgICAgIHtkYXRhLmh1bWlkaXR5fSwgTGF0aXR1ZGU6IHtkYXRhLmxhdGl0dWRlfSwgTG9uZ2l0dWRlOntcIiBcIn1cbiAgICAgICAgICAgICAge2RhdGEubG9uZ2l0dWRlfSwgVGltZToge2RhdGEudGltZX0sIEJhdHRlcnk6IHtkYXRhLmJhdHRlcnl9LFxuICAgICAgICAgICAgICBIZWFsdGg6IHtkYXRhLmhlYWx0aH1cbiAgICAgICAgICAgICAgPEZpbmRMb2NhdGlvbiBsYXQ9e2RhdGEubGF0aXR1ZGV9IGxuZz17ZGF0YS5sb25naXR1ZGV9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG5cbiAgICAgIDxMb2FkTWFwIHNlbnNvckRhdGE9e3NlbnNvckRhdGF9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZW5zb3JEYXRhO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic29ja2V0IiwiUmVhY3QiLCJMb2FkTWFwIiwiRmluZExvY2F0aW9uIiwiU2Vuc29yRGF0YSIsImluaXRpYWxEYXRhIiwiaXNDb25uZWN0ZWQiLCJzZXRJc0Nvbm5lY3RlZCIsInRyYW5zcG9ydCIsInNldFRyYW5zcG9ydCIsInNlbnNvckRhdGEiLCJzZXRTZW5zb3JEYXRhIiwib25Db25uZWN0IiwiaW8iLCJlbmdpbmUiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsIm9uRGlzY29ubmVjdCIsIm9uTmV3U2Vuc29yRGF0YSIsImRhdGEiLCJwcmV2RGF0YSIsImlkeCIsImZpbmRJbmRleCIsImN1cnJlbnQiLCJub2RlSUQiLCJuZXdEYXRhIiwib24iLCJvZmYiLCJkaXYiLCJoMSIsInAiLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJidXR0b24iLCJ0ZW1wIiwiaHVtaWRpdHkiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInRpbWUiLCJiYXR0ZXJ5IiwiaGVhbHRoIiwibGF0IiwibG5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SensorData.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@react-leaflet/core/lib/context.js":
/*!*********************************************************!*\
  !*** ./node_modules/@react-leaflet/core/lib/context.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTEXT_VERSION: function() { return /* binding */ CONTEXT_VERSION; },\n/* harmony export */   LeafletContext: function() { return /* binding */ LeafletContext; },\n/* harmony export */   LeafletProvider: function() { return /* binding */ LeafletProvider; },\n/* harmony export */   createLeafletContext: function() { return /* binding */ createLeafletContext; },\n/* harmony export */   extendContext: function() { return /* binding */ extendContext; },\n/* harmony export */   useLeafletContext: function() { return /* binding */ useLeafletContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n\nconst CONTEXT_VERSION = 1;\nfunction createLeafletContext(map) {\n    return Object.freeze({\n        __version: CONTEXT_VERSION,\n        map\n    });\n}\nfunction extendContext(source, extra) {\n    return Object.freeze({\n        ...source,\n        ...extra\n    });\n}\nconst LeafletContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nconst LeafletProvider = LeafletContext.Provider;\nfunction useLeafletContext() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LeafletContext);\n    if (context == null) {\n        throw new Error('No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>');\n    }\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbGVhZmxldC9jb3JlL2xpYi9jb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0Q7QUFDM0M7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ08sdUJBQXVCLG9EQUFhO0FBQ3BDO0FBQ0E7QUFDUCxvQkFBb0IsaURBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlYWN0LWxlYWZsZXQvY29yZS9saWIvY29udGV4dC5qcz84MjU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQ09OVEVYVF9WRVJTSU9OID0gMTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMZWFmbGV0Q29udGV4dChtYXApIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIF9fdmVyc2lvbjogQ09OVEVYVF9WRVJTSU9OLFxuICAgICAgICBtYXBcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRDb250ZXh0KHNvdXJjZSwgZXh0cmEpIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIC4uLnNvdXJjZSxcbiAgICAgICAgLi4uZXh0cmFcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBMZWFmbGV0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5leHBvcnQgY29uc3QgTGVhZmxldFByb3ZpZGVyID0gTGVhZmxldENvbnRleHQuUHJvdmlkZXI7XG5leHBvcnQgZnVuY3Rpb24gdXNlTGVhZmxldENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoTGVhZmxldENvbnRleHQpO1xuICAgIGlmIChjb250ZXh0ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb250ZXh0IHByb3ZpZGVkOiB1c2VMZWFmbGV0Q29udGV4dCgpIGNhbiBvbmx5IGJlIHVzZWQgaW4gYSBkZXNjZW5kYW50IG9mIDxNYXBDb250YWluZXI+Jyk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@react-leaflet/core/lib/context.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/react-leaflet/lib/hooks.js":
/*!*************************************************!*\
  !*** ./node_modules/react-leaflet/lib/hooks.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useMap: function() { return /* binding */ useMap; },\n/* harmony export */   useMapEvent: function() { return /* binding */ useMapEvent; },\n/* harmony export */   useMapEvents: function() { return /* binding */ useMapEvents; }\n/* harmony export */ });\n/* harmony import */ var _react_leaflet_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-leaflet/core */ \"(app-pages-browser)/./node_modules/@react-leaflet/core/lib/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n\n\nfunction useMap() {\n    return (0,_react_leaflet_core__WEBPACK_IMPORTED_MODULE_1__.useLeafletContext)().map;\n}\nfunction useMapEvent(type, handler) {\n    const map = useMap();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function addMapEventHandler() {\n        // @ts-ignore event type\n        map.on(type, handler);\n        return function removeMapEventHandler() {\n            // @ts-ignore event type\n            map.off(type, handler);\n        };\n    }, [\n        map,\n        type,\n        handler\n    ]);\n    return map;\n}\nfunction useMapEvents(handlers) {\n    const map = useMap();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function addMapEventHandlers() {\n        map.on(handlers);\n        return function removeMapEventHandlers() {\n            map.off(handlers);\n        };\n    }, [\n        map,\n        handlers\n    ]);\n    return map;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2xpYi9ob29rcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUN0QjtBQUMzQjtBQUNQLFdBQVcsc0VBQWlCO0FBQzVCO0FBQ087QUFDUDtBQUNBLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2xpYi9ob29rcy5qcz82Y2JiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUxlYWZsZXRDb250ZXh0IH0gZnJvbSAnQHJlYWN0LWxlYWZsZXQvY29yZSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlTWFwKCkge1xuICAgIHJldHVybiB1c2VMZWFmbGV0Q29udGV4dCgpLm1hcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VNYXBFdmVudCh0eXBlLCBoYW5kbGVyKSB7XG4gICAgY29uc3QgbWFwID0gdXNlTWFwKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uIGFkZE1hcEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBldmVudCB0eXBlXG4gICAgICAgIG1hcC5vbih0eXBlLCBoYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlbW92ZU1hcEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgZXZlbnQgdHlwZVxuICAgICAgICAgICAgbWFwLm9mZih0eXBlLCBoYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIG1hcCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgaGFuZGxlclxuICAgIF0pO1xuICAgIHJldHVybiBtYXA7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlTWFwRXZlbnRzKGhhbmRsZXJzKSB7XG4gICAgY29uc3QgbWFwID0gdXNlTWFwKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uIGFkZE1hcEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIG1hcC5vbihoYW5kbGVycyk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZW1vdmVNYXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICAgICAgbWFwLm9mZihoYW5kbGVycyk7XG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICBtYXAsXG4gICAgICAgIGhhbmRsZXJzXG4gICAgXSk7XG4gICAgcmV0dXJuIG1hcDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-leaflet/lib/hooks.js\n"));

/***/ })

});