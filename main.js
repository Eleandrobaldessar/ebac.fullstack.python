const form = document.getElementById('form-comparacao');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');

// evento de submissão ao formulário 
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // parseFloat - garantir que os valores sejam interpretados como números de ponto flutuante
    const valorCampoA = parseFloat(campoA.value);
    const valorCampoB = parseFloat(campoB.value);

    if (valorCampoA < valorCampoB) {
        // Ação para quando Campo A for menor que Campo B
        alert("Campo A deve ser maior ou igual ao Campo B. Formulário não enviado.");
    } else {
         // Ação para quando Campo A for maior ou igual a Campo B
        alert("Formulário enviado com sucesso!");
        form.submit(); // Envie o formulário se a condição for atendida.
    }
});
