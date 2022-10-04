import styled from "styled-components";
import fisherYatesShuffle from "../assets/FisherYatesShuffle";
import Logo from "../assets/img/logo.png";
import DropdownList from "./DropdownList";

export default function LogoContainer({
  hideWelcomeScreen,
  setHideWelcomeScreen,
  deck,
  setDeck,
  setPerguntasSelecionadas,
}) {
  function iniciarZapRecall() {
    if (Object.keys(deck).length === 0) {
      alert("Escolha seu deck para começar");
    } else {
      setHideWelcomeScreen(!hideWelcomeScreen);
      const perguntasSorteadas = fisherYatesShuffle(deck.perguntas).slice(0, 4);
      perguntasSorteadas.forEach((p) => (p.status = 0));
      setPerguntasSelecionadas(perguntasSorteadas);
    }
  }
  return (
    <LogoContainerStyle hideWelcomeScreen={hideWelcomeScreen}>
      <img src={Logo} alt="Logo ZapRecall" />
      <h1>ZapRecall</h1>
      {!hideWelcomeScreen && <DropdownList setDeck={setDeck} />}
      {!hideWelcomeScreen && (
        <button onClick={() => iniciarZapRecall()} data-identifier="start-btn">
          Iniciar Recall!
        </button>
      )}
    </LogoContainerStyle>
  );
}

const LogoContainerStyle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.hideWelcomeScreen ? "" : "column")};
  justify-content: ${(props) => (props.hideWelcomeScreen ? "" : "center")};
  align-items: center;
  margin: ${(props) =>
    props.hideWelcomeScreen ? "40px 0 20px 0" : "250px 0 20px 0"};
  img {
    width: ${(props) => (props.hideWelcomeScreen ? "52px" : "136px")};
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin: ${(props) => (props.hideWelcomeScreen ? "0" : "20px 0 20px 0")};
    margin-left: ${(props) => (props.hideWelcomeScreen ? "20px" : "0")};
  }
  button {
    width: 246px;
    height: 48px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #d70900;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      filter: brightness(0.95);
    }
  }
`;
