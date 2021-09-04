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
          "@user": "./src/user",
          "@client": "./src/client"
        }
      }
    ]
  ],
  ignore: ["**/*.spec.ts"]
}
