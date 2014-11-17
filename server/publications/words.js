
Meteor.publish('wordsContainingPhonemes', function(phoneme, page){
  if (phoneme && phoneme.length > 1) {
    var re = new RegExp(".*" + phoneme + ".*", "i"); // {sort: {count:-1}, limit:25}
    return Words.find({'phoneme': {$regex: re}}, {sort: {word:1}, limit: 100 * page});
  } else {
    return ;
  }

});