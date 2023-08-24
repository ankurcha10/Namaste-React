const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "I am h1 tag")));
const heading = [
    React.createElement("h1", {
        id: "heading"
    }, "Hello World From React!"),
    React.createElement("h2", {
        id: "heading"
    }, "Hello World From React!")
];
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map
