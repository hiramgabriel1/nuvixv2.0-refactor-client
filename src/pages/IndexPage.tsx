import { Hero } from "../components/Commons/Hero";

function IndexPage() {
  return (
    <>
      <Hero styles="h-[4  16px] bg-white relative grid grid-cols-3 items-center">
        <div className="col-span-3 flex flex-col items-center">
          <p className="font-sarabun font-bold text-5xl leading-[68px] text-center w-[636px]">
            Nuvix Dev: Donde los desarrolladores se encuentran y colaboran
          </p>

          <p className="pt-5 font-lato font-normal text-lg leading-5 text-pretty w-[516px] text-neutral-600">
            "Nuvix reúne a profesionales y aficionados de la tecnología en un
            solo lugar. Conéctate, comparte tus ideas y encuentra nuevas
            oportunidades. Con Nuvix Dev, podrás conocer a personas afines y
            construir amistades basadas en intereses tecnológicos comunes."
          </p>
        </div>
        <div className="absolute top-[380px] left-[200px] bottom-0 flex items-center">
          <img
            src="/public/images/landingPage/first-agent.png"
            alt="Left"
            className="w-[302px] h-[444px]"
          />
        </div>
        <div className="absolute top-[380px] right-[200px] bottom-0 flex items-center">
          <img
            src="/public/images/landingPage/second-agent.png"
            alt="Right"
            className="w-[324px] h-[444px]"
          />
        </div>
      </Hero>
    </>
  );
}

export default IndexPage;
