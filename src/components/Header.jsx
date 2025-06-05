import { useGlobalContext } from '../context';
import { headerNavigationLinks } from '../data';
import Logo from './Logo';
import HeaderNavLink from './HeaderNavLink';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const { activePage } = useGlobalContext();

  return (
    <header className='header'>
      <div className='container container-sm header-flex'>
        <Logo />

        <nav className='navbar'>
          <ul className='navbar__links-list'>
            {headerNavigationLinks.map((ln) => (
              <HeaderNavLink
                key={ln.id}
                isActive={activePage === ln.title}
                {...ln}
              />
            ))}
          </ul>
        </nav>
      </div>
      <ThemeToggle />
    </header>
  );
}
