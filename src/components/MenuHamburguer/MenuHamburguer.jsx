import React from 'react';
import { MenuHamburguerContainer, MenuLines } from './styles';

function MenuHamburguer() {
    const menuLines = () => {
        for (let i = 0; i < 3; i++) {
            return <MenuLines />;
        }
    };

    return (
        <MenuHamburguerContainer>
            <label className="icon__hamburger" htmlFor="menu-hamburger__click">
                {menuLines()}
            </label>
            <input type="checkbox" id="menu-hamburger__click" />
        </MenuHamburguerContainer>
    );
}

export default MenuHamburguer;
