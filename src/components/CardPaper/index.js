// Core
import React, { Component } from 'react';

// Styled
import CardView from "./cardView.view.js";

export default class CardPaper extends Component {
    _click = () => {
        this.props.click();
    }
    render () {
        const { character, display } = this.props;

        const type =  character.type ? <li><em>type:</em> {character.type}</li> : "";

        return (
            <CardView.Wrapper
                className = { this.props.className }
                dis = { display }
                onClick = { this._click }>
                <div><CardView.X>x</CardView.X></div>
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
