import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        loginWithGoogle: function(){
            var self = this;
             this.get('session').open('firebase', { 
                 provider: 'google'
             }).then(function() {
                 //check for user record in database
                 self.store.query('user', {
                     orderBy: 'email',
                     equalTo: self.get('session.currentUser.email')
                 }).then((records) => {
                     //no record in database. New Google Account
                    if(records.get('length') === 0) {
                        var newUser = self.store.createRecord('user', {
                            id: self.get('session.currentUser.uid'),
                            email: self.get('session.currentUser.email'),
                            username: self.get('session.currentUser.email')
                        });
                        newUser.save();
                    }
                 });
                self.transitionToRoute('index');
            }, function() {
                alert("Can't sign in with Google");
            });
            
        },
        loginWithEmail: function(){
            var self = this;
            var email = document.getElementById('email').value;
            var pass = document.getElementById('password').value;
            this.get('session').open('firebase', {
                provider: 'password',
                email: email,
                password: pass
            }).then(function() {
                self.transitionToRoute('index')
            }, function() {
                alert("Failure");
            });
        } 
    }
});

