import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import nextPlugin from '@next/eslint-plugin-next';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

export default [
    {
        ignores: [
            'dist/**',
            'assets/**',
            'styles/**',
            'README.md'
        ]
    },
    eslint.configs.recommended,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: {
                    jsx: true
                },
                sourceType: 'module'
            },
            globals: {
                window: 'readonly',
                setTimeout: 'readonly',
                clearTimeout: 'readonly',
                setInterval: 'readonly',
                clearInterval: 'readonly',
                console: 'readonly',
                document: 'readonly',
                HTMLDivElement: 'readonly',
                HTMLInputElement: 'readonly',
                HTMLButtonElement: 'readonly',
                Event: 'readonly'
            }
        },
        plugins: {
            '@typescript-eslint': tseslint,
            'react': reactPlugin,
            'react-hooks': reactHooksPlugin,
            'import': importPlugin,
            'prettier': prettierPlugin,
            '@next/next': nextPlugin,
            'react-refresh': reactRefreshPlugin
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            'indent': 'off',
            'no-console': 'warn',
            'quotes': 'error',
            'semi': 'error',
            'import/order': [
                'error',
                {
                    'alphabetize': {
                        'order': 'asc',
                        'caseInsensitive': true
                    },
                    'newlines-between': 'always'
                }
            ],
            'react/react-in-jsx-scope': 'off',
            'react-refresh/only-export-components': 'warn',
            'react-hooks/rules-of-hooks': 'error',
            '@typescript-eslint/no-var-requires': 0,
            'prettier/prettier': ['error', { 'endOfLine': 'auto' }, { 'usePrettierrc': true }]
        }
    },
    {
        files: ['app/page.tsx'],
        rules: {
            'no-console': 'off'
        }
    }
]; 