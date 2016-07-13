module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module'
    },
    'env': {
        'browser': true,
        'node': true
    },
    extends: 'standard',
    'rules': {
        'arrow-parens': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'space-before-function-paren': 0,
        'semi': 0,
        'no-new': 0,
        'camelcase': 0,
        'indent': ['error', 4]
    },
    "globals": {
        'define': true,
        "rrem": true
    }
}
