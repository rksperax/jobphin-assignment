const Radio = (props) => {
    const {options, value, title, field, isRequired} = props;
    return (
        <div className="flex flex-row flex-wrap mb-5">
            <label className="block text-sm font-normal h-7 w-full">
                <>
                    {title}
                    {isRequired && <span className="text-red-600">*</span>}
                </>
            </label>
            {options?.map((option) => (
                <>
                    <input 
                        id={option}
                        key={option}
                        className="w-4 p-4 mr-1"
                        name={field}
                        type="radio"
                        checked={option === value}
                        onChange={props?.onChangeHandler}
                        value={option}
                    />
                    <label htmlFor={option} className={`text-sm pe-3 text-lightgrey`}>{option}</label>
                </>
            ))}
        </div>
    )
}

export default Radio;