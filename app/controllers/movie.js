import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        updateRating(params) {
             const { item: model, rating } = params;

             let fanoutObject = {};
             fanoutObject['users/' + this.get('session.currentUser.uid') + '/ratings/' + model.movie.id + "/value"] = rating;
             fanoutObject['users/' + this.get('session.currentUser.uid') + '/ratings/' + model.movie.id + "/posterPath"] = model.movie.poster_path;
             fanoutObject['users/' + this.get('session.currentUser.uid') + '/ratings/' + model.movie.id + "/movieTitle"] = model.movie.title;
             this.get('firebaseUtil').update(fanoutObject).then(() => {

             }).catch(error => {
                alert(error);
             });
            
        }
    }
});