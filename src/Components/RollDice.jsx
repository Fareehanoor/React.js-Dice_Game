import styled from "styled-components";

const RollDice = ({ selectedDice, selectNumber }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={selectNumber}>
        <img src={`/images/dice/dice_${selectedDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;

  p {
    font-size: 24px;
    font-weight: 500px;
  }
  .dice {
    cursor: pointer;
  }
`;
