import telaInicial from '../../support/pageObjects/tela-inicial.page'

describe('Regressivo toDo App', () => {

    /** */

    context('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        it('Validar a area label de input de dados', () => {
            telaInicial.validarInput("What needs to be done?")
        });

    });

    /** */

     context('Validar adição de itens', () => {
        beforeEach(() => {
            cy.visit('/');
        });

         it('Adicionar mais de um item a lista', () => {
                var todoItens = ["Item 1", "Item 2", "Item 3"]
                todoItens.forEach(function(item, indice, array) {
                    telaInicial.inputText(item)
                })

                telaInicial.validarContador("3 items left!")

            }); 

    });

     /** */

     context('Validar a conclusão de itens', () => {

        beforeEach(() => {
        cy.visit('/')
        var todoItens = ["Item 1", "Item 2", "Item 3"]

        todoItens.forEach(function(item, indice, array) {
            telaInicial.inputText(item)

         })
    })

      it('concluir um item da lista de toDo', () => {
           telaInicial.concluirItem()
           
           telaInicial.validarContador("2 items left!") 

        });  

    });

     /** */

     context('Validar o filtro da aplicação', () => {
        beforeEach(() => {
                cy.visit('/')
                var todoItens = ["Item 1", "Item 2", "Item 3"]
                todoItens.forEach(function(item, indice, array) {
                    telaInicial.inputText(item)
                    
                 })
        
                 telaInicial.concluirItem()
            })
        
        it('Validar a lista de itens ativos', () => {
            telaInicial.filtrarItem("Active")
            telaInicial.validarSizeToDo(2)

        });

        it('Validar a lista de concluídos', () => {
            telaInicial.filtrarItem("Completed")
            telaInicial.validarSizeToDo(1)

        });

    })

    /** */
    
     context('Validar a remoção de itens', () => {
        
        beforeEach(() => {
        cy.visit('/')
        var todoItens = ["Item 1", "Item 2", "Item 3"]
        todoItens.forEach(function(item, indice, array) {
            telaInicial.inputText(item)
         })
    });


      it('Deleção de um item da lista', () => {
        telaInicial.deletarItem()
        telaInicial.validarSizeToDo(2)
    }); 

    });

});