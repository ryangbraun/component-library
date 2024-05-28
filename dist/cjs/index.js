'use strict';

var jsxRuntime = require('react/jsx-runtime');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const Button = (_a) => {
    var { children, style, variant } = _a, rest = __rest(_a, ["children", "style", "variant"]);
    let buttonStyle = {};
    switch (variant) {
        case 'primary':
            buttonStyle = {
                backgroundColor: 'blue',
                color: 'white',
            };
            break;
        case 'secondary':
            buttonStyle = {
                backgroundColor: 'lightgray',
                color: 'black',
            };
            break;
        case 'ghost':
            buttonStyle = {
                backgroundColor: 'transparent',
                color: 'blue',
                border: '1px solid blue',
            };
            break;
        case 'icon':
            buttonStyle = {
                backgroundColor: 'transparent',
                color: 'blue',
                border: 'none',
            };
            break;
        case 'disabled':
            buttonStyle = {
                backgroundColor: 'gray',
                color: 'white',
                opacity: 0.5,
                cursor: 'not-allowed',
            };
            break;
        case 'toggle':
            buttonStyle = {
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
            };
            break;
        case 'fab':
            buttonStyle = {
                backgroundColor: 'blue',
                color: 'white',
                borderRadius: '50%',
                width: '56px',
                height: '56px',
                position: 'fixed',
                bottom: '16px',
                right: '16px',
            };
            break;
        default:
            buttonStyle = {};
            break;
    }
    return (jsxRuntime.jsx("button", Object.assign({ style: Object.assign(Object.assign({}, buttonStyle), style) }, rest, { children: children })));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
