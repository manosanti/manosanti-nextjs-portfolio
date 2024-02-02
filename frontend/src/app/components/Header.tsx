import Img from 'next/image';

// Images
import Logo from '@/app/imgs/manosanti-logo.png';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-neutral-950 w-full fixed">
      <div className='max-w-4xl mx-auto flex justify-between py-8'>
        <Img src={Logo} className='flex items-center' alt='manosanti' />
        <div>
          <ul className='flex items-center'>
          <li className='duration-300 hover:scale-105'><Link href="/" className='mr-8 text-slate-300 duration-300 hover:text-violet-500'>Teste</Link></li>
          <li className='duration-300 hover:scale-105'><Link href="/" className='mr-8 text-slate-300 duration-300 hover:text-violet-500'>Teste</Link></li>
          <li className='duration-300 hover:scale-105'><Link href="/" className='mr-0 text-slate-300 duration-300 hover:text-violet-500'>Teste</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header