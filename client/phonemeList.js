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

      // build regex
      var re = new RegExp(".*" + phoneme + ".*", "i"); // {sort: {count:-1}, limit:25}

      // build array query
      var querySubstring = '';
      var myStringArray = phoneme.split(' ');
      var arrayLength = myStringArray.length;
      for (var i = 0; i < arrayLength; i++) {
        //alert(myStringArray[i]);
        querySubstring += "{'phonemes': '" + myStringArray[i] + "'} ,";
      }

      // combine array string query with regex
      var query = "$and: [" + querySubstring + "{'phoneme': {$regex:" + re + "}}]";
      console.log(query);

//                  $and: [{'phonemes': 'HH'} ,{'phonemes': 'AA1'} ,{'phoneme': {$regex:/.*HH AA1.*/i}}]

      //db.words.find({ $and: [{'phonemes': "HH"} ,{"phonemes": "AA1"}, {"phoneme": "/.*HH AA1.*/"}]}  )

  //    var phonemes = Words.find(query, function(e, r) {
  //          if (e)
  //            console.log(r);
  //        }
  //      )
  //      ;
  //    return phonemes;
  //  }
  //},

  var phonemes = Words.find({'phoneme': {$regex: re}}, {sort: {word: 1}, limit: 100}, function(e, r) {
    if (e)
      console.log(r);
  });
return phonemes;
}
},

})
;