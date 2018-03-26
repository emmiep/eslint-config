module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended'
  ],
  rules: {
    /* react code style: jsx */
    'react/self-closing-comp': ['warn', { /* prefer self-closing tags */
      component: true,
      html: true
    }],
    'react/jsx-tag-spacing': ['error', { /* require spacing only before slash of self-closing tags */
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }],
    'react/jsx-pascal-case': 'warn' /* prefer PascalCase react component names */
  }
};

