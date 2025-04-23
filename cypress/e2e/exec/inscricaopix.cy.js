/// <reference types="cypress" />

describe('Funcionalidade: Login + inscrição', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('https://buzz.dev.inteli.edu.br/signup?src=92d8ec6585cd2d5e3e2dc45723e616eb')   
        cy.get('.MuiButton-containedPrimary').click() 
        cy.get('#username').type('aluno201@inteli.edu.br')
        cy.get('#password').type ('X*E4$6zv')
        cy.get('.sc-eKtvVk > .MuiButton-root').click()
        cy.wait(3000)
        cy.get('.sc-kSRfVL > :nth-child(2) > [role="button"]').click()
        cy.get('.css-192aw0k > .MuiButtonBase-root').click()
        cy.get('#social_name').type('Teste')
       // cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').select('opcao1')
        // cy.get('#birthdate').type('03021993')
        cy.get('#main_cellphone').type('11981402980')
        //cy.get('#postal_code').type(05301050)
        cy.wait(5000)
        cy.get('#\:r10\:').click()
       // cy.get('.sc-cHHTbD cfaomO').click({force: true})
      // cy.get('#menu-icon').click({force: true})
       //cy.get('.css-19zk75j > .MuiBox-root').click({force: true})
       //cy.get('.MuiStack-root > .MuiButtonBase-root').click({force: true})
       //cy.get(':nth-child(2) > .MuiGrid-container > .css-4ra0ak > .MuiTypography-root').should('contain', 'Notícias do dia 27/03')
    })
})



// teste 1