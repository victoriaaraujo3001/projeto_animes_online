import "../styles/styleInfoAnime.css";

export function InfoAnime({ anime }) {
  return (
    <div className="page-info-anime">
      <div className="theme-anime">
        <img src={anime.imgSinopse} alt="capa" className="img-theme-anime" />
      </div>
      <div className="info-card">
        <div className="info-anime-card">
          <h1 className="sinopse-anime">
            Sinopse : <span className="info-sinopse"> {anime.sinopse}</span>
          </h1>
          <h1>
            Data lançamento :
            <span className="info-sinopse"> {anime.dataLancamento}</span>
          </h1>
          <h1>
            Episódios :
            <span className="info-sinopse"> {anime.qtdEps} episódios</span>
          </h1>
          <h1>
            Genêro :<span className="info-sinopse"> {anime.genero}</span>
          </h1>
        </div>
      </div>
      <div className="list-eps">
        {anime.episodios.map((item) => {
          return (
            <>
              <div className="info-eps-card">
                <h1 className="episodios-anime">
                  Episodio <span className="info-eps"> {item.numEp} - </span>
                  <span className="info-eps">{item.descricao}</span>
                </h1>
                <hr/>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
