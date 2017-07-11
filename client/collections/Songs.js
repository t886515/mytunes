// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'http://parse.atx.hackreactor.com/mytunes/classes/songs',
  parse: function(response) {
    return response.results;
  },
  
  initialize: function() {
    // this.retrieve();
    this.fetch();
  },
  
  retrieve: function() {
    var that = this;
    $.ajax({
      url: 'http://parse.atx.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        //console.log(data, 'show us the data');
        that.add(data.results);
      },
      error: function(data) {
        console.error('we did not receive anything :(');
      }
    });
  },

});
