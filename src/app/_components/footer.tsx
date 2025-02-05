import golden from "../../../public/golden.png";
import royal from "../../../public/royal.png";
import primier from "../../../public/primier.png";
import whiskas from "../../../public/whiskas.png";
import natural from "../../../public/natural.png";
import Image from "next/image";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
];

export function Footer() {
  return (
    <section className="bg-[#E84c3d] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas que trabalhamos
          </h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor e dedicação.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5518981142927&fbclid=PAZXh0bgNhZW0CMTEAAaY0O7hu82GOFDet5PSotsr4zKLGsJ9AuoB-dCI40nYWGex58iUuiFjVFCw_aem_h0LLlP5qhBf-KgBz1f_ROg"
              target="_blank"
              className="bg-green-500 px-4 py-2 rounded-md"
            >
              Contato via WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: tiago_carvalho07@yahoo.com.br</p>
            <p>Telefone: (18) 98114-2927</p>
            <p>Rua X, centro, Araçatuba | SP</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
            <div className="flex gap-3 mt-5 ">
              <a
                href="https://www.linkedin.com/in/tiago-carvalho-ux/"
                target="_blank"
              >
                <LinkedinLogo className="w-10 h-8" />
              </a>
              <a
                href="https://www.instagram.com/elite_webdesigner/"
                target="_blank"
              >
                <InstagramLogo className="w-10 h-8" />
              </a>
              <a href="https://github.com/tiagocarvalhoUx" target="_blank">
                <GithubLogo className="w-10 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
