import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import OdataAdapter from './odata';

const Auth = OdataAdapter.extend({});

export default Auth.extend(DataAdapterMixin, {
    authorizer: 'authorizer:oauth2'
});