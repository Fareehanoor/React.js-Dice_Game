import styled from "styled-components";
import dice from "../../public/images/dices 1.png";

const Home = () => {
  return (
    <>
      <Container>
        <div>
        <img src={dice} alt="" />
        </div>
        <div className="content">
          <h1>Dice Game</h1>
          <Button>Play Now</Button>
        </div>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  max-width: 1180px;
  display : flex;
  margin : 0 auto;
  height : 100vh;
  align-items : center;

  .content h1{
    font-size : 96px;
    white-space : nowrap;
  }

`;
const Button = styled.button`
 
  color: white;
  background-color: black;
  min-width: 220px;
  padding: 10px 18px 10px 18px;
  border-radius: 5px;
  border:none;
  font-size : 16px;
  transition : 0.3s background ease-in ;

  &:hover{
    background-color : white;
    color : black;
    border : 1px solid black;
    transition : 0.3s background ease-in ;

  }
`;
