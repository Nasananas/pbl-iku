import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MaybeShowHeader = ({ children }) => {
    const location = useLocation();

    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        console.log('this is location: ', location);
        if (location.pathname === '/signin') {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    }, [location]);

    return (
        <div>{showHeader && children}</div>
    );
}

export default MaybeShowHeader;
