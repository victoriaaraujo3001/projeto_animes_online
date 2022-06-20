import { useEffect, useState } from "react";
import { api } from "../services/api";

import "../styles/styleCategory.css";

export function Category() {
  const [listCategories, setListCategories] = useState([]);

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
                        alt=""
                      />
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
