import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "hello from h1, from the top"), 
        React.createElement("h2", {}, "hello from h2")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "hello from h1, from the bottom"),
        React.createElement("h2", {}, "hello from h2")
    ])
]);

console.log(parent);
// const heading = React.createElement("h1", {}, "Hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// root.render(heading);