import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Gabinetes, History } from '/imports/collections';
import { Meteor } from 'meteor/meteor';

import './movdata.css';
import './movdata.html';

Template.movData.helpers({

  gabinetes: () => Gabinetes.find(),

  user: () => Session.get('currentVisitor'),

  history: () => History.find({ data: {
    $gte: Session.get('startdate'),
    $lte: Session.get('enddate'),
  } }),
});

Template.movData.events({
  'submit #movData': function movData(event, templateInstance) {
    event.preventDefault();

    const gabineteId = templateInstance.find("#gabinete").value;
    const visitor = Session.get('currentVisitor');
    const gabinete = Gabinetes.findOne(gabineteId);
    const motivo = templateInstance.find('#motivo').value;

    Meteor.call('visitor.update', visitor._id, gabinete, motivo);
  },
});
