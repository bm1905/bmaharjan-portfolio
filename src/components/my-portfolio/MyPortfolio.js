import React from 'react';

import LoadingLogo from '../loading-logo/LoadingLogo';
import ImageSlide from '../intro-image/ImageSlide';
import MainBody from '../body-contents/main-body/MainBody';

class MyPortfolio extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <LoadingLogo /> */}
                <ImageSlide />
                <MainBody />
            </React.Fragment>
        )
    }
};

export default MyPortfolio;