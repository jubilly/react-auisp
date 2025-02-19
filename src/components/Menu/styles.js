import styled from 'styled-components';

const MenuContainer = styled.nav``;

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
`;

const MenuItem = styled.li`
    position: relative;
    cursor: pointer;
    padding: 10px 12px;

    &:hover {
        background-color: var(--background-color-menu-hover);
    }
`;
const MenuLink = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--color-menu-primary);
`;

export { MenuContainer, MenuList, MenuItem, MenuLink };
