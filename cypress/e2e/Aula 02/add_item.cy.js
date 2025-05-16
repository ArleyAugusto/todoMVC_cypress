import telaInicial from '../../support/pageObjects/tela-inicial.page'


describe('Adiconar itens na lista toDo', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Adicionar um item na lista', () => {
        telaInicial.inputText("dado1")

      })

    it('Adicionar mais de um item a lista', () => {
        var todoItens = ["Item 1", "Item 2", "Item 3"]
        todoItens.forEach(function(item, indice, array) {
            telaInicial.inputText(item)
        })
    });  

});