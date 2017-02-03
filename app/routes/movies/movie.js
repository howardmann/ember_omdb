import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.$.getJSON('http://www.omdbapi.com/?t='+params.movie_title);
  }
});
