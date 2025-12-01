// @ts-check
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  { ignores: ['dist', 'node_modules'] },
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  eslintConfigPrettier,
  {
    rules: {
      'no-console': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]);
