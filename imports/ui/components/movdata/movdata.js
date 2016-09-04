import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Gabinetes, Visitors, History } from '/imports/collections';

import './movdata.css';
import './movdata.html';

Template.movData.helpers({

  gabinetes: () => Gabinetes.find(),
  user: () => Visitors.findOne(Session.get('currentVisitor')) &&
              (Visitors.findOne(Session.get('currentVisitor')).nome &&
               Visitors.findOne(Session.get('currentVisitor')).doc &&
               Visitors.findOne(Session.get('currentVisitor')).foto),
  noPredio: () => {
    if (Visitors.findOne(Session.get('currentVisitor')) !== undefined) {
      return Visitors.findOne(Session.get('currentVisitor')).noPredio;
    } return null;
  },

  history() {
    const today = History.find({ data: {
      $gte: Session.get('startdate'),
      $lte: Session.get('enddate'),
    },
    });
    return today;
  },
});

Template.movData.events({
  'submit #movData': function movData(event, templateInstance) {
    const visitor = Visitors.findOne(Session.get('currentVisitor'));
    const currentDate = new Date();
    const gabinete = Gabinetes.findOne(this._id);

    event.preventDefault();

    if (!visitor.noPredio) {
      Visitors.update(visitor._id, { $set: { noPredio: true } });

      History.insert({
        nome: visitor.nome,
        data: currentDate,
        motivo: templateInstance.find('#motivo').value,
        gabinete,
        tipo: 'Entrada',
      });
    } else {
      Visitors.update(visitor._id, { $set: { noPredio: false } });

      History.insert({
        nome: visitor.nome,
        data: currentDate,
        gabinete,
        tipo: 'Saida',
      });
    }
  },
});
