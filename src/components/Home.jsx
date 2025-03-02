import HomeImg from "../assets/images/home_img.jpg";
import arcWithLetters from "../assets/images/E&E_img.png";

function Home() {
  return (
    <div className="relative h-screen sm:flex sm:min-h-screen">
      {/* Bloco Esquerdo: fundo escuro */}
      <div className="h-[30%] sm:h-full bg-[#090E14] sm:w-[30%] flex flex-col items-center justify-center">
        {/* Conteúdo específico para esse bloco, se houver */}
      </div>

      {/* Bloco Direito: foto como background + overlay + texto */}
      <div className="h-[70%] sm:h-full sm:relative sm:w-[70%]">
        {/* Circulo detrás da foto (somente em telas sm+) */}
        <div className="hidden sm:block sm:absolute top-1/2 transform -translate-y-1/2 sm:-left-[9.5rem] lg:-left-[10.5rem] overflow-hidden z-10 sm:h-[19rem] sm:w-[9.5rem] lg:h-[21rem] lg:w-[10.5rem]">
          <div className="bg-[#717171] rounded-full sm:h-[19rem] sm:w-[19rem] lg:h-[21rem] lg:w-[21rem]">
            {/* Conteúdo do círculo */}
          </div>
        </div>
        {/* Resto do conteúdo do bloco direito */}
        <div className="hidden sm:block sm:absolute top-1/2 transform -translate-y-1/2 sm:-left-36 lg:-left-40 z-10 rounded-full overflow-hidden sm:h-72 sm:w-72 lg:h-80 lg:w-80">
          <img
            src={HomeImg}
            alt="Casal sorrindo, segurando balão em formato de coração e buquê de flores azuis"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative h-full">
          <div className="absolute z-1 h-full sm:h-[100%] w-full overflow-hidden flex justify-center items-center">
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            <img
              src={HomeImg}
              alt="Casal sorrindo, segurando balão em formato de coração e buquê de flores azuis"
              className="
              object-cover
              object-center
              w-full
              h-full
              min-w-full
              min-h-full
              sm:scale-110
            "
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 w-4/6 sm:w-1/2 md:w-6/12 flex flex-col justify-center items-start space-y-2 quicksand-font sm:ms-8 md:ms-10">
            <img
              src={arcWithLetters}
              alt="Arco com três letras dentro, 'E&E'"
              className="h-20 md:sm:h-28 w-auto mt-10 sm:mt-0"
            />
            <div className="inline-block text-white font-bold text-3xl md:text-4xl lg:text-5xl ps-2 pb-3 space-y-2">
              <h1>Emily Clemes</h1>
              <h1>& Erick Ribeiro</h1>
            </div>
            <div className="flex items-center space-x-2 ps-2 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 sm:size-7 text-blue-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
              <p className="text-white text-sm sm:text-lg">
                22 de Março de 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Arco para mobile: exibe a metade superior do círculo 1rem maior que a imagem */}
      <div className="absolute sm:hidden left-1/2 bottom-[70%] -translate-x-1/2 z-0 overflow-hidden w-[17rem] h-[8.5rem]">
        <div className="bg-[#717171] rounded-full w-[17rem] h-[17rem]" />
      </div>

      {/* Imagem circular para mobile, sobrepondo metade na div 30% e metade na div 70% */}
      <div className="absolute sm:hidden top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-full overflow-hidden h-64 w-64">
        <img
          src={HomeImg}
          alt="Casal sorrindo, segurando balão em formato de coração e buquê de flores azuis"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default Home;
