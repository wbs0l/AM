import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { TypeAnimation } from "react-type-animation";
import "./App.css";
import video from "./assets/video.mp4";

function App() {
  const [count, setCount] = useState(0);
  const [mensaje, setMensaje] = useState(null);
  const [mensaje2, setMensaje2] = useState(null);
  const [mensaje3, setMensaje3] = useState(null);
  const [mensaje4, setMensaje4] = useState(null);
  const videoRef = useRef(null);
  const mostrarMensaje = () => {
    setMensaje(
      "Tu, empiezas a vivir, tomaras otro rumbo y empezara un capitulo en tu vida"
    );
    setMensaje2(`Disfrutaras de placeres de la vida, Conoceras personas, te reiras , lloraras, algunos dias te despertaras mas sentimental
    Pero solo son pequeños detalles para un mayor proposito`);
    setMensaje3(
      `Y algun dia nuestros caminos se volveran a cruzar, hasta ese entonces se feliz y vive`
    );
    setMensaje4(
      `Desde que te conoci me fije en ti y quize conocerte mas, aunque esto sea un Adios, puedo tomar decisiones
      y una de ellas, seria encontrar el camino mas adecuado para formar un capitulo juntos en el libro de la vida`
    );
  };

  const videoPlay = () => {
    videoRef.current.play();
  };
  const videoPause = () => {
    videoRef.current.pause();
  };

  const aumentar = () => {
    setCount(count + 4);
  };

  return (
    <>
      <div>
        <h1>YOU</h1>
        <button onClick={mostrarMensaje}>Pulsame Aqui❤️</button>
        <div>
          {mensaje != null && (
            <p>
              <TypeAnimation
                sequence={[
                  mensaje +
                    "\n" +
                    mensaje2 +
                    "\n" +
                    mensaje3 +
                    "\n" +
                    mensaje4 +
                    "\n Te Quiero 🤍",
                  1000,
                ]}
                speed={50}
                cursor={false}
                repeat={null}
                className="type"
                style={{ whiteSpace: "pre-line", fontSize: "18px" }}
              />
            </p>
          )}
        </div>
        <video src={video} ref={videoRef} type="video/mp4"></video>
        <div>
          <button onClick={videoPlay}>Play</button>
          <button onClick={videoPause}>Pause</button>
        </div>
      </div>
    </>
  );
}

export default App;
