import React from "react";

const Spinner = props => {
    return (
        <>
            <div className="spinner-border text-warning bg-warning" role="status">
                <span className="sr-only h1">Loading...</span>
            </div>
        </>
    )
}

export default Spinner;