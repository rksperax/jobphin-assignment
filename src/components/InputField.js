const InputField = (props) => {
    return (
        <div className="flex flex-col mb-5 gap-0.5">
            <label htmlFor={props?.id} className="block text-sm font-normal h-6">
                <>
                    {props?.title}
                    {props?.isRequired && <span className="text-red-600">*</span>}
                </>
            </label>
            <input 
                id={props?.id}
                className={`${props.isError ? 'border-error' : 'border-border'} border border-solid rounded placeholder-primary text-sm p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                type={props?.type}
                onChange={props?.onChangeHandler}
                value={props?.value}
                readOnly={props?.readOnly}
                disabled={props?.disabled}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default InputField;