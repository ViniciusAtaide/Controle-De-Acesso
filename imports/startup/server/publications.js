/* eslint-disable func-names, prefer-arrow-callback */


import { Meteor } from 'meteor/meteor';
import { Visitors } from '/imports/collections';

Meteor.publish('visitors', function () {
  return Visitors.find({});
});
