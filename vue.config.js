module.exports = {
    lintOnSave: false,
    pages: {
        index: {
            entry: "src/main.js",
            template: "public/index.html",
            filename: "index.html",
            title: "澳門貿易投資促進局活動項目網上申請系統",
            chunks: ["chunk-vendors", "chunk-common", "index"],
        },
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    "primary-color": "#EE1C24",
                    "link-color": "#EE1C24",
                    "border-radius-base": "2px",
                    "disabled-color": "#666",
                },
                javascriptEnabled: true,
            },
        },
    },
    devServer: {
        port: 8888, //端口号
        host: "0.0.0.0",
        https: false,
        disableHostCheck: true,
        open: true,
        proxy: {
            "/api": {
                target2: "http://fe.exhibition.iteratech.net/api/",
                target1: "http://api-exhibition.servier.iteratech.net",
                target3: "http://api.inplexmacau.com",//正式环境
                target: "http://127.0.0.1:9196",//本机开发环境
                pathRewrite: {
                    "^/api": "",
                },
                changeOrigin: true,
            },
        },
    },
};
