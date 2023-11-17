import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Lorem ipsum dolor <br /> sit amet
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. Maecenas eu massa sit amet <br />
          augue consectetur ullamcorper non ac massa.
        </p>
        <br />
        <button>Botão</button>
      </header>

      <main className="App-main">
        <div className="card1">
          <div className="cardContainer">
            <h4 className="cardTitle">Título do card</h4>
            <p className="cardP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in neque et nisl.
            </p>
          </div>
        </div>

        <div className="card2">
          <div className="cardContainer">
            <h4 className="cardTitle">Título do card</h4>
            <p className="cardP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in neque et nisl.
            </p>
          </div>
        </div>

        <div className="card3">
          <div className="cardContainer">
            <h4 className="cardTitle">Título do card</h4>
            <p className="cardP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in neque et nisl.
            </p>
          </div>
        </div>

        <div className="card4">
          <div className="cardContainer">
            <h4 className="cardTitle">Título do card</h4>
            <p className="cardP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in neque et nisl.
            </p>
          </div>
        </div>

        <div className="card5">
          <div className="cardContainer">
            <h4 className="cardTitle">Título do card</h4>
            <p className="cardP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in neque et nisl.
            </p>
          </div>
        </div>

        <div className="card6">
          <div className="cardContainer">
            <h4 className="cardTitle">Título do card</h4>
            <p className="cardP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in neque et nisl.
            </p>
          </div>
        </div>
      </main>

      <footer className="App-footer">
        <h3 className="footerTitle">Entre em contato</h3>

        <input placeholder="Nome" type="text"/> <br/> <br/>
        <input placeholder="E-mail" type="email"/><br/> <br/>
        <input placeholder="Telefone" type="number"/><br/> <br/>
        <input className="mensagemFooter" placeholder="Mensagem..." type="text"/>
        <button type="submit">Enviar mensagem</button>
      </footer>
    </div>
  );
}

export default App;
