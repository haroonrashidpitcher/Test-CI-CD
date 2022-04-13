module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
        'vue/no-mutating-props': 'off',
        "vue/no-use-v-if-with-v-for": "off",
        'vue/no-unused-vars': 'off',
        'vue/no-async-in-computed-properties': 'error',
        'vue/no-dupe-keys': 'off',
        'vue/no-duplicate-attributes': 'off',
        'vue/no-parsing-error': 'off',
        'vue/no-reserved-keys': 'off',
        'vue/no-multiple-template-root':'off',
        'vue/no-shared-component-data': 'off',
        'vue/no-side-effects-in-computed-properties': 'error',
        'vue/no-template-key': 'error',
        'vue/no-textarea-mustache': 'error',
        'vue/no-unused-components': 'error',
        'vue/require-component-is': 'error',
        'vue/require-prop-type-constructor': 'error',
        'vue/require-render-return': 'error',
        'vue/require-v-for-key': 'error',
        'vue/require-valid-default-prop': 'error',
        'vue/return-in-computed-property': 'error',
        'vue/use-v-on-exact': 'error',
        'vue/valid-template-root': 'error',
        'vue/valid-v-bind-sync': 'error',
        'vue/valid-v-bind': 'error',
        'vue/valid-v-cloak': 'error',
        'vue/valid-v-else-if': 'error',
        'vue/valid-v-else': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-html': 'error',
        'vue/valid-v-if': 'error',
        'vue/valid-v-model': 'error',
        'vue/valid-v-on': 'error',
        'vue/valid-v-once': 'error',
        'vue/valid-v-pre': 'error',
        'vue/valid-v-show': 'error',
        'vue/valid-v-slot': 'error',
        'vue/valid-v-text': 'error'
    },
    parserOptions: {
    }
}
