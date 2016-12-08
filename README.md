# fh-dataman

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> A new backend service for the RHMAP databrowser

This service will act as the new backend service for the databrowser in RHMAP studio.

## Table of Contents

- [Build](#Build)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)

## Build

### Transpile

This service is written with ES6 and transpiled to ES5 using Babel. All the source code should be written in the `src` directory. Then run

```bash
grunt babel
```

transpile the code. The traspiled code will be written to the `lib` dir.


### Adding Unit Tests

Unit tests should be added to the same directory of the test target file. It should have a suffix wtih "_test.js". Tests should be written using ES6 syntax as well. To run all the tests:

```bash
grunt test
```

## Usage

To start the service, run

```bash
node ./lib/app.js ./config/dev.json
```

## API

//TODO

## Contribute

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © RedHat