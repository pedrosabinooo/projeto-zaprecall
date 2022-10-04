import { useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Flashcards from "./Flashcards";
import LogoContainer from "./LogoContainer";

export default function MainScreen() {
  const [hideWelcomeScreen, setHideWelcomeScreen] = useState(false);
  const [deck, setDeck] = useState({});
  const [perguntasSelecionadas, setPerguntasSelecionadas] = useState([]);
  const [filaRespostas, setFilaRespostas] = useState([]);

  return (
    <ScreenContainer>
      <LogoContainer
        hideWelcomeScreen={hideWelcomeScreen}
        setHideWelcomeScreen={setHideWelcomeScreen}
        deck={deck}
        setDeck={setDeck}
        setPerguntasSelecionadas={setPerguntasSelecionadas}
      />
      {hideWelcomeScreen && (
        <Flashcards
          perguntasSelecionadas={perguntasSelecionadas}
          filaRespostas={filaRespostas}
          setFilaRespostas={setFilaRespostas}
        />
      )}
      {hideWelcomeScreen && <Footer filaRespostas={filaRespostas} />}
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
