'use strict';

var jsxRuntime = require('react/jsx-runtime');

const Button = ({ onClick, label }) => {
    return (jsxRuntime.jsx("button", Object.assign({ onClick: onClick }, { children: label })));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
