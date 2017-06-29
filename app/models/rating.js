import DS from 'ember-data';

export default DS.Model.extend({
    movieTitle: DS.attr('string'),
    value: DS.attr('number'),
    posterPath: DS.attr('string')
});
