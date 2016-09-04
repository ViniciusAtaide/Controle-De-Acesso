import { Factory } from 'meteor/dburles:factory';
import faker from 'meteor/practicalmeteor:faker';
import { Visitors, Gabinetes } from './';

Factory.define('visitor', Visitors, {
  nome: faker.name(),
  doc: faker.number(),
  pic: faker.image.avatar(),
});

Factory.define('gabinete', Gabinetes, {
  procurador: faker.name(),
});
