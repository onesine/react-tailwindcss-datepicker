# Contributing

Thanks for your interest in contributing to `react-tailwindcss-datepicker`! Please take a moment to
review this document **before submitting a pull request**.

-   [Pull requests](#pull-requests)
-   [Installation](#installation)
-   [Coding standards](#coding-standards)
-   [Running playground](#running-playgrounds)
-   [Before you make a Pull Request](#before-you-make-a-pull-request)

## Pull requests

**Please ask first before starting work on any significant new features.**

It's never a fun experience to have your pull request declined after investing a lot of time and
effort into a new feature. To avoid this from happening, we request that contributors create
[an issue](https://github.com/onesine/react-tailwindcss-datepicker/issues) to first discuss any
significant new features.

## Installation

You only require a `yarn install` in the root directory to install everything you need.

```sh
yarn install
```

## Coding standards

We use `prettier` for making sure that the codebase is formatted consistently. To automatically fix
any style violations in your code, you can run:

**Using yarn**

```sh
yarn pret:fix
```

**Using npm**

```sh
npm pret:fix
```

## Running playground

We currently use `next.js` as server for live testing.

You can run the `dev` script and open your browser to `http://localhost:8888`.

See complete `props` usage in `pages/index.js` file.

**Using yarn**

```sh
yarn dev
```

**Using npm**

```sh
npm dev
```

## Before you make a Pull Request

We recommend to run these scripts in sequence before you make your commit message amd open a Pull
Request

**Let's clean the code first**

```sh
yarn pret:fix
```

**Test a build of your changes**

```sh
yarn build

```
