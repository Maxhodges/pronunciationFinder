

Meteor.autosubscribe(function(){
  Meteor.subscribe('wordsContainingPhonemes', Session.get('phoneme'), Session.get('page'));
});


Meteor.subscribe('kana');
