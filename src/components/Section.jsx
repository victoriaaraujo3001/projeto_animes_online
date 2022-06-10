/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { api } from "../services/api";
import "../styles/styleSection.css";
import { redirectLink } from "./Link";
export function Section() {

  const [listAnimes, setListAnimes] = useState([]);
  const [listAnimesVistos, setListAnimesVistos] = useState([]);

  async function consultaAnimes() {
    const animes = await api.get("/animes");
    // const insert = await api.delete("/animes/2");
    // console.log(
    //   "🚀 ~ file: Section.jsx ~ line 19 ~ consultaAnimes ~ insert",
    //   insert
    // );
    setListAnimes(animes.data.filter((anime)=> !anime.assistido));
    setListAnimesVistos(animes.data.filter((anime) => anime.assistido));
  }
  useEffect(() => {
    consultaAnimes();
  }, []);
  const settings = {
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    initialSlide: 0,
    centerPadding: "14px",
    // speed: 300,
    // lazyLoad: 'ondemand',
  };

  return (
    <>
      <header className="movies">
        <p className="title">Continue assistindo</p>
        <div>
          <Slider {...settings}>
            {listAnimesVistos.length ? (
              listAnimesVistos.map((anime, index) => {
                return (
                  <div className="list-animes" key={index}>
                    <Link
                      onClick={() => redirectLink(`/infoAnime/${anime.id}`)}
                      style={{ textDecoration: "none" }}
                    >
                      <img src={anime.imgCapa} className="anime" />
                      <h5 className="subtitle">{anime.nome}</h5>
                    </Link>
                  </div>
                );
              })
            ) : (
              <h1>Aguarde...</h1>
            )}
          </Slider>
        </div>
      </header>
      <section className="whatching">
        <p className="title">Assistidos</p>
        <div>
          <Slider {...settings}>
            {listAnimes.length ?(listAnimes.map((anime, index) => {
              return (
                <div className="list-animes" key={index}>
                  <img src={anime.img} className="anime" />
                  <h5 className="subtitle">{anime.nome}</h5>
                </div>
              );
            })): <span className="error">CARREGANDO...</span>}
          </Slider>
        </div>
      </section>
    </>
  );
}
