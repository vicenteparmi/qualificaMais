function updateData() {

    const nome = document.getElementById('nome').value;
    const idade = getAge(document.getElementById('nasc').value);
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const end = document.getElementById('rua').value + ", " + document.getElementById('cidade').value + ", " + document.getElementById('estado').value;
    const message = document.getElementById('message').value;

    document.getElementById('fnome').innerHTML = nome;
    document.getElementById('fidade').innerHTML = ((isNaN(idade)) ? "" : idade + ' anos');
    document.getElementById('femail').innerHTML = email;
    document.getElementById('ftelefone').innerHTML = tel;
    document.getElementById('fendereco').innerHTML = end;
    document.getElementById('fmensagem').innerHTML = message;
}

// Código retirado de https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}