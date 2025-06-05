import GalleryItemModal from './GalleryItemModal';

export default function GalleryItem({ elementRef, imgData }) {
  return (
    <li className='gallery-item' ref={elementRef}>
      <img src={imgData.urls?.regular} alt={imgData.alt_description} />

      <GalleryItemModal {...imgData} />
    </li>
  );
}
