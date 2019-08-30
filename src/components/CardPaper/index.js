// Core
import React, { Component } from 'react';

// Styled
import CardView from "./cardView.view.js";

export default class CardPaper extends Component {
    state = {
        top:     0,
        left:    0,
        centerX: 0,
        width:   0,
        height:  0,

        windowHeight: 0,
        windowWidth:  0,
    }

    componentDidMount = () => {
        this._updateDimensions();

        window.addEventListener('resize', this._updateDimensions);
        window.addEventListener('scroll', this._updateDimensions);

        this._savePosition();
    }

    selector = React.createRef();

    _updateDimensions = () => {
        const w = window;
        const d = document;
        const documentElement = d.documentElement;
        const body = d.querySelector('body');

        const windowHeight = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;
        const windowWidth = w.innerWidth || documentElement.clientWidth || body.clientWidth;

        this.setState({
            windowHeight,
            windowWidth,
        });
    };

    _savePosition = () => {
        const rect = this.selector.current.getBoundingClientRect();

        this.setState({
            left: rect.left,
            top:  rect.top,
        });
    }

    _click = () => {
        this.props.click();
    }

    _timer = () => {
        const timer = setTimeout(this._click(), 100);

        clearTimeout(timer);
    }

    render () {
        const { character, display } = this.props;
        const { left, top, windowWidth } = this.state;

        // If the window was scrolled by Y - window.scrollY
        const topScroll = top - window.scrollY;

        const type =  character.type ? <li><em>type:</em> {character.type}</li> : "";

        const center2Div = windowWidth > 500 ? windowWidth/2 - 250 : 0.075*windowWidth;

        // if (this.props.className === 'fade') {
        //     this._timer;
        // }

        return (
            <CardView.Wrapper
                centerX = { center2Div }
                className = { this.props.className }
                dis = { display }
                leftPos = { left }
                ref = { this.selector }
                topPos = { topScroll }
                onClick = { this._click }>
                <div>
                    <CardView.Image
                        src = { character.image }
                        title = { character.name }
                    />
                </div>
                <CardView.Title>{character.name}</CardView.Title>
                <CardView.Info>
                    <li><strong><em>status:</em> {character.status}</strong></li>
                    <li><em>species:</em> {character.species}</li>
                    <li><em>gender:</em> {character.gender}</li>
                    {type}
                    <li><br /><em>origin:</em> {character.origin.name}</li>
                    <li><em>location:</em> {character.location.name}</li>
                </CardView.Info>
            </CardView.Wrapper>
        );
    }
}
