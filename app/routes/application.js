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
      let valid = function() {
        return (log.location !== undefined &&
                log.location.length > 0 &&
                log.temp >= -100 &&
                log.temp <= 150 &&
                log.feelsLike !== undefined &&
                log.feelsLike.length > 0 &&
                log.feelsLike >= -100 &&
                log.feelsLike <= 150 &&
                log.weatherConditions !== undefined &&
                log.weatherConditions.length > 0 &&
                log.activityLevel !== undefined &&
                // (log.activityLevel === 1 || log.activityLevel === 2 || log.activityLevel === 3 || log.activityLevel === 4 || log.activityLevel === 5) &&
                log.activityLevel >= 1 &&
                log.activityLevel <= 5 &&
                log.comfortLevel !== undefined &&
                // (log.comfortLevel === 1 || log.comfortLevel === 2 || log.comfortLevel === 3 || log.comfortLevel === 4 || log.comfortLevel === 5) &&
                log.comfortLevel >= 1 &&
                log.comfortLevel <= 5 );
      };
      if (valid()) {
          let newLog = this.get('store').createRecord('log', log);
          newLog.save();
      } else {
        this.get('flashMessages')
        .danger('Please be sure all required fields are filled in correctly.');
        // console.log('There was an error');
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
