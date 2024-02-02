import Img from "next/image";
import Link from "next/link";

// import NoImage from "@/app/imgs/no-image.jpg";
import profileImage from '@/app/imgs/manosanti-image.webp';

const MyProfile = () => {
  return (
    <div className="bg-stone-950">
    <div className="bg-neutral-950 border border-slate-800 w-fit mx-auto p-8 rounded-xl">
      <div className="grid grid-cols-2 p-2 max-w-4xl mx-auto gap-9">
        <Img src={profileImage} alt="teste" className="rounded-md" />
        <div>
          <h4 className="text-violet-500">Quem sou eu</h4>
          <h1 className="text-4xl">Lucas Santiago</h1>
          <h2 className="text-2xl">Frontend Developer</h2>
          <p className="text-slate-400">
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
    </div>
  );
};

export default MyProfile;
