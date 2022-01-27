import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
    'https://res.cloudinary.com/hieudz/image/upload/v1642575345/puzzle-name/01.jpg',
    'https://res.cloudinary.com/hieudz/image/upload/v1642575345/puzzle-name/02.jpg',
    'https://res.cloudinary.com/hieudz/image/upload/v1642575345/puzzle-name/03.jpg',
    'https://res.cloudinary.com/hieudz/image/upload/v1642575345/puzzle-name/04.jpg',
    'https://res.cloudinary.com/hieudz/image/upload/v1642575345/puzzle-name/05.jpg',
];

export default class GalleryImageBottom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <React.Fragment>
                <div className="col-12 mt-4">
                    <div className="row">
                        <div className="col-12 col-lg-6 flex-gallery">
                            <p className="title-img-gallery">
                                Watch the Gallery
                            </p>
                            <img className="img-gallery" onClick={() => this.setState({ isOpen: true })} src="https://res.cloudinary.com/hieudz/image/upload/v1642577471/puzzle-name/imggallery.png" alt="" />
                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => this.setState({ isOpen: false })}
                                    onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                    }
                                    onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                    }
                                />
                            )}

                        </div>
                        <div className="col-12 col-lg-6 flex-wearehere">
                            <p className="we-are-here">
                                We are here
                            </p>
                            <div className="ctn-icon">
                                <div className="icon-wah">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="#4167b2" className="svg-icon" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                    <a href="#" className="link1">facebook.com</a>
                                </div>
                                <div className="icon-wah">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="#ff0000" className="svg-icon" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                    </svg>
                                    <a href="#" className="link1">youtube.com</a>
                                </div>
                                <div className="icon-wah">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="#3c3c3c" className="svg-icon" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                    </svg>
                                    <a href="#" className="link1">gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>




        );
    }
}