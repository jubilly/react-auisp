import React from 'react';
import { MenuContainer, MenuList, MenuItem, MenuLink } from './styles';

function Menu({ items }) {
    return (
        <MenuContainer>
            <MenuList>
                {items &&
                    items.map((item, index) => {
                        return (
                            <MenuItem key={index}>
                                <MenuLink href={item.href}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </MenuLink>
                            </MenuItem>
                        );
                    })}
            </MenuList>

            <div className="menu__list menu__bottom">
                <ul></ul>
                <div className="menu__user">
                    <div className="menu__user__avatar">
                        <img
                            src="../assets/user-avatar.png"
                            alt="Foto do usuário"
                            className="user__image"
                        />
                        <p>Amanda Prates Caetano</p>
                    </div>
                </div>
            </div>
        </MenuContainer>
    );
}

export default Menu;
