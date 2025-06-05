import { useGlobalContext } from '../context';
import logoImg from '../assets/logo.webp';

export default function Logo() {
  const { isDark } = useGlobalContext();

  return (
    <img
      className={isDark ? 'logo logo--dark' : 'logo'}
      src={logoImg}
      alt='Lumina creative logo'
    />
  );
}
