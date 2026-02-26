===========================================
ESTRUTURA SEMÂNTICA - HTML5
===========================================

O projeto foi construído utilizando tags semânticas para garantir que o navegador e tecnologias assistivas entendam a hierarquia do conteúdo.

--- TAGS DE ORGANIZAÇÃO ---
- <header>: Contém o título principal e a identidade visual do blog.
- <main>: Delimita o conteúdo central e mais importante da página.
- <section>: Agrupa conteúdos relacionados (Cuidados, Raças, Galeria, Pesquisa).
- <footer>: Reúne informações de contato, links externos e créditos.

--- ELEMENTOS DE TEXTO E MÍDIA ---
- <h1> a <h3>: Hierarquia de títulos para organizar a importância das informações.
- <p>: Blocos de texto corrido.
- <ul> / <ol>: Listas não ordenadas (bolinhas) e ordenadas (números) para dicas e procedimentos.
- <table>: Utilizada na seção de raças para organizar dados comparativos (Raça vs. Características).
- <a>: Links para referências externas com o atributo 'target="_blank"' (abre em nova aba).

--- INTERATIVIDADE ---
- <input>: Campo de entrada de texto usado para o filtro dinâmico de raças.
- <button>: Elemento de disparo para carregar a galeria via JavaScript.
- <div> com classe .grade: Container vazio que serve de "palco" para a inserção das imagens via DOM.



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
SISTEMA DE PESQUISA (FILTRO DINÂMICO)

--- ARRAY DE OBJETOS ---
Para organizar melhor os dados, utilizamos um Array de Objetos. Cada objeto {} 
representa uma raça com múltiplas propriedades (nome e característica).

--- O EVENTO 'INPUT' ---
Diferente do 'click', o evento 'input' é disparado toda vez que o usuário 
digita uma letra no campo de busca, permitindo uma resposta instantânea.

--- PARÂMETRO (e) NA ARROW FUNCTION ---
document.getElementById("campo-filtro").addEventListener("input", (e) => { ... })
- O (e) é o objeto do evento (o elemento digitado). 
- 'e.target.value' captura exatamente o texto que está dentro do input naquele momento.

--- MÉTODOS DE STRING UTILIZADOS ---
1. toLowerCase(): Transforma o texto em minúsculas para que a busca não 
   diferencie "Labrador" de "labrador".
2. includes(): Verifica se o texto digitado está contido no nome da raça.

--- COMBINAÇÃO DE MÉTODOS DE ARRAY (ENCADEAMENTO) ---
Para a pesquisa funcionar, encadeamos dois métodos:
1. filter(): Vasculha o array 'listaRacas' e cria um novo array apenas com 
   as raças que atendem à busca (includes).
2. forEach(): Pega o resultado do filtro e cria os elementos <li> dinamicamente 
   no HTML usando o textContent e o appendChild.

Desta forma, a lista se "auto-limpa" (innerHTML = "") e se reconstrói a 
cada tecla digitada.

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
- sort(): Ordena os elementos (padrão é alfabético).
- reverse(): Inverte a ordem dos elementos.

--- UTILITÁRIOS E FORMATAÇÃO ---
- slice(): Copia uma parte do array para um novo array.
- join(): Une todos os elementos em uma string.
- concat(): Une dois ou mais arrays em um novo array.
- Array.from(): Cria um array a partir de um objeto iterável.

===========================================
EVENTOS - addEventListener('evento', funcao)

🐭 Eventos de Mouse:
- click: Disparado quando o usuário clica em um elemento.
- dblclick: Disparado com um clique duplo.
- mousedown/mouseup: Quando o botão do mouse é pressionado ou solto.
- mousemove: Sempre que o cursor do mouse se move.
- mouseover/mouseout: Quando o mouse entra ou sai de um elemento.

⌨️ Eventos de Teclado:
- keydown: Quando uma tecla é pressionada.
- keyup: Quando uma tecla é liberada.

📄 Eventos de Formulário e Documento:
- submit: Quando um formulário é enviado.
- change: Quando o valor de um elemento muda.
- input: Quando o usuário digita em um campo.
- load: Quando a página ou recurso termina de carregar.
- scroll: Quando o usuário rola a página.

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
    box-shadow: 0px 8px 16px rgba(0,0,0,0.1);
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
    font-style: italic; /* Ideal para as DATAS no blog */
}

--- SEÇÃO DE PESQUISA DINÂMICA (CSS) ---

--- DIMENSIONAMENTO COM VW (Viewport Width) ---
.pesquisa {
    width: 20vw; /* Define a largura como 20% da largura total da janela */
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
}
- O uso de 'vw' permite que o componente responda ao tamanho da tela do usuário.

--- ESTILIZAÇÃO DO INPUT E LISTA ---
- #campo-filtro { width: 100% }: Garante que o campo ocupe toda a largura disponível.
- list-style: none: Remove os marcadores padrão (bolinhas).

--- INTERAÇÃO (FEEDBACK VISUAL) ---
#resultado-pesquisa li:hover {
    background-color: #e8f4ea;
    cursor: default;
}

===========================================
EM DESENVOLVIMENTO
===========================================

Autor: Fernando Franke Morata