
Meteor.publish('wordsContainingPhonemes', function(phoneme){
  if (phoneme) {
    var re = new RegExp(".*" + phoneme + ".*", "i"); // {sort: {count:-1}, limit:25}
    return Words.find({'phoneme': {$regex: re}});
  } else {
    return ;
  }



});