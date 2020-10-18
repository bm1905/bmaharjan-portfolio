import React from 'react';
import Header from './NotFoundHeader';
import Footer from '../portfolio/contents/footer/Footer';


class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="notfound-container">
                    <div className="headerText">
                        <p className="heading-text">Oh noo!!!</p>
                        <p className="subheading-text">404 Not Found</p>
                        <p className="thirdheading-text">But please do not cry. What you have in your mind may exists only in another world.</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
};
export default NotFoundPage;