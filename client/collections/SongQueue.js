// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      this.length === 1 ? this.playFirst() : undefined;
    });
    this.on('ended', function(song) {
      this.at(0).dequeue();
      this.length >= 1 ? this.playFirst() : undefined;
    });
    this.on('dequeue', function(song) {
      this.remove(song);
    });
  },
  
  playFirst: function() {
    this.at(0).play();
    //this.models[0].play();
  }

});