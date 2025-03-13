function Live() {
  const openYouTube = () => {
    // Replace this with your channel ID or URL
    const channelUrl = "https://www.youtube.com/@emilyclemes8493";
    // For deep linking to the YouTube app, you can try "youtube://"
    // Note: This may work only if the app is installed.
    const mobileDeepLink = "youtube://www.youtube.com/@emilyclemes8493";

    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // On mobile, try deep linking first
      window.open(mobileDeepLink, "_blank") ||
        window.open(channelUrl, "_blank");
    } else {
      window.open(channelUrl, "_blank");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center py-6 pb-9">
      <h1 className="text-4xl sm:text-5xl montecarlo-font pb-4">
        Transmissão ao vivo
      </h1>
      <button
        onClick={openYouTube}
        className="bg-red-600 rounded-lg px-6 py-0.5 text-white quicksand-font font-bold text-xl cursor-pointer"
      >
        Acesse aqui
      </button>
    </div>
  );
}

export default Live;
