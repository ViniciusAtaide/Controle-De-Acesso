import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Gabinetes, History } from '/imports/collections';
import { Meteor } from 'meteor/meteor';

import './movdata.css';
import './movdata.html';

Template.movData.helpers({

  gabinetes: () => Gabinetes.find(),

  currentVisitor: () => Session.get('currentVisitor'),

  history: () => History.find({ data: {
    $gte: Session.get('startdate'),
    $lte: Session.get('enddate'),
  } }),
});

Template.movData.events({
  'submit #movData': function movData(event, templateInstance) {
    debugger;
    event.preventDefault();
    const visitor = Session.get('currentVisitor');    

    if (templateInstance.find('#gabinete')) {
      const gabineteId = templateInstance.find("#gabinete").value;
      const gabinete = Gabinetes.findOne(gabineteId);
      const motivo = templateInstance.find('#motivo').value;
    }

    if (!visitor.noPredio)
      Meteor.call('visitor.entry', visitor._id, gabinete, motivo);
    else
      Meteor.call('visitor.out', visitor._id);
  },
});
