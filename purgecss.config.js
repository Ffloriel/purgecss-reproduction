module.exports = {
  content: ['./content/**/*.html' ],
  css: ['./css/**/*.css'],
  safelist: {
    standard: ['btn-with-price'],
    deep: [/^navbar/],
    greedy: [/^navbar/]
  },
  output: './output/'
}