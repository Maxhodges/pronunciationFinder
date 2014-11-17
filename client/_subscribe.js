

Meteor.autosubscribe(function(){
  Meteor.subscribe('wordsContainingPhonemes', Session.get('phoneme'));
});


Meteor.subscribe('kana');
