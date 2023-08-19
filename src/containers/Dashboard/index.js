import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { CREATE_JOB } from "../../constants";
import Modal from "../../components/Modal";
import JobCreation from "../JobCreation";
import JobDisplay from "../JobDisplay";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../JobDisplay/store/jobDisplaySlice";
import Loader from "../../components/Loader";

const Dashboard = () => {
    const [isCreateJobClicked, setIsCreateJobClicked] = useState(false);
    const [editDetails, setEditDetails] = useState();
    const dispatch = useDispatch();
    const {isJobsLoading, allJobs} = useSelector(state => state.jobDetails);

    const closeModalOnClickOutside = (e) => {
        if(e.target.id === 'main-modal') {
            setIsCreateJobClicked(false);
        }
    }

    useEffect(() => {
        dispatch(fetchJobs());
        document.addEventListener('click', closeModalOnClickOutside);
        return () => {
            document.removeEventListener('click', closeModalOnClickOutside)
        }
    }, [])

    return (
        <div>
            {isJobsLoading && <Loader />}
            <Button 
                buttonText={CREATE_JOB} 
                onClickHandler={() => { 
                    setEditDetails();
                    setIsCreateJobClicked(true);
                }} 
                disabled={isCreateJobClicked}
                dataTeToggle="modal"
                dataTeTarget="#mainModal"
            />
            {isCreateJobClicked && 
                <Modal><JobCreation editDetails={editDetails} setIsCreateJobClicked={setIsCreateJobClicked} /></Modal>
            }
            <JobDisplay setEditDetails={(details) => {
                setEditDetails(details);
                setIsCreateJobClicked(true);
            }} allJobs={allJobs} />
        </div>
    )
}

export default Dashboard;