import { TipoDocumento } from "../../enumeracoes/tipoDocumento";
import Entrada from "../entrada";
import EntradaTexto from "../entradaTexto";


export default class EntradaTipoDocumento extends Entrada {
    receberEntrada():TipoDocumento {
        let entradaTexto = new EntradaTexto
        while(true){
            let tipo = entradaTexto.receberEntrada(`
            Escolha o tipo do documento digitando o número correspondente:
            1 - CPF
            2 - RG
            3 - Passaporte
            `)
            switch(tipo){
                case "1":
                    return TipoDocumento.CPF
                case "2":
                    return TipoDocumento.RG
                case "3":
                    return TipoDocumento.Passaporte
                default:
                    console.log("Opção invalida")
            }
        }
    }
}