module.exports = function (config) {
    config.set({
        files: [
            //'node_modules/mocha/mocha.js',
            //'node_modules/chai/chai.js',
            //'src/**/*.js',
            './node_modules/jquery/dist/jquery.js',
            'test/**/*.js'
        ],
        frameworks: ['mocha', 'chai'],     // Ordering are important
        preprocessors: {
            // only specify one entry point and require all tests in there
            'test/**/*.js': ['webpack']
          },
        plugins: [
            "karma-webpack",
            "karma-mocha",
            "karma-chai",
            "karma-chrome-launcher",
            "istanbul-instrumenter-loader",
            "karma-coverage",
            "karma-spec-reporter"
        ],
        reporters: ['progress'],
        port: 9876,  // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless', 
            //'Firefox', 
            //'FirefoxDeveloper', 
            //'FirefoxNightly', 
            //'IE'
        ],
        autoWatch: false,
        singleRun: false, // Karma captures browsers, runs the tests and exits
        concurrency: Infinity,
        browserNoActivityTimeout: 100000,
        customLaunchers: {
            // MyHeadlessChrome: {
            //     base: 'ChromeHeadless',
            //     flags: ['--disable-translate', '--disable-extensions', '--remote-debugging-port=9223']
            // },

            //By default, the karma-firefox doesn't register the headless version of the browser, so add it manually in the customLaunchers section.
            // FirefoxHeadless: {
            //     base: 'Firefox',
            //     flags: ['-headless'],
            // },
        },
    })
}