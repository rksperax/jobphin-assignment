import Button from "./Button"
import { NO, OKAY, YES } from "../constants";

const Popup = (props) => {
    const {confirmationText, yesHandler, noHandler, isInfo} = props;
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10" id="popup-modal">
        <div className="relative top-20 m-auto p-8 border min-h-max max-w-xl min-w-96 shadow-lg rounded-md bg-white">
            <p className="mb-12">{confirmationText}</p>
            {!isInfo && <div className="flex gap-5">
                <Button 
                    buttonText = {YES}
                    onClickHandler={yesHandler}
                />
                <Button 
                    buttonText = {NO}
                    className= "text-primary font-bold py-2 px-4 rounded bg-transparent hover:bg-transparent border border-primary"
                    onClickHandler={noHandler}
                />
            </div>}
            {isInfo && 
                <Button 
                    buttonText = {OKAY}
                    onClickHandler={yesHandler}
                />
            }
        </div>
    </div>
    )
}

export default Popup;