import Ember from 'ember';

export default Ember.Component.extend({
  zipcode: Ember.inject.service(),
  zip: {},
  actions: {
    submit () {
      let zipCode = this.get('zip.location');

      for (let i=zipCode.length; i<5; i++) {
        zipCode = '0' + zipCode;
      }
      this.set('zip.location', zipCode);
      this.get('zipcode').getWeather(this.get('zip.location'))
      .then((data) => {
        this.sendAction('submit', data);
        // this.get('flashMessages').warning('You have been signed out.');
      })
      .catch(() => {
        this.sendAction('submit', null);
        // this.get('flashMessages')
        // .danger('There was a problem. Please try again.');
      });
    },
  },
});
