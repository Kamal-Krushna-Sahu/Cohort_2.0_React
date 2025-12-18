// import React from "react";

const App = () => {
  return <div>App</div>;
  /*
    same as "return React.createElement('div', null, 'App')"

    possible because of JSX (JavaScript XML),
    we can write HTML-like code inside JavaScript.
    Looks like HTML, but is not HTML.
    Syntactic Sugar: Browsers cannot read JSX directly. It must be "transpiled" (converted) into regular JavaScript function calls—typically using tools like Babel—which then create objects called React elements.

    JSX :-         <div>App</div> // converted into JavaScript under the hood.
    JavaScript :-  React.createElement('div', null, 'App'); // compiled JavaScript
   */
};

export default App;
