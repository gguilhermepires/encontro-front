import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState();
  async function btProximo(e) {
    e.preventDefault();
    let data = await fetch(`http://localhost:3001/api/v1/login/v1?email=${email}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    data = await data.json();
    if (data.data === null) {
      // redirect to signUp page
      console.log('line 18','cadastro');
      
    } else {
      console.log('login2 ', data.data);
      // redirect to login page
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={btProximo} className="App-form-home">
          <div>
            <img src='13810092.jpg' height='100'></img>
          </div>
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
