import React from 'react';

import LoadingLogo from 'components/loading-logo/LoadingLogo';
import ImageSlide from 'components/intro-image/ImageSlide';
import MainBody from 'components/body-contents/main-body/MainBody';

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