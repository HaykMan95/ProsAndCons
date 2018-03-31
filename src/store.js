import { createStore } from 'redux';
import reducers from './redux/reducers';

export default function configureStore() {
    const store = createStore(reducers);
    return store;
}