import Ember from 'ember';


export default Ember.Controller.extend({
    firebaseApp: Ember.inject.service(),
    actions: {
        signUp() {
            var email = document.getElementById("email").value;
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var password2 = document.getElementById("password2").value;
          
            let validLogin = this.passIsValid(password, password2) && this.usernameIsValid(username) && this.emailIsValid(email);
            
            if (validLogin) {
               var self = this;
               this.get('firebaseApp').auth().createUserWithEmailAndPassword(email, password).then(result => {
                    var newUser = self.store.createRecord('user', {
                        id: result.uid,
                        email: email,
                        username: username
                    });
                    newUser.save();

                    self.get('session').open('firebase', {
                        provider: 'password',
                        email: email,
                        password: password
                    }).then(() => {
                        self.transitionToRoute('application');
                    }, () => {
                        alert("Failure");
                    });
               }).catch(error => {
                   alert(error);
               })
            }
        }
    },
    passIsValid(password, password2) {
        return (password == password2 && password != "");
    },
    usernameIsValid(username) {
        return !this.usernameTaken(username);
    },
    usernameTaken(username) {
        if(username == "") {
            alert("Please enter a username");
            return true;
        } 
        this.store.query('user', {
                orderBy: 'username',
                equalTo: username 
        }).then((records) => {
           if(records.get('length') > 0){
               alert("username already taken");
               return true;
           }
           return false;
        });
    },
    emailIsValid(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (re.test(email) == false) {
            alert("not a valid email address");
            return false;
        }
        return !this.emailTaken(email);
    }, 
    emailTaken(email) {
        if (email == "") { return true; }

        this.store.query('user', {
                orderBy: 'email',
                equalTo: email
        }).then((records) => {
            if(records.get('length') > 0) {
                alert("email is taken");
                return true;
            }
            return false;
        });
    }
});
