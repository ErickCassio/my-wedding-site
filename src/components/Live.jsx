function Live() {
  return (
    <div className="flex flex-col items-center justify-center py-6 pb-9">
      <h1 className="text-4xl sm:text-5xl montecarlo-font pb-4">
        Transmissão ao vivo
      </h1>
      <button
        onClick={() => {
          window.open("https://www.youtube.com/@emilyclemes8493", "_blank");
        }}
        className="bg-red-600 rounded-lg px-6 py-0.5 text-white quicksand-font font-bold text-xl cursor-pointer"
      >
        Acesse aqui
      </button>
    </div>
  );
}

export default Live;
