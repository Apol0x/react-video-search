/* eslint-disable */
/* webpack se encarga de compilar codigo */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const htmlPlugin = new HtmlWebpackPlugin({ //asi se compia nuestro html al "dist"
    template: './src/index.html', //donde esta html origen
    filename: './index.html' //nombre archivo
})

/* modulos a exportar con sus configuraciones */
module.exports = {
    module: {
        rules: [    //reglas que van a usar los modulo
            {
                test: /\.js$/, //afectará a todos los archivos js
                exclude: /node_mudels/, //no se analizara
                use: ['babel-loader', 'eslint-loader'] //usaran transpilador de babel y estilizador de codigo eslint
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

        ]
    },
    plugins: [htmlPlugin, new Dotenv()]
}