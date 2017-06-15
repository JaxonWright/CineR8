import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        loginWithGoogle: function(){
             this.get('session').open('firebase', { 
                 provider: 'google'
             }).then(function() {
                alert("Success");
            }, function() {
                alert("Failure");
            });
        },
        loginWithEmail: function(){
            var email = document.getElementById('email').value;
            var pass = document.getElementById('password').value;
            this.get('session').open('firebase', {
                provider: 'password',
                email: email,
                password: pass
            }).then(function() {
                alert("Success");
            }, function() {
                alert("Failure");
            });
        } 
    }
});

