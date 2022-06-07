export function Account({ list }) {
  return (
    <div className="info-user">
     <form action="">
       <h6 className="subtitle-form">Cadastre-se</h6>
       <input type="text" className="input-user" placeholder="informe o nome do usuário"/>
       <input type="password" className="input-password" placeholder="crie uma senha" />
     </form>
     <div className="list-whatched">{list.map((item) => {
        return (
          <>
            <div className="card-anime-fav">
              <h5 className="title-card">{item.nome}</h5>{" "}
              <h4 className="title-card-ep">{item.ep}</h4>
            </div>
          </>
        );
      })}
    </div>
    </div>
  );
}
