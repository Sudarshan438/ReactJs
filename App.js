const heading = React.createElement("h1", { id: "header" }, "Hello world from React");
// ReactElement(Object) ==> HTML (Browser understands)
// For nested structures / siblings we can use array as third argument to createElement
console.log(heading); // Object --> becomes html while

// JSX

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // render takes this Object(heading) and converts it into a equivalent html content that the browser understands.
