describe('Teste de navegação entre as páginas', () => {
  beforeEach(() => {
    cy.visit('https://www.ambevtech.com.br/');
    cy.viewport(1920, 1080);
  });

  it('Navega por todos os link do Header', () => {
    cy.get('ul[class="coh-menu-list-container coh-unordered-list menu-alignment-left coh-ce-36337931"] li:visible').eq(0).click()
    cy.url().should('include', '/quem-somos');
    cy.get('ul[class="coh-menu-list-container coh-unordered-list menu-alignment-left coh-ce-36337931"] li:visible').eq(1).click()
    cy.url().should('include', '/plataforma');
    cy.get('ul[class="coh-menu-list-container coh-unordered-list menu-alignment-left coh-ce-36337931"] li:visible').eq(2).click()
    cy.url().should('include', '/beneficios')
    cy.get('ul[class="coh-menu-list-container coh-unordered-list menu-alignment-left coh-ce-36337931"] li:visible').eq(3).click()
    cy.url().should('include', '/ecossistema')
    cy.get('ul[class="coh-menu-list-container coh-unordered-list menu-alignment-left coh-ce-36337931"] li:visible').eq(4).click()
    cy.url().should('include', '/publicacoes')
    });
    
  it  
  
  });

