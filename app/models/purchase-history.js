import DS from 'ember-data';
import Ember from 'ember';

const {
    Model,
    attr
    } = DS;

let Account = Model.extend({
    entry: attr()
});

export default Account;

