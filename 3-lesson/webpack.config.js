let path = require('path');

let conf = {
    // откуда вести
    entry: './es6/scripts.js',
    //куда вести
    output: {
        // путь до директории
        path: path.resolve(__dirname, './js'),
        // наименование конечного файла
        filename: 'main.js',
        // для настройки webpack-dev-server, относительная ссылка на директорию
        publicPath: 'js/'
    },
    devServer: {
        // в режиме разработки при возникновении фатальной ошибки будет выводиться окно
        overlay: true
    },
    // правила загрузки файлов в webpack
    module: {
        // в rules вписываем объекты, в которых указываем как поступаем с каждым расширением
        rules: [
            {
                // test - некоторое регулярное выражение, которое отвечает попали ли мы в расширение или нет
                test: /\.js$/,
                // прописываем лоадер
                loader: 'babel-loader',
                // вносим исключения
                // exclude: '/node_modules/'
            }
        ]
    }
};

module.exports = (env, options) => {
    // карта кода только в режиме разработки
    conf.devtool = options.mode === "production" ?
        false :
        "cheap-module-eval-source-map";

    return conf;
};