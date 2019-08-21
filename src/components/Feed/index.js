// Core
import React, { Component } from 'react';

// Components
import {
    Loader,
    Character,
    Pagination,
    Buttons
} from '../../components';

// Styled
import Container from "./feed.view.js";

// Instruments
import { api } from '../../REST';

export default class Feed extends Component {
    state = {
        info:            {},
        characters:      [],
        isCardsFetching: false,
    };

    componentDidMount () {
        this._fetchCardsAsync();
    }

    _setCardsFetchingState = (state) => {
        this.setState({
            isCardsFetching: state,
        });
    }

    _fetchCardsAsync = async (link) => {
        this._setCardsFetchingState(true);

        const data = await api.fetchCards(link);
        const characters = data.results;
        const info = data.info;

        console.log(info);

        this.setState({
            info,
            characters,
            isCardsFetching: false,
        });

    };

    _increasePageAsync = () => {
        this._fetchCardsAsync(this.state.info.next);
    }

    _decreasePageAsync = () => {
        this._fetchCardsAsync(this.state.info.prev);
    }

    render () {
        const { isCardsFetching, characters, info } = this.state;

        const disPrev = !this.state.info.prev;
        const disNext = !this.state.info.next;

        const charactersJSX = characters.map((character) => {
            return (
                <Character
                    key = { character.id }
                    { ...character }
                />
            );
        });

        const toRender = isCardsFetching ? <Loader /> :

        <>
            <Buttons
                decreasePage = { this._decreasePageAsync }
                disNext = { disNext }
                disPrev = { disPrev }
                increasePage = { this._increasePageAsync }
            />

            <Pagination
                click = { this._fetchCardsAsync }
                info = { info }
            />

            <Container>
                {charactersJSX}
            </Container>

            <Pagination
                click = { this._fetchCardsAsync }
                info = { info }
            />

            <Buttons
                decreasePage = { this._decreasePageAsync }
                disNext = { disNext }
                disPrev = { disPrev }
                increasePage = { this._increasePageAsync }
            />
        </>;

        return (
            <>
                {toRender}
            </>
        );
    }
}
