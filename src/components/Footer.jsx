import { FaUnsplash } from 'react-icons/fa6';

import { footerSocialLinks } from '../data';
import Logo from './Logo';
import FooterSocialLink from './FooterSocialLink';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer-flex'>
        <div className='footer-logo-wrapper'>
          <Logo />

          <div className='footer-disclaimer'>
            Powered by{' '}
            <span>
              <FaUnsplash /> Unsplash
            </span>
          </div>
        </div>

        <address className='info'>
          <h4>Contact us</h4>
          <ul>
            <li>+1 (312) 531-5585</li>
            <li>contact@lumina.io</li>
            <li>56922, 10 Main st. Boston MA</li>
          </ul>
        </address>

        <address className='social'>
          <h4>Follow us</h4>
          <ul>
            {footerSocialLinks.map((ln) => (
              <FooterSocialLink key={ln.id} {...ln} />
            ))}
          </ul>
        </address>
      </div>
    </footer>
  );
}
