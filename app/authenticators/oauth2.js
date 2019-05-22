import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: 'https://api.dev.cardinalhealth.com/oauth/token/accesstoken?grant_type=client_credentials',
});
