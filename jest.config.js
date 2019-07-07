module.exports = {
    moduleFileExtensions: ['js', 'vue', 'jsx', 'json'],

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },

    // snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
            'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest',
    },

    transformIgnorePatterns: ['/node_modules/'],

    snapshotSerializers: ['jest-serializer-vue'],

    testMatch: [
        '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
    ],

    testURL: 'http://localhost/',

    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
}
