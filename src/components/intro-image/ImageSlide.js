import React from 'react';
import { Fade } from 'react-slideshow-image';
import { Element } from 'react-scroll';

import TitleText from './TitleText';

import Slide1 from '../../images/imageslides/slide1.jpg';
import Slide2 from '../../images/imageslides/slide2.jpg';
import Slide3 from '../../images/imageslides/slide3.jpg';
import Slide4 from '../../images/imageslides/slide4.jpg';
import Slide5 from '../../images/imageslides/slide5.jpg';
import Slide6 from '../../images/imageslides/slide6.jpg';

class ImageSlide extends React.Component {

    name = "BIJAY MAHARJAN";
    title = [
        'Full-Stack Developer',
        'Grad Student',
        'LSU Shreveport'
    ];

    fadeImages = [
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5,
        Slide6
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