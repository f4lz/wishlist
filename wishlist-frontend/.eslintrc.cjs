/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-setup-props-reactivity-loss": "error",
    "vue/no-unused-refs": "error",
    "vue/attributes-order": [
      "error",
      {
        alphabetical: true,
      },
    ],
    "vue/block-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
  }
}
