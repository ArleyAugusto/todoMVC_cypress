import telaInicial from '../../support/pageObjects/tela-inicial.page'


describe('Concluir itens na lista de todo', () => {
    beforeEach(() => {
        cy.visit('/')
        var todoItens = ["Item 1", "Item 2", "Item 3"]
        todoItens.forEach(function(item, indice, array) {
            telaInicial.inputText(item)

         })
    });

    it('concluir um item da lista de toDo', () => {
       telaInicial.concluirItem()

      
    });  

});