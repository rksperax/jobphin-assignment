const Button = (props) => {
    return (
        <button 
            className={props?.className || "text-fontwhite font-bold py-2 px-4 rounded bg-primary hover:bg-primary"}
            id={props?.id}
            type="button"
            onClick={props?.onClickHandler}
            disabled={props?.disabled}
            data-te-toggle={props?.dataTeToggle}
            data-te-target={props?.dataTeTarget}
        >
            {props?.buttonText}
        </button>
    )
}

export default Button;