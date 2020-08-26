import React from 'react';
import Collapsible from 'react-collapsible';
import { Element } from 'react-scroll';
import * as constants from '../../../../constants/Constants';

const Honors = () => {

    const honors = constants.HONORS.map((honor, index) => {
        let point =
            <li>
                <a
                    href={honor.link}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {honor.title}
                </a>
            </li>;

        return (
            honor.priority ?
                <div key={index}>
                    <br />
                    {point}
                </div>
                :
                <div key={index}>
                    {point}
                </div>
        )
    });

    const certifications = constants.CERTIFICATIONS.map((certificate, index) => {
        return (
            <li key={index}>{certificate.title}</li>
        );
    });

    return (
        <Element id="honors-destination" name="honors-destination">
            <div className="honor">
                <div className="container honor-contents">
                    <h2>HONORS &amp; CERTIFICATIONS</h2>
                    <hr className="white-line" />
                    <p>A brief overview of honors and certifications that I have achieved.</p>
                </div>
                <div className="container">
                    <Collapsible trigger="Honors">
                        <div>
                            <ul>
                                {honors}
                            </ul>
                        </div>
                    </Collapsible>

                    <Collapsible trigger="Certifications">
                        <div>
                            <ul>
                                {certifications}
                            </ul>
                        </div>
                    </Collapsible>
                </div>
            </div>
        </Element>
    )
};

export default Honors;