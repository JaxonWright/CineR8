import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        loginWithGoogle: function(){
            var self = this;
             this.get('session').open('firebase', { 
                 provider: 'google'
             }).then(function() {
                self.transitionToRoute('index');
            }, function() {
                alert("Failure");
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

