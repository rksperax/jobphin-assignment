import { useEffect, useState } from "react";
import DisplayCard from "./components/displaycard";
import Popup from "../../components/Popup";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { deleteJob, resetDeleteJob } from "../JobCreation/store/jobCreationSlice";
import Alert from "../../components/Alert";
import { fetchJobs } from "./store/jobDisplaySlice";
import { DELETE_CONFIRMATION, DELETE_SUCCESS_MSG, ERROR, SUCCESS } from "../../constants";

const JobDisplay = ({setEditDetails, allJobs}) => {
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showAlert, setShowAlert] = useState();
    const dispatch = useDispatch();
    const {isJobDeleting, jobDeleteError, jobDeleteErrorMessage, jobDeleteSuccess} = useSelector(state => state.jobCreation);

    const deleteDetails = (details) => {
        setShowDeletePopup(details);
    }

    const clearAlert = () => {
        setTimeout(() => {
            setShowAlert();
        }, 3000);
    }

    useEffect(() => {
        if(jobDeleteSuccess) {
            setShowAlert({
                msg: DELETE_SUCCESS_MSG,
                type: SUCCESS
            })
            clearAlert();
            dispatch(resetDeleteJob());
            dispatch(fetchJobs());
        }
    }, [jobDeleteSuccess])

    useEffect(() => {
        if(jobDeleteError) {
            setShowAlert({
                msg: jobDeleteErrorMessage,
                type: ERROR
            })
            clearAlert();
            dispatch(resetDeleteJob());
        }
    }, [jobDeleteError])

    return (
        <div className="flex flex-wrap p-10 justify-evenly gap-y-4">
            {isJobDeleting && <Loader />}
            {showAlert?.msg && <Alert type={showAlert?.type}>{showAlert?.msg}</Alert>}
            {showDeletePopup?.id && 
                <Popup
                    confirmationText = {DELETE_CONFIRMATION}
                    yesHandler={() => {
                        dispatch(deleteJob(showDeletePopup?.id));
                        setShowDeletePopup(false);
                    }}
                    noHandler={() => setShowDeletePopup(false)}
                />
            }
            {allJobs?.map(detail => (
                <DisplayCard 
                    key={detail?.id}
                    details={detail} 
                    editClickHandler={(obj) => setEditDetails(obj)}
                    deleteClickHandler={deleteDetails}
                />
            ))}
        </div>
    )
}

export default JobDisplay;