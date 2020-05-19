import React from 'react';
import { Element } from 'react-scroll'
import { ProductCard } from 'react-ui-cards';
import PopUpModal from './PopUpModal';

const Project = () => {
    return (
        <Element id="portfolio-destination" name="portfolio-destination">
            <div className='portfolio'>
                <div className="container portfolio-contents">
                    <h2>PROJECTS &amp; WORKS</h2>
                    <hr />
                    <p>A brief overview of projects that I have been working on.</p>

                    <div className="container">
                        <div className="row portfolio-cards">
                            <div className="col-lg-4 col-md-6 portfolio-each-card">
                                <ProductCard
                                    photos={[
                                        'https://portfolio-bmaharjan.s3.amazonaws.com/apartmentMe.jpg',
                                        'https://portfolio-bmaharjan.s3.amazonaws.com/apartmentMe1.jpg'
                                    ]}
                                    price='In-Progress'
                                    productName='ApartmentMe'
                                    description={
                                        <span className="portfolio-text">
                                            CSC 680/681 Class Project - A web application used for searching / listing apartments.<br />
                                            - React.js<br />
                                            - Express.js<br />
                                            - MongoDB<br />
                                        </span>}
                                    buttonText='GitHub Repo'
                                    url='https://github.com/bm1905/apartmentme-react-redux'
                                />
                                <PopUpModal
                                    buttonText='More Info'
                                    projectName='ApartmentMe Project'
                                    projectDescription='This is the group project for class CSC 680/681. It is a web application that
                                        allows people to search for rooms/apartments within particular location. Similarly,
                                        users can also post their room/apartments for rentals.
                                        This project is still on going with some features yet to be implemented.'
                                    toolsUsed={['HTML/CSS/SASS', 'React.js', 'EXpress.js', 'MongoDB']}
                                    website='https://apartmentme.herokuapp.com/'
                                />
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-each-card">
                                <ProductCard
                                    photos={[
                                        'https://portfolio-bmaharjan.s3.amazonaws.com/portfolio.jpg',
                                        'https://portfolio-bmaharjan.s3.amazonaws.com/portfolio1.jpg'
                                    ]}
                                    // price='In-Progress'
                                    productName='Portfolio'
                                    description={
                                        <span className="portfolio-text">
                                            This is my personal Portfolio Website.<br />
                                            - React.js<br />
                                            - Express.js<br />
                                        </span>}
                                    buttonText='GitHub Repo'
                                    url='https://github.com/bm1905/bmaharjan-portfolio'
                                />
                                <PopUpModal
                                    buttonText='More Info'
                                    projectName='Personal Portfolio'
                                    projectDescription='This is my personal website which I built using React.js library. There is no backend
                                    code for this project yet except for one simple get route which was needed in order
                                    to host website to heroku.
                                    I am still working on to improve this website and will implement server side code for
                                    admin login features in future.'
                                    toolsUsed={['HTML/CSS/SASS', 'React.js', 'EXpress.js']}
                                />
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-each-card">
                                <ProductCard
                                    photos={[
                                        'https://portfolio-bmaharjan.s3.amazonaws.com/ios1.jpg',
                                        'https://portfolio-bmaharjan.s3.amazonaws.com/ios2.jpg'
                                    ]}
                                    productName='iOS Clock'
                                    description={
                                        <span className="portfolio-text">
                                            The iOS clock application with location based weather updates.<br />
                                            - XCode<br />
                                            - Swift<br />
                                        </span>}
                                    buttonText='GitHub Repo'
                                    url='https://github.com/bm1905/iOS-Clock.git'
                                />
                                <PopUpModal
                                    buttonText='More Info'
                                    projectName='iOS Clock'
                                    projectDescription={`This is the iOS application that I developed when taking 'Introduction to iOS' class.
                                    I created graphics art using Adobe Photoshop and integrated with Xcode. The application
                                    displays analog clock with time and weather of the selected location. The location can
                                    be changed in the app.
                                    Some of the layout still needs to be adjusted in the app.`}
                                    toolsUsed={['Swift']}
                                />
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-each-card">
                                <ProductCard
                                    photos={[
                                        'https://portfolio-bmaharjan.s3.amazonaws.com/default.jpg',
                                        'https://portfolio-bmaharjan.s3.amazonaws.com/portfolio.jpg'
                                    ]}
                                    productName='Diabetes Risk Calculator'
                                    description={
                                        <span className="portfolio-text">
                                            Cross platform mobile application developed at Louisiana State University - Shreveport.<br />
                                            - Xamarian<br />
                                            - .NET Framework<br />
                                        </span>}
                                    buttonText='Not Released Yet'
                                />
                                <PopUpModal
                                    buttonText='More Info'
                                    projectName='Diabetes Risk Calculator'
                                    projectDescription='This is cross platform mobile application developed in LSUS-LABi that predicts the risk of being daibetic.
                                    The application is yet to be available in App Stores.'
                                    toolsUsed={['Xamarian-Forms']}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
};

export default Project;