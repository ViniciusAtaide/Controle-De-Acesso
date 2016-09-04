import { Template } from 'meteor/templating';
import { Visitors } from '/imports/collections';
import { Session } from 'meteor/session';

import './search.html';

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
  'click #choose': function selectVisitor() {
    Session.set('currentVisitor', this._id);
  },
  'click #newVisitor': () => {
    Session.set('currentVisitor', Visitors.insert({ noPredio: false }));
  },
});
