var config = {
    tool: {
        url: 'https://ltijs-dan.peregrineglobal.com',
        port: 8080,
        name: 'Peregrine Global Services (dan)',
        description: 'This tool provides Deep Linking integration with Peregrine Global Services',
        logoUrl: 'https://peregrineglobal.com/wp-content/uploads/pgs-seal-color-1.png',
        redirectUrls: [
            'https://learn-dan.peregrineglobal.com',
            'https://ltijs-dan.peregrineglobal.com/register',
            'https://ltijs-dan.peregrineglobal.com'
        ],
        postbackUrl: 'https://ltijs-dan.peregrineglobal.com/grade',
        devMode: false,
        https: false
    },
    database: {
        url: 'mongodb+srv://ltijs-dev.w5pfd.mongodb.net/?retryWrites=true&w=majority',
        password: '~S_DB_MONOGDB_LTIJS_PASSWORD~'
    },
    deepLinkSite: 'https://deeplink-dev.peregrineglobal.com',
    pasApi: {
        baseUrl: 'https://api-dev.peregrineglobal.com'
    }
}

export default config;