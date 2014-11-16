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
        var words = Words.find({'word': {$regex: re}}, {sort: {word: 1}},{limit: 500}, function(e, r) {
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

Template.phonemeSearch.events({
  'click #__findByPhoneme': function(e, t) {
    console.log("phoneme click");
    Session.set("phoneme", t.find('#__phoneme').value);
  },
});


Template.kana.events({
  'click #__findKana': function(e, t) {
    console.log("kana click");
    Session.set("phoneme", t.find('#kana').value);
    console.log(Session.get("phoneme"));
  },
});

Template.phonemeList.events({
  'change .star input': function(e,t){
    // do whatever.......
    console.log("add to user's public starred list");
  },

});


Template.phonemeList.helpers({

  phoneme: function() {
    return Session.get("phoneme");
  },

  phonemeResults: function() {
    var phoneme = Session.get("phoneme");


    if (!phoneme) {
      // do nothing
      console.log("results not coming");
    } else {
      console.log("results coming");
      var re = new RegExp(".*" + phoneme + ".*", "i");
      var phonemes = Words.find({'phoneme': {$regex: re}}, {sort: {word: 1}}, {limit: 500}, function(e, r) {
        if (e)
          console.log(r);
      });
      return phonemes;
    }
  },



});