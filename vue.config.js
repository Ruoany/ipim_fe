module.exports = {
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    "primary-color": "#ED1C24",
                    "link-color": "#ED1C24"
                },
                javascriptEnabled: true
            }
        }
    },
    lintOnSave: false,
    pages: {
        index: {
            entry: "src/main.js",
            template: "public/index.html",
            filename: "index.html",
            title: "澳门贸促局",
            chunks: ["chunk-vendors", "chunk-common", "index"]
        }
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    "primary-color": "#EE1C24",
                    "link-color": "#EE1C24",
                    "border-radius-base": "2px"
                },
                javascriptEnabled: true
            }
        }
    },
    devServer: {
        port: 8888, //端口号
        host: "0.0.0.0",
        https: false,
        disableHostCheck: true,
        open: true,
        proxy: {
            "/api": {
                target: "http://api-exhibition.servier.iteratech.net",
                // target: "http://192.168.101.53:9196", //联调地址
                pathRewrite: {
                    "^/api": ""
                },
                changeOrigin: true
            }
        }
    }
};
