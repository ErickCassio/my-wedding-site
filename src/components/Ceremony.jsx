import leaves from "../assets/images/leaves.jpg";
import map from "../assets/images/mapa.png";
import calendar from "../assets/images/calendário.png";

function Ceremony() {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center py-8 overflow-hidden">
      <img
        src={leaves}
        alt=""
        className="absolute hidden lg:block inset-0 w-5/12 h-[100%] object-cover -left-20"
      />

      <div className="relative flex flex-col justify-center items-center">
        <div className="md:absolute md:-left-[calc(50%-20%)] lg:-left-[calc(50%-10%)] ">
          <h1
            className="w-96 montecarlo-font text-4xl tracking-wider md:text-6xl text-center pb-3 sm:pb-0 
               font-bold text-[#1B1B6D] md:-rotate-90 md:-ms-16 lg:-ms-0"
          >
            Nosso grande dia
          </h1>
        </div>
        <img src={calendar} alt="" className="h-72 w-auto" />
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8 xl:space-x-20">
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
            className="h-48 w-72 lg:h-52 lg:w-80 border-2 border-[#E8F6FF] cursor-pointer"
            onClick={() => {
              window.open(
                "https://www.google.com/maps/place/Igreja+Videira+Viana+do+Castelo+%7C+Igreja+em+c%C3%A9lulas/@41.6953625,-8.8314366,16.99z/data=!4m10!1m2!2m1!1sigreja+videira!3m6!1s0xd25b76131d726b5:0xed24b13031cdb9ae!8m2!3d41.6951987!4d-8.8281734!15sCg5pZ3JlamEgdmlkZWlyYSIDiAEBkgESZXZhbmdlbGljYWxfY2h1cmNo4AEA!16s%2Fg%2F11qh69vcdh?entry=ttu&g_ep=EgoyMDI1MDMxMS4wIKXMDSoASAFQAw%3D%3D",
                "_blank"
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Ceremony;
