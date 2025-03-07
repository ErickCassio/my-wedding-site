import leaves from "../assets/images/leaves.jpg";
import map from "../assets/images/mapa.png";
import calendar from "../assets/images/calendário.png";

function Ceremony() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center pt-4">
      <div className="">
        <h1
          className="montecarlo-font text-4xl sm:text-8xl text-center pb-3 sm:pb-0 
              font-bold
              text-[#1B1B6D]
              sm:transform
              sm:-rotate-90"
        >
          Nosso grande dia
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={calendar} alt="" className="h-72 w-auto" />
        <div>
          <div className="ps-4">
            <h2>Cerimônia</h2>
            <h6>Igreja Videira Viana do Castelo</h6>
            <p>Praça 1º de Maio</p>
            <p>Viana do Castelo, Portugal</p>
          </div>
          <img src={map} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Ceremony;
