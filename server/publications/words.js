Meteor.publish('wordsContainingPhonemes', function(phoneme, page) {
  if (phoneme && phoneme.length > 0) {
    var re = new RegExp(".*" + phoneme + ".*", "i"); // {sort: {count:-1}, limit:25}
    //console.log(re);
    return Words.find({'phoneme': {$regex: re}}, {sort: {word: 1}, limit: 2000 * page});
  } else {
    return;
  }

});