const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
        .then(resposta => {
            return resposta.json()
        })
}

const criaCliente = () => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.Stringfy({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            return resposta.body
        })

}

export const clienteService = {
    listaClientes,
    criaCliente
}