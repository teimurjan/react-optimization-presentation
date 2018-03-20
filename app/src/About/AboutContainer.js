import Loadable from 'react-loadable';
import Loading from '../Common/Loading';

export default Loadable({
    loader: () => import('./About' /* webpackChunkName: 'about' */),
    loading: Loading
})