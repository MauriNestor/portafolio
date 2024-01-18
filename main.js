alert('hola a todos ')

var nombre = 'mauricio apazaaaa';
var altura = 174;

var concat = nombre + " " + altura;
document.write(concat);

var contacto = document.getElementById("contacto");
contacto.innerHTML += `
    <h1>soy ${nombre}</h1>
`;