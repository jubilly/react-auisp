import React from 'react';
import HeaderContainer from './styles';
import headerLogo from '../../assets/logo-big.png';

function Header() {
    return (
        <HeaderContainer>
            <div className="logo">
                <img src={headerLogo} />
            </div>
        </HeaderContainer>
    );
}

export default Header;
