import Ember from 'ember';

export default Ember.Route.extend({
    model({ movie_id }) {
        let userId = this.get('session.currentUser.uid');
        let movie = Ember.$.getJSON(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=0910db5745f86638474ffefa5d3ba687&append_to_response=videos,credits`);
        let userRating = this.get('firebaseUtil').findRecord(movie_id, `users/${userId}/ratings/${movie_id}`).catch(error => {
            //error
            alert(error);
        })

        return Ember.RSVP.hash({
            movie,
            userRating
        });
    }
});
