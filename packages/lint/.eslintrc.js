module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true
  },
  extends: ["standard", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "no-empty-pattern": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}
