import EntradaData from "../entradas/entradaData";
import EntradaDocumento from "../entradas/entradaDocumento/entradaDocumento";
import EntradaEndereco from "../entradas/entradaEndereco";
import EntradaTelefones from "../entradas/entradaTelefone";
import EntradaTexto from "../entradas/entradaTexto";
import Cliente from "../modelos/cliente";

import Cadastro from "./cadastro"
import CadastroDependentes from "./cadastroDependentes";

export default class CadastroCliente extends Cadastro{
    cadastrar():Cliente {
        let cliente = new Cliente
        let entradaTexto = new EntradaTexto
        let entradaData = new EntradaData
        let entradaEndereco = new EntradaEndereco
        let entradaDocumento = new EntradaDocumento
        let entradaTelefones = new EntradaTelefones
        let cadastroDependentes = new CadastroDependentes

        cliente.nome = entradaTexto.receberEntrada("Insira o nome do cliente:\n")
        cliente.nomeSocial = entradaTexto.receberEntrada("Insira o nome social, se houver:\n")
        cliente.dataNascimento = entradaData.receberEntrada("Insira a data de nascimento")
        cliente.dataCadastro = entradaData.receberEntrada("Insira a data de cadastro")
        cliente.documentos = entradaDocumento.receberEntrada()
        
        cliente.endereco = entradaEndereco.receberEntrada()
        cliente.telefones = entradaTelefones.receberEntrada()
        cliente.dependentes = cadastroDependentes.cadastrar(cliente)
        
        return cliente
    }
}