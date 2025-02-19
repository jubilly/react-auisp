import React from 'react';
import { SidebarContainer, HeaderCollapsible } from './styles';
import { logoSmall } from '../../assets';
import Menu from '../Menu';
import Logo from '../Logo';
import {
    AdjumentsIcon,
    ContactIcon,
    ExamIcon,
    HomeIcon,
    PlansIcon,
    VacinasIcon,
} from '../icons/icons';

function Sidebar() {
    const menuItems = [
        {
            href: '#',
            icon: HomeIcon,
            title: 'Inicio',
        },
        {
            href: './exams',
            icon: ExamIcon,
            title: 'Exames',
        },
        {
            href: '#',
            icon: VacinasIcon,
            title: 'Vacinas',
        },
        {
            href: '#',
            icon: ContactIcon,
            title: 'Contatos de segurança',
        },
        {
            href: './config',
            icon: AdjumentsIcon,
            title: 'Ajustes da conta',
        },
        {
            href: '#',
            icon: PlansIcon,
            title: 'Planos',
        },
        {
            href: '#',
            icon: PlansIcon,
            title: 'Planos',
        },
    ];

    return (
        <SidebarContainer>
            <HeaderCollapsible>
                <Logo headerLogo={logoSmall} />
                <Menu items={menuItems} />
            </HeaderCollapsible>
        </SidebarContainer>
    );
}

export default Sidebar;
