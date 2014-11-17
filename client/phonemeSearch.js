Template.phonemeSearch.events({
  'click #__findByPhoneme': function(e, t) {
    console.log("phoneme click");
    Session.set("phoneme", t.find('#__phoneme').value);
  },
});