import app from "./app.js";

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app());





/* My Research */
// --------------
// 1. only render once
// root.render("Hello"); // doesn't work
// root.render("Hii"); // works

// 2. render accepts only one element (',' comma separated elements doesn't work)
// root.render("Hello", "Hii"); // Warning: You passed a second argument to root.render(...) but it only accepts one argument.

// 3. to render multiple elements, pass them as a single "array-of-elements"
// root.render(["Hello", "Hii"]); // works
