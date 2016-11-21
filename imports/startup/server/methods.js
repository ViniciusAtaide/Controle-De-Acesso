/* eslint-disable object-shorthand, meteor/audit-argument-checks */

import { Meteor } from 'meteor/meteor';
import { Visitors, History } from '/imports/collections';

Meteor.methods({
  'visitors.upsert'(visitor) {  
    Visitors.update(visitor._id, visitor, {upsert: true});
  },
  'visitor.entry'(id, gabinete, motivo) {
    
    Visitors.update(id, { $set: { noPredio: true } });

    History.insert({
      nome: Visitors.findOne(id).nome,
      data: new Date(),
      motivo,
      gabinete,
      tipo: 'Entrada',
    });
  },
  'visitor.out'(id) {
    if (Visitors.findOne(id).noPredio) {
      Visitors.update(id, { $set: { noPredio: false } });

      History.insert({
        nome: Visitors.findOne(id).nome,
        data: new Date(),
        tipo: 'Saida'
      });
    }
  },
});
