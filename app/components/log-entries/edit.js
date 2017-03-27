import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  save () {
    // console.log('Save the title');
    this.sendAction('save',
    this.get('log'));
  },
  cancel () {
    this.get('log').rollbackAttributes();
    this.sendAction('cancel');
  },
},
});
