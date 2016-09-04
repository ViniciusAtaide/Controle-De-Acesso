import { Gabinetes } from '/imports/collections';


if (Gabinetes.find({}).fetch().length === 0) {
  Gabinetes.insert({ procurador: 'José Neto' });
  Gabinetes.insert({ procurador: 'Yordan Batista' });
  Gabinetes.insert({ procurador: 'José Godoy' });
}
