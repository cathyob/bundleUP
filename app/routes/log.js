import Ember from 'ember';

export default Ember.Route.extend({
model (params) {
  return this.get('store').findRecord('log', params.log_id);
},
// actions: {
//   deleteItemDone (log) {
//     console.log('Got to the route to delete');
//     log.destroyRecord();
//   },
// },
});
