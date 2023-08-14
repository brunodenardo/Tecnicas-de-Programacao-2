
import CadastroCliente from "../cadastro/cadastroClienteTitular";
import EntradaTexto from "../entradas/entradaTexto";


let entradaTexto = new EntradaTexto
let cadastrarCliente = new CadastroCliente
let execucao = true

while(execucao){
    let opcao = entradaTexto.receberEntrada(`
    Escolha uma opção:
    1 - Cadastrar Cliente
    2 - Sair
    `)
    switch(opcao){
        case '1':{
            let cliente = cadastrarCliente.cadastrar()
            console.dir(cliente, { depth: null })
            break;
        }
        case '2':{
            execucao = false
            console.log("Até a próxima.")
            break;
        }
        default:{
            console.log("Opção invalida.")
        }
    }

}