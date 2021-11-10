exports.config = {
    directConnect : true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities:{
        "browserName" : "chrome",
    },

    //specs: ['features/frame.feature'],
    //specs:['features/seleniumFrame.feature'],
    //specs:['features/internetFrame.feature'],
    specs:['features/color.feature'],
    cucumberOpts: {
        format:'json:sample_report.json',
        require: [
            //'stepDefinitions/frame.stepDef.js',
           // 'stepDefinitions/seleniumFrame.stepDef.js',
            //'stepDefinitions/internetFrame.stepDef.js',
            'stepDefinitions/color.StepDef.js',
            'timeOut.js'
        ]
    }
}
