import Ember from 'ember';
export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signOut: function() {
      this.get('session').close();
    },
    refreshModel: function() {
      if (this.get('session.isAuthenticated')){
        this.refresh();
      }
    }
  },
  model() {
    if (this.get('session.isAuthenticated')){
      return this.store.findRecord('user', this.get('session.currentUser.uid'));
    }
  }
});
