if (Meteor.isClient) {
  Template.wordSearch.events({
    'click #__findWord': function(e, t) {
      console.log("word click");
      Session.set("word", t.find('#__word').value);
    }
  });

  Template.wordList.helpers({
    entries: function() {
      var searchWord = Session.get("word");
      if (!searchWord) {
        // do nothing
      } else {
        var re = new RegExp(".*" + searchWord + ".*", "i");
        var words = Words.find({'word': {$regex: re}}, {sort: {word: 1}}, {limit: 500}, function(e, r) {
          if (e)
            console.log(r);
        });
        return words;
      }
    },
  })
}

Template.wordList.rendered = function() {
  console.log("rendered");
};




