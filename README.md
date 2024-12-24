# CSS Rotating Text & Interactive Links

Este projeto demonstra uma animação de texto rotacionando de cima para baixo, alterando dinamicamente as cores do texto e do fundo da página. Além disso, inclui links interativos para e-mail e GitHub, que abrem em novas abas ao serem clicados.

## Funcionalidades

- **Animação de Texto Rotacionante**: O texto dentro de um elemento `span` alterna entre diferentes funções/profissões que você deseja exibir.
- **Mudança de Cor Dinâmica**: O texto e o fundo da página mudam de cor ao longo da animação.
- **Links Interativos**:
  - **E-mail**: Ao clicar em "Clique para enviar um E-mail", o cliente de e-mail é aberto com um novo e-mail direcionado ao desenvolvedor.
  - **GitHub**: Ao clicar em "Clique para visitar meu GitHub", a página será redirecionada para o perfil GitHub do desenvolvedor, em uma nova aba.

## Tecnologias Utilizadas

- **HTML5**: Estruturação da página e conteúdo.
- **CSS3**:
  - **Animações**: Utilização de animações `@keyframes` para a rotação do texto e mudanças de cor.
  - **Flexbox**: Usado para centralizar o conteúdo da página e garantir layout responsivo.
- **JavaScript**:
  - Manipulação de eventos de clique nos links de e-mail e GitHub.
  - Abertura de novas abas com os links interativos usando `window.open()`.

## Como Funciona

### Estrutura HTML

A estrutura HTML consiste em um título principal com o texto "I am," seguido por uma lista de funções/profissões que alternam automaticamente. Abaixo do título, há links interativos para o envio de um e-mail e para o perfil do GitHub.

```html
<div class="outer-headings">
  <h1>
    I am,
    <div class="inner-headings">
      <span>
        UI/UX Designer <br />
        Front-End Developer <br />
        Back-End Developer <br />
        Full-Stack Developer <br />
        Software Engineer <br />
        DevOps Specialist <br />
        Digital Marketer <br />
        Content Creator <br />
        Cloud Architect <br />
      </span>
    </div>
  </h1>
  <div class="contact-info">
    <a id="email" href="#">Clique para enviar um E-mail</a>
    <a id="port" href="#">Clique para visitar meu GitHub</a>
  </div>
</div>
