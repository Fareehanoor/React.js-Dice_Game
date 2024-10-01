import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play Game Dice</h2>
      <div className="text">
        <p>How to play dice game</p>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice if you get wrong guess then 2 point will
          be dedcuted{" "}
        </p>
        <p>If you get wrong guess than 2 points will be deducted.</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
max-width : 800px;
margin : 0 auto;
margin-top: 40px;
border-radius :10px;
background-color : gray;
padding : 20px;
h2{
    font-size : 20px;
    font-weight : bold;
}
.text{
    margin-top : 24px;
}
`;
