import React from 'react';
import memoize from 'fast-memoize';

const childrenToString = (elements) => elements ? React.Children.toArray(elements).join('') : '';

export default memoize(childrenToString);