import Loadable from 'react-loadable';
import Loading from '../Common/Loading';

export default Loadable({
    loader: () => import ('./Features' /* webpackChunkName: 'features' */),
    loading: Loading
})
