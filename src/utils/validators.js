function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length > 0;
}

function validateFile(file) {
    if (!file) {
        return false;
    }
    const type = file.type;
    const extension = type.split('/')[1];
    const allowedExtensions = ['pdf', 'png', 'jpg', 'jpeg', 'webp'];

    return allowedExtensions.includes(extension);
}

function validateCategory(category) {
    return category === 'default' ? false : true;
}

function validateDate(date) {
    return date.length > 0;
}

function validateInputText(value) {
    return value.length > 0;
}

function validateForm(name, date, local, note, file, category) {
    const textsValid =
        validateInputText(name) &&
        validateInputText(local) &&
        validateInputText(note);
    const dateValid = validateDate(date);
    const categoryValid = validateCategory(category);
    const fileValid = validateFile(file);
    return textsValid && dateValid && categoryValid && fileValid;
}

export {
    validateEmail,
    validatePassword,
    validateFile,
    validateCategory,
    validateDate,
    validateInputText,
    validateForm,
};
