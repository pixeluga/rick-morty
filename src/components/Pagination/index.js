// Core
import React, { Component } from 'react';

// Styled
import PageLine from "./pagination.view.js";

export default class Pagination extends Component {
    render () {
        const { click, info } = this.props;

        console.log(info);

        const maxPage = info.pages;

        const pageList = [...new Array(maxPage)].map((val, i) => this.val = i+1);

        // const clickPage = click(`https://rickandmortyapi.com/api/character/?page={}`)

        const pagesJSX = pageList.map((num) => {
            return (
                <PageLine.Li
                    key = { num }
                    onClick = {
                        () => {
                            click(`https://rickandmortyapi.com/api/character/?page=${num}`);
                        }
                    }>
                    {num}
                </PageLine.Li>
            );
        });

        return (
            <PageLine.Wrapper>
                <PageLine.Ul>
                    {pagesJSX}
                </PageLine.Ul>
            </PageLine.Wrapper>
        );
    }
}
