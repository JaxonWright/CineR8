import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movie', {path: '/movie/:movie_id'});
  this.route('login');
  this.route('user');//, {path: '/user/:user_id'});
  this.route('show');//, {path: '/show/:show_id'});
  this.route('signup');
  this.route('search');
});

export default Router;
