// import * as React from 'react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(React.createElement("div", { className: "container" },
    React.createElement("header", null,
        React.createElement("h1", null, "Ayo's Course Tracker")),
    React.createElement("main", null,
        React.createElement("p", null, "Welcome"))));
