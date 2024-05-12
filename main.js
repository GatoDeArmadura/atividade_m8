const nome = document.getElementById('nome');
const tel = document.getElementById('telefone');
const form = document.getElementById('form');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    let linha = ''
    linha = '<tr>';
    linha += '<td>';
    linha += `${nome.value}`;
    linha += '</td>';
    linha += '<td>';
    linha += `${tel.value}`;
    linha += '</td>';
    linha += '<tr>';

    linhas += linha;
    nome.value = '';
    tel.value = '';

    document.querySelector('tbody').innerHTML = linhas;
});