import BenefitCard from "./benefit-card";

const BenefitCardsGrid = () => {
  return (
    <div className="max-w-full benefits-class rounded-31xl flex flex-col pt-0 px-0 box-border items-center justify-start text-left text-17xl text-gray-200 font-playfair-display pb-20">
      <div className="self-stretch flex flex-row flex-wrap py-0 box-border items-start justify-center">
        <div className="px-5 sm:px-0 bg-gray-500 flex flex-row items-start justify-center md:flex-col">
     
          <BenefitCard
            tecnologiaDePunta="Equipo Multidiciplinario"
            ellipse13="/ellipse-131.png"
            laTecnologaMasCompletaDel="Somos el equipo numero 1 en todo México"
          />
          <BenefitCard
            tecnologiaDePunta="Tecnologia De Punta"
            ellipse13="/ellipse-131.png"
            laTecnologaMasCompletaDel="La tecnología mas completa del mercado"
          />
          <BenefitCard
            tecnologiaDePunta="Pacienetes Satisfechos"
            ellipse13="/ellipse-13.png"
            laTecnologaMasCompletaDel="El cuidado del paciente siempre es nuestra prioridad"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitCardsGrid;
