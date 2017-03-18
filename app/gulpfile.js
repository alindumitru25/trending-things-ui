var gulp = require("gulp");
var webpack = require("webpack");
var configFile = require("./webpack.config.js");
var WebpackDevServer = require("webpack-dev-server");

gulp.task("server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(configFile);

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        console.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});