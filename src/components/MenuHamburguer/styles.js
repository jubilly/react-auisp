import styled from 'styled-components';

const MenuHamburguerContainer = styled.div`
	display: none;
    @media screen and (max-width: 1019px) {
        display: flex;
            height: 40px;
            position: absolute;
            margin: 20px 10px;
        }
        label {
            cursor: pointer;
        }
    }
`;

const MenuLines = styled.div`
    width: 30px;
    height: 3px;
    background-color: var(--color-text-primary);
    margin: 6px 0;
`;

export { MenuHamburguerContainer, MenuLines };
