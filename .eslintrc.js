module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    },
    plugins: [
      '@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
}
