import useInfiniteLoading from '../useInfiniteLoading';
import { useGlobalContext } from '../context';
import GalleryItem from '../components/GalleryItem';
import Error from '../components/Error';

const MAX_GET_PAGE = 20;
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_ACC_KEY;

export default function Gallery() {
  const { imagesPerPage } = useGlobalContext();

  const UNSPLASH_URL = `https://api.unsplash.com/photos?client_id=${UNSPLASH_KEY}&per_page=${imagesPerPage}&page=`;

  const { data, isError, isPending, isFetching, hasReachedLimit, reference } =
    useInfiniteLoading(UNSPLASH_URL, ['images'], {
      initialPageParam: 1,
      maxPageLoad: MAX_GET_PAGE,
    });

  if (isPending) {
    return (
      <section className='gallery'>
        <div className='loading'></div>
      </section>
    );
  }

  if (isError) {
    return (
      <Error
        errorMsg={'Somewhere, something went somehow wrong!'}
        toastMsg={'Failed to get images. Please check your connection!'}
        styles={{ marginBottom: '8rem' }}
      />
    );
  }

  return (
    <section className='gallery'>
      <ul className='container gallery-wrapper'>
        {data?.map((imgData) => (
          <GalleryItem
            key={imgData.id}
            elementRef={hasReachedLimit ? null : reference}
            imgData={imgData}
          />
        ))}
      </ul>

      {hasReachedLimit && (
        <Error
          errorMsg={`We have a session limit of ${MAX_GET_PAGE} pages. Come back later for more images...`}
        />
      )}

      {isFetching && <div className='loading'></div>}
    </section>
  );
}
