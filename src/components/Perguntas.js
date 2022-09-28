import styled from "styled-components";
import SetaVirar from "../assets/img/seta_virar.png";
import SetaPlay from "../assets/img/seta_play.png";

export default function Perguntas() {
    return (
        <>
            <PerguntaAberta>
                <p>O que é JSX?</p>
                <img src={SetaVirar} alt="Virar flashcard" />
            </PerguntaAberta>
            <PerguntaFechada>
                <p>Pergunta 2</p>
                <img src={SetaPlay} alt="Jogar flashcard" />
            </PerguntaFechada>
            <PerguntaFechada>
                <p>Pergunta 3</p>
                <img src={SetaPlay} alt="Jogar flashcard" />
            </PerguntaFechada>
            <PerguntaFechada>
                <p>Pergunta 4</p>
                <img src={SetaPlay} alt="Jogar flashcard" />
            </PerguntaFechada>
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
    }
`