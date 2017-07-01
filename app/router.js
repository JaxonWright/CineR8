import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  headData: Ember.inject.service(),

  setTitle(title) {
    this.get('headData').set('title', title);
  }
});

Router.map(function() {
  this.route('movie', {path: '/movie/:movie_id'});
  this.route('login');
  this.route('user', {path: '/user/:username'});
  this.route('show');//, {path: '/show/:show_id'});
  this.route('signup');
  this.route('search');
  this.route('privacy-policy');
  this.route('about');
  this.route('donate');
});

export default Router;
