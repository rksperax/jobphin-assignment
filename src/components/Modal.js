const Modal = ({children}) => {
    return (
        <div
	        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10"
	        id="main-modal"
        >
            <div className="relative top-20 m-auto p-8 border min-h-max max-w-xl min-w-96 shadow-lg rounded-md bg-white">
	            {children}
            </div>
        </div>
    )
}

export default Modal;