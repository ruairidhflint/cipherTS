# cipherTS

[![npm version](https://img.shields.io/npm/v/cipherts)](https://www.npmjs.com/package/cipherts)
![Codecov](https://img.shields.io/codecov/c/github/ruairidhflint/cipherts)
![GitHub last commit](https://img.shields.io/github/last-commit/ruairidhflint/cipherts)

Full documentation in an easier to read format can be found [here](https://ruairidhflint.github.io/cipherTS).

A selection of classic [ciphers](https://en.wikipedia.org/wiki/Cipher) implemented in TypeScript with no additional dependencies.

## Installation

You can install CipherTS using npm or yarn.

## Using npm

```bash
npm install cipherts
```

## Using yarn

```bash
yarn add cipherts
```

## Requirements

- Node.js version 16.0.0 or higher
- TypeScript version 5.0.0 or higher (if using TypeScript)

## Package Structure

CipherTS supports both CommonJS and ES Modules:

- CommonJS: `require('cipherts')`
- ES Modules: `import cipherts from 'cipherts'`

## Verifying the Installation

After installation, you can verify that CipherTS is correctly installed by running:

```bash
npm list cipherts
```

or

```bash
yarn why cipherts
```

This should display the installed version of CipherTS.

## Development

If you're contributing to CipherTS or running it locally, you can use the following npm scripts:

- `npm start`: Start the project using ts-node
- `npm run build`: Build the project using tsup
- `npm run lint`: Run ESLint
- `npm run format`: Format the code using Prettier
- `npm test`: Run tests using Jest

## Contributing

Contributions to CipherTS are welcome! Here's how you can contribute:

- Clone the repository: `git clone https://github.com/ruairidhflint/cipherTS.git`
- Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`
- Make your changes and commit them with a clear commit message
- Push your branch to the repository: `git push origin feature/your-feature-name`
- Create a pull request from your branch to the main branch

Before submitting your pull request, please:

- Ensure your code follows the project's coding standards
- Run `npm run lint` and `npm run format` to check and fix code style
- Add tests for new features or bug fixes
- Run npm test to make sure all tests pass
- Update documentation as necessary
