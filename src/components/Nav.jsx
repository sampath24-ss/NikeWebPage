import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
const Nav = () => {
  return (
   <header className='padding-x py-8'>
    <nav className='flex justify-between items-center max-container'>
        <a href='/'>
        <img src={headerLogo} alt='LOGO' width={130} height={29}></img>
        </a>
        <ul className='flex flex-justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-500">
                            {item.label}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
   </header>
  )
}

export default Nav