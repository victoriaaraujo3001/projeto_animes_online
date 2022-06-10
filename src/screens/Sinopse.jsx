import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoAnime } from "../components/InfoAnime";
import { api } from "../services/api";

export function SinopseScreen() {
  const [anime, setAnime] = useState(false);
  let { id } = useParams();
  async function consultaAnime() {
    const res = await api.get(`/animes/${id}`);
    console.log(
      "🚀 ~ file: InfoAnime.jsx ~ line 11 ~ consultaAnime ~ res",
      res.data
    );
    setAnime(res.data);
  }
  useEffect(() => {
    consultaAnime();
  }, []);
  return anime ? <InfoAnime anime={anime} /> : <h1>Carregando...</h1>;
}
