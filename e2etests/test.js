/* global it, describe, browser */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// const expect = require('chai').expect;
const { expect } = require('chai');

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    // Note: webdriver.io works without npm start, localhost doesn't.
    // browser.url('http://webdriver.io/');
    // timeout: 7000000;
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('Todo List');
  });

  it('Should allow me to create a Todo', () => {
    const todoText = 'Get better at testing';
    browser.url('http://localhost:3000');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });

  it('Should allow me to delete a Todo', () => {
    const todoText = 'Get better at testing';
    browser.url('http://localhost:3000/');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    const actual = browser.element('.todo-text');

    expect(actual.state).to.equal('failure');
  });

  it('Should allow me to undelete a Todo', () => {
    const todoText = 'Get even better at testing';
    browser.url('http://localhost:3000/');
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
});
