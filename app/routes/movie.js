import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        theMovieDb.movies.getById({"id":params.movie_id}, result => {
            //success
            var url = "//image.tmdb.org/t/p/w640";
            var m = this.store.createRecord('movie', {
                id: JSON.parse(result)["id"],
                title: JSON.parse(result)["title"],
                description: JSON.parse(result)["overview"],
                poster: url + JSON.parse(result)["poster_path"]
            });
            m.save();
            return this.store.findRecord('movie', params.movie_id);
        }, result => {
            //failure
            alert(result);
        })
        
    }
});
