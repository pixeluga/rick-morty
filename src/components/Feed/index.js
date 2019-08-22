// Core
import React, { Component } from 'react';

// Components
import {
    Loader,
    Character,
    Pagination,
    Buttons,
    Sorting
} from '../../components';

// Styled
import Container from "./feed.view.js";

// Instruments
import { api } from '../../REST';
import { sortByGroup } from '../../instruments';

export default class Feed extends Component {
    state = {
        info:            {},
        characters:      [],
        sortingType:     '',
        isCardsFetching: false,
        currentPage:     "?page=1",
    };

    componentDidMount () {
        if (window.location.search) {
            this._fetchCardsAsync(
                `https://rickandmortyapi.com/api/character/${window.location.search}`
            );
            this._updateCurrentPage();

        } else {
            this._fetchCardsAsync();
        }

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

        this.setState({
            info,
            characters,
            isCardsFetching: false,
        });

    };

    _updateSorting = (type) => {
        this.setState({ sortingType: type });
    };

    _updateCurrentPage = (pageString) => {
        if (pageString) {

            this.props.history.push(pageString);

            this.setState({
                currentPage: pageString,
            });
        } else {
            this.setState({
                currentPage: window.location.search,
            });
        }
    }

    _increasePageAsync = () => {
        this._updateCurrentPage(
            this.state.info.next.replace('https://rickandmortyapi.com/api/character/', '')
        );
        this._fetchCardsAsync(this.state.info.next);
    }

    _decreasePageAsync = () => {
        this._updateCurrentPage(
            this.state.info.prev.replace('https://rickandmortyapi.com/api/character/', '')
        );
        this._fetchCardsAsync(this.state.info.prev);
    }

    render () {
        const {
            isCardsFetching,
            characters,
            sortingType,
            info,
            currentPage,
        } = this.state;

        const disPrev = !this.state.info.prev;
        const disNext = !this.state.info.next;

        const charactersJSX = sortByGroup(sortingType, characters).map((character) => {
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
                page = { currentPage }
            />

            <Pagination
                click = { this._fetchCardsAsync }
                info = { info }
                page = { currentPage }
                updatePage = { this._updateCurrentPage }
            />

            <Sorting _updateSorting = { this._updateSorting } />

            <Container>
                {charactersJSX}
            </Container>
        </>;

        return (
            <>
                {toRender}
            </>
        );
    }
}
