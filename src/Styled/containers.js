import styled from "styled-components";

const PlayerContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

// -------------------------------------ALBUM
const AlbumNavbarContainer = styled.div`
  color: white;
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 10px;
`;

const scrollAlbum = styled.div`
  overflow-y: auto;
  height: 550px;
  display: flex;
  flex-direction: column;
`;

const AlbumItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const AlbumItemContenedor = styled.div`
  color: white;
  width: 160px;
  height: 240px;
  border-radius: 30px;
  background-color: #30314d;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.5);
  margin-right: 15px;
`;

const AlbumItemImg = styled.img`
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

const AlbumItemText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-left: 15px;
`;
const AlbumItemTextP = styled(AlbumItemText)`
  font-size: 13px;
`;
const AlbumItemTextH3 = styled(AlbumItemText)`
  margin-top: 10px;
  font-size: 18px;
`;
const AlbumItemIcon = styled.div`
  font-size: 15px;
  color: #9bb0e9;
  margin-top: 5px;
  margin-right: 25px;
`;

// -----------------------------------EXPORT
export {
  PlayerContainer,
  scrollAlbum,
  AlbumItemContainer,
  AlbumItemContenedor,
  AlbumItemImg,
  AlbumItemText,
  AlbumItemTextP,
  AlbumItemTextH3,
  AlbumItemIcon,
  AlbumNavbarContainer,
};
