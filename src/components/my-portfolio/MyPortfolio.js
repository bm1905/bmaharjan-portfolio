import React from 'react';

import LoadingLogo from 'src/components/loading-logo/LoadingLogo';
import ImageSlide from 'src/components/intro-image/ImageSlide';
import MainBody from 'src/components/body-contents/main-body/MainBody';

class MyPortfolio extends React.Component {
    render() {
        return (
            <React.Fragment>
                <LoadingLogo />
                <ImageSlide />
                <MainBody />
            </React.Fragment>
        )
    }
};

export default MyPortfolio;