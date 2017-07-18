import Ember from 'ember';

export default Ember.Route.extend({
    titleToken(model) {
        return model.movie.title;
    },
    model({ movie_id }) {
        let userId = this.get('session.currentUser.uid');
        let movie = Ember.$.getJSON(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=0910db5745f86638474ffefa5d3ba687&append_to_response=videos,credits`);
        let userRating = this.get('firebaseUtil').findRecord(movie_id, `users/${userId}/ratings/${movie_id}`).catch(error => {
            //error
            alert(error);
        })
        let wannaSee = this.get('firebaseUtil').isRecordExisting(`users/${userId}/wannaSees/${movie_id}`)
        return Ember.RSVP.hash({
            movie,
            userRating,
            wannaSee
        });
    },
    afterModel(model) {
        this._super(model);
        Ember.RSVP.hash({
            tmp: Ember.$.getJSON("https://omdbapi.com/?apikey=8084da1&i=" + model.movie.imdb_id)
        }).then(hash => {
            Ember.set(model, 'movieOMDb', hash.tmp);
        })
    }
});
