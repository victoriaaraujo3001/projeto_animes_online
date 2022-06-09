import "../styles/styleInfoAnime.css";
import play from "../assets/play.png";

export function InfoAnime({ list, eps }) {
  return (
    <div className="page-info-anime">
      <div className="theme-anime">
        <img
          src="https://animenewsandfacts.com/wp-content/uploads/2021/07/20210714_121355_compress75.jpg"
          alt="capa"
          className="img-theme-anime"
        />
      </div>
      <div className="info-card">
        {list.map((item) => {
          return (
            <>
              <div className="info-anime-card">
                <h1 className="sinopse-anime">
                  Sinopse : <span className="info-sinopse"> {item.sinopse}</span>
                </h1>
                <h1>
                  Data lançamento :
                  <span className="info-sinopse"> {item.dataLancamento}</span>
                </h1>
                <h1>
                  Episódios :
                  <span className="info-sinopse"> {item.qtdeEps} episódios</span>
                </h1><h1>
                  Genêro : 
                  <span className="info-sinopse"> {item.genero}</span>
                </h1>
              </div>
            </>
          );
        })}
      </div>
      <div className="list-eps">
        {eps.map((item) => {
          return (
            <>
              <div className="info-eps-card">
                <h1 className="episodios-anime">
                  Episodio
                  <span className="info-eps">
                    {eps.nome} -<span className="info-eps">{item.ep}</span>
                  </span>
                </h1>
                <hr />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
