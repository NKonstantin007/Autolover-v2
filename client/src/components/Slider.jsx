import React, {Component} from 'react';
import $ from 'jquery';

import {
    StyledSlider,
    Squares,
    SquareItem,
    SlideNumber
} from './styles/Slider';

class Slider extends Component{

    images = [
        { url: '/images/mersedes.jpg', alt: 'Slide 1' },
        { url: '/images/subaru.jpg', alt: 'Slide 2' },
        { url: '/images/bmw.jpg', alt: 'Slide 2' }
    ];

    state = {
        slideIndex: 0
    }

    componentDidMount() {
        this.slideEffect();
        $.fx.speeds.fast = 300;
        this.intervalId = setInterval(this.updateSlide, 8000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    slideEffect = () => {
        const slide = $('#imageSlider');
        slide.animate({opacity: 0.2}, "fast");
        slide.animate({opacity:1}, 2000);
    }

    updateSlide = () => {
        if(this.state.slideIndex === (this.images.length - 1)) {
            this.setState({
                slideIndex: 0
            });
        }
        else {
            this.setState({
                slideIndex: this.state.slideIndex + 1
            });
        }
        this.slideEffect();
    }

    changeSlide = (idx) => {
        this.setState({
            slideIndex: idx
        });
        this.slideEffect();
    }

    render() {
        const {slideIndex} = this.state; 
        return (
            <StyledSlider>
                <img id="imageSlider" src={this.images[slideIndex].url} alt={this.images[slideIndex].alt} />
                <SlideNumber>{ `${slideIndex + 1}/${this.images.length}` }</SlideNumber>
                <Squares>
                    {
                        this.images.map((image, idx) => {
                            return <SquareItem key={ idx }
                                active={ idx === slideIndex ? 'selected' : null }
                                onClick={() => this.changeSlide(idx)}
                            />
                        })
                    }
                </Squares>
            </StyledSlider>
        );
    }
}

export default Slider;