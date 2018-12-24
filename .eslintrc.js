module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    CONFIG: true,
  },
  parser: 'babel-eslint',
  settings: {
    'import/resolver': 'webpack',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-cycle': [3],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-a11y/click-events-have-key-events': 0,
    'no-console': [0, { allow: ['warn', 'error'] }],
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-trailing-spaces': 0,
    'no-unused-vars': ['error', { args: 'after-used' }],
    'react/destructuring-assignment': 'never',
    'react/forbid-prop-types': 0,
    'react/jsx-no-bind': [0, { allowBind: true }],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/prefer-stateless-function': 0,
  },
};