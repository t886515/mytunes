// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    //call the render function from song queue entry view
    this.collection.forEach(function(song) {
      var newSongQueueEntryView = new SongQueueEntryView({model: song});
      this.$el.append(newSongQueueEntryView.render());
      
    }, this);
    return this.$el;
  }

});
