import { Link } from 'react-router-dom';

import { useGlobalContext } from '../context';

export default function HeaderNavLink({ title, url, isActive }) {
  const { setActivePage } = useGlobalContext();

  return (
    <li
      className={isActive ? 'current' : undefined}
      onClick={() => setActivePage(title)}
    >
      <Link to={url}>{title}</Link>
    </li>
  );
}
