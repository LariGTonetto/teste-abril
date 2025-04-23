/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {

    beforeEach (() => {
        cy.visit('https://buzz.dev.inteli.edu.br/signup?src=92d8ec6585cd2d5e3e2dc45723e616eb') 
    });

  //  afterEach (() => {
  //      cy.screenshot()
  //  }); 

    it('Deve fazer login sem sucesso devido senha ou e-mail incorretos', () => {
           
        cy.get('.MuiButton-containedPrimary').click()
        cy.get('#username').type('aluno201@inteli.edu.br')
        cy.get('#password').type ('X*E4$6')
        cy.get('.sc-eKtvVk > .MuiButton-root').click()

        cy.get('#alert-dialog-description > .MuiTypography-body1').should('contain', 'E-mail e/ou senha incorretos. Verifique seus dados e tente novamente')
        cy.wait(5000)
        cy.get('.MuiButtonBase-root > .MuiTypography-root').click()
      

    }),

    it.only('Deve fazer login com sucesso', () => {
    
        cy.get('.MuiButton-containedPrimary').click() 
        cy.get('#username').type('aluno201@inteli.edu.br')
        cy.get('#password').type ('X*E4$6zv')
        cy.get('.sc-eKtvVk > .MuiButton-root').click()
        cy.wait(10000)
        
        //cy.get('.MuiBox-root > .MuiTypography-h4').should('be.visible', { timeout: 10000 }).and('contain', 'Vamos começar?');
        //cy.wait(5000)
        //cy.get('.MuiBox-root > .MuiTypography-h4').should('contain', 'Vamos começar?')

       // cy.get('.sc-nZgfj > .MuiBox-root > :nth-child(1)').should('be.visible', { timeout: 10000 }).and('have.text', 'Olá')
    
    })
})


// teste 1