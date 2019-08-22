// Core
import React from 'react';

// Styled
import Sort from "./sorting.view.js";

export default class Sorting extends React.Component {
    _handleChange = (event) => {
        this.props._updateSorting(event.target.value);
    };

    render () {

        return (
            <Sort.Conteiner>
                <Sort.Wrapper>
                    <span>Sort by: </span>
                    <Sort.Select
                        onChange = { this._handleChange }>
                        <option value = ''>---</option>
                        <option value = 'name'>Name</option>
                        <option value = 'status'>Status</option>
                        <option value = 'species'>Species</option>
                    </Sort.Select>
                </Sort.Wrapper>
            </Sort.Conteiner>
        );
    }
}
