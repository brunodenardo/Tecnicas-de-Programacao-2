import promptSync from "prompt-sync";
import Entrada from "./entrada";


export default class EntradaNumero extends Entrada {
    receberEntrada(mensagem: string):number {
        let prompt = promptSync();
        let valor = prompt(`${mensagem}: `)
        let numero = new Number(valor)
        return numero.valueOf()
    }
}