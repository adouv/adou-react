const { createProxyMiddleware } = require('http-proxy-middleware');
/**
 * 反向代理设置
 * @param app 
 */
module.exports = function(app) {
    app.use(
        createProxyMiddleware(
            '/cdn', {
                target: 'http://www.a-dou.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/cdn': '/cdn'
                }
            }
        )
    )
}