import promptSync from "prompt-sync";
import Entrada from "./entrada";


export default class EntradaData extends Entrada{
    receberEntrada(mensagem: string) {
        let prompt = promptSync();
        let texto = prompt(`${mensagem}, no padrão dd/MM/yyyy: \n`)
        let partes = texto.split('/')
        let ano = new Number(partes[2])
        let mes = new Number(partes[1])
        let dia = new Number(partes[0])
        let data = new Date(ano.valueOf(), mes.valueOf() - 1, dia.valueOf())
        return data
    }
}