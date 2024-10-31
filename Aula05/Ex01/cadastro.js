const formulario = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirme = document.getElementById('confirme-senha')

function erro(elemento){
    let controle = elemento.parentElement;
    controle.className = 'controle-form errado';
}

function certo(elemento){
    let controle = elemento.parentElement;
    controle.className = 'controle-form certo';
}


formulario.addEventListener('submit', () =>{
if(nome.value === ''){
    erro(nome);
}else{
    certo(nome)
}


if(email.value === ''){
    erro(email);
}else{
    certo(email)
}


if(senha.value === ''){
    erro(senha);
}else{
    certo(senha)
}


if(confirme-senha.value === ''){
    erro(confirme-senha);
}else{
    certo(confirme-senha)
}



});