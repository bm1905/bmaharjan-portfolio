/**
 * Depreciated
 * Will replace with updated code soon.
 */

import React from 'react';
import $ from 'jquery';
import trackerApi from '../../services/axios-service';

// Getting ip from ipdata
const json = (url) => {
    return fetch(url).then(res => res.json());
}

class LoadingLogo extends React.Component {

    componentDidMount() {
        $(window).on("load", function () {
            $(".loader .inner").fadeOut(500, function () {
                $(".loader").fadeOut(750);
            });
        });
        // Get the ip  of the user.
        let apiKey = 'ff6674add23b5753a916fb7b3e6f8627d0ea59d160b1492ae3903007';
        json(`https://api.ipdata.co?api-key=${apiKey}`).then(async (data) => {
            const ip = data.ip;
            const carrier = data.carrier.name;
            const city = data.city;
            const country = data.country_name;
            const latitude = data.latitude;
            const longitude = data.longitude;
            const region = data.region;
            const postal = data.postal;
            const time = data.time_zone.current_time;

            // console.log(data);

            await trackerApi.post('/users/userIp', { ip, carrier, city, country, latitude, longitude, region, postal, time })
        });
    }

    render() {
        return (
            <div className="loader">
                <div className="inner"></div>
            </div>
        )
    }
};

export default LoadingLogo;