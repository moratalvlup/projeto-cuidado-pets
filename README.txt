<!-- section = seção que tem um tema específico -->
<!-- adicionar uma section com galeria interativa, com js, linha index 104 -->
<!-- btn = abreviação de button -->

=======================
JavaScript
=======================

<--
Criar uma lista em javascript usa-se o array => const/let nomeDoArray = [] ;
importar link => "endereço-do-link"
importar da pasta => "./nome-da-pasta/nome do arquivo"
-->

<--
para linkar uma id do index ao js usa-se o dom => documment.getElementById/class/nome("id da tag").

para adicionar a função do evento que terá esse item => addEventListener("evento", uma função)

a função neste caso será uma função sem nome, então usa-se arrowFunction: () => {}

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

===========================================
MÉTODOS DE ARRAY - JAVASCRIPT

--- ITERAÇÃO E TRANSFORMAÇÃO (NÃO ALTERAM O ORIGINAL) ---

- map(): Cria um novo array transformando cada elemento.
- filter(): Cria um novo array apenas com os elementos que passam em um teste.
- reduce(): Reduz o array a um único valor acumulado (ex: soma total).
- forEach(): Executa uma função para cada elemento (sem retorno).
- flat(): Achata arrays aninhados (sub-arrays) em um único nível.
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

- slice(): Copia uma parte do array para um novo array (não altera o original).
- join(): Une todos os elementos em uma string, separados por um delimitador.
- concat(): Une dois ou mais arrays em um novo array.
- Array.from(): Cria um array a partir de um objeto iterável ou array-like.

===========================================
O método addEventListener('evento', funcao)

no JavaScript é usado para monitorar interações, como cliques (click), movimentos do mouse (mousemove), entrada de teclado (keydown), carregamento (load), ou formulários (submit) [4, 6, 12]. Ele permite anexar múltiplas funções a um único elemento sem usar on`.

Aqui estão os tipos mais comuns de eventos organizados por categoria:

🐭 Eventos de Mouse (Mouse Events)

click: Disparado quando o usuário clica em um elemento.
dblclick: Disparado com um clique duplo.
mousedown / mouseup: Quando o botão do mouse é pressionado ou solto.
mousemove: Sempre que o cursor do mouse se move.
mouseover / mouseout: Quando o mouse entra ou sai de um elemento.
mouseenter / mouseleave: Semelhante, mas não borbulha (não afeta elementos filhos).

⌨️ Eventos de Teclado (Keyboard Events)

keydown: Quando uma tecla é pressionada.
keyup: Quando uma tecla é liberada.
keypress: Quando uma tecla caractere é pressionada (obsoleto em alguns navegadores, prefira keydown).

📄 Eventos de Formulário e Documento (Document/Form Events)

submit: Quando um formulário é enviado.
change: Quando o valor de um elemento (input, select) muda.
input: Quando o usuário digita em um campo.
focus / blur: Quando um elemento ganha ou perde foco.
load: Quando a página ou recurso termina de carregar.
scroll: Quando o usuário rola a página ou um elemento.

===========================================
===========================================
CSS - ESTILIZAÇÃO E LAYOUT

--- RESET E BOX MODEL ---
* {
    box-sizing: border-box; /* Garante que padding e border não aumentem o tamanho do elemento */
    margin: 0;
    padding: 0;
}

--- GRID E LAYOUT DE IMAGENS (.grade) ---
A classe .grade utiliza CSS Grid para criar uma galeria responsiva:
- display: grid; => Ativa o contexto de grid.
- grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); => Cria colunas que se ajustam sozinhas (mínimo 150px).
- gap: 15px; => Espaçamento entre os itens da grade.

.grade img {
    width: 100%;       /* Ocupa toda a largura da célula do grid */
    height: 100%;      /* Mantém a altura preenchida */
    border-radius: 100%; /* Deixa a imagem perfeitamente circular */
    
    /* Box-shadow complexo para efeito de profundidade/neomorfismo */
    box-shadow: 
        rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, 
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, 
        rgba(0, 0, 0, 0.06) 0px 2px 1px, 
        rgba(0, 0, 0, 0.09) 0px 4px 2px, 
        rgba(0, 0, 0, 0.09) 0px 8px 4px, 
        rgba(0, 0, 0, 0.09) 0px 16px 8px, 
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

--- ESTILIZAÇÃO DO TÍTULO ---
(Adicione aqui suas regras para h1, h2, etc.)

===========================================