import Ember from 'ember';
let $ = Ember.$;
export default Ember.Component.extend({
  actions: {
    search(value){
      var $title = $('#results .title');
      var $poster = $('#results .poster');
      Ember.$.getJSON('http://www.omdbapi.com/?t='+value).done((data)=>{
        $title.text(data.Title);
        $poster.attr('src', data.Poster);
      });

    }
  }
});
