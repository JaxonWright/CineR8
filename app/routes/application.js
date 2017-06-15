import Ember from 'ember';
export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', { provider: provider}).then(function(data) {
        alert(data.currentUser);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  },
  model() {
      var self = this;
      return {
          username: Ember.computed(function() {
            var uid = self.get('session.currentUser.uid');
            self.store.query('user', {
                 orderBy: 'email',
                 equalTo: self.get('session.currentUser.email')
            });
              //TODO: SOMEHOW RETURN THE USERNAME HERE
              //self.store.findRecord('username')
          })
      }
  }
});
