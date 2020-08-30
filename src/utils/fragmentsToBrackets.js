import React from "react";

const fragmentsToBrackets = (element) => {
  let outputStyle = element;

  if (!React.isValidElement(element)) {
    return outputStyle;
  }

  outputStyle = "";

  React.Children.forEach(element.props.children, (child) => {
    const childOutputStyle = fragmentsToBrackets(child);
    outputStyle += childOutputStyle;
  });

  return `{${outputStyle}}`;
};

export default fragmentsToBrackets;
