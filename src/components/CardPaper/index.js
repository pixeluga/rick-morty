// Core
import React, { Component } from 'react';

// Styled
import CardView from "./cardView.view.js";

export default class CardPaper extends Component {
    state = {
        left:    0,
        centerX: 0,
        width:   0,
        height:  0,
    }

    // componentWillMount = () => {
    //     this._updateDimensions();
    // }

    componentDidMount = () => {
        window.addEventListener('resize', this._updateDimensions());

        const rect = this.selector.current.getBoundingClientRect();
        const positionDiv = {};
        const center = {};

        positionDiv.left = rect.x;
        center.x = document.documentElement.clientWidth / 2;
        // center.y = document.documentElement.clientHeight / 2;

        this._savePosition(positionDiv, center);
    };

    selector = React.createRef();

    _updateDimensions = () => {
        const w = window;
        const d = document;
        const documentElement = d.documentElement;
        const body = d.querySelector('body');
        const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
        const height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        console.log(`${width} x ${height}`);

        this.setState({
            width,
            height,
        });
    }

    _savePosition = (pos, cent) => {
        this.setState({
            left:    pos.left,
            centerX: cent.x,
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
        const { left, centerX } = this.state;

        const type =  character.type ? <li><em>type:</em> {character.type}</li> : "";

        const center2Div = 2*centerX > 500 ? centerX - 250 : 0.15*centerX;

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
                onClick = { this._click }>
                <><CardView.X>x</CardView.X></>
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
