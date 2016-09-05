import { Factory } from 'meteor/dburles:factory';
import faker from 'faker';
import { Visitors, Gabinetes } from '/imports/collections';

Factory.define('visitor', Visitors, {
  nome: faker.name.firstName(),
  doc: faker.random.number(),
  pic: faker.image.avatar(),
});

Factory.define('gabinete', Gabinetes, {
  procurador: faker.name.firstName(),
});
