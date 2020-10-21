import styled from "styled-components";

const ContentNavBar = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

const ContentItem = styled.div`
  width: 100%;
  height: 70px;
  background-color: #30314d;
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  color: white;
  margin: 0;
  margin-bottom: 15px;
`;

const ContentText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
`;
const TextH = styled(ContentText)`
  font-size: 1.1rem;
  display: inherit;
  margin: 0;
  padding: 0px 0;
`;
const TextP = styled(ContentText)`
  font-size: 0.7rem;
  display: inherit;
  margin: 0;
  padding: 0px 0;
  color: #9bb0e9;
`;
const TextTime = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: flex-end;
`;
const TextTimeP = styled.div`
  display: flex;
  padding-right: 15px;
  margin: 0;
  color: #9bb0e9;
`;

export {
  ContentNavBar,
  ContentItem,
  ContentText,
  TextH,
  TextP,
  TextTime,
  TextTimeP,
};
