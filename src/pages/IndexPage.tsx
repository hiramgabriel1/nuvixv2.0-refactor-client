import { MdArrowRightAlt } from "react-icons/md";
import { Button } from "../components/Buttons/Button";
import { Hero } from "../components/Commons/Hero";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaRegPlayCircle } from "react-icons/fa";

function IndexPage() {
  return (
    <>
      <Hero styles="h-[416px] bg-white relative grid grid-cols-3 items-center">
        <div className="col-span-3 flex flex-col items-center">
          <p className="font-sarabun font-bold text-5xl leading-[68px] text-center w-[636px]">
            Nuvix Dev: Donde los desarrolladores se encuentran y colaboran
          </p>

          <p className="pt-4 font-lato font-normal text-lg text-center w-[516px] text-neutral-600">
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
        <div className="absolute top-[380px] right-[200px] bottom-0 flex items-center ">
          <img
            src="/public/images/landingPage/second-agent.png"
            alt="Right"
            className="w-[324px] h-[444px]"
          />
        </div>

        <div className="absolute bottom-[20px] top-[100%] left-[49rem] transform -translate-x-1/2 flex gap-11">
          <Button 
            mode="none" 
            title="Comenzar" 
            icon={<MdArrowRightAlt className="text-2xl" />}
            iconPosition="left" 
            styleExtras="border border-none rounded rounded-[22px] bg-[#0EA89BFF] font-lato text-white h-[44px] px-[16px] flex items-center"
          />
          <Button 
            mode="secondary" 
            title="Ver demo"
            icon={<FaRegPlayCircle className="text-xl" />}
            iconPosition="left"
            styleExtras="border border-[#0EA89BFF] rounded rounded-[22px] text-[#0EA89BFF] font-lato h-[44px] px-[18px] flex items-center"
          />
        </div>
      </Hero>
    </>
  );
}

export default IndexPage;
