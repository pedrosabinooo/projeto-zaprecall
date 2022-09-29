import styled from "styled-components";

export default function Footer({filaRespostas}) {
    return (
        <FooterConcluidos>
            {/* BUG Numero de concluidos não tá atualizando
                BUG Icones não estão renderizando */}
            <span>{filaRespostas.lenght ? filaRespostas.lenght : 0}/4 CONCLUÍDOS</span>
            <div>{filaRespostas.map((r,i) => <img src={r} alt="resposta" key={i} />)}</div>
        </FooterConcluidos>
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
    padding: 20px;
`