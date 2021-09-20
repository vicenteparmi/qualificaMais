// Função para atualizar o final do formulário de contato com as informações
// fornecidas pelo usuário.
function updateData() {

    // Recebe os dados de todos os campos do formulário e os formada de forma adequada.
    const nome = document.getElementById('nome').value;
    const idade = getAge(document.getElementById('nasc').value);
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const end = document.getElementById('rua').value + ", " + document.getElementById('cidade').value + ", " + document.getElementById('estado').value;
    const message = document.getElementById('message').value;

    // Coloca os valores no final do formulário.
    document.getElementById('fnome').innerHTML = nome;
    document.getElementById('fidade').innerHTML = ((isNaN(idade)) ? "" : idade + ' anos'); // Coloca a idade caso o cálculo tenha dado certo
    document.getElementById('femail').innerHTML = email;
    document.getElementById('ftelefone').innerHTML = tel;
    document.getElementById('fendereco').innerHTML = end;
    document.getElementById('fmensagem').innerHTML = message;
}

// Código retirado de https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
// Calcula a idade do usuário a partir da data fornecida.
function getAge(dateString) {
    var today = new Date(); // Recebe a data de hoje.
    var birthDate = new Date(dateString); // Transforma a data fornecida em um objeto.
    var age = today.getFullYear() - birthDate.getFullYear(); // Calcula os anos.
    var m = today.getMonth() - birthDate.getMonth(); // Calcula os meses.
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { // Confere se já fez aniversário.
        age--;
    }
    return age; // Devolve o valor para a função solicitada.
}