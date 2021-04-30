var path = require('path');

module.exports = {
    //...
    
    devServer: {
        port: 8888,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/bigcommerce/auth': {
                target: 'http://app.localcb.in:9090',
                changeOrigin: true,
                // pathRewrite: { '/proxy/bigcommerce/auth': '/bigcommerce/auth' },
                logLevel: 'debug'
            },
            '/bigcommerce/load': {
                target: 'http://app.localcb.in:9090',
                changeOrigin: true,
                // pathRewrite: { '/proxy/bigcommerce/load': '/bigcommerce/load' },
                logLevel: 'debug'

            },
            '/bigcommerce/uninstall': {
                target: 'http://app.localcb.in:9090',
                changeOrigin: true,
                // pathRewrite: { '/proxy/bigcommerce/uninstall': '/bigcommerce/uninstall' },
                logLevel: 'debug'

            },
            '/bigcommerce/finish_install': {
                target: 'http://app.localcb.in:9090',
                changeOrigin: true,
                // pathRewrite: { '/proxy/bigcommerce/uninstall': '/bigcommerce/uninstall' },
                logLevel: 'debug'

            },
            '/shopify/webhookseg': {
                target: 'http://mannar-test.localcb.in:9090',
                changeOrigin: true,
                logLevel: 'debug'
            },
	    '/shopify/*': {
                target: 'http://app.localcb.in:9090',
                changeOrigin: true,
                logLevel: 'debug'
            },
            '*': {
                target: 'http://mannar-test.localcb.in:9090',
                changeOrigin: true,
                logLevel: 'debug'
            },
        
        }
    }
};

