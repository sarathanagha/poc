import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    primaryKey: 'ID',
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {       
        payload = {
           'purchase-history' : payload.d.results
        }
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});