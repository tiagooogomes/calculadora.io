var botaoSomar = document.querySelector("#botaoSomar");
var botaoMultiplocar = document.querySelector("#botaoMultiplicar");
var botaoDividir = document.querySelector("#botaoDividir");
var botaoSubtrair = document.querySelector("#botaoSubtrair");




botaoSomar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#formulario");

    var campo1 = parseInt(form.campo1.value);
    var campo2 = parseInt(form.campo2.value);

    var resultadoSomar = campo1 + campo2;
    
    resultado.innerHTML = resultadoSomar;

});


botaoMultiplocar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#formulario");

    var campo1 = form.campo1.value;
    var campo2 = form.campo2.value;

    var resultadoMultiplicar = campo1 * campo2;
    
    resultado.innerHTML = resultadoMultiplicar;

});

botaoDividir.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#formulario");

    var campo1 = form.campo1.value;
    var campo2 = form.campo2.value;

    var resultadoDividir = campo1 / campo2;
    
    resultado.innerHTML = resultadoDividir;

});

botaoSubtrair.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#formulario");

    var campo1 = form.campo1.value;
    var campo2 = form.campo2.value;

    var resultadoSubtrair = campo1 - campo2;
    
    resultado.innerHTML = resultadoSubtrair;

});

