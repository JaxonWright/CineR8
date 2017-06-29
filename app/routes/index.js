import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            popularNow: Ember.$.getJSON("https://api.themoviedb.org/3/discover/movie?api_key=0910db5745f86638474ffefa5d3ba687&sort_by=popularity.desc"),
            highestRated: Ember.$.getJSON("https://api.themoviedb.org/3/discover/movie?api_key=0910db5745f86638474ffefa5d3ba687&sort_by=vote_average.desc&vote_count.gte=2000")
        });
    }
});