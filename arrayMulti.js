/* Descricao: HTML 1 input(nome) e 5 checkbox[matematica, portugues, ingles, biologia, historia].  Ao clicar no botão salvar vai gerar um objeto com os dados inseridos pelo usuário e salvar no Array. */


//array alunos
let alunos = []


function salvarDados() {
    //atribuindo valor as variaveis a partir dos inputs do html
    let aluno = {}
    let materiasSelecionadas = []
    aluno.materiasSelecionadas = materiasSelecionadas
    aluno.nome = document.getElementById("nomeAluno").value

    //pegando as materias selecionadas 
    let materiasChecked = document.querySelectorAll('input[type=checkbox]:checked')
    for (i = 0; i < materiasChecked.length; i++) {
        materiasSelecionadas.push(materiasChecked[i].value)
    }

    //atualizando o array alunos
    alunos.push(aluno)

    //verificacao da atualizacao de dados no console
    console.log("alunos", alunos)
    console.log("aluno", aluno)

}

//funcao para limpar o campo `nome`
function limparNome() {
    document.getElementById("nomeAluno").value = ""
}