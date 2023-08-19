import { ERROR, SUCCESS } from "../constants";

const Alert = ({children, type, closeHander}) => {
    const errorClass = "bg-error border-error text-error"
    const successClass = "bg-green-100 border-green-400 text-green-700"

    const getCss = () => {
        if(type === SUCCESS) {
            return successClass;
        }
        if(type === ERROR) {
            return errorClass;
        }
        return "";
    }
    return (
        <div className={`border ${getCss()} px-4 py-3 rounded fixed right-2 top-2 w-[50%] z-50`} role="alert">
            {children}
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg 
                    onClick={() => closeHander()}
                    className={`fill-current h-6 w-6 text-${type === "success" ? 'green' : 'red'}-500`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
        </div>
    )
}

export default Alert;