const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/public-api.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'chatbot.bundle.js',
        libraryTarget: 'umd',
        library: 'chatbot',
        umdNamedDefine: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({})]
    
};

// const path = require('path');

// module.exports = {
//     mode: 'production',
//     entry: './src/lib/chatbot.component.ts',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     resolve: {
//         extensions: ['.ts', '.js'],
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.ts$/,
//                 loader: 'ts-loader',
//                 exclude: /node_modules/,
//             },
//         ],
//     },
// };
