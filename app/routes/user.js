import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.query('user', {
                     orderBy: 'username',
                     equalTo: params.username
                 })
    },
    setupController: function(controller, model) {
        controller.set('model', model.get('firstObject'));
    }
});
