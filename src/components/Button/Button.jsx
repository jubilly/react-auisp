import React from 'react';
import ButtonContainer from './styles';

/*
    content - the button text
    type - submit, button, ...
    styleType - primary, secondary
    styleSize - default, small, xsmall
*/

function Button({
    type = 'button',
    content,
    styleType,
    styleSize,
    handleOnClick = () => {},
    Icon = undefined,
}) {
    const handleClick = () => {
        handleOnClick();
    };

    return (
        <ButtonContainer
            type={type}
            $styleType={styleType}
            $styleSize={styleSize}
            onClick={handleClick}
        >
            {Icon && <Icon />}
            {content}
        </ButtonContainer>
    );
}

export default Button;
