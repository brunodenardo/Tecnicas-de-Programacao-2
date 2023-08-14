import Endereco from "../modelos/endereco";
import Entrada from "./entrada";
import EntradaNumero from "./entradaNumero";
import EntradaTexto from "./entradaTexto";


export default class EntradaEndereco extends Entrada{
    receberEntrada():Endereco {
        let endereco = new Endereco
        let entradaTexto = new EntradaTexto
        let entradaNumero = new EntradaNumero
        endereco.pais = entradaTexto.receberEntrada("Insira o país do endereço:\n")
        endereco.rua = entradaTexto.receberEntrada("Insira a rua:\n")
        endereco.bairro = entradaTexto.receberEntrada("Insira o bairro:\n")
        endereco.cidade = entradaTexto.receberEntrada("Insira a cidade:\n")
        endereco.estado = entradaTexto.receberEntrada("Insira o estado:\n")
        endereco.codigoPostal = entradaTexto.receberEntrada("Insira o código postal:\n")
        return endereco
    }
}