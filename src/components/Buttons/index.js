// Core
import React from 'react';

// Compomemts
import ButtonPage from "../ButtonPage";

const Buttons = (props) => {
    return (
        <div>
            <ButtonPage
                click = { props.decreasePage }
                disabled = { props.disPrev }
                text = '<< Prev'
            />
            <ButtonPage
                click = { props.increasePage }
                disabled = { props.disNext }
                text = 'Next >>'
            />
        </div>
    );
};

export default Buttons;
