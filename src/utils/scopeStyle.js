const scopeStyle = (rawStyle, uniqueId) => `
    .${uniqueId}{
        ${rawStyle}
    }
`;

export default scopeStyle;