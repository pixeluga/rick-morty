// Core
import React, { Component } from 'react';

// Styled
import PageLine from "./pagination.view.js";

export default class Pagination extends Component {
    render () {
        const { page, click, info, updatePage } = this.props;

        const maxPage = info.pages;
        const pageList = [...new Array(maxPage)].map((val, i) => this.val = i+1);

        const pagesJSX = pageList.map((num) => {
            return (
                <PageLine.Li
                    disabled = { page === `?page=${num}` }
                    key = { num }
                    onClick = {
                        () => {
                            if (page !== `?page=${num}`) {
                                click(`https://rickandmortyapi.com/api/character/?page=${num}`);
                                updatePage(`?page=${num}`);
                            }
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
