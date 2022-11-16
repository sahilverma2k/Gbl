import ClipLoader from "react-spinners/ClipLoader";
import React from "react";


const LoadingSpinner = () => {
    return  <div className="flex items-start justify-center h-screen">
                <ClipLoader
                    size={40}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
}

export default LoadingSpinner