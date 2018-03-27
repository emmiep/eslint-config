# @emmiep/eslint-config

A sharable eslint configuration with ESNext and jsx support by default, based on my personal preferences.

## Installation

Using `yarn`:

```sh
yarn add -D eslint @emmiep/eslint-config
```

Or using `npm`:

```sh
npm install -D eslint @emmiep/eslint-config
```

Then extend the configuration from your `.eslintrc`:

```json
{
  "extends": "@emmiep"
}
```

## React support

Full React support requires the optional peer dependency [`eslint-react-plugin`][eslint-react-plugin] to be installed as well:

```sh
yarn add -D eslint eslint-react-plugin @emmiep/eslint-config
```

Or by using `npm`:

```sh
npm install -D eslint eslint-react-plugin @emmiep/eslint-config
```

Your configuration has to extend the `react` configuration instead of the default configuration:

```json
{
  "extends": "@emmiep/eslint-config/react"
}
```

[eslint-react-plugin]: https://github.com/yannickcr/eslint-plugin-react

