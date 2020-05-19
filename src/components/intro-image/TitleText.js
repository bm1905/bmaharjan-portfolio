import React from 'react';
import Typed from 'react-typed';

const TitleText = ({ name, title }) => {
    return (
        <div className="title-message">
            <div className="heading">
                <p className="main">{name}</p>
                <div className="sub">
                    <Typed
                        strings={title}
                        typeSpeed={100}
                        backSpeed={60}
                        backDelay={1400}
                        loop
                        showCursor={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default TitleText;