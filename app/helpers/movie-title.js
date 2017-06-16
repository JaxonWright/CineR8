import Ember from 'ember';
export function movieTitle(id/*, hash*/) {
  theMovieDb.movies.getById({"id":id}, result => {
      //success
      //alert(JSON.parse(result)["title"]);
      return JSON.parse(result)["title"];
  }, result => {
      //failure
      return "Unknown Movie ID";
  })
}

export default Ember.Helper.helper(movieTitle);
