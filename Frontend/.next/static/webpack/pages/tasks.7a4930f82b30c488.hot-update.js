"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tasks",{

/***/ "./pages/tasks.jsx":
/*!*************************!*\
  !*** ./pages/tasks.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ TasksPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tabs/Tabs */ \"./components/Tabs/Tabs.jsx\");\n/* harmony import */ var _components_Tasks_Tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Tasks/Tasks */ \"./components/Tasks/Tasks.jsx\");\n/* harmony import */ var _contexts_TaskContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/TaskContext */ \"./contexts/TaskContext.jsx\");\n/* harmony import */ var _components_FormModal_FormModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FormModal/FormModal */ \"./components/FormModal/FormModal.jsx\");\n/* harmony import */ var _layouts_TaskLayout_TaskLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/TaskLayout/TaskLayout */ \"./layouts/TaskLayout/TaskLayout.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction TasksPage() {\n    _s();\n    const { openedEditTask , openedCreateTask , setOpenedEditTask , setOpenedCreateTask  } = (0,_contexts_TaskContext__WEBPACK_IMPORTED_MODULE_4__.useTask)();\n    const taskStates = [\n        {\n            id: \"1\",\n            label: \"Pendientes\",\n            value: \"Pendientes\"\n        },\n        {\n            id: \"2\",\n            label: \"En progreso\",\n            value: \"Pendientes\"\n        },\n        {\n            id: \"3\",\n            label: \"Terminadas\",\n            value: \"Pendientes\"\n        }\n    ];\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: \"1\",\n            title: \"Molestar a la gata\",\n            description: \"hola mundo\",\n            onEdit: ()=>setOpenedEditTask(true)\n        },\n        {\n            id: \"2\",\n            title: \"Molestar a la gata\",\n            description: \"hola mundo\",\n            onEdit: ()=>setOpenedEditTask(true)\n        },\n        {\n            id: \"3\",\n            title: \"Molestar a la gata\",\n            description: \"hola mundo\",\n            onEdit: ()=>setOpenedEditTask(true)\n        },\n        {\n            id: \"4\",\n            title: \"Molestar a la gata\",\n            description: \"hola mundo\",\n            onEdit: ()=>setOpenedEditTask(true)\n        },\n        {\n            id: \"5\",\n            title: \"Molestar a la gata\",\n            description: \"hola mundo\",\n            onEdit: ()=>setOpenedEditTask(true)\n        }\n    ]);\n    const handleSelectTaskState = (taskState)=>{\n        console.log(taskState);\n    };\n    const handleDeleteTask = (task)=>{\n        setTasks((tasks)=>tasks.filter((_task)=>!(_task.id === task.id)));\n    };\n    const taskStatesTabs = taskStates.map((taskState)=>({\n            ...taskState,\n            onSelect: handleSelectTaskState\n        }));\n    const tasksItems = tasks.map((task)=>({\n            ...task,\n            onDelete: handleDeleteTask\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_TaskLayout_TaskLayout__WEBPACK_IMPORTED_MODULE_6__.TaskLayout, {\n        title: \"Mis tareas\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {\n                initial: taskStatesTabs[0],\n                tabs: taskStatesTabs\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\Taskpoint\\\\Frontend\\\\pages\\\\tasks.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tasks_Tasks__WEBPACK_IMPORTED_MODULE_3__.Tasks, {\n                windowResponsive: true,\n                tasks: tasksItems\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\Taskpoint\\\\Frontend\\\\pages\\\\tasks.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormModal_FormModal__WEBPACK_IMPORTED_MODULE_5__.FormModal, {\n                isVisible: openedCreateTask,\n                onClose: ()=>setOpenedCreateTask(false),\n                mainPaddingBottom: \"30vh\",\n                title: \"Crear tarea\",\n                inputs: [\n                    {\n                        id: \"1\",\n                        type: \"text\",\n                        as: \"textfield\",\n                        name: \"title\",\n                        label: \"Titulo\",\n                        placeholder: \"ej: Molestar a la gata\"\n                    },\n                    {\n                        id: \"2\",\n                        type: \"text\",\n                        as: \"textarea\",\n                        name: \"description\",\n                        label: \"Descripcion\",\n                        placeholder: \"ej: Molestar a la gata\"\n                    },\n                    {\n                        id: \"3\",\n                        type: \"text\",\n                        as: \"dropdown\",\n                        name: \"description\",\n                        label: \"Estado\",\n                        selectables: [\n                            {\n                                id: \"1\",\n                                image: \"/icon/bars1.svg\",\n                                label: \"Pendiente\",\n                                value: \"Pendientes\"\n                            },\n                            {\n                                id: \"2\",\n                                image: \"/icon/sun1.svg\",\n                                label: \"En progreso\",\n                                value: \"En progreso\"\n                            },\n                            {\n                                id: \"3\",\n                                image: \"/icon/sun2.svg\",\n                                label: \"Terminada\",\n                                value: \"Terminadas\"\n                            }\n                        ]\n                    }\n                ],\n                actions: [\n                    {\n                        id: \"1\",\n                        as: \"primarybutton\",\n                        label: \"Crear tarea\"\n                    },\n                    {\n                        id: \"2\",\n                        as: \"secondarybutton\",\n                        label: \"Cancelar\"\n                    }\n                ]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\Taskpoint\\\\Frontend\\\\pages\\\\tasks.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormModal_FormModal__WEBPACK_IMPORTED_MODULE_5__.FormModal, {\n                isVisible: openedEditTask,\n                onClose: ()=>setOpenedEditTask(false),\n                mainPaddingBottom: \"30vh\",\n                title: \"Crear tarea\",\n                inputs: [\n                    {\n                        id: \"1\",\n                        type: \"text\",\n                        as: \"textfield\",\n                        name: \"title\",\n                        label: \"Titulo\",\n                        placeholder: \"ej: Molestar a la gata\"\n                    },\n                    {\n                        id: \"2\",\n                        type: \"text\",\n                        as: \"textarea\",\n                        name: \"description\",\n                        label: \"Descripcion\",\n                        placeholder: \"ej: Molestar a la gata\"\n                    },\n                    {\n                        id: \"3\",\n                        type: \"text\",\n                        as: \"dropdown\",\n                        name: \"description\",\n                        label: \"Estado\",\n                        selectables: [\n                            {\n                                id: \"1\",\n                                image: \"/icon/bars1.svg\",\n                                label: \"Pendiente\",\n                                value: \"Pendientes\"\n                            },\n                            {\n                                id: \"2\",\n                                image: \"/icon/sun1.svg\",\n                                label: \"En progreso\",\n                                value: \"En progreso\"\n                            },\n                            {\n                                id: \"3\",\n                                image: \"/icon/sun2.svg\",\n                                label: \"Terminada\",\n                                value: \"Terminadas\"\n                            }\n                        ]\n                    }\n                ],\n                actions: [\n                    {\n                        id: \"1\",\n                        as: \"primarybutton\",\n                        label: \"Crear tarea\"\n                    },\n                    {\n                        id: \"2\",\n                        as: \"secondarybutton\",\n                        label: \"Cancelar\"\n                    }\n                ]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\Taskpoint\\\\Frontend\\\\pages\\\\tasks.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\Taskpoint\\\\Frontend\\\\pages\\\\tasks.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(TasksPage, \"8uAxk+XC2Zft7eqYUT0lsldcoIU=\", false, function() {\n    return [\n        _contexts_TaskContext__WEBPACK_IMPORTED_MODULE_4__.useTask\n    ];\n});\n_c = TasksPage;\nvar _c;\n$RefreshReg$(_c, \"TasksPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU87b0JBQVU7aUJBQ25EOzs7Ozs7Ozs7Ozs7QUFJVCxDQUFDO0dBeEd1QlA7O1FBTWxCSCwwREFBT0E7OztLQU5XRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90YXNrcy5qc3g/NjRmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFicy9UYWJzXCI7XHJcbmltcG9ydCB7IFRhc2tzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFza3MvVGFza3NcIjtcclxuaW1wb3J0IHsgcmVxdWlyZWRVc2VyIH0gZnJvbSBcIi4uL2hlbHBlcnMvcmVxdWlyZWRVc2VyXCI7XHJcbmltcG9ydCB7IHVzZVRhc2sgfSBmcm9tIFwiLi4vY29udGV4dHMvVGFza0NvbnRleHRcIjtcclxuaW1wb3J0IHsgRm9ybU1vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybU1vZGFsL0Zvcm1Nb2RhbFwiO1xyXG5pbXBvcnQgeyBUYXNrTGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dHMvVGFza0xheW91dC9UYXNrTGF5b3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrc1BhZ2UoKSB7XHJcbiAgY29uc3QgeyBcclxuICAgIG9wZW5lZEVkaXRUYXNrLFxyXG4gICAgb3BlbmVkQ3JlYXRlVGFzaywgXHJcbiAgICBzZXRPcGVuZWRFZGl0VGFzayxcclxuICAgIHNldE9wZW5lZENyZWF0ZVRhc2tcclxuICB9ID0gdXNlVGFzaygpO1xyXG5cclxuICBjb25zdCB0YXNrU3RhdGVzID0gW1xyXG4gICAge2lkOiBcIjFcIiwgbGFiZWw6IFwiUGVuZGllbnRlc1wiLCB2YWx1ZTogXCJQZW5kaWVudGVzXCJ9LFxyXG4gICAge2lkOiBcIjJcIiwgbGFiZWw6IFwiRW4gcHJvZ3Jlc29cIiwgdmFsdWU6IFwiUGVuZGllbnRlc1wifSxcclxuICAgIHtpZDogXCIzXCIsIGxhYmVsOiBcIlRlcm1pbmFkYXNcIiwgdmFsdWU6IFwiUGVuZGllbnRlc1wifSxcclxuICBdXHJcblxyXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW1xyXG4gICAge2lkOiBcIjFcIiwgdGl0bGU6IFwiTW9sZXN0YXIgYSBsYSBnYXRhXCIsIGRlc2NyaXB0aW9uOiBcImhvbGEgbXVuZG9cIiwgb25FZGl0OiAoKT0+IHNldE9wZW5lZEVkaXRUYXNrKHRydWUpfSxcclxuICAgIHtpZDogXCIyXCIsIHRpdGxlOiBcIk1vbGVzdGFyIGEgbGEgZ2F0YVwiLCBkZXNjcmlwdGlvbjogXCJob2xhIG11bmRvXCIsIG9uRWRpdDogKCk9PiBzZXRPcGVuZWRFZGl0VGFzayh0cnVlKX0sXHJcbiAgICB7aWQ6IFwiM1wiLCB0aXRsZTogXCJNb2xlc3RhciBhIGxhIGdhdGFcIiwgZGVzY3JpcHRpb246IFwiaG9sYSBtdW5kb1wiLCBvbkVkaXQ6ICgpPT4gc2V0T3BlbmVkRWRpdFRhc2sodHJ1ZSl9LFxyXG4gICAge2lkOiBcIjRcIiwgdGl0bGU6IFwiTW9sZXN0YXIgYSBsYSBnYXRhXCIsIGRlc2NyaXB0aW9uOiBcImhvbGEgbXVuZG9cIiwgb25FZGl0OiAoKT0+IHNldE9wZW5lZEVkaXRUYXNrKHRydWUpfSxcclxuICAgIHtpZDogXCI1XCIsIHRpdGxlOiBcIk1vbGVzdGFyIGEgbGEgZ2F0YVwiLCBkZXNjcmlwdGlvbjogXCJob2xhIG11bmRvXCIsIG9uRWRpdDogKCk9PiBzZXRPcGVuZWRFZGl0VGFzayh0cnVlKX0sXHJcbiAgXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0VGFza1N0YXRlID0gKHRhc2tTdGF0ZSk9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlVGFzayA9ICh0YXNrKT0+IHtcclxuICAgIHNldFRhc2tzKCh0YXNrcyk9PiB0YXNrcy5maWx0ZXIoKF90YXNrKT0+ICEoX3Rhc2suaWQgPT09IHRhc2suaWQpKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0YXNrU3RhdGVzVGFicyA9IHRhc2tTdGF0ZXMubWFwKCh0YXNrU3RhdGUpPT4gKHtcclxuICAgIC4uLnRhc2tTdGF0ZSwgXHJcbiAgICBvblNlbGVjdDogaGFuZGxlU2VsZWN0VGFza1N0YXRlXHJcbiAgfSkpXHJcblxyXG4gIGNvbnN0IHRhc2tzSXRlbXMgPSB0YXNrcy5tYXAoKHRhc2spPT4gKHtcclxuICAgIC4uLnRhc2ssIFxyXG4gICAgb25EZWxldGU6IGhhbmRsZURlbGV0ZVRhc2tcclxuICB9KSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUYXNrTGF5b3V0IHRpdGxlPVwiTWlzIHRhcmVhc1wiPlxyXG4gICAgICA8VGFic1xyXG4gICAgICAgIGluaXRpYWw9e3Rhc2tTdGF0ZXNUYWJzWzBdfVxyXG4gICAgICAgIHRhYnM9e3Rhc2tTdGF0ZXNUYWJzfSAgXHJcbiAgICAgIC8+XHJcbiAgICAgIDxUYXNrc1xyXG4gICAgICAgIHdpbmRvd1Jlc3BvbnNpdmU9e3RydWV9XHJcbiAgICAgICAgdGFza3M9e3Rhc2tzSXRlbXN9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxGb3JtTW9kYWxcclxuICAgICAgICBpc1Zpc2libGU9e29wZW5lZENyZWF0ZVRhc2t9XHJcbiAgICAgICAgb25DbG9zZT17KCk9PiBzZXRPcGVuZWRDcmVhdGVUYXNrKGZhbHNlKX1cclxuICAgICAgICBtYWluUGFkZGluZ0JvdHRvbT1cIjMwdmhcIlxyXG4gICAgICAgIHRpdGxlPVwiQ3JlYXIgdGFyZWFcIlxyXG4gICAgICAgIGlucHV0cz17W1xyXG4gICAgICAgICAge2lkOiBcIjFcIiwgdHlwZTogXCJ0ZXh0XCIsIGFzOiBcInRleHRmaWVsZFwiLCBuYW1lOiBcInRpdGxlXCIsIGxhYmVsOiBcIlRpdHVsb1wiLCBwbGFjZWhvbGRlcjogXCJlajogTW9sZXN0YXIgYSBsYSBnYXRhXCJ9LFxyXG4gICAgICAgICAge2lkOiBcIjJcIiwgdHlwZTogXCJ0ZXh0XCIsIGFzOiBcInRleHRhcmVhXCIsIG5hbWU6IFwiZGVzY3JpcHRpb25cIiwgbGFiZWw6IFwiRGVzY3JpcGNpb25cIiwgcGxhY2Vob2xkZXI6IFwiZWo6IE1vbGVzdGFyIGEgbGEgZ2F0YVwiLCB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCIzXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLCBcclxuICAgICAgICAgICAgYXM6IFwiZHJvcGRvd25cIiwgXHJcbiAgICAgICAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIiwgXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkVzdGFkb1wiLCBcclxuICAgICAgICAgICAgc2VsZWN0YWJsZXM6IFtcclxuICAgICAgICAgICAgICB7aWQ6IFwiMVwiLCBpbWFnZTogXCIvaWNvbi9iYXJzMS5zdmdcIiwgbGFiZWw6IFwiUGVuZGllbnRlXCIsIHZhbHVlOiBcIlBlbmRpZW50ZXNcIn0sXHJcbiAgICAgICAgICAgICAge2lkOiBcIjJcIiwgaW1hZ2U6IFwiL2ljb24vc3VuMS5zdmdcIiwgbGFiZWw6IFwiRW4gcHJvZ3Jlc29cIiwgdmFsdWU6IFwiRW4gcHJvZ3Jlc29cIn0sXHJcbiAgICAgICAgICAgICAge2lkOiBcIjNcIiwgaW1hZ2U6IFwiL2ljb24vc3VuMi5zdmdcIiwgbGFiZWw6IFwiVGVybWluYWRhXCIsIHZhbHVlOiBcIlRlcm1pbmFkYXNcIn0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdfVxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIHtpZDogXCIxXCIsIGFzOiBcInByaW1hcnlidXR0b25cIiwgbGFiZWw6IFwiQ3JlYXIgdGFyZWFcIn0sXHJcbiAgICAgICAgICB7aWQ6IFwiMlwiLCBhczogXCJzZWNvbmRhcnlidXR0b25cIiwgbGFiZWw6IFwiQ2FuY2VsYXJcIn0sXHJcbiAgICAgICAgXX1cclxuICAgICAgLz5cclxuICAgICAgPEZvcm1Nb2RhbFxyXG4gICAgICAgIGlzVmlzaWJsZT17b3BlbmVkRWRpdFRhc2t9XHJcbiAgICAgICAgb25DbG9zZT17KCk9PiBzZXRPcGVuZWRFZGl0VGFzayhmYWxzZSl9XHJcbiAgICAgICAgbWFpblBhZGRpbmdCb3R0b209XCIzMHZoXCJcclxuICAgICAgICB0aXRsZT1cIkNyZWFyIHRhcmVhXCJcclxuICAgICAgICBpbnB1dHM9e1tcclxuICAgICAgICAgIHtpZDogXCIxXCIsIHR5cGU6IFwidGV4dFwiLCBhczogXCJ0ZXh0ZmllbGRcIiwgbmFtZTogXCJ0aXRsZVwiLCBsYWJlbDogXCJUaXR1bG9cIiwgcGxhY2Vob2xkZXI6IFwiZWo6IE1vbGVzdGFyIGEgbGEgZ2F0YVwifSxcclxuICAgICAgICAgIHtpZDogXCIyXCIsIHR5cGU6IFwidGV4dFwiLCBhczogXCJ0ZXh0YXJlYVwiLCBuYW1lOiBcImRlc2NyaXB0aW9uXCIsIGxhYmVsOiBcIkRlc2NyaXBjaW9uXCIsIHBsYWNlaG9sZGVyOiBcImVqOiBNb2xlc3RhciBhIGxhIGdhdGFcIiwgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwiM1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIiwgXHJcbiAgICAgICAgICAgIGFzOiBcImRyb3Bkb3duXCIsIFxyXG4gICAgICAgICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsIFxyXG4gICAgICAgICAgICBsYWJlbDogXCJFc3RhZG9cIiwgXHJcbiAgICAgICAgICAgIHNlbGVjdGFibGVzOiBbXHJcbiAgICAgICAgICAgICAge2lkOiBcIjFcIiwgaW1hZ2U6IFwiL2ljb24vYmFyczEuc3ZnXCIsIGxhYmVsOiBcIlBlbmRpZW50ZVwiLCB2YWx1ZTogXCJQZW5kaWVudGVzXCJ9LFxyXG4gICAgICAgICAgICAgIHtpZDogXCIyXCIsIGltYWdlOiBcIi9pY29uL3N1bjEuc3ZnXCIsIGxhYmVsOiBcIkVuIHByb2dyZXNvXCIsIHZhbHVlOiBcIkVuIHByb2dyZXNvXCJ9LFxyXG4gICAgICAgICAgICAgIHtpZDogXCIzXCIsIGltYWdlOiBcIi9pY29uL3N1bjIuc3ZnXCIsIGxhYmVsOiBcIlRlcm1pbmFkYVwiLCB2YWx1ZTogXCJUZXJtaW5hZGFzXCJ9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXX1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICB7aWQ6IFwiMVwiLCBhczogXCJwcmltYXJ5YnV0dG9uXCIsIGxhYmVsOiBcIkNyZWFyIHRhcmVhXCJ9LFxyXG4gICAgICAgICAge2lkOiBcIjJcIiwgYXM6IFwic2Vjb25kYXJ5YnV0dG9uXCIsIGxhYmVsOiBcIkNhbmNlbGFyXCJ9LFxyXG4gICAgICAgIF19XHJcbiAgICAgIC8+XHJcbiAgICA8L1Rhc2tMYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gcmVxdWlyZWRVc2VyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRhYnMiLCJUYXNrcyIsInVzZVRhc2siLCJGb3JtTW9kYWwiLCJUYXNrTGF5b3V0IiwiVGFza3NQYWdlIiwib3BlbmVkRWRpdFRhc2siLCJvcGVuZWRDcmVhdGVUYXNrIiwic2V0T3BlbmVkRWRpdFRhc2siLCJzZXRPcGVuZWRDcmVhdGVUYXNrIiwidGFza1N0YXRlcyIsImlkIiwibGFiZWwiLCJ2YWx1ZSIsInRhc2tzIiwic2V0VGFza3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib25FZGl0IiwiaGFuZGxlU2VsZWN0VGFza1N0YXRlIiwidGFza1N0YXRlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURlbGV0ZVRhc2siLCJ0YXNrIiwiZmlsdGVyIiwiX3Rhc2siLCJ0YXNrU3RhdGVzVGFicyIsIm1hcCIsIm9uU2VsZWN0IiwidGFza3NJdGVtcyIsIm9uRGVsZXRlIiwiaW5pdGlhbCIsInRhYnMiLCJ3aW5kb3dSZXNwb25zaXZlIiwiaXNWaXNpYmxlIiwib25DbG9zZSIsIm1haW5QYWRkaW5nQm90dG9tIiwiaW5wdXRzIiwidHlwZSIsImFzIiwibmFtZSIsInBsYWNlaG9sZGVyIiwic2VsZWN0YWJsZXMiLCJpbWFnZSIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tasks.jsx\n"));

/***/ })

});