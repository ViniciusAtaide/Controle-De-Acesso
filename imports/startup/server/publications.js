import { Meteor } from 'meteor/meteor';
import { Visitors, Gabinetes, History } from '/imports/collections';

Meteor.publish('visitors', () => Visitors.find());
Meteor.publish('gabinetes', () => Gabinetes.find());
Meteor.publish('history', () => History.find());
