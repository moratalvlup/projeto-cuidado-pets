const images = [
    "./img/pastor.jpg",
    "./img/quatro-dogs.jpg",
    "./img/tres-dogs.jpg"
];

// addEventListener("evento", uma função)
// () => {}
// função anonima - sem nome - somente precisa executar alguma coisa

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
