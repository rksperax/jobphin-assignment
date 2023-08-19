export const validateText = (text, isRequired) => {
    if(isRequired && text?.trim() === '') {
        return false;
    }
    const regPattern = /^[a-zA-Z-0-9 '"_.,!]+$/;
    const result = regPattern.test(text);
    return result;
}

export const validateExperience = (exp) => {
    return exp >=0 && exp <= 60;
}

export const validateEmployeeCount = (count) => {
    const regPattern = /^[0-9]*$/;
    return regPattern.test(count);
}

export const validateSalary = (salary) => {
    const regPattern = /^[0-9]*$/;
    return regPattern.test(salary);
}