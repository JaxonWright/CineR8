import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        value: {
             refreshModel: true
        }
  },
    model(params) {
        return Ember.RSVP.hash({
            query: params.value,
            search: Ember.$.getJSON("https://api.themoviedb.org/3/search/movie?query=" + params.value + "&api_key=0910db5745f86638474ffefa5d3ba687")
        });
    }
});
