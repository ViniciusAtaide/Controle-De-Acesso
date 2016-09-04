import { Mongo } from 'meteor/mongo';

export const Visitors = new Mongo.Collection('visitors');
export const Gabinetes = new Mongo.Collection('gabinetes');
export const History = new Mongo.Collection('history');
