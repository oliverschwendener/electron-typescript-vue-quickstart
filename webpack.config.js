const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const isProductionBuild = process.env.NODE_ENV === "production";

const mode = isProductionBuild ? "production" : "development";
const devtool = isProductionBuild ? undefined : "source-map";

console.log(`Build mode: ${mode}`);

const mainConfig = {
    entry: path.join(__dirname, "src", "main", "main.ts"),
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "bundle")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    mode,
    target: "electron-main",
    node: false,
    devtool,
}

const rendererConfig = {
    entry: path.join(__dirname, "src", "renderer", "renderer.ts"),
    output: {
        filename: "renderer.js",
        path: path.join(__dirname, "bundle")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [
                        /\.vue$/
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.png$/,
                use: [
                    "file-loader"
                ]
            }
        ],
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        },
        extensions: [".ts", ".js"]
    },
    plugins: [new VueLoaderPlugin()],
    mode,
    target: "electron-renderer",
    node: false,
    devtool,
};

module.exports = [
    mainConfig,
    rendererConfig,
];
