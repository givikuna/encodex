module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    
    roots: ['<rootDir>/tests'],
    testMatch: ['**/?(*.)+(spec|test).ts'],

    moduleFileExtensions: ['ts', 'js', 'ls', 'json', 'node'],

    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.ls$': '<rootDir>/jest-transformers/livescript-jest.js',
    },

    testPathIgnorePatterns: ['/node_modules/', '/old/', '/dist/'],

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1'
    }
};
