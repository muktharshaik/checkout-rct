import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.svg';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
  return (
    <div className='w-[12/12] flex p-3 justify-between items-center mb-4 border border-black'>
     <div>
      <Image src={logo} width={135} height={30} />
     </div>
     <div>
        <p className="text-sm text-textBase">Already have an account? <Link href="#"><span className='text-primary'>Sign In</span></Link></p>
      </div>
    </div>
  );
}

export default Logo;
