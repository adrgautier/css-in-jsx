import compileStyle from './compileStyle';

describe('compileStyle', () => {
    it('should match snapshot', () => {
        // GIVEN
        const scopedStyleMock = `
        .scope {
            .card {
                display: block;
                & .title {
                    color: white;
                }
                {
                    background-color: red;
                }
            }
        }
        `;

        // WHEN
        const compiledStyle = compileStyle(scopedStyleMock);

        // THEN
        expect(compiledStyle).toMatchSnapshot();

    });
})