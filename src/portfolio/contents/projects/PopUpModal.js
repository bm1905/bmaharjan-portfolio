import React from 'react';
import Popup from "reactjs-popup";

const PopUpModal = ({ buttonText, projectName, projectDescription, toolsUsed, website }) => {

    const tools = toolsUsed.map((item, index) => {
        return (
            <li key={index}>{item}</li>
        )
    });

    return (
        <Popup trigger={<button className="button"> {buttonText} </button>} modal>
            {close => (
                <div className="modal">
                    <button className='close' onClick={close} href='/#'>&times;</button>
                    <div className="header"> {projectName} </div>
                    <div className="content"> {" "}
                        <h3>Description</h3>
                        {projectDescription}
                        <h3>Tools Used</h3>
                        <ul>{tools}</ul>
                        {website &&
                            <React.Fragment>
                                <h3>Links</h3>
                                <ul>
                                    <li><a href={website} target='_blank' rel='noopener noreferrer'>Website</a></li>
                                </ul>
                            </React.Fragment>
                        }
                    </div>
                    <div className="actions">
                        <button
                            className="button"
                            onClick={() => {
                                close();
                            }}
                        >
                            Close
                    </button>
                    </div>
                </div>
            )}
        </Popup>
    )
};

export default PopUpModal;