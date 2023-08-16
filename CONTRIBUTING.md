# Contributing

Thanks for your interest in contributing to `tailwindcss-react-datepicker`! Please take a moment to
review this document **before submitting a pull request**.

-   [Contributing](#contributing)
    -   [Installation](#installation)
    -   [Coding standards](#coding-standards)
        -   [**Using yarn**](#using-yarn)
        -   [**Using npm**](#using-npm)
    -   [Running playground](#running-playground)
        -   [**Using yarn for development**](#using-yarn-for-development)
        -   [**Using npm for development**](#using-npm-for-development)
    -   [Before you make a Pull Request](#before-you-make-a-pull-request)
        -   [**Let's clean the code first**](#lets-clean-the-code-first)
        -   [**Test a build of your changes**](#test-a-build-of-your-changes)

## Installation

You only require a `yarn install` in the root directory to install everything you need.

```sh
yarn install
```

## Coding standards

We use `prettier` for making sure that the codebase is formatted consistently. To automatically fix
any style violations in your code, you can run:

### **Using yarn**

```sh
yarn pret:fix
```

### **Using npm**

```sh
npm pret:fix
```

## Running playground

We currently use `next.js` as server for live testing.

You can run the `dev` script and open your browser to `http://localhost:8888`.

See complete `props` usage in `pages/index.js` file.

### **Using yarn for development**

```sh
yarn dev
```

### **Using npm for development**

```sh
npm dev
```

## Before you make a Pull Request

We recommend to run these scripts in sequence before you make your commit message amd open a Pull
Request

### **Let's clean the code first**

```sh
yarn pret:fix
```

### **Test a build of your changes**

```sh
yarn build

```
