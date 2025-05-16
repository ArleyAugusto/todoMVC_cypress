import telaInicial from '../../support/pageObjects/tela-inicial.page'


describe('Validar os filtros da aplicação após adição de itens', () => {
    beforeEach(() => {
        cy.visit('/')
        var todoItens = ["Item 1", "Item 2", "Item 3"]
        todoItens.forEach(function(item, indice, array) {
            telaInicial.inputText(item)
            
         })

         telaInicial.concluirItem()
    });


    /**
     * Clicar no filtro
     * o item ser exibido
     * e o contador deve bater a informação
     */
    it('Filtrar itens ativos', () => {
        telaInicial.filtrarItem("Active")
    });  

    it.skip('Filtrar itens concluídos', () => {

    }); 

});