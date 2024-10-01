import styled from "styled-components";

import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";

const PlayGame = () => {
  const [score , setScore] = useState(0);
  const [selectedNumber , setSelectedNumber] = useState();
  const [selectedDice , setSelectedDice] = useState(5);
  const [error , setError] = useState();

  const generateRandomNumber = (min , max) =>{
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min); 
}

function selectNumber(){
  if(!selectedNumber) {
    setError("You hanve not selected any number")
  }
  
    const randomNumber = generateRandomNumber(1,7);
   setSelectedDice((prev) => randomNumber);

   if(selectedNumber === randomNumber){
      setScore(prev => prev + randomNumber);
   }else{
    setScore(prev => prev - 2);
   }

   setSelectedNumber(undefined);
}


  return (
    <MainContainer>
      <div className="top-section">
      <TotalScore score={score}/>
      <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
      </div>
      <RollDice selectedDice={selectedDice} selectNumber={selectNumber} />
    </MainContainer>
  );
};

export default PlayGame;

const MainContainer = styled.main`
padding-top:50px;
.top-section{
  display : flex;
  justify-content : space-around;
  align-items : end;
}
`;
