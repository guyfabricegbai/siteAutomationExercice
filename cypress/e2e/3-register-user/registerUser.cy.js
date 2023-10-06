/// <reference types="cypress" />

describe('Test Case 1: Register User', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://automationexercise.com')
    })

    it('Test Ok complet register', () => {
        cy.get('.fa.fa-home').should('be.visible')
        cy.get('[href="/login"]').click()
        cy.get('[class="signup-form"]').should('be.visible')
        cy.get('[data-qa="signup-name"]').type('GBAÏ')
        cy.get('[data-qa="signup-email"]').type('guyfabricegbai'+Math.random()+'@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.get('[class="login-form"]').should('be.visible')
        cy.get('#id_gender1').check()
        cy.get('#password').type('F225abrice')
        cy.get('#days').select('16').should('have.value', '16')
        cy.get('#months').select('August').should('have.value', '8')
        cy.get('#years').select('1985').should('have.value', '1985')
        cy.get('#newsletter').check().should('have.value', '1')
        cy.get('#optin').check().should('have.value', '1')
        cy.get('[data-qa="first_name"]').type('Guy')
        cy.get('[data-qa="last_name"]').type('Fabrice Armel')
        cy.get('[data-qa="company"]').type('CNPS')
        cy.get('[data-qa="address"]').type('Abidjan, Plateau, rue du commerce')
        cy.get('[data-qa="address2"]').type('Abidjan, Cocody, Akouedo')
        cy.get('[data-qa="country"]').select('Singapore').should('have.value', 'Singapore')
        cy.get('[data-qa="state"]').type('REGION DES LAGUNES')
        cy.get('[data-qa="city"]').type('ABIDJAN')
        cy.get('[data-qa="zipcode"]').type('75015')
        cy.get('[data-qa="mobile_number"]').type('+2250709393399')
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="account-created"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('[class="nav navbar-nav"]').should('contain', 'Logged in as')
        cy.get('[href="/delete_account"]').click()
        //cy.get('[data-qa="account-deleted"]').should('contain', 'ACCOUNT DELETED!')
        //cy.get('[data-qa="account-deleted"]').should('be.visible')
        cy.contains('Account Deleted!')
        cy.contains('Continue').should('have.class','btn btn-primary')
        cy.get('[data-qa="continue-button"]').click()

      })




})    