import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        updateRating({ item: model, rating }) {
             let fanoutObject = {};
             let userId = this.get('session.currentUser.uid');

             this.send('dontWannaSee', model);
          
             fanoutObject[`users/${userId}/ratings/${model.movie.id}/value`] = rating;
             fanoutObject[`users/${userId}/ratings/${model.movie.id}/posterPath`] = model.movie.poster_path;
             fanoutObject[`users/${userId}/ratings/${model.movie.id}/movieTitle`] = model.movie.title;

             this.get('firebaseUtil').update(fanoutObject).then(() => {

             }).catch(error => {
                alert(error);
             });
            
        },
        removeRating(model) {
            let movie = model.movie;
            let fanoutObject = {};
            let userId = this.get('session.currentUser.uid');
            fanoutObject[`users/${userId}/ratings/${movie.id}`] = null;

           this.get('firebaseUtil').update(fanoutObject).then((result) => {
            }).catch(error => {
                alert(error);
            });
        },
        wannaSee(model) {
            let movie = model.movie;
            let fanoutObject = {};
            let userId = this.get('session.currentUser.uid');
          
            fanoutObject[`users/${userId}/wannaSees/${movie.id}/posterPath`] = movie.poster_path;
            fanoutObject[`users/${userId}/wannaSees/${movie.id}/movieTitle`] = movie.title;

            this.get('firebaseUtil').update(fanoutObject).then(() => {
                Ember.set(model, 'wannaSee', true);
            }).catch(error => {
                alert(error);
            });
             
        },
        dontWannaSee(model) {
            let movie = model.movie;
            let fanoutObject = {};
            let userId = this.get('session.currentUser.uid');
            fanoutObject[`users/${userId}/wannaSees/${movie.id}`] = null;

           this.get('firebaseUtil').update(fanoutObject).then((result) => {
                Ember.set(model, 'wannaSee', false);
            }).catch(error => {
                alert(error);
            });
        }
    }
});
