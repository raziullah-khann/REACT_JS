import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement() => object => after render it becomes Html element in browser
const header = React.createElement("h1", {}, "This is my Heading! ");
console.log(header);

//Create element with the help of JSX. = > it is not html, it is html like syntax.
//JSX => React.createElement() => object => HTMLElement(render)
const jsxHeading = <h1>This my JSX</h1>;
console.log(jsxHeading);

//Components come in two types, Class components and Function components,
//React Functional Components
const Title = () => {
  return (
      <h1 className="title">This is Title Component</h1>
  );
};

const HeadingComponent = () => {
  return (
    <div id="container">
      {Title() }
      <Title />
      <h1 className="heading">This is heading Functional Components</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent />);
