module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    './.eslintrc-auto-import.json', // `unplugin-auto-import` 生成的规则配置文件
    'plugin:vue/vue3-recommended',
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  // 添加 vue文件解析器  解析template文件
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  // eslint-plugin-*插件，只写最后个名称就行
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  rules: {
    'arrow-parens': 'off',
    'object-curly-spacing': 'off',
    indent: ['error', 2],
    'operator-linebreak': 'off',
    'new-cap': 'off',
  },
};
