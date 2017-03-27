import Ember from 'ember';

export default Ember.Route.extend({
  model () {
  return this.get('store').findAll('log');
},
actions: {
  editLog (log) {
    console.log('Got to the route to edit log');
    this.transitionTo('log.edit', log);
  },
  deleteLog (log) {
    console.log('Got to the route to edit log');
    log.destroyRecord();
  },
},
});
