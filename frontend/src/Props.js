import React from "react";

const Props = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.name }</h1>
            {props.children}
        </div>
    )
}

export default Props