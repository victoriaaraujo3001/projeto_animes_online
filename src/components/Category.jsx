import { useEffect, useState } from "react";
import { api } from "../services/api";
import like from "../assets/like.png";
import teste from "../assets/teste.png";

import "../styles/styleCategory.css";

export function Category() {
  const [listCategories, setListCategories] = useState([]);

  const [boolean, setBoolean] = useState(false);

  function change() {
    if (!boolean) {
      setBoolean(true);
    } else {
      setBoolean(false);
    }
  }
  async function CategoriesApi() {
    const categorias = await api.get("/categorias");
    setListCategories(categorias.data);
  }
  useEffect(() => {
    CategoriesApi();
  }, []);

  return (
    <>
      <main className="categorias">
        {listCategories.map((category) => {
          return (
            <section className="list-generos">
              <div className="title-nome-genero">
                <h1 className="title-genero">{category.nomeGenero}</h1>
              </div>
              <div className="list-animes">
                {category.animes.map((anime) => (
                  <>
                    <div className="list-img-section">
                      <img
                        className="img-section"
                        src={anime.imgAnime}
                        alt="imgAnime"
                      />
                      <div className="button-like" onClick={() => change()}>
                        {anime.favorito || boolean ?
                            <img src={teste} alt="like" />

                          :
                          <img src={like} alt="like" />

                        }
                      </div>
                      <h3 className="nome-anime">{anime.nome}</h3>
                    </div>
                  </>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
