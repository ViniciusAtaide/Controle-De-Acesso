import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Visitors } from '/imports/collections';

import './search.html';

Session.setDefault('currentVisitor', null);

Template.search.helpers({
  result: () =>
    Visitors.find({ $and: [{
      nome: new RegExp(Session.get('search')),
    }] }, {
      limit: 10,
    }),

  currentFieldSearch: () => 'Visitante',
});

Template.search.events({
  'click .list-visitor': function selectVisitor() {
    Session.set('currentVisitor', this);
  },
  'click #newVisitor': (event, templateInstance) => {
    Session.set('currentVisitor', Object.assign({}, { noPredio: false }));
  },
});
