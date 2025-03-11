// import leaves from "../assets/images/leaves.jpg";
import map from "../assets/images/mapa.png";
import calendar from "../assets/images/calendário.png";

function Ceremony() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center pt-4">
      <div className="md:w-4/12">
        <h1
          className="w-96 montecarlo-font text-4xl tracking-wider md:text-6xl text-center pb-3 sm:pb-0 
              font-bold
              text-[#1B1B6D]
              md:transform
              md:-rotate-90
              md:-ms-16
              lg:-ms-0"
        >
          Nosso grande dia
        </h1>
      </div>
      <div className="md:w-8/12 flex flex-col justify-center items-center">
        <img
          src={calendar}
          alt=""
          className="h-72 w-auto md:-ms-72 lg:-ms-80 xl:-ms-[28rem]"
        />
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8 xl:space-x-20 md:-ms-36 lg:-ms-80 xl:-ms-[28rem]">
          <div className="md:ps-4 quicksand-font space-y-0.5">
            <h2 className="montecarlo-font text-3xl pb-0.5 tracking-wider inline-block">
              Cerimônia
              <hr />
            </h2>

            <h6 className="font-bold">Igreja Videira Viana do Castelo</h6>
            <p>Praça 1º de Maio</p>
            <p>Viana do Castelo, Portugal</p>
          </div>
          <img
            src={map}
            alt=""
            className="h-48 w-72 lg:h-52 lg:w-80 border-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Ceremony;
