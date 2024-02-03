import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-stone-950">
      <div className="flex flex-col justify-center max-w-4xl h-screen mx-auto">
        <h2 className="text-4xl font-semibold w-3/4 mb-5">
          Ajudando empresas a construírem{" "}
          <span className="text-violet-500">produtos digitais</span> de forma
          moderna e de alta qualidade.
        </h2>
        <p className="text-slate-400 w-3/4 mb-5">
          Uma mistura de Design, Desenvolvimento Frontend e habilidade
          profissional que vão destacar seu produto no mercado.
        </p>
        <button className="w-min bg-violet-500 px-7 py-3 rounded-md">
          <Link href="/">Instagram</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
