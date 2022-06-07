import { ListAnimes } from "../components/List";
const favoriteAnime = [
  {
    nome: "Nanatsu no taizai",
    ep: "15",
  },
  {
    nome: "One puch man",
    ep: "06",
  },
  {
    nome: "Toradora",
    ep: "27",
  },
  {
    nome: "Black Clover",
    ep: "260",
  },
  {
    nome: "Boku no Hero",
    ep: "40",
  },
];

export function FavoriteScreeen() {
  return (
    <>
      <div className="div-img">
        <img className="img-favorites" src="https://i0.wp.com/wp.ufpel.edu.br/artenosul/files/2017/11/Sara1-e1510566531201.jpg?fit=640%2C480&ssl=1" alt="img-favorites" />
      </div>
      <ListAnimes list={favoriteAnime} />
    </>
  );
}
