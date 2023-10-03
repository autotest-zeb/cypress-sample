describe('Basic reporting test', () => {
  const url = 'https://www.google.com/';

  it('1. Google search should be passed', () => {
    const searchValue = 'Zebrunner';
    performGoogleSearch(searchValue);

    console.log(`Verify first search result contains search value`);
    cy.xpath("//*[@id='search']//a").should('contain.text', searchValue);
  });

  it('2. Google search should be passed', () => {
    const searchValue = 'Zebrunner';
    performGoogleSearch(searchValue);

    console.log(`Verify first search result contains search value`);
    cy.xpath("//*[@id='search']//a").should('contain.text', searchValue);
  });

  function performGoogleSearch(searchValue) {
    cy.visit(url).contains('Google');

    console.log(`Performing search with value ${searchValue}`);
    cy.xpath("//*[@name='q']").click().type(searchValue).type('{enter}');
  }
});
