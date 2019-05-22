import Ember from 'ember';

const {
    Service,
    inject, 
    $  
    } = Ember;    

let ApplicationService = Service.extend({
    store: inject.service("store"),
    async fetchHistory() {        
        const data = await this.store.query('purchase-history', {
            $top: 10,
            $format:'json',
            $inlinecount:'allpages',
            $select:'CIN-ID-MATNR-OrderType-OrderedDate-OrderedDte-PricePaid-QuantitySold-SellPrice-Type',
        });
        return data;
    }

});

export default ApplicationService;
