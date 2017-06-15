import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movie');
  this.route('login');
  this.route('user');
  this.route('show');
  this.route('signup');
});

export default Router;
