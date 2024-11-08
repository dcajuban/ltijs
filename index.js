const path = require('path')
 
// Require Provider
const lti = require('ltijs').Provider
 
// Setup provider
lti.setup('PASMADEUPKEY8123$', // Key used to sign cookies and tokens
  { // Database configurations
    url: 'mongodb+srv://ltijs-dev.w5pfd.mongodb.net/?retryWrites=true&w=majority',
    connection: { user: 'lti', pass: 'oRUY12TydPS4CQtC' }
  },
  { // Options
    appRoute: '/', loginRoute: '/login', // Optionally, specify some of the reserved routes
    cookies: {
      secure: false, // Set secure to true if the testing platform is in a different domain and https is being used
      sameSite: '' // Set sameSite to 'None' if the testing platform is in a different domain and https is being used
    },
    devMode: true, // Set DevMode to false if running in a production environment with https,
    dynRegRoute: '/register',
    dynReg: {
      url: 'https://ltijs-dan.peregrineglobal.com', // Tool Provider URL. Required field.
      name: 'Peregrine Global Services (Dan)', // Tool Provider name. Required field.
      logo: 'https://peregrineglobal.com/wp-content/uploads/pgs-seal-color-1.png', // Tool Provider logo URL.
      description: 'Peregrine Global Services - DAN', // Tool Provider description.
      redirectUris: ['https://ltijs-dan.peregrineglobal.com/launch'], // Additional redirection URLs. The main URL is added by default.
      customParameters: { key: 'value' }, // Custom parameters.
      autoActivate: false // Whether or not dynamically registered Platforms should be automatically activated. Defaults to false.
    }
  }
)
 
// Set lti launch callback
lti.onConnect((token, req, res) => {
  console.log(token)
  return res.send('It\'s alive!')
})

// Deep Linking callback
lti.onDeepLinking((token, req, res) => {
  // Call redirect function to deep linking view
  lti.redirect(res, '/deeplink')
})

// Deep Linking route, displays the resource selection view
lti.app.get('/deeplink', async (req, res) => {
  return res.sendFile(path.join(__dirname, '/public/resources.html'))
})

lti.app.post('/deeplink', async (req, res) => {
  const resource = req.body

  const items = [
    {
      type: 'ltiResourceLink',
      title: resource.title,
      custom: {
        resourceurl: resource.path,
        resourcename: resource.title
      }
    }
  ]

  // Creates the deep linking request form
  const form = await lti.DeepLinking.createDeepLinkingForm(res.locals.token, items, { message: 'Successfully registered resource!' })

  return res.send(form)
})
 
const setup = async () => {
  // Deploy server and open connection to the database
  await lti.deploy({ port: 8080 }) // Specifying port. Defaults to 3000
 
  // Register platform
  await lti.registerPlatform({
    url: 'https://ltijs-dan.peregrineglobal.com',
    name: 'Ltc-ltijs-dev-env ',
    clientId: 'TOOLCLIENTID',
    authenticationEndpoint: 'https://ltijs-dan.peregrineglobal.com/auth',
    accesstokenEndpoint: 'https://ltijs-dan.peregrineglobal.com/token',
    authConfig: { method: 'JWK_SET', key: 'https://ltijs-dan.peregrineglobal.com/keyset' }
  })
}
 
setup()