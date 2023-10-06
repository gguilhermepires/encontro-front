import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={btProximo} className="App-form-home">
          <div>
            <img src='logoLoginV2.png' height='100'></img>
          </div>
          <div>
            <button>Login com google</button>
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </header>
      <p>Não tem uma conta ? </p> <a href=''>criar conta</a>
    </div>
  );
}

export default App;
