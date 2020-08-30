import { compile, serialize, middleware, stringify } from "stylis";

const compileStyle = (style) =>
  serialize(compile(style), middleware([stringify]));

export default compileStyle;
