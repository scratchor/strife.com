/**
 *
 * Asynchronously loads the component for Google-Login
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
