import { MdArrowRightAlt } from "react-icons/md";
import { Button } from "../components/Buttons/Button";
import { Hero } from "../components/Commons/Hero";
import { FaRegPlayCircle } from "react-icons/fa";
import dockerIcon from "../assets/images/icons/docker-icon.svg";
import reactIcon from "../assets/images/icons/react-icon.svg";
import nodeIcon from "../assets/images/icons/nodejs-icon.svg";
import postgresIcon from "../assets/images/icons/postgres-icon.svg";
import typescriptIcon from "../assets/images/icons/typescript-icon.svg";
import nestIcon from "../assets/images/icons/nest-icon.svg";
import redisIcon from "../assets/images/icons/redis-icon.svg";
import tailwindIcon from "../assets/images/icons/tailwind-icon.svg";
import { Container } from "../components/Commons/Container";
import { Card } from "../components/Commons/Card";
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
              styleExtras="border hover:bg-[#0C988DFF] border-none rounded rounded-[22px] bg-[#0EA89BFF] font-lato text-white h-[44px] px-[16px] flex items-center"
            />
            <Button
              mode="secondary"
              title="Ver demo"
              icon={<FaRegPlayCircle className="text-xl" />}
              iconPosition="left"
              styleExtras="border  hover:text-[#0C988DFF] border-[#0EA89BFF] rounded rounded-[22px] text-[#0EA89BFF] font-lato h-[44px] px-[18px] flex items-center"
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
          <span className="text-center m-4 text-neutral-500 text-lg font-sarabun font-semibold">
            Desarrollado con:
          </span>
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

      <Container width="100%" height="1117px" background="white">
        <div className="flex flex-col items-center h-full mt-14">
          <h1 className="font-sarabun font-bold text-[64px] leading-[84px] text-center w-[636px]">
            Del problema a la solucion... Nuvix Dev
          </h1>
          <p className="font-lato text-lg text-center w-[516px] text-neutral-600 mt-6">
            Explora un espacio dedicado a desarrolladores y entusiastas de la
            tecnología. Conéctate con personas afines, comparte tus ideas y
            accede a nuevas oportunidades. En Nuvix Dev, construimos amistades y
            colaboramos en proyectos que marcan la diferencia
          </p>

          <div className="w-[1176px] h-[728px] relative top-[98px] flex items-center justify-center">
            <img
              src="/public/images/utils/mallas.svg"
              className="absolute"
              alt="IMG"
            />
            <iframe
              className="z-0"
              width="952"
              height="536"
              src="https://www.youtube.com/embed/F2oWNDq7qiM"
              title="YouTube video player"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
      <Container height="1284px" width="100%" background="white">
        <div className="flex flex-col items-center mt-[124px]">
          {/* Imagen de fondo */}
          <div className="relative w-[1176px] h-[728px] flex justify-center items-center">
            <img
              src="/public/images/utils/mallas.svg"
              className="absolute inset-0 w-full object-cover z-0"
              alt="IMG"
            />
            {/* Contenido (título y cards) */}
            <div className="absolute top-[50px] z-20 text-center">
              <h1 className="font-sarabun font-bold text-4xl text-neutral-600 mb-8">
                ¿Qué ofrece Nuvix Dev?
              </h1>

              {/* Cards */}
              <div className="grid grid-cols-2 gap-7">
                <Card
                  title="Haz networking"
                  size="sm"
                  extraStyles="text-left bg-white"
                >
                  <p className="text-lg text-neutral-600 text-lato text-left">
                    En Nuvix Dev podrás hacer networking con otros
                    desarrolladores e intercambiar conocimientos y experiencias.
                  </p>
                </Card>

                <Card
                  title="Comparte conocimientos"
                  size="sm"
                  extraStyles="bg-white"
                >
                  <p className="text-lg text-neutral-600 text-lato  text-left">
                    Crea publicaciones de tecnología y comparte tu conocimiento
                    con los demás. Podrás compartir tus proyectos para que otros
                    devs los conozcan.
                  </p>
                </Card>
                <Card
                  title="Consigue devs para tus proyectos"
                  size="sm"
                  extraStyles="bg-white"
                >
                  <p className="text-lg text-neutral-600 text-lato text-left">
                    Tienes algún proyecto en mente que quieras desarrollar? En
                    Nuvix podrás publicar tu proyecto y encontrar devs que te
                    ayuden a desarrollarlo.
                  </p>
                </Card>
                <Card
                  title="Conoce personas con tus intereses"
                  size="sm"
                  extraStyles="bg-white"
                >
                  <p className="text-lg text-neutral-600 text-lato text-left">
                    En Nuvix Dev encontrarás personas que cumplan lo mismo que
                    tu perfil para que puedas crear conexiones con personas como
                    tú.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default IndexPage;
