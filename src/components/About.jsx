import { useState } from "react";
import carouselOne from "../assets/images/carousel_one.jpg";
import carouselTwo from "../assets/images/carousel_two.jpg";
import carouselThree from "../assets/images/carousel_three.jpg";

function About() {
  // Array de slides do carrossel
  const slides = [
    {
      image: carouselOne,
      title: "Unidos por Deus... e pela mãe da noiva",
      description:
        "Embora essa união tivesse no coração de Deus, Ele usou a mãe da noiva pra dar match no casal, que gentilmente convidou o noivo pra conhecer sua filha, o resultado vocês já sabem 😄",
    },
    {
      image: carouselTwo,
      title: "Apesar de sermos parecidos, não, nós não somos irmãos!!!",
      description:
        "Tivemos que atravessar o oceano para aqui em Portugal viver um conto de amor verdadeiro, e assim se tornar uma só carne!",
    },
    {
      image: carouselThree,
      title: "É biscoito ou bolacha? 💕",
      description:
        "Não importa! O que realmente importa é que, mesmo com as diferenças entre um nordestino e uma paulista, tudo se encaixa de um jeito único e especial. No fim, é o amor que dá o verdadeiro sabor a essa história, provando que as diferenças só tornam tudo mais mágico!",
    },
  ];

  // Estado para armazenar o índice atual do slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Função para avançar para o próximo slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Função para voltar para o slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-5 py-4">
      {/* Título do componente */}
      <h1 className="montecarlo-font text-4xl">Um pouco sobre nós</h1>
      {/* Container da imagem (carrossel) com largura 70% da div pai */}
      <div className="relative w-[90%] sm:w-[70%] mx-auto overflow-hidden aspect-[5/3] md:aspect-[6/3]">
        <img
          src={slides[currentSlide].image}
          alt="Imagem do casal"
          className="w-full h-full object-cover object-[50%_35%] rounded-3xl"
        />
        {/* Botão de seta esquerda: chama prevSlide ao clicar */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {/* Botão de seta direita: chama nextSlide ao clicar */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      {/* Seção de texto que acompanha o slide */}
      <div className="flex flex-col items-center justify-center text-center space-y-5">
        <h2 className="montecarlo-font text-3xl px-4">
          {slides[currentSlide].title}
        </h2>
        <p className="quicksand-font px-8 sm:px-32 md:px-48 lg:px-80">
          {slides[currentSlide].description}
        </p>
      </div>
    </div>
  );
}

export default About;
