import styled from 'styled-components';

const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: ${({ $styleSize }) => sizesWidth[$styleSize]};
    padding: ${({ $styleSize }) => sizesPadding[$styleSize]};
    margin: 10px 0;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    border: 1px solid ${({ $styleType }) => textColors[$styleType]};

    color: ${({ $styleType }) => textColors[$styleType]};
    background-color: ${({ $styleType }) => backgroundColors[$styleType]};
    &:hover {
        opacity: 0.9;
    }

    .button__small {
        padding: 14.5px 10px;
        width: auto;
    }

    .button__xsmall {
        width: 30%;
    }
`;

const backgroundColors = {
    primary: '#762D7B',
    secondary: '#F7FAFC',
};

const textColors = {
    primary: '#ffffff',
    secondary: '#762D7B',
};

const sizesWidth = {
    default: '100%',
    small: 'auto',
    large: '30%',
};

const sizesPadding = {
    default: '19px 10px',
    small: '14.5px 10px',
    large: '19px 10px',
};

export default ButtonContainer;
