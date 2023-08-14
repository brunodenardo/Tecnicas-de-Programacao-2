import promptSync from "prompt-sync";
import Entrada from "./entrada"


export default class EntradaTexto extends Entrada{
    receberEntrada(mensagem:string) {
        let prompt = promptSync();
        let texto = prompt(`${mensagem}: `)
        return texto
    }
}