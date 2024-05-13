import { jsx } from 'react/jsx-runtime';

const Button = ({ onClick, label }) => {
    return (jsx("button", Object.assign({ onClick: onClick }, { children: label })));
};

export { Button };
//# sourceMappingURL=index.js.map
