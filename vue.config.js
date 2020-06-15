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
                target: "http://localhost:9196/",
                pathRewrite: {
                    "^/api": "",
                },
                changeOrigin: true,
            },
        },
    },
};
