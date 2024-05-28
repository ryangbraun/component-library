import React, { ButtonHTMLAttributes, CSSProperties } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    style?: CSSProperties;
    variant?: 'primary' | 'secondary' | 'ghost' | 'icon' | 'disabled' | 'toggle' | 'fab';
};

const Button: React.FC<ButtonProps> = ({ children, style, variant, ...rest }) => {
    let buttonStyle: CSSProperties = {};

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

    return (
        <button style={{ ...buttonStyle, ...style }} {...rest}>
            {children}
        </button>
    );
};

export default Button