import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './entryhandling.html';

Template.entryHandling.events({
  'keyup #search': (event) =>
    Session.set('search', event.target.value),
});

Template.entryHandling.helpers({
  isSearching: () => {
    return !Session.equals('currentVisitor', null);
  }  
});
