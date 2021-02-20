describe("Pizza Form", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    const name = () => cy.get('[data-cy=name]');
    const size = () => cy.get('[data-cy=size]');
    const pepperoni = () => cy.get('[data-cy=pepperoni]');
    const pineapple = () => cy.get('[data-cy=pineapple]');
    const submitBtn = () => cy.get('[data-cy=submit]')

    it("Can fill out name", () => {
        name()
            .type('Kristin Vaughn')
            .should('have.value', 'Kristin Vaughn');
    })

    it("Can select size", () => {
        size()
            .select('medium')
            .should('have.value', 'medium');
    })

    it("Can select multiple toppings", () => {
        pepperoni()
            .check()
            .should('be.checked');
        pineapple()   
            .check()
            .should('be.checked');
    })

    it("Can submit form", () => {
        name()
            .type('Kristin Vaughn');
        size()
            .select('medium');
        pepperoni()
            .check();
        submitBtn()
            .click();
    })
})