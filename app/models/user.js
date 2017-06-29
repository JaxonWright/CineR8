import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  username: DS.attr('string'),
  ratings: DS.hasMany('rating', {async: false, inverse: null})
});
