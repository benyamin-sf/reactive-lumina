import { useMemo } from 'react';

import { makeToast } from '../utils';

export default function Error({ errorMsg, toastMsg = undefined, styles = {} }) {
  useMemo(() => {
    if (toastMsg) makeToast(toastMsg, 'error');
  }, [toastMsg]);

  return (
    <section className='error' style={styles}>
      <h3 className='error__heading'>{errorMsg}</h3>
    </section>
  );
}
