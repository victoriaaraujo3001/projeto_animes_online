import favoriteIcon from "../assets/favorites-icon.png";
import "../styles/styleList.css" ;

export function ListAnimes({ list }) {
  return (
    <div className="bg-list">
      {list.map((item) => {
        return (
          <>
            <div className="card-anime-fav">
              <img src={favoriteIcon} width="50px" height="50px" alt="" />
              <h5 className="title-card">{item.nome}</h5>{" "}
              <h4 className="title-card-ep">{item.ep}</h4>
            </div>
          </>
        );
      })}
    </div>
  );
}
