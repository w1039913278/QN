module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
  // baseUrl: '/',   // 基本路径
  // outputDir: 'dist',  // 输出文件目录
  // devServer: {
  //     open: true,   // 自动打开默认浏览器
  //     host: "localhost", // 打开的域名
  //     port: "8888",  //端口号
  //     https: false, // 是否为https
  //     proxy: {
  //         '/api': {
  //             target: 'http://www.example.org',   //目标主机
  //             changeOrigin: true,  //  虚拟主机站点
  //             pathRewrite: {
  //                 '^/api': ''
  //             }
  //         }
  //     }   // 跨域
  // }
}
