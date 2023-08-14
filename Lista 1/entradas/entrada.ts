import promptSync from "prompt-sync";
import Documento from "../modelos/documento";
import { TipoDocumento } from "../enumeracoes/tipoDocumento";

export default abstract class Entrada {
    abstract receberEntrada(mensagem?:string):any
}


class adad {
    public receberNumero(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(`${mensagem}: `)
        let numero = new Number(valor)
        return numero.valueOf()
    }
    public receberTexto(mensagem: string): string {
        let prompt = promptSync();
        let texto = prompt(`${mensagem}: `)
        return texto
    }
    public receberData(mensagem: string): Date {
        let prompt = promptSync();
        let texto = prompt(`${mensagem}, no padrão dd/MM/yyyy: `)
        let partes = texto.split('/')
        let ano = new Number(partes[2])
        let mes = new Number(partes[1])
        let dia = new Number(partes[0])
        let data = new Date(ano.valueOf(), mes.valueOf() - 1, dia.valueOf())
        return data
    }
    public receberTipoDocumento(): TipoDocumento {
        let documento:TipoDocumento
        while(!documento){
            let tipo = prompt(`
            Escolha o tipo do documento digitando o número correspondente:
            1 - CPF
            2 - RG
            3 - Passaporte
            `)
            switch(tipo){
                case "1":
                    documento = TipoDocumento.CPF;
                    break;
                case "2":
                    documento = TipoDocumento.RG;
                    break;
                case "3":
                    documento = TipoDocumento.Passaporte;
                    break;
                default:
                    console.log("Opção invalida")
            }
        }
        return documento
    }
}