import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.webp";
import Image from "next/image";
import catImg from "../../../public/cat-hero.png";

export function Hero() {
  return (
    <section className="bg-[#E84c3d] text-white relative overflow-hidden">
      <div>
        <Image
          src={dogImg}
          alt="foto do cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-80 lg:hidden"
        />

        <div className="absolute inset-0 bg-black opacity-15 md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 mb:pd-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
                data-aos="zoom-in"
            >
              Seu Pet merece cuidado, carinho e atenção especial.
            </h1>

            <p className="lg:text-lg">
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <div className="flex mt-4">
              <div className="w-32 hidden lg:block">
                <Image
                  src={catImg}
                  alt="Foto do Gato"
                  quality={100}
                  className="object-fill"
                />
              </div>
            </div>

            <a
              href={`https://wa.me//5518981142927?text=Olá vim pelo site e gostaria de mais informações`}
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center
            justify-center w-fit gap-2"
              target="_blank"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via Whatsapp
            </a>
            <div className="mt-8">
              <p className=" text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                de desconto na primeira compra
              </p>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={dogImg}
              alt="Foto do Dog"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0px, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
