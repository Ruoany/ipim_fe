module.exports = {
    lintOnSave: false,
    devServer: {
        port: 8888, //端口号
        host: "0.0.0.0",
        https: false,
        disableHostCheck: true,
        proxy: {
            "/api": {
                target: "http://api-exhibition.servier.iteratech.net",
                // target: "http://192.168.3.38:8111", //联调地址
                pathRewrite: {
                    "^/api": ""
                },
                changeOrigin: true
            }
        }
    }
};
