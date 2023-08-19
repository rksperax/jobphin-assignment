import { APPLY_TYPE, COMPANY_NAME, EXPERIENCE, INDUSTRY, JOB_TITLE, LOCATION, NEXT, PLACEHOLDERS, REMOTE_TYPE, SALARY, SAVE, TOTAL_EMPLOYEE } from "../../constants";
import { APPLY_TYPES } from "../../constants/dataConstants";
import { validateExperience, validateText } from "../../utils/validations";

export const STEP1_FIELDS = [
    {
        title: JOB_TITLE,
        isRequired: true,
        fullWidth: true,
        field: 'jobTitle',
        placeHolder: PLACEHOLDERS.JOB_TITLE,
        type: 'text',
        validate: validateText
    },
    {
        title: COMPANY_NAME,
        isRequired: true,
        fullWidth: true,
        field: 'company',
        placeHolder: PLACEHOLDERS.COMPANY,
        type: 'text',
        validate: validateText
    },
    {
        title: INDUSTRY,
        isRequired: true,
        fullWidth: true,
        field: 'industry',
        placeHolder: PLACEHOLDERS.INDUSTRY,
        type: 'text',
        validate: validateText
    },
    {
        title: LOCATION,
        isRequired: false,
        field: 'location',
        placeHolder: PLACEHOLDERS.LOCATION,
        type: 'text',
        className: 'pe-4',
        validate: validateText
    },
    {
        title: REMOTE_TYPE,
        isRequired: false,
        field: 'remoteType',
        placeHolder: PLACEHOLDERS.REMOTE_TYPE,
        type: 'text',
        className: 'ps-4',
        validate: validateText
    }
];

export const STEP2_FIELDS = [
    {
        title: EXPERIENCE,
        isRequired: false,
        field: 'experienceMinimum',
        placeHolder: PLACEHOLDERS.MINIMUM,
        type: 'number',
        className: 'pe-4',
        validate: validateExperience
    },
    {
        isRequired: false,
        field: 'experienceMaximum',
        placeHolder: PLACEHOLDERS.MAXIMUM,
        type: 'number',
        className: 'ps-4',
        validate: validateExperience
    },
    {
        title: SALARY,
        isRequired: false,
        field: 'salaryMinimum',
        placeHolder: PLACEHOLDERS.MINIMUM,
        type: 'number',
        className: 'pe-4'
    },
    {
        isRequired: false,
        field: 'salaryMaximum',
        placeHolder: PLACEHOLDERS.MAXIMUM,
        type: 'number',
        className: 'ps-4'
    },
    {
        title: TOTAL_EMPLOYEE,
        isRequired: false,
        fullWidth: true,
        field: 'totalEmployee',
        placeHolder: PLACEHOLDERS.TOTAL_EMPLOYEE,
        type: 'number',
    },
    {
        title: APPLY_TYPE,
        isRequired: true,
        fullWidth: true,
        type: 'radio',
        field: 'applyType',
        options: APPLY_TYPES
    }
]

export const getFields = (currentStep) => {
    return currentStep === 1 ? STEP1_FIELDS : STEP2_FIELDS;
}

export const getButtonText = (currentStep) => {
    return currentStep === 1 ? NEXT : SAVE;
}

export const getRequiredFields = () => {
    return STEP1_FIELDS.concat(STEP2_FIELDS).reduce((acc, e) => {
        if(e?.isRequired) {
            acc.push(e?.field);
        }
        return acc;
    }, []);
}

export const validateSubmit = (inputDetails, errors) => {
    const requiredFields = getRequiredFields();
    const errorKeys = Object.keys(errors);
    const isError = errorKeys.some(e => requiredFields.includes(e));
    if(isError) {
        return false;
    }
    const inputKeys = Object.keys(inputDetails);
    return requiredFields.every(e => inputKeys.includes(e));
}