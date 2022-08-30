exports.config = {
    specs: ['./test/specs/**/*.ts'],
    exclude: [],
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
        },
        // {
        //     maxInstances: 1,
        //     browserName: 'edge',
        //     acceptInsecureCerts: true,
        // },
        // {
        //     maxInstances: 1,
        //     browserName: 'firefox',
        //     acceptInsecureCerts: true,
        // },
        // {
        //     maxInstances: 5,
        //     browserName: 'opera',
        //     acceptInsecureCerts: true,
        // },
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['geckodriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 100000,
    },
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json',
        },
        tsConfigPathsOpts: {
            baseUrl: './',
        },
    },
};
