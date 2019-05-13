import Component from '@ember/component';

const {
    inject
} = Ember;

export default Component.extend({
    applicationService: inject.service("purchasehistory"),
    init() {
        this._super(...arguments);
        this.fetchHistory();       
    },
    async fetchHistory() {
        let data = await this.applicationService.fetchHistory();
        this.set("purchaseHistory", data.entry);        
    }
});
