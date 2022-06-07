/* eslint-disable jsx-a11y/alt-text */
import Slider from "react-slick";

import "../styles/styleSection.css";
export function Section() {
  const arrayAnimesAssistindo = [
    {
      url: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/12/Noragami_volume_1_cover.jpg/220px-Noragami_volume_1_cover.jpg",

      nome: "Noragami",
    },
    {
      url: "https://i0.wp.com/i.pinimg.com/originals/47/b6/c8/47b6c8f6a9e2d65df9972441c0ac9449.jpg",

      nome: "One Puch Man",
    },
    {
      url: "https://www.anitube.site/wp-content/uploads/Toradora-poster.jpg",

      nome: "Toradora",
    },
    {
      url: "https://animesonehd.xyz/wp-content/uploads/2020/06/Fullmetal-Alchemist-Brotherhood-online-em-hd-animesonehd.jpg",

      nome: "Fullmetal Alchemist Brotherhood",
    },
    {
      url: "https://animesonehd.xyz/wp-content/uploads/2019/10/Tensei-shitara-Slime-Datta-Ken-animesonehd.jpg",
      nome: "Tensei Shitara Slime Datta Ken",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9ESDUB35Esyxgm5uPsOUETpmxFDFzvnCYA6U6YMbfO-RSHdZ2wCyGPurQHEhQMLPnDA&usqp=CAU",

      nome: "Dr. Stone",
    },
    {
      url: "https://i.pinimg.com/736x/e4/bd/9e/e4bd9e5d511c47503c2caecc0f8e0148.jpg",

      nome: "Kimetsu no Yaiba",
    },
    {
      url: "https://wikiimg.tojsiabtv.com/wikipedia/en/7/72/Bleachanime.png",
      nome: "Bleach",
    },
    {
      url: "https://img.assinaja.com/assets/tZ/004/img/158581_520x520.jpg",
      nome: "The Promise Neverland",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/pt/c/c0/Death_Note_vol._01.jpg",
      nome: "Death Note",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/pt/6/65/Tokyo_Ghoul_volume_1.jpg",
      nome: "Tokyo Ghoul",
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/51suPR+LhgS._SX349_BO1,204,203,200_.jpg",
      nome: "No Game No Life",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/pt/b/b2/SwordArtOnlineVol.1.jpg",
      nome: "Sword Art Online",
    },
  ];

  const arrayAnimesMaisAssistidos = [
    {
      url: "https://img1.ak.crunchyroll.com/i/spire4/5568ffb263f6bcba85a639980b80dd9a1612993223_full.jpg",

      nome: "Naruto Shipudden",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/pt/thumb/5/51/Shingeki_no_Kyojin_1%C2%AA_temporada.jpg/230px-Shingeki_no_Kyojin_1%C2%AA_temporada.jpg",
      nome: "Shingeki No Kyojin",
    },
    {
      url: "https://jovemnerd.com.br/wp-content/uploads/2019/05/black-clover-poster.jpg",
      nome: "Black Clover",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/pt/7/74/Dragon_Ball_Super_Key_visual.jpg",
      nome: "Dragon Ball Super",
    },

    {
      url: "https://media.fstatic.com/FOmZuVltaHfgiLZdvFkhpGTX5kE=/290x478/smart/media/movies/covers/2021/03/defghgbf.jpg",

      nome: "Boruto – Naruto Next Generation",
    },

    {
      url: "https://wikiimg.tojsiabtv.com/wikipedia/en/thumb/6/62/Main_characters_of_One_Piece.png/250px-Main_characters_of_One_Piece.png",

      nome: "One Piece",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/pt/5/5a/Boku_no_Hero_Academia_Volume_1.png",

      nome: "Boku No Hero",
    },

    {
      url: "https://m.media-amazon.com/images/I/51dONmpss4L.jpg",

      nome: "JoJo’s Bizarre Adventure",
    },
  ];

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
            {arrayAnimesAssistindo.map((anime, index) => {
              return (
                <div className="list-animes" key={index}>
                  <img src={anime.url} className="anime" />
                  <h5 className="subtitle">{anime.nome}</h5>
                </div>
              );
            })}
          </Slider>
        </div>
      </header>
      <section className="whatching">
        <p className="title">Mais assistidos </p>
        <div>
          <Slider {...settings}>
            {arrayAnimesMaisAssistidos.map((anime, index) => {
              return (
                <div className="list-animes" key={index}>
                  <img src={anime.url} className="anime" />
                  <h5 className="subtitle">{anime.nome}</h5>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
      <article className="add">
        <p className="title">Adicionados recentemente</p>
        {/* linha */}
        <div className="list-animes">
          <div>
            <img
              src="https://sm.ign.com/ign_br/screenshot/default/jolyne_1a7z.png"
              alt="one piece"
              className="anime"
            />
            <h5>JoJos Bizarre Adventure – Stone Ocean</h5>
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81dNXBw7opL.jpg"
              alt="one piece"
              className="anime"
            />
            <h5>Aggretsuko</h5>
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/M/MV5BZTBjZjAyMDUtOTRhYS00ZjEzLTlhMWQtZGNjNDA1ZWNlZDVkXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg"
              alt="one piece"
              className="anime"
            />
            <h5>The Orbital Children</h5>
          </div>
          <div>
            <img
              src="https://cdn.myanimelist.net/images/anime/1678/121388.jpg"
              alt="one piece"
              className="anime"
            />
            <h5>Tiger and Bunny 2</h5>
          </div>
          <div>
            <img
              src="https://cdn.animenewsnetwork.com/thumbnails/max400x400/cms/news.4/171733/postervisual.jpg"
              className="anime"
            />
            <h5>The Seven Deadly Sins: Grudge of Edinburgh</h5>
          </div>
          <div>
            <img
              src="https://pbs.twimg.com/media/FO0lniEUYAATscW?format=jpg&name=medium"
              className="anime"
            />
            <h5>Vampire in the Garden</h5>
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/c7fff6_b3c0eb2931ec4f9883ad128d99712502~mv2.jpg/v1/fit/w_322%2Ch_450%2Cal_c%2Cq_80/file.jpg"
              className="anime"
            />
            <h5>Ultraman</h5>
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/M/MV5BYTAzMjA3OGQtYTY1MS00ZmJjLTk5OGUtY2Q1NjY1ZGRmYWJlXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
              className="anime"
            />
            <h5>Rilakkuma’s Theme Park Adventure</h5>
          </div>
        </div>
      </article>
    </>
  );
}