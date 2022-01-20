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
            <div>
             
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
        );
    }
}