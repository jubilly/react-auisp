import React from 'react';
import LogoContainer from './styles';

function Logo({ headerLogo }) {
    return (
        <LogoContainer>
            <img src={headerLogo} />
        </LogoContainer>
    );
}

export default Logo;
