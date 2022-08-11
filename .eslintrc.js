module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'prettier/prettier': 2,
        'simple-import-sort/imports': 2,
        'simple-import-sort/exports': 2,
    },
    env: {
        node: true,
    },
};
