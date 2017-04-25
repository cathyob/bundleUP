import Ember from 'ember';

export default Ember.Component.extend({
  zip: {},
  actions: {
    submit () {
      let zipCode = this.get('zip.location');

      for (let i=zipCode.length; i<5; i++) {
        zipCode = '0' + zipCode;
      }
      this.set('zip.location', zipCode);
      this.sendAction('submit', this.get('zip.location'));
    },
  },
});
