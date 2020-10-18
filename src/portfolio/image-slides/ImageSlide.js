import React from 'react';
import { Fade } from 'react-slideshow-image';
import { Element } from 'react-scroll';
import * as constants from '../../constants/Constants';
import { getSlideImages } from '../../helpers';
import TitleText from './TitleText';

class ImageSlide extends React.Component {

    name = constants.MY_NAME;
    title = constants.SUB_TITLES;

    fadeImages = [
        getSlideImages['slide1.jpg'],
        getSlideImages['slide2.jpg'],
        getSlideImages['slide3.jpg'],
        getSlideImages['slide4.jpg'],
        getSlideImages['slide5.jpg'],
        getSlideImages['slide6.jpg']
    ];

    fadeProperties = {
        duration: 5000,
        transitionDuration: 1000,
        infinite: true,
        indicators: false,
        arrows: false
    };

    images = this.fadeImages.map((item, index) => {
        return (
            <div className="each-fade" key={index}>
                <div className="image-container">
                    <img src={this.fadeImages[index]} alt={item} />
                </div>
            </div>
        )
    });

    render() {
        return (
            <Element id="main-destination" name="main-destination">
                <div className="slide-container">
                    <div className="overlay">
                    </div>
                    <Fade {...this.fadeProperties}>
                        {this.images}
                    </Fade>
                    <TitleText name={this.name} title={this.title} />
                </div>
            </Element>
        );
    }
}

export default ImageSlide;