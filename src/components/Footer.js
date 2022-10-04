import styled from "styled-components";
import IconeErro from "../assets/img/icone_erro.png";
import IconeQuase from "../assets/img/icone_quase.png";
import IconeCerto from "../assets/img/icone_certo.png";

export default function Footer({ filaRespostas }) {
  return (
    <FooterConcluidos>
      <span data-identifier="flashcard-counter">
        {filaRespostas.length ? filaRespostas.length : 0}/4 CONCLUÍDOS
      </span>
      <div>
        {filaRespostas.map((r, i) => (
          <img
            src={
              r === "VERDE"
                ? IconeCerto
                : r === "AMARELO"
                ? IconeQuase
                : r === "VERMELHO"
                ? IconeErro
                : ""
            }
            alt={r}
            key={i}
          />
        ))}
      </div>
    </FooterConcluidos>
  );
}

const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 20px;
  img {
    margin-top: 5px;
    padding: 0 3px;
  }
`;
