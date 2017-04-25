import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  getWeather (zipCode) {
    return this.get('ajax').post(`/weather`, {
      data: {
        zip: zipCode
      },
    });
  },

});
