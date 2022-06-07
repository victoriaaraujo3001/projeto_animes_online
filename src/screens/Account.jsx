import { Account } from "../components/AccountUser";

const assistidos = [
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
  
export function AccountScreen({list}){
    return(
        <Account list={assistidos} />
    );
}