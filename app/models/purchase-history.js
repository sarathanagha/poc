import DS from 'ember-data';
import Ember from 'ember';

const {
    Model,
    attr
    } = DS;

let Account = Model.extend({
    CIN: attr(),
    ID: attr(),
    MATNR: attr(),
    OrderType: attr(),
    OrderedDate: attr(),
    OrderedDte: attr(),
    PricePaid: attr(),
    QuantitySold: attr(),
    SellPrice: attr(),
    Type: attr()
});

export default Account;
