import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState();
  function btProximo(e) {
    e.preventDefault();
    console.log('teste', email);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={btProximo} className="App-form-home">
          <img src='13810092.jpg' height='100'></img>
          <div>
            <p>Experiências sociais da vida real</p>
          </div>
          <div>
            <input
              id='email'
              type='text'
              placeholder='Digite seu email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input type='submit' value='Próximo' />
          </div>
        </form>

      </header>
      <p>Não tem uma conta ? </p> <a href=''>criar conta</a>
    </div>
  );
}

export default App;
