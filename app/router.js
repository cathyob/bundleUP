import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('logs', function() {
    this.route('new');
  });
  this.route('log', { path: '/logs/:log_id' }, function() {
    this.route('edit');
  });
});

export default Router;
