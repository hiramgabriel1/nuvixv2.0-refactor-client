import { MdArrowRightAlt } from "react-icons/md";
import { Button } from "../components/Buttons/Button";
import { Hero } from "../components/Commons/Hero";
import { FaRegPlayCircle } from "react-icons/fa";
import dockerIcon from '../assets/images/icons/docker-icon.svg';
import reactIcon from '../assets/images/icons/react-icon.svg';
import nodeIcon from '../assets/images/icons/nodejs-icon.svg';
import postgresIcon from '../assets/images/icons/postgres-icon.svg';
import typescriptIcon from '../assets/images/icons/typescript-icon.svg';
import nestIcon from '../assets/images/icons/nest-icon.svg';
import redisIcon from '../assets/images/icons/redis-icon.svg';
import tailwindIcon from '../assets/images/icons/tailwind-icon.svg';
function IndexPage() {
  return (
    <>
      <Hero styles="h-[871px] bg-white flex flex-col">
        {/* Contenido principal */}
        <div className="flex-grow flex flex-col items-center mt-[55px] z-10">
          <p className="font-sarabun font-bold text-5xl leading-[68px] text-center w-[636px]">
            Nuvix Dev: Donde los desarrolladores se encuentran y colaboran
          </p>

          <p className="pt-4 font-lato font-normal text-lg text-center w-[516px] text-neutral-600">
            "Nuvix reúne a profesionales y aficionados de la tecnología en un
            solo lugar. Conéctate, comparte tus ideas y encuentra nuevas
            oportunidades. Con Nuvix Dev, podrás conocer a personas afines y
            construir amistades basadas en intereses tecnológicos comunes."
          </p>

          <div className="flex justify-center gap-11 mt-8">
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
        </div>

        {/* Imágenes con z-index más bajo */}
        <div className="absolute top-[273px] left-[200px] flex items-center z-0">
          <img
            src="/public/images/landingPage/first-agent.png"
            alt="Left"
            className="w-[302px] h-[444px] [mask-image:linear-gradient(black_80%,transparent)]"
          />
        </div>
        <div className="absolute top-[263px] right-[200px] flex items-center z-0">
          <img
            src="/public/images/landingPage/second-agent.png"
            alt="Right"
            className="w-[324px] h-[444px] [mask-image:linear-gradient(black_80%,transparent)]"
          />
        </div>

        {/* Último div en la parte inferior */}
        <div className="bg-neutral-100 w-full h-[192px] flex flex-col items-center justify-center">
          <span className="text-center m-4 text-neutral-500 text-lg font-sarabun font-semibold">Desarrollado con:</span>
          <div className="flex mt-4 gap-4 justify-center">
            <img src={redisIcon} alt="IMG" className="h-12 w-12" />
            <img src={nestIcon} alt="IMG" className="h-12 w-12" />
            <img src={typescriptIcon} alt="IMG" className="h-12 w-12" />
            <img src={postgresIcon} alt="IMG" className="h-12 w-12" />
            <img src={dockerIcon} alt="IMG" className="h-12 w-12" />
            <img src={reactIcon} alt="IMG" className="h-12 w-12" />
            <img src={tailwindIcon} alt="IMG" className="h-12 w-12" />  
            <img src={nodeIcon} alt="IMG" className="h-12 w-12" />

          </div>
        </div>
      </Hero>
    </>
  );
}

export default IndexPage;
