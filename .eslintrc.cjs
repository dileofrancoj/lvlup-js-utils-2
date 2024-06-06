// yarn add -D eslint-plugin-import-simple-sort
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
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
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": ["simple-import-sort"],
    "ignorePatterns": [".eslintrc.cjs", "dist", "node_modules"],
    "rules": {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "no-console": "warn",
        "@typescript-eslint/no-explicit-any": "error"
    }
}
