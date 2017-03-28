import Ember from 'ember';

export default Ember.Component.extend({
  log: {},
  actions: {
  save () {
    // console.log('Save the log');
    this.sendAction('save',
    this.get('log'));
  },
  cancel () {
    this.get('log').rollbackAttributes();
    this.sendAction('cancel');
  },
},
});
