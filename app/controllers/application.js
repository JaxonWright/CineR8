import Ember from 'ember';

export default Ember.Controller.extend({
    search: "",
    actions: {
         querySearch: function() {
            var value = document.getElementById("searchInput").value;
            document.getElementById("searchInput").value = "";
            this.transitionToRoute('search', {queryParams: {value: value}});
        }
    }
   
});