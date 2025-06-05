import { useGlobalContext } from '../context';
import MainHeading from './MainHeading';

export default function Hero() {
  const { activePage } = useGlobalContext();

  return (
    <section
      className={`hero ${activePage === 'contact' ? 'bg-dark' : undefined}`}
    >
      <div className='container container-sm'>
        {activePage === 'home' && (
          <MainHeading
            firstHighlight={'Passionate'}
            normalText={' creative crafting distinct projects, driven by '}
            secondHighlight={'innovation'}
          />
        )}
        {activePage === 'about' && (
          <MainHeading
            firstHighlight={'Inspired'}
            normalText={' minds, shaping exceptional projects, fueled by '}
            secondHighlight={'ingenuity'}
          />
        )}
        {activePage === 'contact' && (
          <MainHeading
            firstHighlight={'Enthusiastic'}
            normalText={' thinkers, creating unique designs powered by '}
            secondHighlight={'creativity'}
          />
        )}
      </div>
    </section>
  );
}
