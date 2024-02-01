import Img from "next/image";
import Link from "next/link";

import NoImage from "@/app/imgs/no-image.jpg";

const MyProfile = () => {
  return (
    <div className="bg-stone-950 h-screen">
      <div className="flex flex-col justify-center max-w-4xl mx-auto h-5/6">
        <h2>
          Ajudando empresas a construírem produtos digitais de forma moderna e
          de alta qualidade.
        </h2>
        <p>
          Uma mistura de Design, Desenvolvimento Frontend e habilidade
          profissional que vão destacar seu produto no mercado.
        </p>
        <button>
          <Link href="/">Instagram</Link>
        </button>
      </div>

      <div className="grid grid-cols-2 p-2 max-w-4xl mx-auto">
        <Img src={NoImage} alt="teste" />
        <div>
          <h4>Quem sou eu</h4>
          <h1>Lucas Santiago</h1>
          <h2>Frontend Developer</h2>
          <p>
            Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora) sou o
            criador do eFront, um material de ensino de frontend pela internet.
            Atualmente sou freelancer como Frontend Developer e UI Designer.
            Desenvolvo interfaces modernas e de alta qualidade, concentrado em
            performance, animações, responsividade e SEO.
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
