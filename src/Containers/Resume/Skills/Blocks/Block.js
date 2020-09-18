import React from 'react';

const block = (props) =>{
    return(
        <div className="col-lg-4 mb-4">
            <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">{props.text}</h2>
            </div>
        </div>

    );

}
export default block;