import Loadable from 'react-loadable';
import Loading from '../Common/Loading';

export default Loadable({
    loader: () => import ('./Home' /* webpackChunkName: 'home' */),
    loading: Loading
})
