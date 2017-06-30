import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        updateRating({ item: model, rating }) {
             let fanoutObject = {};
             let userId = this.get('session.currentUser.uid');
          
             fanoutObject[`users/${userId}/ratings/${model.movie.id}/value`] = rating;
             fanoutObject[`users/${userId}/ratings/${model.movie.id}/posterPath`] = model.movie.poster_path;
             fanoutObject[`users/${userId}/ratings/${model.movie.id}/movieTitle`] = model.movie.title;

             this.get('firebaseUtil').update(fanoutObject).then(() => {

             }).catch(error => {
                alert(error);
             });
            
        }
    }
});
