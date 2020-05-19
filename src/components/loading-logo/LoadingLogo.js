import React from 'react';
import $ from 'jquery';

class LoadingLogo extends React.Component {
    componentDidMount() {
        $(window).on("load", function () {
            $(".loader .inner").fadeOut(500, function () {
                $(".loader").fadeOut(750);
            });
        });
    };

    render() {
        return (
            <div className="loader">
                <div className="inner"></div>
            </div>
        )
    }
};

export default LoadingLogo;