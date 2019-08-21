// Core
import React from 'react';
import loading from './loading.gif';

// Styled
import Spinner from "./loader.view.js";

export default class Loader extends React.Component {
    render () {
        return (
            <Spinner.Div>
                <Spinner.Image
                    alt = 'loading'
                    src = { loading }
                />
                <Spinner.Span>Loading...</Spinner.Span>
            </Spinner.Div>
        );
    }
}
