export default {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      'umi-plugin-import',
      {
        libraryName: 'antd',
        style: true,
      },
    ],
  ],
}
