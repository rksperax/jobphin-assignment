import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import Radio from "../../../components/Radio";
import { GO_BACK } from "../../../constants";

const StepCreation = (props) => {
    const {fields, buttonText, clickHandler, updateInput, jobInputDetails, errors, goBack, goBackHandler} = props;
    return (
        <div>
            <div className="flex flex-wrap w-full">
                {fields.map(element => (
                    <div className={element?.fullWidth ? "w-full" : `grow ${element?.className}`} key={element?.field}>
                        {element.type !== 'radio' && 
                            <InputField 
                                id={element?.field}
                                type={element?.type} 
                                title={element?.title} 
                                isError={errors[element?.field] ? true :  false}
                                placeholder={element?.placeHolder} 
                                isRequired={element?.isRequired}
                                value={jobInputDetails[element?.field] || ""}
                                onChangeHandler={(e) => updateInput(element?.field, e.target?.value, element?.validate, element?.isRequired)}
                            />
                        }
                        {element.type === 'radio' && 
                            <Radio
                                options={element?.options} 
                                title={element?.title} 
                                value={jobInputDetails[element?.field]}
                                isRequired={element?.isRequired}
                                field={element?.field} 
                                onChangeHandler={(e) => updateInput(element?.field, e.target?.value, element?.validate, element?.isRequired)}
                            />
                        }
                    </div>
                ))}
            </div>
            <div className="h-24 relative flex justify-between">
                {goBack && <Button 
                    buttonText={GO_BACK} 
                    className="absolute text-primary font-bold py-2 px-4 rounded bg-transparent hover:bg-transparent bottom-0 left-0 border border-primary" 
                    onClickHandler={() => goBackHandler()}
                />}
                <Button 
                    buttonText={buttonText} 
                    className="absolute text-fontwhite font-bold py-2 px-4 rounded bg-primary hover:bg-primary bottom-0 right-0" 
                    onClickHandler={() => clickHandler()}
                />
            </div>
        </div>
    )
}

export default StepCreation;