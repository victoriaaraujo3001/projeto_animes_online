import favoriteIcon from "../assets/favorites-icon.png";
import "../styles/styleList.css";

export function ListAnimes({link}) {
 
  return (
    <>
      <div className="div-img">
        <img
          className="img-favorites"
          src="https://i0.wp.com/wp.ufpel.edu.br/artenosul/files/2017/11/Sara1-e1510566531201.jpg?fit=640%2C480&ssl=1"
          alt="img-favorites"
        />
      </div>
      <div className="bg-list">
        {link.map((item) => {
          console.log(link)
          return (
            <>
              <div className="card-anime-fav">
                <img src={favoriteIcon} width="50px" height="50px" alt="" />
                <h5 className="title-card">{item.nome}</h5>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
