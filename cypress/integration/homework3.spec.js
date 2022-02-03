describe('Homework3', () => {

    it('Verify filter', () => {
      cy.visit('https://allo.ua/ru/');

      cy.get('[id=search-form__input]').type('xiaomi');
      cy.get('.search-form__submit-button').click();

      cy.get('div[data-product-id]')
            .should('have.length', 28); 

      cy.get('[id=filter_cat_id-48]').click();
      cy.get('.filter-popup__button').click();

      cy.get('a.active-filter')
            .should('include.text', 'Смартфоны и мобильные телефоны');
    });
  });
