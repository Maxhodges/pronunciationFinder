Template.kanaFilter.events({



  'change #kana': function(e, t) {
    console.log("kana click");

    Session.set("phoneme", t.find('#kana').value);

    Session.set("kana", t.$("#kana option:selected").data("kana"));
    Session.get("kana");

    console.log(Session.get("phoneme"));
    Session.set("page", 1);
  },

  'click #__findKana': function(e, t) {
    console.log("kana click");

    Session.set("phoneme", t.find('#kana').value);

    Session.set("kana", t.find("#kana option:selected").text);
    Session.get("kana");

    console.log(Session.get("phoneme"));
      Session.set("page", 1);
  },
});

Template.kanaFilter.helpers({
//<option value="{{phoneme}}">{{kana}}</option>

  selectOptions: function() {
    console.log("selectOptions");
    return Kana.find({}, {sort: {sortKey: 1}} );
  },

  //phoneme: function () {
  //  return this.find('#kana').value;
  //}

});
