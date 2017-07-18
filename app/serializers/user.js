import FirebaseSerializer from 'emberfire/serializers/firebase';

export default FirebaseSerializer.extend({
  attrs: {
    ratings: { embedded: 'always' },
    wannaSees: { embedded: 'always' }
  }
});