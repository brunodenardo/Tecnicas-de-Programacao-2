import EntradaData from "../entradas/entradaData";
import EntradaDocumento from "../entradas/entradaDocumento/entradaDocumento";
import EntradaTexto from "../entradas/entradaTexto";
import ClonarTelefone from "../funções/clonarTelefones";
import Cliente from "../modelos/cliente";
import Cadastro from "./cadastro";


export default class CadastroDependentes extends Cadastro{
    cadastrar(titular:Cliente):Cliente[] {
        let entradaTexto = new EntradaTexto
        let entradaData = new EntradaData
        let clonarTelefone = new ClonarTelefone
        let entradaDocumento = new EntradaDocumento

        let dependentes:Cliente[] = []
        let haDependentes = entradaTexto.receberEntrada("Há dependentes? (responda sim ou nao)\n")
        if(haDependentes === 'sim'){
            while(true){
                let dependenteCadastrando:Cliente = new Cliente
                dependenteCadastrando.nome = entradaTexto.receberEntrada("Inserir nome do dependente:\n")
                dependenteCadastrando.nomeSocial = entradaTexto.receberEntrada("Inserir nome social do dependente, se houver:\n")
                dependenteCadastrando.dataCadastro = entradaData.receberEntrada("Insira a data de cadastro do dependente")
                dependenteCadastrando.dataNascimento = entradaData.receberEntrada("Insira data de nascimento do dependente")
                
                dependenteCadastrando.documentos = entradaDocumento.receberEntrada()
                dependenteCadastrando.endereco = titular.endereco.clonar()
                dependenteCadastrando.telefones = clonarTelefone.clonar(titular)
                dependenteCadastrando.titular = titular

                dependentes.push(dependenteCadastrando)

                let continuar = entradaTexto.receberEntrada("Cadastrar mais dependentes? (responda sim ou nao\n")
                if(continuar === 'nao'){break;}
            }   
        }
        return dependentes
    }
}