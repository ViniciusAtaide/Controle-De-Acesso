/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
/* globals browser, server, assert */

function countList() {
  browser.waitForExist('.list-visitor');
  const elements = browser.elements('.list-visitor');
  return elements.value.lenght;
}

describe('Search component', () => {
  beforeEach(() => {
    browser.url('http://localhost:3000');
    server.call('generateFixtures');
  });

  it('Render the component with some data', () => {
    const initialCount = countList();

    assert.equal(initialCount, 0);
  });
});
