import { InfoAnime } from "../components/InfoAnime";

const info = [
  {
    nome: "Episodio",
    ep: "01",
  },
  {
    nome: "Episodio",
    ep: "02",
  },
  {
    nome: "Episodio",
    ep: "03",
  },
  {
    nome: "Episodio",
    ep: "04",
  },
  {
    nome: "Episodio",
    ep: "05",
  },
  {
    nome: "Episodio",
    ep: "06",
  },
  {
    nome: "Episodio",
    ep: "07",
  },
  {
    nome: "Episodio",
    ep: "08",
  },
  {
    nome: "Episodio",
    ep: "09",
  },
  {
    nome: "Episodio",
    ep: "10",
  },
  {
    nome: "Episodio",
    ep: "11",
  },
  {
    nome: "Episodio",
    ep: "12",
  },
  {
    nome: "Episodio",
    ep: "13",
  },
  {
    nome: "Episodio",
    ep: "14",
  },
  {
    nome: "Episodio",
    ep: "15",
  },
  {
    nome: "Episodio",
    ep: "16",
  },
];
const sinopse = [
  {
    sinopse:"A história começa por Yato, um deus menor cujo sonho é ter milhões de seguidores. Infelizmente, seu sonho está longe de se tornar realidade, visto que sequer tem um santuário dedicado ao seu nome e se encontra sem nenhum Instrumento Divino, depois que seu último se demitiu após 3 meses de parceria.",
    genero: "Ação",
    dataLancamento: "06/12/2010",
    qtdeEps: "29 "
  }
]
export function SinopseScreen(){
    return(
    <InfoAnime list={sinopse} eps={info}/>
    );
}
