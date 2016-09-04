/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Factory } from 'meteor/dburles:factory';
import { chai } from 'meteor/practicalmeteor:chai';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import withRenderedTemplate from '../../test-helpers.js';
import './search.js';

describe('Search component', function () {
  beforeEach(() => {
    Template.registerHelper('_', key => key);
  });

  afterEach(() => {
    Template.deregisterHelper('_');
  });

  it('Render the component with some data', () => {
    const visitor = Factory.create('visitor');

    withRenderedTemplate('Visitors', visitor, el => {
      chai.assert.equal($(el).find('.btn-link').val(), visitor.name);
    });
  });
});
