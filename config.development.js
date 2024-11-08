var config = {
    tool: {
        url: 'https://ltijs-dev.peregrineglobal.com',
        port: 8080,
        name: 'Peregrine Global Services (DEV)',
        description: 'This tool provides Deep Linking integration with Peregrine Global Services',
        logoUrl: 'https://peregrineglobal.com/wp-content/uploads/pgs-seal-color-1.png',
        redirectUrls: [
            'https://learn-dev.peregrineglobal.com',
            'https://ltijs-dev.peregrineglobal.com/register',
            'https://ltijs-dev.peregrineglobal.com'
        ],
        postbackUrl: 'https://ltijs-dev.peregrineglobal.com/grade',
        devMode: false,
        https: false
    },
    database: {
        url: 'mongodb+srv://ltijs-dev.w5pfd.mongodb.net/?retryWrites=true&w=majority',
        password: '~S_DB_MONOGDB_LTIJS_PASSWORD~'
    },
    deepLinkSite: 'https://deeplinkg-stage.peregrineglobal.com',
    pasApi: {
        baseUrl: 'https://api-stage.peregrineglobal.com'
    }
}

export default config;