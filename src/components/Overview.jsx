import { useEffect, useState } from "react";
import casalCoracao from "../assets/images/casal_coracao.png";
import decoracaoOverview from "../assets/images/decoracao_overview.png";

const Overview = () => {
  // Estado para armazenar dias, horas e minutos restantes
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-03-22T00:00:00");

    // Função que calcula e atualiza a contagem regressiva
    const updateCountdown = () => {
      const now = new Date();
      const total = targetDate - now;
      if (total <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0 });
      } else {
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((total / (1000 * 60)) % 60);
        setTimeRemaining({ days, hours, minutes });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      {/* Cabeçalho */}
      <div className="flex justify-center items-center pt-4 space-x-2 montecarlo-font text-4xl">
        <h1>Dá pra ver</h1>
        <img src={casalCoracao} alt="" className="h-24 w-24" />
        <h1>pelo olhar...</h1>
      </div>
      <div className="w-48 overflow-hidden max-w-3xs">
        <img
          src={decoracaoOverview}
          alt=""
          className="mx-auto w-full h-10 object-cover"
        />
      </div>
      <h3 className="montecarlo-font text-center text-2xl tracking-wider px-8 py-2">
        Estamos apaixonados, e nosso grande dia está próximo!
      </h3>
      <p className="quicksand-font text-center text-sm px-6 pb-2 sm:px-32 md:px-48 lg:px-80">
        Por isso, criamos este site para compartilhar um pouco da nossa história
        de amor, e deixar algumas informações importantes para os convidados
      </p>
      {/* Seção da contagem regressiva */}
      <div className="bg-[#E8F6FF] w-full flex flex-col justify-center items-center pb-4">
        <h3 className="quicksand-font font-bold text-xl pt-3 pb-1">
          Contagem Regressiva
        </h3>
        <div className="flex space-x-4 py-3 text-lg w-full max-w-xs montserrat-font">
          {/* Caixa para DIAS */}
          <div className="flex-1 basis-0 aspect-square flex flex-col justify-center items-center bg-[#160E5E] text-white rounded-xl">
            {/* PadStart formata o número com dois dígitos */}
            <span className="text-3xl font-bold">
              {String(timeRemaining.days).padStart(2, "0")}
            </span>
            <span className="text-sm font-bold">DIAS</span>
          </div>
          {/* Caixa para HORAS */}
          <div className="flex-1 basis-0 aspect-square flex flex-col justify-center items-center bg-[#160E5E] text-white rounded-xl">
            <span className="text-3xl font-bold">
              {String(timeRemaining.hours).padStart(2, "0")}
            </span>
            <span className="text-sm font-bold">HORAS</span>
          </div>
          {/* Caixa para MINUTOS */}
          <div className="flex-1 basis-0 aspect-square flex flex-col justify-center items-center bg-[#160E5E] text-white rounded-xl">
            <span className="text-3xl font-bold">
              {String(timeRemaining.minutes).padStart(2, "0")}
            </span>
            <span className="text-sm font-bold">MINUTOS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
