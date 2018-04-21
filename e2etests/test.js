/* global it, describe, browser, beforeEach */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// const expect = require('chai').expect;
const { expect } = require('chai');

// Note: for these tests to run on localhost, first make sure to run npm run start!!
describe('TodoList App', () => {
  const todoText = 'Get better at testing';
  beforeEach(() => {
    browser.url('http://localhost:3000/');
  });

  it('Should load with the right title', () => {
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('Todo List');
  });

  it('Should allow me to create a Todo', () => {
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });

  it('Should allow me to delete a Todo', () => {
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    const actual = browser.element('.todo-text');

    expect(actual.state).to.equal('failure');
  });

  it('Should allow me to undelete a Todo', () => {
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    browser.click('.todo-undelete');

    // Note: this one doesn't work, it gets a state undefined...
    // const actual = browser.element('.todo-text');
    // expect(actual.state).to.equal('success');

    const actual = browser.element('.todo-text').getText();
    expect(actual).to.equal(todoText);
  });

  /*
  it('Should disable the Add Todo button when no text is entered', () => {
    expect(browser.isEnabled('.todo-submit')).to.equal(false);
  });

  it('Should enable the Add Todo button when text is entered', () => {
    browser.element('.todo-input').setValue(todoText);
    expect(browser.isEnabled('.todo-submit')).to.equal(true);
  });
*/
  it('Should enable the Undelete button when there is a deleted todo', () => {
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    expect(browser.isEnabled('.todo-undelete')).to.equal(true);
  });
});
