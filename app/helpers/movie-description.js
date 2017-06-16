import Ember from 'ember';

export function movieDescription(id/*, hash*/) {
   theMovieDb.movies.getById({"id":id}, result => {
      //success
      //alert(JSON.parse(result)["overview"]);
      return JSON.parse(result)["overview"];
  }, result => {
      //failure
      return "n/a";
  })
}

export default Ember.Helper.helper(movieDescription);
