var webpack = require("webpack");

module.exports = {
    entry: "./src/entry-point/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
            { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: "file-loader?name=images/[name].[ext]" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // @TODO Remove this when adding script to sails home.esj
    //externals: {
    //    "react": "React",
    //    "react-dom": "ReactDOM"
    //},
    devServer: {
        inline: true
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ]
};