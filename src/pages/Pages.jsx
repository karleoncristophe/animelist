import styled from "styled-components";
import Adder from "../common/Adder";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(6deg, #170238, #4d107c);
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

const Spacer = styled.div`
  height: 10vh;
  background: transparent;

  @media (max-width: 720px) {
    height: 0;
  }
`;

const getList = () => {
  const get = localStorage.getItem("@listAnime");
  const data = JSON.parse(get) || [];
  return data;
};

const Pages = () => {
  const [list, setList] = useState(getList());

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [epsodio, setEpsodio] = useState("");
  const [epsodiosAssisted, setEpsodiosAssisted] = useState("");
  const [sinopse, setSinopse] = useState("");

  const clear = () => {
    setName("");
    setImage("");
    setEpsodio("");
    setEpsodiosAssisted("");
    setSinopse("");
  };

  const verify = (name) => {
    const exists = list.find((item) => item.name === name);

    if (exists)
      alert("Um anime com este nome já foi adicionado!! Adicione outro.");

    return exists;
  };

  const add = () => {
    if (verify(name)) {
      return;
    }

    if (!image || !name) {
      return;
    }

    const everything = {
      name,
      id: Date.now(),
      image,
      epsodio,
      sinopse,
      epsodiosAssisted,
    };
    const newList = list;

    newList.push(everything);
    localStorage.setItem("@listAnime", JSON.stringify(newList));
    setList(newList);
    clear();
  };

  const increment = (id) => {
    const newlist = list.map((item) => {
      if (item.id === id) {
        if (item.epsodiosAssisted >= item.epsodio) {
          alert("Parabéns!! Você concluiu o anime.");
          return item;
        }
        item.epsodiosAssisted = item.epsodiosAssisted + 1;
      }
      return item;
    });

    localStorage.setItem("@listAnime", JSON.stringify(newlist));
    setList(newlist);
  };

  const decrement = (id) => {
    const newlist = list.map((item) => {
      if (item.id === id) {
        if (item.epsodiosAssisted <= 0) {
          alert("O decrementador atingiu o seu limite.");
          return item;
        }
        item.epsodiosAssisted = item.epsodiosAssisted - 1;
      }

      return item;
    });
    localStorage.setItem("@listAnime", JSON.stringify(newlist));
    setList(newlist);
  };

  const rem = (id) => {
    const newList = list.filter((everything) => everything.id !== id);
    localStorage.setItem("@listAnime", JSON.stringify(newList));
    setList(newList);
  };

  return (
    <Container>
      <Adder
        add={add}
        epsodio={epsodio}
        name={name}
        epsodiosAssisted={epsodiosAssisted}
        image={image}
        sinopse={sinopse}
        setName={setName}
        setEpsodio={setEpsodio}
        setImage={setImage}
        setEpsodiosAssisted={setEpsodiosAssisted}
        setSinopse={setSinopse}
        list={list}
        data={list}
        rem={rem}
        increment={increment}
        decrement={decrement}
      />

      <Spacer />
    </Container>
  );
};

export default Pages;
