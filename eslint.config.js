import eslint from '@antfu/eslint-config'

export default eslint({
  formatters: true,
  rules: {
    'no-console': 'off',
  },
})
