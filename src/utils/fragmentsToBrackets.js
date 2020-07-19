import React from 'react';
import childrenToString from './childrenToString';

const fragmentsToBrackets = (element) => {
    if(React.isValidElement(element)) {
        return `{${childrenToString(React.Children.map(element.props.children, fragmentsToBrackets))}}`;
    }
    return element;
};

export default fragmentsToBrackets;