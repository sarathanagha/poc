import OdataAdapter from './application';
import Ember from 'ember';

const { 
   inject: { service } 
} = Ember;

export default OdataAdapter.extend({
   host: 'https://api.dev.cardinalhealth.com/pharma/sap',
   pathForType(type) {
      return 'purchasehistory/v1'
   },   
})
