//LOCAL STORAGE OPERATIONS
import jwtDecode from 'jwt-decode';
import { notify } from 'react-notify-toast';


export const loadAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
  try {
    localStorage.setItem('authToken', authToken);
  } catch (e) {}
};

export const loadUser = () => {
  return loadAuthToken() && jwtDecode(loadAuthToken()).user;
};

export const clearAuthToken = () => {
  try {
    localStorage.removeItem('authToken');
  } catch (e) {}
};

//NORMALIZE ERROR RESPONSES FROM API
// Boilerplate code for handling errors from the API.  If the error response
// contains JSON then we return a rejected promise containing the decoded
// JSON.  If the error doesn't contain JSON then we return a rejected promise
// containing the status text.  If there is no error then we continue with
// the promise chain.

export const toastFn = (err) => {
  const toast = notify.createShowQueue();
  const toastColor = {
    background: '#505050',
    text: '#fff'
  };
  toast(err, 'custom', 2000, toastColor);
};

export const normalizeResponseErrors = res => {
  if (!res.ok) {
    if (
      res.headers.has('content-type') &&
      res.headers.get('content-type').startsWith('application/json')
    ) {
      // It's a nice JSON error returned by us, so decode it
      return res.json().then(err => {
        toastFn(err.message);
        // return Promise.reject(err);
      });
    }
    toastFn(res.statusText);
    // It's a less informative error returned by express
    return Promise.reject({
      code: res.status,
      message: res.statusText
    });
  }
  return res;
};
