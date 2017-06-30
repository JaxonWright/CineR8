import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return Ember.RSVP.hash({
            movie: Ember.$.getJSON("https://api.themoviedb.org/3/movie/" + params.movie_id+ "?api_key=0910db5745f86638474ffefa5d3ba687&append_to_response=videos,credits"),
            userRating: this.get('firebaseUtil').findRecord(params.movie_id, 'users/' + this.get('session.currentUser.uid') + '/ratings/' + params.movie_id).catch(error => {
                //error
                alert(error);
            })
        });
    }
});
