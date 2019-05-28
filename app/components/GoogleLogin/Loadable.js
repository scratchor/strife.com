/**
 *
 * Asynchronously loads the component for GoogleLogin
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
