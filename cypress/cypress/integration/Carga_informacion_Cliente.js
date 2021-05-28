describe('Order Page Login ', () => {

    before(() => {
        cy.visit('https://automation-wappi.vercel.app/login');
    });

    context('When the user enters the data', () => {
        before(() => {
            cy.get('#username').type('Feliangu14');
            cy.get('#password').type('Feliangu14@');
            cy.get('#button-login').click();

            it('Personal Information', () => {
                cy.get(':nth-child(4) > .nav-bar-link').click();
            });
        });

        context('Upload', () => {
            it('Order Page Login', () => {
                cy.visit('https://automation-wappi.vercel.app/profile');
                const fixtureFile = "felipe.jpg";
                const fileInputElement = "#image";
                cy.get(fileInputElement).attachFile(fixtureFile);
                cy.get('#name').type('luis felipe');
                cy.get('#lastName').type('Angulo');
                cy.get('.mydpicon').type('12/04/1993');
                cy.get('#country').type('Argentina');
                cy.get('#save-profile').click();
                cy.get('#confirmation-modal > .modal-content > .close').click();
                cy.get('.nav-bar-account > :nth-child(2) > .nav-bar-link').click();


            });
        });
    });
});