import { Template } from 'meteor/templating';
import { Visitors } from '/imports/collections';
import { Session } from 'meteor/session';

import './rightside.html';

Template.rightSide.helpers({
  inBuilding: () => Visitors.find({ noPredio: true }),
});

Template.rightSide.events({
  'click #select': function selectVisitor() {
    Session.set('currentVisitor', this._id);
  },
});
