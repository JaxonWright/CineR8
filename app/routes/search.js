import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        value: {
             refreshModel: true
        }
  },
    model({ value }) {
        let query = value;
        let search = Ember.$.getJSON(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=0910db5745f86638474ffefa5d3ba687`);

        return Ember.RSVP.hash({
            query,
            search
        });
    }
});
