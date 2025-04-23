/// <reference types="cypress" />

describe('Funcionalidade: Já estou inscrito - Login', () => {

    beforeEach (() => {
        cy.visit('https://buzz.dev.inteli.edu.br/signup?src=92d8ec6585cd2d5e3e2dc45723e616eb') 
    });

  //afterEach (() => {
 // cy.screenshot()
 // }); 

    it('Não deve fazer login com sucesso, pois e-mail está incorreto', () => {
           
        cy.get('.MuiButton-containedPrimary').click()
        cy.get('#username').type('aluno@inteli.edu.br')
        cy.get('#password').type ('X*E4$6zv')
        cy.get('.sc-eKtvVk > .MuiButton-root').click()
        cy.get('#alert-dialog-description > .MuiTypography-body1').should('contain', 'E-mail e/ou senha incorretos. Verifique seus dados e tente novamente')
        cy.wait(2000)
        cy.get('.MuiButtonBase-root > .MuiTypography-root').click()
      

    }),

    it('Não deve fazer login com sucesso, pois senha está incorreta', () => {
           
        cy.get('.MuiButton-containedPrimary').click()
        cy.get('#username').type('aluno201@inteli.edu.br')
        cy.get('#password').type ('X*E4$6')
        cy.get('.sc-eKtvVk > .MuiButton-root').click()
        cy.get('#alert-dialog-description > .MuiTypography-body1').should('contain', 'E-mail e/ou senha incorretos. Verifique seus dados e tente novamente')
        cy.wait(2000)
        cy.get('.MuiButtonBase-root > .MuiTypography-root').click()
      

    }),

    it('Não deve fazer login com sucesso, pois e-mail está inválido', () => {
    
        cy.get('.MuiButton-containedPrimary').click()
        cy.get('#username').type('aluno201@inteli')
        cy.get('#password').type ('X*E4$6zv')
        cy.get('.sc-eKtvVk > .MuiButton-root').click()
        cy.get('#errorField-helper-text').should('contain', 'E-mail ou CPF informado é inválido')
        cy.wait(2000)
    }),

    it('Não deve fazer login com sucesso, pois CPF está inválido', () => {
    
        cy.get('.MuiButton-containedPrimary').click()
        cy.get('#username').type('41835429888')
        cy.get('#password').type ('X*E4$6zv')
        cy.get('.sc-eKtvVk > .MuiButton-root').click()
        cy.get('#errorField-helper-text').should('contain', 'E-mail ou CPF informado é inválido')
        cy.wait(2000)
    }),

    it('Não deve fazer login com sucesso, pois campo de e-mail/cpf excede 60 caracteres', () => {
    
        cy.get('.MuiButton-containedPrimary').click()
        cy.get('#username').type('aluno123456789012345678901234567890123456789012@inteli.edu.br')
        cy.get('#password').type ('X*E4$6zv')
        cy.get('.sc-eKtvVk > .MuiButton-root').click()
        cy.get('#errorField-helper-text').should('contain', 'O campo deve ter no máximo 60 caracteres')
        cy.wait(2000)
    }),

    it.only('Validar ícone olho na senha', () => {
    
        cy.get('.MuiButton-containedPrimary').click() 
        cy.get('#username').type('aluno201@inteli.edu.br')
        cy.get('#password').type ('X*E4$6zv')
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
        cy.wait(3000)
    }),



    it('Deve fazer login com sucesso', () => {
    
        cy.get('.MuiButton-containedPrimary').click() 
        cy.get('#username').type('aluno201@inteli.edu.br')
        cy.get('#password').type ('X*E4$6zv')
        cy.get('.sc-eKtvVk > .MuiButton-root').click()
        cy.wait(10000)
    })


})


// teste 1