import styled from "styled-components";
import SetaVirar from "../assets/img/seta_virar.png";
import SetaPlay from "../assets/img/seta_play.png";
import { useState } from "react";

export default function Perguntas({ perguntasSelecionadas, filaRespostas, setFilaRespostas }) {
    const [perguntaAberta, setPerguntaAberta] = useState([])
    const [respostaAberta, setRespostaAberta] = useState([])
    console.log(perguntasSelecionadas)
    const botoes = [
        { texto: "Não lembrei", cor: "VERMELHO", icone: "../assets/img/icone_erro.png" },
        { texto: "Quase não lembrei", cor: "AMARELO", icone: "../assets/img/icone_quase.png" },
        { texto: "Zap!", cor: "VERDE", icone: "../assets/img/icone_certo.png" }
    ]

    function fecharPergunta(index, iconeResposta) {
        setPerguntaAberta([...perguntaAberta.filter(i => i !== index)])
        setFilaRespostas([...filaRespostas, iconeResposta])
    }
    // BUG Apenas 1 pergunta pode estar aberta por vez
    // BUG Formatar pergunta fechada conforme resultado
    function renderizarPergunta(p, i) {
        if (perguntaAberta.includes(p.index)) {
            if (respostaAberta.includes(p.index)) {
                return (
                    <PerguntaAberta key={i}>
                        <p>{p.resposta}</p>
                        <ContainerBotoes>
                            {botoes.map((b, index) => <Botao
                                key={index}
                                background={b.cor}
                                onClick={() => fecharPergunta(p.index, b.icone)}
                            >
                                {b.texto}
                            </Botao>
                            )}
                        </ContainerBotoes>
                    </PerguntaAberta>
                )
            } else {
                return (
                    <PerguntaAberta key={i} onClick={() => setRespostaAberta([...respostaAberta, p.index])}>
                        <p>{p.pergunta}</p>
                        <img src={SetaVirar} alt="Virar flashcard" />
                    </PerguntaAberta>
                )
            }
        } else {
            return (
                <PerguntaFechada key={i} onClick={() => setPerguntaAberta([...perguntaAberta, p.index])}>
                    <p>Pergunta {i + 1}</p>
                    <img src={SetaPlay} alt="Jogar flashcard" />
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
        color: #333333;
    }
    img{
        &:hover {
            cursor: pointer;
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