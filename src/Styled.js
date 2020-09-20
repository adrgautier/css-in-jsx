import React from "react";

import fragmentsToBrackets from "./utils/fragmentsToBrackets";
import createUniqueId from "./utils/createUniqueId";
import computeStyle from "./utils/computeStyle";
import cachedStyles from "./utils/cachedStyles";
import tagsList from "./constants/tags";

export const createStyledComponent = (typeOrComponent) => {
  return (styleRenderer) => React.memo(({ children, className, ...props }) => {
    let rawStyle = "";

    if(styleRenderer) {
      let styleFragment = styleRenderer;

      if(!React.isValidElement(styleRenderer)){
        styleFragment = styleRenderer(props)
      }

      rawStyle = fragmentsToBrackets(styleFragment);
    }
    
    const uniqueId = createUniqueId(rawStyle);

    if (!cachedStyles[uniqueId]) {
      cachedStyles[uniqueId] = true;

      const processedStyle = computeStyle(rawStyle, uniqueId);

      // Create style
      if (typeof window !== "undefined") {
        let style = window.document.createElement("style");
        style.innerHTML = processedStyle;

        window.document.head.appendChild(style);
      }
    }

    const finalClassName = className ? `${className} ${uniqueId}` : uniqueId;

    return React.createElement(
      typeOrComponent,
      {
        ...props,
        className: finalClassName,
      },
      children
    );
  });
};

const Styled = createStyledComponent;

tagsList.forEach((type) => {
  const styledComponent = createStyledComponent(type);
  Object.defineProperty(Styled, type, {
    value: styledComponent,
    writable: false,
  });
});

export default Styled;
