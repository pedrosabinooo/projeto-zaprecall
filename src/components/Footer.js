import styled from "styled-components";

export default function Footer() {
    return (
        <>
            <FooterConcluidos>
                <ContainerBotoes>
                    <button background={"VERMELHO"}>Não lembrei</button>
                    <button background={"AMARELO"}>Quase não lembrei</button>
                    <button background={"VERDE"}>Zap!</button>
                </ContainerBotoes>
                <span>0/4 CONCLUÍDOS</span>
            </FooterConcluidos>
        </>
    )
}

const FooterConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 5px;
    padding-bottom: 20px;
`
const ContainerBotoes = styled.div`
    /* Você vai precisar trocar a cor dos botões e alguns textos!
    VERDE = "#2FBE34"
    AMARELO = "#FF922E"
    VERMELHO = "#FF3030"
    CINZA = "#333333" 
    */

    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
    button {
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
    }
`