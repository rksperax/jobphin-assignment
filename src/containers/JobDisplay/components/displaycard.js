import Button from "../../../components/Button";
import { DeleteIcon, EditIcon } from "../../../components/icons";

const DisplayCard = (props) => {
    const { details, editClickHandler, deleteClickHandler } = props;
    return (
        <div className="flex flex-col justify-between bg-white inline-block border rounded p-4 w-[47%] m-2">
            <div>
                <div className="flex gap-3.5 w-full">
                    <div className="relative bg-black border rounded text-white w-10 text-2xl opacity-50 h-10 text-center leading-10 z-0">
                        {details?.company?.toUpperCase()?.charAt(0)}
                    </div>
                    <div className="mb-5 w-full">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-semibold">{details?.jobTitle}</h2>
                            <div className="flex flex-row gap-1">
                                <EditIcon editClickHandler={() => editClickHandler(details)} />
                                <DeleteIcon deleteClickHandler={() => deleteClickHandler(details)} />
                            </div>
                        </div>
                        <h3 className="text-lg">{`${details?.company} - ${details?.industry}`}</h3>
                        <h3 className="text-lg">{`${details?.location || ''}${details?.remoteType ? `(${details?.remoteType})` : ''}`}</h3>
                    </div>
                </div>

                <div className="ps-14">
                    {details?.experienceMaximum && details?.experienceMinimum ?
                        <p className="text-base mb-2">{`Experience (${details?.experienceMinimum} - ${details?.experienceMaximum} years)`}</p>
                    :
                    details?.experienceMinimum ? 
                        <p className="text-base mb-2">{`Experience (Minimum ${details?.experienceMinimum} years)`}</p>
                    :
                    details?.experienceMaximum ? 
                        <p className="text-base mb-2">{`Experience (Maximum ${details?.experienceMaximum} years)`}</p>
                    :
                    null
                    }

                    {details?.salaryMaximum && details?.salaryMinimum ?
                        <p className="text-base mb-2">{`INR (₹) ${parseInt(details?.salaryMinimum).toLocaleString()} - ${parseInt(details?.salaryMaximum).toLocaleString()} / Month`}</p>
                    :
                    details?.salaryMinimum ? 
                        <p className="text-base mb-2">{`INR (₹) Minimum ${parseInt(details?.salaryMinimum).toLocaleString()} / Month`}</p>
                    :
                    details?.salaryMaximum ? 
                        <p className="text-base mb-2">{`INR (₹) Maximum ${parseInt(details?.salaryMaximum).toLocaleString()} / Month`}</p>
                    :
                    null}

                    {details?.totalEmployee && 
                        <p className="text-base mb-2">{`${details?.totalEmployee} employees`}</p>
                    }
                </div>
            </div>

            {details?.applyType === 'Quick apply' && <Button 
                className="w-max ms-14 justify-end bottom-2 text-fontwhite font-bold py-2 px-4 rounded bg-primary hover:bg-primary mt-4"
                buttonText={details?.applyType === 'Quick apply' ? 'Apply Now' : 'External Apply'}
            />}
            {details?.applyType !== 'Quick apply' && <Button 
                className="w-max ms-14 justify-end bottom-2 text-primary font-bold py-2 px-4 rounded bg-transparent hover:bg-transparent mt-4 border border-primary rounded"
                buttonText={'External Apply'}
            />}
        </div>
    )
}

export default DisplayCard;