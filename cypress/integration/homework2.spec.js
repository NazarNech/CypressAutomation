describe('Homework2', () => {

    it('Verifying the text', () => {
      cy.visit('https://allo.ua/ru/');

      cy.get('a.mh-button').eq(0).click();
      cy.get('.content__title').should('include.text', 'Адреса магазинов');
    })
  })
