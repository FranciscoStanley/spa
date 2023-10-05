module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["airbnb", "prettier"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "prettier", "react-hooks"],
    rules: {
        "import/no-extraneous-dependencies": [
            "error",
            { devDependencies: true },
        ],
        "no-undef": 0,
        "no-unused-vars": 0,
        "react/button-has-type": 0,
        "react/no-unknown-property": 0,
        "jsx-a11y/iframe-has-title": 0,
        "react/prop-types": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "prettier/prettier": "error",
        "react/jsx-filename-extension": 0,
        "import/prefer-default-export": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/react-in-jsx-scope": 0,
        "react/void-dom-elements-no-children": 0,
        "eslint-disable-next-line no-console": 0,
        "eslint-disable no-unused-vars": 0,
    },
};
