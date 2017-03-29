import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

      // TODO: Ask how to do ajax calls to google api
      // TODO validate data on client AND server

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  credentials: storageFor('auth'),
  isAuthenticated: Ember.computed.bool('credentials.token'),
  flashMessages: Ember.inject.service(),
  actions: {
    createLog (log) {
      if(this.get('isAuthenticated') === true) {
        let newLog = this.get('store').createRecord('log', log);
        newLog.save()
        .then(() => this.get('flashMessages').success('Your log has been saved!'));
      } else {
        this.transitionTo('sign-in')
        .then(() => this.get('flashMessages').warning('Please sign-in to save your log.'));
      }
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
