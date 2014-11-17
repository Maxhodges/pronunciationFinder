Meteor.subscribe('kana');

Meteor.autosubscribe(function(){
  Meteor.subscribe('wordsContainingPhonemes', Session.get('phoneme'), Session.get('page'));
});


