// src/components/test.tsx
import { useState } from "react";
import { jsxs } from "react/jsx-runtime";
var Test = () => {
  const [counter, setCounter] = useState(0);
  return /* @__PURE__ */ jsxs("div", { style: { backgroundColor: "red", cursor: "pointer" }, onClick: () => setCounter((prev) => prev + 1), children: [
    "este \xE9 um componente test ",
    counter
  ] });
};
var test_default = Test;
export {
  test_default as Test
};
