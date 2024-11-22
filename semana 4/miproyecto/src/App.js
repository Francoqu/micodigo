import vaca from './images/vaca.jpg';
import messi from './images/messinavideño.jpg';
import foto from './images/horaaventuras.jpg';
import './App.css';
import Image from './components/image'; 
import Button from './components/button';

function App() {
  const lanzarAlerta = () => {
    alert("SOY UNA ALERTA");
  };

  return (
    <div>
      <header>
        <p>
          Hola aaaaaaaaaaaaaaaaa <br />
          Nombre: Franco Quezada
        </p>
        
        <Image paramlogo={vaca} />
        <Image paramlogo={foto} />
        <Image paramlogo={messi} />

        
        <Button
          id="alerta"
          name="alerta"
          events={() => lanzarAlerta()} 
        />
      </header>
    </div>
  );
}

export default App;
