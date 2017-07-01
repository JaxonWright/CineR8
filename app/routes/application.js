import Ember from 'ember';

export default Ember.Route.extend({
  title(tokens) {
    return 'CineR8 - ' + tokens.join(' - ');
  },

  session: Ember.inject.service(),

  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },

  model() {
    if (this.get('session.isAuthenticated')){
      return this.store.findRecord('user', this.get('session.currentUser.uid'));
    }
  },

  actions: {
    signOut() {
      this.get('session').close();
    },
    refreshModel() {
      if (this.get('session.isAuthenticated')){
        this.refresh();
      }
    }
  }
});
