module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
  },
  rules: {
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/no-unresolved": "off",
    "spaced-comment": "off",
    "import/prefer-default-export": "off",
    "react/no-unescaped-entities": "off",
    "react/require-default-props": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  },
};
