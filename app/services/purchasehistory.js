import Ember from 'ember';

const {
    Service,
    inject, 
    $  
    } = Ember;

let ApplicationService = Service.extend({
    store: inject.service("store"),
    async fetchHistory() {
       /*$.ajax({
            dataType:'xml',
            url: "https://sg.ws.dev.cardinalhealth.com/Pharma/Order/OdataHistorySummaryPmod/V1_0/PurchaseHistory?\
            $top=1000&$filter=(OrderType+eq+'Z100'+or+OrderType+eq+'Z200'+or+OrderType+eq+'Z310'+or+OrderType+eq+'ZZ40')+and+(OrderedDte+ge+'20181225'+and+OrderedDte+le+'20190325')+and+AccountNumber+eq+'2050000013'+and+SalesOrganization+eq+'2220'+and+DistributionChannel+eq+'10'&$orderby=OrderedDte+desc&$inlinecount=allpages&$select=CIN,ID,MATNR,OrderType,OrderedDate,OrderedDte,PricePaid,QuantitySold,SellPrice,Type",
            method: 'GET',
            headers: { 
                "Authorization": "Basic U2FsZUZvcmNlXCwgU0ZEQzo0TjMvJihjZA==" 
            }
        }).then(function (xml) {
            var json = $.xml2json(xml);
            console.log(JSON.stringify(json));
            return json.Video;
        });
        return $.getJSON("./app/services/data.json");*/
        const data = await this.store.queryRecord('purchase-history', {
            $top: 1000,
            $filter: "(OrderType+eq+'Z100'+or+OrderType+eq+'Z200'+or+OrderType+eq+'Z310'+or+OrderType+eq+'ZZ40')+and+(OrderedDte+ge+'20181225'+and+OrderedDte+le+'20190325')+and+AccountNumber+eq+'2050000013'+and+SalesOrganization+eq+'2220'+and+DistributionChannel+eq+'10'&$orderby=OrderedDte+desc&$inlinecount=allpages&$select=CIN,ID,MATNR,OrderType,OrderedDate,OrderedDte,PricePaid,QuantitySold,SellPrice,Type"
        }); 
        return data;
            
    }
});

export default ApplicationService;
