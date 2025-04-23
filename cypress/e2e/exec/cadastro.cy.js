/// <reference types="cypress" />

describe('Funcionalidade: Cadastro', () => {

    beforeEach (() => {
           cy.visit('https://buzz.dev.inteli.edu.br/signup?src=92d8ec6585cd2d5e3e2dc45723e616eb') 
     });
    
      //  afterEach (() => {
      //      cy.screenshot()
      //  }); 
    
        it('Deve fazer cadastro sem sucesso devido cpf já ser cadastrado', () => {
            
            cy.get('#cpf').type('41835429874')
            cy.get('.sc-kDrquE > .MuiButtonBase-root').click()
            cy.get('.css-j4dtiq').should('contain', 'CPF já cadastrado em nossa plataforma e vinculado ao e-mail')
            cy.wait(3000)
            cy.get('.MuiButtonBase-root').click()
            cy.wait(3000)
        }),
    
        it('Deve fazer cadastro sem sucesso por usar e-mails diferentes', () => {
            cy.get('#cpf').type('84021220003')
            cy.get('.sc-kDrquE > .MuiButtonBase-root').click()
            cy.get('#fullName').type('Teste da Larissa 1')
            cy.get('#email').type('testedalarissa@yopmail.com')
            cy.get('#confirmEmail').type('testedalarissa@yopmail.com.br')
            cy.get('#password').type('Teste@123')
            cy.get('#confirmPassword').type('Teste@123')
            cy.get('.PrivateSwitchBase-input').check()
            cy.get('.sc-eKtvVk > .MuiButton-root').click()
            cy.wait(3000)
            cy.get('#errorField-helper-text').should('contain', 'Os e-mails estão diferentes')
            cy.wait(3000)
        
           }),
    
           it('Deve fazer cadastro sem sucesso por usar e-senhas diferentes', () => {
            cy.get('#cpf').type('84021220003')
            cy.get('.sc-kDrquE > .MuiButtonBase-root').click()
            cy.get('#fullName').type('Teste da Larissa 1')
            cy.get('#email').type('testedalarissa@yopmail.com')
            cy.get('#confirmEmail').type('testedalarissa@yopmail.com')
            cy.get('#password').type('Teste@123')
            cy.get('#confirmPassword').type('Teste@1234')
            cy.get('.PrivateSwitchBase-input').check()
            cy.get('.sc-eKtvVk > .MuiButton-root').click()
            cy.wait(3000)
            cy.get(':nth-child(6) > #errorField-helper-text').should('contain', 'As senhas estão diferentes')
            cy.wait(3000)
        
           }),
    
           it('Deve fazer cadastro sem sucesso por não confirmar os termos', () => {
            cy.get('#cpf').type('84021220003')
            cy.get('.sc-kDrquE > .MuiButtonBase-root').click()
            cy.get('#fullName').type('Teste da Larissa 1')
            cy.get('#email').type('testedalarissa@yopmail.com')
            cy.get('#confirmEmail').type('testedalarissa@yopmail.com.br')
            cy.get('#password').type('Teste@123')
            cy.get('#confirmPassword').type('Teste@123')
            cy.wait(3000)
            cy.get('.sc-eKtvVk > .MuiButton-root').click() // ver como faz com botão desabilitado para fazer a confirmação que o teste deu certo.
                
           }),
    
       it('Deve fazer cadastro com sucesso', () => {
        cy.get('#cpf').type('84021220003')
        cy.get('.sc-kDrquE > .MuiButtonBase-root').click()
        cy.get('#fullName').type('Teste da Larissa 1')
        cy.get('#email').type('testedalarissa@yopmail.com')
        cy.get('#confirmEmail').type('testedalarissa@yopmail.com')
        cy.get('#password').type('Teste@123')
        cy.get('#confirmPassword').type('Teste@123')
        cy.get('.PrivateSwitchBase-input').check()
        cy.wait(3000)
    
       })
    
    })
    
    
// teste 1