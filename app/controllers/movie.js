import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        updateRating(params) {
             const { item: model, rating } = params;

             let fanoutObject = {};
             fanoutObject['users/' + this.get('session.currentUser.uid') + '/ratings/' + model.movie.id] = rating;
             this.get('firebaseUtil').update(fanoutObject).then(() => {

             }).catch(error => {
                alert(error);
             });
            
        }
    }
});