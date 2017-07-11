// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'http://parse.atx.hackreactor.com/mytunes/classes/songs',
  
  initialize: function() {
    var that = this;
    this.fetch({
      success: function(collection, response) {
        var array = collection.parse(response);
        _.each(array, function(song) {
          that.add(song);
        }); 
      }
    });

    console.log(this);
  }
  
  // fetch: function() {
  //   // $.ajax({
  //   //   url: 'http://parse.atx.hackreactor.com/mytunes/classes/songs',
  //   //   type: 'GET',
  //   //   contentType: 'application/json',
  //   //   success: function(data) {
  //   //     console.log(data, 'show us the data');
  //   //   },
  //   //   error: function(data) {
  //   //     console.error('we did not receive anything :(');
  //   //   }
  //   // });
  // },

});
