var config = {
    tool: {
        url: 'https://ltijs-stage.peregrineglobal.com',
        port: 8080,
        name: 'Peregrine Global Services (stage)',
        description: 'This tool provides Deep Linking integration with Peregrine Global Services',
        logoUrl: 'https://peregrineglobal.com/wp-content/uploads/pgs-seal-color-1.png',
        redirectUrls: [
            'https://learn-stage.peregrineglobal.com',
            'https://ltijs-stage.peregrineglobal.com/register',
            'https://ltijs-stage.peregrineglobal.com'
        ],
        postbackUrl: 'https://ltijs-stage.peregrineglobal.com/grade',
        devMode: false,
        https: false
    },
    database: {
        url: 'mongodb+srv://ltijs-stage.w5pfd.mongodb.net/?retryWrites=true&w=majority',
        password: '~S_DB_MONOGDB_LTIJS_PASSWORD~'
    },
    deepLinkSite: 'https://deeplink-stage.peregrineglobal.com',
    pasApi: {
        baseUrl: 'https://api-stage.peregrineglobal.com'
    }
}

export default config;