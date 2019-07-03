module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'prettier',
        'plugin:vue/recommended', // /base, /essential, /strongly-recommended, /recommended
        'plugin:prettier/recommended', // turns off all ESLINT rules that are unnecessary due to Prettier or might conflict with Prettier.
        'prettier/vue'
    ],
    plugins: ['vue', 'prettier'],
    rules: {
        'vue/html-indent': [
            'error',
            4,
            {
                alignAttributesVertically: true,
            },
        ],
        'vue/no-v-html': "off",
        "vue/no-parsing-error": ['off'],
        "vue/component-name-in-template-casing": ['error', "PascalCase", { 
            "ignores": ['router-link', 'router-view']
        }],
        "vue/html-closing-bracket-newline": ["error", {
              "singleline": "never",
              "multiline": "always"
        }],
        'prettier/prettier': [
            'warn',
            {
                arrowParens: 'avoid',
                bracketSpacing: false,
                jsxBracketSameLine: false,
                printWidth: 80,
                proseWrap: 'always',
                semi: false,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'all',
                useTabs: false,
            },
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
}