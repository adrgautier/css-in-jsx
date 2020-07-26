const babel = require('@rollup/plugin-babel').default;

module.exports = {
    input: './src/index.js',
    plugins: [
        babel({ babelHelpers: 'bundled' }),
    ],
    output: [
        { file: 'dist/index.esm.js', format: 'esm' },
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            exports: 'default'
        }
    ],
    external: [ 'react', 'fast-memoize', 'sha1', 'stylis' ]
};