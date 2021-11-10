exports.config = {
    directConnect : true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities:{
        "browserName" : "chrome",
    },

    specs: ['features/login.feature'],

    cucumberOpts: {
        format:'json:sample_report.json',
        require: [
            'stepDefinitions/login.stepDef.js',
            'timeOut.js'
        ]
    }
}
