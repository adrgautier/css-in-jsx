import React from 'react';

import fragmentsToBrackets from './utils/fragmentsToBrackets';
import createUniqueId from './utils/createUniqueId';
import computeStyle from './utils/computeStyle';
import tagsList from './constants/tags';

let cachedStyles = {};

export const createStylableComponent = (typeOrComponent) => {
    return React.memo(({ children, className, ...props }) => {
    let rawStyle = '';
    let uniqueId = '';

    const finalChildren = React.Children.map(children, (element) => {
        if(!element) {
            return false;
        }

        // pass classname to style element
        if(element.type === "style") {
            rawStyle = fragmentsToBrackets(element);
            return false;
        }

        // passthrough
        return element;
    });

    uniqueId = createUniqueId(rawStyle);
    if(!cachedStyles[uniqueId]) {
        cachedStyles[uniqueId] = true;

        const processedStyle = computeStyle(rawStyle, uniqueId);

        
        // Create style
        if(typeof window !== "undefined") {
            let style = window.document.createElement('style');
            style.innerHTML = processedStyle;

            window.document.head.appendChild(style);
        }
    }

    const finalClassName = className ? `${className} ${uniqueId}`: uniqueId;

    return React.createElement(
        typeOrComponent,
        {  
            ...props,
            className: finalClassName,
        },
        finalChildren
    );
})
};

const Stylable = createStylableComponent;

tagsList.forEach(type => {
    const stylableComponent = createStylableComponent(type);
    Object.defineProperty(Stylable, type, {
        value: stylableComponent,
        writable: false
    })
})

export default Stylable;

