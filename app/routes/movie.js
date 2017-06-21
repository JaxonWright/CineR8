import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return Ember.RSVP.hash({
            movie: Ember.$.getJSON("https://api.themoviedb.org/3/movie/" + params.movie_id+ "?api_key=0910db5745f86638474ffefa5d3ba687")
        });
    }
});
