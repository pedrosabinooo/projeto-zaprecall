import { useState } from "react";
import styled from "styled-components";
import Decks from "../data/decks.js";

const DropdownIcon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const options = Array.from(Decks, (d) => d.nome);

export default function DropdownList({ setDeck }) {
  const [placeHolder, setPlaceHolder] = useState("Escolha seu deck...");
  const [showMenu, setShowMenu] = useState(false);

  function clickItem(label) {
    setPlaceHolder(label);
    setShowMenu(!showMenu);
    setDeck(Decks.filter((d) => d.nome === label)[0]);
  }

  return (
    <DropdownContainer data-identifier="deck-selector">
      <DropdownInput onClick={() => setShowMenu(!showMenu)}>
        <span>{placeHolder}</span>
        <DropdownIcon />
      </DropdownInput>
      {showMenu && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownItem
              onClick={() => clickItem(option)}
              key={option}
              data-identifier="deck-option"
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  width: 246px;
  text-align: left;
  border: 1px solid #ccc;
  position: relative;
  border-radius: 5px;
  background: #fff;
  margin-top: 40px;
  margin-bottom: 20px;
  cursor: pointer;
  font-family: "Recursive";
`;
const DropdownInput = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;
const DropdownMenu = styled.div`
  position: absolute;
  transform: translateY(4px);
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: auto;
  max-height: 150px;
  background: #fff;
`;
const DropdownItem = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #9fc3f870;
  }
`;
