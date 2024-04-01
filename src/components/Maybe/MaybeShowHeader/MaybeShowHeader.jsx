import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MaybeShowHeader = ({ children }) => {
    const location = useLocation();

    const [showHeader, setShowHeader] = useState(true); // Secara default, tampilkan header

    useEffect(() => {
        console.log('this is location: ', location);
        // Tentukan path mana yang tidak ingin menampilkan header
        if (location.pathname === '/signin' 
        || location.pathname === '/dashboard'
        || location.pathname === '/index'
        || location.pathname === '/rekap'
        || location.pathname === '/iku1'
        || location.pathname === '/iku2'
        || location.pathname === '/iku3') {
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
