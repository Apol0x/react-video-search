/**
 * Configuracion de eslint
 */
module.exports = {
    env: { //En que enterno vamos a desarrollar
        browser: true, //Analice el codigo para el navegador
        es6: true, //Utilice ECMAScript6
        node: true, //Al usar webpack usaremos node
    },
    parseOptions: { //Al analizar codigo
        ecmFeatures: {
            jsx: true, //Entienda codigo JSX
        },
        ecmaVersion: 2018, //Versio ECMAScript
        sourceType: "module", //Comprender modulos de javascript
    },
    plugins: ["react"], //Analice los codigo de los plugings: e.g react
    extends: ["eslint:recommended", "plugin:react/recommended"], //recomiende codigo segun la libreria
}