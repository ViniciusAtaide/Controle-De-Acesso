import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';
import { History } from '/imports/collections';
import { $ } from 'meteor/jquery';
import moment from 'moment';

import './entryreport.html';

Session.setDefault('startdate', moment().startOf('day').toDate());
Session.setDefault('enddate', moment().endOf('day').toDate());

Template.entryReport.helpers({
  history() {
    const today : Object = History.find({ data: {
      $gte: Session.get('startdate'),
      $lte: Session.get('enddate'),
    } });
    return today;
  },
});

Template.entryReport.onRendered(() => {
  $('.datetimepicker').datetimepicker({
    format: 'DD/MM/YYYY',
  }).on('dp.change', (event) => {
    Session.set('startdate', event.date.startOf('day').toDate());
    Session.set('enddate', event.date.endOf('day').toDate());
  });
});
