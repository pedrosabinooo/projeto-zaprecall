// TODO-LIST
// [x] Layout
//     [x]  Aplicar layout para seguindo o Figma.
//     [x]  Use as fontes indicadas no Layout do Figma
// [ ] Componentização e dados
//     [x]  Os elementos da página devem ser componentizados com React em arquivos separados.
//     [ ]  Os dados dinâmicos da página (como o *deck*, *flashcards*, etc) devem ser representados como *arrays* ou objetos no JavaScript e renderizados na tela.
// [ ] Flashcards
//     [ ]  Todos os *flashcards* devem aparecer na tela virados e indexados por números (ex: Flashcard 1, Flashcard 2), de modo a “esconder” o termo ou pergunta que ele contém.
//     [ ]  Ao clicar em um *flashcard*, a pergunta ou termo correspondente ao *flashcard* deve aparecer (não é necessária nenhuma animação).
//     [ ]  Para ver a resposta do *flashcard*, o usuário deve clicar no ícone de “virar” (o componente é o mesmo, apenas teve seu *layout* adaptado).
//     [ ]  Ao virar um *flashcard*...
//             [ ]  Ao clicar em qualquer um dos botões (Não lembrei, Quase não lembrei ou Zap), o *flashcard* deverá ser dado como respondido e terá seu status alterado para refletir a escolha do usuário:
//                 *Vermelho* incorreto (Não lembrei)
//                 *Amarelo* correto com esforço (Quase esqueci)
//                 *Verde* correto imediatamente (Zap!)
//             [ ]  Depois de respondida, a pergunta deverá ficar fechada e seu texto tachado com a cor correta correspondente ao seu status e um ícone.
// [ ] Resultado final
//     [ ]  O resultado deve estar fixado na parte debaixo da página.
//     [ ]  Sempre que uma carta for virada o número de flashcards respondidos deve ser atualizado
//
// BONUS
// [ ] Tela boas vindas
//     [ ]  Antes de apresentar os cards deverá ser exibido uma tela de boas vindas
// [ ] Fila de Respostas e Botões nos Flashcard
//     [ ]  Adicionar os botões em cada Flashcard
//     [ ]  No rodapé adicionar um fila de resposta. Note que a ordem é de respostas, ou seja, do Flashcard respondido.
// [ ] Escolha de Deck
//     [ ]  Um *select* na primeira tela que possibilita o jogador escolher qual o deck de cartas deseja treinar.
// [ ] Meta de Zaps
//     [ ]  Um *input* deverá existir na primeira tela para perguntar ao usuário a sua meta de **zaps**. Essa meta deverá ser no mínimo 1 e **ela definirá se o usuário terá sucesso ou não**.
//         Ex. O usuário define sua meta como 2 **zaps**, e acerta apenas um *flashcard* com status **zap**, ao responder todos os *flashcards*, a mensagem “Putz” deverá ser renderizada, caso contrário, a mensagem de “Parabéns”.
//

import GlobalStyle from "../assets/GlobalStyle";
import MainScreen from "./MainScreen";

export default function App() {
    return (
        <>
            <MainScreen />
            <GlobalStyle />
        </>
    )
}