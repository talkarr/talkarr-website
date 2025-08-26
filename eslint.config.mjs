/* eslint-disable no-underscore-dangle */
import { configs as airbnbConfigs } from 'eslint-config-airbnb-extended';
import eslintImport from 'eslint-plugin-import';
import muiPathImports from 'eslint-plugin-mui-path-imports';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { fileURLToPath } from 'node:url';
import { dirname } from 'path';

import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const flatCompat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...flatCompat.extends('next/core-web-vitals', 'next/typescript'),
    {
        name: 'Stylistic',
        plugins: {
            '@stylistic': stylistic,
        },
    },
    ...airbnbConfigs.react.recommended,
    {
        name: 'Custom rules and prettier',
        plugins: {
            'no-relative-import-paths': noRelativeImportPaths,
            'simple-import-sort': simpleImportSort,
            'mui-path-imports': muiPathImports,
            prettier,
            import: eslintImport,
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/function-component-definition': 'off',
            'react/jsx-indent': 'off',
            'react/jsx-indent-props': 'off',
            'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
            'react/require-default-props': 'off',

            'linebreak-style': ['error', 'unix'],
            'no-nested-ternary': 'off',
            'no-confusing-arrow': 'off',
            'mui-path-imports/mui-path-imports': 'error',
            'import/prefer-default-export': 'off',

            // prettier
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    trailingComma: 'all',
                    printWidth: 80,
                    tabWidth: 4,
                    useTabs: false,
                    semi: true,
                    jsxSingleQuote: false,
                    bracketSpacing: true,
                    arrowParens: 'avoid',
                    importOrderSeparation: true,
                },
            ],

            'function-paren-newline': 'off',
            'implicit-arrow-linebreak': 'off',
            'object-curly-newline': 'off',
            'operator-linebreak': 'off',

            // import
            'import/no-named-as-default-member': 'off',
            'import/no-named-as-default': 'off',
            'import/first': 'error',
            'import/consistent-type-specifier-style': [
                'error',
                'prefer-top-level',
            ],
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
            'import/extensions': [
                'error',
                'never',
                {
                    json: 'always',
                    svg: 'always',
                    jpg: 'always',
                    png: 'always',
                    css: 'always',
                },
            ],

            'no-relative-import-paths/no-relative-import-paths': [
                'warn',
                {
                    allowSameFolder: true,
                    rootDir: 'src',
                },
            ],

            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        ['\\u0000$'],
                        ['^react'],
                        ['^\\w'],
                        ['^@/types'],
                        ['^@/hooks'],
                        ['^@/utils'],
                        ['^@/'],
                        ['^.+\\.module\\.css$'],
                        ['^[./]'],
                    ],
                },
            ],
            'import/order': 'off',

            'simple-import-sort/exports': 'error',
            indent: 'off',
            '@typescript-eslint/indent': 'off',
            'no-console': 'off',
            'no-restricted-syntax': [
                'error',
                'ForInStatement',
                'LabeledStatement',
                'WithStatement',
            ],
            'max-len': 'off',
            'no-useless-return': 'off',

            'import/no-extraneous-dependencies': [
                'error',
                {
                    devDependencies: true,
                },
            ],

            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                    fixStyle: 'separate-type-imports',
                    disallowTypeAnnotations: true,
                },
            ],

            '@typescript-eslint/lines-between-class-members': 'off',

            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true,
                    allowHigherOrderFunctions: true,
                },
            ],

            'no-continue': 'off',
            'arrow-parens': ['error', 'as-needed'],

            'react/jsx-no-leaked-render': [
                'warn',
                {
                    validStrategies: ['ternary'],
                },
            ],

            'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
            'react/jsx-closing-tag-location': ['warn', 'tag-aligned'],

            'react/jsx-curly-brace-presence': [
                'warn',
                {
                    props: 'never',
                    children: 'never',
                },
            ],

            'react/jsx-curly-newline': [
                'off',
                {
                    multiline: 'consistent',
                    singleline: 'consistent',
                },
            ],

            'react/jsx-first-prop-new-line': ['error', 'multiline'],
            'react/jsx-key': ['error'],
            'react/jsx-props-no-multi-spaces': ['warn'],

            'react/jsx-tag-spacing': [
                'warn',
                {
                    closingSlash: 'never',
                    beforeSelfClosing: 'always',
                    afterOpening: 'never',
                    beforeClosing: 'allow',
                },
            ],

            'react/jsx-wrap-multilines': [
                'warn',
                {
                    declaration: 'parens',
                    assignment: 'parens',
                    return: 'parens',
                    arrow: 'parens',
                    condition: 'ignore',
                    logical: 'ignore',
                    prop: 'ignore',
                },
            ],

            // unicorn
            'unicorn/no-null': 'off',
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/prefer-global-this': 'off',
            'unicorn/no-typeof-undefined': 'off',
            'unicorn/prefer-add-event-listener': 'off',
            'unicorn/no-process-exit': 'off',
            'unicorn/prefer-module': 'off',
            'unicorn/prefer-top-level-await': 'off',
        },
    },
];

export default eslintConfig;
