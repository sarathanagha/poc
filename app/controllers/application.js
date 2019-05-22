import Ember from 'ember';

const {
    inject: {service},
    Controller,
    $
} = Ember;

export default Controller.extend({
    session: service("session"),
    init(){
       this.get('session').authenticate('authenticator:oauth2', null, null, '', {
        "authorization": "Basic VElTNVRSTVNxQ01iSGVrNENLVjBFcjBmUURXZEUyQXY6RTRBcU9BOVpmRUROT1EzRQ=="
        })

       /* $.ajax('https://api.dev.cardinalhealth.com/oauth/token/accesstoken?grant_type=client_credentials', {
            type: 'POST',   
            headers: {
                "authorization": "Basic VElTNVRSTVNxQ01iSGVrNENLVjBFcjBmUURXZEUyQXY6RTRBcU9BOVpmRUROT1EzRQ=="
            }
        }).then((response)=>{
            console.log(response);
            session.set("access_token", response.access_token)
            /*$.ajax('https://api.dev.cardinalhealth.com/pharma/sap/purchasehistory/v1?$top=10&$format=json&$inlinecount=allpages&$select=CIN-ID-MATNR-OrderType-OrderedDate-OrderedDte-PricePaid-QuantitySold-SellPrice-Type', {
                type: 'GET',
                headers: {
                    "authorization": "Bearer "+ response.access_token
                }
            })
        })*/
            //this.get("session").authenticate("authenticator:torii", "google-oauth2")
    }
})