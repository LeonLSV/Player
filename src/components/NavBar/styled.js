import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const NavbarStyle = styled.div`
  color: white;
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const AngleLeft = styled.div`
  font-size: 20px;
  color: #9bb0e9;
`;
const SearchFa = styled.div`
  font-size: 25px;
  color: #9bb0e9;
`;

const TextH1 = styled.h1`
  font-size: 25px;
`;

export { NavbarStyle, AngleLeft, SearchFa, TextH1 };
