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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n// import { useEffect, useState } from \"react\";\n// import { socket } from \"../../src/socket\";\n// type SensorData = {\n//   nodeID: string;\n//   latitude: number;\n//   longitude: number;\n//   time: string;\n//   temp: number;\n//   humidity: number;\n//   battery: number;\n//   health: string;\n// };\n// // async function getData() {\n// //   const data = await prisma.data.findMany({\n// //     where: { nodeID: \"node 1\" },\n// //   });\n// //   return data;\n// // }\n// const HomePage = () => {\n//   const [isConnected, setIsConnected] = useState(false);\n//   const [transport, setTransport] = useState(\"N/A\");\n//   const [sensorData, setSensorData] = useState<SensorData[]>([]);\n//   useEffect(() => {\n//     const onConnect = () => {\n//       setIsConnected(true);\n//       setTransport(socket.io.engine.transport.name);\n//       console.log(\"Connected to server\");\n//     };\n//     const onDisconnect = () => {\n//       setIsConnected(false);\n//       setTransport(\"N/A\");\n//       console.log(\"Disconnected from server\");\n//     };\n//     const onNewSensorData = (data: SensorData) => {\n//       console.log(\"Received new sensor data:\", data);\n//       setSensorData((prevData) => [...prevData, data]);\n//     };\n//     socket.on(\"connect\", onConnect);\n//     socket.on(\"disconnect\", onDisconnect);\n//     socket.on(\"newSensorData\", onNewSensorData);\n//     return () => {\n//       socket.off(\"connect\", onConnect);\n//       socket.off(\"disconnect\", onDisconnect);\n//       socket.off(\"newSensorData\", onNewSensorData);\n//     };\n//   }, []);\n//   return (\n//     <div>\n//       <h1>Real-Time Sensor Data</h1>\n//       <p>Connection status: {isConnected ? \"Connected\" : \"Disconnected\"}</p>\n//       <p>Transport: {transport}</p>\n//       <ul>\n//         {sensorData.map((data, index) => (\n//           <li key={index}>\n//             Node ID: {data.nodeID}, Temperature: {data.temp}, Humidity:{\" \"}\n//             {data.humidity}, Latitude: {data.latitude}, Longitude:{\" \"}\n//             {data.longitude}, Time: {data.time}, Battery: {data.battery},\n//             Health: {data.health}\n//           </li>\n//         ))}\n//       </ul>\n//     </div>\n//   );\n// };\n// export default HomePage;\n\nconst HomePage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"HomePage\"\n    }, void 0, false, {\n        fileName: \"/Users/gabrielledang/Desktop/arl-sensor-map/client/src/app/page.tsx\",\n        lineNumber: 83,\n        columnNumber: 10\n    }, undefined);\n};\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSwrQ0FBK0M7QUFDL0MsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEIsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2QixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLEtBQUs7QUFFTCxnQ0FBZ0M7QUFDaEMsaURBQWlEO0FBQ2pELHNDQUFzQztBQUN0QyxXQUFXO0FBQ1gsb0JBQW9CO0FBQ3BCLE9BQU87QUFFUCwyQkFBMkI7QUFDM0IsMkRBQTJEO0FBQzNELHVEQUF1RDtBQUN2RCxvRUFBb0U7QUFFcEUsc0JBQXNCO0FBQ3RCLGdDQUFnQztBQUNoQyw4QkFBOEI7QUFDOUIsdURBQXVEO0FBQ3ZELDRDQUE0QztBQUM1QyxTQUFTO0FBRVQsbUNBQW1DO0FBQ25DLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0IsaURBQWlEO0FBQ2pELFNBQVM7QUFFVCxzREFBc0Q7QUFDdEQsd0RBQXdEO0FBQ3hELDBEQUEwRDtBQUMxRCxTQUFTO0FBRVQsdUNBQXVDO0FBQ3ZDLDZDQUE2QztBQUM3QyxtREFBbUQ7QUFFbkQscUJBQXFCO0FBQ3JCLDBDQUEwQztBQUMxQyxnREFBZ0Q7QUFDaEQsc0RBQXNEO0FBQ3RELFNBQVM7QUFDVCxZQUFZO0FBRVosYUFBYTtBQUNiLFlBQVk7QUFDWix1Q0FBdUM7QUFDdkMsK0VBQStFO0FBQy9FLHNDQUFzQztBQUN0QyxhQUFhO0FBQ2IsNkNBQTZDO0FBQzdDLDZCQUE2QjtBQUM3QiwrRUFBK0U7QUFDL0UsMEVBQTBFO0FBQzFFLDRFQUE0RTtBQUM1RSxvQ0FBb0M7QUFDcEMsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxjQUFjO0FBQ2QsYUFBYTtBQUNiLE9BQU87QUFDUCxLQUFLO0FBRUwsMkJBQTJCO0FBRUQ7QUFFMUIsTUFBTUMsV0FBVztJQUNmLHFCQUFPLDhEQUFDQztrQkFBSTs7Ozs7O0FBQ2Q7S0FGTUQ7QUFJTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vYXBwL2NvbXBvbmVudHMvRGF0YVwiO1xuXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBzb2NrZXQgfSBmcm9tIFwiLi4vLi4vc3JjL3NvY2tldFwiO1xuLy8gdHlwZSBTZW5zb3JEYXRhID0ge1xuLy8gICBub2RlSUQ6IHN0cmluZztcbi8vICAgbGF0aXR1ZGU6IG51bWJlcjtcbi8vICAgbG9uZ2l0dWRlOiBudW1iZXI7XG4vLyAgIHRpbWU6IHN0cmluZztcbi8vICAgdGVtcDogbnVtYmVyO1xuLy8gICBodW1pZGl0eTogbnVtYmVyO1xuLy8gICBiYXR0ZXJ5OiBudW1iZXI7XG4vLyAgIGhlYWx0aDogc3RyaW5nO1xuLy8gfTtcblxuLy8gLy8gYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbi8vIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5kYXRhLmZpbmRNYW55KHtcbi8vIC8vICAgICB3aGVyZTogeyBub2RlSUQ6IFwibm9kZSAxXCIgfSxcbi8vIC8vICAgfSk7XG4vLyAvLyAgIHJldHVybiBkYXRhO1xuLy8gLy8gfVxuXG4vLyBjb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbi8vICAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRJc0Nvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4vLyAgIGNvbnN0IFt0cmFuc3BvcnQsIHNldFRyYW5zcG9ydF0gPSB1c2VTdGF0ZShcIk4vQVwiKTtcbi8vICAgY29uc3QgW3NlbnNvckRhdGEsIHNldFNlbnNvckRhdGFdID0gdXNlU3RhdGU8U2Vuc29yRGF0YVtdPihbXSk7XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBjb25zdCBvbkNvbm5lY3QgPSAoKSA9PiB7XG4vLyAgICAgICBzZXRJc0Nvbm5lY3RlZCh0cnVlKTtcbi8vICAgICAgIHNldFRyYW5zcG9ydChzb2NrZXQuaW8uZW5naW5lLnRyYW5zcG9ydC5uYW1lKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIHNlcnZlclwiKTtcbi8vICAgICB9O1xuXG4vLyAgICAgY29uc3Qgb25EaXNjb25uZWN0ID0gKCkgPT4ge1xuLy8gICAgICAgc2V0SXNDb25uZWN0ZWQoZmFsc2UpO1xuLy8gICAgICAgc2V0VHJhbnNwb3J0KFwiTi9BXCIpO1xuLy8gICAgICAgY29uc29sZS5sb2coXCJEaXNjb25uZWN0ZWQgZnJvbSBzZXJ2ZXJcIik7XG4vLyAgICAgfTtcblxuLy8gICAgIGNvbnN0IG9uTmV3U2Vuc29yRGF0YSA9IChkYXRhOiBTZW5zb3JEYXRhKSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIG5ldyBzZW5zb3IgZGF0YTpcIiwgZGF0YSk7XG4vLyAgICAgICBzZXRTZW5zb3JEYXRhKChwcmV2RGF0YSkgPT4gWy4uLnByZXZEYXRhLCBkYXRhXSk7XG4vLyAgICAgfTtcblxuLy8gICAgIHNvY2tldC5vbihcImNvbm5lY3RcIiwgb25Db25uZWN0KTtcbi8vICAgICBzb2NrZXQub24oXCJkaXNjb25uZWN0XCIsIG9uRGlzY29ubmVjdCk7XG4vLyAgICAgc29ja2V0Lm9uKFwibmV3U2Vuc29yRGF0YVwiLCBvbk5ld1NlbnNvckRhdGEpO1xuXG4vLyAgICAgcmV0dXJuICgpID0+IHtcbi8vICAgICAgIHNvY2tldC5vZmYoXCJjb25uZWN0XCIsIG9uQ29ubmVjdCk7XG4vLyAgICAgICBzb2NrZXQub2ZmKFwiZGlzY29ubmVjdFwiLCBvbkRpc2Nvbm5lY3QpO1xuLy8gICAgICAgc29ja2V0Lm9mZihcIm5ld1NlbnNvckRhdGFcIiwgb25OZXdTZW5zb3JEYXRhKTtcbi8vICAgICB9O1xuLy8gICB9LCBbXSk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPGgxPlJlYWwtVGltZSBTZW5zb3IgRGF0YTwvaDE+XG4vLyAgICAgICA8cD5Db25uZWN0aW9uIHN0YXR1czoge2lzQ29ubmVjdGVkID8gXCJDb25uZWN0ZWRcIiA6IFwiRGlzY29ubmVjdGVkXCJ9PC9wPlxuLy8gICAgICAgPHA+VHJhbnNwb3J0OiB7dHJhbnNwb3J0fTwvcD5cbi8vICAgICAgIDx1bD5cbi8vICAgICAgICAge3NlbnNvckRhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxuLy8gICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbi8vICAgICAgICAgICAgIE5vZGUgSUQ6IHtkYXRhLm5vZGVJRH0sIFRlbXBlcmF0dXJlOiB7ZGF0YS50ZW1wfSwgSHVtaWRpdHk6e1wiIFwifVxuLy8gICAgICAgICAgICAge2RhdGEuaHVtaWRpdHl9LCBMYXRpdHVkZToge2RhdGEubGF0aXR1ZGV9LCBMb25naXR1ZGU6e1wiIFwifVxuLy8gICAgICAgICAgICAge2RhdGEubG9uZ2l0dWRlfSwgVGltZToge2RhdGEudGltZX0sIEJhdHRlcnk6IHtkYXRhLmJhdHRlcnl9LFxuLy8gICAgICAgICAgICAgSGVhbHRoOiB7ZGF0YS5oZWFsdGh9XG4vLyAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgKSl9XG4vLyAgICAgICA8L3VsPlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiA8ZGl2PkhvbWVQYWdlPC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIb21lUGFnZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});