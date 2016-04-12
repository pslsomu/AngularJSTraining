module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    /*
    Add any files that are relevant to executing your tests
    */
    files: [
        '../../../common/js/angular/angular.js',
        '../../../common/js/angular-mocks/angular-mocks.js',
        
        'controllers.js',
        'controller-tests.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['mocha'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  });
};
