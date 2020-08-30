import memoize from "fast-memoize";
import scopeStyle from "./scopeStyle";
import compileStyle from "./compileStyle";

const computeStyle = (rawStyle, uniqueId) => {
  const scopedStyle = scopeStyle(rawStyle, uniqueId);
  const processedStyle = compileStyle(scopedStyle);

  return processedStyle;
};

export default memoize(computeStyle);
