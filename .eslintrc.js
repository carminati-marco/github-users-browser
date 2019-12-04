module.exports = {
  extends: [
    "react-app",
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style"
  ],
  plugins: ["jsx-a11y", "jest"],
  parser: "babel-eslint",
  env: { browser: true },
  rules: {
    "react/destructuring-assignment": ["off"],
    "react/jsx-filename-extension": "off",
    "react/jsx-indent-props": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-one-expression-per-line": "off",
    "import/no-named-as-default": "off",
    "jest/consistent-test-it": "error",
    "jest/expect-expect": "error",
    "jest/lowercase-name": ["error", { ignore: ["describe", "test"] }],
    "jest/no-alias-methods": "error",
    "jest/no-jasmine-globals": "error",
    "jest/no-test-callback": "error",
    "jest/no-test-prefixes": "error",
    "jest/no-test-return-statement": "error",
    "jest/prefer-strict-equal": "error",
    // "jest/require-tothrow-message": "error",
    "jest/valid-describe": "error",
    "jest/valid-expect-in-promise": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test.js",
          "**/*.test.js",
          "src/screenplay/**",
          "**/test/utils.js",
          "src/main.js",
          "src/setupEnzyme.js",
          "src/setupTests.js",
          "scripts/*.js"
        ]
      }
    ]
  }
};
