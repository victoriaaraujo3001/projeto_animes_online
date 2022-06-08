import "../styles/styleAccount.css";

export function AccountUser({ list }) {
  return (
    <>
      <h6 className="title-form">Cadastre-se</h6>
    <div className="info-user">
      <form method="get" className="form">
        <label>Usuário</label>
        <input
          type="text"
          className="input-user"
          placeholder="ex.: usuario123..."
        />
        <label>Senha</label>
        <input
          type="password"
          className="input-password"
          placeholder="ex.: usuario123..."
        />
         {/* <div className="list-whatched">
          {list.map((item) => {
            return (
              <>
                <div className="card-anime-watched">
                  <h5 className="title-card">{item.nome}</h5>
                  <h4 className="title-card-ep">{item.ep}</h4>
                </div>
              </>
            );
          })}
        </div> */}
        <button type="submit">Enviar</button>
      </form>
    </div>
    </>
  );
}
