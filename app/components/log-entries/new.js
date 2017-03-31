import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  log: {},
  credentials: storageFor('auth'),
  isAuthenticated: Ember.computed.bool('credentials.token'),
  // init() {
  //   this._super(...arguments);
  //   this.set('log', {});
  // },
  actions: {
  save () {
    // console.log('Save the log');
    this.sendAction('save',
    this.get('log'));

    if(this.get('isAuthenticated') === true) {
      this.set('log.location', null);
      this.set('log.temp', null);
      this.set('log.feelsLike', null);
      this.set('log.weatherConditions', null);
      this.set('log.bottomLayers', null);
      this.set('log.topLayers', null);
      this.set('log.accessories', null);
      this.set('log.activityLevel', null);
      this.set('log.comfortLevel', null);
    }
  },
  clear () {
    this.set('log.location', null);
    this.set('log.temp', null);
    this.set('log.feelsLike', null);
    this.set('log.weatherConditions', null);
    this.set('log.bottomLayers', null);
    this.set('log.topLayers', null);
    this.set('log.accessories', null);
    this.set('log.activityLevel', null);
    this.set('log.comfortLevel', null);
  },
},
});
