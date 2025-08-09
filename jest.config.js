const config = {
    testEnvironment: "node",
    testMatch: ["**/tests/**/*.js"],
    transform: {
        "^.+\\.js$": "babel-jest"
    },
    verbose: true
};

module.exports = config;