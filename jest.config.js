module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    
    testMatch: [
        '<rootDir>/**/tests/**/*.test.ts',
        '<rootDir>/**/tests/**/*.spec.ts'
    ],

    testPathIgnorePatterns: ['/node_modules/', '/old/', '/dist/'],

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1'
    },

    collectCoverageFrom: [
        '<rootDir>/**/*.ts',
        '!<rootDir>/**/*.d.ts',
        '!<rootDir>/**/tests/**',
        '!<rootDir>/old/**'
    ]
};
