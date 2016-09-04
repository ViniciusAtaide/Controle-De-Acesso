import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';

import './nav.html';
import './nav.css';

Template.nav.helpers({
  activeIfPathIs: (route) => {
    const currentRoute = Router.current().route.path(this);
    return currentRoute && route === currentRoute ? 'active' : '';
  },
});
