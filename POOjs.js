
const pessoa1 = {
    nome: "verso",
    idade: 19,
    tipo: "mago"
}
const pessoa2 = {
    nome: "verus",
    idade: 19,
    tipo: "guerreiro"
}

function atacar (tipo) {
    if (tipo == "mago") {
        console.log("o " + tipo +" usou magia")
    } else if ( tipo == "guerreiro") {
        console.log("o " + tipo + " usou espada")
    } else if ( tipo == "monge") {
        console.log("o " + tipo + " usou artes marciais")
    } else if (tipo == "ninja") {
        console.log("o " + tipo + " usou shuriken")
    }
}

atacar(pessoa1.tipo)
atacar(pessoa2.tipo)

