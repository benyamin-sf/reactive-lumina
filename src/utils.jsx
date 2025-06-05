import { toast } from 'react-toastify';

export function getUserPreferredTheme() {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;

  const storedDarkMode = localStorage.getItem('darkTheme');

  if (storedDarkMode === null) {
    return prefersDarkMode;
  }

  return storedDarkMode === 'true';
}

export function makeToast(message, status, id = 1) {
  toast(message, {
    type: status === 'success' ? 'success' : 'error',
    className: 'toast',
    autoClose: 3000,
    closeButton: false,
    toastId: id,
  });
}
