import Documento from "../../modelos/documento";
import Entrada from "../entrada"
import EntradaData from "../entradaData";
import EntradaTexto from "../entradaTexto";
import EntradaTipoDocumento from "./entradaTipoDocumento";
import { TipoDocumento } from "../../enumeracoes/tipoDocumento";


export default class EntradaDocumento extends Entrada {
    receberEntrada():Documento[] {

        let documento:Documento[]
        documento = []
        let entradaTexto = new EntradaTexto

        let entradaTipoDocumento = new EntradaTipoDocumento
        let entradaData = new EntradaData

        while(true){
            let documentoEntrando = new Documento
            documentoEntrando.tipo = entradaTipoDocumento.receberEntrada()
            documentoEntrando.numero = entradaTexto.receberEntrada(`Insira o número do ${documentoEntrando.tipo}:\n`)
            documentoEntrando.dataExpedicao = entradaData.receberEntrada(`Insira a data de expedição do ${documentoEntrando.tipo}`)
            documento.push(documentoEntrando)
            let continuar = entradaTexto.receberEntrada("Deseja cadastrar mais documentos (responda com sim ou nao):\n")
            if(continuar === "nao"){
                break;
            }
        }
        
        return documento
    }
}