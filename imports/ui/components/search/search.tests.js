/* eslint-env mocha browser */
/* eslint-disable func-names, prefer-arrow-callback */

import { Factory } from 'meteor/dburles:factory';
import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { $ } from 'meteor/jquery';
import { resetDatabase } from 'meteor/xolvio:cleaner';

import withRenderedTemplate from '../../helpers.test';

if (Meteor.isClient) {
  describe('Search component', () => {
    beforeEach(() => {
      resetDatabase();
    });

    it('Render the component with some data', () => {
      const visitor = Factory.create('visitor');

      withRenderedTemplate('Visitors', visitor, el => {
        chai.assert.equal($(el).find('.btn-link').val(), visitor.name);
      });
    });
  });
}
