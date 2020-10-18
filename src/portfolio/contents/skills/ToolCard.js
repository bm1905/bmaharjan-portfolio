import React from 'react';

const ToolCard = ({ bordercolor, toolname, image }) => {
    return (
        <div className={`card border-${bordercolor} mb-3 col-md-3 card-dimension`} style={{ maxWidth: "9rem", margin: "5px" }}>
            <div className="card-layout">
                <div>{toolname}</div>
                <img style={{ maxWidth: "80px", padding: "5px" }} src={image} alt={image}></img>
            </div>
        </div>
    )
};

export default ToolCard;