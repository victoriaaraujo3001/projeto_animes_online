import { useEffect, useState } from "react";
import { ListAnimes } from "../components/List";
import { api } from "../services/api";

export function FavoritesScreen() {
  const [listFavorites, setListFavoritos] = useState([]); 
  
  async function FavoritesApi() {
    const favoritos = await api.get("/animes");
    console.log(favoritos);
    setListFavoritos(favoritos.data.filter((anime) => anime.favorito));

    //.filter((anime) => anime.favorito)
  }
  useEffect(() => {
    FavoritesApi();
  }, []);

  return listFavorites ? (
    <ListAnimes link={listFavorites} />
  ) : (
    <h1>Carregando...</h1>
  );
}
