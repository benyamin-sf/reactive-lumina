import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

import { useGlobalContext } from '../context';

export default function ThemeToggle() {
  const { isDark, setIsDark } = useGlobalContext();

  return (
    <div
      className='toggle-btn-container'
      onClick={() => setIsDark((isDark) => !isDark)}
    >
      <i className='theme-toggle'>
        {isDark ? (
          <BsFillSunFill className='theme-toggle__icon' />
        ) : (
          <BsFillMoonFill className='theme-toggle__icon' />
        )}
      </i>
    </div>
  );
}
