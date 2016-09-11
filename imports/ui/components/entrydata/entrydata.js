import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { Visitors } from '/imports/collections';
import { MeteorCamera } from 'meteor/mdg:camera';

import './entrydata.html';

Template.entryData.helpers({
  currentVisitor: () => {
    Visitors.findOne(Session.get('currentVisitor'));
  },
  newUser: () => typeof Session.get('currentVisitor') === 'boolean',
});


Template.entryData.events({
  'keyup #nome': (event) => {
    if (Session.get('currentVisitor')) {
      Visitors.update(Session.get('currentVisitor'), { $set: { nome: event.target.value } });
    }
  },
  'keyup #documento': (event) => {
    if (Session.get('currentVisitor')) {
      Visitors.update(Session.get('currentVisitor'), { $set: { doc: event.target.value } });
p    }
  },
  'click #takePicture': (event) => {
    event.preventDefault();

    MeteorCamera.getPicture((error, data) => Visitors.update(Session.get('currentVisitor'), { $set: { foto: data } }),
    );
  },
  'submit #entryDataForm': (event) => {
    event.preventDefault();

    console.log(Session.get('currentVisitor'));
    Visitors.remove(Session.get('currentVisitor'), () => {
      Session.set('currentVisitor', null);
    });
  },
});
