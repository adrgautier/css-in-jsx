const cleanStyle = (style) => {
    let cleanedStyle = style;

    /* Clean blocks */
    const rexexp1 = /{\s*({)/gm;
    const rexexp2 = /}\s*({)/gm;
    const rexexp3 = /;\s*({)/gm;

    cleanedStyle = cleanedStyle.replace(rexexp1, "{&{");
    cleanedStyle = cleanedStyle.replace(rexexp2, "}&{");
    cleanedStyle = cleanedStyle.replace(rexexp3, ";&{");

    return cleanedStyle;
}

export default cleanStyle;