import Img from 'next/image';

// Images
import Logo from '@/app/imgs/manosanti-logo.png';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-neutral-950">
      <div className='max-w-4xl mx-auto flex justify-between py-4'>
        <Img src={Logo} className='flex items-center' alt='manosanti' />
        <div className='items-center'>
          <ul className='flex items-center'>
            <li className='pr-6'><Link href="/">Teste</Link></li>
            <li className='pr-6'><Link href="/">Teste</Link></li>
            <li className='pr-6 last'><Link href="/">Teste</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header