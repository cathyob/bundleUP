import Ember from 'ember';


      // TODO: Ask how to do ajax calls to google api, ask about validating data
      // and validate on client AND server

      // TODO: Validate all the data, if something is not right then
      // do this.get('flashMessages').warning('Bad data...') else
      // do below
      // let newLog = this.get('store').createRecord('log', log);
      // newLog.save();
export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  actions: {
    createLog (log) {
      let newLog = this.get('store').createRecord('log', log);
      newLog.save();
    },
    signOut () {
      this.get('auth').signOut()
        .then(() => this.get('store').unloadAll())
        .then(() => this.transitionTo('sign-in'))
        .then(() => {
          this.get('flashMessages').warning('You have been signed out.');
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Are you sure you\'re signed-in?');
        });
    },

    error (reason) {
      let unauthorized = reason.errors && reason.errors.some((error) =>
        error.status === '401'
      );

      if (unauthorized) {
        this.get('flashMessages')
        .danger('You must be authenticated to access this page.');
        this.transitionTo('/sign-in');
      } else {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      }

      return false;
    },
  },
});
