exports.config = {
    specs: ['./test/specs/**/*.e2e.ts'],
    exclude: [],
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true,
        },
        {
            maxInstances: 5,
            browserName: 'edge',
            acceptInsecureCerts: true,
        },
        // {
        //     maxInstances: 5,
        //     browserName: 'firefox',
        //     acceptInsecureCerts: true,
        // },
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
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
