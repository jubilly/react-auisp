const errors = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError',
];

const messages = {
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        patternMismatch: 'Por favor, preencha um email válido.',
        tooShort: 'Por favor, preencha um email válido.',
    },
    password: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'Por favor, preencha um senha válido.',
        tooShort: 'Por favor, preencha um senha válido.',
    },
    name: {
        valueMissing: 'O campo de nome não pode estar vazio.',
        patternMismatch: 'Por favor, preencha um nome válido.',
        tooShort: 'Por favor, preencha um nome válido.',
    },
    date: {
        valueMissing: 'O campo de data não pode estar vazio.',
        typeMismatch: 'Por favor, preencha uma data válida',
    },
    local: {
        valueMissing: 'O campo de local não pode estar vazio.',
        typeMismatch: 'Por favor, preencha um local válido.',
    },
    note: {
        valueMissing: 'O campo de note não pode estar vazio.',
    },
    file: {
        valueMissing: 'O campo file não pode estar vazio.',
        customError:
            'O arquivo deve ser um PDF, DOC, DOCX, TXT, PNG, JPG ou JPEG.',
    },
    category: {
        valueMissing: 'Você deve selecionar uma categoria.',
        customError: 'Você deve selecionar uma categoria.',
    },
};

export { errors, messages };
