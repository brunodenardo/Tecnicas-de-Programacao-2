import Telefone from "../modelos/telefone";
import Entrada from "./entrada";
import EntradaTexto from "./entradaTexto";


export default class EntradaTelefones extends Entrada{
    receberEntrada():Telefone[] {
        let entradaTexto = new EntradaTexto
        let telefones:Telefone[]
        telefones = []
        while(true){
            let telefoneEntrando = new Telefone
            telefoneEntrando.ddd = entradaTexto.receberEntrada("Insira o ddd:\n")
            telefoneEntrando.numero = entradaTexto.receberEntrada("Insira o número de telefone:\n")
            telefones.push(telefoneEntrando)

            let continuar = entradaTexto.receberEntrada("Deseja cadastrar mais um telefone (responda com sim ou nao):\n")
            if(continuar === 'nao'){
                break;
            }
        }
        return telefones
    }
}