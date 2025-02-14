import { errors, messages } from './erros';
import { validateCategory, validateFile } from './validators';

function inputErrorsHandler(field, errorField) {
    if (!field) return;
    field.setCustomValidity('');

    if (field.name === 'file') {
        validateFile(field.files[0]);
    }

    if (field.name === 'category' && !validateCategory(field.value)) {
        field.setCustomValidity('O campo categoria não pode ser o padrão.');
    }

    let message = '';

    const fieldErroMessage = errorField;
    errors.forEach((error) => {
        if (field.validity[error]) {
            if (field.validity.customError) {
                message = field.validationMessage;
                return;
            }
            message = messages[field.name][error];
        }
    });
    const isInputValid = field.checkValidity();
    if (!isInputValid) {
        fieldErroMessage.textContent = message;
    } else {
        fieldErroMessage.textContent = '';
    }
}

export default inputErrorsHandler;
