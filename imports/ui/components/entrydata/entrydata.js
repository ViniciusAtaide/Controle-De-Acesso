import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { Visitors } from '/imports/collections';
import { MeteorCamera } from 'meteor/mdg:camera';

import './entrydata.html';

Template.entryData.helpers({
  currentVisitor: () => 
    Session.get('currentVisitor')
});

Template.entryData.events({
  'keyup #nome': (event) => {
    const visitor = Session.get('currentVisitor');
    Session.set('currentVisitor', Object.assign(visitor, { nome: event.target.value }));
  },
  'keyup #documento': (event) => {
    const visitor = Session.get('currentVisitor');

    Session.set('currentVisitor', Object.assign(visitor, { doc: event.target.value }));
  },
  'click #takePicture': (event) => {
    event.preventDefault();
    const visitor = Session.get('currentVisitor');
    MeteorCamera.getPicture((error, data) =>
			    Session.set('currentVisitor', Object.assign(visitor, { foto: data }))
    );
  },
  'submit #entryDataForm': (event) => {
    event.preventDefault();

    Meteor.call('visitors.insert', Session.get('currentVisitor'));
  },
  'click #removeVisitor': (event, templateInstance) => {
    Session.set('currentVisitor', null);
  },
});
