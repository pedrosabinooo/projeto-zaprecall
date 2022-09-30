import styled from "styled-components";
import SetaVirar from "../assets/img/seta_virar.png";
import SetaPlay from "../assets/img/seta_play.png";
import IconeErro from "../assets/img/icone_erro.png";
import IconeQuase from "../assets/img/icone_quase.png";
import IconeCerto from "../assets/img/icone_certo.png";
import { useState } from "react";

export default function Flashcards({ perguntasSelecionadas, filaRespostas, setFilaRespostas }) {
    const [renderizar, setRenderizar] = useState(true)

    const botoes = [
        { texto: "Não lembrei", cor: "VERMELHO", icone: "../assets/img/icone_erro.png", data_identifier: "forgot-btn" },
        { texto: "Quase não lembrei", cor: "AMARELO", icone: "../assets/img/icone_quase.png", data_identifier: "almost-forgot-btn" },
        { texto: "Zap!", cor: "VERDE", icone: "../assets/img/icone_certo.png", data_identifier: "zap-btn" }
    ]

    function clicada(p) {
        p.status++
        setRenderizar(!renderizar)
    }

    function finalizar(cor, p) {
        setFilaRespostas([...filaRespostas, cor])
        clicada(p)
        p.resultado = cor
    }

    function renderizarPergunta(p, i) {
        if (p.status === 0) {
            return (
                <PerguntaFechada key={i} color={""} data-identifier="flashcard">
                    <p data-identifier="flashcard-index-item">Pergunta {i + 1}</p>
                    <img src={SetaPlay} onClick={() => clicada(p)} alt="Jogar flashcard" data-identifier="flashcard-show-btn" />
                </PerguntaFechada>
            )
        } else if (p.status === 1) {
            return (
                <PerguntaAberta key={i} data-identifier="flashcard">
                    <p data-identifier="flashcard-question">{p.pergunta}</p>
                    <img src={SetaVirar} onClick={() => clicada(p)} alt="Virar flashcard" />
                </PerguntaAberta>
            )
        } else if (p.status === 2) {
            return (
                <PerguntaAberta key={i} data-identifier="flashcard">
                    <p data-identifier="flashcard-answer">{p.resposta}</p>
                    <ContainerBotoes>
                        {botoes.map((b, index) => <Botao
                            key={index}
                            background={b.cor}
                            data-identifier={b.data_identifier}
                            onClick={() => finalizar(b.cor, p)}
                        >
                            {b.texto}
                        </Botao>
                        )}
                    </ContainerBotoes>
                </PerguntaAberta>
            )
        } else if (p.status === 3) {
            return (
                <PerguntaFechada key={i} color={p.resultado} data-identifier="flashcard">
                    <p data-identifier="flashcard-index-item">Pergunta {i + 1}</p>
                    <img src={p.resultado === "VERDE" ? IconeCerto : (p.resultado === "AMARELO" ? IconeQuase : (p.resultado === "VERMELHO" ? IconeErro : ""))} alt={p.resultado} data-identifier="flashcard-status" />
                </PerguntaFechada>
            )
        }
    }
    return (
        <>
            {perguntasSelecionadas.map((p, i) => renderizarPergunta(p, i))}
        </>
    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => (props.color === "VERDE" ? "#2FBE34" : (props.color === "AMARELO" ? "#FF922E" : (props.color === "VERMELHO" ? "#FF3030" : "#333333")))};
        text-decoration: ${props => ["VERDE", "AMARELO", "VERMELHO"].includes(props.color) ? "line-through" : ""};
    }
    img{
        &:hover {
            cursor: ${props => ["VERDE", "AMARELO", "VERMELHO"].includes(props.color) ? "" : "pointer"};
        }
    }
`
const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
        &:hover {
            cursor: pointer;
        }
    }
`
const ContainerBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`
const Botao = styled.button`
    /* Você vai precisar trocar a cor dos botões e alguns textos!
    VERDE = "#2FBE34"
    AMARELO = "#FF922E"
    VERMELHO = "#FF3030"
    CINZA = "#333333" 
    */
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.background === "VERDE" ? "#2FBE34" : (props.background === "AMARELO" ? "#FF922E" : (props.background === "VERMELHO" ? "#FF3030" : "#333333"))};
    border: 1px solid ${props => props.background === "VERDE" ? "#2FBE34" : (props.background === "AMARELO" ? "#FF922E" : (props.background === "VERMELHO" ? "#FF3030" : "#333333"))};
    border-radius: 5px;
    padding:5px;
    &:hover {
        cursor: pointer;
    }
`