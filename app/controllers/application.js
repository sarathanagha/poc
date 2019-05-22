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
       });
    }
})