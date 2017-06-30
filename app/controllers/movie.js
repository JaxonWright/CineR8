import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        updateRating({ item: { model: { movie } }, rating }) {
             let fanoutObject = {};
             let userId = this.get('session.currentUser.uid');
          
             fanoutObject[`users/${'userId'}/ratings/${'movie.id'}/value`] = rating;
             fanoutObject[`users/${'userId'}/ratings/${'movie.id'}/posterPath`] = movie.poster_path;
             fanoutObject[`users/${'userId'}/ratings/${'movie.id'}/movieTitle`] = movie.title;

             this.get('firebaseUtil').update(fanoutObject).then(() => {

             }).catch(error => {
                alert(error);
             });
            
        }
    }
});
