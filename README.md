# What is Mongoose?

## A Powerful Object Data Modeling(ODM) Library for MongoDB

Works a as Interface between Backend and Database using mongoDB drive

## Mongoose Methods

- Model.create()
- Model.find()
- Model.findById()
- Model.findByIdAndUpdate()
- Model.findOne()
- Model.findOneAndDelete()
- Model.replaceOne()
- Model.updateMany()
- Model.updateOne()

## Why should we use mongoose:

- Schema Definitaon
- Model Creation
- Data Validation
- Querying
- Middleware Support
- Population

## Initialization

```bash
pnpm init
pnpm add express
pnpm add mongoose
pnpm add typescript -D
pnpm add cors
pnpm add dotenv
tsc --init
pnpm add @types/node -D
pnpm add @types/express -D
pnpm add @types/cors -D
pnpm exec tsc --version # find version - equivalent to npx
```

Find Process directory

```bash
process.cwd()
```

```json
{
  "name": "project-1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "tsc",
    "start": "node ./dist/server.js",
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "lint": "eslint src --ignore-path .eslintignore --ext .js,.ts",
    "lint:fix": "pnpm exec eslint src --fix",
    "format:fix": "pnpm exec prettier --write src",
    "format": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "mongoose": "^8.4.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.3.0",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/node": "^20.12.12",
    "@typescript-eslint/eslint-plugin": "^7.9.0",
    "@typescript-eslint/parser": "^7.9.0",
    "eslint": "^9.3.0",
    "eslint-config-prettier": "^9.1.0",
    "globals": "^15.2.0",
    "prettier": "^3.2.5",
    "typescript": "^5.4.5",
    "typescript-eslint": "^7.9.0"
  }
}
```

[Linting in TypeScript using ESLint and Prettier - LogRocket Blog](https://blog.logrocket.com/linting-typescript-eslint-prettier/)

[Set up Node.js project with Typescript, ESLint, and Prettier](https://medium.com/@tericcabrel/set-up-node-js-project-with-typescript-eslint-and-prettier-b4f7bd0f1b1f)

## Eslint

- Code Format
- Find Errors
- Code Quality check

```bash
pnpm add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
pnpm exec eslint --init
pnpm exec eslint src
```

```jsx
// eslint config .mjs
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      // globals: globals.node,
      globals: {
        process: 'readonly',
      },
      // ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
    },
  },
  {
    ignores: ['node_modules', 'dist'],
  },
];
```

## Prettier

Code Format

```bash
pnpm add prettier -D
pnpm exec prettier --write src/app.ts
```

```json
// .prettierrc.json
{
  "semi": false, // Specify if you want to print semicolons at the end of statements
  "singleQuote": true, // If you want to use single quotes
  "arrowParens": "avoid" // Include parenthesis around a sole arrow function parameter
}
```

## Avoid conflict with eslint and prettier

```json
pnpm add eslint-config-prettier -D
```

## Run from ts

```bash
pnpm add ts-node-dev -D
ts-node-dev --respawn --transpile-only server.ts
```
