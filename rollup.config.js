import resolve from 'rollup-plugin-node-resolve';

export default {
    input: './dist/index.js',
    output: {
        file: './dist/app.js',
        format: 'umd',
        name: 'App'
    },
    plugins: [
        resolve()
    ]
};