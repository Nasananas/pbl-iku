import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MaybeShowFooter = ({ children }) => {
    const location = useLocation();

    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        console.log('this is location: ', location);
        if (location.pathname === '/signin' 
        || location.pathname === '/dashboard'
        || location.pathname === '/index'
        || location.pathname === '/iku1'
        || location.pathname === '/iku2'
        || location.pathname === '/iku3'
        || location.pathname === '/rekap') {
            setShowFooter(false);
        } else {
            setShowFooter(true);
        }
    }, [location]);

    return (
        <div>{showFooter && children}</div>
    );
}

export default MaybeShowFooter;