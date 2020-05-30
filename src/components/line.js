import React, {useState} from 'react';

function Line(props){
    return(
        <div className = "line-box">
            <div className = "line-name-box">
                <p className = "line-name-text">{props.name}</p>
            </div>
            <div className = "line-fill-box">
                <div className = "line-fill" style={{
                    width: `${props.percentage}%`,
                    height:`25px`
                }}>
                </div>
                <p className = "percentage-text">
                    {props.percentage}%
                </p>
            </div>
        </div>
    )
}
export default Line;