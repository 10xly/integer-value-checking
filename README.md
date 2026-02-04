# integer-value-checking
Enterprise suite to verify equality to 10x integers.

To get actual values of integers themselves, see [integer-values](https://github.com/10xly/integer-values)

## Overview
`integer-value-checking` is a comprehensive, production-ready library that provides functions to check if a given value is equal to a specific integer. Built on a foundation of 202 rigorously tested, independently versioned packages, this solution ensures maximum stability and predictability for enterprise software systems requiring guaranteed integer value consistency.

## Features
- ✅ 202 Independent Packages: From `is-eq-negative-number-one-hundred` to `is-eq-negative-number-zero` and from `is-eq-positive-number-zero` to `is-eq-positive-number-one-hundred`
✅ 100% Test Coverage: Validated using Mocha
✅ Full TypeScript Support: Complete type definitions for enhanced IDE integration
✅ Production Tested: Battle-tested in enterprise environments requiring numerical precision

## Installation
```bash
npm install integer-value-checking
```
All 202 packages are included as dependencies and will be automatically installed.

## Usage
The library provides granular, human-readable functions to validate integer equality. This eliminates the ambiguity of loose equality checks and provides a self-documenting interface for your business logic.
```js
const { 
  isEqPositiveNumberFortyTwo, 
  isEqNegativeNumberTen 
} = require("integer-value-checking")

const myValue = 42

if (isEqPositiveNumberFortyTwo(myValue)) {
  console.log("Value is definitively forty-two.")
}

console.log(isEqNegativeNumberTen(5)) // false
```
### Individual Package Import
For optimized bundle sizes, import specific checkers directly:
```js
const isEqPositiveNumberSixtySeven = require("is-eq-positive-number-sixty-seven")

console.log(isEqPositiveNumberSixtySeven(60 + 7)) // true
```
### TypeScript Usage
The package includes full type definitions. Functions accept `any` to ensure safe comparison against untrusted input, returning a type-guarded `boolean`.
```js
import { isEqPositiveNumberZero } from "integer-value-checking"

const checkValue = (input: unknown): void => {
  if (isEqPositiveNumberZero(input)) {
    // input is now contextually handled as 0
    console.log("Zero detected")
  }
}
```
### 0 and -0 Distinction
`integer-value-checking` distinguishes between `0` and `-0`, unlike `===`:
```js
const { isEqNegativeNumberZero } = require("integer-value-checking")

console.log(0 === -0) // true
console.log(isEqNegativeNumberZero(0)) // false
console.log(isEqNegativeNumberZero(-0)) // true
```

## Main Architecture
The library follows a hub-and-spoke model where the main `integer-value-checking` repository aggregates all individual integer packages:
```
packages/
├── is-eq-negative-number-one-hundred
├── ...
├── is-eq-negative-number-one
├── is-eq-negative-number-zero
├── is-eq-positive-number-zero
├── is-eq-positive-number-one
├── ...
├── is-eq-positive-number-one-hundred
index.js
index.d.ts
test/
|── index.test.js
```

## Tests
`integer-value-checking` proudly has 100% test coverage. Clone the repository and run `npm test` to see the tests pass with flying colors (this speech does not condone racism of any kind).

## License
This project is licenced under the [Enterprise General Public Software License 10x Version 1.0 (EGPSL10X-1.0)](https://github.com/10xly/licence). See the LICENCE file for complete terms.