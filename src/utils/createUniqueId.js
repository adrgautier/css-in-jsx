import sha1 from 'sha1';
import memoize from "fast-memoize";

const createUniqueId = (rawStyle) => `style_${sha1(rawStyle)}`;


export default memoize(createUniqueId);