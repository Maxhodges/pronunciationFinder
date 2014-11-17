
Template.kanaFilter.events({
  'click #__findKana': function(e, t) {
    console.log("kana click");
    Session.set("phoneme", t.find('#kana').value);
    Session.set("kana", t.find("#kana option:selected").text);
    Session.get("kana");

    console.log(Session.get("phoneme"));
  },
});