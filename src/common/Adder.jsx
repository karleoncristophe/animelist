import styled from "styled-components";
import ListOfAnimeAdd from "../common/ListOfAnimeAdd";
import Woman from "../assets/icons/woman.svg";
import WomanWallpaper from "../assets/icons/womanWallpaper.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  color: #ffffff;
  height: 100vh;
  scroll-snap-align: start;
`;

const HeaderAndInputs = styled.div`
  display: flex;
  margin-top: 3%;
  flex-direction: column;
  width: 100%;
  height: 35%;
`;

const Header = styled.header`
  width: 95%;
  height: 6%;
  margin-top: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;
  color: #ffffff;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
  }

  @media (width: 320px) {
    font-size: 1rem;
  }
`;

const Logo = styled.img`
  height: 40px;
  padding-right: 10px;

  @media (max-width: 768px) {
    height: 90%;
  }
`;

const SubTitle = styled.div`
  max-height: 400px;
  height: 350px;

  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContainerAddInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  height: 370px;
  box-shadow: 20px 20px 1px 2px #e8d9fb;
  border-radius: 5px;

  background: url(${WomanWallpaper}) no-repeat;
  width: 100%;
  min-height: 200px;

  background-size: cover;
  background-position: center;

  @media (min-width: 1920px) {
    flex-direction: column;
    width: 80%;
    margin-top: -70px;
  }

  @media (width: 1440px) {
    margin-top: -45px;
    width: 80%;
    height: 320px;
  }

  @media (width: 1024px) {
    margin-top: -60px;
    width: 80%;
    height: 95%;
  }

  @media (width: 952px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
    padding: 0;
    align-items: center;
    justify-content: center;
    box-shadow: none;
  }
`;

const AddInput = styled.input`
  height: 30px;
  width: 30%;
  padding: 5px;
  margin: 5px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 5px;
  border-color: #521c74;
  outline: none;
  background: #e8d4ff;

  box-shadow: 2px 2px 8px 2px #604088;

  ::-webkit-input-placeholder {
    color: #965cd8;
  }

  @media (width: 1024px) {
    font-size: 0.8rem;
    height: 10%;
  }

  @media (max-width: 768px) {
    height: 8%;
    width: 75%;
    font-size: 0.8rem;
  }
`;

const AddButton = styled.button`
  height: 40px;
  width: 30.7%;
  padding: 5px;
  margin: 5px;
  border: none;
  border-bottom: 1px solid #dca4ff;
  border-radius: 5px;
  transition: 0.3s;
  outline: none;
  background: #6c30aa;
  color: #f6f6f6;
  box-shadow: 2px 2px 8px 2px #4a3069;
  text-transform: uppercase;

  &:hover {
    background: #f6f6f6;
    color: #230133;
    box-shadow: 2px 2px 8px 2px #4a3069;
  }

  @media (max-width: 768px) {
    height: 11%;
    width: 80%;
  }

  @media (width: 952px) {
    width: 31.5%;
  }
`;

const ListOfAnimeAddContent = styled.div`
  flex-direction: row;
  width: 95vw;
  height: 350px;
  display: flex;
  overflow-x: scroll;
  align-items: center;
  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #7606aa;
    border-radius: 0.625rem;
  }

  @media (min-width: 1920) {
    background: red;
  }

  @media (width: 1440px) {
    margin-top: 10px;
    height: 350px;
  }

  @media (width: 1024px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 230px;
    margin-top: 2%;
    ::-webkit-scrollbar {
      height: 0px;
    }
  }

  @media (min-width: 400px) {
    height: 320px;
    margin-top: 2%;
    ::-webkit-scrollbar {
      height: 0px;
    }
  }
`;

const ListAnimeTitle = styled.span`
  font-weight: 400;
  font-size: 1.7rem;
  margin-top: 40px;
  color: #f5f5f5;
  width: 95vw;

  @media (width: 1440px) {
    margin-top: 0;
  }

  @media (width: 1024px) {
    font-size: 1.6rem;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    margin-top: 25px;
    font-size: 1.4rem;
    font-weight: 500;
  }

  @media (width: 952px) {
    margin-top: 90px;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
    margin-top: 40px;
  }
`;

const head = ({
  name,
  setName,
  epsodio,
  setEpsodio,
  image,
  setImage,
  epsodiosAssisted,
  setEpsodiosAssisted,
  sinopse,
  setSinopse,
  add,
  list,
  increment,
  decrement,
  rem,
}) => {
  return (
    <>
      <Container>
        <Header>
          <Logo src={Woman} />
          <Title>Adicione seu Anime e Aproveite !!!</Title>
        </Header>
        <HeaderAndInputs>
          <SubTitle>
            <ContainerAddInput>
              <AddInput
                placeholder="Nome do Anime"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
              />
              <AddInput
                placeholder="Quantidade de Episódio"
                onChange={(e) => setEpsodio(Number(e.target.value))}
                value={epsodio}
                type="text"
              />
              <AddInput
                placeholder="Números de Episódios já Assistidos"
                onChange={(e) => setEpsodiosAssisted(Number(e.target.value))}
                value={epsodiosAssisted}
                type="text"
              />
              <AddInput
                placeholder="Endereço da imagem (link)"
                onChange={(e) => setImage(e.target.value)}
                value={image}
                type="text"
              />

              <AddInput
                placeholder="Sinopse do Anime"
                onChange={(e) => setSinopse(e.target.value)}
                value={sinopse}
                type="text"
              />

              <AddButton
                disabled={
                  name === "" ||
                  image === "" ||
                  epsodio === "" ||
                  sinopse === "" ||
                  epsodiosAssisted === ""
                }
                onClick={add}
              >
                Adicionar
              </AddButton>
            </ContainerAddInput>
          </SubTitle>
        </HeaderAndInputs>

        <ListAnimeTitle>Lista de Animes </ListAnimeTitle>
        <ListOfAnimeAddContent>
          {list
            .slice()
            .reverse()
            .map((everything) => (
              <ListOfAnimeAdd
                key={everything.name}
                image={image}
                data={everything}
                name={name}
                epsodiosAssisted={epsodiosAssisted}
                increment={() => increment(everything.id)}
                decrement={() => decrement(everything.id)}
                rem={rem}
                epsodio={epsodio}
                sinopse={sinopse}
                list={list}
              />
            ))}
        </ListOfAnimeAddContent>
      </Container>
    </>
  );
};

export default head;
