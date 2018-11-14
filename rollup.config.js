export default {
    input: './dist/esm3/public_api.js',
    output: [
        {
            file: './dist/fesm3/blank.js',
            format: 'esm',
            sourcemap: true
        },
        {
            file: './dist/bundles/blank.umd.js',
            format: 'umd',
            sourcemap: true,
            name: 'Blank'
        }
    ]
};
