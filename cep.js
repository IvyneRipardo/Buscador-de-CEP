
function buscarCep(event) {

    event.preventDefault() //não recarregar

    const cep = document.getElementById("num_cep").value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url)
        .then(response => response.json())
        .then(data => {
                document.getElementById("cidade").innerText = "Cidade: " + data.localidade;
                document.getElementById("bairro").innerText = "Bairro: " + data.bairro;
                document.getElementById("rua").innerText = "Rua: " + data.logradouro;
        })
        .catch(error => {
            console.error("Erro:", error);
            document.getElementById("cidade").innerText = "Erro ao buscar CEP.";
        });

}