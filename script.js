const images = [
    "./img/pastor.jpg",
    "./img/quatro-dogs.jpg",
    "./img/tres-dogs.jpg"
];

// addEventListener("evento", uma função)
// () => {}
// função anonima - sem nome - somente precisa executar alguma coisa, no caso, o click do botão

document.getElementById("btn-galeria").addEventListener("click", () => {
    const galeria = document.getElementById("imagens-galeria");
    galeria.innerHTML = ""; // limpa a div antes de carregar, evitando que as fotos se repitam a cada clique.

    images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Foto de cachorros";
        galeria.appendChild(img);
    })
})

// função para o input de pesquisa de raças
// para criar listas usamos um array []
const listaRacas = [
    {
        nome: "Labrador",
        caracteristica: "protetor",
    },

    {
        nome: "Pastor Alemão",
        caracteristica: "corajoso",
    },

    {
        nome: "yorkshire",
        caracteristica: "caçador",
    },

    {
        nome: "Pastor Belga Malinois",
        caracteristica: "perfomance",
    },
];

// capturando o input que receberá o texto de busca
// função sem nome, mas com parâmetro, por isso (e), pois ele está esperando receber alguma informação, no caso, o texto da pesquisa/elemento que foi digitado
document.getElementById("campo-filtro").addEventListener("input", (e) => {
    // o (e) é o elemento digitado / o texto digitado no input
    const valor = e.target.value.toLowerCase();
    // metodos precisa abrir (), no caso utilizado foi toLowerCase() , para transformar todo o texto digitado no input ser lido com letras minusculas.

    // ==================

    // capturando a ul do html
    const resultado = document.getElementById("resultado-pesquisa");
    // informando ao html que ele irá iniciar vazio
    resultado.innerHTML = "";

    // método do filtro
    // existem métodos de array (manipular dados em geral - lista) e metodos de string (manipula texto)
    // Filtrando o array
    // o metodo de array filter ele recebe array.filter(() => {})
    // função sem nome, pois ela precisa somente executar algo
    listaRacas
        .filter((raca) =>
            raca.nome.toLowerCase().includes(valor))
        
        .forEach((raca) => {
            const li = document.createElement("li");
            li.textContent = `${raca.nome} - 
            ${raca.caracteristica}`;
            resultado.appendChild(li);
        });
});