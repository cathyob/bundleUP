import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  saveLog (log) {
    console.log('Getting to saveLog');
    log.save()
    .then(() => this.transitionTo('logs'));
  },
  cancel () {
    console.log('Getting to cancel');
    history.back();
  },
},
});
