import OdataAdapter from './odata';

export default OdataAdapter.extend({
   //host: 'https://sg.ws.dev.cardinalhealth.com/Pharma/Order/OdataHistorySummaryPmod/V1_0',
   //namespace: 'PurchaseHistory',
   primaryKey: 'title',
   pathForType(type) {
      return type
   },
   headers: { 
      "Authorization": "Basic U2FsZUZvcmNlXCwgU0ZEQzo0TjMvJihjZA=="
   }
})
