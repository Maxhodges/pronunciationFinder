


Template.wordSearch.events({
  'click #__filterWord': function(e, t) {
    console.log("word click");
    Session.set("word", t.find('#wordFilter').value);
  }
});

Template.wordList.helpers({
  entries: function() {
    var searchWord = Session.get("word");
    if (!searchWord) {
      // do nothing
    } else {
      var re = new RegExp(".*" + searchWord + ".*", "i");
      var words = Words.find({'word': {$regex: re}}, {sort: {word: 1}, limit: 100}, function(e, r) {
        if (e)
          console.log(r);
      });
      return words;
    }
  },
})

Template.wordList.rendered = function() {
  console.log("rendered");
};

// mongoimport -d meteor -c kana --type csv --file words kana_phoneme.csv -port 3001 --headerline

//db.temp.find().snapshot().forEach( function (el) {
//el.phonemes = phoneme.split(' ');
//db.temp.save(el);
//});

