import Ember from 'ember';

export default Ember.Route.extend({
  model () {
  return this.get('store').createRecord('log', {});
},
actions: {
  createLog (log) {
    log.save()
    .then(() => this.transitionTo('logs'));
  },
  cancel () {
    history.back();
  },
},
});
