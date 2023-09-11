const vagas = [];

function listarVaga() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
        textoFinal += indice + '.'
        textoFinal += vaga.nome
        textoFinal += ' (' + vaga.candidatos.length + 'candidato)\n'
        return textoFinal;
    }, '')
    
    alert(vagasEmTexto)
};

function novaVaga() {
    const nome = prompt('Informe um nome para a vaga: ');
    const descricao = prompt('Informe um descrição para a vaga: ');
    const dataLimite = prompt('Informe um data limite (dd/mm/aaaa) para a vaga: ');

    const confirmacao = confirm(
        'Deseja criar uma nova vaga com essas informações?\n' + 
        'Nome: ' + nome + '\nDescrição: ' + descricao + '\nData Limite: ' + dataLimite
    )
    if(confirmacao){
        const novaVaga = {nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert('Vaga criada!')
    };
};

function exibirVaga() {
    const indice = prompt('Informe o índice da vaga que deseja exibir: ');
    const vaga = vagas[indice];

    const candidatosEmtexto = vaga.candidatos.reduce((textoFinal, candidato) =>  textoFinal + '\n - ' + candidato, '');
    alert(
        'Vaga nº ' + indice +
        '\nNome: ' + vaga.nome + 
        '\nDescrição:'+ vaga.descricao  +
        '\nData Limite: '+ vaga.dataLimite +
        '\nQuantidade de candidatos: '+ vaga.candidatos.length + 
        '\nCandidatos inscritos: ' + candidatosEmtexto
    )
    
};

function inscreverCandidato() {
    const candidato = prompt('Informe o nome do(a) candidato(a): ')
    const indice = prompt('Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever: ')
    const vaga = vagas[indice]

    const confirmacao = confirm(
        'Deseja inscrever o candidato ' + candidato + 'na vaga' + indice + '?\n' +
        'Nome: ' + vaga.nome + '\nDescrição: ' + vaga.descricao + '\nData Limite: ' + vaga.dataLimite
    )    
    if(confirmacao){
        vaga.candidatos.push(candidato)
        alert('Inscrição realizada')
    }
};

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que você quer remover");
    const vaga = vagas[indice]

    const confirmacao = confirm(
        'Tem certeza que deseja excluir a vaga ' + indice + '?\n' +
        'Nome: ' + vaga.nome + '\nDescrição: ' + vaga.descricao + '\nData Limite: ' + vaga.dataLimite
    )
    if(confirmacao) {
        vagas.splice(indice,1);
        alert('Vaga excluída')
    }
    
};

function exibirMenu() {
    const opcao = prompt(
        'Cadastro de Vagas de Emprego' +
        '\n\nEscolha um das opções: ' +
        '\n1. Listar vagas disponíveis' +
        '\n2. Criar uma nova vaga' + 
        '\n3. Visualizar uma vaga' +
        '\n4. Inscrever um(a) candidato(a)' +
        '\n5. Excluir vaga' +
        'n/6. Sair'
    )
    return opcao   
};

function excecultar() {
    let opcao = ''

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case '1':
                listarVaga()
                break;
            case '2':
                novaVaga()
                break;
            case '3':
                exibirVaga()
                break;
            case '4':
                inscreverCandidato()
                break;
            case '5':
                excluirVaga()
                break;
            case '6':
                alert('Saindo...')
                break;
            default:
                alert('Opção Inválida')
                break;
        }
        
    } while (opcao !== '6');
    
}

excecultar()