# cipherTS

[![npm version](https://img.shields.io/npm/v/cipherts)](https://www.npmjs.com/package/cipherts)
![Codecov](https://img.shields.io/codecov/c/github/ruairidhflint/cipherts)
![GitHub last commit](https://img.shields.io/github/last-commit/ruairidhflint/cipherts)

Documentation in an easier to read format can be found [here](https://ruairidhflint.github.io/cipherTS).

A selection of classic [ciphers](https://en.wikipedia.org/wiki/Cipher) implemented in TypeScript with no additional dependencies.

## Table of Contents

- [Installation](#installation)
- [Ciphers](#ciphers)
  - [Affine Cipher](#affine-cipher)
  - [Autokey Cipher](#autokey-cipher)
  - [Atbash Cipher](#atbash-cipher)
  - [Rot13 Cipher](#rot13-cipher)
  - [Substitution Cipher](#substitution-cipher)
  - [Vigenere Cipher](#vigenere-cipher)
  - [Caesar Cipher](#caesar-cipher)

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

## Ciphers

### Affine Cipher

A monoalphabetic substitution cipher that uses modular arithmetic to transform letters.
Read more [here](https://en.wikipedia.org/wiki/Affine_cipher)

**Usage Example**

```javascript
import { affine } from 'cipherts';

// Example usage
const plaintext = 'helloworld';
const a = 5; // Must be coprime with 26
const b = 8;

// Encrypt the plaintext
const encryptedText = affine.encrypt(plaintext, a, b);
console.log('Encrypted:', encryptedText); // rcllaoaplx

// Decrypt the ciphertext
const decryptedText = affine.decrypt(encryptedText, a, b);
console.log('Decrypted:', decryptedText); // helloworld
```

**Notes**

- The `a` parameter must be coprime with 26 (the length of the alphabet). Valid values are: 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25.
- Both `a` and `b` must be positive integers less than 26.

### Autokey Cipher

A polyalphabetic substitution cipher where the key is combined with the plaintext to create a running key.
Read more [here](https://en.wikipedia.org/wiki/Autokey_cipher)

### Atbash Cipher

A simple substitution cipher that replaces each letter with its opposite in the alphabet.
Read more [here](https://en.wikipedia.org/wiki/Atbash)

### Rot13 Cipher

A special case of the Caesar cipher that rotates each letter by 13 positions in the alphabet.
Read more [here](https://en.wikipedia.org/wiki/ROT13)

### Substitution Cipher

A method that replaces each letter of the plaintext with another letter or symbol.
Read more [here](https://en.wikipedia.org/wiki/Substitution_cipher)

### Vigenere Cipher

A polyalphabetic substitution cipher using a keyword to shift letters variably.
Read more [here](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)

### Caesar Cipher

A simple substitution cipher that shifts each letter in the plaintext by a fixed number of positions in the alphabet
Read more [here](https://en.wikipedia.org/wiki/Caesar_cipher)

## Roadmap

The following ciphers are to be added in due course - feel free to raise a PR if you would like to contribute.

- Beaufort Cipher
- Bifid Cipher
- ADFGX Cipher
- ADFGVX Cipher
- Columnar Transposition Cipher
- Enigma M3 Cipher
- Foursquare Cipher
- Gronsfeld Cipher
- M-209 Cipher
- Playfair Cipher
- Polybius Square Cipher
- Porta Cipher
- Railfence Cipher

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
