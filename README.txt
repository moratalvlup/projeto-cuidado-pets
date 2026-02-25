===========================================
FUNDAMENTOS DE JAVASCRIPT
===========================================

<--
Criar uma lista em javascript usa-se o array => const/let nomeDoArray = [] ;
importar link => "endereço-do-link"
importar da pasta => "./nome-da-pasta/nome do arquivo"
-->

<--
para linkar uma id do index ao js usa-se o dom => document.getElementById/class/nome("id da tag").

para adicionar a função do evento que terá esse item => addEventListener("evento", uma função)

a função neste caso será uma função sem nome (anônima), então usa-se arrowFunction: () => {}

document.getElementById("btn-galeria").addEventListener("click", () => {
    const galeria = document.getElementById("imagens-galeria");
})
-->

===========================================
LÓGICA DA GALERIA DINÂMICA

1. Armazenamento: Os caminhos das imagens são guardados em um array chamado 'images'.
2. Limpeza: 'galeria.innerHTML = ""' limpa a div antes de carregar, evitando que as fotos se repitam a cada clique.
3. Iteração: O método 'forEach' percorre cada item do array.
4. Criação:
   - 'document.createElement("img")' cria a tag <img> no HTML.
   - 'img.src' define o caminho da imagem.
   - 'galeria.appendChild(img)' coloca a imagem dentro da seção da grade.

===========================================
MÉTODOS DE ARRAY - JAVASCRIPT

--- ITERAÇÃO E TRANSFORMAÇÃO (NÃO ALTERAM O ORIGINAL) ---
- map(): Cria um novo array transformando cada elemento.
- filter(): Cria um novo array apenas com os elementos que passam em um teste.
- reduce(): Reduz o array a um único valor acumulado (ex: soma total).
- forEach(): Executa uma função para cada elemento (sem retorno).
- flat(): Achata arrays aninhados em um único nível.
- flatMap(): Mapeia cada elemento e depois achata o resultado.

--- BUSCA E VERIFICAÇÃO ---
- find(): Retorna o primeiro elemento que satisfaz a condição.
- findIndex(): Retorna o índice do primeiro elemento que satisfaz a condição.
- includes(): Verifica se o array contém um valor (retorna true/false).
- some(): Retorna true se AO MENOS UM elemento satisfaz a condição.
- every(): Retorna true se TODOS os elementos satisfazem a condição.
- indexOf(): Retorna o primeiro índice onde um valor pode ser encontrado.

--- MANIPULAÇÃO E MUTAÇÃO (ALTERAM O ARRAY ORIGINAL) ---
- push(): Adiciona elementos ao final.
- pop(): Remove o último elemento.
- unshift(): Adiciona elementos ao início.
- shift(): Remove o primeiro elemento.
- splice(): Adiciona, remove ou substitui elementos em posições específicas.
- sort(): Ordena os elementos.
- reverse(): Inverte a ordem dos elementos.

--- UTILITÁRIOS E FORMATAÇÃO ---
- slice(): Copia uma parte do array para um novo array.
- join(): Une todos os elementos em uma string.
- concat(): Une dois ou mais arrays em um novo array.
- Array.from(): Cria um array a partir de um objeto iterável.

===========================================
EVENTOS - addEventListener('evento', funcao)

Usado para monitorar interações. Permite anexar múltiplas funções a um único elemento.

🐭 Eventos de Mouse:
- click: Clique simples.
- dblclick: Clique duplo.
- mousedown/mouseup: Pressionar ou soltar o botão.
- mousemove: Movimento do cursor.
- mouseover/mouseout: Entrar ou sair de um elemento.

⌨️ Eventos de Teclado:
- keydown: Tecla pressionada.
- keyup: Tecla liberada.

📄 Eventos de Formulário e Documento:
- submit: Envio de formulário.
- change: Alteração de valor.
- input: Digitação em tempo real.
- load: Carregamento completo.
- scroll: Rolagem da página.

===========================================
CSS - ESTILIZAÇÃO E LAYOUT
===========================================

--- RESET E BOX MODEL ---
* {
    box-sizing: border-box; /* Padding e border não aumentam o tamanho real do box */
    margin: 0;
    padding: 0;
}

--- GRID E LAYOUT DE IMAGENS (.grade) ---
- display: grid; => Ativa o contexto de grid.
- grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); => Colunas responsivas.
- gap: 15px; => Espaço entre as fotos.

.grade img {
    width: 100%;
    height: 100%;
    border-radius: 100%; /* Formato circular */
    box-shadow: 0px 8px 16px rgba(0,0,0,0.1); /* Sombra para profundidade */
}

--- ESTILIZAÇÃO DE TÍTULOS (H1, H2, H3) ---
Para o tema de Pets, usamos cores que transmitem confiança e natureza:
- h1: Centralizado, com letras maiúsculas e maior destaque (Cor principal).
- h2: Cor secundária, servindo de divisor de seções.
- h3: Tons neutros para sub-tópicos.

--- ESTILIZAÇÃO DE ESCRITAS (P) ---
A regra principal para o corpo do texto é a LEGIBILIDADE:
- color: Evitar o preto puro (#000), preferir cinzas escuros para não cansar a vista.
- line-height: 1.6; => Espaçamento essencial entre linhas para facilitar a leitura.
- margin-bottom: 15px; => Espaço entre parágrafos.

--- SELETORES ESTRUTURAIS (Pseudo-classes) ---
O seletor :first-of-type é usado para capturar o primeiro elemento de um tipo:

section p:first-of-type {
    font-size: 14px;
    color: #777;
    font-style: italic; /* Ideal para estilizar as DATAS no blog automaticamente */
}

===========================================
EM DESENVOLVIMENTO
===========================================

Autor: Fernando Franke Morata
