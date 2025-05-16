import { FILTROS } from '../elements/tela-inicial.elements'

const elem = require('../elements/tela-inicial.elements').ELEMENTS
const concluirItem = require('../elements/tela-inicial.elements').ITENS
const filtroItem = require('../elements/tela-inicial.elements').FILTROS

class telaInicial{

    inputText(dado){
        cy.get(elem.inputTodo).type(dado).type('{enter}')

    }

    validarInput(texto){
        cy.get(elem.inputTodo)
        .should('have.attr', 'placeholder')
        .and('include', texto)
    }

    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        .first()
        .click()
    }

    filtrarItem(menu){
        cy.get(filtroItem.filtroTodo)
        .contains(menu)
        .and('be.visible')
        .click()
    }

    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .click()
    }

    validarSizeToDo(numero){
        cy.get(concluirItem.validarListaItens)
        .should('have.length', numero)
    }

    validarContador(numero){
        cy.get(filtroItem.contador)
        .contains(numero)
    }
}

export default new telaInicial();