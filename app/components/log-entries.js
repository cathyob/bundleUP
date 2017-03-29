import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['bundleUp'],
  actions: {
    editLog () {
      const log = this.get('log');
      // console.log('Got to the route to edit log');
      return this.sendAction('editLog', log);
    },
    deleteLog () {
      const log = this.get('log');
      // console.log('Got to log to delete');
      return this.sendAction('deleteLog', log);
    },
  },
});
