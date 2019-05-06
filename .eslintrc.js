module.exports = {
    'env': {
        'node': true,
        'commonjs': true,
        'es6': true,
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'camelcase': 2,
        'id-length': 2,
        'keyword-spacing': 1,
        'space-infix-ops': 2,
        'comma-spacing': 2,
        'space-before-blocks': 2,
        'spaced-comment': 2,
        'key-spacing': 2, 
        'no-multi-spaces': 2,
        'space-in-parens': 2,
        'space-before-function-paren': 2,
        'func-call-spacing': 2,
        'no-multiple-empty-lines': 2,
        // 'padded-blocks': 1,
        'no-floating-decimal': 2,
        'object-property-newline': 2,
        'brace-style': 2,
        'eqeqeq': 2,
        'no-array-constructor': 2,
    }
};