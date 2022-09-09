# Currency Exchanger

#### A Currency Exchange Application

#### [Link to Site](https://helen-lehrer.github.io/currency-exchanger)

#### By Helen Lehrer

## Description

 A currency exchange application where the user can input an amount, chose a base currency, and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, the application makes an API call to an exchange rate API (the API offers a free key).

## Technologies Used

* Node.js
* NPM
* babel/core: ^7.18.6
* babel/plugin-transform-modules-commonjs: ^7.18.6
* clean-webpack-plugin: ^4.0.0
* css-loader: ^3.6.0
* eslint-webpack-plugin: ^3.2.0
* file-loader: ^6.2.0
* html-loader: ^4.1.0
* html-webpack-plugin: ^5.5.0
* jest: ^29.0.1
* style-loader: ^1.3.0
* webpack: 5.74.0
* webpack-cli: ^4.10.0
* webpack-dev-server: 4.10.1
* bootstrap: ^5.2.0
* eslint: ^8.23.0
* dotenv-webpack: ^8.0.1

Module-Bundler: webpack and webpack-cli

Plugins: babel, clean-webpack, eslint-webpack-plugin, html-webpack-plugin, jest, webpack-dev-server, bootstrap, eslint, dotenv-webpack

Loaders: css-loader, file-loader, html-loader, style-loader

#### Types of configuration files in this repo:

* .eslintrc: This file holds our ESLint configuration.
* .babelrc: This file holds our Babel configuration. 
* webpack.config.js: This will hold our webpack configuration, providing specific instructions on how webpack should process and bundle our source code. 

## Setup/Installation Requirements

This repo is compatible with Node v16.16.0 and npm v 8.11.0.

#### Enter this command into your terminal to clone the project: 
```bash
$ git clone https://github.com/helen-lehrer/currency-exchanger/
```

#### Enter this command into your terminal to install all dependencies: 
```bash
$ npm install
```

Next, the `name` and `version` of the project at the top of `package.json` must be updated to the current project name and version.

#### API setup:

This application requires you to use the following [exchange rate API](https://www.exchangerate-api.com/) in order to utilize the most recent exchange rates.

1. #### Navigate to the site.

Sign up to get a free key using your email address. Once you are in the dashboard, navigate to the **API Keys** section. You will find your unique API key there.

2. #### Create a **.env** file in the root directory of your project:
```bash
$ git cd ~/desktop/currency-exchanger
``` 
```bash
$ git touch .env
``` 

*Note: Add .env to your .gitignore now and push it if you are pushing code to a remote repository to protect your API Key!*

3. #### Populate the first line of the **.env** file with your API key information:

``` 
API_KEY=<enter your personal API key here>`
```

*Note: The <> are there for emphasis, do not add <> in your code!*

4. #### Install the **dotenv-webpack** plugin to make our environmental variables available inside our application:

```bash
$ npm install dotenv-webpack --save-dev
```
5. #### Next, we need to edit **webpack.config.js**:

We need to first require it and then add it to the plugins array.

```js
...
const Dotenv = require('dotenv-webpack');

module.exports = {
  ...
  plugins: [
    ...
    new Dotenv()
  ],
  ...
  }

```

To access the environmental variable in our application, preface the environmental variable with process.env:

```
process.env.API_KEY
```

#### Enter this command into your terminal to build the project using webpack: 
```bash
$ npm run build
```

#### Enter this command into your terminal to start a development server: 
```bash
$ npm run start
```

#### Enter this command into your terminal to lint all JS files that are in your src folder: 
```bash
$ npm run start
```

#### Enter this command into your terminal to run tests with Jest: 
```bash
$ npm run test
```

#### You can add any additional npm packages to the repo with this command: 
```bash
$ npm install [PACKAGE-NAME]
```

## Known Bugs

*none

## License
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

&copy; _Copyright 2022 Helen Lehrer_