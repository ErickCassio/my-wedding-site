// import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import decoracaoOverview from "../assets/images/decoracao_overview.png";

function Honeymoon() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Popup shows for 3 seconds
    });
  };

  return (
    <div className="flex flex-col justify-center items-center py-6 bg-[#E8F6FF] text-black">
      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md transition-opacity duration-300">
          Chave pix copiado!
        </div>
      )}
      <h1 className="montecarlo-font text-4xl pb-4 px-5 text-center">
        Contribua para Nossa Lua de Mel
      </h1>
      <div className="bg-white flex flex-col justify-center items-center quicksand-font rounded-4xl p-4">
        <h2 className="text-2xl font-bold text-center">Pix</h2>
        {/* <QRCodeSVG value="https://www.google.com" size={128} /> */}
        <div className="w-full">
          <button
            onClick={() => {
              handleCopy("13581343401");
            }}
            className="flex items-center space-x-1 cursor-pointer py-2 hover:underline hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
              />
            </svg>
            <p className="font-medium">Chave pix (CPF)</p>
          </button>
        </div>

        <p>Erick de Cássio Justino Ribeiro</p>
        <div className="w-full">
          <button
            onClick={() => {
              handleCopy("emilyclemes24pt@gmail.com");
            }}
            className="flex items-center space-x-1 cursor-pointer py-2 hover:underline hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
              />
            </svg>
            <p className="font-medium">Chave pix (e-mail)</p>
          </button>
        </div>

        <div className="items-start w-full pb-2">
          <p className="text-start">Emily Clemes da Silva</p>
        </div>

        <div className="flex items-center w-48 overflow-hidden max-w-3xs">
          <img
            src={decoracaoOverview}
            alt=""
            className="mx-auto w-full h-10 object-cover"
          />
        </div>
      </div>
      <div className="quicksand-font pt-4 flex justify-center items-center ps-2 md:ps-8 max-w-sm sm:max-w-md md:max-w-xl">
        <p className="px-6">
          Sua contribuição ajudará a transformar nossos sonhos em realidade.
          Agradecemos de coração por fazer parte da nossa história de amor.
        </p>
      </div>
    </div>
  );
}

export default Honeymoon;
