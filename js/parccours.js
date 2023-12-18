 document.addEventListener('DOMContentLoaded', function() {
    var ar = document.querySelector('#arb');
    var fr = document.querySelector('#fra');
    var en = document.querySelector('#eng');
    ar.addEventListener('click', function() {
    var par = document.getElementById('para');
    par.textContent = "My favorite language ";});
    fr.addEventListener('click', function() {
    var parg = document.getElementById('parag');
    parg.textContent = "I do not master this language well." ;
    });
   en.addEventListener('click', function() {
   var pargh = document.getElementById('paragh');
    pargh.textContent = "I am fluent in this language";
  });
          
});