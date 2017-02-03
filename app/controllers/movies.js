import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search(value){
      this.transitionToRoute('movies.movie', value);
    }
  }
});
