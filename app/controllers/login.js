import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        loginWithGoogle() {
            var self = this;
             this.get('session').open('firebase', { 
                 provider: 'google'
             }).then(function() {
                var id = self.get('session.currentUser.uid');
                var email = self.get('session.currentUser.email');

                self.get('firebaseUtil').isRecordExisting(`users/${id}`).then((result) => {
                    if (!result) {
                        var newUser = self.store.createRecord('user', {
                            id: id,
                            email: email,
                            username: email.split('@')[0]
                        });
                        newUser.save();
                    }
                });
                self.transitionToRoute('application');
             }).catch(error => {
                 alert(error);
             });     
        },
        loginWithEmail() {
            var email = document.getElementById('email').value;
            var pass = document.getElementById('password').value;
            this.get('session').open('firebase', {
                provider: 'password',
                email: email,
                password: pass
            }).then(() => {
                self.transitionToRoute('application');
            }, () => {
                alert("Failure");
            });
        } 
    }
});

