/* eslint-env browser */

import { Router } from 'meteor/iron:router';
import '../ui/layouts';
import '../ui/pages';
import '../ui/components';

Router.configure({
  layoutTemplate: 'layout',
});

Router.onBeforeAction(function addTitle() {
  document.title = 'Procuradoria Da República do Estado da Paraíba';
  const link = document.createElement('link');

  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'images/favicon-96x96.png';
  document.getElementsByTagName('head')[0].appendChild(link);
  this.next();
});

Router.route('entryHandling', { path: '/' });
Router.route('entryReport', { path: 'visitantes' });
