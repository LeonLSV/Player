import styled from "styled-components";

const ImagePlayer = styled.img`
  width: 100%;
  border-radius: 20px;
  margin-bottom: 35px;
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ProgressP = styled.p`
  display: flex;
  color: #7e67e9;
  margin: 0;
  font-size: 15px;
  font-weight: bold;
`;

const ProgressBar = styled.div`
  background-color: #7e67e9;
  width: 200px;
  height: 5px;
  border-radius: 5px;
`;

const TextPlayContent = styled.h1`
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const TextPlayP = styled.p`
  color: #9bb0e9;
  font-size: 15px;
`;

const NavbarPlayContainer = styled.div`
  color: white;
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const IconNavbarLeft = styled.div`
  font-size: 25px;
  color: #9bb0e9;
`;

const NavbarRight = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
const IconNavbarRight = styled.div`
  font-size: 20px;
  color: #9bb0e9;
  margin: 10px;
`;

const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PlayerButtons = styled.div`
  color: #514ea0;
`;
const PlayerPlay = styled.div`
  font-size: 30px;
  color: white;
`;
const PlayerButtonPlay = styled.div`
  background-color: #7e67e9;
  padding: 10px;
  border-radius: 50%;
`;

export {
  ImagePlayer,
  ProgressContainer,
  ProgressP,
  ProgressBar,
  TextPlayContent,
  TextPlayP,
  NavbarPlayContainer,
  IconNavbarLeft,
  NavbarRight,
  IconNavbarRight,
  PlayerContainer,
  PlayerButtons,
  PlayerPlay,
  PlayerButtonPlay,
};
