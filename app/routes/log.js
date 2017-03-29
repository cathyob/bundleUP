import Ember from 'ember';

export default Ember.Route.extend({
model (params) {
  return this.get('store').findRecord('log', params.log_id);
},
actions: {
  editLogDone (log) {
    // console.log('Got to the route to edit log');
    this.transitionTo('log.edit', log);
  },
  deleteLogDone (log) {
    // console.log('Got to the route to delete log');
    log.destroyRecord();
    this.transitionTo('logs');
  },
},
});
