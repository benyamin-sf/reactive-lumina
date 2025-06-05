import { FaHeart, FaUser, FaDownload, FaExpand } from 'react-icons/fa6';

export default function GalleryItemModal({
  alt_description,
  alternative_slugs,
  likes,
  urls,
  links,
  user,
}) {
  return (
    <div className='gallery-item__modal'>
      <a
        className='gallery-item__lightbox-icon'
        href={urls?.full}
        target="_blank"
        rel="noopener noreferrer"
        // LightBox dataset attributes
        data-lightbox={alternative_slugs?.en}
        data-title={`Lumina - ${alt_description}`}
      >
        <FaExpand />
      </a>

      <p className='gallery-item__stats gallery-item__stats-likes'>
        <FaHeart /> {likes}
      </p>

      <p className='gallery-item__stats gallery-item__stats-artist'>
        <FaUser /> {user.name}
      </p>

      <a
        href={links?.download}
        className='gallery-item__stats gallery-item__stats-downloads'
      >
        <FaDownload />
      </a>
    </div>
  );
}
