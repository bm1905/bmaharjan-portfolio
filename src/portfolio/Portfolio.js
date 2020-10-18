import React from 'react';

import LoadingLogo from './loading-logo/LoadingLogo';
import ImageSlide from './image-slides/ImageSlide';
import Contents from './contents/Contents';

class MyPortfolio extends React.Component {
    render() {
        return (
            <React.Fragment>
                <LoadingLogo />
                <ImageSlide />
                <Contents />
            </React.Fragment>
        )
    }
};

export default MyPortfolio;