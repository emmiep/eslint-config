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

## React/Preact support

Full React/Preact support requires the optional peer dependency [`eslint-plugin-react`][eslint-plugin-react] to be installed as well:

```sh
yarn add -D eslint eslint-plugin-react @emmiep/eslint-config
```

Or by using `npm`:

```sh
npm install -D eslint eslint-plugin-react @emmiep/eslint-config
```

Your configuration has to extend the `react` configuration instead of the default configuration:

```json
{
  "extends": "@emmiep/eslint-config/react"
}
```

For Preact support extend the `preact` configuration:

```json
{
  "extends": "@emmiep/eslint-config/preact"
}
```


[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react

