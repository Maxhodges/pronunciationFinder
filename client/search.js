if (Meteor.isClient) {

  Template.wordSearch.events({
    'click #findWord': function(e, t) {
      // increment the counter when button is clicked
      console.log("wordSearch click");
      Session.set("word", t.find('#__word').value);
      console.log(Session.get("word"));

    }
  });

  Template.wordList.helpers({

    //words: words.find({phoneme: {$regex: ".*" + 'HH' + ".*"}})
    entries: function() {
      var searchWord = Session.get("word");
      if (!searchWord) {
        // do nothing
      } else {
        var re = new RegExp(".*" + searchWord + ".*", "i");
        var words = Words.find({'phoneme': {$regex: re}}, {limit: 500}, function(e,r) {
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

// words.find({}, {sort: Session.get("sort_order")});

// Words.find({sound: {$regex : ".*AA1.*"}}).fetch();
