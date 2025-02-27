import HomeImg from "../assets/images/home_img.jpg";
import arcWithLetters from "../assets/images/E&E_img.png";

function Home() {
  return (
    <div className="sm:flex sm:min-h-screen">
      {/* Bloco Esquerdo: fundo escuro + foto circular */}
      <div className="bg-[#090E14] sm:w-[30%] flex flex-col items-center justify-center">
        {/* Texto sobre a foto circular e espaço pra alinhar a foto */}
        <div className="bg-[#090E14] h-48 sm:h-0"></div>
        {/* Circulo detrás da foto */}
        <div className="absolute top-14 sm:hidden z-10 overflow-hidden h-[8.5em] sm:h-[17em] w-[17em] sm:w-[8.5em]">
          <div className="bg-[#717171] rounded-full h-[17em] w-[17em]">
            {/* A imagem ou conteúdo dentro do círculo */}
          </div>
        </div>
        {/* Foto circular */}
        <div className="absolute sm:hidden top-16 sm:top-0 z-10 rounded-full overflow-hidden h-64 w-64">
          <img
            src={HomeImg}
            alt="Casal sorrindo, segurando balão em formato de coração e buquê de flores azuis"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Bloco Direito: foto como background + overlay + texto */}
      <div className="sm:relative sm:w-[70%]">
        {/* Circulo detrás da foto */}
        <div className="hidden sm:block sm:absolute top-1/2 transform -translate-y-1/2 sm:-left-[9.5rem] lg:-left-[10.5rem] overflow-hidden z-10 sm:h-[19rem] sm:w-[9.5rem] lg:h-[21rem] lg:w-[10.5rem]">
          <div className="bg-[#717171] rounded-full sm:h-[19rem] sm:w-[19rem] lg:h-[21rem] lg:w-[21rem]">
            {/* A imagem ou conteúdo dentro do círculo */}
          </div>
        </div>
        {/* Foto circular ajustada para diversos tamanhos de tela */}
        <div className="hidden sm:block sm:absolute top-1/2 transform -translate-y-1/2 sm:-left-36 lg:-left-40 z-10 rounded-full overflow-hidden sm:h-72 sm:w-72 lg:h-80 lg:w-80">
          <img
            src={HomeImg}
            alt="Casal sorrindo, segurando balão em formato de coração e buquê de flores azuis"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Imagem de fundo */}
        <div className="absolute z-1 h-[60%] sm:h-[100%] w-full overflow-hidden flex justify-center items-center">
          {/* Overlay para escurecer a imagem */}
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <img
            src={HomeImg}
            alt="Casal sorrindo, segurando balão em formato de coração e buquê de flores azuis"
            className="
              object-cover    /* Faz a imagem preencher todo o espaço */
              object-center   /* Centraliza o foco da imagem */
              w-auto         /* Largura automática, para não distorcer */
              h-auto         /* Altura automática, para não distorcer */
              min-w-full     /* Garante que, no mínimo, ocupe toda a largura do container */
              min-h-full     /* Garante que, no mínimo, ocupe toda a altura do container */
              
              sm:scale-110      /* Aumenta um pouco a imagem para ficar maior que o container */
            "
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 w-4/6 sm:w-5/12 md:w-6/12 flex flex-col justify-center items-start space-y-2 quicksand-font md:ms-10">
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

            <p className="text-white text-sm sm:text-lg">22 de Março de 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
