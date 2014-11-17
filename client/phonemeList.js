Template.phonemeList.events({

  'change [type=checkbox]': function(e, t) {
    // do whatever.......
    console.log("add " + this.word + " to user's public starred list");
  },

});

Template.phonemeList.helpers({

  rowStyle: function(word) {
    if (word.indexOf(Session.get("kana")) > -1) {
      return "warning";
    }
  },

  selectedPhoneme: function() {
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
      var phonemes = Words.find({'phoneme': {$regex: re}}, {sort: {word: 1}}, {limit: 100}, function(e, r) {
        if (e)
          console.log(r);
      });
      return phonemes;
    }
  },

});