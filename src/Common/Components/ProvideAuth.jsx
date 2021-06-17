import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import { getSession } from '../../Login/Store/LoginSelector';

const authContext = createContext();
const ProvideAuth = React.memo(({ children }) => {
    const auth = useSelector(getSession);

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
});

ProvideAuth.displayName = 'ProvideAuth';
export default ProvideAuth;