import Ember from 'ember';
export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signOut: function() {
      this.get('session').close();
    }
  },
  model() {
    if (this.get('session.isAuthenticated')){
      return this.store.findRecord('user', this.get('session.currentUser.uid'));
    }
  }
});
