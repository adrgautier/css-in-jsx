import scopeStyle from './scopeStyle';

describe('scopeStyle', () => {
    it('should match snapshot', () => {
        // GIVEN
        const uniqueId = 'abc123';
        const style = `
            color: black;
            .active {
                color: red;
            }
        `;

        // WHEN
        const scopedStyle = scopeStyle(style, uniqueId);

        // THEN
        expect(scopedStyle).toMatchSnapshot();
    });
});