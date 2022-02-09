import { createContext, useContext } from 'react';
import AccountStore from './AccountStore';

const IStoreContext = createContext({AccountStore});

export default function StoreContext () {
    return useContext(IStoreContext);
};