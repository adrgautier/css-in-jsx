import memoize from "fast-memoize";
import scopeStyle from "./scopeStyle";
import cleanStyle from "./cleanStyle";
import compileStyle from "./compileStyle";

const computeStyle = (rawStyle, uniqueId) => {
    const scopedStyle = scopeStyle(rawStyle, uniqueId);
    const cleanedStyle = cleanStyle(scopedStyle);
    const processedStyle = compileStyle(cleanedStyle);

    return processedStyle;
}

export default memoize(computeStyle);
