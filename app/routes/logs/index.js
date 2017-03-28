import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteLog(log) {
      // console.log('Getting to delete action');
      log.destroyRecord()
        .then(() => this.transitionTo('logs'));
    },
  },
});
