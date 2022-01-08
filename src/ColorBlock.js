import React from "react";

function ColorBlock(props) {
    return (
        <div className="colorBlock" style={{ 'backgroundColor': props.color }}>
            {props.color}
        </div>
    );
}

export default ColorBlock;