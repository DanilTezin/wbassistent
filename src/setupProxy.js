const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/register',
        createProxyMiddleware({
            target: 'http://apidev.wbassistent.ru',
            changeOrigin: true,
        })
    );
    app.use(
        '/login',
        createProxyMiddleware({
            target: 'http://apidev.wbassistent.ru',
            changeOrigin: true,
        })
    );
    app.use(
        '/token/get_data/',
        createProxyMiddleware({
            target: 'http://apidev.wbassistent.ru',
            changeOrigin: true,
        })
    );
    // app.use(
    //     '/api/market/user_id',
    //     createProxyMiddleware({
    //         target: 'http://apidev.wbassistent.ru',
    //         changeOrigin: true,
    //     })
    // );
};