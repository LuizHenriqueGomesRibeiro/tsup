"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Test: () => test_default
});
module.exports = __toCommonJS(index_exports);

// src/components/test.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Test = () => {
  const [counter, setCounter] = (0, import_react.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { backgroundColor: "red", cursor: "pointer" }, onClick: () => setCounter((prev) => prev + 1), children: [
    "este \xE9 um componente test ",
    counter
  ] });
};
var test_default = Test;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Test
});
