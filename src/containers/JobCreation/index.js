import { useEffect, useState } from "react"
import { CREATE_JOB, SAVE_SUCCESS_MSG, STEP, ERRORS_PRESENT, SUCCESS, ERROR, UPDATE_SUCCESS_MSG } from "../../constants"
import StepCreation from "./components/step";
import { getButtonText, getFields, validateSubmit } from "./helper";
import Loader from "../../components/Loader";
import Alert from "../../components/Alert";
import { useDispatch, useSelector } from "react-redux";
import { resetSaveJobs, resetUpdateJob, saveJob, updateJob } from "./store/jobCreationSlice";
import { fetchJobs } from "../JobDisplay/store/jobDisplaySlice";
import Popup from "../../components/Popup";

const JobCreation = (props) => {
    const {editDetails, setIsCreateJobClicked} = props;
    const [currentStep, setCurrentStep] = useState(1);
    const [jobInputDetails, setJobInputDetails] = useState({});
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState();
    const [isEditing, setIsEditing] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);

    const {jobsSaveError, isJobsSaving, jobsSaveErrorMessage, jobsSaveSuccess, isJobsUpdating, jobsUpdateSuccess, jobsUpdateErrorMessage, jobsUpdateError} = useSelector(state => state.jobCreation);
    const {isJobsLoading} = useSelector(state => state.jobDetails);
    const dispatch = useDispatch();

    const clearAlert = () => {
        setTimeout(() => {
            setShowAlert();
            setIsCreateJobClicked(false);
        }, 1000)
    }

    useEffect(() => {
        if(editDetails) {
            setJobInputDetails(editDetails);
            setIsEditing(true);
        }
    }, [editDetails])

    useEffect(() => {
        if(jobsSaveError) {
            setShowAlert({
                type: ERROR,
                msg: jobsSaveErrorMessage
            })
            clearAlert();
            dispatch(resetSaveJobs())
        }
    }, [jobsSaveError])

    useEffect(() => {
        if(jobsSaveSuccess) {
            setShowAlert({
                type: SUCCESS,
                msg: SAVE_SUCCESS_MSG
            })
            clearAlert();
            dispatch(resetSaveJobs())
            dispatch(fetchJobs());
        }
    }, [jobsSaveSuccess])

    useEffect(() => {
        if(jobsUpdateError) {
            setShowAlert({
                type: ERROR,
                msg: jobsUpdateErrorMessage
            })
            clearAlert();
            dispatch(resetUpdateJob())
        }
    }, [jobsUpdateError])

    useEffect(() => {
        if(jobsUpdateSuccess) {
            setShowAlert({
                type: SUCCESS,
                msg: UPDATE_SUCCESS_MSG
            })
            clearAlert();
            dispatch(resetUpdateJob())
            dispatch(fetchJobs())
        }
    }, [jobsUpdateSuccess])

    const updateInput = (field, value, validate, isRequired) => {
        if(typeof validate === 'function') {
            const isValid = validate(value, isRequired);
            if(!isValid) {
                setErrors(prev => ({
                    ...prev,
                    [field]: 'error'
                }))
            } else {
                setErrors(prev => {
                    if(prev[field])
                        delete prev[field];
                    return prev;
                })
            }
        }
        setJobInputDetails(prev => {
            return ({
                ...prev,
                [field]: value
            })
        });
    }

    const handleSubmit = () => {
        const isValid = validateSubmit(jobInputDetails, errors);
        if(!isValid) {
            setShowErrorPopup(true);
        } else {
            if(isEditing) {
                dispatch(updateJob(jobInputDetails))
            } else {
                dispatch(saveJob(jobInputDetails));
            }
        }
    }

    const clickHandler = () => {
        if(currentStep === 1) {
            setCurrentStep(2);
        } else {
            handleSubmit();
        }
    }

    return (
        <div>
            {(isJobsSaving || isJobsUpdating || isJobsLoading) && <Loader />}
            {showErrorPopup && 
                <Popup 
                    isInfo={true}
                    confirmationText={ERRORS_PRESENT} 
                    yesHandler={() => setShowErrorPopup(false)}
                />
            }
            {showAlert?.msg && <Alert type={showAlert?.type}>{showAlert?.msg}</Alert>}
            <div className="flex justify-between">
                <h2 className="text-xl mb-5">{CREATE_JOB}</h2>
                <h2 className="text-l mb-5">{`${STEP} ${currentStep}`}</h2>
            </div>
            <StepCreation 
                fields={getFields(currentStep)} 
                buttonText={getButtonText(currentStep)} 
                clickHandler={clickHandler} 
                updateInput={updateInput} 
                jobInputDetails={jobInputDetails}
                errors={errors}
                goBack={currentStep === 2}
                goBackHandler={() => setCurrentStep(1)}
            />
        </div>
    )
}

export default JobCreation;