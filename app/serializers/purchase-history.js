import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    primaryKey: 'title',
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        const data = payload.entry.map((item)=>{
            const keys= item.content.properties;
            const obj = {};
            const data = Object.keys(keys).map((key)=>{
                if(keys[key]['#text']) 
                    obj[key] = keys[key]['#text'];
            });
            return { ...item, properties: obj }
        });
        payload = {
           'purchase-history' : { ...payload, entry: data }
        }
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});