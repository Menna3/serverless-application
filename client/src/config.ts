// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'uj4k9sncke'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-panqi41v.us.auth0.com',            // Auth0 domain
  clientId: 'rBG8qG1IWUeb7yIcFMmZCDQuCT7OICCc',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
