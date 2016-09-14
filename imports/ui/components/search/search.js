import { Template } from 'meteor/templating';
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
  'click #newVisitor': (event, templateInstance) => {
    Session.set('currentVisitor', { noPredio: false });
  },
});
