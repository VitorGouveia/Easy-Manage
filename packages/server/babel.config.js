module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@infra": "./src/infra",
          "@domain": "./src/domain",
          "@user": "./src/domain/user",
          "@client": "./src/domain/client",
          "@item": "./src/domain/item",
          "@order": "./src/domain/order"
        }
      }
    ]
  ],
  ignore: ["**/*.spec.ts"]
}
