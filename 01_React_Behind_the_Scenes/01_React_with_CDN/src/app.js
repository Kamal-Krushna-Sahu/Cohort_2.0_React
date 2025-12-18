import square from "./components/square.js";
import circle from "./components/circle.js";

function app() {
  return React.createElement("div", { className: "container" }, [square(), circle()]);
}

export default app;
