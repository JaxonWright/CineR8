import DS from 'ember-data';

export default DS.Model.extend({
    movieTitle: DS.attr('string'),
    posterPath: DS.attr('string')
});