import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.query('user', {
            orderBy: 'username',
            equalTo: params.username
        }).then((model) => model.get('firstObject'))
    }
});
