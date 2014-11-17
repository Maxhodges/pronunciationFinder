Template.kanaFilter.events({
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
    return Kana.find();
  },

});
