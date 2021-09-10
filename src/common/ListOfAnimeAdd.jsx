import styled from "styled-components";
import { useState } from "react";

const ViewContent = styled.div`
  height: 320px;
  width: 250px;
  background-image: linear-gradient(6deg, #250364, #2e1158);
  color: #ffffff;
  margin-right: 20px;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;

  &:hover {
    background-image: linear-gradient(6deg, #19033d, #2e1158);
  }
`;

const ImageListContent = styled.div`
  height: 150px;
  width: 100%;

  @media (width: 1024px) {
    height: 40%;
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 40%;
    width: 100%;
  }
`;

const ImageList = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  overflow-x: none;
`;

const NameOfAnimeContent = styled.div`
  display: flex;
  flex: 1;
  width: 250px;

  @media (width: 1024px) {
    flex: 0.5;
    height: 40%;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const NameOfAnime = styled.span`
  font-size: 1.2rem;
  display: inline-block;
  padding: 10px;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: 800;
  width: 180px;
  text-align: left;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  letter-spacing: 1px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const AddEpisodeContent = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
`;

const AddEpisodeButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

const AddEpisode = styled.button`
  padding: 10px;
  border-radius: 20px;
  width: 80px;
  margin: 10px;
  border: none;
  transition: 0.3s;

  &:hover {
    background: #3d0981;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    padding: 5px;
    width: 90%;
    margin: 10px;
    border-radius: 20px;
  }
`;

const ShowEpisode = styled.span`
  font-size: 1.4rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const OpenModal = styled.button`
  padding: 7px;
  border: none;
  width: 100%;
  border-radius: 0px 0px 15px 15px;
  transition: 0.3s;
  text-transform: uppercase;
  &:hover {
    background: #3d0981;
    color: #ffffff;
  }

  @media (max-width: 720px) {
    padding: 7px;
    height: 30%;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 90vh;
  color: #000;
  font-weight: 400;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(2, 0, 3, 0.5);
`;

const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerList = styled.div`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  background: #3c0570;
  width: 500px;
  border-radius: 20px;
  align-items: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 95%;
    height: 250%;
    text-align: center;
  }
`;

const InformationConteiner = styled.div`
  height: 450px;
  width: 90%;
  margin-top: -32%;
  background-image: linear-gradient(181deg, #e6ecfa, #ecf2f8, #f3f7f7, #f9fdf5);
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 5px 2px #6d2dbb;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: -30%;
  }
`;

const Informations = styled.div`
  margin-top: 40%;
  width: 280px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;

  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0;
  }
  padding: 5px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 35%;
  }
`;

const Close = styled.button`
  margin-top: 16px;
  margin: 10px;
  border: none;
  height: 40px;
  width: 120px;
  border-radius: 20px;
  background-image: linear-gradient(0deg, #8f8dd3, #d1cff2, #e8e7f9, #ffffff);
  color: #632288;
  outline: none;
  transition: 0.3s;
  &:hover {
    color: #77379c;
    background-image: linear-gradient(0deg, #a18fd9, #c2afde, #e1d1e2, #fff3e6);
  }
`;

const ImageContent = styled.div`
  width: 80%;
  height: 50%;
  border-radius: 20px;
  z-index: 2;
  margin-top: 10%;
  box-shadow: 1px -1px 5px 2px #6d2dbb;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;
  border-radius: 20px;
`;

const Name = styled.span`
  padding-top: 10px;
`;

const QuantityOfEpsodes = styled.span`
  padding-top: 5px;
  padding-bottom: 15px;
  text-align: center;
`;

const WatchedEpisodesContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
`;

const WatchedEpisodesHeader = styled.header`
  margin-bottom: 10px;
`;

const WatchedEpisodes = styled.span`
  font-size: 3rem;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const WatchedEpisodesButtonsContent = styled.div``;

const WatchedEpisodesButtons = styled.button`
  margin: 10px;
  border: none;
  height: 40px;
  width: 120px;
  border-radius: 20px;
  background-image: linear-gradient(3deg, #1c1d7a, #452996, #6936b4, #8d44d2);
  color: #fff;
  outline: none;
  transition: 0.3s;
  &:hover {
    background-image: linear-gradient(8deg, #2c0c7d, #4d2fa7, #6d50d2, #8e73ff);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    height: 42%;
    width: 92%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Strong = styled.span`
  font-weight: 600;
`;

const Synopsis = styled.p`
  figcaption:first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    margin-top: 15%;
    text-align: left;
  }
`;

const RemoveContent = styled.div`
  display: flex;
  justify-content: center;
`;
const Remove = styled.button`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 10px;
  width: 200px;
  border-radius: 20px;
  background-image: linear-gradient(3deg, #1c1d7a, #452996, #6936b4, #8d44d2);
  color: #fff;
  outline: none;

  &:hover {
    background-image: linear-gradient(8deg, #2c0c7d, #4d2fa7, #6d50d2, #8e73ff);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    height: 50%;
    width: 80%;
  }
`;

const Main = ({ data, increment, decrement, rem }) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  const closeModal = () => {
    setButtonPopup(false);
  };
  const onDelete = (id) => {
    rem(id);
  };
  return buttonPopup ? (
    <Container>
      <ContainerModal>
        <ContainerList>
          <ImageContent>
            <Image src={data.image} />
          </ImageContent>
          <InformationConteiner>
            <Informations>
              <Name>
                <Strong>Nome:</Strong> {data.name}
              </Name>
              <QuantityOfEpsodes>
                <Strong>Quantidade de Epsódios:</Strong> {data.epsodio}
              </QuantityOfEpsodes>

              <WatchedEpisodesContent>
                <WatchedEpisodesHeader>
                  <Strong>Episódios assistidos</Strong>
                </WatchedEpisodesHeader>
                <WatchedEpisodes>{data.epsodiosAssisted}</WatchedEpisodes>
                <WatchedEpisodesButtonsContent>
                  <WatchedEpisodesButtons onClick={increment}>
                    Incrementar Ep +
                  </WatchedEpisodesButtons>
                  <WatchedEpisodesButtons onClick={decrement}>
                    Decrementar Ep -
                  </WatchedEpisodesButtons>
                </WatchedEpisodesButtonsContent>
              </WatchedEpisodesContent>

              <Synopsis>
                <Strong>Sinopse:</Strong> {data.sinopse}
              </Synopsis>
              <RemoveContent>
                <Remove onClick={() => onDelete(data.id)}>
                  Remover Anime Listado
                </Remove>
              </RemoveContent>
            </Informations>
          </InformationConteiner>

          <Close onClick={closeModal}>FECHAR</Close>
        </ContainerList>
      </ContainerModal>
    </Container>
  ) : (
    <ViewContent>
      <ImageListContent>
        <ImageList src={data.image} />
      </ImageListContent>

      <NameOfAnimeContent>
        <NameOfAnime>{data.name}</NameOfAnime>
      </NameOfAnimeContent>
      <AddEpisodeContent>
        <ShowEpisode>{data.epsodiosAssisted}</ShowEpisode>
        <AddEpisodeButtons>
          <AddEpisode onClick={increment}>Add +1</AddEpisode>
          <AddEpisode onClick={decrement}>Dec -1</AddEpisode>
        </AddEpisodeButtons>
        <OpenModal onClick={() => setButtonPopup(true)}>abrir</OpenModal>
      </AddEpisodeContent>
    </ViewContent>
  );
};

export default Main;
