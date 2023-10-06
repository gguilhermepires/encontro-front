
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <div style={{
      marginLeft: '4rem',
      fontSize: '20px',
      padding: '20px',
      backgroundColor: 'salmon',
      color: 'white',
    }}>
      <h1>header </h1>

      <div>
        <h1>select city </h1>
        <h1>Junte se a gente para uma noite inesquecivel com o seu grupo compativel
          em
        </h1>
        <h1>data:quaeta , mes, dia, hora </h1>

        <button>Reservar meu assento</button>
        <h1>Falta 3 dias , 5 horas e 33 minutos para reservar </h1>

      </div>


      <div>
        depois de resevador
        <h1>cartao reservado
          seu assento foi confimado
          data
          cidade
        </h1>
        <h1>Composição do grupo </h1>
        <h1>restaurante </h1>
        <h1>Feedback </h1>

      </div>





      <Outlet />
    </div>
  );
}

export default Home;
