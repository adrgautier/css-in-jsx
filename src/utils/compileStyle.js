import {compile, serialize, stringify} from 'stylis';

const compileStyle = (cleanedStyle) => serialize(compile(cleanedStyle), stringify);

export default compileStyle;