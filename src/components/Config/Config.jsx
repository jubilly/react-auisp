import React from 'react';
import ConfigContainer from './styles';
import Form from '../Form';
import { SaveIcon } from '../icons/icons';
import { validateEmail, validateForm, validateInputText } from '../../utils';

function Config() {
    const formInputs = [
        {
            label: 'Alterar nome',
            type: 'text',
            name: 'name',
            placeholder: 'Novo nome',
            required: true,
            htmlFor: 'name',
        },
        {
            label: 'Alterar email',
            type: 'email',
            name: 'email',
            placeholder: 'Novo email',
            required: true,
            htmlFor: 'email',
        },
    ];
    const handleConfig = (event) => {
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');

        const valid = validateInputText(name) && validateEmail(email);

        if (!valid) {
            return;
        }

        alert('Configurações salvas com sucesso!');
    };
    return (
        <Form
            name="config"
            inputs={formInputs}
            action="#"
            buttonLabel="Salvar"
            buttonIcon={SaveIcon}
            handleOnSubmit={handleConfig}
        />
    );
}

export default Config;
