/// <reference types="cypress" />

describe('Funcionalidade: Esqueceu sua senha', () => {

    beforeEach(() => {
        cy.visit('https://buzz.dev.inteli.edu.br/signup?src=92d8ec6585cd2d5e3e2dc45723e616eb')
    });

    it('Não deve conseguir fazer o reset, pois voltou', () => {
        cy.get('.MuiButton-containedPrimary').click()
        cy.get('.sc-crhfPb > :nth-child(1)').click()
        cy.get('.sc-cEEJxU > p').should('contain', 'Informe seu e-mail abaixo e, em seguida, enviaremos as instruções para redefinir sua senha.')
        cy.wait(2000)
        cy.get('.MuiButton-containedPrimary').click()

    });

    it('Não deve conseguir fazer o reset de senha por ter e-mail inválido', () => {
        cy.get('.MuiButton-containedPrimary').click()
        cy.get('.sc-crhfPb > :nth-child(1)').click()
        cy.get('.sc-cEEJxU > p').should('contain', 'Informe seu e-mail abaixo e, em seguida, enviaremos as instruções para redefinir sua senha.')
        cy.get('#email').type('larissa.tonetto')
        cy.get('.MuiButton-containedError').click()
        cy.wait(2000)
        cy.get('#errorField-helper-text').should('contain', 'E-mail inválido')
        cy.wait(2000)

    });

    it('Não deve conseguir fazer o reset de senha por ter e-mail errado', () => {
        cy.get('.MuiButton-containedPrimary').click()
        cy.get('.sc-crhfPb > :nth-child(1)').click()
        cy.get('.sc-cEEJxU > p').should('contain', 'Informe seu e-mail abaixo e, em seguida, enviaremos as instruções para redefinir sua senha.')
        cy.get('#email').type('larissa.tonett@inteli.edu.br')
        cy.get('.MuiButton-containedError').click()
        cy.wait(2000)
        cy.get('#alert-dialog-description > .MuiTypography-body1').should('contain', 'Enviaremos uma mensagem com instruções de redefinição de senha para seu e-mail dentro de instantes. Caso não receba, verifique seu e-mail de cadastro e tente novamente.')
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()

    });

    it('Não deve conseguir fazer o reset de senha, pois código está incorreto', () => {
        cy.get('.MuiButton-containedPrimary').click()
        cy.get('.sc-crhfPb > :nth-child(1)').click()
        cy.get('.sc-cEEJxU > p').should('contain', 'Informe seu e-mail abaixo e, em seguida, enviaremos as instruções para redefinir sua senha.')
        cy.get('#email').type('larissa.tone@inteli.edu.br')
        cy.get('.MuiButton-containedError').click()
        cy.get('#alert-dialog-description > .MuiTypography-body1').should('contain', 'Enviaremos uma mensagem com instruções de redefinição de senha para seu e-mail dentro de instantes. Caso não receba, verifique seu e-mail de cadastro e tente novamente.')
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
        cy.get('#code').clear().type('123456', { delay: 100 });
        cy.get('#password').type('Teste@123', { force: true });
        cy.wait(2000)
        cy.get('.MuiButton-containedError').click()
        cy.get('#alert-dialog-description > .MuiTypography-body1').should('contain', 'Código incorreto. Verifique o código em seu e-mail e tente novamente')
        cy.wait(2000)
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
        cy.get('.__title').should('contain', 'Redefinir senha')

    });


})

// teste 1