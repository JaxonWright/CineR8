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
  }
});
